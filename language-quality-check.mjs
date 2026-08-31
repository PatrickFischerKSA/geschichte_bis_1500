import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

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

assert(!app.includes("buildSourceMicroCheckPrompt") && !app.includes("shortenPromptSegment"),
  "Musterlösungen oder Fragen werden weiterhin aus gekürzten Textfragmenten zusammengesetzt.");
assert(app.includes("buildCompleteSourceSentences") && app.includes("buildSourceSampleAnswer") && app.includes("isCompleteSourceQuestion"),
  "Die Prüfung vollständig formulierter Quellenfragen und Musterlösungen fehlt.");
assert(app.includes("auditAllSourceQuestions") && app.includes("languageAudit.issues.length"),
  "Vor der Anzeige werden nicht sämtliche erzeugbaren Quellenfragen und Musterlösungen geprüft.");
assert(app.includes("zentrale historische Aussage der Quelle") && app.includes("anhand von zwei konkreten Punkten"),
  "Die sprachlich geschlossenen Aufgabenstellungen für Quellenfragen fehlen.");
assert(!app.includes('.replace(/\\bHarari\\b/gi, "den Historiker Harari")'),
  "Der Name Harari darf nicht unabhängig vom Satzbau in den Akkusativ gesetzt werden.");
assert(!publicUi.includes("Lehrer*innenzugang"),
  "Die Schweizer Bezeichnung «Lehrpersonenzugang» wird nicht konsequent verwendet.");

for (const malformed of [/\.\s+und\s+[A-ZÄÖÜ]/g, /\.\s+oder\s+[A-ZÄÖÜ]/g]) {
  assert(!malformed.test(proseForSentenceChecks), `Eine fehlerhafte Satzverknüpfung wurde gefunden (${malformed}).`);
}

for (const screenshotRegression of [
  "Erkläre den historischen Zusammenhang zwischen den Historiker Harari",
  "den Historiker Harari beschreibt grosse Gesellschaften",
  "hervor. und Die Frage"
]) {
  assert(!app.includes(screenshotRegression),
    `Der bereits gemeldete Sprachfehler kann erneut erscheinen: ${screenshotRegression}`);
}

const browserWindow = {
  addEventListener() {},
  location: { search: "", pathname: "/" }
};
runInNewContext(app, {
  window: browserWindow,
  document: {
    body: { dataset: {} },
    getElementById() { return null; }
  },
  console,
  Map,
  Set,
  Date,
  Intl,
  URL,
  URLSearchParams,
  setTimeout,
  clearTimeout
});
const generatedAudit = browserWindow.GESCHICHTE_APP.auditAllSourceQuestions();
assert(generatedAudit.questionCount > 100,
  "Es wurden nicht alle Quellenfragen tatsächlich erzeugt und geprüft.");
assert(generatedAudit.issues.length === 0,
  `Erzeugte Fragen oder Musterlösungen sind unvollständig: ${generatedAudit.issues.join("; ")}`);

console.log(`Sprachprüfung erfolgreich: Schweizer Standardsprache sowie ${generatedAudit.questionCount} erzeugte Quellenfragen mit Musterlösungen geprüft.`);
