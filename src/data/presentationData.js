export const projectMeta = {
  title: "Jakarta For All",
  subtitle: "IECC 2026 National Stage Presentation",
  tagline: "A city should be accessible to everyone.",
  description: "An interactive 3D simulation built in Roblox Studio exploring accessibility barriers in urban environments and demonstrating practical, inclusive civic solutions.",
  competition: "IECC 2026 Indonesia",
  category: "Roblox Game Category",
  presentationTime: "5 Minutes Presentation + 2 Minutes Q&A",
  pillars: [
    {
      title: "Accessible Public Transportation",
      color: "teal",
      bgClass: "bg-city-teal-50 border-city-teal-200 text-city-teal-700",
      description: "Tactile guidance blocks, step-free boarding ramps, and connected pedestrian stops."
    },
    {
      title: "Inclusive Healthcare",
      color: "sage",
      bgClass: "bg-city-sage-50 border-city-sage-200 text-city-sage-700",
      description: "Visual communication, digital queue monitors, and patient-centered service navigation."
    },
    {
      title: "Equal Opportunities",
      color: "terracotta",
      bgClass: "bg-city-terracotta-50 border-city-terracotta-200 text-city-terracotta-700",
      description: "Skills-first evaluations and accessibility-aware workplace recommendations via AOE."
    }
  ]
};

export const navigationLinks = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "Our Solution" },
  { id: "game-works", label: "How It Works" },
  { id: "how-ai-works", label: "How AI Works" },
  { id: "closing", label: "Project Vision" }
];

export const problemData = {
  badge: "The Problem",
  title: "Everyday Accessibility Barriers in Urban Life",
  description: "Accessibility is not a niche requirement—it is a fundamental civic right. Across transportation, healthcare, and employment, physical, informational, and systemic barriers frequently hinder independent participation in daily city life.",
  stats: [
    {
      number: "144",
      label: "TransJakarta Stop Inclusivity",
      detail: "Inclusive features expanded to 144 TransJakarta bus stops in 2024, yet implementations still require adjustments and broader disability involvement.",
      sourceShort: "ITDP Indonesia (Dec 2024)",
      sourceKey: "itdp2024",
      color: "teal"
    },
    {
      number: "50%",
      label: "Healthcare Access Rate",
      detail: "Multi-district Indonesian survey: 98% of surveyed persons with physical and sensory disabilities needed healthcare, but only 50% accessed health facilities.",
      sourceShort: "Fanda et al. (2026) • BMC Health Serv Res (6 ID Districts)",
      sourceKey: "fanda2026",
      color: "sage"
    },
    {
      number: "72.84%",
      label: "Informal Employment Disparity",
      detail: "72.84% of employed persons with disabilities work in the informal sector, compared to 57.68% for those without disabilities across Indonesia.",
      sourceShort: "BPS Indonesia (2025) • Sakernas Labor Statistics",
      sourceKey: "bps2025",
      color: "terracotta"
    }
  ],
  challenges: [
    {
      id: "transit",
      focusArea: "Accessible Public Transportation",
      title: "Discontinuous Paths & Transit Boarding Obstacles",
      summary: "For persons with disabilities in Jakarta, public transport accessibility has made progress but critical gaps persist. While inclusive features expanded to 144 bus stops in 2024 (ITDP), supplementary field audits show universal design implementation at only 47%, with 126 of 249 stops still not classified as disability-friendly (UNTIRTA).",
      badge: "Transportation Barrier",
      color: "teal",
      keyMetrics: [
        { label: "Inclusive Stops (2024)", value: "144 stops" },
        { label: "Universal Design Met", value: "47%" },
        { label: "Friendly Stops (Audit)", value: "118 / 249" },
        { label: "Under Revitalization", value: "5 stops" }
      ],
      impact: "Disrupted independent mobility, requiring ongoing adjustments, field retrofits, and active involvement of the disability community.",
      sources: ["itdp2024", "untirta2024"]
    },
    {
      id: "healthcare",
      focusArea: "Inclusive Healthcare Services",
      title: "Communication Gaps & Multi-Sensory Service Friction",
      summary: "Healthcare accessibility extends far beyond physical entrance doors. In a multi-district Indonesian study, 98% of people with disabilities reported needing healthcare, but only 50% accessed facilities due to inaccessible communication, audio-only queue systems, and informational barriers.",
      badge: "Healthcare Barrier",
      color: "sage",
      keyMetrics: [
        { label: "Reported Care Need", value: "98%" },
        { label: "Actual Access Rate", value: "50%" },
        { label: "Surveyed Sample", value: "2,666 respondents" },
        { label: "Survey Scope", value: "6 ID Districts" }
      ],
      impact: "Missed clinical triage, delayed medical treatment, and communication anxiety for patients.",
      sources: ["fanda2026"]
    },
    {
      id: "employment",
      focusArea: "Equal Employment Opportunities",
      title: "Inflexible Evaluation & Disparities in Job Formality",
      summary: "National labor data reflects a pronounced disparity in employment formality and working opportunities rather than an outright absence of work. Inflexible recruitment screenings and workplace barriers push a disproportionate share of workers with disabilities into informal arrangements.",
      badge: "Employment Barrier",
      color: "terracotta",
      keyMetrics: [
        { label: "Informal Work (Disabled)", value: "72.84%" },
        { label: "Informal Work (Non-Disabled)", value: "57.68%" },
        { label: "Formality Gap", value: "+15.16%" },
        { label: "Data Scope", value: "BPS National (2025)" }
      ],
      impact: "Concentration in precarious informal jobs, reduced legal protections, and underutilization of skilled talent.",
      sources: ["bps2025"]
    }
  ]
};

