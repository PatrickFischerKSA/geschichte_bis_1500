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
const publicSources = [
  read("index.html"),
  read("lehrpersonen.html"),
  teacher,
  cloud,
  read("app.js"),
  read("harari-viewer.html"),
  read("harari-viewer.js")
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
assert(!cloud.includes("totalModules || 12") && !cloud.includes("interactionTotal || 48"),
  "Veraltete Lernstands-Summen 12/48 sind noch vorhanden.");
assert(cloud.includes("syncStateNow") && cloud.includes("sync: false, touch: false"),
  "Die sichere Cloud-Synchronisation ist unvollständig.");

for (const forbidden of ["127.0.0.1", "localhost", "file:", "/Users/", "assets/local/"]) {
  assert(!publicSources.includes(forbidden), `Öffentliche Dateien enthalten einen lokalen Verweis (${forbidden}).`);
}
assert(app.includes('const HARARI_REFERENCE_VIEW_PATH = "./harari-viewer.html";'),
  "Buchstellen müssen auf den veröffentlichten relativen Viewer zeigen.");
assert(!viewer.includes("pdfjsLib") && !viewer.includes("pdf.worker") && !viewer.includes("<canvas"),
  "Der Buchstellen-Viewer darf nicht von einer lokalen oder externen PDF-Laufzeit abhängen.");

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
