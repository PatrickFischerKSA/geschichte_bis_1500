# Geschichte bis 1500

Interaktive, statische GitHub-Lerneinheit für eine ausführliche Geschichtssequenz bis an die
Schwelle der Neuzeit.

Ziel-Repository: `https://github.com/PatrickFischerKSA/geschichte_bis_1500`

Die Lernumgebung ist als statische Seite angelegt und kann direkt über GitHub Pages veröffentlicht
werden.

## Was diese Version leistet

- 12 vollständig ausgearbeitete Module
- jedes Modul mit fester Struktur:
  Einstieg, Wissensinput, interaktive Quelle, Aufgaben, Vertiefung, Selbsttest, Merkkasten,
  Transferfrage, Inhaltssicherung
- Textfragen mit Musterantworten
- qualifiziertes Sofortfeedback auf Basis von Kriterien
- Fortschrittsanzeige im Browser
- Modulfreischaltung: das nächste Modul öffnet sich erst nach mindestens 60 Prozent in der
  Inhaltssicherung
- sichtbare Status-Badges pro Modul und Abschlusszertifikat nach bestandenen 12 Modulen
- Start- und Willkommensmaske mit Erklärung des Freischaltsystems
- Namensfeld für personalisierten Lernstand und personalisiertes Zertifikat
- lokale atmosphärische Bildwelten auf Basis der eingebauten SRF-Ressourcen
- konsequente didaktische Verarbeitung der angegebenen Ressourcen statt bloßer Linksammlung

## Quellenbasis

Die Einheit verwendet:

- Yuval Noah Harari, `Eine kurze Geschichte der Menschheit`
- die angegebenen SRF-school-Ressourcen zu Anthropozän, `1491`, Römern, Mittelalter,
  Kreuzzügen, Münzschatz, Pfahlbauern und `Grosse Völker`

Die Materialien sind im Interface in den Modulen didaktisiert und zusätzlich unten in der
Quellenbasis mit Einsatzfunktion aufgeführt.

## Start

1. `index.html` im Browser öffnen
2. Module über die Navigation oder die Zeitleiste aufrufen
3. Antworten direkt in die Textfelder schreiben
4. `Antwort prüfen` oder `Musterantwort zeigen` verwenden

## Zusatzseite für Lehrpersonen

- `lehrpersonen.html`: Modulmatrix, Zeitplanung, Kompetenzübersicht, Differenzierung und
  Vorschläge für Leistungsnachweise

## Dateiübersicht

- `index.html`: Oberfläche der Lernumgebung
- `lehrpersonen.html`: didaktische Begleitseite für Lehrpersonen
- `styles.css`: Layout und Gestaltung
- `app.js`: Moduldaten, Renderlogik, Sofortfeedback und Fortschritt
- `assets/srf/`: lokal eingebundene SRF-Bildassets für die atmosphärische Modulgestaltung
- `.github/workflows/pages.yml`: automatische Veröffentlichung über GitHub Pages
