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
  read("app.js")
].join("\n");

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

console.log("Preflight erfolgreich: Authentifizierung, D1-Bindung und Synchronisationsschutz geprüft.");
