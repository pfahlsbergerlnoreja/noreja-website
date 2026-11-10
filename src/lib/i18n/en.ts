import type { Translations } from "../translations";

// English UI copy. Loaded on demand by src/lib/translationsLoader.ts, so a
// visitor only downloads the language of the page they are on.
export const en: Translations = {
  navigation: {
    home: "Home",
    functionalities: "Platform",
    successStories: "Success Stories",
    partners: "Partners",
    pricing: "Pricing",
    blog: "Blog",
    team: "Team",
    downloads: "Downloads",
    events: "Events",
    careers: "Careers",
    definitions: "Definitions",
    battleCards: "Battle Cards",
    faq: "FAQ",
    frontierAgents: "Process Frontier Agents",
    minerva: "Minerva AI",
    processes: "Processes",
    agents: "Agents",
    costOfInaction: "Cost of Inaction",
    smartDataForge: "Smart Data Forge",
    quickNavigation: "Quick Navigation",
  },
  pages: {
    functionalities: {
      title: "Product",
      titleHighlight: "Functionalities",
      subtitle: "Gain complete transparency into your processes—clear, data-driven, and in real time. AI guides you to the biggest opportunities and helps you implement lasting improvements.",
      learnMore: "Clear options —",
      learnMoreHighlight: "Find out what Noreja costs",
      learnMoreSubtitle: "Compare transparent packages and pick the setup that fits your team.",
      learnMoreCta: "View Pricing",
      learnMoreCtaComparison: "Vendor Comparison",
      videoHeadline: "Minerva AI in detail",
      discoverVideoSeries: "Discover Minerva in our video series",
      capabilities: {
        dataCollection: {
          title: "Data Collection",
          description: "Intelligent data gathering from multiple sources with automated processing and real-time synchronization. Our advanced algorithms ensure comprehensive coverage while maintaining data integrity and compliance standards.",
          schematicTitle: "Data Flow Architecture",
          schematicDesc: "Multi-source data ingestion pipeline"
        },
        aiProcessing: {
          title: "AI Processing",
          description: "State-of-the-art machine learning models that analyze, classify, and extract insights from your data. Our AI engine continuously learns and adapts to provide increasingly accurate and relevant results.",
          schematicTitle: "Neural Network Pipeline",
          schematicDesc: "Advanced ML processing workflow"
        },
        analyticsInsights: {
          title: "Analytics & Insights",
          description: "Transform raw data into actionable insights with our comprehensive analytics suite. Generate detailed reports, identify trends, and make data-driven decisions with confidence.",
          schematicTitle: "Analytics Dashboard",
          schematicDesc: "Real-time insights visualization"
        },
        automation: {
          title: "Automation",
          description: "Streamline your workflows with intelligent automation that reduces manual effort and eliminates repetitive tasks. Set up custom triggers and actions to optimize your business processes.",
          schematicTitle: "Workflow Engine",
          schematicDesc: "Automated process orchestration"
        },
        integration: {
          title: "Integration",
          description: "Seamlessly connect with your existing tools and systems through our robust API and pre-built integrations. Ensure smooth data flow across your entire technology stack.",
          schematicTitle: "Integration Hub",
          schematicDesc: "System connectivity matrix"
        },
        security: {
          title: "Security",
          description: "Enterprise-grade security features protect your data at every level. With end-to-end encryption, access controls, and compliance certifications, your information stays secure.",
          schematicTitle: "Security Framework",
          schematicDesc: "Multi-layer protection system"
        }
      }
    },
    successStories: {
      title: "Customer",
      titleHighlight: "Success Stories",
      storiesSection: {
        title: "Customer projects across {industries} industries",
        text: "{companies} companies across {industryList}. {published} of them are published as a full case study, the others are in preparation. What they share: in every one of them the starting point was a process whose behaviour nobody could fully explain.",
      },
      subtitle: "See how other organizations use Noreja Process Intelligence to move faster, work more efficiently, and stay data-driven—and what you can apply to your own processes.",
      readCaseStudy: "Read Case Study",
      comingSoon: "Coming soon",
      backButton: "Back to Success Stories",
      downloadSection: {
        title: "Still unsure?",
        subtitle: "Read the full report in a downloadable PDF!",
        buttonLabel: "DOWNLOAD SUCCESS STORY"
      },
      pricingCta: {
        title: "Ready to get started?",
        highlight: "",
        subtitle: "Discover our pricing and find the right plan for your business.",
        buttonLabel: "View Pricing"
      },
      partnerSection: {
        title: "Trusted Partners —",
        highlight: "real value",
        subtitle: "Our consulting and implementation partners help you unlock even more from Noreja Process Intelligence. See how they move your initiatives forward with precision.",
        buttonLabel: "Explore Partners"
      },
      useCasesSection: {
        title: "Industry Use Cases",
        subtitle: "Discover how Noreja Process Intelligence transforms operations across industries.",
        buttonLabel: "Learn More"
      }
    },
    useCases: {
      cta: {
        title: "Ready to Transform Your Processes?",
        description: "Discover how Noreja Process Intelligence can help your organization achieve similar results.",
        buttonLabel: "Get Started",
        secondaryButtonLabel: "View Success Stories"
      }
    },
    partners: {
      title: "Our",
      titleHighlight: "Partners",
      subtitle: "Collaborating with industry leaders to deliver innovative solutions and drive digital transformation across every sector.",
      strategicPartnerships: "Strategic Partnerships",
      trustedBy: "Trusted by leading organizations worldwide",
      visitWebsite: "Visit Website",
      becomePartner: "Become a Partner",
      partnerWithUs: "Partner With Us",
      learnMore: "Learn More",
      partnerSubtitle: "Join our ecosystem of innovative partners and unlock new opportunities for growth, collaboration, and shared success.",
      successStoriesCta: {
        title: "Successful Projects —",
        highlight: "real results",
        description: "Discover how organizations use Noreja Process Intelligence to work more efficiently—and what you can apply to your own processes.",
        buttonLabel: "Explore Success Stories"
      },
      partnerDescriptions: {
        "1": "Aptean (formerly Ramsauer & Stürmer) is one of the major players in Austria’s software and consulting market. Since 1984, it has delivered advanced ERP systems covering finance, HR, procurement, inventory, and order management. Clients also benefit from tailored consulting at the business–IT interface throughout their entire ERP customer journey.",
        "2": "Miragon is a boutique consultancy specializing in process management, process mining, and automation. Based in Augsburg, it helps companies of all sizes digitalize processes, uncover inefficiencies, and build modern process capabilities. As a technology and implementation partner, it supports clients in deploying process mining effectively and increasing process maturity.",
        "3": "Changeenablers Ltd is a boutique consulting firm specializing in business process management and process mining. It helps organisations uncover the root causes of process inefficiencies, implement tailored solutions, and monitor process health over the long term.",
        "4": "WAITS Software- und Prozessberatungsgesellschaft mbH is an innovative tech company delivering efficient, secure, and sustainable solutions since 1999. Its experienced team supports clients across the DACH region throughout all phases of IT projects. As a fulfiller, WAITS not only advises but actively contributes hands-on.",
        "5": "Nexigo GmbH is a seasoned German consultancy with over 20 years of experience in digital process transformation. With strong expertise in Oxaion and Odoo, it supports clients in analyzing, designing, and implementing complex requirements. Nexigo values close collaboration and delivers sustainable, flexible solutions from initial analysis to ongoing optimization.",
        "6": "BOC Group is a leading provider of enterprise modeling software supporting process optimization and digital transformation. With ADONIS, ADOIT, and ADOGRC, it offers flexible, integrable solutions for BPM, enterprise architecture, and GRC. More than 1,500 customers worldwide rely on its user-friendly, innovative tools.",
        "7": "Vienesse Consulting is an emerging Vienna-based firm guiding clients through data- and process-driven digital transformation. With a focus on data culture, transparency, and trust, it enables effective use of modern tools. Together, the right change measures and process adjustments are defined to turn insights into lasting business value.",
        "8": null,
        "9": null,
        "10": "Fortlane Partners is an international advisory firm specializing in strategy, M&A and transformation. With about 150 professionals at six offices across three countries, they support companies in complex transactions and change initiatives.",
        "11": null,
        "12": "The PwC Scale program connects startups, corporates, and investors. We are proud to be part of the B2B tech cohort. This participation lets us showcase our vision and technology to a wider audience while benefiting from PwC’s expertise. It helps us advance our solutions and deliver innovations tailored to our customers’ needs.",
        "13": "Humboldt Innovation links academia, industry, and society through applied research services, startup support, and events. As a subsidiary of Humboldt University, it enables access to research and innovation. Noreja is listed as a Humboldt startup and benefits from this strong scientific network.",
        "14": "WU Vienna, with over 23,000 students, is Europe’s largest business university and part of the global top 1 % through triple accreditation (EQUIS, AACSB, AMBA). Its 2,100 staff ensure excellence in research and teaching. Noreja is a spin-off of the Institute for Data, Process and Knowledge Management, focusing on BPM, knowledge management, decision support and the semantic web.",
        "15": "“Nährboden” is the startup program of BRANDL & TALOS, one of Austria’s leading law firms. As part of the program, Noreja benefits from broad legal expertise. BRANDL & TALOS supports startups as a sparring partner on their growth path—from funding and market entry to M&A, venture capital, partner search, and successful exits.",
        "20": "KBC is an internationally active management consultancy, fully owned by its participating partners. Since 2007, KBC has developed tailored solutions — from strategy to operational management — for international corporations and leading mid-sized companies, particularly in the technology and automotive industries.",
        "22": "MINAUTICS GmbH is a full-service BPM consultancy in the German-speaking region that combines cross-industry experience with specialized expertise — from training and consulting to full implementation projects — to deliver demonstrably effective process improvements for its clients."
      },
      partnerCategoryDescriptions: {
        technology: "Vendors whose software docks directly onto Noreja, so modelling, workflow execution and data storage work together inside a project.",
        software: "Software vendors we integrate with so process data flows between the systems without manual export.",
        consulting: "Consultancies that deliver Noreja projects at the customer site — from process capture through proof of value to rollout.",
        insurance: "Insurance partners contributing domain knowledge on claims, policy and reserve processes.",
        advisory: "Advisors supporting our strategic direction and the way we take the product to market.",
        industry: "User companies that run Noreja in their own operations and feed their experience back into the product.",
        academic: "Research partners whose work supplies the methodical basis of causal process mining — and with whom we keep developing it.",
        legal: "Law firms covering contract, data-protection and compliance questions around process data.",
        incubator: "Programmes and networks that supported Noreja in building the company and reaching enterprise customers.",
        uncategorized: "Further partners we work with on a project basis."
      },
      partnerCategories: {
        technology: "Technology",
        software: "Software",
        consulting: "Consulting",
        insurance: "Insurance",
        advisory: "Advisory",
        industry: "Industry",
        academic: "Academic",
        legal: "Legal",
        incubator: "Incubator",
        uncategorized: "Other Partners"
      }
    },
    pricing: {
      title: "Transparent Pricing, Clear Solutions",
      subtitle: "Choose the package that suits your needs. We'll help you choose – quickly and transparently.",
      composition: {
        title: "How your price is put together",
        text: "Three components decide the price. First the data volume, measured in graph nodes. Second the perspectives — how many views you take on the same process. Third you pick one of the three plans below. A plan sets the price per power user and comes with a fixed minimum: three for Core, six for Pro, ten for Excellence. Additional power users can be added on top at any time.",
      },
      teamSize: "Team Size:",
      dataVolume: "Data Volume:",
      dataAmount: "Data amount",
      perspectives: "Perspectives",
      dataAmountSuffix: ", based on graph nodes:",
      perspectivesSuffix: ", i.e., views on the process:",
      dataAmountTooltip: "Graph nodes are the smallest storage unit in our database. A node roughly corresponds to an event. Chunks from imported documents and text are also stored as nodes.",
      perspectivesTooltip: "A perspective (or dimension) is a user-defined view of the process and can be created individually. Typically, the distinction is made based on process boundaries or responsibilities.",
      usersTooltip: "Power Users are fully licensed editors. Reading users can be added as noted below.",
      users: "users",
      user: "user",
      extraPowerUserPrice: "Price for extra power user: {value}€ per month",
      additionalPowerUsersLabel: "Additional power users",
      readingUsers: "{count} reading users",
      mostPopular: "Most Popular",
      month: "/ month",
      perMonthAndUser: "per month and power user",
      perYear: "per year",
      annualCostTooltip: "Calculated total cost per year for the plan, based on the selected data amount and perspectives.",
      perUserCostTooltip: "Total monthly price divided by the {count} power users included in the plan.",
      year: " /year",
      onRequest: "let's talk",
      viewAllFeatures: "View all features",
      contactUs: "Contact us",
      footerNote: "All plans include 14-day free trial • No setup fees • Cancel anytime",
      statisticsNote: "*Average values based on completed client projects. Actual results may vary depending on process maturity, company size, and industry.",
      statisticsBox: {
        lines: [
          "Discover approx. {costDriverPercent} of hidden cost drivers in your processes. Save approx. {ftePercent} of FTE for process analysis.*"
        ]
      },
      categories: {
        feature: "Feature",
        users: "Users",
        aiTokens: "AI Minerva Tokens",
        service: "Service",
        onboarding: "Onboarding",
        llmAi: "LLM + AI",
        supportRate: "Additional"
      },
      privateLLMHosting: "Private LLM Hosting by Noreja",
      proofOfValue: {
        eyebrow: "How we work with you",
        title: "Start with a Proof of Value",
        text: "Every license starts with a two-month Proof of Value. After that you decide: continue or opt out. Your risk stays low and your costs stay predictable.",
        povTitle: "Proof of Value",
        povDuration: "2 months",
        months: ["Start", "Month 1", "Month 2"],
        milestones: [
          "Kick-off & data connection",
          "Onboarding of your first process",
          "First insights & proof of value"
        ],
        decisionTitle: "Decision",
        decisionSub: "after 2 months",
        continueLabel: "Option A",
        continueTitle: "Continue with the license",
        continuePrice: "Full license price",
        continueText: "The Proof of Value is fully credited towards the license, so most of the onboarding for your first process is already done.",
        continueTag: "PoV credited to the license",
        optOutLabel: "Option B",
        optOutTitle: "Opt out",
        optOutPrice: "Fixed fee of 12.500 €",
        optOutText: "You cancel at the end of the Proof of Value and pay a one-time fixed fee.",
        benefits: [
          { title: "Low risk", text: "After two months you can exit for a fixed fee." },
          { title: "Predictable costs", text: "Both paths and their costs are fixed from the start." },
          { title: "Credited, not lost", text: "The PoV counts fully towards the license and the onboarding is already done." }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our pricing and plans",
        linkLabel: "See all questions in the FAQ",
      },
      plans: {
        core: {
          name: "Core",
          description: "With the core features of Causal Process Mining and initial support for data connectivity",
          statistics: {
            costDriverPercent: "25%",
            ftePercent: "19%"
          },
          features: [
            "Dashboard",
            "Analyzer", 
            "Builder"
          ],
          users: "3 Power Users",
          aiTokens: [
            "No AI tokens included",
            "Usage-based billing"
          ],
          services: [
            "Data Onboarding Workshop (2x p.a.)",
            "Biweekly Value-Support Session (45 mins)",
            "Rate for on-top support: 1.250€ per day"
          ],
          onboarding: [
            "Access to video training materials and Noreja Docs"
          ],
          llmAi: [],
          cta: "Start free trial"
        },
        pro: {
          name: "Pro",
          description: "With advanced AI features through Minerva-AI and continuous support in discovery",
          statistics: {
            costDriverPercent: "39%",
            ftePercent: "26%"
          },
          features: [
            "all from CORE",
            "AI Hub",
            "  Agent-Builder",
            "  Skill-Builder",
            "  Workspace-Manager",
            "Context Hub",
            "Connectivity Hub"
          ],
          users: "6 Power Users",
          aiTokens: [
            "Tokens worth 1.250€ per year included",
            "Beyond that, usage-based billing"
          ],
          services: [
            "Data Onboarding Workshop (3x p.a.)",
            "Process Optimization Workshop (1x p.a.)",
            "Context Collection Workshop (1x p.a.)",
            "Biweekly Value-Support Session (90 mins)",
            "Rate for on-top support: 950€ per day"
          ],
          onboarding: [
            "3-day online training by Noreja experts included"
          ],
          llmAi: [
            "Minerva-AI",
            "(Single) LLM"
          ],
          cta: "Start free trial"
        },
        excellence: {
          name: "Excellence",
          description: "For highly complex reasoning incl. Multi-LLM option and intensive support for value realization",
          statistics: {
            costDriverPercent: "44%",
            ftePercent: "32%"
          },
          features: [
            "all from PRO",
            "Workbench",
            "Macro Builder"
          ],
          users: "10 Power Users",
          aiTokens: [
            "Tokens worth 3.000€ per year included",
            "Beyond that, usage-based billing"
          ],
          services: [
            "Data Onboarding Workshop (4x p.a.)",
            "Process Optimization Workshop (2x p.a.)",
            "Context Collection Workshop (1x p.a.)",
            "Process Strategy Workshop with Partner Company (1x p.a.)",
            "Weekly Value-Support Session (60 mins)",
            "Customer specific KPIs/Agent development (2x p.a.)",
            "Rate for on top support: 850€ per day"
          ],
          onboarding: [
            "6 training days by Noreja experts included"
          ],
          llmAi: [
            "all from PRO",
            "Multi-LLM"
          ],
          cta: "Contact us"
        }
      },
      successStoriesCta: {
        title: "What Does Noreja Mean",
        highlight: "in Practice?",
        description: "Discover through real projects what effects Process Intelligence actually delivers—beyond feature lists.",
        buttonLabel: "View Successful Projects"
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Reach out to our team for questions, collaborations, or product demos.",
      reasonsTitle: "What people get in touch about",
      reasons: [
        { title: "A demo or a proof of value", text: "We turn the loop once with your data and show what one of your processes holds — including a calculated business case. Most customers start with a fixed-price proof of value on a single sub-process." },
        { title: "Pricing and plans", text: "Which of the three plans fits your data volume and the number of process perspectives you need is usually fastest to settle in a short call." },
        { title: "Partnership", text: "Consulting, technology, industry and research partners deliver Noreja projects together with us — from proof of value to rollout." },
        { title: "Technical questions", text: "Causal process mining, event knowledge graphs, or how Noreja differs from frequency-based process mining tools: ask directly, or read up in our definitions and vendor comparisons." },
      ],
      salesContact: {
        greeting: "I'm happy to talk to you",
        intro: "Whether it's a demo, a proof of value or a first look at one of your processes: give me a call or use the form — I'll get back to you personally.",
        callLabel: "Call me",
        hello: "Hi there!",
        questionsLabel: "Questions I hear every day",
        questions: [
          "What does process mining actually mean?",
          "How quickly can we get started?",
          "Which problems do you solve?",
          "Does it work with our SAP?",
          "What does a proof of value cost?",
          "What is causal process mining?",
          "How much effort is it for our IT?",
          "What do the Minerva agents do?"
        ],
        reply: "All good questions — I'd rather answer them in person. Give me a call!"
      },
      formTitle: "Prefer to write?",
      bookCallText: "Prefer to book a call directly?",
      bookCallButton: "Book a Call",
      responseNote: "We typically respond within 24 hours.",
      formLoading: "Loading contact form…",
      formError: "We couldn't load the contact form. Please reload the page or reach us at hello@noreja.com."
    },
    aiAgents: {
      title: "Minerva Frontier Agents",
      subtitle: "AI agents that independently understand and evolve your processes — data-driven, context-aware, and continuously aligned with your organization.",
      cards: {
        card1: {
          title: "Builder Benny",
          description: "Suggests changes to the process model. Helps detect schema changes in your data sources and supervises data imports and their performance.",
          efficiencyTag: "~40% faster model adjustments"
        },
        card2: {
          title: "Analyst Andy",
          description: "Keeps an eye on your process performance, identifies root causes of deviations, and suggests optimization opportunities for your processes.",
          efficiencyTag: "~35% less analysis effort"
        },
        card3: {
          title: "Compliance Conny",
          description: "Monitors compliance issues and validates process execution based on contextual data. Creates compliance reports for stakeholders.",
          efficiencyTag: "~30% lower compliance review effort"
        }
      },
      waitlistCta: {
        title: "Be Among the First",
        subtitle: "Join the waitlist to get early access to our AI Agents.",
        buttonLabel: "Join the Waitlist"
      },
      frontierAgentsExplainer: {
        title: "What are frontier agents?",
        paragraph1: "Frontier Agents are autonomous, AI-powered agents within Noreja that work continuously in the background on a **specific task or question**. Rather than merely responding to individual, manual analyses, they pursue a goal over a longer period: They observe developments, detect changes, test hypotheses, and deliver results proactively—always in relation to the process and knowledge context available in Noreja.",
        paragraph2: "An important point: Frontier Agents are **not one-off \"queries\"** but rather digital team members that **stay engaged over time**. They continuously analyze data and models, keep defined KPIs or rules in view, and report back as soon as something relevant arises—for example, when process performance deviates, when data sources change, or when compliance risks emerge."
      }
    }
  },
  hero: {
    badge: "Generative Process Intelligence",
    headingFixed: "Noreja makes processes",
    headingWords: ["transparent", "understandable", "efficient", "compliant"],
    title: "The Future of",
    titleHighlight: "Innovation",
    subtitle: "Elevating Process Knowledge with the Power of GenAI – Turn Process Analysis into a Continuous ROI Engine. Enterprise technology, built for efficiency in medium-sized businesses.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Learn More",
    getStarted: "Book a Demo",
    learnMore: "Learn More",
    features: {
      secure: "Secure",
      fast: "Fast",
      innovative: "Innovative"
    },
    dataCollection: {
      title: "Data Collection",
      description: "Intelligent data gathering from multiple sources"
    }
  },
  functionalities: {
    title: "One platform —",
    titleHighlight: "with AI-powered Process Intelligence",
    subtitle: "Our platform unifies every process data point, analysis, and insight in one place. AI helps you understand workflows, uncover bottlenecks, and make better decisions faster.",
    exploreFeatures: "Explore All Features",
    dataCollection: {
      title: "Data Collection",
      description: "Advanced data gathering and processing capabilities with real-time synchronization.",
    },
    aiProcessing: {
      title: "AI Processing",
      description: "Intelligent automation and machine learning algorithms for enhanced decision-making.",
    },
    analyticsInsights: {
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard with actionable insights and predictive analytics.",
    },
    automation: {
      title: "Automation",
      description: "Streamlined workflow automation to increase efficiency and reduce manual tasks.",
    },
    integration: {
      title: "Integration",
      description: "Seamless integration with existing systems and third-party applications.",
    },
    security: {
      title: "Security",
      description: "Enterprise-grade security measures ensuring data protection and compliance.",
    },
    features: {
      aiAnalytics: {
        title: "Minerva",
        description: "Minerva is your context-sensitive AI assistant: It connects process data with additional knowledge such as SLAs, organizational rules, or external influences, delivering answers that go beyond classic Event Logs.\n\n Whether questions about the platform, anomalies in the Analyzer, or optimization ideas: Minerva analyzes your knowledge graphs directly, explaining why patterns emerge and how processes can be improved. You decide which models are used: Noreja-Hosted, your own On-Prem LLMs, or verified Cloud models. Everything is data protection compliant and fully controllable. In short: Minerva makes processes not only visible, but understandable."
      },
      dataIntegration: {
        title: "Analyzer",
        description: "The Analyzer is your interactive workspace for detailed examination of every process step. On the central canvas, you visualize the real end-to-end flow, while variant lists, KPIs, and display levels help you quickly uncover patterns, bottlenecks, and deviations.\n\n Choose different perspectives like Process, Case, Pattern, or Timeline View and control which information comes into focus: cycle times, rework, violations, hypothetical paths, or detailed metrics at the activity and path level. With a few clicks, you go from the overall overview to the detailed analysis of individual cases or export your insights directly as a BPMN model or high-resolution visualization.\n\n The Analyzer combines exploratory analysis with clear structure: a single place to understand processes, make causes visible, and make better decisions."
      },
      security: {
        title: "Dashboard",
        description: "Keep central process metrics, trends, and anomalies in view at all times. The Dashboard combines different widgets so you can quickly capture volume, times, variants, deviations, and developments. Assemble your view flexibly: from simple KPIs to distributions and trend indicators to configurable analyses. This creates a clear overview of your process performance, precisely tailored to your questions."
      },
      realTime: {
        title: "Builder",
        description: "The Builder is your control center for every analytical foundation: Here you connect data sources, model events, and define dimension logics that later power Dashboards, Analyzer, and AI features.\n\n Whether it's ServiceNow, PostgreSQL, Oracle, or REST APIs. Every connector can be set up, tested, and kept current in just a few steps. In clearly structured overviews, you immediately see which sources are active, which Entity Graphs have been imported, and what state your dimension models are in. With drag-and-drop, you build event graphs, define timestamps, properties, and complex relationships, including validation and transparent SQL insight.\n\n You model dimensions directly based on your events: place activities, draw causal paths, define and import filters. This creates a consistent, semantically clean model that your teams can later analyze intuitively. The Builder combines technical precision with fast iteration, a single workspace to transform raw data into a reliable, reusable process model."
      },
      workbench: {
        title: "Workbench",
        description: "The Workbench is your technical laboratory: a fully integrated Jupyter Notebook directly on the Noreja Knowledge Graph. Data scientists, engineers, and analysts can work here with Python as if they were in their familiar notebook environment, only directly on the graph database.\n\n Write scripts, test hypotheses, build your own KPIs, models, or data pipelines, and save your notebooks for repeatable, highly customized analyses. This connects exploration code, production-ready evaluations, and documentation in one step.\n\n Each user receives their own Workbench instance, admins maintain oversight through a central management panel and can start, stop, or clean up instances as needed. In short: The Workbench brings real data science power to where your process data lives, without tool breaks and without detours."
      }
    },
    teaserFeatures: {
      aiAnalytics: {
        title: "Minerva",
        description: "Your AI-powered process analyst. Minerva combines process data with contextual knowledge to identify causes and provide well-founded recommendations for action."
      },
      dataIntegration: {
        title: "Analyzer",
        description: "Dive deep into your processes, understand relationships, and quickly discover where and why problems arise, data-driven and traceable."
      },
      security: {
        title: "Dashboard",
        description: "Present your process insights clearly and concisely or use the dashboard to continuously monitor changes and improvements."
      },
      realTime: {
        title: "Builder",
        description: "Import data directly, without event logs, supplement knowledge, hypotheses, or contextual data with just a few clicks. This way you maintain full control over your analysis."
      },
      workbench: {
        title: "Workbench",
        description: "Extend your analyses with custom scripts in the integrated Jupyter Notebook, without leaving the application. Your data always stays with you."
      }
    },
    frontierAgentsCta: {
      title: "Discover Minerva Frontier Agents",
      subtitle: "Autonomous AI agents that analyze, decide, and optimize your workflows alongside your team.",
      buttonLabel: "Learn more"
    }
  },
  processGraph: {
    heading: "The causal process graph, live",
    lede: "Instead of a flat event log, Noreja reconstructs your process as a graph of causally linked steps. Drag a node to see what depends on it — the findings panel lists what the analysis surfaces in an order-to-cash process.",
    hint: "Click, move, hold, and CTRL scroll",
    findingsHeader: "EXAMPLE FINDINGS · ORDER TO CASH",
    findings: [
      { title: "Long waiting time at step Invoice", meta: "avg. 6.4 d idle · 12,310 cases" },
      { title: "Violation patterns in the dunning levels", meta: "3 levels skipped · 8% of receivables" },
      { title: "€54,000 of trapped working capital found", meta: "payment terms exceeded · DSO +11 d" },
      { title: "Rework loop at Credit Check", meta: "1.8 repetitions per order" },
      { title: "Duplicate invoice postings detected", meta: "216 cases · €91,400 exposure" },
      { title: "Manual price override before billing", meta: "4,120 cases · approval missing" },
      { title: "Early payment discount lost", meta: "27% of invoices · €18,700 forgone" },
      { title: "Delivery blocked after credit limit hit", meta: "avg. 3.1 d added lead time" }
    ]
  },
  usps: {
    title: "Four strengths —",
    highlight: "one clear advantage",
    subtitle: "These capabilities give you full transparency, greater efficiency, and more control over your processes. Discover the four core areas that make the decisive difference.",
    cta: "Talk to our experts",
    tapToLearnMore: "Tap to learn more",
    features: {
      connectionSpeed: {
        title: "Fast Connection",
        description: "Data integration works without intermediate steps such as an event log. The Builder connects directly to the tables of the (relational) databases. This significantly accelerates data connection compared to conventional solutions."
      },
      realisticResults: {
        title: "Realistic Results",
        description: "The process analysis takes into account the complex relationships within the data schema of the underlying source systems. This makes the analyses more realistic and avoids the weaknesses of traditional solutions."
      },
      multidimensionalPerspectives: {
        title: "Multidimensional Perspectives",
        description: "Process analysis can be performed in a multidimensional way. Users can add additional views based on various business objects, such as an order number, user ID, or invoice number."
      },
      contextDomainKnowledge: {
        title: "Context and Domain Knowledge",
        description: "By integrating context and domain knowledge (unstructured text), a direct comparison between the target (TO-BE) and actual (AS-IS) state of a process can be made. In addition, AI can better interpret process analyses with context and derive the right implications."
      }
    }
  },
  integrations: {
    badge: "Integrations",
    title: "Flexible connectivity —",
    titleHighlight: "limitless data integration",
    subtitle: "With numerous connectors you can link data from diverse source systems in no time. This creates an end-to-end, reliable foundation for your process analyses. Noreja connects virtually every well-known relational database technology and can also ingest data via common REST APIs. Individual data sources can then be combined to map entire end-to-end process chains.",
    discoverIntegrations: "Discover integrations"
  },
  process: {
    title: "How It Works",
    subtitle: "Our streamlined approach ensures maximum efficiency and optimal results.",
    steps: {
      collect: {
        title: "Collect",
        description: "Gather and organize data from multiple sources with automated collection processes.",
      },
      process: {
        title: "Process",
        description: "Apply advanced algorithms and AI to transform raw data into actionable insights.",
      },
      analyze: {
        title: "Analyze",
        description: "Generate comprehensive reports and visualizations for informed decision-making.",
      },
      optimize: {
        title: "Optimize",
        description: "Continuously improve processes based on performance metrics and feedback.",
      },
      processing: {
        title: "AI Processing",
        description: "Advanced machine learning algorithms analyze patterns"
      },
      security: {
        title: "Security Layer",
        description: "Enterprise-grade security and compliance"
      },
      analysis: {
        title: "Pattern Analysis",
        description: "Deep learning identifies complex data relationships"
      },
      optimization: {
        title: "Optimization",
        description: "Continuous performance enhancement"
      },
      encryption: {
        title: "Data Encryption",
        description: "Military-grade protection for sensitive information"
      },
      deployment: {
        title: "Deployment",
        description: "Seamless integration with your systems"
      },
      users: {
        title: "User Experience",
        description: "Intuitive interface for maximum productivity"
      }
    },
  },
  partners: {
    title: "Real insights —",
    titleHighlight: "voices from the field",
    subtitle: "Our customers and partners share how they achieve tangible improvements with Process Intelligence. Let their experiences and successes inspire you.",
    viewAll: "View All Partners",
    viewAllPartners: "View All Partners",
    stats: {
      clients: "Enterprise Clients",
      countries: "Countries",
      users: "Users Worldwide"
    }
  },
  blog: {
    title: "Relevant topics —",
    titleHighlight: "curated for you",
    subtitle: "Our blog shares best practices, trends, and well-founded insights on modern process management. Stay up to date and deepen your expertise.",
    latestPosts: "Latest Posts",
    readMore: "Read More",
    openBlog: "Open Blog",
    poweredBy: "powered by HubSpot",
    placeholder: "Blog posts will appear here",
    configNote: "Configure HubSpot embed or RSS feed in useEffect",
    features: {
      quickTips: {
        title: "Quick Tips",
        description: "Practical tips and quick insights to improve your processes and workflows.",
      },
      twoForOne: {
        title: "Two for One",
        description: "Articles that deliver double value with combined insights and practical applications.",
      },
      newsRoundUp: {
        title: "News Round Up",
        description: "Curated summaries of the latest news and developments in process management.",
      },
      businessCase: {
        title: "Business Case",
        description: "Real-world business scenarios and case studies demonstrating process improvements.",
      },
      featureHighlight: {
        title: "Feature Highlight",
        description: "In-depth looks at platform features and how they solve real business challenges.",
      },
    },
    categories: {
      quickTips: "Quick Tips",
      twoForOne: "Two for One",
      newsRoundUp: "News Round Up",
      businessCase: "Business Case",
      featureHighlight: "Feature Highlight",
    },
    viewAllPosts: "View All Posts",
    latestFrom: "Latest from",
    subscribeRss: "Subscribe to RSS",
    subscribeNewsletter: "Subscribe to Newsletter",
    whatYouFind: "Explore our content organized by category",
    latestPostsPreview: "Latest Posts Preview",
    getGlimpse: "Get a glimpse of our recent content",
    newsletterCta: {
      title: "Stay Updated",
      description: "Get the latest insights, technical articles, and industry analysis delivered to your inbox.",
      subscribeLinkedIn: "Subscribe on LinkedIn"
    },
  },
  downloads: {
    title: "Resource Downloads",
    subtitle: "Download whitepapers, product briefs, compliance documents, or industry reports to deepen your understanding of modern process intelligence and Noreja’s methodology.",
    filterByCategory: "Filter by Category:",
    availableDownloads: "Available Downloads",
    resource: "resource",
    resources: "resources",
    clickToDownload: "Click on any resource below to download after completing a quick form.",
    access: {
      free: "Free Download",
      locked: "Email Required",
    },
    noResourcesFound: "No resources found",
    noResourcesDescription: "No downloads available for the selected category.",
  },
  events: {
    title: "Events &",
    titleHighlight: "Announcements",
    subtitle: "Browse our upcoming events and secure your seat. Get first-hand insights on how to get more out of your process intelligence.",
    upcomingEvents: "Upcoming Events",
    pastEvents: "Past Events",
    noUpcomingEvents: "No upcoming events at the moment",
    noUpcomingDescription: "Stay tuned for future announcements and exciting events. We'll keep you informed about upcoming opportunities.",
    stayTuned: "Stay tuned for future announcements",
    subscribeNewsletter: "Subscribe to Newsletter",
    register: "Register",
    learnMore: "Learn More",
    viewDetails: "View Details",
    showPastEvents: "Show Past Events",
    hidePastEvents: "Hide Past Events",
    eventDate: "Event Date",
    eventTime: "Time",
    location: "Location",
    online: "Online",
    onsite: "On-site",
    hybrid: "Hybrid",
    free: "Free",
    paid: "Paid",
    capacity: "Capacity",
    spotsLeft: "spots left",
    soldOut: "Sold Out",
    loadingEvents: "Loading events...",
    upcomingEvent: "upcoming event",
    upcomingEventsLabel: "upcoming events",
  },
  careers: {
    subtitle: "Become part of our team and help shape the future of process intelligence. Explore our open positions.",
    aboutTitle: "What working at Noreja looks like",
    aboutParagraphs: [
      "Noreja Intelligence builds a process intelligence platform on a causal process model rather than a flat event log. That means the problems here are genuinely open ones: how a process is reconstructed as a graph, how an agent gets from an anomaly to a root cause, how an effect is proven in euros rather than asserted.",
      "The team combines research and practice. Our founders come out of academic process mining research, and our advisory board brings operational experience from industry — so a question about method and a question about a customer rollout land in the same room.",
      "We work with partners across consulting, technology, industry and research, which means projects reach real production environments rather than staying in prototypes.",
    ],
    openPositions: "Open Positions",
    openPosition: "open position",
    openPositionsLabel: "open positions",
    noOpenPositions: "No open positions at the moment",
    noOpenPositionsDescription: "We currently have no open positions, but we're always interested in talented people. Feel free to send us an unsolicited application.",
    initiativeApplication: "Send Unsolicited Application",
    applyNow: "Apply Now",
    fullTime: "Full-time",
    partTime: "Part-time",
    internship: "Internship",
    workingStudent: "Working Student",
    remote: "Remote",
    onsite: "On-site",
    hybrid: "Hybrid",
    joinTeamTitle: "Join Our Team",
    joinTeamSubtitle: "We're looking for talented people who want to shape the future of process intelligence with us.",
    joinTeamCta: "View Open Positions",
    aboutCompanyHeading: "About Noreja",
    roleDescriptionHeading: "Your Role",
    tasksHeading: "Your Tasks",
    requirementsHeading: "Your Profile",
    benefitsHeading: "What We Offer",
    closingHeading: "Interested?",
    viewDetails: "View Details",
    backToOverview: "Back to Open Positions",
  },
  team: {
    title: "The Noreja Team",
    subtitle: "Our team is made up of experts who live and breathe process intelligence. We help you make your processes measurably better.",
    connectLinkedIn: "Connect on LinkedIn",
    founders: "Founder-Team",
    team: "The Noreja team brings together experts from research and practice",
    learnMore: "Learn More",
    advisoryBoard: "Advisory-Board",
    advisorySubtitle: "Industry experts and thought leaders who guide our strategic direction and innovation.",
  },
  downloadGate: {
    download: "Download",
    downloaded: "Downloaded",
    fillForm: "Please fill out the form below to access your download.",
    success: "Success!",
    downloadStarted: "Your download has started.",
    error: "Error",
    formLoadError: "Failed to load download form. Please try again.",
  },
  finalCta: {
    badge: "Ready to Start",
    title: "Take the Next Step — ",
    titleHighlight: "with Noreja",
    subtitle: "Join companies that are redefining growth and efficiency with intelligent process analysis.",
    ctaPrimary: "Get Started Today",
    ctaSecondary: "Schedule a Demo",
    startJourney: "Start Your Journey",
    scheduleDemo: "Book a Demo"
  },
  footer: {
    description: "Noreja Generative Process Intelligence - Elevating Process Knowledge with the Power of GenAI.",
    copyright: "All rights reserved.",
    builtWith: "Built with AI 🤖 and Coffee ☕️",
    sections: {
      platform: "Platform & AI",
      processes: "Processes",
      allProcesses: "All processes",
      resources: "Resources",
      company: "Company",
      competenceCenter: "Competence Center",
      legal: "Legal",
      contact: "Contact",
      referralProgram: "Referral Program",
      documentation: "Documentation"
    },
    links: {
      imprint: "Imprint",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    legal: {
      imprint: "Imprint",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      trustCenter: "Trust Center"
    },
    contact: {
      contactForm: "Contact Form",
      bookAppointment: "Book Appointment"
    },
    certifications: {
      iso: "ISO Certified",
      gdpr: "GDPR Compliant"
    }
  },
  buttons: {
    contactUs: "Contact Us"
  },
  maintenance: {
    title: "Under Maintenance",
    subtitle: "We're currently performing scheduled maintenance",
    message: "Our platform is temporarily unavailable while we deploy updates and improvements. We'll be back online shortly. Thank you for your patience."
  },
  metaDescriptions: {
    functionalities: "Gain full real-time process transparency with Noreja – data-driven, AI-powered, and designed to support well-founded decisions for optimizing your business processes.",
    pricing: "Discover Noreja’s pricing models – flexible packages for data-driven, AI-powered process analysis and transparent decision-making, tailored to your organization.",
    successStories: "Learn from real projects: Noreja success stories show how companies achieve faster, more transparent, and more efficient operations through data-driven, AI-powered process analysis.",
    partners: "Noreja’s partner ecosystem supports consulting, implementation, and the journey toward data-driven, AI-powered Process Intelligence – enabling transparency and operational impact.",
    team: "Meet the Noreja team – experienced experts in data-driven process analysis and AI-powered Process Intelligence, working together to create transparency and value.",
    events: "Stay informed about Noreja events focused on AI-powered process analysis and data-driven process optimization – practical formats for insights, exchange, and real-world learnings.",
    careers: "Join the Noreja team – explore open positions in AI-powered process intelligence and help shape the future of data-driven process analysis.",
    downloads: "Download whitepapers, product briefs, and practical resources on data-driven, AI-powered Process Intelligence from Noreja – for deeper understanding and better decisions.",
    contact: "Get in touch with Noreja – we support you with questions around data-driven, AI-powered Process Intelligence, solutions, and implementation."
  }
};
