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
- sichtbare Status-Badges pro Modul und Abschlusszertifikat nach bestandenen 13 Modulen
- Start- und Willkommensmaske mit Erklärung des Freischaltsystems
- Namensfeld für personalisierten Lernstand und personalisiertes Zertifikat
- lokale atmosphärische Bildwelten auf Basis der eingebauten SRF-Ressourcen
- echte Startseite mit Kapitelkarten und visuellem Freischaltstatus
- subtile Motion-Atmosphäre über animierte Licht- und Raumakzente
- Lehrpersonen-Seite mit druckbarer Modulübersicht für PDF oder Ausdruck
- konsequente didaktische Verarbeitung der angegebenen Ressourcen statt blosser Linksammlung
- Cloudflare-Datenbank für geräteübergreifende Lernstände und das Lehrpersonen-Dashboard

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

## Cloudflare-Datenhaltung

Die veröffentlichte Plattform verwendet eine Cloudflare-D1-Datenbank:

- Schüler*innen registrieren sich mit Vorname, Nachname, Klasse und einem eigenen Passwort.
- Passwörter werden nur als gesicherte Hashwerte gespeichert.
- Lernstände werden automatisch dem persönlichen Konto zugeordnet.
- Das serverseitig geschützte Lehrpersonen-Dashboard zeigt beide Klassen und alle Modulstände.
- Fragen aus den Modulen können im Dashboard gelesen und beantwortet werden.

## Zusatzseite für Lehrpersonen

- `lehrpersonen.html`: vollständig geöffnete Parallelansicht der Lernumgebung mit
  Musterlösungen, Kontrollmodus und lokalem bzw. cloudfähigem Dashboard

## Dateiübersicht

- `index.html`: Oberfläche der Lernumgebung
- `lehrpersonen.html`: didaktische Begleitseite für Lehrpersonen
- `styles.css`: Layout und Gestaltung
- `app.js`: Moduldaten, Renderlogik, Sofortfeedback und Fortschritt
- `teacher.js`: Logik für Lehrpersonen-Zugang und Dashboard
- `cloudflare.js`: Anmeldung, Cloud-Synchronisation und Dashboardanbindung
- `worker/index.js`: geschützte Cloudflare-API
- `drizzle/`: Datenbankschema und Migration
- `assets/srf/`: lokal eingebundene SRF-Bildassets für die atmosphärische Modulgestaltung
- `.github/workflows/pages.yml`: automatische Veröffentlichung über GitHub Pages

## Scroll-Performance

Gesperrte Module werden zunächst als kompakte Vorschau aufgebaut; nach der Freischaltung entstehen die vollständigen Quellen und Aufgaben. Lernstände werden dabei nicht gelöscht oder umgeschrieben. In der freigeschalteten Lehrpersonenansicht bleiben alle Module vollständig verfügbar.

Die Seite verwendet nur die Scrollfläche des Wurzeldokuments. Dialoge sperren diese nur, solange sie offen sind; beim Schließen und Wiederherstellen der Seite wird die Sperre abgeglichen. Großflächige Hintergrundanimationen und Grafikfilter über den sehr langen Modulen wurden entfernt. Offscreen-Abschnitte freigeschalteter Module können vom Browser später gerendert werden; beim Drucken wird alles vollständig dargestellt.

`npm run scroll-check` prüft die kompakte Vorschau, die Freischaltung, den Erhalt gespeicherter Entwürfe, die vollständige Lehrpersonenansicht und das Freigeben der Scrollsperre. Der Check gehört zum Preflight und wird vor der GitHub-Pages-Veröffentlichung ausgeführt.
