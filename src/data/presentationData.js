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
      number: "66%",
      label: "TransJakarta Stop Accessibility",
      detail: "Overall accessibility compliance across 64 evaluated disability-friendly bus stops. Guiding blocks met only 36% compliance.",
      sourceShort: "Prasetyo (2022) • Universitas Indonesia",
      sourceKey: "prasetyo2022",
      color: "teal"
    },
    {
      number: "50%",
      label: "Healthcare Access Rate",
      detail: "While 98% of surveyed persons with physical and sensory disabilities required healthcare, only 50% accessed health facilities.",
      sourceShort: "Fanda et al. (2026) • BMC Health Serv Res (6 ID Districts)",
      sourceKey: "fanda2026",
      color: "sage"
    },
    {
      number: "18.7%",
      label: "Formal & Informal Employment",
      detail: "Employment rate for persons with disabilities in Indonesia. 91% work in the informal sector, compared to 81% of the general population.",
      sourceShort: "ILO (2023/2025) • Inclusive Employment Services",
      sourceKey: "ilo2025",
      color: "terracotta"
    }
  ],
  challenges: [
    {
      id: "transit",
      focusArea: "Accessible Public Transportation",
      title: "Discontinuous Paths & Transit Boarding Obstacles",
      summary: "For persons with disabilities, inaccessible public transport can make ordinary journeys significantly more difficult. Incomplete guiding blocks, missing or steep curb ramps, irregular vehicle-to-platform gaps, and insufficient multimodal wayfinding require commuters to spend disproportionate travel time and planning for basic movement.",
      badge: "Transportation Barrier",
      color: "teal",
      keyMetrics: [
        { label: "Overall Stop Accessibility", value: "66%" },
        { label: "Guiding Block Compliance", value: "36%" },
        { label: "Signs & Markings", value: "45%" },
        { label: "Ramp Infrastructure", value: "71%" }
      ],
      impact: "Disrupted independent mobility, longer commute times, and reliance on advance planning for routine trips.",
      sources: ["prasetyo2022", "fitri2024"]
    },
    {
      id: "healthcare",
      focusArea: "Inclusive Healthcare Services",
      title: "Communication Gaps & Multi-Sensory Service Friction",
      summary: "Healthcare accessibility extends far beyond physical entrance doors. In crowded community clinics, patients frequently confront audio-only calling systems that exclude deaf and hard-of-hearing individuals, complex interior wayfinding with low visual contrast, and limited alternative communication channels between patients and medical personnel.",
      badge: "Healthcare Barrier",
      color: "sage",
      keyMetrics: [
        { label: "Reported Care Need", value: "98%" },
        { label: "Actual Access Rate", value: "50%" },
        { label: "Study Sample (Indonesia)", value: "2,666 respondents" }
      ],
      impact: "Missed clinical triage, delayed medical treatment, and communication anxiety for patients.",
      sources: ["fanda2026"]
    },
    {
      id: "employment",
      focusArea: "Equal Employment Opportunities",
      title: "Inflexible Evaluation & Unaccommodated Workplaces",
      summary: "Employment barriers persist across every stage of the professional journey—from standard recruitment tests that assess presence rather than capability, to workspaces lacking step-free access, screen reader compatibility, or adjustable setups. Talented individuals are frequently pushed into informal or precarious work.",
      badge: "Employment Barrier",
      color: "terracotta",
      keyMetrics: [
        { label: "Employment Rate", value: "18.7%" },
        { label: "Women with Disabilities", value: "13.5%" },
        { label: "Informal Sector Share", value: "91%" }
      ],
      impact: "Underutilization of skilled potential and persistent informal sector concentration.",
      sources: ["ilo2025"]
    }
  ]
};

export const researchSources = [
  {
    key: "prasetyo2022",
    focus: "Public Transportation",
    citation: "Prasetyo, H. N. (2022). Analisis dan Evaluasi Aksesibilitas Penyandang Difabel Fisik dan Sensorik di Halte Bus Transjakarta. Universitas Indonesia, Faculty of Public Health.",
    year: "2022",
    scope: "Examined 64 TransJakarta stops identified as disability-friendly across 12 corridors.",
    findings: "Reported fulfillment rates: Overall accessibility 66%, Guiding blocks 36%, Signs and markings 45%, Ramps 71%.",
    url: "https://lib.fkm.ui.ac.id/detail?id=135942&lokasi=lokal"
  },
  {
    key: "fitri2024",
    focus: "Public Transportation",
    citation: "Fitri, H. (2024). Commuting Behaviors of People with Disabilities and the Implications for Transport Planning and Policy: A Preliminary Study. Journal of Regional and City Planning, ITB.",
    year: "2024",
    scope: "Surveyed 51 commuters with motor and sensory disabilities in the Jakarta Metropolitan Area.",
    findings: "Found that commuters with disabilities tended to spend more time commuting and often planned journeys extensively in advance due to infrastructure unpredictability.",
    url: "https://doi.org/10.5614/jpwk.2024.35.2.1"
  },
  {
    key: "fanda2026",
    focus: "Healthcare",
    citation: "Fanda, R. B., et al. (2026). Achieving universal health coverage with disability inclusion: a household survey analyzing healthcare access and national health insurance utilization for individuals with disabilities in Indonesia. BMC Health Services Research, 26, 760.",
    year: "2026",
    scope: "Surveyed 2,666 individuals with physical and sensory disabilities across six districts in Indonesia (labeled as national Indonesian research).",
    findings: "98% indicated a clear need for healthcare services, but only 50% successfully accessed health facilities. Critical barriers involving physical accessibility, communication, and financial capacity persisted.",
    url: "https://doi.org/10.1186/s12913-026-14572-5"
  },
  {
    key: "ilo2025",
    focus: "Employment",
    citation: "International Labour Organization (29 September 2025). Indonesia paves the way for inclusive employment services. Based on ILO 2023 statistics.",
    year: "2025",
    scope: "National labor market assessment in Indonesia analyzing employment distribution for persons with disabilities.",
    findings: "18.7% of persons with disabilities were employed (13.5% among women with disabilities). 91% of employed persons with disabilities worked in the informal sector, compared with 81% of the general population.",
    url: "https://www.ilo.org/resource/news/indonesia-paves-way-inclusive-employment-services"
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
