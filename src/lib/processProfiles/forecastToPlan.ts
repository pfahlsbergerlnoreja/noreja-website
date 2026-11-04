import type { ProcessProfile } from '../processProfiles';

export const forecastToPlan: ProcessProfile = {
  id: 'forecast-to-plan',
  name: 'Forecast-to-Plan',
  abbreviation: 'F2P',
  dateModified: '2026-11-04',
  relatedCases: ['plan-to-produce', 'order-to-cash', 'purchase-to-pay'],
  agents: ['structural-deviation', 'cycle-time', 'on-time'],
  content: {
    de: {
      metaTitle: 'Forecast-to-Plan (F2P): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Forecast-to-Plan (F2P) von der Prognose bis zum freigegebenen Plan: Phasen der Absatz- und Kapazitätsplanung, S&OP, KPIs wie Forecast-Genauigkeit und typische Probleme.',
      keywords: [
        'Forecast-to-Plan',
        'F2P Prozess',
        'Sales & Operations Planning',
        'S&OP Prozess',
        'Absatzplanung',
        'Bedarfsplanung',
        'Integrated Business Planning',
        'Forecast-Genauigkeit',
      ],
      area: 'Planung & Supply Chain',
      tagline:
        'Von der statistischen Prognose bis zum abgestimmten Plan: wie Absatz-, Kapazitäts- und Materialplanung zusammenfinden, woran der Prozess gemessen wird und wo Planungsrunden an Verbindlichkeit verlieren.',
      teaser: 'Von der Absatzprognose bis zum freigegebenen Plan – Demand Review, Supply Review und S&OP-Konsens.',
      definition:
        'Forecast-to-Plan (F2P) ist der End-to-End-Prozess von der Bedarfsprognose bis zum freigegebenen, abgestimmten Unternehmensplan. Er umfasst die Aufbereitung von Absatz- und Marktdaten, die statistische Prognose, den Abgleich mit dem Vertrieb im Demand Review, die Prüfung von Kapazitäten und Material im Supply Review, die Konsensrunde im S&OP- oder IBP-Meeting und die Übergabe des Plans an Disposition, Produktion und Einkauf. Am Ende steht ein Plan, auf den sich Vertrieb, Supply Chain und Finanzen festgelegt haben – und der regelmäßige Abgleich, wie gut er die Wirklichkeit getroffen hat.',
      aliases: ['F2P', 'Forecast to Plan', 'Sales & Operations Planning', 'S&OP', 'Integrated Business Planning', 'Forecast-to-Fulfil', 'Absatz- und Produktionsplanung'],
      scope: {
        start: 'Ein neuer Planungszyklus beginnt, und Absatz-, Bestands- und Auftragsdaten werden zusammengeführt.',
        end: 'Der abgestimmte Plan ist freigegeben, an die ausführenden Prozesse übergeben und gegen die Ist-Werte geprüft.',
      },
      phases: [
        {
          title: 'Datenaufbereitung & statistische Prognose',
          text: 'Historische Absätze, offene Aufträge, Bestände und Marktinformationen werden bereinigt und in ein Prognosemodell überführt, das eine erste Bedarfsschätzung je Produkt, Region und Periode liefert.',
          steps: ['Planungszyklus eröffnet', 'Absatzhistorie bereinigt', 'Statistische Prognose berechnet', 'Prognoseausreißer geprüft'],
        },
        {
          title: 'Demand Review',
          text: 'Vertrieb, Key Account Management und Marketing ergänzen die statistische Prognose um Aktionen, Projekte und Kundenwissen. Abweichungen zwischen Modell und Einschätzung werden begründet oder korrigiert.',
          steps: ['Vertriebsinput angefordert', 'Prognose manuell angepasst', 'Annahmen dokumentiert', 'Bedarfsplan freigegeben'],
        },
        {
          title: 'Supply Review',
          text: 'Produktion, Disposition und Einkauf prüfen, ob der Bedarfsplan mit Kapazitäten, Materialverfügbarkeit und Lieferantenzusagen erfüllbar ist, und zeigen Engpässe sowie Alternativen auf.',
          steps: ['Grobkapazität geprüft', 'Materialverfügbarkeit geprüft', 'Engpass gemeldet', 'Versorgungsszenario erstellt'],
        },
        {
          title: 'Konsens & S&OP-Meeting',
          text: 'Im Pre-S&OP und im Executive Meeting werden Bedarf, Versorgung und Finanzplan abgeglichen. Offene Zielkonflikte werden entschieden und der Konsensplan verabschiedet.',
          steps: ['Pre-S&OP-Abstimmung', 'Szenarien bewertet', 'Entscheidung im Executive Meeting', 'Konsensplan verabschiedet'],
        },
        {
          title: 'Planfreigabe & Plan-Ist-Abgleich',
          text: 'Der Konsensplan wird an Disposition, Produktion und Einkauf übergeben. Im nächsten Zyklus wird gemessen, wie weit Prognose und Plan von den tatsächlichen Absätzen und Mengen entfernt lagen.',
          steps: ['Plan an MRP übergeben', 'Planversion eingefroren', 'Plan-Ist-Abweichung ermittelt', 'Ursachen bewertet'],
        },
      ],
      objects: [
        { name: 'Prognose', text: 'Bedarfsschätzung je Produkt, Region und Periode, mit Modell, Version und Erstellungszeitpunkt.' },
        { name: 'Prognoseanpassung', text: 'Manuelle Änderung an der statistischen Prognose, mit Bearbeiter, Begründung und Größenordnung.' },
        { name: 'Planversion', text: 'Ein Stand des Bedarfs-, Versorgungs- oder Konsensplans mit Status Entwurf, abgestimmt oder eingefroren.' },
        { name: 'Kapazitätsprüfung', text: 'Abgleich des Bedarfs mit Ressourcen, Schichten und Lieferantenzusagen, inklusive gemeldeter Engpässe.' },
        { name: 'S&OP-Entscheidung', text: 'Beschluss im Planungsmeeting zu einem Zielkonflikt, mit Verantwortlichem und Auswirkung auf den Plan.' },
        { name: 'Planungszyklus', text: 'Der wiederkehrende Rahmen mit festen Terminen für Datenstichtag, Reviews und Freigabe.' },
      ],
      systems: ['Planungsplattformen (z. B. SAP IBP, Kinaxis Maestro, o9 Solutions)', 'ERP mit Disposition und Absatzplanung (z. B. SAP S/4HANA, Microsoft Dynamics 365)', 'CRM- und Vertriebsdaten', 'Tabellenkalkulation und Planungsvorlagen'],
      kpis: [
        { name: 'Forecast-Genauigkeit', text: 'Wie nah die Prognose an den tatsächlichen Absätzen lag, je Produkt, Region und Planungshorizont.' },
        { name: 'Forecast Bias', text: 'Ob die Prognose systematisch zu hoch oder zu niedrig ausfällt.' },
        { name: 'Forecast Value Added', text: 'Ob manuelle Anpassungen die statistische Prognose verbessern oder verschlechtern.' },
        { name: 'Termintreue des Planungszyklus', text: 'Anteil der Zyklen, in denen Reviews und Freigabe zum vorgesehenen Termin abgeschlossen sind.' },
        { name: 'Planstabilität', text: 'Wie stark sich der Plan innerhalb des eingefrorenen Horizonts noch ändert.' },
      ],
      challenges: [
        {
          title: 'Anpassungen ohne Mehrwert',
          text: 'Manuelle Korrekturen im Demand Review sind schnell gemacht, aber selten überprüft. Ob sie die Prognose verbessern oder nur Erwartungen widerspiegeln, bleibt oft offen.',
        },
        {
          title: 'Der Zyklus läuft der Zeit hinterher',
          text: 'Wenn Datenstichtag oder Vertriebsinput sich verschieben, schrumpft die Zeit für Supply Review und Entscheidung – der Plan wird freigegeben, bevor Engpässe geklärt sind.',
        },
        {
          title: 'Konsens nur auf dem Papier',
          text: 'Vertrieb, Produktion und Finanzen arbeiten nach dem Meeting mit eigenen Zahlen weiter. Der verabschiedete Plan steuert dann nur einen Teil der Entscheidungen.',
        },
        {
          title: 'Plan-Ist-Abweichungen ohne Ursache',
          text: 'Dass Plan und Ist auseinanderliegen, ist bekannt. Ob die Ursache in der Prognose, in einer Anpassung, in einem Engpass oder in der Ausführung liegt, zeigt der reine Kennzahlenvergleich nicht.',
        },
      ],
      questions: [
        'Welche manuellen Prognoseanpassungen verbessern die Genauigkeit, welche verschlechtern sie?',
        'In welchen Planungszyklen wird ein Review übersprungen oder verspätet abgeschlossen?',
        'Welche Produkte oder Regionen zeigen einen dauerhaften Forecast Bias?',
        'Wie oft ändert sich der Plan noch innerhalb des eingefrorenen Horizonts?',
        'Welche gemeldeten Engpässe bleiben bis zur Freigabe ungeklärt?',
        'Wo lassen sich Plan-Ist-Abweichungen auf eine bestimmte Planungsentscheidung zurückführen?',
      ],
      approach: [
        'Eine Planzahl allein erzählt nicht, wie sie entstanden ist. Hinter jeder Prognose stehen eine Modellrechnung, mehrere Anpassungen, eine Kapazitätsprüfung und eine Entscheidung im Meeting – und später die Aufträge, Fertigungsaufträge und Bestellungen, die den Plan umsetzen. Noreja verbindet diese Objekte im Event Knowledge Graph, sodass sich eine Plan-Ist-Abweichung bis zur verursachenden Anpassung oder Entscheidung zurückverfolgen lässt.',
        'Der Planungskalender wird als erwartete Reihenfolge modelliert: Datenstichtag, Demand Review, Supply Review, Konsens, Freigabe. So wird sichtbar, in welchen Zyklen Schritte fehlen, sich überlappen oder nach der Freigabe noch einmal geöffnet werden.',
      ],
      faq: [
        {
          question: 'Was ist der Forecast-to-Plan-Prozess?',
          answer:
            'Forecast-to-Plan (F2P) ist der End-to-End-Prozess von der Bedarfsprognose bis zum freigegebenen Unternehmensplan. Er umfasst Datenaufbereitung, statistische Prognose, Demand Review, Supply Review, die Konsensrunde im S&OP-Meeting und die Übergabe an die ausführenden Prozesse.',
        },
        {
          question: 'Was ist der Unterschied zwischen Forecast-to-Plan und Plan-to-Produce?',
          answer:
            'Forecast-to-Plan endet mit dem abgestimmten und freigegebenen Plan. Plan-to-Produce beginnt dort und beschreibt, wie dieser Plan in Fertigungsaufträge, Materialbereitstellung und Produktion umgesetzt wird.',
        },
        {
          question: 'Welche KPIs sind im Forecast-to-Plan wichtig?',
          answer:
            'Typische Kennzahlen sind Forecast-Genauigkeit, Forecast Bias, Forecast Value Added der manuellen Anpassungen, die Termintreue des Planungszyklus und die Planstabilität im eingefrorenen Horizont.',
        },
        {
          question: 'Kann man Process Mining in der Absatz- und Produktionsplanung einsetzen?',
          answer:
            'Ja. Prognoseläufe, Anpassungen, Planversionen und Freigaben hinterlassen Zeitstempel und Bearbeiter in Planungsplattformen und im ERP. Process Mining zeigt daraus, wie Planungszyklen tatsächlich ablaufen, wo Reviews ausfallen und welche Anpassungen sich bis in die Ausführung auswirken.',
        },
      ],
    },
    en: {
      metaTitle: 'Forecast-to-Plan (F2P): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Forecast-to-plan (F2P) from demand forecast to released plan: phases of demand and supply planning, S&OP, KPIs such as forecast accuracy and typical problems.',
      keywords: [
        'Forecast-to-Plan',
        'F2P process',
        'sales and operations planning',
        'S&OP process',
        'demand planning',
        'supply planning',
        'integrated business planning',
        'forecast accuracy',
      ],
      area: 'Planning & supply chain',
      tagline:
        'From the statistical forecast to the agreed plan: how demand, capacity and material planning come together, how the process is measured and where planning rounds lose their commitment.',
      teaser: 'From demand forecast to released plan – demand review, supply review and S&OP consensus.',
      definition:
        'Forecast-to-plan (F2P) is the end-to-end process from the demand forecast to the released, agreed business plan. It covers preparing sales and market data, the statistical forecast, aligning with sales in the demand review, checking capacity and material in the supply review, the consensus round in the S&OP or IBP meeting and handing the plan over to materials planning, production and purchasing. The result is a plan that sales, supply chain and finance have committed to – followed by a regular check of how well it matched reality.',
      aliases: ['F2P', 'Forecast to Plan', 'Sales & Operations Planning', 'S&OP', 'Integrated Business Planning', 'Forecast-to-Fulfil'],
      scope: {
        start: 'A new planning cycle starts and sales, inventory and order data are brought together.',
        end: 'The agreed plan is released, handed over to the executing processes and checked against actuals.',
      },
      phases: [
        {
          title: 'Data preparation & statistical forecast',
          text: 'Sales history, open orders, inventory and market information are cleansed and fed into a forecasting model that delivers a first demand estimate per product, region and period.',
          steps: ['Planning cycle opened', 'Sales history cleansed', 'Statistical forecast calculated', 'Forecast outliers reviewed'],
        },
        {
          title: 'Demand review',
          text: 'Sales, key account management and marketing enrich the statistical forecast with promotions, projects and customer knowledge. Gaps between model and judgement are either justified or corrected.',
          steps: ['Sales input requested', 'Forecast manually adjusted', 'Assumptions documented', 'Demand plan approved'],
        },
        {
          title: 'Supply review',
          text: 'Production, materials planning and purchasing check whether the demand plan can be met with available capacity, material and supplier commitments, and flag bottlenecks and alternatives.',
          steps: ['Rough-cut capacity checked', 'Material availability checked', 'Bottleneck reported', 'Supply scenario created'],
        },
        {
          title: 'Consensus & S&OP meeting',
          text: 'In the pre-S&OP and the executive meeting, demand, supply and the financial plan are reconciled. Open trade-offs are decided and the consensus plan is signed off.',
          steps: ['Pre-S&OP alignment', 'Scenarios evaluated', 'Decision in executive meeting', 'Consensus plan signed off'],
        },
        {
          title: 'Plan release & plan vs. actual',
          text: 'The consensus plan is handed over to materials planning, production and purchasing. In the next cycle, the gap between forecast, plan and actual sales and volumes is measured.',
          steps: ['Plan transferred to MRP', 'Plan version frozen', 'Plan vs. actual variance determined', 'Causes assessed'],
        },
      ],
      objects: [
        { name: 'Forecast', text: 'Demand estimate per product, region and period, with model, version and time of creation.' },
        { name: 'Forecast adjustment', text: 'Manual change to the statistical forecast, with author, reason and magnitude.' },
        { name: 'Plan version', text: 'A state of the demand, supply or consensus plan with the status draft, agreed or frozen.' },
        { name: 'Capacity check', text: 'Matching demand against resources, shifts and supplier commitments, including reported bottlenecks.' },
        { name: 'S&OP decision', text: 'A resolution on a trade-off in the planning meeting, with an owner and its effect on the plan.' },
        { name: 'Planning cycle', text: 'The recurring frame with fixed dates for data cut-off, reviews and release.' },
      ],
      systems: ['Planning platforms (e.g. SAP IBP, Kinaxis Maestro, o9 Solutions)', 'ERP with materials and demand planning (e.g. SAP S/4HANA, Microsoft Dynamics 365)', 'CRM and sales data', 'Spreadsheets and planning templates'],
      kpis: [
        { name: 'Forecast accuracy', text: 'How close the forecast came to actual sales, per product, region and planning horizon.' },
        { name: 'Forecast bias', text: 'Whether the forecast is systematically too high or too low.' },
        { name: 'Forecast value added', text: 'Whether manual adjustments improve or worsen the statistical forecast.' },
        { name: 'On-time planning cycle', text: 'Share of cycles in which reviews and release are completed by the scheduled date.' },
        { name: 'Plan stability', text: 'How much the plan still changes within the frozen horizon.' },
      ],
      challenges: [
        {
          title: 'Adjustments without added value',
          text: 'Manual corrections in the demand review are quick to make but rarely checked. Whether they improve the forecast or merely reflect expectations often remains unclear.',
        },
        {
          title: 'The cycle runs behind schedule',
          text: 'When the data cut-off or sales input slips, the time left for the supply review and the decision shrinks – the plan is released before bottlenecks are resolved.',
        },
        {
          title: 'Consensus on paper only',
          text: 'After the meeting, sales, production and finance carry on with their own numbers. The signed-off plan then steers only part of the decisions.',
        },
        {
          title: 'Plan vs. actual gaps without a cause',
          text: 'Everyone knows that plan and actuals diverge. Whether the cause lies in the forecast, an adjustment, a bottleneck or in execution is something a plain KPI comparison does not show.',
        },
      ],
      questions: [
        'Which manual forecast adjustments improve accuracy and which worsen it?',
        'In which planning cycles is a review skipped or completed late?',
        'Which products or regions show a persistent forecast bias?',
        'How often does the plan still change within the frozen horizon?',
        'Which reported bottlenecks remain unresolved at release?',
        'Where can plan vs. actual gaps be traced back to a specific planning decision?',
      ],
      approach: [
        'A planning figure on its own does not tell how it came about. Behind every forecast are a model run, several adjustments, a capacity check and a decision in the meeting – and later the sales orders, production orders and purchase orders that put the plan into practice. Noreja connects these objects in the event knowledge graph, so a plan vs. actual gap can be traced back to the adjustment or decision that caused it.',
        'The planning calendar is modelled as the expected order: data cut-off, demand review, supply review, consensus, release. This shows in which cycles steps are missing, overlap or are reopened after release.',
      ],
      faq: [
        {
          question: 'What is the forecast-to-plan process?',
          answer:
            'Forecast-to-plan (F2P) is the end-to-end process from the demand forecast to the released business plan. It covers data preparation, the statistical forecast, demand review, supply review, the consensus round in the S&OP meeting and the handover to the executing processes.',
        },
        {
          question: 'What is the difference between forecast-to-plan and plan-to-produce?',
          answer:
            'Forecast-to-plan ends with the agreed and released plan. Plan-to-produce starts there and describes how that plan is turned into production orders, material staging and manufacturing.',
        },
        {
          question: 'Which KPIs matter in forecast-to-plan?',
          answer:
            'Typical KPIs are forecast accuracy, forecast bias, the forecast value added of manual adjustments, on-time completion of the planning cycle and plan stability within the frozen horizon.',
        },
        {
          question: 'Can process mining be used in sales and operations planning?',
          answer:
            'Yes. Forecast runs, adjustments, plan versions and releases leave timestamps and authors in planning platforms and the ERP. Process mining shows how planning cycles actually run, where reviews are skipped and which adjustments carry through to execution.',
        },
      ],
    },
  },
};
