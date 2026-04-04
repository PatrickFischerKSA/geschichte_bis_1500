(function () {
  const params = new URLSearchParams(window.location.search);
  const page = Number(params.get("page") || "1");
  const label = params.get("label") || `Harari-PDF, S. ${page}`;
  const quote = params.get("quote") || "";
  const search = params.get("search") || "";
  const isLocal =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost" ||
    window.location.protocol === "file:";

  const pdfUrl = "assets/local/harari.pdf";
  const rawPdfUrl = `${pdfUrl}#page=${page}`;

  document.getElementById("title").textContent = label;
  document.getElementById("page-pill").textContent = `Zielseite ${page}`;
  document.getElementById("quote-note").textContent = quote ? `Kurzes Zitat: ${quote}` : "";
  document.getElementById("search-note").textContent = search
    ? `Gesuchte Passage: ${search}`
    : "Keine Suchphrase übergeben.";
  document.getElementById("raw-link").href = rawPdfUrl;

  const status = document.getElementById("status");
  const canvas = document.getElementById("pdf-canvas");
  const context = canvas.getContext("2d");

  function setError(message) {
    status.textContent = message;
    status.classList.add("error");
  }

  if (!isLocal) {
    setError("Diese Ansicht funktioniert nur in der lokalen Vorschau unter 127.0.0.1 oder localhost.");
    return;
  }

  if (typeof window.pdfjsLib === "undefined") {
    setError("PDF.js konnte nicht geladen werden.");
    return;
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  window.pdfjsLib
    .getDocument(pdfUrl)
    .promise.then((pdf) => {
      if (page < 1 || page > pdf.numPages) {
        throw new Error(`Die PDF hat ${pdf.numPages} Seiten; angefordert wurde Seite ${page}.`);
      }
      return pdf.getPage(page);
    })
    .then((pdfPage) => {
      const viewport = pdfPage.getViewport({ scale: 1.45 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      return pdfPage.render({ canvasContext: context, viewport }).promise;
    })
    .then(() => {
      status.textContent = `Seite ${page} wurde korrekt gerendert.`;
    })
    .catch((error) => {
      console.error(error);
      setError(`Die Harari-Seite konnte nicht geladen werden: ${error.message}`);
    });
})();