export const researchSources = [
  {
    key: "itdp2024",
    focus: "Public Transportation",
    citation: "ITDP Indonesia (December 2024). The Next Steps Towards an Inclusive Public Transportation in Jakarta.",
    year: "2024",
    scope: "Evaluation of inclusive public transportation progress across the TransJakarta network in Jakarta.",
    findings: "Inclusive features expanded to 144 TransJakarta bus stops in 2024. However, some implementations still required adjustments, and broader public awareness and disability involvement remained important.",
    url: "https://itdp-indonesia.org/2024/12/the-next-steps-towards-an-inclusive-public-transportation-in-jakarta/"
  },
  {
    key: "untirta2024",
    focus: "Public Transportation (Supplementary)",
    citation: "Universitas Sultan Ageng Tirtayasa (UNTIRTA) (2024). Implementation of Universal Design on TransJakarta Bus Stops and Buses. Undergraduate Research Thesis.",
    year: "2024",
    scope: "Supplementary undergraduate evaluation of 249 TransJakarta bus stops and fleet universal design (May 2024 data).",
    findings: "118 of 249 stops were classified as disability-friendly, 126 were not, and 5 were undergoing revitalization. Universal design implementation was reported at 47%.",
    url: "https://eprints.untirta.ac.id/45013/"
  },
  {
    key: "fanda2026",
    focus: "Healthcare",
    citation: "Fanda, R. B., et al. (2026). Achieving universal health coverage with disability inclusion: a household survey analyzing healthcare access and national health insurance utilization for individuals with disabilities in Indonesia. BMC Health Services Research, 26, 760.",
    year: "2026 (Data: 2024)",
    scope: "Multi-district Indonesian household survey across six districts in Indonesia (not Jakarta-specific). Sample: 2,666 individuals with physical and sensory disabilities.",
    findings: "98% reported needing healthcare services, but only 50% accessed healthcare facilities. Significant physical, communicative, and financial access barriers were identified.",
    url: "https://doi.org/10.1186/s12913-026-14572-5"
  },
  {
    key: "bps2025",
    focus: "Employment",
    citation: "Badan Pusat Statistik (BPS) Indonesia (2025). Proporsi Lapangan Kerja Informal Menurut Status Disabilitas (Sakernas). Table 8.3.1.",
    year: "2025",
    scope: "National labor statistics across Indonesia measuring employment formality and opportunities by disability status.",
    findings: "72.84% of employed people with disabilities worked in the informal sector, compared to 57.68% of employed people without disabilities, demonstrating a persistent disparity in employment formality.",
    url: "https://www.bps.go.id/id/statistics-table/2/MjY1MSMy/8-3-1-proporsi-lapangan-kerja-informal-menurut-status-disabilitas.html"
  }
];

