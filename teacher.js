const TEACHER_PASSWORD = "1500";
const TEACHER_ACCESS_KEY = "geschichte_bis_1500_teacher_access";

function renderTeacherAccess(isUnlocked) {
  const gate = document.getElementById("teacher-gate");
  const shell = document.getElementById("teacher-shell");

  if (!gate || !shell) {
    return;
  }

  gate.hidden = isUnlocked;
  shell.hidden = !isUnlocked;
}

function unlockTeacherAccess() {
  const passwordInput = document.getElementById("teacher-password-input");
  const feedback = document.getElementById("teacher-gate-feedback");
  const value = String(passwordInput?.value || "").trim();

  if (value !== TEACHER_PASSWORD) {
    if (feedback) {
      feedback.textContent = "Das Passwort stimmt noch nicht. Bitte versuche es erneut.";
    }
    if (passwordInput) {
      passwordInput.focus();
      passwordInput.select();
    }
    return;
  }

  localStorage.setItem(TEACHER_ACCESS_KEY, "granted");
  if (feedback) {
    feedback.textContent = "";
  }
  renderTeacherAccess(true);
}

function lockTeacherAccess() {
  localStorage.removeItem(TEACHER_ACCESS_KEY);
  renderTeacherAccess(false);

  const passwordInput = document.getElementById("teacher-password-input");
  const feedback = document.getElementById("teacher-gate-feedback");

  if (passwordInput) {
    passwordInput.value = "";
    passwordInput.focus();
  }

  if (feedback) {
    feedback.textContent = "";
  }
}

function bindTeacherPage() {
  const printButton = document.querySelector("[data-print-teacher]");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  const unlockButton = document.querySelector("[data-teacher-unlock]");
  const passwordInput = document.getElementById("teacher-password-input");
  const lockButton = document.querySelector("[data-teacher-lock]");

  if (unlockButton) {
    unlockButton.addEventListener("click", unlockTeacherAccess);
  }

  if (passwordInput) {
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        unlockTeacherAccess();
      }
    });
  }

  if (lockButton) {
    lockButton.addEventListener("click", lockTeacherAccess);
  }

  const isUnlocked = localStorage.getItem(TEACHER_ACCESS_KEY) === "granted";
  renderTeacherAccess(isUnlocked);

  if (!isUnlocked && passwordInput) {
    passwordInput.focus();
  }
}

document.addEventListener("DOMContentLoaded", bindTeacherPage);
