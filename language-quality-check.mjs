import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

function read(path) {
  return readFileSync(path, "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(`Sprachprüfung fehlgeschlagen: ${message}`);
}

const app = read("app.js");
const sourceQuestionBank = read("source-question-bank.js");
const publicUi = [
  app,
  sourceQuestionBank,
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
assert(!app.includes("buildCompleteSourceSentences") && !app.includes("buildSourceSampleAnswer"),
  "Quellenfragen oder Musterlösungen werden weiterhin zur Laufzeit erzeugt.");
assert(app.includes("GESCHICHTE_SOURCE_QUESTION_BANK") && app.includes("isCompleteSourceQuestion"),
  "Der feste Fragenkatalog oder seine Vollständigkeitsprüfung fehlt.");
assert(app.includes("auditAllSourceQuestions") && app.includes("languageAudit.issues.length"),
  "Vor der Anzeige werden nicht sämtliche erzeugbaren Quellenfragen und Musterlösungen geprüft.");
assert(sourceQuestionBank.includes("Welche historische") && sourceQuestionBank.includes("Musterlösung") === false,
  "Der feste Katalog enthält nicht die erwarteten inhaltsspezifischen Aufgabenstellungen.");
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
const runtimeContext = {
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
};
runInNewContext(sourceQuestionBank, runtimeContext);
runInNewContext(app, runtimeContext);
const generatedAudit = browserWindow.GESCHICHTE_APP.auditAllSourceQuestions();
const fixedQuestions = Object.values(browserWindow.GESCHICHTE_SOURCE_QUESTION_BANK).flat();
assert(generatedAudit.questionCount === 357 && fixedQuestions.length === 357,
  "Der feste Katalog muss genau alle 357 Quellenfragen enthalten.");
assert(generatedAudit.issues.length === 0,
  `Erzeugte Fragen oder Musterlösungen sind unvollständig: ${generatedAudit.issues.join("; ")}`);
assert(new Set(fixedQuestions.map((question) => question.prompt)).size === 357,
  "Jede Quellenfrage muss eine eigene Formulierung besitzen.");
assert(fixedQuestions.every((question) => question.criteria.length >= 2),
  "Jede Quellenfrage braucht mindestens zwei eigene Bewertungskriterien.");
assert(fixedQuestions.every((question) => {
  const sentences = question.sampleAnswer.match(/[^.!?]+[.!?]+/g) || [];
  return sentences.length >= 2 && sentences.length <= 4;
}), "Jede Musterlösung muss aus zwei bis vier vollständigen Sätzen bestehen.");
assert(fixedQuestions.every((question) => question.criteria.every((criterion) =>
  criterion.label.length >= 20 && criterion.keywords.length >= 2
)), "Jedes Bewertungskriterium braucht einen konkreten Inhalt und mehrere Suchbegriffe.");
for (const forbidden of [
  /\b(?:Kurs|Modul|Modulthema|Ressource|Buchstelle|Passage|Stelle|Seite)\b/i,
  /\bdidaktisch\b/i,
  /\bfür dieses Modul\b/i,
  /\bDabei stehen\b/i,
  /\bFür die historische Einordnung\b/i
]) {
  assert(fixedQuestions.every((question) => !forbidden.test(question.sampleAnswer)),
    `Eine Musterlösung enthält eine verbotene Meta- oder Standardformulierung (${forbidden}).`);
  assert(fixedQuestions.every((question) => !forbidden.test(question.prompt)
    && question.criteria.every((criterion) => !forbidden.test(criterion.label))),
    `Eine Aufgabenstellung oder ein Kriterium enthält eine verbotene Metaformulierung (${forbidden}).`);
}
assert(new Set(fixedQuestions.map((question) => question.sampleAnswer)).size === 357,
  "Jede Quellenfrage braucht eine eigenständig zusammengestellte Musterlösung.");
assert(fixedQuestions.every((question) => question.criteria.every((criterion) =>
  criterion.keywords.every((keyword) => /^[\p{L}\p{N} -]+$/u.test(keyword))
)), "Die Suchbegriffe müssen Umlaute und vollständige Wörter korrekt bewahren.");

console.log(`Sprachprüfung erfolgreich: ${generatedAudit.questionCount} fest hinterlegte Quellenfragen, Musterlösungen und Kriterien einzeln geprüft.`);
