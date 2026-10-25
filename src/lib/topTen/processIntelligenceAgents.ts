import type { TopTenContent } from '../topTenLists';

/**
 * „Top 10 Process Intelligence Agents" – eine Rangliste von Agenten-TYPEN,
 * nicht von Anbietern. Jeder Eintrag verweist auf den passenden Agenten der
 * Minerva Agent Library (src/lib/agents.ts); Fakten stammen von dort,
 * Beispiele beschreiben typische Muster, keine Kundenergebnisse.
 */
export const processIntelligenceAgents: TopTenContent = {
  id: 'process-intelligence-agents',
  metaTitle: {
    de: 'Top 10 Process Intelligence Agents 2027: KI-Agenten für die Prozessanalyse',
    en: 'Top 10 Process Intelligence Agents 2027: AI Agents for Process Analysis',
  },
  metaDescription: {
    de: 'Die zehn wichtigsten KI-Agenten für Process Mining und Prozessanalyse 2027 – von Ursachenanalyse über Compliance bis Working Capital.',
    en: 'The ten most important AI agents for process mining and process analysis in 2027 – from root cause analysis and compliance to working capital.',
  },
  intro: {
    de: 'Ein Process Intelligence Agent ist ein KI-Agent, der nicht auf losem Text, sondern auf einem Prozessmodell bzw. Wissensgraphen arbeitet – mit Ereignissen, Objekten, Abhängigkeiten und Unternehmenswissen. Dadurch kann er Fragen zu Abweichungen, Laufzeiten oder Ursachen datenbasiert und nachvollziehbar beantworten. Diese Liste ordnet die zehn Agenten-Typen, die Prozessanalyse 2027 am stärksten prägen werden. Stand: Oktober 2026, mit Ausblick auf 2027.',
    en: 'A process intelligence agent is an AI agent that works on a process model or knowledge graph – events, objects, dependencies and company knowledge – rather than on loose text. That lets it answer questions about deviations, cycle times or root causes from data, in a traceable way. This list ranks the ten agent types that will shape process analysis most in 2027. Status: October 2026, with an outlook on 2027.',
  },
  criteria: {
    de: [
      {
        title: 'Geschäftswirkung',
        text: 'Wie direkt beeinflusst der Agent Kosten, Durchlaufzeit, Liquidität oder Risiko? Agenten, deren Befunde unmittelbar zu Maßnahmen führen, stehen weiter oben.',
      },
      {
        title: 'Datenreife',
        text: 'Wie gut lassen sich die nötigen Daten aus bestehenden Quellsystemen gewinnen? Agenten, die mit Ereignissen, Zeitstempeln und Fallmerkmalen auskommen, sind schneller einsatzbereit.',
      },
      {
        title: 'Nachvollziehbarkeit',
        text: 'Kann der Agent seine Befunde auf konkrete Fälle, Regeln und Abhängigkeiten im Prozessmodell zurückführen? Erklärbare Ursachen wiegen schwerer als bloße Korrelationen.',
      },
      {
        title: 'Governance & Human in the Loop',
        text: 'Lässt sich der Agent mit klaren Berechtigungen betreiben, und bleiben folgenreiche Entscheidungen beim Menschen? Das ist die Voraussetzung für den produktiven Einsatz.',
      },
    ],
    en: [
      {
        title: 'Business impact',
        text: 'How directly does the agent affect cost, cycle time, liquidity or risk? Agents whose findings lead straight to measures rank higher.',
      },
      {
        title: 'Data readiness',
        text: 'How easily can the required data be obtained from existing source systems? Agents that work with events, timestamps and case attributes are ready to use sooner.',
      },
      {
        title: 'Traceability',
        text: 'Can the agent trace its findings back to concrete cases, rules and dependencies in the process model? Explainable causes count for more than mere correlations.',
      },
      {
        title: 'Governance & human in the loop',
        text: 'Can the agent run with clear permissions, and do consequential decisions stay with people? That is the precondition for productive use.',
      },
    ],
  },
  entries: [
    {
      name: { de: 'Ursachenanalyse-Agent', en: 'Root Cause Analysis Agent' },
      agentId: 'root-cause',
      bestFor: {
        de: 'Alle, die nach dem Warum fragen',
        en: 'Anyone asking “why?”',
      },
      summary: {
        de: 'Der Ursachenanalyse-Agent beantwortet die Frage, die nach jeder Kennzahl kommt: Warum? Er vergleicht betroffene und unauffällige Fälle, nutzt die Abhängigkeiten im kausalen Prozessgraphen und bezieht Unternehmenswissen ein. 2027 entscheidet genau diese Erklärung darüber, ob Agenten an den richtigen Stellen ansetzen.',
        en: 'The Root Cause Analysis Agent answers the question that follows every KPI: why? It compares affected and unaffected cases, uses the dependencies in the causal process graph and draws on company knowledge. In 2027, exactly this explanation decides whether agents act in the right places.',
      },
      highlights: {
        de: [
          'Beantwortet Fragen wie: Warum kommen Lieferungen zu spät, warum dauern Freigaben so lange?',
          'Misst den Anteil betroffener Fälle und die Abweichung je Merkmal vom Durchschnitt',
          'Beziffert den Beitrag eines Faktors zur Mehrdauer und zeigt vorgelagerte Ereignisse',
        ],
        en: [
          'Answers questions such as: why are deliveries late, why do approvals take so long?',
          'Measures the share of affected cases and the deviation per attribute from the average',
          'Quantifies a factor’s contribution to added duration and shows upstream events',
        ],
      },
      consider: {
        de: 'Vorgeschlagene Ursachen sind Entscheidungsunterstützung und sollten mit Fachwissen und alternativen Erklärungen abgeglichen werden, bevor Maßnahmen folgen.',
        en: 'Proposed causes are decision support and should be checked against business knowledge and alternative explanations before measures follow.',
      },
    },
    {
      name: { de: 'Strukturfehleranalyse-Agent', en: 'Structural Deviation Analysis Agent' },
      agentId: 'structural-deviation',
      bestFor: {
        de: 'Process Owner mit Soll-Ablauf',
        en: 'Process owners with a target flow',
      },
      summary: {
        de: 'Der Strukturfehleranalyse-Agent prüft jeden Fall gegen den erwarteten Ablauf im Prozessgraphen. Er findet übersprungene Aktivitäten, vertauschte Reihenfolgen, zusätzliche Schritte, Schleifen und falsche Endpunkte. Damit bildet er die Grundlage für jede weitere Analyse – erst wer Abweichungen kennt, kann sie bewerten oder automatisieren.',
        en: 'The Structural Deviation Analysis Agent checks every case against the expected flow in the process graph. It finds skipped activities, swapped sequences, extra steps, loops and wrong end points. That makes it the foundation of every further analysis – only known deviations can be assessed or automated.',
      },
      highlights: {
        de: [
          'Beantwortet: Läuft der Prozess so, wie er laufen soll – und wo nicht?',
          'Kennzahlen: Konformitätsquote, Abweichungen je Typ, betroffene Fälle und Varianten',
          'Bewertet den Zeiteffekt abweichender Fälle gegenüber konformen Fällen',
        ],
        en: [
          'Answers: does the process run the way it should – and where does it not?',
          'KPIs: conformance rate, deviations by type, affected cases and variants',
          'Assesses the time impact of deviating cases compared with conforming ones',
        ],
      },
      consider: {
        de: 'Der Agent braucht einen fachlich abgestimmten erwarteten Ablauf; ohne ihn lassen sich legitime Varianten nicht von Fehlermustern trennen.',
        en: 'The agent needs an agreed expected flow; without it, legitimate variants cannot be separated from error patterns.',
      },
    },
    {
      name: { de: 'Compliance-Agent', en: 'Compliance Agent' },
      agentId: 'compliance',
      bestFor: {
        de: 'Interne Revision und Compliance-Teams',
        en: 'Internal audit and compliance teams',
      },
      summary: {
        de: 'Der Compliance-Agent prüft, ob Prozesse interne Richtlinien, Freigabegrenzen, das Vier-Augen-Prinzip und die Funktionstrennung einhalten. Statt Stichproben prüft er alle Fälle einer Perspektive und nennt zu jedem Befund die verletzte Regel. Mit wachsenden Anforderungen an Kontrollen dürfte diese Vollprüfung 2027 zum Standard werden.',
        en: 'The Compliance Agent checks whether processes follow internal policies, approval limits, the four-eyes principle and segregation of duties. Instead of sampling, it checks every case in a perspective and names the broken rule for each finding. As requirements for controls grow, this full check is likely to become standard in 2027.',
      },
      highlights: {
        de: [
          'Beantwortet: Wo wurden Freigaben übergangen, wo gab es Funktionstrennungskonflikte?',
          'Kennzahlen: Verstoßquote je Regel, fehlende Freigaben, nachträgliche Bestellungen',
          'Holt die Regeln aus dem Context Hub statt aus fest verdrahteter Logik',
        ],
        en: [
          'Answers: where were approvals bypassed, where were there segregation-of-duties conflicts?',
          'KPIs: violation rate per rule, missing approvals, after-the-fact purchase orders',
          'Takes the rules from the Context Hub instead of hard-wired logic',
        ],
      },
      consider: {
        de: 'Die Ergebnisse sind nur so gut wie die hinterlegten Regeln – Richtlinien und Freigabegrenzen müssen aktuell und vollständig gepflegt sein.',
        en: 'The results are only as good as the stored rules – policies and approval limits must be kept current and complete.',
      },
    },
    {
      name: { de: 'Automatisierungspotenzial-Agent', en: 'Automation Potential Agent' },
      agentId: 'automation',
      bestFor: {
        de: 'Automatisierungs- und KI-Programme',
        en: 'Automation and AI programs',
      },
      summary: {
        de: 'Der Automatisierungspotenzial-Agent zeigt, welche Prozessschritte sich für Automatisierung eignen – und welche nicht. Er findet Aktivitäten, die häufig, gleichförmig und manuell ausgeführt werden, prüft feste Regeln und schätzt die freigesetzte Arbeitszeit. 2027 liefert er die belastbare Auswahl, wo RPA, Workflows oder KI-Agenten tatsächlich ansetzen sollten.',
        en: 'The Automation Potential Agent shows which process steps are suitable for automation – and which are not. It finds activities performed often, uniformly and manually, checks for fixed rules and estimates the working time freed up. In 2027 it provides the reliable shortlist of where RPA, workflows or AI agents should actually start.',
      },
      highlights: {
        de: [
          'Beantwortet: Welche Schritte lohnen sich für Automatisierung, welche sind schon automatisiert?',
          'Kennzahlen: Automatisierungsquote, manuelles Volumen, Gleichförmigkeit einer Aktivität',
          'Schätzt die Zeitersparnis auf Basis von Bearbeitungszeiten oder Annahmen',
        ],
        en: [
          'Answers: which steps are worth automating, which are already automated?',
          'KPIs: automation rate, manual volume, uniformity of an activity',
          'Estimates time savings based on processing times or assumptions',
        ],
      },
      consider: {
        de: 'Die Zeitersparnis ist eine Schätzung; ob ein Schritt automatisiert werden sollte, hängt auch von Ausnahmen und Fachregeln ab, die der Mensch bewertet.',
        en: 'Time savings are an estimate; whether a step should be automated also depends on exceptions and business rules that people assess.',
      },
    },
    {
      name: { de: 'Laufzeitenanalyse-Agent', en: 'Cycle Time Analysis Agent' },
      agentId: 'cycle-time',
      bestFor: {
        de: 'COOs mit Durchlaufzeit-Zielen',
        en: 'COOs with cycle time targets',
      },
      summary: {
        de: 'Der Laufzeitenanalyse-Agent misst, wie lange Prozesse dauern – vom ersten bis zum letzten Schritt und zwischen jeder Aktivität. Er vergleicht Durchlaufzeiten über Varianten, Zeiträume und Fallmerkmale und erklärt, warum manche Fälle deutlich länger brauchen. Statt eines Durchschnitts liefert er die Verteilung mit Median und Ausreißern.',
        en: 'The Cycle Time Analysis Agent measures how long processes take – from the first to the last step and between every activity. It compares cycle times across variants, periods and case attributes and explains why some cases take much longer. Instead of an average it delivers the distribution, with median and outliers.',
      },
      highlights: {
        de: [
          'Beantwortet: Welche Abschnitte kosten am meisten Zeit, und wie entwickelt sich das?',
          'Kennzahlen: Durchlaufzeit, Median und Perzentile, Übergangszeit zwischen Aktivitäten',
          'Zeigt den Trend über Wochen, Monate oder Quartale',
        ],
        en: [
          'Answers: which segments cost the most time, and how is that developing?',
          'KPIs: cycle time, median and percentiles, transition time between activities',
          'Shows the trend over weeks, months or quarters',
        ],
      },
      consider: {
        de: 'Belastbare Laufzeiten setzen saubere Zeitstempel und eine klare Fallabgrenzung voraus.',
        en: 'Reliable cycle times require clean timestamps and a clear case definition.',
      },
    },
    {
      name: { de: 'Wartezeitenanalyse-Agent', en: 'Waiting Time Analysis Agent' },
      agentId: 'waiting-time',
      bestFor: {
        de: 'Teams, die Engpässe auflösen',
        en: 'Teams resolving bottlenecks',
      },
      summary: {
        de: 'Der Wartezeitenanalyse-Agent findet die Zeit, in der im Prozess nichts passiert: Vorgänge warten auf Freigaben, Rückmeldungen oder den nächsten Stapellauf. Er misst die Liegezeiten zwischen Aktivitäten, zeigt, wo sie sich stauen, und erklärt mit Prozessdaten und Unternehmenswissen, warum. Oft liegt hier der größte Hebel für kürzere Durchlaufzeiten.',
        en: 'The Waiting Time Analysis Agent finds the time in which nothing happens in a process: work waits for approvals, replies or the next batch run. It measures idle times between activities, shows where they pile up and uses process data and company knowledge to explain why. This is often the biggest lever for shorter cycle times.',
      },
      highlights: {
        de: [
          'Beantwortet: Wo bleiben Vorgänge liegen, und zu welchen Zeiten besonders?',
          'Kennzahlen: Wartezeit je Übergang, Gesamtwartezeit, Wartezeitanteil an der Durchlaufzeit',
          'Erkennt zeitliche Muster nach Wochentag, Tageszeit oder Monatsabschnitt',
        ],
        en: [
          'Answers: where does work sit idle, and at which times in particular?',
          'KPIs: waiting time per transition, total waiting time, waiting time share of cycle time',
          'Detects time patterns by weekday, time of day or part of the month',
        ],
      },
      consider: {
        de: 'Ohne Start- und Endzeitpunkte je Aktivität lassen sich Warte- und Bearbeitungszeit nur näherungsweise trennen.',
        en: 'Without start and end times per activity, waiting and processing time can only be separated approximately.',
      },
    },
    {
      name: { de: 'Nacharbeitsanalyse-Agent', en: 'Rework Analysis Agent' },
      agentId: 'rework',
      bestFor: {
        de: 'Qualitäts- und Prozessverantwortliche',
        en: 'Quality and process owners',
      },
      summary: {
        de: 'Der Nacharbeitsanalyse-Agent findet die Stellen, an denen Prozesse Arbeit doppelt machen: mehrfach geänderte Rechnungen, Aufträge zurück in der Prüfung, wiederholt nachgeforderte Unterlagen. Er berechnet die Nacharbeitsquote, beziffert Mehraufwand und zusätzliche Durchlaufzeit und zeigt die Ursachen hinter den Schleifen.',
        en: 'The Rework Analysis Agent finds the places where processes do work twice: invoices changed several times, orders sent back to review, documents requested again and again. It calculates the rework rate, quantifies extra effort and added cycle time and shows the causes behind the loops.',
      },
      highlights: {
        de: [
          'Beantwortet: Welche Aktivitäten werden wiederholt, und was kostet das?',
          'Kennzahlen: Nacharbeitsquote, Wiederholungen je Aktivität, First Time Right',
          'Beziffert die Mehrdauer der Fälle mit Nacharbeit',
        ],
        en: [
          'Answers: which activities are repeated, and what does that cost?',
          'KPIs: rework rate, repetitions per activity, first time right',
          'Quantifies the added duration of cases with rework',
        ],
      },
      consider: {
        de: 'Nicht jede Wiederholung ist ein Fehler – ob eine Schleife legitim ist, muss fachlich eingeordnet werden.',
        en: 'Not every repetition is an error – whether a loop is legitimate needs a business assessment.',
      },
    },
    {
      name: { de: 'Working-Capital-Analyse-Agent', en: 'Working Capital Analysis Agent' },
      agentId: 'working-capital',
      bestFor: {
        de: 'CFOs und Finance-Teams',
        en: 'CFOs and finance teams',
      },
      summary: {
        de: 'Der Working-Capital-Analyse-Agent zeigt, wo in Prozessen Kapital gebunden ist und wo Geld zu früh oder zu spät fließt. Er verbindet Prozessdaten aus Purchase-to-Pay und Order-to-Cash mit Beträgen, Zahlungszielen und Konditionen. So wird aus Prozessanalyse eine direkte Liquiditätsfrage.',
        en: 'The Working Capital Analysis Agent shows where capital is tied up in processes and where money flows too early or too late. It combines process data from purchase-to-pay and order-to-cash with amounts, payment terms and conditions. That turns process analysis into a direct liquidity question.',
      },
      highlights: {
        de: [
          'Beantwortet: Zahlen wir vor Fälligkeit, verlieren wir Skonto, warum zahlen Kunden spät?',
          'Kennzahlen: DPO, DSO, Zahlung vor Fälligkeit, Skontoausnutzung',
          'Verknüpft Prozessschritte mit Beträgen statt nur mit Zeiten',
        ],
        en: [
          'Answers: do we pay before the due date, lose cash discounts, why do customers pay late?',
          'KPIs: DPO, DSO, payment before due date, cash discount utilization',
          'Links process steps to amounts rather than to times only',
        ],
      },
      consider: {
        de: 'Der Agent braucht neben Ereignissen auch Beträge, Zahlungsziele und Konditionen aus den Finanzdaten.',
        en: 'Besides events, the agent needs amounts, payment terms and conditions from the financial data.',
      },
    },
    {
      name: { de: 'Termintreue-Analyse-Agent', en: 'On-Time Performance Agent' },
      agentId: 'on-time',
      bestFor: {
        de: 'Lieferzusagen und SLAs absichern',
        en: 'Securing delivery dates and SLAs',
      },
      summary: {
        de: 'Der Termintreue-Analyse-Agent misst, wie zuverlässig Prozesse ihre Zusagen einhalten: Liefertermine, Service Level Agreements, gesetzliche oder vertragliche Fristen. Er zeigt den Anteil pünktlicher Fälle, die Größe der Verspätungen und den Schritt, an dem Zeit verloren geht. Auch offene Fälle mit bereits überschrittener Frist findet er.',
        en: 'The On-Time Performance Agent measures how reliably processes keep their commitments: delivery dates, service level agreements, legal or contractual deadlines. It shows the share of on-time cases, the size of delays and the step where time is lost. It also finds open cases whose deadline has already passed.',
      },
      highlights: {
        de: [
          'Beantwortet: Halten wir unsere Zusagen, und wo geht die Zeit verloren?',
          'Kennzahlen: Termintreue, OTIF (sofern Mengen vorliegen), SLA-Einhaltung',
          'Zeigt Verspätungen in Tagen als Median und Verteilung',
        ],
        en: [
          'Answers: do we keep our commitments, and where is time lost?',
          'KPIs: on-time rate, OTIF (where quantities are available), SLA compliance',
          'Shows delays in days as median and distribution',
        ],
      },
      consider: {
        de: 'Ohne hinterlegte Soll-Termine oder Fristen je Fall lässt sich Termintreue nicht messen.',
        en: 'Without a committed date or deadline per case, on-time performance cannot be measured.',
      },
    },
    {
      name: { de: 'WIP-Analyse-Agent', en: 'WIP Analysis Agent' },
      agentId: 'work-in-progress',
      bestFor: {
        de: 'Operative Steuerung im Tagesgeschäft',
        en: 'Day-to-day operations management',
      },
      summary: {
        de: 'Der WIP-Analyse-Agent beantwortet eine Frage, die klassische Laufzeitanalysen auslassen: Was liegt gerade offen im Prozess? Er zählt alle gestarteten, aber nicht abgeschlossenen Fälle, zeigt, in welchem Schritt sie stehen und wie lange schon. So wird ein wachsender Rückstau sichtbar, während er entsteht – nicht erst im Nachhinein.',
        en: 'The WIP Analysis Agent answers a question classic cycle time analyses leave out: what is open in the process right now? It counts every case started but not yet completed and shows which step each one is in and for how long. A growing backlog becomes visible while it builds up – not after the fact.',
      },
      highlights: {
        de: [
          'Beantwortet: Wie viel ist offen, wo steht es, und wächst der Rückstau?',
          'Kennzahlen: Work in Progress je Schritt, Alter offener Fälle, Durchsatz',
          'Zu- und Abgangsbilanz je Periode als Frühwarnsignal',
        ],
        en: [
          'Answers: how much is open, where is it, and is the backlog growing?',
          'KPIs: work in progress per step, age of open cases, throughput',
          'Inflow/outflow balance per period as an early warning signal',
        ],
      },
      consider: {
        de: 'Der Agent ist auf aktuelle Daten angewiesen; je seltener importiert wird, desto später erscheint ein Rückstau.',
        en: 'The agent depends on current data; the less often data is imported, the later a backlog shows up.',
      },
    },
  ],
  trends: {
    de: [
      {
        title: 'Von Einzelantworten zu dauerhaft arbeitenden Agenten',
        text: '2027 verschiebt sich der Einsatz von Agenten, die einzelne Fragen beantworten, hin zu Agenten, die im Hintergrund kontinuierlich an einer Aufgabe arbeiten. Bei Noreja sind das die Frontier Agents: Analyst Andy überwacht die Prozessperformance, Builder Benny unterstützt die Modellpflege und Compliance Conny prüft die Ausführung gegen Richtlinien.',
      },
      {
        title: 'Prozesskontext als Schutz vor Halluzinationen',
        text: 'Agenten, die nur auf Text oder Einzeltabellen zugreifen, raten bei Prozessfragen. Ein Prozessmodell mit Abhängigkeiten und Unternehmenswissen erdet ihre Antworten (Process Grounding) – Context Engineering wird damit zur Kernaufgabe.',
      },
      {
        title: 'Governance und Human in the Loop',
        text: 'Je mehr Agenten im Prozess mitarbeiten, desto wichtiger werden Berechtigungen, Protokollierung und Kontrollinstanzen wie Guardian Agents. Folgenreiche Entscheidungen bleiben beim Menschen; Agenten liefern die geprüfte Grundlage dafür.',
      },
    ],
    en: [
      {
        title: 'From one-off answers to continuously working agents',
        text: 'In 2027, the focus shifts from agents that answer single questions to agents that work continuously on a task in the background. At Noreja these are the Frontier Agents: Analyst Andy monitors process performance, Builder Benny supports model maintenance and Compliance Conny checks execution against policies.',
      },
      {
        title: 'Process context as protection against hallucinations',
        text: 'Agents that only see text or single tables guess when asked about processes. A process model with dependencies and company knowledge grounds their answers (process grounding) – which makes context engineering a core task.',
      },
      {
        title: 'Governance and human in the loop',
        text: 'The more agents take part in processes, the more permissions, logging and control instances such as guardian agents matter. Consequential decisions stay with people; agents deliver the checked basis for them.',
      },
    ],
  },
  faq: [
    {
      question: {
        de: 'Was ist ein Process Intelligence Agent?',
        en: 'What is a process intelligence agent?',
      },
      answer: {
        de: 'Ein Process Intelligence Agent ist ein KI-Agent, der auf einem Prozessmodell bzw. Wissensgraphen arbeitet – mit Ereignissen, Geschäftsobjekten, Abhängigkeiten und Unternehmenswissen. Er beantwortet Fragen zu Abweichungen, Laufzeiten, Compliance oder Ursachen und führt seine Befunde auf konkrete Fälle zurück. Im Unterschied zu einem allgemeinen Chatbot ist er auf eine Analyseaufgabe spezialisiert.',
        en: 'A process intelligence agent is an AI agent that works on a process model or knowledge graph – events, business objects, dependencies and company knowledge. It answers questions about deviations, cycle times, compliance or root causes and traces its findings back to concrete cases. Unlike a general chatbot, it is specialized in an analysis task.',
      },
    },
    {
      question: {
        de: 'Worin unterscheiden sich Process Intelligence Agents von RPA-Bots oder Chatbots?',
        en: 'How do process intelligence agents differ from RPA bots or chatbots?',
      },
      answer: {
        de: 'RPA-Bots führen fest definierte Arbeitsschritte aus, verstehen aber nicht, warum ein Prozess so läuft, wie er läuft. Chatbots antworten auf Basis von Text und raten bei Prozessfragen ohne Datengrundlage. Process Intelligence Agents analysieren dagegen das tatsächliche Prozessgeschehen und liefern begründete Befunde – etwa, welche Schritte sich überhaupt für Automatisierung eignen.',
        en: 'RPA bots execute fixed work steps but do not understand why a process runs the way it does. Chatbots answer based on text and guess on process questions without a data basis. Process intelligence agents instead analyze what actually happens in the process and deliver substantiated findings – for example, which steps are suitable for automation at all.',
      },
    },
    {
      question: {
        de: 'Welche Anbieter bieten Process Intelligence Agents an?',
        en: 'Which vendors offer process intelligence agents?',
      },
      answer: {
        de: 'Celonis bindet seine Process Intelligence über AgentC an Agenten-Plattformen an und bietet einen MCP-Server. SAP Signavio stellt seit Februar 2026 Joule Agents allgemein bereit, UiPath orchestriert mit Maestro Agenten, Roboter und Menschen, und QPR hat im April 2026 eine MCP-Schnittstelle für KI-Agenten vorgestellt. Skan AI baut ein Agents-Produkt auf beobachteter Arbeit auf; Noreja bietet die Minerva Agent Library mit zehn spezialisierten Agenten sowie die Frontier Agents.',
        en: 'Celonis connects its process intelligence to agent platforms via AgentC and offers an MCP server. SAP Signavio has made Joule Agents generally available since February 2026, UiPath orchestrates agents, robots and people with Maestro, and QPR introduced an MCP interface for AI agents in April 2026. Skan AI builds an Agents product on observed work; Noreja offers the Minerva Agent Library with ten specialized agents as well as the Frontier Agents.',
      },
    },
    {
      question: {
        de: 'Handeln Process Intelligence Agents autonom?',
        en: 'Do process intelligence agents act autonomously?',
      },
      answer: {
        de: 'Das hängt von Anbieter und Konfiguration ab. Bei Noreja liest Minerva nur: Sie ändert keine Daten in den Quellsystemen und sieht nie mehr, als die fragende Person sehen darf; Aktionen in anderen Systemen erfordern eine menschliche Freigabe. KI-Befunde sind Entscheidungsunterstützung – folgenreiche Entscheidungen sollten Menschen treffen.',
        en: 'That depends on the vendor and the configuration. At Noreja, Minerva only reads: it does not change data in source systems and never sees more than the asking person may see; actions in other systems require human approval. AI findings are decision support – consequential decisions should be made by people.',
      },
    },
    {
      question: {
        de: 'Welche Daten brauchen Process Intelligence Agents?',
        en: 'What data do process intelligence agents need?',
      },
      answer: {
        de: 'Grundlage sind Ereignisse mit Zeitstempeln, eindeutige Kennungen und die Beziehungen zwischen Geschäftsobjekten aus den Quellsystemen. Je nach Agent kommen Beträge und Zahlungsziele, Soll-Termine oder Regeln wie Freigabegrenzen hinzu. Unternehmenswissen wie Richtlinien und Prozessbeschreibungen macht die Befunde erst fachlich einordenbar.',
        en: 'The basis is events with timestamps, unique identifiers and the relationships between business objects from the source systems. Depending on the agent, amounts and payment terms, committed dates or rules such as approval limits are added. Company knowledge such as policies and process descriptions is what makes the findings interpretable in business terms.',
      },
    },
  ],
};
