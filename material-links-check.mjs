import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const window = { addEventListener() {}, location: { search: '', pathname: '/' } };
const context = { window, document: { body: { dataset: {} }, getElementById() { return null; } },
  localStorage: { getItem() { return null; }, setItem() { throw new Error('Materialprüfung darf keinen Lernstand schreiben'); } },
  console, Map, Set, Date, Intl, URL, URLSearchParams, setTimeout, clearTimeout };
vm.createContext(context);
for (const file of ['assessment-review.js', 'source-question-bank.js', 'app.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
vm.runInContext('window.audit = { modules, sourceCatalog, resolveSourceLink, getSourceTextLink, getSourceDetail, renderFilmFoundation, getHarariReferenceLink };', context);
const a = window.audit;
const report = [];
const catalogIds = a.sourceCatalog.map(s => s.id);
assert.equal(new Set(catalogIds).size, catalogIds.length, 'Doppelte Katalog-ID');
let materials = 0, books = 0;
for (const module of a.modules) {
  const markup = a.renderFilmFoundation(module);
  for (const source of module.sources) {
    const detail = a.getSourceDetail(module.id, source);
    const resolved = a.resolveSourceLink(source, module);
    const material = /^(Materialdossier|Arbeitspräsentation):/.test(source.title);
    if (material) {
      materials++;
      assert.ok(source.materialType, `Materialtyp fehlt: ${source.title}`);
      assert.ok(resolved && resolved.linkLabel !== 'Film öffnen', `Dokument führt zu Film: ${source.title}`);
      const url = new URL(resolved.link, 'https://learning.test');
      if (source.materialPath) {
        assert.equal(resolved.link, source.materialPath);
        const page = fs.readFileSync(source.materialPath, 'utf8');
        const manifest = JSON.parse(fs.readFileSync('assets/materialien/manifest.json', 'utf8')).find(x => x.path === source.materialPath);
        assert.ok(manifest && page.includes(source.title), `Falsches Originaldossier: ${source.title}`);
        assert.ok(manifest.textCharacters > 5000 && page.length > manifest.textCharacters, `Dossier unvollständig: ${source.title}`);
        const images = [...page.matchAll(/<img src="([^"]+)"/g)];
        assert.equal(images.length, manifest.images);
        for (const image of images) assert.ok(fs.statSync(new URL(image[1], new URL(source.materialPath, `file://${process.cwd()}/`))).size > 0);
        assert.ok(markup.includes(source.materialPath));
      } else {
      assert.equal(url.pathname, '/textstelle.html');
      assert.equal(url.searchParams.get('title'), source.title);
      assert.equal(url.searchParams.get('material'), source.materialType);
      assert.ok(url.searchParams.get('context')?.length > 100, `Dossiertext fehlt: ${source.title}`);
      assert.ok(JSON.parse(url.searchParams.get('facts')).length >= 2, `Lernfakten fehlen: ${source.title}`);
      assert.ok(markup.includes(source.title), `Dossierkarte fehlt: ${source.title}`);
      // Run the actual viewer with every generated URL, including its facts and headings.
      const elements = new Map();
      const element = id => { if (!elements.has(id)) elements.set(id, { hidden:true, textContent:'', children:[], appendChild(child) { this.children.push(child); } }); return elements.get(id); };
      const document = { title:'', getElementById: element, createElement: () => ({children:[],appendChild(child){this.children.push(child);}}), createTextNode: text => ({textContent:text}) };
      vm.runInNewContext(fs.readFileSync('textstelle.js', 'utf8'), {window:{location:{search:url.search}},document,URLSearchParams});
      assert.equal(element('title').textContent, source.title);
      assert.equal(element('context').textContent, url.searchParams.get('context'));
      assert.equal(element('facts').children.length, detail.mustKnow.length);
      assert.equal(element('facts-section').hidden, false);
      }
    } else if (source.title.startsWith('Harari-PDF')) {
      books++;
      assert.equal(resolved, null, 'Buchstelle darf kein Film werden');
      const url = new URL(a.getHarariReferenceLink(detail), 'https://learning.test');
      assert.ok(Number(url.searchParams.get('page')) > 0, `Buchseite fehlt: ${source.title}`);
    } else {
      const entry = a.sourceCatalog.find(s => s.title === source.title);
      if (entry?.link || /^(YouTube|SRF|Planet Schule|ZDF|HLS|Nationalmuseum|Swiss Spectator|PHBern|Landesmuseum|Terra X|National Geographic):/.test(source.title)) {
        assert.ok(resolved?.link, `Externer Materiallink fehlt: ${source.title}`);
      }
      if (source.sourceId) assert.ok(catalogIds.includes(source.sourceId), `Unbekannte Katalog-ID: ${source.sourceId}`);
      if (entry?.link) assert.equal(resolved?.id, entry.id, `Falsches Katalogziel: ${source.title}`);
    }
    report.push({module:module.number,title:source.title,target:resolved?.link || a.getSourceTextLink(source,module,detail),type:source.materialType || (source.sourceId ? 'external' : 'text')});
  }
}
// The reported failure must remain impossible even for a new, ambiguous title.
assert.equal(a.resolveSourceLink({title:'Materialdossier: Republik, Christentum und Eidgenossenschaft'}), null);
assert.equal(a.resolveSourceLink({title:'Republik'}), null);
assert.equal(a.resolveSourceLink({sourceId:'unknown',title:'YouTube: Rom'}), null);
const roman = a.modules.find(m => m.number === 8);
assert.equal(a.resolveSourceLink(roman.sources.find(s=>s.title==='YouTube: Rom, Republik und politische Ordnung'),roman).id,'rom-republik-video');
if (process.argv.includes('--report')) fs.writeFileSync('/private/tmp/geschichte-material-links.json',JSON.stringify(report,null,2));
console.log(`Materialprüfung erfolgreich: ${a.modules.length} Module, ${report.length} Quellen, ${materials} Dossier-/Lernmaterialtexte und ${books} Buchstellen; alle Zuordnungen und Materialansichten geprüft.`);
