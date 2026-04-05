(function () {
  const config = window.SUPABASE_CONFIG || {};
  const appApi = window.GESCHICHTE_APP;
  const teacherDashboardKey = window.GESCHICHTE_DATA?.dashboardStorageKey || "geschichte_bis_1500_teacher_dashboard_v1";
  const isTeacherPage = () => document.body?.dataset?.mode === "teacher";
  const courseId = config.courseId || "geschichte_bis_1500";
  const projectLabel = config.projectLabel || "Geschichte bis 1500";

  let client = null;
  let session = null;
  let profile = null;

  function isConfigured() {
    return Boolean(config.url && config.anonKey);
  }

  function normalizeName(name) {
    return String(name || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function setPanelHtml(selector, html) {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = html;
    }
  }

  function getCurrentState() {
    return appApi?.loadState ? appApi.loadState() : {};
  }

  function renderUnconfigured() {
    const setupHtml = `
      <div class="summary-item">
        <span class="fact-label">Supabase noch nicht konfiguriert</span>
        <strong>Cloud-Sync ist vorbereitet</strong>
        <p>Trage URL und Anon-Key in <code>supabase-config.js</code> ein und führe <code>supabase-schema.sql</code> im SQL-Editor aus.</p>
      </div>
    `;
    setPanelHtml("#cloud-sync-panel", setupHtml);
    setPanelHtml("#teacher-cloud-auth", setupHtml);
  }

  function renderStudentPanel() {
    const state = getCurrentState();
    const currentName = String(state.learnerName || "");
    const currentClass = String(state.className || "");

    if (!isConfigured()) {
      renderUnconfigured();
      return;
    }

    if (!session?.user) {
      setPanelHtml(
        "#cloud-sync-panel",
        `
          <div class="cloud-card">
            <p><strong>Cloud-Sync für ${projectLabel}</strong></p>
            <p class="sidebar-note">Melde dich an, damit Lernstände geräteübergreifend gespeichert und im Lehrpersonen-Dashboard sichtbar werden.</p>
            <label class="teacher-roster-field">
              <strong>E-Mail</strong>
              <input id="cloud-email" type="email" placeholder="name@schule.ch" />
            </label>
            <label class="teacher-roster-field">
              <strong>Passwort</strong>
              <input id="cloud-password" type="password" placeholder="mindestens 8 Zeichen" />
            </label>
            <label class="teacher-roster-field">
              <strong>Name</strong>
              <input id="cloud-full-name" type="text" value="${currentName.replace(/"/g, "&quot;")}" placeholder="wie im Kurs" />
            </label>
            <label class="teacher-roster-field">
              <strong>Klasse</strong>
              <input id="cloud-class-name" type="text" value="${currentClass.replace(/"/g, "&quot;")}" placeholder="z. B. FM 24A" />
            </label>
            <div class="teacher-access-actions">
              <button class="btn primary" type="button" data-cloud-signup>Konto erstellen</button>
              <button class="btn ghost" type="button" data-cloud-login>Anmelden</button>
            </div>
            <p id="cloud-sync-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
          </div>
        `
      );
      bindStudentAuthButtons();
      return;
    }

    setPanelHtml(
      "#cloud-sync-panel",
      `
        <div class="cloud-card">
          <span class="fact-label">Cloud-Sync aktiv</span>
          <strong>${session.user.email}</strong>
          <p class="sidebar-note">${profile?.class_name ? `Klasse: ${profile.class_name}` : "Noch keine Klasse hinterlegt."}</p>
          <div class="teacher-access-actions">
            <button class="btn primary" type="button" data-cloud-sync-now>Jetzt synchronisieren</button>
            <button class="btn ghost" type="button" data-cloud-load>Cloud-Stand laden</button>
            <button class="btn ghost" type="button" data-cloud-signout>Abmelden</button>
          </div>
          <p id="cloud-sync-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
        </div>
      `
    );
    bindStudentSessionButtons();
  }

  function renderTeacherPanel() {
    if (!document.querySelector("#teacher-cloud-auth")) {
      return;
    }

    if (!isConfigured()) {
      renderUnconfigured();
      return;
    }

    if (!session?.user) {
      setPanelHtml(
        "#teacher-cloud-auth",
        `
          <div class="summary-item">
            <span class="fact-label">Cloud-Dashboard</span>
            <strong>Supabase-Anmeldung erforderlich</strong>
            <label class="teacher-roster-field">
              <strong>E-Mail</strong>
              <input id="teacher-cloud-email" type="email" placeholder="lehrperson@schule.ch" />
            </label>
            <label class="teacher-roster-field">
              <strong>Passwort</strong>
              <input id="teacher-cloud-password" type="password" placeholder="Passwort" />
            </label>
            <div class="teacher-access-actions">
              <button class="btn primary" type="button" data-teacher-cloud-login>Cloud-Anmeldung</button>
            </div>
            <p id="teacher-cloud-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
          </div>
        `
      );
      bindTeacherAuthButtons();
      return;
    }

    const teacherRole = profile?.role === "teacher";
    setPanelHtml(
      "#teacher-cloud-auth",
      `
        <div class="summary-item">
          <span class="fact-label">Cloud-Konto</span>
          <strong>${session.user.email}</strong>
          <p>${teacherRole ? "Lehrpersonenrolle erkannt. Dashboard kann Cloud-Daten laden." : "Dieses Konto ist noch nicht als teacher markiert."}</p>
          <div class="teacher-access-actions">
            <button class="btn primary" type="button" data-teacher-cloud-refresh ${teacherRole ? "" : "disabled"}>Cloud-Daten laden</button>
            <button class="btn ghost" type="button" data-cloud-signout>Abmelden</button>
          </div>
          <p id="teacher-cloud-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
        </div>
      `
    );
    bindTeacherSessionButtons();
  }

  function setFeedback(id, message, isError) {
    const node = document.getElementById(id);
    if (!node) return;
    node.textContent = message || "";
    node.style.color = isError ? "#7f1d1d" : "";
  }

  async function refreshProfile(state) {
    if (!client || !session?.user) {
      profile = null;
      return null;
    }

    const fullName = String(state?.learnerName || "").trim();
    const className = String(state?.className || document.getElementById("cloud-class-name")?.value || "").trim();

    const upsertPayload = {
      id: session.user.id,
      email: session.user.email || null,
      full_name: fullName || session.user.user_metadata?.full_name || null,
      class_name: className || session.user.user_metadata?.class_name || null
    };

    const { error: upsertError } = await client
      .from("profiles")
      .upsert(upsertPayload, { onConflict: "id" });

    if (upsertError) {
      throw upsertError;
    }

    const { data, error } = await client
      .from("profiles")
      .select("id, email, full_name, class_name, role")
      .eq("id", session.user.id)
      .single();

    if (error) {
      throw error;
    }

    profile = data;
    return profile;
  }

  async function signUpStudent() {
    const email = document.getElementById("cloud-email")?.value?.trim() || "";
    const password = document.getElementById("cloud-password")?.value || "";
    const fullName = document.getElementById("cloud-full-name")?.value?.trim() || "";
    const className = document.getElementById("cloud-class-name")?.value?.trim() || "";

    if (!email || !password || !fullName) {
      setFeedback("cloud-sync-feedback", "Bitte E-Mail, Passwort und Namen eintragen.", true);
      return;
    }

    if (appApi) {
      const nextState = {
        ...getCurrentState(),
        learnerName: fullName,
        className: className
      };
      appApi.saveState(nextState);
    }

    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error } = await client.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectTo,
        data: {
          full_name: fullName,
          class_name: className
        }
      }
    });

    if (error) {
      setFeedback("cloud-sync-feedback", error.message, true);
      return;
    }

    setFeedback("cloud-sync-feedback", "Konto erstellt. Falls E-Mail-Bestätigung aktiv ist, bitte zuerst den Bestätigungslink öffnen.", false);
  }

  async function signInWithPassword(email, password, feedbackId) {
    if (!email || !password) {
      setFeedback(feedbackId, "Bitte E-Mail und Passwort eintragen.", true);
      return false;
    }
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) {
      setFeedback(feedbackId, error.message, true);
      return false;
    }
    setFeedback(feedbackId, "Anmeldung erfolgreich.", false);
    return true;
  }

  async function signOut() {
    await client.auth.signOut();
  }

  async function loadOwnCloudState(force = false) {
    if (!client || !session?.user || !appApi) {
      return;
    }

    const { data, error } = await client
      .from("learner_progress")
      .select("state_json, updated_at")
      .eq("user_id", session.user.id)
      .eq("course_id", courseId)
      .maybeSingle();

    if (error || !data?.state_json) {
      return;
    }

    const localState = appApi.loadState();
    const localTime = new Date(localState.lastUpdatedAt || 0).getTime();
    const remoteTime = new Date(data.updated_at || 0).getTime();

    if (force || !localTime || remoteTime > localTime) {
      appApi.replaceState(data.state_json, { persist: true });
    }
  }

  async function syncState(state) {
    if (!client || !session?.user || !appApi || isTeacherPage()) {
      return;
    }

    await refreshProfile(state);
    const snapshot = appApi.buildLearnerSnapshot(state);
    if (!snapshot) {
      return;
    }

    const payload = {
      user_id: session.user.id,
      course_id: courseId,
      learner_name: snapshot.name,
      class_name: profile?.class_name || null,
      passed_modules: snapshot.passedModules,
      total_modules: snapshot.totalModules,
      interaction_completed: snapshot.interactionCompleted,
      interaction_total: snapshot.interactionTotal,
      overall_percent: snapshot.overallPercent,
      next_module: snapshot.nextModule,
      module_scores: snapshot.moduleScores,
      state_json: state,
      updated_at: new Date().toISOString()
    };

    const { error } = await client
      .from("learner_progress")
      .upsert(payload, { onConflict: "user_id,course_id" });

    if (error) {
      throw error;
    }
  }

  async function refreshTeacherDashboardFromCloud() {
    if (!client || !session?.user || profile?.role !== "teacher") {
      return;
    }

    const { data, error } = await client
      .from("learner_progress")
      .select("learner_name, class_name, passed_modules, total_modules, interaction_completed, interaction_total, overall_percent, next_module, module_scores, updated_at")
      .eq("course_id", courseId)
      .order("updated_at", { ascending: false });

    if (error) {
      setFeedback("teacher-cloud-feedback", error.message, true);
      return;
    }

    const snapshots = {};
    (data || []).forEach((row) => {
      snapshots[normalizeName(row.learner_name)] = {
        name: row.learner_name,
        class_name: row.class_name,
        passedModules: row.passed_modules,
        totalModules: row.total_modules,
        interactionCompleted: row.interaction_completed,
        interactionTotal: row.interaction_total,
        overallPercent: row.overall_percent,
        nextModule: row.next_module,
        moduleScores: row.module_scores || [],
        updatedAt: row.updated_at,
        source: "supabase"
      };
    });

    localStorage.setItem(teacherDashboardKey, JSON.stringify(snapshots));
    window.dispatchEvent(new Event("gesch-dashboard-updated"));
    setFeedback("teacher-cloud-feedback", `Cloud-Daten geladen: ${data?.length || 0} Lernstände.`, false);
  }

  function bindStudentAuthButtons() {
    document.querySelector("[data-cloud-signup]")?.addEventListener("click", () => {
      signUpStudent().catch((error) => setFeedback("cloud-sync-feedback", error.message, true));
    });
    document.querySelector("[data-cloud-login]")?.addEventListener("click", () => {
      const email = document.getElementById("cloud-email")?.value?.trim() || "";
      const password = document.getElementById("cloud-password")?.value || "";
      signInWithPassword(email, password, "cloud-sync-feedback").catch((error) => setFeedback("cloud-sync-feedback", error.message, true));
    });
  }

  function bindStudentSessionButtons() {
    document.querySelector("[data-cloud-sync-now]")?.addEventListener("click", async () => {
      try {
        await syncState(getCurrentState());
        setFeedback("cloud-sync-feedback", "Lernstand in Supabase gespeichert.", false);
      } catch (error) {
        setFeedback("cloud-sync-feedback", error.message, true);
      }
    });
    document.querySelector("[data-cloud-load]")?.addEventListener("click", async () => {
      try {
        await loadOwnCloudState(true);
        setFeedback("cloud-sync-feedback", "Cloud-Stand geladen.", false);
      } catch (error) {
        setFeedback("cloud-sync-feedback", error.message, true);
      }
    });
    document.querySelector("[data-cloud-signout]")?.addEventListener("click", () => {
      signOut().catch((error) => setFeedback("cloud-sync-feedback", error.message, true));
    });
  }

  function bindTeacherAuthButtons() {
    document.querySelector("[data-teacher-cloud-login]")?.addEventListener("click", () => {
      const email = document.getElementById("teacher-cloud-email")?.value?.trim() || "";
      const password = document.getElementById("teacher-cloud-password")?.value || "";
      signInWithPassword(email, password, "teacher-cloud-feedback").catch((error) => setFeedback("teacher-cloud-feedback", error.message, true));
    });
  }

  function bindTeacherSessionButtons() {
    document.querySelector("[data-teacher-cloud-refresh]")?.addEventListener("click", () => {
      refreshTeacherDashboardFromCloud().catch((error) => setFeedback("teacher-cloud-feedback", error.message, true));
    });
    document.querySelector("[data-cloud-signout]")?.addEventListener("click", () => {
      signOut().catch((error) => setFeedback("teacher-cloud-feedback", error.message, true));
    });
  }

  function renderPanels() {
    renderStudentPanel();
    renderTeacherPanel();
  }

  async function handleSession(nextSession) {
    session = nextSession || null;
    if (!session?.user) {
      profile = null;
      renderPanels();
      return;
    }

    try {
      await refreshProfile(getCurrentState());
      if (!isTeacherPage()) {
        await loadOwnCloudState(false);
      } else if (profile?.role === "teacher") {
        await refreshTeacherDashboardFromCloud();
      }
    } catch (error) {
      console.error(error);
    }

    renderPanels();
  }

  async function init() {
    if (!isConfigured()) {
      renderPanels();
      return;
    }

    if (!window.supabase?.createClient) {
      renderUnconfigured();
      return;
    }

    client = window.supabase.createClient(config.url, config.anonKey);
    const { data } = await client.auth.getSession();
    await handleSession(data.session);
    client.auth.onAuthStateChange(async (_event, nextSession) => {
      await handleSession(nextSession);
    });
  }

  window.GESCHICHTE_SUPABASE = {
    syncState,
    refreshTeacherDashboardFromCloud
  };

  document.addEventListener("DOMContentLoaded", () => {
    init().catch((error) => {
      console.error(error);
      renderUnconfigured();
    });
  });
})();
