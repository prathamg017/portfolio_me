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
  storyPratham: string;
  uxPhilosophy: string;
  projectCTA: string;
  live?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "hipeople",
    projectName: "HiPeople",
    categoryBadge: "Systems",
    typeBadge: "B2B SaaS",
    metric: "50%",
    metricLabel: "Faster Builds",
    shortDescription: "Frontend engineering at a hiring automation platform used by 2,000+ teams including SAP and Accenture.",
    fullDescription: "HiPeople automate candidate assessments. Our work focused on hardening the frontend architecture and optimizing the delivery pipeline for high-growth engineering teams.",
    stackPills: ["React", "Docker", "Vite", "Playwright", "Vitest"],
    imageUrl: "/projects/project-hipeople.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "50% reduction in CI/CD build time & full E2E test coverage",
    metrics: [
      { value: "2,000+", label: "Teams" },
      { value: "50%", label: "Faster Builds" },
      { value: "100%", label: "Test Coverage" }
    ],
    problemContext: "Our CI pipeline was slow, our frontend had no test strategy, and our component system was inconsistent across teams. Every release was a gamble.",
    problemSolution: "Built a comprehensive E2E testing strategy using Playwright combining functional tests with containerized snapshot testing. Optimized the CI/CD pipeline cutting build times by 50% while adding stricter quality gates. Developed reusable React components for complex assessment workflows handling large-scale candidate data. Led frontend architecture improvements including stronger typing and cleaner component interfaces.",
    storyClient: "Our CI pipeline was slow, our frontend had no test strategy, and our component system was inconsistent across teams. Every release was a gamble.",
    storyPratham: "We built a comprehensive E2E strategy and optimized the CI pipeline, cutting build times by 50% while establishing reusable component patterns for scale.",
    uxPhilosophy: "Reliability is a feature. A system that ships confidently is worth more than one that ships fast.",
    projectCTA: "Need a high-performance system for your business? Let's architect it.",
    live: "https://www.hipeople.io/",
    features: [
      { title: "Real-time Assessment Workflows", desc: "Candidate data at scale" },
      { title: "Playwright E2E", desc: "Full functional + snapshot coverage" },
      { title: "CI/CD Optimization", desc: "50% faster builds with stricter gates" },
      { title: "Component Architecture", desc: "Reusable patterns across teams" },
      { title: "TypeScript Hardening", desc: "Stronger typing throughout" },
      { title: "Docker Integration", desc: "Containerized snapshot testing" },
      { title: "Performance Optimization", desc: "Large dataset handling" },
      { title: "Design System", desc: "Consistent UI across all flows" }
    ]
  },
  {
    slug: "eiendomsmeglere",
    projectName: "Eiendomsmeglere.no",
    categoryBadge: "Web",
    typeBadge: "Marketplace Platform",
    metric: "100%",
    metricLabel: "Verified Leads",
    shortDescription: "A real estate marketplace connecting property sellers with multiple competing realtors through one listing.",
    fullDescription: "Eiendomsmeglere.no streamlines the realtor selection process in Norway, creating a competitive environment that benefits both sellers and qualified agents.",
    stackPills: ["Next.js", "Better-Auth", "Drizzle", "PostgreSQL"],
    imageUrl: "/projects/project-eiendomsmeglere.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Multi-sided marketplace live in production with verified lead generation",
    metrics: [
      { value: "1 Listing", label: "Multiple Offers" },
      { value: "100%", label: "Verified Leads" },
      { value: "Live", label: "Production" }
    ],
    problemContext: "Property sellers in Norway had to contact each realtor individually, wasting time. Realtors had no reliable source of pre-qualified, motivated sellers.",
    problemSolution: "Engineered a multi-sided marketplace where one property listing triggers competitive offers from multiple local realtors. Built with Next.js, Better-Auth for secure authentication, Drizzle ORM with PostgreSQL for data integrity, and shadcn/ui for a clean responsive interface. Solved a genuine market friction point — sellers get competition, realtors get qualified pipeline.",
    storyClient: "Property sellers in Norway had to contact each realtor individually, wasting time. Realtors had no reliable source of pre-qualified, motivated sellers.",
    storyPratham: "We engineered a multi-sided marketplace that triggers competitive offers from local realtors, solving friction for both sides simultaneously.",
    uxPhilosophy: "The best marketplace removes friction from both sides simultaneously — not just one.",
    projectCTA: "Ready to launch a complex marketplace? We can build it.",
    live: "https://www.eiendomsmeglere.no",
    features: [
      { title: "Multi-sided Platform", desc: "Sellers, realtors, and admins" },
      { title: "Secure Auth", desc: "Better-Auth with role management" },
      { title: "Lead Verification", desc: "Pre-qualified seller matching" },
      { title: "Competitive Offers", desc: "Multiple realtor bid system" },
      { title: "Responsive UI", desc: "shadcn/ui across all devices" },
      { title: "PostgreSQL", desc: "Relational data with Drizzle ORM" },
      { title: "Real-time Updates", desc: "Instant offer notifications" },
      { title: "Production Deployed", desc: "Live with real users" }
    ]
  },
  {
    slug: "flipsight",
    projectName: "Flipsight",
    categoryBadge: "Systems",
    typeBadge: "Competency Platform",
    metric: "10x",
    metricLabel: "Table Performance",
    shortDescription: "A competency management platform for fast-paced startups, rebuilt for performance and developer experience.",
    fullDescription: "Flipsight allows startups to map and grow their team's skills through a high-performance matrix interface and streamlined onboarding.",
    stackPills: ["Next.js", "Prisma", "tRPC", "MUI", "TypeScript", "Playwright"],
    imageUrl: "/projects/project-flipsight.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Massive matrix table performance boost via React concurrency & memoization",
    metrics: [
      { value: "10x", label: "Table Performance" },
      { value: "100%", label: "Type Safe" },
      { value: "0", label: "UI Inconsistencies" }
    ],
    problemContext: "Our core matrix table was grinding to a halt with real data. The user creation flow was broken. And our component system was a mess — every dev was doing things differently.",
    problemSolution: "Led development of a new multi-step user creation wizard that streamlined the onboarding process completely. Optimized the critical matrix table — the core of the application — using optimistic UI updates, React concurrency, memoization, and simplified node structure, achieving massive performance gains. Established a set of UI component patterns and guides that standardized the entire frontend.",
    storyClient: "Our core matrix table was grinding to a halt with real data. The user creation flow was broken. And our component system was a mess.",
    storyPratham: "We optimized the matrix table using React concurrency and memoization, achieving 10x performance gains and standardizing the UI patterns.",
    uxPhilosophy: "Performance is not a feature you add later — it is an architectural decision made on day one.",
    projectCTA: "Need a high-performance dashboard? Let's talk.",
    live: "https://www.flipsight.de",
    features: [
      { title: "User Creation Wizard", desc: "Multi-step onboarding flow" },
      { title: "Matrix Table Optimization", desc: "Concurrency + memoization" },
      { title: "Optimistic UI", desc: "Instant perceived performance" },
      { title: "React Concurrency", desc: "Parallel rendering strategy" },
      { title: "Component Standards", desc: "Guides for the full team" },
      { title: "TypeScript", desc: "End-to-end type safety" },
      { title: "tRPC", desc: "Type-safe API layer" },
      { title: "Playwright Testing", desc: "E2E coverage on critical flows" }
    ]
  },
  {
    slug: "react-builder",
    projectName: "React Builder",
    categoryBadge: "Systems",
    typeBadge: "Open Source Tool",
    metric: "120+",
    metricLabel: "GitHub Stars",
    shortDescription: "Web app that scaffolds React apps with custom components, routing, and pre-configured dependencies — 120+ GitHub stars.",
    fullDescription: "React Builder solves the 'new project fatigue' by automating the setup of complex React environments.",
    stackPills: ["React", "Open Source", "Dev Tooling", "Node.js"],
    imageUrl: "/projects/project-react-builder.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "120+ GitHub stars & 150+ lines of boilerplate eliminated per project",
    metrics: [
      { value: "120+", label: "GitHub Stars" },
      { value: "150+", label: "Lines Saved" },
      { value: "Open", label: "Source" }
    ],
    problemContext: "Every new React project starts the same way — copy-pasting the same folder structure, reinstalling the same dependencies. It's 20 minutes of wasted setup every single time.",
    problemSolution: "Built React Builder — a web app that generates a fully configured React project in seconds. Developers pick their components, pages, and routing preferences, and the tool generates a clean project with pre-configured dependencies. Saves 150+ lines of code per project on average, deployed on Vercel, and organically grew to 120+ GitHub stars through developer sharing.",
    storyClient: "Every new project starts with 20 minutes of wasted setup. We need to scaffold faster.",
    storyPratham: "We built a visual project generator that eliminates 150+ lines of boilerplate per project, earning 120+ organic GitHub stars.",
    uxPhilosophy: "The best developer tool is the one that removes decisions — not adds them.",
    projectCTA: "Building dev tools for your team? Let's automate the boilerplate.",
    live: "https://react-builder.vercel.app/",
    github: "https://github.com/amanjagdev/react-builder",
    features: [
      { title: "Project Scaffolding", desc: "Full React app in seconds" },
      { title: "Component Picker", desc: "Choose only what you need" },
      { title: "Routing Config", desc: "Pre-wired React Router setup" },
      { title: "Dependency Manager", desc: "Pre-configured installs" },
      { title: "150+ LOC Saved", desc: "Per project on average" },
      { title: "Vercel Deployed", desc: "Always-on generation tool" },
      { title: "Open Source", desc: "Community contributions welcome" },
      { title: "120+ Stars", desc: "Organic developer adoption" }
    ]
  },
  {
    slug: "geu-website",
    projectName: "Graphic Era University",
    categoryBadge: "Web",
    typeBadge: "Enterprise Web",
    metric: "25%",
    metricLabel: "Traffic Increase",
    shortDescription: "Production flagship website for Graphic Era University group — driving a measurable 25% increase in traffic.",
    fullDescription: "The GEU web ecosystem unifies education, healthcare, and student services under a high-performance frontend architecture.",
    stackPills: ["Next.js", "TypeScript", "Tailwind", "Production"],
    imageUrl: "/projects/project-geu.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "25% traffic increase & 80+ monthly hospital appointments via web",
    metrics: [
      { value: "25%", label: "Traffic Increase" },
      { value: "80+", label: "Monthly Appointments" },
      { value: "Production", label: "Live Institution" }
    ],
    problemContext: "The university's web presence was outdated, slow, and failing to convert prospective students or patients into real actions — visits, applications, and appointments were all below potential.",
    problemSolution: "Led development of the flagship website for Graphic Era Group using modern Next.js and TypeScript, resulting in a 25% increase in traffic and significantly improved user flow. Built the hospital site at geimshospital.com enabling online appointment booking, generating 80+ appointments per month directly through the web. Also built student onboarding hubs at induction.geu.one and buzz.geu.ac.in to streamline new student orientation.",
    storyClient: "Our web presence failed to convert applicants or patients. It didn't reflect our institution's quality.",
    storyPratham: "We rebuilt the entire flagship ecosystem, driving 25% more traffic and enabling 80+ monthly healthcare appointments via a new digital booking system.",
    uxPhilosophy: "A university's website is its first impression to every future student. It must feel like the institution deserves to teach them.",
    projectCTA: "Ready to scale your enterprise web presence? Let's talk.",
    live: "https://geu.ac.in",
    features: [
      { title: "Flagship Website", desc: "geu.ac.in production" },
      { title: "Hospital Booking", desc: "80+ monthly appointments" },
      { title: "Student Hub", desc: "Induction + orientation portal" },
      { title: "Traffic Growth", desc: "25% measurable increase" },
      { title: "Next.js", desc: "SSR + static hybrid" },
      { title: "TypeScript", desc: "Fully typed codebase" },
      { title: "Performance Optimized", desc: "Core Web Vitals focused" },
      { title: "Multi-property", desc: "4 production sites launched" }
    ]
  },
  {
    slug: "buzz-geu",
    projectName: "Buzz GEU",
    categoryBadge: "Web",
    typeBadge: "Community Platform",
    metric: "10k+",
    metricLabel: "Active Students",
    shortDescription: "A centralized social and community hub for Graphic Era University, designed for student engagement and real-time updates.",
    fullDescription: "Buzz GEU unifies the university's social fabric, providing a high-performance space for students to interact, share updates, and stay connected with campus life.",
    stackPills: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: "/projects/project-buzz-geu.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Launched a scalable community platform supporting 10,000+ active student interactions.",
    metrics: [
      { value: "10k+", label: "Students" },
      { value: "High", label: "Engagement" },
      { value: "Real-time", label: "Updates" }
    ],
    problemContext: "University communication was fragmented across dark social channels and email. Students lacked a centralized, modern environment to build community and access campus pulse.",
    problemSolution: "Architected a modern community hub using Next.js and Framer Motion for a fluid, 'app-like' experience. Optimized for mobile-first usage, ensuring accessibility across all devices. Implemented robust feed systems and notification layers to keep information flowing without friction.",
    storyClient: "Our communication was fragmented. We needed a place that students actually wanted to use every day.",
    storyPratham: "We built a smooth, high-engagement hub that students embraced, moving from fragmented emails to a single, vibrant campus pulse.",
    uxPhilosophy: "A community platform is only as strong as its lowest friction interaction point.",
    projectCTA: "Building a niche community? Let's design for engagement.",
    live: "https://buzz-geu.vercel.app",
    features: [
      { title: "Dynamic Feed", desc: "Real-time campus updates" },
      { title: "Mobile-First", desc: "Optimized for student on-the-go" },
      { title: "Engagement Metrics", desc: "Designed for high interaction" },
      { title: "Secure Access", desc: "Student-exclusive environment" }
    ]
  },
  {
    slug: "healthbridge",
    projectName: "HealthBridge",
    categoryBadge: "Health",
    typeBadge: "Healthcare SaaS",
    metric: "24/7",
    metricLabel: "Care Access",
    shortDescription: "A comprehensive healthcare connectivity platform bridging the gap between clinical data and patient care.",
    fullDescription: "HealthBridge streamlines medical workflows, providing a secure and performant interface for managing patient health records and specialist communication.",
    stackPills: ["Next.js", "TypeScript", "Tailwind", "Healthcare Architecture"],
    imageUrl: "/projects/project-healthbridge.png",
    longImage: null,
    detailedImages: [],
    keyOutcome: "Developed a secure, production-grade healthcare portal with zero downtime and iron-clad data integrity.",
    metrics: [
      { value: "Secure", label: "Data Pipeline" },
      { value: "0ms", label: "Latency" },
      { value: "24/7", label: "Uptime" }
    ],
    problemContext: "Healthcare data is often siloed and difficult to navigate. Patients and providers lacked a fast, secure bridge to manage records and coordinates specialized care efficiently.",
    problemSolution: "Engineered a high-performance healthcare dashboard focused on information density and security. Built with a focus on 'zero-latency' interactions to ensure medical professionals can access critical data without delay. Implemented a clean, accessible UI designed for high-stress environments.",
    storyClient: "We needed a platform that was both incredibly secure and incredibly fast. Patients' health depends on it.",
    storyPratham: "We delivered a zero-latency healthcare portal that prioritizes security and clarity, ensuring data is always accessible when it matters most.",
    uxPhilosophy: "In healthcare, speed and clarity aren't just features—they are requirements for better patient outcomes.",
    projectCTA: "Ready to bridge the gap in healthcare tech? Let's build a secure future.",
    live: "https://healthbridge.vercel.app",
    features: [
      { title: "Dashboard Density", desc: "Critical data at a glance" },
      { title: "Secure Architecture", desc: "Privacy-first engineering" },
      { title: "Specialist Bridge", desc: "Seamless record sharing" },
      { title: "Performance First", desc: "Zero-latency data access" }
    ]
  }
];
