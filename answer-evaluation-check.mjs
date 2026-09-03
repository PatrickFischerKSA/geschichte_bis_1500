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
  ["Die Stadt wuchs durch Handwerk und Märkte.", "staat", false]
];

for (const [answer, keyword, expected] of cases) {
  const actual = context.semanticTermMatches(answer, keyword);
  if (actual !== expected) {
    throw new Error(`Synonymprüfung fehlgeschlagen: ${JSON.stringify({ answer, keyword, expected, actual })}`);
  }
}

console.log(`Synonymerkennung erfolgreich: ${cases.length} gezielte Fälle geprüft.`);

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

const rejectedModels = assessed.filter((item) => item.result.score !== undefined
  ? item.result.score < 60
  : item.result.level === "low");
if (rejectedModels.length) {
  throw new Error(`Musterlösungen werden vom eigenen Erwartungshorizont abgewiesen: ${JSON.stringify(rejectedModels.slice(0, 5))}`);
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

console.log(`Erwartungshorizonte erfolgreich: ${assessed.length} offene Fragen einzeln mit ihrer Musterlösung geprüft; fachlich plausible Alternativantworten blockieren den Lernfortschritt nicht.`);