export const solutionData = {
  badge: "Our Solution",
  title: "Accessibility Built Into the City",
  centralStatement: "Accessibility should be built into the city, not left for individuals to overcome.",
  supportingExplanation: "Jakarta For All translates accessibility challenges into interactive urban scenarios. Through public transportation exploration, healthcare interactions, and an inclusive employment simulation, players discover how accessible environments, services, and opportunities can improve participation in everyday city life.",
  principles: [
    {
      number: "01",
      title: "Accessible Mobility",
      subtitle: "Independent Urban Movement",
      description: "Demonstrating how continuous tactile guiding paths, deployable boarding ramps, and connected public transit shelters eliminate friction in everyday travel.",
      badge: "Side Quest",
      color: "teal"
    },
    {
      number: "02",
      title: "Inclusive Public Services",
      subtitle: "Dignified Patient Care",
      description: "Demonstrating how multi-sensory visual queues, Braille signage kiosks, and sign-language communication options enable seamless, patient-centered healthcare navigation.",
      badge: "Mission 01",
      color: "sage"
    },
    {
      number: "03",
      title: "Equal Opportunities",
      subtitle: "Skills-First Workplace Matching",
      description: "Demonstrating how fair capability assessments and accessibility-aware workplace matching empower individuals based on proven skills rather than arbitrary physical constraints.",
      badge: "Mission 02",
      color: "terracotta"
    }
  ],
  clarification: "Jakarta For All is an educational simulation and a demonstration of inclusive design principles, not an official municipal infrastructure system or commercial hiring platform."
};

export const showcaseAreas = [
  {
    id: "transportation",
    classification: "SIDE QUEST",
    badgeLabel: "Side Quest — Public Transportation",
    navLabel: "Side Quest • Transportation",
    title: "Accessible Public Transportation",
    location: "Jagakarsa Station & Urban Mobility Corridor",
    explanatorySentence: "Exploring how accessible public transportation supports independent urban mobility.",
    buttonLabel: "Explore Side Quest",
    themeColor: "teal",
    bgImage: "/assets/screenshots/BusFriendly.png",
    bgAlt: "Roblox low-poly city bus stop showing accessible low-floor bus with deployable wheelchair ramp",
    videoSrc: "/assets/videos/Bus.mp4",
    posterSrc: "/assets/screenshots/BusFriendly.png",
    nextAreaIndex: 1
  },
  {
    id: "healthcare",
    classification: "MISSION 01",
    badgeLabel: "Mission 01 — Healthcare Without Barriers",
    navLabel: "Mission 01 • Healthcare",
    title: "Healthcare Without Barriers",
    location: "Community Health Center (Puskesmas)",
    explanatorySentence: "Making healthcare services more accessible through inclusive communication and patient-centered interactions.",
    buttonLabel: "Mission 01 — Healthcare Without Barriers",
    themeColor: "sage",
    bgImage: "/assets/screenshots/BrailleTranslation.png",
    bgAlt: "Clinic reception desk with Nurse NPC offering Braille Information and Sign Language communication options",
    secondaryImage: "/assets/screenshots/SignLanguage.png",
    secondaryLabel: "Sign Language",
    secondaryAlt: "In-game Sign Language communication option with Nurse NPC",
    videoSrc: "/assets/videos/Nurse.mp4",
    posterSrc: "/assets/screenshots/NurseFriendly.png",
    nextAreaIndex: 2
  },
  {
    id: "employment",
    classification: "MISSION 02",
    badgeLabel: "Mission 02 — Skills Beyond Barriers",
    navLabel: "Mission 02 • Employment / AOE",
    title: "Skills Beyond Barriers",
    location: "Civic Employment Center & AOE System",
    explanatorySentence: "Connecting individual skills with workplace opportunities while considering accessibility needs.",
    buttonLabel: "Mission 02 — Skills Beyond Barriers",
    themeColor: "terracotta",
    bgImage: "/assets/screenshots/WorkerFriendly.png",
    bgAlt: "Employment center officer NPC conducting the initial skills-first interview",
    videoSrc: "/assets/videos/AOE.mp4",
    posterSrc: "/assets/screenshots/WorkerFriendly.png",
    nextAreaIndex: 0
  }
];

