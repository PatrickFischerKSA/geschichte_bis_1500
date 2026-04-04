const STORAGE_KEY = "geschichte_bis_1500-progress-v1";

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
      "Harari setzt Geschichte nicht beim Urknall und nicht einfach beim ersten Steinwerkzeug an, sondern dort, wo Homo sapiens Kulturen aufbaut. Das zwingt dazu, Naturgeschichte, Menschheitsgeschichte und Kulturgeschichte sauber zu unterscheiden.",
    goals: [
      "Naturgeschichte, biologische Entwicklung und Geschichte im engeren Sinn unterscheiden",
      "Hararis Drei-Revolutionen-Modell als Grundgerüst der Einheit verstehen",
      "erste Langzeitlinien zwischen Frühzeit und späteren Weltveränderungen erkennen"
    ],
    input: [
      "Im Auftakt ordnen die Lernenden drei Ebenen: Physik und Chemie erklären Entstehung von Materie; Biologie beschreibt Organismen; Geschichte beginnt dort, wo Menschen kulturelle Ordnungen, Regeln, Erzählungen und Tradierungen aufbauen. Harari formuliert diese Unterscheidung ausdrücklich und macht daraus zugleich eine Grobgliederung der Menschheitsgeschichte.",
      "Damit wird Geschichte nicht als bloße Datenfolge verstanden, sondern als Prozess kultureller Verdichtung. Aus dieser Perspektive sind Sprache, Symbole, Vorratshaltung, Schrift, Herrschaft, Geld und Religion keine Nebenthemen, sondern Schlüsselinstrumente historischer Entwicklung.",
      "Die SRF-Ressource zum Anthropozän ergänzt diesen Einstieg produktiv: Sie zeigt, dass menschliche Eingriffe in Wasser, Luft und Boden nicht erst in der Moderne aus dem Nichts entstehen, sondern auf älteren Innovationsketten beruhen. Für einen Kurs bis 1500 ist das kein thematischer Sprung, sondern ein Ausblick auf die Reichweite früher Entscheidungen."
    ],
    sources: [
      {
        title: "Harari-PDF",
        meta: "Grundgerüst",
        extracted:
          "Harari trennt Physik, Chemie, Biologie und Geschichte und beschreibt Geschichte als Entwicklung menschlicher Kulturen. Außerdem nennt er kognitive, landwirtschaftliche und wissenschaftliche Revolution als große Strukturachsen.",
        didacticUse:
          "Im Modul wird daraus keine reine Buchzusammenfassung, sondern eine begriffliche Startfolie: Was zählt als Geschichte, was als Vorgeschichte, und nach welchen Entwicklungslinien wird der Kurs geordnet?"
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
      "Arbeite heraus, welche Schwelle im Kurs als Beginn von Geschichte gilt und warum diese Entscheidung den Blick auf alle folgenden Module verändert.",
    task: {
      id: "m1-task",
      question:
        "Erkläre in 4 bis 6 Sätzen den Unterschied zwischen Naturgeschichte, biologischer Menschheitsentwicklung und Geschichte im engeren Sinn.",
      placeholder: "Formuliere eine knappe, aber genaue Unterscheidung.",
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
      "Hararis Drei-Revolutionen-Modell ist ein Deutungsraster, kein starres Schulbuchschema.",
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
      "Hararis Kapitel 1 beschreibt Homo sapiens zunächst als 'ziemlich unauffälliges Tier'. Zentral ist die Einsicht, dass es lange mehrere Menschenarten gleichzeitig gab: Neandertaler, Homo erectus, Denisova-Menschen und andere. Das rückt den modernen Menschen aus einer linearen Fortschrittserzählung heraus.",
      "Biologisch wichtig sind großer Energiebedarf des Gehirns, freie Hände durch den aufrechten Gang und die lange Hilfsbedürftigkeit menschlicher Kinder. Gerade diese Hilfsbedürftigkeit fördert Kooperation, Erziehung und soziale Bindungen. Der Mensch ist also nicht trotz, sondern wegen seiner Abhängigkeit historisch erfolgreich.",
      "Die SRF-Ressource zu '1491' ergänzt diesen Blick global: Sie erinnert daran, dass Menschen Amerika schon vor 18 000 bis 20 000 Jahren erreichen, auf unterschiedlichen Routen einwandern und ihre Lebensweisen kreativ an neue Räume anpassen. Migration ist daher kein Randthema, sondern Grundstruktur der Menschheitsgeschichte."
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
      "Verbinde Hararis Bild vom unauffälligen Tier mit der SRF-Perspektive auf frühe Migration: Warum war gerade Anpassungsfähigkeit historisch so wichtig?",
    task: {
      id: "m2-task",
      question:
        "Erkläre, warum Homo sapiens lange nicht automatisch überlegen war, später aber dennoch große Räume besiedeln konnte.",
      placeholder: "Arbeite mit biologischen und kulturellen Faktoren.",
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
      "Hararis Kapitel zur kognitiven Revolution fragt nicht bloß nach Lautsprache, sondern nach ihrem historischen Mehrwert. Tiere warnen vor Gefahren oder weisen auf Futter hin. Menschen können zusätzlich von Abwesendem, Vergangenem, Zukünftigem und Vorgestelltem sprechen. Darin liegt die Grundlage für Regeln, Götter, Grenzen, Stämme, Reiche und Unternehmen.",
      "Besonders didaktisch ergiebig ist Hararis Gedanke der 'juristischen Fiktionen': Gruppen halten sich an Ordnungen, weil sie gemeinsam an sie glauben. Im Unterricht wird daraus die Brücke zu späteren Themen wie Staat, Geld, Kirche und Imperium.",
      "Die SRF-Ressource '1491' liefert dafür starkes Bildmaterial: Felsbilder, Totempfähle und Mayaschrift verweisen darauf, dass Kulturen Welt nicht nur wahrnehmen, sondern symbolisch gestalten. Frühgeschichte ist daher keine sprachlose Vorstufe, sondern bereits eine Sinnwelt."
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
      "Untersuche, wie aus Sprache und Symbolen mehr wird als Kommunikation: nämlich gemeinsame Ordnung, Erinnerung und Identität.",
    task: {
      id: "m3-task",
      question:
        "Warum können Menschen in viel größeren Gruppen kooperieren als Schimpansen? Antworte mit Blick auf Sprache und gemeinsame Vorstellungen.",
      placeholder: "Erkläre den Zusammenhang zwischen Sprache, Mythos und Kooperation.",
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
      "Das Modul vertieft die Welt vor der Sesshaftigkeit. Jäger-und-Sammler-Gruppen lebten in kleineren Verbänden, bewegten sich saisonal und passten Ernährung, Werkzeuge und Unterkünfte an ihre Umgebung an. Hararis Struktur hilft hier, weil sie diese Epoche nicht als Defizit, sondern als eigenständige Lebensform auffasst.",
      "Die SRF-Ressource '1491' ist didaktisch besonders wertvoll, weil sie unterschiedliche Formen der Anpassung sichtbar macht: Zelte, Lehmhäuser und Iglus entstehen nicht zufällig, sondern als Antworten auf Klima, Mobilität und Lebensweise. Ebenso wichtig ist die Verbindung von Jagd und Spiritualität.",
      "Damit lässt sich im Unterricht zeigen, dass frühe Gesellschaften hoch kompetent waren: Sie verfügten über Landschaftswissen, Tierbeobachtung, kollektive Erinnerung und flexible Techniken. Diese Kompetenzen verschwinden nicht einfach mit der Landwirtschaft, sondern werden teilweise überformt."
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
      "Arbeite heraus, weshalb Mobilität nicht mit Rückständigkeit verwechselt werden darf, sondern eine eigene Form historischer Kompetenz darstellt.",
    task: {
      id: "m4-task",
      question:
        "Vergleiche mobile Jäger-und-Sammler-Gesellschaften mit späteren sesshaften Dorfgemeinschaften. Nenne mindestens drei Unterschiede.",
      placeholder: "Denke an Nahrung, Bewegung, Besitz, Wissensformen und soziale Ordnung.",
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
      "Harari beschreibt die landwirtschaftliche Revolution als radikalen Wendepunkt: Menschen konzentrieren ihre Arbeit auf wenige Pflanzen und Tiere, bauen Vorräte auf und binden sich an Orte. Das erzeugt Bevölkerungswachstum, aber auch neue Abhängigkeiten, härtere Arbeitsrhythmen und Verwundbarkeit gegenüber Ernteausfällen.",
      "Die SRF-Ressource 'Pfahlbauer von Pfyn' macht diesen Wandel lebensweltlich zugänglich. Hütten, Werkzeuge, Kleidung und Nahrung erscheinen dort nicht als Vokabelliste, sondern als rekonstruierte Alltagspraxis. Experimentalarchäologie hilft hier, historische Lebensbedingungen zu konkretisieren.",
      "Gerade aus der Kombination beider Ressourcen entsteht ein gutes Unterrichtsgespräch: Landwirtschaft ist kein lineares Glücksversprechen. Sie schafft Versorgungsspielräume und zugleich neue Risiken, soziale Unterschiede und Verwaltungsnotwendigkeiten."
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
      "Beurteile Hararis These mit Hilfe der Pfahlbauer-Ressource: Was gewinnen sesshafte Gruppen, was verlieren sie?",
    task: {
      id: "m5-task",
      question:
        "Nimm Stellung zu Hararis Zuspitzung, Landwirtschaft sei der 'größte Betrug der Geschichte'. Begründe differenziert.",
      placeholder: "Formuliere ein abgewogenes Urteil statt nur Zustimmung oder Ablehnung.",
      sampleAnswer:
        "Hararis Zuspitzung ist übertrieben, aber didaktisch nützlich. Landwirtschaft brachte mehr Vorräte, Bevölkerungswachstum und dauerhafte Siedlungen hervor. Gleichzeitig mussten Menschen härter und einseitiger arbeiten, wurden stärker von Ernten abhängig und entwickelten soziale Ungleichheiten. Deshalb war Landwirtschaft weder nur Fortschritt noch nur Betrug, sondern ein ambivalenter Umbruch.",
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
      "Hararis Kapitel 'Pyramiden bauen', 'Speicher voll' und die Passage zur Schrift machen deutlich: Sobald Nahrung, Arbeit und Besitz in großem Maßstab organisiert werden, braucht es Listen, Zuständigkeiten und Zeichen. Schrift entsteht zunächst nicht primär als Literatur, sondern als Werkzeug von Verwaltung und Buchführung.",
      "Die SRF-Ressource 'Eine kurze Geschichte über…' beschreibt das Alte Ägypten als außergewöhnlich langlebige Ordnung. Nil, Beamtentum und Hieroglyphenschrift erscheinen dort als zentrale Gründe für Stabilität. Dadurch wird sichtbar, dass Staaten nicht nur durch Gewalt, sondern durch Organisation und symbolische Herrschaft zusammengehalten werden.",
      "Didaktisch entscheidend ist: Hochkultur meint nicht nur Pyramiden und Pharaonen, sondern ein komplexes Zusammenspiel aus Nahrung, Arbeitsteilung, Religion, Kalenderwissen und Verwaltung."
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
      "Hararis Kapitel zum Weltreich fragt nicht zuerst moralisch, sondern strukturell: Wie können politische Ordnungen sehr große Räume zusammenhalten? Das Imperium antwortet mit Infrastruktur, Verwaltung, militärischer Macht und kultureller Integration oder Überformung.",
      "Die SRF-Reihe 'Römer in der Schweiz' macht dies regional fassbar. Sprache, Architektur, Währung, Gesetze, Straßen und Brücken hinterlassen Spuren bis in die Gegenwart. Gleichzeitig zeigt die Ressource, dass Römer nicht in leeren Raum kamen, sondern auf keltische Siedlungen trafen und strategische Orte weiterentwickelten.",
      "Das 'Römer-Experiment' ergänzt diese Makroperspektive um Alltagsgeschichte. Werkzeuge, Kochen und rekonstruierte Situationen zeigen, dass Imperien nur funktionieren, wenn Herrschaft im Alltag materialisiert wird."
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
      "Untersuche, wie Imperium zugleich Herrschaft über Raum und Eingriff in Lebenswelt bedeutet.",
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
      "Hararis Kapitel 'Der Geruch des Geldes' beschreibt Geld nicht nur als Zahlungsmittel, sondern als vielleicht erfolgreichste gegenseitige Vertrauensordnung der Geschichte. Menschen nehmen es an, weil sie erwarten, dass auch andere daran glauben und es weiter akzeptieren.",
      "Der SRF-Fall 'Der Münzschatz von Ueken' macht diese Abstraktion anschaulich. Ein Fund von über 4000 römischen Silbermünzen ist historisch aufschlussreich, weil Münzen Informationen über Wert, Herrschaft, Zirkulation und Krisen enthalten. Der Schatz ist also kein stummes Objekt, sondern Quelle.",
      "Die SRF-Ressource 'Grosse Völker' erweitert diesen Fokus um Fernhandel, Schriftsysteme und Wissensleistungen. Karthager, Araber und andere Akteure zeigen, dass Vernetzung nicht nur römisch und nicht nur europäisch gedacht werden darf."
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
      "Harari beschreibt Religion als Kraft, die sehr unterschiedliche Menschen in gemeinsame normative Ordnungen einbindet. Pilgerorte, Rituale, Verbote, Feiertage und heilige Schriften strukturieren Zeit, Raum und Zugehörigkeit. Religion wirkt somit nicht nur innerlich, sondern sozial und politisch.",
      "Die SRF-Ressource 'Grosse Völker' stützt diese Perspektive indirekt, weil sie arabische Wissensleistungen und Fernverbindungen hervorhebt. Religion, Gelehrsamkeit, Handel und Übersetzung lassen sich historisch oft nicht sauber trennen. Der islamisch geprägte Raum des Mittelalters ist dafür ein starkes Beispiel.",
      "Im Unterricht sollte dieses Modul als Brücke zum Mittelalter funktionieren: Herrschaft, Kirche, Pilgerwesen, Kreuzzüge und Alltagsnormen werden erst verständlich, wenn Religion als tragendes Ordnungssystem begriffen wird."
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
      "Die SRF-Seite 'Das verrückte Mittelalter' eignet sich als Einstieg, weil sie niederschwellig Themen wie Burgen, Minnesang, Hierarchien, Pest, Handel und Hygiene bündelt. Gerade weil sie humorvoll vereinfacht, verlangt sie nach historischer Nachschärfung.",
      "Die Ressource 'Mittelalter in der Schweiz' liefert diese Nachschärfung mit alltagsgeschichtlichen Beispielen: Latrinen, Kochen, Rollenbilder, Verteidigung, Statussymbole und archäologische Funde. So wird deutlich, dass mittelalterliche Gesellschaften konkret organisiert, materiell strukturiert und sozial differenziert waren.",
      "Ergänzend betont 'Eine kurze Geschichte über…', dass das Mittelalter zwar stark vom christlichen Glauben geprägt war, aber nicht einfach rückständig. Burgen, Kathedralen, Manuskripte und vielfältige Lebensformen sprechen für eine komplexe Epoche."
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
      "Prüfe, welche Mittelalterbilder die Ressourcen anbieten und wie aus ihnen ein differenziertes Epochenverständnis entsteht.",
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
      "Die SRF-Dokumentation zum 'Kreuzzug der Kinder' stellt nicht einfach eine sensationelle Geschichte nach, sondern fragt ausdrücklich nach Quellenlage, Zuverlässigkeit und Rekonstruktion. Genau das ist für historisches Lernen entscheidend: Mittelalterliche Chroniken berichten nicht neutral, sondern aus bestimmten Perspektiven und Interessen.",
      "Hararis Bild von Samarkand als mittelalterlichem Knotenpunkt hilft, den größeren Rahmen zu sehen. Mittelalterliche Welt war nicht bloß lokal. Märkte, Pilgerwege, Herrschaftsräume und religiöse Bewegungen verbanden Menschen über enorme Distanzen hinweg.",
      "Das Modul soll deshalb zeigen, dass Mittelaltergeschichte immer auch Vernetzungsgeschichte ist. Frömmigkeit, Handel, Erzählungen und politische Macht verlaufen durch dieselben Räume."
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
      "Die SRF-Ressource '1491' ist für das Abschlussmodul ideal, weil sie kurz vor 1500 einen Perspektivwechsel erzwingt. Geschichte vor 1500 ist nicht nur Europa, Rom und Mittelalter, sondern auch eine Vielzahl indigener Gesellschaften mit Landwirtschaft, Kunst, politischen Strukturen und Spiritualität in Amerika.",
      "Die Anthropozän-Ressource liefert anschließend den Langzeitblick: Von Feuer, Landwirtschaft, Metall und vormodernen Innovationen führen Linien zu massiven planetaren Eingriffen. Für den Kurs heißt das nicht, plötzlich Moderne zu unterrichten, sondern die Tragweite vormoderner Entwicklungspfade zu erkennen.",
      "Im Schlussmodul werden daher keine neuen Faktenmengen eröffnet, sondern die großen Zusammenhänge geordnet: Sprache ermöglicht Kooperation, Sesshaftigkeit erzeugt Überschüsse und Ungleichheiten, Schrift und Verwaltung stabilisieren Staaten, Geld und Religion verbinden große Räume, und unterschiedliche Weltregionen entwickeln eigene historische Ordnungen."
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
      "Formuliere aus allen Modulen eine eigene historische Langzeitthese: Welche Entwicklungen tragen besonders weit, und welche Perspektiven müssen erweitert werden?",
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
        "Der Kurs endet um 1500 aus didaktischen Gründen, nicht weil dort Geschichte aufhört. Viele Entwicklungen reichen weiter: Kooperation, Staatenbildung, religiöse Netzwerke, Handelsräume und Mensch-Umwelt-Beziehungen prägen spätere Jahrhunderte mit. Historisches Denken fragt deshalb nach Voraussetzungen, Folgen und Perspektiven über Epochengrenzen hinweg.",
      criteria: [
        { label: "didaktische Zeitgrenze", keywords: ["zeitgrenze", "didaktisch", "kurs endet"] },
        { label: "Langzeitfolgen", keywords: ["folgen", "reichen weiter", "spätere jahrhunderte"] },
        { label: "reflektiertes Geschichtsdenken", keywords: ["voraussetzungen", "perspektiven", "epochengrenzen", "historisches denken"] }
      ]
    }
  }
];

const contentChecks = {
  "modul-1": {
    title: "Inhaltssicherung Modul 1",
    questions: [
      {
        prompt: "Was unterscheidet Geschichte im engeren Sinn von Naturgeschichte?",
        options: [
          "Geschichte meint kulturell geordnete menschliche Welt, Naturgeschichte nicht.",
          "Geschichte ist einfach alles, was vor heute passiert ist.",
          "Naturgeschichte beginnt erst mit der Schrift."
        ],
        correctIndex: 0,
        explanation: "Der Kurs trennt Naturgeschichte, biologische Entwicklung und Kulturgeschichte ausdrücklich."
      },
      {
        prompt: "Welche Strukturachse übernimmt die Einheit von Harari?",
        options: [
          "Nur die klassische Dreiteilung Antike, Mittelalter, Neuzeit.",
          "Kognitive Revolution, Landwirtschaft und Vereinigungsprozesse.",
          "Nur große Schlachten und Herrscher."
        ],
        correctIndex: 1,
        explanation: "Hararis Großstruktur bildet die Tiefenfolie der Einheit."
      },
      {
        prompt: "Warum taucht das Anthropozän schon im Einstieg auf?",
        options: [
          "Weil der Kurs eigentlich erst mit dem 20. Jahrhundert beginnt.",
          "Weil es den Blick auf Langzeitfolgen menschlichen Handelns öffnet.",
          "Weil es Hararis einziges Thema ist."
        ],
        correctIndex: 1,
        explanation: "Der Begriff dient im Kurs als Langzeitperspektive, nicht als neues Kapitel ab der Moderne."
      }
    ]
  },
  "modul-2": {
    title: "Inhaltssicherung Modul 2",
    questions: [
      {
        prompt: "Welche Aussage trifft auf frühe Menschen nach Harari zu?",
        options: [
          "Es gab lange mehrere Menschenarten gleichzeitig.",
          "Homo sapiens war von Anfang an allein.",
          "Menschen waren sofort ökologisch dominant."
        ],
        correctIndex: 0,
        explanation: "Gerade die Gleichzeitigkeit verschiedener Menschenarten ist ein zentrales Argument."
      },
      {
        prompt: "Was macht die Ressource '1491' für dieses Modul besonders wichtig?",
        options: [
          "Sie zeigt frühe Migration und Anpassung außerhalb Europas.",
          "Sie beweist, dass Menschen erst ab 1492 in Amerika lebten.",
          "Sie behandelt ausschließlich das Mittelalter in Europa."
        ],
        correctIndex: 0,
        explanation: "Die Ressource erweitert die Frühgeschichte global."
      },
      {
        prompt: "Warum spielt die lange Hilfsbedürftigkeit menschlicher Kinder eine Rolle?",
        options: [
          "Weil sie Kooperation, Erziehung und soziale Bindungen fördert.",
          "Weil sie Geschichte verhindert.",
          "Weil sie den Werkzeuggebrauch überflüssig macht."
        ],
        correctIndex: 0,
        explanation: "Harari verbindet frühe Abhängigkeit mit sozialer Lernfähigkeit."
      }
    ]
  },
  "modul-3": {
    title: "Inhaltssicherung Modul 3",
    questions: [
      {
        prompt: "Was ist laut Harari das historisch Neue an menschlicher Sprache?",
        options: [
          "Sie ist lauter als jede Tierkommunikation.",
          "Sie kann über Vorgestelltes und Abwesendes sprechen.",
          "Sie braucht keine Gemeinschaft."
        ],
        correctIndex: 1,
        explanation: "Nicht Lautstärke, sondern Abstraktionsfähigkeit ist der Schlüssel."
      },
      {
        prompt: "Warum sind Mythen historisch wichtig?",
        options: [
          "Weil sie immer wahr sind.",
          "Weil sie gemeinsame Ordnungen und Kooperation ermöglichen.",
          "Weil sie nur Unterhaltung bieten."
        ],
        correctIndex: 1,
        explanation: "Geteilte Vorstellungen können soziale Wirklichkeit erzeugen."
      },
      {
        prompt: "Wie stützt '1491' dieses Modul?",
        options: [
          "Durch Beispiele für Felsbilder, Totempfähle und Schriftkultur.",
          "Durch römische Legionen in der Schweiz.",
          "Durch moderne Umweltpolitik."
        ],
        correctIndex: 0,
        explanation: "Die Ressource macht Symbolfähigkeit materiell sichtbar."
      }
    ]
  },
  "modul-4": {
    title: "Inhaltssicherung Modul 4",
    questions: [
      {
        prompt: "Welche Lebensform beschreibt das Modul vor allem?",
        options: [
          "Starre Stadtgesellschaften mit Bürokratie.",
          "Mobile Gesellschaften mit Anpassung an Räume und Jahreszeiten.",
          "Industrielle Arbeitswelten."
        ],
        correctIndex: 1,
        explanation: "Jäger-und-Sammler-Gesellschaften sind hochgradig mobil und angepasst."
      },
      {
        prompt: "Was zeigt '1491' über Unterkünfte früher Gesellschaften?",
        options: [
          "Sie waren überall gleich gebaut.",
          "Sie waren an Klima, Mobilität und Lebensweise angepasst.",
          "Sie bestanden fast nur aus Steinburgen."
        ],
        correctIndex: 1,
        explanation: "Zelte, Lehmhäuser und Iglus zeigen funktionale Vielfalt."
      },
      {
        prompt: "Warum ist mündliche Weitergabe hier zentral?",
        options: [
          "Weil frühe Gesellschaften kein praktisches Wissen brauchten.",
          "Weil Orientierung, Jagd- und Umweltwissen gemeinschaftlich erinnert werden mussten.",
          "Weil Schrift immer verboten war."
        ],
        correctIndex: 1,
        explanation: "Erzählen und Erinnern sichern Überleben."
      }
    ]
  },
  "modul-5": {
    title: "Inhaltssicherung Modul 5",
    questions: [
      {
        prompt: "Warum ist Hararis Formel vom 'größten Betrug' didaktisch nützlich?",
        options: [
          "Weil sie zu einem abgewogenen Urteil über Landwirtschaft zwingt.",
          "Weil Landwirtschaft eindeutig nur negativ war.",
          "Weil danach keine Geschichte mehr passiert."
        ],
        correctIndex: 0,
        explanation: "Die Zuspitzung fordert differenziertes Abwägen heraus."
      },
      {
        prompt: "Welche Folge der Sesshaftigkeit ist zentral?",
        options: [
          "Mehr Überschüsse, aber auch neue Abhängigkeiten.",
          "Völlige Gleichheit in allen Gesellschaften.",
          "Ende jeder Arbeitsteilung."
        ],
        correctIndex: 0,
        explanation: "Das Modul betont gerade die Ambivalenz von Sicherheit und Abhängigkeit."
      },
      {
        prompt: "Was leistet 'Pfahlbauer von Pfyn' für das Modul?",
        options: [
          "Es macht jungsteinzeitlichen Alltag experimentell greifbar.",
          "Es behandelt nur moderne Technik.",
          "Es erklärt die Reformation."
        ],
        correctIndex: 0,
        explanation: "Experimentalarchäologie konkretisiert Sesshaftigkeit im Alltag."
      }
    ]
  },
  "modul-6": {
    title: "Inhaltssicherung Modul 6",
    questions: [
      {
        prompt: "Wofür wird frühe Schrift in diesem Modul besonders wichtig?",
        options: [
          "Vor allem für Verwaltung und Buchhaltung.",
          "Nur für Theaterstücke.",
          "Nur für private Briefe."
        ],
        correctIndex: 0,
        explanation: "Schrift erscheint hier zuerst als Verwaltungstechnik."
      },
      {
        prompt: "Welche Kombination stabilisiert frühe Staaten besonders?",
        options: [
          "Überschuss, Verwaltung, Schrift und Legitimation.",
          "Zufall und einzelne Heldengestalten allein.",
          "Nur gutes Wetter."
        ],
        correctIndex: 0,
        explanation: "Das Modul verbindet materielle und symbolische Ordnung."
      },
      {
        prompt: "Warum wird Ägypten als Fallbeispiel genutzt?",
        options: [
          "Weil Nil, Beamtentum und Schrift Langzeitstabilität erklären helfen.",
          "Weil Ägypten keine Verwaltung kannte.",
          "Weil Ägypten nichts mit Religion zu tun hatte."
        ],
        correctIndex: 0,
        explanation: "Genau diese Strukturfaktoren hebt die SRF-Ressource hervor."
      }
    ]
  },
  "modul-7": {
    title: "Inhaltssicherung Modul 7",
    questions: [
      {
        prompt: "Wie ordnen Imperien große Räume?",
        options: [
          "Über Infrastruktur, Militär, Recht und Verwaltung.",
          "Nur durch Gerüchte.",
          "Gar nicht, sie bestehen nur auf Karten."
        ],
        correctIndex: 0,
        explanation: "Das Modul erklärt Imperien als reale Ordnungsmodelle."
      },
      {
        prompt: "Was zeigt 'Römer in der Schweiz' besonders gut?",
        options: [
          "Wie Expansion Alltag, Verkehrswege und Kulturkontakt verändert.",
          "Dass die Römer ohne lokale Räume planten.",
          "Dass römische Herrschaft nur auf Tempeln beruhte."
        ],
        correctIndex: 0,
        explanation: "Die Ressource regionalisiert imperiale Strukturen."
      },
      {
        prompt: "Warum ergänzt das 'Römer-Experiment' das Modul sinnvoll?",
        options: [
          "Weil es römischen Alltag über rekonstruierte Praxis sichtbar macht.",
          "Weil es nur moderne Computerspiele erklärt.",
          "Weil es ausschließlich Diplomatie der Neuzeit behandelt."
        ],
        correctIndex: 0,
        explanation: "Alltagsgeschichte und materielle Kultur werden dadurch greifbar."
      }
    ]
  },
  "modul-8": {
    title: "Inhaltssicherung Modul 8",
    questions: [
      {
        prompt: "Warum kann Geld Menschen verbinden, die sich nicht kennen?",
        options: [
          "Weil es auf geteilter Akzeptanz und Vertrauen beruht.",
          "Weil jedes Metall automatisch wertvoll ist.",
          "Weil Geld keine politische Ordnung braucht."
        ],
        correctIndex: 0,
        explanation: "Das Modul erklärt Geld als Vertrauensordnung."
      },
      {
        prompt: "Was macht den Münzschatz von Ueken historisch bedeutsam?",
        options: [
          "Münzen verraten etwas über Umlauf, Herrschaft und Krisen.",
          "Er ist nur dekorativ.",
          "Sachquellen sagen grundsätzlich nichts aus."
        ],
        correctIndex: 0,
        explanation: "Der Fund wird als auswertbare Quelle gelesen."
      },
      {
        prompt: "Welche Funktion hat 'Grosse Völker' in diesem Modul?",
        options: [
          "Es erweitert Handel und Vernetzung über Rom hinaus.",
          "Es ersetzt alle Quellenkritik.",
          "Es behandelt nur lokale Dorfgeschichte."
        ],
        correctIndex: 0,
        explanation: "Fernhandel und Wissenstransfer werden dadurch breiter verortet."
      }
    ]
  },
  "modul-9": {
    title: "Inhaltssicherung Modul 9",
    questions: [
      {
        prompt: "Wie wird Religion im Modul verstanden?",
        options: [
          "Nur als private Meinung einzelner Menschen.",
          "Als Ordnungs- und Deutungssystem für große Gemeinschaften.",
          "Als Gegenteil jeder Vernetzung."
        ],
        correctIndex: 1,
        explanation: "Religion strukturiert Normen, Zugehörigkeit und Herrschaft."
      },
      {
        prompt: "Warum beginnt Hararis Religionskapitel mit Samarkand und Mekka?",
        options: [
          "Um Religion räumlich als Netzwerk und Begegnung sichtbar zu machen.",
          "Weil Europa im Mittelalter keine Rolle spielt.",
          "Weil dort keine Händler vorkamen."
        ],
        correctIndex: 0,
        explanation: "Pilgerorte und Märkte machen Vereinigungsprozesse konkret."
      },
      {
        prompt: "Was stützt 'Grosse Völker' in diesem Modul?",
        options: [
          "Die Verbindung von Wissensleistungen, Austausch und großen Kultur Räumen.",
          "Die Behauptung, Religion und Wissen seien immer getrennt.",
          "Nur die Geschichte einzelner Schlachten."
        ],
        correctIndex: 0,
        explanation: "Die Ressource öffnet den Blick auf arabische Wissens- und Vernetzungsräume."
      }
    ]
  },
  "modul-10": {
    title: "Inhaltssicherung Modul 10",
    questions: [
      {
        prompt: "Warum ist das Bild vom 'dunklen Mittelalter' zu simpel?",
        options: [
          "Weil das Mittelalter zugleich harte Lebensbedingungen und große kulturelle Leistungen zeigt.",
          "Weil im Mittelalter nichts Schwieriges geschah.",
          "Weil es nur Burgen und Feste gab."
        ],
        correctIndex: 0,
        explanation: "Das Modul arbeitet bewusst gegen einfache Klischees."
      },
      {
        prompt: "Was zeigt 'Mittelalter in der Schweiz' besonders gut?",
        options: [
          "Alltagsgeschichte mit Hygiene, Küche, Verteidigung und Statussymbolen.",
          "Nur abstrakte Philosophie.",
          "Ausschließlich antike Geschichte."
        ],
        correctIndex: 0,
        explanation: "Die Ressource erdet die Epoche in konkreten Lebensformen."
      },
      {
        prompt: "Welche Funktion hat 'Das verrückte Mittelalter' im Kurs?",
        options: [
          "Es dient als motivierender Einstieg, der anschließend differenziert wird.",
          "Es ersetzt alle vertiefenden Materialien vollständig.",
          "Es behandelt keine Hierarchien."
        ],
        correctIndex: 0,
        explanation: "Humorvoller Zugang und fachliche Nachschärfung gehören zusammen."
      }
    ]
  },
  "modul-11": {
    title: "Inhaltssicherung Modul 11",
    questions: [
      {
        prompt: "Warum eignet sich der Kinderkreuzzug für Quellenkritik?",
        options: [
          "Weil spektakuläre Überlieferungen geprüft werden müssen.",
          "Weil mittelalterliche Chroniken immer automatisch wahr sind.",
          "Weil Quellenkritik nur für die Neuzeit gilt."
        ],
        correctIndex: 0,
        explanation: "Das Modul trainiert genau das Prüfen von Überlieferung."
      },
      {
        prompt: "Was ergänzt Hararis Samarkand-Bild in diesem Modul?",
        options: [
          "Die Vorstellung einer vernetzten mittelalterlichen Welt.",
          "Die These, dass Märkte unwichtig waren.",
          "Die Idee völliger Isolation aller Regionen."
        ],
        correctIndex: 0,
        explanation: "Mittelalter erscheint hier als Kontakt- und Bewegungsraum."
      },
      {
        prompt: "Welche historische Grundfrage steht im Zentrum?",
        options: [
          "Welche Quellen gibt es und wie zuverlässig sind sie?",
          "Wie lautet die schönste Legende?",
          "Welche Erzählung ist am populärsten im Internet?"
        ],
        correctIndex: 0,
        explanation: "Quellenlage und Zuverlässigkeit stehen über bloßer Nacherzählung."
      }
    ]
  },
  "modul-12": {
    title: "Inhaltssicherung Modul 12",
    questions: [
      {
        prompt: "Welche Perspektivkorrektur leistet '1491' im Abschluss?",
        options: [
          "1492 ist Einschnitt, aber nicht Beginn aller Geschichte Amerikas.",
          "Amerika beginnt historisch erst mit Kolumbus.",
          "Vor 1492 gab es dort keine komplexen Gesellschaften."
        ],
        correctIndex: 0,
        explanation: "Die Ressource korrigiert eurozentrische Anfangspunkte."
      },
      {
        prompt: "Warum taucht das Anthropozän im Schluss erneut auf?",
        options: [
          "Um Langzeitfolgen früher Entwicklungen sichtbar zu machen.",
          "Weil der Kurs plötzlich keine Geschichte mehr behandelt.",
          "Weil nur Industriegeschichte zählt."
        ],
        correctIndex: 0,
        explanation: "Frühe Innovationen werden in ihren Fernwirkungen reflektiert."
      },
      {
        prompt: "Welche Langzeitlinie gehört eindeutig zur Kursbilanz?",
        options: [
          "Kooperation, Sesshaftigkeit und Vernetzung prägen viele Epochen.",
          "Geschichte verläuft völlig ohne wiederkehrende Muster.",
          "Nur einzelne Herrscher erklären alles."
        ],
        correctIndex: 0,
        explanation: "Das Abschlussmodul bündelt genau solche durchgehenden Linien."
      }
    ]
  }
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss");
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
  return [module.task.id, module.selftest.id, module.transfer.id, `${module.id}-content-check`];
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

function updateProgress(state) {
  const interactionIds = modules.flatMap((module) => getModuleInteractionIds(module));
  const total = interactionIds.length;
  const completed = interactionIds.filter((id) => Boolean(state[id])).length;
  const percentage = total ? (completed / total) * 100 : 0;
  document.getElementById("progress-label").textContent = `${completed} von ${total} Interaktionen bearbeitet`;
  document.getElementById("progress-bar").style.width = `${percentage}%`;
}

function createTimeline(state) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  modules.forEach((module) => {
    const link = document.createElement("a");
    const unlocked = isModuleUnlocked(state, module.number - 1);
    link.href = unlocked ? `#${module.id}` : "#";
    link.className = `${unlocked ? "" : "is-locked"} ${isModulePassed(state, module.id) ? "is-ready" : ""}`.trim();
    link.innerHTML = `<strong>Modul ${module.number}</strong><span>${module.phase}</span>`;
    timeline.appendChild(link);
  });
}

function createNavigation(state) {
  const nav = document.getElementById("module-nav");
  nav.innerHTML = "";
  modules.forEach((module) => {
    const link = document.createElement("a");
    const unlocked = isModuleUnlocked(state, module.number - 1);
    const score = getContentCheckScore(state, module.id);
    link.href = unlocked ? `#${module.id}` : "#";
    link.className = `${unlocked ? "" : "is-locked"} ${isModulePassed(state, module.id) ? "is-ready" : ""}`.trim();
    link.innerHTML = `<strong>${module.title}</strong><span>${module.era}${score ? ` · Sicherung ${Math.round(score)}%` : unlocked ? "" : " · gesperrt"}</span>`;
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
        <button class="btn ghost source-toggle" type="button">Didaktische Lesart</button>
      </header>
      <p><strong>Herausgelesen:</strong> ${source.extracted}</p>
      <div class="source-extra">
        <p><strong>Didaktisiert:</strong> ${source.didacticUse}</p>
      </div>
    </article>
  `;
}

function renderShortAnswerBox(task, kindLabel) {
  return `
    <div class="${kindLabel === "Transferfrage" ? "transfer-box" : "task-box"}">
      <p><strong>${kindLabel}:</strong> ${task.question}</p>
      <textarea data-answer="${task.id}" placeholder="${task.placeholder}"></textarea>
      <div class="${kindLabel === "Transferfrage" ? "transfer-actions" : "task-actions"}">
        <button class="btn primary" type="button" data-check="${task.id}">Antwort prüfen</button>
        <button class="btn ghost" type="button" data-show="${task.id}">Musterantwort zeigen</button>
      </div>
      <div class="feedback" data-feedback="${task.id}"></div>
    </div>
  `;
}

function renderSelftest(test) {
  const options = test.options
    .map(
      (option, index) => `
        <label class="radio-item">
          <input type="radio" name="${test.id}" value="${index}" />
          <span>${option.text}</span>
        </label>
      `
    )
    .join("");

  return `
    <div class="selftest-box">
      <p><strong>Selbsttest:</strong> ${test.question}</p>
      <div class="radio-list">${options}</div>
      <div class="selftest-actions">
        <button class="btn primary" type="button" data-selftest="${test.id}">Auswahl prüfen</button>
      </div>
      <div class="feedback" data-feedback="${test.id}"></div>
    </div>
  `;
}

function renderStoredFeedback(stored) {
  if (!stored) {
    return "";
  }

  return `<div class="feedback is-visible ${stored.level}"><strong>${stored.title}</strong><p>${stored.body}</p></div>`;
}

function renderContentCheck(module, state) {
  const check = contentChecks[module.id];
  const questions = check.questions
    .map((question, questionIndex) => {
      const options = question.options
        .map((option, optionIndex) => {
          const checked = state[`${module.id}-content-answer-${questionIndex}`] === optionIndex ? "checked" : "";
          return `
            <label class="radio-item">
              <input type="radio" name="${module.id}-content-${questionIndex}" value="${optionIndex}" ${checked} />
              <span>${option}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="check-question">
          <p><strong>${questionIndex + 1}.</strong> ${question.prompt}</p>
          <div class="radio-list">${options}</div>
        </div>
      `;
    })
    .join("");

  const storedFeedback = state[`${module.id}-content-feedback`];

  return `
    <div class="selftest-box">
      <p><strong>${check.title}:</strong> Erreiche mindestens 60 Prozent. Erst dann wird das nächste Modul freigeschaltet.</p>
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

function renderModules(state) {
  const list = document.getElementById("module-list");
  list.innerHTML = "";

  modules.forEach((module, moduleIndex) => {
    const unlocked = isModuleUnlocked(state, moduleIndex);
    const moduleProgress = getModuleProgress(state, module);
    const contentScore = getContentCheckScore(state, module.id);
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
          <h2>${module.title}</h2>
          <p class="lead">${module.hook}</p>
          <div class="goals">
            ${module.goals.map((goal) => `<div class="goal">${goal}</div>`).join("")}
          </div>
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

      ${
        unlocked
          ? ""
          : `<div class="module-lock-note"><p><strong>Gesperrt:</strong> Dieses Modul wird freigeschaltet, sobald du im vorherigen Modul in der Inhaltssicherung mindestens 60 Prozent erreichst.</p></div>`
      }

      <div class="module-grid">
        <section class="module-section">
          <p class="section-kicker">1. Einstieg</p>
          <p>${module.hook}</p>
        </section>

        <section class="module-section">
          <p class="section-kicker">2. Wissensinput</p>
          ${module.input.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>

        <section class="module-section">
          <p class="section-kicker">3. Interaktive Quelle / Karte / Bild</p>
          <p>${module.sourcePrompt}</p>
          <div class="source-grid">
            ${module.sources.map(renderSourceCard).join("")}
          </div>
        </section>

        <section class="module-section">
          <p class="section-kicker">4. Aufgaben</p>
          ${renderShortAnswerBox(module.task, "Aufgabe")}
        </section>

        <section class="module-section">
          <p class="section-kicker">5. Vertiefung</p>
          <p>${module.deepening}</p>
        </section>

        <section class="module-section">
          <p class="section-kicker">6. Selbsttest</p>
          ${renderSelftest(module.selftest)}
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
          <p class="section-kicker">9. Inhaltssicherung</p>
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
      <p><strong>Einsatzfunktion:</strong> ${source.role}</p>
      <p><strong>Didaktisierte Nutzung:</strong> ${source.didactics}</p>
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

function evaluateTask(answer, task) {
  const normalized = normalize(answer);
  const matched = task.criteria.filter((criterion) =>
    criterion.keywords.some((keyword) => normalized.includes(normalize(keyword)))
  );
  const missing = task.criteria.filter((criterion) => !matched.includes(criterion));

  if (!answer.trim()) {
    return {
      level: "low",
      title: "Noch keine auswertbare Antwort",
      body:
        "Schreibe zuerst eine eigene Formulierung. Nutze danach die Musterantwort nur zum Abgleich, nicht als Ersatz für den Denkweg."
    };
  }

  if (answer.trim().split(/\s+/).length < 18) {
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

function bindSourceToggles() {
  document.querySelectorAll(".source-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const extra = button.closest(".source-card").querySelector(".source-extra");
      extra.classList.toggle("is-open");
      button.textContent = extra.classList.contains("is-open")
        ? "Didaktische Lesart ausblenden"
        : "Didaktische Lesart";
    });
  });
}

function bindShortAnswerTasks(state) {
  const tasks = modules.flatMap((module) => [module.task, module.transfer]);
  tasks.forEach((task) => {
    const answerField = document.querySelector(`[data-answer="${task.id}"]`);
    const feedbackBox = document.querySelector(`[data-feedback="${task.id}"]`);
    const checkButton = document.querySelector(`[data-check="${task.id}"]`);
    const showButton = document.querySelector(`[data-show="${task.id}"]`);

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
        body: task.sampleAnswer
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
  modules.forEach((module) => {
    const test = module.selftest;
    const button = document.querySelector(`[data-selftest="${test.id}"]`);
    const feedbackBox = document.querySelector(`[data-feedback="${test.id}"]`);
    const selectedValue = state[`${test.id}-selected`];

    if (selectedValue !== undefined && selectedValue !== null) {
      const selectedInput = document.querySelector(`input[name="${test.id}"][value="${selectedValue}"]`);
      if (selectedInput) {
        selectedInput.checked = true;
      }
    }

    if (state[`${test.id}-feedback`]) {
      const stored = state[`${test.id}-feedback`];
      feedbackBox.className = `feedback is-visible ${stored.level}`;
      feedbackBox.innerHTML = `<strong>${stored.title}</strong><p>${stored.body}</p>`;
    }

    button.addEventListener("click", () => {
      const selected = document.querySelector(`input[name="${test.id}"]:checked`);

      if (!selected) {
        const result = {
          level: "low",
          title: "Noch keine Auswahl",
          body: "Wähle zuerst eine Antwortmöglichkeit aus und prüfe sie dann."
        };
        feedbackBox.className = "feedback is-visible low";
        feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
        state[`${test.id}-feedback`] = result;
        saveState(state);
        return;
      }

      const option = test.options[Number(selected.value)];
      const result = {
        level: option.correct ? "good" : "mid",
        title: option.correct ? "Treffer" : "Noch nicht ganz",
        body: option.feedback
      };
      feedbackBox.className = `feedback is-visible ${result.level}`;
      feedbackBox.innerHTML = `<strong>${result.title}</strong><p>${result.body}</p>`;
      state[test.id] = true;
      state[`${test.id}-selected`] = Number(selected.value);
      state[`${test.id}-feedback`] = result;
      saveState(state);
      renderApp(state);
    });
  });
}

function bindContentChecks(state) {
  modules.forEach((module) => {
    const button = document.querySelector(`[data-content-check="${module.id}"]`);
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const check = contentChecks[module.id];
      let correctCount = 0;

      check.questions.forEach((question, questionIndex) => {
        const selected = document.querySelector(`input[name="${module.id}-content-${questionIndex}"]:checked`);
        const selectedValue = selected ? Number(selected.value) : null;
        state[`${module.id}-content-answer-${questionIndex}`] = selectedValue;
        if (selectedValue === question.correctIndex) {
          correctCount += 1;
        }
      });

      const totalCount = check.questions.length;
      const percent = Math.round((correctCount / totalCount) * 100);
      const bestPercent = Math.max(percent, getContentCheckScore(state, module.id));
      const wrongDetails = check.questions
        .map((question, questionIndex) => {
          const selectedValue = state[`${module.id}-content-answer-${questionIndex}`];
          if (selectedValue === question.correctIndex) {
            return null;
          }

          return `${questionIndex + 1}. ${question.explanation}`;
        })
        .filter(Boolean);

      const body = percent >= 60
        ? `Du hast ${correctCount} von ${totalCount} Fragen richtig beantwortet und ${percent}% erreicht. Das nächste Modul ist jetzt freigeschaltet.${wrongDetails.length ? ` Prüfe trotzdem noch: ${wrongDetails.join(" ")}` : ""}`
        : `Du hast ${correctCount} von ${totalCount} Fragen richtig beantwortet und ${percent}% erreicht. Für die Freischaltung brauchst du mindestens 60%. Wiederhole besonders: ${wrongDetails.join(" ")}`;

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

function renderApp(state) {
  createTimeline(state);
  createNavigation(state);
  renderModules(state);
  renderSourceCatalog();
  bindSourceToggles();
  bindShortAnswerTasks(state);
  bindSelftests(state);
  bindContentChecks(state);
  updateProgress(state);
}

function init() {
  const state = loadState();
  renderApp(state);
}

init();
