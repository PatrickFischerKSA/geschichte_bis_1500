import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("./app.js", import.meta.url), "utf8");

function extract(start, end) {
  const from = source.indexOf(start);
  const to = source.indexOf(end, from);
  if (from < 0 || to < 0) throw new Error(`Prüfbereich fehlt: ${start}`);
  return source.slice(from, to);
}

const evaluationSource = [
  extract("function normalize(value)", "function makeSourceKey"),
  extract("function normalizeLoose(text)", "function getRepetitionProgress"),
  extract("const semanticConceptGroups", "function analyzeAnswer")
].join("\n");

const context = {};
vm.createContext(context);
vm.runInContext(`${evaluationSource}\nthis.semanticTermMatches = semanticTermMatches;`, context);

const cases = [
  ["Bauern bestellten Äcker und waren danach stärker an ihre Ernten gebunden.", "landwirtschaft", true],
  ["Die bäuerliche Lebensweise brachte viel Mühe und neue Unfreiheit.", "abhängigkeit", true],
  ["Listen und Aufzeichnungen halfen Beamten, Abgaben zu registrieren.", "verwaltung", true],
  ["Eine Währung funktioniert, weil alle ihren gemeinsamen Wert akzeptieren.", "vertrauen", true],
  ["Nomadische Gemeinschaften zogen umher und kannten Tiere und Jahreszeiten.", "mobilität", true],
  ["Getreideanbau veränderte die Versorgung dauerhaft.", "landwirtschaft", true],
  ["Die Bodenbewirtschaftung band Menschen an einen Ort.", "ackerbau", true],
  ["Bevölkerungsbewegungen verbreiteten Ideen über weite Räume.", "migration", true],
  ["Die Schriftlichkeit erleichterte die Buchführung.", "aufzeichnung", true],
  ["Eine Administration erfasste Tribute in Verzeichnissen.", "verwaltung", true],
  ["Das Staatswesen stützte sich auf eine dauerhafte Obrigkeit.", "staat", true],
  ["Ein Herrschaftssystem bündelte politische Kontrolle.", "macht", true],
  ["Fernhandelsnetze verbanden weit entfernte Märkte.", "handel", true],
  ["Kenntnisse über den Naturraum halfen beim Überleben.", "umweltwissen", true],
  ["Die Transformation der Lebensweise war ein langfristiger Prozess.", "veränderung", true],
  ["Viele Traditionen bestanden dennoch fort.", "kontinuität", true],
  ["Der entscheidende Auslöser lag in einer besseren Versorgung.", "ursache", true],
  ["Eine Konsequenz war die zunehmende Arbeitsteilung.", "folge", true],
  ["Menschen stellten sich auf neue Lebensräume ein.", "anpassung", true],
  ["Nahrungsmittel wurden in Speichern gesammelt.", "versorgung", true],
  ["Gewaltsame Auseinandersetzungen erschütterten das Reich.", "konflikt", true],
  ["Die Vernetzung schuf Beziehungen zwischen entfernten Gruppen.", "austausch", true],
  ["Überlieferte Erfahrungen wurden mündlich weitergegeben.", "wissen", true],
  ["Groessere Verbaende brauchten gemeinsame Regeln.", "grössere verbände", true],
  ["Baeuerliche Gemeinschaften lebten dauerhaft in Dörfern.", "bäuerlich", true],
  ["Die Burokratie organisierte die Abgaben.", "bürokratie", true],
  ["Handelsbezihungen verbanden verschiedene Städte.", "handelsbeziehungen", true],
  ["Die Sesshaftigkeiten veränderten den Alltag.", "sesshaftigkeit", true],
  ["Die Stadt wuchs durch Handwerk und Märkte.", "staat", false],
  ["Menschen erzählten Geschichten am Feuer.", "steuer", false],
  ["Ein Dorf pflegte seine Felder.", "imperium", false],
  ["Münzen lagen in einem Gefäss.", "religion", false]
];

for (const [answer, keyword, expected] of cases) {
  const actual = context.semanticTermMatches(answer, keyword);
  if (actual !== expected) {
    throw new Error(`Synonymprüfung fehlgeschlagen: ${JSON.stringify({ answer, keyword, expected, actual })}`);
  }
}

console.log(`Synonymerkennung erfolgreich: ${cases.length} gezielte Fälle zu Synonymen, Flexionen, Zusammensetzungen, Schreibvarianten und Tippfehlern geprüft.`);

