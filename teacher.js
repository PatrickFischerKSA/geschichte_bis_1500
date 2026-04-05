const TEACHER_PASSWORD = "lehrer_1500";
const TEACHER_ACCESS_KEY = "geschichte_bis_1500_teacher_access";
const TEACHER_ROSTER_KEY = "geschichte_bis_1500_teacher_roster_v1";
const TEACHER_PREVIEW_STORAGE_KEY = "geschichte_bis_1500-teacher-preview-v1";

function loadTeacherRoster() {
  try {
    return JSON.parse(localStorage.getItem(TEACHER_ROSTER_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveTeacherRoster(names) {
  localStorage.setItem(TEACHER_ROSTER_KEY, JSON.stringify(names));
}

function loadTeacherSnapshots() {
  const key = window.GESCHICHTE_DATA?.dashboardStorageKey || "geschichte_bis_1500_teacher_dashboard_v1";
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

function normalizeTeacherName(name) {
  return String(name || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatTeacherDate(isoString) {
  if (!isoString) {
    return "kein lokaler Stand";
  }

  const value = new Date(isoString);
  if (Number.isNaN(value.getTime())) {
    return "kein lokaler Stand";
  }

  return value.toLocaleString("de-CH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getTeacherStatus(entry) {
  if (!entry.snapshot) {
    return { label: "kein lokaler Stand", className: "locked" };
  }

  if (entry.snapshot.passedModules >= entry.snapshot.totalModules) {
    return { label: "abgeschlossen", className: "ready" };
  }

  return { label: "aktiv", className: "open" };
}

function collectTeacherLearners() {
  const roster = loadTeacherRoster();
  const snapshots = loadTeacherSnapshots();
  const entries = new Map();

  roster.forEach((name) => {
    const normalized = normalizeTeacherName(name);
    if (!normalized) {
      return;
    }
    entries.set(normalized, {
      name,
      enrolled: true,
      snapshot: snapshots[normalized] || null
    });
  });

  Object.values(snapshots).forEach((snapshot) => {
    const normalized = normalizeTeacherName(snapshot.name);
    if (!normalized) {
      return;
    }
    if (entries.has(normalized)) {
      entries.get(normalized).snapshot = snapshot;
      return;
    }
    entries.set(normalized, {
      name: snapshot.name,
      enrolled: false,
      snapshot
    });
  });

  return Array.from(entries.values()).sort((a, b) => a.name.localeCompare(b.name, "de-CH"));
}

function renderTeacherDashboard() {
  const rosterInput = document.getElementById("teacher-roster-input");
  const summary = document.getElementById("teacher-dashboard-summary");
  const table = document.getElementById("teacher-dashboard-table");

  if (!rosterInput || !summary || !table) {
    return;
  }

  const roster = loadTeacherRoster();
  const learners = collectTeacherLearners();

  if (document.activeElement !== rosterInput) {
    rosterInput.value = roster.join("\n");
  }

  const withData = learners.filter((entry) => entry.snapshot);
  const completed = withData.filter(
    (entry) => entry.snapshot.passedModules >= entry.snapshot.totalModules
  ).length;
  const missing = learners.filter((entry) => !entry.snapshot).length;

  summary.innerHTML = `
    <div class="summary-item">
      <span class="fact-label">Eingeschrieben</span>
      <strong>${roster.length || learners.length}</strong>
      <p>Schüler*innen in der hinterlegten Klassenliste</p>
    </div>
    <div class="summary-item">
      <span class="fact-label">Mit lokalem Stand</span>
      <strong>${withData.length}</strong>
      <p>auf diesem Gerät bereits erfasste Lernverläufe</p>
    </div>
    <div class="summary-item">
      <span class="fact-label">Abgeschlossen</span>
      <strong>${completed}</strong>
      <p>vollständig bestandene Lernumgebungen</p>
    </div>
    <div class="summary-item">
      <span class="fact-label">Ohne Datensatz</span>
      <strong>${missing}</strong>
      <p>eingeschrieben, aber lokal noch ohne gespeicherten Stand</p>
    </div>
  `;

  if (!learners.length) {
    table.innerHTML = `
      <div class="summary-item">
        <span class="fact-label">Noch keine Klassenliste</span>
        <p>Trage oben Namen ein oder warte auf erste synchronisierte Lernstände.</p>
      </div>
    `;
    return;
  }

  table.innerHTML = `
    <div class="matrix-table dashboard-table">
      <div class="matrix-row matrix-head dashboard-row">
        <div>Lernende Person</div>
        <div>Status</div>
        <div>Bestandene Module</div>
        <div>Gesamtfortschritt</div>
        <div>Nächstes offenes Modul</div>
        <div>Letzte Aktivität</div>
      </div>
      ${learners
        .map((entry) => {
          const status = getTeacherStatus(entry);
          const snapshot = entry.snapshot;
          const moduleScoreMarkup = snapshot?.moduleScores?.length
            ? `<div class="teacher-score-pills">${snapshot.moduleScores
                .filter((item) => item.score || item.passed)
                .slice(0, 6)
                .map(
                  (item) =>
                    `<span class="status-badge ${item.passed ? "ready" : item.score ? "open" : "locked"}">M${item.number} ${item.score ? `${Math.round(item.score)}%` : item.passed ? "best." : "0%"}</span>`
                )
                .join("")}</div>`
            : `<span class="teacher-muted">noch kein lokaler Stand</span>`;

          return `
            <div class="matrix-row dashboard-row">
              <div>
                <strong>${entry.name}</strong>
                <p class="teacher-muted">${entry.enrolled ? "in Klassenliste" : "nur lokal erfasst"}</p>
              </div>
              <div><span class="status-badge ${status.className}">${status.label}</span></div>
              <div>
                ${
                  snapshot
                    ? `<strong>${snapshot.passedModules} / ${snapshot.totalModules}</strong>${moduleScoreMarkup}`
                    : `<span class="teacher-muted">0 / ${window.GESCHICHTE_DATA?.modules?.length || 12}</span>`
                }
              </div>
              <div>
                ${
                  snapshot
                    ? `<strong>${snapshot.overallPercent}%</strong><p class="teacher-muted">${snapshot.interactionCompleted} von ${snapshot.interactionTotal} Bausteinen</p>`
                    : `<span class="teacher-muted">kein Verlauf</span>`
                }
              </div>
              <div>${snapshot ? snapshot.nextModule : `<span class="teacher-muted">noch kein Eintrag</span>`}</div>
              <div>${formatTeacherDate(snapshot?.updatedAt)}</div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function setTeacherFeedback(message, isError = false) {
  const feedback = document.getElementById("teacher-gate-feedback");
  if (!feedback) {
    return;
  }
  feedback.textContent = message || "";
  feedback.style.color = isError ? "#7f1d1d" : "";
}

function setTeacherAuthorized(value) {
  document.body.dataset.teacherAuthorized = value ? "true" : "false";
}

function renderTeacherAccess(isUnlocked) {
  const gate = document.getElementById("teacher-gate");
  const shell = document.getElementById("teacher-shell");

  if (!gate || !shell) {
    return;
  }

  gate.hidden = isUnlocked;
  shell.hidden = !isUnlocked;

  if (isUnlocked) {
    setTeacherAuthorized(true);
    if (window.GESCHICHTE_APP?.renderApp && window.GESCHICHTE_APP?.loadState) {
      window.GESCHICHTE_APP.renderApp(window.GESCHICHTE_APP.loadState());
    }
    renderTeacherDashboard();
  } else {
    setTeacherAuthorized(false);
  }
}

async function loadTeacherProfile() {
  return null;
}

async function unlockTeacherAccess() {
  const password = String(document.getElementById("teacher-password-input")?.value || "");

  if (!password) {
    setTeacherFeedback("Bitte das Lehrpersonen-Passwort eingeben.", true);
    return;
  }

  if (password !== TEACHER_PASSWORD) {
    setTeacherFeedback("Das Passwort stimmt nicht.", true);
    return;
  }

  localStorage.setItem(TEACHER_ACCESS_KEY, "granted");
  setTeacherFeedback("");
  renderTeacherAccess(true);
  if (window.GESCHICHTE_SUPABASE?.refreshTeacherDashboardFromCloud) {
    window.GESCHICHTE_SUPABASE.refreshTeacherDashboardFromCloud().catch((err) => {
      console.error(err);
    });
  }
}

async function lockTeacherAccess() {
  localStorage.removeItem(TEACHER_ACCESS_KEY);
  renderTeacherAccess(false);
  setTeacherFeedback("");
}

function saveTeacherRosterFromInput() {
  const input = document.getElementById("teacher-roster-input");
  if (!input) {
    return;
  }

  const names = String(input.value || "")
    .split(/\n+/)
    .map((name) => name.trim())
    .filter(Boolean);

  saveTeacherRoster(names);
  renderTeacherDashboard();
}

function clearTeacherPreviewState() {
  localStorage.removeItem(TEACHER_PREVIEW_STORAGE_KEY);
  window.location.reload();
}

async function initTeacherAuthState() {
  if (localStorage.getItem(TEACHER_ACCESS_KEY) === "granted") {
    renderTeacherAccess(true);
    if (window.GESCHICHTE_SUPABASE?.refreshTeacherDashboardFromCloud) {
      window.GESCHICHTE_SUPABASE.refreshTeacherDashboardFromCloud().catch((err) => {
        console.error(err);
      });
    }
    return;
  }

  renderTeacherAccess(false);
  setTeacherFeedback("");
}

function bindTeacherPage() {
  const printButton = document.querySelector("[data-print-teacher]");
  const unlockButton = document.querySelector("[data-teacher-unlock]");
  const passwordInput = document.getElementById("teacher-password-input");
  const lockButton = document.querySelector("[data-teacher-lock]");
  const saveRosterButton = document.querySelector("[data-save-roster]");
  const refreshDashboardButton = document.querySelector("[data-refresh-dashboard]");
  const clearPreviewButton = document.querySelector("[data-clear-preview]");

  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  if (unlockButton) {
    unlockButton.addEventListener("click", () => {
      unlockTeacherAccess().catch((error) => {
        console.error(error);
        setTeacherFeedback(error.message, true);
      });
    });
  }

  [passwordInput].forEach((input) => {
    if (!input) {
      return;
    }
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        unlockTeacherAccess().catch((error) => {
          console.error(error);
          setTeacherFeedback(error.message, true);
        });
      }
    });
  });

  if (lockButton) {
    lockButton.addEventListener("click", () => {
      lockTeacherAccess().catch((error) => {
        console.error(error);
      });
    });
  }

  if (saveRosterButton) {
    saveRosterButton.addEventListener("click", saveTeacherRosterFromInput);
  }

  if (refreshDashboardButton) {
    refreshDashboardButton.addEventListener("click", () => {
      renderTeacherDashboard();
      if (window.GESCHICHTE_SUPABASE?.refreshTeacherDashboardFromCloud) {
        window.GESCHICHTE_SUPABASE.refreshTeacherDashboardFromCloud().catch((error) => {
          console.error(error);
        });
      }
    });
  }

  if (clearPreviewButton) {
    clearPreviewButton.addEventListener("click", clearTeacherPreviewState);
  }

  window.addEventListener("storage", renderTeacherDashboard);
  window.addEventListener("gesch-dashboard-updated", renderTeacherDashboard);

  initTeacherAuthState().catch((error) => {
    console.error(error);
    setTeacherFeedback(error.message, true);
  });
}

document.addEventListener("DOMContentLoaded", bindTeacherPage);
