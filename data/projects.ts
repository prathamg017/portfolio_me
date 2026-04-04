export type ProjectFeature = {
  title: string;
  desc: string;
};

export type Project = {
  slug: string;
  projectName: string;
  categoryBadge: string;
  typeBadge: string;
  metric: string;
  metricLabel: string;
  shortDescription: string;
  fullDescription: string;
  stackPills: string[];
  imageUrl: string;
  detailedImages: string[];
  longImage: string | null;
  features: ProjectFeature[];
};

export const PROJECTS: Project[] = [
  {
    slug: "aura-events",
    projectName: "Aura",
    categoryBadge: "App Development",
    typeBadge: "Cinematic Event Discovery Platform",
    metric: "Mobile-First",
    metricLabel: "UX Focus",
    shortDescription: "A visually immersive mobile-first platform designed to help users discover live music events, explore artists, and book tickets seamlessly.",
    fullDescription: "Built with a strong focus on emotional design, visual storytelling, and smooth user flows. Aura serves as the primary gateway for discovering underground music events and booking tickets effortlessly.",
    stackPills: ["Flutter", "Dart", "Supabase", "UI/UX", "Animation"],
    imageUrl: "/projects/frame-2.png", // Replace with actual frame name
    longImage: null,
    detailedImages: ["/projects/frame-2.png", "/images/projects/aura-hero.png"],
    features: [
      { title: "Mobile-first UX", desc: "Designed primarily for intuitive mobile interactions." },
      { title: "Event discovery + booking", desc: "Seamless flow from finding an event to securing a ticket." },
      { title: "Rich visual hierarchy", desc: "Using massive imagery and cinematic layout to drive emotion." },
      { title: "High-engagement UI", desc: "Physics-based scroll and interactive discovery maps." }
    ]
  },
  {
    slug: "prism",
    projectName: "Prism",
    categoryBadge: "Web Development",
    typeBadge: "High-Performance SaaS Marketing System",
    metric: "Conversion",
    metricLabel: "Optimized",
    shortDescription: "A modern, conversion-optimized SaaS website designed for clarity, speed, and scalability.",
    fullDescription: "Focused on structured content hierarchy, strong CTAs, and clean visual communication. Prism acts as the architectural blueprint for high-tier enterprise SaaS companies to convert corporate leads.",
    stackPills: ["Next.js", "React", "Tailwind CSS", "CMSIntegration"],
    imageUrl: "/projects/frame-3.png", 
    longImage: "/projects/frame-3-long.png",
    detailedImages: ["/projects/frame-3.png", "/images/projects/prism-hero.png"],
    features: [
      { title: "Landing page system", desc: "Modular architecture for quickly deploying specialized funnels." },
      { title: "Pricing + feature breakdown", desc: "Distinct and readable conversion tables." },
      { title: "Enterprise-ready design", desc: "Clean margins, scalable typography, and professional layouts." },
      { title: "Responsive layouts", desc: "Perfect execution across mobile, tablet, and ultra-wide displays." }
    ]
  },
  {
    slug: "voxiq",
    projectName: "VoxIQ",
    categoryBadge: "AI Infrastructure",
    typeBadge: "AI Voice Reception System",
    metric: "Real-time",
    metricLabel: "Processing",
    shortDescription: "A real-time conversational AI interface designed for handling calls, managing conversations, and automating workflows.",
    fullDescription: "Built with a futuristic dark UI and real-time data visualization. VoxIQ eliminates manual reception tasks by managing complex inbound queries and routing immediately using deep-learning natural language understanding.",
    stackPills: ["OpenAI", "Twilio", "WebSockets", "Node.js"],
    imageUrl: "/projects/frame-4.png",
    longImage: null,
    detailedImages: ["/projects/frame-4.png", "/images/ui_mockups/voxiq_detail.png", "/images/projects/voxiq-hero.png"],
    features: [
      { title: "Live conversation logs", desc: "Real-time speech-to-text transcriptions." },
      { title: "AI interaction UI", desc: "State visualizations of the AI entity's processing load." },
      { title: "Call routing system", desc: "Instant transfer protocols to human agents." },
      { title: "Dashboard analytics", desc: "Aggregated sentiment analysis and call outcome tracking." }
    ]
  },
  {
    slug: "orbit-os",
    projectName: "Orbit OS",
    categoryBadge: "Systems Integration",
    typeBadge: "Logistics Intelligence Platform",
    metric: "High-Density",
    metricLabel: "Data Vis",
    shortDescription: "A powerful operations dashboard for managing fleets, tracking routes, and optimizing logistics workflows in real time.",
    fullDescription: "Designed specifically for extreme high-density data visualization and operational clarity. It synthesizes disparate logistics tools into a single pane of glass.",
    stackPills: ["React", "Mapbox", "GraphQL", "PostgreSQL"],
    imageUrl: "/projects/frame-5.png",
    longImage: "/projects/frame-5-long.png",
    detailedImages: ["/projects/frame-5.png", "/images/ui_mockups/orbit_detail.png", "/images/projects/orbit-hero.png"],
    features: [
      { title: "Real-time tracking", desc: "Live GPS pings on rendering optimized mapping instances." },
      { title: "Route optimization", desc: "Algorithmic pathfinding to decrease fuel and transit times." },
      { title: "Data-heavy dashboards", desc: "Complex filtering and data-table operations under extreme loads." },
      { title: "Control systems UI", desc: "Interactive fleet management commands sent directly to vehicles." }
    ]
  },
  {
    slug: "cura-medical",
    projectName: "Cura Medical",
    categoryBadge: "B2B E-Commerce",
    typeBadge: "B2B Procurement System",
    metric: "Clinical",
    metricLabel: "Grade",
    shortDescription: "A clinical-grade procurement platform built for hospitals to manage inventory, suppliers, and bulk ordering with precision.",
    fullDescription: "Replacing extremely outdated ordering software, Cura organizes thousands of surgical SKUs into a blazingly fast checkout and approval pipeline specifically tuned for hospital managers.",
    stackPills: ["Next.js", "Prisma", "Enterprise E-Com", "Tailwind"],
    imageUrl: "/projects/frame-7.png",
    longImage: null,
    detailedImages: ["/projects/frame-7.png", "/images/ui_mockups/nexus_detail.png", "/images/projects/nexus-hero.png"],
    features: [
      { title: "Inventory tracking", desc: "Granular stock monitoring across medical supply closets." },
      { title: "Supplier comparison", desc: "Instant price indexing for crucial medical supplies." },
      { title: "Bulk ordering UI", desc: "Spreadsheet-style interfaces for ultra-fast checkout." },
      { title: "Analytics dashboard", desc: "Spend metrics broken down by department." }
    ]
  },
  {
    slug: "kinetic",
    projectName: "Kinetic",
    categoryBadge: "Systems",
    typeBadge: "Inventory Management System",
    metric: "Automated",
    metricLabel: "Alerts",
    shortDescription: "A modern inventory platform designed to track stock levels, monitor alerts, and manage operations across multiple touchpoints.",
    fullDescription: "Built with clarity and speed in mind, Kinetic ensures warehouse operations never grind to a halt by predicting stock depletion and providing clear, actionable alerting loops.",
    stackPills: ["React Native", "Node.js", "Redis", "TypeScript"],
    imageUrl: "/projects/frame-8.png",
    longImage: "/projects/frame-8-long.png",
    detailedImages: ["/projects/frame-8.png", "/projects/frame-8.png"],
    features: [
      { title: "Stock monitoring", desc: "Universal database syncing across all active nodes." },
      { title: "Alert system", desc: "SMS and Push notification engine for critical drops." },
      { title: "Clean dashboards", desc: "Minimal grey UI that puts alerts front and center." },
      { title: "Mobile + web sync", desc: "Cross-platform data harmony." }
    ]
  },
  {
    slug: "signal-ai",
    projectName: "Signal AI",
    categoryBadge: "AI Automation",
    typeBadge: "Intelligent Document Processing",
    metric: "Enterprise",
    metricLabel: "Workflow",
    shortDescription: "An AI-powered system that extracts, processes, and structures data from complex documents with high accuracy.",
    fullDescription: "Designed for intensive enterprise workflows, this architecture bridges the gap between chaotic physical paperwork and perfectly schema-aligned JSON data ready for backend ingest.",
    stackPills: ["Python", "FastAPI", "OpenAI Vision", "React"],
    imageUrl: "/projects/frame-9.png",
    longImage: null,
    detailedImages: ["/projects/frame-9.png", "/images/projects/signal-hero.png"],
    features: [
      { title: "Document parsing", desc: "Handling chaotic layouts, stamps, and handwritten annotations." },
      { title: "Structured data extraction", desc: "Enforcing extremely strict output schemas." },
      { title: "Split-screen UI", desc: "Side-by-side verification UX for rapid quality assurance." },
      { title: "Workflow automation", desc: "Pushing verified documents directly into downstream ERPs." }
    ]
  },
  {
    slug: "med-sync",
    projectName: "MedSync",
    categoryBadge: "Web Development",
    typeBadge: "Medical Dashboard",
    metric: "HIPAA",
    metricLabel: "Compliant",
    shortDescription: "A highly secure clinical scheduling and patient management dashboard.",
    fullDescription: "Streamlining complex hospital flows into clear, accessible user interfaces without compromising patient data security.",
    stackPills: ["React", "Node.js", "FHIR", "Tailwind"],
    imageUrl: "/projects/project-1-medical.png",
    longImage: null,
    detailedImages: ["/projects/project-1-medical-detail.png"],
    features: [
      { title: "Secure Architecture", desc: "End-to-end encryption for protected health information." },
      { title: "Clinical Tooling", desc: "Advanced data sorting and patient tracking modules." }
    ]
  },
  {
    slug: "luxe-apparel",
    projectName: "Luxe",
    categoryBadge: "E-Commerce",
    typeBadge: "Fashion Retail Experience",
    metric: "High",
    metricLabel: "Conversion",
    shortDescription: "A premium digital storefront tailored for high-end fashion brands.",
    fullDescription: "Built on headless architecture, this platform delivers sub-second page loads alongside cinematic product interactions.",
    stackPills: ["Next.js", "Shopify", "Framer Motion"],
    imageUrl: "/projects/project-2-fashion.png",
    longImage: null,
    detailedImages: ["/projects/project-2-fashion-detail.png"],
    features: [
      { title: "Cinematic Product Pages", desc: "Immersive image galleries and smooth transitions." },
      { title: "Headless Speed", desc: "Static generation for instantaneous routing." }
    ]
  },
  {
    slug: "nexus-saas",
    projectName: "Nexus SaaS",
    categoryBadge: "Architecture",
    typeBadge: "Enterprise Dashboard",
    metric: "Scalable",
    metricLabel: "Systems",
    shortDescription: "A scalable B2B dashboard for monitoring microservices and user metrics.",
    fullDescription: "Consolidating scattered data streams into a unified analytic command center with customizable widget layouts.",
    stackPills: ["Vue", "TypeScript", "D3.js"],
    imageUrl: "/projects/project-3-saas.png",
    longImage: null,
    detailedImages: [],
    features: [
      { title: "Data Visualization", desc: "Complex charting rendered at 60fps." },
      { title: "Widget Ecosystem", desc: "Highly modular UI components for end-users." }
    ]
  },
  {
    slug: "synth-chat",
    projectName: "Synth Chat",
    categoryBadge: "AI Integration",
    typeBadge: "Automated Customer Support",
    metric: "Sub-Second",
    metricLabel: "Latency",
    shortDescription: "A generative AI support chatbot embedded directly into client workflows.",
    fullDescription: "Utilizing custom embeddings to answer domain-specific questions securely and responsively via a sleek floating interface.",
    stackPills: ["OpenAI", "LangChain", "WebSockets"],
    imageUrl: "/projects/project-4-chatbot.png",
    longImage: null,
    detailedImages: [],
    features: [
      { title: "Streaming Responses", desc: "Typewriter effect generated in real-time." },
      { title: "Context Memory", desc: "Retaining conversational continuity across sessions." }
    ]
  },
  {
    slug: "terra-estates",
    projectName: "Terra",
    categoryBadge: "Web Platform",
    typeBadge: "Real Estate Portal",
    metric: "Global",
    metricLabel: "Reach",
    shortDescription: "A luxury property discovery platform featuring high-fidelity imagery and map integrations.",
    fullDescription: "Designed for premium buyers, the interface pushes properties to the forefront using edge-to-edge photography.",
    stackPills: ["Next.js", "Mapbox", "PostgreSQL"],
    imageUrl: "/projects/project-5-realestate.png",
    longImage: null,
    detailedImages: [],
    features: [
      { title: "Interactive Maps", desc: "Custom-styled cartography to match brand themes." },
      { title: "Image Dominance", desc: "Letting the properties sell themselves through scale." }
    ]
  },
  {
    slug: "flow-inventory",
    projectName: "Flow",
    categoryBadge: "Systems Integration",
    typeBadge: "Warehouse Management",
    metric: "Real-Time",
    metricLabel: "Sync",
    shortDescription: "A rugged, high-density dashboard for tracking supply chains and inventory velocity.",
    fullDescription: "Replacing outdated spreadsheet methods with a fast, responsive UI built to update thousands of rows via WebSocket streams instantly.",
    stackPills: ["React Native", "GraphQL", "Redis"],
    imageUrl: "/projects/project-6-inventory.png",
    longImage: null,
    detailedImages: ["/projects/project-6-inventory-detail.png"],
    features: [
      { title: "Live Streaming Data", desc: "Instantaneous reflection of warehouse scans." },
      { title: "High-Density UI", desc: "Packing maximum actionable data into single views." }
    ]
  },
  {
    slug: "aero-app",
    projectName: "Aero",
    categoryBadge: "App Development",
    typeBadge: "Cross-Platform Mobile App",
    metric: "Native",
    metricLabel: "Performance",
    shortDescription: "A fluid, physics-driven mobile application built in Flutter.",
    fullDescription: "Proving that cross-platform code can still feel relentlessly native through careful animation design and memory management.",
    stackPills: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/projects/project-8-flutter.png",
    longImage: null,
    detailedImages: [],
    features: [
      { title: "Physics-Based Scroll", desc: "Over-scroll interactions that feel fundamentally native." },
      { title: "Unified Codebase", desc: "Shipping to iOS and Android instantaneously." }
    ]
  }
];
