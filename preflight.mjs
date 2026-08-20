import { readFileSync } from "node:fs";

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
const viewer = `${read("harari-viewer.html")}\n${read("harari-viewer.js")}`;

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
assert(worker.includes("SELECT updated_at FROM learner_progress") && worker.includes("D1 hat den Lernstand nicht bestätigt"),
  "Der Server kontrolliert die dauerhafte D1-Speicherung nicht.");
assert(app.includes("data-save-field") && app.includes("bindExplicitCloudSaveButtons") && app.includes("In Cloud gespeichert"),
  "Explizite Cloud-Speicherknöpfe mit Bestätigung fehlen bei den Antwortfeldern.");
assert(app.includes("data-save-cloze"),
  "Beim Lückentext fehlt der explizite Cloud-Speicherknopf.");
assert(app.includes("bindAutomaticCloudDrafts") && app.includes("scheduleAutomaticCloudSave") && app.includes("Automatisch in Cloud gespeichert"),
  "Die sofortige automatische Cloud-Speicherung von Entwürfen fehlt.");
assert(cloud.includes("studentProgressCommentDraft") && cloud.includes("Kommentarentwurf wird automatisch gespeichert"),
  "Kommentarentwürfe werden nicht automatisch gespeichert.");

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
