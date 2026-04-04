const STORAGE_KEY = "geschichte_bis_1500-progress-v2";

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
      "Für diesen Kurs ist außerdem wichtig, dass wir nicht nur Jahr für Jahr oder Reich für Reich vorgehen. Stattdessen arbeiten wir mit großen Veränderungen, die viele spätere Entwicklungen vorbereiten. Dazu gehören Sprache, Sesshaftigkeit, Schrift, Herrschaft, Geld und Religion. Diese Begriffe bleiben aber nicht abstrakt. In den folgenden Modulen werden sie an konkreten Fällen sichtbar: an Pfahlbauten, Münzfunden, Straßen, Latrinen, Chroniken oder Pilgerwegen.",
      "Die SRF-Ressource zum Anthropozän öffnet dafür den Blick in die Ferne. Sie verbindet Feuer, Landwirtschaft, Metall, Hochmittelalter und moderne Umweltfolgen zu einer langen Entwicklungslinie. Dadurch wird klar: Wer Feuer nutzt, Wälder rodet, Felder anlegt, Metalle verarbeitet oder Städte baut, verändert nicht nur den eigenen Alltag, sondern ganze Landschaften. Geschichte beginnt also nicht erst bei berühmten Herrschern, sondern dort, wo Menschen ihre Welt wirksam umgestalten."
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
      "Die SRF-Ressource zu '1491' ergänzt diesen Blick global. Sie erinnert daran, dass Menschen Amerika schon sehr früh erreichten und sich an sehr unterschiedliche Umwelten anpassten. In kalten Regionen brauchten sie andere Kleidung, Unterkünfte und Vorräte als in wärmeren Landschaften. Migration ist daher kein Randthema der Geschichte, sondern ein Grundmuster. Menschen bewegen sich, lernen neue Räume kennen und entwickeln dafür immer neue Lebensweisen."
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
      "Die SRF-Ressource '1491' hilft, das sichtbar zu machen. Felsbilder, Totempfähle, Schriftzeichen und andere kulturelle Spuren zeigen, dass Menschen ihre Welt nicht nur bewohnen, sondern deuten. Solche Zeichen sagen: Hier erinnert sich eine Gemeinschaft, hier markiert sie Zugehörigkeit, hier erklärt sie ihre Welt. Frühgeschichte ist deshalb keine stumme Vorstufe, sondern bereits eine Welt aus Zeichen, Bedeutungen und gemeinsamen Erzählungen."
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
      "Jäger-und-Sammler-Gesellschaften lebten nicht einfach von Mangel. Ihre Lebensform konnte sehr anpassungsfähig und vielseitig sein. Unterschiedliche Räume verlangten unterschiedliche Lösungen: In kalten Regionen brauchte man andere Unterkünfte, Kleidung und Werkzeuge als in warmen oder bewaldeten Landschaften. Die SRF-Ressource '1491' zeigt genau diese Vielfalt anschaulich, wenn sie über unterschiedliche Behausungen, Jagdformen und Formen des Zusammenlebens spricht.",
      "Wichtig ist auch, dass Wissen in solchen Gesellschaften anders gesichert wurde als später in Schriftkulturen. Wer keine Bibliotheken oder Archive hat, muss Wege, Tiere, Jahreszeiten, Gefahren und Regeln gemeinschaftlich erinnern. Erzählen, Zeigen, Nachahmen und Rituale werden dadurch zu wichtigen Techniken des Überlebens. Gerade darin wird sichtbar, dass mobile Lebensweisen hoch organisiert sein konnten.",
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
      "Die SRF-Ressource 'Pfahlbauer von Pfyn' macht das konkret. Dort sieht man nicht bloß abstrakte Begriffe wie Sesshaftigkeit oder Jungsteinzeit, sondern Hüttenbau, Steinbeile, Kleidung, Feuerstellen, Nahrungsvorbereitung und mühsame Handarbeit. Gerade daran wird sichtbar, was Sesshaftigkeit wirklich bedeutet: Häuser müssen instand gehalten, Nahrung muss gelagert und Geräte müssen ständig hergestellt oder repariert werden. Landwirtschaft ist deshalb kein bequemes Endziel, sondern ein Alltag aus Planung, Arbeit und Abhängigkeit."
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
      "Am Beispiel Ägyptens wird das besonders deutlich. Die SRF-Reihe 'Eine kurze Geschichte über…' zeigt, dass der Nil nicht nur eine Landschaft ist, sondern die Grundlage für regelmäßige Ernten, Versorgung und Planung. Beamtentum und Schreiber organisieren Abgaben, Bauarbeiten und Versorgung. Hieroglyphenschrift hilft, Ordnung sichtbar zu machen und über längere Zeit zu sichern. Gleichzeitig wird Herrschaft religiös aufgeladen, etwa durch die besondere Stellung des Pharao.",
      "Deshalb bedeutet Hochkultur viel mehr als Pyramiden und berühmte Herrscher. Gemeint ist eine Gesellschaft, in der Umwelt, Nahrung, Verwaltung, Religion, Arbeitsteilung und Symbolsysteme eng zusammenwirken. Wer frühe Staaten verstehen will, muss also nicht nur Monumente betrachten, sondern auch Speicher, Listen, Tempel, Schreiber, Abgaben und die Frage, wer für wen arbeitet."
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
      "Die SRF-Reihe 'Römer in der Schweiz' macht das an einem konkreten Raum sichtbar. Dort zeigt sich, wie Straßen und Brücken Bewegung erleichtern, wie Weinbau, Hühnerhaltung oder Walnüsse neue Gewohnheiten mitbringen und wie römisches Recht und Städte lokale Räume verändern. Gleichzeitig wird deutlich, dass die Römer nicht in leere Räume kamen. Sie trafen auf bestehende keltische Siedlungen und banden diese in ihre Ordnung ein.",
      "Das 'Römer-Experiment' ergänzt diese große Perspektive durch Alltag. Es zeigt Werkzeuge, Kochen, Kleidung, Kampf und Arbeit so, dass man sich fragen muss: Wie fühlt sich römische Herrschaft im täglichen Leben an? Wer badet, arbeitet, isst oder kämpft, lebt in einer materiellen Ordnung. Genau daran wird sichtbar, dass ein Imperium nicht nur auf dem Schlachtfeld existiert, sondern in Küchen, Werkstätten, Straßen und Häusern."
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
      "Der Münzschatz von Ueken macht diese abstrakte Ordnung greifbar. Ein Fund aus tausenden römischen Silbermünzen ist nicht einfach ein Haufen Metall, sondern eine historische Sachquelle. Münzen verraten etwas über Herrschaft, Umlauf, Wertvorstellungen, Verkehrswege und manchmal auch über Unsicherheit, wenn Vermögen versteckt wurde. Gerade Reinigung, Sortierung und Datierung machen sichtbar, wie viel Geschichte in einem kleinen Gegenstand stecken kann.",
      "Die SRF-Ressource 'Grosse Völker' erweitert den Blick noch einmal. Sie zeigt, dass Handel, Wissen und Vernetzung nicht nur römisch oder nur europäisch gedacht werden dürfen. Araber, Karthager und andere Akteure gehören ebenso in diese Geschichte. Vernetzung ist daher immer eine Geschichte von Schiffen, Märkten, Waren, Schrift, Rechenwissen und kulturellen Begegnungen."
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
      "Historisch wichtig ist außerdem, dass Religion oft mit Wissen, Handel und Mobilität zusammenhängt. Pilger reisen, Gelehrte übersetzen Texte, Händler bewegen sich zwischen Städten und Regionen. Die SRF-Ressource 'Grosse Völker' hilft, diese Zusammenhänge sichtbar zu machen, besonders mit Blick auf arabische Wissenswelten, Mathematik, Medizin und Fernverbindungen. Religion erscheint dann nicht als abgeschottete Innenwelt, sondern als Teil größerer kultureller Netze.",
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
      "Die SRF-Seite 'Das verrückte Mittelalter' eignet sich als Einstieg, weil sie typische Themen schnell sichtbar macht: Burgen, Minnesang, Pest, Handel, Hierarchien und Hygiene. Das ist als erster Zugriff nützlich, aber noch kein ausreichendes Geschichtsbild. Die Begriffe müssen mit echter Lebenswirklichkeit gefüllt werden.",
      "Diese genauere Perspektive liefert 'Mittelalter in der Schweiz'. Dort erscheinen Latrinen, Küche, Verteidigung, Kleidung, Rollenbilder, Statussymbole und archäologische Funde. Dadurch wird sichtbar, dass mittelalterliche Gesellschaften sehr konkret organisiert waren. Menschen lebten nicht in einem Märchenraum, sondern in Häusern mit Rauch, in Städten mit Abfallproblemen, in Burgen mit enger Rangordnung und in einer Welt, in der Besitz, Herkunft und Glaube das Leben stark bestimmten.",
      "Zusammen mit 'Eine kurze Geschichte über…' wird daraus ein differenziertes Bild. Das Mittelalter war stark christlich geprägt, aber nicht einfach rückständig. Wer Burgen, Kathedralen, Handschriften, Bauernarbeit, Stadtleben, Krankheit, Frömmigkeit und soziale Unterschiede zusammendenkt, erkennt eine widersprüchliche, aber historisch hoch interessante Epoche."
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
      "Damit wird dieses Modul zu einem besonders wichtigen Methodenmodul. Es zeigt, dass Geschichte nicht fertig vorliegt, sondern aus Spuren und Überlieferungen rekonstruiert wird. Mittelalterliche Chroniken berichten nicht neutral. Sie deuten, übertreiben, verkürzen oder verfolgen bestimmte Interessen. Gerade bei einer so eindrücklichen Geschichte wie dem Kinderkreuzzug muss man deshalb fragen, was wirklich belegt ist und was erst später ausgeschmückt wurde.",
      "Gleichzeitig geht es nicht nur um Texte, sondern auch um Räume. Märkte, Pilgerwege, Städte, Herrschaftszentren und religiöse Bewegungen verbanden Menschen über große Entfernungen. Wer aufbricht, predigt, pilgert oder handelt, bewegt sich in Netzen aus Straßen, Herbergen, Hafenorten und religiösen Erwartungen. Die mittelalterliche Welt war nicht nur lokal und abgeschlossen, sondern in vieler Hinsicht mobil und vernetzt.",
      "Deshalb zeigt dieses Modul beides zugleich: wie man Quellen prüft und wie stark Frömmigkeit, Handel, Bewegung und Macht zusammenhängen. Mittelaltergeschichte ist hier also nicht nur eine Geschichte von Glauben oder Konflikt, sondern auch eine Geschichte von Wegen, Begegnungen, Gerüchten und Austausch."
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
      "Im Schlussmodul ordnen wir nicht einfach noch einmal alle Themen, sondern ziehen eine historische Bilanz. Dabei hilft die SRF-Ressource '1491' besonders stark. Sie zeigt, dass Geschichte vor 1500 nicht nur Europa, Rom und Mittelalter umfasst. In Amerika gab es lange vor Kolumbus Gesellschaften mit Landwirtschaft, Kunst, Sprachen, politischen Ordnungen und religiösen Vorstellungen. Häuser, Felder, Städte und Weltbilder existierten dort längst.",
      "Damit wird ein wichtiger Perspektivwechsel möglich. 1492 ist für Amerika ein Einschnitt, aber nicht der Anfang aller Geschichte dort. Wer das versteht, merkt, wie schnell Geschichte eurozentrisch erzählt wird. Die Abschlussphase des Kurses korrigiert diese Verkürzung und öffnet den Blick auf mehrere Weltregionen, die ihre eigenen historischen Wege entwickelt haben.",
      "Danach richtet sich der Blick noch einmal auf lange Folgen. Die Anthropozän-Ressource macht deutlich, dass menschliche Innovationen wie Feuergebrauch, Landwirtschaft, Metallverarbeitung, Städtebau oder Fernhandel nicht folgenlos bleiben. Sie greifen tief in Umwelt und Lebensverhältnisse ein. Wenn in früheren Modulen Felder, Speicher, Straßen oder Städte vorkamen, dann sind das deshalb nicht nur Einzelbeispiele, sondern Teile einer langen Mensch-Umwelt-Geschichte.",
      "Am Ende werden deshalb die großen Zusammenhänge sichtbar: Sprache ermöglicht größere Kooperation, Sesshaftigkeit schafft Überschüsse und Ungleichheiten, Schrift und Verwaltung stabilisieren Staaten, Geld und Religion verbinden große Räume, und verschiedene Weltregionen entwickeln eigene historische Ordnungen. Geschichte bis 1500 ist so keine lose Folge von Brocken, sondern eine zusammenhängende Entwicklung menschlicher Weltgestaltung."
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
      "In diesem Modul klärst du zuerst eine Grundfrage: Nicht alles Vergangene ist automatisch Geschichte im engeren Sinn. Geschichte beginnt dort, wo Menschen ihre Welt durch Sprache, Regeln, Erinnerungen und gemeinsame Vorstellungen ordnen.",
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
      "Hier lernst du, dass der moderne Mensch nicht von Anfang an allein und überlegen war. Über lange Zeit lebten mehrere Menschenarten gleichzeitig, und der Erfolg des Homo sapiens musste sich erst entwickeln.",
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
      "In diesem Modul geht es um den vielleicht wichtigsten Schritt der frühen Menschheitsgeschichte: Menschen können nicht nur warnen oder rufen, sondern über Abwesendes, Zukünftiges und Vorgestelltes sprechen.",
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
      "Bevor Menschen sesshaft wurden, lebten sie sehr lange in mobilen Gruppen. Diese Lebensweise war nicht primitiv, sondern verlangte viel Wissen über Tiere, Pflanzen, Wege, Wetter und Jahreszeiten.",
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
      "Mit Landwirtschaft beginnt kein einfaches Glückskapitel, sondern ein großer Umbruch. Menschen bauen Häuser, legen Vorräte an und werden gleichzeitig abhängiger von Ernten, Boden und Besitzordnung.",
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
      "Dieses Modul zeigt, wie aus Vorräten und Organisation frühe Staaten werden. Sobald Nahrung, Arbeit und Besitz für viele Menschen geregelt werden müssen, entstehen Schrift, Listen, Verwaltung und neue Formen der Herrschaft.",
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
      "Imperien verbinden große Räume. Das geschieht nicht nur durch Eroberung, sondern auch durch Straßen, Brücken, Gesetze, Handel, Sprache und feste Verwaltungsorte.",
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
      "Geld ist mehr als Metall. Es funktioniert nur, wenn Menschen ihm vertrauen und es als Wert anerkennen. Darum verbindet Geld auch Menschen, die sich persönlich gar nicht kennen.",
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
      "Religionen ordnen die Welt. Sie geben Antworten auf Sinnfragen, regeln Verhalten, schaffen Zugehörigkeit und können Herrschaft stützen oder kritisieren.",
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
      "Das Mittelalter war weder nur dunkel noch nur romantisch. Menschen lebten in einer harten, aber auch sehr organisierten Welt mit Herrschaft, Frömmigkeit, Arbeit, Konflikten, Städten und kulturellen Leistungen.",
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
      "Im späteren Mittelalter nehmen Kontakte, Märkte, Städte und religiöse Bewegungen zu. Gleichzeitig lernst du hier besonders deutlich, dass Geschichtswissen nie einfach gegeben ist, sondern aus Quellen kritisch erschlossen werden muss.",
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
      "Zum Schluss bündelst du die ganze Lernreise. Dabei wird deutlich: Geschichte bis 1500 ist nicht nur Europa, und sie endet nicht einfach in einer geraden Fortschrittsgeschichte.",
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
      }
    ]
  }
};

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
    .replace(/Hararis Bild vom /gi, "das Bild aus dem Buchauszug vom ")
    .replace(/Hararis Bild /gi, "das Bild aus dem Buchauszug ")
    .replace(/Hararis These/gi, "die These im Buchauszug")
    .replace(/Hararis Zuspitzung/gi, "die Zuspitzung im Buchauszug")
    .replace(/Hararis Einstieg/gi, "den Einstieg im Buchauszug")
    .replace(/Hararis Kapitel/gi, "das Kapitel im Buchauszug")
    .replace(/Harari-PDF/gi, "Buchauszug")
    .replace(/\bHarari\b/gi, "den Historiker Harari");
}

