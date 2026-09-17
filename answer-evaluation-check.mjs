import fs from 'node:fs';
import vm from 'node:vm';

const window = { addEventListener() {}, location: { search: '', pathname: '/' } };
const context = { window, document: { body: { dataset: {} }, getElementById() { return null; } },
  localStorage: { getItem() { return null; }, setItem() {} }, console, Map, Set, Date, Intl,
  URL, URLSearchParams, setTimeout, clearTimeout };
vm.createContext(context);
for (const path of ['assessment-review.js', 'source-question-bank.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(new URL(path, import.meta.url), 'utf8'), context);
}
vm.runInContext('window.audit = { modules, quickChecks, contentChecks, getAllRepetitionOralQuestions, getSourceDetail, getSourceHeading, buildSourceMicroChecks, evaluateCheckQuestion, analyzeAnswer, semanticTermMatches, repairStoredContentScores, isModuleUnlocked, isModulePassed };', context);
const a = window.audit;
const reviewed = window.GESCHICHTE_OPEN_REVIEW;
const cases = [];
for (const module of a.modules) {
  const open = [module.task, a.quickChecks[module.id], module.transfer, ...a.contentChecks[module.id].questions];
  for (const item of open) cases.push({ module: module.number, item, answer: reviewed[item.reviewId]?.[2] });
  for (const source of module.sources) {
    const detail = a.getSourceDetail(module.id, source);
    const heading = a.getSourceHeading(source, detail) || source.title;
    for (const item of a.buildSourceMicroChecks(module, source, detail, heading)) {
      const key = item.id.replace(/-frage-[123]$/, '');
      const index = Number(item.id.slice(-1)) - 1;
      cases.push({ module: module.number, item, answer: window.GESCHICHTE_SOURCE_REVIEW[key]?.[index]?.[2] });
    }
  }
}
for (const item of a.getAllRepetitionOralQuestions()) cases.push({ module: 'Repetition', item, answer: reviewed[item.reviewId]?.[2] });
const ids = cases.map(({ item }) => item.reviewId);
if (cases.length !== 504 || new Set(ids).size !== 504) throw new Error('Der Einzelkatalog muss alle 504 offenen Fragen genau einmal enthalten.');
if (Object.keys(reviewed).some((id) => !ids.includes(id))) throw new Error('Ein Einzelfall ist nicht an eine echte Frage angeschlossen.');
const failures = [];
for (const { module, item, answer } of cases) {
  if (!answer) { failures.push({ id: item.reviewId, reason: 'Individuelle Prüfantwort fehlt' }); continue; }
  const result = a.evaluateCheckQuestion(answer, item);
  if (result.unassignedLabels.length || result.reviewRequired || result.score < 60) {
    failures.push({ module, id: item.reviewId, answer, unassigned: result.unassignedLabels });
  }
  // Technische Eigenschaften zusätzlich zur individuell redigierten Inhaltsprüfung.
  const empty = a.evaluateCheckQuestion('', item);
  if (empty.score !== 0 || empty.matchedLabels.length) failures.push({ id: item.reviewId, reason: 'Leere Antwort erhält Anerkennung' });
  const repeated = a.evaluateCheckQuestion(`${answer} ${answer}`, item);
  if (JSON.stringify(result.matchedLabels) !== JSON.stringify(repeated.matchedLabels)) failures.push({ id: item.reviewId, reason: 'Wiederholung verändert die Anerkennung' });
}
if (failures.length) throw new Error(JSON.stringify(failures, null, 2));
// Konkret gemeldete Fehlmechanismen: knappe richtige Antwort, falsche Wortgleichsetzungen,
// unaufgeforderte Zusatzkategorien, fehlende automatische Anerkennung ohne Fehlerurteil.
const q = a.contentChecks['modul-1'].questions[3];
const compact = a.evaluateCheckQuestion('Unbekannte kooperieren durch geteilte Erzählungen und erlernte Normen.', q);
if (compact.score < 60 || compact.reviewRequired) throw new Error('Knappe richtige Antwort wird nicht vollständig anerkannt.');
for (const [answer, term] of [['Städte', 'Staat'], ['Geschichte', 'Mythos'], ['Landschaft', 'Umweltwissen'], ['Ausbreitung', 'Mission'], ['Jahreszeiten', 'Umweltwissen']]) {
  if (a.semanticTermMatches(answer, term)) throw new Error(`Sachlich falsche Gleichsetzung: ${answer} = ${term}`);
}
const roman = a.contentChecks['modul-7'].questions[5];
if (roman.criteria.length !== 2) throw new Error('Die Frage nach zwei römischen Veränderungen verlangt weiterhin drei Kategorien.');
const uncertain = a.evaluateCheckQuestion('Die gesellschaftlichen Bindungen waren anders ausgestaltet.', q);
if (!uncertain.reviewRequired || uncertain.score !== null || /fehlen noch|noch nicht sicher genug|noch zu knapp/i.test(uncertain.body + uncertain.title)) throw new Error('Unsicherheit wird als fachlicher Fehler ausgegeben.');
const preserved = { learnerName: 'Prüfprofil', 'modul-1-content-score': 87, 'modul-1-content-check': true, 'modul-1-kooperationsnetze-micro-1-text': 'Unveränderlicher alter Eintrag' };
a.repairStoredContentScores(preserved);
if (preserved['modul-1-content-score'] !== 87 || preserved['modul-1-kooperationsnetze-micro-1-text'] !== 'Unveränderlicher alter Eintrag' || !a.isModulePassed(preserved, 'modul-1')) throw new Error('Frühere Lernstände werden herabgesetzt.');
const pending = { 'modul-1-content-review-pending': true };
if (!a.isModuleUnlocked(pending, 1) || a.isModulePassed(pending, 'modul-1')) throw new Error('Klärungsbedarf wird entweder blockiert oder fälschlich als bestanden ausgewiesen.');
for (const module of a.modules) console.log(`Modul ${module.number}: ${cases.filter((entry) => entry.module === module.number).length} einzeln redigierte alternative Antworten anerkannt.`);
console.log('16 mündliche Wiederholungsfragen einzeln geprüft. Insgesamt 504 konkrete Inhaltsfälle; keine Auswahl von Stichproben.');
