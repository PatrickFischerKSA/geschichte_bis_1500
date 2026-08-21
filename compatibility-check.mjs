import { readFileSync } from "node:fs";
import { Script } from "node:vm";

function read(path) {
  return readFileSync(path, "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(`Kompatibilitätsprüfung fehlgeschlagen: ${message}`);
}

const htmlFiles = ["index.html", "lehrpersonen.html", "harari-viewer.html", "textstelle.html"];
const html = htmlFiles.map((file) => read(file));
const app = read("app.js");
const cloud = read("cloudflare.js");
const teacherClient = read("teacher.js");
const styles = read("styles.css");
const clientCode = [app, cloud, teacherClient, read("harari-viewer.js"), read("textstelle.js")].join("\n");

for (const [page, scripts] of [["Schülerseite", [app, cloud]], ["Lehrpersonenseite", [app, cloud, teacherClient]]]) {
  try {
    new Script(scripts.join("\n"), { filename: page });
  } catch (error) {
    throw new Error(`Kompatibilitätsprüfung fehlgeschlagen: ${page} enthält kollidierende globale Deklarationen (${error.message}).`);
  }
}

html.forEach((source, index) => {
  assert(source.includes('name="viewport"') && source.includes("width=device-width"),
    `${htmlFiles[index]} besitzt keinen gerätegerechten Viewport.`);
  assert(source.includes('lang="de-CH"'),
    `${htmlFiles[index]} verwendet nicht konsequent de-CH.`);
});

assert(/html\s*\{[^}]*overflow-y:\s*auto/s.test(styles),
  "Das Wurzeldokument muss vertikal scrollbar bleiben.");
assert(/body\s*\{[^}]*min-height:\s*100%/s.test(styles) && /body\s*\{[^}]*overflow-y:\s*auto/s.test(styles),
  "Die normale Schülerseite muss eine plattformunabhängige vertikale Scrollfläche besitzen.");
for (const selector of [".welcome-overlay", ".thinker-modal"]) {
  const escaped = selector.replace(".", "\\.");
  const block = styles.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`, "s"))?.[1] || "";
  assert(/overflow-y:\s*auto/.test(block), `${selector} ist bei Windows-Skalierung nicht selbst scrollbar.`);
  assert(/overscroll-behavior:\s*contain/.test(block), `${selector} kann Scrollbewegungen unkontrolliert an die Seite weitergeben.`);
}
assert(app.includes("reconcileOverlayScrollLock") && app.includes('window.addEventListener("pageshow", reconcileOverlayScrollLock)'),
  "Die Scroll-Sperre wird nach Zurücknavigation oder Seitenwiederherstellung nicht zuverlässig abgeglichen.");
assert(!/addEventListener\(\s*["'](?:wheel|mousewheel|touchmove)["'][\s\S]{0,250}preventDefault/.test(clientCode),
  "Mausrad- oder Touch-Scrollen wird durch JavaScript blockiert.");
assert(!/navigator\.(?:userAgent|platform)[\s\S]{0,200}(?:Windows|Win32|Macintosh|MacIntel)/i.test(clientCode),
  "Die Anwendung enthält betriebssystemspezifische Verzweigungen statt gemeinsamer Browserlogik.");

const index = read("index.html");
const teacher = read("lehrpersonen.html");
const indexStyleVersion = index.match(/styles\.css\?v=([^"']+)/)?.[1];
const teacherStyleVersion = teacher.match(/styles\.css\?v=([^"']+)/)?.[1];
const indexAppVersion = index.match(/app\.js\?v=([^"']+)/)?.[1];
const teacherAppVersion = teacher.match(/app\.js\?v=([^"']+)/)?.[1];
assert(indexStyleVersion && indexStyleVersion === teacherStyleVersion,
  "Schüler- und Lehrpersonenseite laden unterschiedliche CSS-Stände.");
assert(indexAppVersion && indexAppVersion === teacherAppVersion,
  "Schüler- und Lehrpersonenseite laden unterschiedliche App-Stände.");

console.log("Kompatibilitätsprüfung erfolgreich: Windows und macOS, Scrollflächen, Overlays, Viewports und Cache-Stände geprüft.");