export const closingData = {
  badge: "Project Vision",
  title: "Accessibility should be built into the city, not left for individuals to overcome.",
  description: "Jakarta For All is an interactive 3D simulation built in Roblox Studio for the IECC 2026 National Stage. By turning real-world accessibility data into immersive urban scenarios, we demonstrate how inclusive design principles create a city that welcomes and empowers every resident."
};

export const aiWorkflowData = {
  badge: "OUR DEVELOPMENT PROCESS",
  title: "HOW AI WORKS",
  description: "AI supported our development process from early-stage planning to implementation and refinement. Different tools were used for different stages, while the project's direction, decisions, and final outcomes remained human-guided.",
  tools: [
    {
      id: "tool-01",
      number: "TOOL 01",
      name: "GPT-5.6 (Luna)",
      codename: "Luna",
      role: "Brainstorming, Planning & Technical Guidance",
      tagline: "Strategic Ideation & Conceptual Roadmap",
      logo: "/assets/images/chatgpt_logo.svg",
      logoType: "svg",
      accentColor: "teal", // matching existing palette
      badgeColor: "bg-city-teal-50 text-city-teal-700 border-city-teal-300",
      accentBorder: "border-city-teal-400 shadow-[0_6px_0_0_#2A9D8F]",
      iconBg: "bg-city-teal-600 text-white",
      summary: "GPT-5.6, referred to as Luna during the development process, supported the early and strategic stages of development.",
      contributions: [
        {
          title: "Brainstorming & Ideation",
          desc: "Exploring concepts, generating ideas, and evaluating possible approaches."
        },
        {
          title: "Project Planning",
          desc: "Structuring the project's objectives, features, missions, and development roadmap."
        },
        {
          title: "Technical Research",
          desc: "Exploring suitable technologies, tools, frameworks, and technical approaches."
        },
        {
          title: "System Design",
          desc: "Discussing implementation strategies, gameplay logic, architecture, and technical requirements."
        },
        {
          title: "Problem Analysis",
          desc: "Evaluating alternatives and helping identify potential limitations before implementation."
        }
      ]
    },
    {
      id: "tool-02",
      number: "TOOL 02",
      name: "Antigravity + Gemini 3.8 Flash",
      role: "Code Development, Implementation & Debugging",
      tagline: "Component Engineering & Rapid Implementation",
      logo: "/assets/images/antigravity_logo.png",
      logoType: "img",
      accentColor: "blue",
      badgeColor: "bg-city-blue-50 text-city-blue-700 border-city-blue-300",
      accentBorder: "border-city-blue-400 shadow-[0_6px_0_0_#3B82C4]",
      iconBg: "bg-city-blue-600 text-white",
      summary: "Antigravity, powered by Gemini 3.8 Flash in the development workflow, supported the practical implementation and refinement stages.",
      contributions: [
        {
          title: "Code Development",
          desc: "Assisting with writing and developing website components and code."
        },
        {
          title: "Implementation",
          desc: "Translating planned features and technical directions into working implementations."
        },
        {
          title: "Debugging",
          desc: "Identifying errors, investigating unexpected behavior, and suggesting fixes."
        },
        {
          title: "Code Refinement",
          desc: "Improving existing implementations and helping resolve technical issues."
        }
      ]
    }
  ],
  workflowSteps: [
    { step: "01", name: "IDEATION", tool: "GPT-5.6 (Luna)", color: "teal" },
    { step: "02", name: "PLANNING", tool: "GPT-5.6 (Luna)", color: "teal" },
    { step: "03", name: "TECHNICAL GUIDANCE", tool: "Collaborative", color: "sage" },
    { step: "04", name: "DEVELOPMENT", tool: "Antigravity + Gemini 3.8", color: "blue" },
    { step: "05", name: "DEBUGGING", tool: "Antigravity + Gemini 3.8", color: "blue" },
    { step: "06", name: "REFINEMENT", tool: "Human & AI Feedback", color: "teal" }
  ],
  concludingStatement: "AI helped us think, plan, build, and refine — but the vision, creative direction, and final decisions remained human-guided."
};
