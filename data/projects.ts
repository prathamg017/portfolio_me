export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface MetricCard {
  value: string;
  label: string;
}

export interface Project {
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
  longImage: string | null;
  detailedImages: string[];
  features: ProjectFeature[];
  keyOutcome: string;
  metrics: MetricCard[];
  problemContext: string;
  problemSolution: string;
  storyClient: string;
  storyNirgranth: string;
  uxPhilosophy: string;
  projectCTA: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "aether-ai",
    projectName: "Aether AI",
    categoryBadge: "AI Integration",
    typeBadge: "AI Voice Receptionist",
    metric: "24/7",
    metricLabel: "Availability",
    shortDescription: "A sophisticated AI-driven receptionist system that handles inquiries and booking with natural human voice.",
    fullDescription: "Aether AI acts as the digital front desk for high-volume service businesses. It uses cutting-edge voice synthesis and LLM processing to understand intent, answer complex FAQs, and schedule appointments without ever putting a client on hold.",
    stackPills: ["Next.js", "Deepgram", "OpenAI", "WebRTC"],
    imageUrl: "/projects/frame-7.jpg",
    longImage: null,
    detailedImages: [],
    keyOutcome: "98% Call Accuracy & Zero Missed Leads",
    metrics: [
      { value: "98%", label: "Accuracy" },
      { value: "0ms", label: "Queue Time" },
      { value: "24/7", label: "Uptime" }
    ],
    problemContext: "The client was losing roughly 30% of their leads because their physical front desk couldn't handle the influx of calls during peak hours, and off-hour callers simply didn't leave messages.",
    problemSolution: "We engineered Aether AI: a low-latency voice pipeline that intercepts every call. It provides instant, human-like responses in multiple languages and syncs directly with the client's internal calendar system.",
    storyClient: "We are missing too many calls. When people call and don't get an answer, they go to our competitors immediately.",
    storyNirgranth: "We'll build you a digital receptionist that sounds human, knows your entire service menu, and never sleeps. Every caller gets an instant outcome.",
    uxPhilosophy: "The design principle was \"Human-Centric Speed\". The latency must be so low that the conversation feels like a natural human interaction.",
    projectCTA: "Need an AI voice system for your business? Let's architect it.",
    features: [
      { title: "Real-time Voice", desc: "Sub-500ms response time for natural conversation." },
      { title: "Multilingual", desc: "Switching languages on the fly based on caller dialect." },
      { title: "Calendar Sync", desc: "Direct booking into Google/Outlook calendars." },
      { title: "Sentiment Detection", desc: "Escalating frustrated callers to human managers." },
      { title: "Smart Routing", desc: "Transmitting leads to the right department instantly." },
      { title: "Transcription", desc: "Every call is logged and summarized for the dashboard." },
      { title: "Custom Voice", desc: "Cloning specific brand voices for consistency." },
      { title: "FAQ Engine", desc: "Deep knowledge base ingestion for precise answers." }
    ]
  },
  {
    slug: "algorithmic-archive",
    projectName: "Algorithmic Archive",
    categoryBadge: "Systems Integration",
    typeBadge: "Precision Workspace",
    metric: "High",
    metricLabel: "Efficiency",
    shortDescription: "A high-performance workspace for auditors to manage data archives with algorithmic precision.",
    fullDescription: "Algorithmic Archive provides a centralized command center for deep data auditing. It visualizes massive datasets and automates the verification process for complex financial and operational logs.",
    stackPills: ["React", "PostgreSQL", "Tailwind", "Python"],
    imageUrl: "/projects/frame-2.jpg",
    longImage: null,
    detailedImages: [],
    keyOutcome: "85% reduction in manual auditing time",
    metrics: [
      { value: "85%", label: "Time Saved" },
      { value: "100%", label: "Data Integrity" },
      { value: "Global", label: "Access" }
    ],
    problemContext: "Internal auditors were manually scanning through thousands of Excel rows to identify anomalies, a process prone to human error and massive delays in compliance reporting.",
    problemSolution: "We architected a unified archive system that uses custom algorithms to flag inconsistencies automatically, presenting them in a high-density, actionable dashboard.",
    storyClient: "We spend weeks just finding the errors. We should be spending that time fixing them.",
    storyNirgranth: "We will build a precision environment. The software will find 99% of the errors in seconds, leaving your team to deal only with the complex edge cases.",
    uxPhilosophy: "The design principle was \"Dense Clarity\". Packing maximum data into a single view without overwhelming the professional user.",
    projectCTA: "Want to automate your compliance workflow? We can build it.",
    features: [
      { title: "Massive Ingestion", desc: "Handling millions of rows with zero browser lag." },
      { title: "Auto-Verification", desc: "Algorithmic anomaly detection across datasets." },
      { title: "Audit Trail", desc: "Immutable logs tracking every data modification." },
      { title: "Secure Vault", desc: "Military-grade encryption for sensitive archives." },
      { title: "Custom Filters", desc: "Complex query building for non-technical users." },
      { title: "Role Management", desc: "Granular permissions for diverse legal teams." },
      { title: "Instant Search", desc: "Sub-second indexing of historical archives." },
      { title: "Collaboration", desc: "Integrated commenting and flagging systems." }
    ]
  },
  {
    slug: "kinetic-ledger",
    projectName: "Kinetic Ledger",
    categoryBadge: "Web Platform",
    typeBadge: "Precision Financial Management",
    metric: "Live",
    metricLabel: "Tracking",
    shortDescription: "A modern financial ledger system designed for real-time tracking and movement of complex assets.",
    fullDescription: "Kinetic Ledger provides a fluid interface for tracking asset movement across distributed systems. It replaces static reporting with a dynamic, event-driven architecture that reflects reality instantly.",
    stackPills: ["Next.js", "Prisma", "WebSockets", "Node.js"],
    imageUrl: "/projects/frame-3.jpg",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Real-time visibility across 40+ asset types",
    metrics: [
      { value: "<200ms", label: "Sync Speed" },
      { value: "99.9%", label: "Availability" },
      { value: "Zero", label: "Data Loss" }
    ],
    problemContext: "The client's previous ledger system updated only twice a day, leading to massive discrepancies between reported and actual asset positions during high-velocity trading hours.",
    problemSolution: "We built an event-sourced ledger system that uses WebSockets to push every mutation to the UI instantly, ensuring all stakeholders see the ground truth in real-time.",
    storyClient: "We are making decisions based on data that is 6 hours old. We are flying blind.",
    storyNirgranth: "We're going to build a kinetic system. The moment an asset moves anywhere in your network, it moves on your screen.",
    uxPhilosophy: "The design principle was \"Motion as Insight\". Using subtle animations to highlight data changes without distracting the user.",
    projectCTA: "Need a high-velocity financial system? Let's talk.",
    features: [
      { title: "Event Sourcing", desc: "Replaying any state at any point in history." },
      { title: "WebSocket Sync", desc: "Instant UI updates upon database mutation." },
      { title: "Multi-Currency", desc: "Real-time conversion for global asset pools." },
      { title: "Edge Deployment", desc: "Low-latency access for international users." },
      { title: "Automated Reconciliation", desc: "Matching inputs and outputs in real-time." },
      { title: "Visual Timeline", desc: "Graphic representation of asset history." },
      { title: "Risk Alerting", desc: "Instant triggers for suspicious movement." },
      { title: "Export Engine", desc: "Generating audit-ready reports with one click." }
    ]
  },
  {
    slug: "clinical-precision",
    projectName: "Clinical Precision",
    categoryBadge: "Web Platform",
    typeBadge: "Medical Procurement Dashboard",
    metric: "HIPAA",
    metricLabel: "Ready",
    shortDescription: "A specialized procurement system for hospitals to manage high-stakes medical supplies.",
    fullDescription: "Clinical Precision streamlines the complex supply chain of medical facilities. It manages everything from order placement to shipment tracking with strict adherence to medical safety protocols.",
    stackPills: ["React", "GraphQL", "Supabase", "TypeScript"],
    imageUrl: "/projects/frame-4.jpg",
    longImage: null,
    detailedImages: ["/projects/project-1-medical-detail.png", "/projects/project-1-medical-kit.png"],
    keyOutcome: "Zero supply-chain outages across 12 departments",
    metrics: [
      { value: "100%", label: "SLA Match" },
      { value: "HIPAA", label: "Compliant" },
      { value: "-22%", label: "Waste Red." }
    ],
    problemContext: "Hospital staff were using a mix of paper logs and outdated ERP software to order critical supplies. This led to frequent shortages of essential medical kits and overstocking of low-use items.",
    problemSolution: "We engineered a medical-grade procurement dashboard that uses historical data to predict supply needs and automates the reordering process while maintaining full HIPAA compliance.",
    storyClient: "When we run out of a specific medical kit, surgeries get delayed. This isn't just about money; it's about patient safety.",
    storyNirgranth: "We will build a system of total reliability. You won't just order supplies; you'll have an intelligent partner ensuring your stock never hits zero.",
    uxPhilosophy: "The design principle was \"Zero-Error Interface\". Every button and interaction is designed to prevent accidental mis-clicks in high-stress environments.",
    projectCTA: "Ready to modernize your healthcare operations? Contact us.",
    features: [
      { title: "Item Tracking", desc: "Individual tracking of high-value medical assets." },
      { title: "Predictive Ordering", desc: "AI models forecasting supply needs per week." },
      { title: "Approval Workflow", desc: "Multi-stage authorization for high-cost items." },
      { title: "Mobile Scanning", desc: "QR/Barcode integration for warehouse arrival." },
      { title: "Departmental Split", desc: "Dividing budgets and logs by hospital zone." },
      { title: "Vendor Management", desc: "Direct API links to medical supply vendors." },
      { title: "Alert System", desc: "Instant pings for expiring or low-stock items." },
      { title: "Inventory Audit", desc: "Digital verification loops for physical counts." }
    ]
  },
  {
    slug: "logistics-dashboard",
    projectName: "Logistics Dashboard",
    categoryBadge: "Systems Integration",
    typeBadge: "Route & Fulfillment Hub",
    metric: "18k",
    metricLabel: "Packs/Day",
    shortDescription: "An operational dashboard focused on driver status, pending routes, and fulfillment velocity.",
    fullDescription: "The Logistics Dashboard acts as the central brain for fulfillment centers. It tracks every driver in the field and every package in the warehouse, optimizing routes in real-time to ensure maximum efficiency.",
    stackPills: ["Next.js", "Mapbox", "Redis", "Node.js"],
    imageUrl: "/projects/frame-5.jpg",
    longImage: null,
    detailedImages: [],
    keyOutcome: "18% optimization in delivery route efficiency",
    metrics: [
      { value: "18k", label: "Packs/Day" },
      { value: "-14%", label: "Fuel Cost" },
      { value: "98%", label: "On-Time" }
    ],
    problemContext: "Logistics coordinators were struggling to manage 50+ drivers using static spreadsheets. Route changes were communicated via phone calls, leading to massive inefficiencies and late deliveries.",
    problemSolution: "We built a real-time command center that uses Mapbox to visualize driver locations and Redis to handle the high-frequency status updates from the field apps.",
    storyClient: "I have no idea where my drivers are until they check in. I can't optimize what I can't see.",
    storyNirgranth: "We'll build you a live map. You'll see every vehicle, every route, and every delay as it happens. Optimization will become automatic.",
    uxPhilosophy: "The design principle was \"Macro Visibility\". Leadership must be able to assess the health of the entire fleet within 3 seconds of opening the app.",
    projectCTA: "Optimize your delivery network with us. Start here.",
    features: [
      { title: "Live Mapbox Tracking", desc: "Real-time GPS positioning of all fleet vehicles." },
      { title: "Route Optimization", desc: "Dynamic rerouting based on traffic and weather." },
      { title: "Driver Performance", desc: "Metrics on delivery speed and vehicle health." },
      { title: "Fulfillment Velocity", desc: "Monitoring warehouse throughput in real-time." },
      { title: "Communication Link", desc: "Direct messaging between dispatch and drivers." },
      { title: "Incident Reports", desc: "Instant logging of traffic or vehicle issues." },
      { title: "Predictive Arrival", desc: "ETA calculation with high-precision accuracy." },
      { title: "Daily Analytics", desc: "Summary reports on cost per mile and delivery volume." }
    ]
  },
  {
    slug: "raasa",
    projectName: "RAASA",
    categoryBadge: "E-Commerce",
    typeBadge: "Fashion Retail Experience",
    metric: "High",
    metricLabel: "Conversion",
    shortDescription: "A premium digital storefront tailored for high-end fashion brands.",
    fullDescription: "Built on headless architecture, RAASA delivers sub-second page loads alongside cinematic product interactions tailored perfectly for dynamic mobile audiences.",
    stackPills: ["Next.js", "Shopify Headless", "Framer Motion"],
    imageUrl: "/projects/project-2-fashion.png",
    longImage: null,
    detailedImages: ["/projects/project-2-fashion-detail.png"],
    keyOutcome: "24% Increase in Cart Value & 1.2s LCP",
    metrics: [
      { value: "1.2s", label: "LCP" },
      { value: "+24%", label: "Order Value" },
      { value: "45%", label: "Mob. Conv." }
    ],
    problemContext: "The luxury brand was running on a slow, monolithic e-commerce engine. The sluggish performance degraded the high-end feel they needed to convey to premium buyers.",
    problemSolution: "We completely decoupled the frontend, deploying a statically generated Next.js shopping application connected headlessly to the backend.",
    storyClient: "Our clothes cost $500, but our website feels like a budget template. It's too slow.",
    storyNirgranth: "We're going to build a completely bespoke frontend. It will load instantly and feel like flipping through a high-end fashion magazine.",
    uxPhilosophy: "The design principle that governed every decision on this project was \"Editorial Elegance\". Every layout must honor the photography.",
    projectCTA: "Want an immersive storefront that actually converts? Let's build it.",
    features: [
      { title: "Cinematic Loading", desc: "Graceful reveal animations for product entry." },
      { title: "Edge Caching", desc: "Static generation for instantaneous routing." },
      { title: "Global CDN", desc: "Delivering massive imagery worldwide under 50ms." },
      { title: "Cart Drawers", desc: "Fluid slide-out cart modifying state instantly." },
      { title: "Predictive Search", desc: "Algolia-backed instantaneous product matching." },
      { title: "Zoom Analytics", desc: "Tracking which details users inspect the most." },
      { title: "Headless Shopify", desc: "Robust backend logic matched with limitless UI design." },
      { title: "SEO Perfection", desc: "Dynamic metadata capturing long-tail luxury searches." }
    ]
  },
  {
    slug: "quantum",
    projectName: "QUANTUM",
    categoryBadge: "Web Platform",
    typeBadge: "Enterprise Analytics Dashboard",
    metric: "Scalable",
    metricLabel: "Systems",
    shortDescription: "A massive B2B dashboard for monitoring microservices, server health, and user metrics.",
    fullDescription: "Quantum consolidates scattered data streams into a unified analytic command center with customizable widget layouts and 60fps data visualization.",
    stackPills: ["Vue 3", "D3.js", "TypeScript", "Node.js"],
    imageUrl: "/projects/project-3-saas.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Consolidated 14 disparate dashboards into one unified command center",
    metrics: [
      { value: "1B+", label: "Events/Day" },
      { value: "60fps", label: "Visuals" },
      { value: "99.9%", label: "Uptime" }
    ],
    problemContext: "Executives had to log into six different SaaS platforms to understand daily operational health. Data isolation was causing massive blind spots.",
    problemSolution: "We built Quantum—a master dashboard that pulls data from AWS, Hubspot, Stripe, and internal databases to give leadership a synchronous view of the entire company.",
    storyClient: "I don't know the health of the company unless I spend 4 hours aggregating reports manually.",
    storyNirgranth: "We'll build Quantum. One link, one login, and a real-time pulse of your entire enterprise visualized at 60fps.",
    uxPhilosophy: "The design principle was \"Macro to Micro\". The big picture must be obvious; the granular details must be accessible.",
    projectCTA: "Need a unified command center for your business data? Let's architect it.",
    features: [
      { title: "D3 Visualizations", desc: "Complex charting rendered at 60fps for real-time data." },
      { title: "Widget Ecosystem", desc: "Highly modular UI components for end-users." },
      { title: "Real-time Sync", desc: "Live ingestion of database mutations via WebSockets." },
      { title: "RBAC Security", desc: "Strict row-level security for executive privilege." },
      { title: "Export Engine", desc: "Generating heavily formatted PDF reports on the fly." },
      { title: "Anomaly Detection", desc: "Notifying admins when metric bounds are breached." },
      { title: "Dark Mode Native", desc: "Custom themes designed for deep development work." },
      { title: "Global State", desc: "Synchronous updates ensuring everyone sees the same metrics." }
    ]
  },
  {
    slug: "synapse-ai",
    projectName: "Synapse AI",
    categoryBadge: "AI Integration",
    typeBadge: "Automated Customer Support",
    metric: "Sub-Second",
    metricLabel: "Latency",
    shortDescription: "A generative AI support chatbot embedded directly into client workflows to deflect L1 tickets.",
    fullDescription: "Utilizing custom vector embeddings to answer domain-specific questions securely and responsively via a sleek floating interface.",
    stackPills: ["Next.js", "OpenAI", "LangChain", "Vector DB"],
    imageUrl: "/projects/project-4-chatbot.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Deflected 64% of L1 support tickets autonomously within 30 days",
    metrics: [
      { value: "64%", label: "Deflection" },
      { value: "0.8s", label: "TTFB" },
      { value: "24/7", label: "Coverage" }
    ],
    problemContext: "The support team was drowning in repetitive queries about basic tool usage, preventing them from handling complex, high-value client issues.",
    problemSolution: "We deployed Synapse. We embedded the entire company documentation into a vector database and built a lightning-fast chat interface that intercepts users before they submit a ticket.",
    storyClient: "We answer the same 40 questions every single day. The team is burning out.",
    storyNirgranth: "We'll embed Synapse immediately. It acts as an infinitely patient encyclopedia that already knows every page of your operating manual.",
    uxPhilosophy: "The design principle was \"Instant Reassurance\". The bot must start typing back before the user moves their mouse.",
    projectCTA: "Want to automate your tier 1 customer support? Contact us today.",
    features: [
      { title: "Streaming Responses", desc: "Typewriter effect generated in real-time." },
      { title: "Context Memory", desc: "Retaining conversational continuity across sessions." },
      { title: "Vector Search", desc: "RAG architecture pulling exact quotes from docs." },
      { title: "Human Handoff", desc: "Seamlessly routing complex issues to live agents." },
      { title: "Analytics Engine", desc: "Tracking which questions the AI struggles to answer." },
      { title: "Floating Widget", desc: "Non-intrusive UI floating across all SaaS pages." },
      { title: "Tone Customization", desc: "Adjusting the LLM system prompt to match brand voice." },
      { title: "Zero Hallucination", desc: "Strict safeguards preventing the bot from guessing." }
    ]
  },
  {
    slug: "aurum",
    projectName: "AURUM",
    categoryBadge: "Web Platform",
    typeBadge: "Real Estate Portal",
    metric: "Global",
    metricLabel: "Reach",
    shortDescription: "A boutique luxury property discovery platform featuring high-fidelity imagery and maps.",
    fullDescription: "Aurum focuses on the presentation of multi-million dollar property listings, using edge-to-edge photography and minimal UI to sell the vision.",
    stackPills: ["Next.js", "Mapbox", "PostgreSQL", "Tailwind"],
    imageUrl: "/projects/project-5-realestate.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Increased high-net-worth lead volume by 115% via immersive UX",
    metrics: [
      { value: "115%", label: "Lead Growth" },
      { value: "Dark", label: "Aesthetic" },
      { value: "Premium", label: "Feel" }
    ],
    problemContext: "A boutique luxury agency needed to differentiate themselves. Their multi-million dollar properties were being presented like cheap apartments on generic platforms.",
    problemSolution: "We engineered Aurum. A platform that strips away the grids and noise, presenting properties as massive, immersive case studies mapped out via custom dark-mode cartography.",
    storyClient: "When you are selling a 20 million dollar villa, it needs to look 20 million dollars online.",
    storyNirgranth: "We'll build a digital gallery. Full screen imagery, fluid navigation, and mapped locations that feel like you're already there.",
    uxPhilosophy: "The design principle was \"Cinematic Space\". The interface must breathe, giving massive scale to the property imagery.",
    projectCTA: "Looking to elevate your real estate brand's digital presence? Start here.",
    features: [
      { title: "Interactive Maps", desc: "Custom-styled cartography to match brand themes." },
      { title: "Full-Screen Galleries", desc: "Uncompressed imagery spanning the entire viewport." },
      { title: "Virtual Tours", desc: "Embedded 3D walk-through integration." },
      { title: "Lead Ingestion", desc: "Directly capturing buyer profiles to the CRM." },
      { title: "Speed Optimization", desc: "Lazy loading massive imagery off-screen." },
      { title: "Dark Aesthetic", desc: "A premium black/gold palette unique to luxury brands." },
      { title: "Advanced Filtering", desc: "Multi-dimensional search tailored for unique amenities." },
      { title: "SEO Driven", desc: "Dynamic metadata capturing long-tail luxury searches." }
    ]
  },
  {
    slug: "inventsync",
    projectName: "InventSync",
    categoryBadge: "Systems Integration",
    typeBadge: "Warehouse Management",
    metric: "200ms",
    metricLabel: "Latency",
    shortDescription: "A hyper-fast inventory platform designed for real-time tracking across global nodes.",
    fullDescription: "InventSync replaces sluggish logistics software with a hyper-fast, mobile-first web app that syncs physical movements instantly via WebSockets.",
    stackPills: ["Next.js", "WebSockets", "tRPC", "Prisma"],
    imageUrl: "/projects/project-6-inventory.png",
    longImage: null,
    detailedImages: ["/projects/project-6-inventory-detail.png"],
    keyOutcome: "Zero-latency synchronization across 3 global warehouses instantly",
    metrics: [
      { value: "200ms", label: "API Sync" },
      { value: "99.9%", label: "Uptime" },
      { value: "∞", label: "Scale" }
    ],
    problemContext: "Warehouse staff were using Android barcode scanners with software that lagged by several seconds. This delay caused double-scans and horrific inventory desync.",
    problemSolution: "We built InventSync—a stripped-down, ultra-fast progressive web app. Using tRPC and WebSockets, a scan registers worldwide in under 200ms.",
    storyClient: "Our scanning software is so slow that workers think it didn't register. Our counts are completely broken.",
    storyNirgranth: "We'll build a system faster than human reaction time. The moment the laser hits the barcode, the central server knows.",
    uxPhilosophy: "The design principle was \"Utilitarian Speed\". Big buttons, massive contrast, and instantaneous feedback for floor workers.",
    projectCTA: "Tracking inventory across locations? We'll unify it into one system.",
    features: [
      { title: "PWA Architecture", desc: "Installable directly to rugged Android scanners." },
      { title: "Offline Support", desc: "Queueing scans in LocalStorage if Wi-Fi drops." },
      { title: "WebSocket Sync", desc: "Instantly updating the manager dashboard." },
      { title: "High-Contrast UI", desc: "Designed for visibility in poor warehouse lighting." },
      { title: "Barcode API", desc: "Direct hardware integration with zebra scanner lasers." },
      { title: "Location Mapping", desc: "3D grid routing to show workers the fastest path." },
      { title: "Audit Mode", desc: "Specialized workflows for rapid cycle counting." },
      { title: "Role-Based Access", desc: "Strict permissions separating pickers from receivers." }
    ]
  },
  {
    slug: "strengthify",
    projectName: "Strengthify",
    categoryBadge: "App Development",
    typeBadge: "Cross-Platform Fitness App",
    metric: "Native",
    metricLabel: "Performance",
    shortDescription: "A fluid, physics-driven mobile application built in Flutter for high-engagement fitness tracking.",
    fullDescription: "Strengthify provides a premium workout tracking experience. It features immersive animations and a data-heavy but clean UI that keeps athletes focused on their progress.",
    stackPills: ["Flutter", "Dart", "Firebase", "Riverpod"],
    imageUrl: "/projects/project-8-flutter.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "4.9/5 Average User Rating & 60fps Native Performance",
    metrics: [
      { value: "60fps", label: "Animation" },
      { value: "4.9★", label: "Store Rate" },
      { value: "82%", label: "Retention" }
    ],
    problemContext: "Most fitness apps are either overly simplistic or cluttered with ads. The client wanted a premium, distraction-free tool that felt 'expensive' and native.",
    problemSolution: "We built Strengthify using Flutter, focusing on custom painters and physics-based animations to create a UI that feels relentlessly responsive and high-end.",
    storyClient: "I want an app that feels like a precision instrument, not a toy. It needs to be beautiful and fast.",
    storyNirgranth: "We'll engineer a Flutter application that outperforms native apps. High-fidelity visuals, zero frame drops, and a design that athletes actually want to use.",
    uxPhilosophy: "The design principle was \"Frictionless Progress\". Every interaction must feel physical and rewarding.",
    projectCTA: "Have a high-end mobile app idea? Let's build it together.",
    features: [
      { title: "Custom Painters", desc: "Bespoke charting and progress visualizations." },
      { title: "Physics Scroll", desc: "Over-scroll interactions that feel fundamentally native." },
      { title: "Offline Sync", desc: "Recording workouts without internet, syncing later." },
      { title: "Apple Health", desc: "Deep integration with OS-level fitness ecosystems." },
      { title: "Native Bindings", desc: "Accessing low-level hardware for precise sensors." },
      { title: "Dark Mode Opt.", desc: "Automated theme shifting for late-night gym sessions." },
      { title: "Weight Prediction", desc: "AI models suggesting your next set's load." },
      { title: "Social Sharing", desc: "Generating cinematic workout summaries for Instagram." }
    ]
  }
];
