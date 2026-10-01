(function () {
  const params = new URLSearchParams(window.location.search);

  function showText(id, value) {
    const element = document.getElementById(id);
    if (!element || !value?.trim()) return false;
    element.textContent = value.trim();
    element.hidden = false;
    return true;
  }

  const material = params.get("material");
  if (material) {
    document.title = `${params.get("title") || "Lernmaterial"} – Geschichte vor 1500`;
    showText("material-note", "Aufbereiteter Dossiertext der Lerneinheit mit Einordnung und Lernfakten. Keine Originaldatei.");
  }
  for (const key of ["why", "misconception"]) {
    if (showText(key, params.get(key))) document.getElementById(`${key}-section`).hidden = false;
  }
  for (const key of ["facts", "relevantItems", "relatedItems"]) {
    let items;
    try { items = JSON.parse(params.get(key) || "[]"); } catch { items = []; }
    if (!Array.isArray(items) || !items.length) continue;
    const list = document.getElementById(key);
    for (const item of items) {
      const li = document.createElement("li");
      li.textContent = typeof item === "string" ? item : [item.title, item.note].filter(Boolean).join(" – ");
      if (typeof item?.link === "string" && /^https?:\/\//i.test(item.link)) {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.title;
        link.target = "_blank";
        link.rel = "noreferrer";
        li.textContent = "";
        li.appendChild(link);
        if (item.note) li.appendChild(document.createTextNode(` – ${item.note}`));
      }
      list.appendChild(li);
    }
    document.getElementById(`${key}-section`).hidden = false;
  }

  showText("module-label", params.get("module") || "Textstelle");
  showText("title", params.get("title") || "Historische Textstelle");
  showText("meta", params.get("meta"));
  showText("locator", params.get("locator"));
  showText("quote", params.get("quote"));
  if (showText("thesis", params.get("thesis"))) document.getElementById("thesis-section").hidden = false;
  if (showText("context", params.get("context"))) document.getElementById("context-section").hidden = false;
})();
