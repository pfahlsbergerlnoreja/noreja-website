import type { Translations } from "../translations";

// German UI copy. Loaded on demand by src/lib/translationsLoader.ts, so a
// visitor only downloads the language of the page they are on.
export const de: Translations = {
  navigation: {
    home: "Startseite",
    functionalities: "Plattform",
    successStories: "Success Stories",
    partners: "Partner",
    pricing: "Preise",
    blog: "Blog",
    team: "Team",
    downloads: "Downloads",
    events: "Veranstaltungen",
    careers: "Karriere",
    definitions: "Definitionen",
    battleCards: "Battle Cards",
    faq: "FAQ",
    frontierAgents: "Process Frontier Agents",
    minerva: "Minerva AI",
    processes: "Prozesse",
    agents: "Agents",
    costOfInaction: "Cost of Inaction",
    smartDataForge: "Smart Data Forge",
    quickNavigation: "Schnellnavigation",
  },
  pages: {
    functionalities: {
      title: "Produkt",
      titleHighlight: "Funktionen",
      subtitle: "Von automatischer Analyse bis KI-gestützter Ursachenforschung – alles, was du brauchst, um Prozesse selbstverbessernd zu machen.",
      learnMore: "Klare Optionen –",
      learnMoreHighlight: "Erfahre was Noreja kostet",
      learnMoreSubtitle: "Vergleiche transparente Pakete und finde das Setup, das zu deinem Team passt.",
      learnMoreCta: "Zu den Preisen",
      learnMoreCtaComparison: "Anbietervergleich",
      videoHeadline: "Minerva AI im Detail",
      discoverVideoSeries: "Entdecke Minerva in unserer Videoreihe",
      capabilities: {
        dataCollection: {
          title: "Datenerfassung",
          description: "Intelligente Datensammlung aus mehreren Quellen mit automatisierter Verarbeitung und Echtzeit-Synchronisation. Unsere fortschrittlichen Algorithmen gewährleisten umfassende Abdeckung bei gleichzeitiger Wahrung der Datenintegrität und Compliance-Standards.",
          schematicTitle: "Datenfluss-Architektur",
          schematicDesc: "Multi-Source Datenaufnahme-Pipeline"
        },
        aiProcessing: {
          title: "KI-Verarbeitung",
          description: "Modernste Machine-Learning-Modelle, die deine Daten analysieren, klassifizieren und Erkenntnisse extrahieren. Unsere KI-Engine lernt kontinuierlich und passt sich an, um zunehmend präzise und relevante Ergebnisse zu liefern.",
          schematicTitle: "Neuronale Netzwerk-Pipeline",
          schematicDesc: "Erweiterte ML-Verarbeitungs-Workflow"
        },
        analyticsInsights: {
          title: "Analytics & Insights",
          description: "Verwandle Rohdaten in umsetzbare Erkenntnisse mit unserer umfassenden Analytics-Suite. Erstelle detaillierte Berichte, identifiziere Trends und treffe datengestützte Entscheidungen mit Vertrauen.",
          schematicTitle: "Analytics Dashboard",
          schematicDesc: "Echtzeit-Erkenntnisse Visualisierung"
        },
        automation: {
          title: "Automatisierung",
          description: "Optimiere deine Workflows mit intelligenter Automatisierung, die manuellen Aufwand reduziert und wiederkehrende Aufgaben eliminiert. Richte benutzerdefinierte Trigger und Aktionen ein, um deine Geschäftsprozesse zu optimieren.",
          schematicTitle: "Workflow-Engine",
          schematicDesc: "Automatisierte Prozess-Orchestrierung"
        },
        integration: {
          title: "Integration",
          description: "Verbinde dich nahtlos mit deinen bestehenden Tools und Systemen über unsere robuste API und vorgefertigte Integrationen. Gewährleiste einen reibungslosen Datenfluss durch deinen gesamten Technologie-Stack.",
          schematicTitle: "Integration Hub",
          schematicDesc: "System-Konnektivitäts-Matrix"
        },
        security: {
          title: "Sicherheit",
          description: "Sicherheitsfunktionen auf Unternehmensebene schützen deine Daten auf jeder Ebene. Mit Ende-zu-Ende-Verschlüsselung, Zugriffskontrollen und Compliance-Zertifizierungen bleiben deine Informationen sicher.",
          schematicTitle: "Sicherheits-Framework",
          schematicDesc: "Mehrschichtiges Schutzsystem"
        }
      }
    },
    successStories: {
      title: "Kunden",
      titleHighlight: "Success Stories",
      storiesSection: {
        title: "Kundenprojekte aus {industries} Branchen",
        text: "{companies} Unternehmen aus {industryList}. {published} davon sind als ausführliche Case Study veröffentlicht, die übrigen sind in Vorbereitung. Was sie verbindet: Am Anfang stand jedes Mal ein Prozess, dessen Verhalten niemand vollständig erklären konnte.",
      },
      subtitle: "Unsere Success Stories zeigen dir, wie andere Unternehmen mit Noreja Process Intelligence schneller, effizienter und datengetriebener arbeiten. Gewinne Einblicke, die du direkt auf deine eigenen Prozesse übertragen kannst.",
      readCaseStudy: "Success Story lesen",
      comingSoon: "Coming soon",
      backButton: "Zurück zu Success Stories",
      downloadSection: {
        title: "Noch unsicher?",
        subtitle: "Lese den ganzen Report in einem herunterladbaren PDF!",
        buttonLabel: "SUCCESS STORY HERUNTERLADEN"
      },
      pricingCta: {
        title: "Bereit loszulegen?",
        highlight: "",
        subtitle: "Entdecke unsere Preise und finde den passenden Plan für dein Unternehmen.",
        buttonLabel: "Zu den Preisen"
      },
      partnerSection: {
        title: "Starke Partner –",
        highlight: "echte Mehrwerte",
        subtitle: "Unsere Beratungs- und Implementierungspartner unterstützen dich dabei, noch mehr aus Noreja Process Intelligence herauszuholen. Entdecke, wie sie deine Projekte gezielt voranbringen.",
        buttonLabel: "Zu den Partnern"
      },
      useCasesSection: {
        title: "Branchen-Anwendungsfälle",
        subtitle: "Entdecke, wie Noreja Process Intelligence Prozesse in verschiedenen Branchen transformiert.",
        buttonLabel: "Mehr erfahren"
      }
    },
    useCases: {
      cta: {
        title: "Bereit, deine Prozesse zu transformieren?",
        description: "Entdecke, wie Noreja Process Intelligence deiner Organisation helfen kann, ähnliche Ergebnisse zu erzielen.",
        buttonLabel: "Jetzt starten",
        secondaryButtonLabel: "Success Stories ansehen"
      }
    },
    partners: {
      title: "Unsere",
      titleHighlight: "Partner",
      subtitle: "Unsere Partner unterstützen dich dabei, das volle Potenzial unserer Process-Intelligence-Plattform auszuschöpfen. Ob Beratung oder Implementierung – gemeinsam sorgen wir dafür, dass deine Prozesse nachhaltig besser werden.",
      strategicPartnerships: "Strategische Partnerschaften",
      trustedBy: "Vertraut von führenden Organisationen weltweit",
      visitWebsite: "Website besuchen",
      becomePartner: "Partner werden",
      partnerWithUs: "Partner werden",
      learnMore: "Mehr erfahren",
      partnerSubtitle: "Tritt unserem Ökosystem innovativer Partner bei und erschließe neue Möglichkeiten für Wachstum, Zusammenarbeit und gemeinsamen Erfolg.",
      successStoriesCta: {
        title: "Erfolgreiche Projekte –",
        highlight: "echte Ergebnisse",
        description: "Erfahre, wie Unternehmen mit Noreja Process Intelligence effizienter arbeiten – und was du daraus für deine eigenen Prozesse mitnehmen kannst.",
        buttonLabel: "Zu den Success Stories"
      },
      partnerDescriptions: {
        "1": "Aptean (ehem. Ramsauer & Stürmer) zählt zu den Big Playern am österreichischen Software- und Beratungsmarkt. Seit 1984 bietet das Unternehmen moderne ERP-Systeme mit Modulen für Rechnungswesen, HR, Einkauf, Lager und Auftragsverwaltung. Ergänzend erhält jeder Kunde individuelle Beratung an der Schnittstelle von Business und IT entlang der gesamten ERP-Journey.",
        "2": "Miragon ist eine Boutique-Beratung für Prozessmanagement, Process Mining und Automatisierung aus Augsburg. Sie unterstützt Unternehmen jeder Größe bei der Digitalisierung, dem Aufdecken von Ineffizienzen und dem Aufbau moderner Prozesskompetenzen. Als Technologie- und Implementierungspartner helfen sie Kunden, Process Mining optimal einzusetzen und ihre Prozessreife zu steigern.",
        "3": "Changeenablers Ltd ist eine Boutique-Beratungsfirma mit Schwerpunkt auf Business Process Management und Analytics. Sie nutzt vorrangig Process Mining, um Ursachen von Prozess-ineffizienzen zu identifizieren, Lösungen zu implementieren und die Prozess-gesundheit langfristig zu überwachen.",
        "4": "Die WAITS Software- und Prozessberatungsgesellschaft mbH ist ein innovatives Technologieunternehmen, das seit 1999 effiziente, sichere und nachhaltige Lösungen entwickelt. Das erfahrene Team unterstützt Kunden in der DACH-Region in allen Phasen von IT-Projekten. Als Fulfiller bietet WAITS nicht nur Beratung, sondern packt auch operativ mit an.",
        "5": "Die Nexigo GmbH ist ein erfahrenes deutsches Beratungsunternehmen mit über 20 Jahren Fokus auf digitale Prozesstransformation. Mit Expertise in Oxaion und Odoo unterstützt sie bei Analyse, Gestaltung und Umsetzung komplexer Anforderungen. Das Team setzt auf enge Zusammenarbeit und liefert nachhaltige, flexible Lösungen über die reine Implementierung hinaus – von Analyse bis Optimierung.",
        "6": "Die BOC Group ist ein führender Anbieter von Enterprise-Modelling-Software für Prozessoptimierung und digitale Transformation. Mit ADONIS, ADOIT und ADOGRC bietet sie flexible, integrierbare Lösungen für BPM, Enterprise Architecture und GRC. Über 1.500 Kunden weltweit vertrauen auf ihre benutzerfreundlichen, innovativen Tools.",
        "7": "Vienesse Consulting ist eine aufstrebende Wiener Beratung, die Kunden durch die daten- und prozessorientierte digitale Transformation begleitet. Mit Fokus auf Datenkultur, Transparenz und Vertrauen befähigt sie Unternehmen, moderne Tools optimal zu nutzen. Gemeinsam werden Change-Maßnahmen und Prozessanpassungen definiert, um Erkenntnisse nachhaltig in Unternehmenswert zu verwandeln.",
        "8": null,
        "9": null,
        "10": "Fortlane Partners ist eine international tätige Beratungsfirma mit Fokus auf Strategie, M&A und Transformation. Mit rund 150 Berater:innen an sechs Standorten in drei Ländern unterstützt sie Unternehmen bei komplexen Transaktionen und Change-Projekten.",
        "11": null,
        "12": "Das PwC-Scale-Programm vernetzt Startups, Corporates und Investoren. Wir sind stolz, Teil der B2B-Tech-Cohorte zu sein. Die Teilnahme ermöglicht es uns, unsere Vision und Technologien einem größeren Publikum zu präsentieren und gleichzeitig von PwCs Expertise zu profitieren. So entwickeln wir unsere Lösungen weiter und liefern Innovationen, die den Kundenbedarf treffen. ",
        "13": "Humboldt-Innovation verbindet Wissenschaft, Wirtschaft und Gesellschaft durch Dienstleistungen in angewandter Forschung, Gründungsförderung und Events. Als Tochter der Humboldt-Universität macht sie Forschung und Innovation zugänglich. Noreja ist als Humboldt-Startup gelistet und profitiert von diesem starken wissenschaftlichen Netzwerk.",
        "14": "Die WU Wien ist mit über 23.000 Studierenden Europas größte Wirtschaftsuniversität und zählt dank EQUIS-, AACSB- und AMBA-Akkreditierung zu den weltweit besten 1 %. 2.100 Mitarbeitende sichern höchste Qualität in Forschung und Lehre. Noreja ist ein Spin-off des Instituts für Daten-, Prozess- und Wissensmanagement mit Fokus auf BPM, Wissensmanagement, Decision Support und Semantic Web.",
        "15": "“Nährboden” ist das Startup-Programm von BRANDL & TALOS, einer der führenden österreichischen Kanzleien. Als Teil dieses Programms erhält Noreja Zugang zu umfassender Expertise. BRANDL & TALOS unterstützt Startups als Sparringspartner bei Finanzierung, Markteintritt, M&A, Venture Capital, Partnersuche und erfolgreichen Exits.",
        "20": "KBC ist eine international tätige Unternehmensberatung, die vollständig im Eigentum der an ihr beteiligten Partner steht. Seit 2007 entwickelt die KBC maßgeschneiderte Lösungen: Von der Strategie bis zum operativen Management – für international agierende Konzerne und den führenden Mittelstand, vor allem in Technologie- und Automobilbranchen.",
        "22": "Die MINAUTICS GmbH ist eine Full-Service-BPM-Beratung im deutschsprachigen Raum, die mit branchenübergreifender Erfahrung und spezialisierter Expertise – von Schulung und Beratung bis zur Umsetzung kompletter Implementierungsprojekte – nachweisbar wirksame Prozessverbesserungen für ihre Kunden erzielt."
      },
      partnerCategoryDescriptions: {
        technology: "Anbieter, deren Software direkt an Noreja andockt — Modellierung, Workflow-Ausführung und Datenhaltung greifen im Projekt ineinander.",
        software: "Softwareanbieter, mit denen wir integriert sind, damit Prozessdaten ohne manuellen Export zwischen den Systemen fließen.",
        consulting: "Beratungshäuser, die Noreja-Projekte beim Kunden umsetzen — von der Prozessaufnahme über den Proof of Value bis zum Rollout.",
        insurance: "Versicherungspartner, die Fachwissen zu Schaden-, Vertrags- und Rückstellungsprozessen einbringen.",
        advisory: "Beirät:innen, die unsere strategische Ausrichtung und den Weg in den Markt begleiten.",
        industry: "Anwenderunternehmen, die Noreja im eigenen Betrieb einsetzen und ihre Erfahrung in die Weiterentwicklung zurückspielen.",
        academic: "Forschungspartner, aus deren Arbeit die methodischen Grundlagen des Causal Process Mining stammen — und mit denen wir sie weiterentwickeln.",
        legal: "Kanzleien, die Vertrags-, Datenschutz- und Compliance-Fragen rund um Prozessdaten begleiten.",
        incubator: "Programme und Netzwerke, die Noreja beim Aufbau des Unternehmens und beim Zugang zu Enterprise-Kunden unterstützt haben.",
        uncategorized: "Weitere Partner, mit denen wir projektbezogen zusammenarbeiten."
      },
      partnerCategories: {
        technology: "Technologie",
        software: "Software",
        consulting: "Beratung",
        insurance: "Versicherung",
        advisory: "Advisory",
        industry: "Industrie",
        academic: "Akademisch",
        legal: "Rechtlich",
        incubator: "Inkubator",
        uncategorized: "Weitere Partner"
      }
    },
    pricing: {
      title: "Transparente Preise, klare Lösungen",
      subtitle: "Wähle das Paket, das zu deinen Bedürfnissen passt. Wir helfen dir bei der Auswahl – schnell und transparent.",
      composition: {
        title: "So setzt sich dein Preis zusammen",
        text: "Drei Komponenten bestimmen den Preis. Erstens die Datenmenge, gemessen in Graphen-Nodes. Zweitens die Perspektiven — die Zahl der Sichten, unter denen du denselben Prozess betrachtest. Drittens wählst du unten eines der drei Pakete. Das Paket legt den Preis pro Power-User fest und bringt eine feste Mindestanzahl mit: drei bei Core, sechs bei Pro, zehn bei Excellence. Weitere Power-User lassen sich jederzeit ergänzen.",
      },
      teamSize: "Teamgröße:",
      dataVolume: "Datenvolumen:",
      dataAmount: "Datenmenge",
      perspectives: "Perspektiven",
      dataAmountSuffix: ", anhand von Graphen-Nodes:",
      perspectivesSuffix: ", also Sichten auf den Prozess:",
      dataAmountTooltip: "Graphen-Nodes sind die kleinste Speichereinheit in unserer Datenbank. Ein Node entspricht vereinfacht einem Event. Auch Chunks aus importierten Dokumenten und Text werden als Nodes abgespeichert.",
      perspectivesTooltip: "Eine Perspektive (oder Dimension) ist eine vom User definierte Sicht auf den Prozess und kann individuell angelegt werden. I.d.R. findet die Abgrenzung anhand von Prozessgrenzen oder Verantwortlichkeiten statt.",
      usersTooltip: "Power-User sind vollständig lizenzierte Editoren. Lesende Nutzer können zusätzlich ergänzt werden.",
      users: "Benutzer",
      user: "Nutzer",
      extraPowerUserPrice: "Extra User auf Anfrage zubuchbar",
      additionalPowerUsersLabel: "Zusätzliche Power-User",
      readingUsers: "{count} lesende Nutzer",
      mostPopular: "Am beliebtesten",
      month: "/ Monat",
      perMonthAndUser: "pro Monat und Power-User",
      perYear: "pro Jahr",
      annualCostTooltip: "Berechnete Gesamtkosten pro Jahr für das Paket, basierend auf der gewählten Datenmenge und den Perspektiven.",
      perUserCostTooltip: "Monatlicher Gesamtpreis geteilt durch die {count} im Paket enthaltenen Power-User.",
      year: " /Jahr",
      onRequest: "Auf Anfrage",
      viewAllFeatures: "Alle Features anzeigen",
      contactUs: "Kontakt aufnehmen",
      footerNote: "Alle Pläne beinhalten 14-tägige kostenlose Testversion • Keine Einrichtungsgebühren • Jederzeit kündbar",
      statisticsNote: "*Durchschnittswerte aus realisierten Kundenprojekten. Abweichungen sind abhängig von Prozessreife, Unternehmensgröße und Branche möglich.",
      statisticsBox: {
        lines: [
          "Entdecke ca. {costDriverPercent} der versteckten Kostentreiber in deinen Prozessen. Spare ca. {ftePercent} der FTE für die Prozessanalyse.*"
        ]
      },
      categories: {
        feature: "Feature",
        users: "Nutzer",
        aiTokens: "KI-Minerva-Token",
        service: "Service",
        onboarding: "Onboarding",
        llmAi: "LLM + AI",
        supportRate: "Zusatz"
      },
      privateLLMHosting: "Privates LLM Hosting by Noreja",
      proofOfValue: {
        eyebrow: "So arbeiten wir mit dir",
        title: "Starte mit einem Proof-of-Value",
        text: "Jede Lizenz beginnt mit einem zweimonatigen Proof-of-Value. Danach entscheidest du: weitermachen oder aussteigen. Dein Risiko bleibt gering, deine Kosten bleiben planbar.",
        povTitle: "Proof-of-Value",
        povDuration: "2 Monate",
        months: ["Start", "Monat 1", "Monat 2"],
        milestones: [
          "Kick-off & Datenanbindung",
          "Onboarding des ersten Prozesses",
          "Erste Insights & Value-Nachweis"
        ],
        decisionTitle: "Entscheidung",
        decisionSub: "nach 2 Monaten",
        continueLabel: "Option A",
        continueTitle: "Lizenz läuft weiter",
        continuePrice: "Voller Lizenzpreis",
        continueText: "Der Proof-of-Value wird vollständig auf die Lizenz angerechnet. Das Onboarding deines ersten Prozesses ist damit bereits zum Großteil erledigt.",
        continueTag: "PoV wird angerechnet",
        optOutLabel: "Option B",
        optOutTitle: "Opt-Out",
        optOutPrice: "Fixbetrag 12.500 €",
        optOutText: "Du kündigst zum Ende des Proof-of-Value und zahlst einmalig den Fixbetrag.",
        benefits: [
          { title: "Geringes Risiko", text: "Nach zwei Monaten ist der Ausstieg zum Fixbetrag möglich." },
          { title: "Planbare Kosten", text: "Beide Wege und ihre Kosten stehen von Anfang an fest." },
          { title: "Angerechnet statt verloren", text: "Der PoV zählt voll auf die Lizenz und das Onboarding ist schon erledigt." }
        ]
      },
      faq: {
        title: "Häufig gestellte Fragen",
        subtitle: "Finde Antworten auf häufige Fragen zu unseren Preisen und Plänen",
        linkLabel: "Alle Fragen im FAQ ansehen",
      },
      plans: {
        core: {
          name: "Core",
          description: "Mit den Kernfeatures des Causal Process Minings und initialen Support bei der Datenanbindung.",
          statistics: {
            costDriverPercent: "25%",
            ftePercent: "19%"
          },
          features: [
            "Dashboard",
            "Analyzer",
            "Builder"
          ],
          users: "3 Power-User",
          aiTokens: [
            "Keine KI-Token inkludiert",
            "Verbrauchsbasierte Abrechnung"
          ],
          services: [
            "Data-Onboarding Workshop (2x p.a.)",
            "14-tägige Value-Support Session (45 Min.)",
            "Tagessatz für zusätzlichen Support: 1.250€ pro Tag"
          ],
          onboarding: [
            "Zugang zu Schulungsunterlagen per Video und Noreja-Docs"
          ],
          llmAi: [],
          cta: "Kostenlose Testversion starten"
        },
        pro: {
          name: "Pro",
          description: "Mit fortgeschrittenen KI-Features durch Minerva-AI und durchgehendem Support in der Discovery",
          statistics: {
            costDriverPercent: "39%",
            ftePercent: "26%"
          },
          features: [
            "alles aus CORE",
            "AI Hub",
            "  Agent-Builder",
            "  Skill-Builder",
            "  Workspace-Manager",
            "Context Hub",
            "Connectivity Hub"
          ],
          users: "6 Power-User",
          aiTokens: [
            "Token im Wert von 1.250€ pro Jahr inkludiert",
            "Darüber hinaus verbrauchsbasiert"
          ],
          services: [
            "Data-Onboarding Workshop (3x p.a.)",
            "Prozessoptimierungs-Workshop (1x p.a.)",
            "Kontext-Erfassungs-Workshop (1x p.a.)",
            "14-tägige Value-Support Session (90 Min.)",
            "Tagessatz für zusätzlichen Support: 950€ pro Tag"
          ],
          onboarding: [
            "3-tägige Online-Schulung durch Noreja-Experten inkludiert"
          ],
          llmAi: [
            "Minerva-AI",
            "(Einzel-) LLM"
          ],
          cta: "Kostenlose Testversion starten"
        },
        excellence: {
          name: "Excellence",
          description: "Für hochkomplexes Reasoning inkl. Multi-LLM-Option und intensiver Begleitung bei der Value-Realization",
          statistics: {
            costDriverPercent: "44%",
            ftePercent: "32%"
          },
          features: [
            "alles aus PRO",
            "Workbench",
            "Macro Builder"
          ],
          users: "10 Power-User",
          aiTokens: [
            "Token im Wert von 3.000€ pro Jahr inkludiert",
            "Darüber hinaus verbrauchsbasiert"
          ],
          services: [
            "Data-Onboarding Workshop (4x p.a.)",
            "Prozessoptimierungs-Workshop (2x p.a.)",
            "Kontext-Erfassungs-Workshop (1x p.a.)",
            "Prozess-Strategie-Workshop mit Partnerunternehmen (1x p.a.)",
            "Wöchentliche Value-Support Session (60 Min.)",
            "Kunden-spezifische KPIs/Agent-Entwicklung (2x p.a.)",
            "Tagessatz für zusätzlichen Support: 850€ pro Tag"
          ],
          onboarding: [
            "6 Schulungstage durch Noreja-Experten inkludiert"
          ],
          llmAi: [
            "alles aus PRO",
            "Multi-LLM"
          ],
          cta: "Kontakt aufnehmen"
        }
      },
      successStoriesCta: {
        title: "Was heißt Noreja",
        highlight: "in der Praxis?",
        description: "Erfahre anhand konkreter Projekte, welche Effekte Process Intelligence wirklich bringt, jenseits von Feature-Listen.",
        buttonLabel: "Erfolgreiche Projekte ansehen"
      }
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Wir freuen uns auf deine Nachricht. Kontaktiere unser Team für Fragen, Kooperationen oder Produktdemos.",
      reasonsTitle: "Weswegen Menschen uns schreiben",
      reasons: [
        { title: "Demo oder Proof of Value", text: "Wir drehen den Loop einmal mit deinen Daten und zeigen an einem deiner Prozesse, was darin steckt — inklusive gerechnetem Business Case. Die meisten Kunden starten mit einem Proof of Value zum Fixpreis auf einem Teilprozess." },
        { title: "Preise und Pakete", text: "Welches der drei Pakete zu deiner Datenmenge und der Zahl deiner Prozessperspektiven passt, klärt sich meist am schnellsten in einem kurzen Gespräch." },
        { title: "Partnerschaft", text: "Beratungs-, Technologie-, Industrie- und Forschungspartner setzen Noreja-Projekte gemeinsam mit uns um — vom Proof of Value bis zum Rollout." },
        { title: "Fachfragen", text: "Kausales Process Mining, Event Knowledge Graphs oder die Abgrenzung zu frequenzbasierten Process-Mining-Tools: frag direkt nach, oder lies in unseren Definitionen und Anbietervergleichen weiter." },
      ],
      salesContact: {
        greeting: "Ich spreche gerne mit dir",
        intro: "Ob Demo, Proof of Value oder ein erster Blick auf einen deiner Prozesse: Ruf mich an oder nutze das Formular — ich melde mich persönlich bei dir.",
        callLabel: "Ruf mich an",
        hello: "Servus!",
        questionsLabel: "Fragen, die ich jeden Tag höre",
        questions: [
          "Was bedeutet Process Mining eigentlich?",
          "Wie schnell können wir starten?",
          "Welche Probleme löst ihr?",
          "Funktioniert das mit unserem SAP?",
          "Was kostet ein Proof of Value?",
          "Was ist kausales Process Mining?",
          "Wie viel Aufwand ist das für unsere IT?",
          "Was machen die Minerva Agents?"
        ],
        reply: "Alles gute Fragen — die beantworte ich dir am liebsten persönlich. Ruf einfach an!"
      },
      formTitle: "Lieber schriftlich?",
      bookCallText: "Lieber direkt einen Termin buchen?",
      bookCallButton: "Termin buchen",
      responseNote: "Wir antworten in der Regel innerhalb von 24 Stunden.",
      formLoading: "Kontaktformular wird geladen…",
      formError: "Das Kontaktformular konnte nicht geladen werden. Bitte lade die Seite neu oder schreibe uns an hello@noreja.com."
    },
    aiAgents: {
      title: "Minerva Frontier Agents",
      subtitle: "KI-Agenten, die deine Prozesse eigenständig verstehen und kontinuierlich weiterentwickeln – datenbasiert, kontextsensitiv und immer am Puls deiner Organisation.",
      cards: {
        card1: {
          title: "Builder Benny",
          description: "Schlägt Änderungen am Prozessmodell vor. Hilft, Schemaänderungen in deinen Datenquellen zu erkennen, und überwacht Datenimporte sowie deren Performance.",
          efficiencyTag: "~40% schnellere Modellanpassungen"
        },
        card2: {
          title: "Analyst Andy",
          description: "Behält deine Prozess-Performance im Blick, identifiziert Ursachen für Abweichungen und schlägt Optimierungspotenziale in den Prozessen vor.",
          efficiencyTag: "~35% weniger Analyseaufwand"
        },
        card3: {
          title: "Compliance Conny",
          description: "Überwacht Compliance-Themen und validiert die Prozessausführung anhand von Kontextdaten. Erstellt Compliance-Reports für Stakeholder.",
          efficiencyTag: "~30% geringere Compliance-Review-Aufwände"
        }
      },
      waitlistCta: {
        title: "Sei unter den Ersten",
        subtitle: "Trag dich auf die Warteliste ein und erhalte frühzeitig Zugang zu unseren KI-Agenten.",
        buttonLabel: "Auf die Warteliste"
      },
      frontierAgentsExplainer: {
        title: "Was sind Frontier Agents?",
        paragraph1: "Frontier Agents sind autonom arbeitende, KI-gestützte Agents innerhalb von Noreja, die im Hintergrund kontinuierlich an einer **konkreten Fragestellung** arbeiten. Statt nur auf einzelne, manuelle Analysen zu reagieren, verfolgen sie ein Ziel über längere Zeit hinweg: Sie beobachten Entwicklungen, erkennen Veränderungen, prüfen Hypothesen und liefern proaktiv Ergebnisse – immer bezogen auf den Prozess- und Wissenskontext, der in Noreja verfügbar ist.",
        paragraph2: "Ein wichtiger Punkt dabei: Frontier Agents sind **keine einmaligen „Abfragen\"**, sondern eher digitale Teammitglieder, die **dauerhaft „dranbleiben\"**. Sie analysieren fortlaufend Daten und Modelle, behalten definierte Kennzahlen oder Regeln im Blick und melden sich, sobald sich etwas Relevantes ergibt – z. B. wenn die Prozess-Performance abweicht, wenn sich Datenquellen verändern oder wenn Compliance-Risiken entstehen."
      }
    }
  },
  hero: {
    badge: "Generative Process Intelligence",
    headingFixed: "Noreja macht Prozesse",
    headingWords: ["transparent", "verständlich", "effizient", "compliant"],
    title: "Die Zukunft der",
    titleHighlight: "Innovation",
    subtitle: "Verborgene Prozesspotenziale mit der Power von GenAI heben und zum kontinuierlichen ROI-Treiber machen. Enterprise-Technologie für Effizienz im Mittelstand.",
    ctaPrimary: "Loslegen",
    ctaSecondary: "Mehr erfahren",
    getStarted: "Demo buchen",
    learnMore: "Mehr erfahren",
    features: {
      secure: "Sicher",
      fast: "Schnell",
      innovative: "Innovativ"
    },
    dataCollection: {
      title: "Datenerfassung",
      description: "Intelligente Datensammlung aus mehreren Quellen"
    }
  },
  functionalities: {
    title: "Eine Plattform —",
    titleHighlight: "mit KI-gestützer Process Intelligence",
    subtitle: "Mit unserer Plattform erhältst du vollständige Transparenz über deine Prozesse – übersichtlich, datenbasiert und in Echtzeit. KI unterstützt dich dabei, Potenziale zu erkennen und nachhaltige Verbesserungen umzusetzen.",
    exploreFeatures: "Alle Features erkunden",
    dataCollection: {
      title: "Datenerfassung",
      description: "Erweiterte Datensammlung und -verarbeitung mit Echtzeit-Synchronisation.",
    },
    aiProcessing: {
      title: "KI-Verarbeitung",
      description: "Intelligente Automatisierung und Machine-Learning-Algorithmen für verbesserte Entscheidungsfindung.",
    },
    analyticsInsights: {
      title: "Analytics & Insights",
      description: "Umfassendes Analytics-Dashboard mit umsetzbaren Erkenntnissen und prädiktiver Analytik.",
    },
    automation: {
      title: "Automatisierung",
      description: "Optimierte Workflow-Automatisierung zur Steigerung der Effizienz und Reduzierung manueller Aufgaben.",
    },
    integration: {
      title: "Integration",
      description: "Nahtlose Integration mit bestehenden Systemen und Drittanbieter-Anwendungen.",
    },
    security: {
      title: "Sicherheit",
      description: "Sicherheitsmaßnahmen auf Unternehmensebene zur Gewährleistung von Datenschutz und Compliance.",
    },
    features: {
      aiAnalytics: {
        title: "Minerva",
        description: "Minerva ist dein kontextsensitiver AI-Assistent: Er verbindet Prozessdaten mit zusätzlichem Wissen wie SLAs, organisationalen Regeln oder externen Einflüssen und liefert dadurch Antworten, die über klassische Event-Logs hinausgehen.\n\n Ob Fragen zur Plattform, Auffälligkeiten im Analyzer oder Optimierungsideen: Minerva analysiert direkt auf deinen Knowledge Graphs und erklärt, warum Muster entstehen und wie Prozesse verbessert werden können. Du entscheidest selbst, welche Modelle genutzt werden: Noreja-Hosted, eigene On-Prem-LLMs oder geprüfte Cloud-Modelle. Alles datenschutzkonform und vollständig kontrollierbar. Kurz: Minerva macht Prozesse nicht nur sichtbar, sondern verständlich."
      },
      dataIntegration: {
        title: "Analyzer",
        description: "Der Analyzer ist dein interaktiver Workspace, um jeden Prozessschritt präzise zu untersuchen. Auf dem zentralen Canvas visualisierst du den echten End-to-End-Ablauf, während Variantenlisten, KPIs und Darstellungsebenen dir helfen, Muster, Engpässe und Abweichungen schnell aufzudecken.\n\n Wähle unterschiedliche Perspektiven wie Prozess-, Case-, Pattern- oder Timeline-View und steuere, welche Informationen in den Fokus rücken: Durchlaufzeiten, Rework, Verstöße, hypothetische Pfade oder Detailkennzahlen auf Aktivitäts- und Pfadebene. Mit wenigen Klicks gehst du von der Gesamtübersicht in die Feinanalyse einzelner Fälle oder exportierst deine Erkenntnisse direkt als BPMN-Modell oder hochauflösende Visualisierung.\n\n Der Analyzer verbindet explorative Analyse mit klarer Struktur: ein einziger Ort, um Prozesse zu verstehen, Ursachen sichtbar zu machen und bessere Entscheidungen zu treffen."
      },
      security: {
        title: "Dashboard",
        description: "Behalte zentrale Prozesskennzahlen, Trends und Auffälligkeiten jederzeit im Blick. Das Dashboard kombiniert unterschiedliche Widgets, damit du Volumen, Zeiten, Varianten, Abweichungen und Entwicklungen schnell erfassen kannst. Stelle dir deine Ansicht flexibel zusammen: von einfachen KPIs über Verteilungen und Trendindikatoren bis hin zu konfigurierbaren Analysen. So entsteht ein klarer Überblick über die Performance deines Prozesses, genau abgestimmt auf deine Fragestellungen."
      },
      realTime: {
        title: "Builder",
        description: "Der Builder ist deine Schaltzentrale für jede analytische Grundlage: Hier verbindest du Datenquellen, modellierst Ereignisse und definierst Dimensionslogiken, die später Dashboards, Analyzer und AI-Features antreiben.\n\n Egal ob ServiceNow, PostgreSQL, Oracle oder REST-APIs. Jeder Connector lässt sich in wenigen Schritten einrichten, testen und aktuell halten. In klar strukturierten Übersichten siehst du sofort, welche Quellen aktiv sind, welche Entity Graphs importiert wurden und in welchem Zustand deine Dimensionsmodelle stehen. Mit Drag-and-Drop baust du Ereignisgraphen, definierst Timestamps, Properties und komplexe Beziehungen, inklusive Validierung und transparentem SQL-Einblick.\n\n Dimensionen modellierst du direkt auf Basis deiner Events: Aktivitäten platzieren, kausale Pfade ziehen, Filter definieren und importieren. So entsteht ein konsistentes, semantisch sauberes Modell, das deine Teams später intuitiv analysieren können. Der Builder kombiniert technische Präzision mit schneller Iteration, ein einziger Arbeitsraum, um Rohdaten in ein verlässliches, wiederverwendbares Prozessmodell zu verwandeln."
      },
      workbench: {
        title: "Workbench",
        description: "Die Workbench ist dein technisches Labor: ein voll integriertes Jupyter Notebook direkt auf dem Noreja-Knowledge-Graph. Data Scientists, Engineers und Analyst:innen können hier mit Python arbeiten, als säßen sie in ihrer gewohnten Notebook-Umgebung, nur eben direkt an der Graph-Datenbank.\n\n Schreibe Skripte, teste Hypothesen, baue eigene KPIs, Modelle oder Data-Pipelines und speichere deine Notebooks für wiederholbare, hochgradig maßgeschneiderte Analysen. So lassen sich Explorationscode, produktionsnahe Auswertungen und Dokumentation in einem Schritt verbinden\n\n Jede Nutzer:in erhält eine eigene Workbench-Instanz, Admins behalten über ein zentrales Management-Panel den Überblick und können Instanzen bei Bedarf starten, stoppen oder aufräumen. Kurz: Die Workbench bringt echte Data-Science-Power dorthin, wo deine Prozessdaten liegen, ohne Tool-Brüche und ohne Umwege."
      }
    },
    teaserFeatures: {
      aiAnalytics: {
        title: "Minerva",
        description: "Dein KI-gestützter Prozess-Analyst. Minerva kombiniert Prozessdaten mit Kontextwissen, um Ursachen zu erkennen und fundierte Handlungsempfehlungen zu geben."
      },
      dataIntegration: {
        title: "Analyzer",
        description: "Tauche tief in deine Prozesse ein, verstehe Zusammenhänge und finde schnell heraus, wo und warum Probleme entstehen – datenbasiert und nachvollziehbar."
      },
      security: {
        title: "Dashboard",
        description: "Präsentiere deine Prozess-Insights klar und kompakt oder nutze das Dashboard, um Veränderungen und Verbesserungen kontinuierlich zu überwachen."
      },
      realTime: {
        title: "Builder",
        description: "Importiere Daten direkt, ohne Event-Logs – ergänze Wissen, Hypothesen oder Kontextdaten mit wenigen Klicks. So behältst du volle Kontrolle über deine Analyse."
      },
      workbench: {
        title: "Workbench",
        description: "Erweitere deine Analysen mit individuellen Skripten im integrierten Jupyter Notebook – ohne die Anwendung zu verlassen. Deine Daten bleiben immer bei dir."
      }
    },
    frontierAgentsCta: {
      title: "Entdecke Minerva Frontier Agents",
      subtitle: "Autonome KI-Agenten, die deine Abläufe analysieren, entscheiden und gemeinsam mit deinem Team optimieren.",
      buttonLabel: "Mehr erfahren"
    }
  },
  processGraph: {
    heading: "Der kausale Prozessgraph, live",
    lede: "Statt eines flachen Event-Logs rekonstruiert Noreja deinen Prozess als Graph kausal verknüpfter Schritte. Zieh an einem Knoten, um zu sehen, was daran hängt — das Befundpanel zeigt, was die Analyse in einem Order-to-Cash-Prozess findet.",
    /* English on purpose - only the key label differs (STRG vs CTRL) */
    hint: "Click, move, hold, and STRG scroll",
    findingsHeader: "BEISPIELBEFUNDE · ORDER TO CASH",
    findings: [
      { title: "Lange Wartezeit bei Schritt Rechnung", meta: "Ø 6,4 Tage Liegezeit · 12.310 Fälle" },
      { title: "Verstoßmuster in den Mahnstufen", meta: "3 Stufen übersprungen · 8 % der Forderungen" },
      { title: "54.000 € gebundenes Working Capital gefunden", meta: "Zahlungsziel überschritten · DSO +11 Tage" },
      { title: "Nacharbeitsschleife bei der Kreditprüfung", meta: "1,8 Wiederholungen je Auftrag" },
      { title: "Doppelte Rechnungsbuchungen erkannt", meta: "216 Fälle · 91.400 € Exposure" },
      { title: "Manuelle Preisänderung vor der Fakturierung", meta: "4.120 Fälle · Freigabe fehlt" },
      { title: "Skonto nicht genutzt", meta: "27 % der Rechnungen · 18.700 € entgangen" },
      { title: "Lieferung nach Kreditlimit blockiert", meta: "Ø 3,1 Tage zusätzliche Durchlaufzeit" }
    ]
  },
  usps: {
    title: "Vier Stärken —",
    highlight: "ein klarer Vorteil",
    subtitle: "Leistungsmerkmale geben dir volle Transparenz, höhere Effizienz und mehr Kontrolle über deine Prozesse. Entdecke die vier Kernbereiche, die für dich den entscheidenden Unterschied machen.",
    cta: "Sprich mit unseren Experten",
    tapToLearnMore: "Tippen, um mehr zu erfahren",
    features: {
      connectionSpeed: {
        title: "Schnelle Anbindung",
        description: "Die Datenanbindung funktioniert ohne Zwischenschritte wie einem Event-Log. Der Builder verbindet sich direkt zu den Tabellen der (relationalen) Datenbanken. Dies beschleunigt die Datenanbindung im Vergleich zu herkömmlichen Lösungen enorm."
      },
      realisticResults: {
        title: "Realitätsgetreue Ergebnisse",
        description: "Die Prozessanalyse berücksichtigt komplexe Zusammenhänge des Datenschemas der zugrunde liegenden Quellsysteme. Dies macht die Analysen realistischer und umgeht die Schwächen herkömmlicher Lösungen."
      },
      multidimensionalPerspectives: {
        title: "Multidimensionale Perspektiven",
        description: "Die Prozessanalyse kann multidimensional durchgeführt werden. Benutzer können zusätzliche Ansichten auf der Grundlage verschiedener Geschäftsobjekte hinzufügen, z.B. einer Bestellnummer, einer Benutzer-ID oder einer Rechnungsnummer."
      },
      contextDomainKnowledge: {
        title: "Kontext- und Domänenwissen",
        description: "Durch die Integration von Kontext- und Domänenwissen (unstrukturierte Texte) kann ein direkter Abgleich zwischen dem SOLL- und dem IST-Zustand eines Prozesses vorgenommen werden. Zudem kann die KI-Prozessanalysen mit Kontext besser einschätzen und die richtigen Implikationen ableiten."
      }
    }
  },
  integrations: {
    badge: "Integrationen",
    title: "Flexible Anbindung —",
    titleHighlight: "grenzenlose Datenintegration",
    subtitle: "Dank zahlreicher Connectoren bindest du Daten aus verschiedensten Quellsystemen im Handumdrehen an. So schaffst du dir eine durchgängige und verlässliche Basis für deine Prozessanalysen. Noreja bindet quasi alle bekannten relationalen Datenbanktechnologien an. Zudem können Daten über gängige REST-APIs angebunden werden. Einzelnen Datenquellen können anschließend miteinander verbunden werden, um ganze Ende-zu-Ende Prozessketten abbilden zu können.",
    discoverIntegrations: "Integrationen entdecken"
  },
  process: {
    title: "Wie es funktioniert",
    subtitle: "Unser optimierter Ansatz gewährleistet maximale Effizienz und optimale Ergebnisse.",
    steps: {
      collect: {
        title: "Sammeln",
        description: "Sammle und organisiere Daten aus mehreren Quellen mit automatisierten Sammelprozessen.",
      },
      process: {
        title: "Verarbeiten",
        description: "Wende fortschrittliche Algorithmen und KI an, um Rohdaten in umsetzbare Erkenntnisse zu verwandeln.",
      },
      analyze: {
        title: "Analysieren",
        description: "Erstelle umfassende Berichte und Visualisierungen für fundierte Entscheidungsfindung.",
      },
      optimize: {
        title: "Optimieren",
        description: "Verbessere kontinuierlich Prozesse basierend auf Leistungsmetriken und Feedback.",
      },
      processing: {
        title: "KI-Verarbeitung",
        description: "Fortschrittliche Machine-Learning-Algorithmen analysieren Muster"
      },
      security: {
        title: "Sicherheitsebene",
        description: "Sicherheit und Compliance auf Unternehmensebene"
      },
      analysis: {
        title: "Musteranalyse",
        description: "Deep Learning identifiziert komplexe Datenbeziehungen"
      },
      optimization: {
        title: "Optimierung",
        description: "Kontinuierliche Leistungsverbesserung"
      },
      encryption: {
        title: "Datenverschlüsselung",
        description: "Schutz auf militärischem Niveau für sensible Informationen"
      },
      deployment: {
        title: "Bereitstellung",
        description: "Nahtlose Integration in deine Systeme"
      },
      users: {
        title: "Benutzererfahrung",
        description: "Intuitive Benutzeroberfläche für maximale Produktivität"
      }
    },
  },
  partners: {
    title: "Echte Einblicke —",
    titleHighlight: "Stimmen aus der Praxis",
    subtitle: "Unsere Kunden und Partner berichten, wie sie mit Process Intelligence echte Verbesserungen erzielen. Lass dich von ihren Erfahrungen und Erfolgen inspirieren.",
    viewAll: "Alle Partner anzeigen",
    viewAllPartners: "Alle Partner anzeigen",
    stats: {
      clients: "Unternehmenskunden",
      countries: "Länder",
      users: "Benutzer weltweit"
    }
  },
  blog: {
    title: "Relevante Themen —",
    titleHighlight: "kompakt aufbereitet",
    subtitle: "In unserem Blog findest du Best Practices, Trends und fundierte Einblicke rund um modernes Prozessmanagement. Bleib auf dem neuesten Stand und vertiefe dein Wissen.",
    latestPosts: "Neueste Beiträge",
    readMore: "Mehr lesen",
    openBlog: "Blog öffnen",
    poweredBy: "unterstützt von HubSpot",
    placeholder: "Blog-Beiträge werden hier erscheinen",
    configNote: "HubSpot-Einbettung oder RSS-Feed in useEffect konfigurieren",
    features: {
      quickTips: {
        title: "Quick Tips",
        description: "Praktische Tipps und schnelle Einblicke zur Verbesserung Ihrer Prozesse und Workflows.",
      },
      twoForOne: {
        title: "Two for One",
        description: "Artikel, die doppelten Wert bieten mit kombinierten Einblicken und praktischen Anwendungen.",
      },
      newsRoundUp: {
        title: "News Round Up",
        description: "Kuratierte Zusammenfassungen der neuesten Nachrichten und Entwicklungen im Prozessmanagement.",
      },
      businessCase: {
        title: "Business Case",
        description: "Reale Geschäftsszenarien und Fallstudien, die Prozessverbesserungen demonstrieren.",
      },
      featureHighlight: {
        title: "Feature Highlight",
        description: "Detaillierte Einblicke in Plattformfunktionen und wie sie echte Geschäftsherausforderungen lösen.",
      },
    },
    categories: {
      quickTips: "Quick Tips",
      twoForOne: "Two for One",
      newsRoundUp: "News Round Up",
      businessCase: "Business Case",
      featureHighlight: "Feature Highlight",
    },
    viewAllPosts: "Alle Beiträge anzeigen",
    latestFrom: "Neueste aus",
    subscribeRss: "RSS abonnieren",
    subscribeNewsletter: "Newsletter abonnieren",
    whatYouFind: "Entdecke unsere Inhalte nach Kategorien organisiert",
    latestPostsPreview: "Vorschau der neuesten Beiträge",
    getGlimpse: "Erhalte einen Einblick in unsere neuesten Inhalte",
    newsletterCta: {
      title: "Bleibe informiert",
      description: "Erhalte die neuesten Einblicke, technischen Artikel und Branchenanalysen direkt in deinem Posteingang.",
      subscribeLinkedIn: "Auf LinkedIn abonnieren"
    },
  },
  downloads: {
    title: "Ressourcen-Downloads",
    subtitle: "Lade Whitepaper, Produktinfos, Compliance-Dokumente oder Industrie-Berichte herunter und vertiefe dein Know-how rund um moderne Process Intelligence und Norejas Vorgehensweise.",
    filterByCategory: "Nach Kategorie filtern:",
    availableDownloads: "Verfügbare Downloads",
    resource: "Ressource",
    resources: "Ressourcen",
    clickToDownload: "Klicke auf eine Ressource unten, um sie nach dem Ausfüllen eines kurzen Formulars herunterzuladen.",
    access: {
      free: "Direkter Download",
      locked: "E-Mail erforderlich",
    },
    noResourcesFound: "Keine Ressourcen gefunden",
    noResourcesDescription: "Keine Downloads für die ausgewählte Kategorie verfügbar.",
  },
  events: {
    title: "Veranstaltungen &",
    titleHighlight: "Ankündigungen",
    subtitle: "Entdecke unsere bevorstehenden Veranstaltungen und sichere dir einen Platz. Erfahre aus erster Hand, wie du mehr aus deiner Process Intelligence herausholst.",
    upcomingEvents: "Kommende Veranstaltungen",
    pastEvents: "Vergangene Veranstaltungen",
    noUpcomingEvents: "Momentan keine kommenden Veranstaltungen",
    noUpcomingDescription: "Bleibe gespannt auf zukünftige Ankündigungen und aufregende Veranstaltungen. Wir halten dich über kommende Gelegenheiten auf dem Laufenden.",
    stayTuned: "Bleibe gespannt auf zukünftige Ankündigungen",
    subscribeNewsletter: "Newsletter abonnieren",
    register: "Anmelden",
    learnMore: "Mehr erfahren",
    viewDetails: "Details anzeigen",
    showPastEvents: "Vergangene Veranstaltungen anzeigen",
    hidePastEvents: "Vergangene Veranstaltungen ausblenden",
    eventDate: "Veranstaltungsdatum",
    eventTime: "Uhrzeit",
    location: "Ort",
    online: "Online",
    onsite: "Vor Ort",
    hybrid: "Hybrid",
    free: "Kostenlos",
    paid: "Kostenpflichtig",
    capacity: "Kapazität",
    spotsLeft: "Plätze verfügbar",
    soldOut: "Ausverkauft",
    loadingEvents: "Lade Veranstaltungen...",
    upcomingEvent: "kommende Veranstaltung",
    upcomingEventsLabel: "kommende Veranstaltungen",
  },
  careers: {
    subtitle: "Werde Teil unseres Teams und gestalte die Zukunft der Process Intelligence mit. Entdecke unsere offenen Stellen.",
    aboutTitle: "Wie Arbeiten bei Noreja aussieht",
    aboutParagraphs: [
      "Noreja Intelligence baut eine Process-Intelligence-Plattform auf einem kausalen Prozessmodell statt auf einem flachen Event-Log. Die Fragen hier sind entsprechend offen: Wie rekonstruiert man einen Prozess als Graph? Wie kommt ein Agent von der Auffälligkeit zur Ursache? Wie belegt man eine Wirkung in Euro, statt sie zu behaupten?",
      "Das Team verbindet Wissenschaft und Praxis. Unsere Gründer kommen aus der akademischen Process-Mining-Forschung, das Advisory-Board bringt operative Industrieerfahrung mit — eine Methodenfrage und eine Frage zum Kunden-Rollout landen hier im selben Raum.",
      "Wir arbeiten mit Partnern aus Beratung, Technologie, Industrie und Forschung. Projekte erreichen dadurch echte Produktivumgebungen und bleiben nicht im Prototyp stecken.",
    ],
    openPositions: "Offene Stellen",
    openPosition: "offene Stelle",
    openPositionsLabel: "offene Stellen",
    noOpenPositions: "Derzeit keine offenen Stellen",
    noOpenPositionsDescription: "Aktuell haben wir keine offenen Positionen, aber wir freuen uns immer über talentierte Menschen. Sende uns gerne eine Initiativbewerbung.",
    initiativeApplication: "Initiativbewerbung senden",
    applyNow: "Jetzt bewerben",
    fullTime: "Vollzeit",
    partTime: "Teilzeit",
    internship: "Praktikum",
    workingStudent: "Werkstudent",
    remote: "Remote",
    onsite: "Vor Ort",
    hybrid: "Hybrid",
    joinTeamTitle: "Werde Teil unseres Teams",
    joinTeamSubtitle: "Wir suchen talentierte Menschen, die mit uns die Zukunft der Process Intelligence gestalten wollen.",
    joinTeamCta: "Offene Stellen ansehen",
    aboutCompanyHeading: "Über Noreja",
    roleDescriptionHeading: "Deine Rolle",
    tasksHeading: "Deine Aufgaben",
    requirementsHeading: "Dein Profil",
    benefitsHeading: "Was wir dir bieten",
    closingHeading: "Interesse?",
    viewDetails: "Details ansehen",
    backToOverview: "Zurück zu den offenen Stellen",
  },
  team: {
    title: "Das Noreja Team",
    subtitle: "Unser Team besteht aus Expertinnen und Experten, die Process Intelligence leben. Wir unterstützen dich dabei, deine Prozesse messbar besser zu machen.",
    connectLinkedIn: "Auf LinkedIn verbinden",
    founders: "Gründer-Team",
    team: "Das Noreja Team besteht aus Experten aus Wissenschaft und Praxis",
    learnMore: "Mehr erfahren",
    advisoryBoard: "Advisory-Board",
    advisorySubtitle: "Branchenexperten und Vordenker, die unsere strategische Ausrichtung und Innovation leiten.",
  },
  downloadGate: {
    download: "Herunterladen",
    downloaded: "Heruntergeladen",
    fillForm: "Bitte fülle das untenstehende Formular aus, um auf deinen Download zuzugreifen.",
    success: "Erfolg!",
    downloadStarted: "Dein Download hat begonnen.",
    error: "Fehler",
    formLoadError: "Fehler beim Laden des Download-Formulars. Bitte versuche es erneut.",
  },
  finalCta: {
    badge: "Bereit zum Start",
    title: "Mach den nächsten Schritt – ",
    titleHighlight: "mit Noreja",
    subtitle: "Schließe dich Unternehmen an, die mit intelligenter Prozessanalyse Wachstum und Effizienz neu definieren.",
    ctaPrimary: "Heute loslegen",
    ctaSecondary: "Demo vereinbaren",
    startJourney: "Starte deine Reise",
    scheduleDemo: "Demo buchen"
  },
  footer: {
    description: "Noreja Generative Process Intelligence - Elevating Process Knowledge with the Power of GenAI.",
    copyright: "Alle Rechte vorbehalten.",
    builtWith: "Erstellt mit KI 🤖 und Kaffee ☕️",
    sections: {
      platform: "Plattform & KI",
      processes: "Prozesse",
      allProcesses: "Alle Prozesse",
      resources: "Ressourcen",
      company: "Unternehmen",
      competenceCenter: "Kompetenzcenter",
      legal: "Rechtliches",
      contact: "Kontakt",
      referralProgram: "Referral-Programm",
      documentation: "Dokumentation"
    },
    links: {
      imprint: "Impressum",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
    },
    legal: {
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      trustCenter: "Trust Center"
    },
    contact: {
      contactForm: "Kontaktformular",
      bookAppointment: "Termin buchen"
    },
    certifications: {
      iso: "ISO zertifiziert",
      gdpr: "DSGVO konform"
    }
  },
  buttons: {
    contactUs: "Kontakt"
  },
  maintenance: {
    title: "Wartungsarbeiten",
    subtitle: "Wir führen derzeit planmäßige Wartungsarbeiten durch",
    message: "Unsere Plattform ist vorübergehend nicht verfügbar, da wir derzeit Updates und Verbesserungen implementieren. Wir sind in Kürze wieder online. Vielen Dank für Ihre Geduld."
  },
  metaDescriptions: {
    functionalities: "Erhalte mit Noreja vollständige Prozess-Transparenz in Echtzeit – datenbasiert, KI-gestützt und für fundierte Entscheidungen zur Optimierung deiner Geschäftsprozesse.",
    pricing: "Entdecke die Preismodelle von Noreja – flexible Pakete für datenbasierte, KI-gestützte Prozessanalyse und transparente Entscheidungen, abgestimmt auf deine Organisation.",
    successStories: "Lerne aus echten Projekten: Unsere Noreja Success Stories zeigen, wie Unternehmen mit datenbasierter, KI-gestützter Prozessanalyse schneller, transparenter und effizienter arbeiten.",
    partners: "Unser Partner-Ecosystem bei Noreja unterstützt Beratung, Implementierung und den Weg zu datenbasierter, KI-gestützter Process Intelligence – für mehr Transparenz und operativen Erfolg.",
    team: "Lerne das Noreja-Team kennen – erfahrene Experten für datenbasierte Prozessanalyse und KI-gestützte Process Intelligence, die gemeinsam Transparenz und Wert schaffen.",
    events: "Bleib informiert über Noreja-Veranstaltungen zu KI-gestützter Prozessanalyse und datenbasierter Prozessoptimierung – praxisnahe Formate für Wissen, Austausch und echte Einblicke.",
    careers: "Werde Teil des Noreja-Teams – entdecke offene Stellen im Bereich KI-gestützter Process Intelligence und gestalte die Zukunft der datenbasierten Prozessanalyse mit.",
    downloads: "Lade Whitepaper, Produkt-Briefs und praxisrelevante Ressourcen zu datenbasierter, KI-gestützter Process Intelligence von Noreja herunter – für fundiertes Wissen und bessere Entscheidungen.",
    contact: "Nimm Kontakt mit Noreja auf – wir unterstützen dich bei Fragen zu datenbasierter, KI-gestützter Process Intelligence, Lösungen und Implementierung."
  }
};