const sourceQuestionBank = fs.readFileSync(new URL("./source-question-bank.js", import.meta.url), "utf8");
const browserWindow = { addEventListener() {}, location: { search: "", pathname: "/" } };
const fullContext = {
  window: browserWindow,
  document: { body: { dataset: {} }, getElementById() { return null; } },
  localStorage: { getItem() { return null; }, setItem() {} },
  console, Map, Set, Date, Intl, URL, URLSearchParams, setTimeout, clearTimeout
};
vm.createContext(fullContext);
vm.runInContext(sourceQuestionBank, fullContext);
vm.runInContext(`${source}\nwindow.__ASSESSMENT_AUDIT = { modules, quickChecks, contentChecks, getSourceDetail, getSourceHeading, buildSourceMicroChecks, evaluateCheckQuestion, evaluateTask };`, fullContext);

const audit = browserWindow.__ASSESSMENT_AUDIT;
const assessed = [];
for (const module of audit.modules) {
  for (const item of [module.task, audit.quickChecks[module.id], module.transfer]) {
    assessed.push({ module: module.number, id: item.id, result: audit.evaluateTask(item.sampleAnswer, item) });
  }
  audit.contentChecks[module.id].questions.forEach((item, index) => {
    assessed.push({ module: module.number, id: `content-${index + 1}`, result: audit.evaluateCheckQuestion(item.sampleAnswer, item) });
  });
  for (const sourceItem of module.sources) {
    const detail = audit.getSourceDetail(module.id, sourceItem);
    const heading = audit.getSourceHeading(sourceItem, detail) || sourceItem.title;
    const questions = audit.buildSourceMicroChecks(module, sourceItem, detail, heading);
    if (questions.length !== 3 || questions.some((item) => item.evaluationMode !== "source-reasoning")) {
      throw new Error(`Fragebezogene Quellenbewertung fehlt: ${module.id} / ${heading}`);
    }
    questions.forEach((item) => assessed.push({ module: module.number, id: item.id, result: audit.evaluateCheckQuestion(item.sampleAnswer, item) }));
  }
}

const rejectedExamples = assessed.filter((item) => item.result.score !== undefined
  ? item.result.score < 60
  : item.result.level === "low");
if (rejectedExamples.length) {
  throw new Error(`Beispiellösungen werden von der eigenen Prüfung abgewiesen: ${JSON.stringify(rejectedExamples.slice(0, 5))}`);
}

const alternativeQuestion = {
  prompt: "Warum wuchsen mittelalterliche Städte? Erkläre einen fachlich passenden Zusammenhang.",
  placeholder: "Begründe deine Antwort.",
  sampleAnswer: "",
  criteria: [{ label: "nicht verlangtes Königtum", keywords: ["könig", "krone"] }]
};
const alternativeAnswer = "Mittelalterliche Städte wuchsen, weil Märkte, Handwerk und Zuwanderung neue Arbeitsmöglichkeiten und dichte wirtschaftliche Beziehungen schufen.";
const alternativeResult = audit.evaluateCheckQuestion(alternativeAnswer, alternativeQuestion);
if (alternativeResult.score < 60 || !alternativeResult.title.includes("Alternativantwort")) {
  throw new Error("Eine fachlich plausible Alternativantwort wird weiterhin wegen eines sachfremden Kriteriums blockiert.");
}

const alternativeTask = {
  id: "alternative-quick",
  question: "Warum wuchsen mittelalterliche Städte? Erkläre einen fachlich passenden Zusammenhang.",
  placeholder: "Begründe deine Antwort.",
  criteria: [{ label: "nicht verlangtes Königtum", keywords: ["könig", "krone"] }]
};
const alternativeTaskResult = audit.evaluateTask(alternativeAnswer, alternativeTask);
if (alternativeTaskResult.level === "low" || !alternativeTaskResult.title.includes("Alternativantwort")) {
  throw new Error("Eine plausible Antwort auf Haupt- oder Transferfragen wird weiterhin an einer absoluten Beispiellösung gemessen.");
}

console.log(`Flexible Bewertung erfolgreich: ${assessed.length} offene Fragen mit ihren Beispiellösungen geprüft; fachlich plausible Alternativantworten blockieren den Lernfortschritt nicht.`);