function getModuleIntroText(module) {
  return moduleSupports[module.id]?.overview || cleanStudentText(module.hook);
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  const value = String(state.learnerName || "").trim();
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

function renderSourceCard(source) {
  return `
    <article class="source-card">
      <header>
        <div>
          <h4>${source.title}</h4>
          <span class="source-meta">${source.meta}</span>
        </div>
      </header>
      <p><strong>Das zeigt die Ressource:</strong> ${cleanStudentText(source.extracted)}</p>
    </article>
  `;
}

function renderShortAnswerBox(task, kindLabel) {
  return `
    <div class="${kindLabel === "Transferfrage" ? "transfer-box" : "task-box"}">
      <p><strong>${kindLabel}:</strong> ${cleanPromptText(task.question)}</p>
      <textarea data-answer="${task.id}" placeholder="${task.placeholder}"></textarea>
      <div class="${kindLabel === "Transferfrage" ? "transfer-actions" : "task-actions"}">
        <button class="btn primary" type="button" data-check="${task.id}">Antwort prüfen</button>
        <button class="btn ghost" type="button" data-show="${task.id}">Beispiellösung zeigen</button>
      </div>
      <div class="feedback" data-feedback="${task.id}"></div>
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
  if (!support) {
    return "";
  }

  return `
    <div class="study-sheet">
      ${
        support.entryNote
          ? `
            <p class="study-callout"><strong>Zuerst klären:</strong> ${support.entryNote}</p>
          `
          : ""
      }
      ${
        support.authorIntro
          ? `
            <p class="study-callout is-secondary"><strong>Zur Einordnung:</strong> ${support.authorIntro}</p>
          `
          : ""
      }
      <section class="study-block">
        <p class="section-kicker">Grundorientierung</p>
        <p>${support.overview}</p>
      </section>
      <section class="study-block">
        <p class="section-kicker">Grundbegriffe</p>
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
      <section class="study-block">
        <p class="section-kicker">So entwickelt sich das Thema</p>
        <ol class="storyline-flow">
          ${support.storyline.map((step) => `<li>${step}</li>`).join("")}
        </ol>
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
        </div>
      `;
    })
    .join("");

  const storedFeedback = state[`${module.id}-content-feedback`];

  return `
    <div class="selftest-box">
      <p><strong>${check.title}:</strong> Beantworte die Fragen schriftlich. Wenn der Durchschnitt mindestens 60 Prozent erreicht, wird das nächste Modul freigeschaltet.</p>
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
          ${
            moduleSupports[module.id]?.entryNote
              ? `<div class="module-entry-note">${moduleSupports[module.id].entryNote}</div>`
              : ""
          }
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
            ${module.sources.map(renderSourceCard).join("")}
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
  banner.innerHTML = `
    <strong>${getLearnerName(state)}</strong>
    <span>Arbeite Modul für Modul: Nach einer bestandenen schriftlichen Sicherung wird das nächste Kapitel geöffnet.</span>
  `;
}

function renderWelcomeOverlay(state) {
  const overlay = document.getElementById("welcome-overlay");
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

function init() {
  const state = loadState();
  renderApp(state);
}

init();
