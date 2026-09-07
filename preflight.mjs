import { readFileSync, statSync } from "node:fs";
import vm from "node:vm";

function read(path) {
  return readFileSync(path, "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(`Preflight fehlgeschlagen: ${message}`);
}

const worker = read("worker/index.js");
const teacher = read("teacher.js");
const cloud = read("cloudflare.js");
const hosting = JSON.parse(read(".openai/hosting.json"));
const build = read("build.mjs");
const styles = read("styles.css");
const publicSources = [
  read("index.html"),
  read("lehrpersonen.html"),
  teacher,
  cloud,
  read("app.js"),
  read("harari-viewer.html"),
  read("harari-viewer.js"),
  read("textstelle.html"),
  read("textstelle.js")
].join("\n");
const app = read("app.js");
const sourceQuestionBank = read("source-question-bank.js");
const viewer = `${read("harari-viewer.html")}\n${read("harari-viewer.js")}`;
const modelAnswerDocuments = read("worker/model-answer-documents.js");

const iterationMatch = worker.match(/const PBKDF2_ITERATIONS = (\d+);/);
const iterations = Number(iterationMatch?.[1]);

assert(Number.isInteger(iterations) && iterations >= 100000 && iterations <= 100000,
  "PBKDF2 muss beim von Cloudflare unterstützten Wert 100000 bleiben.");
assert(worker.includes("decodePasswordHash") && worker.includes("/^[a-f0-9]{64}$/i"),
  "Die Rückwärtskompatibilität bestehender Passwort-Hashes fehlt.");
assert(!publicSources.includes("TEACHER_PASSWORDS") && !publicSources.includes('"FiP"'),
  "Ein Lehrpersonen-Passwort darf nicht in öffentlichen Dateien stehen.");
assert(hosting.d1 === "DB",
  "Die produktive D1-Bindung DB fehlt.");
assert(build.includes('cpSync(".openai/hosting.json", "dist/.openai/hosting.json")'),
  "Der Produktions-Build muss die Hosting-Konfiguration enthalten.");
assert(!cloud.includes("totalModules || 12") && !cloud.includes("interactionTotal || 48"),
  "Veraltete Lernstands-Summen 12/48 sind noch vorhanden.");
assert(cloud.includes("syncStateNow") && cloud.includes("sync: false, touch: false"),
  "Die sichere Cloud-Synchronisation ist unvollständig.");
assert(cloud.includes("cloud-save-status") && cloud.includes("Cloud-Stand bestätigt") && cloud.includes("attempt <= 2"),
  "Sichtbare Speicherbestätigung oder Wiederholungsversuch fehlt.");
assert(worker.includes("SELECT state_json, snapshot_json, updated_at FROM learner_progress") && worker.includes("D1 hat den Lernstand nicht bestätigt"),
  "Der Server kontrolliert die dauerhafte D1-Speicherung nicht.");
assert(app.includes("data-save-field") && app.includes("bindExplicitCloudSaveButtons") && app.includes("In Cloud gespeichert"),
  "Explizite Cloud-Speicherknöpfe mit Bestätigung fehlen bei den Antwortfeldern.");
assert(app.includes("data-save-cloze"),
  "Beim Lückentext fehlt der explizite Cloud-Speicherknopf.");
assert(app.includes("bindAutomaticCloudDrafts") && app.includes("scheduleAutomaticCloudSave") && app.includes("Automatisch in Cloud gespeichert"),
  "Die sofortige automatische Cloud-Speicherung von Entwürfen fehlt.");
assert(cloud.includes("studentProgressCommentDraft") && cloud.includes("Kommentarentwurf wird automatisch gespeichert"),
  "Kommentarentwürfe werden nicht automatisch gespeichert.");
assert(worker.includes("manageStudentAccount") && worker.includes("reset_password") && worker.includes("set_active"),
  "Die serverseitige Kontoverwaltung für Lehrpersonen fehlt.");
assert(worker.includes("DELETE FROM sessions WHERE user_id = ? AND role = 'student'") && worker.includes("Number(student.is_active) === 0"),
  "Passwortwechsel und Deaktivierung müssen bestehende Schüler*innen-Sitzungen sicher sperren.");
assert(worker.includes("activity_events") && teacher.includes("renderTeacherAccountPanel") && cloud.includes("manageStudentAccount"),
  "Konten- oder Aktivitätsübersicht im Lehrpersonen-Dashboard ist unvollständig.");
assert(!teacher.includes("const TEACHER_PREVIEW_STORAGE_KEY"),
  "Die Lehrpersonen-Datei darf keine bereits in app.js deklarierte globale Konstante erneut anlegen.");
assert(app.includes("data-export-module-answers") && app.includes("bindModuleAnswerExports") && app.includes("buildModuleAnswerExport"),
  "Der Antwortexport am Ende jedes Moduls fehlt.");
assert(app.includes('type: "text/html;charset=utf-8"') && app.includes("URL.revokeObjectURL"),
  "Der plattformunabhängige Antwortexport ist unvollständig.");
assert(app.includes("moduleCompactSummaries") && app.includes("renderModuleCompactSummary") && app.includes("Schlüssel für die Schlussfragen"),
  "Die hoch komprimierten Modulzusammenfassungen fehlen.");
for (const perspective of ["Allgemeine Merkmale", "Veränderungen", "Entwicklungen", "Kontinuitäten"]) {
  assert(app.includes(perspective), `Die Zusammenfassungsperspektive ${perspective} fehlt.`);
}
assert((app.match(/questionKey:/g) || []).length === 13,
  "Nicht alle 13 Module besitzen einen Schlüssel für die Schlussfragen.");
assert(app.includes("data-content-check-one") && app.includes("data-content-show-one"),
  "Bei den eingebetteten Prüffragen fehlen Antwortprüfung oder Beispiellösung.");
assert(app.includes('title: "Eine mögliche Beispiellösung"') && app.includes("evaluateCheckQuestion(answerText, question)"),
  "Die individuelle Prüfung der eingebetteten Fragen ist nicht vollständig verdrahtet.");
assert(app.includes("semanticConceptGroups") && app.includes("semanticTermMatches"),
  "Die Freitextprüfung braucht eine Synonym- und Flexionserkennung.");
assert(app.includes("renderAssessmentContract") && (app.match(/renderAssessmentContract\(/g) || []).length >= 4,
  "Die Bewertungskriterien müssen bei sämtlichen offenen Fragetypen vor der Eingabe sichtbar sein.");
assert(app.includes("Fachlich plausible Alternativantwort anerkannt") && app.includes("repairStoredContentScores"),
  "Fachlich plausible Alternativantworten oder die rückwirkende faire Neubewertung fehlen.");
assert(app.includes('evaluationMode: "source-reasoning"') && app.includes("evaluateSourceReasoning"),
  "Quellenfragen dürfen keine ganzen Beispiellösungssätze als versteckte Pflichtkriterien bewerten.");
assert(app.includes("buildProgressiveHints") && app.includes("bindProgressiveHint"),
  "Die progressiven Lösungshinweise fehlen.");
for (const hintHook of ["data-hint=", "data-content-hint-one=", "data-source-hint="]) {
  assert(app.includes(hintHook), `Nicht alle Fragetypen besitzen einen abrufbaren Tipp (${hintHook}).`);
}
assert(sourceQuestionBank.includes("GESCHICHTE_SOURCE_QUESTION_BANK") && build.includes('"source-question-bank.js"'),
  "Der feste Katalog individueller Quellenfragen fehlt im Produktions-Build.");
assert(worker.includes("confirmation.state_json") && worker.includes("confirmation.snapshot_json") && cloud.includes("result.verified !== true"),
  "Cloud-Speicherungen müssen durch Zurücklesen des vollständigen Inhalts bestätigt werden.");
assert(worker.includes('action === "restore_progress"') && worker.includes("mergeProgressStates") && worker.includes("mergeProgressSnapshots") && worker.includes("Lernstände dürfen nur zwischen Konten derselben Person übertragen werden"),
  "Die sichere Wiederherstellung zwischen eindeutig gleichnamigen Konten fehlt.");
assert(app.includes("migrateSourceQuestionState") && app.includes("-micro-([1-3])") && app.includes("-frage-${match[2]}"),
  "Die clientseitige Migration früherer Quellen-Antwortfelder fehlt.");
assert(app.includes("getSourceQuestionStateValue") && app.includes("const storedText = getSourceQuestionStateValue") && app.includes("const storedFeedback = getSourceQuestionStateValue"),
  "Die Quellenfelder müssen frühere Antworten auch unabhängig von der Migration direkt anzeigen.");
assert(app.includes("hasMeaningfulStateValue(state[legacyKey])") && worker.includes("hasMeaningfulStateValue(state[legacyKey])"),
  "Leere neue Felder dürfen gefüllte frühere Antworten nicht verdecken.");
assert(worker.includes('action === "repair_progress_fields"') && worker.includes("migrateLegacySourceQuestionState") && worker.includes("progress_fields_repaired"),
  "Die bestätigte Cloud-Reparatur früherer Quellen-Antwortfelder fehlt.");
assert(teacher.includes("data-repair-account-progress") && teacher.includes("Frühere Antwortfelder reparieren"),
  "Die Reparaturfunktion im Lehrpersonendashboard fehlt.");
assert(teacher.includes("getCurrentSourceQuestionIds") && worker.includes("missingQuestionIds"),
  "Die feldgenaue Diagnose fehlender Quellenantworten fehlt.");
assert(worker.includes("sourceStarted") && worker.includes("if (migrated.changed)"),
  "Die Diagnose muss sich auf begonnene Quellen beschränken und Sitzungen nur bei tatsächlichen Änderungen beenden.");
assert(worker.includes("progress_restored") && worker.includes("DELETE FROM sessions WHERE user_id = ? AND role = 'student'") && cloud.includes("restoreStudentProgress"),
  "Wiederhergestellte Lernstände müssen bestätigt, protokolliert und vor Überschreiben durch alte Sitzungen geschützt werden.");
assert(teacher.includes("data-restore-account-progress") && teacher.includes("data-source-account") && teacher.includes("restoreStudentProgress(studentId, sourceStudentId)"),
  "Die authentifizierte Wiederherstellung im Lehrpersonen-Dashboard fehlt.");
assert((cloud.match(/await loadOwnCloudState\(true\)/g) || []).length >= 3 && !cloud.includes('resolution === "local-newer"'),
  "Beim Anmelden und Wiederherstellen muss ein vorhandener Cloud-Stand immer Vorrang vor einem leeren oder fremden Browserstand haben.");
const recoveryHelpers = worker.slice(worker.indexOf("function isPlainObject"), worker.indexOf("async function ensureSchema"));
const recoveryContext = {};
vm.createContext(recoveryContext);
vm.runInContext(`${recoveryHelpers}\nthis.mergeProgressStates = mergeProgressStates; this.mergeProgressSnapshots = mergeProgressSnapshots;`, recoveryContext);
const restoredState = recoveryContext.mergeProgressStates(
  { "modul-1-answer-text": "frühere Antwort", className: "FM4a" },
  { "cloze-1-basis-text": "neue Eingabe", className: "FM4" },
  { first_name: "Mailin", last_name: "Steiner", class_name: "FM4" },
  "2026-09-07T08:00:00.000Z"
);
assert(restoredState["modul-1-answer-text"] === "frühere Antwort" && restoredState["cloze-1-basis-text"] === "neue Eingabe" && restoredState.className === "FM4",
  "Bei der Wiederherstellung müssen frühere Antworten und neue Eingaben gemeinsam erhalten bleiben.");
const restoredSnapshot = recoveryContext.mergeProgressSnapshots(
  { passedModules: 1, overallPercent: 8, interactionCompleted: 4, interactionTotal: 52, totalModules: 13, moduleScores: [{ id: "modul-1", passed: true, score: 73 }] },
  { passedModules: 0, overallPercent: 0, interactionCompleted: 1, interactionTotal: 52, totalModules: 13, moduleScores: [{ id: "modul-1", passed: false, score: 0 }] },
  "Mailin Steiner",
  "2026-09-07T08:00:00.000Z"
);
assert(restoredSnapshot.passedModules === 1 && restoredSnapshot.overallPercent === 8 && restoredSnapshot.moduleScores[0].passed === true,
  "Die Wiederherstellung darf einen weiter fortgeschrittenen Modulstand nicht durch einen leeren Stand ersetzen.");
const releaseDates = ["2026-08-31", "2026-09-07", "2026-09-14", "2026-09-21", "2026-09-28", "2026-10-05", "2026-10-12", "2026-10-19", "2026-10-26", "2026-11-02", "2026-11-09", "2026-11-16", "2026-11-23"];
assert((app.match(/\["modul-[^"]+", "2026-/g) || []).length === 13,
  "Der Freigabeplan muss genau 13 Module enthalten.");
assert(worker.includes("/api/materials/model-answers/") && worker.includes("/assets/modellantworten/") && worker.includes("private, no-store"),
  "Die Lösungshefte müssen serverseitig geschützt und termingesteuert ausgeliefert werden.");
assert(worker.includes("MODEL_ANSWER_DOCUMENTS") && build.includes('!source.includes("assets/modellantworten")') && build.includes('cpSync("worker/model-answer-documents.js"'),
  "Die PDF-Dateien dürfen nicht als direkt abrufbare öffentliche Dateien ausgeliefert werden.");
assert(cloud.includes("downloadModelAnswers") && app.includes("bindModelAnswerDownloads"),
  "Die authentifizierte PDF-Downloadfunktion ist nicht vollständig verdrahtet.");
releaseDates.forEach((releaseDate, index) => {
  const number = String(index + 1).padStart(2, "0");
  const file = `assets/modellantworten/Modul_${number}_Modellantworten_mit_Quellenbelegen.pdf`;
  assert(app.includes(releaseDate) && worker.includes(releaseDate), `Freigabetermin ${releaseDate} fehlt.`);
  assert(statSync(file).size > 50000, `Lösungsheft für Modul ${index + 1} fehlt oder ist unvollständig.`);
  assert(modelAnswerDocuments.includes(`${index + 1}: "`), `Das geschützte Serverdokument für Modul ${index + 1} fehlt.`);
});

for (const forbidden of ["127.0.0.1", "localhost", "file:", "/Users/", "assets/local/"]) {
  assert(!publicSources.includes(forbidden), `Öffentliche Dateien enthalten einen lokalen Verweis (${forbidden}).`);
}
assert(app.includes('const HARARI_REFERENCE_VIEW_PATH = "./harari-viewer.html";'),
  "Buchstellen müssen auf den veröffentlichten relativen Viewer zeigen.");
assert(app.includes('const SOURCE_TEXT_VIEW_PATH = "./textstelle.html";'),
  "Textstellen müssen auf die veröffentlichte relative Ansicht zeigen.");
assert(app.includes("renderSourceTextAction(source, module, detail)"),
  "Nicht-Harari-Quellen müssen eine interne Textstellenansicht erhalten.");
assert(!viewer.includes("pdfjsLib") && !viewer.includes("pdf.worker") && !viewer.includes("<canvas"),
  "Der Buchstellen-Viewer darf nicht von einer lokalen oder externen PDF-Laufzeit abhängen.");
assert(build.includes('"textstelle.html"') && build.includes('"textstelle.js"'),
  "Die allgemeine Textstellenansicht fehlt im Produktions-Build.");
assert(styles.includes(".welcome-overlay") && styles.includes("overscroll-behavior: contain"),
  "Overlays müssen auf kleinen oder skalierten Windows-Anzeigen selbst scrollbar sein.");
assert(styles.includes("overflow-y: auto") && app.includes("reconcileOverlayScrollLock"),
  "Der Schutz gegen hängen gebliebene Scroll-Sperren fehlt.");

const pageNumbers = [
  ...[...app.matchAll(/pdfPage:\s*(\d+)/g)].map((match) => Number(match[1])),
  ...[...app.matchAll(/extraPdfPages:\s*\[([^\]]+)\]/g)].flatMap((match) =>
    [...match[1].matchAll(/\d+/g)].map((page) => Number(page[0])))
];
assert(pageNumbers.length > 0, "Es wurden keine Buchseiten-Verweise gefunden.");
assert(pageNumbers.every((page) => Number.isInteger(page) && page > 0 && page <= 1000),
  "Mindestens ein Buchseiten-Verweis ist ungültig.");
assert(!app.includes("Buchstelle S. ${detail.pdfPage} öffnen"),
  "Die Beschriftung darf nicht fälschlich das Öffnen einer PDF versprechen.");

console.log(`Preflight erfolgreich: Authentifizierung, D1, Synchronisation sowie ${pageNumbers.length} Buchseiten-Verweise geprüft.`);
