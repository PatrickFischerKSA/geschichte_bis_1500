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
      "Über den größten Teil der Menschheitsgeschichte leben Menschen mobil. Unterkünfte, Nahrung, Wege, Jahreszeitenwissen und mündliche Überlieferung sichern das Überleben ohne feste Speicher und Staaten.",
    modules: ["modul-4"]
  },
  {
    epoch: "Neolithikum",
    time: "ab ca. 10'000 v. Chr.",
    title: "Landwirtschaft und Sesshaftigkeit",
    body:
      "Ackerbau, Viehzucht, Vorrat und feste Häuser verändern Alltag und Sozialordnung. Aus Planung, Arbeit, Besitz und Ertragsrisiko entstehen Dörfer, Überschüsse und neue Ungleichheiten.",
    modules: ["modul-5"]
  },
  {
    epoch: "Frühe Hochkulturen",
    time: "ab ca. 3500–3000 v. Chr.",
    title: "Schrift, Listen und frühe Staaten",
    body:
      "Mesopotamische Tontafeln und ägyptische Verwaltung zeigen, wie Vorräte, Abgaben, Beamte und Schrift frühe Herrschaft stabilisieren. Hochkulturen beruhen auf Speicher, Ordnung und Legitimation.",
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
      "Der Schluss verbindet alle Linien: Sprache, Sesshaftigkeit, Staat, Geld, Religion und globale Vernetzung wirken weit über 1500 hinaus und führen in die Frage nach den langfristigen Folgen menschlicher Eingriffe.",
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
      "Außerdem war Homo sapiens zunächst kein unaufhaltsamer Sieger. Frühe Menschen waren über sehr lange Zeit nur ein Teil vieler Tier- und Menschenwelten. Sie beherrschten die Erde nicht einfach sofort. Das macht die eigentliche historische Frage spannend: Warum setzte sich gerade diese Menschenart später in so vielen Räumen durch?",
      "Ein Teil der Antwort liegt in biologischen Voraussetzungen. Das menschliche Gehirn ist leistungsfähig, braucht aber viel Energie. Der aufrechte Gang macht die Hände frei, bringt aber auch neue Belastungen mit sich. Menschenkinder bleiben lange hilfsbedürftig. Genau dadurch entstehen enge Bindungen, gemeinsames Lernen und soziale Abhängigkeiten. Der Mensch ist also nicht trotz, sondern auch wegen seiner Abhängigkeit erfolgreich.",
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
      "Verbinde Hararis Bild vom unauffälligen Tier mit den Beispielen aus '1491': Warum waren Bewegung, Anpassung und Lernen wichtiger als bloße Stärke?",
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
      "Im Film über 1491 wird diese symbolische Welt an materiellen Spuren sichtbar. Felsbilder, Totempfähle, Gegenstände des Alltags und Mayaschrift zeigen, dass Gemeinschaften ihre Welt nicht nur bewohnen, sondern deuten und erinnern. Ein Bild an einer Felswand ist nicht bloß Dekoration, sondern Hinweis auf Jagd, Zugehörigkeit oder Weltvorstellung. Ein Totempfahl markiert Erinnerung und Herkunft. Schriftzeichen halten Wissen fest. Frühgeschichte ist deshalb bereits eine Welt aus Zeichen, Regeln und Erzählungen."
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
      "Dieses Modul ist deshalb kein bloßer Vorlauf zur Landwirtschaft. Es zeigt eine eigenständige historische Lebensform mit hoher Kompetenz. Erst wenn man diese Welt ernst nimmt, versteht man später wirklich, was Sesshaftigkeit verändert hat und was dabei auch verloren ging."
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
      }
    ],
    sourcePrompt:
      "Arbeite an Behausungen, Jagdformen und mündlicher Weitergabe heraus, weshalb Mobilität keine Rückständigkeit, sondern eine eigene Form historischer Kompetenz ist.",
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
        "Warum ist mündlich überliefertes Wissen in mobilen Gesellschaften besonders wichtig?",
      placeholder: "Denke an Gedächtnis, Orientierung, Jahreszeiten und fehlende Archive.",
      sampleAnswer:
        "Mündlich überliefertes Wissen ist in mobilen Gesellschaften zentral, weil es Orientierung, Jagdmethoden, Jahreszeitenwissen, Gefahrenorte und soziale Regeln sichert. Wo es kaum feste Archive oder Schrift gibt, wird Erinnerung gemeinschaftlich getragen. Erzählen ist dort eine Überlebenstechnik.",
      criteria: [
        { label: "fehlende feste Archive", keywords: ["keine schrift", "kein archiv", "mündlich"] },
        { label: "praktisches Wissen", keywords: ["orientierung", "jagd", "jahreszeiten", "gefahren", "wege"] },
        { label: "gemeinschaftliche Erinnerung", keywords: ["gemeinschaft", "erinnerung", "erzählen", "weitergabe"] }
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
      "Dieser Wandel hat Vorteile. Vorräte können Hungerzeiten abfedern, Siedlungen wachsen, und in größeren Gemeinschaften können Aufgaben verteilt werden. Nicht mehr alle müssen dasselbe tun. Manche bauen Häuser, andere stellen Werkzeuge her, wieder andere organisieren Speicher oder Rituale. Landwirtschaft schafft also neue Möglichkeiten für Verdichtung und Arbeitsteilung.",
      "Aber derselbe Wandel hat auch einen Preis. Wer von wenigen Pflanzen oder Tierarten lebt, wird von Ernten, Wetter und Krankheiten stärker abhängig. Harte körperliche Arbeit nimmt oft zu. Besitz, Felder und Vorräte können Ungleichheiten fördern. Aus gemeinsamer Nutzung entstehen leichter Konflikte um Land, Wasser und Reichtum.",
      "Der Film über die Pfahlbauer von Pfyn macht diesen Wandel konkret. Zwei Familien und zwei junge Männer leben dort vier Wochen wie vor 5700 Jahren. Sichtbar werden Hüttenbau, Steinbeile, Kolbenpfeile, Kleider, Essen, Feuerstellen und Gebrauchsgegenstände. Genau daran lässt sich Sesshaftigkeit ablesen: Häuser müssen instand gehalten, Werkzeuge hergestellt, Nahrung vorbereitet und Vorräte gesichert werden. Landwirtschaft ist deshalb kein bequemes Endziel, sondern ein Alltag aus Planung, Handarbeit und Abhängigkeit."
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
        title: "YouTube: Neolithische Revolution",
        meta: "Streitfrage",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um die zugespitzte Frage, ob die neolithische Revolution als Fortschritt, Belastung oder Fehlentwicklung verstanden werden sollte.",
        didacticUse:
          "Die Ressource verschärft die Urteilsfrage des Moduls und zwingt zu einer klar begründeten Abwägung."
      }
    ],
    sourcePrompt:
      "Arbeite am Beispiel der Pfahlbauer heraus, wie sich Wohnen, Arbeiten, Essen und Zeitrhythmus durch Sesshaftigkeit verändern.",
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
        "Du bist Teil einer Gruppe an einem Seeufer. Solltet ihr sesshaft werden? Formuliere eine Empfehlung mit Chancen und Risiken.",
      placeholder: "Gewichte Versorgung, Sicherheit, Arbeit und Abhängigkeit gegeneinander ab.",
      sampleAnswer:
        "Ich würde Sesshaftigkeit vorsichtig empfehlen, wenn der Ort genügend Wasser, Boden und Schutz bietet. Feste Häuser und Vorräte erhöhen Versorgungssicherheit und können das Zusammenleben stabilisieren. Gleichzeitig entstehen mehr Arbeit, stärkere Abhängigkeit von Ernten und neue Konflikte um Besitz. Die Entscheidung ist also nur sinnvoll, wenn die Gruppe Speicher, Zusammenarbeit und Krisenvorsorge organisiert.",
      criteria: [
        { label: "Chancen genannt", keywords: ["vorrat", "sicherheit", "häuser", "versorgung"] },
        { label: "Risiken genannt", keywords: ["abhängig", "arbeit", "konflikt", "ernte", "besitz"] },
        { label: "begründete Empfehlung", keywords: ["empfehlen", "nur wenn", "abwägen", "organisieren"] }
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
      "Ägypten als Fallbeispiel langfristiger Stabilität deuten"
    ],
    input: [
      "Wenn Gesellschaften Überschüsse erzeugen, müssen Vorräte gelagert, verteilt, gezählt und geschützt werden. Je größer eine Gemeinschaft wird, desto schwieriger wird diese Aufgabe. Irgendwann reicht persönliches Erinnern nicht mehr aus. Dann braucht es Listen, Zuständigkeiten, Maße, Zeichen und feste Regeln. Genau hier beginnen frühe Formen von Verwaltung.",
      "Schrift entsteht in vielen frühen Staaten deshalb nicht zuerst für schöne Geschichten oder Gedichte, sondern für Organisation. Wer Abgaben festhält, Arbeitsleistungen notiert oder Vorräte erfasst, kann große Gemeinschaften besser steuern. Schreiben ist am Anfang also oft ein Macht- und Verwaltungswerkzeug. Das ist wichtig, weil viele Menschen Schrift heute zuerst mit Literatur verbinden.",
      "Am Beispiel Ägyptens wird das besonders deutlich. Der Film 'Eine kurze Geschichte über…' nennt den Nil, das Beamtentum und die Hieroglyphenschrift als Gründe dafür, dass Ägypten rund 3000 Jahre bestehen konnte. Der Nil sorgt für regelmäßige Ernten, Beamtinnen und Beamte organisieren Abgaben und Bauarbeiten, und die Hieroglyphen sichern Verwaltung und Herrschaft über längere Zeiträume. Der Pharao steht dabei nicht nur politisch, sondern auch religiös an der Spitze.",
      "Deshalb bedeutet Hochkultur viel mehr als Pyramiden und berühmte Herrscher. Gemeint ist eine Gesellschaft, in der Umwelt, Nahrung, Verwaltung, Religion, Arbeitsteilung und Symbolsysteme eng zusammenwirken. Wer frühe Staaten verstehen will, muss also auch Speicher, Listen, Schreiber, Tempel, Abgaben und die Organisation von Arbeit betrachten."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Schrift als Verwaltung",
        extracted:
          "Harari betont, dass mit der Erfindung der Schrift Geschichte die Stimme ihrer Protagonisten erhält und dass frühe Schrift eng mit Buchhaltung und Organisation verbunden ist.",
        didacticUse:
          "Die Quelle wird genutzt, um ein verbreitetes Missverständnis zu korrigieren: Schrift beginnt nicht nur als Kulturglanz, sondern auch als Verwaltungstechnik."
      },
      {
        title: "SRF: Eine kurze Geschichte über…",
        meta: "Ägypten",
        extracted:
          "Die SRF-Seite nennt Nil, Beamtentum und Hieroglyphenschrift als Gründe dafür, dass das Alte Ägypten rund 3000 Jahre bestehen konnte.",
        didacticUse:
          "Im Modul dient dies als Fallbeispiel dafür, wie Umwelt, Organisation und Symbolsysteme zusammenwirken."
      },
      {
        title: "YouTube: Hochkulturen",
        meta: "Überblick",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um einen breiteren Überblick zu Hochkulturen, Schrift, Verwaltung und frühen Staaten.",
        didacticUse:
          "Die Ressource weitet das Modul über Ägypten hinaus und sichert den Hochkultur-Begriff über mehrere Beispiele ab."
      }
    ],
    sourcePrompt:
      "Leite aus den Materialien ein Modell ab: Welche Bausteine braucht ein früher Staat, um dauerhaft zu funktionieren?",
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
      "Die Lernenden sollen hier Strukturen statt bloßer Ereignisse sehen. Hochkulturen lassen sich nicht allein durch 'große Herrscher' erklären. Die entscheidenden Fragen lauten: Wer zählt? Wer schreibt? Wer verteilt? Wer legitimiert? Wer baut Monumente und warum? So wird Geschichtsunterricht analytisch statt nur narrativ.",
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
      "Frühe Staaten ruhen auf Nahrung, Bürokratie, Legitimation und Arbeitsteilung."
    ],
    transfer: {
      id: "m6-transfer",
      question:
        "Warum konnte das Alte Ägypten über sehr lange Zeit stabil bleiben? Formuliere eine strukturgeschichtliche Antwort.",
      placeholder: "Verbinde Umwelt, Verwaltung, Schrift und Herrschaft.",
      sampleAnswer:
        "Ägypten konnte lange stabil bleiben, weil mehrere Faktoren zusammenwirkten. Der Nil schuf verlässliche landwirtschaftliche Grundlagen. Verwaltung und Beamtentum organisierten Abgaben, Arbeit und Versorgung. Hieroglyphenschrift half bei Ordnung und Tradierung. Hinzu kam eine religiös aufgeladene Herrschaft, die politische Macht symbolisch absicherte.",
      criteria: [
        { label: "Nil/Umwelt", keywords: ["nil", "fluss", "landwirtschaft", "umwelt"] },
        { label: "Verwaltung", keywords: ["verwaltung", "beamtentum", "organisation", "abgaben"] },
        { label: "Schrift", keywords: ["hieroglyph", "schrift", "ordnung"] },
        { label: "religiöse Legitimation", keywords: ["religion", "pharao", "herrschaft", "legitim"] }
      ]
    }
  },
  {
    id: "modul-7",
    number: 7,
    title: "Antike Reiche und Imperien",
    era: "Antike Mittelmeerwelt",
    phase: "Expansion, Infrastruktur, Kulturkontakt",
    guidingQuestion: "Wie ordnen Imperien große Räume?",
    hook:
      "Imperien verbinden sehr unterschiedliche Menschen durch Straßen, Armeen, Gesetze, Städte und Logistik. Gerade darin liegt ihr historischer Reiz und ihre Ambivalenz.",
    goals: [
      "Imperium als Ordnungsmodell erklären",
      "Römische Expansion an konkreten Beispielen der Schweiz erschließen",
      "Alltag und Herrschaft miteinander verknüpfen"
    ],
    input: [
      "Ein Imperium ist nicht einfach nur ein großes Land auf einer Karte. Es ist eine politische Ordnung, die sehr viele Menschen, Orte und Regionen zusammenhält. Damit das gelingt, braucht es Straßen, Brücken, Verwaltung, militärische Macht, Recht und Versorgung. Ein Reich muss also organisiert werden, sonst zerfällt es.",
      "Rom ist dafür ein besonders gutes Beispiel. Das Reich verband große Räume rund um das Mittelmeer und darüber hinaus. Seine Macht zeigte sich nicht nur in Legionen, sondern auch in Verkehrswegen, Städten, Steuern, Bauwerken und der Verbreitung bestimmter Lebensformen. Imperium bedeutet deshalb immer sowohl Herrschaft als auch Infrastruktur.",
      "Die Filmreihe über die Römer in der Schweiz macht das an einem konkreten Raum sichtbar. Ob Schrift, Ortsnamen oder Hühnerhaltung: römische Herrschaft hinterließ Spuren im Alltag. Ohne den römischen Einfluss würden heute weder Weintrauben noch Walnüsse angebaut. Viele römische Straßen und Brücken wurden zur Grundlage späterer Verkehrswege. In der Schweiz trafen Römer zudem auf keltische Siedlungen und bauten Städte oft dort, wo bereits günstige Orte existierten. Vindonissa lag zum Beispiel dort, wo Aare, Reuss und Limmat zusammenfließen und Warentransport besonders gut möglich war.",
      "Das Römer-Experiment ergänzt diese Raumordnung durch Rekonstruktion. Nachgestellt werden Gegenstände, Werkzeuge, Kochen, Gladiatorenausbildung und andere Alltagssituationen. Damit wird sichtbar, dass römische Herrschaft nicht nur in Heeren und Grenzlinien bestand, sondern in Essen, Arbeit, Gebäuden, Recht und Bewegungswegen."
    ],
    sources: [
      {
        title: "SRF: Römer in der Schweiz",
        meta: "Regionalisierung des Imperiums",
        extracted:
          "Die Seite nennt Alltagsfolgen römischer Herrschaft wie Hühnerhaltung, Weinbau, Walnüsse, Verkehrswege, Recht und Kulturkontakt mit keltischen Siedlungen.",
        didacticUse:
          "Sie wird als Fallmaterial genutzt, um abstrakte Expansion in konkrete Veränderungen von Raum und Alltag zu übersetzen."
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
      "Untersuche an Straßen, Lebensmitteln, Siedlungen und Alltagsgegenständen, wie römische Herrschaft den Raum und den Alltag veränderte.",
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
      "Didaktisch wichtig ist hier die Verbindung von Mikro- und Makroperspektive. Ein Imperium lässt sich nicht nur mit Karten und Schlachten erzählen. Erst wenn Lernende sehen, wie Expansion Straßennetze, Märkte, Familienleben oder Bauweisen verändert, verstehen sie, warum Imperien historisch wirksam sind.",
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
        "Warum ist Vindonissa ein besonders gutes Fallbeispiel, um die Logik eines Imperiums zu erklären?",
      placeholder: "Verbinde Lage, Militär, Transport und Herrschaft.",
      sampleAnswer:
        "Vindonissa eignet sich besonders, weil der Ort militärisch und verkehrsstrategisch wichtig war. Die Flüsse Aare, Reuss und Limmat erleichterten Transport und Versorgung. Ein Legionslager an einem solchen Knotenpunkt zeigt, wie das Römische Reich Raum kontrollierte, Waren bewegte und lokale Gebiete in imperiale Ordnung einband.",
      criteria: [
        { label: "strategische Lage", keywords: ["strategisch", "knotenpunkt", "lage", "flüsse"] },
        { label: "militärische Funktion", keywords: ["legionslager", "militär", "heer"] },
        { label: "imperiale Einbindung", keywords: ["kontrolle", "versorgung", "transport", "einbinden", "ordnung"] }
      ]
    }
  },
  {
    id: "modul-8",
    number: 8,
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
    number: 9,
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
      "Für die nächsten Module ist das ein Schlüssel. Kirche, Herrschaft, Pilgerwesen, Kreuzzüge und Alltagsregeln im Mittelalter lassen sich nur verstehen, wenn Religion nicht als Nebenthema erscheint, sondern als tragende Ordnung vieler Gesellschaften."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Samarkand und Mekka",
        extracted:
          "Harari schildert den mittelalterlichen Markt von Samarkand und die Pilgerfahrt nach Mekka als konkrete Orte, an denen Vereinigung über Religion und Austausch sichtbar wird.",
        didacticUse:
          "Die Ressource eröffnet einen Raumbegriff von Religion: Glaubenssysteme strukturieren Netzwerke, Mobilität und Begegnungen."
      },
      {
        title: "SRF: Grosse Völker",
        meta: "Arabische Wissenswelten",
        extracted:
          "Die Araber erscheinen als Pioniere von Mathematik, Medizin und Wissenschaft und als Teil weitreichender kultureller Vernetzungen.",
        didacticUse:
          "Dadurch kann Religion im Unterricht mit Wissenstransfer und Zivilisationsgeschichte verbunden werden statt nur mit Dogmen."
      },
      {
        title: "YouTube: Christentum",
        meta: "Religion im Überblick",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Einführung in Christentum, Glaubenspraxis und historische Ausbreitung.",
        didacticUse:
          "Die Ressource soll das Christentum nicht nur implizit, sondern ausdrücklich als historische Religion einführen."
      },
      {
        title: "YouTube: Judentum",
        meta: "Religion im Überblick",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Einführung in Judentum, Tora und jüdische Tradition.",
        didacticUse:
          "Die Ressource soll jüdische Religion und Kontinuität eigenständig sichtbar machen."
      },
      {
        title: "YouTube: Islam",
        meta: "Religion im Überblick",
        extracted:
          "Der Nutzerfilm ergänzt das Modul um eine direkte Einführung in Islam, Koran und islamische Glaubenspraxis.",
        didacticUse:
          "Die Ressource soll den Islam ausdrücklich als Weltreligion und historischen Ordnungsraum einführen."
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
    number: 10,
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
      "Der Film 'Das verrückte Mittelalter' liefert dafür die bekannten Bilder: Burgen, Minnesänger, Hierarchien, Pest, Handel, Hygiene, Turniere und Kathedralen. Diese Motive sind nicht erfunden, aber sie zeigen nur die Oberfläche. Erst wenn man fragt, wie Menschen tatsächlich wohnten, aßen, sich verteidigten und mit Krankheiten umgingen, wird die Epoche historisch greifbar.",
      "Genau dort setzt 'Mittelalter in der Schweiz' an. In fünf Burgen und Schlössern geht es um Verteidigung, Gesundheit und Hygiene, Speisen aus der Schlossküche, Rollenbilder und Statussymbole sowie archäologische Funde. Der Film erinnert daran, dass Latrinen nicht nur Toiletten, sondern auch Müllplätze waren. Sprichwörter wie 'den Löffel abgeben' oder 'unter die Haube kommen' führen direkt in mittelalterlichen Alltag. Das Mittelalter erscheint dadurch als konkrete Lebenswelt von Nahrung, Abfall, Rang, Kleidung und Schutz.",
      "Zusammen mit 'Eine kurze Geschichte über…' entsteht daraus ein genaueres Bild. Das Mittelalter war christlich geprägt und oft hart, aber nicht einfach düster und rückständig. Burgen, Kathedralen, Handschriften, Baukunst, Stadtleben und soziale Unterschiede gehören genauso dazu wie Krankheit, Hunger und Abhängigkeit."
    ],
    sources: [
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
    number: 11,
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
      "Dieses Modul verbindet deshalb Quellenprüfung mit Raumgeschichte. Mittelalterliche Geschichte besteht hier aus Frömmigkeit, Bewegung, Gerücht, Hoffnung, Handel und der Frage, was wir aus lückenhaften Quellen überhaupt sicher wissen können."
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
    number: 12,
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
      "Am Ende verbinden sich die großen Linien: Sprache und Symbole ermöglichen Kooperation, mobile Lebensweisen sichern Anpassung an Räume, Sesshaftigkeit schafft Überschüsse und Ungleichheiten, Schrift und Verwaltung stabilisieren Staaten, Geld und Religion verbinden große Räume, und verschiedene Weltregionen entwickeln eigene historische Ordnungen. Geschichte bis 1500 wird so als zusammenhängende Entwicklung menschlicher Weltgestaltung sichtbar."
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
      }
    ],
    sourcePrompt:
      "Formuliere aus den Beispielen des Kurses eine eigene Langzeitthese: Was verbinden Pfahlbauten, Münzfunde, Römerstraßen, Pilgerwege und die Perspektive von 1491?",
    task: {
      id: "m12-task",
      question:
        "Formuliere drei Langzeitlinien, die sich von der Frühgeschichte bis um 1500 verfolgen lassen.",
      placeholder: "Zum Beispiel Kooperation, Sesshaftigkeit, Schrift, Geld, Religion oder Globalperspektive.",
      sampleAnswer:
        "Eine erste Langzeitlinie ist die wachsende Fähigkeit zur Kooperation durch Sprache, Symbole und gemeinsame Ordnungen. Eine zweite Linie ist der Übergang von mobilen Lebensweisen zu Sesshaftigkeit, Überschuss, Verwaltung und Staatlichkeit. Eine dritte Linie ist die Vernetzung großer Räume durch Handel, Geld, Religion und Imperien. Ergänzend zeigt 1491, dass diese Entwicklungen nicht nur in Europa stattfinden.",
      criteria: [
        { label: "Kooperation/Sprache", keywords: ["kooperation", "sprache", "symbole", "ordnung"] },
        { label: "Sesshaftigkeit/Staat", keywords: ["sesshaft", "überschuss", "verwaltung", "staat"] },
        { label: "Vernetzung", keywords: ["handel", "geld", "religion", "imperien", "räume"] },
        { label: "Globalperspektive", keywords: ["1491", "amerika", "nicht nur europa", "global"] }
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
      { term: "Legitimation", description: "Begründung dafür, warum Herrschaft als gültig gelten soll." }
    ],
    storyline: [
      "Du gehst vom Vorrat zum Speicher und von dort zur Organisation.",
      "Dann lernst du Schrift als Werkzeug der Macht kennen.",
      "Am Beispiel Ägyptens siehst du, wie Umwelt, Verwaltung und Religion zusammenwirken."
    ],
    connection:
      "Wer frühe Staaten verstehen will, muss nicht nur Könige kennen, sondern auch Schreiber, Speicher, Kalender und Abgaben."
  },
  "modul-7": {
    overview:
      "Imperien halten große Räume nicht nur mit Heeren zusammen, sondern mit Straßen, Brücken, Städten, Gesetzen, Steuern, Sprache und geregelten Verkehrswegen.",
    entryNote:
      "Ein Imperium ist ein Großreich, das viele Regionen und Bevölkerungsgruppen zusammenfasst. Das Wort wird im Modul erklärt; du musst es nicht vorher kennen.",
    terms: [
      { term: "Imperium", description: "Großreich, das viele Regionen und Bevölkerungsgruppen politisch zusammenfasst." },
      { term: "Infrastruktur", description: "Straßen, Brücken, Häfen, Bauten und andere Grundlagen für Verkehr und Versorgung." },
      { term: "Kulturkontakt", description: "Begegnung verschiedener Gruppen mit Austausch, Anpassung und Konflikt." }
    ],
    storyline: [
      "Du untersuchst, wie Rom große Räume ordnet.",
      "Du beobachtest die Folgen dieser Ordnung in der Schweiz.",
      "Du erkennst, dass Imperien den Alltag ebenso verändern wie Politik und Raum."
    ],
    connection:
      "Von hier führt der Weg direkt zu Geld, Handel und Vernetzung, denn Imperien schaffen oft die Rahmenbedingungen für weite Austauschbeziehungen."
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
  "modul-7": {
    id: "m7-quick",
    question: "Wie verändert ein Imperium den Alltag der Menschen vor Ort? Nenne zwei konkrete Veränderungen wie Straßen, Weinbau, neue Waren oder Recht.",
    placeholder: "Nenne zwei konkrete Veränderungen aus dem römischen Alltag.",
    sampleAnswer:
      "Ein Imperium verändert den Alltag durch Straßen, neue Waren, Gesetze, Bauten oder Sprache. Menschen leben dadurch in stärker geregelten und vernetzten Räumen.",
    criteria: [
      { label: "Alltag genannt", keywords: ["alltag", "leben"] },
      { label: "konkrete Veränderungen", keywords: ["strassen", "waren", "gesetze", "bauten", "sprache"] },
      { label: "Vernetzung oder Ordnung", keywords: ["vernetzt", "ordnung", "geregelt"] }
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
        prompt: "Warum verändert diese Unterscheidung den Blick auf den ganzen Kurs?",
        placeholder: "Denke an die kommenden Themen der Einheit.",
        sampleAnswer:
          "Die Unterscheidung verändert den Kurs, weil dann nicht bloß Daten oder Ereignisse im Mittelpunkt stehen. Wichtiger werden Sprache, Sesshaftigkeit, Schrift, Herrschaft, Geld und Religion als große Entwicklungslinien menschlicher Geschichte.",
        criteria: [
          { label: "Bedeutung für den Kurs", keywords: ["kurs", "blick", "verandert"] },
          { label: "große Linien genannt", keywords: ["sprache", "sesshaftigkeit", "schrift", "herrschaft", "geld", "religion"] }
        ]
      },
      {
        prompt: "Die SRF-Seite zum Anthropozän arbeitet mit drei Schritten: Kosten des Fortschritts, neues Erdzeitalter, Lösungen. Erkläre in 4 bis 6 Sätzen, warum genau diese Struktur für Modul 1 wichtig ist.",
        placeholder: "Verbinde Fortschritt, Folgeschäden und Langzeitblick auf Geschichte.",
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
        prompt: "Arbeite mit der SRF-Seite 1491 heraus, warum 1492 für Amerika ein Einschnitt, aber kein Anfang ist. Nenne dabei mindestens zwei konkrete Sachinformationen aus der Ressource.",
        placeholder: "Nutze Fakten wie Landbrücke, Kanus, Sprachen, Reiche oder Landwirtschaft.",
        sampleAnswer:
          "1492 ist ein Einschnitt, aber kein Anfang, weil Menschen Amerika schon vor 18'000 bis 20'000 Jahren erreichten. Einige kamen über die Landbrücke, andere in Kanus. Es gab dort viele Sprachen, Gesellschaften, Landwirtschaft und politische Strukturen lange vor Kolumbus. Die Ressource zeigt also eine Vorgeschichte statt einer leeren Bühne.",
        criteria: [
          { label: "Einschnitt statt Anfang", keywords: ["einschnitt", "kein anfang", "1492"] },
          { label: "frühe Besiedlung", keywords: ["18000", "20000", "landbrucke", "kanus"] },
          { label: "entwickelte Gesellschaften", keywords: ["sprachen", "gesellschaften", "reiche", "landwirtschaft"] }
        ]
      },
      {
        prompt: "Was trägt der Nutzerfilm zu Frühmenschen zusätzlich bei, was in 1491 nicht im Zentrum steht? Antworte mit Menschenarten, Werkzeugen oder Feuer.",
        placeholder: "Erkläre, warum diese Filmgrundlage Modul 2 stofflich ergänzt.",
        sampleAnswer:
          "Der Nutzerfilm ergänzt Frühmenschen, Menschenarten, Werkzeuge und Feuer direkter als 1491. Während 1491 vor allem Migration und spätere Gesellschaften zeigt, klärt dieser Film die biologische und technische Frühphase der Menschheitsgeschichte.",
        criteria: [
          { label: "Menschenarten", keywords: ["menschenarten", "fruhmenschen", "homo erectus", "neandertaler"] },
          { label: "Werkzeuge oder Feuer", keywords: ["werkzeuge", "feuer", "technik"] },
          { label: "Ergänzungsfunktion", keywords: ["erganzt", "fruhphase", "biologisch", "technisch"] }
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
        prompt: "Nutze Felsbilder, Totempfähle und Mayaschrift aus der SRF-Seite 1491 und erkläre, was diese drei Beispiele über symbolische Ordnung verraten.",
        placeholder: "Zeige, wie Bilder, Monumente und Schrift Erinnerung und Ordnung tragen.",
        sampleAnswer:
          "Felsbilder zeigen, dass Menschen Erlebnisse und Weltdeutungen festhalten. Totempfähle erzählen Familien- und Herkunftsgeschichte öffentlich. Mayaschrift beweist, dass komplexe Zeichenwelten Wissen dauerhaft sichern können. Alle drei Beispiele zeigen, dass Gesellschaften sich über Symbole und Erinnerung ordnen.",
        criteria: [
          { label: "Felsbilder", keywords: ["felsbilder", "hohle", "handabdrucke", "bilder"] },
          { label: "Totempfähle", keywords: ["totempfahle", "familie", "herkunft", "holzmonumente"] },
          { label: "Schrift", keywords: ["mayaschrift", "hieroglyphen", "zeichen", "wissen"] }
        ]
      },
      {
        prompt: "Was zeigt der Film zu den Höhlenmalereien darüber, warum frühe Kunst historisch ernst genommen werden muss?",
        placeholder: "Verbinde Höhlenmalerei mit Symbolen, Ritual oder Weltdeutung.",
        sampleAnswer:
          "Der Film zeigt, dass Höhlenmalereien historische Quellen sind und nicht nur Schmuck. Sie verweisen auf Symbolfähigkeit, mögliche Rituale und eine bildliche Deutung der Welt. Deshalb gehören sie zur Geschichte menschlicher Vorstellungswelten.",
        criteria: [
          { label: "historische Quelle", keywords: ["quelle", "historisch ernst", "nicht nur schmuck"] },
          { label: "Symbol oder Ritual", keywords: ["symbol", "ritual", "weltdeutung"] },
          { label: "Kunst als Teil von Geschichte", keywords: ["kunst", "vorstellungswelten", "geschichte"] }
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
        prompt: "Welche drei Dinge müssen Lernende aus dem zusätzlichen Film zu Jägern und Sammlern mitnehmen?",
        placeholder: "Arbeite mit Umweltwissen, Mobilität und mündlicher Weitergabe.",
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
        prompt: "Was zeigen die Pfahlbauer von Pfyn ganz konkret über Sesshaftigkeit? Nenne drei Dinge aus dem Film, die diesen Wandel sichtbar machen.",
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
        prompt: "Warum verschärft der Nutzerfilm zur neolithischen Revolution die Kernfrage dieses Moduls?",
        placeholder: "Erkläre, warum Sesshaftigkeit als Streitfrage und nicht als Selbstverständlichkeit erscheint.",
        sampleAnswer:
          "Der Film verschärft die Kernfrage, weil er Sesshaftigkeit nicht automatisch als Fortschritt darstellt. Er zwingt dazu, Gewinne wie Vorräte und Dörfer gegen Belastungen wie Arbeit, Abhängigkeit und Ungleichheit abzuwägen.",
        criteria: [
          { label: "keine Selbstverständlichkeit", keywords: ["nicht automatisch", "streitfrage", "nicht nur fortschritt"] },
          { label: "Gewinne", keywords: ["vorrate", "dorfer", "sicherheit"] },
          { label: "Belastungen", keywords: ["arbeit", "abhangigkeit", "ungleichheit"] }
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
          "Ägypten ist ein gutes Beispiel, weil der Nil verlässliche Landwirtschaft ermöglichte, Verwaltung und Schrift Ordnung schufen und der Pharao Herrschaft religiös absicherte.",
        criteria: [
          { label: "Nil oder Umwelt", keywords: ["nil", "fluss", "landwirtschaft"] },
          { label: "Schrift oder Verwaltung", keywords: ["schrift", "hieroglyph", "verwaltung", "beamtentum"] },
          { label: "Herrschaft oder Religion", keywords: ["pharao", "herrschaft", "religion", "legitimation"] }
        ]
      },
      {
        prompt: "Warum ist die SRF-Folge zum Alten Ägypten für dieses Modul wichtiger als bloß ein Bild von Pyramiden? Arbeite mit Nil, Beamtentum und Hieroglyphenschrift.",
        placeholder: "Zeige, wie Umwelt, Verwaltung und Schrift zusammen einen Staat tragen.",
        sampleAnswer:
          "Die Folge ist wichtiger als bloße Pyramidenbilder, weil sie Staatlichkeit erklärt. Der Nil macht Landwirtschaft planbar, das Beamtentum organisiert Abgaben und Arbeiten, und Hieroglyphenschrift stabilisiert Verwaltung. So wird Ägypten als funktionierende Ordnung sichtbar, nicht nur als Monumentenwelt.",
        criteria: [
          { label: "Nil", keywords: ["nil", "landwirtschaft", "planbar"] },
          { label: "Beamtentum", keywords: ["beamtentum", "abgaben", "organisiert"] },
          { label: "Hieroglyphenschrift", keywords: ["hieroglyph", "schrift", "verwaltung"] }
        ]
      },
      {
        prompt: "Was ergänzt der Nutzerfilm zu Hochkulturen gegenüber der Ägypten-Folge?",
        placeholder: "Erkläre den Unterschied zwischen Fallbeispiel und breiterem Überblick.",
        sampleAnswer:
          "Die Ägypten-Folge zeigt ein konkretes Beispiel sehr genau. Der Nutzerfilm zu Hochkulturen ergänzt dazu den breiteren Überblick über Schrift, Verwaltung, Religion und Staat in mehreren frühen Kulturen. So wird der Begriff Hochkultur allgemeiner abgesichert.",
        criteria: [
          { label: "Ägypten als Fallbeispiel", keywords: ["agypten", "fallbeispiel", "konkret"] },
          { label: "breiter Überblick", keywords: ["uberblick", "mehrere", "hochkulturen"] },
          { label: "zentrale Strukturmerkmale", keywords: ["schrift", "verwaltung", "religion", "staat"] }
        ]
      }
    ]
  },
  "modul-7": {
    title: "Inhaltssicherung Modul 7",
    questions: [
      {
        prompt: "Wodurch hält ein Imperium große Räume zusammen?",
        placeholder: "Nenne mehrere Bausteine dieser Ordnung.",
        sampleAnswer:
          "Ein Imperium hält große Räume durch Militär, Verwaltung, Infrastruktur, Gesetze und gemeinsame Wirtschaftsformen zusammen. Dadurch werden entfernte Regionen stärker verbunden.",
        criteria: [
          { label: "Militär oder Macht", keywords: ["militar", "macht", "armee"] },
          { label: "Verwaltung oder Recht", keywords: ["verwaltung", "gesetze", "recht"] },
          { label: "Infrastruktur oder Verbindung", keywords: ["strassen", "brucken", "infrastruktur", "verbunden"] }
        ]
      },
      {
        prompt: "Zeige an zwei Beispielen, wie die Römer den Alltag in der Schweiz veränderten.",
        placeholder: "Nutze konkrete Dinge aus der Ressource.",
        sampleAnswer:
          "Die Römer veränderten den Alltag durch Straßen und Brücken, die Bewegung und Handel erleichterten. Auch neue Waren, Bauweisen, Rechtsformen oder Ernährungsgewohnheiten wirkten bis in lokale Lebenswelten hinein.",
        criteria: [
          { label: "konkrete Beispiele", keywords: ["strassen", "brucken", "waren", "weinbau", "recht", "bauten"] },
          { label: "Alltagswirkung", keywords: ["alltag", "handel", "leben", "ernahrung"] }
        ]
      },
      {
        prompt: "Die Reihe 'Römer in der Schweiz' ist fünfteilig. Erkläre, warum für das Verständnis eines Imperiums genau die Verbindung aus Legionären, Siedlungen und Straßen entscheidend ist.",
        placeholder: "Verbinde Militär, Alltagsraum und Infrastruktur.",
        sampleAnswer:
          "Legionäre zeigen die militärische Seite des Imperiums, Siedlungen die dauerhafte Ordnung vor Ort und Straßen die Verbindung großer Räume. Erst zusammen erklären diese drei Dinge, wie Rom Gebiete kontrollierte, versorgte und in sein Reich einband.",
        criteria: [
          { label: "Legionäre", keywords: ["legionare", "militar", "vindonissa"] },
          { label: "Siedlungen", keywords: ["siedlungen", "gutshofe", "bader", "wasserleitungen"] },
          { label: "Straßen", keywords: ["strassen", "handel", "verbindung", "infrastruktur"] }
        ]
      }
    ]
  },
  "modul-8": {
    title: "Inhaltssicherung Modul 8",
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
    title: "Inhaltssicherung Modul 9",
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
        prompt: "Warum lassen sich Religion, Wissen und Handel historisch oft nicht sauber trennen?",
        placeholder: "Arbeite mit Netzwerken und Begegnungen.",
        sampleAnswer:
          "Religion, Wissen und Handel lassen sich oft nicht trennen, weil Pilgerwege, Gelehrte, Übersetzungen, Märkte und Städte miteinander verbunden waren. Menschen tauschten nicht nur Waren, sondern auch Ideen und Texte aus.",
        criteria: [
          { label: "Netzwerke oder Wege", keywords: ["wege", "netzwerke", "pilger", "stadte", "markte"] },
          { label: "Wissen", keywords: ["gelehrte", "texte", "ubersetzungen", "ideen"] },
          { label: "Handel", keywords: ["handel", "waren", "austausch"] }
        ]
      },
      {
        prompt: "Was zeigt die Araber-Folge von 'Grosse Völker' darüber, warum Religion, Wissen und Herrschaft zusammen gedacht werden müssen?",
        placeholder: "Arbeite mit Islam, Großreich, Mathematik, Medizin oder Bildung.",
        sampleAnswer:
          "Die Araber-Folge zeigt, dass der Islam Teil eines großen politischen und kulturellen Raums war. In diesem Raum wurden Mathematik, Medizin und Wissenschaft gefördert und verbreitet. Religion, Bildung und Herrschaft greifen also ineinander, statt getrennte Bereiche zu sein.",
        criteria: [
          { label: "Islamischer Raum", keywords: ["islam", "grossreich", "raum"] },
          { label: "Wissensfelder", keywords: ["mathematik", "medizin", "wissenschaft", "bildung"] },
          { label: "Verknüpfung", keywords: ["zusammen", "ineinander", "herrschaft", "religion"] }
        ]
      },
      {
        prompt: "Vergleiche die drei zusätzlichen Religionsfilme zu Christentum, Judentum und Islam. Warum ist es für dieses Modul wichtig, alle drei ausdrücklich einzuführen?",
        placeholder: "Arbeite mit Eigenständigkeit, Schrift, Gemeinschaft und historischen Räumen.",
        sampleAnswer:
          "Es ist wichtig, alle drei einzuführen, weil keine dieser Religionen bloß vorausgesetzt werden darf. Judentum, Christentum und Islam sind eigenständige religiöse Ordnungsräume mit Texten, Gemeinschaften und historischen Ausbreitungen. Erst durch den Vergleich wird Religion im Modul konkret und nicht nur abstrakt.",
        criteria: [
          { label: "alle drei Religionen genannt", keywords: ["judentum", "christentum", "islam"] },
          { label: "Eigenständigkeit", keywords: ["eigenstandig", "nicht nur vorausgesetzt", "vergleich"] },
          { label: "Schrift/Gemeinschaft/Räume", keywords: ["schrift", "gemeinschaft", "ausbreitung", "raume"] }
        ]
      }
    ]
  },
  "modul-10": {
    title: "Inhaltssicherung Modul 10",
    questions: [
      {
        prompt: "Warum ist das Klischee vom 'dunklen Mittelalter' zu einfach?",
        placeholder: "Formuliere eine differenzierte Antwort.",
        sampleAnswer:
          "Das Klischee ist zu einfach, weil das Mittelalter harte Lebensbedingungen hatte, aber zugleich Städte, Bildung, Handwerk, religiöse Kultur und komplexe Herrschaftsformen hervorbrachte. Es war also widersprüchlich, nicht einfach nur dunkel.",
        criteria: [
          { label: "harte Lebensbedingungen", keywords: ["hart", "armut", "krankheit", "pest", "belastung"] },
          { label: "Leistungen oder Komplexität", keywords: ["stadte", "bildung", "handwerk", "kultur", "herrschaft"] },
          { label: "differenziertes Urteil", keywords: ["zugleich", "widerspruchlich", "nicht einfach"] }
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
        prompt: "Vergleiche den Einstieg über 'Das verrückte Mittelalter' mit 'Mittelalter in der Schweiz'. Was leistet die eine Reihe, was leistet die andere?",
        placeholder: "Unterscheide populären Einstieg und präzise Alltagsgeschichte.",
        sampleAnswer:
          "Das verrückte Mittelalter liefert bekannte Motive wie Ritter, Burgen, Pest oder Minnesänger als Einstieg. Mittelalter in der Schweiz geht genauer in Hygiene, Küche, Verteidigung, Statussymbole und Funde. Die erste Reihe motiviert und bündelt Bilder, die zweite präzisiert und korrigiert sie.",
        criteria: [
          { label: "Einstieg über populäre Bilder", keywords: ["ritter", "burgen", "pest", "minnesanger", "einstieg"] },
          { label: "Alltagsgeschichte", keywords: ["hygiene", "kuche", "verteidigung", "statussymbole", "funde"] },
          { label: "unterschiedliche Funktion", keywords: ["motiviert", "prazisiert", "korrigiert", "vergleicht"] }
        ]
      },
      {
        prompt: "Was ergänzen Klöster und die Entstehung der Eidgenossenschaft für das Verständnis von Herrschaft, Kirche und Gesellschaft im Mittelalter?",
        placeholder: "Verbinde Kloster, Bildung, Ordnung, Bündnisse und politische Herrschaft.",
        sampleAnswer:
          "Klöster zeigen Kirche als Raum von Bildung, Schrift, Arbeit und Ordnung. Die Entstehung der Eidgenossenschaft zeigt politische Bündnisse und Herrschaft im spätmittelalterlichen Raum. Zusammen ergänzen beide Filme die Alltagsgeschichte um institutionelle und politische Strukturen.",
        criteria: [
          { label: "Klöster", keywords: ["kloster", "bildung", "schrift", "arbeit", "ordnung"] },
          { label: "Eidgenossenschaft", keywords: ["eidgenossenschaft", "bundnisse", "herrschaft", "politisch"] },
          { label: "Ergänzungsfunktion", keywords: ["erganzt", "institutionell", "politisch", "gesellschaft"] }
        ]
      }
    ]
  },
  "modul-11": {
    title: "Inhaltssicherung Modul 11",
    questions: [
      {
        prompt: "Warum ist der Kinderkreuzzug ein guter Fall für Quellenkritik?",
        placeholder: "Erkläre, was Historikerinnen und Historiker prüfen müssen.",
        sampleAnswer:
          "Der Kinderkreuzzug ist ein guter Fall für Quellenkritik, weil die Überlieferung spektakulär klingt, aber erst geprüft werden muss. Historikerinnen und Historiker fragen nach Entstehungszeit, Absicht und Zuverlässigkeit der Texte.",
        criteria: [
          { label: "spektakuläre Überlieferung", keywords: ["spektakular", "uberlieferung", "legende"] },
          { label: "Quellen prüfen", keywords: ["quelle", "prufen", "entstehungszeit"] },
          { label: "Zuverlässigkeit oder Absicht", keywords: ["zuverlassig", "absicht", "perspektive"] }
        ]
      },
      {
        prompt: "Warum war das Mittelalter stärker vernetzt, als das Klischee von der abgeschlossenen Burg vermuten lässt?",
        placeholder: "Arbeite mit Städten, Märkten oder Pilgerwegen.",
        sampleAnswer:
          "Das Mittelalter war vernetzter, weil Städte, Märkte, Handelswege und Pilgerbewegungen Menschen miteinander verbanden. Waren, Ideen und religiöse Vorstellungen bewegten sich über große Räume.",
        criteria: [
          { label: "Städte oder Märkte", keywords: ["stadte", "markte", "handel"] },
          { label: "Wege oder Bewegung", keywords: ["wege", "pilger", "bewegung", "reisen"] },
          { label: "Austausch", keywords: ["waren", "ideen", "vorstellungen", "verbunden"] }
        ]
      },
      {
        prompt: "Was genau macht der Film zum Kinderkreuzzug mit der Überlieferung von 1212? Antworte mit Nikolaus, Stephan und der Frage nach der Zuverlässigkeit der Chroniken.",
        placeholder: "Zeige, dass der Film nicht nur erzählt, sondern prüft.",
        sampleAnswer:
          "Der Film nimmt die Überlieferung um Nikolaus aus Köln und Stephan aus Cloyes ernst, aber nicht unkritisch. Er fragt, was Chroniken tatsächlich belegen, wann sie entstanden und wie zuverlässig sie sind. So wird aus einer Legende ein Fall für Quellenkritik.",
        criteria: [
          { label: "Nikolaus oder Stephan", keywords: ["nikolaus", "stephan", "cologne", "cloyes"] },
          { label: "1212 oder Kreuzzugsüberlieferung", keywords: ["1212", "kinderkreuzzug", "uberlieferung"] },
          { label: "Zuverlässigkeit der Chroniken", keywords: ["chroniken", "zuverlassigkeit", "belegen", "prufen"] }
        ]
      },
      {
        prompt: "Warum ist der zusätzliche Film zur Stadt im Mittelalter für dieses Modul wichtig? Arbeite mit Stadt, Markt, Handwerk und Vernetzung.",
        placeholder: "Erkläre, warum Mittelalter nicht nur Burggeschichte ist.",
        sampleAnswer:
          "Der Film ist wichtig, weil er mittelalterliche Städte als Räume von Markt, Handwerk und dichtem Zusammenleben zeigt. Dadurch wird klar, dass Vernetzung, Handel und Wandel über urbane Räume liefen und das Mittelalter nicht nur aus Burgen bestand.",
        criteria: [
          { label: "Stadt", keywords: ["stadt", "stadtleben", "urban"] },
          { label: "Markt oder Handwerk", keywords: ["markt", "handwerk", "handel"] },
          { label: "Vernetzung statt Burgklischee", keywords: ["vernetzung", "nicht nur burg", "wandel"] }
        ]
      }
    ]
  },
  "modul-12": {
    title: "Inhaltssicherung Modul 12",
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
        prompt: "Verbinde die Hauptthese von 1491 mit der Hauptthese des Anthropozäns. Warum ist diese Kombination für den Schluss des Kurses so stark?",
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
      prompt: "Arbeite mit Harari S. 39 und S. 151 heraus, warum große Gesellschaften gemeinsame Geschichten und gelernte Regeln brauchen. Warum reicht persönliche Bekanntschaft dafür nicht aus?",
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
      prompt: "Nutze Harari S. 31 und S. 32 und erkläre, was den späteren Homo sapiens gegenüber den früheren Gruppen verändert. Arbeite mit Australien, Werkzeugen, Kunst oder dem Löwenmenschen.",
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
      prompt: "Erkläre mit Harari S. 35 und S. 36, warum Tratsch und fiktive Sprache für die Menschheitsgeschichte so wichtig sind.",
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
      prompt: "Arbeite mit Harari S. 101 und S. 108 heraus, warum mobile Lebensformen so lange funktionierten. Beziehe Denkweise, Umweltwissen und den Geburtenrhythmus ein.",
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
      prompt: "Nutze Harari S. 103 und S. 105 und erkläre, warum Landwirtschaft vielen Menschen mehr Mühe als Freiheit brachte.",
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
      prompt: "Erkläre mit Harari S. 157 und S. 160, warum frühe Schrift zuerst ein Werkzeug von Verwaltung und Bürokratie war.",
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
      prompt: "Arbeite mit Harari S. 130 und S. 133 und erkläre, warum ein Reich nicht nur Speicher und Heere, sondern auch Regeln und Gerechtigkeitsvorstellungen braucht.",
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
      prompt: "Erkläre mit Harari S. 215 und S. 220, warum Tauschhandel an Grenzen stößt und Geld dann zur Vertrauensordnung wird.",
      placeholder: "Arbeite mit Wechselkursen, Vergleichbarkeit und gemeinsamem Glauben an Wert.",
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
      prompt: "Nutze Harari S. 252 und S. 253 und erkläre, wie aus Religion ein großes, missionierendes Ordnungssystem werden kann.",
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
      prompt: "Erkläre mit Harari S. 261 und S. 263, warum Kirche und Religion für die mittelalterliche Gesellschaft nicht bloß Randthemen sind.",
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
      prompt: "Arbeite mit Harari S. 214 und S. 219 heraus, warum Städte, Märkte und Handel im Mittelalter eng zusammenhängen.",
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
      prompt: "Nutze Harari S. 148 und S. 263 und formuliere eine Bilanz: Warum leben Menschen immer wieder in großen gemeinsamen Ordnungen, und wie weit reichen diese Ordnungen um 1500 bereits?",
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

const moduleVisuals = {
  "modul-1": {
    hero: "assets/srf/m01-anthropozaen.jpg",
    side: "assets/srf/m01-spurensuche.jpg",
    kicker: "Langzeitblick",
    title: "Vom Anfang der Geschichte zur Spur des Menschen",
    text: "Der Einstieg verbindet Geschichtsbegriff, Weltdeutung und die Frage, wie menschliches Handeln überhaupt historische Wirkung entfaltet."
  },
  "modul-2": {
    hero: "assets/srf/m02-1491.jpg",
    side: "assets/srf/m02-1491-detail.jpg",
    kicker: "Frühmenschliche Welt",
    title: "Migration, Anpassung und mehrere Menschenarten",
    text: "Das Modul öffnet die Frühgeschichte global und zeigt den Menschen zunächst nicht als Herrscher, sondern als anpassungsfähiges Lebewesen."
  },
  "modul-3": {
    hero: "assets/srf/m02-1491-detail.jpg",
    side: "assets/srf/m02-1491.jpg",
    kicker: "Kognitive Revolution",
    title: "Bilder, Mythen und Sprache als Weltbau",
    text: "Aus Symbolen und Erzählungen entstehen gemeinsame Ordnungen, die später Herrschaft, Geld und Religion ermöglichen."
  },
  "modul-4": {
    hero: "assets/srf/m02-1491.jpg",
    side: "assets/srf/m05-pfahlbauer-detail.jpg",
    kicker: "Vorzeitliche Lebensformen",
    title: "Mobile Gesellschaften lesen Landschaften",
    text: "Jäger-und-Sammler-Gruppen erscheinen als hoch spezialisierte Wissensgemeinschaften mit enger Bindung an Klima, Tiere und Jahreszeiten."
  },
  "modul-5": {
    hero: "assets/srf/m05-pfahlbauer.jpg",
    side: "assets/srf/m05-pfahlbauer-detail.jpg",
    kicker: "Sesshaftigkeit",
    title: "Vom Lager zur Siedlung",
    text: "Die landwirtschaftliche Revolution wird nicht abstrakt, sondern als Umbruch in Hausbau, Arbeit, Vorrat und sozialer Abhängigkeit sichtbar."
  },
  "modul-6": {
    hero: "assets/srf/m01-spurensuche.jpg",
    side: "assets/srf/m01-anthropozaen.jpg",
    kicker: "Hochkulturen",
    title: "Schrift, Ordnung und monumentale Herrschaft",
    text: "Die Bildwelt führt in frühe Staatsräume, in denen Verwaltung, Schrift und symbolische Macht zusammenwirken."
  },
  "modul-7": {
    hero: "assets/srf/m07-roemer-schweiz.jpg",
    side: "assets/srf/m07-roemer-detail.jpg",
    kicker: "Imperien",
    title: "Rom als gelebte Raumordnung",
    text: "Straßen, Bauten und Alltagskultur zeigen, wie ein Imperium den Raum nicht nur erobert, sondern organisiert."
  },
  "modul-8": {
    hero: "assets/srf/m08-muenzschatz.jpg",
    side: "assets/srf/m08-roemer-experiment.jpg",
    kicker: "Vernetzung",
    title: "Wert, Vertrauen und Umlauf",
    text: "Münzen und Märkte erscheinen als greifbare Spuren jener unsichtbaren Ordnungen, die Handel über Grenzen hinweg möglich machen."
  },
  "modul-9": {
    hero: "assets/srf/m09-grosse-voelker.jpg",
    side: "assets/srf/m11-kreuzzug.jpg",
    kicker: "Religionen und Weltbilder",
    title: "Sinnordnungen verbinden Menschenräume",
    text: "Religiöse Gemeinschaften, Wissenswege und Pilgerbewegungen werden als reale historische Netzwerke sichtbar."
  },
  "modul-10": {
    hero: "assets/srf/m10-verruecktes-mittelalter.jpg",
    side: "assets/srf/m10-mittelalter-schweiz.jpg",
    kicker: "Mittelalterliche Lebenswelt",
    title: "Zwischen Burgen, Alltag und sozialen Grenzen",
    text: "Die Module zur Epoche bekommen eine eigene Atmosphäre aus Architektur, Materialität und gelebter Alltagsordnung."
  },
  "modul-11": {
    hero: "assets/srf/m11-kreuzzug.jpg",
    side: "assets/srf/m10-mittelalter-schweiz.jpg",
    kicker: "Quellenkritik",
    title: "Frömmigkeit, Mobilität und Überlieferung",
    text: "Die Bildsprache schiebt das Modul in eine Zwischenzone aus Bewegung, Glauben, Konflikt und erzählter Geschichte."
  },
  "modul-12": {
    hero: "assets/srf/m01-anthropozaen.jpg",
    side: "assets/srf/m02-1491.jpg",
    kicker: "Bilanz bis 1500",
    title: "Weltgeschichte offen denken",
    text: "Der Schluss verbindet globale Perspektive und Langzeitfolgen: Nicht nur Europa, nicht nur ein Deutungsweg, sondern viele historische Linien zugleich."
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
      "Für dieses Modul ist auf der Seite ausdrücklich die Folge zum Alten Ägypten entscheidend. Dort werden Nil, Beamtentum und Hieroglyphenschrift als Gründe für die ungewöhnlich lange Stabilität Ägyptens zusammengeführt.",
    itemsLabel: "Auf der SRF-Seite hier konkret gemeint:",
    relevantItems: [
      {
        title: "Eine kurze Geschichte über... – Das Alte Ägypten",
        note: "Nil, Beamte und Hieroglyphenschrift als Basis dauerhafter Herrschaft."
      }
    ],
    whyHere:
      "Die Folge gehört in Modul 6, weil sie frühe Staatlichkeit nicht über Pyramidenromantik, sondern über Nil, Verwaltung und Schrift erklärt.",
    mustKnow: [
      "Der Nil schafft verlässliche landwirtschaftliche Grundlagen.",
      "Beamtentum organisiert Abgaben, Arbeiten und Herrschaft.",
      "Hieroglyphenschrift stabilisiert Verwaltung und Langzeitordnung."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, frühe Hochkulturen ließen sich vor allem durch Monumente und große Herrscher erklären."
  },
  [makeSourceKey("modul-6", "YouTube: Hochkulturen")]: {
    badge: "YouTube-Film · Hochkulturen",
    locator: "YouTube-Video: Hochkulturen",
    thesis:
      "Der Film soll Hochkulturen als Verbindung von Überschuss, Schrift, Verwaltung, Religion und Herrschaft verdichten.",
    passage:
      "Für dieses Modul ergänzt der Nutzerfilm die ägyptische Fallstudie um einen breiteren Überblick zum Hochkultur-Begriff und zu frühen Staatenbildungen.",
    whyHere:
      "Der Film gehört in Modul 6, weil Ägypten als Fallbeispiel stark ist, aber der Begriff Hochkultur zusätzlich über mehrere Kontexte abgesichert werden muss.",
    mustKnow: [
      "Hochkulturen beruhen auf Vorrat, Arbeitsteilung und Verwaltung.",
      "Schrift ist eng mit Ordnung und Herrschaft verbunden.",
      "Religion und politische Macht stabilisieren frühe Staaten."
    ],
    misconception:
      "Korrigiert wird die Fehldeutung, Hochkulturen bestünden nur aus prachtvollen Monumenten."
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
  }
};

Object.assign(sourceDetails, additionalHarariDetails);

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
  if (!detail.whyHere && !detail.mustKnow?.length && !detail.misconception) {
    return "";
  }

  return `
    <div class="source-focus">
      ${detail.whyHere ? `<p><strong>Warum genau in diesem Modul?</strong> ${cleanStudentText(detail.whyHere)}</p>` : ""}
      ${
        detail.mustKnow?.length
          ? `<div class="source-list-block"><p><strong>Drei Sachinformationen, die aus dieser Ressource heraus müssen:</strong></p><ul class="source-list">${detail.mustKnow
              .map((item) => `<li>${cleanStudentText(item)}</li>`)
              .join("")}</ul></div>`
          : ""
      }
      ${detail.misconception ? `<p><strong>Welche Fehldeutung wird korrigiert?</strong> ${cleanStudentText(detail.misconception)}</p>` : ""}
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
    .replace(/^Die Ressource wird genutzt, um\s*/i, "")
    .replace(/^Die Ressource wird als\s*/i, "")
    .replace(/^Im Modul dient dies als\s*/i, "")
    .replace(/^Die Quelle wird genutzt, um\s*/i, "")
    .replace(/Didaktisch wird sie eingesetzt, um\s*/gi, "Sie hilft dabei, ")
    .replace(/Die Serie wird didaktisch als\s*/gi, "Die Serie dient als ")
    .replace(/\bdidaktisch\s+/gi, "")
    .trim();
}

function cleanPromptText(text) {
  return cleanStudentText(text)
    .replace(/Hararis Bild vom /gi, "das Bild aus der Harari-Stelle vom ")
    .replace(/Hararis Bild /gi, "das Bild aus der Harari-Stelle ")
    .replace(/Hararis These/gi, "die These in der Harari-Stelle")
    .replace(/Hararis Zuspitzung/gi, "die Zuspitzung in der Harari-Stelle")
    .replace(/Hararis Einstieg/gi, "den Einstieg in der Harari-Stelle")
    .replace(/Hararis Kapitel/gi, "das Kapitel in der Harari-Stelle")
    .replace(/Harari-PDF/gi, "Harari-Stelle im PDF")
    .replace(/\bHarari\b/gi, "den Historiker Harari");
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
    return JSON.parse(localStorage.getItem(getStorageKey()) || "{}");
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
              <p class="master-timeline-jump-label">Sprungmarken in die Einheit</p>
              <div class="master-timeline-modules">${moduleLinks}</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
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
  const badge = detail.badge || source.meta;
  const passage = cleanStudentText(detail.passage || source.extracted);
  const isHarari = normalize(source.title).startsWith(normalize("Harari-PDF"));
  const titleLabel = isHarari ? "Harari-Stelle" : source.title;
  const locatorTextRaw = isHarari
    ? String(detail.locator || "").replace(/^Harari-PDF,\s*/i, "Yuval Noah Harari, Eine kurze Geschichte der Menschheit, ")
    : detail.locator || "";
  const locatorText =
    isHarari && detail.pdfPage
      ? `<a href="${getHarariReferenceLink(detail)}">${locatorTextRaw}</a>`
      : locatorTextRaw;
  const locatorLabel = isHarari ? "Buchstelle" : "Verortung";
  const passageLabel = isHarari ? "Paraphrase der Passage" : "Konkrete Passage";

  return `
    <article class="source-card">
      <header>
        <div>
          <h4>${titleLabel}</h4>
          <span class="source-meta">${badge}</span>
        </div>
      </header>
      ${locatorText ? `<p><strong>${locatorLabel}:</strong> ${locatorText}</p>` : ""}
      ${isHarari ? renderHarariActions(detail) : ""}
      ${detail.thesis ? `<p><strong>Hauptthese:</strong> ${cleanStudentText(detail.thesis)}</p>` : ""}
      ${renderSourceFocus(detail)}
      ${detail.quote ? `<p class="source-quote"><strong>Kurzes Zitat:</strong> <q>${detail.quote}</q></p>` : ""}
      <p><strong>${passageLabel}:</strong> ${passage}</p>
      ${renderRelevantItems(detail.relevantItems, detail.itemsLabel || "Auf der SRF-Seite besonders wichtige Einzelfilme:")}
      ${renderRelevantItems(detail.relatedItems, detail.relatedLabel || "Von SRF auf dieser Seite zusätzlich verlinkt:")}
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
        <p class="section-kicker">Filmgrundlage</p>
        <p>Hier liegen die konkreten Beispiele des Moduls: Gegenstände, Lebensweisen, Räume, Wege, Funde und historische Situationen aus den SRF-Filmen.</p>
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
                  <a class="btn primary" href="${catalog.link}" target="_blank" rel="noreferrer">Film öffnen</a>
                </div>
                ${detail.locator ? `<p><strong>Verortung:</strong> ${detail.locator}</p>` : ""}
                ${detail.thesis ? `<p><strong>Hauptthese:</strong> ${cleanStudentText(detail.thesis)}</p>` : ""}
                ${renderSourceFocus(detail)}
                <p><strong>Zentrale Informationen:</strong> ${passage}</p>
                ${renderRelevantItems(detail.relevantItems, detail.itemsLabel || "Auf dieser SRF-Seite besonders wichtig:")}
                ${renderRelevantItems(detail.relatedItems, detail.relatedLabel || "Von SRF auf dieser Seite zusätzlich verlinkt:")}
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
  return `
    <div class="reading-flow">
      ${module.input
        .map(
          (paragraph, index) => `
            <article class="reading-block">
              <p class="reading-label">Abschnitt ${index + 1}</p>
              <p>${cleanStudentText(paragraph)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderContentCheck(module, state) {
  const check = contentChecks[module.id];
  const questions = check.questions
    .map((question, questionIndex) => {
      const answerId = `${module.id}-content-question-${questionIndex}`;
      const stored = state[`${answerId}-feedback`];
      const statusBadge = stored
        ? `<span class="question-status status-badge ${stored.score >= 60 ? "ready" : "locked"}">${stored.score >= 60 ? "gesichert" : "überarbeiten"}</span>`
        : "";

      return `
        <div class="check-question ${stored ? stored.level : ""}">
          ${statusBadge}
          <p><strong>${questionIndex + 1}.</strong> ${question.prompt}</p>
          <textarea data-content-answer="${answerId}" placeholder="${question.placeholder}"></textarea>
          ${renderStoredFeedback(stored)}
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
      `;
    })
    .join("");

  const storedFeedback = state[`${module.id}-content-feedback`];

  return `
    <div class="selftest-box">
      <p><strong>${check.title}:</strong> Beantworte die Fragen schriftlich und stütze dich ausdrücklich auf Filmgrundlage, Quellenkarten und Grundwissen des Moduls. Wenn der Durchschnitt mindestens 60 Prozent erreicht, wird das nächste Modul freigeschaltet.</p>
      <div class="check-grid">${questions}</div>
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
          <p class="scene-kicker">Zweiter Bildimpuls</p>
          <p>Achte auf Gegenstände, Kleidung, Bauten oder Landschaft. Solche Details verraten oft mehr über eine Epoche als bloße Schlagworte.</p>
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
            ? "Du hast alle 12 Module bestanden. Die komplette Lernstrecke ist freigeschaltet, und du kannst dein Zertifikat drucken."
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
          <p class="section-kicker">3. Quellen und konkrete Beispiele</p>
          <p>${cleanPromptText(module.sourcePrompt)}</p>
          <div class="source-grid">
            ${module.sources.map((source) => renderSourceCard(source, module)).join("")}
          </div>
        </section>

        <section class="module-section">
          <p class="section-kicker">4. Aufgaben</p>
          ${renderShortAnswerBox(module.task, "Aufgabe")}
        </section>

        <section class="module-section">
          <p class="section-kicker">5. Historischer Zusammenhang</p>
          <p>${moduleSupports[module.id]?.connection || cleanStudentText(module.deepening)}</p>
        </section>

        <section class="module-section">
          <p class="section-kicker">6. Kurze Sicherung</p>
          ${renderQuickCheck(module)}
        </section>

        <section class="module-section">
          <p class="section-kicker">7. Merkkasten</p>
          <div class="takeaway-list">${renderTakeaway(module.takeaway)}</div>
        </section>

        <section class="module-section">
          <p class="section-kicker">8. Transferfrage</p>
          ${renderShortAnswerBox(module.transfer, "Transferfrage")}
        </section>

        <section class="module-section">
          <p class="section-kicker">9. Schriftliche Sicherung</p>
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
      <p><strong>Worum es inhaltlich geht:</strong> ${cleanStudentText(source.role)}</p>
      <p><strong>Was dir die Ressource erklärt:</strong> ${cleanStudentText(source.didactics)}</p>
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
  const tasks = modules.flatMap((module) => [module.task, quickChecks[module.id], module.transfer]);
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
    if (!button) {
      return;
    }

    contentChecks[module.id].questions.forEach((question, questionIndex) => {
      const answerId = `${module.id}-content-question-${questionIndex}`;
      const field = document.querySelector(`[data-content-answer="${answerId}"]`);
      if (field && state[`${answerId}-text`]) {
        field.value = state[`${answerId}-text`];
      }
    });

    button.addEventListener("click", () => {
      const check = contentChecks[module.id];
      const scores = [];
      const weakQuestions = [];

      check.questions.forEach((question, questionIndex) => {
        const answerId = `${module.id}-content-question-${questionIndex}`;
        const field = document.querySelector(`[data-content-answer="${answerId}"]`);
        const answerText = String(field?.value || "");
        const result = evaluateCheckQuestion(answerText, question);

        state[`${answerId}-text`] = answerText;
        state[`${answerId}-feedback`] = result;
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
          <div class="takeaway">Wenn alle 12 Module bestanden sind, wird das Zertifikat freigeschaltet.</div>
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

function renderApp(state) {
  renderWelcomeOverlay(state);
  createTimeline(state);
  renderMasterTimeline();
  createNavigation(state);
  renderLearnerBanner(state);
  renderChapterCards(state);
  renderModules(state);
  renderCompletionPanel(state);
  renderSourceCatalog();
  bindShortAnswerTasks(state);
  bindSelftests(state);
  bindContentChecks(state);
  bindWelcomeOverlay(state);
  bindCompletionActions();
  updateProgress(state);
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
