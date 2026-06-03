(function () {
  const config = window.FIREBASE_CONFIG || {};
  const appApi = window.GESCHICHTE_APP;
  const teacherDashboardKey = window.GESCHICHTE_DATA?.dashboardStorageKey || "geschichte_bis_1500_teacher_dashboard_v1";
  const isTeacherPage = () => document.body?.dataset?.mode === "teacher";
  const courseId = config.courseId || "geschichte_bis_1500";
  const projectLabel = config.projectLabel || "Geschichte bis 1500";
  const firebaseOptions = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId
  };

  let auth = null;
  let db = null;
  let session = null;
  let profile = null;
  let ownQuestions = [];
  let teacherQuestions = [];

  function isConfigured() {
    return Boolean(config.apiKey && config.projectId && !String(config.apiKey).includes("YOUR_"));
  }

  function normalizeName(name) {
    return String(name || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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

  function dispatchQuestionsUpdated() {
    window.dispatchEvent(new Event("gesch-questions-updated"));
  }

  function getStatus() {
    return {
      configured: isConfigured(),
      loggedIn: Boolean(session?.uid),
      teacherRole: profile?.role === "teacher"
    };
  }

  function renderUnconfigured() {
    const setupHtml = `
      <div class="summary-item">
        <span class="fact-label">Firebase noch nicht konfiguriert</span>
        <strong>Cloud-Sync ist vorbereitet</strong>
        <p>Trage die Web-App-Konfiguration in <code>firebase-config.js</code> ein und veröffentliche die Regeln aus <code>firestore.rules</code>.</p>
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

    if (!session) {
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
              <input id="cloud-full-name" type="text" value="${escapeHtml(currentName)}" placeholder="wie im Kurs" />
            </label>
            <label class="teacher-roster-field">
              <strong>Klasse</strong>
              <input id="cloud-class-name" type="text" value="${escapeHtml(currentClass)}" placeholder="z. B. FM 24A" />
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
          <strong>${escapeHtml(session.email)}</strong>
          <p class="sidebar-note">${profile?.class_name ? `Klasse: ${escapeHtml(profile.class_name)}` : "Noch keine Klasse hinterlegt."}</p>
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

    if (!session) {
      setPanelHtml(
        "#teacher-cloud-auth",
        `
          <div class="summary-item">
            <span class="fact-label">Cloud-Dashboard</span>
            <strong>Firebase-Anmeldung erforderlich</strong>
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
          <strong>${escapeHtml(session.email)}</strong>
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
    if (!db || !session) {
      profile = null;
      return null;
    }

    const fullName = String(state?.learnerName || "").trim();
    const className = String(state?.className || document.getElementById("cloud-class-name")?.value || "").trim();
    const profileRef = db.collection("profiles").doc(session.uid);
    const existing = await profileRef.get();
    const existingData = existing.exists ? existing.data() : {};
    const payload = {
      id: session.uid,
      email: session.email || "",
      full_name: fullName || session.displayName || existingData.full_name || null,
      class_name: className || existingData.class_name || null,
      role: existingData.role || "student",
      updated_at: new Date().toISOString()
    };

    if (!existing.exists) {
      payload.created_at = new Date().toISOString();
    }

    await profileRef.set(payload, { merge: true });
    const nextProfile = await profileRef.get();
    profile = nextProfile.data() || payload;
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

    const credential = await auth.createUserWithEmailAndPassword(email, password);
    await credential.user.updateProfile({ displayName: fullName });
    await refreshProfile({ ...getCurrentState(), learnerName: fullName, className });
    setFeedback("cloud-sync-feedback", "Konto erstellt und angemeldet.", false);
  }

  async function signInWithPassword(email, password, feedbackId) {
    if (!email || !password) {
      setFeedback(feedbackId, "Bitte E-Mail und Passwort eintragen.", true);
      return false;
    }
    await auth.signInWithEmailAndPassword(email, password);
    setFeedback(feedbackId, "Anmeldung erfolgreich.", false);
    return true;
  }

  async function signOut() {
    await auth.signOut();
  }

  function progressDocId(userId) {
    return `${userId}_${courseId}`;
  }

  async function loadOwnCloudState(force = false) {
    if (!db || !session || !appApi) {
      return;
    }

    const doc = await db.collection("learner_progress").doc(progressDocId(session.uid)).get();
    const data = doc.exists ? doc.data() : null;
    if (!data?.state_json) {
      return;
    }

    const localState = appApi.loadState();
    const localTime = new Date(localState.lastUpdatedAt || 0).getTime();
    const remoteTime = new Date(data.updated_at || 0).getTime();

    if (force || !localTime || remoteTime > localTime) {
      appApi.replaceState(data.state_json, { persist: true });
    }
  }

  async function loadOwnQuestions() {
    if (!db || !session) {
      ownQuestions = [];
      dispatchQuestionsUpdated();
      return [];
    }

    const snapshot = await db
      .collection("student_questions")
      .where("user_id", "==", session.uid)
      .where("course_id", "==", courseId)
      .get();

    ownQuestions = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
    dispatchQuestionsUpdated();
    return ownQuestions;
  }

  function getOwnQuestionsForModule(moduleId) {
    return ownQuestions.filter((item) => item.module_id === moduleId);
  }

  async function syncState(state) {
    if (!db || !session || !appApi || isTeacherPage()) {
      return;
    }

    await refreshProfile(state);
    const snapshot = appApi.buildLearnerSnapshot(state);
    if (!snapshot) {
      return;
    }

    const payload = {
      user_id: session.uid,
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

    await db.collection("learner_progress").doc(progressDocId(session.uid)).set(payload, { merge: true });
  }

  async function submitTeacherQuestion({ moduleId, moduleTitle, questionText }) {
    if (!db || !session) {
      throw new Error("Bitte melde dich zuerst im Cloud-Sync an.");
    }

    const trimmedQuestion = String(questionText || "").trim();
    if (!trimmedQuestion) {
      throw new Error("Bitte formuliere zuerst eine konkrete Frage.");
    }

    const state = getCurrentState();
    await refreshProfile(state);

    const payload = {
      user_id: session.uid,
      course_id: courseId,
      learner_name: profile?.full_name || state.learnerName || session.email || "Unbekannt",
      class_name: profile?.class_name || state.className || null,
      module_id: moduleId,
      module_title: moduleTitle,
      question_text: trimmedQuestion,
      status: "offen",
      answer_text: null,
      teacher_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      answered_at: null
    };

    await db.collection("student_questions").add(payload);
    await loadOwnQuestions();
    return true;
  }

  async function loadTeacherQuestions() {
    if (!db || !session || profile?.role !== "teacher") {
      teacherQuestions = [];
      dispatchQuestionsUpdated();
      return [];
    }

    const snapshot = await db
      .collection("student_questions")
      .where("course_id", "==", courseId)
      .get();

    teacherQuestions = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => String(b.created_at || "").localeCompare(String(a.created_at || "")));
    dispatchQuestionsUpdated();
    return teacherQuestions;
  }

  function getTeacherQuestions() {
    return teacherQuestions.slice();
  }

  async function answerTeacherQuestion(questionId, answerText, status = "beantwortet") {
    if (!db || !session || profile?.role !== "teacher") {
      throw new Error("Nur Lehrpersonen können Antworten speichern.");
    }

    const trimmedAnswer = String(answerText || "").trim();
    if (!trimmedAnswer) {
      throw new Error("Bitte trage zuerst eine Antwort ein.");
    }

    const nextStatus = ["offen", "in_bearbeitung", "beantwortet"].includes(status) ? status : "beantwortet";
    const now = new Date().toISOString();
    const payload = {
      answer_text: trimmedAnswer,
      status: nextStatus,
      teacher_id: session.uid,
      updated_at: now,
      answered_at: nextStatus === "beantwortet" ? now : null
    };

    await db.collection("student_questions").doc(questionId).set(payload, { merge: true });
    await loadTeacherQuestions();
    return true;
  }

  async function refreshTeacherDashboardFromCloud() {
    if (!db || !session || profile?.role !== "teacher") {
      return;
    }

    const snapshot = await db
      .collection("learner_progress")
      .where("course_id", "==", courseId)
      .get();

    const snapshots = {};
    snapshot.docs
      .map((doc) => doc.data())
      .sort((a, b) => String(b.updated_at || "").localeCompare(String(a.updated_at || "")))
      .forEach((row) => {
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
          source: "firebase"
        };
      });

    localStorage.setItem(teacherDashboardKey, JSON.stringify(snapshots));
    window.dispatchEvent(new Event("gesch-dashboard-updated"));
    await loadTeacherQuestions();
    setFeedback("teacher-cloud-feedback", `Cloud-Daten geladen: ${snapshot.docs.length} Lernstände.`, false);
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
        setFeedback("cloud-sync-feedback", "Lernstand in Firebase gespeichert.", false);
      } catch (error) {
        setFeedback("cloud-sync-feedback", error.message, true);
      }
    });
    document.querySelector("[data-cloud-load]")?.addEventListener("click", async () => {
      try {
        await loadOwnCloudState(true);
        await loadOwnQuestions();
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
    if (!session) {
      profile = null;
      ownQuestions = [];
      teacherQuestions = [];
      renderPanels();
      dispatchQuestionsUpdated();
      if (appApi?.renderApp) {
        appApi.renderApp(getCurrentState());
      }
      return;
    }

    try {
      await refreshProfile(getCurrentState());
      if (!isTeacherPage()) {
        await loadOwnCloudState(false);
        await loadOwnQuestions();
      } else if (profile?.role === "teacher") {
        await refreshTeacherDashboardFromCloud();
      } else {
        teacherQuestions = [];
        dispatchQuestionsUpdated();
      }
    } catch (error) {
      console.error(error);
    }

    renderPanels();
    if (appApi?.renderApp) {
      appApi.renderApp(getCurrentState());
    }
  }

  async function init() {
    if (!isConfigured()) {
      renderPanels();
      return;
    }

    if (!window.firebase?.initializeApp) {
      renderUnconfigured();
      return;
    }

    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(firebaseOptions);
    }
    auth = window.firebase.auth();
    db = window.firebase.firestore();
    await auth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
    auth.onAuthStateChanged((nextUser) => {
      handleSession(nextUser).catch((error) => {
        console.error(error);
        renderPanels();
      });
    });
  }

  window.GESCHICHTE_FIREBASE = {
    syncState,
    refreshTeacherDashboardFromCloud,
    getStatus,
    getOwnQuestionsForModule,
    submitTeacherQuestion,
    getTeacherQuestions,
    answerTeacherQuestion,
    loadTeacherQuestions
  };

  document.addEventListener("DOMContentLoaded", () => {
    init().catch((error) => {
      console.error(error);
      renderUnconfigured();
    });
  });
})();
