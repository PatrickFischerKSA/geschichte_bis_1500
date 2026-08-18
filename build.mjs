import { cpSync, lstatSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/client", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });

for (const file of ["index.html", "lehrpersonen.html", "harari-viewer.html", "textstelle.html", "app.js", "teacher.js", "cloudflare.js", "harari-viewer.js", "textstelle.js", "styles.css"]) {
  cpSync(file, `dist/client/${file}`);
}
cpSync("assets", "dist/client/assets", {
  recursive: true,
  filter: source => !lstatSync(source).isSymbolicLink()
});
cpSync("worker/index.js", "dist/server/index.js");
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
