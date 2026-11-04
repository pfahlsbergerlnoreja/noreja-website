import type { ProcessProfile } from '../processProfiles';

export const acquireToRetire: ProcessProfile = {
  id: 'acquire-to-retire',
  name: 'Acquire-to-Retire',
  abbreviation: 'A2R',
  dateModified: '2026-11-04',
  relatedCases: ['purchase-to-pay', 'plan-to-produce'],
  agents: ['cycle-time', 'compliance', 'structural-deviation'],
  content: {
    de: {
      metaTitle: 'Acquire-to-Retire (A2R): Prozess, Phasen & KPIs | Noreja',
      metaDescription:
        'Acquire-to-Retire (A2R) vom Investitionsantrag bis zum Anlagenabgang: Phasen, Geschäftsobjekte, KPIs und typische Probleme im Lebenszyklus von Anlagen.',
      keywords: [
        'Acquire-to-Retire',
        'A2R Prozess',
        'Anlagenbuchhaltung',
        'Asset Lifecycle Management',
        'Investitionsantrag',
        'Anlage im Bau',
        'Anlagenabgang',
        'Process Mining Anlagen',
      ],
      area: 'Finanzen & Anlagenmanagement',
      tagline:
        'Vom Investitionsantrag bis zur Verschrottung: wie der Acquire-to-Retire-Prozess abläuft, woran er gemessen wird und wo Anlagen zu spät aktiviert, falsch bewertet oder vergessen werden.',
      teaser: 'Vom Investitionsantrag bis zum Anlagenabgang – Aktivierung, Instandhaltung, Abschreibung und Abgang.',
      definition:
        'Acquire-to-Retire (A2R) ist der End-to-End-Prozess für den gesamten Lebenszyklus einer Sachanlage – vom Investitionsantrag über Beschaffung, Aktivierung und Betrieb bis zum Verkauf oder zur Verschrottung. Er verbindet Investitionsplanung, Einkauf, Anlagenbuchhaltung und Instandhaltung: Eine Maschine wird beantragt und genehmigt, als Anlage im Bau gesammelt, als Anlage aktiviert, über Jahre gewartet und abgeschrieben und schließlich ausgebucht. Weil jede dieser Stationen in einem anderen Bereich liegt, entscheidet A2R darüber, ob Anlagenbestand, Abschreibung und Investitionsbudget zueinander passen.',
      aliases: ['A2R', 'Acquire to Retire', 'Acquire-to-Dispose', 'Asset Lifecycle', 'Anlagenlebenszyklus'],
      scope: {
        start: 'Ein Bedarf für eine Investition wird beantragt.',
        end: 'Die Anlage ist abgegangen und aus dem Anlagenbestand ausgebucht.',
      },
      phases: [
        {
          title: 'Investitionsplanung & Genehmigung',
          text: 'Fachbereiche beantragen Investitionen, die gegen das Budget geprüft und je nach Höhe über mehrere Stufen genehmigt werden.',
          steps: ['Investitionsantrag erstellt', 'Wirtschaftlichkeit geprüft', 'Investition genehmigt', 'Budget freigegeben'],
        },
        {
          title: 'Beschaffung & Aktivierung',
          text: 'Die Anlage wird über Bestellung oder Eigenleistung beschafft. Kosten sammeln sich zunächst auf einer Anlage im Bau und werden mit der Inbetriebnahme als Anlage aktiviert.',
          steps: ['Bestellung ausgelöst', 'Kosten auf Anlage im Bau', 'Inbetriebnahme', 'Anlage aktiviert'],
        },
        {
          title: 'Betrieb & Instandhaltung',
          text: 'Im Betrieb wird die Anlage gewartet und repariert. Größere Maßnahmen können den Wert erhöhen und müssen nachaktiviert werden.',
          steps: ['Wartungsplan angelegt', 'Instandhaltungsauftrag', 'Störung gemeldet', 'Nachaktivierung gebucht'],
        },
        {
          title: 'Abschreibung, Bewertung & Umbuchung',
          text: 'Planmäßige Abschreibungen laufen jede Periode, dazu kommen außerplanmäßige Abschreibungen, Neubewertungen und Umbuchungen zwischen Kostenstellen, Standorten oder Gesellschaften.',
          steps: ['Abschreibungslauf', 'Inventur der Anlagen', 'Neubewertung', 'Umbuchung'],
        },
        {
          title: 'Abgang',
          text: 'Am Ende ihrer Nutzung wird die Anlage verkauft, verschrottet oder stillgelegt, der Restbuchwert wird ausgebucht und der Abgang dokumentiert.',
          steps: ['Stilllegung beantragt', 'Abgang genehmigt', 'Verkauf oder Verschrottung', 'Anlage ausgebucht'],
        },
      ],
      objects: [
        { name: 'Investitionsantrag', text: 'Beantragte Investition mit Begründung, Betrag, Budgetposition und Genehmigungsstufen.' },
        { name: 'Bestellung', text: 'Beschaffung der Anlage oder ihrer Komponenten – die Brücke zu Purchase-to-Pay.' },
        { name: 'Anlage im Bau', text: 'Sammelobjekt für Kosten bis zur Inbetriebnahme, das anschließend auf eine Anlage abgerechnet wird.' },
        { name: 'Anlagenstammsatz', text: 'Die aktivierte Anlage mit Anschaffungswert, Nutzungsdauer, Standort und Kostenstelle.' },
        { name: 'Instandhaltungsauftrag', text: 'Wartung oder Reparatur am technischen Platz, mit Material, Arbeitszeit und Ausfallzeit.' },
        { name: 'Anlagenbewegung', text: 'Zugang, Abschreibung, Umbuchung oder Abgang als Buchung in der Anlagenbuchhaltung.' },
      ],
      systems: [
        'ERP-Anlagenbuchhaltung (z. B. SAP S/4HANA Asset Accounting, Oracle Fusion Assets)',
        'Instandhaltungssysteme (z. B. SAP PM, IBM Maximo)',
        'Investitions- und Projektcontrolling (z. B. SAP PS)',
        'Einkaufssysteme und Anlageninventur',
      ],
      kpis: [
        { name: 'Durchlaufzeit Investitionsantrag', text: 'Zeit vom Antrag bis zur endgültigen Genehmigung.' },
        { name: 'Zeit bis zur Aktivierung', text: 'Zeit von der Inbetriebnahme bis zur Aktivierung der Anlage im Bau.' },
        { name: 'Alter offener Anlagen im Bau', text: 'Wie lange Kosten auf Anlagen im Bau liegen, ohne abgerechnet zu werden.' },
        { name: 'Budgettreue', text: 'Abweichung zwischen genehmigtem Betrag und tatsächlichen Anschaffungskosten.' },
        { name: 'Ungeplante Instandhaltung', text: 'Anteil störungsbedingter Aufträge an allen Instandhaltungsaufträgen einer Anlage.' },
        { name: 'Abgänge ohne Genehmigung', text: 'Ausbuchungen, denen keine vorgesehene Freigabe vorausgeht.' },
      ],
      challenges: [
        {
          title: 'Anlagen im Bau, die nie fertig werden',
          text: 'Längst genutzte Anlagen bleiben als Anlage im Bau stehen. Abschreibungen beginnen zu spät, und der Anlagenbestand zeigt nicht, was tatsächlich im Einsatz ist.',
        },
        {
          title: 'Beschaffung an der Genehmigung vorbei',
          text: 'Bestellungen werden ausgelöst, bevor die Investition freigegeben ist, oder Beträge werden auf mehrere Anträge verteilt, um Genehmigungsgrenzen zu umgehen.',
        },
        {
          title: 'Instandhaltung und Buchhaltung kennen verschiedene Anlagen',
          text: 'Technischer Platz und Anlagenstammsatz sind nicht sauber verknüpft. Umbauten und Wertsteigerungen erreichen die Anlagenbuchhaltung nicht oder erst bei der Inventur.',
        },
        {
          title: 'Geisteranlagen im Bestand',
          text: 'Verschrottete oder verkaufte Anlagen werden nicht ausgebucht und weiter abgeschrieben, während der Abgang nur im Lager oder in der Instandhaltung sichtbar ist.',
        },
      ],
      questions: [
        'Welche Anlagen im Bau sind seit ihrer Inbetriebnahme nicht aktiviert worden?',
        'Wo wurde bestellt, bevor die Investition genehmigt war?',
        'Welche Genehmigungsstufen verlängern die Durchlaufzeit von Investitionsanträgen am stärksten?',
        'Welche Anlagen verursachen überdurchschnittlich viele ungeplante Instandhaltungsaufträge?',
        'Welche Anlagen sind physisch abgegangen, aber noch im Bestand?',
        'Wo weichen die tatsächlichen Anschaffungskosten vom genehmigten Betrag ab?',
      ],
      approach: [
        'Eine Anlage hat keinen einzelnen Fall, den ein flacher Eventlog abbilden könnte. Zu ihr gehören ein Investitionsantrag, mehrere Bestellungen und Rechnungen, eine Anlage im Bau, Dutzende Instandhaltungsaufträge über Jahre und jede Periode eine Abschreibung. Noreja verknüpft diese Objekte im Event Knowledge Graph, sodass sich etwa eine späte Aktivierung bis zur verzögerten Rechnung oder fehlenden Inbetriebnahmemeldung zurückverfolgen lässt.',
        'Die erwartete Reihenfolge – Genehmigung vor Bestellung, Aktivierung nach Inbetriebnahme, Freigabe vor Abgang – wird mit Fachwissen aus Anlagenbuchhaltung und Instandhaltung modelliert. Abweichungen werden so als konkrete Verstöße gegen den vorgesehenen Ablauf sichtbar, nicht als eine weitere Variante unter vielen.',
      ],
      faq: [
        {
          question: 'Was ist der Acquire-to-Retire-Prozess?',
          answer:
            'Acquire-to-Retire (A2R) ist der End-to-End-Prozess für den Lebenszyklus einer Sachanlage. Er reicht vom Investitionsantrag über Beschaffung, Aktivierung, Instandhaltung und Abschreibung bis zum Verkauf oder zur Verschrottung der Anlage.',
        },
        {
          question: 'Was ist der Unterschied zwischen Acquire-to-Retire und Purchase-to-Pay?',
          answer:
            'Purchase-to-Pay beschreibt den Einkauf von der Bedarfsanforderung bis zur Zahlung, unabhängig davon, was gekauft wird. Acquire-to-Retire nutzt diesen Weg für die Beschaffung einer Anlage, beginnt aber schon beim Investitionsantrag und begleitet die Anlage danach über ihre gesamte Nutzungsdauer bis zum Abgang.',
        },
        {
          question: 'Welche KPIs sind im Acquire-to-Retire wichtig?',
          answer:
            'Typische Kennzahlen sind die Durchlaufzeit von Investitionsanträgen, die Zeit bis zur Aktivierung, das Alter offener Anlagen im Bau, die Budgettreue, der Anteil ungeplanter Instandhaltung und Abgänge ohne Genehmigung.',
        },
        {
          question: 'Kann man Process Mining im Anlagenmanagement einsetzen?',
          answer:
            'Ja. Investitionsanträge, Bestellungen, Anlagenbewegungen und Instandhaltungsaufträge hinterlassen Zeitstempel und Verantwortliche im ERP und im Instandhaltungssystem. Process Mining zeigt daraus, wo Aktivierungen stocken, Genehmigungen umgangen werden und Anlagenbestand und Realität auseinanderlaufen.',
        },
      ],
    },
    en: {
      metaTitle: 'Acquire-to-Retire (A2R): Process, Phases & KPIs | Noreja',
      metaDescription:
        'Acquire-to-retire (A2R) from capex request to asset disposal: phases, business objects, KPIs and typical problems across the fixed asset lifecycle.',
      keywords: [
        'Acquire-to-Retire',
        'A2R process',
        'fixed asset accounting',
        'asset lifecycle management',
        'capex approval',
        'asset under construction',
        'asset disposal',
        'process mining fixed assets',
      ],
      area: 'Finance & asset management',
      tagline:
        'From capex request to scrapping: how the acquire-to-retire process runs, how it is measured and where assets are capitalised late, valued wrongly or forgotten.',
      teaser: 'From capex request to asset disposal – capitalisation, maintenance, depreciation and retirement.',
      definition:
        'Acquire-to-retire (A2R) is the end-to-end process covering the full lifecycle of a fixed asset – from the capital expenditure request through acquisition, capitalisation and operation to sale or scrapping. It links investment planning, procurement, asset accounting and maintenance: a machine is requested and approved, collected as an asset under construction, capitalised, maintained and depreciated for years and finally retired. Because each of these stages sits in a different function, A2R decides whether the asset register, depreciation and capex budget actually fit together.',
      aliases: ['A2R', 'Acquire to Retire', 'Acquire-to-Dispose', 'Asset lifecycle', 'Fixed asset lifecycle'],
      scope: {
        start: 'A need for a capital investment is requested.',
        end: 'The asset has been disposed of and removed from the asset register.',
      },
      phases: [
        {
          title: 'Investment planning & approval',
          text: 'Departments request investments, which are checked against the budget and approved over several levels depending on the amount.',
          steps: ['Capex request created', 'Business case reviewed', 'Investment approved', 'Budget released'],
        },
        {
          title: 'Acquisition & capitalisation',
          text: 'The asset is acquired through a purchase order or built in-house. Costs first collect on an asset under construction and are capitalised as a fixed asset once it is put into service.',
          steps: ['Purchase order placed', 'Costs on asset under construction', 'Put into service', 'Asset capitalised'],
        },
        {
          title: 'Operation & maintenance',
          text: 'In operation the asset is serviced and repaired. Major measures can increase its value and have to be capitalised subsequently.',
          steps: ['Maintenance plan created', 'Maintenance order', 'Breakdown reported', 'Subsequent capitalisation posted'],
        },
        {
          title: 'Depreciation, revaluation & transfer',
          text: 'Scheduled depreciation runs every period, complemented by impairments, revaluations and transfers between cost centres, sites or legal entities.',
          steps: ['Depreciation run', 'Asset inventory count', 'Revaluation', 'Asset transfer'],
        },
        {
          title: 'Retirement',
          text: 'At the end of its useful life the asset is sold, scrapped or decommissioned, the remaining book value is written off and the disposal is documented.',
          steps: ['Decommissioning requested', 'Disposal approved', 'Sale or scrapping', 'Asset retired'],
        },
      ],
      objects: [
        { name: 'Capex request', text: 'Requested investment with justification, amount, budget item and approval levels.' },
        { name: 'Purchase order', text: 'Procurement of the asset or its components – the bridge to purchase-to-pay.' },
        { name: 'Asset under construction', text: 'Collector for costs until the asset is put into service, then settled to a fixed asset.' },
        { name: 'Asset master record', text: 'The capitalised asset with acquisition value, useful life, location and cost centre.' },
        { name: 'Maintenance order', text: 'Servicing or repair at the functional location, with material, labour and downtime.' },
        { name: 'Asset transaction', text: 'Acquisition, depreciation, transfer or retirement as a posting in asset accounting.' },
      ],
      systems: [
        'ERP asset accounting (e.g. SAP S/4HANA Asset Accounting, Oracle Fusion Assets)',
        'Maintenance systems (e.g. SAP PM, IBM Maximo)',
        'Investment and project controlling (e.g. SAP PS)',
        'Procurement systems and asset inventory',
      ],
      kpis: [
        { name: 'Capex request cycle time', text: 'Time from request to final approval.' },
        { name: 'Time to capitalisation', text: 'Time from putting an asset into service to capitalising the asset under construction.' },
        { name: 'Age of open assets under construction', text: 'How long costs sit on assets under construction without being settled.' },
        { name: 'Budget adherence', text: 'Deviation between the approved amount and the actual acquisition cost.' },
        { name: 'Unplanned maintenance', text: 'Share of breakdown-driven orders among all maintenance orders of an asset.' },
        { name: 'Disposals without approval', text: 'Retirements that are not preceded by the required approval.' },
      ],
      challenges: [
        {
          title: 'Assets under construction that are never finished',
          text: 'Assets that have long been in use remain as assets under construction. Depreciation starts too late, and the register does not show what is actually in operation.',
        },
        {
          title: 'Procurement bypassing approval',
          text: 'Purchase orders are placed before the investment is approved, or amounts are split across several requests to stay below approval limits.',
        },
        {
          title: 'Maintenance and accounting know different assets',
          text: 'Functional location and asset master record are not cleanly linked. Modifications and value increases do not reach asset accounting, or only at the inventory count.',
        },
        {
          title: 'Ghost assets in the register',
          text: 'Scrapped or sold assets are not retired and keep being depreciated, while the disposal is only visible in the warehouse or in maintenance.',
        },
      ],
      questions: [
        'Which assets under construction have not been capitalised since they were put into service?',
        'Where were purchase orders placed before the investment was approved?',
        'Which approval levels extend the cycle time of capex requests the most?',
        'Which assets cause an above-average number of unplanned maintenance orders?',
        'Which assets have physically left the company but are still in the register?',
        'Where does the actual acquisition cost deviate from the approved amount?',
      ],
      approach: [
        'An asset has no single case that a flat event log could represent. It comes with a capex request, several purchase orders and invoices, an asset under construction, dozens of maintenance orders over the years and a depreciation posting every period. Noreja connects these objects in the event knowledge graph, so a late capitalisation, for example, can be traced back to a delayed invoice or a missing commissioning notice.',
        'The expected order – approval before purchase order, capitalisation after commissioning, approval before disposal – is modelled with domain knowledge from asset accounting and maintenance. Deviations then show up as concrete breaches of the intended flow, not as just another variant among many.',
      ],
      faq: [
        {
          question: 'What is the acquire-to-retire process?',
          answer:
            'Acquire-to-retire (A2R) is the end-to-end process for the lifecycle of a fixed asset. It runs from the capex request through acquisition, capitalisation, maintenance and depreciation to the sale or scrapping of the asset.',
        },
        {
          question: 'What is the difference between acquire-to-retire and purchase-to-pay?',
          answer:
            'Purchase-to-pay describes procurement from purchase requisition to payment, regardless of what is bought. Acquire-to-retire uses this path to acquire an asset, but starts earlier with the capex request and then follows the asset through its entire useful life until disposal.',
        },
        {
          question: 'Which KPIs matter in acquire-to-retire?',
          answer:
            'Typical KPIs are the cycle time of capex requests, time to capitalisation, the age of open assets under construction, budget adherence, the share of unplanned maintenance and disposals without approval.',
        },
        {
          question: 'Can process mining be used in asset management?',
          answer:
            'Yes. Capex requests, purchase orders, asset transactions and maintenance orders leave timestamps and owners in the ERP and the maintenance system. Process mining shows where capitalisations stall, approvals are bypassed and the asset register drifts away from reality.',
        },
      ],
    },
  },
};
