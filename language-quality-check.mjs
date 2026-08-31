import { readFileSync } from "node:fs";

function read(path) {
  return readFileSync(path, "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(`Sprachprüfung fehlgeschlagen: ${message}`);
}

const app = read("app.js");
const publicUi = [
  app,
  read("index.html"),
  read("lehrpersonen.html"),
  read("teacher.js"),
  read("cloudflare.js"),
  read("harari-viewer.html"),
  read("harari-viewer.js"),
  read("textstelle.html"),
  read("textstelle.js")
].join("\n");
const proseForSentenceChecks = publicUi.replace(/v\. Chr\./g, "v Chr");

assert(!app.includes("Zusammenhang zwischen ${first} und ${second}"),
  "Die fehleranfällige Verknüpfung ganzer Sätze mit «zwischen … und …» ist noch vorhanden.");
assert(app.includes("wie die folgenden Aussagen historisch zusammenhängen"),
  "Die sprachlich sichere Formulierung für Zusammenhangsfragen fehlt.");
assert(app.includes("arbeite den historischen Unterschied heraus"),
  "Die sprachlich sichere Formulierung für Vergleichsfragen fehlt.");
assert(!publicUi.includes("Lehrer*innenzugang"),
  "Die Schweizer Bezeichnung «Lehrpersonenzugang» wird nicht konsequent verwendet.");

for (const malformed of [/\.\s+und\s+[A-ZÄÖÜ]/g, /\.\s+oder\s+[A-ZÄÖÜ]/g]) {
  assert(!malformed.test(proseForSentenceChecks), `Eine fehlerhafte Satzverknüpfung wurde gefunden (${malformed}).`);
}

const sourceSegments = [
  "Fortschritt bringt nicht nur Nutzen, sondern auch Schäden an Boden, Wasser, Luft und Lebensräumen hervor.",
  "Die Frage nach dem Anthropozän verschiebt Geschichte von Einzelereignissen zu langfristigen Folgen."
].map((text) => text.replace(/[.!?…]+$/, "").trim());
const regressionPrompt = `Erkläre in 2 bis 4 klaren Sätzen, wie die folgenden Aussagen historisch zusammenhängen: «${sourceSegments[0]}» und «${sourceSegments[1]}».`;
assert(!regressionPrompt.includes("hervor. und Die Frage"),
  "Die auf dem Bildschirmfoto gezeigte fehlerhafte Frage kann erneut entstehen.");
assert(regressionPrompt.endsWith("Folgen»."),
  "Die automatisch erzeugte Frage besitzt keinen korrekten Satzschluss.");

console.log("Sprachprüfung erfolgreich: Schweizer Standardsprache und automatisch erzeugte Fragen geprüft.");
