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
- echte Startseite mit Kapitelkarten und visuellem Freischaltstatus
- subtile Motion-Atmosphäre über animierte Licht- und Raumakzente
- Lehrpersonen-Seite mit druckbarer Modulübersicht für PDF oder Ausdruck
- konsequente didaktische Verarbeitung der angegebenen Ressourcen statt bloßer Linksammlung
- vorbereitete Supabase-Anbindung für geräteübergreifenden Lernstand und Lehrpersonen-Dashboard

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

## Supabase-Setup

Für geräteübergreifende Lernstände und das Lehrpersonen-Dashboard ist eine vorbereitete
Supabase-Anbindung enthalten.

1. In Supabase ein neues Projekt anlegen
2. den Inhalt von [supabase-schema.sql](/Users/patrickfischer/Documents/New%20project/geschichte_bis_1500/supabase-schema.sql) im SQL-Editor ausführen
3. [supabase-config.js](/Users/patrickfischer/Documents/New%20project/geschichte_bis_1500/supabase-config.js) mit `url` und `anonKey` füllen
4. optional zuerst [supabase-config.example.js](/Users/patrickfischer/Documents/New%20project/geschichte_bis_1500/supabase-config.example.js) als Vorlage verwenden
5. nach der ersten Anmeldung die Lehrpersonen-Mail in Supabase auf `role = 'teacher'` hochstufen

Dann gilt:
- Schüler*innen können sich im Cloud-Sync-Panel anmelden und ihren Lernstand speichern
- die Lehrpersonen-Version kann die Cloud-Daten gesammelt laden
- ohne Supabase-Konfiguration bleibt die Lernumgebung lokal nutzbar

## Zusatzseite für Lehrpersonen

- `lehrpersonen.html`: vollständig geöffnete Parallelansicht der Lernumgebung mit
  Musterlösungen, Kontrollmodus und lokalem bzw. cloudfähigem Dashboard

## Dateiübersicht

- `index.html`: Oberfläche der Lernumgebung
- `lehrpersonen.html`: didaktische Begleitseite für Lehrpersonen
- `styles.css`: Layout und Gestaltung
- `app.js`: Moduldaten, Renderlogik, Sofortfeedback und Fortschritt
- `teacher.js`: Logik für Lehrpersonen-Zugang und Dashboard
- `supabase.js`: Cloud-Sync und Supabase-Dashboardanbindung
- `supabase-config.js`: Projektkonfiguration für Supabase
- `supabase-schema.sql`: Tabellen- und RLS-Schema für Supabase
- `assets/srf/`: lokal eingebundene SRF-Bildassets für die atmosphärische Modulgestaltung
- `.github/workflows/pages.yml`: automatische Veröffentlichung über GitHub Pages
