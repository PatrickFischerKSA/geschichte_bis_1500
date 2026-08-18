(function () {
  const params = new URLSearchParams(window.location.search);
  const rawPage = params.get("page") || "";
  const page = /^\d{1,4}$/.test(rawPage) ? Number(rawPage) : null;
  const heading = params.get("heading")?.trim();
  const thesis = params.get("thesis")?.trim();
  const context = params.get("context")?.trim();

  document.getElementById("page-label").textContent = page ? `Buchstelle S. ${page}` : "Buchstelle";
  document.getElementById("citation").textContent = page
    ? `Yuval Noah Harari, Eine kurze Geschichte der Menschheit, S. ${page}`
    : "Yuval Noah Harari, Eine kurze Geschichte der Menschheit";
  if (heading) document.getElementById("heading").textContent = heading;

  if (thesis) {
    document.getElementById("thesis").textContent = thesis;
    document.getElementById("thesis-section").hidden = false;
  }
  if (context) {
    document.getElementById("context").textContent = context;
    document.getElementById("context-section").hidden = false;
  }
})();
