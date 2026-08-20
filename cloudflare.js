(function () {
  const appApi = window.GESCHICHTE_APP;
  const courseId = "geschichte_bis_1500";
  const studentTokenKey = "geschichte_bis_1500_student_token";
  const teacherTokenKey = "geschichte_bis_1500_teacher_token";
  const dashboardKey = window.GESCHICHTE_DATA?.dashboardStorageKey || "geschichte_bis_1500_teacher_dashboard_v1";
  const isTeacherPage = () => document.body?.dataset?.mode === "teacher";
  let profile = null;
  let ownQuestions = [];
  let ownProgress = null;
  let teacherQuestions = [];
  let syncTimer = null;
  let syncQueue = Promise.resolve();

  function escapeHtml(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function normalizeName(value) {
    return String(value || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function token() {
    return localStorage.getItem(isTeacherPage() ? teacherTokenKey : studentTokenKey) || "";
  }

  async function api(path, options = {}, role = isTeacherPage() ? "teacher" : "student") {
    const authToken = localStorage.getItem(role === "teacher" ? teacherTokenKey : studentTokenKey) || "";
    const response = await fetch(path, {
      ...options,
      headers: {
        ...(options.body && !(options.body instanceof FormData) ? { "content-type": "application/json" } : {}),
        ...(authToken ? { authorization: `Bearer ${authToken}` } : {}),
        ...(options.headers || {})
      }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem(role === "teacher" ? teacherTokenKey : studentTokenKey);
        if (role === "teacher") {
          localStorage.removeItem("geschichte_bis_1500_teacher_access");
          localStorage.removeItem(dashboardKey);
          window.setTimeout(() => location.reload(), 0);
        }
      }
      const error = new Error(data.error || "Die Verbindung zur Datenbank ist fehlgeschlagen.");
      error.status = response.status;
      throw error;
    }
    return data;
  }

  function setFeedback(id, message, isError) {
    const node = document.getElementById(id);
    if (!node) return;
    node.textContent = message || "";
    node.style.color = isError ? "#7f1d1d" : "";
  }

  function updateCloudSaveStatus(message, state = "saved") {
    const node = document.getElementById("cloud-save-status");
    if (!node) return;
    node.textContent = message;
    node.dataset.state = state;
  }

  function currentState() {
    return appApi?.loadState ? appApi.loadState() : {};
  }

  function renderStudentPanel() {
    const panel = document.getElementById("cloud-sync-panel");
    if (!panel) return;
    if (!profile || !token()) {
      const state = currentState();
      panel.innerHTML = `
        <div class="cloud-card">
          <span class="fact-label">Persönlicher Lernstand</span>
          <strong>Registrieren oder anmelden</strong>
          <p class="sidebar-note">Dein Lernstand wird geschützt in Cloudflare gespeichert und ist für die Lehrperson sichtbar.</p>
          <label class="teacher-roster-field"><strong>Vorname</strong><input id="cloud-first-name" autocomplete="given-name" value="${escapeHtml(state.firstName || "")}" /></label>
          <label class="teacher-roster-field"><strong>Nachname</strong><input id="cloud-last-name" autocomplete="family-name" value="${escapeHtml(state.lastName || "")}" /></label>
          <label class="teacher-roster-field"><strong>Klasse</strong><input id="cloud-class-name" autocomplete="organization" value="${escapeHtml(state.className || "")}" placeholder="Klassenbezeichnung" /></label>
          <label class="teacher-roster-field"><strong>Passwort</strong><input id="cloud-password" type="password" autocomplete="current-password" placeholder="mindestens 6 Zeichen" /></label>
          <div class="teacher-access-actions">
            <button class="btn primary" type="button" data-cloud-signup>Neu registrieren</button>
            <button class="btn ghost" type="button" data-cloud-login>Anmelden</button>
          </div>
          <p id="cloud-sync-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
        </div>`;
      bindStudentAuth();
      return;
    }
    const snapshot = ownProgress?.snapshot || appApi?.buildLearnerSnapshot?.(currentState()) || {};
    const moduleScores = Array.isArray(snapshot.moduleScores) ? snapshot.moduleScores : [];
    const progressUpdatedAt = ownProgress?.updatedAt
      ? new Intl.DateTimeFormat("de-CH", { dateStyle: "medium", timeStyle: "short" }).format(new Date(ownProgress.updatedAt))
      : "noch nicht in der Cloud gespeichert";
    const comments = ownQuestions.filter((item) => item.module_id === "lernstand");
    panel.innerHTML = `
      <div class="cloud-card">
        <span class="fact-label">Cloud-Speicherung aktiv</span>
        <strong>${escapeHtml(profile.firstName)} ${escapeHtml(profile.lastName)}</strong>
        <p class="sidebar-note">${escapeHtml(profile.className)} · Lernstände werden automatisch gesichert.</p>
        <p id="cloud-save-status" class="cloud-save-status" data-state="${ownProgress?.updatedAt ? "saved" : "idle"}" aria-live="polite">${ownProgress?.updatedAt ? `Cloud-Stand bestätigt: ${escapeHtml(progressUpdatedAt)}` : "Noch kein bestätigter Cloud-Stand."}</p>
        <div class="teacher-access-actions">
          <button class="btn primary" type="button" data-cloud-sync-now>Jetzt speichern</button>
          <button class="btn ghost" type="button" data-cloud-load>Cloud-Stand laden</button>
          <button class="btn ghost" type="button" data-cloud-signout>Abmelden</button>
        </div>
        <p id="cloud-sync-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
        <details class="student-data-view" open>
          <summary>Meine gespeicherten Daten und Lernstände</summary>
          <div class="student-data-grid">
            <div><span>Name</span><strong>${escapeHtml(profile.firstName)} ${escapeHtml(profile.lastName)}</strong></div>
            <div><span>Klasse</span><strong>${escapeHtml(profile.className)}</strong></div>
            <div><span>Bestandene Module</span><strong>${Number(snapshot.passedModules || 0)} von ${Number(snapshot.totalModules || 13)}</strong></div>
            <div><span>Bearbeitete Schritte</span><strong>${Number(snapshot.interactionCompleted || 0)} von ${Number(snapshot.interactionTotal || 52)}</strong></div>
            <div><span>Gesamtfortschritt</span><strong>${Number(snapshot.overallPercent || 0)} %</strong></div>
            <div><span>Nächstes Modul</span><strong>${escapeHtml(snapshot.nextModule || "Modul 1")}</strong></div>
          </div>
          <p class="sidebar-note">Letzte Cloud-Speicherung: ${escapeHtml(progressUpdatedAt)}</p>
          ${moduleScores.length ? `<div class="student-module-scores">${moduleScores.map((item, index) => {
            const title = item.title || item.moduleTitle || `Modul ${index + 1}`;
            const score = item.score ?? item.percent ?? item.percentage ?? 0;
            return `<div><span>${escapeHtml(title)}</span><strong>${Number(score) || 0} %</strong></div>`;
          }).join("")}</div>` : ""}
          <div class="student-progress-comment">
            <label for="student-progress-comment"><strong>Kommentar zu meinem Lernstand</strong></label>
            <textarea id="student-progress-comment" maxlength="3000" placeholder="Was möchtest du zu deinen gespeicherten Daten oder deinem Lernstand festhalten?"></textarea>
            <button class="btn primary" type="button" data-submit-progress-comment>Kommentar senden</button>
            <p id="student-comment-feedback" class="teacher-gate-feedback" aria-live="polite"></p>
          </div>
          <div class="student-comment-history">
            <strong>Meine bisherigen Kommentare</strong>
            ${comments.length ? comments.map((item) => `
              <article class="teacher-question-thread">
                <div class="teacher-question-meta"><span>${escapeHtml(new Date(item.created_at).toLocaleString("de-CH"))}</span><span>${escapeHtml(item.status || "offen")}</span></div>
                <p>${escapeHtml(item.question_text)}</p>
                ${item.answer_text ? `<p class="teacher-question-answer"><strong>Antwort der Lehrperson:</strong> ${escapeHtml(item.answer_text)}</p>` : ""}
              </article>`).join("") : `<p class="sidebar-note">Du hast deinen Lernstand noch nicht kommentiert.</p>`}
          </div>
        </details>
      </div>`;
    bindStudentSession();
  }

  function authValues() {
    return {
      firstName: document.getElementById("cloud-first-name")?.value?.trim() || "",
      lastName: document.getElementById("cloud-last-name")?.value?.trim() || "",
      className: document.getElementById("cloud-class-name")?.value?.trim() || "",
      password: document.getElementById("cloud-password")?.value || ""
    };
  }

  function applyProfileToState(nextProfile) {
    const state = currentState();
    state.firstName = nextProfile.firstName;
    state.lastName = nextProfile.lastName;
    state.learnerName = `${nextProfile.firstName} ${nextProfile.lastName}`;
    state.className = nextProfile.className;
    appApi?.replaceState?.(state, { persist: true, sync: false, touch: false });
  }

  function bindStudentAuth() {
    document.querySelector("[data-cloud-signup]")?.addEventListener("click", async () => {
      try {
        setFeedback("cloud-sync-feedback", "Registrierung wird angelegt …", false);
        const result = await api("/api/student/register", { method: "POST", body: JSON.stringify(authValues()) }, "student");
        localStorage.setItem(studentTokenKey, result.token);
        profile = result.profile;
        applyProfileToState(profile);
        renderStudentPanel();
        await syncStateNow(currentState());
      } catch (error) { setFeedback("cloud-sync-feedback", error.message, true); }
    });
    document.querySelector("[data-cloud-login]")?.addEventListener("click", async () => {
      try {
        setFeedback("cloud-sync-feedback", "Anmeldung wird geprüft …", false);
        const result = await api("/api/student/login", { method: "POST", body: JSON.stringify(authValues()) }, "student");
        localStorage.setItem(studentTokenKey, result.token);
        profile = result.profile;
        applyProfileToState(profile);
        const resolution = await loadOwnCloudState(false);
        if (resolution === "local-newer") await syncStateNow(currentState());
        await loadOwnQuestions();
        renderStudentPanel();
      } catch (error) { setFeedback("cloud-sync-feedback", error.message, true); }
    });
  }

  function bindStudentSession() {
    const progressComment = document.getElementById("student-progress-comment");
    if (progressComment) {
      const state = currentState();
      progressComment.value = String(state.studentProgressCommentDraft || "");
      progressComment.addEventListener("input", () => {
        state.studentProgressCommentDraft = progressComment.value;
        appApi?.saveState?.(state);
        updateCloudSaveStatus("Kommentarentwurf wird automatisch gespeichert …", "saving");
      });
    }
    document.querySelector("[data-cloud-sync-now]")?.addEventListener("click", async () => {
      try { await syncStateNow(currentState()); renderStudentPanel(); setFeedback("cloud-sync-feedback", "Lernstand sicher in der Cloud gespeichert.", false); }
      catch (error) { setFeedback("cloud-sync-feedback", error.message, true); }
    });
    document.querySelector("[data-cloud-load]")?.addEventListener("click", async () => {
      try { await loadOwnCloudState(true); await loadOwnQuestions(); renderStudentPanel(); setFeedback("cloud-sync-feedback", "Cloud-Stand geladen.", false); }
      catch (error) { setFeedback("cloud-sync-feedback", error.message, true); }
    });
    document.querySelector("[data-submit-progress-comment]")?.addEventListener("click", async () => {
      const field = document.getElementById("student-progress-comment");
      const comment = field?.value?.trim() || "";
      if (!comment) return setFeedback("student-comment-feedback", "Bitte schreibe zuerst einen Kommentar.", true);
      try {
        setFeedback("student-comment-feedback", "Kommentar wird gespeichert …", false);
        await submitTeacherQuestion({ moduleId: "lernstand", moduleTitle: "Mein Lernstand", questionText: comment });
        const state = currentState();
        delete state.studentProgressCommentDraft;
        appApi?.saveState?.(state);
        renderStudentPanel();
        setFeedback("student-comment-feedback", "Kommentar gespeichert und für die Lehrperson sichtbar.", false);
      } catch (error) { setFeedback("student-comment-feedback", error.message, true); }
    });
    document.querySelector("[data-cloud-signout]")?.addEventListener("click", () => {
      clearTimeout(syncTimer);
      localStorage.removeItem(studentTokenKey);
      profile = null;
      ownQuestions = [];
      ownProgress = null;
      renderStudentPanel();
    });
  }

  async function restoreSession() {
    if (!token()) return;
    try {
      const result = await api("/api/student/me", {}, "student");
      profile = result.profile;
      applyProfileToState(profile);
      const resolution = await loadOwnCloudState(false);
      if (resolution === "local-newer") await syncStateNow(currentState());
      await loadOwnQuestions();
    } catch {
      profile = null;
    }
  }

  async function syncState(state) {
    if (isTeacherPage() || !localStorage.getItem(studentTokenKey) || !appApi) return;
    clearTimeout(syncTimer);
    const stateCopy = JSON.parse(JSON.stringify(state));
    syncTimer = setTimeout(() => {
      queueStateUpload(stateCopy).catch((error) => {
        console.error("Cloudflare sync failed", error);
        updateCloudSaveStatus(`Speichern fehlgeschlagen: ${error.message}`, "error");
      });
    }, 700);
  }

  async function syncStateNow(state) {
    if (isTeacherPage() || !localStorage.getItem(studentTokenKey) || !appApi) {
      throw new Error("Bitte melde dich an, bevor du den Lernstand speicherst.");
    }
    clearTimeout(syncTimer);
    const stateCopy = JSON.parse(JSON.stringify(state));
    return queueStateUpload(stateCopy);
  }

  function queueStateUpload(state) {
    syncQueue = syncQueue.catch(() => {}).then(async () => {
      const snapshot = appApi.buildLearnerSnapshot(state);
      if (!snapshot) throw new Error("Bitte trage zuerst deinen Namen ein.");
      updateCloudSaveStatus("Speichere Lernstand in der Cloud …", "saving");
      let result;
      for (let attempt = 1; attempt <= 2; attempt += 1) {
        try {
          result = await api("/api/student/progress", { method: "PUT", body: JSON.stringify({ state, snapshot }) }, "student");
          break;
        } catch (error) {
          const retryable = !error.status || error.status >= 500;
          if (!retryable || attempt === 2) throw error;
          await new Promise((resolve) => window.setTimeout(resolve, 900));
        }
      }
      ownProgress = { state, snapshot, updatedAt: result.updatedAt };
      const savedAt = new Intl.DateTimeFormat("de-CH", { dateStyle: "medium", timeStyle: "short" }).format(new Date(result.updatedAt));
      updateCloudSaveStatus(`Cloud-Stand bestätigt: ${savedAt}`, "saved");
      return result;
    });
    return syncQueue;
  }

  async function loadOwnCloudState(force) {
    if (!localStorage.getItem(studentTokenKey) || !appApi) return;
    const result = await api("/api/student/progress", {}, "student");
    ownProgress = result.progress || null;
    if (!result.progress?.state) return "no-remote";
    const local = currentState();
    const localTime = new Date(local.lastUpdatedAt || 0).getTime();
    const remoteTime = new Date(result.progress.state.lastUpdatedAt || result.progress.updatedAt || 0).getTime();
    if (force || !localTime || remoteTime > localTime) {
      appApi.replaceState(result.progress.state, { persist: true, sync: false, touch: false });
      return "remote-loaded";
    }
    return localTime > remoteTime ? "local-newer" : "equal";
  }

  async function loadOwnQuestions() {
    if (!localStorage.getItem(studentTokenKey)) return [];
    const result = await api("/api/student/questions", {}, "student");
    ownQuestions = result.questions || [];
    window.dispatchEvent(new Event("gesch-questions-updated"));
    return ownQuestions;
  }

  async function submitTeacherQuestion({ moduleId, moduleTitle, questionText }) {
    if (!localStorage.getItem(studentTokenKey)) throw new Error("Bitte registriere dich oder melde dich zuerst an.");
    await api("/api/student/questions", { method: "POST", body: JSON.stringify({ moduleId, moduleTitle, questionText }) }, "student");
    await loadOwnQuestions();
  }

  function renderTeacherPanel() {
    const panel = document.getElementById("teacher-cloud-auth");
    if (!panel) return;
    if (!localStorage.getItem(teacherTokenKey)) {
      panel.innerHTML = `<div class="summary-item"><span class="fact-label">Cloud-Dashboard</span><strong>Noch nicht verbunden</strong><p>Melde dich mit dem separaten Lehrpersonen-Passwort an.</p></div>`;
      return;
    }
    panel.innerHTML = `<div class="summary-item"><span class="fact-label">Cloudflare-Datenbank</span><strong>Lehrpersonen-Zugang aktiv</strong><p>Die Lernstände beider Klassen werden automatisch geladen.</p><div class="teacher-access-actions"><button class="btn primary" type="button" data-teacher-cloud-refresh>Neu laden</button><button class="btn ghost" type="button" data-teacher-signout>Abmelden</button></div><p id="teacher-cloud-feedback" class="teacher-gate-feedback" aria-live="polite"></p></div>`;
    document.querySelector("[data-teacher-cloud-refresh]")?.addEventListener("click", () => refreshTeacherDashboardFromCloud());
    document.querySelector("[data-teacher-signout]")?.addEventListener("click", () => {
      localStorage.removeItem(teacherTokenKey);
      localStorage.removeItem("geschichte_bis_1500_teacher_access");
      localStorage.removeItem(dashboardKey);
      location.reload();
    });
  }

  async function refreshTeacherDashboardFromCloud() {
    if (!localStorage.getItem(teacherTokenKey)) return;
    try {
      const result = await api("/api/teacher/dashboard", {}, "teacher");
      const snapshots = {};
      (result.students || []).forEach((student) => {
        const snapshot = student.progress?.snapshot || {};
        snapshots[normalizeName(`${student.firstName} ${student.lastName}`)] = {
          name: `${student.firstName} ${student.lastName}`,
          class_name: student.className,
          passedModules: snapshot.passedModules || 0,
          totalModules: snapshot.totalModules || 13,
          interactionCompleted: snapshot.interactionCompleted || 0,
          interactionTotal: snapshot.interactionTotal || 52,
          overallPercent: snapshot.overallPercent || 0,
          nextModule: snapshot.nextModule || "Modul 1",
          moduleScores: snapshot.moduleScores || [],
          updatedAt: student.progress?.updatedAt || null,
          source: "cloudflare"
        };
      });
      localStorage.setItem(dashboardKey, JSON.stringify(snapshots));
      teacherQuestions = result.questions || [];
      window.dispatchEvent(new Event("gesch-dashboard-updated"));
      window.dispatchEvent(new Event("gesch-questions-updated"));
      setFeedback("teacher-cloud-feedback", `${result.students.length} Lernstände aus ${result.classes.length} Klassen geladen.`, false);
    } catch (error) { setFeedback("teacher-cloud-feedback", error.message, true); }
  }

  function getOwnQuestionsForModule(moduleId) {
    return ownQuestions.filter((item) => item.module_id === moduleId);
  }

  function getTeacherQuestions() {
    return teacherQuestions.slice();
  }

  async function answerTeacherQuestion(questionId, answerText, status = "beantwortet") {
    await api(`/api/teacher/questions/${encodeURIComponent(questionId)}`, { method: "PATCH", body: JSON.stringify({ answerText, status }) }, "teacher");
    await refreshTeacherDashboardFromCloud();
  }

  function getStatus() {
    return { configured: true, loggedIn: Boolean(token()), teacherRole: isTeacherPage() && Boolean(token()) };
  }

  window.GESCHICHTE_FIREBASE = {
    syncState,
    syncStateNow,
    refreshTeacherDashboardFromCloud,
    getStatus,
    getOwnQuestionsForModule,
    submitTeacherQuestion,
    getTeacherQuestions,
    answerTeacherQuestion,
    loadTeacherQuestions: refreshTeacherDashboardFromCloud
  };

  document.addEventListener("DOMContentLoaded", async () => {
    if (isTeacherPage()) {
      renderTeacherPanel();
      if (localStorage.getItem(teacherTokenKey)) await refreshTeacherDashboardFromCloud();
      window.addEventListener("gesch-teacher-authenticated", async () => {
        renderTeacherPanel();
        await refreshTeacherDashboardFromCloud();
      });
    } else {
      await restoreSession();
      renderStudentPanel();
    }
  });
})();
