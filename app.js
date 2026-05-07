const STORAGE_KEY = "geschichte_bis_1500-progress-v2";
const TEACHER_PREVIEW_STORAGE_KEY = "geschichte_bis_1500-teacher-preview-v1";
const TEACHER_DASHBOARD_KEY = "geschichte_bis_1500_teacher_dashboard_v1";
const HARARI_REFERENCE_VIEW_PATH = "http://127.0.0.1:4173/harari-viewer.html";

function isTeacherPage() {
  return document.body?.dataset?.mode === "teacher";
}

function isTeacherMode() {
  return isTeacherPage() && document.body?.dataset?.teacherAuthorized === "true";
}

function getStorageKey() {
  return isTeacherMode() ? TEACHER_PREVIEW_STORAGE_KEY : STORAGE_KEY;
}

const sourceCatalog = [
  {
    id: "harari-pdf",
    title: "Yuval Noah Harari, Eine kurze Geschichte der Menschheit",
    type: "Buch / PDF",
    role: "Strukturgebende Tiefenfolie der gesamten Einheit",
    didactics:
      "Aus dem PDF werden nicht bloß Schlagworte übernommen, sondern die Grobarchitektur der Einheit abgeleitet: kognitive Revolution, landwirtschaftliche Revolution, Vereinigungsprozesse durch Geld, Reiche und Religionen. Für die Module bis 1500 werden vor allem Teil 1, Teil 2 und Teil 3 didaktisch auf Frühgeschichte, Antike und Mittelalter zugeschnitten.",
    linkLabel: "Lokale Datei",
    link: null,
    note:
      "Datei: /Users/patrickfischer/Desktop/Harari-Y._Eine-kurze-Geschicht_9783641104986.pdf"
  },
  {
    id: "anthropozaen",
    title: "SRF school: Anthropozän – Das Zeitalter des Menschen",
    type: "SRF school",
    role: "Rahmung für Langzeitfolgen menschlichen Handelns",
    didactics:
      "Die Ressource wird nicht als eigenes Thema nach 1500 missverstanden, sondern als Schlusslinse genutzt: Von Feuer, Landwirtschaft und Metall bis zur Industrialisierung entstehen langfristige Mensch-Umwelt-Verhältnisse. Dadurch können Lernende frühe Innovationen als Vorgeschichte späterer globaler Eingriffe begreifen.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/einflussreiche-menschheit-anthropozaen-das-zeitalter-des-menschen"
  },
  {
    id: "1491",
    title: "SRF school: 1491 – Amerika vor Kolumbus",
    type: "SRF school",
    role: "Dekoloniale Perspektive und Globalisierung vor 1500",
    didactics:
      "Die Ressource korrigiert eurozentrische Startpunkte. Sie zeigt Besiedlung, soziale Organisation, Landwirtschaft, Kunst und Spiritualität in Amerika vor 1492. Didaktisch wird sie eingesetzt, um Lernende gegen das Missverständnis zu sensibilisieren, Geschichte beginne erst mit europäischer Ankunft.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/indigene-voelker-und-ihr-leben-1491-amerika-vor-kolumbus"
  },
  {
    id: "roemer-schweiz",
    title: "SRF school: Römer in der Schweiz",
    type: "SRF school",
    role: "Fallbeispiel für Imperium, Kulturkontakt und Infrastruktur",
    didactics:
      "Die Reihe wird als konkreter Beleg genutzt, wie Expansion Alltag, Verkehrswege, Recht, Ernährung und Siedlungsräume prägt. Sie hilft, Hararis abstrakte Imperiumslogik in regional greifbare Lernanlässe zu übersetzen.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/mit-unterrichtsmaterial-roemer-in-der-schweiz"
  },
  {
    id: "roemer-experiment",
    title: "SRF school: Das Römer-Experiment",
    type: "SRF school",
    role: "Rekonstruktion von Alltagsgeschichte",
    didactics:
      "Die Ressource macht Römerzeit nicht nur als Eroberungsgeschichte sichtbar, sondern als Alltagspraxis: Kochen, Werkzeuge, Gladiatorentum, rekonstruiertes Handeln. Sie stützt die Einsicht, dass Geschichte aus materieller Kultur, Experimenten und Nachstellungen erschlossen werden kann.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/leben-im-roemischen-reich-das-roemer-experiment"
  },
  {
    id: "ueken",
    title: "SRF school: Der Münzschatz von Ueken",
    type: "SRF school",
    role: "Quellenfall zu Geld, Vertrauen und Wirtschaft",
    didactics:
      "Der Münzfund wird als historische Quelle gelesen: nicht nur als Schatz, sondern als Informationsträger über Währung, Vermögen, Krisen und Netzwerke. Damit wird Hararis These zur verbindenden Kraft des Geldes konkretisiert.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/der-muenzschatz-von-ueken"
  },
  {
    id: "pfahlbauer",
    title: "SRF school: Pfahlbauer von Pfyn",
    type: "SRF school",
    role: "Jungsteinzeit durch Experimentalarchäologie erschließen",
    didactics:
      "Die Ressource wird als Brücke von Theorie zu Lebenswelt genutzt. Sie macht Hüttenbau, Werkzeuge, Kleidung, Nahrung und Projektlernen greifbar und eignet sich besonders, um Sesshaftigkeit, Alltag und materielle Kultur konkret zu machen.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/pfahlbauer-von-pfyn"
  },
  {
    id: "grosse-voelker",
    title: "SRF school: Grosse Völker",
    type: "SRF school",
    role: "Vernetzung, Wissenstransfer und Kulturleistungen",
    didactics:
      "Die Reihe erweitert den Blick über eine reine Rom-Mittelalter-Achse hinaus. Araber, Germanen und Karthager erscheinen als historische Akteure mit Fernhandel, Schriftsystemen und Wissensleistungen. So wird europäische Geschichte als Verflechtungsgeschichte lesbar.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/maechtige-pioniere-grosse-voelker"
  },
  {
    id: "kreuzzug",
    title: "SRF school: Der Kreuzzug der Kinder",
    type: "SRF school",
    role: "Quellenkritik und Religionsgeschichte",
    didactics:
      "Die Dokumentation wird als Musterfall historischer Kritik eingesetzt. Lernende fragen nicht nur, was passiert ist, sondern mit welchen Chroniken, Absichten und Deutungen das Ereignis überliefert wurde. So wird Mittelalterunterricht zugleich Quellenunterricht.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/gesellschaft-ethik-religion/mythos-oder-historischer-fakt-der-kreuzzug-der-kinder"
  },
  {
    id: "spurensuche",
    title: "SRF school: Eine kurze Geschichte über…",
    type: "SRF school",
    role: "Epochenvergleich und Rekonstruktion",
    didactics:
      "Die Reihe wird vor allem für Alte Ägypten und Mittelalter eingesetzt. Sie unterstützt die Frage, wie Geschichte rekonstruiert wird, und hilft, Klischees über angeblich dunkle oder lineare Epochen aufzubrechen.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/historische-spurensuche-eine-kurze-geschichte-ueber"
  },
  {
    id: "mittelalter-schweiz",
    title: "SRF school: Mittelalter in der Schweiz",
    type: "SRF school",
    role: "Alltagsgeschichte des Mittelalters",
    didactics:
      "Die Ressource liefert konkrete Themenfelder wie Hygiene, Verteidigung, Kochen, Statussymbole und archäologische Funde. Damit wird das Mittelalter als gelebte Lebenswelt statt als bloße Ritterkulisse unterrichtet.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/wie-die-leute-gelebt-haben-mittelalter-in-der-schweiz"
  },
  {
    id: "verruecktes-mittelalter",
    title: "SRF school: Das verrückte Mittelalter",
    type: "SRF school",
    role: "Einstiegsmedium für kindgerechte, aber differenzierte Mittelalterbilder",
    didactics:
      "Die Serie wird didaktisch als niederschwelliger Einstieg genutzt, um Burgen, Minnesänger, Hierarchien, Pest und Handel anzusprechen. Im Kurs wird sie immer mit Korrekturfragen verbunden, damit Humor und Vereinfachung nicht bei Stereotypen stehen bleiben.",
    linkLabel: "Original öffnen",
    link: "https://www.srf.ch/sendungen/school/geschichte-geografie/wie-lebten-die-leute-frueher-das-verrueckte-mittelalter"
  },
  {
    id: "fruehmenschen-video",
    title: "YouTube: Frühmenschen und Menschwerdung",
    type: "YouTube",
    role: "Ergänzungsfilm zu Menschenarten, Werkzeugen, Feuer und Entwicklung",
    didactics:
      "Der vom Nutzer eingebrachte Film dient als zusätzliche Filmgrundlage für Modul 2. Er soll die biologischen und technischen Voraussetzungen der Menschwerdung sichtbarer machen als es 1491 allein leisten kann.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=oxfAKidgl_8"
  },
  {
    id: "planet-reise-menschheit",
    title: "Planet Schule: Die außergewöhnliche Reise der Menschheit",
    type: "Planet Schule",
    role: "Überblick über Hominisation, Migration und globale Ausbreitung",
    didactics:
      "Der Film bündelt Entwicklungsschritte von frühen Menschenarten bis zur weltweiten Ausbreitung des Homo sapiens und eignet sich deshalb besonders für den großen Überblick in Modul 2.",
    linkLabel: "Film öffnen",
    link: "https://www.planet-schule.de/thema/die-aussergewoehnliche-reise-der-menschheit-film-100.html"
  },
  {
    id: "zdf-stammbaum",
    title: "ZDF Schule: Stammbaum",
    type: "ZDF Schule",
    role: "Nichtlineare Entwicklung mehrerer Menschenarten",
    didactics:
      "Das Material zeigt Frühgeschichte nicht als einfache Leiter, sondern als verzweigten Stammbaum aus mehreren Menschenarten, die sich überschneiden, aussterben und unterschiedliche Wege nehmen.",
    linkLabel: "Film öffnen",
    link: "https://schule.zdf.de/video/stammbaum-100"
  },
  {
    id: "faustkeil-zdf",
    title: "ZDF / Terra X: Wissenshappen – Faustkeil",
    type: "YouTube / ZDF",
    role: "Werkzeugtechnik als Schlüssel zur frühen Menschheitsgeschichte",
    didactics:
      "Der kurze Film verdichtet, wie ein Faustkeil Rohstoffwissen, Planung, Handarbeit und Weitergabe technischen Könnens in einem einzigen Gegenstand bündelt.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=V7PBy-5lGO8"
  },
  {
    id: "hominisation-zeitstrahl-ppt",
    title: "Arbeitspräsentation: Hominisation – Zeitleiste",
    type: "Lokale Präsentation",
    role: "Zeitraster von Alt-, Mittel- und Jungsteinzeit",
    didactics:
      "Die Präsentation unterstützt Modul 2, weil sie Frühgeschichte klar in Paläolithikum, Mesolithikum und Neolithikum gliedert und die langen Zeiträume der Menschwerdung übersichtlich ordnet.",
    linkLabel: "Lokale Präsentation",
    link: null,
    note: "Datei: /Users/patrickfischer/Downloads/Hominisation_Zeitleiste_Musterlösung.pptx"
  },
  {
    id: "hoehlenmalereien",
    title: "SRF Einstein: Rätselhafte Höhlenmalereien",
    type: "SRF / Einstein",
    role: "Vertiefung zu Symbolik, Kunst und Vorstellungswelten",
    didactics:
      "Der Film erweitert Modul 3 um ein direktes Material zu früher Bildsymbolik und prähistorischer Kunst.",
    linkLabel: "Film öffnen",
    link: "https://www.srf.ch/play/tv/einstein/video/raetselhafte-hoehlenmalereien?urn=urn:srf:video:d86c7be1-4c71-4660-868b-e3bd63cf95e6"
  },
  {
    id: "natgeo-fruehgeschichte",
    title: "National Geographic: Frühgeschichte und Höhlenkunst",
    type: "National Geographic",
    role: "Internationaler Themenraum zu Höhlenkunst, Frühgeschichte und Archäologie",
    didactics:
      "Der Themenraum erweitert Modul 3 um eine internationale Perspektive auf Höhlenkunst und frühe Bildwelten. Er dient als Ergänzung, damit Symbolik nicht nur regional, sondern als weltweites archäologisches Phänomen erscheint.",
    linkLabel: "Themenraum öffnen",
    link: "https://nationalgeographic.de/"
  },
  {
    id: "jaeger-sammler-video",
    title: "YouTube: Jäger und Sammler",
    type: "YouTube",
    role: "Zusätzliche Filmgrundlage zu mobilen Lebensformen",
    didactics:
      "Der vom Nutzer eingebrachte Film soll Modul 4 direkter auf Jagd, Sammeln, Mobilität und Umweltwissen beziehen.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=6xSNuCXNZmw"
  },
  {
    id: "steinzeit-menschen-video",
    title: "YouTube: Die Steinzeit-Menschen - Alles, was Du wissen musst!",
    type: "YouTube",
    role: "Breiter Überblick über Lebensformen der Steinzeit",
    didactics:
      "Der Film verdichtet Umweltanpassung, Nahrung, Werkzeuge und Lebensweise der Steinzeit in einem größeren Überblick und ergänzt damit Modul 4.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=ZjejoT1gFOc"
  },
  {
    id: "neolithische-revolution-video",
    title: "YouTube: Neolithische Revolution",
    type: "YouTube",
    role: "Zusätzliche Streitfolie zur Sesshaftigkeit",
    didactics:
      "Der Film ergänzt Modul 5 um die zugespitzte Frage, ob die neolithische Revolution eher Gewinn oder Fehlentwicklung war.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=hoKPh0u4YjY"
  },
  {
    id: "neolithisierung-anfaenge-doc",
    title: "Materialdossier: Neolithisierung – Anfänge",
    type: "Lokales Dossier",
    role: "Fruchtbarer Halbmond, Sesshaftigkeit und Streit um die Neolithisierung",
    didactics:
      "Das Dossier bündelt den Beginn von Sesshaftigkeit und Nahrungsproduktion im Fruchtbaren Halbmond und bringt Harari und Graeber/Wengrow direkt in die Frage nach offenen oder linearen Wegen hinein.",
    linkLabel: "Lokales Dokument",
    link: null,
    note: "Datei: /Users/patrickfischer/Downloads/Neolithisierung_Anfänge.docx"
  },
  {
    id: "neolithisierung-europa-doc",
    title: "Materialdossier: Neolithisierung in Europa",
    type: "Lokales Dossier",
    role: "Ausbreitung von Ackerbau und Viehzucht nach Europa",
    didactics:
      "Das Dossier konkretisiert die langsame Ausbreitung nach Europa, die Rolle von Migration und Übernahme sowie die besondere Bedeutung der Pfahlbausiedlungen im Alpenraum.",
    linkLabel: "Lokales Dokument",
    link: null,
    note: "Datei: /Users/patrickfischer/Downloads/Neolithisierung_Europa.docx"
  },
  {
    id: "goebekli-tepe",
    title: "Planet Schule: Göbekli Tepe – der älteste Tempel der Menschheit",
    type: "Planet Schule / ARD",
    role: "Monumente und Rituale vor ausgebauter Staatlichkeit",
    didactics:
      "Göbekli Tepe verschiebt die Frage nach Sesshaftigkeit und Hierarchie, weil aufwendige Kultbauten sichtbar werden, bevor klassische Staatsordnungen greifbar sind.",
    linkLabel: "Film öffnen",
    link: "https://www.ardmediathek.de/video/planet-schule/goebekli-tepe-der-aelteste-tempel-der-menschheit/wdr/Y3JpZDovL3BsYW5ldC1zY2h1bGUuZGUvQVJEXzkxODBfdmlkZW8"
  },
  {
    id: "catalhoeyuk-terrax",
    title: "Terra X / Planet Wissen: Çatalhöyük – Großsiedlung",
    type: "Planet Wissen / Terra X",
    role: "Dichte Siedlung ohne klassische Königspyramide",
    didactics:
      "Çatalhöyük eignet sich besonders, um dichte Besiedlung, Hausverbände, Kult und Alltag zu zeigen, ohne sofort in das bekannte Muster von Palast, König und Staat zu kippen.",
    linkLabel: "Film öffnen",
    link: "https://www.planet-wissen.de/geschichte/antike/das_antike_rom/terrax-grosssiedlung_Catalhoeyuek-film-100.html"
  },
  {
    id: "catalhoeyuk-3d",
    title: "YouTube: 3D Çatalhöyük Project Animation",
    type: "YouTube",
    role: "Räumlicher Eindruck einer frühen Großsiedlung",
    didactics:
      "Die Animation macht Hausdichte, Dachzugänge und Siedlungsstruktur sichtbar und hilft, abstrakte Beschreibungen einer frühen Großsiedlung räumlich zu verstehen.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=W2qypDEqNkA"
  },
  {
    id: "hochkulturen-video",
    title: "YouTube: Hochkulturen",
    type: "YouTube",
    role: "Zusätzliche Übersicht zu Schrift, Verwaltung und Staat",
    didactics:
      "Der Film ergänzt Modul 6 um eine breitere Übersicht zu Hochkulturen jenseits des Ägypten-Beispiels.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=kDarvo1XSMA"
  },
  {
    id: "einfach-antike-hochkultur",
    title: "YouTube: Was ist eine \"Hochkultur\"?",
    type: "YouTube / Einfach Antike",
    role: "Begriffsarbeit zu Hochkultur, Schrift, Herrschaft und Arbeitsteilung",
    didactics:
      "Der Film hilft, den Begriff Hochkultur nicht nur an Monumenten festzumachen, sondern an Schrift, Herrschaft, Spezialisierung und Verdichtung zu klären.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=aAdI1zca5Ys"
  },
  {
    id: "archaeologie-datierung",
    title: "Planet Schule: Altersbestimmung in der Archäologie",
    type: "Planet Schule",
    role: "Methoden der Datierung und Rekonstruktion",
    didactics:
      "Das Material erklärt, wie C14, Dendrochronologie, Fundschichten und Vergleichsfunde historische Aussagen überhaupt erst absichern.",
    linkLabel: "Film öffnen",
    link: "https://www.planet-schule.de/schwerpunkt/woher-wissen-wir-das/altersbestimmung-in-der-archaeologie-film-100.html"
  },
  {
    id: "archaeologie-doc",
    title: "Materialdossier: Archäologie",
    type: "Lokales Dossier",
    role: "Stratigraphie, Datierung und Auswertung von Funden",
    didactics:
      "Das Dossier erklärt Archäologie als unterirdisches Archiv und verbindet Grabung, Stratigraphie, relative und absolute Chronologie mit naturwissenschaftlichen Methoden.",
    linkLabel: "Lokales Dokument",
    link: null,
    note: "Datei: /Users/patrickfischer/Downloads/Archäologie.docx"
  },
  {
    id: "griechenland-demokratie-video",
    title: "YouTube: Griechenland, Polis und attische Demokratie",
    type: "YouTube",
    role: "Filmgrundlage zu Polis, Bürgerrecht und direkter Demokratie",
    didactics:
      "Der Film ergänzt Modul 7 um die politische Entwicklung der griechischen Poliswelt und erklärt die attische Demokratie als konkrete antike Ordnungsform.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=QLOpPK3_Y2U&t=621s"
  },
  {
    id: "rom-republik-video",
    title: "YouTube: Rom, Republik und politische Ordnung",
    type: "YouTube",
    role: "Filmgrundlage zu Senat, Magistraten und republikanischer Verfassung",
    didactics:
      "Der Film ergänzt Modul 7 um die politische Entwicklung Roms vor der Kaiserzeit und erklärt die römische Republik als eigenständige antike Ordnungsform.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=O7LH4JmmRV8"
  },
  {
    id: "helvetier-hls",
    title: "HLS: Helvetier",
    type: "Historisches Lexikon der Schweiz",
    role: "Grundlage für Siedlungsraum, politische Einordnung und Caesars Problemstellung",
    didactics:
      "Der Artikel bündelt den Forschungsstand zu den Helvetiern: Siedlungsgebiet, antike Überlieferung, politische Ordnung und das Problem, dass Caesar die wichtigste, aber interessengeleitete Textquelle bleibt.",
    linkLabel: "Original öffnen",
    link: "https://hls-dhs-dss.ch/articles/008016/2007-07-30/"
  },
  {
    id: "kelten-engehalbinsel",
    title: "SRF: Keltische Schätze der Berner Engehalbinsel",
    type: "SRF / Schweiz aktuell",
    role: "Archäologisches Gegenbild zum Bauernvolk-Klischee",
    didactics:
      "Der Beitrag macht deutlich, dass die Helvetier archäologisch nicht als armes Bauernvolk erscheinen, sondern als reiche, religiöse und weit vernetzte Gesellschaft mit anspruchsvoller materieller Kultur.",
    linkLabel: "Film öffnen",
    link: "https://www.srf.ch/play/tv/schweiz-aktuell/video/die-keltischen-schaetze-der-berner-engehalbinsel?urn=urn:srf:video:d4d073db-d50c-461c-9d83-c77e5f0678ee"
  },
  {
    id: "kelten-doc",
    title: "Materialdossier: Die Kelten",
    type: "Lokales Dossier",
    role: "Hallstatt, La Tène, Oppida und Helvetier",
    didactics:
      "Das Dossier bündelt Grundwissen zu Hallstatt und La Tène, Oppida, Druiden, Fernkontakten und dem Bruch durch Caesar.",
    linkLabel: "Lokales Dokument",
    link: null,
    note: "Datei: /Users/patrickfischer/Downloads/Die Kelten.docx"
  },
  {
    id: "kelten-praesentation",
    title: "Arbeitspräsentation: Kelten – Überblick",
    type: "Lokale Präsentation",
    role: "Keltische Welt zwischen Klischee und archäologischer Korrektur",
    didactics:
      "Die Präsentation eignet sich, um gängige Gallier- und Barbarenbilder ausdrücklich aufzurufen und dann mit Hallstatt, La Tène, Oppida und archäologischen Befunden zu korrigieren.",
    linkLabel: "Lokale Präsentation",
    link: null,
    note: "Datei: /Users/patrickfischer/Downloads/PPP_Kelten.pptx"
  },
  {
    id: "kelten-experiment",
    title: "Planet Schule: Das Kelten-Experiment – Wie lebten die Kelten?",
    type: "Planet Schule",
    role: "Keltischer Alltag zwischen Hausbau, Handwerk und Vorrat",
    didactics:
      "Der Film macht die keltische Lebenswelt materiell greifbar und zeigt, dass Oppida und Siedlungen aus Handwerk, Bauen, Kochen, Vorräten und sozialer Ordnung bestehen.",
    linkLabel: "Film öffnen",
    link: "https://www.planet-schule.de/schwerpunkt/das-kelten-experiment/wie-lebten-die-kelten-film-100.html"
  },
  {
    id: "kelten-roemer-srf-einzelfilm",
    title: "SRF: Die Kelten und die Römer",
    type: "SRF",
    role: "Kulturkontakt und Überlagerung zwischen keltischer und römischer Welt",
    didactics:
      "Der Einzelfilm eignet sich, um den Übergang von keltischer Eigenständigkeit zur römischen Überformung konkret und regional zu fassen.",
    linkLabel: "Film öffnen",
    link: "https://www.srf.ch/play/tv/roemer-in-der-schweiz/video/die-kelten-und-die-roemer?urn=urn:srf:video:3da18acb-1a0a-4cab-97ce-0b0fb3f4f4e4"
  },
  {
    id: "phbern-kelten",
    title: "PHBern: Kelten und gallo-römische Zeit",
    type: "PHBern",
    role: "Schweizer Raum zwischen keltischer und römischer Ordnung",
    didactics:
      "Das Ideenset verbindet Kelten und gallo-römische Zeit und eignet sich deshalb besonders, um Kontinuitäten und Brüche im schweizerischen Raum herauszuarbeiten.",
    linkLabel: "Material öffnen",
    link: "https://www.phbern.ch/dienstleistungen/unterrichtsmedien/ideenset-gallo-roemische-zeit/kelten"
  },
  {
    id: "kelten-nationalmuseum",
    title: "Nationalmuseum: Warum die Kelten tapfer waren",
    type: "Blog Nationalmuseum",
    role: "Einführung in Hallstatt, La Tène und keltische Kultur",
    didactics:
      "Der Beitrag eignet sich als knapper Überblick über Hallstatt- und La-Tène-Zeit, Metallkultur, Fernhandel und die Frage, warum die Kelten als erste europäische Hochkultur beschrieben werden.",
    linkLabel: "Original öffnen",
    link: "https://blog.nationalmuseum.ch/2018/07/warum-die-kelten-tapfer-waren/"
  },
  {
    id: "archaeologie-schweiz",
    title: "Landesmuseum: Archäologie Schweiz",
    type: "Landesmuseum",
    role: "Archäologischer Rahmen für frühe Schweiz",
    didactics:
      "Die Seite liefert den breiten archäologischen Rahmen, in den keltische Siedlungen, Funde und Verkehrsachsen in der Schweiz eingeordnet werden können.",
    linkLabel: "Original öffnen",
    link: "https://www.landesmuseum.ch/archaeologie-schweiz"
  },
  {
    id: "kelten-swiss-spectator",
    title: "Swiss Spectator: Die Kelten in der Schweiz",
    type: "Online-Artikel",
    role: "Überblick zu Hallstatt, La Tène und keltischer Schweiz",
    didactics:
      "Der Text verbindet die großen archäologischen Phasen Hallstatt und La Tène mit keltischer Besiedlung, oppida, Handel und dem Übergang zur römischen Welt.",
    linkLabel: "Original öffnen",
    link: "https://www.swiss-spectator.ch/de/die-kelten-in-der-schweiz/"
  },
  {
    id: "kelten-squix",
    title: "Squix: Die Kelten in der Schweiz",
    type: "Online-Artikel",
    role: "Zusätzliche Übersicht zu keltischen Gruppen und Regionen",
    didactics:
      "Die Seite dient als ergänzende Übersicht, um Namen, Regionen und Grundzüge der keltischen Schweiz schneller zu wiederholen.",
    linkLabel: "Original öffnen",
    link: "https://www.squix.org/ottenbach/index.php?title=Die_Kelten_in_der_Schweiz"
  },
  {
    id: "kempraten-pdf",
    title: "Stadtspiegel 2018: Schwerpunkt Kempraten",
    type: "Lokales PDF",
    role: "Regionales Material zu Siedlungsraum am oberen Zürichsee",
    didactics:
      "Das PDF dient als lokale Vertiefung zum Raum Kempraten und zur Frage, wie Siedlung, Uferlage und Verkehrsraum über längere Zeit zusammenhängen.",
    linkLabel: "Lokale Datei",
    link: null,
    note: "Datei: /Users/patrickfischer/Desktop/Stadtspiegel_2018_Schwerpunkt_Kempraten.pdf"
  },
  {
    id: "jahresbericht-2004-pdf",
    title: "Archäologischer Jahresbericht 2004",
    type: "Lokales PDF",
    role: "Lokale archäologische Ergänzung",
    didactics:
      "Das PDF dient als zusätzliche lokale Vertiefung zu Funden, Grabungen und Befundlagen im schweizerischen Raum.",
    linkLabel: "Lokale Datei",
    link: null,
    note: "Datei: /Users/patrickfischer/Desktop/Archäologischer Jahresbericht 2004.pdf"
  },
  {
    id: "roemische-verkehrswege-pdf",
    title: "Römische Verkehrswege",
    type: "Lokales PDF",
    role: "Übergang von keltischem Siedlungsraum zu römischer Raumordnung",
    didactics:
      "Das PDF ergänzt die Einheit dort, wo aus vorrömischen Räumen römisch geordnete Verkehrsachsen werden.",
    linkLabel: "Lokale Datei",
    link: null,
    note: "Datei: /Users/patrickfischer/Desktop/PBA.DOK2.461p-HSpi-2021-Roemische-Verkehrswege.pdf"
  },
  {
    id: "christentum-video",
    title: "YouTube: Christentum",
    type: "YouTube",
    role: "Filmgrundlage zu christlichem Glauben und Ausbreitung",
    didactics:
      "Der Film ergänzt Modul 9 um eine explizite Einführung in Christentum, Glaubensinhalte und historische Ausbreitung.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=oUzail_XJsc"
  },
  {
    id: "judentum-video",
    title: "YouTube: Judentum",
    type: "YouTube",
    role: "Filmgrundlage zu Judentum und jüdischer Tradition",
    didactics:
      "Der Film ergänzt Modul 9 um eine explizite Einführung in Judentum, Tora, Tradition und historische Kontinuität.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=NlL0NWSLYVA"
  },
  {
    id: "islam-video",
    title: "YouTube: Islam",
    type: "YouTube",
    role: "Filmgrundlage zu Islam und islamischer Welt",
    didactics:
      "Der Film ergänzt Modul 9 um eine explizite Einführung in Islam, Koran, Glaubenspraxis und historische Ausbreitung.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=8iCXOd4TzQU"
  },
  {
    id: "stadt-mittelalter-video",
    title: "YouTube: Stadt im Mittelalter",
    type: "YouTube",
    role: "Filmgrundlage zu Stadtleben, Märkten und Wandel",
    didactics:
      "Der Film ergänzt Modul 11 um eine direkt städtische Perspektive auf Hoch- und Spätmittelalter.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=U0cnJDPC06Q"
  },
  {
    id: "kloester-video",
    title: "YouTube: Klöster im Mittelalter",
    type: "YouTube",
    role: "Filmgrundlage zu Kirche, Bildung und Klosterleben",
    didactics:
      "Der Film ergänzt Modul 10 um Klöster als Räume von Religion, Arbeit, Ordnung und Bildung.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=xPiOlNDZlgk"
  },
  {
    id: "eidgenossenschaft-video",
    title: "YouTube: Entstehung der Eidgenossenschaft",
    type: "YouTube",
    role: "Filmgrundlage zu Herrschaftsordnung und spätmittelalterlicher Politik",
    didactics:
      "Der Film ergänzt Modul 10 um ein konkretes spätmittelalterliches Herrschafts- und Bündnisbeispiel aus dem schweizerischen Raum.",
    linkLabel: "Film öffnen",
    link: "https://www.youtube.com/watch?v=eNJrvZpz7lo"
  }
];

const thinkerProfiles = {
  harari: {
    label: "Harari kurz",
    title: "Yuval Noah Harari",
    subtitle: "Historiker, geboren 1976 in Israel",
    intro:
      "Harari ordnet die Menschheitsgeschichte als Abfolge großer Umbrüche. Entscheidend sind für ihn nicht einzelne Herrscher, sondern Veränderungen, die viele Lebensbereiche zugleich neu ordnen.",
    bioPoints: [
      "lehrt und forscht zur Weltgeschichte und zur Geschichte großer Entwicklungslinien",
      "wurde mit 'Eine kurze Geschichte der Menschheit' international bekannt",
      "interessiert sich besonders dafür, wie große menschliche Ordnungen entstehen und stabil bleiben",
      "äußert sich heute auch stark zu künstlicher Intelligenz, Datenmacht und den politischen Risiken digitaler Kontrolle"
    ],
    thinkingPoints: [
      "Die kognitive Revolution macht große Kooperation durch Sprache, Mythen und gemeinsame Vorstellungen möglich.",
      "Die landwirtschaftliche Revolution verdichtet Gesellschaften, erzeugt Überschüsse, Abhängigkeiten und neue Ungleichheiten.",
      "Reiche, Geld und Religion verbinden immer größere Räume und schaffen gemeinsame Ordnungen über große Distanzen hinweg.",
      "Geschichte erscheint deshalb stark als Verdichtung immer größerer Netze von Kooperation, Herrschaft und Vereinheitlichung.",
      "In seinen neueren Warnungen zu KI betont Harari, dass Menschen unter Bedingungen totaler Datenerfassung zu 'hackable animals' werden könnten."
    ],
    contrastTitle: "Worauf Harari den Akzent legt",
    contrastPoints: [
      "große Entwicklungsschritte statt vieler paralleler Möglichkeiten",
      "Revolutionen als Wendepunkte der Menschheitsgeschichte",
      "wachsende Reichweite gemeinsamer Ordnungen",
      "Warnung vor Datenmacht, KI-Steuerung und manipulierbaren Menschen"
    ]
  },
  graeberWengrow: {
    label: "Graeber/Wengrow kurz",
    title: "David Graeber und David Wengrow",
    subtitle: "Anthropologe (1961–2020) und Archäologe (geboren 1972)",
    intro:
      "Graeber und Wengrow widersprechen linearen Erzählungen der Tiefengeschichte. Für sie zeigt die Frühgeschichte nicht nur wenige große Stufen, sondern viele bewusste Entscheidungen, Versuche und verworfene Wege.",
    bioPoints: [
      "David Graeber war Anthropologe und schrieb über Macht, Schulden, Arbeit und politische Freiheit",
      "Graeber stand politischen Basisbewegungen nahe und wurde besonders im Umfeld von Occupy als wichtiger öffentlicher Intellektueller wahrgenommen",
      "David Wengrow ist Archäologe und forscht zu frühen Städten, Staaten und sozialen Ordnungen",
      "gemeinsam veröffentlichten sie 'The Dawn of Everything', eine Gegenposition zu linearen Ursprungserzählungen"
    ],
    thinkingPoints: [
      "Frühe Menschen lebten nicht einfach immer in denselben kleinen Gruppen, sondern konnten ihre soziale Ordnung saisonal verändern.",
      "Landwirtschaft führt nicht automatisch zu Eliten, Steuern und Staat; Mischformen und Alternativen bleiben lange möglich.",
      "Große Siedlungen und Städte müssen nicht zwingend Königtum oder starre Hierarchien hervorbringen.",
      "Geschichte enthält daher auch verworfene Möglichkeiten, bewusste politische Wahl und Brüche innerhalb scheinbar großer Linien."
    ],
    contrastTitle: "Worauf Graeber und Wengrow den Akzent legen",
    contrastPoints: [
      "offene Entwicklung statt Einbahnstraße",
      "politische Wahlmöglichkeiten schon in der Frühgeschichte",
      "Komplexität ohne Automatismus zu Hierarchie und Staat"
    ]
  }
};

const masterTimeline = [
  {
    epoch: "Frühgeschichte",
    time: "ca. 2,5 Mio. Jahre v. heute",
    title: "Frühe Menschenarten und Werkzeuge",
    body:
      "Hier beginnt die lange Vorgeschichte des Menschen: verschiedene Menschenarten, freie Hände, Werkzeuge, Feuer und die Frage, warum Homo sapiens anfangs noch kein offensichtlicher Sieger war.",
    modules: ["modul-2"]
  },
  {
    epoch: "Frühgeschichte",
    time: "ca. 100'000–70'000 v. heute",
    title: "Frühe Sapiens ohne klaren Vorsprung",
    body:
      "Die ersten Sapiens in Ostafrika sind biologisch modern, aber noch nicht automatisch überlegen. Mehrere Menschenarten leben gleichzeitig, Ausbreitung und Erfolg müssen also historisch erklärt werden.",
    modules: ["modul-2"]
  },
  {
    epoch: "Frühgeschichte",
    time: "ca. 70'000–30'000 v. heute",
    title: "Kognitive Revolution",
    body:
      "Sprache, Klatsch, Mythen und fiktive Vorstellungen erweitern Kooperation weit über kleine Gruppen hinaus. Kunst, Höhlenbilder und Symbolsysteme werden zu historischen Spuren kultureller Ordnung.",
    modules: ["modul-3"]
  },
  {
    epoch: "Frühgeschichte",
    time: "ca. 45'000–18'000 v. heute",
    title: "Migration, Australien und Amerika",
    body:
      "Boote, Nadeln, Kunst und weite Wanderungen machen deutlich, wie anpassungsfähig Menschen werden. Über Landbrücke und Kanus gelangen Gruppen später auch nach Amerika und entwickeln dort vielfältige Lebensweisen.",
    modules: ["modul-2", "modul-4", "modul-12"]
  },
  {
    epoch: "Frühgeschichte",
    time: "Vor 10'000 v. Chr.",
    title: "Jäger und Sammler als Normalform",
    body:
      "Über den größten Teil der Menschheitsgeschichte leben Menschen mobil. Unterkünfte, Nahrung, Wege, Jahreszeitenwissen und mündliche Überlieferung sichern das Überleben ohne feste Speicher und Staaten. Graeber und Wengrow betonen zusätzlich, dass solche Gruppen sich saisonal sehr verschieden ordnen konnten und politisch nicht auf eine einzige Form festgelegt waren.",
    modules: ["modul-4"]
  },
  {
    epoch: "Neolithikum",
    time: "ca. 9600–8200 v. Chr.",
    title: "Göbekli Tepe und frühe Kultzentren",
    body:
      "Noch bevor klassische Staaten sichtbar werden, entstehen mit Göbekli Tepe monumentale Kultanlagen. Das verschiebt die alte Vorstellung, erst sesshafte Bauernstaaten hätten große religiöse Zentren hervorbringen können.",
    modules: ["modul-5", "modul-6"]
  },
  {
    epoch: "Neolithikum",
    time: "ca. 7400–6200 v. Chr.",
    title: "Çatalhöyük und dichte Siedlungen",
    body:
      "Çatalhöyük zeigt dichte Hausverbände, Dachzugänge, Wandmalerei und gemeinschaftliche Ordnung, ohne dass sofort ein klarer Palast- oder Königsstaat greifbar wird. Gerade hier wird der Streit um frühe Komplexität besonders sichtbar.",
    modules: ["modul-5", "modul-6"]
  },
  {
    epoch: "Neolithikum",
    time: "ab ca. 10'000 v. Chr.",
    title: "Landwirtschaft und Sesshaftigkeit",
    body:
      "Ackerbau, Viehzucht, Vorrat und feste Häuser verändern Alltag und Sozialordnung. Aus Planung, Arbeit, Besitz und Ertragsrisiko entstehen Dörfer, Überschüsse und neue Ungleichheiten. Zugleich ist der Übergang nicht überall gleich: Landwirtschaft kann mit älteren Lebensweisen kombiniert, begrenzt oder unterschiedlich politisch organisiert werden.",
    modules: ["modul-5"]
  },
  {
    epoch: "Frühe Hochkulturen",
    time: "ab ca. 3500–3000 v. Chr.",
    title: "Schrift, Listen und frühe Staaten",
    body:
      "Tontafeln, Hieroglyphen, Speicher und Abgaben zeigen, dass frühe Herrschaft auf Zählen, Schreiben und Verwalten beruht. Hochkulturen stabilisieren Macht nicht nur militärisch, sondern durch Listen, Beamte, Kalender und religiöse Ordnung. Graeber und Wengrow setzen dagegen, dass große Siedlungen und dichte Besiedlung nicht automatisch immer in derselben Herrschaftsform enden.",
    modules: ["modul-6"]
  },
  {
    epoch: "Frühe Hochkulturen",
    time: "ca. 3000–30 v. Chr.",
    title: "Ägypten: Nil, Pharao und Maat",
    body:
      "Regelmäßige Nilüberschwemmungen sichern Ernten und Überschüsse. Pharao, Beamte, Tempel und Hieroglyphen verbinden Wirtschaft, Herrschaft und Religion zu einer langen Reichsordnung. Im Unterschied zu Mesopotamien mit mehreren konkurrierenden Stadtstaaten entsteht am Nil früh ein stärker zentralisiertes Flussreich.",
    modules: ["modul-6"]
  },
  {
    epoch: "Frühe Hochkulturen",
    time: "ca. 2250–221 v. Chr.",
    title: "Großreiche und Bürokratien",
    body:
      "Von Sargon über Assyrer und Babylon bis zur Qin-Dynastie entsteht die Logik großer Reiche: Steuern, Heere, Beamte und gemeinsame Ordnungen verbinden viele Menschen über große Räume hinweg.",
    modules: ["modul-6", "modul-7"]
  },
  {
    epoch: "Späte Eisenzeit",
    time: "ca. 800–58 v. Chr.",
    title: "Kelten, Oppida und die Helvetier",
    body:
      "Hallstatt und La Tène prägen die keltische Welt in Mitteleuropa. Im Gebiet der heutigen Schweiz entstehen oppida, Fernhandelsbeziehungen, Münzgeld, Heiligtümer und regionale Machtzentren. Die Helvetier erscheinen dadurch nicht als primitive Vorstufe Roms, sondern als komplexe eisenzeitliche Gesellschaft, deren Welt 58 v. Chr. mit Caesars Eingriff einen harten Bruch erlebt.",
    modules: ["modul-7-kelten"]
  },
  {
    epoch: "Antike",
    time: "5. Jh. v. Chr.",
    title: "Athen und die attische Demokratie",
    body:
      "In Athen entsteht eine direkte Bürgerdemokratie mit Volksversammlung, Rat, Losverfahren und politischer Beteiligung freier männlicher Bürger. Zugleich bleiben Frauen, Metöken und Sklaven ausgeschlossen.",
    modules: ["modul-7"]
  },
  {
    epoch: "Antike",
    time: "509–27 v. Chr.",
    title: "Römische Republik und Mischverfassung",
    body:
      "Rom entwickelt eine republikanische Ordnung mit Senat, Magistraten, Volksversammlungen und jährlich wechselnden Ämtern. Die Republik verbindet Teilhabe, Konkurrenz der Eliten und Expansion.",
    modules: ["modul-7"]
  },
  {
    epoch: "Antike",
    time: "1. Jh. v. Chr. bis 2. Jh. n. Chr.",
    title: "Rom als Raumordnung",
    body:
      "Das Römische Reich verknüpft Straßen, Brücken, Lager, Recht, Münzen und Alltagskultur. Imperium bedeutet hier nicht nur Eroberung, sondern Organisation von Verkehr, Stadt und Versorgung.",
    modules: ["modul-7", "modul-8"]
  },
  {
    epoch: "Antike bis Frühmittelalter",
    time: "1. Jahrtausend v. Chr. bis 7. Jh. n. Chr.",
    title: "Weltreligionen und religiöse Ordnung",
    body:
      "Religionen verbinden Normen, Werte und übermenschliche Ordnung. Judentum, Christentum und Islam schaffen große Gemeinschaften, legitimieren Herrschaft und verknüpfen Glauben mit Wissen und Mobilität.",
    modules: ["modul-9"]
  },
  {
    epoch: "Mittelalter",
    time: "ca. 800–1300",
    title: "Mittelalterliche Herrschaftsräume",
    body:
      "Kirche, Klöster, Burgen, Stände und Bündnisse prägen die mittelalterliche Gesellschaft. Alltagsgeschichte zeigt Küche, Hygiene, Verteidigung, Bildung und Herrschaft jenseits bloßer Ritterklischees.",
    modules: ["modul-10"]
  },
  {
    epoch: "Mittelalter",
    time: "ca. 1000–1500",
    title: "Städte, Märkte, Pilger und Kreuzzüge",
    body:
      "Mittelalterliche Städte verdichten Handel, Handwerk und Mobilität. Quellen wie Chroniken zum Kinderkreuzzug zeigen zugleich, wie vorsichtig historische Überlieferung geprüft werden muss.",
    modules: ["modul-11"]
  },
  {
    epoch: "Spätes Mittelalter",
    time: "1491/1492",
    title: "Amerika vor Kolumbus und der Einschnitt von 1492",
    body:
      "1491 markiert entwickelte indigene Gesellschaften mit Landwirtschaft, Sprachen, Kunst und politischen Ordnungen. 1492 ist daher ein Einschnitt, aber nicht der Anfang amerikanischer Geschichte.",
    modules: ["modul-12"]
  },
  {
    epoch: "Langzeitbilanz",
    time: "um 1500 und darüber hinaus",
    title: "Langzeitfolgen und Anthropozän",
    body:
      "Der Schluss verbindet alle Linien: Sprache, Sesshaftigkeit, Staat, Geld, Religion und globale Vernetzung wirken weit über 1500 hinaus und führen in die Frage nach den langfristigen Folgen menschlicher Eingriffe. Harari liest diese Linie stärker als Verdichtung großer Netze, Graeber und Wengrow stärker als offenes Feld verschiedener, teils verworfener Möglichkeiten.",
    modules: ["modul-1", "modul-12"]
  }
];

const modules = [
  {
    id: "modul-1",
    number: 1,
    title: "Was ist Geschichte?",
    era: "Orientierung und Langzeitblick",
    phase: "Geschichtsbegriff",
    guidingQuestion: "Wann beginnt Geschichte eigentlich?",
    hook:
      "Bevor wir mit Frühmenschen, Antike oder Mittelalter arbeiten, müssen wir zuerst klären, was im Kurs überhaupt mit Geschichte gemeint ist. Nicht alles Vergangene ist schon Geschichte im engeren Sinn.",
    goals: [
      "Naturgeschichte, Entwicklung des Menschen und Geschichte im engeren Sinn unterscheiden",
      "verstehen, warum dieser Kurs mit großen Veränderungen statt mit bloßen Jahreszahlen arbeitet",
      "erste Verbindungslinien zwischen frühen Veränderungen und späteren Weltordnungen erkennen"
    ],
    input: [
      "Zu Beginn unterscheiden wir drei Ebenen. Erstens gibt es Naturgeschichte. Dazu gehören die Entstehung der Erde, Veränderungen des Klimas, Gesteine, Tiere und Pflanzen. Zweitens gibt es die Entwicklung des Menschen als Lebewesen. Hier geht es um Evolution, verschiedene Menschenarten und körperliche Veränderungen. Drittens gibt es Geschichte im engeren Sinn. Sie beginnt dort, wo Menschen ihre Welt durch Sprache, Regeln, Symbole, Erinnerungen und gemeinsame Vorstellungen gestalten.",
      "Diese Unterscheidung ist wichtig, weil Geschichtsunterricht nicht einfach alles Vergangene in einen Topf wirft. Ein Vulkanausbruch oder die Eiszeit gehören zwar zur Vergangenheit, aber noch nicht automatisch zur Geschichte im engeren Sinn. Historisch wird es dort, wo Menschen handeln, Regeln erfinden, Werkzeuge bewusst einsetzen, Wissen weitergeben und sich in Gruppen organisieren. Geschichte ist deshalb immer auch eine Geschichte von Kultur.",
      "Darum beginnt der Kurs nicht mit einer Königsliste, sondern mit Veränderungen menschlicher Lebensweisen. Im weiteren Verlauf werden diese Veränderungen an konkreten Dingen greifbar: an Unterkünften aus Tierhäuten, Lehm oder Schnee, an Pfahlbauhütten und Steinbeilen, an römischen Straßen und Brücken, an Silbermünzen aus einem vergrabenen Schatz oder an Burglatrinen und Schlossküchen. Geschichte wird an solchen Spuren lesbar.",
      "Der Film zum Anthropozän spannt dafür den größten Bogen. Er verbindet Feuer, Landwirtschaft in Ägypten, Metallbau im Römischen Reich, Erfindungen des Hochmittelalters, Industrialisierung und fossile Brennstoffe zu einer einzigen Langzeitlinie. Damit wird sichtbar: Menschen verändern mit Technik, Landwirtschaft, Bau und Rohstoffnutzung Wasser, Luft, Boden und Lebensräume. Historische Entwicklung ist also immer auch Eingriff in Umwelt und Landschaft."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Buchauszug",
        extracted:
          "Der Historiker Yuval Noah Harari unterscheidet Natur, biologische Entwicklung und menschliche Kulturgeschichte. In seinem Buch ordnet er die Menschheitsgeschichte nach großen Veränderungen, die vieles andere nach sich ziehen.",
        didacticUse:
          "Im Kurs dient dieser Text als Orientierung: Nicht weil alle Lernenden Harari kennen müssen, sondern weil er eine gut verständliche Grundfrage stellt, nämlich was als Geschichte zählt und was noch nicht."
      },
      {
        title: "SRF: Anthropozän",
        meta: "Langzeitfolge",
        extracted:
          "Die SRF-Seite verknüpft Feuer, Landwirtschaft, Metall, Hochmittelalter und Industrialisierung mit den ökologischen Folgekosten menschlichen Fortschritts.",
        didacticUse:
          "Diese Ressource dient hier als Denkrahmen für die Abschlussfrage: Wenn Menschen Geschichte machen, hinterlassen sie Spuren. Lernende sollen früh sehen, dass historische Innovationen langfristige Folgen haben."
      }
    ],
    sourcePrompt:
      "Arbeite mit dem Anthropozän-Beispiel heraus, warum dieser Kurs Geschichte nicht nur als Liste von Ereignissen, sondern als Veränderung menschlicher Lebensweisen versteht.",
    task: {
      id: "m1-task",
      question:
        "Erkläre in 4 bis 6 Sätzen den Unterschied zwischen Naturgeschichte, biologischer Menschheitsentwicklung und Geschichte im engeren Sinn. Nenne dabei ein Beispiel für menschliche Eingriffe wie Feuer, Landwirtschaft oder Städtebau.",
      placeholder: "Unterscheide die drei Ebenen und baue ein konkretes Beispiel ein.",
      sampleAnswer:
        "Naturgeschichte umfasst Prozesse wie Urknall, Entstehung von Atomen und geologische Veränderungen. Die biologische Menschheitsentwicklung beschreibt, wie sich menschenähnliche Arten entwickelten. Geschichte im engeren Sinn beginnt erst dort, wo Homo sapiens Kulturen, Regeln, Symbole und gemeinsame Ordnungen aufbaut. Entscheidend sind also nicht nur Körpermerkmale, sondern kulturelle Praktiken. Deshalb strukturieren Sprache, Sesshaftigkeit, Herrschaft und Religion den weiteren Verlauf des Kurses.",
      criteria: [
        { label: "Naturgeschichte benannt", keywords: ["urknall", "naturgeschichte", "physik", "chemie", "geologie"] },
        { label: "biologische Entwicklung erwähnt", keywords: ["biologie", "entwicklung", "menschenarten", "homo sapiens", "evolution"] },
        { label: "Kultur als Schwelle markiert", keywords: ["kultur", "regeln", "symbole", "sprache", "ordnung"] },
        { label: "Bezug auf historischen Verlauf", keywords: ["sesshaftigkeit", "herrschaft", "religion", "geschichte"] }
      ]
    },
    deepening:
      "Dieser Einstieg ist fachlich wichtig, weil er eine häufige Unterrichtsfalle vermeidet: Die Lernenden sollen nicht glauben, Geschichte beginne automatisch mit dem ersten Menschen oder mit dem ersten Werkzeug. Historisches Denken fragt vielmehr nach Quellen, Deutungen und kulturellen Ordnungen. Genau deshalb ist das Modul zugleich ein Propädeutikum für spätere Quellenarbeit.",
    selftest: {
      id: "m1-selftest",
      question: "Welche Aussage trifft Hararis Einstieg am besten?",
      options: [
        {
          text: "Geschichte beginnt mit dem Urknall, weil danach alle späteren Entwicklungen möglich wurden.",
          correct: false,
          feedback:
            "Das verwechselt Naturgeschichte mit Geschichte im engeren Sinn. Der Urknall ist Voraussetzung, aber noch keine Kulturgeschichte."
        },
        {
          text: "Geschichte beginnt dort, wo Homo sapiens Kulturen und gemeinsame Ordnungen aufbaut.",
          correct: true,
          feedback:
            "Richtig. Genau diese kulturelle Schwelle macht Harari zum Ausgangspunkt seiner historischen Erzählung."
        },
        {
          text: "Geschichte beginnt erst mit der Erfindung der Schrift.",
          correct: false,
          feedback:
            "Schrift ist für Hochkulturen zentral, aber Harari setzt den Anfang deutlich früher, nämlich bei der kulturellen Handlungsfähigkeit des Homo sapiens."
        }
      ]
    },
    takeaway: [
      "Geschichte ist mehr als Vergangenheit: Sie meint kulturell geordnete menschliche Welt.",
      "Ein Geschichtsbuch kann helfen, große Entwicklungsschritte sichtbar zu machen, auch wenn man den Autor vorher nicht kennt.",
      "Frühe Innovationen lassen sich als Vorgeschichte späterer Großveränderungen lesen."
    ],
    transfer: {
      id: "m1-transfer",
      question:
        "Warum ist der Begriff Anthropozän für eine Lerneinheit bis 1500 trotzdem sinnvoll, obwohl das eigentliche Thema zeitlich später liegt?",
      placeholder: "Verbinde frühe Entwicklungen mit langfristigen Folgen.",
      sampleAnswer:
        "Der Begriff Anthropozän ist sinnvoll, weil er zeigt, dass menschliche Eingriffe eine lange Vorgeschichte haben. Feuer, Landwirtschaft, Rodungen, Metallverarbeitung, Städtebau und Fernhandel verändern schon früh Landschaften und Lebensweisen. Die Einheit bis 1500 erklärt also Voraussetzungen späterer globaler Eingriffe. Der Begriff dient nicht als neues Kapitel, sondern als Langzeitperspektive.",
      criteria: [
        { label: "Langzeitfolgen erwähnt", keywords: ["lang", "folgen", "vorgeschichte", "langzeit"] },
        { label: "frühe Eingriffe genannt", keywords: ["feuer", "landwirtschaft", "rodung", "metall", "städtebau", "handel"] },
        { label: "Perspektivfunktion erklärt", keywords: ["perspektive", "rahmen", "ausblick", "keine neues kapitel", "schluss"] }
      ]
    }
  },
  {
    id: "modul-2",
    number: 2,
    title: "Frühmenschen und Homo sapiens",
    era: "von ca. 2,5 Mio. Jahren bis zur Ausbreitung des Sapiens",
    phase: "Biologische Voraussetzungen",
    guidingQuestion: "Warum war der Mensch lange ein eher unauffälliges Tier?",
    hook:
      "Harari betont ausdrücklich, dass frühe Menschen über Jahrtausende weder ökologisch noch politisch dominant waren. Das irritiert produktiv, weil es heutige Vorstellungen von menschlicher Überlegenheit zurücknimmt.",
    goals: [
      "verschiedene Menschenarten und ihre Gleichzeitigkeit verstehen",
      "Werkzeuggebrauch, aufrechten Gang, soziale Abhängigkeit und Feuer als Voraussetzungen einordnen",
      "Ausbreitung des Menschen als globale Migrationsgeschichte lesen"
    ],
    input: [
      "Wenn wir an frühe Menschen denken, stellen wir uns oft eine einfache Entwicklungslinie vor: erst primitive Vorformen, dann irgendwann den modernen Menschen. So einfach war es aber nicht. Über lange Zeit lebten mehrere Menschenarten gleichzeitig. Dazu gehörten zum Beispiel Neandertaler, Homo erectus, Denisova-Menschen und Homo sapiens. Der heutige Mensch war also nicht von Anfang an allein auf der Welt.",
      "Der Stammbaum der frühen Menschheit sieht deshalb eher wie ein Geflecht als wie eine Leiter aus. Linien verzweigen sich, überschneiden sich und enden wieder. Manche Menschenarten leben gleichzeitig, manche verschwinden. Wer Frühgeschichte verstehen will, muss also mit Koexistenz und Abbrüchen rechnen, nicht mit einer einzigen geraden Erfolgsbahn.",
      "Außerdem war Homo sapiens zunächst kein unaufhaltsamer Sieger. Frühe Menschen waren über sehr lange Zeit nur ein Teil vieler Tier- und Menschenwelten. Sie beherrschten die Erde nicht einfach sofort. Das macht die eigentliche historische Frage spannend: Warum setzte sich gerade diese Menschenart später in so vielen Räumen durch?",
      "Ein Teil der Antwort liegt in biologischen und technischen Voraussetzungen. Das menschliche Gehirn ist leistungsfähig, braucht aber viel Energie. Der aufrechte Gang macht die Hände frei, bringt aber auch neue Belastungen mit sich. Menschenkinder bleiben lange hilfsbedürftig. Genau dadurch entstehen enge Bindungen, gemeinsames Lernen und soziale Abhängigkeiten. Werkzeuge wie der Faustkeil zeigen dabei, dass Technik schon früh Planung, Materialkenntnis und Weitergabe von Können verlangte. Der Mensch ist also nicht trotz, sondern auch wegen seiner Abhängigkeit erfolgreich.",
      "Die Filme zur außergewöhnlichen Reise der Menschheit und zu frühen Menschenarten verdichten diese Entwicklung: Feuer, Werkzeuge, Zusammenarbeit und Sprache werden nicht als einzelne Erfindungen behandelt, sondern als lange Kette von Anpassungen. Frühgeschichte ist darum nie nur Biologie, sondern immer auch Lernen, Erinnern und Weitergeben.",
      "Der Film über 1491 macht diese Ausbreitung konkret. Vor etwa 18'000 bis 20'000 Jahren erreichen die ersten Menschen Amerika. Einige kommen über eine Landbrücke zwischen Ostsibirien und Alaska, andere fahren mit Kanus über das Meer. In den neuen Räumen entstehen angepasste Lebensweisen: Zelte aus Tierhäuten, Häuser aus Lehm oder Iglus aus Schnee. Wissen über Wege, Nahrung und Überleben wird in mehr als 2000 Sprachen vor allem mündlich weitergegeben. Frühgeschichte ist deshalb immer auch Migrations- und Anpassungsgeschichte."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Frühmenschliche Vielfalt",
        extracted:
          "Harari beschreibt mehrere Menschenarten gleichzeitig und erklärt, warum große Gehirne, freie Hände und lange Kindheit entscheidende Folgen für Kooperation und Lernen hatten.",
        didacticUse:
          "Die Ressource wird genutzt, um lineare Höherentwicklung zu korrigieren und biologische Voraussetzungen als Ausgangspunkt, nicht als Enderklärung, sichtbar zu machen."
      },
      {
        title: "Planet Schule: Die außergewöhnliche Reise der Menschheit",
        meta: "Großer Überblick",
        extracted:
          "Der Film spannt den Bogen von frühen Menschenarten über Werkzeuge, Feuer und soziale Entwicklung bis zur globalen Ausbreitung des Homo sapiens.",
        didacticUse:
          "Die Ressource liefert für Modul 2 die große Entwicklungslinie, damit Frühgeschichte als zusammenhängender Prozess statt als lose Sammlung von Fossilien erscheint."
      },
      {
        title: "ZDF Schule: Stammbaum",
        meta: "Kein gerader Aufstieg",
        extracted:
          "Das Material erklärt Frühgeschichte als verzweigten Stammbaum mit mehreren Menschenarten und nicht als einfache Leiter zum modernen Menschen.",
        didacticUse:
          "So wird die Vorstellung korrigiert, es habe von Anfang an nur eine einzige stetig verbesserte Menschheitslinie gegeben."
      },
      {
        title: "ZDF / Terra X: Wissenshappen – Faustkeil",
        meta: "Werkzeug und Planung",
        extracted:
          "Am Faustkeil wird sichtbar, dass frühe Werkzeuge Rohstoffwahl, Planung, Schlagtechnik und Weitergabe von handwerklichem Können voraussetzen.",
        didacticUse:
          "Das kurze Material eignet sich, um Technik nicht als Nebensache, sondern als Teil früher Lern- und Denkprozesse zu behandeln."
      },
      {
        title: "Arbeitspräsentation: Hominisation – Zeitleiste",
        meta: "Zeitliche Ordnung",
        extracted:
          "Die lokale Präsentation ordnet Frühgeschichte in Paläolithikum, Mesolithikum und Neolithikum und macht deutlich, wie lange Menschwerdung, Werkzeugentwicklung und frühe Wanderungen vor Sesshaftigkeit und Staaten verlaufen.",
        didacticUse:
          "Das Material hilft, die frühe Menschheitsgeschichte nicht nur thematisch, sondern auch zeitlich sauber zu staffeln."
      },
      {
        title: "SRF: 1491",
        meta: "Migration und Anpassung",
        extracted:
          "Die ersten Menschen Amerikas gelangen auf verschiedenen Wegen auf den Doppelkontinent, passen Behausungen und Lebensweisen an Klima und Landschaft an und geben Wissen in vielen Sprachen weiter.",
        didacticUse:
          "Die Lernenden verstehen Ausbreitung nicht als bloßes 'Besiedeln', sondern als fortlaufende Anpassungs- und Kulturleistung."
      },
      {
        title: "YouTube: Frühmenschen und Menschwerdung",
        meta: "Menschenarten, Werkzeuge, Feuer",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Filmgrundlage zu Frühmenschen, Werkzeuggebrauch, Feuer und der Entwicklung verschiedener Menschenarten.",
        didacticUse:
          "Die Ressource soll die biologische und technische Seite der frühen Menschheitsgeschichte sichtbarer machen als es die Migrationsperspektive allein kann."
      }
    ],
    sourcePrompt:
      "Verbinde Menschenarten, Stammbaum, Faustkeil, Feuer und Migration: Warum wurden Lernen, Technik und Anpassung für Homo sapiens historisch wichtiger als bloße Körperkraft?",
    task: {
      id: "m2-task",
      question:
        "Erkläre, warum Homo sapiens lange nicht automatisch überlegen war, später aber dennoch große Räume besiedeln konnte. Beziehe die Anpassung an verschiedene Landschaften mit ein.",
      placeholder: "Arbeite mit biologischen Faktoren, Lernen und neuen Lebensweisen in unterschiedlichen Räumen.",
      sampleAnswer:
        "Homo sapiens war lange nicht automatisch überlegen, weil auch andere Menschenarten existierten und frühe Menschen insgesamt nur begrenzt Einfluss auf ihre Umwelt hatten. Große Gehirne kosteten viel Energie, und Menschenkinder blieben lange hilfsbedürftig. Gleichzeitig förderten freie Hände, Werkzeuggebrauch, soziale Bindungen und Lernfähigkeit die Anpassung an neue Räume. Gerade diese Verbindung aus biologischer Ausstattung und sozialem Lernen machte spätere Ausbreitung möglich.",
      criteria: [
        { label: "fehlende frühe Dominanz benannt", keywords: ["nicht überlegen", "unauffällig", "andere menschenarten", "gleichzeitig"] },
        { label: "biologische Faktoren erklärt", keywords: ["gehirn", "energie", "hände", "aufrechter gang", "kinder"] },
        { label: "soziales Lernen erwähnt", keywords: ["lernen", "sozial", "kooperation", "anpassung"] },
        { label: "Ausbreitung gedeutet", keywords: ["räume", "migration", "besiedeln", "ausbreitung"] }
      ]
    },
    deepening:
      "Didaktisch lohnt es sich hier, biologische und kulturelle Erklärungen nicht gegeneinander auszuspielen. Die Lernenden sollen verstehen: Evolution schafft Möglichkeiten und Grenzen, aber Geschichte entsteht erst, wenn diese Möglichkeiten kulturell genutzt werden. Gerade das macht den Übergang zur kognitiven Revolution plausibel.",
    selftest: {
      id: "m2-selftest",
      question: "Welche Aussage passt am besten zu Hararis Darstellung früher Menschen?",
      options: [
        {
          text: "Es gab immer nur eine Menschenart gleichzeitig, die sich schrittweise verbesserte.",
          correct: false,
          feedback:
            "Gerade das korrigiert Harari. Über lange Zeit lebten mehrere Menschenarten nebeneinander."
        },
        {
          text: "Frühe Menschen waren von Anfang an die unangefochtenen Herrscher der Natur.",
          correct: false,
          feedback:
            "Nein. Harari beschreibt sie zunächst als relativ unauffällige Tiere mit begrenztem Einfluss."
        },
        {
          text: "Mehrere Menschenarten lebten zeitgleich, und Homo sapiens setzte sich erst später durch.",
          correct: true,
          feedback:
            "Richtig. Genau diese Gleichzeitigkeit macht die Entwicklung des Homo sapiens historisch erklärungsbedürftig."
        }
      ]
    },
    takeaway: [
      "Der moderne Mensch war nicht von Anfang an allein.",
      "Großes Gehirn, freie Hände und lange Kindheit sind Chancen und Belastungen zugleich.",
      "Migration ist seit Beginn der Menschheitsgeschichte ein Normalfall."
    ],
    transfer: {
      id: "m2-transfer",
      question:
        "Was verändert sich am Geschichtsbild, wenn Amerikas Frühgeschichte nicht erst 1492 beginnt, sondern viel früher angesetzt wird?",
      placeholder: "Denke an Perspektive, Globalgeschichte und eurozentrische Deutungen.",
      sampleAnswer:
        "Wenn Amerikas Geschichte viel früher beginnt, wird deutlich, dass 1492 kein Anfang, sondern ein Einschnitt ist. Indigene Gesellschaften hatten bereits lange zuvor Migrationswege, Sprachen, Landwirtschaft, Kunst und politische Strukturen entwickelt. Das korrigiert eurozentrische Erzählungen und macht Weltgeschichte pluraler.",
      criteria: [
        { label: "1492 als Einschnitt statt Beginn", keywords: ["einschnitt", "nicht beginn", "1492"] },
        { label: "indigene Vorgeschichte benannt", keywords: ["indigen", "sprachen", "kunst", "landwirtschaft", "politische strukturen"] },
        { label: "Eurozentrismus problematisiert", keywords: ["eurozentr", "perspektive", "plural", "weltgeschichte"] }
      ]
    }
  },
  {
    id: "modul-3",
    number: 3,
    title: "Die kognitive Revolution",
    era: "ab ca. 70 000 Jahren",
    phase: "Sprache, Mythen, Kooperation",
    guidingQuestion: "Was kann menschliche Sprache, was Tierkommunikation nicht kann?",
    hook:
      "Harari erklärt die Sonderstellung des Homo sapiens nicht mit Muskelkraft, sondern mit Sprache: Menschen können über Dinge reden, die nicht unmittelbar sichtbar sind, und dadurch gemeinsame Ordnungen erschaffen.",
    goals: [
      "Sprache als Voraussetzung für flexible Großgruppenkooperation verstehen",
      "Fiktionen, Mythen und Institutionen als reale historische Kräfte erkennen",
      "frühe Kunst als Ausdruck symbolischer Welterzeugung deuten"
    ],
    input: [
      "Mit Sprache ist hier nicht bloß gemeint, dass Menschen Laute bilden können. Entscheidend ist, worüber sie sprechen können. Tiere können warnen, locken oder Signale geben. Menschen können zusätzlich über Vergangenes, Zukünftiges, Abwesendes und Vorgestelltes reden. Sie können also nicht nur auf die Welt reagieren, sondern gemeinsame Vorstellungen von der Welt entwickeln.",
      "Genau darin liegt ein historischer Wendepunkt. Wenn Menschen über Dinge sprechen können, die man nicht direkt sieht, dann können sie Regeln aufstellen, Zugehörigkeit definieren, Aufgaben verteilen und Geschichten über ihre Herkunft erzählen. So entstehen Mythen, Verbote, Rituale und gemeinsame Identitäten. Sprache macht also nicht nur Verständigung möglich, sondern Ordnung.",
      "Das ist wichtig, weil viele spätere Entwicklungen genau darauf aufbauen. Staaten funktionieren nicht nur mit Waffen, sondern auch mit Gesetzen. Geld funktioniert nicht nur als Metall, sondern als gemeinsam anerkannter Wert. Religion wirkt nicht nur innerlich, sondern auch durch geteilte Vorstellungen von Welt und Gemeinschaft. All das setzt voraus, dass Menschen an dieselben Dinge glauben oder sich zumindest darauf beziehen können.",
      "Im Film über 1491 wird diese symbolische Welt an materiellen Spuren sichtbar. Felsbilder, Totempfähle, Gegenstände des Alltags und Mayaschrift zeigen, dass Gemeinschaften ihre Welt nicht nur bewohnen, sondern deuten und erinnern. Ein Bild an einer Felswand ist nicht bloß Dekoration, sondern Hinweis auf Jagd, Zugehörigkeit oder Weltvorstellung. Ein Totempfahl markiert Erinnerung und Herkunft. Schriftzeichen halten Wissen fest. Frühgeschichte ist deshalb bereits eine Welt aus Zeichen, Regeln und Erzählungen.",
      "Die Höhlenbilder ergänzen diesen Punkt auf eindrückliche Weise. Handabdrücke, Tiere, Jagdszenen und wiederkehrende Zeichen zeigen, dass Menschen Erlebnisse nicht nur lebten, sondern bildlich festhielten und in gemeinsame Deutungen verwandelten. Gerade an Höhlenkunst wird sichtbar, dass Sprache, Erinnerung und Symbolik zusammengehören: Gesellschaften schaffen nicht nur Werkzeuge, sondern auch Bilder ihrer Welt."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Sprache und Fiktionen",
        extracted:
          "Harari vergleicht Tierkommunikation mit menschlicher Sprache und zeigt, dass Homo sapiens über vorgestellte Ordnungen sprechen kann. Dadurch werden Kooperationen weit über die 'magische Grenze' kleiner Gruppen hinaus möglich.",
        didacticUse:
          "Die Lernenden arbeiten heraus, dass Mythen keine bloßen Lügen sind, sondern soziale Wirklichkeiten erzeugen können."
      },
      {
        title: "SRF: 1491",
        meta: "Kunst und Schrift",
        extracted:
          "Felsbilder, Totempfähle, Alltagsobjekte und Mayaschrift erscheinen als materielle Spuren symbolischer Welten.",
        didacticUse:
          "Die Ressource macht Symbolfähigkeit sichtbar und eignet sich für eine Quellensimulation: Was sagt ein Bild oder Monument über eine Gesellschaft?"
      },
      {
        title: "SRF Einstein: Rätselhafte Höhlenmalereien",
        meta: "Frühe Bildwelten",
        extracted:
          "Der Einstein-Film ergänzt das Modul um direkte Fragen nach Sinn, Entstehung und Funktion prähistorischer Höhlenmalereien.",
        didacticUse:
          "Die Ressource soll die Symbol- und Vorstellungswelt früher Menschen nicht nur über allgemeine Zeichen, sondern über ein präzises Kunstbeispiel erschließen."
      },
      {
        title: "National Geographic: Frühgeschichte und Höhlenkunst",
        meta: "Handabdrücke, Tiere, Zeichen",
        extracted:
          "Das Material zu Höhlenkunst führt Motive, Techniken und Deutungen zusammen und macht sichtbar, dass Bilder Erinnerung, Ritual und Weltdeutung tragen konnten.",
        didacticUse:
          "Die Ergänzung hilft, frühe Kunst nicht nur als Illustration, sondern als historische Quelle für Denken und Gemeinschaft zu lesen."
      }
    ],
    sourcePrompt:
      "Untersuche an Felsbildern, Totempfählen und Schriftzeichen, wie aus Sprache und Symbolen gemeinsame Ordnung, Erinnerung und Identität werden.",
    task: {
      id: "m3-task",
      question:
        "Warum können Menschen in viel größeren Gruppen kooperieren als Schimpansen? Antworte mit Blick auf Sprache, gemeinsame Vorstellungen und symbolische Zeichen.",
      placeholder: "Erkläre den Zusammenhang zwischen Sprache, Mythos, Zeichen und Kooperation.",
      sampleAnswer:
        "Menschen können in größeren Gruppen kooperieren, weil sie mit Sprache nicht nur konkrete Dinge, sondern auch Vorstellungen und Regeln teilen. Sie können über Götter, Gesetze, Zugehörigkeit oder Aufgaben sprechen, selbst wenn diese nicht materiell sichtbar sind. So entsteht Vertrauen in gemeinsame Ordnungen. Dadurch wird Zusammenarbeit mit vielen Fremden möglich, nicht nur mit wenigen persönlich bekannten Mitgliedern einer Gruppe.",
      criteria: [
        { label: "Sprache über Abwesendes/Vorgestelltes", keywords: ["vorstellungen", "abwesend", "vorgestellt", "nicht sichtbar", "sprache"] },
        { label: "gemeinsame Ordnung/Mythos", keywords: ["mythos", "ordnung", "regeln", "götter", "gesetze"] },
        { label: "Großgruppenkooperation", keywords: ["große gruppen", "fremde", "kooperation", "zusammenarbeit"] }
      ]
    },
    deepening:
      "Das Modul ist die Scharnierstelle der ganzen Einheit. Wenn Lernende verstanden haben, dass gemeinsame Vorstellungen historisch wirksam sind, erschließen sich später Geld, Königtum, Religion, Reichsideen oder Ständeordnung deutlich leichter. Der rote Faden verläuft also von Höhlenbild und Totempfahl bis zur Kathedrale und Münzordnung.",
    selftest: {
      id: "m3-selftest",
      question: "Welche Fähigkeit ist nach Harari historisch entscheidend?",
      options: [
        {
          text: "Menschen können lauter sprechen als andere Tiere.",
          correct: false,
          feedback:
            "Lautstärke ist nicht der Punkt. Entscheidend ist die Fähigkeit, über Vorgestelltes und Geteiltes zu sprechen."
        },
        {
          text: "Menschen können über gemeinsam vorgestellte Dinge sprechen und so Großgruppen organisieren.",
          correct: true,
          feedback:
            "Richtig. Genau diese Fähigkeit verknüpft Harari mit dem historischen Aufstieg des Homo sapiens."
        },
        {
          text: "Menschen kommunizieren überhaupt erst als erste Lebewesen.",
          correct: false,
          feedback:
            "Nein. Kommunikation gibt es auch bei vielen Tieren. Der Unterschied liegt in Reichweite und Abstraktionsgrad."
        }
      ]
    },
    takeaway: [
      "Die kognitive Revolution ist eine Revolution der Vorstellungswelten.",
      "Mythen, Regeln und Institutionen sind historische Handlungsmächte.",
      "Symbolische Quellen sind keine Nebensache, sondern Zugänge zu Gesellschaften."
    ],
    transfer: {
      id: "m3-transfer",
      question:
        "Erfinde einen kurzen Gründungsmythos für eine steinzeitliche Gemeinschaft. Welche Regel oder welches gemeinsame Ziel soll dieser Mythos stiften?",
      placeholder: "Schreibe 3 bis 5 Sätze und nenne die soziale Funktion des Mythos.",
      sampleAnswer:
        "Unsere Gemeinschaft erzählt, dass der Flussgeist nur denen Nahrung schenkt, die Beute teilen und das Feuer gemeinsam hüten. Wer nur an sich denkt, verliert den Schutz des Geistes und bringt den Winter ins Lager. Der Mythos stiftet also Teilen, Zusammenhalt und Respekt vor gemeinsamen Regeln.",
      criteria: [
        { label: "symbolische Figur oder Erzählung", keywords: ["geist", "ahnen", "tier", "himmel", "fluss", "gött", "myth"] },
        { label: "soziale Regel", keywords: ["teilen", "regel", "zusammenhalt", "schutz", "verbot"] },
        { label: "Gemeinschaftsfunktion", keywords: ["gemeinschaft", "ziel", "zusammen", "identität", "ordnung"] }
      ]
    }
  },
  {
    id: "modul-4",
    number: 4,
    title: "Jäger und Sammler",
    era: "Vorzeit bis Jungsteinzeit",
    phase: "Lebensformen der Vorzeit",
    guidingQuestion: "Wie lebt man ohne feste Häuser, Speicher und Staaten?",
    hook:
      "Vor Sesshaftigkeit gab es keineswegs bloß Mangel. Mobile Lebensweisen konnten hoch angepasst, vielfältig und ökologisch flexibel sein.",
    goals: [
      "Merkmale mobiler Lebensweisen beschreiben",
      "Anpassung an Klima, Landschaft und Tierwelt als historisches Können erkennen",
      "mündliche Wissensweitergabe und Spiritualität einordnen"
    ],
    input: [
      "Bevor Menschen sesshaft wurden, lebten sie sehr lange in kleineren, mobilen Gruppen. Sie zogen nicht planlos umher, sondern bewegten sich oft nach Jahreszeiten, Tierwanderungen, Wasserstellen oder Pflanzenvorkommen. Diese Lebensweise verlangte ständige Beobachtung der Umwelt und eine gute Abstimmung innerhalb der Gruppe.",
      "Jäger-und-Sammler-Gesellschaften lebten nicht einfach von Mangel. Unterschiedliche Räume verlangten unterschiedliche Lösungen: In kalten Regionen funktionierten andere Unterkünfte, Kleidung und Werkzeuge als in warmen oder bewaldeten Landschaften. Der Film 1491 nennt dafür sehr konkrete Beispiele: Zelte aus Tierhäuten, Häuser aus Lehm und Iglus aus Schnee. Solche Behausungen waren auf Klima, Mobilität und Lebensweise abgestimmt.",
      "Wichtig ist auch, dass Wissen in solchen Gesellschaften anders gesichert wurde als später in Schriftkulturen. Wer keine Bibliotheken oder Archive hat, muss Wege, Tiere, Jahreszeiten, Gefahren und Regeln gemeinschaftlich erinnern. Wissen über Jagd, Nahrung oder sichere Routen wird erzählt, gezeigt und nachgeahmt. Gerade deshalb konnten mobile Lebensweisen sehr genau organisiert sein. Ohne dieses dichte Umweltwissen war Bewegung über große Räume gar nicht möglich.",
      "Der zusätzliche Überblick zu den Steinzeit-Menschen macht deutlich, dass zu dieser Lebensform immer auch Werkzeugtechnik, Feuergebrauch, Schutz, Kooperation und flexible Nahrungssuche gehören. Gerade weil keine festen Speicher oder Bürokratien existieren, muss die Gruppe selbst ständig entscheiden, was mitgeführt, was geteilt und was vor Ort hergestellt wird.",
      "Dieses Modul ist deshalb kein bloßer Vorlauf zur Landwirtschaft. Es zeigt eine eigenständige historische Lebensform mit hoher Kompetenz. Erst wenn man diese Welt ernst nimmt, versteht man später wirklich, was Sesshaftigkeit verändert hat und was dabei auch verloren ging.",
      "Graeber und Wengrow setzen an diesem Punkt einen anderen Akzent als Harari. Sie bestreiten, dass die Vorzeit hauptsächlich aus kleinen, immer ähnlichen Gruppen bestand, aus denen erst sehr viel später komplexe Gesellschaften hervorgingen. Ihrer Deutung nach konnten mobile Gruppen je nach Jahreszeit, Anlass und Ort ganz unterschiedliche politische Formen annehmen. Manche versammelten sich zeitweise in großen Siedlungen, errichteten Monumente oder wechselten bewusst zwischen strengeren und gleicheren Ordnungen. Vor Landwirtschaft gab es also nicht nur Anpassung, sondern bereits politische Wahlmöglichkeiten."
    ],
    sources: [
      {
        title: "SRF: 1491",
        meta: "Anpassung",
        extracted:
          "Die Ressource beschreibt frühe Besiedlung, unterschiedliche Behausungen, mündliche Wissensweitergabe sowie die enge Verbindung von Jagd und Spiritualität.",
        didacticUse:
          "Sie eignet sich hervorragend für Vergleichsaufgaben: Welche Lebensform ist für welchen Raum funktional, und welches Wissen muss eine mobile Gesellschaft besitzen?"
      },
      {
        title: "Harari-PDF",
        meta: "Vorland der Landwirtschaft",
        extracted:
          "Hararis Großstruktur macht deutlich, dass Jäger-und-Sammler-Gesellschaften über sehr lange Zeit die normale menschliche Lebensform darstellen.",
        didacticUse:
          "Dadurch werden spätere Veränderungen wie Sesshaftigkeit als historischer Bruch lesbar."
      },
      {
        title: "YouTube: Jäger und Sammler",
        meta: "Mobile Lebensform",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine eigene Filmgrundlage zu Jagd, Sammeln, Mobilität und Umweltwissen.",
        didacticUse:
          "Die Ressource soll Jäger-und-Sammler-Gesellschaften als eigenständige Lebensform direkt absichern."
      },
      {
        title: "YouTube: Die Steinzeit-Menschen - Alles, was Du wissen musst!",
        meta: "Werkzeuge, Feuer, Schutz",
        extracted:
          "Der Überblicksfilm ergänzt das Modul um Steinzeitalltag, Werkzeugtechnik, Feuergebrauch, Schutz und die Organisation des täglichen Überlebens.",
        didacticUse:
          "Die Ressource verdichtet die Grundelemente mobiler Lebensformen und eignet sich als kompakte Wiederholung der materiellen Seite des Moduls."
      },
      {
        title: "Saisonale Freiheit und politische Wahl",
        extracted:
          "Graeber und Wengrow argumentieren, dass frühe mobile Gesellschaften nicht dauerhaft in einer einzigen sozialen Form festlagen. Sie verweisen auf saisonale Wechsel, große Versammlungen, Monumente und bewusst veränderte politische Ordnungen.",
        didacticUse:
          "Die Gegenposition schärft die Frage, ob Vorzeit nur aus kleinen gleichartigen Gruppen bestand oder ob Menschen schon sehr früh verschiedene soziale Modelle ausprobierten."
      }
    ],
    sourcePrompt:
      "Arbeite an Behausungen, Jagdformen, saisonalen Wechseln und mündlicher Weitergabe heraus, weshalb Mobilität keine Rückständigkeit, sondern eine eigene Form historischer Kompetenz und politischer Gestaltung ist.",
    task: {
      id: "m4-task",
      question:
        "Vergleiche mobile Jäger-und-Sammler-Gesellschaften mit späteren sesshaften Dorfgemeinschaften. Nenne mindestens drei Unterschiede und nutze Beispiele wie Behausungen, Nahrung oder Wissensweitergabe.",
      placeholder: "Denke an Bewegung, Unterkünfte, Nahrung, Besitz und mündliches Wissen.",
      sampleAnswer:
        "Jäger-und-Sammler-Gesellschaften waren mobiler und passten sich saisonal an Landschaften an. Sie lebten meist von vielfältiger Nahrung statt von wenigen angebauten Pflanzen. Besitz war oft weniger auf Vorrat und dauerhaftes Eigentum ausgerichtet. Wissen wurde stark mündlich, praktisch und über Beobachtung weitergegeben. Sesshafte Dörfer dagegen sind stärker an Felder, Speicher und feste Häuser gebunden.",
      criteria: [
        { label: "Mobilität erwähnt", keywords: ["mobil", "wandern", "saisonal", "bewegen"] },
        { label: "Nahrungsweise verglichen", keywords: ["jagd", "sammeln", "vielfältig", "felder", "anbau"] },
        { label: "Besitz/Speicher/Häuser", keywords: ["vorrat", "speicher", "häuser", "eigentum", "fest"] },
        { label: "Wissen/soziale Ordnung", keywords: ["mündlich", "wissen", "beobachtung", "kleinere gruppen"] }
      ]
    },
    deepening:
      "Dieses Modul ist wichtig, um Fortschrittserzählungen zu entschärfen. Nicht jede spätere Form ist automatisch 'besser'. Aus didaktischer Sicht eröffnet der Vergleich zwischen mobilen und sesshaften Lebensweisen eine begründete Urteilsbildung: mehr Sicherheit hier, mehr Flexibilität dort; mehr Vorräte hier, mehr Abhängigkeit dort.",
    selftest: {
      id: "m4-selftest",
      question: "Welche Aussage beschreibt Jäger-und-Sammler-Gesellschaften am treffendsten?",
      options: [
        {
          text: "Sie waren grundsätzlich ortsfest und lebten hauptsächlich von großen Getreidespeichern.",
          correct: false,
          feedback:
            "Das beschreibt eher spätere sesshafte Agrargesellschaften, nicht mobile Lebensformen."
        },
        {
          text: "Ihre Lebensweise musste stark an Klima, Landschaft und Tierwelt angepasst sein.",
          correct: true,
          feedback:
            "Richtig. Genau diese Anpassungsfähigkeit ist eine historische Kernkompetenz dieser Gesellschaften."
        },
        {
          text: "Sie hatten weder Regeln noch spirituelle Vorstellungen.",
          correct: false,
          feedback:
            "Nein. Die SRF-Ressource zeigt ausdrücklich die Verbindung von Jagd, Ritual und Weltdeutung."
        }
      ]
    },
    takeaway: [
      "Mobilität ist eine historisch anspruchsvolle Lebensform.",
      "Frühe Gesellschaften verfügen über dichtes Umwelt- und Erfahrungswissen.",
      "Sesshaftigkeit ist ein Wandel, kein natürlicher Endpunkt."
    ],
    transfer: {
      id: "m4-transfer",
      question:
        "Warum ist mündlich überliefertes Wissen in mobilen Gesellschaften besonders wichtig, wenn Gruppen sich je nach Jahreszeit neu ordnen müssen?",
      placeholder: "Denke an Gedächtnis, Orientierung, Jahreszeiten und fehlende Archive.",
      sampleAnswer:
        "Mündlich überliefertes Wissen ist in mobilen Gesellschaften zentral, weil es Orientierung, Jagdmethoden, Jahreszeitenwissen, Gefahrenorte und soziale Regeln sichert. Wo es kaum feste Archive oder Schrift gibt, wird Erinnerung gemeinschaftlich getragen. Wenn Gruppen sich saisonal sammeln, trennen oder anders ordnen, müssen Regeln und Erfahrungen besonders verlässlich weitergegeben werden. Erzählen ist dort nicht nur Kultur, sondern eine Überlebenstechnik.",
      criteria: [
        { label: "fehlende feste Archive", keywords: ["keine schrift", "kein archiv", "mündlich"] },
        { label: "praktisches Wissen", keywords: ["orientierung", "jagd", "jahreszeiten", "gefahren", "wege"] },
        { label: "gemeinschaftliche Erinnerung", keywords: ["gemeinschaft", "erinnerung", "erzählen", "weitergabe"] },
        { label: "saisonale Neuordnung erwähnt", keywords: ["jahreszeit", "saisonal", "neu ordnen", "wechsel"] }
      ]
    }
  },
  {
    id: "modul-5",
    number: 5,
    title: "Die landwirtschaftliche Revolution",
    era: "ab ca. 10 000 v. Chr.",
    phase: "Sesshaftigkeit, Dörfer, Vorräte",
    guidingQuestion: "Warum nennt Harari Landwirtschaft den 'größten Betrug der Geschichte'?",
    hook:
      "Hararis provokante Formulierung eignet sich didaktisch hervorragend, weil sie sofort Urteilskompetenz fordert: War Landwirtschaft Fortschritt, Belastung oder beides?",
    goals: [
      "Sesshaftigkeit als tiefgreifenden Strukturwandel beschreiben",
      "Überschuss, Bevölkerungswachstum und Arbeitsverdichtung zusammen denken",
      "Jungsteinzeitliche Alltagswelt konkret fassen"
    ],
    input: [
      "Mit Landwirtschaft verändert sich das Leben tiefgreifend. Menschen bauen nun gezielt Pflanzen an, halten Tiere, legen Vorräte an und bleiben länger an einem Ort. Dadurch entstehen feste Häuser, Dörfer und eine engere Bindung an Boden, Wasser und Jahreszeiten. Aus Bewegung wird stärkeres Bleiben, aus flexibler Nahrungssuche wird planbare, aber auch riskante Erzeugung.",
      "Der Anfang dieser Entwicklung liegt im Fruchtbaren Halbmond nach dem Ende der letzten Eiszeit. Dort entstehen aus Sammeln, Jagen, Vorratshaltung und ersten Anbauversuchen nach und nach neue Formen von Sesshaftigkeit. Entscheidend ist: Landwirtschaft beginnt nicht plötzlich an einem einzigen Tag, sondern als langsamer Übergang, in dem Menschen Wildgräser, Tiere, Speicher und feste Plätze immer stärker miteinander verbinden.",
      "Dieser Wandel hat Vorteile. Vorräte können Hungerzeiten abfedern, Siedlungen wachsen, und in größeren Gemeinschaften können Aufgaben verteilt werden. Nicht mehr alle müssen dasselbe tun. Manche bauen Häuser, andere stellen Werkzeuge her, wieder andere organisieren Speicher oder Rituale. Landwirtschaft schafft also neue Möglichkeiten für Verdichtung und Arbeitsteilung.",
      "Aber derselbe Wandel hat auch einen Preis. Wer von wenigen Pflanzen oder Tierarten lebt, wird von Ernten, Wetter und Krankheiten stärker abhängig. Harte körperliche Arbeit nimmt oft zu. Besitz, Felder und Vorräte können Ungleichheiten fördern. Aus gemeinsamer Nutzung entstehen leichter Konflikte um Land, Wasser und Reichtum.",
      "Die Neolithisierung Europas zeigt außerdem, dass sich diese neue Lebensweise nur langsam ausbreitet. Ackerbau und Viehzucht wandern über viele Generationen vom Vorderen Orient über Balkan und Donau sowie über Mittelmeer- und Alpenräume nach Westen. Menschen übernehmen Landwirtschaft also nicht einfach gleichzeitig, sondern in regional sehr verschiedenen Rhythmen. Gerade deshalb gehören Migration, Nachahmung und Kontaktzonen zur Geschichte der Sesshaftigkeit dazu.",
      "Der Film über die Pfahlbauer von Pfyn macht diesen Wandel konkret. Zwei Familien und zwei junge Männer leben dort vier Wochen wie vor 5700 Jahren. Sichtbar werden Hüttenbau, Steinbeile, Kolbenpfeile, Kleider, Essen, Feuerstellen und Gebrauchsgegenstände. Genau daran lässt sich Sesshaftigkeit ablesen: Häuser müssen instand gehalten, Werkzeuge hergestellt, Nahrung vorbereitet und Vorräte gesichert werden. Landwirtschaft ist deshalb kein bequemes Endziel, sondern ein Alltag aus Planung, Handarbeit und Abhängigkeit.",
      "Göbekli Tepe verschärft die historische Frage noch einmal. Monumentale Steinkreise und Kultbilder zeigen, dass Menschen schon sehr früh große religiöse Zentren errichten konnten. Das ist wichtig, weil hier aufwendige gemeinsame Bauarbeit sichtbar wird, bevor der klassische Staatsapparat mit Palast, Beamten und Steuern greifbar wird. Religiöse Sammlung, Sesshaftigkeit und politische Ordnung lassen sich also nicht in eine allzu einfache Reihenfolge zwingen.",
      "Graeber und Wengrow widersprechen hier der einfachen Gleichung: zuerst Landwirtschaft, dann Überschuss, dann Eliten und Staat. Sie bestreiten nicht, dass Ackerbau vieles verändert, aber sie betonen, dass Menschen lange Mischformen aus Sammeln, Jagen, Gartenbau und Feldbau praktizierten. Einige Gruppen weiteten Landwirtschaft aus, andere begrenzten sie oder gaben bestimmte Formen wieder auf. Der Übergang wird dadurch nicht zu einer einzigen Stufenfolge, sondern zu einem offenen historischen Feld mit unterschiedlichen Entscheidungen und Folgen."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Provokation",
        extracted:
          "Das Kapitel 'Der größte Betrug der Geschichte' beschreibt den Übergang zu Ackerbau und Viehzucht als ambivalenten Prozess mit mehr Arbeit, stärkerer Abhängigkeit und neuen Zwängen.",
        didacticUse:
          "Die Zuspitzung dient als Streitfrage. Lernende sollen nicht auswendig bestätigen, sondern mit Gründen abwägen."
      },
      {
        title: "SRF: Pfahlbauer von Pfyn",
        meta: "Experimentalarchäologie",
        extracted:
          "Die Jungsteinzeit wird über rekonstruiertes Wohnen, Werkzeuge, Kleidung und Essen greifbar gemacht. Im Zentrum steht forschendes, fächerübergreifendes Lernen.",
        didacticUse:
          "Die Ressource wird als konkretes Lebensweltfenster genutzt: Was bedeutet Sesshaftigkeit im Alltag wirklich?"
      },
      {
        title: "Materialdossier: Neolithisierung – Anfänge",
        meta: "Fruchtbarer Halbmond und langsamer Übergang",
        extracted:
          "Das Dossier erklärt den Beginn von Sesshaftigkeit und Nahrungsproduktion im Fruchtbaren Halbmond und zeigt, dass Landwirtschaft aus einem längeren Übergang hervorgeht statt aus einem plötzlichen Sprung.",
        didacticUse:
          "Das Material stützt die Grundlinie des Moduls: Sesshaftigkeit beginnt als Prozess, nicht als ein einziger revolutionärer Moment."
      },
      {
        title: "Materialdossier: Neolithisierung in Europa",
        meta: "Langsame Ausbreitung nach Europa",
        extracted:
          "Das Dossier beschreibt, wie sich Ackerbau und Viehzucht über Donau-, Mittelmeer- und Alpenräume langsam nach Europa ausbreiten und dabei mit Migration, Übernahme und regionalen Mischformen verbunden bleiben.",
        didacticUse:
          "Die Ressource macht klar, dass Neolithisierung in Europa kein einheitlicher Vorgang ist, sondern aus vielen regionalen Wegen besteht."
      },
      {
        title: "Planet Schule: Göbekli Tepe – der älteste Tempel der Menschheit",
        meta: "Monumente vor dem Staat",
        extracted:
          "Der Film zeigt Göbekli Tepe als frühes Kultzentrum mit monumentalen Steinsetzungen und verschiebt damit die Frage nach Religion, Sesshaftigkeit und sozialer Organisation.",
        didacticUse:
          "Die Ressource zwingt dazu, frühe Großbauten nicht erst aus fertigen Staaten heraus zu erklären."
      },
      {
        title: "YouTube: Neolithische Revolution",
        meta: "Streitfrage",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um die zugespitzte Frage, ob die neolithische Revolution als Fortschritt, Belastung oder Fehlentwicklung verstanden werden sollte.",
        didacticUse:
          "Die Ressource verschärft die Urteilsfrage des Moduls und zwingt zu einer klar begründeten Abwägung."
      },
      {
        title: "Landwirtschaft ohne Zwangslogik",
        extracted:
          "Graeber und Wengrow wenden sich gegen die Erzählung, Getreidebau habe zwangsläufig in Steuern, Eliten und Staaten gemündet. Ihrer Deutung nach probierten Menschen verschiedene Formen von Landwirtschaft aus, kombinierten sie mit älteren Lebensweisen oder veränderten sie wieder.",
        didacticUse:
          "Die Gegenposition macht sichtbar, dass Landwirtschaft kein automatisches politisches Ergebnis produziert, sondern sehr verschiedene Ordnungen ermöglichen kann."
      }
    ],
    sourcePrompt:
      "Arbeite am Beispiel der Pfahlbauer und der Gegenposition zu Harari heraus, wie sich Wohnen, Arbeiten, Essen und Zeitrhythmus durch Sesshaftigkeit verändern und warum dieser Wandel keine historische Einbahnstraße sein muss.",
    task: {
      id: "m5-task",
      question:
        "Nimm Stellung zu Hararis Zuspitzung, Landwirtschaft sei der 'größte Betrug der Geschichte'. Begründe differenziert.",
      placeholder: "Formuliere ein abgewogenes Urteil statt nur Zustimmung oder Ablehnung.",
      sampleAnswer:
        "Hararis Zuspitzung ist übertrieben, aber nützlich, weil sie zum Nachdenken zwingt. Landwirtschaft brachte mehr Vorräte, Bevölkerungswachstum und dauerhafte Siedlungen hervor. Gleichzeitig mussten Menschen härter und einseitiger arbeiten, wurden stärker von Ernten abhängig und entwickelten soziale Ungleichheiten. Deshalb war Landwirtschaft weder nur Fortschritt noch nur Betrug, sondern ein ambivalenter Umbruch.",
      criteria: [
        { label: "Überschüsse/Siedlungen genannt", keywords: ["vorräte", "überschuss", "dörfer", "siedlungen", "bevölkerungswachstum"] },
        { label: "Belastungen genannt", keywords: ["härter", "arbeit", "abhängig", "ernte", "krankheit", "risiko"] },
        { label: "soziale Folgen benannt", keywords: ["ungleich", "hierarchie", "verwaltung", "unterschiede"] },
        { label: "abgewogenes Urteil", keywords: ["ambivalent", "sowohl", "nicht nur", "differenziert"] }
      ]
    },
    deepening:
      "Hier beginnt die große Strukturlinie von Vorrat und Überschuss. Aus didaktischer Sicht sollte unbedingt sichtbar werden, dass Landwirtschaft nicht einfach mehr Essen bedeutet, sondern neue Zeitregime, neue Eigentumsfragen und neue Herrschaftsformen vorbereitet. Genau daraus entstehen die nächsten Module.",
    selftest: {
      id: "m5-selftest",
      question: "Welche Aussage trifft die Folgen der landwirtschaftlichen Revolution am besten?",
      options: [
        {
          text: "Sie brachte sofort gerechte Gesellschaften mit viel freier Zeit hervor.",
          correct: false,
          feedback:
            "Das ist zu harmonisch. Landwirtschaft erzeugt auch Arbeitsverdichtung und neue Ungleichheiten."
        },
        {
          text: "Sie ermöglichte Überschüsse und größere Siedlungen, schuf aber auch neue Abhängigkeiten.",
          correct: true,
          feedback:
            "Richtig. Genau diese Ambivalenz steht im Zentrum des Moduls."
        },
        {
          text: "Sie hatte kaum Einfluss auf soziale Strukturen, sondern nur auf die Ernährung.",
          correct: false,
          feedback:
            "Nein. Vorräte, Besitz, Arbeitsteilung und Verwaltung verändern Gesellschaft tiefgreifend."
        }
      ]
    },
    takeaway: [
      "Sesshaftigkeit ist ein sozialer, wirtschaftlicher und kultureller Großumbau.",
      "Mehr Nahrung bedeutet nicht automatisch mehr Freiheit.",
      "Die Jungsteinzeit ist der Einstieg in Überschuss, Verwaltung und neue Ungleichheit."
    ],
    transfer: {
      id: "m5-transfer",
      question:
        "Warum lässt sich der Übergang zu Landwirtschaft nicht als einfache Einbahnstraße erzählen? Verbinde Chancen, Belastungen und die Möglichkeit anderer Entscheidungen.",
      placeholder: "Erkläre, warum Landwirtschaft vieles verändert, aber nicht automatisch immer zum gleichen Ergebnis führt.",
      sampleAnswer:
        "Der Übergang zu Landwirtschaft ist keine Einbahnstraße, weil Menschen neue Anbauformen zunächst erproben, mit Jagd und Sammeln kombinieren oder später wieder verändern konnten. Landwirtschaft brachte Vorräte, größere Siedlungen und Arbeitsteilung hervor, aber auch mehr Arbeit, stärkere Abhängigkeit von Ernten und neue Konflikte um Besitz. Deshalb führt Ackerbau nicht automatisch zu einer einzigen Gesellschaftsform. Historisch gab es Mischformen, Brüche und bewusste Entscheidungen.",
      criteria: [
        { label: "Chancen genannt", keywords: ["vorrat", "sicherheit", "häuser", "versorgung", "arbeitsteilung"] },
        { label: "Risiken genannt", keywords: ["abhängig", "arbeit", "konflikt", "ernte", "besitz"] },
        { label: "kein Automatismus behauptet", keywords: ["mischform", "kombinieren", "nicht automatisch", "anders", "verändern"] }
      ]
    }
  },
  {
    id: "modul-6",
    number: 6,
    title: "Erste Hochkulturen",
    era: "Altes Ägypten, Mesopotamien und frühe Staaten",
    phase: "Schrift, Verwaltung, Herrschaft",
    guidingQuestion: "Wie wird aus Vorrat ein Staat?",
    hook:
      "Wenn Vorräte gezählt, Abgaben organisiert und Arbeitskräfte gelenkt werden müssen, entstehen neue Werkzeuge der Macht: Schrift, Bürokratie und Monumente.",
    goals: [
      "Zusammenhang von Überschuss, Verwaltung und Schrift erklären",
      "Hochkulturen als strukturierte Machtordnungen verstehen",
      "Ägypten als Fallbeispiel langfristiger Stabilität deuten",
      "Nil, Pharao und Maat als Grundpfeiler ägyptischer Ordnung erklären"
    ],
    input: [
      "Wenn Gesellschaften Überschüsse erzeugen, müssen Vorräte gelagert, verteilt, gezählt und geschützt werden. Je größer eine Gemeinschaft wird, desto schwieriger wird diese Aufgabe. Irgendwann reicht persönliches Erinnern nicht mehr aus. Dann braucht es Listen, Zuständigkeiten, Maße, Zeichen und feste Regeln. Genau hier beginnen frühe Formen von Verwaltung.",
      "Schrift entsteht in vielen frühen Staaten deshalb nicht zuerst für schöne Geschichten oder Gedichte, sondern für Organisation. Wer Abgaben festhält, Arbeitsleistungen notiert oder Vorräte erfasst, kann große Gemeinschaften besser steuern. Schreiben ist am Anfang also oft ein Macht- und Verwaltungswerkzeug. Das ist wichtig, weil viele Menschen Schrift heute zuerst mit Literatur verbinden.",
      "Zwischen Dorf und Staat liegen zudem dichte Großsiedlungen, die nicht einfach in dasselbe Muster passen. Çatalhöyük zeigt Hunderte dicht aneinandergedrängte Häuser mit Dachzugängen, Wandmalereien, Bestattungen im Haus und gemeinschaftlicher Ordnung. Gerade daran lässt sich sehen, dass große Besiedlung, Arbeitsteilung und symbolische Verdichtung nicht automatisch schon Palast, König und Verwaltung nach späterem Muster bedeuten.",
      "Am Beispiel Ägyptens wird das besonders deutlich. Der Nil überschwemmt das Land regelmäßig, hinterlässt fruchtbaren Schlamm und macht Landwirtschaft über lange Zeit planbar. Dadurch können Überschüsse entstehen, die gespeichert, verteilt und besteuert werden. Beamtinnen und Beamte erfassen Abgaben, organisieren Bauarbeiten und halten den Staat zusammen. Hieroglyphen sichern diese Ordnung schriftlich. Der Pharao steht politisch und religiös an der Spitze; mit der Vorstellung der Maat, also von richtiger göttlicher Ordnung, Gerechtigkeit und Gleichgewicht, wird Herrschaft zusätzlich begründet.",
      "Auch Tempel, Gräber und Pyramiden gehören in diesen Zusammenhang. Sie sind nicht bloß große Bauwerke, sondern Ausdruck einer Welt, in der Herrschaft, Religion und Jenseitsvorstellungen eng verbunden sind. Wer in Ägypten baut, zählt, schreibt und opfert, stabilisiert nicht nur den Alltag, sondern eine ganze Weltordnung. Mesopotamien lässt sich dazu kurz als Gegenbild nennen: Dort entstehen zwischen Euphrat und Tigris eher mehrere konkurrierende Stadtstaaten, während Ägypten am Nil sehr früh zu einem langen, stärker zentralisierten Reich zusammenwächst.",
      "Die Frage, was überhaupt eine Hochkultur ausmacht, muss deshalb präzise gestellt werden. Entscheidend sind nicht einzelne Pyramiden oder spektakuläre Funde, sondern das Zusammenspiel von Überschuss, Verdichtung, Schrift oder anderen dauerhaften Zeichensystemen, religiöser Ordnung, Arbeitsteilung und Herrschaft. Gerade der Vergleich von Ägypten mit Çatalhöyük zeigt: Große Siedlung und hohe Komplexität sind vorhanden, aber nicht jedes Beispiel führt sofort zu derselben Staatsform.",
      "Graeber und Wengrow setzen hier eine Gegenfrage: Muss große Besiedlung, Speicherwirtschaft und Koordination überhaupt zwangsläufig in Königtum, Paläste und starre Hierarchie münden? Sie verweisen auf große Orte wie Çatalhöyük oder Teotihuacan, an denen dichte Siedlung, Planung und Zusammenarbeit sichtbar sind, ohne dass daraus automatisch eine klassische Herrschaftspyramide folgt. Dadurch wird Ägypten als ein sehr wichtiger, aber nicht einziger Weg zu früher Komplexität lesbar.",
      "Deshalb bedeutet Hochkultur viel mehr als Pyramiden und berühmte Herrscher. Gemeint ist eine Gesellschaft, in der Umwelt, Nahrung, Verwaltung, Religion, Arbeitsteilung und Symbolsysteme eng zusammenwirken. Wer frühe Staaten verstehen will, muss also auch Speicher, Listen, Schreiber, Tempel, Abgaben, Jenseitsvorstellungen und die Organisation von Arbeit betrachten."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Schrift als Verwaltung",
        extracted:
          "Harari betont, dass mit der Erfindung der Schrift Geschichte die Stimme ihrer Protagonisten erhält und dass frühe Schrift eng mit Buchhaltung und Organisation verbunden ist.",
        didacticUse:
          "Die Buchstellen zeigen, dass frühe Staaten ohne Listen, Abgaben, Schreiber und Bürokratie nicht dauerhaft handlungsfähig werden."
      },
      {
        title: "SRF: Eine kurze Geschichte über…",
        meta: "Ägypten",
        extracted:
          "Die Folge erklärt Ägypten über Nil, Beamtentum, Hieroglyphenschrift, Pharaonenherrschaft und die außergewöhnlich lange Stabilität des Reiches.",
        didacticUse:
          "So wird sichtbar, wie Landwirtschaft, Verwaltung, Religion und Herrschaft am Nil ineinandergreifen."
      },
      {
        title: "Terra X / Planet Wissen: Çatalhöyük – Großsiedlung",
        meta: "Dichte Siedlung ohne Königsmodell",
        extracted:
          "Das Material zeigt Çatalhöyük als frühe Großsiedlung mit Hausverbänden, Dachzugängen, Kult und Bestattungen und verschärft damit die Frage, ob Komplexität immer sofort Staat bedeutet.",
        didacticUse:
          "Die Ressource macht den Unterschied zwischen großer Besiedlung und fertigem Königsstaat sichtbar."
      },
      {
        title: "YouTube: 3D Çatalhöyük Project Animation",
        meta: "Räumliche Rekonstruktion",
        extracted:
          "Die Animation macht Hausdichte, Dachzugänge und die innere Struktur einer frühen Großsiedlung räumlich anschaulich.",
        didacticUse:
          "Das Material hilft, aus abstrakten Beschreibungen ein konkretes Bild früher Verdichtung zu machen."
      },
      {
        title: "YouTube: Hochkulturen",
        meta: "Überblick",
        extracted:
          "Der Film ergänzt das Modul um einen breiteren Überblick zu Hochkulturen, Schrift, Verwaltung, Religion und frühen Staatsordnungen.",
        didacticUse:
          "Ägypten bleibt das Hauptbeispiel, wird aber in einen größeren Zusammenhang früher Hochkulturen eingeordnet."
      },
      {
        title: "YouTube: Was ist eine \"Hochkultur\"?",
        meta: "Begriffsarbeit",
        extracted:
          "Der Film klärt Hochkultur über Schrift, Herrschaft, Spezialisierung und Verdichtung statt nur über monumentale Bauten.",
        didacticUse:
          "Die Ressource schärft den Fachbegriff und verhindert, dass Hochkultur nur als Pyramiden- oder Prunkwort verstanden wird."
      },
      {
        title: "Städte ohne Könige?",
        extracted:
          "Graeber und Wengrow halten dagegen, dass dichte Siedlungen, Landwirtschaft und aufwendige Koordination nicht automatisch Paläste, Könige oder feste Klassen hervorbringen. Große Orte konnten lange ohne zentrale Herrschaft funktionieren oder Herrschaft zeitweise wieder abbauen.",
        didacticUse:
          "Die Gegenposition verhindert, dass Ägypten vorschnell als allgemeines Gesetz früher Staaten gelesen wird, und schärft den Blick für mehrere Wege politischer Verdichtung."
      }
    ],
    sourcePrompt:
      "Arbeite heraus, welche Bausteine Ägypten zu einer dauerhaften Herrschaftsordnung machen und warum große Siedlungen trotzdem nicht überall automatisch Königtum und feste Hierarchie hervorbringen mussten.",
    task: {
      id: "m6-task",
      question:
        "Erkläre, wie aus Vorräten, Verwaltung und Schrift ein Staat entstehen kann.",
      placeholder: "Beschreibe den Weg von Nahrungsspeichern zu Herrschaftsordnung.",
      sampleAnswer:
        "Wenn Gesellschaften Überschüsse erzeugen, müssen Vorräte erfasst, verteilt und geschützt werden. Dafür entstehen Zuständigkeiten und Spezialisten, etwa Verwalter, Schreiber oder Priester. Schrift hilft, Abgaben, Arbeitsleistungen und Besitz festzuhalten. So wird aus wirtschaftlicher Organisation schrittweise politische Herrschaft, die sich zusätzlich durch Religion, Monumente oder Königtum legitimiert.",
      criteria: [
        { label: "Überschuss/Vorrat", keywords: ["überschuss", "vorräte", "abgaben", "speicher"] },
        { label: "Verwaltung/Spezialisten", keywords: ["verwaltung", "beamte", "schreiber", "spezialisten"] },
        { label: "Schriftfunktion", keywords: ["schrift", "listen", "festhalten", "buchhaltung"] },
        { label: "Herrschaft/Legitimation", keywords: ["herrschaft", "könig", "religion", "monument"] }
      ]
    },
    deepening:
      "Frühe Hochkulturen werden verständlich, wenn man sie als Verbindung von Landwirtschaft, Speicherwirtschaft, Bürokratie, Religion und Herrschaft liest. Für Ägypten ist entscheidend: Der Nil macht Ernten berechenbar, Beamte organisieren Abgaben, Hieroglyphen sichern Verwaltung, der Pharao verkörpert Herrschaft und Maat ordnet die Welt religiös. Monumente und Gräber sind deshalb nicht bloß Schmuck, sondern sichtbare Form dieser Ordnung.",
    selftest: {
      id: "m6-selftest",
      question: "Welche Funktion hatte frühe Schrift besonders häufig?",
      options: [
        {
          text: "Sie entstand vor allem, um Liebesgedichte für spätere Generationen festzuhalten.",
          correct: false,
          feedback:
            "Literarische Texte gibt es später auch, aber frühe Schrift ist stark mit Verwaltung und Buchführung verbunden."
        },
        {
          text: "Sie diente häufig dazu, Vorräte, Abgaben und Arbeitsleistungen zu erfassen.",
          correct: true,
          feedback:
            "Richtig. Genau diese Verwaltungsfunktion macht frühe Staatlichkeit überhaupt erst dauerhaft organisierbar."
        },
        {
          text: "Sie war zunächst fast bedeutungslos und hatte kaum politische Folgen.",
          correct: false,
          feedback:
            "Im Gegenteil: Schrift ist ein zentrales Machtinstrument früher Hochkulturen."
        }
      ]
    },
    takeaway: [
      "Überschuss verlangt Organisation.",
      "Schrift ist am Anfang oft Verwaltung, nicht nur Kulturprestige.",
      "Ägypten verbindet Nil, Pharaonenherrschaft, Maat und Bürokratie zu einer langen Reichsordnung."
    ],
    transfer: {
      id: "m6-transfer",
      question:
        "Warum ist Ägypten ein starkes Beispiel für frühe Staatlichkeit, aber kein Beweis dafür, dass jede große Siedlung automatisch im selben Muster endet?",
      placeholder: "Verbinde Nil, Verwaltung, Maat und Herrschaft mit der Frage nach anderen Wegen politischer Verdichtung.",
      sampleAnswer:
        "Ägypten ist ein starkes Beispiel für frühe Staatlichkeit, weil Nil, Überschüsse, Beamtentum, Hieroglyphenschrift, Pharaonenherrschaft und Maat sehr eng zusammenwirken. Diese Verbindung erklärt die außergewöhnliche Stabilität des Reiches. Daraus folgt aber nicht, dass jede große Siedlung denselben Weg nehmen musste. Andere frühe Städte konnten dichter, kooperativer oder weniger zentralisiert organisiert sein. Mesopotamien zeigt schon im Vergleich mehrere konkurrierende Stadtstaaten statt eines so früh geschlossenen Flussreichs.",
      criteria: [
        { label: "Nil/Umwelt", keywords: ["nil", "fluss", "landwirtschaft", "umwelt"] },
        { label: "Verwaltung", keywords: ["verwaltung", "beamtentum", "organisation", "abgaben"] },
        { label: "Schrift", keywords: ["hieroglyph", "schrift", "ordnung"] },
        { label: "religiöse Legitimation", keywords: ["religion", "pharao", "maat", "herrschaft", "legitim"] },
        { label: "kein Automatismus behauptet", keywords: ["nicht automatisch", "anderer weg", "nicht jede", "große siedlung", "zentralisiert"] }
      ]
    }
  },
  {
    id: "modul-7-kelten",
    number: 7,
    title: "Kelten und Helvetier",
    era: "Späte Eisenzeit im Gebiet der heutigen Schweiz",
    phase: "Oppida, Wanderung, Krieg und Eingliederung",
    guidingQuestion: "Wer waren die Helvetier, und was veränderte Rom an ihrer Welt?",
    hook:
      "Vor Rom existiert im schweizerischen Mittelland keine leere Vorstufe, sondern eine keltische Welt mit oppida, Münzen, Fernhandel, Religion, Metallhandwerk und regionalen Machtzentren.",
    goals: [
      "Kelten als Kulturraum und nicht als einheitlichen Staat erklären",
      "die Helvetier im Gebiet der heutigen Schweiz historisch einordnen",
      "Caesars Darstellung kritisch mit archäologischen Funden vergleichen",
      "die Wanderung von 58 v. Chr. und Bibracte als Bruch verstehen",
      "Harari und Graeber/Wengrow an einem konkreten Fall gegeneinander lesen"
    ],
    input: [
      "Der Name Kelten bezeichnet keine einheitliche Nation und kein zusammenhängendes Reich. Er steht für viele Gruppen in weiten Teilen Europas, die ähnliche materielle Kultur, Waffenformen, Schmuckstile und religiöse Praktiken teilen. Für die Schweiz sind vor allem zwei große archäologische Phasen wichtig: Hallstatt und La Tène. Gerade La Tène ist für die keltische Welt im Gebiet der heutigen Schweiz zentral, weil hier oppida, Münzen, Metallhandwerk und Fernkontakte besonders deutlich werden.",
      "Die keltische Welt wird archäologisch vor allem über Siedlungen, Gräber, Heiligtümer, Waffen, Schmuck, Münzen und Werkstätten erschlossen. Genau deshalb ist Archäologie hier keine Nebensache, sondern die zentrale Grundlage historischen Wissens. Datierung über Fundschichten, Vergleichsfunde, Münzen, Dendrochronologie oder C14 entscheidet mit darüber, wie sicher wir Bauphasen, Kontakte und Brüche überhaupt bestimmen können.",
      "Die Helvetier sind eine keltische Bevölkerungsgruppe des schweizerischen Mittellands. Antike Autoren nennen sie vor allem im Zusammenhang mit Caesar. Genau darin liegt ein Problem: Die wichtigste Textquelle stammt von einem Feldherrn, der seinen Krieg politisch rechtfertigen will. Wer die Helvetier verstehen will, darf deshalb Caesars Bericht nicht einfach übernehmen, sondern muss ihn mit archäologischen Funden vergleichen.",
      "Archäologisch erscheint die keltische Welt keineswegs als arme und unbedeutende Vorstufe Roms. Oppida, Befestigungen, Werkstätten, Münzen, importierte Güter und reiche Funde zeigen komplexe regionale Zentren. Der Beitrag zur Berner Engehalbinsel ist hier besonders wichtig: Er widerspricht dem Bild eines bloßen Bauernvolkes und zeigt eine Gesellschaft, die reich, religiös, gebildet und weit vernetzt war.",
      "Das Kelten-Experiment und die lokalen Dossiers konkretisieren diese Welt. Häuser, Vorräte, Werkstätten, Metall, Essen, Transport und Siedlungslogik zeigen, dass keltische Gesellschaft aus materieller Organisation bestand und nicht nur aus Kriegerbildern. Der Übergang zur gallo-römischen Zeit wird dadurch als Mischung aus Kontinuitäten und Brüchen sichtbar: Vieles bleibt örtlich verankert, anderes wird von Rom überformt oder neu geordnet.",
      "58 v. Chr. wird zum Einschnitt. Ein Teil der Helvetier versucht, mit großen Gruppen auszuwandern. Caesar greift ein, besiegt sie bei Bibracte und zwingt sie zur Rückkehr. Historisch ist daran mehr wichtig als nur die Schlacht: Rom entscheidet damit, wer sich im Alpenvorland bewegen darf, und zieht den Raum stärker in seine eigene Ordnung hinein. Die Helvetier bleiben also nicht außerhalb der Geschichte Roms, sondern geraten nun unter römischen Druck und schließlich in den imperialen Zusammenhang.",
      "Der Film Die Kelten und die Römer macht diesen Übergang räumlich besonders klar. Er zeigt, dass Rom nicht einfach eine leere Landschaft besetzt, sondern auf bestehende Siedlungen, Verkehrswege und keltische Strukturen trifft. Genau an solchen Kontaktzonen lässt sich erkennen, was übernommen, was verdrängt und was neu geordnet wird.",
      "Harari würde an diesem Punkt betonen, dass größere Reiche lokale Gruppen in weiter reichende Macht-, Rechts- und Verkehrsordnungen einbinden. Graeber und Wengrow setzen früher an: Für sie zeigen oppida, Austausch und politische Verdichtung bereits vor Rom, dass komplexe Gesellschaften nicht erst als Vorstufe eines Imperiums interessant werden. Genau an den Helvetiern wird der Unterschied deutlich: Harari liest stärker die Eingliederung in größere Netze, Graeber und Wengrow stärker die Eigenständigkeit und Offenheit vorrömischer Komplexität."
    ],
    sources: [
      {
        title: "Harari-PDF · S. 150",
        meta: "Weltreiche und größere Netze",
        extracted:
          "Harari beschreibt die antike Geschichte als Ausweitung größerer Macht-, Glaubens- und Handelsräume, in die lokale Gruppen und Regionen eingebunden werden."
      },
      {
        title: "Graeber/Wengrow: Oppida ohne Einbahnstraße",
        meta: "Komplexität vor Rom",
        extracted:
          "Die Gegenposition betont, dass dichte Siedlungen, Fernhandel und politische Verdichtung nicht automatisch schon auf ein einziges Staatsmodell oder auf Rom zulaufen."
      },
      {
        title: "HLS: Helvetier",
        meta: "Siedlungsraum, Caesar und Forschungslage",
        extracted:
          "Der Lexikonartikel ordnet die Helvetier als keltische Bevölkerungsgruppe des schweizerischen Mittellands ein und macht deutlich, wie stark ihre Geschichte über Caesar und Archäologie erschlossen wird."
      },
      {
        title: "Materialdossier: Die Kelten",
        meta: "Hallstatt, La Tène und oppida",
        extracted:
          "Das lokale Dossier bündelt Hallstatt, La Tène, Oppida, Fernkontakte und den Bruch durch Caesar und legt damit die Grundstruktur der keltischen Entwicklung im Raum der heutigen Schweiz frei."
      },
      {
        title: "Arbeitspräsentation: Kelten – Überblick",
        meta: "Keltenbilder und archäologische Korrektur",
        extracted:
          "Die lokale Präsentation stellt gängige Gallier- und Barbarenbilder bewusst neben Hallstatt, La Tène, oppida und archäologische Befunde und eignet sich deshalb als Korrekturfolie gegen Klischees."
      },
      {
        title: "Planet Schule: Das Kelten-Experiment – Wie lebten die Kelten?",
        meta: "Materieller Alltag",
        extracted:
          "Der Film zeigt Hausbau, Vorräte, Handwerk und Alltag und macht damit sichtbar, dass keltische Gesellschaft aus konkreter Arbeit, Siedlungsorganisation und materieller Kultur besteht."
      },
      {
        title: "SRF: Keltische Schätze der Berner Engehalbinsel",
        meta: "Archäologie gegen das Bauernvolk-Klischee",
        extracted:
          "Die Funde der Engehalbinsel zeigen die Helvetier nicht als schlichtes Bauernvolk, sondern als reiche, religiöse und weit vernetzte Gesellschaft."
      },
      {
        title: "Planet Schule: Altersbestimmung in der Archäologie",
        meta: "Wie Archäologie zu Daten kommt",
        extracted:
          "Das Material erklärt C14, Dendrochronologie, Fundschichten und Vergleichsfunde und zeigt damit, wie archäologische Aussagen zu Kelten und Helvetiern überhaupt abgesichert werden."
      },
      {
        title: "Materialdossier: Archäologie",
        meta: "Stratigraphie, Datierung und Auswertung",
        extracted:
          "Das lokale Dossier erklärt Archäologie als unterirdisches Archiv und verbindet Grabung, Stratigraphie, Datierung und naturwissenschaftliche Auswertung."
      },
      {
        title: "Nationalmuseum: Warum die Kelten tapfer waren",
        meta: "Hallstatt, La Tène und Metallkultur",
        extracted:
          "Der Beitrag führt in die keltische Welt als frühe europäische Hochkultur mit Metallhandwerk, Fernkontakten und markanter materieller Kultur ein."
      },
      {
        title: "SRF: Die Kelten und die Römer",
        meta: "Kontaktzone vor der Romanisierung",
        extracted:
          "Der Film behandelt die Begegnung von keltischer und römischer Welt konkret im Schweizer Raum und zeigt Kontinuitäten und Brüche statt eines einfachen Ersetzungsmodells."
      },
      {
        title: "Swiss Spectator: Die Kelten in der Schweiz",
        meta: "Keltische Schweiz im Überblick",
        extracted:
          "Der Überblick verbindet Hallstatt, La Tène, oppida und die keltische Besiedlung der Schweiz mit dem Übergang in die römische Zeit."
      },
      {
        title: "PHBern: Kelten und gallo-römische Zeit",
        meta: "Keltische Schweiz im Übergang",
        extracted:
          "Das Ideenset verbindet keltische und gallo-römische Zeit und ist deshalb besonders hilfreich, um Übergänge, Überlagerungen und regional unterschiedliche Entwicklungen zu erklären."
      },
      {
        title: "Landesmuseum: Archäologie Schweiz",
        meta: "Fundlandschaften und archäologischer Rahmen",
        extracted:
          "Die Übersicht spannt den archäologischen Rahmen, in dem keltische Fundorte, Siedlungen und Verkehrslandschaften der Schweiz eingeordnet werden."
      }
    ],
    sourcePrompt:
      "Kläre, wie sich keltische Gesellschaft, archäologische Funde, Caesars Bericht und die römische Eingliederung gegenseitig beleuchten und widersprechen.",
    task: {
      id: "m7k-task",
      question:
        "Erkläre, warum die Helvetier nicht einfach als primitives Bauernvolk beschrieben werden können. Arbeite mit Oppida, Funden und Fernkontakten.",
      placeholder: "Verbinde Siedlungen, Metallhandwerk, Reichtum, Religion und Handel.",
      sampleAnswer:
        "Die Helvetier waren keine primitive Randgruppe, weil archäologische Funde komplexe Siedlungen, Befestigungen, Metallhandwerk, Münzen und Fernkontakte zeigen. Oppida und reiche Grab- oder Heiligtumsfunde sprechen für politische Verdichtung und Wohlstand. Gerade die Funde auf der Berner Engehalbinsel zeigen eine religiöse und weit vernetzte Gesellschaft statt eines bloßen Bauernvolks.",
      criteria: [
        { label: "Oppida oder befestigte Zentren", keywords: ["oppida", "oppidum", "befestigt", "zentrum"] },
        { label: "Handwerk, Münzen oder Metall", keywords: ["metall", "handwerk", "münzen", "munzen", "schmuck"] },
        { label: "Fernkontakte oder Vernetzung", keywords: ["handel", "fernkontakte", "vernetzt", "importe"] },
        { label: "Berner Engehalbinsel oder archäologische Funde", keywords: ["engehalbinsel", "funde", "archäolog"] }
      ]
    },
    deepening:
      "Die Helvetier sind historisch wichtig, weil an ihnen drei Dinge zugleich sichtbar werden: erstens die Eigenständigkeit der keltischen Schweiz vor Rom, zweitens das Problem einer stark von Caesar geprägten Überlieferung und drittens der harte Einschnitt, mit dem römische Macht regionale Bewegungs- und Herrschaftsräume neu ordnet.",
    selftest: {
      id: "m7k-selftest",
      question: "Warum ist Caesars Bericht über die Helvetier wichtig und zugleich problematisch?",
      options: [
        {
          text: "Weil er eine der wichtigsten Textquellen ist, aber von einem römischen Feldherrn mit politischem Eigeninteresse stammt.",
          correct: true,
          feedback:
            "Richtig. Genau deshalb muss Caesars Darstellung mit archäologischen Funden gegengeprüft werden."
        },
        {
          text: "Weil er als neutraler Augenzeugenbericht jede archäologische Forschung überflüssig macht.",
          correct: false,
          feedback:
            "Nein. Gerade Caesars Eigeninteresse macht archäologische Korrekturen notwendig."
        },
        {
          text: "Weil er nur religiöse Rituale beschreibt und nichts über Politik oder Krieg sagt.",
          correct: false,
          feedback:
            "Das trifft nicht zu. Caesar beschreibt gerade Wanderung, Krieg und politische Ordnung."
        }
      ]
    },
    takeaway: [
      "Kelten sind ein weiter Kulturraum, kein einheitlicher Staat.",
      "Die Helvetier erscheinen archäologisch komplexer als Caesars Klischee vom Bauernvolk.",
      "58 v. Chr. markiert den Übergang von keltischer Eigenständigkeit zu römischer Raumordnung."
    ],
    transfer: {
      id: "m7k-transfer",
      question:
        "Vergleiche Harari und Graeber/Wengrow am Beispiel der Helvetier. Worin liegt der Unterschied ihrer Deutung?",
      placeholder: "Verbinde römische Eingliederung, größere Netze und vorrömische Komplexität.",
      sampleAnswer:
        "Harari würde stärker betonen, dass die Helvetier in größere imperiale Ordnungen aus Macht, Recht, Verkehr und Handel hineingezogen werden. Graeber und Wengrow setzen früher an und betonen, dass oppida, Handel und politische Verdichtung schon vor Rom zeigen, wie komplex die keltische Welt war. Der Streitpunkt lautet also: Liegt der Hauptakzent auf der Eingliederung in größere Netze oder auf der Eigenständigkeit nichtlinearer vorrömischer Wege?",
      criteria: [
        { label: "Harari mit größeren Ordnungen oder Netzen", keywords: ["harari", "reiche", "netze", "imperium", "eingliederung"] },
        { label: "Graeber/Wengrow mit offener Entwicklung", keywords: ["graeber", "wengrow", "offen", "eigenständig", "nichtlinear", "möglichkeiten"] },
        { label: "Helvetier oder Oppida als Beispiel", keywords: ["helvetier", "oppida", "keltisch", "vorrömisch"] }
      ]
    }
  },
  {
    id: "modul-7",
    number: 8,
    title: "Antike Reiche und Imperien",
    era: "Antike Mittelmeerwelt",
    phase: "Expansion, Infrastruktur, Kulturkontakt",
    guidingQuestion: "Wie ordnen Imperien große Räume?",
    hook:
      "Imperien verbinden sehr unterschiedliche Menschen durch Straßen, Armeen, Gesetze, Städte und Logistik. Gerade darin liegt ihr historischer Reiz und ihre Ambivalenz.",
    goals: [
      "attische Demokratie als antike Herrschaftsform erklären",
      "römische Republik als politische Ordnung vor der Kaiserzeit verstehen",
      "Imperium als Ordnungsmodell erklären",
      "Römische Expansion an konkreten Beispielen der Schweiz erschließen",
      "Alltag und Herrschaft miteinander verknüpfen"
    ],
    input: [
      "Die antike Mittelmeerwelt kennt verschiedene politische Formen. In Athen entsteht im 5. Jahrhundert v. Chr. eine direkte Bürgerdemokratie. Freie männliche Bürger stimmen in der Volksversammlung über Krieg, Gesetze und wichtige Entscheidungen ab. Zugleich ist diese Demokratie eng begrenzt: Frauen, Metöken und Sklaven sind ausgeschlossen. Attische Demokratie bedeutet daher politische Beteiligung, aber nicht Gleichheit aller Menschen.",
      "Rom entwickelt eine andere Ordnung. In der römischen Republik gibt es keinen König, sondern jährlich wechselnde Ämter, Konsuln, Volksversammlungen und vor allem den Senat. Die Republik lebt von Konkurrenz innerhalb der Führungsschicht, von Regelbindung und von der Vorstellung, dass kein Einzelner den Staat allein verkörpern soll. Gleichzeitig ist auch sie sozial ungleich und von Konflikten zwischen Patriziern und Plebejern geprägt.",
      "Gerade diese Konflikte machen die Republik historisch interessant. Plebejer erkämpfen sich mit dem Volkstribunat, mit den Zwölftafeln und später mit dem Zugang zu höheren Ämtern mehr politische Rechte. Dennoch bleibt die res publica keine Gesellschaft gleicher Bürger, sondern eine Mischordnung mit starkem Einfluss der Nobilität. Rom zeigt also früh, dass politische Beteiligung, soziale Ungleichheit und Konkurrenz nebeneinander bestehen können.",
      "Ein Imperium ist nicht einfach nur ein großes Land auf einer Karte. Es ist eine politische Ordnung, die sehr viele Menschen, Orte und Regionen zusammenhält. Damit das gelingt, braucht es Straßen, Brücken, Verwaltung, militärische Macht, Recht und Versorgung. Ein Reich muss also organisiert werden, sonst zerfällt es.",
      "Rom ist dafür ein besonders gutes Beispiel, weil sich hier politische Ordnung verändert: aus der Republik wächst ein Reich, das große Räume rund um das Mittelmeer und darüber hinaus verbindet. Seine Macht zeigt sich nicht nur in Legionen, sondern auch in Verkehrswegen, Städten, Steuern, Bauwerken und der Verbreitung bestimmter Lebensformen. Imperium bedeutet deshalb immer sowohl Herrschaft als auch Infrastruktur.",
      "Diese Entwicklung verläuft nicht reibungslos. Die Expansion nach Italien, gegen Karthago und in den östlichen Mittelmeerraum bringt Beute, Provinzen und Machtzuwachs, aber auch Landkonzentration, soziale Spannungen und Bürgerkriege. Die Gracchen, Marius, Sulla, Pompeius und Caesar stehen für eine Republik in der Krise. Mit Augustus entsteht schließlich der Prinzipat: Formal bleiben republikanische Ämter bestehen, praktisch bündelt ein Einzelner militärische, politische und symbolische Macht. Die Kaiserzeit ist darum kein völliger Neuanfang, sondern eine Umformung der Republik unter dem Schein alter Begriffe.",
      "Die römische Schweiz macht diese Großentwicklung an einem konkreten Raum sichtbar. Nach Caesars Sieg über die Helvetier von 58 v. Chr. gerät das Gebiet der heutigen Schweiz schrittweise in römische Provinzordnungen wie Germania superior und Raetia. Städte wie Aventicum und Augusta Raurica, das Legionslager Vindonissa, Gutshöfe, Straßen und Brücken zeigen, wie Rom Räume militärisch, wirtschaftlich und kulturell neu ordnet.",
      "Gerade hier wird Romanisierung greifbar. Keltische Orte verschwinden nicht einfach, sondern werden überlagert, umgebaut oder in neue Verkehrs- und Verwaltungsräume eingebunden. Latein, Münzen, Importwaren, Wein, Bäder, Stadtrecht und Militärlager verändern den Alltag. Zugleich bleibt die gallo-römische Schweiz eine Mischwelt: Viele lokale Traditionen leben weiter, auch wenn das Imperium neue Maßstäbe von Recht, Verwaltung und Infrastruktur setzt.",
      "Das Römer-Experiment ergänzt diese Raumordnung durch Rekonstruktion. Nachgestellt werden Gegenstände, Werkzeuge, Kochen, Gladiatorenausbildung und andere Alltagssituationen. Damit wird sichtbar, dass römische Herrschaft nicht nur in Heeren und Grenzlinien bestand, sondern in Essen, Arbeit, Gebäuden, Recht und Bewegungswegen. Die römische Welt muss also als politische, soziale und materielle Ordnung zugleich verstanden werden."
    ],
    sources: [
      {
        title: "YouTube: Griechenland, Polis und attische Demokratie",
        meta: "Athen, Bürgerrecht und Volksversammlung",
        extracted:
          "Der Film erklärt die Polis als politischen Raum und zeigt, wie die attische Demokratie mit Volksversammlung, Rat und Bürgerrecht funktioniert, aber zugleich viele Menschen ausschließt."
      },
      {
        title: "YouTube: Rom, Republik und politische Ordnung",
        meta: "Senat, Magistrate und Republik",
        extracted:
          "Der Film zeigt Rom vor der Kaiserzeit als Republik mit Senat, Konsuln, Volksversammlungen und Konflikten zwischen sozialen Gruppen."
      },
      {
        title: "Materialdossier: Römische Republik",
        meta: "res publica, Ständekonflikte und Magistrate",
        extracted:
          "Das Dossier erklärt Senat, Konsuln, Volksversammlungen, Zwölftafeln, Volkstribunat und die Konflikte zwischen Patriziern und Plebejern als Kern der republikanischen Ordnung."
      },
      {
        title: "Materialdossier: Rom – Expansion und Krise",
        meta: "Punische Kriege, Gracchen, Caesar, Augustus",
        extracted:
          "Das Dossier verbindet Expansion, Provinzen, soziale Spannungen und Bürgerkriege bis zur Umformung der Republik im Prinzipat."
      },
      {
        title: "Materialdossier: Römische Kaiserzeit",
        meta: "Prinzipat, Provinzen und Reichsorganisation",
        extracted:
          "Das Dossier zeigt, wie Augustus die Republik formal weiterführt, aber faktisch eine monarchische Ordnung schafft, die das Reich dauerhaft stabilisiert."
      },
      {
        title: "SRF: Römer in der Schweiz",
        meta: "Regionalisierung des Imperiums",
        extracted:
          "Die Seite nennt Alltagsfolgen römischer Herrschaft wie Hühnerhaltung, Weinbau, Walnüsse, Verkehrswege, Recht und Kulturkontakt mit keltischen Siedlungen.",
        didacticUse:
          "Sie wird als Fallmaterial genutzt, um abstrakte Expansion in konkrete Veränderungen von Raum und Alltag zu übersetzen."
      },
      {
        title: "Materialdossier: Rom in der Schweiz",
        meta: "Helvetier, Provinzen und gallo-römische Mischwelt",
        extracted:
          "Das Dossier verbindet Caesars Sieg über die Helvetier mit Aventicum, Vindonissa, Provinzbildung, Romanisierung und dem Fortleben lokaler Traditionen."
      },
      {
        title: "SRF: Das Römer-Experiment",
        meta: "Alltag der Römerzeit",
        extracted:
          "Alltagssituationen, Gegenstände und Werkzeuge werden rekonstruiert, um zu zeigen, wie Römer kochten, arbeiteten oder kämpften.",
        didacticUse:
          "Die Ressource eröffnet eine handlungsnahe Perspektive auf materielle Kultur und soziale Praxis."
      }
    ],
    sourcePrompt:
      "Untersuche an Athen, der römischen Republik und dem römischen Reich, wie politische Ordnungen, Beteiligung, Expansion und Alltagsveränderung in der Antike zusammenhängen.",
    task: {
      id: "m7-task",
      question:
        "Zeige an zwei Beispielen, wie römische Expansion den Alltag in den eroberten Gebieten veränderte.",
      placeholder: "Nutze Beispiele aus Infrastruktur, Kulturkontakt, Ernährung oder Recht.",
      sampleAnswer:
        "Römische Expansion veränderte den Alltag etwa durch Verkehrswege: Straßen und Brücken erleichterten Warentransport und banden Regionen enger an das Reich. Auch Ernährung und Landwirtschaft änderten sich, etwa durch Weinbau oder neue Formen von Tierhaltung. Hinzu kamen Sprache, Währung und römische Rechtsformen. Imperium zeigt sich also nicht nur im Heer, sondern im Alltag.",
      criteria: [
        { label: "Infrastruktur genannt", keywords: ["straßen", "brücken", "verkehrswege", "transport"] },
        { label: "Alltag/Güter genannt", keywords: ["wein", "walnüsse", "hühner", "essen", "ernährung"] },
        { label: "Ordnungssysteme genannt", keywords: ["recht", "sprache", "währung", "gesetze"] }
      ]
    },
    deepening:
      "Die politische Geschichte der Antike darf nicht erst mit dem Kaiserreich beginnen. Athen und Rom zeigen zwei verschiedene Antworten auf die Frage, wie Bürger, Ämter, Beratung, Gesetze und Macht geordnet werden. Erst vor diesem Hintergrund wird verständlich, warum das Imperium nicht nur militärische Expansion, sondern ein neuer Maßstab politischer Raumordnung ist.",
    selftest: {
      id: "m7-selftest",
      question: "Warum errichteten die Römer ihre Städte in der heutigen Schweiz oft an bereits genutzten Orten?",
      options: [
        {
          text: "Weil diese Orte strategisch günstig lagen und Verkehrswege ermöglichten.",
          correct: true,
          feedback:
            "Richtig. Genau das zeigt das Beispiel Vindonissa mit seinen Flussverbindungen."
        },
        {
          text: "Weil die Römer grundsätzlich nur dort bauten, wo überhaupt keine lokale Bevölkerung lebte.",
          correct: false,
          feedback:
            "Nein. Die Ressource betont gerade die Begegnung von römischer und keltischer Kultur."
        },
        {
          text: "Weil keltische Siedlungen für Römer historisch bedeutungslos waren.",
          correct: false,
          feedback:
            "Im Gegenteil: Strategische vorhandene Orte waren für römische Planung besonders attraktiv."
        }
      ]
    },
    takeaway: [
      "Imperien ordnen Räume über Infrastruktur, Militär und Recht.",
      "Römische Herrschaft verändert Alltag, nicht nur Grenzen.",
      "Kulturkontakt ist in eroberten Räumen oft Mischung statt bloße Ersetzung."
    ],
    transfer: {
      id: "m7-transfer",
      question:
        "Vergleiche attische Demokratie, römische Republik und römisches Imperium in einem kurzen Überblick. Worin unterscheiden sich diese drei politischen Formen grundsätzlich?",
      placeholder: "Verbinde Bürgerbeteiligung, Senat, Ämter und Herrschaft über große Räume.",
      sampleAnswer:
        "Die attische Demokratie organisiert politische Entscheidungen direkt über Bürger in der Volksversammlung, schließt aber viele Menschen aus. Die römische Republik verteilt Macht auf Senat, Magistrate und Volksversammlungen und kennt keinen König. Das römische Imperium geht darüber hinaus: Es ordnet große Räume mit Heer, Verwaltung, Straßen, Recht und Versorgung.",
      criteria: [
        { label: "attische Demokratie erklärt", keywords: ["volksversammlung", "bürger", "athen", "direkt"] },
        { label: "römische Republik erklärt", keywords: ["senat", "konsul", "republik", "magistrat"] },
        { label: "Imperium erklärt", keywords: ["imperium", "große räume", "heer", "verwaltung", "straßen"] }
      ]
    }
  },
  {
    id: "modul-8",
    number: 9,
    title: "Geld, Handel und Vernetzung",
    era: "Antike bis Mittelalter",
    phase: "Vertrauen über Grenzen hinweg",
    guidingQuestion: "Warum funktioniert Geld auch zwischen Fremden?",
    hook:
      "Harari liest Geld als gemeinsames Vertrauenssystem. Damit lässt sich erklären, warum Handel kulturelle Unterschiede nicht beseitigt, aber überbrückbar macht.",
    goals: [
      "Geld als abstrakte Ordnung verstehen",
      "Münzfunde als historische Quellen deuten",
      "Fernhandel und kulturelle Vernetzung historisch einordnen"
    ],
    input: [
      "Geld wirkt auf den ersten Blick einfach: Man gibt Münzen oder Scheine ab und bekommt etwas dafür. Historisch ist Geld aber komplizierter. Es funktioniert nur, wenn Menschen darauf vertrauen, dass andere es ebenfalls annehmen. Sein Wert liegt also nicht nur im Material, sondern in gemeinsamer Akzeptanz. Darum kann Geld Menschen verbinden, die sich gar nicht persönlich kennen.",
      "Für den Handel ist das entscheidend. Ohne Geld müsste man Ware direkt gegen Ware tauschen und immer jemanden finden, der genau das Gegenstück will. Geld erleichtert diesen Austausch. Es macht Märkte beweglicher und verbindet Orte über größere Entfernungen. So wird Handel planbarer und Räume werden stärker vernetzt.",
      "Der Münzschatz von Ueken macht diese abstrakte Ordnung greifbar. Im Fricktal wurden über 4000 römische Silbermünzen im Baumgarten eines Bauernhofs gefunden. Für die Menschen der Römerzeit war das ein kleines Vermögen. Im Labor werden die Stücke mit Sandstrahl- und Ultraschallgeräten von Korrosion befreit, teilweise bis zu einer Stunde pro Münze. Erst dann zeigen sich Bilder, Inschriften und Prägungen, aus denen Archäologinnen und Archäologen Informationen über Herrschaft, Umlauf und Verstecken von Vermögen gewinnen.",
      "Die Reihe 'Grosse Völker' erweitert den Blick noch einmal. Dort werden Araber, Germanen und Karthager als Träger von Fernhandel, Schriftsystemen, Medizin und Mathematik sichtbar. Die Karthager wurden durch den Handel mit Purpur reich; die Araber prägten Wissenschaft, Medizin und Mathematik. Handel ist deshalb nie nur Warentransport, sondern immer auch Austausch von Wissen, Techniken und Schrift."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Geld als Vertrauen",
        extracted:
          "Harari zeigt am Beispiel von Gold und den Azteken, dass Geld nicht primär durch Materialeigenschaften wirkt, sondern durch geteilte Akzeptanz.",
        didacticUse:
          "Die Lernenden sollen verstehen, dass Geld historisch als soziale Vereinbarung funktioniert."
      },
      {
        title: "SRF: Münzschatz von Ueken",
        meta: "Sachquelle",
        extracted:
          "Der Fund von mehr als 4000 römischen Silbermünzen wird systematisch untersucht; Reinigung und Analyse liefern aufschlussreiche Informationen.",
        didacticUse:
          "Die Ressource wird als Modell für Quellenarbeit eingesetzt: Was verrät eine Münze über Wirtschaft, Macht und Unsicherheit?"
      },
      {
        title: "SRF: Grosse Völker",
        meta: "Fernhandel",
        extracted:
          "Die Reihe verbindet Fernhandel, Schriftsysteme und Wissenstransfer mit Arabern, Germanen und Karthagern.",
        didacticUse:
          "So wird Handel als Vernetzungsprozess und nicht nur als Austausch von Waren unterrichtet."
      }
    ],
    sourcePrompt:
      "Arbeite heraus, warum Münzen mehr erzählen als bloßen Wert und warum Handel Menschen auch über kulturelle Grenzen hinweg verbindet.",
    task: {
      id: "m8-task",
      question:
        "Erkläre, warum Geld kulturübergreifend funktionieren kann. Beziehe Vertrauen, Tausch und politische Ordnung ein.",
      placeholder: "Beschreibe Geld als historische Vereinbarung.",
      sampleAnswer:
        "Geld funktioniert kulturübergreifend, weil Menschen darauf vertrauen, dass andere es ebenfalls akzeptieren. Es vereinfacht Tausch, weil nicht jedes Gut direkt gegen ein passendes anderes Gut eingetauscht werden muss. Münzen und Währungen werden häufig durch politische Herrschaft, Prägestempel oder bekannte Werte abgesichert. So schafft Geld Verbindungen zwischen Menschen, die sich persönlich nicht kennen.",
      criteria: [
        { label: "Vertrauen/Akzeptanz", keywords: ["vertrauen", "akzeptieren", "glauben"] },
        { label: "Tausch vereinfachen", keywords: ["tausch", "vereinfach", "waren", "handel"] },
        { label: "politische Absicherung", keywords: ["herrschaft", "prägung", "staat", "ordnung", "währung"] },
        { label: "Fremde verbinden", keywords: ["fremde", "kulturübergreifend", "menschen die sich nicht kennen"] }
      ]
    },
    deepening:
      "Das Modul eignet sich hervorragend für historisches Abstraktionslernen. Münzen sehen konkret aus, aber ihre Wirksamkeit beruht auf einer unsichtbaren sozialen Ordnung. Genau darin liegt die Brücke zurück zur kognitiven Revolution: Auch Geld ist eine geteilte Vorstellung mit realen Folgen.",
    selftest: {
      id: "m8-selftest",
      question: "Warum ist der Münzschatz von Ueken für Historiker besonders interessant?",
      options: [
        {
          text: "Weil man damit heute noch römische Waren einkaufen könnte.",
          correct: false,
          feedback:
            "Das wäre kein historisches Erkenntnisinteresse. Relevant ist, was der Fund über Vergangenheit verrät."
        },
        {
          text: "Weil Münzen Hinweise auf Wirtschaft, Herrschaft, Umlauf und mögliche Krisensituationen geben.",
          correct: true,
          feedback:
            "Richtig. Der Fund ist wertvoll, weil Münzen historische Informationen tragen."
        },
        {
          text: "Weil Sachquellen im Geschichtsunterricht grundsätzlich weniger aussagen als Texte.",
          correct: false,
          feedback:
            "Nein. Gerade Sachquellen sind oft hoch aussagekräftig, wenn sie kontextualisiert werden."
        }
      ]
    },
    takeaway: [
      "Geld ist eine historische Vertrauensordnung.",
      "Handel vernetzt Räume, Akteure und Ideen.",
      "Münzen sind materielle Quellen für Macht, Wert und Unsicherheit."
    ],
    transfer: {
      id: "m8-transfer",
      question:
        "Was erzählen Münzfunde mehr als nur Preise? Formuliere mindestens drei historische Erkenntnismöglichkeiten.",
      placeholder: "Denk an Herrschaft, Umlauf, Krise, Kontakte und Materialität.",
      sampleAnswer:
        "Münzfunde erzählen etwas über politische Herrschaft, weil sie Namen, Bilder oder Symbole von Machthabern tragen. Sie zeigen Handelsräume und Verkehrswege, weil Münzen in Umlauf geraten. Außerdem können sie auf Krisen oder Unsicherheit hinweisen, wenn Vermögen vergraben wurde. Material und Menge sagen zudem etwas über Wirtschaft und Reichtum aus.",
      criteria: [
        { label: "Herrschaft", keywords: ["herrschaft", "kaiser", "bilder", "symbole", "prägung"] },
        { label: "Handelsräume/Umlauf", keywords: ["handel", "verkehr", "umlauf", "kontakte"] },
        { label: "Krise/Sicherheit", keywords: ["krise", "vergraben", "unsicherheit", "schutz"] }
      ]
    }
  },
  {
    id: "modul-9",
    number: 10,
    title: "Religionen und Weltbilder",
    era: "Antike bis Mittelalter",
    phase: "Sinnordnungen und Legitimation",
    guidingQuestion: "Wie verbindet Religion Menschen über große Räume hinweg?",
    hook:
      "Hararis Kapitel über Religion beginnt nicht mit Definitionen, sondern mit Samarkand und Mekka: Orte, an denen Handel, Pilgerfahrt und kulturelle Vielfalt konkrete Erfahrung werden.",
    goals: [
      "Religion als Ordnungs- und Deutungssystem beschreiben",
      "religiöse Netzwerke mit Herrschaft, Mobilität und Gemeinschaft verbinden",
      "Religion nicht auf 'Glauben privat' reduzieren"
    ],
    input: [
      "Religion ist in vormodernen Gesellschaften weit mehr als privater Glaube. Sie erklärt, wie die Welt verstanden werden soll, welche Regeln gelten, was erlaubt oder verboten ist und wie Menschen ihren Platz in der Gemeinschaft sehen. Religion wirkt deshalb auf Denken, Alltag und politische Ordnung zugleich.",
      "Das zeigt sich an Ritualen, Feiertagen, Pilgerorten, heiligen Texten und religiösen Verboten. Sie ordnen Zeit, Raum und Zugehörigkeit. Wer gemeinsam betet, dieselben Feste feiert oder dieselben heiligen Orte kennt, erlebt sich als Teil einer größeren Gemeinschaft. Religion verbindet also Menschen, auch wenn sie weit voneinander entfernt leben.",
      "Historisch wichtig ist außerdem, dass Religion oft mit Wissen, Handel und Mobilität zusammenhängt. Pilger reisen, Gelehrte übersetzen Texte, Händler bewegen sich zwischen Städten und Regionen. In der Filmreihe 'Grosse Völker' erscheinen die Araber nicht nur als religiöse Gemeinschaft, sondern auch als Förderer von Medizin, Mathematik und Wissenschaft. Damit wird klar: Glaube, Wissen und Fernverbindungen lassen sich in vormodernen Gesellschaften oft nicht sauber voneinander trennen.",
      "Das Material zum frühen Christentum zeigt dieselbe Verflechtung aus einer anderen Richtung. Jesus wirkt zunächst im jüdischen Kontext Palästinas. Erst durch Paulus und die Heidenmission breitet sich die neue Religion weit über Judäa hinaus im römischen Reich aus. Gemeinden, Briefe, Bischöfe und gemeinsame Rituale schaffen nach und nach einen eigenen religiösen Raum.",
      "Gerade darin liegt die historische Sprengkraft des Christentums. Es wächst in einem Reich, das religiöse Loyalität auch politisch deutet, und gerät deshalb immer wieder in Konflikt mit dem römischen Staat. Die Verfolgungen unter Nero, Decius oder Diokletian zeigen, dass Religion nicht bloß inneres Bekenntnis ist, sondern Fragen von Ordnung, Gehorsam und Zugehörigkeit berührt.",
      "Mit Konstantin und der konstantinischen Wende verändert sich die Lage grundlegend. Das Christentum wird geduldet, gefördert und später unter Theodosius zur bevorzugten Religion des Reiches. Konzilien wie Nicäa zeigen, dass religiöse Ordnung, Lehrstreit und politische Einheit eng zusammenhängen. Religion wird dadurch nicht schwächer, sondern institutionell mächtiger.",
      "Für die nächsten Module ist das ein Schlüssel. Kirche, Herrschaft, Pilgerwesen, Kreuzzüge und Alltagsregeln im Mittelalter lassen sich nur verstehen, wenn Religion nicht als Nebenthema erscheint, sondern als tragende Ordnung vieler Gesellschaften."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Samarkand und Mekka",
        extracted:
          "Harari schildert den mittelalterlichen Markt von Samarkand und die Pilgerfahrt nach Mekka als dichte Räume, in denen Glaube, Handel und kulturelle Vielfalt zusammenkommen.",
        didacticUse:
          "Der Text dient hier als Einstieg, weil Religion sofort mit Mobilität, Austausch und Weltdeutung verbunden erscheint."
      },
      {
        title: "SRF: Grosse Völker",
        meta: "Religion, Herrschaft und Wissen",
        extracted:
          "Die Araber-Folge zeigt Religion nicht isoliert, sondern zusammen mit Bildung, Mathematik, Medizin und imperialen Wissensräumen.",
        didacticUse:
          "Die Ressource wird verwendet, um religiöse Ordnung direkt mit Wissenschaft und Vernetzung zusammenzudenken."
      },
      {
        title: "Materialdossier: Christentum – Entstehung und Verbreitung",
        meta: "Jesus, Paulus, Verfolgungen, Konstantin",
        extracted:
          "Das Dossier erklärt die Ausbreitung des Christentums von den ersten Gemeinden über Verfolgungen bis zur konstantinischen Wende und zur Reichskirche."
      },
      {
        title: "YouTube: Christentum",
        meta: "Einführung in Glauben und Ausbreitung",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Einführung in das Christentum, damit zentrale Begriffe und Traditionen nicht stillschweigend vorausgesetzt werden."
      },
      {
        title: "YouTube: Judentum",
        meta: "Einführung in Tradition und Schriftkultur",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um einen direkten Zugang zu Judentum, Tora, Tradition und historischer Kontinuität."
      },
      {
        title: "YouTube: Islam",
        meta: "Einführung in Glaube und historischen Ordnungsraum",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Einführung in den Islam, seine Glaubenspraxis und seine historische Ausbreitung."
      }
    ],
    sourcePrompt:
      "Analysiere Religion nicht nur als Glaubenssatz, sondern als historische Infrastruktur von Gemeinschaft, Mobilität und Ordnung.",
    task: {
      id: "m9-task",
      question:
        "Erkläre Religion als Ordnungs- und Deutungssystem. Was leistet sie für Gesellschaften?",
      placeholder: "Denke an Sinn, Regeln, Gemeinschaft und Herrschaft.",
      sampleAnswer:
        "Religion ist ein Ordnungs- und Deutungssystem, weil sie erklärt, wie die Welt verstanden werden soll, und zugleich Regeln für das Zusammenleben bietet. Sie stiftet Gemeinschaft durch Rituale, Feste, heilige Orte und gemeinsame Normen. Außerdem kann sie Herrschaft legitimieren, indem Könige, Priester oder Gesetze religiös begründet werden. Damit wirkt Religion sozial, politisch und kulturell zugleich.",
      criteria: [
        { label: "Sinn/Deutung", keywords: ["deutung", "sinn", "welt erklären", "verstehen"] },
        { label: "Normen/Gemeinschaft", keywords: ["regeln", "rituale", "feste", "gemeinschaft", "heilige orte"] },
        { label: "Herrschaft/Legitimation", keywords: ["herrschaft", "legitim", "könig", "priester", "gesetze"] }
      ]
    },
    deepening:
      "Gerade für Schulgeschichte ist wichtig: Religion ist nicht bloß ein eigenes Kapitel neben Politik oder Wirtschaft. Sie durchzieht Kalender, Besitzordnungen, Bildungsformen, Kriegsdeutungen und Moralvorstellungen. Wer das versteht, kann Mittelalter und Kreuzzüge differenzierter analysieren.",
    selftest: {
      id: "m9-selftest",
      question: "Welche Aussage passt am besten?",
      options: [
        {
          text: "Religion betrifft in vormodernen Gesellschaften nur den privaten Glauben einzelner Menschen.",
          correct: false,
          feedback:
            "Das ist zu modern gedacht. In vormodernen Gesellschaften prägt Religion oft Recht, Zeitordnung, Herrschaft und Gemeinschaft."
        },
        {
          text: "Religion kann große Gruppen durch gemeinsame Normen, Rituale und Sinnsysteme verbinden.",
          correct: true,
          feedback:
            "Richtig. Genau diese verbindende Funktion steht bei Harari im Vordergrund."
        },
        {
          text: "Religion verhindert grundsätzlich Handel und Mobilität.",
          correct: false,
          feedback:
            "Nicht unbedingt. Pilgerfahrten, Märkte und Fernverbindungen zeigen oft das Gegenteil."
        }
      ]
    },
    takeaway: [
      "Religion ordnet Zeit, Raum, Normen und Zugehörigkeit.",
      "Religiöse Gemeinschaften können Macht stabilisieren und Räume verbinden.",
      "Für das Mittelalter ist Religion kein Zusatzthema, sondern Schlüsselperspektive."
    ],
    transfer: {
      id: "m9-transfer",
      question:
        "Vergleiche eine christliche Pilgerfahrt und die islamische Pilgerfahrt historisch. Welche Gemeinsamkeiten sind für Historiker besonders interessant?",
      placeholder: "Achte auf Mobilität, Gemeinschaft, Rituale und Austausch.",
      sampleAnswer:
        "Historisch interessant sind bei beiden Pilgerformen vor allem Mobilität, Gemeinschaft und ritualisierte Zugehörigkeit. Menschen aus verschiedenen Regionen treffen sich an heiligen Orten, teilen Praktiken und tauschen Waren, Nachrichten oder Wissen aus. Pilgerfahrten sind daher nicht nur religiös, sondern auch soziale und räumliche Vernetzungsprozesse.",
      criteria: [
        { label: "Mobilität", keywords: ["mobilität", "reisen", "pilger", "wege"] },
        { label: "Gemeinschaft/Ritual", keywords: ["gemeinschaft", "rituale", "zugehörigkeit"] },
        { label: "Austausch/Vernetzung", keywords: ["austausch", "waren", "wissen", "netzwerke"] }
      ]
    }
  },
  {
    id: "modul-10",
    number: 11,
    title: "Das Mittelalter: Herrschaft, Kirche, Gesellschaft",
    era: "ca. 500 bis 1500",
    phase: "Lebenswelt und Ordnung",
    guidingQuestion: "War das Mittelalter wirklich 'dunkel'?",
    hook:
      "Die Frage ist bewusst provokant. Mehrere SRF-Ressourcen zeigen, dass das Mittelalter weder bloß düster noch bloß romantisch war, sondern eine widersprüchliche und hoch produktive Epoche.",
    goals: [
      "Klischees über das Mittelalter überprüfen",
      "Alltag, Herrschaft, Kirche und soziale Ordnung zusammendenken",
      "archäologische und narrative Zugänge zur Epoche nutzen"
    ],
    input: [
      "Viele Menschen verbinden das Mittelalter sofort mit Rittern, Burgen, dunklen Straßen oder großen Kathedralen. Solche Bilder sind nicht völlig falsch, aber sie reichen nicht aus. Das Mittelalter war eine lange und sehr unterschiedliche Epoche. Es gab harte Lebensbedingungen, aber auch beeindruckende Bauleistungen, religiöse Kultur, wachsende Städte und komplexe Herrschaftsformen.",
      "Das Frühmittelalter beginnt nicht in einer leeren Welt. Nach dem Ende des weströmischen Kaisertums entstehen neue Herrschaftsräume, während Byzanz und die islamische Welt weiter stark bleiben. Wer das Mittelalter verstehen will, muss also mit Kontinuitäten und Brüchen zugleich rechnen: römische Traditionen wirken fort, aber politische Ordnungen, Sprachen und religiöse Landschaften verändern sich tiefgreifend.",
      "Das Frankenreich ist dafür ein Schlüsselraum. Mit Chlodwig, Christianisierung und später den Karolingern entstehen neue Formen von Königtum, Reichskirche und Herrschaft. Klöster folgen Regeln wie der Benediktsregel und werden zu Orten von Gebet, Schrift, Arbeit und Bildung. Gerade dadurch wird Kirche zu einer tragenden Kraft mittelalterlicher Ordnung.",
      "Im Hochmittelalter verfestigen sich Herrschaft und Gesellschaft weiter. Lehensbindungen, Kronvasallen, Ministerialen, Burgen und Rittertum ordnen politische Macht. Zugleich wird die Gesellschaft in Ständen gedacht: Betende, Kämpfende und Arbeitende. Diese Ordnung ist nicht bloß Theorie, sondern prägt Rang, Rechte, Kleidung, Gewalt und Abhängigkeit im Alltag.",
      "Der Film 'Das verrückte Mittelalter' liefert dafür die bekannten Bilder: Burgen, Minnesänger, Hierarchien, Pest, Handel, Hygiene, Turniere und Kathedralen. Diese Motive sind nicht erfunden, aber sie zeigen nur die Oberfläche. Erst wenn man fragt, wie Menschen tatsächlich wohnten, aßen, sich verteidigten und mit Krankheiten umgingen, wird die Epoche historisch greifbar.",
      "Genau dort setzt 'Mittelalter in der Schweiz' an. In fünf Burgen und Schlössern geht es um Verteidigung, Gesundheit und Hygiene, Speisen aus der Schlossküche, Rollenbilder und Statussymbole sowie archäologische Funde. Der Film erinnert daran, dass Latrinen nicht nur Toiletten, sondern auch Müllplätze waren. Sprichwörter wie 'den Löffel abgeben' oder 'unter die Haube kommen' führen direkt in mittelalterlichen Alltag. Das Mittelalter erscheint dadurch als konkrete Lebenswelt von Nahrung, Abfall, Rang, Kleidung und Schutz.",
      "Die Entstehung der Eidgenossenschaft gehört in diesen Zusammenhang, weil sie ein spätmittelalterliches Beispiel für politische Neuordnung ist. Reichsunmittelbarkeit, Alpenpässe wie der Gotthard, Landfriedensbündnisse, Morgarten und spätere Bündnispolitik zeigen, wie regionale Herrschaft im Reich umgebaut wird. Die Eidgenossenschaft fällt also nicht vom Himmel, sondern wächst aus Konflikten, Verkehrsinteressen und Bündnissen des späten Mittelalters."
    ],
    sources: [
      {
        title: "Materialdossier: Frühmittelalter",
        meta: "Frankenreich, Klöster und neue Herrschaftsräume",
        extracted:
          "Das Dossier erklärt die mittelalterliche Welt nach Rom über Frankenreich, Christianisierung, Klöster, Grundherrschaft und die neue Dreiteilung zwischen Westen, Byzanz und Islam."
      },
      {
        title: "Materialdossier: Hochmittelalter – Könige und Kirche",
        meta: "Lehen, Rittertum, Stände und Frömmigkeit",
        extracted:
          "Das Dossier bündelt Lehenswesen, Ministerialen, Burgen, Rittertum, Ständeordnung und religiöse Vorstellungswelten wie Jüngstes Gericht und Fegefeuer."
      },
      {
        title: "SRF: Das verrückte Mittelalter",
        meta: "Einstieg",
        extracted:
          "Die Serie bündelt Burgen, Ritter, Hierarchien, Pest, Handel, Minnesänger und Mythen in einfach verständlicher Form.",
        didacticUse:
          "Im Modul dient sie als motivierender Zugang, der anschließend kritisch ausdifferenziert wird."
      },
      {
        title: "SRF: Mittelalter in der Schweiz",
        meta: "Alltagsgeschichte",
        extracted:
          "Themen wie Hygiene, Verteidigung, Schlossküche, Rollenbilder, Statussymbole und archäologische Funde machen mittelalterliche Lebenswelt konkret.",
        didacticUse:
          "Die Ressource hilft, den Unterricht vom Klischee auf materielle und soziale Wirklichkeit umzustellen."
      },
      {
        title: "SRF: Eine kurze Geschichte über…",
        meta: "Klischeekritik",
        extracted:
          "Die Seite problematisiert das Bild des rückständigen Mittelalters und betont die Vielfalt sowie beeindruckende Leistungen der Zeit.",
        didacticUse:
          "Sie eignet sich für eine explizite Urteilsaufgabe: Welche Bilder vom Mittelalter tragen, welche sind zu simpel?"
      },
      {
        title: "YouTube: Klöster im Mittelalter",
        meta: "Kirche und Bildung",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um Klöster als Räume von Religion, Arbeit, Bildung und Ordnung.",
        didacticUse:
          "Die Ressource soll Kirche und Gesellschaft im Mittelalter materieller und institutioneller greifbar machen."
      },
      {
        title: "Materialdossier: Eidgenossenschaft",
        meta: "Bündnisse, Gotthard und spätmittelalterliche Machtpolitik",
        extracted:
          "Das Dossier erklärt die Eidgenossenschaft aus Reichsunmittelbarkeit, Gotthardverkehr, Landfriedensbündnissen, Morgarten und der späteren Ausweitung des Bundes."
      },
      {
        title: "YouTube: Entstehung der Eidgenossenschaft",
        meta: "Herrschaft und Bündnisse",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um ein spätmittelalterliches Beispiel für Bündnisse, Herrschaft und politische Ordnung im schweizerischen Raum.",
        didacticUse:
          "Die Ressource verankert das Modul stärker im regionalen politischen Wandel."
      }
    ],
    sourcePrompt:
      "Prüfe an Wohnen, Essen, Hygiene, Verteidigung und Rangsymbolen, wie aus Klischees ein genaueres Bild mittelalterlicher Lebenswelt entsteht.",
    task: {
      id: "m10-task",
      question:
        "Warum ist die Vorstellung vom 'dunklen Mittelalter' historisch zu einfach? Begründe mit mindestens drei Argumenten.",
      placeholder: "Arbeite mit Alltagsgeschichte, Religion, Bauleistungen und sozialen Unterschieden.",
      sampleAnswer:
        "Das Bild vom 'dunklen Mittelalter' ist zu einfach, weil die Epoche sehr vielfältig war. Es gab große Bauleistungen wie Burgen und Kathedralen, komplexe religiöse und politische Ordnungen sowie entwickelte Formen von Schrift- und Bildungskultur. Gleichzeitig waren Alltag, Hygiene oder Hungersnöte oft hart. Die Epoche ist also weder nur glorreich noch nur rückständig, sondern widersprüchlich.",
      criteria: [
        { label: "Vielfalt der Epoche", keywords: ["vielfältig", "nicht nur", "widersprüch", "komplex"] },
        { label: "Leistungen genannt", keywords: ["kathedral", "burgen", "schrift", "bildung", "bau"] },
        { label: "harte Lebensbedingungen genannt", keywords: ["hygiene", "hunger", "krankheit", "pest", "hart"] }
      ]
    },
    deepening:
      "Didaktisch ist dieses Modul zentral, weil viele Lernende bereits starke Vorbilder aus Filmen, Spielen oder Kinderbüchern mitbringen. Historischer Unterricht muss diese Bilder nicht zerstören, aber präzisieren: Wer lebte wie? Wer verfügte über Macht? Welche Rolle spielten Kirche, Adel und bäuerliche Arbeit? Welche Quellen haben wir eigentlich?",
    selftest: {
      id: "m10-selftest",
      question: "Welche Beobachtung passt besonders gut zu einer differenzierten Mittelalterperspektive?",
      options: [
        {
          text: "Mittelalterliche Gesellschaft bestand fast nur aus Schlachten und Ritterturnieren.",
          correct: false,
          feedback:
            "Das ist zu eng. Alltag, Hygiene, Küche, Rollenbilder, Glaube und Arbeit gehören ebenso dazu."
        },
        {
          text: "Mittelalterliche Lebenswelt lässt sich auch über Burgen, Latrinen, Küche und Statussymbole rekonstruieren.",
          correct: true,
          feedback:
            "Richtig. Genau diese Alltagsdimension macht die SRF-Ressource stark."
        },
        {
          text: "Das Mittelalter war für alle Menschen ungefähr gleich.",
          correct: false,
          feedback:
            "Nein. Stände, Geschlecht, Besitz und Ort schufen große Unterschiede."
        }
      ]
    },
    takeaway: [
      "Das Mittelalter ist eine vielschichtige Epoche, kein Etikett.",
      "Alltagsgeschichte ist für Epochenverständnis genauso wichtig wie große Ereignisse.",
      "Herrschaft, Kirche und soziale Ordnung greifen tief ineinander."
    ],
    transfer: {
      id: "m10-transfer",
      question:
        "Wie legitimieren Herrschaft und Stand im Mittelalter einander? Formuliere eine strukturgeschichtliche Antwort.",
      placeholder: "Denke an Religion, Geburt, Statussymbole und soziale Rollen.",
      sampleAnswer:
        "Im Mittelalter legitimieren sich Herrschaft und Stand wechselseitig. Adel und geistliche Eliten begründen ihre Stellung häufig religiös oder über Herkunft. Burgen, Kleidung, Symbole und höfische Rituale machen Rang sichtbar. Gleichzeitig wird die gesellschaftliche Ordnung als gottgewollt oder traditionell dargestellt. So stabilisieren kulturelle Zeichen politische Macht.",
      criteria: [
        { label: "Religion/Legitimation", keywords: ["religion", "gottgewollt", "legitim"] },
        { label: "Geburt/Herkunft", keywords: ["geburt", "herkunft", "adel", "stand"] },
        { label: "sichtbare Statussymbole", keywords: ["symbole", "kleidung", "burgen", "rituale", "rang"] }
      ]
    }
  },
  {
    id: "modul-11",
    number: 12,
    title: "Städte, Handel und Wandel im Mittelalter",
    era: "Hoch- und Spätmittelalter",
    phase: "Kontaktzonen und Quellenkritik",
    guidingQuestion: "Wie hängen Frömmigkeit, Mobilität und Vernetzung zusammen?",
    hook:
      "Der Kinderkreuzzug ist als Thema deshalb so wertvoll, weil er beides zugleich erzwingt: religiöse Deutung und kritische Quellenprüfung.",
    goals: [
      "Kreuzzüge und Pilgerbewegungen als religiös-politische Mobilisierung verstehen",
      "mittelalterliche Chroniken quellenkritisch befragen",
      "Städte und Märkte als Kontaktzonen deuten"
    ],
    input: [
      "Das Thema 'Kinderkreuzzug' wirkt auf den ersten Blick wie eine spektakuläre Erzählung. Gerade deshalb ist es historisch so interessant. Historikerinnen und Historiker dürfen eine solche Geschichte nicht einfach nacherzählen. Sie müssen fragen, welche Quellen es gibt, wann sie entstanden sind, wer sie geschrieben hat und wie zuverlässig ihre Aussagen sind.",
      "Der Film über den Kinderkreuzzug nennt zwei Jungen als Ausgangspunkt der Überlieferung: Nikolaus aus Köln und Stephan aus dem französischen Cloyes-les-Trois-Rivières. Beiden soll im Frühjahr 1212 eine göttliche Botschaft erschienen sein. Daraufhin sollen Tausende Kinder und Jugendliche unbewaffnet und ohne Vorbereitung eine 3000 Kilometer lange Reise nach Palästina begonnen haben, um Jerusalem zu befreien. Genau diese dramatische Geschichte zwingt zur Prüfung der Quellen.",
      "Chroniken sind dabei nicht automatisch wahr, nur weil sie alt sind. Man muss fragen, wann sie geschrieben wurden, welche Absicht dahinterstand und ob spätere Ausschmückungen aus einer Predigtbewegung erst eine Legende gemacht haben. Der Kinderkreuzzug ist deshalb ein Musterfall dafür, wie aus religiöser Bewegung, Erzählung und späterer Überlieferung historische Unsicherheit entsteht.",
      "Gleichzeitig geht es nicht nur um Texte, sondern auch um Räume. Wer nach Jerusalem aufbrechen will, bewegt sich durch Städte, Märkte, Herbergen, Flusstäler, Alpenrouten oder Hafenorte. Pilgerwege, Handelswege und Predigtbewegungen verlaufen oft durch dieselben Räume. Die mittelalterliche Welt war also keineswegs nur die abgeschlossene Burg.",
      "Das hochmittelalterliche Dorf verändert sich in derselben Zeit stark. Landesausbau, Rodungen, Binnenkolonisation und die Dreifelderwirtschaft steigern Erträge und Bevölkerungsdichte. Dörfer werden dadurch nicht nur Wohnorte, sondern organisierte Produktionsräume mit Dorfrecht, Abgaben und gemeinsamer Nutzung von Feldern und Weiden.",
      "Auch die Stadt kehrt als eigener historischer Raum machtvoll zurück. Stadtmauern, Märkte, Rat, Zünfte, Handwerk und Stadtrecht schaffen verdichtete Lebensformen, die sich deutlich vom Dorf unterscheiden. Städte sind Knotenpunkte von Handel, Schrift, Ausbildung und Konflikt. Wer Mittelaltergeschichte auf Burgen reduziert, übersieht also gerade die Räume, in denen Bewegung, Arbeit und Austausch besonders dicht sind.",
      "Im Spätmittelalter verschärfen Klimaverschlechterung, Hungersnöte und die Pest die Lage. Wüstungen, Bevölkerungsverluste, Arbeitskräftemangel, Quarantäne, Pogrome und neue soziale Spannungen verändern Dorf und Stadt zugleich. Das Mittelalter endet deshalb nicht in Stillstand, sondern in tiefen Krisen und Umbrüchen, die Wirtschaft, Religion und politische Ordnung neu herausfordern."
    ],
    sources: [
      {
        title: "SRF: Der Kreuzzug der Kinder",
        meta: "Quellenkritik",
        extracted:
          "Die Dokumentation fragt explizit, was Mythos und was historischer Fakt ist, und legt den Fokus auf mittelalterliche Chroniken sowie deren Zuverlässigkeit.",
        didacticUse:
          "Die Ressource dient als Musterfall für historisches Fragen: Welche Quellen gibt es? Wann wurden sie geschrieben? Welche Interessen prägen sie?"
      },
      {
        title: "Materialdossier: Hochmittelalter – Dorf",
        meta: "Landesausbau, Dreifelderwirtschaft und Dorfrecht",
        extracted:
          "Das Dossier erklärt Rodungen, Binnenkolonisation, Vergetreidung, Dreifelderwirtschaft und dörfliche Selbstorganisation als Kern des hochmittelalterlichen Ausbaus."
      },
      {
        title: "Materialdossier: Hochmittelalter – Stadt",
        meta: "Stadtrecht, Märkte, Rat und Zünfte",
        extracted:
          "Das Dossier bündelt Stadtgründungen, Autonomiebewegungen, Stadtrecht, Rat, Zünfte, Bildung und Handwerk als zentrale Entwicklungen urbaner Räume."
      },
      {
        title: "Materialdossier: Spätmittelalter",
        meta: "Pest, Hunger, Wüstungen und soziale Spannungen",
        extracted:
          "Das Dossier erklärt Klimaverschlechterung, Pest, Quarantäne, Geissler, Pogrome und den tiefen Wandel von Dorf- und Stadtgesellschaften im Spätmittelalter."
      },
      {
        title: "Harari-PDF",
        meta: "Samarkand",
        extracted:
          "Harari schildert Samarkand als mittelalterliche Kreuzung von Handelswegen und Kulturen.",
        didacticUse:
          "So lässt sich Kreuzzugsgeschichte aus der Enge reiner Kampfgeschichte lösen und in eine Geschichte von Mobilität und Vernetzung einordnen."
      },
      {
        title: "YouTube: Stadt im Mittelalter",
        meta: "Stadtleben und Märkte",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Filmgrundlage zu mittelalterlicher Stadt, Markt, Handwerk und verdichtetem Zusammenleben.",
        didacticUse:
          "Die Ressource soll das Modul stärker auf urbane Räume und nicht nur auf Quellenkritik stützen."
      }
    ],
    sourcePrompt:
      "Verbinde Quellenkritik mit Raumgeschichte: Was verraten uns Chroniken, Märkte, Wege und religiöse Bewegungen über das mittelalterliche Europa und seine Verflechtungen?",
    task: {
      id: "m11-task",
      question:
        "Warum eignet sich der 'Kreuzzug der Kinder' besonders gut, um historische Quellenkritik zu üben?",
      placeholder: "Erkläre, weshalb Historiker hier nicht einfach nur erzählen, sondern prüfen müssen.",
      sampleAnswer:
        "Der 'Kreuzzug der Kinder' eignet sich besonders gut für Quellenkritik, weil die Geschichte spektakulär klingt und stark von Chroniken abhängt. Historiker müssen deshalb fragen, welche Quellen existieren, wann sie entstanden, was sie belegen und wo sie übertreiben oder deuten. Gerade bei religiös aufgeladenen Ereignissen ist die Unterscheidung zwischen Mythos und Tatsachen zentral.",
      criteria: [
        { label: "Chroniken/Quellen genannt", keywords: ["chroniken", "quellen", "überlieferung"] },
        { label: "Prüffragen genannt", keywords: ["wann", "zuverlässig", "prüfen", "belegen", "übertreiben"] },
        { label: "Mythos und Fakt", keywords: ["mythos", "fakt", "tatsachen", "rekonstruktion"] }
      ]
    },
    deepening:
      "Dieses Modul ist auch methodisch ein Höhepunkt. Die Lernenden sollen erleben, dass Geschichte nicht fertig vorliegt, sondern aus Spuren, Texten und Wahrscheinlichkeiten rekonstruiert wird. Dadurch wird das Mittelalter nicht ferner, sondern analytisch zugänglicher.",
    selftest: {
      id: "m11-selftest",
      question: "Welche Frage ist bei einer quellenkritischen Untersuchung am wichtigsten?",
      options: [
        {
          text: "Ob die Geschichte spannend genug für eine Verfilmung ist.",
          correct: false,
          feedback:
            "Das mag medienpraktisch interessant sein, ist aber keine historische Kernfrage."
        },
        {
          text: "Welche Quellen existieren, wann sie entstanden und wie zuverlässig sie sind.",
          correct: true,
          feedback:
            "Richtig. Genau das ist der Kern historischer Quellenkritik."
        },
        {
          text: "Ob eine mittelalterliche Chronik automatisch wahr ist, weil sie alt ist.",
          correct: false,
          feedback:
            "Alter allein garantiert keine Zuverlässigkeit. Gerade deswegen braucht es Kritik."
        }
      ]
    },
    takeaway: [
      "Mittelalterliche Welt ist mobil, vernetzt und religiös aufgeladen.",
      "Quellenkritik ist kein Zusatz, sondern Teil historischen Verstehens.",
      "Mythos und Überlieferung müssen historisch auseinandergehalten werden."
    ],
    transfer: {
      id: "m11-transfer",
      question:
        "Wie hängen Handel, Frömmigkeit und Mobilität im Hochmittelalter zusammen?",
      placeholder: "Denke an Wege, Märkte, Pilger, Begegnungen und Austausch.",
      sampleAnswer:
        "Im Hochmittelalter hängen Handel, Frömmigkeit und Mobilität eng zusammen. Pilgerwege, Märkte und Herrschaftszentren erzeugen Bewegung von Menschen, Waren und Nachrichten. Religiöse Orte können wirtschaftliche Knotenpunkte werden, während Handelsräume auch Ideen und Erzählungen transportieren. Mobilität ist daher nicht nur wirtschaftlich, sondern kulturell und religiös bedeutsam.",
      criteria: [
        { label: "Mobilität/Wege", keywords: ["wege", "mobilität", "reisen", "pilger"] },
        { label: "Märkte/Handel", keywords: ["märkte", "handel", "waren"] },
        { label: "kultureller Austausch", keywords: ["ideen", "erzählungen", "begegnungen", "austausch"] }
      ]
    }
  },
  {
    id: "modul-12",
    number: 13,
    title: "Abschlussmodul: Was verändert Menschenwelt langfristig?",
    era: "Bilanz bis 1500 mit Ausblick",
    phase: "Langzeitlinien und Perspektivwechsel",
    guidingQuestion: "Welche Entwicklungen tragen von der Frühzeit bis an die Schwelle der Neuzeit?",
    hook:
      "Der Kurs endet nicht mit einer bloßen Wiederholung, sondern mit einer Bilanzfrage: Welche Muster kehren immer wieder, und welche Vorstellungen vom Vergangenen müssen korrigiert werden?",
    goals: [
      "Langzeitlinien von Kooperation, Sesshaftigkeit, Herrschaft und Vernetzung bündeln",
      "1491 als Perspektivkorrektur vor dem Einschnitt 1492 verstehen",
      "frühe Geschichte mit langfristigen Umwelt- und Weltfolgen verbinden"
    ],
    input: [
      "Das Schlussmodul zieht eine historische Bilanz. Der Film 1491 macht dabei den wichtigsten Perspektivwechsel sichtbar: Lange vor Kolumbus lebten auf dem amerikanischen Doppelkontinent zahlreiche indigene Völker mit vielfältigen Sprachen, Kulturen und angepassten Lebensweisen. Ihre Geschichte beginnt nicht 1492, sondern Jahrtausende früher. Schon die ersten Menschen Amerikas entwickelten Überlebensstrategien, Unterkünfte und Wissensformen für sehr unterschiedliche Landschaften.",
      "1492 ist deshalb für Amerika ein Einschnitt, aber nicht der Beginn von Geschichte. Wer nur Europa, Rom und Mittelalter als Zentrum der Vormoderne betrachtet, übersieht andere historische Entwicklungen. Der Blick auf 1491 korrigiert dieses Problem und öffnet die Einheit für mehrere Weltregionen.",
      "Danach tritt noch einmal die Langzeitlinie des Anthropozäns hervor. Feuer, Landwirtschaft, Metallbau, Straßen, Städte, Fernhandel und fossile Brennstoffe gehören in eine Geschichte wachsender Eingriffe in Umwelt und Landschaft. Was in den Modulen als Pfahlbau, Straßenbau, Nilverwaltung oder Münzumlauf erscheint, gehört deshalb immer auch in eine Geschichte von Boden, Wasser, Luft und Ressourcen.",
      "Am Ende verbinden sich die großen Linien: Sprache und Symbole ermöglichen Kooperation, mobile Lebensweisen sichern Anpassung an Räume, Sesshaftigkeit schafft Überschüsse und Ungleichheiten, Schrift und Verwaltung stabilisieren Staaten, Geld und Religion verbinden große Räume, und verschiedene Weltregionen entwickeln eigene historische Ordnungen. Geschichte bis 1500 wird so als zusammenhängende Entwicklung menschlicher Weltgestaltung sichtbar.",
      "Genau an dieser Bilanz trennen sich Harari und Graeber/Wengrow am stärksten. Harari ordnet die lange Geschichte über große Revolutionen und immer größere Netze von Kooperation, Herrschaft und Vereinheitlichung. Graeber und Wengrow setzen dagegen stärker auf Verzweigungen, bewusste Entscheidungen, abgebrochene Wege und politische Experimente. Die Vormoderne zeigt aus ihrer Sicht nicht nur, wie größere Ordnungen entstehen, sondern auch, dass Menschen immer wieder andere Ordnungen ausprobiert, verändert oder verworfen haben."
    ],
    sources: [
      {
        title: "SRF: 1491",
        meta: "Dekoloniale Bilanz",
        extracted:
          "Amerikas Geschichte beginnt lange vor 1492; indigene Gesellschaften verfügen über Sprachen, Landwirtschaft, politische Strukturen, Kunst und Spiritualität.",
        didacticUse:
          "Die Ressource dient als Korrektiv gegen eurozentrische Abschlusserzählungen."
      },
      {
        title: "SRF: Anthropozän",
        meta: "Langzeitwirkung",
        extracted:
          "Menschliche Innovationen von Jungsteinzeit bis Industrie verändern Boden, Luft und Wasser so tiefgreifend, dass vom 'Zeitalter des Menschen' gesprochen wird.",
        didacticUse:
          "Im Modul wird daraus eine Reflexionsfrage: Wie weit reichen die Folgen historischer Entscheidungen?"
      },
      {
        title: "Harari-PDF",
        meta: "Großstruktur",
        extracted:
          "Hararis Modell verbindet kognitive Revolution, Landwirtschaft und Vereinigungsprozesse zu einer Langzeitgeschichte menschlicher Weltgestaltung.",
        didacticUse:
          "Es liefert den begrifflichen Rahmen für die Bilanz aller Module."
      },
      {
        title: "Offene Wege statt Einbahnstraße",
        extracted:
          "Graeber und Wengrow lesen die Tiefengeschichte nicht als feste Abfolge von Stufen, sondern als Geschichte sozialer Wahlmöglichkeiten. Menschen wechseln Ordnungen, verwerfen Modelle und probieren neue Formen aus.",
        didacticUse:
          "Die Gegenposition zwingt dazu, die großen Entwicklungslinien nicht als Naturgesetz zu lesen, sondern als umkämpfte und veränderbare Geschichte."
      }
    ],
    sourcePrompt:
      "Formuliere aus den Beispielen des Kurses eine eigene Langzeitthese: Was verbinden Pfahlbauten, Münzfunde, Römerstraßen, Pilgerwege und 1491, und wo verlaufen die stärksten Deutungsunterschiede zwischen einer linearen und einer offenen Geschichte?",
    task: {
      id: "m12-task",
      question:
        "Formuliere drei Langzeitlinien von der Frühgeschichte bis um 1500 und nenne einen Punkt, an dem Harari und Graeber/Wengrow diese Entwicklung unterschiedlich deuten würden.",
      placeholder: "Zum Beispiel Kooperation, Sesshaftigkeit, Schrift, Geld, Religion oder Globalperspektive.",
      sampleAnswer:
        "Eine erste Langzeitlinie ist die wachsende Fähigkeit zur Kooperation durch Sprache, Symbole und gemeinsame Ordnungen. Eine zweite Linie ist der Übergang von mobilen Lebensweisen zu Sesshaftigkeit, Überschuss, Verwaltung und Staatlichkeit. Eine dritte Linie ist die Vernetzung großer Räume durch Handel, Geld, Religion und Imperien. Ein deutlicher Deutungsunterschied liegt bei Landwirtschaft und frühen Städten: Harari beschreibt hier einen starken Übergang zu größeren Ordnungen, während Graeber und Wengrow stärker betonen, dass Menschen verschiedene Wege offenhielten und nicht automatisch in Hierarchie endeten.",
      criteria: [
        { label: "Kooperation/Sprache", keywords: ["kooperation", "sprache", "symbole", "ordnung"] },
        { label: "Sesshaftigkeit/Staat", keywords: ["sesshaft", "überschuss", "verwaltung", "staat"] },
        { label: "Vernetzung", keywords: ["handel", "geld", "religion", "imperien", "räume"] },
        { label: "Deutungsunterschied benannt", keywords: ["harari", "graeber", "wengrow", "anders", "nicht automatisch", "offen"] }
      ]
    },
    deepening:
      "Das Abschlussmodul sollte ausdrücklich zwischen Chronologie und Deutung unterscheiden. Chronologisch endet die Einheit um 1500. Historisches Denken endet dort aber nicht, weil wir aus der Vormoderne heraus Fragen an Gegenwart und Zukunft stellen. Genau diese reflektierte Offenheit ist fachlich wertvoller als ein bloßer Stoffabschluss.",
    selftest: {
      id: "m12-selftest",
      question: "Welche Aussage ist für das Abschlussmodul besonders wichtig?",
      options: [
        {
          text: "Amerikas Geschichte beginnt erst mit Kolumbus, weil erst dann schriftliche Geschichte vorliegt.",
          correct: false,
          feedback:
            "Nein. Gerade die Ressource '1491' widerspricht dieser eurozentrischen Verkürzung ausdrücklich."
        },
        {
          text: "1492 ist für Amerika ein Einschnitt, aber nicht der Beginn aller Geschichte dort.",
          correct: true,
          feedback:
            "Richtig. Genau diese Perspektivkorrektur gehört zur historischen Abschlussbilanz."
        },
        {
          text: "Frühe Innovationen wie Landwirtschaft oder Metallverarbeitung haben keine langfristigen Folgen über 1500 hinaus.",
          correct: false,
          feedback:
            "Doch. Gerade der Anthropozän-Blick macht ihre langfristige Reichweite sichtbar."
        }
      ]
    },
    takeaway: [
      "Geschichte bis 1500 ist eine Geschichte wachsender kultureller Verdichtung.",
      "Eurozentrische Anfangs- und Endpunkte müssen kritisch geprüft werden.",
      "Historische Entwicklungen reichen oft weit über ihre eigene Epoche hinaus."
    ],
    transfer: {
      id: "m12-transfer",
      question:
        "Warum endet der Kurs zwar um 1500, aber nicht das historische Denken? Formuliere eine reflektierte Antwort.",
      placeholder: "Verbinde Zeitgrenze, Perspektive und Langzeitfolgen.",
      sampleAnswer:
        "Der Kurs endet um 1500 als gesetzte Zeitgrenze, nicht weil dort Geschichte aufhört. Viele Entwicklungen reichen weiter: Kooperation, Staatenbildung, religiöse Netzwerke, Handelsräume und Mensch-Umwelt-Beziehungen prägen spätere Jahrhunderte mit. Historisches Denken fragt deshalb nach Voraussetzungen, Folgen und Perspektiven über Epochengrenzen hinweg.",
      criteria: [
        { label: "gesetzte Zeitgrenze", keywords: ["zeitgrenze", "gesetzt", "kurs endet"] },
        { label: "Langzeitfolgen", keywords: ["folgen", "reichen weiter", "spätere jahrhunderte"] },
        { label: "reflektiertes Geschichtsdenken", keywords: ["voraussetzungen", "perspektiven", "epochengrenzen", "historisches denken"] }
      ]
    }
  }
];

const moduleSupports = {
  "modul-1": {
    overview:
      "Naturgeschichte beschreibt Erde, Klima und Lebewesen. Geschichte im engeren Sinn beginnt dort, wo Menschen mit Sprache, Regeln, Werkzeugen und gemeinsamen Vorstellungen ihre Umwelt bewusst ordnen und verändern.",
    entryNote:
      "Du brauchst für dieses Modul kein Vorwissen. Ein Name wie Harari ist hier nur der Name eines Historikers, dessen Buch uns beim Ordnen des Stoffs hilft.",
    authorIntro:
      "Yuval Noah Harari ist ein Historiker und Autor eines bekannten Überblicksbuchs zur Menschheitsgeschichte. Du musst ihn nicht kennen. Für diesen Kurs ist nur wichtig: Er hilft dabei, sehr lange Entwicklungen in wenige große Veränderungen zu gliedern, damit der Stoff verständlicher wird.",
    terms: [
      { term: "Naturgeschichte", description: "Entwicklung von Erde, Klima, Gesteinen und Lebewesen ohne Blick auf menschliche Kultur." },
      { term: "Evolution", description: "Langsame biologische Veränderung von Lebewesen, also auch der verschiedenen Menschenarten." },
      { term: "Kultur", description: "Alles, was Menschen gemeinsam hervorbringen: Sprache, Regeln, Rituale, Erzählungen und Werkzeuge." },
      { term: "große Veränderung", description: "Ein Einschnitt, der vieles andere nach sich zieht, zum Beispiel neue Lebensweisen, neue Ordnungen oder neue Machtformen." }
    ],
    storyline: [
      "Zuerst trennst du Natur, Entwicklung des Menschen und menschliche Geschichte.",
      "Dann lernst du, warum Sprache, Regeln und Symbole für Geschichte wichtig sind.",
      "Am Ende verstehst du, warum der Kurs nach großen Veränderungen statt nur nach Jahreszahlen aufgebaut ist."
    ],
    connection:
      "Diese Unterscheidung trägt die ganze Einheit. Erst dadurch wird verständlich, warum in den nächsten Modulen Sprache, Sesshaftigkeit, Schrift, Geld und Religion zu Schlüsselthemen werden."
  },
  "modul-2": {
    overview:
      "Über lange Zeit lebten mehrere Menschenarten gleichzeitig. Homo sapiens war zunächst weder allein noch automatisch überlegen; entscheidend wurden Anpassung, Lernen, Kooperation und Bewegung in neue Räume.",
    entryNote:
      "Der Ausdruck Homo sapiens meint die heutige Menschenart. In diesem Modul lernst du den Begriff erst kennen; du musst ihn nicht schon vorher beherrschen.",
    terms: [
      { term: "Homo sapiens", description: "Die Menschenart, zu der wir heute gehören." },
      { term: "Migration", description: "Wanderung von Gruppen in neue Räume, oft über viele Generationen hinweg." },
      { term: "Anpassung", description: "Veränderung von Verhalten, Werkzeugen und Lebensweise an Klima und Landschaft." }
    ],
    storyline: [
      "Du lernst verschiedene Menschenarten kennen.",
      "Du verstehst, warum große Gehirne und lange Kindheit Chancen und Belastungen zugleich waren.",
      "Du siehst, dass die Ausbreitung des Menschen eine globale Migrationsgeschichte ist."
    ],
    connection:
      "Ohne diese Grundlagen wirkt die kognitive Revolution später wie ein Wunder. Mit ihnen wird klar: Biologische Voraussetzungen und soziales Lernen greifen ineinander."
  },
  "modul-3": {
    overview:
      "Menschliche Sprache kann mehr als warnen oder rufen. Sie ermöglicht Aussagen über Abwesendes, Zukünftiges und Vorgestelltes und schafft dadurch Regeln, Zugehörigkeit, Mythen und größere Zusammenarbeit.",
    entryNote:
      "Der Ausdruck kognitive Revolution klingt schwierig. Gemeint ist hier eine große Veränderung im Denken, Sprechen und Vorstellen der Menschen.",
    terms: [
      { term: "Symbol", description: "Ein Zeichen, das für etwas steht, etwa ein Bild, ein Wort oder ein Ritual." },
      { term: "Mythos", description: "Eine erzählte Vorstellung, die einer Gruppe Sinn, Regeln oder Zugehörigkeit gibt." },
      { term: "Kooperation", description: "Zusammenarbeit mehrerer Menschen an einem gemeinsamen Ziel." }
    ],
    storyline: [
      "Zuerst unterscheidest du Tierkommunikation und menschliche Sprache.",
      "Dann erkennst du, dass gemeinsame Vorstellungen Regeln und Zugehörigkeit schaffen.",
      "Schließlich verstehst du, warum spätere Staaten, Religionen und Geldsysteme darauf aufbauen."
    ],
    connection:
      "Dieses Modul ist der Schlüssel für fast alles Spätere: Große Gruppen funktionieren nur, weil Menschen an gemeinsame Ordnungen glauben und darüber sprechen können."
  },
  "modul-4": {
    overview:
      "Vor der Sesshaftigkeit lebten Menschen über sehr lange Zeit in mobilen Gruppen. Diese Lebensweise beruhte auf präzisem Wissen über Wege, Tiere, Pflanzen, Jahreszeiten, Unterkünfte und Gefahren.",
    entryNote:
      "Jäger und Sammler sind Gruppen, die ohne feste Felder und große Vorratsspeicher leben. Das ist keine Vorstufe minderer Art, sondern eine eigene Lebensform.",
    terms: [
      { term: "mobil", description: "Nicht dauerhaft an einem Ort lebend, sondern wandernd oder saisonal unterwegs." },
      { term: "mündliche Überlieferung", description: "Weitergabe von Wissen durch Erzählen, Vorzeigen und gemeinsames Erinnern." },
      { term: "Spiritualität", description: "Vorstellungen über Sinn, Geister, Ahnen oder Kräfte der Welt." }
    ],
    storyline: [
      "Du untersuchst, wie mobile Gruppen wohnen und sich ernähren.",
      "Du erkennst, dass diese Lebensform sehr gut an Räume angepasst war.",
      "Du verstehst, warum Wissen, Erinnerung und Rituale überlebenswichtig waren."
    ],
    connection:
      "Der Vergleich mit sesshaften Dörfern wird erst sinnvoll, wenn du die Leistungsfähigkeit mobiler Gesellschaften wirklich ernst nimmst."
  },
  "modul-5": {
    overview:
      "Mit Landwirtschaft entstehen feste Häuser, Vorräte und Dörfer. Zugleich wachsen Arbeitslast, Abhängigkeit von Ernten, Bedeutung von Besitz und die Gefahr sozialer Ungleichheit.",
    entryNote:
      "Der Ausdruck landwirtschaftliche Revolution meint hier keinen plötzlichen Aufstand, sondern eine tiefgreifende Veränderung hin zu Ackerbau, Viehzucht und festen Siedlungen.",
    terms: [
      { term: "Sesshaftigkeit", description: "Dauerhaftes Leben an einem festen Ort." },
      { term: "Überschuss", description: "Mehr erzeugte Nahrung oder Güter, als sofort verbraucht werden." },
      { term: "Arbeitsteilung", description: "Nicht mehr alle tun dasselbe, sondern einzelne übernehmen besondere Aufgaben." }
    ],
    storyline: [
      "Du klärst, warum Menschen überhaupt sesshaft wurden.",
      "Du siehst, welche Vorteile Vorräte und Häuser brachten.",
      "Du erkennst die neuen Risiken: mehr Arbeit, Abhängigkeit und Ungleichheit."
    ],
    connection:
      "Aus Dörfern mit Vorräten entstehen später Verwaltung, Abgaben, soziale Unterschiede und schließlich Staaten."
  },
  "modul-6": {
    overview:
      "Frühe Staaten entstehen dort, wo Vorräte gezählt, Abgaben organisiert, Arbeit gelenkt und Herrschaft begründet werden. Schrift, Verwaltung, Kalender und religiöse Legitimation werden dabei zu Machtmitteln.",
    entryNote:
      "Mit Hochkultur ist hier eine frühe komplexe Gesellschaft gemeint, also eine Gesellschaft mit Städten, Schrift, Arbeitsteilung und Herrschaft.",
    terms: [
      { term: "Hochkultur", description: "Frühe komplexe Gesellschaft mit Städten, Schrift, Arbeitsteilung und Herrschaft." },
      { term: "Verwaltung", description: "Organisation von Abgaben, Arbeit, Vorräten und Zuständigkeiten." },
      { term: "Legitimation", description: "Begründung dafür, warum Herrschaft als gültig gelten soll." },
      { term: "Pharao", description: "König Ägyptens, der politische und religiöse Herrschaft in einer Person bündelt." },
      { term: "Maat", description: "Ägyptische Vorstellung von göttlicher Ordnung, Gerechtigkeit und Gleichgewicht." }
    ],
    storyline: [
      "Du gehst vom Vorrat zum Speicher und von dort zur Organisation.",
      "Dann lernst du Schrift als Werkzeug der Macht kennen.",
      "Am Beispiel Ägyptens siehst du, wie Nil, Pharao, Maat, Verwaltung und Religion zusammenwirken."
    ],
    connection:
      "Wer frühe Staaten verstehen will, muss nicht nur Könige kennen, sondern auch Schreiber, Speicher, Kalender, Tempel, Abgaben und religiöse Ordnungen."
  },
  "modul-7-kelten": {
    overview:
      "Die keltische Schweiz vor Rom ist keine leere Vorstufe, sondern ein Raum von oppida, Metallhandwerk, Münzgeld, Religion und Fernkontakten. Die Helvetier gehören in diese Welt und geraten 58 v. Chr. mit Caesars Eingriff an einen entscheidenden Bruchpunkt.",
    entryNote:
      "Der Name Kelten meint hier keinen einzelnen Staat, sondern viele Gruppen mit ähnlicher materieller Kultur. Die Helvetier sind eine davon und leben im Gebiet der heutigen Schweiz.",
    terms: [
      { term: "Hallstatt", description: "Frühe Phase der keltischen Eisenzeit ab etwa 800 v. Chr." },
      { term: "La Tène", description: "Spätere Phase keltischer Kultur, benannt nach dem Fundort am Neuenburgersee." },
      { term: "Oppidum", description: "Größeres befestigtes Zentrum der späten keltischen Eisenzeit." },
      { term: "Helvetier", description: "Keltische Bevölkerungsgruppe des schweizerischen Mittellands." },
      { term: "Bibracte", description: "Ort der Niederlage der Helvetier gegen Caesar im Jahr 58 v. Chr." }
    ],
    storyline: [
      "Du klärst zuerst, warum Kelten keine einzelne Nation, sondern ein größerer Kulturraum sind.",
      "Dann ordnest du die Helvetier mit oppida, Münzen, Handwerk und Religion in die keltische Schweiz ein.",
      "Schließlich prüfst du Caesars Bericht, die Wanderung von 58 v. Chr. und den Bruch durch römische Eingriffe."
    ],
    connection:
      "Dieses Modul schlägt die Brücke zwischen frühen Hochkulturen und der römischen Welt: Erst an den Helvetiern wird sichtbar, was Rom in bereits bestehende komplexe Gesellschaften hinein verändert."
  },
  "modul-7": {
    overview:
      "Die antike Politik entwickelt unterschiedliche Ordnungsformen: In Athen entsteht eine direkte Bürgerdemokratie, in Rom eine Republik mit Senat, Magistraten und Volksversammlungen, und aus republikanischer Expansion wächst später ein Imperium aus Straßen, Städten, Recht und Heer.",
    entryNote:
      "In diesem Modul geht es nicht nur um das römische Reich, sondern um den politischen Wandel der Antike: Polis, Demokratie, Republik und Imperium.",
    terms: [
      { term: "Polis", description: "Griechischer Stadtstaat mit eigener Bürgerschaft, Versammlung und politischer Ordnung." },
      { term: "Attische Demokratie", description: "Direkte Demokratie in Athen mit Volksversammlung, Rat und Losverfahren für Bürger." },
      { term: "Republik", description: "Staatsform ohne König, in der Ämter, Senat und Volksversammlungen die Ordnung tragen." },
      { term: "Imperium", description: "Großreich, das viele Regionen und Bevölkerungsgruppen politisch zusammenfasst." },
      { term: "Infrastruktur", description: "Straßen, Brücken, Häfen, Bauten und andere Grundlagen für Verkehr und Versorgung." },
      { term: "Kulturkontakt", description: "Begegnung verschiedener Gruppen mit Austausch, Anpassung und Konflikt." }
    ],
    storyline: [
      "Du klärst zunächst, wie die attische Demokratie Bürgerbeteiligung organisiert und zugleich viele Menschen ausschließt.",
      "Dann untersuchst du die römische Republik mit Senat, Magistraten und Volksversammlungen als eigenständige politische Ordnung.",
      "Erst danach verfolgst du, wie aus republikanischer Expansion das römische Imperium entsteht und ganze Räume ordnet."
    ],
    connection:
      "Von hier führt der Weg direkt zu Geld, Handel und Vernetzung, denn politische Ordnungen, Bürgerrecht, Republik und Imperium schaffen die Rahmenbedingungen für weite Austauschbeziehungen."
  },
  "modul-8": {
    overview:
      "Geld funktioniert nur, wenn Menschen seinen Wert anerkennen. Münzen verbinden deshalb Handel, Herrschaft, Vertrauen, Verkehrswege und Krisenerfahrungen in einem einzigen Gegenstand.",
    entryNote:
      "In diesem Modul geht es nicht nur um Münzen, sondern um die Grundfrage, warum Menschen einer Währung überhaupt vertrauen.",
    terms: [
      { term: "Währung", description: "Ein geregeltes Geldsystem mit allgemein anerkannten Zahlungsmitteln." },
      { term: "Vertrauen", description: "Erwartung, dass andere dieselbe Ordnung ebenfalls anerkennen." },
      { term: "Sachquelle", description: "Gegenstand aus der Vergangenheit, etwa eine Münze, ein Werkzeug oder ein Kleidungsstück." }
    ],
    storyline: [
      "Du klärst, warum Geld ohne geteilte Akzeptanz nicht funktioniert.",
      "Du liest einen Münzfund als historische Quelle.",
      "Du weitest den Blick auf Fernhandel und Vernetzung über einzelne Reiche hinaus."
    ],
    connection:
      "Geld steht an der Schnittstelle von Politik, Wirtschaft und Kultur. Es zeigt, wie unsichtbare Ordnung ganz konkrete Folgen für den Alltag hat."
  },
  "modul-9": {
    overview:
      "Religion ordnet Zeit, Raum und Verhalten. Rituale, heilige Orte, Verbote, Feste und Texte schaffen Zugehörigkeit und können Herrschaft stützen, Wissen verbreiten und Räume vernetzen.",
    entryNote:
      "Religion wird hier nicht nur als privater Glaube verstanden, sondern auch als Ordnung von Gemeinschaft, Regeln und Weltbildern.",
    terms: [
      { term: "Polytheismus", description: "Glaube an mehrere Götter." },
      { term: "Monotheismus", description: "Glaube an einen einzigen Gott." },
      { term: "Weltbild", description: "Vorstellung davon, wie Welt, Mensch und Ordnung zusammenhängen." }
    ],
    storyline: [
      "Du unterscheidest verschiedene religiöse Grundformen.",
      "Du untersuchst, wie Religion Gemeinschaft und Normen schafft.",
      "Du erkennst, warum Glauben, Wissen und Vernetzung historisch oft zusammengehören."
    ],
    connection:
      "Diese Einsichten brauchst du für das Mittelalter, weil dort Kirche, Herrschaft, Bildung und Alltag eng miteinander verflochten sind."
  },
  "modul-10": {
    overview:
      "Das Mittelalter war eine harte und zugleich hoch organisierte Lebenswelt. Burgen, Kathedralen, Küche, Hygiene, Verteidigung, Rangordnung, Frömmigkeit und Arbeit griffen eng ineinander.",
    entryNote:
      "Auch wenn du schon Bilder aus Filmen, Spielen oder Kinderbüchern kennst, startet dieses Modul noch einmal bei den Grundfragen: Wer lebte wie, und wie sah der Alltag wirklich aus?",
    terms: [
      { term: "Stände", description: "Vorstellung einer gesellschaftlichen Ordnung aus klar abgegrenzten Gruppen." },
      { term: "Kirche", description: "Religiöse Institution mit großem Einfluss auf Alltag, Bildung und Herrschaft." },
      { term: "Alltagsgeschichte", description: "Geschichte des gewöhnlichen Lebens, also Wohnen, Essen, Arbeiten und Zusammenleben." }
    ],
    storyline: [
      "Du prüfst verbreitete Mittelalterklischees.",
      "Du betrachtest Burgen, Dörfer, Kleidung, Hygiene und Verteidigung als Teil wirklicher Lebenswelt.",
      "Du lernst das Mittelalter als widersprüchliche Epoche kennen."
    ],
    connection:
      "Dieses Modul schafft die Basis dafür, Stadtentwicklung, Handel, Frömmigkeit und Krisen im späteren Mittelalter genauer zu verstehen."
  },
  "modul-11": {
    overview:
      "Im Hoch- und Spätmittelalter verdichten sich Märkte, Städte, Pilgerwege und religiöse Bewegungen. Gleichzeitig zeigen Chroniken und Überlieferungen, dass historische Aussagen immer quellenkritisch geprüft werden müssen.",
    entryNote:
      "Quellenkritik bedeutet: Wir prüfen, woher eine Information stammt, wie zuverlässig sie ist und welche Interessen in ihr stecken könnten.",
    terms: [
      { term: "Quelle", description: "Alles, woran sich Vergangenheit untersuchen lässt: Texte, Bilder, Gegenstände oder Gebäude." },
      { term: "Chronik", description: "Schriftliche Aufzeichnung historischer Ereignisse aus einer bestimmten Perspektive." },
      { term: "Quellenkritik", description: "Prüfung, wie zuverlässig, interessengeleitet oder lückenhaft eine Quelle ist." }
    ],
    storyline: [
      "Du arbeitest an einem spektakulären Überlieferungsfall: dem Kinderkreuzzug.",
      "Du unterscheidest zwischen Erzählung, Quelle und historischer Wahrscheinlichkeit.",
      "Du verbindest das mit Städten, Märkten und einer mobilen mittelalterlichen Welt."
    ],
    connection:
      "Damit erreichst du eine zentrale historische Kompetenz: Nicht bloß nacherzählen, sondern prüfen, was wir überhaupt wissen können."
  },
  "modul-12": {
    overview:
      "Geschichte bis 1500 ist weder nur Europa noch eine einfache Fortschrittslinie. Sprachfähigkeit, Sesshaftigkeit, Staatlichkeit, Handel, Religion und unterschiedliche Weltregionen bilden lange Entwicklungslinien mit Folgen weit über 1500 hinaus.",
    entryNote:
      "Ein Perspektivwechsel heißt, dass wir denselben Zeitraum aus einem anderen Blickwinkel betrachten. Genau das tust du hier am Ende noch einmal bewusst.",
    terms: [
      { term: "Perspektivwechsel", description: "Bewusstes Wechseln des Blickwinkels, um ein Thema anders und oft genauer zu verstehen." },
      { term: "Eurozentrismus", description: "Sichtweise, die Europa zum natürlichen Mittelpunkt der Geschichte macht." },
      { term: "Langzeitlinie", description: "Entwicklung, die sich über sehr lange Zeiträume hinweg verfolgen lässt." }
    ],
    storyline: [
      "Du nimmst mit '1491' einen nicht-eurozentrischen Schlussblick ein.",
      "Du verbindest frühe Innovationen mit sehr langen Folgen.",
      "Du formulierst eine eigene Bilanz der Einheit."
    ],
    connection:
      "Das Schlussmodul zeigt, dass historische Orientierung mehr ist als das Lernen einzelner Epochen: Sie verbindet Räume, Zeiten und Deutungen."
  }
};

const quickChecks = {
  "modul-1": {
    id: "m1-quick",
    question: "Warum beginnt dieser Kurs nicht einfach beim Urknall oder beim ersten Steinwerkzeug? Antworte in 2 bis 4 Sätzen und nenne ein Beispiel wie Feuer, Landwirtschaft oder Städtebau.",
    placeholder: "Erkläre die Schwelle zwischen Natur und Geschichte mit einem konkreten Beispiel.",
    sampleAnswer:
      "Der Kurs beginnt nicht einfach beim Urknall, weil der Urknall Naturgeschichte ist. Er beginnt auch nicht automatisch beim ersten Werkzeug, weil biologische Entwicklung noch nicht dasselbe ist wie Geschichte im engeren Sinn. Entscheidend ist die Schwelle, an der Menschen ihre Welt kulturell ordnen, also mit Sprache, Regeln und gemeinsamen Vorstellungen.",
    criteria: [
      { label: "Naturgeschichte abgegrenzt", keywords: ["urknall", "naturgeschichte", "natur"] },
      { label: "bloße Biologie reicht nicht", keywords: ["biologie", "evolution", "werkzeug", "nicht genug"] },
      { label: "Kultur als Schwelle genannt", keywords: ["kultur", "sprache", "regeln", "vorstellungen"] }
    ]
  },
  "modul-2": {
    id: "m2-quick",
    question: "Warum war die lange Hilfsbedürftigkeit menschlicher Kinder historisch wichtig, wenn Menschen in neue Räume wanderten?",
    placeholder: "Nenne den Zusammenhang von Kindheit, Lernen, Kooperation und Anpassung.",
    sampleAnswer:
      "Die lange Hilfsbedürftigkeit menschlicher Kinder zwang Gruppen zu Fürsorge, Lernen und enger Zusammenarbeit. Gerade dadurch konnten Wissen, Sprache und soziale Regeln intensiv weitergegeben werden.",
    criteria: [
      { label: "lange Kindheit erwähnt", keywords: ["kindheit", "kinder", "hilfsbedurftig"] },
      { label: "Lernen oder Erziehung", keywords: ["lernen", "erziehung", "weitergabe"] },
      { label: "Kooperation oder Bindung", keywords: ["kooperation", "bindung", "zusammenarbeit", "fursorge"] }
    ]
  },
  "modul-3": {
    id: "m3-quick",
    question: "Warum kann ein Mythos historisch wirksam sein, obwohl man ihn nicht anfassen kann? Denke auch an Zeichen wie Felsbilder oder Totempfähle.",
    placeholder: "Verbinde Mythos, Zeichen, Zugehörigkeit und gemeinsames Handeln.",
    sampleAnswer:
      "Ein Mythos ist historisch wirksam, wenn viele Menschen gemeinsam an ihn glauben. Dann kann er Regeln stützen, Zugehörigkeit herstellen und gemeinsames Handeln ermöglichen.",
    criteria: [
      { label: "gemeinsamer Glaube", keywords: ["glauben", "gemeinsam"] },
      { label: "Regeln oder Ordnung", keywords: ["regeln", "ordnung", "gesetz"] },
      { label: "Handeln oder Gemeinschaft", keywords: ["handeln", "gemeinschaft", "kooperation"] }
    ]
  },
  "modul-4": {
    id: "m4-quick",
    question: "Warum brauchten mobile Gruppen besonders viel Wissen über ihre Umwelt? Nenne mindestens zwei Bereiche wie Wege, Tiere, Unterkünfte oder Jahreszeiten.",
    placeholder: "Nenne konkrete Bereiche dieses Wissens.",
    sampleAnswer:
      "Mobile Gruppen brauchten viel Umweltwissen, weil sie Wege, Jahreszeiten, Tiere, essbare Pflanzen und Gefahren kennen mussten. Ohne dieses Wissen konnten sie nicht sicher überleben.",
    criteria: [
      { label: "Umweltwissen genannt", keywords: ["umwelt", "landschaft", "natur"] },
      { label: "konkrete Wissensbereiche", keywords: ["wege", "jahreszeiten", "tiere", "pflanzen", "gefahren"] },
      { label: "Überlebensfunktion", keywords: ["uberleben", "sicher", "orientierung"] }
    ]
  },
  "modul-5": {
    id: "m5-quick",
    question: "Nenne einen Gewinn und einen Preis der Sesshaftigkeit. Denke an Dinge, die man bei den Pfahlbauern konkret sehen kann.",
    placeholder: "Schreibe knapp über Häuser, Vorräte, Arbeit oder Abhängigkeit.",
    sampleAnswer:
      "Ein Gewinn der Sesshaftigkeit ist, dass Menschen Vorräte anlegen und feste Häuser bauen konnten. Ein Preis war die stärkere Abhängigkeit von Ernten und die größere Arbeitsbelastung.",
    criteria: [
      { label: "ein Gewinn", keywords: ["vorrat", "hauser", "sicherheit", "dorf"] },
      { label: "ein Preis", keywords: ["arbeit", "abhangig", "ernte", "risiko", "ungleich"] }
    ]
  },
  "modul-6": {
    id: "m6-quick",
    question: "Warum war Schrift für frühe Staaten ein Machtmittel? Denke an Listen, Abgaben und die Ordnung im Alten Ägypten.",
    placeholder: "Verbinde Schrift mit Verwaltung, Abgaben und Herrschaft.",
    sampleAnswer:
      "Schrift war ein Machtmittel, weil mit ihr Abgaben, Vorräte, Arbeitsleistungen und Besitz festgehalten werden konnten. Wer schreiben und verwalten konnte, gewann Einfluss auf die ganze Ordnung.",
    criteria: [
      { label: "Schrift genannt", keywords: ["schrift", "schreiben"] },
      { label: "Verwaltung oder Listen", keywords: ["verwaltung", "listen", "festhalten", "buchhaltung"] },
      { label: "Machtwirkung", keywords: ["macht", "einfluss", "ordnung", "abgaben"] }
    ]
  },
  "modul-7-kelten": {
    id: "m7k-quick",
    question: "Warum reicht Caesars Bild der Helvetier als Bauernvolk nicht aus? Antworte mit archäologischen Gegenargumenten.",
    placeholder: "Nenne Oppida, Funde, Religion, Metallhandwerk oder Fernkontakte.",
    sampleAnswer:
      "Caesars Bild reicht nicht aus, weil archäologische Funde komplexe keltische Zentren, Metallhandwerk, Münzen, religiöse Orte und Fernkontakte zeigen. Die Helvetier erscheinen dadurch als politisch und wirtschaftlich verdichtete Gesellschaft.",
    criteria: [
      { label: "Caesar als Ausgangsbild", keywords: ["caesar", "bauernvolk", "bäuerlich", "bauern"] },
      { label: "Archäologie als Korrektur", keywords: ["archäolog", "funde", "engehalbinsel", "grabung"] },
      { label: "Komplexität genannt", keywords: ["oppida", "münzen", "metall", "handel", "religion", "vernetzt"] }
    ]
  },
  "modul-7": {
    id: "m7-quick",
    question: "Worin unterscheiden sich attische Demokratie, römische Republik und römisches Imperium in einem ersten Überblick?",
    placeholder: "Schreibe knapp zu Bürgerbeteiligung, Senat und Herrschaft über große Räume.",
    sampleAnswer:
      "Die attische Demokratie organisiert Entscheidungen direkt über Bürger in der Volksversammlung. Die römische Republik verteilt Macht auf Senat, Konsuln und Volksversammlungen. Das römische Imperium ordnet dagegen große Räume mit Heer, Verwaltung, Recht und Infrastruktur.",
    criteria: [
      { label: "attische Demokratie", keywords: ["athen", "volksversammlung", "bürger", "demokratie"] },
      { label: "römische Republik", keywords: ["rom", "republik", "senat", "konsul"] },
      { label: "Imperium", keywords: ["imperium", "große räume", "heer", "verwaltung"] }
    ]
  },
  "modul-8": {
    id: "m8-quick",
    question: "Warum kann Geld auch zwischen Fremden funktionieren? Denke an den Münzschatz von Ueken.",
    placeholder: "Erkläre das mit Vertrauen, Wert und Umlauf.",
    sampleAnswer:
      "Geld funktioniert zwischen Fremden, wenn beide Seiten darauf vertrauen, dass andere es ebenfalls anerkennen. Dieses gemeinsame Vertrauen macht Tausch über persönliche Beziehungen hinaus möglich.",
    criteria: [
      { label: "Fremde oder unbekannte Menschen", keywords: ["fremde", "unbekannt", "nicht kennen"] },
      { label: "Vertrauen", keywords: ["vertrauen", "anerkennen"] },
      { label: "Tausch oder Handel", keywords: ["tausch", "handel", "bezahlen"] }
    ]
  },
  "modul-9": {
    id: "m9-quick",
    question: "Was bedeutet es, Religion als Ordnungssystem zu verstehen? Denke an Rituale, Gemeinschaft und die Vernetzung von Wissen und Handel.",
    placeholder: "Verbinde Regeln, Gemeinschaft, Weltdeutung und Austausch.",
    sampleAnswer:
      "Religion ist ein Ordnungssystem, wenn sie nicht nur glaubt, sondern Verhalten regelt, Gemeinschaft stiftet und die Welt deutet. Sie kann dadurch Alltag und Herrschaft mitprägen.",
    criteria: [
      { label: "Regeln oder Normen", keywords: ["regeln", "normen", "verhalten"] },
      { label: "Gemeinschaft", keywords: ["gemeinschaft", "zugehorigkeit"] },
      { label: "Deutung oder Herrschaft", keywords: ["deutung", "weltbild", "herrschaft"] }
    ]
  },
  "modul-10": {
    id: "m10-quick",
    question: "Warum hilft Alltagsgeschichte dabei, das Mittelalter besser zu verstehen? Nenne Beispiele wie Küche, Hygiene, Kleidung oder Verteidigung.",
    placeholder: "Nenne konkrete Bereiche des täglichen Lebens.",
    sampleAnswer:
      "Alltagsgeschichte hilft, weil sie zeigt, wie Menschen im Mittelalter wirklich wohnten, aßen, arbeiteten und sich schützten. So verschwindet das bloße Klischee vom romantischen oder dunklen Mittelalter.",
    criteria: [
      { label: "Alltag benannt", keywords: ["wohnen", "essen", "arbeiten", "schutz", "hygiene"] },
      { label: "Mittelalterbild korrigiert", keywords: ["klischee", "nicht nur", "dunkel", "romantisch"] }
    ]
  },
  "modul-11": {
    id: "m11-quick",
    question: "Warum reicht es beim Kinderkreuzzug nicht, eine spannende Erzählung einfach zu glauben? Denke an Chroniken und ihre Zuverlässigkeit.",
    placeholder: "Erkläre die Rolle von Quellenkritik und Überlieferung.",
    sampleAnswer:
      "Eine spannende Erzählung reicht nicht, weil Historikerinnen und Historiker prüfen müssen, welche Quellen es gibt, wann sie entstanden sind und wie zuverlässig sie sind. Erst dann lässt sich einschätzen, was wahrscheinlich passiert ist.",
    criteria: [
      { label: "Erzählung reicht nicht", keywords: ["nicht genug", "nicht einfach glauben", "erzahlung"] },
      { label: "Quellenkritik", keywords: ["quelle", "quellenkritik", "prufen"] },
      { label: "Zuverlässigkeit", keywords: ["zuverlassig", "wahrscheinlich", "entstanden"] }
    ]
  },
  "modul-12": {
    id: "m12-quick",
    question: "Warum ist 1492 für Amerika ein Einschnitt, aber nicht der Anfang von Geschichte? Denke an Gesellschaften, Landwirtschaft und politische Ordnung vor Kolumbus.",
    placeholder: "Antworte mit Blick auf die Zeit davor und ihre konkreten Leistungen.",
    sampleAnswer:
      "1492 ist ein Einschnitt, weil sich Begegnung, Gewalt und Herrschaft stark verändern. Aber Amerikas Geschichte beginnt viel früher, denn dort gab es bereits lange zuvor Gesellschaften mit Landwirtschaft, Kunst, Sprachen und politischer Ordnung.",
    criteria: [
      { label: "1492 als Einschnitt", keywords: ["einschnitt", "veranderung", "1492"] },
      { label: "frühere Geschichte Amerikas", keywords: ["fruher", "amerika", "gesellschaften", "indigen"] },
      { label: "konkrete Leistungen genannt", keywords: ["landwirtschaft", "kunst", "sprachen", "ordnung"] }
    ]
  }
};

const contentChecks = {
  "modul-1": {
    title: "Inhaltssicherung Modul 1",
    questions: [
      {
        prompt: "Erkläre den Unterschied zwischen Naturgeschichte und Geschichte im engeren Sinn. Nenne dabei ein Beispiel für einen menschlichen Eingriff wie Feuer, Landwirtschaft oder Städtebau.",
        placeholder: "Formuliere den Unterschied und baue ein Beispiel ein.",
        sampleAnswer:
          "Naturgeschichte beschreibt die Entwicklung von Erde, Klima und Lebewesen. Geschichte im engeren Sinn beginnt dort, wo Menschen ihre Welt kulturell ordnen, also mit Sprache, Regeln, Symbolen und gemeinsamen Erinnerungen. Feuergebrauch oder Landwirtschaft gehören deshalb zur Geschichte, weil Menschen damit ihre Umwelt bewusst verändern.",
        criteria: [
          { label: "Naturgeschichte erklärt", keywords: ["erde", "klima", "lebewesen", "naturgeschichte"] },
          { label: "kulturelle Schwelle genannt", keywords: ["kultur", "sprache", "regeln", "symbole", "erinnerungen"] },
          { label: "menschlicher Eingriff als Beispiel", keywords: ["feuer", "landwirtschaft", "städtebau", "metall", "rodung"] }
        ]
      },
      {
        prompt: "Warum beginnt Geschichte nicht schon mit Urknall, Eiszeiten oder Dinosauriern, sondern erst dort, wo Menschen mit Sprache, Regeln und gemeinsamen Vorstellungen ihre Welt ordnen?",
        placeholder: "Erkläre, was Kultur und bewusste Weltgestaltung daran verändern.",
        sampleAnswer:
          "Die Unterscheidung verändert den Kurs, weil dann nicht bloß Daten oder Ereignisse im Mittelpunkt stehen. Wichtiger werden Sprache, Sesshaftigkeit, Schrift, Herrschaft, Geld und Religion als große Entwicklungslinien menschlicher Geschichte.",
        criteria: [
          { label: "Schwelle zur Geschichte erklärt", keywords: ["sprache", "regeln", "vorstellungen", "kultur", "bewusst"] },
          { label: "große Linien genannt", keywords: ["sprache", "sesshaftigkeit", "schrift", "herrschaft", "geld", "religion"] }
        ]
      },
      {
        prompt: "Erkläre in 4 bis 6 Sätzen, warum Feuer, Landwirtschaft, Metallverarbeitung und Industrie zusammen als lange Geschichte menschlicher Eingriffe in Boden, Wasser, Luft und Lebensräume verstanden werden können.",
        placeholder: "Verbinde technische Entwicklung mit ihren langfristigen Folgen.",
        sampleAnswer:
          "Die Struktur ist für Modul 1 wichtig, weil sie Geschichte sofort als Langzeitprozess zeigt. Zuerst wird deutlich, dass Fortschritt Vorteile bringt, aber auch Schäden erzeugt. Dann stellt die Seite die Frage nach einem neuen Erdzeitalter des Menschen. Am Schluss wird sichtbar, dass Menschen auch auf ihre eigenen Folgen reagieren. So beginnt der Kurs nicht mit Einzelereignissen, sondern mit einer langen Geschichte menschlicher Eingriffe.",
        criteria: [
          { label: "Kosten des Fortschritts", keywords: ["fortschritt", "kosten", "schaden", "folgen"] },
          { label: "neues Erdzeitalter", keywords: ["erdzeitalter", "anthropozan", "geologisch"] },
          { label: "Lösungen", keywords: ["losungen", "gegenmassnahmen", "reagieren", "renaturierung", "schutz"] }
        ]
      }
    ]
  },
  "modul-2": {
    title: "Inhaltssicherung Modul 2",
    questions: [
      {
        prompt: "Warum war Homo sapiens lange kein automatisch überlegenes Wesen?",
        placeholder: "Nenne biologische und historische Gründe.",
        sampleAnswer:
          "Homo sapiens war lange nicht automatisch überlegen, weil mehrere Menschenarten gleichzeitig lebten und frühe Menschen insgesamt nur begrenzten Einfluss auf ihre Umwelt hatten. Große Gehirne kosteten viel Energie und Menschenkinder waren lange hilfsbedürftig.",
        criteria: [
          { label: "mehrere Menschenarten", keywords: ["mehrere", "menschenarten", "gleichzeitig", "neandertaler"] },
          { label: "keine automatische Dominanz", keywords: ["nicht uberlegen", "unauffallig", "begrenzt"] },
          { label: "biologische Belastung", keywords: ["gehirn", "energie", "hilfsbedurftig", "kinder"] }
        ]
      },
      {
        prompt: "Erkläre, warum Migration und Anpassung zentrale Teile der Frühgeschichte sind. Nenne Beispiele wie Unterkünfte, Nahrung oder Wege in neuen Räumen.",
        placeholder: "Arbeite mit Beispielen aus neuen Räumen und Lebensweisen.",
        sampleAnswer:
          "Migration und Anpassung sind zentral, weil Menschen neue Räume nicht nur erreichten, sondern dort auch neue Lebensweisen entwickelten. Behausungen, Nahrung, Werkzeuge und Wege wurden an Klima und Landschaft angepasst.",
        criteria: [
          { label: "Migration genannt", keywords: ["migration", "wandern", "ausbreitung"] },
          { label: "Anpassung beschrieben", keywords: ["anpassung", "klima", "landschaft", "behausungen"] },
          { label: "konkrete Lebensweise", keywords: ["nahrung", "werkzeuge", "wege"] }
        ]
      },
      {
        prompt: "Warum ist 1492 für Amerika ein Einschnitt, aber kein Anfang? Nenne mindestens zwei konkrete Sachinformationen zu Besiedlung, Sprachen, Landwirtschaft oder politischen Ordnungen vor Kolumbus.",
        placeholder: "Nutze Fakten wie Landbrücke, Kanus, Reiche oder viele Sprachen.",
        sampleAnswer:
          "1492 ist ein Einschnitt, aber kein Anfang, weil Menschen Amerika schon vor 18'000 bis 20'000 Jahren erreichten. Einige kamen über die Landbrücke, andere in Kanus. Es gab dort viele Sprachen, Gesellschaften, Landwirtschaft und politische Strukturen lange vor Kolumbus. Die Ressource zeigt also eine Vorgeschichte statt einer leeren Bühne.",
        criteria: [
          { label: "Einschnitt statt Anfang", keywords: ["einschnitt", "kein anfang", "1492"] },
          { label: "frühe Besiedlung", keywords: ["18000", "20000", "landbrucke", "kanus"] },
          { label: "entwickelte Gesellschaften", keywords: ["sprachen", "gesellschaften", "reiche", "landwirtschaft"] }
        ]
      },
      {
        prompt: "Welche zusätzlichen Informationen zu Frühmenschen, Menschenarten, Werkzeugen und Feuer braucht man, um die frühe Menschheitsgeschichte vollständig zu verstehen?",
        placeholder: "Antworte mit Menschenarten, Werkzeugen oder Feuer.",
        sampleAnswer:
          "Der Nutzerfilm ergänzt Frühmenschen, Menschenarten, Werkzeuge und Feuer direkter als 1491. Während 1491 vor allem Migration und spätere Gesellschaften zeigt, klärt dieser Film die biologische und technische Frühphase der Menschheitsgeschichte.",
        criteria: [
          { label: "Menschenarten", keywords: ["menschenarten", "fruhmenschen", "homo erectus", "neandertaler"] },
          { label: "Werkzeuge oder Feuer", keywords: ["werkzeuge", "feuer", "technik"] },
          { label: "Ergänzungsfunktion", keywords: ["erganzt", "fruhphase", "biologisch", "technisch"] }
        ]
      },
      {
        prompt: "Warum ist der Stammbaum der Menschheit eher ein Geflecht als eine Leiter?",
        placeholder: "Erkläre Gleichzeitigkeit, Aussterben und mehrere Linien.",
        sampleAnswer:
          "Der Stammbaum ist eher ein Geflecht, weil mehrere Menschenarten gleichzeitig existierten, sich Entwicklungslinien verzweigten und manche Gruppen wieder ausstarben. Frühgeschichte verläuft also nicht als einfache Aufwärtsbewegung, sondern mit Koexistenz, Brüchen und unterschiedlichen Wegen.",
        criteria: [
          { label: "mehrere Linien", keywords: ["mehrere", "linien", "verzweigt", "geflecht"] },
          { label: "Gleichzeitigkeit", keywords: ["gleichzeitig", "koexistenz", "nebeneinander"] },
          { label: "Aussterben oder Brüche", keywords: ["aussterben", "abbruche", "bruche"] }
        ]
      },
      {
        prompt: "Was zeigt ein Faustkeil über Denken und Technik früher Menschen?",
        placeholder: "Arbeite mit Rohstoffwahl, Planung und Weitergabe von Können.",
        sampleAnswer:
          "Ein Faustkeil zeigt, dass frühe Menschen geeignete Rohstoffe auswählen, eine Form planen und Schlagtechnik beherrschen mussten. Das Werkzeug ist deshalb ein Beleg für vorausschauendes Denken, handwerkliche Übung und die Weitergabe von technischem Wissen.",
        criteria: [
          { label: "Rohstoffwahl", keywords: ["rohstoff", "stein", "material"] },
          { label: "Planung", keywords: ["plan", "planung", "zielbild"] },
          { label: "Wissensweitergabe", keywords: ["weitergabe", "lernen", "technik", "übung"] }
        ]
      }
    ]
  },
  "modul-3": {
    title: "Inhaltssicherung Modul 3",
    questions: [
      {
        prompt: "Was kann menschliche Sprache, was Tierkommunikation meist nicht kann?",
        placeholder: "Erkläre den Unterschied knapp und genau.",
        sampleAnswer:
          "Menschliche Sprache kann auch über Abwesendes, Vergangenes, Zukünftiges und Vorgestelltes sprechen. Tierkommunikation ist oft stärker an unmittelbare Situationen gebunden.",
        criteria: [
          { label: "Abwesendes oder Vorgestelltes", keywords: ["abwesend", "vorgestellt", "zukunftig", "vergangen"] },
          { label: "Tierkommunikation abgegrenzt", keywords: ["tier", "unmittelbar", "situation"] }
        ]
      },
      {
        prompt: "Wie helfen gemeinsame Vorstellungen dabei, große Gruppen zu organisieren? Beziehe auch symbolische Zeichen wie Bilder, Pfähle oder Schriftzeichen mit ein.",
        placeholder: "Denke an Regeln, Zugehörigkeit, Vertrauen und Zeichen.",
        sampleAnswer:
          "Gemeinsame Vorstellungen helfen, weil Menschen dadurch an dieselben Regeln, Götter, Gesetze oder Zugehörigkeiten glauben. Zeichen wie Bilder oder Schrift machen solche Vorstellungen sichtbar und erinnerbar. So können auch viele Fremde zusammenarbeiten, ohne sich alle persönlich zu kennen.",
        criteria: [
          { label: "gemeinsame Vorstellung", keywords: ["gemeinsame", "vorstellungen", "glauben"] },
          { label: "Regeln oder Zugehörigkeit", keywords: ["regeln", "gesetze", "zugehorigkeit", "gotter"] },
          { label: "symbolische Zeichen", keywords: ["bilder", "zeichen", "schrift", "pfahl", "totem"] },
          { label: "Großgruppen", keywords: ["fremde", "große gruppen", "zusammenarbeiten"] }
        ]
      },
      {
        prompt: "Erkläre an Felsbildern, Totempfählen und Mayaschrift, wie Bilder, Monumente und Schrift Erinnerung, Zugehörigkeit und Ordnung sichern.",
        placeholder: "Zeige, wie diese drei Formen Gesellschaft symbolisch ordnen.",
        sampleAnswer:
          "Felsbilder zeigen, dass Menschen Erlebnisse und Weltdeutungen festhalten. Totempfähle erzählen Familien- und Herkunftsgeschichte öffentlich. Mayaschrift beweist, dass komplexe Zeichenwelten Wissen dauerhaft sichern können. Alle drei Beispiele zeigen, dass Gesellschaften sich über Symbole und Erinnerung ordnen.",
        criteria: [
          { label: "Felsbilder", keywords: ["felsbilder", "hohle", "handabdrucke", "bilder"] },
          { label: "Totempfähle", keywords: ["totempfahle", "familie", "herkunft", "holzmonumente"] },
          { label: "Schrift", keywords: ["mayaschrift", "hieroglyphen", "zeichen", "wissen"] }
        ]
      },
      {
        prompt: "Was verraten Höhlenmalereien über Denken, Rituale und Weltdeutung früher Menschen?",
        placeholder: "Erkläre, was frühe Kunst über Denken und Vorstellen verrät.",
        sampleAnswer:
          "Der Film zeigt, dass Höhlenmalereien historische Quellen sind und nicht nur Schmuck. Sie verweisen auf Symbolfähigkeit, mögliche Rituale und eine bildliche Deutung der Welt. Deshalb gehören sie zur Geschichte menschlicher Vorstellungswelten.",
        criteria: [
          { label: "historische Quelle", keywords: ["quelle", "historisch ernst", "nicht nur schmuck"] },
          { label: "Symbol oder Ritual", keywords: ["symbol", "ritual", "weltdeutung"] },
          { label: "Kunst als Teil von Geschichte", keywords: ["kunst", "vorstellungswelten", "geschichte"] }
        ]
      },
      {
        prompt: "Warum sind Handabdrücke, Tierbilder und wiederkehrende Zeichen mehr als Dekoration?",
        placeholder: "Zeige, wie Bilder Erinnerung, Zugehörigkeit oder Deutung tragen.",
        sampleAnswer:
          "Handabdrücke, Tierbilder und Zeichen sind mehr als Dekoration, weil sie Erlebnisse, Gruppenwissen oder Weltdeutungen festhalten können. Sie machen sichtbar, dass Menschen ihre Umwelt nicht nur nutzten, sondern ihr auch Bedeutung gaben.",
        criteria: [
          { label: "nicht nur Dekoration", keywords: ["nicht nur", "dekoration", "mehr als schmuck"] },
          { label: "Erinnerung oder Weltdeutung", keywords: ["erinnerung", "weltdeutung", "bedeutung"] },
          { label: "Zeichenfunktion", keywords: ["zeichen", "bilder", "handabdrucke", "tierbilder"] }
        ]
      }
    ]
  },
  "modul-4": {
    title: "Inhaltssicherung Modul 4",
    questions: [
      {
        prompt: "Vergleiche mobile Jäger-und-Sammler-Gruppen mit sesshaften Dörfern. Nenne mindestens drei Unterschiede und denke auch an Behausungen.",
        placeholder: "Nenne Unterschiede bei Bewegung, Wohnen, Nahrung und Vorräten.",
        sampleAnswer:
          "Mobile Gruppen wanderten stärker, passten sich saisonal an und nutzten flexible Behausungen statt fester Häuser. Sesshafte Dörfer bauten Häuser, legten Vorräte an und waren stärker an Boden und Ernten gebunden.",
        criteria: [
          { label: "Mobilität", keywords: ["mobil", "wandern", "saisonal"] },
          { label: "Sesshaftigkeit", keywords: ["hauser", "felder", "dorfer", "sesshaft"] },
          { label: "Behausungen", keywords: ["behausungen", "unterkunfte", "hütten", "hauser"] },
          { label: "Vorräte oder Ernten", keywords: ["vorrate", "ernte", "speicher"] }
        ]
      },
      {
        prompt: "Warum waren mündliche Weitergabe und Rituale für mobile Gruppen wichtig?",
        placeholder: "Verbinde Wissen, Erinnerung und Gemeinschaft.",
        sampleAnswer:
          "Mündliche Weitergabe und Rituale waren wichtig, weil Wissen über Wege, Tiere, Jahreszeiten und Regeln ohne Schrift erinnert werden musste. Rituale stärkten zudem Zusammenhalt und gemeinsame Deutungen der Welt.",
        criteria: [
          { label: "Wissen ohne Schrift", keywords: ["ohne schrift", "mündlich", "weitergabe"] },
          { label: "praktisches Wissen", keywords: ["wege", "tiere", "jahreszeiten", "regeln"] },
          { label: "Gemeinschaft oder Ritual", keywords: ["gemeinschaft", "zusammenhalt", "ritual"] }
        ]
      },
      {
        prompt: "Erkläre an Zelt, Lehmhaus und Iglu, warum mobile Lebensformen nicht als rückständig missverstanden werden dürfen.",
        placeholder: "Zeige die Anpassung an Klima, Raum und Lebensweise.",
        sampleAnswer:
          "Zelt, Lehmhaus und Iglu zeigen, dass Unterkünfte genau an Umwelt und Lebensweise angepasst wurden. Mobile Gruppen bauten nicht einfach weniger, sondern anders. Ihre Behausungen mussten zu Klima, Material und Bewegung passen. Das ist keine Rückständigkeit, sondern hoch spezialisiertes Umweltwissen.",
        criteria: [
          { label: "drei Unterkunftsformen", keywords: ["zelt", "lehmhaus", "iglu"] },
          { label: "Anpassung", keywords: ["anpassung", "klima", "material", "landschaft"] },
          { label: "Fehldeutung korrigiert", keywords: ["nicht ruckstandig", "spezialisiert", "eigenstandig"] }
        ]
      },
      {
        prompt: "Nenne drei Grundmerkmale von Jäger-und-Sammler-Gesellschaften. Arbeite mit Umweltwissen, Mobilität und mündlicher Weitergabe.",
        placeholder: "Beschreibe die Lebensform so, dass sie als eigenständige Ordnung verständlich wird.",
        sampleAnswer:
          "Erstens brauchen Jäger und Sammler dichtes Umweltwissen. Zweitens ist ihre Mobilität organisiert und an Räume angepasst. Drittens sichern sie Wissen vor allem mündlich und praktisch. Genau dadurch wird ihre Lebensform historisch ernst genommen.",
        criteria: [
          { label: "Umweltwissen", keywords: ["umweltwissen", "tiere", "pflanzen", "wege"] },
          { label: "Mobilität", keywords: ["mobilitat", "mobil", "wandern", "angepasst"] },
          { label: "mündliche Weitergabe", keywords: ["mundlich", "weitergabe", "praktisch"] }
        ]
      }
    ]
  },
  "modul-5": {
    title: "Inhaltssicherung Modul 5",
    questions: [
      {
        prompt: "Warum ist Landwirtschaft zugleich Fortschritt und Belastung?",
        placeholder: "Schreibe ein ausgewogenes Urteil.",
        sampleAnswer:
          "Landwirtschaft brachte Vorräte, Bevölkerungswachstum und feste Siedlungen. Gleichzeitig wurden Menschen abhängiger von Ernten, arbeiteten härter und entwickelten neue soziale Unterschiede.",
        criteria: [
          { label: "Vorteile genannt", keywords: ["vorrate", "siedlungen", "bevolkerungswachstum", "hauser"] },
          { label: "Belastungen genannt", keywords: ["abhangig", "harter", "arbeit", "ernte", "risiko"] },
          { label: "Abwägung", keywords: ["zugleich", "sowohl", "ambivalent", "nicht nur"] }
        ]
      },
      {
        prompt: "Was veränderte sich im Alltag, wenn Menschen sesshaft wurden?",
        placeholder: "Denke an Wohnen, Arbeit und Besitz.",
        sampleAnswer:
          "Mit Sesshaftigkeit entstanden feste Häuser, Speicher und stärker geregelte Arbeitsabläufe. Besitz und Felder wurden wichtiger, und Konflikte um Vorräte oder Land nahmen zu.",
        criteria: [
          { label: "Wohnen oder Speicher", keywords: ["hauser", "speicher", "dorf"] },
          { label: "Arbeit", keywords: ["arbeit", "arbeitsablaufe", "anbau"] },
          { label: "Besitz oder Konflikte", keywords: ["besitz", "land", "konflikte", "vorrate"] }
        ]
      },
      {
        prompt: "Was zeigen Hüttenbau, Feuerstellen und Werkzeuge der Pfahlbauer von Pfyn ganz konkret über Sesshaftigkeit?",
        placeholder: "Arbeite mit Hüttenbau, Werkzeugen, Feuerstellen, Kleidung, Nahrung oder Vorräten.",
        sampleAnswer:
          "Die Pfahlbauer zeigen Sesshaftigkeit konkret durch Hüttenbau, Feuerstellen und Vorratshaltung. Auch Werkzeuge wie Steinbeile und Kolbenpfeile gehören dazu, weil eine feste Siedlung dauernde Arbeit braucht. Kleidung, Nahrung und Reparaturen zeigen, dass Sesshaftigkeit ein ganzer Alltag war.",
        criteria: [
          { label: "Bauen oder Wohnen", keywords: ["huttenbau", "hauser", "feuerstellen"] },
          { label: "Werkzeuge", keywords: ["steinbeile", "kolbenpfeile", "werkzeuge"] },
          { label: "Alltag", keywords: ["kleidung", "nahrung", "vorrate", "arbeit"] }
        ]
      },
      {
        prompt: "Warum ist der Übergang zu Ackerbau und Sesshaftigkeit keine einfache Fortschrittsgeschichte, sondern eine umstrittene Wende mit Gewinnen und Belastungen?",
        placeholder: "Erkläre, warum Sesshaftigkeit als Streitfrage erscheint.",
        sampleAnswer:
          "Der Film verschärft die Kernfrage, weil er Sesshaftigkeit nicht automatisch als Fortschritt darstellt. Er zwingt dazu, Gewinne wie Vorräte und Dörfer gegen Belastungen wie Arbeit, Abhängigkeit und Ungleichheit abzuwägen.",
        criteria: [
          { label: "keine Selbstverständlichkeit", keywords: ["nicht automatisch", "streitfrage", "nicht nur fortschritt"] },
          { label: "Gewinne", keywords: ["vorrate", "dorfer", "sicherheit"] },
          { label: "Belastungen", keywords: ["arbeit", "abhangigkeit", "ungleichheit"] }
        ]
      },
      {
        prompt: "Warum beginnt die Neolithisierung im Fruchtbaren Halbmond nicht als fertiges System, sondern als längerer Übergang?",
        placeholder: "Arbeite mit Klimawechsel, Pflanzen, Tieren und schrittweisen Veränderungen.",
        sampleAnswer:
          "Die Neolithisierung beginnt nicht als fertiges System, weil Menschen nach der Eiszeit erst schrittweise mit Pflanzenmanagement, Tierhaltung und festen Siedlungsformen experimentieren. Klima, Nahrungssuche und neue Techniken greifen langsam ineinander, bevor daraus dauerhafter Ackerbau entsteht.",
        criteria: [
          { label: "Fruchtbarer Halbmond", keywords: ["fruchtbarer halbmond", "vorderasien"] },
          { label: "schrittweiser Übergang", keywords: ["schrittweise", "langsam", "übergang", "prozess"] },
          { label: "Pflanzen oder Tiere", keywords: ["pflanzen", "tiere", "tierhaltung", "anbau"] }
        ]
      },
      {
        prompt: "Warum ist die Ausbreitung von Landwirtschaft nach Europa keine einzige Welle, sondern eine Folge verschiedener Wege?",
        placeholder: "Verbinde Balkan, Donau, Mittelmeer, Alpenraum, Migration und Übernahme.",
        sampleAnswer:
          "Die Ausbreitung verläuft über verschiedene Räume wie Balkan, Donau, Mittelmeer und Alpenraum. In manchen Regionen wandern Gruppen ein, anderswo werden Techniken übernommen oder gemischt. Deshalb ist Neolithisierung in Europa ein regional unterschiedlicher Prozess und kein einziger gleichförmiger Zug.",
        criteria: [
          { label: "mehrere Wege", keywords: ["balkan", "donau", "mittelmeer", "alpen"] },
          { label: "Migration oder Übernahme", keywords: ["migration", "übernahme", "mischung"] },
          { label: "kein einheitlicher Vorgang", keywords: ["nicht einheitlich", "verschieden", "regional"] }
        ]
      },
      {
        prompt: "Warum ist Göbekli Tepe für die Deutung der Neolithisierung so wichtig?",
        placeholder: "Erkläre, was monumentale Kultbauten vor ausgebauter Staatlichkeit historisch verändern.",
        sampleAnswer:
          "Göbekli Tepe ist wichtig, weil dort monumentale Kultbauten sichtbar werden, bevor der klassische Bauernstaat mit Palast, Beamten und Steuern greifbar ist. Das zeigt, dass gemeinsame religiöse Zentren und große Bauarbeit nicht erst nach fertiger Staatlichkeit entstehen.",
        criteria: [
          { label: "monumentale Kultbauten", keywords: ["monumental", "kult", "steinkreise", "tempel"] },
          { label: "vor klassischer Staatlichkeit", keywords: ["vor staat", "bevor", "ohne palast", "ohne beamte"] },
          { label: "Deutung verändert", keywords: ["reihenfolge", "nicht erst", "neu deuten"] }
        ]
      }
    ]
  },
  "modul-6": {
    title: "Inhaltssicherung Modul 6",
    questions: [
      {
        prompt: "Erkläre den Weg vom Überschuss zum Staat.",
        placeholder: "Denke an Vorräte, Verwaltung und Herrschaft.",
        sampleAnswer:
          "Wenn Überschüsse entstehen, müssen Vorräte erfasst, geschützt und verteilt werden. Dafür entstehen Verwalter, Schreiber und feste Zuständigkeiten. So wächst aus wirtschaftlicher Organisation politische Herrschaft.",
        criteria: [
          { label: "Überschuss oder Vorrat", keywords: ["uberschuss", "vorrate", "speicher"] },
          { label: "Verwaltung", keywords: ["verwalter", "verwaltung", "schreiber", "zustandigkeiten"] },
          { label: "Herrschaft", keywords: ["herrschaft", "staat", "politisch"] }
        ]
      },
      {
        prompt: "Warum ist Ägypten ein gutes Beispiel für frühe Staatlichkeit?",
        placeholder: "Verbinde Umwelt, Schrift und Herrschaft.",
        sampleAnswer:
          "Ägypten ist ein gutes Beispiel, weil der Nil verlässliche Landwirtschaft ermöglichte, Verwaltung und Schrift Ordnung schufen und der Pharao Herrschaft religiös absicherte. Mit der Maat kam zudem die Vorstellung einer göttlich richtigen Ordnung hinzu.",
        criteria: [
          { label: "Nil oder Umwelt", keywords: ["nil", "fluss", "landwirtschaft"] },
          { label: "Schrift oder Verwaltung", keywords: ["schrift", "hieroglyph", "verwaltung", "beamtentum"] },
          { label: "Herrschaft oder Religion", keywords: ["pharao", "herrschaft", "religion", "legitimation", "maat"] }
        ]
      },
      {
        prompt: "Warum erklären Nil, Beamtentum und Hieroglyphenschrift das Alte Ägypten besser als bloße Pyramidenbilder?",
        placeholder: "Zeige, wie Umwelt, Verwaltung und Schrift zusammen Staatlichkeit tragen.",
        sampleAnswer:
          "Die Folge ist wichtiger als bloße Pyramidenbilder, weil sie Staatlichkeit erklärt. Der Nil macht Landwirtschaft planbar, das Beamtentum organisiert Abgaben und Arbeiten, und Hieroglyphenschrift stabilisiert Verwaltung. So wird Ägypten als funktionierende Ordnung sichtbar, nicht nur als Monumentenwelt.",
        criteria: [
          { label: "Nil", keywords: ["nil", "landwirtschaft", "planbar"] },
          { label: "Beamtentum", keywords: ["beamtentum", "abgaben", "organisiert"] },
          { label: "Hieroglyphenschrift", keywords: ["hieroglyph", "schrift", "verwaltung"] }
        ]
      },
      {
        prompt: "Erkläre Nil, Pharao und Maat als drei tragende Säulen der ägyptischen Ordnung und vergleiche Ägypten in einem Satz knapp mit Mesopotamien.",
        placeholder: "Verbinde Landwirtschaft, Herrschaft und göttliche Ordnung; halte den Vergleich kurz.",
        sampleAnswer:
          "Der Nil machte Ernten berechenbar und schuf damit die materielle Grundlage des Reiches. Der Pharao bündelte politische und religiöse Herrschaft. Mit der Maat wurde Ordnung als göttlich richtig begründet. Im Unterschied zu Ägypten bestand Mesopotamien stärker aus mehreren konkurrierenden Stadtstaaten.",
        criteria: [
          { label: "Nil", keywords: ["nil", "ernten", "uberschwemmung", "landwirtschaft"] },
          { label: "Pharao", keywords: ["pharao", "könig", "herrschaft"] },
          { label: "Maat", keywords: ["maat", "ordnung", "gerechtigkeit", "gleichgewicht"] },
          { label: "Mesopotamien kurz verglichen", keywords: ["mesopotamien", "stadtstaat", "konkurrierend", "zentralisiert"] }
        ]
      },
      {
        prompt: "Was lernt man über Hochkulturen, wenn man nicht nur auf Ägypten schaut, sondern mehrere frühe Staaten miteinander vergleicht?",
        placeholder: "Erkläre den Gewinn eines breiteren Überblicks über Schrift, Verwaltung und Religion.",
        sampleAnswer:
          "Die Ägypten-Folge zeigt ein konkretes Beispiel sehr genau. Der Nutzerfilm zu Hochkulturen ergänzt dazu den breiteren Überblick über Schrift, Verwaltung, Religion und Staat in mehreren frühen Kulturen. So wird der Begriff Hochkultur allgemeiner abgesichert.",
        criteria: [
          { label: "Ägypten als Fallbeispiel", keywords: ["agypten", "fallbeispiel", "konkret"] },
          { label: "breiter Überblick", keywords: ["uberblick", "mehrere", "hochkulturen"] },
          { label: "zentrale Strukturmerkmale", keywords: ["schrift", "verwaltung", "religion", "staat"] }
        ]
      },
      {
        prompt: "Warum ist Çatalhöyük ein Gegenbeispiel gegen die einfache Formel 'große Siedlung = fertiger Staat'?",
        placeholder: "Arbeite mit Hausdichte, Dachzugängen, Kult und fehlendem Palast.",
        sampleAnswer:
          "Çatalhöyük zeigt dichte Hausverbände, Dachzugänge, Wandmalereien und Bestattungen im Haus. Gleichzeitig fehlt das klare Bild eines Palastes oder eines Königsstaats. Dadurch wird sichtbar, dass Verdichtung und komplexes Zusammenleben nicht automatisch schon dieselbe Herrschaftsform wie im Alten Ägypten bedeuten.",
        criteria: [
          { label: "Hausdichte oder Dachzugänge", keywords: ["hausdichte", "dachzugange", "hausverbande"] },
          { label: "Kult oder Bestattungen", keywords: ["kult", "bestattungen", "wandmalereien"] },
          { label: "kein automatischer Staat", keywords: ["nicht automatisch", "kein palast", "kein königsstaat", "andere ordnung"] }
        ]
      },
      {
        prompt: "Was muss zu einer Hochkultur gehören, damit der Begriff mehr bedeutet als nur Pracht und Monumente?",
        placeholder: "Nenne mehrere Strukturmerkmale wie Schrift, Verwaltung, Spezialisierung und Herrschaft.",
        sampleAnswer:
          "Zu einer Hochkultur gehören nicht nur große Bauwerke, sondern dauerhafte Ordnungen: Schrift oder andere feste Zeichensysteme, Verwaltung, Arbeitsteilung, religiöse Ordnung und politische Herrschaft. Erst das Zusammenspiel dieser Elemente macht aus monumentalen Bauten eine historisch stabile Hochkultur.",
        criteria: [
          { label: "Schrift oder Zeichensysteme", keywords: ["schrift", "zeichensystem", "hieroglyph"] },
          { label: "Verwaltung oder Spezialisierung", keywords: ["verwaltung", "spezialisierung", "arbeitsteilung"] },
          { label: "Herrschaft oder Religion", keywords: ["herrschaft", "religion", "ordnung"] }
        ]
      }
    ]
  },
  "modul-7-kelten": {
    title: "Inhaltssicherung Modul 7",
    questions: [
      {
        prompt: "Warum bezeichnet der Name Kelten keinen einzelnen Staat, sondern einen größeren Kulturraum?",
        placeholder: "Arbeite mit vielen Gruppen, Hallstatt, La Tène oder gemeinsamer materieller Kultur.",
        sampleAnswer:
          "Der Name Kelten bezeichnet keinen einzelnen Staat, weil damit viele Gruppen in verschiedenen Regionen Europas gemeint sind. Zusammengehalten werden sie eher durch ähnliche materielle Kultur, Kunstformen, Waffen, Schmuck und religiöse Praktiken als durch einen einheitlichen König oder ein gemeinsames Reich.",
        criteria: [
          { label: "kein einzelner Staat", keywords: ["kein staat", "kein reich", "viele gruppen", "mehrere gruppen"] },
          { label: "Hallstatt oder La Tène", keywords: ["hallstatt", "la tène", "la tene"] },
          { label: "gemeinsame Kulturmerkmale", keywords: ["materielle kultur", "schmuck", "waffen", "kunst", "religion"] }
        ]
      },
      {
        prompt: "Erkläre, was oppida über die keltische Welt in der Schweiz verraten.",
        placeholder: "Denke an Befestigung, Zentrum, Handwerk, Handel und politische Verdichtung.",
        sampleAnswer:
          "Oppida zeigen, dass die keltische Welt der Schweiz politische und wirtschaftliche Zentren kannte. Solche befestigten Orte bündeln Menschen, Handwerk, Vorräte, Tausch und Macht. Sie widerlegen deshalb die Vorstellung, vor Rom habe es nur locker verteilte bäuerliche Siedlungen gegeben.",
        criteria: [
          { label: "Oppida als Zentren", keywords: ["oppida", "zentren", "befestigt", "oppidum"] },
          { label: "Handwerk oder Handel", keywords: ["handwerk", "handel", "tausch", "münzen"] },
          { label: "Klischee korrigiert", keywords: ["nicht nur", "bauern", "vor rom", "locker verteilt", "verdichtet"] }
        ]
      },
      {
        prompt: "Warum muss man die Geschichte der Helvetier mit Caesar und zugleich gegen Caesar lesen?",
        placeholder: "Verbinde Hauptquelle, Eigeninteresse und archäologische Korrektur.",
        sampleAnswer:
          "Caesar ist für die Helvetier wichtig, weil er eine der wichtigsten schriftlichen Quellen liefert. Zugleich schreibt er als römischer Feldherr mit politischem Eigeninteresse. Deshalb muss sein Bericht mit archäologischen Funden, Siedlungen und materiellen Spuren verglichen werden.",
        criteria: [
          { label: "Caesar als wichtige Quelle", keywords: ["caesar", "quelle", "bericht", "schriftlich"] },
          { label: "Eigeninteresse oder Parteilichkeit", keywords: ["eigeninteresse", "parteiisch", "feldherr", "rechtfertigen"] },
          { label: "Archäologie als Korrektiv", keywords: ["archäolog", "funde", "vergleich", "korrig"] }
        ]
      },
      {
        prompt: "Erkläre, warum die Wanderung der Helvetier von 58 v. Chr. mehr ist als eine einzelne Schlachtengeschichte.",
        placeholder: "Arbeite mit Bibracte, erzwungener Rückkehr und römischer Kontrolle von Raum und Bewegung.",
        sampleAnswer:
          "Die Ereignisse von 58 v. Chr. sind mehr als eine Schlacht, weil Rom damit entscheidet, wer sich im Alpenvorland bewegen darf. Nach der Niederlage bei Bibracte werden die Helvetier zur Rückkehr gezwungen. Damit gerät ihr Raum unter stärkeren römischen Zugriff, und die politische Eigenständigkeit wird grundlegend verändert.",
        criteria: [
          { label: "58 v. Chr. oder Bibracte", keywords: ["58", "bibracte", "v. chr", "vor christus"] },
          { label: "erzwungene Rückkehr", keywords: ["rückkehr", "zurück", "gezwungen"] },
          { label: "römische Raumkontrolle", keywords: ["rom", "kontrolle", "raum", "bewegung", "eingriff"] }
        ]
      },
      {
        prompt: "Was zeigen die Funde auf der Berner Engehalbinsel über Reichtum, Religion und Vernetzung der Helvetier?",
        placeholder: "Formuliere mit reichen Funden, Frömmigkeit und weiten Kontakten.",
        sampleAnswer:
          "Die Funde zeigen, dass die Helvetier nicht nur lokal und bäuerlich lebten. Reiche Objekte, religiöse Bezüge und überregionale Kontakte sprechen für Wohlstand, Frömmigkeit und weite Vernetzung. Die Engehalbinsel korrigiert damit das einfache Klischee vom ungebildeten Bauernvolk.",
        criteria: [
          { label: "Reichtum", keywords: ["reich", "wohlstand", "schätze", "kostbar"] },
          { label: "Religion", keywords: ["religion", "frömmigkeit", "heiligtum", "kult"] },
          { label: "Vernetzung", keywords: ["vernetzt", "kontakte", "fernkontakte", "überregional"] }
        ]
      },
      {
        prompt: "Worin unterscheiden sich Harari und Graeber/Wengrow bei der Deutung der Helvetier und der keltischen Welt vor Rom?",
        placeholder: "Verbinde größere Imperien mit vorrömischer Eigenständigkeit und offenen Wegen.",
        sampleAnswer:
          "Harari betont stärker, dass lokale Gruppen wie die Helvetier in größere Reiche, Rechtsräume und Handelsnetze hineingezogen werden. Graeber und Wengrow heben stärker hervor, dass oppida, Austausch und politische Verdichtung schon vor Rom komplexe Gesellschaften hervorbringen konnten. Der Unterschied liegt also zwischen Eingliederung in größere Ordnungen und der Eigenständigkeit offener vorrömischer Wege.",
        criteria: [
          { label: "Harari", keywords: ["harari", "reiche", "netze", "einglied", "größere ordnungen", "grössere ordnungen"] },
          { label: "Graeber/Wengrow", keywords: ["graeber", "wengrow", "offen", "eigenständig", "vorrömisch", "vorrömische"] },
          { label: "Helvetier als Beispiel", keywords: ["helvetier", "oppida", "keltische welt", "vor rom"] }
        ]
      },
      {
        prompt: "Warum ist Archäologie im Fall der Helvetier wichtiger als bei vielen späteren Epochen mit vielen Schriftquellen?",
        placeholder: "Verbinde fehlende Eigenquellen, Fundschichten und Datierung.",
        sampleAnswer:
          "Archäologie ist hier besonders wichtig, weil die Helvetier keine lange eigene Schriftüberlieferung hinterlassen haben, auf die man sich allein stützen könnte. Siedlungsschichten, Münzen, Werkstätten, Gräber und Datierungsmethoden liefern deshalb die wichtigste Grundlage, um ihre Geschichte jenseits von Caesar zu rekonstruieren.",
        criteria: [
          { label: "fehlende eigene Schriftquellen", keywords: ["keine eigenen schriftquellen", "wenig schrift", "caesar"] },
          { label: "Fundschichten oder Funde", keywords: ["fundschichten", "gräber", "werkstätten", "münzen", "siedlungen"] },
          { label: "Datierung", keywords: ["datierung", "c14", "dendrochronologie", "vergleichsfunde"] }
        ]
      },
      {
        prompt: "Warum korrigiert das Kelten-Experiment die Vorstellung, keltische Geschichte bestehe nur aus Krieg und Römerkontakt?",
        placeholder: "Arbeite mit Hausbau, Vorräten, Handwerk und Alltag.",
        sampleAnswer:
          "Das Kelten-Experiment zeigt, dass keltische Geschichte aus Bauen, Kochen, Speichern, Handwerk und organisierter Arbeit besteht. Dadurch tritt eine alltägliche Lebenswelt hervor, die viel breiter ist als Krieg und der spätere Kontakt mit Rom.",
        criteria: [
          { label: "Hausbau oder Vorräte", keywords: ["hausbau", "vorräte", "speicher"] },
          { label: "Handwerk oder Arbeit", keywords: ["handwerk", "arbeit", "werkstätten", "kochen"] },
          { label: "Klischee korrigiert", keywords: ["nicht nur krieg", "nicht nur rom", "alltag"] }
        ]
      },
      {
        prompt: "Warum ist der Übergang zur gallo-römischen Zeit besser als Mischung aus Kontinuitäten und Brüchen zu beschreiben als als Totalersetzung?",
        placeholder: "Erkläre mit Orten, Verkehrswegen, Siedlungen oder materiellen Spuren.",
        sampleAnswer:
          "Der Übergang ist keine Totalersetzung, weil Rom auf bestehende Orte, Wege und Siedlungsräume trifft. Manche Strukturen bleiben wichtig, werden aber in neue Macht- und Verkehrsordnungen eingebunden. Genau deshalb lässt sich die gallo-römische Zeit als Überlagerung und Neuordnung lesen.",
        criteria: [
          { label: "bestehende Orte oder Wege", keywords: ["orte", "wege", "verkehrswege", "siedlungen"] },
          { label: "Kontinuität", keywords: ["bleibt", "weiter", "kontinuität", "übernahme"] },
          { label: "Bruch oder Neuordnung", keywords: ["bruch", "neuordnung", "überlagerung", "rom"] }
        ]
      }
    ]
  },
  "modul-7": {
    title: "Inhaltssicherung Modul 8",
    questions: [
      {
        prompt: "Erkläre die attische Demokratie. Nenne Volksversammlung, Bürgerbegriff und mindestens eine wichtige Grenze dieser Ordnung.",
        placeholder: "Arbeite mit Athen, Bürgern und Ausschlüssen.",
        sampleAnswer:
          "Die attische Demokratie ist eine direkte Bürgerdemokratie in Athen. Freie männliche Bürger entscheiden in der Volksversammlung über wichtige Fragen. Frauen, Metöken und Sklaven sind jedoch ausgeschlossen, deshalb ist die Demokratie auf einen engen Bürgerkreis begrenzt.",
        criteria: [
          { label: "Athen oder attische Demokratie", keywords: ["athen", "attische demokratie", "demokratie"] },
          { label: "Volksversammlung oder Bürger", keywords: ["volksversammlung", "bürger", "bürgerrecht"] },
          { label: "Grenzen oder Ausschlüsse", keywords: ["frauen", "metöken", "sklaven", "ausgeschlossen"] }
        ]
      },
      {
        prompt: "Erkläre die römische Republik. Nenne Senat, Konsuln oder Volksversammlungen und beschreibe kurz, warum diese Ordnung nicht einfach Demokratie heißt.",
        placeholder: "Verbinde Republik, Ämter und soziale Ungleichheit.",
        sampleAnswer:
          "Die römische Republik hat keinen König, sondern arbeitet mit Senat, Konsuln, Magistraten und Volksversammlungen. Macht ist also verteilt und zeitlich begrenzt. Trotzdem ist die Republik keine einfache Demokratie, weil die Führungsschicht großen Einfluss behält und soziale Ungleichheiten stark bleiben.",
        criteria: [
          { label: "Republik benannt", keywords: ["republik", "rom"] },
          { label: "Senat, Konsuln oder Volksversammlungen", keywords: ["senat", "konsul", "volksversammlung", "magistrat"] },
          { label: "keine einfache Demokratie", keywords: ["nicht einfach demokratie", "führungsschicht", "ungleich", "patrizier", "plebejer"] }
        ]
      },
      {
        prompt: "Warum waren Zwölftafeln und Volkstribunat für Plebejer wichtig?",
        placeholder: "Erkläre den Zusammenhang von Recht, Schutz und politischem Konflikt.",
        sampleAnswer:
          "Die Zwölftafeln machten Recht öffentlich und berechenbarer, während die Volkstribunen Plebejer gegen Übergriffe der Oberschicht schützen sollten. Beides gehört zum langen Konflikt zwischen Patriziern und Plebejern und zeigt, dass die Republik durch soziale Kämpfe verändert wurde.",
        criteria: [
          { label: "Zwölftafeln als öffentliches Recht", keywords: ["zwölftafeln", "recht", "öffentlich", "schriftlich"] },
          { label: "Volkstribunat als Schutz", keywords: ["volkstribun", "schutz", "plebejer"] },
          { label: "Ständekonflikt", keywords: ["patrizier", "plebejer", "konflikt"] }
        ]
      },
      {
        prompt: "Warum zerbrach die römische Republik nicht an einem einzigen Ereignis, sondern in einer längeren Krise?",
        placeholder: "Arbeite mit Expansion, sozialer Ungleichheit und Bürgerkriegen.",
        sampleAnswer:
          "Die Republik geriet durch Expansion, Beute, Landkonzentration und soziale Spannungen unter Druck. Reformversuche der Gracchen, Machtkämpfe von Feldherren und Bürgerkriege verschärften die Krise. Der Übergang zur Kaiserzeit ist deshalb Ergebnis einer langen Zuspitzung und nicht nur eines einzelnen Bruchs.",
        criteria: [
          { label: "Expansion oder Provinzen", keywords: ["expansion", "provinzen", "beute"] },
          { label: "soziale Spannungen", keywords: ["landkonzentration", "ungleichheit", "gracchen", "plebs"] },
          { label: "Bürgerkrieg oder Machtkampf", keywords: ["bürgerkrieg", "caesar", "sulla", "marius", "pompeius"] }
        ]
      },
      {
        prompt: "Warum wirkt Augustus wie ein Republikaner und herrscht doch wie ein Monarch?",
        placeholder: "Verbinde Prinzipat, alte Ämter und tatsächliche Macht.",
        sampleAnswer:
          "Augustus lässt republikanische Ämter und Begriffe bestehen, damit seine Herrschaft akzeptabler wirkt. Tatsächlich bündelt er militärische, politische und symbolische Macht in seiner Person. Der Prinzipat ist darum eine Monarchie im Gewand republikanischer Formen.",
        criteria: [
          { label: "republikanische Fassade", keywords: ["republik", "ämter", "senat", "fassade"] },
          { label: "gebündelte Macht", keywords: ["macht", "augustus", "princeps", "monarchie"] },
          { label: "Prinzipat", keywords: ["prinzipat", "kaiserzeit"] }
        ]
      },
      {
        prompt: "Zeige an zwei Beispielen, wie die Römer den Alltag in der Schweiz veränderten.",
        placeholder: "Nutze konkrete Dinge aus Infrastruktur, Städten, Recht oder Ernährung.",
        sampleAnswer:
          "Die Römer veränderten den Alltag durch Straßen und Brücken, die Bewegung und Handel erleichterten. Auch neue Städte wie Aventicum, Legionslager wie Vindonissa, Weinbau, Importwaren oder römische Rechtsformen wirkten bis in lokale Lebenswelten hinein.",
        criteria: [
          { label: "Infrastruktur oder Städte", keywords: ["strassen", "brücken", "aventicum", "vindonissa", "städte"] },
          { label: "Alltag/Güter", keywords: ["wein", "waren", "ernährung", "handel", "bäder"] },
          { label: "Ordnungssysteme", keywords: ["recht", "provinz", "verwaltung", "romanisierung"] }
        ]
      },
      {
        prompt: "Warum ist die gallo-römische Schweiz besser als Mischwelt zu beschreiben denn als völlige Verdrängung der Kelten?",
        placeholder: "Arbeite mit Kontinuitäten, neuen Städten und römischer Überformung.",
        sampleAnswer:
          "Die gallo-römische Schweiz ist eine Mischwelt, weil Rom auf bestehende keltische Räume trifft und sie neu ordnet. Orte, Verkehrsachsen und lokale Traditionen verschwinden nicht einfach, sondern werden überlagert, ausgebaut oder umgedeutet. Gerade so entstehen Kontinuitäten und Brüche zugleich.",
        criteria: [
          { label: "bestehende keltische Räume", keywords: ["keltisch", "bestehend", "orte", "traditionen"] },
          { label: "römische Neuordnung", keywords: ["rom", "neuordnung", "provinz", "stadt", "überformt"] },
          { label: "Mischwelt oder Kontinuität/Bruch", keywords: ["mischwelt", "kontinuität", "bruch", "gallo-römisch"] }
        ]
      }
    ]
  },
  "modul-8": {
    title: "Inhaltssicherung Modul 9",
    questions: [
      {
        prompt: "Warum ist Geld eine Vertrauensordnung und nicht nur Metall?",
        placeholder: "Formuliere mit dem Begriff Vertrauen.",
        sampleAnswer:
          "Geld ist eine Vertrauensordnung, weil sein Wert davon abhängt, dass viele Menschen es anerkennen und im Tausch akzeptieren. Das Metall allein erklärt die Wirkung nicht.",
        criteria: [
          { label: "Vertrauen", keywords: ["vertrauen", "anerkennen", "akzeptieren"] },
          { label: "nicht nur Metall", keywords: ["nicht nur metall", "metall allein", "mehr als metall"] },
          { label: "Tausch oder Wert", keywords: ["tausch", "wert", "bezahlen"] }
        ]
      },
      {
        prompt: "Was kann ein Münzschatz über eine Gesellschaft verraten?",
        placeholder: "Denke an Wirtschaft, Herrschaft und Unsicherheit.",
        sampleAnswer:
          "Ein Münzschatz kann zeigen, welche Währung umlief, welche Herrschaft anerkannt wurde und ob Menschen vielleicht in unsicheren Zeiten Vermögen versteckten. Er ist deshalb eine wichtige Sachquelle.",
        criteria: [
          { label: "Währung oder Umlauf", keywords: ["wahrung", "umlief", "umlauf", "münzen"] },
          { label: "Herrschaft", keywords: ["herrschaft", "anerkannt", "macht"] },
          { label: "Unsicherheit oder Verstecken", keywords: ["unsicher", "versteckt", "krise", "vermog"] }
        ]
      },
      {
        prompt: "Was ergänzt die Reihe 'Grosse Völker' zum Münzschatz von Ueken? Antworte mit Karthagern, Arabern und mindestens einer historischen Leistung.",
        placeholder: "Zeige, dass Vernetzung mehr ist als Münzumlauf.",
        sampleAnswer:
          "Die Reihe ergänzt den Münzschatz, weil sie Vernetzung über verschiedene Großräume zeigt. Die Karthager stehen für Seehandel und Purpur, die Araber für Wissenschaft, Mathematik und Medizin. So wird deutlich, dass Handel nicht nur Ware, sondern auch Wissen und Kultur bewegt.",
        criteria: [
          { label: "Karthager", keywords: ["karthager", "purpur", "seehandel"] },
          { label: "Araber", keywords: ["araber", "mathematik", "medizin", "wissenschaft"] },
          { label: "Vernetzung über Geld hinaus", keywords: ["wissen", "kultur", "nicht nur ware", "vernetzung"] }
        ]
      }
    ]
  },
  "modul-9": {
    title: "Inhaltssicherung Modul 10",
    questions: [
      {
        prompt: "Erkläre, wie Religion Gemeinschaft ordnen kann.",
        placeholder: "Denke an Regeln, Zugehörigkeit und Sinn.",
        sampleAnswer:
          "Religion kann Gemeinschaft ordnen, weil sie gemeinsame Regeln, Rituale und Deutungen vorgibt. Menschen wissen dadurch eher, wer dazugehört und wie richtiges Verhalten aussehen soll.",
        criteria: [
          { label: "Regeln oder Rituale", keywords: ["regeln", "rituale", "normen"] },
          { label: "Zugehörigkeit", keywords: ["zugehorigkeit", "gemeinschaft", "dazugehort"] },
          { label: "Sinn oder Deutung", keywords: ["sinn", "deutung", "weltbild"] }
        ]
      },
      {
        prompt: "Warum konnte sich das Christentum nach Jesus überhaupt über den Mittelmeerraum ausbreiten?",
        placeholder: "Arbeite mit Paulus, Gemeinden und dem römischen Verkehrsraum.",
        sampleAnswer:
          "Das Christentum breitete sich aus, weil Paulus und andere Missionare Gemeinden gründeten und Briefe, Predigt und persönliche Kontakte nutzten. Der römische Verkehrsraum mit Städten, Straßen und Häfen erleichterte diese Verbreitung zusätzlich.",
        criteria: [
          { label: "Paulus oder Mission", keywords: ["paulus", "mission", "gemeinden"] },
          { label: "Verkehrsraum oder Städte", keywords: ["römisch", "städte", "straßen", "häfen"] },
          { label: "Ausbreitung", keywords: ["ausbreitung", "verbreitung", "mittelmeerraum"] }
        ]
      },
      {
        prompt: "Warum verfolgten manche römische Kaiser Christinnen und Christen?",
        placeholder: "Erkläre mit Ordnung, Loyalität und religiösem Konflikt.",
        sampleAnswer:
          "Christinnen und Christen wurden verfolgt, weil sie sich nicht einfach in die religiös-politische Ordnung des Reiches einfügten. Wer Opfer für den Kaiserkult verweigerte, konnte als illoyal oder gefährlich gelten. Religion war deshalb auch eine Frage von Ordnung und Gehorsam.",
        criteria: [
          { label: "politische Ordnung", keywords: ["ordnung", "reich", "politisch"] },
          { label: "Loyalität oder Kaiserkult", keywords: ["loyalität", "kaiserkult", "opfer", "verweigert"] },
          { label: "Verfolgung", keywords: ["verfolg", "nero", "decius", "diokletian"] }
        ]
      },
      {
        prompt: "Was änderte sich mit Konstantin und der konstantinischen Wende?",
        placeholder: "Arbeite mit Duldung, Förderung und politischer Bedeutung des Christentums.",
        sampleAnswer:
          "Mit Konstantin wurde das Christentum nicht mehr nur verfolgt, sondern geduldet und gefördert. Dadurch gewann die Kirche institutionelle Macht, und religiöse Einheit wurde zu einer politischen Frage des Reiches. Die konstantinische Wende veränderte also das Verhältnis von Religion und Herrschaft grundlegend.",
        criteria: [
          { label: "Duldung oder Förderung", keywords: ["geduldet", "gefördert", "konstantin"] },
          { label: "Kirche gewinnt Macht", keywords: ["kirche", "institutionell", "macht"] },
          { label: "Religion und Herrschaft", keywords: ["herrschaft", "reich", "politisch"] }
        ]
      },
      {
        prompt: "Warum lassen sich Religion, Wissen und Handel historisch oft nicht sauber trennen?",
        placeholder: "Arbeite mit Netzwerken und Begegnungen.",
        sampleAnswer:
          "Religion, Wissen und Handel lassen sich oft nicht trennen, weil Pilgerwege, Gelehrte, Übersetzungen, Märkte und Städte miteinander verbunden waren. Menschen tauschten nicht nur Waren, sondern auch Ideen und Texte aus.",
        criteria: [
          { label: "Netzwerke oder Wege", keywords: ["wege", "netzwerke", "pilger", "städte", "märkte"] },
          { label: "Wissen", keywords: ["gelehrte", "texte", "übersetzungen", "ideen"] },
          { label: "Handel", keywords: ["handel", "waren", "austausch"] }
        ]
      },
      {
        prompt: "Vergleiche Judentum, Christentum und Islam. Warum muss man alle drei als eigenständige religiöse Ordnungen mit eigenen Texten, Gemeinschaften und historischen Räumen verstehen?",
        placeholder: "Arbeite mit Eigenständigkeit, Schrift, Gemeinschaft und Ausbreitung.",
        sampleAnswer:
          "Es ist wichtig, alle drei einzuführen, weil keine dieser Religionen bloß vorausgesetzt werden darf. Judentum, Christentum und Islam sind eigenständige religiöse Ordnungsräume mit Texten, Gemeinschaften und historischen Ausbreitungen. Erst durch den Vergleich wird Religion im Modul konkret und nicht nur abstrakt.",
        criteria: [
          { label: "alle drei Religionen genannt", keywords: ["judentum", "christentum", "islam"] },
          { label: "Eigenständigkeit", keywords: ["eigenständig", "nicht nur vorausgesetzt", "vergleich"] },
          { label: "Schrift/Gemeinschaft/Räume", keywords: ["schrift", "gemeinschaft", "ausbreitung", "räume"] }
        ]
      }
    ]
  },
  "modul-10": {
    title: "Inhaltssicherung Modul 11",
    questions: [
      {
        prompt: "Warum ist das Klischee vom 'dunklen Mittelalter' zu einfach?",
        placeholder: "Formuliere eine differenzierte Antwort.",
        sampleAnswer:
          "Das Klischee ist zu einfach, weil das Mittelalter harte Lebensbedingungen hatte, aber zugleich Städte, Bildung, Handwerk, religiöse Kultur und komplexe Herrschaftsformen hervorbrachte. Es war also widersprüchlich, nicht einfach nur dunkel.",
        criteria: [
          { label: "harte Lebensbedingungen", keywords: ["hart", "armut", "krankheit", "pest", "belastung"] },
          { label: "Leistungen oder Komplexität", keywords: ["städte", "bildung", "handwerk", "kultur", "herrschaft"] },
          { label: "differenziertes Urteil", keywords: ["zugleich", "widersprüchlich", "nicht einfach"] }
        ]
      },
      {
        prompt: "Warum beginnt das Frühmittelalter nicht mit einem völligen Zusammenbruch aller römischen Strukturen?",
        placeholder: "Arbeite mit Kontinuitäten, Byzanz, Islam und Frankenreich.",
        sampleAnswer:
          "Das Frühmittelalter beginnt nicht mit totalem Bruch, weil viele römische Traditionen weiterwirken. Byzanz bleibt stark, die islamische Welt wächst, und auch im Westen werden römische Verwaltungs- und Kirchenstrukturen teilweise übernommen. Das Mittelalter entsteht also aus Wandel und Fortleben zugleich.",
        criteria: [
          { label: "Kontinuitäten", keywords: ["kontinuitäten", "weiterwirken", "römisch"] },
          { label: "Byzanz oder Islam", keywords: ["byzanz", "islam"] },
          { label: "Franken oder Westen", keywords: ["franken", "westen", "frankenreich"] }
        ]
      },
      {
        prompt: "Warum waren Klöster für das Frühmittelalter mehr als nur religiöse Orte?",
        placeholder: "Arbeite mit Schrift, Bildung, Arbeit und Ordnung.",
        sampleAnswer:
          "Klöster waren nicht nur religiöse Orte, sondern Räume von Schrift, Bildung, Arbeit und Disziplin. Dort wurden Texte kopiert, Regeln eingeübt und wirtschaftliche Abläufe organisiert. Deshalb trugen Klöster wesentlich zur Ordnung des Frühmittelalters bei.",
        criteria: [
          { label: "Schrift oder Bildung", keywords: ["schrift", "bildung", "texte"] },
          { label: "Arbeit oder Ordnung", keywords: ["arbeit", "ordnung", "regel", "disziplin"] },
          { label: "Frühmittelalter", keywords: ["frühmittelalter", "kloster"] }
        ]
      },
      {
        prompt: "Erkläre Lehenswesen und Ministerialen. Wie wurde Herrschaft im Hochmittelalter dadurch organisiert?",
        placeholder: "Verbinde Lehen, Dienste, Adel und Bindungen.",
        sampleAnswer:
          "Im Lehenswesen geben Herrscher oder Adlige Land und Rechte gegen Treue, Dienste und militärische Unterstützung weiter. Ministerialen übernehmen als dienstgebundene Amtsträger wichtige Aufgaben in Verwaltung und Krieg. So wird Herrschaft über persönliche Bindungen organisiert und nicht nur über zentrale Ämter.",
        criteria: [
          { label: "Lehen oder Treue", keywords: ["lehen", "treue", "dienste"] },
          { label: "Ministerialen", keywords: ["ministerialen", "dienstgebunden", "amtsträger"] },
          { label: "Herrschaftsorganisation", keywords: ["herrschaft", "bindung", "adel", "verwaltung"] }
        ]
      },
      {
        prompt: "Was zeigt Alltagsgeschichte über das Mittelalter, das Ritterbilder oft verdecken?",
        placeholder: "Nenne mehrere Bereiche des täglichen Lebens.",
        sampleAnswer:
          "Alltagsgeschichte zeigt Wohnen, Kochen, Hygiene, Verteidigung, Kleidung und soziale Unterschiede. Dadurch wird das Mittelalter als konkrete Lebenswelt sichtbar und nicht nur als Bühne für Rittergeschichten.",
        criteria: [
          { label: "konkrete Alltagsbereiche", keywords: ["wohnen", "kochen", "hygiene", "verteidigung", "kleidung"] },
          { label: "soziale Unterschiede oder Lebenswelt", keywords: ["unterschiede", "lebenswelt", "alltag"] }
        ]
      },
      {
        prompt: "Warum entstand die Eidgenossenschaft aus spätmittelalterlichen Bündnissen und nicht aus einem plötzlichen Freiheitsmoment?",
        placeholder: "Arbeite mit Reichsunmittelbarkeit, Gotthard und Landfriedensbündnissen.",
        sampleAnswer:
          "Die Eidgenossenschaft entstand aus konkreten Macht- und Verkehrsinteressen des Spätmittelalters. Reichsunmittelbarkeit, der Gotthardpass und Landfriedensbündnisse schufen ein Umfeld, in dem sich Orte gemeinsam absichern wollten. Der Bund wächst also aus mittelalterlicher Politik und nicht aus einer zeitlosen Legende.",
        criteria: [
          { label: "Reichsunmittelbarkeit", keywords: ["reichsunmittelbarkeit", "uri", "schwyz"] },
          { label: "Gotthard oder Verkehr", keywords: ["gotthard", "pass", "verkehr"] },
          { label: "Bündnisse oder Landfriede", keywords: ["bündnisse", "landfrieden", "bund"] }
        ]
      }
    ]
  },
  "modul-11": {
    title: "Inhaltssicherung Modul 12",
    questions: [
      {
        prompt: "Warum müssen Berichte über den Kinderkreuzzug von 1212 kritisch geprüft werden, statt sie einfach zu glauben?",
        placeholder: "Erkläre, was Historikerinnen und Historiker prüfen müssen.",
        sampleAnswer:
          "Der Kinderkreuzzug ist ein guter Fall für Quellenkritik, weil die Überlieferung spektakulär klingt, aber erst geprüft werden muss. Historikerinnen und Historiker fragen nach Entstehungszeit, Absicht und Zuverlässigkeit der Texte.",
        criteria: [
          { label: "spektakuläre Überlieferung", keywords: ["spektakulär", "überlieferung", "legende"] },
          { label: "Quellen prüfen", keywords: ["quelle", "prüfen", "entstehungszeit"] },
          { label: "Zuverlässigkeit oder Absicht", keywords: ["zuverlässig", "absicht", "perspektive"] }
        ]
      },
      {
        prompt: "Warum veränderten Landesausbau und Dreifelderwirtschaft das hochmittelalterliche Dorf grundlegend?",
        placeholder: "Arbeite mit Rodungen, Erträgen und dörflicher Ordnung.",
        sampleAnswer:
          "Landesausbau und Dreifelderwirtschaft steigerten Erträge und machten mehr Menschenversorgung möglich. Rodungen, neue Felder und geregelte Fruchtfolgen veränderten damit Arbeit, Siedlungsdichte und dörfliche Zusammenarbeit grundlegend.",
        criteria: [
          { label: "Rodungen oder Ausbau", keywords: ["rodungen", "landesausbau", "binnenkolonisation"] },
          { label: "Dreifelderwirtschaft", keywords: ["dreifelderwirtschaft", "fruchtfolge"] },
          { label: "höhere Erträge oder Dorfordnung", keywords: ["erträge", "versorgung", "dorf", "ordnung"] }
        ]
      },
      {
        prompt: "Warum sind Stadtrecht, Rat und Zünfte Schlüsselbegriffe für die mittelalterliche Stadt?",
        placeholder: "Erkläre mit Autonomie, Handwerk und politischer Ordnung.",
        sampleAnswer:
          "Stadtrecht gibt der Stadt eigene Regeln, der Rat organisiert ihre politische Führung, und Zünfte ordnen Handwerk und wirtschaftliche Interessen. Zusammen erklären diese Begriffe, warum Städte im Mittelalter eigenständige politische und wirtschaftliche Räume werden.",
        criteria: [
          { label: "Stadtrecht", keywords: ["stadtrecht", "regeln", "autonomie"] },
          { label: "Rat", keywords: ["rat", "führung", "kommune"] },
          { label: "Zünfte oder Handwerk", keywords: ["zünfte", "handwerk", "gesellen"] }
        ]
      },
      {
        prompt: "Warum war das Mittelalter stärker vernetzt, als das Klischee von der abgeschlossenen Burg vermuten lässt?",
        placeholder: "Arbeite mit Städten, Märkten oder Pilgerwegen.",
        sampleAnswer:
          "Das Mittelalter war vernetzter, weil Städte, Märkte, Handelswege und Pilgerbewegungen Menschen miteinander verbanden. Waren, Ideen und religiöse Vorstellungen bewegten sich über große Räume.",
        criteria: [
          { label: "Städte oder Märkte", keywords: ["städte", "märkte", "handel"] },
          { label: "Wege oder Bewegung", keywords: ["wege", "pilger", "bewegung", "reisen"] },
          { label: "Austausch", keywords: ["waren", "ideen", "vorstellungen", "verbunden"] }
        ]
      },
      {
        prompt: "Wie veränderten Pest und Klimaverschlechterung das Spätmittelalter?",
        placeholder: "Arbeite mit Hunger, Bevölkerungsverlusten und sozialen Folgen.",
        sampleAnswer:
          "Pest und Klimaverschlechterung führten zu Hunger, Bevölkerungsverlusten und tiefen sozialen Spannungen. Wüstungen, Arbeitskräftemangel, Quarantäne, Geisslerbewegungen und Pogrome zeigen, wie stark diese Krisen Dorf und Stadt veränderten.",
        criteria: [
          { label: "Pest oder Klima", keywords: ["pest", "klima", "kälte", "hungersnot"] },
          { label: "Bevölkerungsverluste", keywords: ["bevölkerungsverlust", "wüstungen", "sterben"] },
          { label: "soziale Folgen", keywords: ["quarantäne", "pogrome", "geissler", "arbeitskräftemangel"] }
        ]
      },
      {
        prompt: "Wie lässt sich die Überlieferung zum Kinderkreuzzug von 1212 prüfen? Antworte mit Nikolaus, Stephan und der Frage nach der Zuverlässigkeit der Chroniken.",
        placeholder: "Arbeite mit den Namen, dem Jahr 1212 und der Prüfung von Chroniken.",
        sampleAnswer:
          "Der Film nimmt die Überlieferung um Nikolaus aus Köln und Stephan aus Cloyes ernst, aber nicht unkritisch. Er fragt, was Chroniken tatsächlich belegen, wann sie entstanden und wie zuverlässig sie sind. So wird aus einer Legende ein Fall für Quellenkritik.",
        criteria: [
          { label: "Nikolaus oder Stephan", keywords: ["nikolaus", "stephan", "cologne", "cloyes"] },
          { label: "1212 oder Kreuzzugsüberlieferung", keywords: ["1212", "kinderkreuzzug", "überlieferung"] },
          { label: "Chroniken prüfen", keywords: ["chroniken", "zuverlässigkeit", "entstehungszeit"] }
        ]
      }
    ]
  },
  "modul-12": {
    title: "Inhaltssicherung Modul 13",
    questions: [
      {
        prompt: "Warum ist '1491' ein wichtiger Perspektivwechsel für die ganze Einheit? Erkläre, was dadurch am Geschichtsbild anders wird und nenne konkrete Leistungen indigener Gesellschaften.",
        placeholder: "Erkläre den Perspektivwechsel mit konkreten Beispielen.",
        sampleAnswer:
          "1491 ist ein wichtiger Perspektivwechsel, weil dadurch deutlich wird, dass Geschichte vor 1500 nicht nur europäische Geschichte ist. Amerikas Gesellschaften hatten schon lange vor Kolumbus Landwirtschaft, Kunst, Sprachen und politische Ordnung.",
        criteria: [
          { label: "Perspektivwechsel", keywords: ["perspektivwechsel", "anders", "geschichtsbild"] },
          { label: "nicht nur Europa", keywords: ["nicht nur europa", "europaisch", "amerika"] },
          { label: "frühere Gesellschaften", keywords: ["landwirtschaft", "kunst", "sprachen", "ordnung", "indigen"] }
        ]
      },
      {
        prompt: "Formuliere eine Langzeitlinie von der Frühgeschichte bis kurz vor 1500.",
        placeholder: "Verbinde mindestens drei große Entwicklungsschritte.",
        sampleAnswer:
          "Eine Langzeitlinie führt von Sprache und Kooperation über Sesshaftigkeit und Vorräte zu Schrift, Staat, Handel und Religion. So wird sichtbar, wie sich menschliche Ordnungen immer weiter verdichten und größere Räume verbinden.",
        criteria: [
          { label: "früher Schritt", keywords: ["sprache", "kooperation", "kognitiv"] },
          { label: "mittlerer Schritt", keywords: ["sesshaftigkeit", "vorrate", "landwirtschaft"] },
          { label: "späterer Schritt", keywords: ["schrift", "staat", "handel", "religion", "imperium"] }
        ]
      },
      {
        prompt: "Verbinde Amerika vor 1492 mit der Idee des Anthropozäns: Warum muss Geschichte zugleich global gedacht und nach ihren Langzeitfolgen beurteilt werden?",
        placeholder: "Arbeite mit globaler Perspektive und Langzeitfolgen.",
        sampleAnswer:
          "1491 zeigt, dass Geschichte vor 1500 global ist und nicht bei Europa endet. Das Anthropozän zeigt, dass frühe Entwicklungen lange Folgen haben und bis in Umwelt und Erdgeschichte wirken. Zusammen ergeben beide Seiten einen Schluss, der zugleich global und langfristig denkt.",
        criteria: [
          { label: "globale Perspektive", keywords: ["global", "nicht nur europa", "1491", "amerika"] },
          { label: "Langzeitfolgen", keywords: ["langzeit", "folgen", "anthropozan", "umwelt"] },
          { label: "Bedeutung für den Kursabschluss", keywords: ["schluss", "abschluss", "zusammen", "verbinden"] }
        ]
      }
    ]
  }
};

const additionalHarariDetails = {
  [makeSourceKey("modul-1", "Harari-PDF · S. 39")]: {
    badge: "S. 39 · Mythen tragen Großgruppen",
    locator: "Harari-PDF, S. 39",
    pdfPage: 39,
    pdfSearch: "magische Grenze",
    quote: "„magische Grenze von 150“",
    thesis:
      "Harari erklärt, dass persönliche Bekanntschaft nur kleine Gruppen stabil trägt. Größere Gemeinschaften brauchen gemeinsame Geschichten, die auch Fremde an dieselbe Ordnung binden.",
    passage:
      "Die Passage arbeitet mit der Grenze von ungefähr 150 Menschen. Kleine Gruppen können sich noch über Nähe, Rang und persönliches Wissen organisieren. Städte, Reiche und Kirchen funktionieren aber anders: Dort kooperieren Fremde, weil sie dieselben Mythen, Gesetze, Symbole und Zugehörigkeiten anerkennen. Für Modul 1 ist das zentral, weil Geschichte im engeren Sinn genau an dieser Schwelle beginnt: Menschen bauen Ordnungen, die weit über Familie und unmittelbare Umgebung hinausreichen."
  },
  [makeSourceKey("modul-1", "Harari-PDF · S. 151")]: {
    badge: "S. 151 · Gesellschaft wird gelernt",
    locator: "Harari-PDF, S. 151",
    pdfPage: 151,
    pdfSearch: "ohne Fußballgen",
    quote: "„ohne Fußballgen“",
    thesis:
      "Menschliche Ordnung steckt nicht in den Genen. Regeln, Bräuche und Verfahren müssen gelernt und von Generation zu Generation weitergegeben werden.",
    passage:
      "Harari vergleicht Gesellschaft mit dem Fußballspiel. Menschen kommen nicht mit fertigen Spielregeln zur Welt, sondern müssen sie lernen. Genau deshalb ist Kultur so wichtig: Gesetze, Bräuche, Rituale und Verfahren werden nicht vererbt, sondern bewusst eingeübt. Für den Einstieg des Kurses ist das entscheidend, weil Geschichte hier nicht als Naturprozess erscheint, sondern als gelernte und weitergegebene Weltordnung."
  },
  [makeSourceKey("modul-2", "Harari-PDF · S. 31")]: {
    badge: "S. 31 · Aufbruch der Sapiens",
    locator: "Harari-PDF, S. 31",
    pdfPage: 31,
    pdfSearch: "bis nach Australien",
    quote: "„bis nach Australien“",
    thesis:
      "Die Seite zeigt den Sprung von frühen, noch begrenzten Sapiens zu Gruppen, die Boote, Nadeln, Schmuck, Kunst und weite Wanderungen hervorbringen.",
    passage:
      "Harari beschreibt hier einen neuen Typ Mensch: Sapiens überqueren offenes Meer, erreichen Australien, nähen mit Nadeln warme Kleidung und hinterlassen erste Kunst- und Religionsspuren. Für Modul 2 ist die Passage wichtig, weil Ausbreitung hier nicht bloß körperliche Wanderung bedeutet, sondern eine Verbindung aus Technik, Anpassung und sozialem Lernen."
  },
  [makeSourceKey("modul-2", "Harari-PDF · S. 32")]: {
    badge: "S. 32 · Löwenmensch und Vorstellungskraft",
    locator: "Harari-PDF, S. 32",
    pdfPage: 32,
    pdfSearch: "Löwenmenschen",
    quote: "„Löwenmenschen“",
    thesis:
      "Die Figur des Löwenmenschen steht für eine neue Fähigkeit: Menschen stellen sich Wesen vor, die in der Natur gar nicht vorkommen.",
    passage:
      "Mit der Elfenbeinfigur des Löwenmenschen zeigt Harari, dass sich Menschen nicht nur an ihre Umwelt anpassen, sondern gedanklich neue Wesen und Bedeutungen erzeugen. Diese Seite gehört deshalb noch in Modul 2: Frühgeschichte wird hier bereits als Verbindung von Migration, Technik und wachsender Vorstellungskraft sichtbar."
  },
  [makeSourceKey("modul-3", "Harari-PDF · S. 35")]: {
    badge: "S. 35 · Klatsch als Sozialtechnik",
    locator: "Harari-PDF, S. 35",
    pdfPage: 35,
    pdfSearch: "über andere zu reden",
    quote: "„über andere zu reden“",
    thesis:
      "Harari nimmt den scheinbar banalen Klatsch ernst: Verlässliche Informationen über andere Menschen vergrößern Gruppen und machen engere Zusammenarbeit erst praktikabel.",
    passage:
      "Die Seite zeigt, dass Sprache nicht nur schöne Erzählung, sondern harte Sozialtechnik ist. Wer über Zuverlässigkeit, Beziehungen und Verhalten anderer sprechen kann, organisiert Vertrauen und Misstrauen viel genauer. Für das Modul über die kognitive Revolution ist das wichtig, weil Großgruppenkooperation nicht mit abstrakten Ideen beginnt, sondern schon mit sozialem Informationsaustausch."
  },
  [makeSourceKey("modul-3", "Harari-PDF · S. 36")]: {
    badge: "S. 36 · Fiktive Sprache",
    locator: "Harari-PDF, S. 36",
    pdfPage: 36,
    pdfSearch: "fiktive Sprache",
    quote: "„fiktive Sprache“",
    thesis:
      "Menschen können über Dinge sprechen, die es nicht gibt. Gerade diese Fähigkeit macht Mythen, Götter, Stämme, Gesetze und Nationen historisch wirksam.",
    passage:
      "Harari nennt menschliche Sprache hier ausdrücklich fiktiv, weil sie erfundene Dinge transportieren kann. Genau darin liegt ihre historische Kraft: Gruppen glauben gemeinsam an Schutzgeister, Schöpfungserzählungen, Gesetze oder politische Gemeinschaften. Das Modul braucht diese Passage, weil von hier aus der Weg zu Geld, Reichsideen und Religionen offen wird."
  },
  [makeSourceKey("modul-4", "Harari-PDF · S. 101")]: {
    badge: "S. 101 · Die längste Normalform",
    locator: "Harari-PDF, S. 101",
    pdfPage: 101,
    pdfSearch: "wir denken und fühlen",
    quote: "„wir denken und fühlen“",
    thesis:
      "Harari erinnert daran, dass Menschen bis heute psychisch stark von Jäger-und-Sammler-Vergangenheiten geprägt sind, auch wenn sie sich längst wie Bauern ernähren.",
    passage:
      "Die Seite bündelt zwei wichtige Gedanken: Die landwirtschaftliche Revolution setzte weltweit mehrfach ein, und trotzdem denken und fühlen wir noch stark wie Jäger und Sammler. Für Modul 4 ist das wertvoll, weil mobile Lebensformen so nicht als exotische Ausnahme, sondern als lange prägende Normalform der Menschheit erscheinen."
  },
  [makeSourceKey("modul-4", "Harari-PDF · S. 108")]: {
    badge: "S. 108 · Kinder, Mobilität und Lager",
    locator: "Harari-PDF, S. 108",
    pdfPage: 108,
    pdfSearch: "alle drei oder vier Jahre",
    quote: "„alle drei oder vier Jahre“",
    thesis:
      "Harari verbindet Geburtenrhythmus, Stillen, Bewegung und Umweltveränderung mit der Logik mobiler Lebensweisen.",
    passage:
      "Die Passage erklärt, warum mobile Gesellschaften Kinder nicht in kurzen Abständen versorgen konnten und wie sich dies auf Gruppengröße und Bewegung auswirkte. Zugleich beschreibt Harari, wie Klimawandel, verlorene Körner und Brandrodung feste Lager begünstigten. Für Modul 4 ist das wichtig, weil Mobilität hier als komplexe Lebensorganisation und nicht als bloßer Zustand des Unterwegsseins erscheint."
  },
  [makeSourceKey("modul-5", "Harari-PDF · S. 103")]: {
    badge: "S. 103 · Härter als erwartet",
    locator: "Harari-PDF, S. 103",
    pdfPage: 103,
    pdfSearch: "Ammenmärchen",
    quote: "„Das ist jedoch ein Ammenmärchen“",
    thesis:
      "Die populäre Fortschrittserzählung von klugen Menschen, die bequem Bauern wurden, wird hier ausdrücklich zurückgewiesen.",
    passage:
      "Harari nennt die Vorstellung vom angenehmen Bauernleben ein Ammenmärchen. Jäger und Sammler lebten oft vielfältiger, arbeiteten weniger und litten unter weniger Krankheiten als frühe Bauern. Für Modul 5 verschärft diese Seite die Urteilsfrage: Sesshaftigkeit brachte mehr Nahrung insgesamt, aber nicht automatisch ein besseres Leben für den Einzelnen."
  },
  [makeSourceKey("modul-5", "Harari-PDF · S. 105")]: {
    badge: "S. 105 · Der Weizen domestiziert den Menschen",
    locator: "Harari-PDF, S. 105",
    pdfPage: 105,
    pdfSearch: "der Weizen hat uns domestiziert",
    quote: "„der Weizen hat uns domestiziert“",
    thesis:
      "Mit der Umkehrung von Mensch und Pflanze macht Harari klar, wie stark Landwirtschaft den Menschen an Ort, Arbeit und Risiko bindet.",
    passage:
      "Die Seite formuliert zugespitzt, dass nicht der Mensch den Weizen, sondern der Weizen den Menschen domestiziert habe. Gemeint ist: Felder, Arbeit, Ernährung und Siedlungsform werden nun stark auf wenige Pflanzenarten ausgerichtet. Für das Modul ist diese Passage wichtig, weil sie Sesshaftigkeit als neue Abhängigkeit sichtbar macht, nicht nur als technische Verbesserung."
  },
  [makeSourceKey("modul-6", "Harari-PDF · S. 157")]: {
    badge: "S. 157 · Die ersten Texte sind Rechnungen",
    locator: "Harari-PDF, S. 157",
    pdfPage: 157,
    pdfSearch: "29.086 Maß",
    quote: "„29.086 Maß. Gerste.“",
    thesis:
      "Die ältesten Schriftzeugnisse sind keine großen Geschichten, sondern Gerstenmengen, Steuerlisten, Schuldscheine und Besitzurkunden.",
    passage:
      "Harari zeigt hier, wie unerquicklich alltäglich die ersten Texte wirken: Gerste, Monate, Namen, Zahlen. Genau darin liegt aber ihre historische Bedeutung. Schrift entsteht zunächst, um wirtschaftliche und administrative Vorgänge festzuhalten. Das ist für Modul 6 zentral, weil frühe Staatlichkeit so über Listen und Bürokratie statt über Monumente verständlich wird."
  },
  [makeSourceKey("modul-6", "Harari-PDF · S. 160")]: {
    badge: "S. 160 · Wunder der Bürokratie",
    locator: "Harari-PDF, S. 160",
    pdfPage: 160,
    pdfSearch: "Wunder der Bürokratie",
    quote: "„Wunder der Bürokratie“",
    thesis:
      "Aus partieller Verwaltungsschrift entwickeln sich vollständige Schriftsysteme, mit denen Edikte, Briefe, Literatur und komplexe Herrschaft geregelt werden können.",
    passage:
      "Harari beschreibt hier den Ausbau von der Zahlen- und Listenverwaltung zur Keilschrift und zu Hieroglyphen. Für das Hochkultur-Modul ist das wichtig, weil sich daran zeigen lässt, wie stark Bürokratie, Schrift und Staatlichkeit miteinander verflochten sind."
  },
  [makeSourceKey("modul-7", "Harari-PDF · S. 130")]: {
    badge: "S. 130 · Überschuss reicht nicht",
    locator: "Harari-PDF, S. 130",
    pdfPage: 130,
    pdfSearch: "brechen Streitigkeiten aus",
    quote: "„brechen Streitigkeiten aus“",
    thesis:
      "Nahrungsüberschuss und Transportmittel erzeugen noch kein Reich. Erst Einigung über Land, Wasser, Streitfälle und Krieg macht große politische Räume dauerhaft regierbar.",
    passage:
      "Die Seite erklärt, warum Städte und Imperien mehr brauchen als volle Speicher. Menschen müssen Regeln akzeptieren, Konflikte ordnen und Ressourcen verteilen. Für Modul 7 ist das wichtig, weil Imperium so nicht nur als Militär, sondern als Lösung politischer Ordnungsprobleme erscheint."
  },
  [makeSourceKey("modul-7", "Harari-PDF · S. 133")]: {
    badge: "S. 133 · Hammurabi als Ordnungsmythos",
    locator: "Harari-PDF, S. 133",
    pdfPage: 133,
    pdfSearch: "Kodex Hammurabi",
    quote: "„Kodex Hammurabi“",
    thesis:
      "Harari nutzt Hammurabi, um zu zeigen, dass große Reiche nicht nur Gewalt, sondern auch gemeinsame Rechtsvorstellungen und Erzählungen über Gerechtigkeit benötigen.",
    passage:
      "Mit dem babylonischen Kodex wird sichtbar, dass Herrschaft Ordnungstexte braucht. Gesetze legen nicht nur Urteile fest, sondern definieren Hierarchien, Werte und eine Vorstellung von Gerechtigkeit. Das ergänzt Modul 7, weil Imperium hier auch als Rechts- und Sinnordnung lesbar wird."
  },
  [makeSourceKey("modul-8", "Harari-PDF · S. 215")]: {
    badge: "S. 215 · Die Grenzen des Tauschhandels",
    locator: "Harari-PDF, S. 215",
    pdfPage: 215,
    pdfSearch: "4950 verschiedene Wechselkurse",
    quote: "„4950 verschiedene Wechselkurse“",
    thesis:
      "Harari zerlegt den Tauschhandel in praktische Probleme: Preise, Vergleichbarkeit und der Zufall, ob der andere gerade genau das will, was man selbst anbietet.",
    passage:
      "Die Seite rechnet vor, warum Tausch in komplexeren Gesellschaften schnell unübersichtlich wird. Wer viele Waren und Spezialisten verbinden will, braucht ein allgemeines Vergleichs- und Zahlungsmittel. Für Modul 8 erklärt diese Passage, warum Geld nicht Luxus, sondern eine historische Vereinfachung wachsender Märkte ist."
  },
  [makeSourceKey("modul-8", "Harari-PDF · S. 220")]: {
    badge: "S. 220 · Universelles Vertrauen",
    locator: "Harari-PDF, S. 220",
    pdfPage: 220,
    pdfSearch: "universellste und effizienteste System",
    quote: "„das universellste ... System des Vertrauens“",
    thesis:
      "Geld funktioniert, weil Menschen daran glauben, dass andere es ebenfalls annehmen. Dieses Vertrauen wird politisch, gesellschaftlich und religiös gestützt.",
    passage:
      "Harari nennt Geld das universellste System gegenseitigen Vertrauens. Könige, Priester, Steuern und soziale Erwartungen stabilisieren seinen Wert. Für Modul 8 ist die Seite deshalb zentral: Münzen sind nur die sichtbare Oberfläche einer tieferen Vertrauensordnung."
  },
  [makeSourceKey("modul-9", "Harari-PDF · S. 252")]: {
    badge: "S. 252 · Religion als Normensystem",
    locator: "Harari-PDF, S. 252",
    pdfPage: 252,
    pdfSearch: "System von menschlichen Normen und Werten",
    quote: "„System von menschlichen Normen und Werten“",
    thesis:
      "Harari definiert Religion nicht bloß als privaten Glauben, sondern als umfassendes Normen- und Wertesystem, das sich auf eine übermenschliche Ordnung stützt.",
    passage:
      "Die Seite erklärt, warum Religion so wirksam ist: Sie legitimiert zerbrechliche menschliche Ordnungen durch Verweis auf eine höhere Autorität. Für Modul 9 ist das wichtig, weil damit klar wird, warum Religion Gesellschaft, Alltag und Herrschaft gleichermaßen strukturieren kann."
  },
  [makeSourceKey("modul-9", "Harari-PDF · S. 253")]: {
    badge: "S. 253 · Universalreligionen",
    locator: "Harari-PDF, S. 253",
    pdfPage: 253,
    pdfSearch: "missionierende Universalreligionen",
    quote: "„missionierende Universalreligionen“",
    thesis:
      "Große Weltreligionen wollen nicht nur lokal gelten, sondern ihren Glauben an alle Menschen weitergeben. Genau dadurch tragen sie zur Vereinigung größerer Räume bei.",
    passage:
      "Harari macht hier deutlich, dass die meisten Religionen ursprünglich lokal begrenzt waren. Missionierende Universalreligionen wie Christentum und Islam verändern das. Für Modul 9 ist diese Seite zentral, weil sie Religion als expansiven historischen Ordnungsraum erklärt."
  },
  [makeSourceKey("modul-10", "Harari-PDF · S. 261")]: {
    badge: "S. 261 · Christentum und Islam",
    locator: "Harari-PDF, S. 261",
    pdfPage: 261,
    pdfSearch: "Paulus von Tarsus",
    quote: "„Paulus von Tarsus“",
    thesis:
      "Harari beschreibt, wie aus kleinen Sekten große missionierende Weltreligionen werden, die ganze Reiche prägen und den mittelalterlichen Raum ordnen.",
    passage:
      "Die Seite verfolgt den Weg vom frühen Christentum zu seiner Ausbreitung im Römischen Reich und schlägt dann den Bogen zum Islam. Für Modul 10 ist das wichtig, weil Herrschaft, Kirche und Gesellschaft im Mittelalter ohne diese großen religiösen Ausbreitungsprozesse nicht verstanden werden können."
  },
  [makeSourceKey("modul-10", "Harari-PDF · S. 263")]: {
    badge: "S. 263 · Monotheistische Welt vor 1500",
    locator: "Harari-PDF, S. 263",
    pdfPage: 263,
    pdfSearch: "Zu Beginn des 16. Jahrhunderts",
    quote: "„Zu Beginn des 16. Jahrhunderts“",
    thesis:
      "Harari bilanziert, dass monotheistische Religionen bis an die Schwelle der Neuzeit weite Teile Afrikas und Eurasiens dominieren und große politische Räume legitimieren.",
    passage:
      "Die Passage verortet die religiöse Ordnung direkt am Ende des Kurszeitraums. Um 1500 stehen große Teile der bekannten Welt auf monotheistischen Füßen. Für Modul 10 macht das sichtbar, wie tief Glaubensordnung, Herrschaft und Gesellschaft bis ins Spätmittelalter hinein verbunden sind."
  },
  [makeSourceKey("modul-11", "Harari-PDF · S. 214")]: {
    badge: "S. 214 · Städte und Spezialisten",
    locator: "Harari-PDF, S. 214",
    pdfPage: 214,
    pdfSearch: "Mit dem Aufstieg von Städten",
    quote: "„Mit dem Aufstieg von Städten“",
    thesis:
      "Harari zeigt, wie mit Städten und Reichen neue Spezialisierungen entstehen: Schuster, Ärzte, Priester, Soldaten und Anwälte leben nun von ihrem Beruf.",
    passage:
      "Die Seite verknüpft Stadtentwicklung mit Spezialisierung und Marktverdichtung. Für Modul 11 ist das wichtig, weil mittelalterliche Städte hier als Räume von Arbeitsteilung, Markt und sozialer Differenz sichtbar werden."
  },
  [makeSourceKey("modul-11", "Harari-PDF · S. 219")]: {
    badge: "S. 219 · Märkte brauchen transportierbaren Wert",
    locator: "Harari-PDF, S. 219",
    pdfPage: 219,
    pdfSearch: "entscheidende Voraussetzung",
    quote: "„entscheidende Voraussetzung“",
    thesis:
      "Geld macht Vermögen transportabel und wird dadurch zur Voraussetzung komplexer Handelsnetze und dynamischer Märkte.",
    passage:
      "Harari beschreibt hier sehr anschaulich, warum Häuser, Reisfelder oder schwere Güter schlecht beweglich sind und Geld deshalb den Markt revolutioniert. Für Modul 11 stärkt die Passage den Blick auf Städte, Fernhandel und wirtschaftlichen Wandel im Hoch- und Spätmittelalter."
  },
  [makeSourceKey("modul-12", "Harari-PDF · S. 148")]: {
    badge: "S. 148 · Kein Ausweg aus Ordnungen",
    locator: "Harari-PDF, S. 148",
    pdfPage: 148,
    pdfSearch: "kein Ausweg aus der erfundenen Ordnung",
    quote: "„kein Ausweg aus der erfundenen Ordnung“",
    thesis:
      "Menschen lösen eine Ordnung nicht einfach auf, um in reine Freiheit zu gelangen. Sie ersetzen sie meist durch eine andere, größere oder anders gebaute Ordnung.",
    passage:
      "Harari formuliert hier einen harten Bilanzsatz: Wer aus einer erfundenen Ordnung ausbricht, landet oft in einer neuen. Für das Abschlussmodul ist das stark, weil es alle Themen zusammenbindet: Sprache, Staat, Geld, Religion und Gesellschaft schaffen immer wieder neue Regelräume."
  },
  [makeSourceKey("modul-12", "Harari-PDF · S. 263")]: {
    badge: "S. 263 · Welt bis zur Schwelle der Neuzeit",
    locator: "Harari-PDF, S. 263",
    pdfPage: 263,
    pdfSearch: "Zu Beginn des 16. Jahrhunderts",
    quote: "„Zu Beginn des 16. Jahrhunderts“",
    thesis:
      "Die Seite markiert den Zustand der Welt kurz vor der Neuzeit: weite Räume Afrikas und Eurasiens sind bereits durch große monotheistische und politische Ordnungen geprägt.",
    passage:
      "Für den Kursabschluss ist diese Stelle wertvoll, weil sie direkt an die Zeitgrenze heranführt. Harari zeigt, wie weit die langfristigen Vereinigungsprozesse bis um 1500 bereits reichen. So erscheint die Schwelle zur Neuzeit als Ergebnis langer Vorgeschichten und nicht als plötzlicher Neubeginn."
  }
};

const additionalHarariSources = {
  "modul-1": [
    {
      title: "Harari-PDF · S. 39",
      meta: "Buchstelle · Mythen und Großgruppen",
      extracted: "Große Gesellschaften brauchen gemeinsame Geschichten; sie können nicht nur auf Nähe und persönliche Bekanntschaft gebaut werden."
    },
    {
      title: "Harari-PDF · S. 151",
      meta: "Buchstelle · gelernte Ordnung",
      extracted: "Gesellschaftliche Regeln und Verfahren werden nicht vererbt, sondern gelernt und weitergegeben."
    }
  ],
  "modul-2": [
    {
      title: "Harari-PDF · S. 31",
      meta: "Buchstelle · Technik und Aufbruch",
      extracted: "Boote, Nadeln, Kunst und weite Migration markieren neue Fähigkeiten des Homo sapiens."
    },
    {
      title: "Harari-PDF · S. 32",
      meta: "Buchstelle · Löwenmensch",
      extracted: "Der Löwenmensch verweist auf frühe Vorstellungskraft, Kunst und Religion."
    }
  ],
  "modul-3": [
    {
      title: "Harari-PDF · S. 35",
      meta: "Buchstelle · soziale Informationen",
      extracted: "Klatsch und Wissen über andere Menschen erweitern Kooperation in größeren Gruppen."
    },
    {
      title: "Harari-PDF · S. 36",
      meta: "Buchstelle · fiktive Sprache",
      extracted: "Menschen sprechen über Dinge, die es nicht gibt, und schaffen dadurch Mythen und Ordnungen."
    }
  ],
  "modul-4": [
    {
      title: "Harari-PDF · S. 101",
      meta: "Buchstelle · Normalform der Menschheit",
      extracted: "Wir denken und fühlen lange noch wie Jäger und Sammler, obwohl wir später Bauern werden."
    },
    {
      title: "Harari-PDF · S. 108",
      meta: "Buchstelle · Mobilität und Lebensweise",
      extracted: "Geburtenrhythmus, Bewegung und Umweltanpassung gehören zur Logik mobiler Gesellschaften."
    }
  ],
  "modul-5": [
    {
      title: "Harari-PDF · S. 103",
      meta: "Buchstelle · Ammenmärchen Fortschritt",
      extracted: "Frühe Bauern lebten nicht automatisch besser als Jäger und Sammler."
    },
    {
      title: "Harari-PDF · S. 105",
      meta: "Buchstelle · Weizen domestiziert Menschen",
      extracted: "Landwirtschaft bindet Menschen an Pflanzen, Felder, Arbeit und Risiko."
    }
  ],
  "modul-6": [
    {
      title: "Harari-PDF · S. 157",
      meta: "Buchstelle · erste Texte",
      extracted: "Die ältesten Texte erfassen Gerste, Steuerlisten und Besitz statt Literatur."
    },
    {
      title: "Harari-PDF · S. 160",
      meta: "Buchstelle · Bürokratie",
      extracted: "Aus Verwaltungsschrift entstehen vollere Schriftsysteme und neue Herrschaftsmöglichkeiten."
    }
  ],
  "modul-7": [
    {
      title: "Harari-PDF · S. 130",
      meta: "Buchstelle · Ordnung für große Räume",
      extracted: "Überschüsse allein schaffen keine Reiche; Konflikte und Verteilung müssen geregelt werden."
    },
    {
      title: "Harari-PDF · S. 133",
      meta: "Buchstelle · Hammurabi",
      extracted: "Reiche stabilisieren sich durch Kodizes, Gerechtigkeitsvorstellungen und gemeinsame Ordnungstexte."
    }
  ],
  "modul-8": [
    {
      title: "Harari-PDF · S. 215",
      meta: "Buchstelle · Tauschhandel",
      extracted: "Tauschhandel scheitert an Vergleichbarkeit und an zu vielen möglichen Wechselkursen."
    },
    {
      title: "Harari-PDF · S. 220",
      meta: "Buchstelle · Vertrauen und Geld",
      extracted: "Geld ist eine politisch und gesellschaftlich gestützte Vertrauensordnung."
    }
  ],
  "modul-9": [
    {
      title: "Harari-PDF · S. 252",
      meta: "Buchstelle · Religion definiert",
      extracted: "Religion stützt Normen und Werte auf eine übermenschliche Ordnung."
    },
    {
      title: "Harari-PDF · S. 253",
      meta: "Buchstelle · Universalreligionen",
      extracted: "Missionierende Weltreligionen vereinigen große Räume und viele Menschen."
    }
  ],
  "modul-10": [
    {
      title: "Harari-PDF · S. 261",
      meta: "Buchstelle · Christentum und Islam",
      extracted: "Kleine religiöse Gruppen werden zu weltgeschichtlichen Ordnungsräumen."
    },
    {
      title: "Harari-PDF · S. 263",
      meta: "Buchstelle · religiöse Welt um 1500",
      extracted: "Bis um 1500 prägen monotheistische Religionen weite Teile Afrikas und Eurasiens."
    }
  ],
  "modul-11": [
    {
      title: "Harari-PDF · S. 214",
      meta: "Buchstelle · Städte und Spezialisten",
      extracted: "Mit Städten und Reichen entstehen Märkte, Berufe und neue urbane Arbeitsteilung."
    },
    {
      title: "Harari-PDF · S. 219",
      meta: "Buchstelle · transportierbarer Reichtum",
      extracted: "Geld macht Vermögen beweglich und ermöglicht dynamische Märkte."
    }
  ],
  "modul-12": [
    {
      title: "Harari-PDF · S. 148",
      meta: "Buchstelle · Ordnungen ersetzen Ordnungen",
      extracted: "Menschen verlassen eine Ordnung selten in die Freiheit, sondern wechseln meist in eine andere."
    },
    {
      title: "Harari-PDF · S. 263",
      meta: "Buchstelle · Welt kurz vor 1500",
      extracted: "An der Schwelle der Neuzeit dominieren bereits große religiöse und politische Ordnungsräume."
    }
  ]
};

const additionalHarariChecks = {
  "modul-1": [
    {
      prompt: "Warum brauchen große Gesellschaften gemeinsame Geschichten und gelernte Regeln? Warum reicht persönliche Bekanntschaft dafür nicht aus?",
      placeholder: "Verbinde Großgruppen, Mythen, Regeln und Weitergabe.",
      sampleAnswer:
        "S. 39 zeigt, dass persönliche Bekanntschaft nur kleine Gruppen trägt, während größere Gemeinschaften gemeinsame Geschichten brauchen. S. 151 ergänzt, dass diese Ordnungen nicht in den Genen liegen, sondern gelernt und weitergegeben werden. Große Gesellschaften leben daher von Symbolen, Regeln und Institutionen, nicht von bloßer Nähe.",
      criteria: [
        { label: "Großgruppen statt bloßer Nähe", keywords: ["große gesellschaften", "fremde", "nicht nur bekanntschaft", "150"] },
        { label: "gemeinsame Geschichten oder Mythen", keywords: ["geschichten", "mythen", "gemeinsam", "ordnung"] },
        { label: "Regeln werden gelernt", keywords: ["gelernt", "weitergegeben", "nicht in den genen", "regeln"] }
      ]
    }
  ],
  "modul-2": [
    {
      prompt: "Was verändert den späteren Homo sapiens gegenüber früheren Gruppen? Arbeite mit Australien, Werkzeugen, Kunst oder dem Löwenmenschen.",
      placeholder: "Zeige die Verbindung von Technik, Bewegung und Vorstellungskraft.",
      sampleAnswer:
        "S. 31 zeigt neue Fähigkeiten wie Boote, Nadeln, Schmuck und die Besiedlung Australiens. S. 32 ergänzt mit dem Löwenmenschen frühe Kunst und Vorstellungskraft. Zusammen zeigen beide Seiten, dass spätere Sapiens sich technisch, räumlich und symbolisch deutlich anders verhalten als die früheren Gruppen.",
      criteria: [
        { label: "Australien oder weite Migration", keywords: ["australien", "wanderung", "boote", "meer"] },
        { label: "Werkzeuge oder Technik", keywords: ["nadeln", "werkzeuge", "boote", "technik"] },
        { label: "Kunst oder Vorstellungskraft", keywords: ["kunst", "löwenmensch", "vorstellung", "religion"] }
      ]
    }
  ],
  "modul-3": [
    {
      prompt: "Warum sind Tratsch und fiktive Sprache für die Menschheitsgeschichte so wichtig?",
      placeholder: "Verbinde soziale Informationen, Mythen und Großgruppenkooperation.",
      sampleAnswer:
        "S. 35 zeigt, dass Menschen über andere sprechen und so Vertrauen und Misstrauen organisieren können. S. 36 geht weiter: Menschen reden sogar über Dinge, die es nicht gibt, also über Mythen, Götter oder Regeln. Zusammen ermöglichen beide Fähigkeiten Kooperation in sehr großen Gruppen.",
      criteria: [
        { label: "soziale Informationen oder Tratsch", keywords: ["tratsch", "soziale informationen", "vertrauen", "misstrauen"] },
        { label: "fiktive Sprache", keywords: ["fiktive sprache", "mythen", "götter", "vorgestellt"] },
        { label: "Großgruppenkooperation", keywords: ["große gruppen", "zusammenarbeit", "kooperation"] }
      ]
    }
  ],
  "modul-4": [
    {
      prompt: "Warum funktionierten mobile Lebensformen so lange? Beziehe Denkweise, Umweltwissen und Geburtenrhythmus ein.",
      placeholder: "Verbinde lange Normalform, Mobilität und Kinder.",
      sampleAnswer:
        "S. 101 macht klar, dass Jäger und Sammler die lange Normalform der Menschheit darstellen. S. 108 zeigt, wie Mobilität sogar den Geburtenrhythmus prägte, weil kleine Kinder auf Wanderungen eine Belastung waren. Mobile Lebensformen funktionierten also über genaues Umweltwissen und angepasste Sozialorganisation.",
      criteria: [
        { label: "lange Normalform", keywords: ["normalform", "lange zeit", "jager und sammler"] },
        { label: "Mobilität oder Umweltwissen", keywords: ["mobil", "umweltwissen", "wege", "anpassung"] },
        { label: "Kinder oder Geburtenrhythmus", keywords: ["kinder", "geburten", "stillen", "alle drei oder vier jahre"] }
      ]
    }
  ],
  "modul-5": [
    {
      prompt: "Warum brachte Landwirtschaft vielen Menschen mehr Mühe als Freiheit?",
      placeholder: "Arbeite mit härterer Arbeit, schlechterer Ernährung und der Bindung an Pflanzen.",
      sampleAnswer:
        "S. 103 widerspricht der Vorstellung, frühe Bauern hätten automatisch angenehmer gelebt. S. 105 zeigt mit dem Bild vom domestizierenden Weizen, wie stark Menschen an Feldarbeit, Ertrag und Risiko gebunden wurden. Landwirtschaft brachte daher Vorräte, aber auch neue Mühen und Abhängigkeiten.",
      criteria: [
        { label: "härtere Arbeit oder schlechtere Ernährung", keywords: ["harter", "mehr arbeit", "schlechtere ernahrung", "weniger freizeit"] },
        { label: "Weizen domestiziert Menschen", keywords: ["weizen", "domestiziert", "bindet", "felder"] },
        { label: "Abhängigkeit oder Risiko", keywords: ["abhangigkeit", "risiko", "ernte", "gebunden"] }
      ]
    }
  ],
  "modul-6": [
    {
      prompt: "Warum war frühe Schrift zuerst ein Werkzeug von Verwaltung und Bürokratie?",
      placeholder: "Arbeite mit Gerstenlisten, Besitz und dem Ausbau zur Keilschrift.",
      sampleAnswer:
        "S. 157 zeigt, dass die ältesten Texte Gerstenmengen, Besitz und Schulden festhielten. S. 160 beschreibt dann, wie aus solcher Verwaltungsschrift umfassendere Schriftsysteme wurden. Schrift ist am Anfang also vor allem ein Mittel, Vorräte, Abgaben und Herrschaft zu organisieren.",
      criteria: [
        { label: "Listen oder Gerste", keywords: ["gerste", "listen", "schuld", "besitz"] },
        { label: "Verwaltung oder Bürokratie", keywords: ["verwaltung", "bürokratie", "abgaben", "ordnen"] },
        { label: "Ausbau der Schrift", keywords: ["keilschrift", "hieroglyphen", "ausbau", "schriftsystem"] }
      ]
    }
  ],
  "modul-7": [
    {
      prompt: "Warum braucht ein Reich nicht nur Speicher und Heere, sondern auch Regeln und Gerechtigkeitsvorstellungen?",
      placeholder: "Verbinde Überschuss, Streit, Ordnung und Hammurabi.",
      sampleAnswer:
        "S. 130 zeigt, dass Überschüsse allein keine stabile Großordnung schaffen, weil Verteilung und Konflikte geregelt werden müssen. S. 133 führt mit Hammurabi vor, wie Kodizes und Gerechtigkeitsvorstellungen diese Ordnung stützen. Ein Reich braucht daher nicht nur Machtmittel, sondern auch akzeptierte Regeln.",
      criteria: [
        { label: "Überschuss reicht nicht", keywords: ["überschuss reicht nicht", "konflikte", "verteilung", "ordnung"] },
        { label: "Hammurabi oder Kodex", keywords: ["hammurabi", "kodex", "gesetz"] },
        { label: "Regeln oder Gerechtigkeit", keywords: ["regeln", "gerechtigkeit", "akzeptiert", "herrschaft"] }
      ]
    }
  ],
  "modul-8": [
    {
      prompt: "Warum stößt Tauschhandel an Grenzen und warum wird Geld dann zur Vertrauensordnung?",
      placeholder: "Arbeite mit Vergleichbarkeit und gemeinsamem Glauben an Wert.",
      sampleAnswer:
        "S. 215 zeigt, wie unübersichtlich direkter Tausch mit vielen Waren und Spezialisten wird. S. 220 erklärt dann, dass Geld diese Probleme löst, weil alle seinen Wert anerkennen. Geld ist deshalb nicht nur Metall, sondern ein gemeinsames Vertrauenssystem.",
      criteria: [
        { label: "Grenzen des Tauschhandels", keywords: ["tauschhandel", "wechselkurse", "unübersichtlich", "vergleichen"] },
        { label: "Geld als Lösung", keywords: ["geld", "löst", "vereinfacht"] },
        { label: "Vertrauen oder Anerkennung", keywords: ["vertrauen", "anerkennen", "wert"] }
      ]
    }
  ],
  "modul-9": [
    {
      prompt: "Wie kann aus Religion ein großes, missionierendes Ordnungssystem werden?",
      placeholder: "Arbeite mit Normen, Werten, übermenschlicher Ordnung und Universalreligionen.",
      sampleAnswer:
        "S. 252 definiert Religion als Normen- und Wertesystem, das sich auf eine übermenschliche Ordnung stützt. S. 253 zeigt, wie daraus missionierende Universalreligionen werden, die viele Regionen und Menschen verbinden wollen. Religion ordnet dadurch nicht nur lokal, sondern über große Räume hinweg.",
      criteria: [
        { label: "Normen und Werte", keywords: ["normen", "werte", "ordnung"] },
        { label: "übermenschliche Ordnung", keywords: ["übermenschlich", "gott", "autorität"] },
        { label: "Universalreligionen", keywords: ["universalreligion", "missionierend", "christentum", "islam"] }
      ]
    }
  ],
  "modul-10": [
    {
      prompt: "Warum sind Kirche und Religion für die mittelalterliche Gesellschaft nicht bloß Randthemen?",
      placeholder: "Verbinde Ausbreitung von Religionen, Herrschaft und Alltag bis um 1500.",
      sampleAnswer:
        "S. 261 zeigt, wie Christentum und Islam von kleinen Gruppen zu großen Weltreligionen wurden. S. 263 macht deutlich, dass monotheistische Religionen bis um 1500 weite Teile Afrikas und Eurasiens prägten. Kirche und Religion strukturieren im Mittelalter daher Politik, Alltag und Gesellschaft insgesamt.",
      criteria: [
        { label: "Christentum oder Islam", keywords: ["christentum", "islam", "weltreligion"] },
        { label: "große Räume bis 1500", keywords: ["1500", "afrika", "eurasien", "weite teile"] },
        { label: "Gesellschaft und Herrschaft", keywords: ["gesellschaft", "herrschaft", "alltag", "kirche"] }
      ]
    }
  ],
  "modul-11": [
    {
      prompt: "Warum hängen Städte, Märkte und Handel im Mittelalter eng zusammen?",
      placeholder: "Verbinde Spezialisierung, transportierbares Vermögen und urbane Verdichtung.",
      sampleAnswer:
        "S. 214 zeigt, dass mit Städten neue Spezialisten und Märkte entstehen. S. 219 erklärt, warum Geld Vermögen beweglich macht und dadurch größere Handelsnetze ermöglicht. Mittelalterliche Städte verdichten also Arbeitsteilung, Markt und Verkehr.",
      criteria: [
        { label: "Städte oder Spezialisten", keywords: ["städte", "spezialisten", "berufe", "märkte"] },
        { label: "Geld oder transportierbares Vermögen", keywords: ["geld", "vermögen", "transport", "beweglich"] },
        { label: "Handelsnetze", keywords: ["handelsnetze", "markt", "verkehr", "verdichtung"] }
      ]
    }
  ],
  "modul-12": [
    {
      prompt: "Warum leben Menschen immer wieder in großen gemeinsamen Ordnungen, und wie weit reichen diese Ordnungen um 1500 bereits?",
      placeholder: "Verbinde erfundene Ordnung, große Räume und die Welt an der Schwelle der Neuzeit.",
      sampleAnswer:
        "S. 148 zeigt, dass Menschen selten außerhalb aller Ordnungen leben, sondern meist in neue Ordnungen wechseln. S. 263 macht sichtbar, wie weit diese großen religiösen und politischen Ordnungen bis um 1500 schon reichen. Die Bilanz lautet daher: Geschichte bis 1500 ist eine Geschichte wachsender gemeinsamer Regelräume.",
      criteria: [
        { label: "Ordnungen ersetzen Ordnungen", keywords: ["ordnung", "wechseln", "keine reine freiheit", "regelraum"] },
        { label: "große Räume um 1500", keywords: ["1500", "große räume", "afrika", "eurasien"] },
        { label: "Bilanz der Einheit", keywords: ["bilanz", "geschichte bis 1500", "gemeinsame ordnungen"] }
      ]
    }
  ]
};

const expandedHarariDetails = {
  [makeSourceKey("modul-1", "Harari-PDF · S. 38")]: {
    badge: "S. 38 · Grenzen kleiner Gruppen",
    locator: "Harari-PDF, S. 38",
    pdfPage: 38,
    pdfSearch: "nur von Klatsch zusammengehalten",
    quote: "„nur von Klatsch zusammengehalten“",
    thesis:
      "Harari beschreibt hier die Grenze kleiner, intimer Gruppen. Frühmenschen können nicht beliebig viele Fremde integrieren; größere Verbände brauchen neue Formen von Sprache und Ordnung.",
    passage:
      "Die Seite erklärt, warum kleine Gruppen auf persönliche Nähe, Rang und direkte Beziehungen angewiesen sind. Schimpansenhorden und frühe Menschengruppen bleiben deshalb relativ klein und instabil, sobald sie stark anwachsen. Erst mit der kognitiven Revolution können Menschen über Klatsch, Erzählung und gemeinsame Ordnung größere und dauerhaftere Verbände aufbauen. Für das Einstiegsmodul ist die Stelle wichtig, weil sie zeigt, dass Geschichte im engeren Sinn nicht einfach mit mehr Menschen beginnt, sondern mit neuen Mitteln, große Gruppen zusammenzuhalten."
  },
  [makeSourceKey("modul-3", "Harari-PDF · S. 34")]: {
    badge: "S. 34 · Sprache ist flexibel",
    locator: "Harari-PDF, S. 34",
    pdfPage: 34,
    pdfSearch: "extreme Flexibilität",
    quote: "„extreme Flexibilität“",
    thesis:
      "Harari erklärt die Besonderheit menschlicher Sprache über ihre enorme Beweglichkeit: Mit begrenzten Lauten und Zeichen können Menschen unendlich viele Sätze und Bedeutungen erzeugen.",
    passage:
      "Die Passage vergleicht menschliche Sprache mit Tierkommunikation und zeigt den entscheidenden Unterschied nicht in der Lautmenge, sondern in der Kombinierbarkeit. Menschen können Orte, Abläufe, Absichten und Beobachtungen genau beschreiben und daraus gemeinsames Handeln ableiten. Damit wird Sprache zum Werkzeug, um Wissen zu speichern, weiterzugeben und zu bündeln. Für das Modul über die kognitive Revolution ist das zentral, weil Sprache hier als historische Infrastruktur von Kooperation, Planung und Weltdeutung sichtbar wird."
  },
  [makeSourceKey("modul-5", "Harari-PDF · S. 104")]: {
    badge: "S. 104 · Der Weizen zwingt zur Arbeit",
    locator: "Harari-PDF, S. 104",
    pdfPage: 104,
    pdfSearch: "aufs Kreuz legte",
    quote: "„aufs Kreuz legte“",
    thesis:
      "Harari schildert Landwirtschaft hier als Belastung des Menschenkörpers. Felder, Unkraut, Schädlinge und Bewässerung binden Menschen an eine harte, monotone Arbeitsform.",
    passage:
      "Die Seite beschreibt sehr konkret, wie stark Getreideanbau den Alltag verändert: Steine müssen gesammelt, Unkraut gejätet, Schädlinge bekämpft, Wasser geschleppt und Felder geschützt werden. Hararis Pointe lautet, dass der menschliche Körper für Jagen, Sammeln und Klettern entstanden ist, nicht für dauernde Feldarbeit. Damit verschiebt sich die Sicht auf Sesshaftigkeit. Landwirtschaft erhöht Erträge, kostet aber Kraft, Gesundheit und Zeit. Für das Modul ist die Stelle wichtig, weil sie den Alltag der neolithischen Revolution faktisch und körperlich greifbar macht."
  },
  [makeSourceKey("modul-5", "Harari-PDF · S. 107")]: {
    badge: "S. 107 · Die Luxusfalle",
    locator: "Harari-PDF, S. 107",
    pdfPage: 107,
    pdfSearch: "Die Luxusfalle",
    quote: "„Die Luxusfalle“",
    thesis:
      "Harari deutet den Übergang zur Landwirtschaft nicht als bewussten Masterplan, sondern als Falle aus vielen kleinen Schritten, die sich langsam verfestigen.",
    passage:
      "Die Passage betont, dass niemand über die landwirtschaftliche Revolution abgestimmt hat. Menschen verändern ihren Alltag Schritt für Schritt: ein wenig mehr sammeln, ein wenig länger bleiben, ein wenig mehr anbauen. Erst im Rückblick wird daraus eine neue Lebensordnung. Harari nennt das eine Luxusfalle: Kleine Verbesserungen im Alltag erzeugen langfristig eine tiefere Abhängigkeit. Für das Modul ist das wichtig, weil so verständlich wird, warum Sesshaftigkeit nicht plötzlich beschlossen, sondern allmählich normal wurde."
  },
  [makeSourceKey("modul-6", "Harari-PDF · S. 158")]: {
    badge: "S. 158 · Schreiben für Steuern",
    locator: "Harari-PDF, S. 158",
    pdfPage: 158,
    pdfSearch: "partielle Schriftsysteme",
    quote: "„partielle Schriftsysteme“",
    thesis:
      "Harari zeigt, dass frühe Schrift nicht für Gedichte erfunden wird, sondern für Aufgaben, die gesprochene Sprache schlecht leisten kann: Abgaben, Zahlen, Besitz und Verwaltung.",
    passage:
      "Die Seite erklärt, dass partielle Schriftsysteme zwar keine vollständige Sprache wiedergeben, aber genau das festhalten, was Herrschaft und Wirtschaft brauchen. Steuereinnahmen, Vorräte, Besitzverhältnisse und Berechnungen lassen sich so dauerhaft sichern. Damit wird Schrift nicht als kultureller Schmuck, sondern als Werkzeug staatlicher Ordnung sichtbar. Für das Modul ist diese Stelle wichtig, weil frühe Hochkulturen so als Verwaltungs- und Speicherleistungen greifbar werden."
  },
  [makeSourceKey("modul-6", "Harari-PDF · S. 159")]: {
    badge: "S. 159 · Quipus und Verwaltung",
    locator: "Harari-PDF, S. 159",
    pdfPage: 159,
    pdfSearch: "Quipu",
    quote: "„Quipu“",
    thesis:
      "Harari erweitert den Schriftbegriff hier über Tontafeln hinaus. Auch Knotenschnüre können große Reiche verwalten, wenn sie Daten, Besitz und Abgaben systematisch speichern.",
    passage:
      "Mit dem Beispiel der Quipus zeigt Harari, dass Verwaltung nicht an Alphabete gebunden ist. Knotenschnüre mit Farben und Knotenmuster speichern mathematische und administrative Informationen über Jahre hinweg. Gerade das Inka-Beispiel macht sichtbar, dass frühe Staatlichkeit verschiedene Speichertechniken hervorbringen kann. Für das Modul ist die Seite wichtig, weil sie Hochkulturen nicht auf Mesopotamien und Ägypten verengt, sondern die allgemeine Funktion von Schrift und Datenspeicherung herausarbeitet."
  },
  [makeSourceKey("modul-7", "Harari-PDF · S. 150")]: {
    badge: "S. 150 · Weltreiche und Netze",
    locator: "Harari-PDF, S. 150",
    pdfPage: 150,
    pdfSearch: "Weltreiche, Weltreligionen und globale Handelsnetze",
    quote: "„Weltreiche, Weltreligionen und globale Handelsnetze“",
    thesis:
      "Harari bündelt hier die Richtung der antiken Geschichte: Kleine Gruppen und lokale Reiche werden in größere Macht-, Glaubens- und Handelsräume eingebunden.",
    passage:
      "Die Passage macht klar, dass Geschichte nicht aus isolierten Inseln besteht. Menschen bauen immer größere Verbindungsräume auf, in denen Macht, Glaube und Handel zusammenwirken. Für Modul 7 ist das zentral, weil Imperien nicht nur aus Eroberungen bestehen, sondern Verbindungen schaffen: Straßen, Herrschaftsordnungen, Steuerwege, Militär und gemeinsame politische Horizonte."
  },
  [makeSourceKey("modul-8", "Harari-PDF · S. 216")]: {
    badge: "S. 216 · Geld als geistige Revolution",
    locator: "Harari-PDF, S. 216",
    pdfPage: 216,
    pdfSearch: "rein geistige Revolution",
    quote: "„rein geistige Revolution“",
    thesis:
      "Harari erklärt Geld hier ausdrücklich als intersubjektive Erfindung. Sein Wert liegt nicht im Material, sondern in der gemeinsamen Anerkennung.",
    passage:
      "Die Seite führt vom Problem des Tauschhandels direkt zur Erfindung des Geldes. Geld entsteht nicht durch eine neue Maschine, sondern durch eine neue geteilte Vorstellung: Menschen akzeptieren etwas als Vergleichs- und Zahlungsmittel. Deshalb können Muscheln, Metall oder digitale Einträge Geld werden. Für Modul 8 ist diese Stelle entscheidend, weil sie Geld als historische Deutung und Vertrauensform erklärt, nicht bloß als Münze."
  },
  [makeSourceKey("modul-8", "Harari-PDF · S. 218")]: {
    badge: "S. 218 · Geld tauscht alles gegen alles",
    locator: "Harari-PDF, S. 218",
    pdfPage: 218,
    pdfSearch: "universelles Tauschmittel",
    quote: "„universelles Tauschmittel“",
    thesis:
      "Harari beschreibt Geld hier als Mittel, mit dem sehr unterschiedliche Dinge miteinander vergleichbar werden: Güter, Wissen, Land, Sold oder sogar Sündenablässe.",
    passage:
      "Die Seite zeigt die Radikalität des Geldes: Es verwandelt sehr verschiedene Werte in eine gemeinsame Skala. Damit können Märkte wachsen, Spezialisten voneinander leben und Herrschaft beweglicher werden. Für das Modul ist die Passage wichtig, weil sie den historischen Durchbruch des Geldes nicht nur technisch, sondern gesellschaftlich erklärt. Geld schafft Vergleichbarkeit, Speicherbarkeit und Beweglichkeit von Wert."
  },
  [makeSourceKey("modul-9", "Harari-PDF · S. 254")]: {
    badge: "S. 254 · Religiöse Revolution",
    locator: "Harari-PDF, S. 254",
    pdfPage: 254,
    pdfSearch: "religiösen Revolution",
    quote: "„religiösen Revolution“",
    thesis:
      "Harari verbindet hier Landwirtschaft mit einem tiefen Wandel der religiösen Weltdeutung. Tiere und Pflanzen werden von Partnern zu Besitz, und übermenschliche Mächte gewinnen an Gewicht.",
    passage:
      "Die Passage zeigt, dass Sesshaftigkeit nicht nur Essen und Arbeit verändert, sondern auch die religiöse Ordnung. Bauern besitzen, züchten und manipulieren Tiere und Pflanzen, statt ihnen auf Augenhöhe zu begegnen. Gleichzeitig entstehen stärkere Hoffnungen auf Götter, die Regen, Fruchtbarkeit und Schutz garantieren sollen. Für Modul 9 ist die Stelle wichtig, weil Religion hier als historische Antwort auf neue Abhängigkeiten und Kontrollwünsche erscheint."
  },
  [makeSourceKey("modul-9", "Harari-PDF · S. 255")]: {
    badge: "S. 255 · Weltreiche brauchen große Götter",
    locator: "Harari-PDF, S. 255",
    pdfPage: 255,
    pdfSearch: "mit der Entstehung von Weltreichen und Handelsnetzen",
    quote: "„mit der Entstehung von Weltreichen und Handelsnetzen“",
    thesis:
      "Harari erklärt, warum lokale Geister für größere politische und wirtschaftliche Räume nicht mehr ausreichen. Mit Imperien und Handel wachsen auch die religiösen Maßstäbe.",
    passage:
      "Die Seite verbindet politische und religiöse Geschichte eng miteinander. Solange Menschen in kleinen Tälern leben, genügen lokale Geister und heilige Orte. Mit Weltreichen und Handelsnetzen brauchen sie dagegen Mächte, die weiter reichen als das eigene Tal. So erklärt Harari den Übergang zu polytheistischen Großordnungen. Für das Modul ist das stark, weil Religion hier als Begleiter wachsender Räume und nicht als loses Zusatzthema erscheint."
  },
  [makeSourceKey("modul-10", "Harari-PDF · S. 262")]: {
    badge: "S. 262 · Mission und Ausschließlichkeit",
    locator: "Harari-PDF, S. 262",
    pdfPage: 262,
    pdfSearch: "missionarischen Eifer",
    quote: "„missionarischen Eifer“",
    thesis:
      "Harari erklärt die Dynamik monotheistischer Religionen über ihren Wahrheitsanspruch: Wer an einen einzigen wahren Gott glaubt, neigt stärker zur Mission und zur Ausbreitung.",
    passage:
      "Die Passage deutet den Unterschied zwischen polytheistischen und monotheistischen Religionen historisch. Polytheistische Systeme können andere Götter meist leichter neben sich dulden; monotheistische Religionen beanspruchen die ganze Wahrheit und treiben ihre Botschaft mit größerem Eifer nach außen. Für Modul 10 ist das wichtig, weil so verständlich wird, warum Kirche, Mission und Herrschaft im Mittelalter so eng verschränkt sind."
  },
  [makeSourceKey("modul-11", "Harari-PDF · S. 217")]: {
    badge: "S. 217 · Vielerlei Geldformen",
    locator: "Harari-PDF, S. 217",
    pdfPage: 217,
    pdfSearch: "Kaurischnecken",
    quote: "„Kaurischnecken“",
    thesis:
      "Harari zeigt hier, dass Geld im Lauf der Geschichte sehr verschiedene Formen annimmt. Entscheidend ist nicht das Material, sondern seine breite Akzeptanz im Handel.",
    passage:
      "Die Passage führt Muscheln, Stoffe, Salz, Zigaretten und Kontogeld als historische Geldformen auf. Damit wird deutlich, dass Märkte und Städte nicht an eine einzige Währung gebunden sind, sondern an allgemeine Tauschbarkeit. Für Modul 11 ist das wichtig, weil mittelalterlicher und vormoderner Handel so als flexible Praxis sichtbar wird, die weit über die einzelne Münze hinausreicht."
  },
  [makeSourceKey("modul-12", "Harari-PDF · S. 255")]: {
    badge: "S. 255 · Größere Räume, größere Ordnungen",
    locator: "Harari-PDF, S. 255",
    pdfPage: 255,
    pdfSearch: "Weltreichen und Handelsnetzen",
    quote: "„Weltreichen und Handelsnetzen“",
    thesis:
      "Harari zieht hier eine Langzeitlinie, die den Kursabschluss trägt: Mit wachsenden Reichen und Handelsräumen wachsen auch die religiösen und politischen Ordnungen, die Menschen zusammenhalten.",
    passage:
      "Die Seite eignet sich für die Schlussbilanz, weil sie nicht nur Religion erklärt, sondern den Größenwandel historischer Räume sichtbar macht. Lokale Welten werden durch Reiche, Verkehrswege und Handelsbeziehungen in größere Zusammenhänge gezogen. So erscheinen die Entwicklungen bis 1500 als Vorgeschichte einer immer enger verbundenen Welt. Für das Abschlussmodul bündelt diese Buchstelle deshalb die Hauptbewegung der Einheit: aus kleinen Ordnungen werden größere Netze."
  }
};

const expandedHarariSources = {
  "modul-1": [
    {
      title: "Harari-PDF · S. 38",
      meta: "Buchstelle · kleine Gruppen und ihre Grenze",
      extracted: "Frühe Menschengruppen bleiben klein; größere Verbände brauchen neue sprachliche und soziale Mittel."
    }
  ],
  "modul-3": [
    {
      title: "Harari-PDF · S. 34",
      meta: "Buchstelle · flexible Sprache",
      extracted: "Menschen können mit begrenzten Lauten unendlich viele Sätze bilden und dadurch viel mehr Informationen austauschen."
    }
  ],
  "modul-5": [
    {
      title: "Harari-PDF · S. 104",
      meta: "Buchstelle · Feldarbeit und Körper",
      extracted: "Ackerbau zwingt Menschen zu harter Feldarbeit, für die der menschliche Körper nicht gebaut wurde."
    },
    {
      title: "Harari-PDF · S. 107",
      meta: "Buchstelle · Luxusfalle",
      extracted: "Landwirtschaft setzt sich schrittweise durch und wird zur Falle aus kleinen Gewohnheiten und wachsender Abhängigkeit."
    }
  ],
  "modul-6": [
    {
      title: "Harari-PDF · S. 158",
      meta: "Buchstelle · Schreiben für Verwaltung",
      extracted: "Frühe Schriftsysteme speichern Steuern, Besitz und Zahlen, nicht zuerst Literatur."
    },
    {
      title: "Harari-PDF · S. 159",
      meta: "Buchstelle · Quipus und Reichsverwaltung",
      extracted: "Auch Knotenschnüre können große Reiche verwalten, wenn sie Daten und Abgaben systematisch speichern."
    }
  ],
  "modul-7": [
    {
      title: "Harari-PDF · S. 150",
      meta: "Buchstelle · größere Verbindungsräume",
      extracted: "Weltreiche, Weltreligionen und Handelsnetze binden immer mehr Menschen in gemeinsame Ordnungen ein."
    }
  ],
  "modul-8": [
    {
      title: "Harari-PDF · S. 216",
      meta: "Buchstelle · Geld als Idee",
      extracted: "Geld ist eine geistige Erfindung und beruht auf gemeinsamer Anerkennung."
    },
    {
      title: "Harari-PDF · S. 218",
      meta: "Buchstelle · universelles Tauschmittel",
      extracted: "Geld macht sehr unterschiedliche Dinge miteinander vergleichbar und austauschbar."
    }
  ],
  "modul-9": [
    {
      title: "Harari-PDF · S. 254",
      meta: "Buchstelle · religiöse Revolution",
      extracted: "Mit Landwirtschaft verändern sich Besitz, Weltdeutung und die Bedeutung übermenschlicher Mächte."
    },
    {
      title: "Harari-PDF · S. 255",
      meta: "Buchstelle · große Götter für große Räume",
      extracted: "Weltreiche und Handelsnetze fördern größere religiöse Ordnungen als lokale Tal- und Ortsgeister."
    }
  ],
  "modul-10": [
    {
      title: "Harari-PDF · S. 262",
      meta: "Buchstelle · Mission und Wahrheit",
      extracted: "Monotheistische Religionen breiten sich mit starkem Wahrheitsanspruch und missionarischem Eifer aus."
    }
  ],
  "modul-11": [
    {
      title: "Harari-PDF · S. 217",
      meta: "Buchstelle · verschiedene Geldformen",
      extracted: "Muscheln, Stoff, Zigaretten oder Kontogeld zeigen, dass Handel viele Formen von Geld nutzen kann."
    }
  ],
  "modul-12": [
    {
      title: "Harari-PDF · S. 255",
      meta: "Buchstelle · Langzeitlinie großer Räume",
      extracted: "Mit Reichen und Handelsnetzen wachsen die religiösen und politischen Räume, in denen Menschen leben."
    }
  ]
};

const expandedHarariChecks = {
  "modul-1": [
    {
      prompt: "Warum funktionieren kleine Gruppen anders als große Gesellschaften? Arbeite mit persönlicher Nähe, Klatsch und gemeinsamen Geschichten.",
      placeholder: "Verbinde kleine Gruppen, Klatsch und Mythen.",
      sampleAnswer:
        "S. 38 zeigt, dass kleine Gruppen auf Nähe und direkte Beziehungen angewiesen sind. S. 39 erklärt, dass solche Formen nur bis zu einer bestimmten Größe tragen. Große Gesellschaften brauchen deshalb gemeinsame Geschichten, Regeln und Symbole, damit auch Fremde zusammenarbeiten können.",
      criteria: [
        { label: "kleine Gruppen beruhen auf Nähe", keywords: ["nähe", "kleine gruppen", "direkte beziehungen", "intim"] },
        { label: "Klatsch oder soziale Informationen", keywords: ["klatsch", "soziale informationen", "vertrauen"] },
        { label: "große Gruppen brauchen gemeinsame Ordnungen", keywords: ["mythen", "geschichten", "regeln", "symbole"] }
      ]
    }
  ],
  "modul-5": [
    {
      prompt: "Warum brachte Landwirtschaft nicht nur Erträge, sondern führte Menschen auch in neue Arbeit und Abhängigkeit hinein?",
      placeholder: "Arbeite mit Feldarbeit, Körper und Luxusfalle.",
      sampleAnswer:
        "S. 104 zeigt die harte Feldarbeit mit Unkrautjäten, Bewässerung und Schutz der Ernte. S. 107 erklärt, dass die neue Lebensweise nicht plötzlich beschlossen wurde, sondern sich Schritt für Schritt als Luxusfalle verfestigte. Landwirtschaft brachte also mehr Nahrung, aber auch mehr Mühe und stärkere Bindung an Felder und Ernten.",
      criteria: [
        { label: "harte Feldarbeit", keywords: ["harte arbeit", "feldarbeit", "bewässerung", "unkraut"] },
        { label: "menschlicher Körper", keywords: ["körper", "nicht gebaut", "jagen", "sammeln"] },
        { label: "Luxusfalle oder schrittweiser Wandel", keywords: ["luxusfalle", "schrittweise", "falle", "gewohnheit"] }
      ]
    }
  ],
  "modul-6": [
    {
      prompt: "Warum waren Schrift und Datenspeicherung für frühe Staaten so wichtig?",
      placeholder: "Arbeite mit Steuern, Besitz, Zahlen und Quipus.",
      sampleAnswer:
        "S. 158 zeigt, dass frühe Schrift vor allem Steuern, Besitz und Zahlen festhält. S. 159 erweitert das mit den Quipus: Auch Knotenschnüre konnten große Mengen von Verwaltungsdaten speichern. Frühe Staaten brauchen solche Systeme, um Menschen, Abgaben und Vorräte über größere Räume hinweg zu ordnen.",
      criteria: [
        { label: "Steuern, Besitz oder Zahlen", keywords: ["steuern", "besitz", "zahlen", "abgaben"] },
        { label: "Quipu oder Knotenschnüre", keywords: ["quipu", "knotenschnüre", "inkas"] },
        { label: "Staat und Verwaltung", keywords: ["staat", "verwaltung", "ordnen", "reich"] }
      ]
    }
  ],
  "modul-8": [
    {
      prompt: "Warum ist Geld mehr als Metall oder Papier? Arbeite mit geistiger Erfindung und universellem Tauschmittel.",
      placeholder: "Verbinde Idee, Anerkennung und Vergleichbarkeit.",
      sampleAnswer:
        "S. 216 beschreibt Geld als geistige Erfindung, die auf gemeinsamer Anerkennung beruht. S. 218 erklärt, dass Geld dadurch zum universellen Tauschmittel wird und sehr unterschiedliche Dinge vergleichbar macht. Geld ist also nicht nur Material, sondern eine geteilte Vorstellung von Wert.",
      criteria: [
        { label: "Geld als Idee", keywords: ["idee", "geistige revolution", "anerkennung", "vorstellung"] },
        { label: "universelles Tauschmittel", keywords: ["universelles tauschmittel", "vergleichen", "austauschbar"] },
        { label: "mehr als Metall", keywords: ["mehr als metall", "nicht nur münzen", "wert"] }
      ]
    }
  ],
  "modul-9": [
    {
      prompt: "Wie lösen Landwirtschaft, Besitz und größere politische Räume religiöse Veränderungen aus?",
      placeholder: "Verbinde Bauernwelt, Götter und Weltreiche.",
      sampleAnswer:
        "S. 254 zeigt, dass Bauern Tiere und Pflanzen als Besitz behandeln und deshalb stärker auf göttliche Kontrolle von Fruchtbarkeit und Schutz hoffen. S. 255 erklärt, dass mit Weltreichen und Handelsnetzen größere Götter und polytheistische Ordnungen wichtiger werden. Religion verändert sich also mit Besitz, Herrschaft und Raumgröße.",
      criteria: [
        { label: "Landwirtschaft und Besitz", keywords: ["bauern", "besitz", "tiere", "pflanzen"] },
        { label: "übermenschliche Mächte oder Götter", keywords: ["götter", "fruchtbarkeit", "schutz", "religiöse revolution"] },
        { label: "Weltreiche oder Handelsnetze", keywords: ["weltreiche", "handelsnetze", "größere räume", "polytheistisch"] }
      ]
    }
  ],
  "modul-10": [
    {
      prompt: "Warum greifen monotheistische Religionen im Mittelalter so stark in Herrschaft und Gesellschaft ein?",
      placeholder: "Arbeite mit Wahrheitsanspruch, Mission und großen Räumen.",
      sampleAnswer:
        "S. 262 erklärt den missionarischen Eifer monotheistischer Religionen aus ihrem Anspruch auf die ganze Wahrheit. S. 263 zeigt, wie weit diese Religionen bis um 1500 bereits große Teile Afrikas und Eurasiens prägen. Dadurch werden sie zu zentralen Ordnungskräften von Herrschaft und Gesellschaft.",
      criteria: [
        { label: "Wahrheitsanspruch", keywords: ["wahrheit", "einziger gott", "vollständige botschaft"] },
        { label: "Mission oder Ausbreitung", keywords: ["mission", "missionarisch", "ausbreitung"] },
        { label: "große Räume bis 1500", keywords: ["1500", "afrika", "eurasien", "weite teile"] }
      ]
    }
  ],
  "modul-11": [
    {
      prompt: "Warum ist städtischer Handel nicht an eine einzige Münzform gebunden, sondern an allgemein akzeptierten Wert?",
      placeholder: "Arbeite mit verschiedenen Geldformen und beweglichem Vermögen.",
      sampleAnswer:
        "S. 217 zeigt, dass sehr unterschiedliche Dinge wie Kaurischnecken oder Zigaretten als Geld dienen können. S. 219 ergänzt, dass Geld Vermögen beweglich macht und dadurch Märkte und Handel erleichtert. Für Städte ist also entscheidend, dass Wert allgemein anerkannt und transportierbar ist.",
      criteria: [
        { label: "verschiedene Geldformen", keywords: ["kaurischnecken", "verschiedene geldformen", "zigaretten", "stoff"] },
        { label: "anerkannter Wert", keywords: ["anerkannt", "wert", "geldform"] },
        { label: "bewegliches Vermögen oder Handel", keywords: ["beweglich", "vermögen", "handel", "markt"] }
      ]
    }
  ],
  "modul-12": [
    {
      prompt: "Wie werden aus lokalen Welten immer größere religiöse und politische Räume?",
      placeholder: "Verbinde Talwelt, Weltreiche, Handelsnetze und die Lage um 1500.",
      sampleAnswer:
        "S. 255 zeigt den Übergang von lokalen Geistern zu größeren religiösen Ordnungen, weil Weltreiche und Handelsnetze weiter reichen als das eigene Tal. S. 263 beschreibt dann die Welt um 1500 als Raum großer monotheistischer und politischer Ordnungen. Die Schlussbilanz lautet: Geschichte bis 1500 ist eine Geschichte wachsender Verbindungsräume.",
      criteria: [
        { label: "lokale Welten oder Tal", keywords: ["tal", "lokal", "örtliche geister"] },
        { label: "Weltreiche oder Handelsnetze", keywords: ["weltreiche", "handelsnetze", "größere räume"] },
        { label: "Bilanz um 1500", keywords: ["1500", "monotheistisch", "ordnungen", "schlussbilanz"] }
      ]
    }
  ]
};

Object.entries(additionalHarariSources).forEach(([moduleId, sources]) => {
  const module = modules.find((entry) => entry.id === moduleId);
  if (!module) {
    return;
  }

  const existingTitles = new Set(module.sources.map((source) => source.title));
  const newSources = sources.filter((source) => !existingTitles.has(source.title));
  if (!newSources.length) {
    return;
  }

  const firstNonHarariIndex = module.sources.findIndex(
    (source) => !normalize(source.title).startsWith(normalize("Harari-PDF"))
  );
  const insertIndex = firstNonHarariIndex === -1 ? module.sources.length : firstNonHarariIndex;
  module.sources.splice(insertIndex, 0, ...newSources);
});

Object.entries(expandedHarariSources).forEach(([moduleId, sources]) => {
  const module = modules.find((entry) => entry.id === moduleId);
  if (!module) {
    return;
  }

  const existingTitles = new Set(module.sources.map((source) => source.title));
  const newSources = sources.filter((source) => !existingTitles.has(source.title));
  if (!newSources.length) {
    return;
  }

  const firstNonHarariIndex = module.sources.findIndex(
    (source) => !normalize(source.title).startsWith(normalize("Harari-PDF"))
  );
  const insertIndex = firstNonHarariIndex === -1 ? module.sources.length : firstNonHarariIndex;
  module.sources.splice(insertIndex, 0, ...newSources);
});

Object.entries(additionalHarariChecks).forEach(([moduleId, questions]) => {
  const target = contentChecks[moduleId];
  if (!target) {
    return;
  }

  const existingPrompts = new Set(target.questions.map((question) => question.prompt));
  questions.forEach((question) => {
    if (!existingPrompts.has(question.prompt)) {
      target.questions.push(question);
    }
  });
});

Object.entries(expandedHarariChecks).forEach(([moduleId, questions]) => {
  const target = contentChecks[moduleId];
  if (!target) {
    return;
  }

  const existingPrompts = new Set(target.questions.map((question) => question.prompt));
  questions.forEach((question) => {
    if (!existingPrompts.has(question.prompt)) {
      target.questions.push(question);
    }
  });
});

const moduleVisuals = {
  "modul-1": {
    hero: "assets/srf/m05-pfahlbauer.jpg",
    side: "assets/srf/m08-muenzschatz.jpg",
    kicker: "Langzeitblick",
    title: "Geschichte als Entwicklung menschlicher Ordnungen",
    text: "Das Modul klärt, dass Geschichte nicht mit Urknall oder Eiszeit beginnt, sondern dort, wo Menschen ihre Welt durch Sprache, Regeln, Technik, Erinnerung und gemeinsame Vorstellungen gestalten.",
    sideText: "Frühe Siedlungen, Werkzeuge, Vorräte, Schrift, Münzen und Herrschaftszeichen machen sichtbar, dass Geschichte aus aufeinander aufbauenden Formen menschlicher Ordnung besteht."
  },
  "modul-2": {
    hero: "assets/srf/m02-1491.jpg",
    side: "assets/srf/m02-1491-detail.jpg",
    kicker: "Frühmenschliche Welt",
    title: "Mehrere Menschenarten, Migration und Anpassung",
    text: "Frühe Menschheitsgeschichte verläuft nicht geradlinig: Homo sapiens lebt zunächst neben anderen Menschenarten und setzt sich erst durch Lernen, Technik, Kooperation und Anpassung an verschiedene Räume durch.",
    sideText: "Wichtig sind Ausbreitung, Werkzeuggebrauch, Feuer, Boote, Kleidung und die Fähigkeit, in sehr unterschiedlichen Landschaften zu überleben."
  },
  "modul-3": {
    hero: "assets/srf/m02-1491-detail.jpg",
    side: "assets/srf/m02-1491.jpg",
    kicker: "Kognitive Revolution",
    title: "Sprache, Zeichen und gemeinsame Vorstellungswelten",
    text: "Menschen können über Vergangenes, Zukünftiges und Erfundenes sprechen. Dadurch entstehen Mythen, Regeln, Rituale, Zugehörigkeiten und die Grundlage späterer Staaten, Religionen und Geldordnungen.",
    sideText: "Höhlenbilder, Totempfähle und Schriftzeichen zeigen, dass frühe Gesellschaften ihre Welt nicht nur bewohnen, sondern auch deuten und symbolisch ordnen."
  },
  "modul-4": {
    hero: "assets/srf/m02-1491.jpg",
    side: "assets/srf/m05-pfahlbauer-detail.jpg",
    kicker: "Vorzeitliche Lebensformen",
    title: "Jäger und Sammler als lange Normalform",
    text: "Über den größten Teil der Menschheitsgeschichte leben Menschen mobil. Nahrung, Wege, Behausungen und Jahreszeitenwissen werden genau auf Klima, Tierwelt und Landschaft abgestimmt.",
    sideText: "Mobile Lebensformen beruhen auf Umweltwissen, mündlicher Überlieferung und flexibler Organisation, nicht auf Unordnung oder bloßem Mangel."
  },
  "modul-5": {
    hero: "assets/srf/m05-pfahlbauer.jpg",
    side: "assets/srf/m05-pfahlbauer-detail.jpg",
    kicker: "Sesshaftigkeit",
    title: "Landwirtschaft, Vorräte und feste Siedlungen",
    text: "Mit Ackerbau und Viehzucht verändern sich Ernährung, Arbeit, Besitz und Bevölkerungszahl. Sesshaftigkeit schafft Dörfer und Speicher, bringt aber auch neue Mühen, Risiken und soziale Unterschiede hervor.",
    sideText: "Hausbau, Vorratshaltung, Feldarbeit und Abhängigkeit von Ernten gehören zu den wichtigsten Folgen der landwirtschaftlichen Revolution."
  },
  "modul-6": {
    hero: "assets/srf/m01-spurensuche.jpg",
    side: "assets/srf/m01-anthropozaen.jpg",
    kicker: "Hochkulturen",
    title: "Schrift, Verwaltung und frühe Staaten",
    text: "Hochkulturen beruhen auf Überschuss, Abgaben, Beamten, Tempeln und Schrift. Die ältesten Texte erfassen oft Gerste, Besitz, Schulden und Arbeitsleistungen statt großer Heldengeschichten. In Ägypten verbinden sich Nilwirtschaft, Pharaonenherrschaft und religiöse Ordnung zu einer besonders langen Reichsstruktur.",
    sideText: "Wichtig sind Nil, Hieroglyphen, Beamtentum, Pharao, Maat sowie Tempel- und Jenseitsvorstellungen; Mesopotamien dient nur als kurzer Vergleich einer weniger einheitlichen Frühstaatenlandschaft."
  },
  "modul-7-kelten": {
    hero: "assets/srf/m08-muenzschatz.jpg",
    side: "assets/srf/m07-roemer-detail.jpg",
    kicker: "Späte Eisenzeit",
    title: "Kelten, Helvetier und der Bruch von 58 v. Chr.",
    text: "Vor der römischen Eroberung existiert im Gebiet der heutigen Schweiz eine keltische Welt mit oppida, Münzgeld, Metallhandwerk, Religion und Fernkontakten. Die Helvetier gehören in diese spätkeltische Ordnung.",
    sideText: "Wichtig sind Hallstatt und La Tène, befestigte Zentren, reiche Funde, Caesars problematischer Bericht, Bibracte und die Frage, was Rom an einer bereits komplexen Gesellschaft verändert."
  },
  "modul-7": {
    hero: "assets/srf/m07-roemer-schweiz.jpg",
    side: "assets/srf/m07-roemer-detail.jpg",
    kicker: "Antike Politik",
    title: "Von Athen und der Republik zum Imperium",
    text: "Modul 7 verbindet drei antike Ordnungsformen: die attische Demokratie mit ihrer direkten Bürgerbeteiligung, die römische Republik mit Senat und Magistraten und das römische Imperium als Herrschaft über große Räume.",
    sideText: "So wird sichtbar, wie sich politische Ordnung in der Antike verändert: von der Polis über die Republik bis zu Straßen, Heeren, Verwaltung und Alltag im Reich."
  },
  "modul-8": {
    hero: "assets/srf/m08-muenzschatz.jpg",
    side: "assets/srf/m08-roemer-experiment.jpg",
    kicker: "Vernetzung",
    title: "Geld, Handel und Vertrauen",
    text: "Tauschhandel stößt schnell an Grenzen. Geld vereinfacht Vergleich, Bezahlung und Fernhandel, weil viele Menschen denselben Münzen oder Werten gemeinsam Vertrauen schenken.",
    sideText: "Münzfunde, Handelswege und Großreiche zeigen, wie wirtschaftliche Vernetzung über Regionen, Sprachen und politische Grenzen hinaus funktioniert."
  },
  "modul-9": {
    hero: "assets/srf/m09-grosse-voelker.jpg",
    side: "assets/srf/m11-kreuzzug.jpg",
    kicker: "Religionen und Weltbilder",
    title: "Religionen als Normen-, Werte- und Herrschaftsordnungen",
    text: "Judentum, Christentum und Islam ordnen Welt, Gemeinschaft und Alltag. Religion wirkt historisch nicht nur als Glaube, sondern auch über Rituale, Texte, Regeln, Herrschaft und Bildungsnetze.",
    sideText: "Weltreligionen verbinden Menschen über große Räume hinweg und prägen Politik, Recht, Wissen und gesellschaftliche Zugehörigkeit."
  },
  "modul-10": {
    hero: "assets/srf/m10-verruecktes-mittelalter.jpg",
    side: "assets/srf/m10-mittelalter-schweiz.jpg",
    kicker: "Mittelalterliche Lebenswelt",
    title: "Herrschaft, Kirche und Alltag im Mittelalter",
    text: "Das Mittelalter besteht nicht nur aus Burgen und Rittern. Entscheidend sind Kirche, Stände, Klöster, Verteidigung, Arbeit, Küche, Hygiene, Rangordnungen und regionale Herrschaftsräume.",
    sideText: "Burgen, Schlösser, Klöster und Bündnisse zeigen, wie eng religiöse Ordnung, politische Macht und Alltag im Mittelalter verbunden sind."
  },
  "modul-11": {
    hero: "assets/srf/m11-kreuzzug.jpg",
    side: "assets/srf/m10-mittelalter-schweiz.jpg",
    kicker: "Städte und Wandel",
    title: "Märkte, Städte, Kreuzzüge und Überlieferung",
    text: "Das späte Mittelalter ist von wachsenden Städten, Handwerk, Märkten, Fernhandel, Pilgerwegen und religiösen Bewegungen geprägt. Zugleich müssen spektakuläre Erzählungen wie der Kinderkreuzzug kritisch geprüft werden.",
    sideText: "Das Modul verbindet Stadtgeschichte und Quellenkritik: Märkte und Mobilität verdichten Europa, aber viele Ereignisse sind nur über spätere Chroniken überliefert."
  },
  "modul-12": {
    hero: "assets/srf/m01-anthropozaen.jpg",
    side: "assets/srf/m02-1491.jpg",
    kicker: "Bilanz bis 1500",
    title: "1491, 1500 und die lange Wirkung früher Entwicklungen",
    text: "Das Abschlussmodul verbindet zwei Perspektiven: Amerika vor Kolumbus mit eigenen Gesellschaften und die Langzeitfolgen von Sprache, Landwirtschaft, Staat, Religion, Geld und Vernetzung bis an die Schwelle der Neuzeit.",
    sideText: "1492 ist ein Einschnitt, aber nicht der Anfang amerikanischer Geschichte. Zugleich reichen viele vormoderne Entwicklungen weit über 1500 hinaus."
  }
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss");
}

function makeSourceKey(moduleId, title) {
  return `${moduleId}::${normalize(title)}`;
}

const sourceDetails = {
  [makeSourceKey("modul-1", "Harari-PDF")]: {
    badge: "S. 132 · Kooperationsnetze",
    locator: "Harari-PDF, S. 132",
    pdfPage: 132,
    pdfSearch: "erfundene Ordnungen",
    quote: "„erfundene Ordnungen“",
    thesis:
      "Harari erklärt hier, dass große menschliche Gesellschaften auf gemeinsam anerkannten Vorstellungen beruhen: auf Gesetzen, Rechten, Göttern, Staaten, Ordnungen und Institutionen, an die viele Menschen zugleich glauben.",
    passage:
      "Harari beschreibt große Gesellschaften als Kooperationsnetze, die nicht allein durch biologische Nähe oder persönliche Bekanntschaft zusammenhalten. Menschen können in viel größeren Verbänden leben, weil sie sich auf dieselben erfundenen Ordnungen beziehen: auf Gesetze, Herrschaft, Geld, religiöse Vorstellungen oder gemeinsame Rechte. Genau darin liegt der Schlüssel für den Beginn historischer Weltdeutung in diesem Kurs. Geschichte meint hier nicht einfach alles Vergangene, sondern eine von Menschen geordnete Welt, in der Regeln, Institutionen und gemeinsame Vorstellungen ganze Gesellschaften tragen."
  },
  [makeSourceKey("modul-1", "SRF: Anthropozän")]: {
    badge: "SRF-school-Seite · Langzeitlinie",
    locator: "SRF school: Anthropozän – Das Zeitalter des Menschen",
    thesis:
      "Die Hauptthese der Seite lautet: Die Erfolgsgeschichte menschlichen Fortschritts ist immer auch eine Geschichte unerwarteter Schäden. Seit Feuer, Landwirtschaft, Metallbau, Hochmittelalter, Industrialisierung und fossilen Brennstoffen greift der Mensch so tief in Erde, Luft und Wasser ein, dass sogar von einem neuen Erdzeitalter gesprochen wird.",
    passage:
      "Die Seite spannt ausdrücklich den Bogen von Feuer über Landwirtschaft, Metall und Hochmittelalter bis zu Industrialisierung und fossilen Brennstoffen. Für das Modul ist daran entscheidend, dass Geschichte als Folge aufeinander aufbauender Eingriffe in Landschaft, Rohstoffe und Lebensräume sichtbar wird.",
    itemsLabel: "Auf der SRF-Seite angelegte Stoffstruktur:",
    relevantItems: [
      { title: "Die Kosten des Fortschritts", note: "Von Jungsteinzeit und Ägypten über Römer und Hochmittelalter bis zu Industrie und fossilen Brennstoffen." },
      { title: "Ein neues Erdzeitalter?", note: "Anthropozän als Frage nach dauerhaft geologisch sichtbaren menschlichen Spuren." },
      { title: "Lösungen und Gegenmaßnahmen", note: "Dirk Steffens trifft Forschende, Ingenieurinnen und Umweltfachleute, die Schäden mindern oder neue Lösungen suchen." }
    ],
    relatedLabel: "Von SRF auf dieser Seite zusätzlich verlinkt:",
    relatedItems: [
      { title: "Hoffnung für die Ozeane – Helden der Meere", note: "Menschliche Eingriffe, Überfischung und konkrete Schutzprojekte.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/hoffnung-fuer-die-ozeane-helden-der-meere" },
      { title: "Erfolgreiche Renaturierung – Paradiese aus Menschenhand", note: "Drei Renaturierungsprojekte; Schäden und mögliche Umkehrprozesse.", link: "https://www.srf.ch/sendungen/school/physik-chemie-biologie/erfolgreiche-renaturierung-paradiese-aus-menschenhand" },
      { title: "Gefährliche Desertifikation – Planet Sand", note: "Wüstenbildung, Ressourcenknappheit und menschengemachte ökologische Krisen.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/gefaehrliche-desertifikation-planet-sand" }
    ],
    whyHere:
      "Die Seite gehört in Modul 1, weil sie den ganzen Kurs von Anfang an als Langzeitgeschichte menschlicher Eingriffe ordnet und nicht erst am Schluss als Umwelt-Nachtrag auftaucht.",
    mustKnow: [
      "Feuer, Landwirtschaft, Metallbau, Hochmittelalter und Industrialisierung werden als eine zusammenhängende Eingriffsgeschichte erzählt.",
      "Fortschritt bringt nicht nur Nutzen, sondern auch Schäden an Boden, Wasser, Luft und Lebensräumen hervor.",
      "Die Frage nach dem Anthropozän verschiebt Geschichte von Einzelereignissen zu langfristigen Folgen."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Geschichte bestehe nur aus Herrschern, Kriegen und Daten und habe mit Naturveränderung nichts zu tun."
  },
  [makeSourceKey("modul-2", "Harari-PDF")]: {
    badge: "S. 30 · Frühe Sapiens",
    locator: "Harari-PDF, S. 30",
    pdfPage: 30,
    pdfSearch: "kaum einen Vorteil",
    quote: "„kaum einen Vorteil“",
    thesis:
      "Die Passage nimmt jede einfache Fortschrittserzählung zurück: Frühe Sapiens erscheinen zunächst nicht als selbstverständlich überlegene Sieger, sondern als eine Menschenart unter mehreren.",
    passage:
      "Harari beschreibt die frühen Sapiens in Ostafrika als Menschen, die zwar äußerlich modern wirken, gegenüber anderen Menschenarten aber anfangs keinen klaren Vorsprung besitzen. Damit wird die Entwicklung des Menschen bewusst entdramatisiert: Unsere Art tritt nicht von Beginn an als offensichtlicher Sieger auf. Für das Modul ist diese Passage wichtig, weil sie Frühgeschichte als offene Situation zeigt. Mehrere Menschenarten existieren nebeneinander, und Ausbreitung muss historisch erklärt werden: durch Lernen, Anpassung, Kooperation, Werkzeuggebrauch und Bewegung durch sehr unterschiedliche Räume."
  },
  [makeSourceKey("modul-2", "SRF: 1491")]: {
    badge: "SRF-school-Film · Migration",
    locator: "SRF school: 1491 – Amerika vor Kolumbus",
    thesis:
      "Die Hauptthese der Seite lautet: Amerikas Geschichte beginnt nicht erst 1492. Lange vor Kolumbus lebten dort zahlreiche indigene Völker mit eigenen Sprachen, politischen Ordnungen, Landwirtschaftsformen, Künsten und Wissenssystemen.",
    passage:
      "Der Film arbeitet mit der Frühbesiedlung Amerikas vor etwa 18'000 bis 20'000 Jahren, mit Wegen über die Landbrücke zwischen Ostsibirien und Alaska sowie mit Fahrten in Kanus. Er zeigt damit konkret, dass Anpassung, Bewegung und Umweltwissen Grundmuster früher Menschheitsgeschichte sind.",
    itemsLabel: "Auf der SRF-Seite angelegte Stoffstruktur:",
    relevantItems: [
      { title: "Die ersten Menschen Amerikas", note: "Landbrücke, Kanus, 18'000–20'000 Jahre, über 2000 Sprachen, mündliche Wissensweitergabe." },
      { title: "Soziale und politische Strukturen", note: "Stämme, Bündnisse und Reiche von der Irokesen-Konföderation bis Azteken und Inka." },
      { title: "Landwirtschaft, Jagd und Spiritualität", note: "Terrassenbau, Mais, Quinoa, Kartoffeln, Bohnen, Jagd und religiöse Weltdeutung." },
      { title: "Kunst und kulturelles Erbe", note: "Felsbilder, Totempfähle, Mayaschrift, Steinmarkierungen und spätere Kämpfe um Rückführung." }
    ],
    relatedLabel: "Von SRF auf dieser Seite zusätzlich verlinkt:",
    relatedItems: [
      { title: "Epochale Umbrüche – Ein Moment in der Geschichte", note: "Historische Wendepunkte und Einschnitte in vergleichender Perspektive.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/epochale-umbrueche-ein-moment-in-der-geschichte" },
      { title: "In die Neue Welt – Amerigo Vespucci", note: "Entdeckungsnarrative und europäische Benennung Amerikas.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/in-die-neue-welt-amerigo-vespucci-der-mann-der-amerika-seinen-namen-gab" },
      { title: "Indigene Völker: Ohne Tiere keine Menschen", note: "Naturbeziehung, Mythen, Rituale und Tierwelt aus indigener Perspektive.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/indigene-voelker-ohne-tiere-keine-menschen" }
    ],
    whyHere:
      "Die Seite gehört in Modul 2, weil frühe Menschheitsgeschichte hier nicht abstrakt über Evolution, sondern konkret über Wege, Räume, Behausungen, Sprachen und Überlebensstrategien greifbar wird.",
    mustKnow: [
      "Die ersten Menschen Amerikas erreichen den Kontinent vor rund 18'000 bis 20'000 Jahren über Landbrücke und Kanus.",
      "Unterkünfte und Lebensweisen werden an Klima und Landschaft angepasst: Zelt, Lehmhaus, Iglu.",
      "Amerika ist lange vor 1492 von vielen Sprachen, Gesellschaften und politischen Strukturen geprägt."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Amerikas Geschichte beginne erst mit Kolumbus oder lasse sich als leere Bühne vor der europäischen Ankunft erzählen."
  },
  [makeSourceKey("modul-2", "YouTube: Frühmenschen und Menschwerdung")]: {
    badge: "YouTube-Film · Frühmenschen",
    locator: "YouTube-Video: Frühmenschen und Menschwerdung",
    thesis:
      "Der Film soll Frühgeschichte direkter an Menschenarten, Werkzeugen, Feuer und körperlicher Entwicklung festmachen als die bloße Langzeitperspektive.",
    passage:
      "Für dieses Modul dient der Nutzerfilm als ergänzende Filmgrundlage zu Menschenarten, Werkzeuggebrauch, Feuer und früher Anpassung. Er stärkt genau den Teil, der in 1491 kaum vorkommt: frühe Menschenformen vor den späteren komplexen Gesellschaften.",
    whyHere:
      "Der Film gehört in Modul 2, weil hier die biologische und technische Frühphase des Menschen sichtbar werden muss, bevor Sprache, Mythen oder Staaten behandelt werden.",
    mustKnow: [
      "Frühgeschichte umfasst mehrere Menschenarten und nicht nur Homo sapiens.",
      "Werkzeuggebrauch und Feuer sind keine Randdetails, sondern historische Wendepunkte.",
      "Die Entwicklung des Menschen verläuft nicht als einfache Gerade."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Frühmenschen seien bloß primitive Vorformen ohne eigene historische Bedeutung."
  },
  [makeSourceKey("modul-2", "Planet Schule: Die außergewöhnliche Reise der Menschheit")]: {
    badge: "Planet Schule · Hominisation im Überblick",
    locator: "Planet Schule: Die außergewöhnliche Reise der Menschheit",
    thesis:
      "Der Film erzählt die Menschwerdung als lange Kette von Anpassung, Werkzeugtechnik, Kooperation, Migration und weltweiter Ausbreitung statt als einzelne Wundererfindung.",
    passage:
      "Für Modul 2 ist dieser Überblick wichtig, weil er die sehr langen Frühphasen der Menschheit in eine zusammenhängende Entwicklung ordnet. Frühmenschen, Feuer, Werkzeuggebrauch, Wanderungen und spätere globale Ausbreitung erscheinen dadurch nicht als lose Einzelfakten, sondern als aufeinander aufbauende Schritte. Genau so wird sichtbar, dass der Aufstieg des Homo sapiens kein plötzlicher Sprung, sondern das Ergebnis vieler kleiner, oft langsamer Veränderungen ist.",
    whyHere:
      "Die Ressource trägt den roten Faden des Moduls: von frühen Menschenarten bis zur globalen Präsenz des Homo sapiens.",
    mustKnow: [
      "Menschwerdung umfasst biologische, technische und soziale Veränderungen zugleich.",
      "Werkzeuggebrauch, Feuer und Kooperation greifen als lange Entwicklung ineinander.",
      "Die Ausbreitung des Homo sapiens ist Teil einer globalen Migrationsgeschichte."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, die Menschheitsgeschichte beginne erst mit Sesshaftigkeit oder verlaufe in wenigen isolierten Sprüngen."
  },
  [makeSourceKey("modul-2", "ZDF Schule: Stammbaum")]: {
    badge: "ZDF Schule · Verzweigte Menschwerdung",
    locator: "ZDF Schule: Stammbaum",
    thesis:
      "Das Material ersetzt die alte Leiter des Fortschritts durch ein Geflecht aus mehreren Menschenarten, Überschneidungen und Abbrüchen.",
    passage:
      "Der Stammbaum ist für dieses Modul besonders stark, weil er Koexistenz sichtbar macht. Homo sapiens steht nicht am Ende einer sauberen Aufwärtslinie, sondern lebt zeitweise neben Neandertalern, Denisova-Menschen und anderen Gruppen. Dadurch wird klar: Frühgeschichte muss mit Gleichzeitigkeit, Aussterben und unterschiedlichen Entwicklungspfaden arbeiten. Gerade diese Offenheit macht die Frage historisch interessant, warum sich eine Linie am Ende stärker durchsetzt als andere.",
    whyHere:
      "Die Ressource zerschlägt die lineare Fortschrittserzählung direkt am Anfang des Moduls.",
    mustKnow: [
      "Frühe Menschheitsgeschichte ist verzweigt und nicht eindimensional.",
      "Mehrere Menschenarten leben zeitweise gleichzeitig.",
      "Aussterben und Koexistenz gehören wesentlich zur Frühgeschichte."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, der moderne Mensch sei zwangsläufig und geradlinig aus einfacheren Vorformen hervorgegangen."
  },
  [makeSourceKey("modul-2", "ZDF / Terra X: Wissenshappen – Faustkeil")]: {
    badge: "Terra X · Faustkeil als Technikspur",
    locator: "ZDF / Terra X: Wissenshappen – Faustkeil",
    thesis:
      "Der Faustkeil verdichtet frühe Technikgeschichte in einem einzigen Gegenstand: Materialwahl, Planen, Schlagtechnik und Weitergabe von Können.",
    passage:
      "Das Material ist für Modul 2 deshalb so nützlich, weil es Technikgeschichte konkret macht. Ein Faustkeil ist nicht bloß ein Stein, sondern ein bearbeitetes Werkzeug mit klarer Form, praktischer Funktion und erlernbarer Herstellung. Dahinter stehen Beobachtung geeigneter Rohstoffe, ein Zielbild im Kopf und handwerkliche Erfahrung. Genau daran wird sichtbar, dass frühe Menschen nicht nur biologisch, sondern auch technisch und kulturell lernen mussten.",
    whyHere:
      "Der Faustkeil verbindet Körper, Denken, Material und Weitergabe von Wissen in einer einzigen Spur.",
    mustKnow: [
      "Werkzeuge setzen Planung und Übung voraus.",
      "Rohstoffwissen ist Teil früher Technik.",
      "Technikgeschichte beginnt lange vor Metall und Schrift."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, frühe Werkzeuge seien roh und historisch wenig aussagekräftig."
  },
  [makeSourceKey("modul-2", "Arbeitspräsentation: Hominisation – Zeitleiste")]: {
    badge: "Lokale Präsentation · Zeitraster",
    locator: "Arbeitspräsentation: Hominisation – Zeitleiste",
    thesis:
      "Die Präsentation ordnet Alt-, Mittel- und Jungsteinzeit sauber hintereinander und macht sichtbar, wie lang die Frühgeschichte vor Sesshaftigkeit und Staat eigentlich dauert.",
    passage:
      "Dieses Material ist vor allem als Zeitgerüst wichtig. Es hilft, die Hominisation nicht in wenige spektakuläre Momente zu zerlegen, sondern als sehr langen Zeitraum zu sehen, in dem Werkzeuggeschichte, Klimawechsel, Wanderungen und verschiedene Menschenarten ihren Platz haben. Gerade weil Schüler*innen frühe Geschichte oft zeitlich unterschätzen, schafft die Zeitleiste hier ein belastbares Überblickswissen.",
    whyHere:
      "Das Material stabilisiert die Chronologie des Moduls und ordnet die Frühgeschichte vor den späteren Umbrüchen.",
    mustKnow: [
      "Paläolithikum, Mesolithikum und Neolithikum bilden große Frühphasen.",
      "Die längste Zeit menschlicher Geschichte liegt vor Städten und Staaten.",
      "Chronologie ist nötig, um Brüche wie Sesshaftigkeit überhaupt zu gewichten."
    ]
  },
  [makeSourceKey("modul-3", "Harari-PDF")]: {
    badge: "S. 33 · Kognitive Revolution",
    locator: "Harari-PDF, S. 33",
    pdfPage: 33,
    pdfSearch: "kognitive Revolution",
    quote: "„kognitive Revolution“",
    thesis:
      "Harari bezeichnet die entscheidende Wende der Menschheitsgeschichte als geistige und sprachliche Veränderung: Menschen können über Abwesendes, Zukünftiges und Erfundenes sprechen.",
    passage:
      "Harari benennt den Zeitraum zwischen ungefähr 70'000 und 30'000 Jahren vor heute als kognitive Revolution. Gemeint ist damit nicht bloß eine größere Wortzahl, sondern eine neue Qualität des Denkens und Sprechens. Menschen können über Dinge reden, die gerade nicht vor ihnen liegen: über Vergangenes und Zukünftiges, über Gefahren, Götter, Gruppen, Regeln und gemeinsam vorgestellte Ordnungen. Diese Passage trägt das Modul, weil sie erklärt, warum aus bloßer Verständigung symbolische Welten entstehen konnten. Sprache wird hier zur Grundlage von Mythos, Ritual, Zugehörigkeit und großer Kooperation."
  },
  [makeSourceKey("modul-3", "SRF: 1491")]: {
    badge: "SRF-school-Film · Zeichenwelten",
    locator: "SRF school: 1491 – Amerika vor Kolumbus",
    thesis:
      "Die Seite macht sichtbar, dass Geschichte vor 1492 bereits in Zeichen, Bildern, Monumenten und Schrift greifbar wird. Kultur erscheint hier nicht als Nebensache, sondern als tragendes Ordnungssystem.",
    passage:
      "Für dieses Modul sind besonders die sichtbaren Zeichenwelten wichtig: Felsbilder, Totempfähle, Alltagsgegenstände und Mayaschrift. Der Film macht daran anschaulich, dass frühe Gesellschaften ihre Welt nicht nur praktisch nutzten, sondern auch deuteten, erinnerten und symbolisch ordneten.",
    itemsLabel: "Auf der SRF-Seite hier besonders wichtig:",
    relevantItems: [
      { title: "Felsbilder", note: "Handabdrücke, Ocker und Kohle als frühe Bildspeicher historischer Erinnerung." },
      { title: "Totempfähle", note: "Holzmonumente als Familiengeschichte, Herkunft und öffentlicher Erinnerungsort." },
      { title: "Schriftkultur", note: "Mayaschrift mit rund 800 Hieroglyphen als Beleg für komplexe Zeichenwelten." },
      { title: "Steinmarkierungen", note: "Orientierung, Raumwissen und Wegführung in der Landschaft." }
    ],
    whyHere:
      "Die Seite gehört in Modul 3, weil sie Sprache und Symbolfähigkeit in sichtbare historische Spuren übersetzt und damit den Übergang von bloßer Kommunikation zu kultureller Ordnung zeigt.",
    mustKnow: [
      "Felsbilder sind keine Dekoration, sondern Speicher von Erinnerung, Weltdeutung und Handlung.",
      "Totempfähle erzählen Herkunfts- und Familiengeschichte öffentlich und dauerhaft.",
      "Mayaschrift zeigt, dass komplexe Zeichenwelten und Schriftkultur lange vor Europa oder Kolumbus vorhanden sind."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Vorzeit sei eine stumme, symbolarme Phase ohne komplexe Ordnungssysteme."
  },
  [makeSourceKey("modul-3", "SRF Einstein: Rätselhafte Höhlenmalereien")]: {
    badge: "SRF Einstein · Höhlenmalereien",
    locator: "SRF Einstein: Rätselhafte Höhlenmalereien",
    thesis:
      "Der Film macht klar, dass frühe Bilder nicht nur Schmuck sind, sondern Fragen nach Symbolen, Erzählung, Ritual und Weltdeutung öffnen.",
    passage:
      "Die Ressource bringt ein direktes Beispiel prähistorischer Kunst in das Modul: Höhlenmalereien als Spur dafür, dass Menschen Erlebnisse, Tiere, Rituale und Vorstellungen bildlich festhielten.",
    whyHere:
      "Der Film gehört in Modul 3, weil die kognitive Revolution an konkreten Symbolspuren sichtbar werden muss und nicht bloß als abstrakte Sprachtheorie stehen darf.",
    mustKnow: [
      "Höhlenmalereien sind historische Quellen für Symbolfähigkeit.",
      "Bilder können Erinnerung, Ritual oder Weltdeutung tragen.",
      "Kunst gehört von Anfang an zur Geschichte menschlicher Ordnungen."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, frühe Kunst sei nur Dekoration und sage wenig über Gesellschaft aus."
  },
  [makeSourceKey("modul-3", "National Geographic: Frühgeschichte und Höhlenkunst")]: {
    badge: "National Geographic · Frühgeschichte und Bildwelten",
    locator: "National Geographic: Frühgeschichte und Höhlenkunst",
    thesis:
      "Der Themenraum erweitert Höhlenkunst von einem Einzelbeispiel zu einem größeren Feld früher Bild- und Zeichenwelten.",
    passage:
      "Für dieses Modul ist die Seite hilfreich, weil sie Höhlenkunst nicht isoliert, sondern als Teil größerer Fragen nach Symbolik, Ritual, Erinnerung und visueller Ordnung behandelt. Handabdrücke, Tierdarstellungen, Farbpigmente und schwer zugängliche Höhlenräume zeigen, dass Bilder in frühen Gesellschaften mehr waren als bloßer Schmuck. Sie gehören zu einer Welt, in der Menschen Erlebnisse deuten, Zugehörigkeit ausdrücken und ihre Umwelt symbolisch fassen.",
    whyHere:
      "Das Material verbreitert den Blick von einem einzelnen Höhlenfilm zu einer größeren Geschichte früher Bildsprachen.",
    mustKnow: [
      "Höhlenkunst ist eine historische Quelle für Denken und Deuten.",
      "Bilder, Zeichen und Farben schaffen gemeinsame Bedeutung.",
      "Frühe Symbolwelten lassen sich international und nicht nur lokal betrachten."
    ]
  },
  [makeSourceKey("modul-4", "SRF: 1491")]: {
    badge: "SRF-school-Film · Lebensformen",
    locator: "SRF school: 1491 – Amerika vor Kolumbus",
    thesis:
      "Die Seite widerspricht der Vorstellung primitiver Frühgesellschaften. Sie zeigt vielmehr hoch angepasste Lebensformen, die Klima, Landschaft und Ressourcen sehr genau lesen und nutzen.",
    passage:
      "Der Film zeigt verschiedene Lebensformen in unterschiedlichen Räumen: Zelte aus Tierhäuten, Häuser aus Lehm und Iglus aus Schnee. Gerade diese Kontraste machen sichtbar, dass mobile Gesellschaften hochgradig an Klima, Landschaft und verfügbare Ressourcen angepasst waren.",
    itemsLabel: "Auf der SRF-Seite hier besonders wichtig:",
    relevantItems: [
      { title: "Behausungen", note: "Zelte aus Tierhäuten, Häuser aus Lehm, Iglus aus Schnee." },
      { title: "Ernährungsweisen", note: "Jagd, Sammeln, Terrassenlandwirtschaft und regionale Anpassung." },
      { title: "Mündliche Wissensweitergabe", note: "Überleben, Wege und Umweltwissen werden vor allem erzählt und gezeigt." }
    ],
    whyHere:
      "Die Seite gehört in Modul 4, weil sie mobile Lebensformen als eigenständige, wissensreiche Lebensweise zeigt und nicht bloß als unentwickelte Vorstufe zur Sesshaftigkeit.",
    mustKnow: [
      "Jäger-und-Sammler-Gesellschaften passen Behausungen, Wege und Ernährung sehr genau an ihre Umwelt an.",
      "Mündliche Überlieferung trägt praktisches Wissen über Tiere, Klima, Jagd und Orientierung.",
      "Mobilität ist eine historisch anspruchsvolle Form der Organisation."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, mobile Gruppen hätten planlos oder nur mangelhaft gelebt."
  },
  [makeSourceKey("modul-4", "YouTube: Jäger und Sammler")]: {
    badge: "YouTube-Film · Lebensform",
    locator: "YouTube-Video: Jäger und Sammler",
    thesis:
      "Der Film soll Jäger-und-Sammler-Gesellschaften ausdrücklich als eigenständige, wissensintensive Lebensform sichtbar machen.",
    passage:
      "Für dieses Modul ergänzt der Nutzerfilm die SRF-Ressource um eine direkte Auseinandersetzung mit Jagd, Sammeln, Mobilität, Umweltbeobachtung und alltäglicher Organisation.",
    whyHere:
      "Der Film gehört in Modul 4, weil dieses Modul die Vorzeit nicht als bloßen Mangelzustand, sondern als hoch angepasste Lebensform erklären muss.",
    mustKnow: [
      "Jagd und Sammeln verlangen genaue Umweltkenntnis.",
      "Mobilität folgt nicht dem Zufall, sondern saisonalen und räumlichen Logiken.",
      "Wissen wird vor allem praktisch und mündlich gesichert."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Jäger und Sammler hätten planlos oder ohne komplexe Ordnung gelebt."
  },
  [makeSourceKey("modul-4", "Harari-PDF")]: {
    badge: "S. 100 · Vor der Sesshaftigkeit",
    locator: "Harari-PDF, S. 100",
    pdfPage: 100,
    pdfSearch: "Zweieinhalb Millionen Jahre lang",
    quote: "„Zweieinhalb Millionen Jahre lang“",
    thesis:
      "Harari erinnert daran, dass Jagen und Sammeln nicht Randerscheinung, sondern die mit Abstand längste normale Lebensform der Menschheit waren.",
    passage:
      "Harari hält fest, dass Menschen über einen ungeheuer langen Zeitraum von Pflanzen und Tieren lebten, die ohne gezielte Aussaat, Zucht oder Stallhaltung existierten. Genau das verschiebt die Perspektive des Moduls: Jäger-und-Sammler-Gesellschaften erscheinen nicht als kurze primitive Vorstufe, sondern als die längste historische Normalform menschlichen Lebens. Erst vor diesem Hintergrund wird verständlich, wie tiefgreifend der Übergang zu Ackerbau, Viehzucht und Sesshaftigkeit wirklich war. Die Passage hilft deshalb, mobile Lebensweisen als ernst zu nehmende historische Ordnung zu begreifen."
  },
  [makeSourceKey("modul-4", "Saisonale Freiheit und politische Wahl")]: {
    quote: "„switching freely between modes of livelihood and organisation“",
    thesis:
      "Graeber und Wengrow betonen, dass frühe Gesellschaften nicht dauerhaft in einer einzigen politischen Form festlagen. Sie konnten je nach Jahreszeit, Ort und Anlass zwischen verschiedenen Lebens- und Ordnungsweisen wechseln.",
    passage:
      "Die Gegenposition richtet sich gegen das Bild, mobile Gesellschaften seien grundsätzlich klein, schlicht und politisch immer gleich. Graeber und Wengrow verweisen auf saisonale Wechsel zwischen verstreutem Leben und großen Zusammenkünften, auf Monumente und auf Gruppen, die bewusst zwischen strengerer und freierer Ordnung hin- und herwechselten. Vorzeit erscheint dadurch nicht nur als Anpassung an Umwelt, sondern auch als Feld sozialer Wahlmöglichkeiten. Für dieses Modul ist das wichtig, weil Mobilität dann zugleich ökologische und politische Kompetenz bedeutet.",
    whyHere:
      "Hier liegt einer der stärksten Unterschiede zu Harari: Er hebt die lange Normalform hervor, Graeber und Wengrow betonen innerhalb dieser Normalform die Vielfalt der politischen Möglichkeiten.",
    mustKnow: [
      "Mobile Gesellschaften konnten sich saisonal sehr unterschiedlich organisieren.",
      "Große Versammlungen oder Monumente widerlegen das Bild bloß kleiner, einfacher Gruppen.",
      "Vor Landwirtschaft gab es bereits bewusste soziale und politische Wahlmöglichkeiten."
    ]
  },
  [makeSourceKey("modul-5", "Harari-PDF")]: {
    badge: "S. 100 · Streitstelle",
    locator: "Harari-PDF, S. 100",
    pdfPage: 100,
    pdfSearch: "Der größte Betrug der Geschichte",
    quote: "„Der größte Betrug der Geschichte“",
    thesis:
      "Die landwirtschaftliche Revolution wird hier nicht als einfache Erfolgsgeschichte gelesen, sondern als widersprüchlicher Umbruch mit Nutzen, Belastungen und neuen Abhängigkeiten.",
    passage:
      "Harari überschreibt das Landwirtschaftskapitel bewusst provokativ und zwingt damit zu historischem Urteil. Seine Pointe ist nicht, dass Landwirtschaft nutzlos gewesen sei, sondern dass Ackerbau und Viehzucht einen widersprüchlichen Wandel auslösten: mehr Vorräte, größere Siedlungen und mehr Menschen auf der einen Seite, zugleich aber härtere Arbeit, einseitigere Ernährung, stärkere Abhängigkeit von Ernten, Eigentum und neue soziale Ungleichheiten auf der anderen. Die Passage ist für das Modul zentral, weil sie Sesshaftigkeit nicht als selbstverständlichen Fortschritt behandelt, sondern als tiefen Umbau von Alltag, Macht und Lebensrisiko."
  },
  [makeSourceKey("modul-5", "Landwirtschaft ohne Zwangslogik")]: {
    quote: "„the granaries-to-overlords tale simply isn’t true“",
    thesis:
      "Graeber und Wengrow bestreiten, dass Landwirtschaft zwangsläufig in Eliten, Steuern und Staat mündet. Für sie gibt es keinen einzigen festen Weg von Feldbau zu Unterordnung.",
    passage:
      "Die Gegenposition wendet sich gegen eine lineare Erzählung: zuerst Getreidebau, dann Vorräte, dann automatisch Herrschaft von oben. Graeber und Wengrow argumentieren stattdessen, dass Menschen Landwirtschaft in sehr verschiedenen Formen nutzten, mit älteren Lebensweisen kombinierten oder wieder zurücknahmen. Daraus folgt: Landwirtschaft verändert Ernährung, Arbeit und Siedlung tiefgreifend, aber sie legt nicht schon fest, ob daraus Königtum, Klassengesellschaft oder eine andere Ordnung entsteht. Für dieses Modul verschiebt das den Blick von der einen großen Revolution zu mehreren möglichen Wegen.",
    whyHere:
      "Genau hier prallen die Deutungen aufeinander: Harari liest den Übergang stark als belastenden Bruch, Graeber und Wengrow als offeneren Prozess mit Mischformen und Alternativen.",
    mustKnow: [
      "Landwirtschaft erzeugt nicht automatisch überall dieselbe politische Ordnung.",
      "Jagen, Sammeln, Gartenbau und Feldbau konnten lange nebeneinander bestehen.",
      "Aus dem Anbau von Pflanzen folgt nicht zwangsläufig sofort soziale Unterordnung."
    ]
  },
  [makeSourceKey("modul-5", "SRF: Pfahlbauer von Pfyn")]: {
    badge: "SRF-school-Film · Experimentalarchäologie",
    locator: "SRF school: Pfahlbauer von Pfyn",
    passage:
      "Im Zentrum stehen zwei Familien und zwei junge Männer, die vier Wochen wie vor rund 5700 Jahren leben. Der Film macht Sesshaftigkeit konkret über Hüttenbau, Steinbeile, Kolbenpfeile, Kleidung, Feuerstellen, Nahrung und die ständige Handarbeit, die eine feste Siedlung überhaupt erst trägt.",
    whyHere:
      "Der Film gehört in Modul 5, weil Sesshaftigkeit hier als Alltag aus Material, Mühe, Zeit und Versorgung sichtbar wird statt als abstrakter Entwicklungsschritt.",
    mustKnow: [
      "Sesshaftigkeit bedeutet Bau, Reparatur, Vorratshaltung und dauernde Handarbeit.",
      "Werkzeuge wie Steinbeile und Kolbenpfeile sind Teil einer festen, nicht nur mobilen Lebensordnung.",
      "Eine Siedlung funktioniert nur, wenn Wohnen, Nahrung, Feuer und Arbeit gemeinsam organisiert werden."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Sesshaftigkeit sei einfach bequemer oder automatisch fortschrittlicher gewesen."
  },
  [makeSourceKey("modul-5", "YouTube: Neolithische Revolution")]: {
    badge: "YouTube-Film · Streitfrage",
    locator: "YouTube-Video: Neolithische Revolution",
    thesis:
      "Der Film verschärft die Kernfrage des Moduls: Sesshaftigkeit ist nicht einfach Fortschritt, sondern zugleich Gewinn, Belastung und möglicher historischer Fehler.",
    passage:
      "Als zusätzliche Filmgrundlage setzt der Nutzerfilm die neolithische Revolution ausdrücklich unter Urteilsspannung. Damit passt er genau zur Frage, warum Landwirtschaft bei Harari so provokant beschrieben wird.",
    whyHere:
      "Der Film gehört in Modul 5, weil dieses Modul gerade nicht mit einer simplen Fortschrittserzählung enden darf.",
    mustKnow: [
      "Sesshaftigkeit bringt Vorräte und neue Siedlungen hervor.",
      "Sie erhöht zugleich Arbeit, Abhängigkeit und Ungleichheit.",
      "Die Bewertung der neolithischen Revolution bleibt eine begründete Urteilsfrage."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Landwirtschaft sei selbstverständlich nur ein historischer Gewinn gewesen."
  },
  [makeSourceKey("modul-5", "Materialdossier: Neolithisierung – Anfänge")]: {
    badge: "Lokales Dossier · Fruchtbarer Halbmond",
    locator: "Materialdossier: Neolithisierung – Anfänge",
    thesis:
      "Das Dossier verortet die ersten Schritte zu Ackerbau und Sesshaftigkeit im Fruchtbaren Halbmond und macht klar, dass dieser Wandel schrittweise und regional sehr unterschiedlich beginnt.",
    passage:
      "Für das Modul ist dieses Material wichtig, weil es den Anfang der Neolithisierung konkret aus dem Ende der Eiszeit heraus erklärt. Sammeln, Jagen, erstes Pflanzenmanagement, Tierhaltung und feste Siedlungsansätze entstehen nicht gleichzeitig an einem Tag, sondern in längeren Übergängen. Genau hier lässt sich auch der Deutungsstreit schärfen: Harari betont die Belastungen des Umbruchs, Graeber und Wengrow die Offenheit und Uneinheitlichkeit dieser frühen Wege.",
    whyHere:
      "Das Dossier verankert den Beginn der Sesshaftigkeit geografisch und historisch genauer.",
    mustKnow: [
      "Frühe Landwirtschaft beginnt im Fruchtbaren Halbmond.",
      "Neolithisierung ist ein Prozess, keine plötzliche Explosion.",
      "Der Übergang verbindet Klima, Nahrung, Tiere und neue Siedlungsformen."
    ]
  },
  [makeSourceKey("modul-5", "Materialdossier: Neolithisierung in Europa")]: {
    badge: "Lokales Dossier · Ausbreitung nach Europa",
    locator: "Materialdossier: Neolithisierung in Europa",
    thesis:
      "Ackerbau und Viehzucht breiten sich in Europa langsam, regional unterschiedlich und über mehrere Wege aus.",
    passage:
      "Das Dossier zeigt besonders klar, dass Neolithisierung nicht einfach wie eine einheitliche Welle über Europa rollt. Der Balkanraum, die Donau, das Mittelmeer und der Alpenraum werden unterschiedlich erfasst. In manchen Regionen ziehen Gruppen ein, anderswo werden Techniken übernommen oder gemischt. Gerade dadurch wird die Ausbreitung des Ackerbaus historisch greifbar: als langsame Umgestaltung Europas und nicht als kurzer Startschuss.",
    whyHere:
      "Das Material bringt den Übergang von den Ursprungsregionen in die europäische Entwicklungslinie des Kurses.",
    mustKnow: [
      "Neolithisierung Europas verläuft langsam und regional verschieden.",
      "Migration und Übernahme spielen beide eine Rolle.",
      "Der Alpenraum wird zu einer Kontaktzone dieser Entwicklung."
    ]
  },
  [makeSourceKey("modul-5", "Planet Schule: Göbekli Tepe – der älteste Tempel der Menschheit")]: {
    badge: "Planet Schule · Frühes Kultzentrum",
    locator: "Planet Schule: Göbekli Tepe – der älteste Tempel der Menschheit",
    thesis:
      "Göbekli Tepe verschiebt die übliche Reihenfolge: monumentale Kultbauten entstehen sichtbar, bevor der klassische Bauernstaat mit Palast, Beamten und Steuern greifbar wird.",
    passage:
      "Gerade dieses Material macht Modul 5 historisch schärfer. Die großen Steinsetzungen zeigen, dass religiöse Sammlung, gemeinsames Bauen und symbolische Ordnung schon sehr früh hohe Koordination verlangen konnten. Dadurch gerät die einfache Formel ins Wanken, erst Landwirtschaft habe automatisch Religion, Monumente und komplexe Organisation hervorgebracht. Göbekli Tepe zwingt dazu, Sesshaftigkeit, Kult und Herrschaft neu aufeinander zu beziehen.",
    whyHere:
      "Der Film setzt mitten in der Neolithisierung einen starken Gegenakzent zu linearen Modellen.",
    mustKnow: [
      "Monumentale Kultzentren können vor klassischer Staatlichkeit entstehen.",
      "Große Bauprojekte setzen schon früh Koordination und gemeinsame Deutung voraus.",
      "Religion, Sesshaftigkeit und Herrschaft folgen nicht immer derselben Reihenfolge."
    ]
  },
  [makeSourceKey("modul-6", "Harari-PDF")]: {
    badge: "S. 155–161 · Schrift und Bürokratie",
    locator: "Harari-PDF, S. 155 und S. 161",
    pdfPage: 155,
    extraPdfPages: [161],
    pdfSearch: "mit der Stimme ihrer Protagonisten",
    quote: "„mit der Stimme ihrer Protagonisten“",
    thesis:
      "Harari verbindet hier zwei zentrale Gedanken: Mit Schrift werden historische Akteure erstmals direkt hörbar, und zugleich entsteht Schrift eng verbunden mit Listen, Abgaben und Verwaltung.",
    passage:
      "Harari erklärt zunächst, dass Geschichte mit der Erfindung der Schrift erstmals mit der Stimme ihrer Protagonisten erzählt werden kann. Noch wichtiger für dieses Modul ist aber sein zweiter Punkt: Frühe Schrift entsteht nicht zuerst aus Literatur, sondern aus Listen, Besitzverhältnissen, Abgaben, Steuerbuchhaltung und bürokratischer Ordnung. Schreiben, Zählen und Verwalten gehören von Anfang an zusammen. Genau deshalb trägt die Passage das Hochkultur-Modul: Frühe Staaten brauchen nicht nur Herrschaft und Nahrung, sondern Verfahren, mit denen Menschen, Vorräte, Arbeit und Abgaben dauerhaft festgehalten und kontrolliert werden können."
  },
  [makeSourceKey("modul-6", "SRF: Eine kurze Geschichte über…")]: {
    badge: "dreiteilige Reihe · Folge Ägypten",
    locator: "SRF school: Eine kurze Geschichte über…",
    passage:
      "Die Folge zum Alten Ägypten erklärt die ungewöhnlich lange Stabilität des Reiches nicht mit einzelnen Herrschern, sondern mit festen Strukturen. Der Nil sorgt für berechenbare Ernten und Überschüsse. Beamte erfassen Abgaben, Bauleistungen und Besitz. Hieroglyphen sichern Verwaltung. Der Pharao steht an der Spitze, und mit der Maat wird Herrschaft als göttliche Ordnung verstanden. So erscheinen Tempel, Pyramiden und Gräber nicht als isolierte Monumente, sondern als Teil einer umfassenden Reichs- und Jenseitsordnung.",
    itemsLabel: "Auf der SRF-Seite hier konkret gemeint:",
    relevantItems: [
      {
        title: "Eine kurze Geschichte über... – Das Alte Ägypten",
        note: "Nil, Beamte und Hieroglyphenschrift als Basis dauerhafter Herrschaft."
      }
    ],
    whyHere:
      "Am Nil wird frühe Staatlichkeit besonders klar: Landwirtschaft, Bürokratie, Religion und Herrschaft greifen sichtbar ineinander.",
    mustKnow: [
      "Der Nil schafft verlässliche landwirtschaftliche Grundlagen.",
      "Beamtentum organisiert Abgaben, Arbeiten und Herrschaft.",
      "Hieroglyphenschrift stabilisiert Verwaltung und Langzeitordnung.",
      "Pharao und Maat verbinden politische Herrschaft mit göttlicher Ordnung.",
      "Tempel, Gräber und Pyramiden gehören zu einer Welt aus Herrschaft, Kult und Jenseitsvorstellungen."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, frühe Hochkulturen ließen sich vor allem durch Monumente und berühmte Herrscher erklären."
  },
  [makeSourceKey("modul-6", "YouTube: Hochkulturen")]: {
    badge: "YouTube-Film · Hochkulturen",
    locator: "YouTube-Video: Hochkulturen",
    thesis:
      "Der Film soll Hochkulturen als Verbindung von Überschuss, Schrift, Verwaltung, Religion und Herrschaft verdichten.",
    passage:
      "Der Film ergänzt das Ägypten-Beispiel durch den Blick auf allgemeine Merkmale früher Hochkulturen. Dadurch wird klar, dass Ägypten zwar ein besonders gut dokumentierter Fall ist, aber nicht die einzige Form früher Staatlichkeit. Der Vergleich mit anderen frühen Kulturen schärft, was Überschuss, Schrift, Verwaltung, Religion und Herrschaft gemeinsam leisten.",
    whyHere:
      "Ägypten wird dadurch nicht relativiert, sondern in eine breitere Entwicklung früher Staatsbildungen eingeordnet.",
    mustKnow: [
      "Hochkulturen beruhen auf Vorrat, Arbeitsteilung und Verwaltung.",
      "Schrift ist eng mit Ordnung und Herrschaft verbunden.",
      "Religion und politische Macht stabilisieren frühe Staaten."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Hochkulturen bestünden nur aus prachtvollen Monumenten."
  },
  [makeSourceKey("modul-6", "Städte ohne Könige?")]: {
    quote: "„the mere fact of urban life“",
    thesis:
      "Graeber und Wengrow widersprechen der Vorstellung, Stadtgröße führe automatisch zu Monarchie, Palästen oder festen Klassen. Große Siedlungen konnten politisch ganz unterschiedlich organisiert sein.",
    passage:
      "Die Gegenposition setzt nicht bei Ägypten als Gegenbeispiel an, sondern bei der allgemeinen Deutung früher Komplexität. Graeber und Wengrow verweisen auf große Orte, deren Planung, Dichte und Koordination sichtbar sind, ohne dass sie zwangsläufig eine klassische Herrschaftspyramide hervorbringen. Das macht einen entscheidenden Unterschied: Ägypten bleibt ein starkes Beispiel für frühen Staat, aber nicht jede größere Siedlung ist automatisch ein Staat nach demselben Muster. Für das Modul ist diese Passage wichtig, weil sie zwischen Komplexität und Hierarchie unterscheidet.",
    whyHere:
      "Hier wird die Leitfrage des Moduls verschärft: Aus Vorräten kann ein Staat werden, aber große Besiedlung und Koordination müssen nicht immer sofort im gleichen Herrschaftsmodell enden.",
    mustKnow: [
      "Große Siedlungen sind nicht automatisch Königsstaaten.",
      "Komplexität, Arbeitsteilung und Hierarchie sind historisch nicht identisch.",
      "Ägypten ist ein Weg früher Staatlichkeit, aber kein allgemeines Naturgesetz."
    ]
  },
  [makeSourceKey("modul-6", "Terra X / Planet Wissen: Çatalhöyük – Großsiedlung")]: {
    badge: "Terra X · Großsiedlung ohne Palast",
    locator: "Terra X / Planet Wissen: Çatalhöyük – Großsiedlung",
    thesis:
      "Çatalhöyük zeigt dichte Besiedlung, Kult und Hausverbände, ohne dass sofort ein klassischer Königsstaat sichtbar wird.",
    passage:
      "Für Modul 6 ist Çatalhöyük besonders fruchtbar, weil es zwischen Dorf und Staat liegt. Viele eng gebaute Häuser, Dachzugänge, Wandmalereien und Bestattungen im Haus zeigen eine hoch verdichtete Lebensform mit klarer sozialer Ordnung. Gleichzeitig fehlt das eindeutige Bild eines Palastes oder eines zentralen Herrschers. Genau daran lässt sich lernen, dass Komplexität, Verdichtung und Staat nicht dasselbe sind.",
    whyHere:
      "Das Material macht den Unterschied zwischen großer Siedlung und fertigem Staat anschaulich.",
    mustKnow: [
      "Çatalhöyük ist eine frühe Großsiedlung mit dichter Hausordnung.",
      "Komplexes Zusammenleben ist nicht automatisch schon Königtum.",
      "Verdichtung kann archäologisch sichtbar sein, bevor klassische Staatssymbole auftauchen."
    ]
  },
  [makeSourceKey("modul-6", "YouTube: 3D Çatalhöyük Project Animation")]: {
    badge: "3D-Animation · Siedlungsstruktur",
    locator: "YouTube: 3D Çatalhöyük Project Animation",
    thesis:
      "Die Animation übersetzt den Befund von Çatalhöyük in einen räumlichen Eindruck und macht Hausdichte, Dächer und Zugänge unmittelbar sichtbar.",
    passage:
      "Gerade bei frühen Großsiedlungen hilft die räumliche Vorstellung enorm. Die Animation zeigt, wie eng die Häuser stehen, warum Dächer als Verkehrsraum dienen und wie wenig das Ganze an spätere Straßensysteme oder Palastanlagen erinnert. So wird sichtbar, dass frühe Verdichtung anders organisiert sein kann als spätere Städte.",
    whyHere:
      "Das Material macht eine archäologische Beschreibung räumlich verständlich.",
    mustKnow: [
      "Dächer und Hausverbände strukturieren die Siedlung.",
      "Großsiedlung bedeutet nicht automatisch Stadt nach späterem Muster.",
      "Räumliche Rekonstruktion hilft, Archäologie konkret zu lesen."
    ]
  },
  [makeSourceKey("modul-6", "YouTube: Was ist eine \"Hochkultur\"?")]: {
    badge: "Begriffsfilm · Hochkultur klären",
    locator: "YouTube: Was ist eine \"Hochkultur\"?",
    thesis:
      "Der Film präzisiert, dass Hochkultur nicht an Pracht allein hängt, sondern an Schrift, Herrschaft, Spezialisierung, Verdichtung und dauerhaften Ordnungen.",
    passage:
      "Im Modul ist dieser Film besonders nützlich, weil er den Begriff Hochkultur vom Monumentenstaunen löst. Pyramiden oder Tempel sind sichtbare Ergebnisse, aber der Begriff meint mehr: Verwaltung, Abgaben, Arbeitsteilung, religiöse Ordnung, Zeichen- und Schriftsysteme. Genau diese Präzisierung braucht es, damit Ägypten historisch als Struktur und nicht nur als Bildwelt verstanden wird.",
    whyHere:
      "Der Film schärft den Fachbegriff, bevor er auf Ägypten und andere Frühstaaten angewendet wird.",
    mustKnow: [
      "Hochkultur meint dauerhafte komplexe Ordnung, nicht nur Monumente.",
      "Schrift, Verwaltung und Spezialisierung gehören zum Kern.",
      "Der Begriff muss präzise und nicht bloß dekorativ verwendet werden."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Harari-PDF · S. 150")]: {
    badge: "S. 150 · Größere Räume ziehen Gruppen in Netze",
    locator: "Harari-PDF, S. 150",
    pdfPage: 150,
    pdfSearch: "Weltreiche, Weltreligionen und globale Handelsnetze",
    quote: "„Weltreiche, Weltreligionen und globale Handelsnetze“",
    thesis:
      "Harari beschreibt die antike Entwicklung als Ausweitung größerer Macht-, Glaubens- und Handelsräume. Lokale Gruppen geraten dadurch in immer größere Netze von Herrschaft und Verkehr.",
    passage:
      "Für die Helvetier ist diese Buchstelle wichtig, weil sie den römischen Eingriff von 58 v. Chr. nicht bloß als Schlacht, sondern als Eingliederung in eine größere imperiale Ordnung lesbar macht. Rom kontrolliert Raum, Bewegung, Militär, Recht und Verkehrswege. Hararis Akzent liegt deshalb weniger auf keltischer Eigenwelt als auf der historischen Tendenz, dass immer größere Reiche kleinere politische Räume in umfassendere Ordnungen hineinziehen.",
    whyHere:
      "Die Buchstelle macht sichtbar, wie Harari den Bruch von der keltischen Schweiz zur römisch geordneten Welt lesen würde.",
    mustKnow: [
      "Harari liest antike Geschichte stark als Vergrößerung gemeinsamer Macht- und Verkehrsordnungen.",
      "Der römische Zugriff auf die Helvetier ist deshalb mehr als Krieg: Er verändert den politischen Raum.",
      "Wichtig ist die Eingliederung in größere Netze aus Herrschaft, Verkehr und Handel."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Graeber/Wengrow: Oppida ohne Einbahnstraße")]: {
    quote: "„the mere fact of urban life“",
    thesis:
      "Graeber und Wengrow bestreiten, dass größere Siedlungen, Handel und politische Verdichtung automatisch nur als Vorstufe eines Reiches gelesen werden dürfen.",
    passage:
      "Am Beispiel der keltischen oppida lässt sich diese Gegenposition gut erklären. Befestigte Zentren, Münzgeld, Fernkontakte und religiöse Orte zeigen eine komplexe Gesellschaft schon vor der römischen Eingliederung. Graeber und Wengrow verschieben deshalb den Blick: Nicht Rom macht die Helvetier erst historisch interessant, sondern die vorrömische keltische Welt besitzt bereits eigene Dichte, Wahlmöglichkeiten und politische Formen. Der entscheidende Unterschied zu Harari liegt hier im Gewicht der offenen Wege vor dem Imperium.",
    whyHere:
      "Diese Gegenposition schärft die Leitfrage des Moduls: Ist Rom der eigentliche Anfang größerer Ordnung, oder war die keltische Welt schon vorher komplex und eigenständig?",
    mustKnow: [
      "Oppida, Münzen und Fernkontakte beweisen vorrömische Komplexität.",
      "Komplexe Gesellschaften müssen nicht automatisch in einem einheitlichen Reich enden.",
      "Graeber und Wengrow betonen stärker alternative und nichtlineare Entwicklungen."
    ]
  },
  [makeSourceKey("modul-7-kelten", "HLS: Helvetier")]: {
    badge: "Historisches Lexikon der Schweiz · Grundlagenartikel",
    locator: "Historisches Lexikon der Schweiz: Helvetier",
    thesis:
      "Der Artikel ordnet die Helvetier als keltische Bevölkerungsgruppe des schweizerischen Mittellands ein und zeigt zugleich, dass ihre Geschichte über antike Texte und Archäologie zusammen gelesen werden muss.",
    passage:
      "Für diese Einheit ist der Artikel grundlegend, weil er drei Dinge bündelt: das Siedlungsgebiet der Helvetier, die politische Bedeutung der Wanderung von 58 v. Chr. und das Quellenproblem um Caesar. Die Helvetier werden dadurch nicht als mythisches Urvolk, sondern als historisch fassbare eisenzeitliche Gesellschaft sichtbar. Wichtig ist vor allem, dass Caesars Bericht nützlich, aber nicht neutral ist.",
    whyHere:
      "Der Artikel liefert die historische Grundordnung des Moduls: Wer die Helvetier waren, wo sie lebten und warum Caesar allein nicht genügt.",
    mustKnow: [
      "Die Helvetier gehören zur keltischen Welt des schweizerischen Mittellands.",
      "58 v. Chr. und Bibracte sind ein politischer Einschnitt.",
      "Die Forschung muss antike Texte und Archäologie miteinander verschränken."
    ],
    relatedLabel: "Zusätzliche lokale Vertiefungen:",
    relatedItems: [
      { title: "Stadtspiegel 2018: Schwerpunkt Kempraten", note: "Lokales Material zu Siedlungsraum und Verkehrsraum am oberen Zürichsee." },
      { title: "Archäologischer Jahresbericht 2004", note: "Ergänzendes lokales Grabungs- und Fundmaterial." },
      { title: "Römische Verkehrswege", note: "Vertiefung zum Übergang von keltischem Raum in römisch geordnete Verkehrsachsen." }
    ]
  },
  [makeSourceKey("modul-7-kelten", "SRF: Keltische Schätze der Berner Engehalbinsel")]: {
    badge: "SRF / Schweiz aktuell · Bern",
    locator: "SRF: Die keltischen Schätze der Berner Engehalbinsel",
    thesis:
      "Der Beitrag korrigiert Caesars Bild vom einfachen Bauernvolk. Die Funde sprechen für eine Gesellschaft, die reich, fromm, gebildet und weit vernetzt war.",
    passage:
      "Gerade dieser Beitrag ist für das Modul zentral, weil er den Streit um die Helvetier auf den Punkt bringt. Wo Caesar eher ein bäuerliches Volk beschreibt, zeigt die Archäologie kostbare Objekte, religiöse Spuren und Hinweise auf weite Kontakte. Das verändert die historische Deutung grundlegend: Die Helvetier erscheinen nicht als rohe Vorstufe Roms, sondern als komplexe spätkeltische Gesellschaft.",
    whyHere:
      "Hier wird das Bauernvolk-Klischee direkt archäologisch aufgebrochen.",
    mustKnow: [
      "Die Berner Engehalbinsel liefert starke archäologische Gegenargumente zu Caesars Klischee.",
      "Wohlstand, Religion und Vernetzung sind an konkreten Funden sichtbar.",
      "Archäologie kann antike Texte korrigieren."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Nationalmuseum: Warum die Kelten tapfer waren")]: {
    badge: "Nationalmuseum · Hallstatt und La Tène",
    locator: "Nationalmuseum: Warum die Kelten tapfer waren",
    thesis:
      "Der Beitrag ordnet die keltische Welt als frühe europäische Hochkultur ein und verbindet Hallstatt, La Tène, Metallhandwerk und Fernkontakte.",
    passage:
      "Für das Modul ist dieser Text vor allem am Anfang wichtig: Er erklärt, warum Hallstatt und La Tène keine bloßen Etiketten sind, sondern Entwicklungsphasen einer keltischen Kulturwelt mit Eisen, Schmuck, Waffen, Handel und regionalen Eliten. So wird verständlich, dass die Helvetier nicht erst mit Caesar in Erscheinung treten, sondern Teil einer längeren eisenzeitlichen Entwicklung sind.",
    whyHere:
      "Der Beitrag liefert den nötigen Überblick über die keltische Welt vor dem Fokus auf die Helvetier.",
    mustKnow: [
      "Hallstatt und La Tène sind die wichtigsten archäologischen Phasen keltischer Kultur.",
      "Metallhandwerk und Fernkontakte gehören zum Kern der keltischen Entwicklung.",
      "Die Helvetier sind Teil einer längeren eisenzeitlichen Vorgeschichte."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Swiss Spectator: Die Kelten in der Schweiz")]: {
    badge: "Überblick · Kelten in der Schweiz",
    locator: "Swiss Spectator: Die Kelten in der Schweiz",
    thesis:
      "Der Überblick verbindet Hallstatt, La Tène, oppida und den Übergang zur römischen Zeit zu einer längeren Entwicklung der keltischen Schweiz.",
    passage:
      "Diese Übersicht hilft, die Begriffe sauber zu ordnen: Hallstatt steht für eine frühe Phase, La Tène für eine spätere Blüte, und oppida markieren verdichtete Zentren kurz vor dem römischen Eingriff. Damit lässt sich die keltische Schweiz als Entwicklung verstehen und nicht nur als Episode direkt vor Caesar.",
    whyHere:
      "Die Übersicht schließt die Lücke zwischen allgemeiner Kelteneinführung und dem Spezialfall der Helvetier.",
    mustKnow: [
      "Die keltische Schweiz entwickelt sich über längere Eisenzeitphasen.",
      "Oppida zeigen politische und wirtschaftliche Verdichtung kurz vor Rom.",
      "Der Übergang zur römischen Zeit verändert einen bereits bestehenden Kulturraum."
    ],
    relatedLabel: "Weitere Überblicksmaterialien:",
    relatedItems: [
      { title: "Squix: Die Kelten in der Schweiz", note: "Ergänzende Übersicht zu Gruppen, Regionen und Grundzügen der keltischen Schweiz.", link: "https://www.squix.org/ottenbach/index.php?title=Die_Kelten_in_der_Schweiz" }
    ]
  },
  [makeSourceKey("modul-7-kelten", "Landesmuseum: Archäologie Schweiz")]: {
    badge: "Archäologischer Rahmen · Schweiz",
    locator: "Landesmuseum: Archäologie Schweiz",
    thesis:
      "Die Seite macht klar, dass Kelten und Helvetier nicht isoliert zu betrachten sind, sondern in einer viel breiteren archäologischen Landschaft der Schweiz liegen.",
    passage:
      "Für das Modul ist diese Seite weniger wegen eines einzelnen Arguments wichtig als wegen ihrer Einbettung: Fundorte, Siedlungsräume, Grabungen und Verkehrsachsen zeigen, dass die keltische Schweiz archäologisch dicht erschlossen und regional sehr verschieden ist. Damit wird sichtbar, warum Einzelorte wie Bern-Engehalbinsel oder Kempraten nur im Zusammenhang eines größeren Fundraums richtig verstanden werden.",
    whyHere:
      "Die Seite erweitert den Blick vom einzelnen Fund auf die gesamte archäologische Landschaft der Schweiz.",
    mustKnow: [
      "Keltische Geschichte der Schweiz ist archäologisch über viele Fundorte erschlossen.",
      "Einzelfunde werden erst im größeren Raumzusammenhang historisch aussagekräftig.",
      "Regionale Zentren, Verkehrsachsen und Fundlandschaften greifen ineinander."
    ],
    relatedLabel: "Regionale Ergänzungen:",
    relatedItems: [
      { title: "Stadtspiegel 2018: Schwerpunkt Kempraten", note: "Lokaler Fokus auf Siedlungsraum und Uferlage am oberen Zürichsee." },
      { title: "Archäologischer Jahresbericht 2004", note: "Grabungs- und Fundbericht als regionale Vertiefung." },
      { title: "Römische Verkehrswege", note: "Brücke vom keltischen Raum zur späteren römischen Infrastruktur." }
    ]
  },
  [makeSourceKey("modul-7-kelten", "Materialdossier: Die Kelten")]: {
    badge: "Lokales Dossier · Hallstatt bis Caesar",
    locator: "Materialdossier: Die Kelten",
    thesis:
      "Das Dossier erzählt die keltische Welt von Hallstatt über La Tène bis zu oppida und dem Einschnitt durch Caesar als längere eisenzeitliche Entwicklung.",
    passage:
      "Für das Modul ist dieses Dossier fast die Grundachse. Es verbindet Salz, Eliten und Wagenbestattungen der Hallstattzeit mit der künstlerisch und politisch verdichteten Welt der La-Tène-Zeit. Oppida, Druiden, Fernkontakte und Münzgeld erscheinen dadurch nicht als isolierte Schlagworte, sondern als zusammenhängende Entwicklung der späten Eisenzeit. Gerade so wird verständlich, dass die Helvetier Teil einer älteren keltischen Welt sind und nicht erst im Moment des römischen Eingriffs historisch sichtbar werden.",
    whyHere:
      "Das Dossier liefert die innere Entwicklung der keltischen Welt, bevor Caesar und Rom dominieren.",
    mustKnow: [
      "Hallstatt und La Tène markieren verschiedene Phasen keltischer Entwicklung.",
      "Oppida, Münzgeld und Fernkontakte zeigen politische und wirtschaftliche Verdichtung.",
      "Der Bruch durch Caesar trifft auf eine bereits komplexe Welt."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Arbeitspräsentation: Kelten – Überblick")]: {
    badge: "Lokale Präsentation · Klischee und Korrektur",
    locator: "Arbeitspräsentation: Kelten – Überblick",
    thesis:
      "Die Präsentation stellt bewusst stereotype Gallier- und Barbarenbilder neben die archäologische Wirklichkeit der keltischen Welt.",
    passage:
      "Dieses Material eignet sich besonders als Einstieg oder Zwischenstopp im Modul, weil es verbreitete Bilder offenlegt: Krieger, Palisadendorf, Druiden, Römerfeindschaft. Erst danach werden Hallstatt, La Tène, oppida, Funde und regionale Zentren dagegengesetzt. So wird nicht nur Stoff vermittelt, sondern auch ein verbreitetes Fehlbild der Kelten systematisch aufgebrochen.",
    whyHere:
      "Die Präsentation schärft den Blick dafür, was an populären Keltenbildern unhistorisch oder zu eng ist.",
    mustKnow: [
      "Keltenklischees stammen oft aus späteren Bildern und nationalen Erzählungen.",
      "Archäologie zeigt weit mehr als Krieger und Dörfer.",
      "Zwischen populärem Bild und historischem Befund liegt eine deutliche Lücke."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Planet Schule: Das Kelten-Experiment – Wie lebten die Kelten?")]: {
    badge: "Planet Schule · Alltag der Kelten",
    locator: "Planet Schule: Das Kelten-Experiment – Wie lebten die Kelten?",
    thesis:
      "Der Film macht keltische Gesellschaft materiell fassbar: Häuser, Vorräte, Handwerk, Arbeitsteilung und Versorgung stehen im Mittelpunkt.",
    passage:
      "Gerade dieses Material hilft, die keltische Welt aus der Sphäre bloßer Kriegerbilder zu holen. Hausbau, Werkzeuge, Kochen, Vorratshaltung und handwerkliche Arbeit zeigen, wie stark Alltag organisiert werden musste. Damit wird keltische Geschichte als Lebenswelt lesbar: mit Holz, Metall, Speicher, Körperarbeit und räumlicher Ordnung.",
    whyHere:
      "Der Film erdet die abstrakte Rede über Kelten in konkretem Alltag.",
    mustKnow: [
      "Keltische Gesellschaft besteht aus organisierter Arbeit und Versorgung.",
      "Hausbau und Vorratshaltung sind Kernbestandteile dieser Lebenswelt.",
      "Alltagsgeschichte korrigiert das reine Kriegerklischee."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Planet Schule: Altersbestimmung in der Archäologie")]: {
    badge: "Planet Schule · Datierung",
    locator: "Planet Schule: Altersbestimmung in der Archäologie",
    thesis:
      "Das Material erklärt, wie Archäologie überhaupt zu belastbaren Zeitangaben und Bauphasen kommt.",
    passage:
      "Für die Geschichte der Helvetier ist das keine Nebensache, sondern methodischer Kern. Ohne Datierungsmethoden wie C14, Dendrochronologie, Fundschichten oder Vergleichsfunde wüssten wir nicht sicher, welche Siedlung wann benutzt wurde oder wie sich Hallstatt, La Tène und gallo-römische Zeit unterscheiden lassen. Das Material sichert also die Grundlage aller Aussagen des Moduls ab.",
    whyHere:
      "Gerade im Kelten-Modul muss klar sein, woher historisches Wissen stammt.",
    mustKnow: [
      "Archäologische Zeitbestimmung beruht auf mehreren Methoden.",
      "Fundschichten und naturwissenschaftliche Verfahren ergänzen sich.",
      "Ohne Datierung bleiben Funde historisch viel unsicherer."
    ]
  },
  [makeSourceKey("modul-7-kelten", "Materialdossier: Archäologie")]: {
    badge: "Lokales Dossier · Methoden",
    locator: "Materialdossier: Archäologie",
    thesis:
      "Das Dossier erklärt Archäologie als systematische Arbeit am unterirdischen Archiv und verbindet Grabung, Stratigraphie, relative Chronologie und naturwissenschaftliche Datierung.",
    passage:
      "Dieses Material vertieft die methodische Seite des Moduls. Es zeigt, dass Funde nicht nur aufgehoben, sondern in Schichten, Kontexten und räumlichen Beziehungen gelesen werden. Gerade für die Kelten im Gebiet der heutigen Schweiz ist das entscheidend, weil viele Aussagen aus Siedlungsschichten, Münzfunden, Werkplätzen oder Grabkontexten stammen und nicht aus langen Eigenschilderungen der Kelten selbst.",
    whyHere:
      "Das Dossier macht sichtbar, warum Archäologie im Kelten-Modul die zentrale Wissensbasis bildet.",
    mustKnow: [
      "Archäologie liest Kontexte, nicht nur Einzelobjekte.",
      "Stratigraphie und Datierung sind Grundwerkzeuge historischer Rekonstruktion.",
      "Für die Kelten ersetzt Archäologie oft fehlende eigene Schriftquellen."
    ]
  },
  [makeSourceKey("modul-7-kelten", "SRF: Die Kelten und die Römer")]: {
    badge: "SRF · Kontaktzone",
    locator: "SRF: Die Kelten und die Römer",
    thesis:
      "Der Film zeigt den Übergang nicht als Totalersetzung, sondern als Kontaktzone aus Übernahme, Druck, Weiterleben und Neuordnung.",
    passage:
      "Das Material ist für die Einheit besonders stark, weil es Kelten und Römer nicht als zwei vollständig getrennte Welten behandelt. Straßen, Siedlungen, Ortslagen und materielle Spuren machen sichtbar, dass Rom auf bereits bestehende Räume trifft und diese überformt. Genau dadurch werden Kontinuitäten und Brüche konkret: Manche Orte bleiben wichtig, andere Funktionen ändern sich, neue Machtverhältnisse greifen in alte Strukturen ein.",
    whyHere:
      "Der Film verknüpft den späteisenzeitlichen Raum mit der gallo-römischen Überlagerung.",
    mustKnow: [
      "Römische Ordnung trifft auf vorhandene keltische Räume.",
      "Der Übergang besteht aus Kontinuitäten und Brüchen zugleich.",
      "Historische Veränderung zeigt sich oft an überlagerten Strukturen."
    ]
  },
  [makeSourceKey("modul-7-kelten", "PHBern: Kelten und gallo-römische Zeit")]: {
    badge: "PHBern · Übergänge",
    locator: "PHBern: Kelten und gallo-römische Zeit",
    thesis:
      "Das Ideenset ist für das Modul vor allem deshalb wertvoll, weil es die keltische und gallo-römische Zeit als zusammenhängenden Übergangsraum behandelt.",
    passage:
      "Für diese Einheit liefert das Material einen besonders brauchbaren Überblick über den Wandel von der keltischen Schweiz zur gallo-römischen Welt. Statt einen harten Schnitt zu behaupten, zeigt es, wie Orte, Praktiken und materielle Kultur in neue Ordnungen hineinragen. Genau das passt zur Leitfrage des Moduls: Was bleibt, was bricht ab und was wird von Rom umgedeutet oder neu organisiert?",
    whyHere:
      "Das Material bringt die Kategorie Übergang direkt auf den Punkt.",
    mustKnow: [
      "Keltische und gallo-römische Zeit müssen zusammen gelesen werden.",
      "Nicht alles endet abrupt mit dem römischen Eingriff.",
      "Übergänge lassen sich an Orten, Dingen und Praktiken verfolgen."
    ]
  },
  [makeSourceKey("modul-7", "YouTube: Griechenland, Polis und attische Demokratie")]: {
    badge: "Athen · Polis und Demokratie",
    locator: "YouTube-Video: Griechenland, Polis und attische Demokratie",
    thesis:
      "Der Film führt die Polis als politischen Grundraum Griechenlands ein und erklärt die attische Demokratie als direkte Bürgerordnung mit klaren Beteiligungsgrenzen.",
    passage:
      "Wichtig ist hier der Zusammenhang von Polis, Bürgerrecht und Volksversammlung. Die attische Demokratie erlaubt politischen Einfluss nicht allen Menschen, sondern freien männlichen Bürgern. Gerade deshalb eignet sich die Folge für Modul 7: Sie zeigt, dass politische Beteiligung in der Antike real und wirksam sein kann, aber immer auch Ausschlüsse produziert.",
    mustKnow: [
      "Die Polis ist ein Stadtstaat mit eigener Bürgerschaft und eigener politischer Ordnung.",
      "In Athen entscheiden Bürger in der Volksversammlung direkt über zentrale Fragen.",
      "Frauen, Metöken und Sklaven gehören nicht zum politischen Bürgerkörper."
    ]
  },
  [makeSourceKey("modul-7", "YouTube: Rom, Republik und politische Ordnung")]: {
    badge: "Rom · Republik vor dem Kaiserreich",
    locator: "YouTube-Video: Rom, Republik und politische Ordnung",
    thesis:
      "Der Film erklärt Rom zunächst nicht als Kaiserreich, sondern als Republik mit Senat, Magistraten, Volksversammlungen und einer spezifischen Mischung aus Ämterordnung und Elitenherrschaft.",
    passage:
      "Für Modul 7 ist diese Perspektive entscheidend, weil römische Geschichte sonst zu früh mit dem Imperium beginnt. Die Republik zeigt, wie Rom Macht verteilt, Ämter zeitlich begrenzt, aber dennoch soziale Ungleichheit und politische Konkurrenz beibehält. So wird verständlich, dass das spätere Imperium aus einer älteren republikanischen Ordnung hervorgeht.",
    mustKnow: [
      "Die römische Republik kennt keinen König, sondern Senat, Konsuln und weitere Ämter.",
      "Volksversammlungen und Magistrate gehören zur politischen Struktur Roms.",
      "Die Republik bleibt sozial ungleich und von Machtkämpfen der Führungsschichten geprägt."
    ]
  },
  [makeSourceKey("modul-7", "SRF: Römer in der Schweiz")]: {
    badge: "fünfteilige Reihe · Römer konkret",
    locator: "SRF school: Römer in der Schweiz",
    passage:
      "Die SRF-Seite ist keine Einzelfolge, sondern eine fünfteilige Reihe. Für das Modul tragen gerade diese konkreten Teilfilme die Wissensvermittlung: Kulturkontakt zwischen Kelten und Römern, Legionärsalltag, Bauten und Siedlungen, Familienleben und Ernährung sowie Straßen, Handel und bleibende Spuren römischer Herrschaft.",
    itemsLabel: "Auf der SRF-Seite besonders wichtige Folgen:",
    relevantItems: [
      { title: "Die Kelten und die Römer", note: "Kulturkontakt, Eroberung und Überlagerung bestehender Siedlungen." },
      { title: "Was sind Legionäre?", note: "Vindonissa, Militäralltag und die Rolle des einzigen Legionslagers im Gebiet der heutigen Schweiz." },
      { title: "Wo lebten die Römer in der Schweiz?", note: "Gutshöfe, Wasserleitungen, Heizungen, Bäder und römische Baukunst." },
      { title: "Wie lebten die Römer in der Schweiz?", note: "Wein, Aprikosen, Walnüsse, Familienleben, Religion und Alltag." },
      { title: "Strassen, Handel und was von den Römern geblieben ist", note: "Straßennetz, Tunnel, Handel, Zahlungsmittel und langfristige Infrastrukturfolgen." }
    ],
    whyHere:
      "Die Reihe gehört in Modul 7, weil Imperium hier an einem regionalen Raum konkret wird: Militär, Siedlung, Alltag, Infrastruktur und Kulturkontakt greifen ineinander.",
    mustKnow: [
      "Römische Herrschaft verändert Raum durch Straßen, Brücken, Lager und Verkehrsachsen.",
      "Imperium wirkt bis in Ernährung, Bauten, Tierhaltung und Familienalltag hinein.",
      "Römische Ordnung überlagert lokale keltische Strukturen statt einfach im leeren Raum zu entstehen."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, ein Imperium bestehe nur aus Eroberungskarten und Schlachten."
  },
  [makeSourceKey("modul-7", "SRF: Das Römer-Experiment")]: {
    badge: "SRF-school-Film · Rekonstruktion",
    locator: "SRF school: Das Römer-Experiment",
    passage:
      "Der Film arbeitet mit Rekonstruktion statt bloßer Beschreibung: Kochen, Werkzeuge, Gladiatorenausbildung und nachgestellte Alltagssituationen zeigen, wie stark imperiale Ordnung im Materiellen steckt. Genau deshalb ergänzt er die politische Reichsgeschichte durch Körper, Gegenstände und Routinen.",
    whyHere:
      "Der Film gehört in Modul 7, weil er Reichsgeschichte in Gegenstände, Körper und Arbeitsabläufe übersetzt.",
    mustKnow: [
      "Römischer Alltag wird über Experimente und Rekonstruktionen erschlossen.",
      "Kochen, Kämpfen und Arbeiten folgen materiellen Routinen und Techniken.",
      "Imperium zeigt sich nicht nur in Gesetzen, sondern auch in Werkzeugen, Gebäuden und Praktiken."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Alltagsgeschichte sei bloß schmückendes Beiwerk neben der politischen Geschichte."
  },
  [makeSourceKey("modul-8", "Harari-PDF")]: {
    badge: "S. 212 · Geld",
    locator: "Harari-PDF, S. 212",
    pdfPage: 212,
    pdfSearch: "Der Geruch des Geldes",
    quote: "„Der Geruch des Geldes“",
    thesis:
      "Harari erklärt Geld hier nicht als bloßes Metall, sondern als Vertrauenssystem, das Menschen über kulturelle Grenzen hinweg miteinander handeln lässt.",
    passage:
      "Harari eröffnet sein Geld-Kapitel mit Cortés, den Azteken, Gold, Kakaobohnen und Tuchballen. Gerade an diesem Kontrast zeigt er, dass Geld nicht einfach deshalb wirkt, weil ein bestimmtes Material an sich wertvoll wäre. Entscheidend ist vielmehr, dass Menschen demselben Mittel gemeinsam Tauschfähigkeit und Vertrauen zuschreiben. Für das Modul ist die Passage zentral, weil sie Handel und Vernetzung nicht bloß technisch erklärt. Geld wird hier zu einer historischen Ordnung, die Unterschiede von Sprache, Herkunft, Religion und politischem Raum überbrücken kann, ohne sie aufzuheben."
  },
  [makeSourceKey("modul-8", "SRF: Münzschatz von Ueken")]: {
    badge: "SRF-school-Film · Sachquelle",
    locator: "SRF school: Der Münzschatz von Ueken",
    passage:
      "Der Film verfolgt die Untersuchung von über 4000 römischen Silbermünzen aus dem Fricktal. Reinigung mit Sandstrahl- und Ultraschallgeräten, Bilder, Inschriften und Prägungen machen anschaulich, wie Historiker aus einem Fund Aussagen zu Herrschaft, Umlauf, Vermögen und möglicher Unsicherheit gewinnen.",
    whyHere:
      "Der Film gehört in Modul 8, weil Geld hier als Sachquelle sichtbar wird und nicht nur als abstraktes Wirtschaftswort.",
    mustKnow: [
      "Über 4000 Silbermünzen bilden einen außergewöhnlich dichten Quellenfund.",
      "Bilder, Inschriften und Prägungen verbinden Münzen mit Herrschaft und Umlauf.",
      "Ein Schatzfund kann auf Unsicherheit, Vermögensschutz oder Krisen verweisen."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Münzen sagten nur etwas über Preise und sonst nichts aus."
  },
  [makeSourceKey("modul-8", "SRF: Grosse Völker")]: {
    badge: "dreiteilige Reihe · Fernhandel",
    locator: "SRF school: Grosse Völker",
    thesis:
      "Die Reihe argumentiert gegen einen engen Europa-Blick: Karthager, Araber und Germanen werden als eigenständige Träger von Handel, Reichsbildung, Wissenschaft und Kultur sichtbar.",
    passage:
      "Die SRF-Seite ist eine dreiteilige Dokumentation. Für dieses Modul ist die ganze Reihe wichtig, weil sie Handel, Schriftsysteme, Wissenschaft und Reichsbildung ausdrücklich an drei verschiedenen Großräumen zeigt.",
    itemsLabel: "Auf der SRF-Seite besonders wichtige Folgen:",
    relevantItems: [
      {
        title: "Grosse Völker – Die Karthager",
        note: "Purpurhandel, See- und Handelsmacht, Alphabet als bleibendes Vermächtnis."
      },
      {
        title: "Grosse Völker – Die Araber",
        note: "Großreich, Islam, Mathematik, Medizin und offene Bildungsinstitutionen."
      },
      {
        title: "Grosse Völker – Die Germanen",
        note: "Siedlungen, Begegnung mit Rom, Wanderungen und kulturelle Nachwirkung."
      }
    ],
    whyHere:
      "Die Reihe gehört in Modul 8, weil Handel und Vernetzung hier nicht nur an Rom, sondern an mehreren Großräumen erklärt werden.",
    mustKnow: [
      "Die Karthager stehen für Seehandel, Purpur und wirtschaftliche Reichweite.",
      "Die Araber stehen für Wissenstransfer, Wissenschaft und Fernverbindungen.",
      "Die Germanen zeigen, dass auch Wanderung, Siedlung und Kontakt zu Rom Teil europäischer Vernetzung sind."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, historische Vernetzung sei im Kern nur eine römische oder rein europäische Leistung."
  },

  [makeSourceKey("modul-7", "Materialdossier: Römische Republik")]: {
    badge: "Lokales Dossier · res publica und Ständekonflikte",
    locator: "Materialdossier: Römische Antike – Republik",
    thesis:
      "Das Dossier erklärt die römische Republik als Mischordnung aus Senat, Magistraten, Volksversammlungen und sozialem Konflikt zwischen Patriziern und Plebejern.",
    passage:
      "Für das Modul ist dieses Dossier zentral, weil es die Republik nicht nur als Ämterordnung, sondern als umkämpfte politische Form zeigt. Volkstribunat, Zwölftafeln und der lange Konflikt zwischen Patriziern und Plebejern machen deutlich, dass römische Politik auf Konkurrenz, Regelbindung und sozialer Spannung zugleich beruhte. Erst dadurch wird verständlich, warum Rom keine direkte Demokratie wie Athen, aber auch keine Monarchie mehr war.",
    whyHere:
      "Das Dossier bringt die Republik als eigenständige politische Form auf den Punkt, bevor von Kaiserzeit und Imperium die Rede ist.",
    mustKnow: [
      "Die Republik verteilt Macht auf Senat, Magistrate und Volksversammlungen.",
      "Patrizier und Plebejer ringen über Jahrhunderte um Rechte und politischen Einfluss.",
      "Volkstribunat und Zwölftafeln zeigen, dass die Republik durch soziale Konflikte verändert wird."
    ]
  },
  [makeSourceKey("modul-7", "Materialdossier: Rom – Expansion und Krise")]: {
    badge: "Lokales Dossier · Punische Kriege bis Caesar",
    locator: "Materialdossier: Römische Antike – Expansion und Krise",
    thesis:
      "Das Dossier zeigt, dass römische Expansion wirtschaftlichen Gewinn und politische Größe bringt, aber zugleich die sozialen Grundlagen der Republik untergräbt.",
    passage:
      "Punische Kriege, Provinzen und Beute vergrößern Roms Macht, doch gerade dieser Erfolg verschärft die innere Krise. Landkonzentration, Sklavenarbeit, Verarmung der Plebs und der Aufstieg von Feldherren wie Marius, Sulla und Caesar machen klar, dass die Republik an ihren eigenen Erfolgen destabilisiert wird. Der Weg zum Prinzipat ist deshalb kein Betriebsunfall, sondern Ergebnis einer langen republikanischen Krise.",
    whyHere:
      "Das Dossier erklärt den Übergang von republikanischer Konkurrenz zur monarchischen Bündelung von Macht.",
    mustKnow: [
      "Expansion führt zu Provinzen, Beute und neuen Machtressourcen.",
      "Soziale Ungleichheit und Bürgerkriege verschärfen die Krise der Republik.",
      "Die Kaiserzeit entsteht aus einer langen Zuspitzung und nicht aus einem einzelnen Ereignis."
    ]
  },
  [makeSourceKey("modul-7", "Materialdossier: Römische Kaiserzeit")]: {
    badge: "Lokales Dossier · Augustus und Prinzipat",
    locator: "Materialdossier: Römische Antike – Kaiserzeit",
    thesis:
      "Das Dossier erklärt die Kaiserzeit als politische Neuordnung, in der Augustus republikanische Formen beibehält, aber tatsächliche Macht in einer Person bündelt.",
    passage:
      "Gerade Augustus zeigt, wie eng politische Symbolik und Herrschaft verbunden sind. Der Senat bleibt sichtbar, alte Titel bleiben in Gebrauch, und doch wird die Republik zur Fassade eines neuen Systems. Provinzen, Heer, Städte, Recht und Selbstdarstellung stabilisieren diese Ordnung. Die Kaiserzeit ist damit kein bloß militärischer Erfolg, sondern eine bewusst gestaltete Form imperialer Herrschaft.",
    whyHere:
      "Das Dossier macht aus dem abstrakten Begriff Kaiserzeit eine präzise politische Form.",
    mustKnow: [
      "Augustus bündelt Macht, ohne offen als König aufzutreten.",
      "Der Prinzipat erhält republikanische Begriffe, verändert aber ihren politischen Inhalt.",
      "Kaiserherrschaft stützt sich auf Heer, Provinzen, Städte, Recht und Symbolik."
    ]
  },
  [makeSourceKey("modul-7", "Materialdossier: Rom in der Schweiz")]: {
    badge: "Lokales Dossier · Helvetier, Provinzen und Romanisierung",
    locator: "Materialdossier: Römische Antike – Schweiz",
    thesis:
      "Das Dossier zeigt den Raum der heutigen Schweiz als Kontaktzone von Helvetiern, römischer Provinzordnung, Städten, Lagern und gallo-römischer Mischkultur.",
    passage:
      "Für das Modul ist dieses Dossier wichtig, weil es Imperium regional konkret macht. Von Caesars Sieg über die Helvetier über Aventicum und Vindonissa bis zu Provinzen wie Germania superior und Raetia wird sichtbar, wie Rom Räume neu ordnet. Zugleich zeigt das Dossier, dass Romanisierung keine Totalersetzung bedeutet: keltische Grundlagen, lokale Traditionen und römische Infrastruktur überlagern sich.",
    whyHere:
      "Das Dossier verbindet Reichsgeschichte mit einem konkreten Raum, den die Lernenden historisch verorten können.",
    mustKnow: [
      "58 v. Chr. ist für die Helvetier ein Einschnitt auf dem Weg in die römische Ordnung.",
      "Aventicum, Vindonissa und Provinzgrenzen machen römische Herrschaft sichtbar.",
      "Die gallo-römische Schweiz ist eine Mischwelt aus Kontinuität und Neuordnung."
    ]
  },
  [makeSourceKey("modul-9", "Harari-PDF")]: {
    badge: "S. 251 · Religion im Raum",
    locator: "Harari-PDF, S. 251",
    pdfPage: 251,
    pdfSearch: "Auf dem mittelalterlichen Markt von Samarkand",
    quote: "„Auf dem mittelalterlichen Markt von Samarkand“",
    thesis:
      "Harari beginnt Religion bewusst nicht mit einer Definition, sondern mit einem verdichteten historischen Raum, in dem Handel, Begegnung, Konkurrenz und kulturelle Vielfalt zusammenkommen.",
    passage:
      "Harari beginnt das Religionskapitel mit dem Markt von Samarkand und wählt damit bewusst keinen stillen Innenraum des Glaubens, sondern einen Ort dichter Begegnung. Händler, Münzen, Stoffe, Tiere, Reisende und Menschen aus verschiedenen Weltregionen treffen aufeinander. Religion erscheint dadurch nicht bloß als innerer Glaube, sondern als Teil historischer Räume, in denen Herrschaft, Austausch, Ordnung und Weltdeutung miteinander verflochten sind. Die Passage trägt das Modul, weil sie Religion von Anfang an in Verkehr, Macht und kulturelle Vernetzung einbettet."
  },
  [makeSourceKey("modul-9", "SRF: Grosse Völker")]: {
    badge: "dreiteilige Reihe · Arabische Wissenswelten",
    locator: "SRF school: Grosse Völker",
    thesis:
      "Die Araber-Folge zeigt Religion nicht als isolierten Glaubensraum, sondern als Verbindung von Herrschaft, Bildung, Wissenschaft und kultureller Offenheit.",
    passage:
      "Für dieses Modul ist auf der SRF-Seite besonders die Araber-Folge wichtig. Sie zeigt die Verbindung von islamischer Herrschaft, Bildung, Mathematik, Medizin und kultureller Offenheit und macht damit sichtbar, wie Glauben, Wissen und Reichsbildung zusammenwirken.",
    itemsLabel: "Auf der SRF-Seite hier konkret gemeint:",
    relevantItems: [
      {
        title: "Grosse Völker – Die Araber",
        note: "Islamischer Glaube, Großreich, Wissenschaft, Medizin und Mathematik in einem Zusammenhang."
      }
    ],
    whyHere:
      "Die Araber-Folge gehört in Modul 9, weil sie Religion, Wissen und Herrschaft in einem einzigen historischen Zusammenhang sichtbar macht.",
    mustKnow: [
      "Islam ist Teil eines politischen und kulturellen Großraums.",
      "Mathematik, Medizin und Wissenschaft sind eng mit Bildungsnetzen verbunden.",
      "Religion steht hier nicht gegen Wissen, sondern trägt institutionelle und kulturelle Ordnung mit."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Religion sei in vormodernen Gesellschaften nur Privatglaube oder Gegenspielerin von Wissen."
  },
  [makeSourceKey("modul-9", "YouTube: Christentum")]: {
    badge: "YouTube-Film · Christentum",
    locator: "YouTube-Video: Christentum",
    thesis:
      "Der Film führt das Christentum als eigene historische Religion mit Glaubensinhalten, Ausbreitung und Gemeinschaftsformen ein.",
    passage:
      "Die Ressource ergänzt das Modul um eine ausdrückliche Einführung in das Christentum, damit Religionen nicht nur strukturell, sondern auch in ihren Eigenformen greifbar werden.",
    whyHere:
      "Der Film gehört in Modul 9, weil das Christentum für Antike und Mittelalter nicht bloß vorausgesetzt werden darf.",
    mustKnow: [
      "Christentum ist eine eigenständige monotheistische Religion.",
      "Es bildet Gemeinschaften, Rituale und Ordnungsvorstellungen aus.",
      "Seine historische Ausbreitung prägt Europa und den Mittelmeerraum tief."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Christentum sei so bekannt, dass es im Kurs nicht eigens eingeführt werden müsse."
  },
  [makeSourceKey("modul-9", "YouTube: Judentum")]: {
    badge: "YouTube-Film · Judentum",
    locator: "YouTube-Video: Judentum",
    thesis:
      "Der Film führt das Judentum als eigenständige Religion, Tradition und Schriftkultur ein.",
    passage:
      "Die Ressource ergänzt das Modul um einen direkten Zugang zu Judentum, Tora, Tradition und historischer Kontinuität.",
    whyHere:
      "Der Film gehört in Modul 9, weil jüdische Religion und Tradition im Kurs nicht nur als Vorstufe anderer Religionen erscheinen dürfen.",
    mustKnow: [
      "Judentum ist eigenständig und schriftbezogen.",
      "Tradition, Gesetz und Gemeinschaft spielen eine zentrale Rolle.",
      "Jüdische Geschichte gehört zur Geschichte Antike und Mittelalter unmittelbar dazu."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Judentum müsse nur indirekt oder randständig behandelt werden."
  },
  [makeSourceKey("modul-9", "YouTube: Islam")]: {
    badge: "YouTube-Film · Islam",
    locator: "YouTube-Video: Islam",
    thesis:
      "Der Film führt den Islam als Weltreligion, Textreligion und historischen Ordnungsraum ein.",
    passage:
      "Die Ressource ergänzt das Modul um eine direkte Einführung in den Islam, seine Glaubenspraxis und seine historische Ausbreitung.",
    whyHere:
      "Der Film gehört in Modul 9, weil der Islam im Kurs ausdrücklich erklärt und nicht nur beiläufig erwähnt werden soll.",
    mustKnow: [
      "Der Islam ist eine monotheistische Weltreligion.",
      "Koran, Glaubenspraxis und Gemeinschaft strukturieren den religiösen Raum.",
      "Der Islam prägt große politische und kulturelle Räume weit über Arabien hinaus."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Islam sei für die Geschichte bis 1500 nur ein Nebenthema."
  },

  [makeSourceKey("modul-9", "Materialdossier: Christentum – Entstehung und Verbreitung")]: {
    badge: "Lokales Dossier · Jesus bis Reichskirche",
    locator: "Materialdossier: Römische Antike – Christentum",
    thesis:
      "Das Dossier erklärt die Ausbreitung des Christentums als historische Bewegung von den ersten Gemeinden über Verfolgungen bis zur konstantinischen Wende und zur Reichskirche.",
    passage:
      "Dieses Dossier schließt im Modul eine wichtige Lücke, weil es das Christentum nicht nur als Glaubenssystem, sondern als historische Bewegung mit Konflikten, Mission, Briefnetzwerken und institutioneller Verdichtung zeigt. Jesus, Paulus, Verfolgungen, Konstantin, Nicäa und Theodosius machen sichtbar, wie aus einer kleinen Bewegung eine reichsweite Kirche wird. Genau dadurch wird Religion als Ordnungskraft konkret.",
    whyHere:
      "Das Dossier führt die politische und institutionelle Geschichte des Christentums sauber in das Religionsmodul ein.",
    mustKnow: [
      "Paulus und die Heidenmission treiben die frühe Ausbreitung entscheidend voran.",
      "Verfolgungen zeigen Religion als Frage von Ordnung, Loyalität und Gehorsam.",
      "Mit Konstantin und später Theodosius wird das Christentum institutionell und politisch prägend."
    ]
  },
  [makeSourceKey("modul-10", "SRF: Das verrückte Mittelalter")]: {
    badge: "Serienseite · viele Einzelfilme",
    locator: "SRF: Das verrückte Mittelalter",
    thesis:
      "Die Reihe bündelt typische Mittelalterbilder bewusst niedrigschwellig: Burgen, Ritter, Pest, Handel, Hofkultur und Hygiene. Für den Kurs ist entscheidend, diese Bilder nicht stehen zu lassen, sondern sie mit genauer Alltagsgeschichte und Quellenarbeit zu vertiefen.",
    passage:
      "Die Seite enthält viele Einzelfilme und darf deshalb nicht pauschal abgehandelt werden. Für dieses Modul sind vor allem die Folgen zu Burgen, Rittern, Turnieren, Stadtschmutz, Pest, Handel und Minnesang relevant, weil sie die bekannten Mittelalterbilder konkretisieren und zugleich korrigierbar machen.",
    itemsLabel: "Auf der SRF-Seite besonders wichtige Folgen:",
    relevantItems: [
      {
        title: "Burgen erobern",
        note: "Burg als Schutzraum, Belagerung und militärische Technik."
      },
      {
        title: "Die Ritter",
        note: "Ausbildung, Aufgaben und soziale Stellung des Rittertums.",
        link: "https://www.srf.ch/play/tv/das-verrueckte-mittelalter/video/die-ritter?urn=urn%3Asrf%3Avideo%3Ac499b7df-092c-42ff-8ada-8bc6b0363c23"
      },
      {
        title: "Ritterturniere",
        note: "Spektakel, Ruhm, Reichtum und Gewalt im adeligen Freizeit- und Statussystem.",
        link: "https://www.srf.ch/play/tv/das-verrueckte-mittelalter/video/ritterturniere?urn=urn%3Asrf%3Avideo%3Adf6aa2b4-7990-4453-b5b2-effb5da5e29b"
      },
      {
        title: "Der Schmutz",
        note: "Abfälle, Gosse, Regeln und urbane Hygieneprobleme.",
        link: "https://www.srf.ch/play/tv/das-verrueckte-mittelalter/video/der-schmutz?urn=urn%3Asrf%3Avideo%3A3a470dbc-4249-4c81-875b-c27605199985"
      },
      {
        title: "Die Pest",
        note: "Ausbreitung, Angst und langfristige Wirkung einer Seuche."
      },
      {
        title: "Handelsrouten",
        note: "Messen, Kaufleute, Wege und Risiko des Fernhandels."
      },
      {
        title: "Troubadoure und Minnesänger",
        note: "Musik, Hofkultur und adelige Öffentlichkeit."
      }
    ],
    relatedLabel: "Von SRF auf dieser Seite zusätzlich verlinkt:",
    relatedItems: [
      { title: "Mittelalter in der Schweiz", note: "Alltagsgeschichte in Burgen und Schlössern.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/wie-die-leute-gelebt-haben-mittelalter-in-der-schweiz" },
      { title: "Historische Spurensuche – Eine kurze Geschichte über…", note: "Vertiefung zu Mittelalter und Altem Ägypten.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/historische-spurensuche-eine-kurze-geschichte-ueber" }
    ],
    whyHere:
      "Die Serie gehört in Modul 10 als Einstieg, weil sie vorhandene Mittelalterbilder der Lernenden aufnimmt und in bearbeitbare Teilthemen zerlegt.",
    mustKnow: [
      "Burgen, Ritter, Turniere, Pest, Handel und Minnesang gehören zu realen historischen Themenfeldern.",
      "Die Reihe zeigt diese Themen bewusst vereinfacht und muss deshalb im Kurs präzisiert werden.",
      "Sie liefert einen motivierenden Zugang, aber nicht die letzte Erklärung des Mittelalters."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, ein populärer Überblick reiche bereits als ausreichendes Mittelalterwissen."
  },
  [makeSourceKey("modul-10", "SRF: Mittelalter in der Schweiz")]: {
    badge: "fünfteilige Reihe · Burgen und Schlösser",
    locator: "SRF school: Mittelalter in der Schweiz",
    thesis:
      "Die Reihe verschiebt den Blick vom Klischee auf die materielle Lebenswelt: Verteidigung, Hygiene, Küche, Rangzeichen und Funde werden als konkrete Zugänge zu mittelalterlicher Gesellschaft behandelt.",
    passage:
      "Auch diese SRF-Seite enthält nicht nur einen Film, sondern fünf thematisch klar getrennte Folgen. Das Modul stützt sich genau auf diese alltagsgeschichtlichen Einzelstücke, weil sie Wohnen, Hygiene, Küche, Verteidigung, Status und Funde aus dem Stoff selbst heraus erklären.",
    itemsLabel: "Auf der SRF-Seite besonders wichtige Folgen:",
    relevantItems: [
      { title: "Schloss Habsburg – Was Ausgrabungen zu erzählen haben", note: "Archäologische Funde als Zugang zu Lebenswelt und Herrschaft." },
      { title: "Hygiene und Gesundheit auf Schloss Hallwyl", note: "Wasser, Badekultur, Krankheiten und Mangel an Hygiene." },
      { title: "Schloss Spiez – Lebenswelt und Statussymbole der Schlossbewohner", note: "Kleidung, Rang, Zeichen von Stand und höfischer Welt." },
      { title: "Schloss Lenzburg – Kochen in der Schlossküche", note: "Speisen, Zutaten, Küche und Alltagsorganisation." },
      { title: "Verteidigung auf der Kyburg", note: "Rüstung, Wehrhaftigkeit und Schutzfunktion der Burg." }
    ],
    whyHere:
      "Die Reihe gehört in Modul 10, weil sie das Mittelalter über Burgen und Schlösser hinweg in konkrete Lebenswelt übersetzt.",
    mustKnow: [
      "Hygiene, Küche, Kleidung und Funde sind historische Quellen zur Gesellschaft.",
      "Verteidigung gehört zur Burg, erklärt aber nicht allein das Mittelalter.",
      "Statussymbole machen Rang und Stand sichtbar."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Mittelaltergeschichte bestehe nur aus Kriegen, Rittern und Königen."
  },
  [makeSourceKey("modul-10", "SRF: Eine kurze Geschichte über…")]: {
    badge: "dreiteilige Reihe · Folge Mittelalter",
    locator: "SRF school: Eine kurze Geschichte über…",
    thesis:
      "Die Reihe arbeitet mit zugespitzten historischen Leitfragen. Für das Mittelalter wird das Klischee der dunklen Epoche ausdrücklich aufgebrochen; für Ägypten steht die Langzeitstabilität im Mittelpunkt; für die Hexenverfolgung Gewalt, Angst und Aberglaube.",
    passage:
      "Auf dieser Seite ist für Modul 10 ausdrücklich die Mittelalter-Folge gemeint. Sie fragt direkt nach dem Klischee des angeblich dunklen Mittelalters und stellt ihm Städte, Handwerk, Medizin, Kathedralen und den Übergang zur Moderne entgegen.",
    itemsLabel: "Auf der SRF-Seite hier konkret gemeint:",
    relevantItems: [
      {
        title: "Eine kurze Geschichte über ... – Das Mittelalter",
        note: "Gegen das Klischee vom rückständigen Mittelalter; mit Städten, Handwerk, Medizin und Kathedralen."
      }
    ],
    relatedLabel: "Zur Einordnung der ganzen SRF-Reihe:",
    relatedItems: [
      { title: "Eine kurze Geschichte über ... – Das Alte Ägypten", note: "Warum Ägypten rund 3000 Jahre lang bestehen konnte." },
      { title: "Eine kurze Geschichte über ... – Das Mittelalter", note: "Warum das Mittelalter weder nur dunkel noch nur romantisch war." },
      { title: "Eine kurze Geschichte über ... – Die Hexenverfolgung", note: "Wie es zur Verfolgung von rund 50'000 Menschen kommen konnte." }
    ],
    whyHere:
      "Die Reihe gehört in Modul 10, weil sie Epochen in klaren Streitfragen aufspannt und damit Klischeeprüfung erzwingt.",
    mustKnow: [
      "Das Mittelalter wird ausdrücklich gegen das Klischee der dunklen Epoche erzählt.",
      "Die Ägypten-Folge bleibt für Staatlichkeit und Langzeitordnung wichtig.",
      "Die Hexenverfolgung zeigt, wie Angst, Gewalt und Aberglaube historisch organisiert werden."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Epochen ließen sich mit einem einzigen Etikett wie dunkel, glanzvoll oder rückständig erklären."
  },
  [makeSourceKey("modul-10", "YouTube: Klöster im Mittelalter")]: {
    badge: "YouTube-Film · Klöster",
    locator: "YouTube-Video: Klöster im Mittelalter",
    thesis:
      "Der Film zeigt Klöster als Räume von Religion, Arbeit, Disziplin, Bildung und Schriftkultur.",
    passage:
      "Die Ressource ergänzt Modul 10 um ein institutionelles Zentrum mittelalterlicher Gesellschaft: das Kloster als Ort von Gebet, Alltag, Arbeit und Wissen.",
    whyHere:
      "Der Film gehört in Modul 10, weil Kirche und Gesellschaft ohne Klöster als Bildungs- und Ordnungsräume unverständlich bleiben.",
    mustKnow: [
      "Klöster sind nicht nur religiöse Orte, sondern auch Arbeits- und Bildungsräume.",
      "Schrift, Abschreiben und Ordnung gehören zu ihrem historischen Gewicht.",
      "Klöster verbinden Alltag, Frömmigkeit und gesellschaftliche Struktur."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, mittelalterliche Kirche bestehe nur aus Gottesdiensten und Kathedralen."
  },
  [makeSourceKey("modul-10", "YouTube: Entstehung der Eidgenossenschaft")]: {
    badge: "YouTube-Film · Eidgenossenschaft",
    locator: "YouTube-Video: Entstehung der Eidgenossenschaft",
    thesis:
      "Der Film führt spätmittelalterliche Bündnisse und Herrschaftsordnungen im schweizerischen Raum als konkretes politisches Beispiel ein.",
    passage:
      "Die Ressource ergänzt Modul 10 um ein regionales Beispiel von Herrschaft, Bündnisbildung und politischem Wandel im Spätmittelalter.",
    whyHere:
      "Der Film gehört in Modul 10, weil Herrschaft und Gesellschaft nicht nur allgemein, sondern auch an einem vertrauten politischen Raum konkretisiert werden sollen.",
    mustKnow: [
      "Herrschaft im Mittelalter wird auch durch Bündnisse und regionale Ordnungen organisiert.",
      "Die Eidgenossenschaft entsteht nicht aus dem Nichts, sondern in einem spätmittelalterlichen Machtgefüge.",
      "Schweizer Geschichte ist Teil allgemeiner mittelalterlicher Herrschafts- und Gesellschaftsfragen."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, die Eidgenossenschaft sei völlig losgelöst von mittelalterlichen Macht- und Sozialstrukturen entstanden."
  },

  [makeSourceKey("modul-10", "Materialdossier: Frühmittelalter")]: {
    badge: "Lokales Dossier · Westen, Byzanz, Islam",
    locator: "Materialdossier: Mittelalter – Frühmittelalter",
    thesis:
      "Das Dossier erklärt das Frühmittelalter als Neuordnung der alten Mittelmeerwelt und nicht als bloße Zeit des Zerfalls.",
    passage:
      "Byzanz, die islamische Welt und das Frankenreich zeigen, dass nach Rom nicht Leere entsteht, sondern ein neuer politischer Raum. Klöster, Christianisierung, Grundherrschaft und neue Königtümer machen das Frühmittelalter zu einer Aufbauphase mit starken Kontinuitäten und tiefen Brüchen zugleich.",
    whyHere:
      "Das Dossier erweitert den Mittelalterblock vom Alltag auf die große politische und religiöse Raumordnung.",
    mustKnow: [
      "Das Frühmittelalter ist Neuordnung, nicht bloß Niedergang.",
      "Byzanz, Islam und Frankenreich bilden drei große Macht- und Kulturräume.",
      "Klöster und Christianisierung tragen zur neuen Ordnung entscheidend bei."
    ]
  },
  [makeSourceKey("modul-10", "Materialdossier: Hochmittelalter – Könige und Kirche")]: {
    badge: "Lokales Dossier · Lehen, Rittertum und Frömmigkeit",
    locator: "Materialdossier: Mittelalter – Hochmittelalter, Könige und Kirche",
    thesis:
      "Das Dossier zeigt, wie Lehenswesen, Ministerialen, Rittertum, Ständeordnung und Frömmigkeit Herrschaft und Gesellschaft im Hochmittelalter strukturieren.",
    passage:
      "Gerade dieses Dossier macht sichtbar, dass Mittelalter nicht nur aus Bildern von Burgen und Rittern besteht, sondern aus einer durchdachten sozialen Ordnung. Lehen, persönliche Bindungen, geistliche Legitimation und adelige Rangzeichen greifen eng ineinander. Kirche und Adel stabilisieren sich wechselseitig, während Geburt, Stand und Frömmigkeit den sozialen Platz der Menschen festlegen.",
    whyHere:
      "Das Dossier liefert die harte Strukturgeschichte hinter den bekannten Mittelalterbildern.",
    mustKnow: [
      "Lehenswesen ordnet Herrschaft über persönliche Bindungen und Dienste.",
      "Ministerialen und Rittertum sind tragende Formen hochmittelalterlicher Macht.",
      "Kirche, Stand und Frömmigkeit legitimieren soziale Ungleichheit."
    ]
  },
  [makeSourceKey("modul-10", "Materialdossier: Eidgenossenschaft")]: {
    badge: "Lokales Dossier · Bündnisse und spätmittelalterliche Politik",
    locator: "Materialdossier: Mittelalter – Eidgenossenschaft",
    thesis:
      "Das Dossier erklärt die Eidgenossenschaft aus Reichsunmittelbarkeit, Passpolitik, Landfriedensbündnissen und spätmittelalterlichen Machtkämpfen statt aus bloßem Gründungsmythos.",
    passage:
      "Für das Modul ist dieses Dossier entscheidend, weil es regionale Geschichte in allgemeine Mittelaltergeschichte zurückbindet. Uri, Schwyz, Unterwalden, der Gotthardpass, Morgarten und spätere Bündnispolitik zeigen, wie eng lokale Freiheitsbehauptungen mit Reich, Adel, Verkehr und Krieg verbunden sind. Die Eidgenossenschaft erscheint dadurch als spätmittelalterliche politische Formation und nicht als zeitlose Ursprungserzählung.",
    whyHere:
      "Das Dossier macht aus einem oft mythisch erzählten Thema eine präzise politische Entwicklung.",
    mustKnow: [
      "Reichsunmittelbarkeit und Gotthardverkehr sind zentrale Voraussetzungen.",
      "Landfriedensbündnisse und Konflikte mit Adel und Habsburg prägen die Frühzeit des Bundes.",
      "Die Eidgenossenschaft wächst aus spätmittelalterlicher Machtpolitik und nicht aus Legenden allein."
    ]
  },
  [makeSourceKey("modul-11", "SRF: Der Kreuzzug der Kinder")]: {
    badge: "SRF-school-Film · Quellenkritik",
    locator: "SRF school: Mythos oder historischer Fakt – Der Kreuzzug der Kinder",
    passage:
      "Der Film verfolgt die Überlieferung um Nikolaus aus Köln und Stephan aus Cloyes-les-Trois-Rivières, die Reise von 1212 und die Frage, was Chroniken tatsächlich belegen. Seine Stärke liegt genau darin, dass er das Ereignis nicht nur erzählt, sondern seine historische Unsicherheit offenlegt.",
    whyHere:
      "Der Film gehört in Modul 11, weil er Quellenkritik nicht theoretisch, sondern an einem dramatischen Beispiel vorführt.",
    mustKnow: [
      "Ausgangspunkt sind zwei Jungen und die Überlieferung um das Jahr 1212.",
      "Chroniken müssen auf Entstehungszeit, Absicht und Zuverlässigkeit geprüft werden.",
      "Religiöse Bewegung, Gerücht und spätere Ausschmückung können historische Bilder stark verändern."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, alte Chroniken seien automatisch wahr oder historische Wahrheit bestehe nur aus dem Nacherzählen spektakulärer Geschichten."
  },
  [makeSourceKey("modul-11", "YouTube: Stadt im Mittelalter")]: {
    badge: "YouTube-Film · Stadtleben",
    locator: "YouTube-Video: Stadt im Mittelalter",
    thesis:
      "Der Film macht sichtbar, dass mittelalterliche Welt nicht nur aus Burgen bestand, sondern aus Städten, Märkten, Handwerk und verdichtetem Zusammenleben.",
    passage:
      "Die Ressource ergänzt Modul 11 um eine urbane Perspektive auf Hoch- und Spätmittelalter: Stadtmauern, Märkte, Handwerk, Handel und soziale Dichte.",
    whyHere:
      "Der Film gehört in Modul 11, weil Wandel und Vernetzung im Mittelalter ohne Städte und Märkte zu abstrakt bleiben würden.",
    mustKnow: [
      "Städte sind Zentren von Markt, Handwerk und Austausch.",
      "Stadtleben unterscheidet sich deutlich von Burg- und Landwelt.",
      "Vernetzung im Mittelalter läuft wesentlich über urbane Räume."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Mittelalter bestehe vor allem aus abgeschlossenen Burgen und ländlicher Abgeschlossenheit."
  },
  [makeSourceKey("modul-11", "Harari-PDF")]: {
    badge: "S. 251 · Samarkand",
    locator: "Harari-PDF, S. 251",
    pdfPage: 251,
    pdfSearch: "Auf dem mittelalterlichen Markt von Samarkand",
    quote: "„Auf dem mittelalterlichen Markt von Samarkand“",
    thesis:
      "Dieselbe Samarkand-Stelle bekommt im Stadt- und Handelsmodul einen anderen Akzent: Das Mittelalter erscheint als Raum von Markt, Fernbeziehungen und Verdichtung statt als abgeschlossene Burgenwelt.",
    passage:
      "Die Passage versammelt Seide, Goldmünzen, Händler, Reisende und Menschen aus verschiedenen Weltregionen in einem einzigen Bild. Genau dadurch wird für dieses Modul sichtbar, dass Märkte, Pilgerwege, Fernhandel, Begegnung und Macht im Mittelalter nicht nebeneinander herlaufen, sondern in denselben Räumen zusammentreffen. Die Stelle ist deshalb stark, weil sie das Mittelalter nicht auf Burgen und ländliche Abgeschlossenheit reduziert. Stattdessen zeigt sie eine Welt aus Verkehr, Austausch, Dichte und überregionalen Beziehungen."
  },

  [makeSourceKey("modul-11", "Materialdossier: Hochmittelalter – Dorf")]: {
    badge: "Lokales Dossier · Dorf, Ausbau und Dreifelderwirtschaft",
    locator: "Materialdossier: Mittelalter – Hochmittelalter, Dorf",
    thesis:
      "Das Dossier erklärt das hochmittelalterliche Dorf als Raum von Landesausbau, Rodungen, Dreifelderwirtschaft und neuer dörflicher Selbstorganisation.",
    passage:
      "Für dieses Modul ist das Dossier wichtig, weil es zeigt, dass mittelalterliche Vernetzung nicht nur über Städte läuft. Auch Dörfer verändern sich tief: Rodungen, neue Felder, Fruchtfolgen, Vergetreidung und Dorfrechte schaffen eine andere Produktions- und Lebensweise. Das Dorf ist damit kein statischer Rest, sondern Teil des großen hochmittelalterlichen Ausbaus.",
    whyHere:
      "Das Dossier verankert Markt- und Handelsgeschichte in der landwirtschaftlichen Grundlage des Hochmittelalters.",
    mustKnow: [
      "Landesausbau und Rodungen erweitern Siedlungs- und Wirtschaftsraum.",
      "Dreifelderwirtschaft steigert Erträge und verändert Arbeit und Zeitstruktur.",
      "Dörfer organisieren sich stärker über gemeinsames Recht und lokale Ordnung."
    ]
  },
  [makeSourceKey("modul-11", "Materialdossier: Hochmittelalter – Stadt")]: {
    badge: "Lokales Dossier · Stadtrecht, Rat und Zünfte",
    locator: "Materialdossier: Mittelalter – Hochmittelalter, Stadt",
    thesis:
      "Das Dossier erklärt die mittelalterliche Stadt als Raum von Markt, Autonomie, Rat, Zünften, Handwerk und Bildung.",
    passage:
      "Gerade dieses Dossier macht sichtbar, dass Städte im Hochmittelalter eigene politische und wirtschaftliche Formen entwickeln. Stadtrecht, Kommune, Rat, Zünfte und Märkte schaffen verdichtete Lebensräume, die sich klar vom Dorf unterscheiden. Die Stadt ist damit nicht bloß Kulisse, sondern Schlüsselraum für Austausch, Mobilität und sozialen Wandel.",
    whyHere:
      "Das Dossier gibt dem Modul eine feste urbane Struktur jenseits bloßer Kreuzzugs- oder Pilgererzählungen.",
    mustKnow: [
      "Stadtrecht und Rat geben der Stadt eigene politische Form.",
      "Zünfte ordnen Handwerk, Ausbildung und wirtschaftliche Interessen.",
      "Städte bündeln Markt, Bildung, Schrift und soziale Verdichtung."
    ]
  },
  [makeSourceKey("modul-11", "Materialdossier: Spätmittelalter")]: {
    badge: "Lokales Dossier · Pest, Hunger und Krisen",
    locator: "Materialdossier: Mittelalter – Spätmittelalter",
    thesis:
      "Das Dossier zeigt das Spätmittelalter als Zeit harter Krisen, die Dorf, Stadt, Frömmigkeit und soziale Ordnung tief verändern.",
    passage:
      "Klimaverschlechterung, Hungersnöte, Pest, Quarantäne, Geisslerbewegungen und Pogrome machen deutlich, dass das Spätmittelalter nicht nur eine späte Fortsetzung des Hochmittelalters ist. Die Krisen greifen in Arbeitswelt, Siedlungsstruktur, Frömmigkeit und Herrschaft ein. Gerade dadurch wird sichtbar, dass mittelalterliche Geschichte von tiefen Umbrüchen und nicht von bloßer Statik geprägt ist.",
    whyHere:
      "Das Dossier erweitert das Modul von Mobilität und Vernetzung auf Krisen und ihre sozialen Folgen.",
    mustKnow: [
      "Klimaverschlechterung und Pest treffen Dorf und Stadt zugleich.",
      "Quarantäne, Geissler und Pogrome zeigen soziale und religiöse Reaktionen auf Krise.",
      "Das Spätmittelalter ist eine Zeit tiefen Wandels und nicht bloß ein ruhiger Ausklang."
    ]
  },
  [makeSourceKey("modul-12", "SRF: 1491")]: {
    badge: "SRF-school-Film · Perspektivwechsel",
    locator: "SRF school: 1491 – Amerika vor Kolumbus",
    thesis:
      "Die Hauptthese bleibt auch im Abschlussmodul dieselbe: Geschichte vor 1500 ist global, und 1492 markiert für Amerika einen Einschnitt, aber keinen Anfang.",
    passage:
      "Der Film bündelt noch einmal die zentrale Korrektur des Kurses: Geschichte in Amerika beginnt lange vor 1492. Sprachenvielfalt, Landwirtschaft, politische Ordnungen, Kunst und Spiritualität zeigen, dass die Vormoderne nicht nur aus einer europäischen Entwicklungslinie besteht.",
    itemsLabel: "Auf der SRF-Seite gebündelte Abschlussbausteine:",
    relevantItems: [
      { title: "Frühbesiedlung", note: "Landbrücke, Kanus und angepasste Überlebensstrategien." },
      { title: "Gesellschaften und Reiche", note: "Von lokalen Bündnissen bis zu Azteken und Inka." },
      { title: "Landwirtschaft und Handel", note: "Mais, Quinoa, Kartoffeln, Bohnen und kontinentale Verbreitung." },
      { title: "Kulturelles Erbe", note: "Felsbilder, Totempfähle, Schrift und Fragen der Rückführung." }
    ],
    whyHere:
      "Die Seite gehört ins Abschlussmodul, weil sie den größten Perspektivwechsel der ganzen Einheit bündelt und gegen eurozentrische Abschlusserzählungen arbeitet.",
    mustKnow: [
      "1492 ist ein Einschnitt, aber kein Anfang der Geschichte Amerikas.",
      "Amerika vor Kolumbus ist durch Landwirtschaft, politische Ordnungen, Kunst und Sprachen geprägt.",
      "Rückführung und Mitbestimmung zeigen, dass Geschichte bis in die Gegenwart umkämpft bleibt."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, die Vormoderne lasse sich am Ende der Einheit doch wieder nur aus Europa heraus bilanzieren."
  },
  [makeSourceKey("modul-12", "SRF: Anthropozän")]: {
    badge: "SRF-school-Seite · Langzeitfolgen",
    locator: "SRF school: Anthropozän – Das Zeitalter des Menschen",
    thesis:
      "Die Seite zugespitzt zusammengefasst: Frühere Innovationen sind nicht vorbei, sondern wirken als lange Vorgeschichte heutiger Umweltveränderungen weiter.",
    passage:
      "Für die Bilanz ist die Seite deshalb stark, weil sie frühe Innovationen nicht als abgeschlossene Kapitel behandelt. Feuer, Landwirtschaft, Metallbau, Straßen, Städte und fossile Brennstoffe erscheinen als aufeinanderfolgende Stufen wachsender Eingriffe in Boden, Wasser, Luft und Rohstoffe.",
    itemsLabel: "Auf der SRF-Seite angelegte Bilanzstruktur:",
    relevantItems: [
      { title: "Die Kosten des Fortschritts", note: "Erfolgsgeschichte und Folgeschäden werden zusammen gelesen." },
      { title: "Ein neues Erdzeitalter?", note: "Geologische Spuren menschlichen Handelns als Kernfrage." },
      { title: "Lösungen", note: "SRF verknüpft die Diagnose mit Forschenden und praktischen Gegenmaßnahmen." }
    ],
    relatedLabel: "Von SRF auf dieser Seite zusätzlich verlinkt:",
    relatedItems: [
      { title: "Hoffnung für die Ozeane – Helden der Meere", note: "Schutzprojekte in bedrohten Meeresräumen.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/hoffnung-fuer-die-ozeane-helden-der-meere" },
      { title: "Erfolgreiche Renaturierung – Paradiese aus Menschenhand", note: "Renaturierung als Gegenbild zur reinen Schadensgeschichte.", link: "https://www.srf.ch/sendungen/school/physik-chemie-biologie/erfolgreiche-renaturierung-paradiese-aus-menschenhand" },
      { title: "Gefährliche Desertifikation – Planet Sand", note: "Wüstenbildung und Ressourcenkonflikte als konkrete Umweltfolge.", link: "https://www.srf.ch/sendungen/school/geschichte-geografie/gefaehrliche-desertifikation-planet-sand" }
    ],
    whyHere:
      "Die Seite gehört ins Abschlussmodul, weil sie alle vorherigen Innovationsschritte als lange Vorgeschichte heutiger Umweltveränderungen lesbar macht.",
    mustKnow: [
      "Frühere Innovationen wirken über ihre eigene Epoche hinaus weiter.",
      "Anthropozän ist eine Deutungsfrage nach geologisch sichtbaren Spuren menschlicher Geschichte.",
      "SRF verbindet Diagnose und Gegenmaßnahmen, nicht nur Katastrophenerzählung."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, die Folgen vormoderner Entwicklungen endeten einfach um 1500."
  },
  [makeSourceKey("modul-12", "Harari-PDF")]: {
    badge: "S. 150 · Weltreiche und Netze",
    locator: "Harari-PDF, S. 150",
    pdfPage: 150,
    pdfSearch: "Weltreiche, Weltreligionen und globale Handelsnetze",
    quote: "„Weltreiche, Weltreligionen und globale Handelsnetze“",
    thesis:
      "Harari verdichtet hier die große Langzeitlinie des Kurses: Menschen bauen immer größere Verbindungsräume auf, die durch Macht, Glauben, Handel und gemeinsame Regeln zusammengehalten werden.",
    passage:
      "Harari benutzt hier ein leicht verständliches Vergleichsbild, um zu zeigen, wie große geteilte Ordnungen funktionieren: Viele Menschen halten sich an dieselben Regeln, obwohl sie einander nicht persönlich kennen. Von dort schlägt er den Bogen zu Weltreichen, Weltreligionen und globalen Handelsnetzen. Für das Abschlussmodul ist die Passage deshalb besonders geeignet, weil sie die ganze Einheit in eine Formel bringt: Geschichte bis 1500 ist die Geschichte wachsender Verbindungen, größerer Ordnungsräume und immer weiterer Netze aus Macht, Glauben, Handel und Kooperation."
  },
  [makeSourceKey("modul-12", "Offene Wege statt Einbahnstraße")]: {
    quote: "„paths not taken“",
    thesis:
      "Graeber und Wengrow lesen Tiefengeschichte als Geschichte nicht nur realisierter, sondern auch verworfener Möglichkeiten. Menschen sind für sie nicht einfach auf eine einzige Entwicklungslinie festgelegt.",
    passage:
      "Diese Gegenposition richtet sich gegen ein zu geschlossenes Bild von Geschichte. Graeber und Wengrow fragen nach Wegen, die offenstanden, aber nicht dauerhaft verfolgt wurden: nach Städten ohne Paläste, nach Landwirtschaft ohne sofortige Herrschaftspyramiden oder nach mobilen Gesellschaften mit überraschend komplexen Institutionen. Für die Schlussbilanz ist das entscheidend, weil Geschichte dann nicht nur aus großen Übergängen besteht, sondern auch aus Alternativen, Brüchen und bewussten Neuordnungen. Die Vormoderne erscheint so nicht als Vorgeschichte eines feststehenden Endes, sondern als offener Möglichkeitsraum.",
    whyHere:
      "Die Abschlussbilanz soll nicht nur große Linien bündeln, sondern auch zeigen, wo diese Linien umstritten sind und anders gelesen werden können.",
    mustKnow: [
      "Tiefengeschichte enthält auch verworfene und abgebrochene Wege.",
      "Nicht jede große Entwicklung ist als feste Einbahnstraße zu deuten.",
      "Die Differenz zwischen Harari und Graeber/Wengrow liegt vor allem im Maß an Offenheit und historischer Wahlmöglichkeit."
    ]
  }
};

Object.assign(sourceDetails, additionalHarariDetails, expandedHarariDetails);

const repetitionLevels = {
  basis: {
    label: "Basis",
    intro:
      "Hier sicherst du die großen Entwicklungslinien: Sprache, Sesshaftigkeit, Staatlichkeit, Antike und mittelalterliche Verdichtung.",
    memory: {
      title: "Memory: Entwicklung und Folge zusammenbringen",
      instructions:
        "Öffne immer zwei Karten. Ein Paar ist richtig, wenn Entwicklung und Folge historisch direkt zusammengehören.",
      pairs: [
        {
          id: "basis-memory-kognition",
          left: "Kognitive Revolution",
          right: "Sprache, Mythen und gemeinsame Regeln machen größere Gruppen möglich."
        },
        {
          id: "basis-memory-landwirtschaft",
          left: "Landwirtschaftliche Revolution",
          right: "Sesshaftigkeit, Vorräte und soziale Ungleichheit verändern den Alltag grundlegend."
        },
        {
          id: "basis-memory-staat",
          left: "Frühe Staaten",
          right: "Schrift, Listen, Abgaben und Verwaltung stabilisieren Herrschaft."
        },
        {
          id: "basis-memory-athen",
          left: "Attische Demokratie",
          right: "Bürger beraten und entscheiden direkt, aber Frauen, Sklaven und Fremde bleiben ausgeschlossen."
        },
        {
          id: "basis-memory-rom",
          left: "Römische Republik",
          right: "Senat, Magistrate und Volksversammlungen teilen Macht, ohne soziale Konflikte zu beseitigen."
        },
        {
          id: "basis-memory-1491",
          left: "1491",
          right: "Amerika besitzt lange vor Kolumbus eigene Gesellschaften, Landwirtschaft und politische Ordnungen."
        }
      ]
    },
    drag: {
      title: "Drag-and-drop: Entwicklung dem historischen Kern zuordnen",
      instructions:
        "Ziehe jede Entwicklung auf die passende Erklärung. Eine richtige Zuordnung bleibt stehen; eine falsche springt zurück.",
      items: [
        {
          id: "basis-drag-kognition",
          label: "Kognitive Revolution",
          target: "basis-target-kognition",
          explanation: "Sprache, Symbole, Mythen und geteilte Vorstellungen"
        },
        {
          id: "basis-drag-landwirtschaft",
          label: "Landwirtschaftliche Revolution",
          target: "basis-target-landwirtschaft",
          explanation: "Sesshaftigkeit, Vorräte, mehr Arbeit und neue Ungleichheit"
        },
        {
          id: "basis-drag-schrift",
          label: "Schrift und Verwaltung",
          target: "basis-target-schrift",
          explanation: "Listen, Abgaben, Besitz und dauerhafte Herrschaft"
        },
        {
          id: "basis-drag-athen",
          label: "Attische Demokratie",
          target: "basis-target-athen",
          explanation: "Volksversammlung und direkte Beteiligung freier männlicher Bürger"
        },
        {
          id: "basis-drag-rom",
          label: "Römische Republik",
          target: "basis-target-rom",
          explanation: "Senat, Konsuln, Magistrate und Machtteilung"
        },
        {
          id: "basis-drag-mittelalter",
          label: "Mittelalterliche Städte",
          target: "basis-target-mittelalter",
          explanation: "Märkte, Handwerk, Fernhandel und verdichtete Lebensräume"
        }
      ],
      targets: [
        {
          id: "basis-target-kognition",
          title: "Sprache und Symbolwelt",
          prompt: "Ordne hier die Entwicklung zu, die Mythen, Regeln und große Kooperation ermöglicht."
        },
        {
          id: "basis-target-landwirtschaft",
          title: "Sesshafte Lebensweise",
          prompt: "Ordne hier die Entwicklung zu, die Felder, Vorräte und soziale Unterschiede hervorbringt."
        },
        {
          id: "basis-target-schrift",
          title: "Frühe Staatlichkeit",
          prompt: "Ordne hier die Entwicklung zu, die Herrschaft durch Listen, Abgaben und Bürokratie stützt."
        },
        {
          id: "basis-target-athen",
          title: "Direkte Beteiligung",
          prompt: "Ordne hier die Ordnung zu, in der Bürger in der Volksversammlung direkt mitentscheiden."
        },
        {
          id: "basis-target-rom",
          title: "Republikanische Mischform",
          prompt: "Ordne hier die Ordnung zu, in der Senat, Magistrate und Volksversammlungen zusammenwirken."
        },
        {
          id: "basis-target-mittelalter",
          title: "Städtischer Wandel",
          prompt: "Ordne hier die Entwicklung zu, die Märkte, Handwerk und Fernhandel verdichtet."
        }
      ]
    },
    cloze: {
      title: "Lückentext: Die großen Umbrüche zusammenfassen",
      instructions:
        "Fülle die Lücken mit den passenden Begriffen. Synonyme werden erkannt, wenn sie denselben historischen Kern treffen.",
      parts: [
        "Zwischen ungefähr 70'000 und 30'000 Jahren vor heute beginnt die ",
        { id: "cloze-1", answers: ["kognitive", "kognitive revolution"] },
        ". Sie macht Sprache, ",
        { id: "cloze-2", answers: ["mythen", "erzaehlungen", "erzählungen", "symbolwelten", "gemeinsame vorstellungen"] },
        " und große Kooperation möglich. Mit Ackerbau und Viehzucht setzt die ",
        { id: "cloze-3", answers: ["landwirtschaftliche", "neolithische", "agrarische", "landwirtschaftliche revolution", "neolithische revolution"] },
        " Revolution ein. Sie bringt Vorräte, feste Siedlungen und soziale ",
        { id: "cloze-4", answers: ["ungleichheit", "hierarchie", "hierarchien", "soziale unterschiede"] },
        " hervor. Frühe Staaten stützen sich auf ",
        { id: "cloze-5", answers: ["schrift", "schriftsysteme", "listen"] },
        " und Verwaltung. In Antike und Mittelalter verbinden ",
        { id: "cloze-6", answers: ["reiche", "imperien", "weltreiche"] },
        ", Geld und Religion immer größere Räume."
      ],
      sampleAnswer:
        "Zwischen ungefähr 70'000 und 30'000 Jahren vor heute beginnt die kognitive Revolution. Sie macht Sprache, Mythen und große Kooperation möglich. Mit Ackerbau und Viehzucht setzt die landwirtschaftliche Revolution ein. Sie bringt Vorräte, feste Siedlungen und soziale Ungleichheit hervor. Frühe Staaten stützen sich auf Schrift und Verwaltung. In Antike und Mittelalter verbinden Reiche, Geld und Religion immer größere Räume."
    },
    oralQuestions: [
      {
        id: "repetition-basis-oral-1",
        question:
          "Erkläre in 4 bis 6 Sätzen, warum Geschichte hier nicht mit dem Urknall oder der Eiszeit beginnt, sondern mit menschlichen Ordnungen.",
        placeholder: "Erkläre Sprache, Regeln, Erinnerung und gemeinsame Vorstellungen als Anfang geschichtlicher Weltordnung.",
        sampleAnswer:
          "Geschichte beginnt hier nicht mit Naturereignissen, sondern dort, wo Menschen ihre Welt kulturell ordnen. Entscheidend sind Sprache, Erinnerung, Regeln und gemeinsame Vorstellungen. Dadurch können Menschen Erfahrungen weitergeben, Gruppen stabilisieren und Institutionen schaffen. Geschichte meint deshalb nicht einfach alles Vergangene, sondern die von Menschen gestaltete Welt aus Normen, Ordnung und Deutung.",
        minWords: 35,
        criteria: [
          { label: "Unterschied zwischen Naturgeschichte und menschlich geordneter Geschichte", keywords: ["naturgeschichte", "natur", "vergangenheit"] },
          { label: "Sprache, Regeln oder gemeinsame Vorstellungen als Grundlage", keywords: ["sprache", "regeln", "vorstellungen", "ordnung", "mythen"] },
          { label: "Menschen gestalten ihre Welt aktiv", keywords: ["gestalten", "kulturell", "institutionen", "erinnerung", "deutung"] }
        ]
      },
      {
        id: "repetition-basis-oral-2",
        question:
          "Erkläre den Bruch zwischen mobilen Jäger-und-Sammler-Gruppen und sesshaften Agrargesellschaften.",
        placeholder: "Gehe auf Nahrung, Siedlungen, Arbeit, Vorräte und soziale Folgen ein.",
        sampleAnswer:
          "Mobile Jäger-und-Sammler-Gruppen leben von Jagd, Sammeln, Bewegung und genauer Umweltbeobachtung. Mit Landwirtschaft und Viehzucht werden Menschen sesshaft, bauen Häuser und legen Vorräte an. Dadurch wächst die Bevölkerung, aber auch die Arbeitslast. Besitz und Abgaben werden wichtiger. So entstehen neue soziale Unterschiede und dauerhafte Herrschaftsformen.",
        minWords: 35,
        criteria: [
          { label: "Mobilität und Umweltwissen der Jäger und Sammler", keywords: ["mobil", "jagd", "sammeln", "umweltwissen", "jahreszeiten"] },
          { label: "Sesshaftigkeit, Vorräte oder feste Siedlungen", keywords: ["sesshaft", "vorrate", "vorräte", "dorfer", "dörfer", "hauser", "häuser"] },
          { label: "Mehr Arbeit, Besitz oder soziale Ungleichheit", keywords: ["arbeit", "besitz", "ungleichheit", "abhangigkeit", "abhängigkeit", "hierarchie"] }
        ]
      },
      {
        id: "repetition-basis-oral-3",
        question:
          "Vergleiche attische Demokratie und römische Republik in 4 bis 6 Sätzen.",
        placeholder: "Vergleiche direkte Beteiligung, politische Ämter und Ausschlüsse.",
        sampleAnswer:
          "In der attischen Demokratie entscheiden freie männliche Bürger direkt in der Volksversammlung. Frauen, Sklaven und Fremde bleiben ausgeschlossen. Die römische Republik verteilt Macht auf Senat, Konsuln, Magistrate und Volksversammlungen. Sie ist also keine direkte Demokratie, sondern eine Mischform von Ämtern und Körperschaften. Auch in Rom bleibt politische Teilhabe sozial begrenzt und konfliktreich.",
        minWords: 35,
        criteria: [
          { label: "Attische Demokratie mit Volksversammlung oder direkter Beteiligung", keywords: ["attische", "athen", "volksversammlung", "direkt", "burger", "bürger"] },
          { label: "Römische Republik mit Senat, Konsuln oder Magistraten", keywords: ["romische", "römische", "republik", "senat", "konsuln", "magistrate"] },
          { label: "Ausschlüsse oder soziale Begrenzungen", keywords: ["frauen", "sklaven", "fremde", "ausgeschlossen", "sozial", "plebejer", "patrizier"] }
        ]
      },
      {
        id: "repetition-basis-oral-4",
        question:
          "Erkläre, warum 1492 ein Einschnitt, aber nicht der Anfang amerikanischer Geschichte ist.",
        placeholder: "Beziehe dich auf Gesellschaften, Landwirtschaft, politische Ordnungen und Sprachen vor Kolumbus.",
        sampleAnswer:
          "1492 ist ein Einschnitt, weil die europäische Eroberung und Kolonisierung Amerika grundlegend verändert. Die Geschichte des Kontinents beginnt aber viel früher. Schon lange vor Kolumbus gibt es dort zahlreiche Gesellschaften mit eigenen Sprachen, Landwirtschaftsformen, Handelsbeziehungen und politischen Ordnungen. 1492 markiert daher keinen Anfang, sondern einen gewaltsamen Bruch in bereits bestehende historische Entwicklungen.",
        minWords: 35,
        criteria: [
          { label: "1492 als Einschnitt oder gewaltsamer Umbruch", keywords: ["1492", "einschnitt", "bruch", "kolonisierung", "eroberung"] },
          { label: "Gesellschaften vor Kolumbus", keywords: ["vor kolumbus", "indigene", "gesellschaften", "reiche", "amerika"] },
          { label: "Sprachen, Landwirtschaft oder politische Ordnungen vor 1492", keywords: ["sprachen", "landwirtschaft", "politische ordnungen", "handel", "mais", "inka", "azteken"] }
        ]
      }
    ]
  },
  leichtFortgeschritten: {
    label: "Leicht fortgeschritten",
    intro:
      "Hier geht es stärker um Ursachen und Folgen: Warum entstehen neue Ordnungen, und welche alten Formen bleiben dabei erhalten?",
    memory: {
      title: "Memory: Umbruch und Folge genauer fassen",
      instructions:
        "Suche jeweils das Paar, bei dem der historische Umbruch und seine unmittelbare Folge präzise zusammenpassen.",
      pairs: [
        {
          id: "lf-memory-kognition",
          left: "Erfundene Ordnungen",
          right: "Sie halten Großgruppen zusammen, auch wenn sich die meisten Mitglieder nicht persönlich kennen."
        },
        {
          id: "lf-memory-landwirtschaft",
          left: "Ackerbau",
          right: "Er erhöht die Nahrungsmenge, macht Menschen aber abhängiger von Boden, Wetter und Ernte."
        },
        {
          id: "lf-memory-aegypten",
          left: "Ägyptischer Staat",
          right: "Nil, Verwaltung, Pharao und Maat verbinden Landwirtschaft, Herrschaft und Weltordnung."
        },
        {
          id: "lf-memory-athen",
          left: "Attische Demokratie",
          right: "Direkte Beteiligung erweitert die politische Rolle der Bürger, bleibt aber auf eine kleine Gruppe begrenzt."
        },
        {
          id: "lf-memory-rom",
          left: "Römische Republik",
          right: "Macht wird verteilt, doch Konflikte zwischen sozialen Gruppen prägen die Ordnung dauerhaft."
        },
        {
          id: "lf-memory-stadt",
          left: "Mittelalterliche Stadt",
          right: "Handel, Rat und Zunft schaffen neue Freiräume innerhalb einer weiterhin ständischen Gesellschaft."
        }
      ]
    },
    drag: {
      title: "Drag-and-drop: Ursache und historische Folge",
      instructions:
        "Ordne jede Entwicklung der Folge zu, die unmittelbar aus ihr entsteht. Achte auf den genauen historischen Zusammenhang.",
      items: [
        {
          id: "lf-drag-mythen",
          label: "Gemeinsame Mythen",
          target: "lf-target-mythen",
          explanation: "Fremde können sich auf Regeln, Götter oder Rechte beziehen und dadurch gemeinsam handeln."
        },
        {
          id: "lf-drag-vorraete",
          label: "Vorratshaltung",
          target: "lf-target-vorraete",
          explanation: "Besitz, Abgaben und soziale Unterschiede werden dauerhaft sichtbar."
        },
        {
          id: "lf-drag-schrift",
          label: "Schrift",
          target: "lf-target-schrift",
          explanation: "Herrschaft kann Menschen, Güter und Arbeit über längere Zeiträume kontrollieren."
        },
        {
          id: "lf-drag-geld",
          label: "Münzgeld",
          target: "lf-target-geld",
          explanation: "Tausch löst sich stärker von persönlichem Vertrauen und wird über weite Räume möglich."
        },
        {
          id: "lf-drag-kloester",
          label: "Klöster",
          target: "lf-target-kloester",
          explanation: "Religion prägt Bildung, Schriftkultur und Herrschaftslegitimation im Mittelalter."
        },
        {
          id: "lf-drag-1492",
          label: "Europäische Expansion",
          target: "lf-target-1492",
          explanation: "Bestehende Gesellschaften Amerikas werden nicht entdeckt, sondern gewaltsam überformt."
        }
      ],
      targets: [
        {
          id: "lf-target-mythen",
          title: "Kooperation mit Fremden",
          prompt: "Ordne hier die Entwicklung zu, die große Gruppen auch ohne persönliche Bekanntschaft stabilisiert."
        },
        {
          id: "lf-target-vorraete",
          title: "Dauerhafte Ungleichheit",
          prompt: "Ordne hier die Entwicklung zu, die Besitz und soziale Unterschiede sichtbar verfestigt."
        },
        {
          id: "lf-target-schrift",
          title: "Herrschaft auf Distanz",
          prompt: "Ordne hier die Entwicklung zu, die Verwaltung über Listen und Aufzeichnungen ermöglicht."
        },
        {
          id: "lf-target-geld",
          title: "Abstraktes Vertrauen",
          prompt: "Ordne hier die Entwicklung zu, die Handel mit Unbekannten vereinfacht."
        },
        {
          id: "lf-target-kloester",
          title: "Kirche als Ordnungsmacht",
          prompt: "Ordne hier die Entwicklung zu, die geistliche und kulturelle Macht im Mittelalter bündelt."
        },
        {
          id: "lf-target-1492",
          title: "Gewaltsamer Einschnitt",
          prompt: "Ordne hier die Entwicklung zu, die in bereits bestehende amerikanische Gesellschaften eingreift."
        }
      ]
    },
    cloze: {
      title: "Lückentext: Kontinuitäten und Brüche erklären",
      instructions:
        "Fülle die Lücken so, dass Ursachen und Folgen in einem zusammenhängenden Überblick sichtbar werden.",
      parts: [
        "Menschen leben sehr lange in kleinen Gruppen. Erst ",
        { id: "cloze-1", answers: ["gemeinsame vorstellungen", "mythen", "erfundene ordnungen", "symbolische ordnungen"] },
        " ermöglichen größere Zusammenschlüsse. Die landwirtschaftliche Revolution bringt nicht nur mehr Nahrung, sondern auch stärkere ",
        { id: "cloze-2", answers: ["abhangigkeit", "abhängigkeit", "abhaengigkeit", "bindung an boden", "bindung an ernten"] },
        " von Feldern und Ernten. Frühe Staaten stützen sich auf ",
        { id: "cloze-3", answers: ["schrift", "listen", "verwaltung", "schriftsysteme"] },
        ", damit Abgaben, Arbeit und Besitz kontrollierbar werden. In Athen entsteht direkte ",
        { id: "cloze-4", answers: ["beteiligung", "demokratie", "direkte beteiligung"] },
        ", in Rom eine republikanische Mischordnung. Im Mittelalter verdichten ",
        { id: "cloze-5", answers: ["stadte", "städte", "markte", "märkte", "handel"] },
        " neue Lebensformen, ohne die ständische Gesellschaft sofort aufzuheben. 1492 bringt einen gewaltsamen ",
        { id: "cloze-6", answers: ["einschnitt", "bruch", "umbruch"] },
        " in bereits bestehende amerikanische Gesellschaften."
      ],
      sampleAnswer:
        "Menschen leben sehr lange in kleinen Gruppen. Erst gemeinsame Vorstellungen ermöglichen größere Zusammenschlüsse. Die landwirtschaftliche Revolution bringt nicht nur mehr Nahrung, sondern auch stärkere Abhängigkeit von Feldern und Ernten. Frühe Staaten stützen sich auf Schrift, damit Abgaben, Arbeit und Besitz kontrollierbar werden. In Athen entsteht direkte Beteiligung, in Rom eine republikanische Mischordnung. Im Mittelalter verdichten Städte neue Lebensformen, ohne die ständische Gesellschaft sofort aufzuheben. 1492 bringt einen gewaltsamen Einschnitt in bereits bestehende amerikanische Gesellschaften."
    },
    oralQuestions: [
      {
        id: "repetition-lf-oral-1",
        question:
          "Erkläre, warum gemeinsame Vorstellungen für die Bildung großer menschlicher Gruppen wichtiger waren als bloße körperliche Stärke.",
        placeholder: "Beziehe dich auf Sprache, Regeln, Mythen und Kooperation mit Fremden.",
        sampleAnswer:
          "Körperliche Stärke erklärt nur kleine Gruppen, nicht große Gesellschaften. Erst Sprache und gemeinsame Vorstellungen machen es möglich, dass Menschen sich auf Regeln, Götter, Rechte oder Traditionen beziehen. So können auch Fremde zusammenarbeiten. Große Gruppen beruhen deshalb nicht nur auf biologischen Voraussetzungen, sondern auf symbolischen Ordnungen. Gerade darin liegt ein entscheidender historische Bruch.",
        minWords: 40,
        criteria: [
          { label: "Sprache oder Symbolwelt als Grundlage", keywords: ["sprache", "symbol", "mythen", "vorstellungen"] },
          { label: "Kooperation mit Fremden", keywords: ["fremde", "kooperation", "große gruppen", "grossgruppen", "zusammenarbeit"] },
          { label: "Körperliche Stärke reicht nicht aus", keywords: ["korper", "körper", "starke", "stärke", "nicht genug"] }
        ]
      },
      {
        id: "repetition-lf-oral-2",
        question:
          "Erkläre, warum Landwirtschaft gleichzeitig ein Fortschritt und eine neue Belastung war.",
        placeholder: "Beziehe Nahrung, Arbeit, Bevölkerungswachstum und Abhängigkeit ein.",
        sampleAnswer:
          "Landwirtschaft vergrößert die verfügbare Nahrungsmenge und ermöglicht größere, sesshafte Gemeinschaften. Gleichzeitig steigt die Arbeitslast, weil Felder ständig gepflegt, Tiere versorgt und Vorräte gesichert werden müssen. Menschen werden außerdem stärker von Klima, Boden und Ernte abhängig. Aus dieser neuen Stabilität entstehen daher auch neue Verletzlichkeiten. Fortschritt und Belastung gehören hier zusammen.",
        minWords: 40,
        criteria: [
          { label: "Mehr Nahrung oder größere Gemeinschaften", keywords: ["nahrung", "bevolkerung", "bevölkerung", "größere gruppen", "sesshaft"] },
          { label: "Mehr Arbeit", keywords: ["arbeit", "arbeitslast", "pflege", "felder", "vorrate", "vorräte"] },
          { label: "Abhängigkeit von Boden, Wetter oder Ernte", keywords: ["boden", "wetter", "ernte", "abhangigkeit", "abhängigkeit"] }
        ]
      },
      {
        id: "repetition-lf-oral-3",
        question:
          "Vergleiche Ägypten, Athen und Rom danach, wie politische Ordnung jeweils begründet und stabilisiert wird.",
        placeholder: "Ordne Pharao und Maat, Volksversammlung sowie Senat und Magistrate ein.",
        sampleAnswer:
          "In Ägypten wird Ordnung stark religiös und königlich begründet: Pharao, Nil und Maat gehören zusammen. In Athen wird Ordnung durch die direkte Beteiligung freier Bürger in der Volksversammlung stabilisiert. In Rom entsteht eine republikanische Mischordnung aus Senat, Magistraten und Volksversammlungen. Alle drei Modelle schaffen politische Stabilität, aber auf sehr unterschiedliche Weise. Zugleich schließen alle drei große Teile der Bevölkerung aus oder ordnen sie unter.",
        minWords: 45,
        criteria: [
          { label: "Ägypten mit Pharao, Nil oder Maat", keywords: ["pharao", "nil", "maat", "agypten", "ägypten"] },
          { label: "Athen mit Volksversammlung oder Bürgern", keywords: ["athen", "volksversammlung", "burger", "bürger", "direkt"] },
          { label: "Rom mit Senat, Magistraten oder Konsuln", keywords: ["rom", "senat", "magistrate", "konsuln", "republik"] }
        ]
      },
      {
        id: "repetition-lf-oral-4",
        question:
          "Erkläre, warum mittelalterliche Städte einerseits einen Bruch, andererseits aber auch eine Fortsetzung älterer Ordnungen darstellen.",
        placeholder: "Gehe auf Märkte, Rat, Handel, Zünfte und ständische Gesellschaft ein.",
        sampleAnswer:
          "Mittelalterliche Städte bringen Verdichtung, Markt, Handwerk, Rat und Fernhandel zusammen und schaffen damit neue Freiräume gegenüber rein ländlicher Herrschaft. Das ist ein Bruch, weil neue wirtschaftliche und politische Zentren entstehen. Gleichzeitig bleibt die Gesellschaft ständisch geprägt, und auch Städte sind in bestehende Herrschafts- und Religionsordnungen eingebunden. Städte verändern die Gesellschaft also tief, heben ältere Strukturen aber nicht einfach auf. Gerade diese Mischung aus Neuem und Altem ist historisch entscheidend.",
        minWords: 45,
        criteria: [
          { label: "Neue städtische Elemente", keywords: ["markte", "märkte", "handel", "rat", "zunfte", "zünfte", "handwerk"] },
          { label: "Bruch mit rein ländlicher Ordnung", keywords: ["bruch", "neu", "verdichtung", "stadt", "freiraume", "freiräume"] },
          { label: "Fortdauer älterer Ordnungen", keywords: ["standisch", "ständisch", "herrschaft", "kirche", "fortsetzung", "nicht aufgehoben"] }
        ]
      }
    ]
  },
  fortgeschritten: {
    label: "Fortgeschritten",
    intro:
      "Hier geht es um Verbindungen zwischen mehreren Epochen: Wie tragen Geld, Religion und Reiche dazu bei, immer größere Räume zu ordnen?",
    memory: {
      title: "Memory: Entwicklung und Langzeitwirkung",
      instructions:
        "Verbinde die Entwicklung jeweils mit der übergreifenden Wirkung, die sie über mehrere Epochen hinweg entfaltet.",
      pairs: [
        {
          id: "f-memory-geld",
          left: "Geld",
          right: "Es schafft ein abstraktes Vertrauenssystem, das Tausch über persönliche Beziehungen hinaus ermöglicht."
        },
        {
          id: "f-memory-religion",
          left: "Universalreligionen",
          right: "Sie geben weit auseinanderliegenden Menschen gemeinsame Normen und Deutungen."
        },
        {
          id: "f-memory-imperium",
          left: "Imperien",
          right: "Sie verbinden große Räume, vereinheitlichen aber auch Recht, Sprache und Macht unter Zwang."
        },
        {
          id: "f-memory-republik",
          left: "Römische Republik",
          right: "Sie stabilisiert Machtteilung, trägt aber Konflikte in sich, die den Übergang zur Kaiserherrschaft vorbereiten."
        },
        {
          id: "f-memory-kloester",
          left: "Klöster",
          right: "Sie sichern Bildung und Schriftkultur, obwohl die Gesellschaft insgesamt nicht alphabetisiert ist."
        },
        {
          id: "f-memory-1491",
          left: "1491/1492",
          right: "Ein bestehender Kontinent mit eigenen Reichen und Agrarsystemen gerät in eine gewaltsame Neuordnung."
        }
      ]
    },
    drag: {
      title: "Drag-and-drop: Entwicklung dem langfristigen Zusammenhang zuordnen",
      instructions:
        "Ordne jede Entwicklung dem historischen Zusammenhang zu, den sie über eine längere Strecke der Geschichte prägt.",
      items: [
        {
          id: "f-drag-geld",
          label: "Geld",
          target: "f-target-geld",
          explanation: "Es verbindet Menschen im Handel, obwohl sie sich nicht kennen und einander nicht vertrauen."
        },
        {
          id: "f-drag-religion",
          label: "Universalreligion",
          target: "f-target-religion",
          explanation: "Sie schafft gemeinsame Deutung und Moral über viele Gesellschaften hinweg."
        },
        {
          id: "f-drag-imperium",
          label: "Imperium",
          target: "f-target-imperium",
          explanation: "Es vergrößert politische Räume und vereinheitlicht Herrschaft, oft auch gewaltsam."
        },
        {
          id: "f-drag-republik",
          label: "Republikanische Ordnung",
          target: "f-target-republik",
          explanation: "Sie verteilt Macht, ohne soziale Konflikte oder Expansion automatisch zu bremsen."
        },
        {
          id: "f-drag-kirche",
          label: "Mittelalterliche Kirche",
          target: "f-target-kirche",
          explanation: "Sie bindet Herrschaft, Wissen und Alltagsnormen an religiöse Ordnung."
        },
        {
          id: "f-drag-kolonisation",
          label: "Koloniale Expansion",
          target: "f-target-kolonisation",
          explanation: "Sie greift in bereits bestehende außereuropäische Entwicklungen ein und deutet sie um."
        }
      ],
      targets: [
        {
          id: "f-target-geld",
          title: "Abstraktes Vertrauen",
          prompt: "Ordne hier die Entwicklung zu, die wirtschaftliche Beziehungen von persönlicher Bekanntschaft löst."
        },
        {
          id: "f-target-religion",
          title: "Gemeinsame Normen großer Räume",
          prompt: "Ordne hier die Entwicklung zu, die Menschen über Regionen hinweg an gemeinsame Deutungen bindet."
        },
        {
          id: "f-target-imperium",
          title: "Einheit unter Herrschaft",
          prompt: "Ordne hier die Entwicklung zu, die große Räume politisch zusammenfasst und vereinheitlicht."
        },
        {
          id: "f-target-republik",
          title: "Machtteilung mit inneren Spannungen",
          prompt: "Ordne hier die Entwicklung zu, die politische Ämter verteilt, aber soziale Konflikte nicht beendet."
        },
        {
          id: "f-target-kirche",
          title: "Religiöse Ordnung des Alltags",
          prompt: "Ordne hier die Entwicklung zu, die Schriftkultur, Herrschaft und Moral zugleich prägt."
        },
        {
          id: "f-target-kolonisation",
          title: "Gewaltsame Neuordnung",
          prompt: "Ordne hier die Entwicklung zu, die bestehende Gesellschaften nicht begründet, sondern unterbricht."
        }
      ]
    },
    cloze: {
      title: "Lückentext: Große Ordnungsformen zusammenführen",
      instructions:
        "Fülle die Begriffe so ein, dass politische, wirtschaftliche und religiöse Integration als Gesamtlinie sichtbar wird.",
      parts: [
        "Mit wachsender Bevölkerungszahl reichen persönliche Bindungen nicht mehr aus. Große Gruppen stützen sich auf ",
        { id: "cloze-1", answers: ["erfundene ordnungen", "gemeinsame vorstellungen", "mythen", "fiktive ordnungen"] },
        ". Frühstaaten sichern Abgaben und Arbeit durch ",
        { id: "cloze-2", answers: ["schrift", "verwaltung", "listen"] },
        ". In der Antike wächst die politische Reichweite von ",
        { id: "cloze-3", answers: ["imperien", "reichen", "imperium"] },
        ", während ",
        { id: "cloze-4", answers: ["geld", "munzgeld", "münzgeld"] },
        " wirtschaftliche Beziehungen über große Räume verbindet. Im Mittelalter prägen ",
        { id: "cloze-5", answers: ["kirche", "christentum", "religion"] },
        " und Städte gemeinsam den Alltag. 1492 zeigt, dass globale Verflechtung oft als ",
        { id: "cloze-6", answers: ["gewalt", "eroberung", "kolonisierung", "bruch"] },
        " in bestehende Welten eintritt."
      ],
      sampleAnswer:
        "Mit wachsender Bevölkerungszahl reichen persönliche Bindungen nicht mehr aus. Große Gruppen stützen sich auf erfundene Ordnungen. Frühstaaten sichern Abgaben und Arbeit durch Schrift. In der Antike wächst die politische Reichweite von Imperien, während Geld wirtschaftliche Beziehungen über große Räume verbindet. Im Mittelalter prägen Kirche und Städte gemeinsam den Alltag. 1492 zeigt, dass globale Verflechtung oft als Gewalt in bestehende Welten eintritt."
    },
    oralQuestions: [
      {
        id: "repetition-f-oral-1",
        question:
          "Erkläre, warum Geld, Religion und Reiche als drei verschiedene, aber zusammenwirkende Mittel zur Ordnung großer Räume verstanden werden können.",
        placeholder: "Vergleiche wirtschaftliche, religiöse und politische Integration.",
        sampleAnswer:
          "Geld verbindet Menschen wirtschaftlich, weil es ein abstraktes Vertrauen in Tauschwerte schafft. Religion verbindet sie normativ, indem sie gemeinsame Deutungen, Gebote und Rituale über große Räume verbreitet. Reiche verbinden Räume politisch durch Macht, Recht, Verwaltung und Infrastruktur. Diese drei Mittel wirken verschieden, greifen historisch aber oft ineinander. Gerade dadurch können sehr große Ordnungen entstehen und stabil bleiben.",
        minWords: 50,
        criteria: [
          { label: "Geld als wirtschaftliche Verbindung", keywords: ["geld", "handel", "vertrauen", "tausch"] },
          { label: "Religion als gemeinsame Norm oder Deutung", keywords: ["religion", "normen", "deutung", "rituale", "gebote"] },
          { label: "Reiche als politische Verbindung", keywords: ["reiche", "imperien", "macht", "verwaltung", "recht", "infrastruktur"] }
        ]
      },
      {
        id: "repetition-f-oral-2",
        question:
          "Erkläre, warum die römische Republik zugleich eine stabile Machtordnung und eine Übergangsform zur Kaiserherrschaft war.",
        placeholder: "Beziehe Senat, Magistrate, Expansion und innere Konflikte ein.",
        sampleAnswer:
          "Die römische Republik verteilt Macht auf Senat, Konsuln, Magistrate und Volksversammlungen und wirkt dadurch zunächst stabil. Gleichzeitig bleibt sie von sozialen Spannungen und Machtkämpfen geprägt. Expansion verstärkt diese Spannungen, weil Kriegsbeute, Militär und persönliche Loyalitäten immer wichtiger werden. So wird die Republik nicht einfach zerstört, sondern aus ihren eigenen Spannungen heraus in die Kaiserherrschaft überführt. Gerade darin liegt ihre doppelte historische Bedeutung.",
        minWords: 50,
        criteria: [
          { label: "Machtteilung der Republik", keywords: ["senat", "konsuln", "magistrate", "volksversammlungen", "machtteilung"] },
          { label: "Innere Konflikte", keywords: ["konflikte", "spannungen", "patrizier", "plebejer", "machtkampfe", "machtkämpfe"] },
          { label: "Übergang zur Kaiserherrschaft", keywords: ["kaiser", "kaiserherrschaft", "ubergang", "übergang", "expansion", "militar", "militär"] }
        ]
      },
      {
        id: "repetition-f-oral-3",
        question:
          "Erkläre, warum mittelalterliche Klöster weit mehr waren als Orte des Gebets.",
        placeholder: "Gehe auf Schrift, Bildung, Herrschaft, Wirtschaft und religiöse Ordnung ein.",
        sampleAnswer:
          "Klöster waren Orte des Gebets, aber zugleich Zentren von Schrift, Bildung und Erinnerung. Dort wurden Texte abgeschrieben, Wissen bewahrt und Herrschaft religiös gedeutet. Viele Klöster waren außerdem wirtschaftlich bedeutsam, weil sie Land besaßen und Arbeit organisierten. Sie prägten daher nicht nur Frömmigkeit, sondern auch Macht, Alltag und Kultur. Klöster zeigen besonders deutlich, wie eng Religion und gesellschaftliche Ordnung im Mittelalter verbunden waren.",
        minWords: 45,
        criteria: [
          { label: "Schrift oder Bildung", keywords: ["schrift", "texte", "bildung", "abschreiben", "wissen"] },
          { label: "Wirtschaft oder Besitz", keywords: ["land", "besitz", "wirtschaft", "arbeit", "organisieren"] },
          { label: "Herrschaft oder religiöse Ordnung", keywords: ["herrschaft", "religios", "religiös", "ordnung", "kultur", "alltag"] }
        ]
      },
      {
        id: "repetition-f-oral-4",
        question:
          "Erkläre 1492 als Teil einer längeren Geschichte weltweiter Verflechtungen und nicht nur als europäisches Erfolgsdatum.",
        placeholder: "Beziehe bestehende Gesellschaften Amerikas, Gewalt und Neuordnung ein.",
        sampleAnswer:
          "1492 ist nicht nur ein Datum europäischer Expansion, sondern Teil einer längeren Geschichte globaler Verflechtungen. Entscheidend ist, dass Europa dabei nicht in einen leeren Raum eintritt. Amerika besitzt bereits Reiche, Städte, Landwirtschaft, Handelsbeziehungen und politische Ordnungen. Die koloniale Expansion bringt daher keinen Anfang, sondern Gewalt, Eroberung und Neuordnung in bestehende Welten. Gerade diese Perspektive korrigiert eine rein europäische Fortschrittserzählung.",
        minWords: 45,
        criteria: [
          { label: "Bestehende Gesellschaften Amerikas", keywords: ["amerika", "reiche", "stadte", "städte", "landwirtschaft", "gesellschaften"] },
          { label: "Gewalt oder Eroberung", keywords: ["gewalt", "eroberung", "kolonial", "kolonisierung", "neuordnung"] },
          { label: "Nicht bloß europäisches Erfolgsdatum", keywords: ["nicht nur", "europa", "erfolgsdatum", "perspektive", "fortschrittserzahlung", "fortschrittserzählung"] }
        ]
      }
    ]
  },
  experte: {
    label: "Experte",
    intro:
      "Hier verbindest du mehrere Epochen zu einer Deutung: Welche Entwicklungen tragen langfristig, und welche Brüche verändern die Richtung der Geschichte?",
    memory: {
      title: "Memory: Harte Deutungen historischer Langzeitlinien",
      instructions:
        "Verbinde jeweils die Entwicklung mit der Deutung, die ihren langfristigen historischen Sinn am präzisesten trifft.",
      pairs: [
        {
          id: "e-memory-ordnungen",
          left: "Gemeinsame Ordnungen",
          right: "Sie sind nicht natürlich gegeben, wirken aber historisch real, weil Menschen kollektiv an sie glauben."
        },
        {
          id: "e-memory-agrar",
          left: "Agrargesellschaft",
          right: "Sie erhöht Versorgung und Bevölkerungsdichte, bindet Menschen aber enger an Arbeit, Besitz und Herrschaft."
        },
        {
          id: "e-memory-imperium",
          left: "Imperium",
          right: "Es zerstört lokale Autonomie und schafft zugleich größere politische, rechtliche und wirtschaftliche Räume."
        },
        {
          id: "e-memory-geld",
          left: "Geldordnung",
          right: "Sie ersetzt persönliches Vertrauen nicht völlig, verschiebt es aber auf abstrakte Werte und Systeme."
        },
        {
          id: "e-memory-religion",
          left: "Universalreligion",
          right: "Sie verbindet sehr unterschiedliche Menschen durch gemeinsame Wahrheit, Moral und Geschichte."
        },
        {
          id: "e-memory-1492",
          left: "1492 als Bruch",
          right: "Der Einschnitt ist global bedeutsam, weil er bestehende Welten asymmetrisch verknüpft statt sie erst zu schaffen."
        }
      ]
    },
    drag: {
      title: "Drag-and-drop: Historische Deutung präzise zuordnen",
      instructions:
        "Ordne jede Entwicklung der Deutung zu, die ihren langfristigen historischen Charakter am besten beschreibt.",
      items: [
        {
          id: "e-drag-ordnungen",
          label: "Gemeinsame Ordnungen",
          target: "e-target-ordnungen",
          explanation: "Sie beruhen auf geteiltem Glauben und werden dadurch zu historisch wirksamer Realität."
        },
        {
          id: "e-drag-landwirtschaft",
          label: "Landwirtschaft",
          target: "e-target-landwirtschaft",
          explanation: "Sie verdichtet Gesellschaften, steigert aber Abhängigkeit, Arbeit und soziale Differenz."
        },
        {
          id: "e-drag-imperium",
          label: "Imperium",
          target: "e-target-imperium",
          explanation: "Es schafft Einheit und Gewalt gleichzeitig und darf deshalb weder nur positiv noch nur negativ gedeutet werden."
        },
        {
          id: "e-drag-geld",
          label: "Geld",
          target: "e-target-geld",
          explanation: "Es funktioniert als universelle Sprache des Tauschs und trägt damit Fernverflechtung."
        },
        {
          id: "e-drag-religion",
          label: "Universalreligion",
          target: "e-target-religion",
          explanation: "Sie stiftet Moral, Zugehörigkeit und Geschichtsdeutung über politische Grenzen hinweg."
        },
        {
          id: "e-drag-1492",
          label: "1492",
          target: "e-target-1492",
          explanation: "Es ist global wichtig, weil hier bestehende Entwicklungslinien gewaltsam zusammenprallen."
        }
      ],
      targets: [
        {
          id: "e-target-ordnungen",
          title: "Historisch wirksamer Glaube",
          prompt: "Ordne hier die Entwicklung zu, die nur funktioniert, weil viele Menschen dieselbe Ordnung anerkennen."
        },
        {
          id: "e-target-landwirtschaft",
          title: "Verdichtung und Abhängigkeit",
          prompt: "Ordne hier die Entwicklung zu, die Wachstum und neue Belastungen zugleich hervorbringt."
        },
        {
          id: "e-target-imperium",
          title: "Einheit und Zwang",
          prompt: "Ordne hier die Entwicklung zu, die große Räume integriert und dabei Herrschaft mit Gewalt verbindet."
        },
        {
          id: "e-target-geld",
          title: "Universelle Tauschsprache",
          prompt: "Ordne hier die Entwicklung zu, die Handel über kulturelle und politische Grenzen hinweg trägt."
        },
        {
          id: "e-target-religion",
          title: "Gemeinsame Wahrheit großer Räume",
          prompt: "Ordne hier die Entwicklung zu, die moralische und historische Deutung über viele Gesellschaften hinweg verbindet."
        },
        {
          id: "e-target-1492",
          title: "Asymmetrische Weltverknüpfung",
          prompt: "Ordne hier die Entwicklung zu, die globale Verflechtung als gewaltsamen Bruch sichtbar macht."
        }
      ]
    },
    cloze: {
      title: "Lückentext: Große Deutungslinie formulieren",
      instructions:
        "Fülle die Schlüsselbegriffe ein, so dass aus Einzelentwicklungen eine zusammenhängende historische Interpretation wird.",
      parts: [
        "Geschichte im engeren Sinn beginnt dort, wo Menschen ihre Welt durch ",
        { id: "cloze-1", answers: ["ordnungen", "regeln", "vorstellungen", "gemeinsame ordnungen"] },
        " gestalten. Die kognitive Revolution erweitert Kooperation über persönliche Nähe hinaus. Die landwirtschaftliche Revolution verdichtet Gesellschaften, macht sie aber auch stärker von ",
        { id: "cloze-2", answers: ["arbeit", "boden", "ernte", "vorraten", "vorräten", "ressourcen"] },
        " abhängig. Staaten, Geld, Religion und Imperien verbinden immer größere Räume und schaffen dadurch sowohl ",
        { id: "cloze-3", answers: ["einheit", "integration", "vernetzung", "ordnung"] },
        " als auch neue Formen von Zwang. 1492 zeigt schließlich, dass globale Geschichte nicht mit Europa beginnt, sondern aus dem Zusammenstoß bereits bestehender ",
        { id: "cloze-4", answers: ["welten", "gesellschaften", "entwicklungen", "ordnungen"] },
        " besteht. Große Geschichte ist deshalb immer auch eine Geschichte von ",
        { id: "cloze-5", answers: ["kontinuitaten", "kontinuitäten", "umbruchen", "umbrüchen", "bruchen", "brüchen"] },
        " und nicht bloß eine Liste einzelner Daten."
      ],
      sampleAnswer:
        "Geschichte im engeren Sinn beginnt dort, wo Menschen ihre Welt durch Ordnungen gestalten. Die kognitive Revolution erweitert Kooperation über persönliche Nähe hinaus. Die landwirtschaftliche Revolution verdichtet Gesellschaften, macht sie aber auch stärker von Arbeit und Ernte abhängig. Staaten, Geld, Religion und Imperien verbinden immer größere Räume und schaffen dadurch sowohl Einheit als auch neue Formen von Zwang. 1492 zeigt schließlich, dass globale Geschichte nicht mit Europa beginnt, sondern aus dem Zusammenstoß bereits bestehender Welten besteht. Große Geschichte ist deshalb immer auch eine Geschichte von Kontinuitäten und Brüchen und nicht bloß eine Liste einzelner Daten."
    },
    oralQuestions: [
      {
        id: "repetition-e-oral-1",
        question:
          "Erkläre, warum menschliche Ordnungen historisch wirksam sind, obwohl sie nicht natürlich gegeben sind.",
        placeholder: "Gehe auf geteilten Glauben, Regeln, Institutionen und ihre reale Wirkung ein.",
        sampleAnswer:
          "Menschliche Ordnungen sind nicht wie Berge oder Flüsse natürlich vorhanden. Sie werden durch gemeinsamen Glauben, Regeln und Institutionen erzeugt. Trotzdem wirken sie historisch real, weil Menschen sich in ihrem Handeln nach ihnen richten. Staaten, Geld, Rechte oder religiöse Normen existieren daher nicht als Natur, sondern als kollektiv getragene Ordnung. Gerade diese Verbindung von Imagination und realer Wirkung macht Geschichte möglich.",
        minWords: 50,
        criteria: [
          { label: "Nicht natürlich gegeben", keywords: ["nicht natur", "nicht natürlich", "erfunden", "imaginiert"] },
          { label: "Geteilter Glaube oder gemeinsame Anerkennung", keywords: ["glauben", "anerkennen", "gemeinsam", "vorstellungen", "regeln"] },
          { label: "Reale historische Wirkung", keywords: ["wirkung", "handeln", "institutionen", "staat", "geld", "rechte"] }
        ]
      },
      {
        id: "repetition-e-oral-2",
        question:
          "Erkläre Landwirtschaft als historischen Wendepunkt, ohne sie einfach als Fortschritt oder als Fehler zu deuten.",
        placeholder: "Verbinde Versorgung, Bevölkerungswachstum, Arbeitslast, Herrschaft und Ungleichheit.",
        sampleAnswer:
          "Landwirtschaft ist ein Wendepunkt, weil sie größere und dichtere Gesellschaften ermöglicht. Sie verbessert Versorgung und stützt Bevölkerungswachstum, erzeugt aber zugleich mehr Arbeitslast und stärkere Abhängigkeit von Boden, Klima und Ernte. Außerdem werden Vorräte, Besitz und Herrschaft leichter kontrollierbar. Dadurch wächst soziale Ungleichheit. Landwirtschaft ist deshalb weder bloß Fortschritt noch bloß Irrtum, sondern ein historischer Bruch mit widersprüchlichen Folgen.",
        minWords: 55,
        criteria: [
          { label: "Mehr Versorgung oder Bevölkerungswachstum", keywords: ["versorgung", "nahrung", "bevolkerung", "bevölkerung", "wachstum"] },
          { label: "Arbeitslast oder Abhängigkeit", keywords: ["arbeitslast", "arbeit", "abhangigkeit", "abhängigkeit", "ernte", "boden"] },
          { label: "Herrschaft oder Ungleichheit", keywords: ["herrschaft", "besitz", "ungleichheit", "abgaben", "kontrollierbar"] }
        ]
      },
      {
        id: "repetition-e-oral-3",
        question:
          "Erkläre, warum Imperien historisch zugleich zerstörerisch und vereinheitlichend wirken.",
        placeholder: "Gehe auf Gewalt, lokale Verluste, Recht, Infrastruktur und große Räume ein.",
        sampleAnswer:
          "Imperien arbeiten oft mit Eroberung, Zwang und dem Abbau lokaler Autonomie. In diesem Sinn sind sie zerstörerisch. Gleichzeitig schaffen sie größere politische Räume, verbinden Regionen durch Straßen, Recht, Verwaltung oder gemeinsame Sprachen und erleichtern Austausch. Ihre Wirkung ist deshalb doppelt: Sie unterwerfen, aber sie integrieren auch. Gerade diese Ambivalenz macht sie historisch so bedeutsam.",
        minWords: 50,
        criteria: [
          { label: "Gewalt oder lokale Verluste", keywords: ["gewalt", "eroberung", "zwang", "lokal", "verluste", "unterwerfung"] },
          { label: "Einheit oder Integration", keywords: ["einheit", "integration", "verbinden", "grosse raume", "große räume"] },
          { label: "Recht, Infrastruktur oder Verwaltung", keywords: ["recht", "infrastruktur", "strassen", "straßen", "verwaltung", "sprache"] }
        ]
      },
      {
        id: "repetition-e-oral-4",
        question:
          "Erkläre die Geschichte bis 1500 als Zusammenspiel von Kontinuitäten und Brüchen.",
        placeholder: "Verbinde mindestens drei Epochen und zeige, was sich verändert und was weitergetragen wird.",
        sampleAnswer:
          "Geschichte bis 1500 besteht aus Brüchen, etwa der kognitiven Revolution, der Sesshaftigkeit oder der europäischen Expansion nach 1492. Gleichzeitig wirken frühere Entwicklungen weiter: Sprache, Herrschaft, Religion, Schrift und Geld tragen über Epochen hinweg. So entstehen keine vollständig neuen Welten, sondern veränderte Ordnungen auf älteren Grundlagen. Kontinuitäten und Brüche greifen also ständig ineinander. Gerade deshalb muss Geschichte als Entwicklungslinie und nicht nur als Folge einzelner Daten verstanden werden.",
        minWords: 55,
        criteria: [
          { label: "Mindestens drei Epochen oder Umbrüche", keywords: ["kognitive", "sesshaftigkeit", "staat", "antike", "mittelalter", "1492", "1491"] },
          { label: "Weiterwirkende Strukturen", keywords: ["sprache", "herrschaft", "religion", "schrift", "geld", "weiter"] },
          { label: "Kontinuitäten und Brüche zusammendenken", keywords: ["kontinuitat", "kontinuität", "bruch", "umbruch", "ineinander", "entwicklung"] }
        ]
      }
    ]
  }
};

const repetitionLevelOrder = ["basis", "leichtFortgeschritten", "fortgeschritten", "experte"];
const repetitionLegacyOralMap = {
  "repetition-oral-1": "repetition-basis-oral-1",
  "repetition-oral-2": "repetition-basis-oral-2",
  "repetition-oral-3": "repetition-basis-oral-3",
  "repetition-oral-4": "repetition-basis-oral-4"
};

function getCurrentRepetitionLevel(state) {
  const level = String(state.repetitionLevel || "basis");
  return repetitionLevels[level] ? level : "basis";
}

function getRepetitionMode(stateOrLevel) {
  const level =
    typeof stateOrLevel === "string" ? stateOrLevel : getCurrentRepetitionLevel(stateOrLevel || {});
  return repetitionLevels[level] || repetitionLevels.basis;
}

function getRepetitionStateKey(level, suffix) {
  return `repetition-${level}-${suffix}`;
}

function getRepetitionTextKey(level, baseId) {
  return `${baseId}-${level}-text`;
}

function migrateRepetitionState(state) {
  if (!state || typeof state !== "object") {
    return {};
  }

  const migrated = { ...state };
  const legacyStateMap = {
    repetitionMemoryMatched: getRepetitionStateKey("basis", "memory-matched"),
    repetitionMemorySelected: getRepetitionStateKey("basis", "memory-selected"),
    repetitionMemoryFeedback: getRepetitionStateKey("basis", "memory-feedback"),
    repetitionMemoryShowSolution: getRepetitionStateKey("basis", "memory-show-solution"),
    repetitionDragAssignments: getRepetitionStateKey("basis", "drag-assignments"),
    repetitionDragFeedback: getRepetitionStateKey("basis", "drag-feedback"),
    repetitionDragShowSolution: getRepetitionStateKey("basis", "drag-show-solution"),
    repetitionClozeCorrect: getRepetitionStateKey("basis", "cloze-correct"),
    repetitionClozeFeedback: getRepetitionStateKey("basis", "cloze-feedback"),
    repetitionClozeShowSolution: getRepetitionStateKey("basis", "cloze-show-solution")
  };

  Object.entries(legacyStateMap).forEach(([legacyKey, nextKey]) => {
    if (legacyKey in migrated && !(nextKey in migrated)) {
      migrated[nextKey] = migrated[legacyKey];
    }
    delete migrated[legacyKey];
  });

  Object.entries(repetitionLegacyOralMap).forEach(([legacyId, nextId]) => {
    ["", "-text", "-feedback"].forEach((suffix) => {
      const legacyKey = `${legacyId}${suffix}`;
      const nextKey = `${nextId}${suffix}`;
      if (legacyKey in migrated && !(nextKey in migrated)) {
        migrated[nextKey] = migrated[legacyKey];
      }
      delete migrated[legacyKey];
    });
  });

  return migrated;
}

function getAllRepetitionOralQuestions() {
  return repetitionLevelOrder.flatMap((level) => repetitionLevels[level].oralQuestions);
}

function getMemoryCards(stateOrLevel) {
  const mode = getRepetitionMode(stateOrLevel);
  return mode.memory.pairs.flatMap((pair, index) => [
    { id: `${pair.id}-a`, pairId: pair.id, text: pair.left, order: index * 2 + 1 },
    { id: `${pair.id}-b`, pairId: pair.id, text: pair.right, order: index * 2 + 2 }
  ]);
}

function getSourceDetail(moduleId, source) {
  return sourceDetails[makeSourceKey(moduleId, source.title)] || {};
}

function getHarariReferenceLink(detail) {
  const params = new URLSearchParams();
  if (detail.pdfPage) {
    params.set("page", String(detail.pdfPage));
  }
  return `${HARARI_REFERENCE_VIEW_PATH}?${params.toString()}`;
}

function renderHarariActions(detail) {
  if (!detail?.pdfPage) {
    return "";
  }

  const actions = [
    {
      label: `Buchstelle S. ${detail.pdfPage} öffnen`,
      href: getHarariReferenceLink(detail)
    }
  ];

  if (Array.isArray(detail.extraPdfPages)) {
    detail.extraPdfPages.forEach((page) => {
      actions.push({
        label: `Zusatzstelle S. ${page} öffnen`,
        href: `${HARARI_REFERENCE_VIEW_PATH}?page=${encodeURIComponent(page)}`
      });
    });
  }

  return `
    <div class="source-actions">
      ${actions
        .map(
          (action) =>
            `<a class="btn ghost" href="${action.href}">${action.label}</a>`
        )
        .join("")}
    </div>
  `;
}

function renderRelevantItems(items, label) {
  if (!items?.length) {
    return "";
  }

  return `
    <div class="source-list-block">
      <p><strong>${label}</strong></p>
      <ul class="source-list">
        ${items
          .map((item) => {
            const content = item.link
              ? `<a href="${item.link}" target="_blank" rel="noreferrer">${item.title}</a>`
              : item.title;
            return `<li><strong>${content}</strong>${item.note ? `<span>${item.note}</span>` : ""}</li>`;
          })
          .join("")}
      </ul>
    </div>
  `;
}

function renderSourceFocus(detail) {
  if (!detail.whyHere && !detail.mustKnow?.length) {
    return "";
  }

  return `
    <div class="source-focus">
      ${detail.whyHere ? `<p><strong>Historische Einordnung:</strong> ${cleanStudentText(detail.whyHere)}</p>` : ""}
      ${
        detail.mustKnow?.length
          ? `<div class="source-list-block"><p><strong>Wichtige Fakten:</strong></p><ul class="source-list">${detail.mustKnow
              .map((item) => `<li>${cleanStudentText(item)}</li>`)
              .join("")}</ul></div>`
          : ""
      }
    </div>
  `;
}

const SOURCE_CHECK_STOPWORDS = new Set([
  "aber",
  "auch",
  "aus",
  "bei",
  "damit",
  "dass",
  "dem",
  "den",
  "der",
  "des",
  "die",
  "dies",
  "diese",
  "dieser",
  "dieses",
  "durch",
  "eine",
  "einem",
  "einen",
  "einer",
  "eines",
  "einfach",
  "einen",
  "erste",
  "ersten",
  "erst",
  "fur",
  "fuer",
  "ganz",
  "hier",
  "ihre",
  "ihren",
  "ihres",
  "immer",
  "nicht",
  "oder",
  "seine",
  "seinen",
  "seiner",
  "sich",
  "sind",
  "sondern",
  "uber",
  "ueber",
  "unter",
  "viele",
  "wird",
  "werden",
  "wurde",
  "wurden",
  "zeigt",
  "zeigen",
  "zwar",
  "zwischen"
]);

function splitIntoClaims(text) {
  return String(text || "")
    .split(/(?<=[.!?])\s+|;\s+/)
    .map((part) => cleanStudentText(part).replace(/\s+/g, " ").trim())
    .filter((part) => part.length > 30);
}

function extractKeywordsFromText(text) {
  const normalized = normalize(text).replace(/[^a-z0-9\s]/g, " ");
  const words = normalized
    .split(/\s+/)
    .filter((word) => word.length > 4 && !SOURCE_CHECK_STOPWORDS.has(word));

  return [...new Set(words)].slice(0, 8);
}

function buildCriteriaFromTexts(texts) {
  return (texts || [])
    .map((text) => cleanStudentText(text))
    .filter(Boolean)
    .map((text) => ({
      label: text.replace(/[.:]\s*$/, ""),
      keywords: extractKeywordsFromText(text)
    }))
    .filter((criterion) => criterion.keywords.length);
}

function splitSourcePassage(text) {
  const sourceText = String(text || "").trim();
  if (!sourceText) {
    return [];
  }

  const sentences = sourceText.match(/[^.!?]+[.!?]?/g) || [sourceText];
  const parts = [];
  let current = "";

  sentences.forEach((sentence) => {
    const candidate = `${current} ${sentence}`.trim();
    if (candidate.length > 220 && current) {
      parts.push(current.trim());
      current = sentence.trim();
      return;
    }
    current = candidate;
  });

  if (current) {
    parts.push(current.trim());
  }

  return parts.filter(Boolean);
}

function shortenPromptSegment(text, maxLength = 140) {
  const cleaned = cleanStudentText(text).replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  return `${cleaned.slice(0, maxLength).replace(/[,:;]\s*$/, "").trim()} …`;
}

function buildSourceMicroCheckPrompt(heading, detail, kind, texts) {
  const cleanedTexts = (texts || []).map((item) => cleanStudentText(item)).filter(Boolean);
  const first = shortenPromptSegment(cleanedTexts[0] || heading || "dieser Entwicklung");
  const second = shortenPromptSegment(cleanedTexts[1] || "");

  if (kind === "quote" && detail.quote) {
    return `Erkläre präzise, was die Aussage ${detail.quote} historisch bedeutet und woran man das konkret erkennt.`;
  }

  if (kind === "facts" && first && second) {
    return `Erkläre den historischen Zusammenhang zwischen ${first} und ${second}.`;
  }

  if (kind === "contrast" && first && second) {
    return `Zeige den Unterschied zwischen ${first} und ${second} in 2 bis 4 klaren Sätzen.`;
  }

  if (first) {
    return `Erkläre präzise, was historisch mit ${first} gemeint ist.`;
  }

  return "Erkläre den historischen Zusammenhang in 2 bis 4 klaren Sätzen.";
}

function buildSourceMicroChecks(module, source, detail, heading) {
  const sourceId = `${module.id}-${normalize(heading || source.title)}`;
  const thesisText = cleanStudentText(detail.thesis || "");
  const passageText = cleanStudentText(detail.passage || source.extracted || "");
  const passageSections = splitSourcePassage(passageText);
  const factTexts =
    detail.mustKnow?.length
      ? detail.mustKnow
      : detail.relevantItems?.map((item) =>
          `${item.title}${item.note ? `: ${cleanStudentText(item.note)}` : ""}`
        ) || [];
  const claims = splitIntoClaims(`${thesisText} ${passageText}`.trim());
  const microChecks = [];

  const checkBlueprints = [
    {
      kind: detail.quote ? "quote" : "thesis",
      texts: thesisText ? [thesisText, claims[0] || passageSections[0] || ""] : claims.slice(0, 2),
      sample: thesisText || passageSections[0] || claims[0] || passageText
    },
    {
      kind: "facts",
      texts: passageSections[0]
        ? [passageSections[0], passageSections[1] || claims[1] || thesisText]
        : claims.slice(0, 2),
      sample: passageSections[0] || passageText
    },
    {
      kind: detail.whyHere ? "contrast" : "facts",
      texts: detail.whyHere
        ? [detail.whyHere, factTexts[0] || factTexts[1] || claims[0] || ""]
        : factTexts.slice(0, 2),
      sample:
        [detail.whyHere, ...factTexts.slice(0, 2)]
          .filter(Boolean)
          .join(" ") || passageSections[1] || passageText
    },
    {
      kind: "facts",
      texts:
        factTexts.slice(1, 3).length >= 2
          ? factTexts.slice(1, 3)
          : passageSections.slice(1, 3),
      sample:
        factTexts.slice(1, 4).join(" ") ||
        passageSections.slice(1).join(" ") ||
        passageText
    }
  ];

  checkBlueprints.forEach((blueprint, index) => {
    const criteria = buildCriteriaFromTexts(blueprint.texts);
    if (!blueprint.sample || !criteria.length) {
      return;
    }

    microChecks.push({
      id: `${sourceId}-micro-${index + 1}`,
      prompt: buildSourceMicroCheckPrompt(heading, detail, blueprint.kind, blueprint.texts),
      placeholder: "Formuliere hier 2 bis 4 inhaltlich klare Sätze.",
      sampleAnswer: blueprint.sample,
      criteria
    });
  });

  return microChecks.slice(0, 4);
}

function renderSourceMicroCheck(question) {
  const teacherSolution = isTeacherMode()
    ? `
      <div class="teacher-answer-key">
        <p class="section-kicker">Direkte Musterlösung</p>
        <p>${cleanPromptText(question.sampleAnswer)}</p>
        <div class="source-list-block">
          <p><strong>Erwartete Gesichtspunkte:</strong></p>
          <ul class="source-list">
            ${question.criteria.map((criterion) => `<li>${criterion.label}</li>`).join("")}
          </ul>
        </div>
      </div>
    `
    : "";

  return `
    <div class="check-question source-micro-check" data-source-question="${question.id}">
      <p>${cleanPromptText(question.prompt)}</p>
      <textarea data-source-answer="${question.id}" placeholder="${question.placeholder}"></textarea>
      <div class="task-actions">
        <button class="btn primary" type="button" data-source-check="${question.id}">Antwort prüfen</button>
        <button class="btn ghost" type="button" data-source-show="${question.id}">Musterlösung zeigen</button>
      </div>
      <div class="feedback" data-source-feedback="${question.id}"></div>
      ${teacherSolution}
    </div>
  `;
}

function cleanStudentText(text) {
  return String(text || "")
    .replace(/^Didaktisch entscheidend ist:\s*/i, "Wichtig ist: ")
    .replace(/^Didaktisch besonders ergiebig ist\s*/i, "Besonders wichtig ist ")
    .replace(/^Didaktisch besonders wichtig ist:\s*/i, "Wichtig ist: ")
    .replace(/^Didaktisch lohnt es sich hier,\s*/i, "")
    .replace(/^Aus didaktischer Sicht\s*/i, "")
    .replace(/^Die Seite gehört in Modul \d+, weil\s*/i, "")
    .replace(/^Der Film gehört in Modul \d+, weil\s*/i, "")
    .replace(/^Die Folge gehört in Modul \d+, weil\s*/i, "")
    .replace(/^Die Reihe gehört in Modul \d+, weil\s*/i, "")
    .replace(/^Die Ressource soll\s*/i, "")
    .replace(/^Die Ressource ergänzt das Modul um\s*/i, "")
    .replace(/^Die Ressource ergänzt\s*/i, "")
    .replace(/^Die Ressource dient hier als\s*/i, "")
    .replace(/^Die Ressource wird genutzt, um\s*/i, "")
    .replace(/^Die Ressource wird als\s*/i, "")
    .replace(/^Im Modul dient dies als\s*/i, "")
    .replace(/^Die Quelle wird genutzt, um\s*/i, "")
    .replace(/Didaktisch wird sie eingesetzt, um\s*/gi, "Sie hilft dabei, ")
    .replace(/Die Serie wird didaktisch als\s*/gi, "Die Serie dient als ")
    .replace(/für dieses Modul/gi, "hier")
    .replace(/\bdidaktisch\s+/gi, "")
    .trim();
}

function cleanPromptText(text) {
  return cleanStudentText(text)
    .replace(/Hararis Bild vom /gi, "das Bild aus der Harari-Buchstelle vom ")
    .replace(/Hararis Bild /gi, "das Bild aus der Harari-Buchstelle ")
    .replace(/Hararis These/gi, "die These in der Harari-Buchstelle")
    .replace(/Hararis Zuspitzung/gi, "die Zuspitzung in der Harari-Buchstelle")
    .replace(/Hararis Einstieg/gi, "den Einstieg in der Harari-Buchstelle")
    .replace(/Hararis Kapitel/gi, "das Kapitel in der Harari-Buchstelle")
    .replace(/Harari-PDF/gi, "Harari-Buchstelle im PDF")
    .replace(/\bHarari\b/gi, "den Historiker Harari");
}

function getSourceHeading(source, detail) {
  return String(detail.badge || source.meta || source.title || "")
    .replace(/^S\.\s*[\d]+(?:\s*[–-]\s*[\d]+)?\s*·\s*/i, "")
    .replace(/^(SRF-school-Seite|SRF-school-Film|SRF Einstein|YouTube-Film|YouTube-Video|dreiteilige Reihe|fünfteilige Reihe|Serienseite)\s*·\s*/i, "")
    .replace(/^Buchstelle\s*·\s*/i, "")
    .replace(/^Folge\s+/i, "")
    .trim();
}

function getSourceBadge(source, detail, isHarari) {
  if (isHarari) {
    const match = String(detail.badge || "").match(/^(S\.\s*[\d]+(?:\s*[–-]\s*[\d]+)?)/i);
    return match ? match[1] : "";
  }
  return "";
}

function cleanListLabel(label, fallback) {
  return String(label || fallback || "")
    .replace(/^Auf der SRF-Seite angelegte Stoffstruktur:?$/i, "Wichtige Entwicklungen:")
    .replace(/^Auf der SRF-Seite hier besonders wichtig:?$/i, "Wichtige Themen:")
    .replace(/^Auf der SRF-Seite hier konkret gemeint:?$/i, "Wichtige Themen:")
    .replace(/^Von SRF auf dieser Seite zusätzlich verlinkt:?$/i, "Weiterführende Themen:")
    .replace(/^Zur Einordnung der ganzen SRF-Reihe:?$/i, "Weitere wichtige Themen:")
    .replace(/^Besonders wichtige Teilthemen:?$/i, "Wichtige Themen:")
    .replace(/^Weitere Themen auf derselben Seite:?$/i, "Weiterführende Themen:")
    .trim();
}

function getModuleIntroText(module) {
  return moduleSupports[module.id]?.overview || cleanStudentText(module.hook);
}

function loadDashboardSnapshots() {
  try {
    return JSON.parse(localStorage.getItem(TEACHER_DASHBOARD_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveDashboardSnapshots(store) {
  localStorage.setItem(TEACHER_DASHBOARD_KEY, JSON.stringify(store));
}

function getExplicitLearnerName(state) {
  const value = String(state?.learnerName || "").trim();
  return value || "";
}

function buildLearnerSnapshot(state) {
  const learnerName = getExplicitLearnerName(state);
  if (!learnerName) {
    return null;
  }

  const interactionIds = modules.flatMap((module) => getModuleInteractionIds(module));
  const interactionCompleted = interactionIds.filter((id) => Boolean(state[id])).length;
  const interactionTotal = interactionIds.length;
  const passedModules = getPassedModuleCount(state);
  const moduleScores = modules.map((module, moduleIndex) => ({
    id: module.id,
    number: module.number,
    title: module.title,
    passed: isModulePassed(state, module.id),
    unlocked: isModuleUnlocked(state, moduleIndex),
    score: getContentCheckScore(state, module.id)
  }));
  const nextOpenModule = modules.find((module) => !isModulePassed(state, module.id));

  return {
    name: learnerName,
    updatedAt: new Date().toISOString(),
    passedModules,
    totalModules: modules.length,
    interactionCompleted,
    interactionTotal,
    overallPercent: interactionTotal ? Math.round((interactionCompleted / interactionTotal) * 100) : 0,
    nextModule: nextOpenModule ? `Modul ${nextOpenModule.number}: ${nextOpenModule.title}` : "Alle Module bestanden",
    moduleScores
  };
}

function persistLearnerSnapshot(state) {
  const snapshot = buildLearnerSnapshot(state);
  if (!snapshot) {
    return;
  }

  const store = loadDashboardSnapshots();
  store[normalize(snapshot.name)] = snapshot;
  saveDashboardSnapshots(store);
}

function loadState() {
  try {
    return migrateRepetitionState(JSON.parse(localStorage.getItem(getStorageKey()) || "{}"));
  } catch {
    return {};
  }
}

function saveState(state) {
  state.lastUpdatedAt = new Date().toISOString();
  localStorage.setItem(getStorageKey(), JSON.stringify(state));
  if (!isTeacherMode()) {
    persistLearnerSnapshot(state);
  }
  if (!isTeacherMode() && window.GESCHICHTE_SUPABASE?.syncState) {
    window.GESCHICHTE_SUPABASE.syncState(state).catch((error) => {
      console.error("Supabase sync failed", error);
    });
  }
}

function getModuleInteractionIds(module) {
  return [module.task.id, quickChecks[module.id].id, module.transfer.id, `${module.id}-content-check`];
}

function getModuleProgress(state, module) {
  const ids = getModuleInteractionIds(module);
  const completed = ids.filter((id) => Boolean(state[id])).length;
  return {
    completed,
    total: ids.length,
    percentage: (completed / ids.length) * 100
  };
}

function getContentCheckScore(state, moduleId) {
  return Number(state[`${moduleId}-content-score`] || 0);
}

function isModulePassed(state, moduleId) {
  return getContentCheckScore(state, moduleId) >= 60;
}

function isModuleUnlocked(state, moduleIndex) {
  if (isTeacherMode()) {
    return true;
  }

  if (moduleIndex === 0) {
    return true;
  }

  return isModulePassed(state, modules[moduleIndex - 1].id);
}

function getModuleStatus(state, module, moduleIndex) {
  if (!isModuleUnlocked(state, moduleIndex)) {
    return { label: "gesperrt", className: "locked" };
  }

  if (isModulePassed(state, module.id)) {
    return { label: "bestanden", className: "ready" };
  }

  return { label: "offen", className: "open" };
}

function getPassedModuleCount(state) {
  return modules.filter((module) => isModulePassed(state, module.id)).length;
}

function getLearnerName(state) {
  const value = getExplicitLearnerName(state);
  return value || "Lernende Person";
}

function updateProgress(state) {
  const interactionIds = modules.flatMap((module) => getModuleInteractionIds(module));
  const total = interactionIds.length;
  const completed = interactionIds.filter((id) => Boolean(state[id])).length;
  const percentage = total ? (completed / total) * 100 : 0;
  document.getElementById("progress-label").textContent = `${completed} von ${total} Arbeitsschritten bearbeitet`;
  document.getElementById("progress-bar").style.width = `${percentage}%`;
}

function createTimeline(state) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  modules.forEach((module, moduleIndex) => {
    const link = document.createElement("a");
    const unlocked = isModuleUnlocked(state, module.number - 1);
    const status = getModuleStatus(state, module, moduleIndex);
    link.href = unlocked ? `#${module.id}` : "#";
    link.className = `${unlocked ? "" : "is-locked"} ${isModulePassed(state, module.id) ? "is-ready" : ""}`.trim();
    link.innerHTML = `<strong>Modul ${module.number}</strong><span>${module.phase}</span><span class="nav-status status-badge ${status.className}">${status.label}</span>`;
    timeline.appendChild(link);
  });
}

function renderMasterTimeline() {
  const container = document.getElementById("master-timeline");
  if (!container) {
    return;
  }

  const epochClassMap = {
    Frühgeschichte: "is-prehistory",
    Neolithikum: "is-neolithic",
    "Frühe Hochkulturen": "is-early-states",
    Antike: "is-antiquity",
    "Antike bis Frühmittelalter": "is-religions",
    Mittelalter: "is-middle-ages",
    "Spätes Mittelalter": "is-late-medieval",
    Langzeitbilanz: "is-longue-duree"
  };

  container.innerHTML = masterTimeline
    .map((entry) => {
      const moduleLinks = entry.modules
        .map((moduleId) => {
          const module = modules.find((candidate) => candidate.id === moduleId);
          if (!module) {
            return "";
          }
          return `<a href="#${module.id}" class="timeline-jump-link">Zu Modul ${module.number}: ${module.title}</a>`;
        })
        .join("");

      return `
        <article class="master-timeline-entry ${epochClassMap[entry.epoch] || ""}">
          <span class="master-timeline-date">${entry.time}</span>
          <div class="master-timeline-card">
            <span class="master-timeline-epoch">${entry.epoch}</span>
            <h3>${entry.title}</h3>
            <p>${entry.body}</p>
            <div class="master-timeline-jumps">
              <p class="master-timeline-jump-label">Zugehörige Module</p>
              <div class="master-timeline-modules">${moduleLinks}</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function ensureThinkerModal() {
  let modal = document.getElementById("thinker-modal");
  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "thinker-modal";
  modal.className = "thinker-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="thinker-modal-backdrop" data-thinker-close></div>
    <div class="thinker-modal-panel" role="dialog" aria-modal="true" aria-labelledby="thinker-modal-title">
      <button class="thinker-modal-close" type="button" aria-label="Popup schliessen" data-thinker-close>&times;</button>
      <div id="thinker-modal-content"></div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function renderThinkerPanel() {
  const container = document.getElementById("thinker-panel");
  if (!container) {
    return;
  }

  container.innerHTML = `
    <p class="panel-kicker">Positionen im Überblick</p>
    <h2>Eine Geschichte - zwei Sichtweisen</h2>
    <p class="compact">
      Die Einheit arbeitet mit zwei Deutungen der Tiefengeschichte. Hier kannst du beide
      Grundpositionen kurz öffnen und global einordnen, bevor du ihre Unterschiede in den
      einzelnen Modulen prüfst.
    </p>
    <div class="thinker-compare-grid">
      <article class="thinker-summary-card">
        <span class="fact-label">Harari</span>
        <strong>Große Umbrüche und wachsende Ordnungen</strong>
        <p>Sprache, Landwirtschaft, Reiche, Geld und Religion verdichten die Geschichte zu immer größeren Verbindungsräumen.</p>
        <button class="btn primary" type="button" data-thinker-open="harari">Harari öffnen</button>
      </article>
      <article class="thinker-summary-card">
        <span class="fact-label">Graeber/Wengrow</span>
        <strong>Offene Wege und politische Wahl</strong>
        <p>Frühe Gesellschaften probieren unterschiedliche Formen aus; Komplexität führt nicht automatisch in dieselbe Ordnung.</p>
        <button class="btn primary" type="button" data-thinker-open="graeberWengrow">Graeber/Wengrow öffnen</button>
      </article>
    </div>
  `;

  ensureThinkerModal();
}

function openThinkerModal(key) {
  const profile = thinkerProfiles[key];
  const modal = ensureThinkerModal();
  const content = document.getElementById("thinker-modal-content");
  if (!profile || !content || !modal) {
    return;
  }

  content.innerHTML = `
    <p class="panel-kicker">Denkrichtung</p>
    <h2 id="thinker-modal-title">${profile.title}</h2>
    <p class="thinker-modal-subtitle">${profile.subtitle}</p>
    <p class="lead thinker-modal-lead">${profile.intro}</p>
    <div class="thinker-modal-grid">
      <section class="thinker-modal-block">
        <p class="section-kicker">Kurzbiografie</p>
        <ul class="source-list">
          ${profile.bioPoints.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </section>
      <section class="thinker-modal-block">
        <p class="section-kicker">Grundgedanken</p>
        <ul class="source-list">
          ${profile.thinkingPoints.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </section>
    </div>
    <section class="thinker-modal-block thinker-contrast-block">
      <p class="section-kicker">${profile.contrastTitle}</p>
      <ul class="source-list">
        ${profile.contrastPoints.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </section>
  `;

  modal.hidden = false;
  document.body.classList.add("is-overlay-open");
}

function closeThinkerModal() {
  const modal = document.getElementById("thinker-modal");
  if (!modal) {
    return;
  }
  modal.hidden = true;
  document.body.classList.remove("is-overlay-open");
}

function bindThinkerPanel() {
  document.querySelectorAll("[data-thinker-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openThinkerModal(button.dataset.thinkerOpen);
    });
  });

  document.querySelectorAll("[data-thinker-close]").forEach((button) => {
    button.addEventListener("click", closeThinkerModal);
  });

  const modal = document.getElementById("thinker-modal");
  if (modal && !modal.dataset.boundEscape) {
    modal.dataset.boundEscape = "true";
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeThinkerModal();
      }
    });
  }
}

function createNavigation(state) {
  const nav = document.getElementById("module-nav");
  nav.innerHTML = "";
  modules.forEach((module, moduleIndex) => {
    const link = document.createElement("a");
    const unlocked = isModuleUnlocked(state, module.number - 1);
    const score = getContentCheckScore(state, module.id);
    const status = getModuleStatus(state, module, moduleIndex);
    link.href = unlocked ? `#${module.id}` : "#";
    link.className = `${unlocked ? "" : "is-locked"} ${isModulePassed(state, module.id) ? "is-ready" : ""}`.trim();
    link.innerHTML = `<strong>${module.title}</strong><span>${module.era}${score ? ` · Sicherung ${Math.round(score)}%` : unlocked ? "" : " · gesperrt"}</span><span class="nav-status status-badge ${status.className}">${status.label}</span>`;
    nav.appendChild(link);
  });
}

function renderSourceCard(source, module) {
  const detail = getSourceDetail(module.id, source);
  const isHarari = normalize(source.title).startsWith(normalize("Harari-PDF"));
  const heading = getSourceHeading(source, detail) || source.title;
  const badge = getSourceBadge(source, detail, isHarari);
  const passage = cleanStudentText(detail.passage || source.extracted);
  const passageParts = splitSourcePassage(passage);
  const microChecks = buildSourceMicroChecks(module, source, detail, heading);
  const locatorTextRaw = isHarari
    ? String(detail.locator || "").replace(/^Harari-PDF,\s*/i, "Yuval Noah Harari, Eine kurze Geschichte der Menschheit, ")
    : detail.locator || "";
  const locatorText =
    isHarari && detail.pdfPage
      ? `<a href="${getHarariReferenceLink(detail)}">${locatorTextRaw}</a>`
      : locatorTextRaw;
  const locatorLabel = isHarari ? "Im Buch" : "";
  const passageLabel = "Einordnung";

  return `
    <article class="source-card">
      <header>
        <div>
          <h4>${heading}</h4>
          ${badge ? `<span class="source-meta">${badge}</span>` : ""}
        </div>
      </header>
      ${locatorText && locatorLabel ? `<p><strong>${locatorLabel}:</strong> ${locatorText}</p>` : ""}
      ${isHarari ? renderHarariActions(detail) : ""}
      ${detail.thesis ? `<p><strong>Kernaussage:</strong> ${cleanStudentText(detail.thesis)}</p>` : ""}
      ${microChecks[0] ? renderSourceMicroCheck(microChecks[0]) : ""}
      ${detail.quote ? `<p class="source-quote"><strong>Kurzes Zitat:</strong> <q>${detail.quote}</q></p>` : ""}
      ${passageParts[0] ? `<p><strong>${passageLabel}:</strong> ${passageParts[0]}</p>` : ""}
      ${microChecks[1] ? renderSourceMicroCheck(microChecks[1]) : ""}
      ${renderSourceFocus(detail)}
      ${microChecks[2] ? renderSourceMicroCheck(microChecks[2]) : ""}
      ${passageParts.slice(1).map((part) => `<p>${part}</p>`).join("")}
      ${renderRelevantItems(detail.relevantItems, cleanListLabel(detail.itemsLabel, "Wichtige Themen:"))}
      ${renderRelevantItems(detail.relatedItems, cleanListLabel(detail.relatedLabel, "Weiterführende Themen:"))}
      ${microChecks[3] ? renderSourceMicroCheck(microChecks[3]) : ""}
    </article>
  `;
}

function resolveSourceLink(source) {
  const title = normalize(source.title);
  if (title.includes("anthropo")) {
    return sourceCatalog.find((entry) => entry.id === "anthropozaen");
  }
  if (title.includes("1491")) {
    return sourceCatalog.find((entry) => entry.id === "1491");
  }
  if (title.includes("fruhmenschen") || title.includes("fruehmenschen")) {
    return sourceCatalog.find((entry) => entry.id === "fruehmenschen-video");
  }
  if (title.includes("hohlenmalereien") || title.includes("hoehlenmalereien")) {
    return sourceCatalog.find((entry) => entry.id === "hoehlenmalereien");
  }
  if (title.includes("jager und sammler") || title.includes("jaeger und sammler")) {
    return sourceCatalog.find((entry) => entry.id === "jaeger-sammler-video");
  }
  if (title.includes("neolithische revolution")) {
    return sourceCatalog.find((entry) => entry.id === "neolithische-revolution-video");
  }
  if (title.includes("hochkulturen")) {
    return sourceCatalog.find((entry) => entry.id === "hochkulturen-video");
  }
  if (title.includes("helvetier")) {
    return sourceCatalog.find((entry) => entry.id === "helvetier-hls");
  }
  if (title.includes("keltische schatze") || title.includes("keltische schätze") || title.includes("engehalbinsel")) {
    return sourceCatalog.find((entry) => entry.id === "kelten-engehalbinsel");
  }
  if (title.includes("kelten tapfer") || title.includes("warum die kelten tapfer waren") || title.includes("nationalmuseum")) {
    return sourceCatalog.find((entry) => entry.id === "kelten-nationalmuseum");
  }
  if (title.includes("swiss spectator")) {
    return sourceCatalog.find((entry) => entry.id === "kelten-swiss-spectator");
  }
  if (title.includes("archaologie schweiz") || title.includes("archäologie schweiz") || title.includes("landesmuseum")) {
    return sourceCatalog.find((entry) => entry.id === "archaeologie-schweiz");
  }
  if (title.includes("squix")) {
    return sourceCatalog.find((entry) => entry.id === "kelten-squix");
  }
  if (title.includes("griechenland") || title.includes("attische demokratie") || title.includes("polis")) {
    return sourceCatalog.find((entry) => entry.id === "griechenland-demokratie-video");
  }
  if (title.includes("republik") || title.includes("politische ordnung")) {
    return sourceCatalog.find((entry) => entry.id === "rom-republik-video");
  }
  if (title.includes("christentum")) {
    return sourceCatalog.find((entry) => entry.id === "christentum-video");
  }
  if (title.includes("judentum")) {
    return sourceCatalog.find((entry) => entry.id === "judentum-video");
  }
  if (title.includes("islam")) {
    return sourceCatalog.find((entry) => entry.id === "islam-video");
  }
  if (title.includes("stadt im mittelalter")) {
    return sourceCatalog.find((entry) => entry.id === "stadt-mittelalter-video");
  }
  if (title.includes("kloster")) {
    return sourceCatalog.find((entry) => entry.id === "kloester-video");
  }
  if (title.includes("eidgenossenschaft")) {
    return sourceCatalog.find((entry) => entry.id === "eidgenossenschaft-video");
  }
  if (title.includes("pfahlbauer")) {
    return sourceCatalog.find((entry) => entry.id === "pfahlbauer");
  }
  if (title.includes("romer in der schweiz") || title.includes("romer in der schweiz")) {
    return sourceCatalog.find((entry) => entry.id === "roemer-schweiz");
  }
  if (title.includes("romer-experiment") || title.includes("roemer-experiment")) {
    return sourceCatalog.find((entry) => entry.id === "roemer-experiment");
  }
  if (title.includes("munzschatz") || title.includes("münzschatz")) {
    return sourceCatalog.find((entry) => entry.id === "ueken");
  }
  if (title.includes("grosse volker") || title.includes("grosse völker")) {
    return sourceCatalog.find((entry) => entry.id === "grosse-voelker");
  }
  if (title.includes("kreuzzug")) {
    return sourceCatalog.find((entry) => entry.id === "kreuzzug");
  }
  if (title.includes("eine kurze geschichte")) {
    return sourceCatalog.find((entry) => entry.id === "spurensuche");
  }
  if (title.includes("mittelalter in der schweiz")) {
    return sourceCatalog.find((entry) => entry.id === "mittelalter-schweiz");
  }
  if (title.includes("verruckte mittelalter") || title.includes("verrueckte mittelalter")) {
    return sourceCatalog.find((entry) => entry.id === "verruecktes-mittelalter");
  }
  return null;
}

function renderFilmFoundation(module) {
  const filmSources = module.sources
    .map((source) => ({ source, catalog: resolveSourceLink(source) }))
    .filter((entry) => entry.catalog && !normalize(entry.source.title).startsWith(normalize("Harari-PDF")));

  if (!filmSources.length) {
    return "";
  }

  return `
    <section class="film-foundation">
      <div class="film-foundation-head">
        <p class="section-kicker">Historische Fallbeispiele</p>
        <p>Die folgenden Filme und Seiten zeigen die Entwicklungen des Moduls an konkreten Räumen, Gegenständen, Herrschaftsformen, Glaubenswelten und Lebensweisen.</p>
      </div>
      <div class="film-grid">
        ${filmSources
          .map(
            ({ source, catalog }) => {
              const detail = getSourceDetail(module.id, source);
              const badge = detail.badge || source.meta;
              const passage = cleanStudentText(detail.passage || source.extracted);
              return `
              <article class="film-card">
                <div class="film-card-head">
                  <div>
                    <h3>${source.title}</h3>
                    <span class="source-meta">${badge}</span>
                  </div>
                  ${catalog.link ? `<a class="btn primary" href="${catalog.link}" target="_blank" rel="noreferrer">${catalog.linkLabel || "Original öffnen"}</a>` : ""}
                </div>
                ${detail.locator ? `<p><strong>Beispiel:</strong> ${detail.locator}</p>` : ""}
                ${detail.thesis ? `<p><strong>Kernaussage:</strong> ${cleanStudentText(detail.thesis)}</p>` : ""}
                ${renderSourceFocus(detail)}
                <p><strong>Historische Informationen:</strong> ${passage}</p>
                ${renderRelevantItems(detail.relevantItems, detail.itemsLabel || "Besonders wichtige Teilthemen:")}
                ${renderRelevantItems(detail.relatedItems, detail.relatedLabel || "Weitere Themen auf derselben Seite:")}
              </article>
            `;
            }
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderShortAnswerBox(task, kindLabel) {
  const teacherSolution = isTeacherMode()
    ? `
      <div class="teacher-answer-key">
        <p class="section-kicker">Direkte Musterlösung</p>
        <p>${cleanPromptText(task.sampleAnswer)}</p>
        <div class="source-list-block">
          <p><strong>Erwartete Gesichtspunkte:</strong></p>
          <ul class="source-list">
            ${task.criteria.map((criterion) => `<li>${criterion.label}</li>`).join("")}
          </ul>
        </div>
      </div>
    `
    : "";

  return `
    <div class="${kindLabel === "Transferfrage" ? "transfer-box" : "task-box"}">
      <p><strong>${kindLabel}:</strong> ${cleanPromptText(task.question)}</p>
      <textarea data-answer="${task.id}" placeholder="${task.placeholder}"></textarea>
      <div class="${kindLabel === "Transferfrage" ? "transfer-actions" : "task-actions"}">
        <button class="btn primary" type="button" data-check="${task.id}">Antwort prüfen</button>
        <button class="btn ghost" type="button" data-show="${task.id}">Beispiellösung zeigen</button>
      </div>
      <div class="feedback" data-feedback="${task.id}"></div>
      ${teacherSolution}
    </div>
  `;
}

function renderQuickCheck(module) {
  return renderShortAnswerBox(quickChecks[module.id], "Schnellcheck");
}

function renderStoredFeedback(stored) {
  if (!stored) {
    return "";
  }

  return `<div class="feedback is-visible ${stored.level}"><strong>${stored.title}</strong><p>${stored.body}</p></div>`;
}

function renderSupportSection(module) {
  const support = moduleSupports[module.id];
  if (!support || !support.terms?.length) {
    return "";
  }

  return `
    <div class="study-sheet">
      <section class="study-block">
        <p class="section-kicker">Begriffe für dieses Modul</p>
        <dl class="term-glossary">
          ${support.terms
            .map(
              (item) => `
                <div class="term-glossary-item">
                  <dt>${item.term}</dt>
                  <dd>${item.description}</dd>
                </div>
              `
            )
            .join("")}
        </dl>
      </section>
    </div>
  `;
}

function renderLearningSteps(module) {
  const check = contentChecks[module.id];

  return `
    <div class="reading-flow">
      ${module.input
        .map((paragraph, index) => {
          const inlineQuestion = check?.questions?.[index];
          return `
            <article class="reading-block">
              <p class="reading-label">Abschnitt ${index + 1}</p>
              <p>${cleanStudentText(paragraph)}</p>
              ${inlineQuestion ? renderInlineCheckQuestion(module, index) : ""}
            </article>
          `
        })
        .join("")}
    </div>
  `;
}

function renderInlineCheckQuestion(module, questionIndex) {
  const question = contentChecks[module.id]?.questions?.[questionIndex];
  if (!question) {
    return "";
  }

  const answerId = `${module.id}-content-question-${questionIndex}`;

  return `
    <div class="inline-check-block">
      <p class="section-kicker">Prüffrage</p>
      <div class="check-question" data-inline-check="${answerId}">
        <p>${question.prompt}</p>
        <textarea data-content-answer="${answerId}" placeholder="${question.placeholder}"></textarea>
        <div class="feedback" data-content-feedback="${answerId}"></div>
        ${
          isTeacherMode()
            ? `
              <div class="teacher-answer-key">
                <p class="section-kicker">Direkte Musterlösung</p>
                <p>${cleanPromptText(question.sampleAnswer)}</p>
                <div class="source-list-block">
                  <p><strong>Erwartete Gesichtspunkte:</strong></p>
                  <ul class="source-list">
                    ${question.criteria.map((criterion) => `<li>${criterion.label}</li>`).join("")}
                  </ul>
                </div>
              </div>
            `
            : ""
        }
      </div>
    </div>
  `;
}

function renderFollowUpContentChecks(module) {
  const check = contentChecks[module.id];
  const startIndex = module.input.length;
  if (!check || check.questions.length <= startIndex) {
    return "";
  }

  return `
    <div class="inline-check-stack">
      ${check.questions
        .slice(startIndex)
        .map((question, offset) => renderInlineCheckQuestion(module, startIndex + offset))
        .join("")}
    </div>
  `;
}

function formatQuestionDate(isoString) {
  if (!isoString) {
    return "";
  }

  const value = new Date(isoString);
  if (Number.isNaN(value.getTime())) {
    return "";
  }

  return value.toLocaleString("de-CH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderTeacherQuestionSection(module) {
  if (isTeacherMode()) {
    return `
      <div class="teacher-question-box teacher-question-box--teacher">
        <p><strong>Frag die Lehrperson</strong></p>
        <p>Die eingehenden Fragen zu diesem Stoff erscheinen gesammelt im Lehrpersonen-Dashboard.</p>
      </div>
    `;
  }

  const cloudApi = window.GESCHICHTE_SUPABASE;
  const status = cloudApi?.getStatus ? cloudApi.getStatus() : { configured: false, loggedIn: false };
  const questions = cloudApi?.getOwnQuestionsForModule ? cloudApi.getOwnQuestionsForModule(module.id) : [];

  const listMarkup = questions.length
    ? `
      <div class="teacher-question-thread-list">
        ${questions
          .map(
            (item) => `
              <article class="teacher-question-thread">
                <div class="teacher-question-meta">
                  <span class="status-badge ${item.status === "beantwortet" ? "ready" : item.status === "in_bearbeitung" ? "open" : "locked"}">${item.status === "beantwortet" ? "beantwortet" : item.status === "in_bearbeitung" ? "in Bearbeitung" : "offen"}</span>
                  <span class="teacher-muted">${formatQuestionDate(item.created_at)}</span>
                </div>
                <p><strong>Deine Frage:</strong> ${cleanPromptText(item.question_text)}</p>
                ${
                  item.answer_text
                    ? `
                      <div class="teacher-question-answer">
                        <p><strong>Antwort der Lehrperson:</strong> ${cleanPromptText(item.answer_text)}</p>
                        ${item.answered_at ? `<p class="teacher-muted">${formatQuestionDate(item.answered_at)}</p>` : ""}
                      </div>
                    `
                    : `<p class="teacher-muted">Noch keine Antwort eingegangen.</p>`
                }
              </article>
            `
          )
          .join("")}
      </div>
    `
    : `<p class="teacher-muted">Hier erscheinen offene und beantwortete Fragen zu diesem Thema.</p>`;

  if (!status.configured) {
    return `
      <div class="teacher-question-box">
        <p><strong>Frag die Lehrperson</strong></p>
        <p>Die Fragefunktion wird sichtbar, sobald der Cloud-Sync vollständig eingerichtet ist.</p>
      </div>
    `;
  }

  if (!status.loggedIn) {
    return `
      <div class="teacher-question-box">
        <p><strong>Frag die Lehrperson</strong></p>
        <p>Melde dich zuerst im Cloud-Sync an. Danach kannst du zu jedem Modul konkrete Fachfragen abschicken.</p>
      </div>
    `;
  }

  return `
    <div class="teacher-question-box" data-teacher-question-module="${module.id}">
      <p><strong>Frag die Lehrperson</strong></p>
      <p>Stelle hier eine konkrete inhaltliche Frage zu ${module.title}. Sie erscheint direkt im Lehrpersonen-Dashboard.</p>
      <textarea data-teacher-question-input="${module.id}" placeholder="Formuliere eine konkrete Fachfrage, z. B. zu einer Entwicklung, einem Bruch oder einer Deutung."></textarea>
      <div class="task-actions">
        <button class="btn primary" type="button" data-teacher-question-send="${module.id}">Frag die Lehrperson</button>
      </div>
      <div class="feedback" data-teacher-question-feedback="${module.id}"></div>
      ${listMarkup}
    </div>
  `;
}

function renderTeacherQuestionQuickAction(module) {
  if (isTeacherMode()) {
    return `
      <div class="meta-box module-quick-action">
        <span class="fact-label">Fragen</span>
        <strong>Frag die Lehrperson</strong>
        <p>Im Lehrpersonen-Dashboard erscheinen eingehende Fragen gesammelt zur Beantwortung.</p>
        <button class="btn primary" type="button" data-open-teacher-question="${module.id}">Zum Fragebereich</button>
      </div>
    `;
  }

  const cloudApi = window.GESCHICHTE_SUPABASE;
  const status = cloudApi?.getStatus ? cloudApi.getStatus() : { configured: false, loggedIn: false };
  const helperText = !status.configured
    ? "Der Button führt direkt zum Fragefeld. Die Cloud-Funktion wird sichtbar, sobald Supabase eingerichtet ist."
    : !status.loggedIn
      ? "Der Button führt direkt zum Fragefeld. Dort kannst du dich auch an den Cloud-Sync erinnern lassen."
      : "Der Button führt direkt zum Fragefeld. Dort kannst du sofort eine konkrete Fachfrage abschicken.";

  return `
    <div class="meta-box module-quick-action">
      <span class="fact-label">Fragen</span>
      <strong>Frag die Lehrperson</strong>
      <p>${helperText}</p>
      <button class="btn primary" type="button" data-open-teacher-question="${module.id}">Frag die Lehrperson</button>
    </div>
  `;
}

function renderContentCheck(module, state) {
  const check = contentChecks[module.id];
  const storedFeedback = state[`${module.id}-content-feedback`];

  return `
    <div class="selftest-box">
      <p><strong>${check.title}:</strong> Die einzelnen Fragen stehen bereits an den passenden Stoffstellen im Modul. Prüfe hier deinen Gesamtstand. Wenn der Durchschnitt mindestens 60 Prozent erreicht, wird das nächste Modul freigeschaltet.</p>
      <div class="selftest-actions">
        <button class="btn primary" type="button" data-content-check="${module.id}">Inhaltssicherung prüfen</button>
      </div>
      ${renderStoredFeedback(storedFeedback)}
    </div>
  `;
}

function renderTakeaway(items) {
  return items.map((item) => `<div class="takeaway">${item}</div>`).join("");
}

function renderModuleScene(module) {
  const visual = moduleVisuals[module.id];
  if (!visual) {
    return "";
  }

  const sceneFacts = module.takeaway
    .slice(0, 2)
    .map((item) => `<li>${item}</li>`)
    .join("");

  return `
    <section class="module-scene" aria-label="Bildimpulse zu ${module.title}">
      <div class="scene-hero" style="background-image: url('${visual.hero}')">
        <div class="scene-copy">
          <p class="scene-kicker">${visual.kicker}</p>
          <h3>${visual.title}</h3>
          <p>${visual.text}</p>
        </div>
      </div>
      <div class="scene-side" style="background-image: url('${visual.side}')">
        <div class="scene-copy">
          <p class="scene-kicker">Historischer Überblick</p>
          <p>${visual.sideText || "Die rechte Bildfläche fasst die wichtigsten Entwicklungen des Moduls knapp zusammen."}</p>
          <ul class="scene-facts">${sceneFacts}</ul>
        </div>
      </div>
    </section>
  `;
}

function renderChapterCards(state) {
  const container = document.getElementById("chapter-cards");
  if (!container) {
    return;
  }

  container.innerHTML = modules
    .map((module, moduleIndex) => {
      const visual = moduleVisuals[module.id];
      const status = getModuleStatus(state, module, moduleIndex);
      const unlocked = isModuleUnlocked(state, moduleIndex);
      return `
        <a class="chapter-card ${unlocked ? "" : "is-locked"}" href="${unlocked ? `#${module.id}` : "#"}" style="background-image: url('${visual?.hero || ""}')">
          <div class="chapter-card-copy">
            <p class="scene-kicker">Modul ${module.number} · ${visual?.kicker || module.phase}</p>
            <h3>${module.title}</h3>
            <p>${module.guidingQuestion}</p>
            <div class="chapter-card-meta">
              <span class="status-badge ${status.className}">${status.label}</span>
              <span class="status-badge open">${module.era}</span>
            </div>
          </div>
        </a>
      `;
    })
    .join("");
}

function renderCompletionPanel(state) {
  const panel = document.getElementById("completion-panel");
  const passedModules = getPassedModuleCount(state);
  const allPassed = passedModules === modules.length;
  const today = new Date().toLocaleDateString("de-CH", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const remaining = modules
    .filter((module, moduleIndex) => !isModulePassed(state, module.id))
    .map((module, moduleIndex) => {
      const actualIndex = modules.findIndex((entry) => entry.id === module.id);
      const status = getModuleStatus(state, module, actualIndex);
      return `<div class="takeaway">Modul ${module.number}: ${module.title} · Status: ${status.label}</div>`;
    })
    .join("");

  panel.innerHTML = `
    <p class="panel-kicker">Abschlussübersicht</p>
    <h2>${allPassed ? "Alle Module erfolgreich abgeschlossen" : "Dein Kursstand im Überblick"}</h2>
    <div class="completion-panel">
      <div class="completion-hero">
        <div class="completion-card">
          <p>${allPassed
            ? "Du hast alle 13 Module bestanden. Die komplette Lernstrecke ist freigeschaltet, und du kannst dein Zertifikat drucken."
            : "Hier siehst du auf einen Blick, wie viele Module bereits bestanden sind und welche noch für den vollständigen Abschluss fehlen."}</p>
          <div class="completion-stats">
            <div class="meta-box">
              <p class="section-kicker">Bestandene Module</p>
              <p><strong>${passedModules} von ${modules.length}</strong></p>
            </div>
            <div class="meta-box">
              <p class="section-kicker">Zertifikatsstatus</p>
              <p><strong>${allPassed ? "freigeschaltet" : "noch gesperrt"}</strong></p>
            </div>
          </div>
        </div>
        <div class="certificate-card">
          <div class="certificate-frame">
            <p class="panel-kicker">Zertifikat</p>
            <h3>Zertifikat „Geschichte bis 1500“</h3>
            <p>Diese Bescheinigung dokumentiert den erfolgreichen Abschluss der vollständigen interaktiven Lerneinheit „Geschichte bis 1500“.</p>
            <div class="certificate-line">
              <p><strong>Status:</strong> ${allPassed ? "vollständig abgeschlossen" : "noch nicht vollständig abgeschlossen"}</p>
              <p><strong>Name:</strong> ${getLearnerName(state)}</p>
              <p><strong>Bestandene Module:</strong> ${passedModules} / ${modules.length}</p>
              <p><strong>Datum:</strong> ${today}</p>
            </div>
            <div class="hero-actions">
              <button class="btn primary" type="button" data-print-certificate ${allPassed ? "" : "disabled"}>Zertifikat drucken</button>
            </div>
          </div>
        </div>
      </div>
      ${
        allPassed
          ? `<div class="completion-card"><p class="section-kicker">Leistung sichtbar machen</p><div class="completion-list"><div class="takeaway">Alle zwölf Inhaltssicherungen sind bestanden.</div><div class="takeaway">Die komplette Modulfolge wurde erfolgreich freigeschaltet.</div><div class="takeaway">Das Zertifikat kann jetzt über die Druckfunktion ausgegeben werden.</div></div></div>`
          : `<div class="completion-card"><p class="section-kicker">Noch offen</p><div class="completion-list">${remaining}</div></div>`
      }
    </div>
  `;
}

function renderModules(state) {
  const list = document.getElementById("module-list");
  list.innerHTML = "";

  modules.forEach((module, moduleIndex) => {
    const unlocked = isModuleUnlocked(state, moduleIndex);
    const moduleProgress = getModuleProgress(state, module);
    const contentScore = getContentCheckScore(state, module.id);
    const status = getModuleStatus(state, module, moduleIndex);
    const contentStatus = isModulePassed(state, module.id)
      ? `Inhaltssicherung bestanden: ${Math.round(contentScore)}%`
      : contentScore
        ? `Inhaltssicherung noch offen: ${Math.round(contentScore)}%`
        : "Inhaltssicherung noch nicht bearbeitet";

    const section = document.createElement("section");
    section.className = `panel module-card ${unlocked ? "" : "is-locked"}`.trim();
    section.id = module.id;
    section.innerHTML = `
      <header class="module-header">
        <div>
          <p class="module-kicker">Modul ${module.number}</p>
          <div class="module-title-row">
            <h2>${module.title}</h2>
            <span class="status-badge ${status.className}">${status.label}</span>
          </div>
          <p class="lead">${getModuleIntroText(module)}</p>
        </div>
        <div class="module-meta">
          ${renderTeacherQuestionQuickAction(module)}
          <div class="meta-box">
            <span class="module-tag">${module.phase}</span>
            <p><strong>Zeitraum:</strong> ${module.era}</p>
          </div>
          <div class="meta-box">
            <p class="section-kicker">Leitfrage</p>
            <p>${module.guidingQuestion}</p>
          </div>
          <div class="module-progress-card">
            <strong>Modulfortschritt</strong>
            <span>${moduleProgress.completed} von ${moduleProgress.total} Bausteinen bearbeitet</span>
            <div class="progress-track compact" aria-hidden="true">
              <span style="width: ${moduleProgress.percentage}%"></span>
            </div>
            <p class="module-progress-status ${isModulePassed(state, module.id) ? "is-ready" : ""}">${contentStatus}</p>
          </div>
        </div>
      </header>

      ${renderModuleScene(module)}
      ${renderFilmFoundation(module)}

      ${
        unlocked
          ? ""
          : `<div class="module-lock-note"><p><strong>Gesperrt:</strong> Dieses Modul wird freigeschaltet, sobald du im vorherigen Modul in der Inhaltssicherung mindestens 60 Prozent erreichst.</p></div>`
      }

      <div class="module-grid">
        <section class="module-section">
          <p class="section-kicker">1. Einstieg</p>
          <p>${getModuleIntroText(module)}</p>
        </section>

        <section class="module-section">
          <p class="section-kicker">2. Stoff und Grundwissen</p>
          ${renderSupportSection(module)}
          ${renderLearningSteps(module)}
        </section>

        <section class="module-section">
          <p class="section-kicker">3. Kontinuitäten und Brüche</p>
          <p>${cleanPromptText(module.sourcePrompt)}</p>
          <div class="source-grid">
            ${module.sources.map((source) => renderSourceCard(source, module)).join("")}
          </div>
          ${renderFollowUpContentChecks(module)}
        </section>

        <section class="module-section">
          <p class="section-kicker">4. Aufgaben</p>
          ${renderShortAnswerBox(module.task, "Aufgabe")}
        </section>

        <section id="${module.id}-teacher-question" class="module-section is-question-section">
          <p class="section-kicker">5. Frag die Lehrperson</p>
          ${renderTeacherQuestionSection(module)}
        </section>

        <section class="module-section">
          <p class="section-kicker">6. Historischer Zusammenhang</p>
          <p>${moduleSupports[module.id]?.connection || cleanStudentText(module.deepening)}</p>
        </section>

        <section class="module-section">
          <p class="section-kicker">7. Kurze Sicherung</p>
          ${renderQuickCheck(module)}
        </section>

        <section class="module-section">
          <p class="section-kicker">8. Merkkasten</p>
          <div class="takeaway-list">${renderTakeaway(module.takeaway)}</div>
        </section>

        <section class="module-section">
          <p class="section-kicker">9. Transferfrage</p>
          ${renderShortAnswerBox(module.transfer, "Transferfrage")}
        </section>

        <section class="module-section">
          <p class="section-kicker">10. Freischaltung des nächsten Moduls</p>
          ${renderContentCheck(module, state)}
        </section>
      </div>
    `;

    list.appendChild(section);
  });
}

function renderSourceCatalog() {
  const container = document.getElementById("source-catalog");
  container.innerHTML = "";
  sourceCatalog.forEach((source) => {
    const card = document.createElement("article");
    card.className = "catalog-card";
    card.innerHTML = `
      <header>
        <div>
          <h3>${source.title}</h3>
          <span class="source-meta">${source.type}</span>
        </div>
      </header>
      <p><strong>Thema:</strong> ${cleanStudentText(source.role)}</p>
      <p><strong>Worum es historisch geht:</strong> ${cleanStudentText(source.didactics)}</p>
      <p>
        <strong>Original:</strong>
        ${
          source.link
            ? `<a href="${source.link}" target="_blank" rel="noreferrer">${source.linkLabel}</a>`
            : source.note
        }
      </p>
    `;
    container.appendChild(card);
  });
}

function normalizeLoose(text) {
  return normalize(text).replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getRepetitionProgress(state) {
  const currentLevel = getCurrentRepetitionLevel(state);

  const getLevelProgress = (level) => {
    const mode = getRepetitionMode(level);
    const memoryMatched = Array.isArray(state[getRepetitionStateKey(level, "memory-matched")])
      ? state[getRepetitionStateKey(level, "memory-matched")].length
      : 0;
    const memoryTotal = mode.memory.pairs.length;
    const dragAssigned = Object.keys(state[getRepetitionStateKey(level, "drag-assignments")] || {}).length;
    const dragTotal = mode.drag.targets.length;
    const clozeCorrect = Array.isArray(state[getRepetitionStateKey(level, "cloze-correct")])
      ? state[getRepetitionStateKey(level, "cloze-correct")].filter(Boolean).length
      : 0;
    const clozeTotal = mode.cloze.parts.filter((part) => typeof part === "object").length;
    const oralSolved = mode.oralQuestions.filter((question) => {
      const feedback = state[`${question.id}-feedback`];
      return feedback && (feedback.level === "good" || feedback.level === "mid");
    }).length;
    const oralTotal = mode.oralQuestions.length;
    const completedForms = [
      memoryMatched === memoryTotal,
      dragAssigned === dragTotal,
      clozeCorrect === clozeTotal,
      oralSolved === oralTotal
    ].filter(Boolean).length;

    return {
      level,
      label: repetitionLevels[level].label,
      memoryMatched,
      memoryTotal,
      dragAssigned,
      dragTotal,
      clozeCorrect,
      clozeTotal,
      oralSolved,
      oralTotal,
      completedForms,
      totalForms: 4
    };
  };

  const levels = repetitionLevelOrder.map(getLevelProgress);
  return {
    currentLevel,
    currentMode: getRepetitionMode(currentLevel),
    current: levels.find((entry) => entry.level === currentLevel),
    levels,
    overallCompletedForms: levels.reduce((sum, entry) => sum + entry.completedForms, 0),
    overallTotalForms: levels.reduce((sum, entry) => sum + entry.totalForms, 0)
  };
}

function renderRepetitionMemory(state) {
  const level = getCurrentRepetitionLevel(state);
  const mode = getRepetitionMode(level);
  const cards = getMemoryCards(level);
  const matched = new Set(state[getRepetitionStateKey(level, "memory-matched")] || []);
  const selected = state[getRepetitionStateKey(level, "memory-selected")] || [];
  const feedback = state[getRepetitionStateKey(level, "memory-feedback")];
  const solution = mode.memory.pairs
    .map((pair) => `<li><strong>${pair.left}</strong><span>${pair.right}</span></li>`)
    .join("");

  return `
    <article class="repetition-card">
      <p class="section-kicker">1. Memory</p>
      <h3>${mode.memory.title}</h3>
      <p>${mode.memory.instructions}</p>
      <div class="repetition-status-line">
        <strong>${matched.size} von ${mode.memory.pairs.length} Paaren gefunden</strong>
      </div>
      <div class="memory-grid">
        ${cards
          .map((card) => {
            const isMatched = matched.has(card.pairId);
            const isSelected = selected.includes(card.id);
            const isOpen = isMatched || isSelected;
            return `
              <button class="memory-card ${isMatched ? "is-matched" : isSelected ? "is-selected" : ""}" type="button" data-memory-card="${card.id}">
                <span class="memory-card-inner">
                  <span class="memory-card-front">${isOpen ? card.text : "?"}</span>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="task-actions">
        <button class="btn ghost" type="button" data-memory-solution>Alle Paare anzeigen</button>
      </div>
      <div class="feedback ${feedback ? `is-visible ${feedback.level}` : ""}" data-memory-feedback>${feedback ? `<strong>${feedback.title}</strong><p>${feedback.body}</p>` : ""}</div>
      <div class="teacher-answer-key ${state[getRepetitionStateKey(level, "memory-show-solution")] || isTeacherMode() ? "" : "is-hidden"}" data-memory-solution-box>
        <p class="section-kicker">Musterlösung</p>
        <ul class="source-list">${solution}</ul>
      </div>
    </article>
  `;
}

function renderRepetitionDrag(state) {
  const level = getCurrentRepetitionLevel(state);
  const mode = getRepetitionMode(level);
  const assignments = state[getRepetitionStateKey(level, "drag-assignments")] || {};
  const feedback = state[getRepetitionStateKey(level, "drag-feedback")];
  const remainingItems = mode.drag.items.filter((item) => !Object.values(assignments).includes(item.id));
  const showSolution = state[getRepetitionStateKey(level, "drag-show-solution")] || isTeacherMode();

  return `
    <article class="repetition-card">
      <p class="section-kicker">2. Drag-and-drop</p>
      <h3>${mode.drag.title}</h3>
      <p>${mode.drag.instructions}</p>
      <div class="repetition-status-line">
        <strong>${Object.keys(assignments).length} von ${mode.drag.targets.length} Zuordnungen richtig gelöst</strong>
      </div>
      <div class="drag-source-pool">
        ${remainingItems
          .map(
            (item) => `
              <button class="drag-chip" type="button" draggable="true" data-drag-item="${item.id}">
                ${item.label}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="drag-board">
        ${mode.drag.targets
          .map((target) => {
            const assignedId = assignments[target.id];
            const assignedItem = mode.drag.items.find((item) => item.id === assignedId);
            const solutionItem = mode.drag.items.find((item) => item.target === target.id);
            return `
              <div class="drag-target ${assignedItem ? "is-solved" : ""}" data-drag-target="${target.id}">
                <p class="drag-target-title">${target.title}</p>
                <p class="drag-target-prompt">${target.prompt}</p>
                <div class="drag-drop-slot">
                  ${
                    assignedItem
                      ? `<span class="drag-chip is-fixed">${assignedItem.label}</span>`
                      : `<span class="drag-placeholder">Hierher ziehen</span>`
                  }
                </div>
                ${
                  showSolution
                    ? `<p class="drag-solution"><strong>Musterlösung:</strong> ${solutionItem.label} – ${solutionItem.explanation}</p>`
                    : ""
                }
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="task-actions">
        <button class="btn ghost" type="button" data-drag-solution>Komplette Zuordnung anzeigen</button>
      </div>
      <div class="feedback ${feedback ? `is-visible ${feedback.level}` : ""}" data-drag-feedback>${feedback ? `<strong>${feedback.title}</strong><p>${feedback.body}</p>` : ""}</div>
    </article>
  `;
}

function renderRepetitionCloze(state) {
  const level = getCurrentRepetitionLevel(state);
  const mode = getRepetitionMode(level);
  const feedback = state[getRepetitionStateKey(level, "cloze-feedback")];
  const correct = state[getRepetitionStateKey(level, "cloze-correct")] || [];
  const showSolution = state[getRepetitionStateKey(level, "cloze-show-solution")] || isTeacherMode();
  const renderedText = mode.cloze.parts
    .map((part, index) => {
      if (typeof part === "string") {
        return part;
      }

      const fieldId = `${level}-${part.id}`;
      const isCorrect = Boolean(correct[index]);
      const value = String(state[getRepetitionTextKey(level, part.id)] || "");

      return `<input class="cloze-input ${isCorrect ? "is-correct" : ""}" data-cloze-input="${fieldId}" value="${value.replace(/"/g, "&quot;")}" placeholder="..." />`;
    })
    .join("");

  return `
    <article class="repetition-card">
      <p class="section-kicker">3. Lückentext</p>
      <h3>${mode.cloze.title}</h3>
      <p>${mode.cloze.instructions}</p>
      <div class="repetition-status-line">
        <strong>${correct.filter(Boolean).length} von ${mode.cloze.parts.filter((part) => typeof part === "object").length} Lücken richtig</strong>
      </div>
      <div class="cloze-text">${renderedText}</div>
      <div class="task-actions">
        <button class="btn primary" type="button" data-cloze-check>Lückentext prüfen</button>
        <button class="btn ghost" type="button" data-cloze-solution>Musterlösung zeigen</button>
      </div>
      <div class="feedback ${feedback ? `is-visible ${feedback.level}` : ""}" data-cloze-feedback>${feedback ? `<strong>${feedback.title}</strong><p>${feedback.body}</p>` : ""}</div>
      <div class="teacher-answer-key ${showSolution ? "" : "is-hidden"}" data-cloze-solution-box>
        <p class="section-kicker">Musterlösung</p>
        <p>${mode.cloze.sampleAnswer}</p>
      </div>
    </article>
  `;
}

function renderRepetitionOral(state) {
  const mode = getRepetitionMode(state);
  return `
    <article class="repetition-card repetition-oral-card">
      <p class="section-kicker">4. Mündliche Probe</p>
      <h3>Große Entwicklungen frei erklären</h3>
      <p>Diese Fragen trainieren zusammenhängende Antworten zu Entwicklungen, Brüchen und historischen Deutungen.</p>
      <div class="repetition-oral-stack">
        ${mode.oralQuestions.map((question) => renderShortAnswerBox(question, "Prüffrage")).join("")}
      </div>
    </article>
  `;
}

function renderRepetitionPanel(state) {
  const container = document.getElementById("repetitionsmodus");
  if (!container) {
    return;
  }

  const progress = getRepetitionProgress(state);
  const mode = progress.currentMode;
  container.innerHTML = `
    <p class="panel-kicker">Repetitionsmodus</p>
    <h2>Große Entwicklungen und Umbrüche sicher wiederholen</h2>
    <p class="compact">
      Dieser Bereich trainiert Überblickswissen für mündliche Prüfungen: große Entwicklungslinien, zentrale Brüche und ihre historische Bedeutung. Fakten bleiben wichtig, aber immer im Zusammenhang.
    </p>
    <div class="repetition-level-switch">
      ${repetitionLevelOrder
        .map((level) => `<button class="repetition-level-button ${level === progress.currentLevel ? "is-active" : ""}" type="button" data-repetition-level="${level}">${repetitionLevels[level].label}</button>`)
        .join("")}
    </div>
    <p class="compact repetition-level-intro">${mode.intro}</p>
    <div class="repetition-progress">
      <div class="repetition-progress-card">
        <span class="fact-label">Aktuelle Stufe: ${repetitionLevels[progress.currentLevel].label}</span>
        <strong>${progress.current.completedForms} von ${progress.current.totalForms} Übungsformen abgeschlossen</strong>
        <p>Memory ${progress.current.memoryMatched}/${progress.current.memoryTotal} · Drag-and-drop ${progress.current.dragAssigned}/${progress.current.dragTotal} · Lückentext ${progress.current.clozeCorrect}/${progress.current.clozeTotal} · Mündliche Probe ${progress.current.oralSolved}/${progress.current.oralTotal}</p>
      </div>
      <div class="repetition-progress-card">
        <span class="fact-label">Alle Stufen</span>
        <strong>${progress.overallCompletedForms} von ${progress.overallTotalForms} Übungsformen abgeschlossen</strong>
        <p>${progress.levels.map((entry) => `${entry.label}: ${entry.completedForms}/${entry.totalForms}`).join(" · ")}</p>
      </div>
      <div class="progress-track" aria-hidden="true">
        <span style="width: ${(progress.current.completedForms / progress.current.totalForms) * 100}%"></span>
      </div>
    </div>
    <div class="repetition-grid">
      ${renderRepetitionMemory(state)}
      ${renderRepetitionDrag(state)}
      ${renderRepetitionCloze(state)}
      ${renderRepetitionOral(state)}
    </div>
  `;
}

function analyzeAnswer(answer, task) {
  const normalized = normalize(answer);
  const matched = task.criteria.filter((criterion) =>
    criterion.keywords.some((keyword) => normalized.includes(normalize(keyword)))
  );
  const missing = task.criteria.filter((criterion) => !matched.includes(criterion));
  const wordCount = String(answer || "").trim() ? String(answer || "").trim().split(/\s+/).length : 0;
  const rawScore = task.criteria.length ? Math.round((matched.length / task.criteria.length) * 100) : 0;

  return { matched, missing, wordCount, rawScore };
}

function evaluateTask(answer, task) {
  const { matched, missing, wordCount } = analyzeAnswer(answer, task);
  const minimumWords = task.minWords || (task.id.includes("-quick") ? 8 : 18);

  if (!answer.trim()) {
    return {
      level: "low",
      title: "Noch keine auswertbare Antwort",
      body:
        "Schreibe zuerst eine eigene Formulierung. Nutze danach die Musterantwort nur zum Abgleich, nicht als Ersatz für den Denkweg."
    };
  }

  if (wordCount < minimumWords) {
    return {
      level: "mid",
      title: "Ansatz erkennbar, aber noch zu knapp",
      body:
        `Du setzt bereits an, aber die Antwort bleibt zu kurz. Versuche mindestens diese Aspekte einzubauen: ${missing
          .map((criterion) => criterion.label)
          .join(", ")}.`
    };
  }

  if (matched.length === task.criteria.length) {
    return {
      level: "good",
      title: "Sehr tragfähige Antwort",
      body:
        `Du deckst alle Kernkriterien ab: ${matched.map((criterion) => criterion.label).join(", ")}. Prüfe höchstens noch, ob deine Beispiele klar genug erläutert sind.`
    };
  }

  if (matched.length >= Math.max(2, task.criteria.length - 1)) {
    return {
      level: "mid",
      title: "Schon stark, aber noch ausbaufähig",
      body:
        `Deine Antwort trifft wichtige Punkte (${matched
          .map((criterion) => criterion.label)
          .join(", ")}). Für eine noch präzisere Fassung ergänze: ${missing
          .map((criterion) => criterion.label)
          .join(", ")}.`
    };
  }

  return {
    level: "low",
    title: "Grundidee vorhanden, zentrale Aspekte fehlen noch",
    body:
      `Bislang erkenne ich vor allem: ${matched.length ? matched.map((criterion) => criterion.label).join(", ") : "einen ersten Zugang"}. Ergänze unbedingt noch: ${missing
        .map((criterion) => criterion.label)
        .join(", ")}.`
  };
}

function evaluateCheckQuestion(answer, question) {
  const { matched, missing, wordCount, rawScore } = analyzeAnswer(answer, question);
  const adjustedScore = wordCount === 0
    ? 0
    : wordCount < 6
      ? Math.min(rawScore, 40)
      : wordCount < 10
        ? Math.min(rawScore, 70)
        : rawScore;

  if (!answer.trim()) {
    return {
      score: 0,
      level: "low",
      title: "Noch keine auswertbare Antwort",
      body: `Schreibe zuerst eine kurze eigene Antwort. Beispiellösung: ${question.sampleAnswer}`
    };
  }

  if (adjustedScore >= 80) {
    return {
      score: adjustedScore,
      level: "good",
      title: "Inhalt sicher erfasst",
      body: `Stark. Du deckst die Kernpunkte ab: ${matched.map((criterion) => criterion.label).join(", ")}.`
    };
  }

  if (adjustedScore >= 60) {
    return {
      score: adjustedScore,
      level: "mid",
      title: "Im Kern richtig",
      body: `Das reicht für diese Teilfrage schon gut. Ergänze beim Überarbeiten noch: ${missing.map((criterion) => criterion.label).join(", ")}. Beispiellösung: ${question.sampleAnswer}`
    };
  }

  return {
    score: adjustedScore,
    level: "low",
    title: "Noch nicht sicher genug",
    body: `Es fehlt noch Wesentliches: ${missing.map((criterion) => criterion.label).join(", ")}. Beispiellösung: ${question.sampleAnswer}`
  };
}

function bindShortAnswerTasks(state) {
  const tasks = [
    ...modules.flatMap((module) => [module.task, quickChecks[module.id], module.transfer]),
    ...getAllRepetitionOralQuestions()
  ];
  tasks.forEach((task) => {
    const answerField = document.querySelector(`[data-answer="${task.id}"]`);
    const feedbackBox = document.querySelector(`[data-feedback="${task.id}"]`);
    const checkButton = document.querySelector(`[data-check="${task.id}"]`);
    const showButton = document.querySelector(`[data-show="${task.id}"]`);

    if (!answerField || !feedbackBox || !checkButton || !showButton) {
      return;
    }

    if (state[`${task.id}-text`]) {
      answerField.value = state[`${task.id}-text`];
    }

    if (state[`${task.id}-feedback`]) {
      const stored = state[`${task.id}-feedback`];
      feedbackBox.className = `feedback is-visible ${stored.level}`;
      feedbackBox.innerHTML = `<strong>${stored.title}</strong><p>${stored.body}</p>`;
    }

    checkButton.addEventListener("click", () => {
      const result = evaluateTask(answerField.value, task);
      feedbackBox.className = `feedback is-visible ${result.level}`;
      feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
      state[task.id] = true;
      state[`${task.id}-text`] = answerField.value;
      state[`${task.id}-feedback`] = result;
      saveState(state);
      renderApp(state);
    });

    showButton.addEventListener("click", () => {
      const result = {
        level: "mid",
        title: "Musterantwort",
        body: cleanPromptText(task.sampleAnswer)
      };
      feedbackBox.className = "feedback is-visible mid";
      feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
      state[task.id] = true;
      state[`${task.id}-text`] = answerField.value;
      state[`${task.id}-feedback`] = result;
      saveState(state);
      renderApp(state);
    });
  });
}

function bindSelftests(state) {
  return state;
}

function bindContentChecks(state) {
  modules.forEach((module) => {
    const button = document.querySelector(`[data-content-check="${module.id}"]`);
    contentChecks[module.id].questions.forEach((question, questionIndex) => {
      const answerId = `${module.id}-content-question-${questionIndex}`;
      const field = document.querySelector(`[data-content-answer="${answerId}"]`);
      const feedbackBox = document.querySelector(`[data-content-feedback="${answerId}"]`);
      if (field && state[`${answerId}-text`]) {
        field.value = state[`${answerId}-text`];
      }
      if (feedbackBox && state[`${answerId}-feedback`]) {
        const stored = state[`${answerId}-feedback`];
        feedbackBox.className = `feedback is-visible ${stored.level}`;
        feedbackBox.innerHTML = `<strong>${stored.title}</strong><p>${stored.body}</p>`;
      }
    });

    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const check = contentChecks[module.id];
      const scores = [];
      const weakQuestions = [];

      check.questions.forEach((question, questionIndex) => {
        const answerId = `${module.id}-content-question-${questionIndex}`;
        const field = document.querySelector(`[data-content-answer="${answerId}"]`);
        const feedbackBox = document.querySelector(`[data-content-feedback="${answerId}"]`);
        const answerText = String(field?.value || "");
        const result = evaluateCheckQuestion(answerText, question);

        state[`${answerId}-text`] = answerText;
        state[`${answerId}-feedback`] = result;
        if (feedbackBox) {
          feedbackBox.className = `feedback is-visible ${result.level}`;
          feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
        }
        scores.push(result.score);

        if (result.score < 60) {
          weakQuestions.push(`${questionIndex + 1}. ${question.prompt}`);
        }
      });

      const percent = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
      const bestPercent = Math.max(percent, getContentCheckScore(state, module.id));
      const body = percent >= 60
        ? `Du erreichst im Durchschnitt ${percent}%. Das nächste Modul ist damit freigeschaltet.${weakQuestions.length ? ` Überarbeite bei Gelegenheit noch: ${weakQuestions.join(" ")}` : ""}`
        : `Du erreichst im Durchschnitt ${percent}%. Für die Freischaltung brauchst du mindestens 60%. Überarbeite besonders: ${weakQuestions.join(" ")}`;

      state[`${module.id}-content-score`] = bestPercent;
      state[`${module.id}-content-feedback`] = {
        level: bestPercent >= 60 ? "good" : percent >= 34 ? "mid" : "low",
        title: bestPercent >= 60 ? "Inhalt gesichert" : "Inhalt noch nicht gesichert",
        body:
          bestPercent >= 60 && percent < 60
            ? `${body} Deine frühere Bestleistung bleibt jedoch gespeichert, deshalb bleibt das nächste Modul offen.`
            : body
      };
      state[`${module.id}-content-check`] = bestPercent >= 60;

      saveState(state);
      renderApp(state);
    });
  });
}

function bindSourceMicroChecks(state) {
  modules.forEach((module) => {
    module.sources.forEach((source) => {
      const detail = getSourceDetail(module.id, source);
      const heading = getSourceHeading(source, detail) || source.title;
      const questions = buildSourceMicroChecks(module, source, detail, heading);

      questions.forEach((question) => {
        const field = document.querySelector(`[data-source-answer="${question.id}"]`);
        const feedbackBox = document.querySelector(`[data-source-feedback="${question.id}"]`);
        const checkButton = document.querySelector(`[data-source-check="${question.id}"]`);
        const showButton = document.querySelector(`[data-source-show="${question.id}"]`);
        const wrapper = document.querySelector(`[data-source-question="${question.id}"]`);

        if (!field || !feedbackBox || !checkButton || !showButton || !wrapper) {
          return;
        }

        if (state[`${question.id}-text`]) {
          field.value = state[`${question.id}-text`];
        }

        if (state[`${question.id}-feedback`]) {
          const stored = state[`${question.id}-feedback`];
          wrapper.classList.remove("good", "mid", "low");
          wrapper.classList.add(stored.level);
          feedbackBox.className = `feedback is-visible ${stored.level}`;
          feedbackBox.innerHTML = `<strong>${stored.title}</strong><p>${stored.body}</p>`;
        }

        checkButton.addEventListener("click", () => {
          const result = evaluateCheckQuestion(field.value, question);
          wrapper.classList.remove("good", "mid", "low");
          wrapper.classList.add(result.level);
          feedbackBox.className = `feedback is-visible ${result.level}`;
          feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
          state[question.id] = true;
          state[`${question.id}-text`] = field.value;
          state[`${question.id}-feedback`] = result;
          saveState(state);
          renderApp(state);
        });

        showButton.addEventListener("click", () => {
          const result = {
            level: "mid",
            title: "Musterlösung",
            body: cleanPromptText(question.sampleAnswer)
          };
          wrapper.classList.remove("good", "low");
          wrapper.classList.add("mid");
          feedbackBox.className = "feedback is-visible mid";
          feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
          state[question.id] = true;
          state[`${question.id}-text`] = field.value;
          state[`${question.id}-feedback`] = result;
          saveState(state);
          renderApp(state);
        });
      });
    });
  });
}

function renderLearnerBanner(state) {
  const banner = document.getElementById("learner-banner");
  if (!banner) {
    return;
  }

  if (isTeacherMode()) {
    banner.innerHTML = `
      <strong>Lehrpersonen-Inspektionsmodus</strong>
      <span>Alle Module sind geöffnet. Musterlösungen und Sicherungskriterien stehen direkt in den Aufgabenfeldern.</span>
    `;
    return;
  }

  banner.innerHTML = `
    <strong>${getLearnerName(state)}</strong>
    <span>Arbeite Modul für Modul: Nach einer bestandenen schriftlichen Sicherung wird das nächste Kapitel geöffnet.</span>
  `;
}

function renderWelcomeOverlay(state) {
  const overlay = document.getElementById("welcome-overlay");
  if (!overlay) {
    return;
  }

  if (isTeacherMode()) {
    overlay.hidden = true;
    overlay.innerHTML = "";
    document.body.classList.remove("is-overlay-open");
    return;
  }

  const shouldOpen = !state.welcomeDismissed;

  overlay.hidden = !shouldOpen;
  document.body.classList.toggle("is-overlay-open", shouldOpen);

  if (!shouldOpen) {
    overlay.innerHTML = "";
    return;
  }

  overlay.innerHTML = `
    <div class="welcome-panel">
      <div class="welcome-copy">
        <p class="panel-kicker">Willkommen</p>
        <h2>Geschichte bis 1500 Schritt für Schritt verstehen</h2>
        <p>Diese Lernumgebung erklärt den Stoff von Grund auf: von frühen Menschen über Sesshaftigkeit und Staaten bis zu Antike und Mittelalter. Du arbeitest mit Sachtexten, Quellen und schriftlichen Antworten statt mit bloßen Schlagworten.</p>
        <div class="welcome-list">
          <div class="takeaway">Jedes Modul beginnt mit verständlichem Grundwissen und führt dann in Quellen und Zusammenhänge.</div>
          <div class="takeaway">Nach jedem Modul folgt eine schriftliche Sicherung mit direktem Feedback.</div>
          <div class="takeaway">Das nächste Modul öffnet sich jeweils nach mindestens 60 Prozent.</div>
          <div class="takeaway">Wenn alle 13 Module bestanden sind, wird das Zertifikat freigeschaltet.</div>
        </div>
        <label class="welcome-name">
          <strong>Name für Lernstand und Zertifikat</strong>
          <input id="welcome-name-input" type="text" placeholder="z. B. Lena Muster" value="${String(state.learnerName || "").replace(/"/g, "&quot;")}" />
        </label>
        <div class="welcome-actions">
          <button class="btn primary" type="button" data-start-course>Lernreise starten</button>
        </div>
      </div>
      <div class="welcome-side">
        <div class="welcome-visual"></div>
        <p class="compact">Die Einheit verbindet große Entwicklungslinien mit konkreten Beispielen aus den SRF-Ressourcen: Frühgeschichte, Antike, Handel, Religion und mittelalterliche Lebenswelten.</p>
      </div>
    </div>
  `;
}

function bindWelcomeOverlay(state) {
  const startButton = document.querySelector("[data-start-course]");
  if (!startButton) {
    return;
  }

  startButton.addEventListener("click", () => {
    const nameInput = document.getElementById("welcome-name-input");
    state.learnerName = String(nameInput?.value || "").trim();
    state.welcomeDismissed = true;
    saveState(state);
    if (!state.introPlayed) {
      document.body.classList.add("first-run-intro");
      window.setTimeout(() => {
        document.body.classList.remove("first-run-intro");
      }, 1600);
      state.introPlayed = true;
      saveState(state);
    }
    renderApp(state);
  });
}

function bindCompletionActions() {
  const button = document.querySelector("[data-print-certificate]");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    window.print();
  });
}

function bindRepetitionMemory(state) {
  const level = getCurrentRepetitionLevel(state);
  const mode = getRepetitionMode(level);
  document.querySelectorAll("[data-memory-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const cardId = button.dataset.memoryCard;
      const cards = getMemoryCards(level);
      const card = cards.find((entry) => entry.id === cardId);
      if (!card) {
        return;
      }

      const matched = Array.isArray(state[getRepetitionStateKey(level, "memory-matched")])
        ? [...state[getRepetitionStateKey(level, "memory-matched")]]
        : [];
      if (matched.includes(card.pairId)) {
        return;
      }

      const selected = Array.isArray(state[getRepetitionStateKey(level, "memory-selected")])
        ? [...state[getRepetitionStateKey(level, "memory-selected")]]
        : [];
      if (selected.includes(card.id)) {
        return;
      }

      selected.push(card.id);

      if (selected.length === 2) {
        const first = cards.find((entry) => entry.id === selected[0]);
        const second = cards.find((entry) => entry.id === selected[1]);
        if (first && second && first.pairId === second.pairId) {
          matched.push(first.pairId);
          state[getRepetitionStateKey(level, "memory-feedback")] = {
            level: "good",
            title: "Richtig verbunden",
            body: `Diese Entwicklung und diese Folge gehören zusammen: ${first.text} – ${second.text}.`
          };
        } else {
          state[getRepetitionStateKey(level, "memory-feedback")] = {
            level: "low",
            title: "Noch nicht passend",
            body: "Diese beiden Karten gehören historisch nicht direkt zusammen. Suche nach einer engeren Entwicklung-Folge-Verbindung."
          };
        }
        state[getRepetitionStateKey(level, "memory-selected")] = [];
        state[getRepetitionStateKey(level, "memory-matched")] = [...new Set(matched)];
      } else {
        state[getRepetitionStateKey(level, "memory-selected")] = selected;
      }

      saveState(state);
      renderApp(state);
    });
  });

  const solutionButton = document.querySelector("[data-memory-solution]");
  if (solutionButton) {
    solutionButton.addEventListener("click", () => {
      state[getRepetitionStateKey(level, "memory-show-solution")] = true;
      state[getRepetitionStateKey(level, "memory-feedback")] = {
        level: "mid",
        title: "Musterlösung eingeblendet",
        body: `${mode.memory.pairs.length} Entwicklung-Folge-Paare sind jetzt sichtbar.`
      };
      saveState(state);
      renderApp(state);
    });
  }
}

function bindRepetitionDrag(state) {
  const level = getCurrentRepetitionLevel(state);
  const mode = getRepetitionMode(level);
  const items = mode.drag.items;
  const assignments = state[getRepetitionStateKey(level, "drag-assignments")] || {};

  document.querySelectorAll("[data-drag-item]").forEach((element) => {
    element.addEventListener("dragstart", (event) => {
      event.dataTransfer?.setData("text/plain", element.dataset.dragItem || "");
    });
  });

  document.querySelectorAll("[data-drag-target]").forEach((target) => {
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const itemId = event.dataTransfer?.getData("text/plain");
      const item = items.find((entry) => entry.id === itemId);
      const targetId = target.dataset.dragTarget;
      if (!item || !targetId || assignments[targetId]) {
        return;
      }

      if (item.target === targetId) {
        state[getRepetitionStateKey(level, "drag-assignments")] = {
          ...(state[getRepetitionStateKey(level, "drag-assignments")] || {}),
          [targetId]: item.id
        };
        state[getRepetitionStateKey(level, "drag-feedback")] = {
          level: "good",
          title: "Richtig zugeordnet",
          body: `${item.label} gehört zu ${item.explanation}.`
        };
      } else {
        state[getRepetitionStateKey(level, "drag-feedback")] = {
          level: "low",
          title: "Noch nicht passend",
          body: `${item.label} gehört nicht zu dieser Erklärung. Ordne die Entwicklung dem historischen Kern zu, der wirklich zu ihr passt.`
        };
      }

      saveState(state);
      renderApp(state);
    });
  });

  const solutionButton = document.querySelector("[data-drag-solution]");
  if (solutionButton) {
    solutionButton.addEventListener("click", () => {
      state[getRepetitionStateKey(level, "drag-show-solution")] = true;
      state[getRepetitionStateKey(level, "drag-assignments")] = mode.drag.targets.reduce((acc, target) => {
        const item = mode.drag.items.find((entry) => entry.target === target.id);
        if (item) {
          acc[target.id] = item.id;
        }
        return acc;
      }, {});
      state[getRepetitionStateKey(level, "drag-feedback")] = {
        level: "mid",
        title: "Musterlösung eingeblendet",
        body: "Die vollständige Zuordnung ist jetzt sichtbar. Vergleiche damit, welche Entwicklungen und Folgen zusammengehören."
      };
      saveState(state);
      renderApp(state);
    });
  }
}

function bindRepetitionCloze(state) {
  const level = getCurrentRepetitionLevel(state);
  const mode = getRepetitionMode(level);
  const checkButton = document.querySelector("[data-cloze-check]");
  const solutionButton = document.querySelector("[data-cloze-solution]");
  const feedbackBox = document.querySelector("[data-cloze-feedback]");

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      const blanks = mode.cloze.parts.filter((part) => typeof part === "object");
      const results = blanks.map((blank) => {
        const fieldId = `${level}-${blank.id}`;
        const field = document.querySelector(`[data-cloze-input="${fieldId}"]`);
        const answer = String(field?.value || "");
        state[getRepetitionTextKey(level, blank.id)] = answer;
        const normalizedAnswer = normalizeLoose(answer);
        return blank.answers.some((accepted) => normalizedAnswer.includes(normalizeLoose(accepted)));
      });

      state[getRepetitionStateKey(level, "cloze-correct")] = results;
      const correctCount = results.filter(Boolean).length;
      state[getRepetitionStateKey(level, "cloze-feedback")] = correctCount === blanks.length
        ? {
            level: "good",
            title: "Lückentext sicher gelöst",
            body: "Alle zentralen Entwicklungsschritte sind richtig eingesetzt."
          }
        : {
            level: correctCount >= Math.ceil(blanks.length / 2) ? "mid" : "low",
            title: correctCount >= Math.ceil(blanks.length / 2) ? "Im Kern richtig" : "Noch zu viele Lücken offen",
            body: `Du hast ${correctCount} von ${blanks.length} Lücken richtig. Ergänze vor allem die Entwicklungsbegriffe, die die großen Umbrüche benennen.`
          };

      if (feedbackBox) {
        const result = state[getRepetitionStateKey(level, "cloze-feedback")];
        feedbackBox.className = `feedback is-visible ${result.level}`;
        feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
      }

      saveState(state);
      renderApp(state);
    });
  }

  if (solutionButton) {
    solutionButton.addEventListener("click", () => {
      state[getRepetitionStateKey(level, "cloze-show-solution")] = true;
      state[getRepetitionStateKey(level, "cloze-feedback")] = {
        level: "mid",
        title: "Musterlösung eingeblendet",
        body: mode.cloze.sampleAnswer
      };
      saveState(state);
      renderApp(state);
    });
  }
}

function bindRepetitionMode(state) {
  document.querySelectorAll("[data-repetition-level]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLevel = button.dataset.repetitionLevel;
      if (!nextLevel || !repetitionLevels[nextLevel] || nextLevel === getCurrentRepetitionLevel(state)) {
        return;
      }
      state.repetitionLevel = nextLevel;
      saveState(state);
      renderApp(state);
    });
  });
  bindRepetitionMemory(state);
  bindRepetitionDrag(state);
  bindRepetitionCloze(state);
}

function renderApp(state) {
  renderWelcomeOverlay(state);
  createTimeline(state);
  renderMasterTimeline();
  renderThinkerPanel();
  createNavigation(state);
  renderLearnerBanner(state);
  renderChapterCards(state);
  renderRepetitionPanel(state);
  renderModules(state);
  renderCompletionPanel(state);
  renderSourceCatalog();
  bindShortAnswerTasks(state);
  bindSelftests(state);
  bindContentChecks(state);
  bindSourceMicroChecks(state);
  bindTeacherQuestionButtons();
  bindRepetitionMode(state);
  bindWelcomeOverlay(state);
  bindThinkerPanel();
  bindCompletionActions();
  updateProgress(state);
}

function bindTeacherQuestionButtons() {
  document.querySelectorAll("[data-open-teacher-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const moduleId = button.dataset.openTeacherQuestion;
      const section = document.getElementById(`${moduleId}-teacher-question`);
      const field = document.querySelector(`[data-teacher-question-input="${moduleId}"]`);
      if (!section) {
        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });
      section.classList.add("is-highlighted");
      window.setTimeout(() => section.classList.remove("is-highlighted"), 1800);

      if (field) {
        window.setTimeout(() => field.focus(), 280);
      }
    });
  });

  document.querySelectorAll("[data-teacher-question-send]").forEach((button) => {
    button.addEventListener("click", async () => {
      const moduleId = button.dataset.teacherQuestionSend;
      const module = modules.find((entry) => entry.id === moduleId);
      const field = document.querySelector(`[data-teacher-question-input="${moduleId}"]`);
      const feedbackBox = document.querySelector(`[data-teacher-question-feedback="${moduleId}"]`);
      const cloudApi = window.GESCHICHTE_SUPABASE;

      if (!module || !field || !feedbackBox || !cloudApi?.submitTeacherQuestion) {
        return;
      }

      try {
        await cloudApi.submitTeacherQuestion({
          moduleId: module.id,
          moduleTitle: module.title,
          questionText: field.value
        });
        feedbackBox.innerHTML = `<div class="feedback is-visible good"><strong>Frage gesendet.</strong><p>Die Lehrperson sieht deine Frage jetzt im Dashboard.</p></div>`;
        field.value = "";
        renderApp(loadState());
      } catch (error) {
        feedbackBox.innerHTML = `<div class="feedback is-visible low"><strong>Frage konnte nicht gesendet werden.</strong><p>${cleanPromptText(error.message)}</p></div>`;
      }
    });
  });
}

function replaceState(nextState, options = {}) {
  const state = { ...nextState };
  if (options.persist !== false) {
    saveState(state);
  }
  renderApp(state);
}

window.GESCHICHTE_DATA = {
  modules,
  dashboardStorageKey: TEACHER_DASHBOARD_KEY
};

window.GESCHICHTE_APP = {
  loadState,
  saveState,
  renderApp,
  replaceState,
  getStorageKey,
  isTeacherMode,
  buildLearnerSnapshot
};

function init() {
  if (!document.getElementById("module-list")) {
    return;
  }
  if (isTeacherPage() && !isTeacherMode()) {
    return;
  }
  const state = loadState();
  renderApp(state);
}

init();
