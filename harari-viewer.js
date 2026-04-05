(function () {
  const params = new URLSearchParams(window.location.search);
  const page = Number(params.get("page") || "1");
  const label = `Harari-Stelle, S. ${page}`;
  const localParams = new URLSearchParams(window.location.search);
  const isLocal =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost" ||
    window.location.protocol === "file:";

  const pdfUrl = "assets/local/harari.pdf";
  const localViewerUrl = `http://127.0.0.1:4173/harari-viewer.html?${localParams.toString()}`;

  document.getElementById("title").textContent = label;
  document.getElementById("page-pill").textContent = `Zielseite ${page}`;
  document.getElementById("quote-note").textContent = "";
  document.getElementById("search-note").textContent = "";
  document.getElementById("local-link").href = localViewerUrl;
  document.getElementById("local-link").target = "_self";

  const status = document.getElementById("status");
  const canvas = document.getElementById("pdf-canvas");
  const context = canvas.getContext("2d");
  const localLink = document.getElementById("local-link");

  function setError(message) {
    status.textContent = message;
    status.classList.add("error");
  }

  if (!isLocal) {
    status.textContent = "Diese GitHub-Seite kann die lokale Harari-PDF nicht direkt laden.";
    document.getElementById("search-note").textContent =
      "Öffne den lokalen Viewer über den Button oben. Dort wird die genaue Seite gerendert, sobald die lokale Vorschau unter 127.0.0.1:4173 läuft.";
    return;
  }

  localLink.style.display = "none";

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
      status.remove();
    })
    .catch((error) => {
      console.error(error);
      setError(`Die Harari-Seite konnte nicht geladen werden: ${error.message}`);
    });
})();
