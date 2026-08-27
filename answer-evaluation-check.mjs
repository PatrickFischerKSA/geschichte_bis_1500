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
