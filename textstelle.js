(function () {
  const params = new URLSearchParams(window.location.search);

  function showText(id, value) {
    const element = document.getElementById(id);
    if (!element || !value?.trim()) return false;
    element.textContent = value.trim();
    element.hidden = false;
    return true;
  }

  showText("module-label", params.get("module") || "Textstelle");
  showText("title", params.get("title") || "Historische Textstelle");
  showText("meta", params.get("meta"));
  showText("locator", params.get("locator"));
  showText("quote", params.get("quote"));
  if (showText("thesis", params.get("thesis"))) document.getElementById("thesis-section").hidden = false;
  if (showText("context", params.get("context"))) document.getElementById("context-section").hidden = false;
})();
