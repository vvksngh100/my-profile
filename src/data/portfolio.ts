export interface SkillItem {
  name: string;
  category: string;
  level?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon?: string; badge?: string }[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type?: "work" | "career-break";
  logo?: string;
  highlights?: { label: string; value: string }[];
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  category: "AI & Full Stack" | "Enterprise Web Apps" | "Desktop & Full Stack" | "Full Stack & Cloud";
  tagline: string;
  description: string;
  keyPoints: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl?: string;
  architectureHighlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
}

export interface Award {
  title: string;
  organization?: string;
  date: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  url: string;
}

export const PERSONAL_INFO = {
  name: "Vivek Singh",
  title: "Frontend Developer & Full-Stack AI Engineer",
  roles: [
    "Frontend Developer",
    "React.js & Next.js Developer",
    "Full Stack Developer",
    "Local AI & RAG Engineer",
    "Performance Optimization Specialist",
  ],
  location: "Kalyan, Mumbai, Maharashtra",
  email: "vvksngh100@gmail.com",
  phone: "+91 7905502475",
  linkedin: "https://www.linkedin.com/in/vivek-singh-095712182",
  github: "https://github.com/vvksngh100",
  leetcode: "https://leetcode.com/u/vvksngh100/",
  resumePath: "/Vivek_Singh_Resume.pdf",
  bio: `Frontend Developer with 3+ years of experience building responsive and enterprise web applications using React.js, JavaScript, TypeScript, Redux Toolkit and REST APIs. Experienced in developing reusable UI components, integrating frontend applications with backend services, implementing role-based access control, and optimizing data-intensive applications for performance. Additional hands-on experience with Next.js, Node.js, Express.js and SQL, and local AI and RAG-based applications.`,
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Enterprise Components", value: "20+" },
    { label: "SQL Query Speedup", value: "50%" },
    { label: "Concurrent Users Handled", value: "200+" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, high-performance user interfaces",
    skills: [
      { name: "React.js", badge: "Core" },
      { name: "Next.js", badge: "Core" },
      { name: "JavaScript (ES6+)", badge: "Core" },
      { name: "TypeScript", badge: "Core" },
      { name: "Redux Toolkit" },
      { name: "Context API" },
      { name: "HTML5 & CSS3" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server architectures, real-time streams, and API security",
    skills: [
      { name: "Node.js", badge: "Core" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Server-Sent Events (SSE)" },
      { name: "WebSockets" },
      { name: "JWT" },
      { name: "Role-Based Access Control (RBAC)" },
      { name: "TanStack Query" },
    ],
  },
  {
    title: "Databases & AI Technologies",
    description: "Relational persistence, vector embeddings, and local AI architectures",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Pinecone Vector DB" },
      { name: "Hugging Face Transformers" },
      { name: "Groq" },
      { name: "Local RAG" },
      { name: "8-bit Quantized Models" },
    ],
  },
  {
    title: "Tools & Practices",
    description: "Desktop frameworks, version control, and production tooling",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "JIRA" },
      { name: "Agile/Scrum" },
      { name: "Electron" },
    ],
  },
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "sublime-technocorp",
    role: "Frontend Developer",
    company: "Sublime Technocorp Pvt Ltd",
    location: "Navi Mumbai, MH",
    period: "Oct 2025 – Jun 2026",
    isCurrent: true,
    type: "work",
    logo: "/companies/sublime.jpg",
    highlights: [
      { label: "Accounts Served", value: "50+" },
      { label: "Components Built", value: "20+" },
      { label: "RBAC Security", value: "3 Tiers" },
    ],
    description: [
      "Developed 20+ reusable React.js components for an enterprise digital signage platform supporting 50+ enterprise accounts.",
      "Implemented client-side Role-Based Access Control (RBAC) across 3 permission tiers to restrict unauthorized platform views.",
      "Integrated React.js interfaces with an Express.js backend and resolved 15+ critical UI issues during production maintenance.",
      "Developed reusable frontend functionality for enterprise workflows with a focus on maintainability and consistent user experience.",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "RBAC", "Tailwind CSS", "Node.js", "Express.js", "JIRA"],
  },
  {
    id: "career-break-upskilling",
    role: "Career Break",
    company: "Family Responsibilities & Bereavement Leave",
    location: "Prayagraj, UP",
    period: "Feb 2025 – Sep 2025",
    type: "career-break",
    highlights: [
      { label: "Desktop Architecture", value: "Electron" },
      { label: "Real-Time Telemetry", value: "WebSockets" },
      { label: "Algorithms Focus", value: "Advanced" },
    ],
    description: [
      "Took a career break to support family responsibilities and provide full-time care for my late father.",
      "Continued technical development during the break through advanced React.js, JavaScript, and Data Structures & Algorithms, while building an Energy Monitoring Desktop Application using Electron and React.js.",
    ],
    skills: ["React.js", "Electron", "JavaScript", "Express.js", "WebSockets", "Data Structures & Algorithms", "MySQL"],
  },
  {
    id: "sankey-business-solutions",
    role: "Solution Analyst",
    company: "Sankey Business Solutions Pvt Ltd",
    location: "Thane, Mumbai, MH",
    period: "Apr 2022 – Jan 2025",
    type: "work",
    logo: "/companies/sankey.png",
    highlights: [
      { label: "SQL Query Speedup", value: "50%" },
      { label: "Concurrent Users", value: "200+" },
      { label: "Daily Work Orders", value: "500+" },
    ],
    description: [
      "Maintained and enhanced an enterprise Field Service Management platform supporting up to 200 concurrent users.",
      "Developed dynamic data tables with permission-driven controls, rendering 1,000+ data rows without lag and contributing to a 20% improvement in field-work-order dispatching.",
      "Designed a validation algorithm requiring photographic proof for task completion, ensuring real-time verification for 500+ daily field work orders and reducing manual audit time by 30%.",
      "Optimized complex SQL execution plans, joins and indexing, reducing query execution time by 50% and bringing load times from 10 seconds to 5 seconds.",
      "Worked on enterprise application enhancements involving frontend functionality, data handling, permissions and performance optimization.",
    ],
    skills: ["React.js", "JavaScript (ES6+)", "SQL Optimization", "Relational Database Management", "REST APIs", "Dynamic Tables", "Postman"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-research-assistant",
    title: "Personal AI Research Assistant (Production-Grade RAG System)",
    period: "2026",
    category: "AI & Full Stack",
    tagline: "Local Retrieval-Augmented Generation platform capable of processing 10MB PDFs with sub-2s latency and zero event-loop lag.",
    description:
      "A production-grade local RAG platform capable of processing PDFs up to 10MB and generating citation-backed answers from extracted semantic information.",
    keyPoints: [
      "Created a local RAG platform capable of processing PDFs up to 10MB and generating citation-backed answers from extracted semantic information.",
      "Moved heavy document-processing tasks to Node.js worker threads, preventing event-loop blockage during large PDF uploads.",
      "Integrated an 8-bit quantized embedding model to decrease server memory usage by 70%, maintaining application stability on a 512MB RAM cloud tier.",
      "Implemented a dual-lane queue scheduler that processes 50KB documents in under 2 seconds, even while 10MB files run in the background.",
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "Worker Threads",
      "Pinecone Vector DB",
      "Hugging Face Transformers",
      "Groq",
      "Local RAG",
      "REST APIs",
    ],
    metrics: [
      { label: "Memory Reduction", value: "70%" },
      { label: "Event Loop Blockage", value: "0ms" },
      { label: "Small Doc Latency", value: "< 2s" },
      { label: "Max File Processed", value: "10MB" },
    ],
    githubUrl: "https://github.com/vvksngh100",
    architectureHighlights: [
      "Dual-lane queue scheduling eliminating head-of-line blocking",
      "Semantic vector indexing using Pinecone Vector DB",
      "8-bit quantization for 70% cloud server memory reduction",
      "Isolated worker thread execution protecting Node.js event-loop",
    ],
  },
  {
    id: "enterprise-digital-signage",
    title: "Enterprise Digital Signage Platform",
    period: "2025 – 2026",
    category: "Enterprise Web Apps",
    tagline: "Centralized media scheduling and distribution platform for 50+ distributors with dynamic multi-tier forms.",
    description:
      "An enterprise digital signage platform for scheduling, monitoring, and distributing media playlists across 50+ distributor networks with RBAC and dynamic data entry.",
    keyPoints: [
      "Constructed interactive scheduling dashboards for 50+ distributors, streamlining media playlist management and reducing content delivery delays by 40%.",
      "Built a dynamic form component now used in 10+ screens across Lead, Order, and Customer management, streamlining data entry for 100+ daily users.",
      "Implemented client-side Role-Based Access Control (RBAC) across 3 permission tiers to restrict unauthorized platform views.",
      "Integrated React.js interfaces with an Express.js backend and resolved 15+ critical UI issues during production maintenance.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "RBAC",
    ],
    metrics: [
      { label: "Delivery Delay Cut", value: "40%" },
      { label: "Distributors Served", value: "50+" },
      { label: "Daily Active Users", value: "100+" },
      { label: "Screens Deployed", value: "10+" },
    ],
    githubUrl: "https://github.com/vvksngh100",
    architectureHighlights: [
      "Client-side RBAC across 3 distinct permission tiers",
      "Reusable schema-driven dynamic form engine across 10+ screens",
      "Centralized Redux Toolkit state synchronization",
      "Optimized scheduling workflows eliminating content bottlenecks",
    ],
  },
  {
    id: "energy-monitoring-desktop",
    title: "Energy Monitoring Desktop Application",
    period: "2025",
    category: "Desktop & Full Stack",
    tagline: "Cross-platform desktop system streaming live telemetry (voltage, current, power, frequency) via WebSockets.",
    description:
      "A cross-platform desktop application built using Electron, React.js, and Express.js to monitor and visualize real-time energy consumption and system telemetry.",
    keyPoints: [
      "Built a cross-platform desktop application using Electron, React.js, and Express.js to monitor and visualize real-time energy consumption and system telemetry.",
      "Integrated WebSocket-based real-time communication to stream live electrical parameters including voltage, current, power, and frequency from connected monitoring devices.",
      "Implemented interactive dashboards and data visualizations to provide real-time insights into energy consumption and system performance.",
      "Integrated MySQL for local data persistence and historical energy-monitoring data, enabling users to analyze device-level consumption and operational metrics.",
    ],
    techStack: [
      "Electron",
      "React.js",
      "Express.js",
      "WebSockets",
      "MySQL",
      "JavaScript (ES6+)",
      "Data Visualizations",
      "Node.js",
    ],
    metrics: [
      { label: "Live Telemetry", value: "Real-time" },
      { label: "Monitored Params", value: "4 Signals" },
      { label: "Data Persistence", value: "MySQL" },
      { label: "Cross-Platform", value: "Electron" },
    ],
    githubUrl: "https://github.com/vvksngh100",
    architectureHighlights: [
      "Persistent WebSocket full-duplex stream for instantaneous telemetry",
      "Cross-platform desktop application packaging via Electron",
      "Interactive multi-sensor telemetry dashboards and charts",
      "Normalized MySQL local relational schema for device-level time-series analytics",
    ],
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "bsc",
    degree: "Bachelor of Science (B.Sc.)",
    institution: "Govind Singh Smarak Degree College",
    location: "Uttar Pradesh, India",
    period: "Jul 2020 – Jun 2023",
    grade: "64.94%",
    description:
      "Completed undergraduate science degree with foundational studies in mathematics, scientific computing, and computational problem solving.",
  },
  {
    id: "diploma-cse",
    degree: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic, Jaunpur",
    location: "Jaunpur, Uttar Pradesh, India",
    period: "Jul 2016 – Jun 2019",
    grade: "72.70%",
    description:
      "Core curriculum in Computer Science: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
  },
  {
    id: "class_12",
    degree: 'Class XII',
    institution: "Jawahar Navodaya Vidyalaya, Meja Khas",
    location: "Meja Khas, Prayagraj, Uttar Pradesh, India",
    period: "Jul 2013 – Jun 2014",
    grade: "90.6%",
    description: 'Core curriculum in Computer Science, Physics, Chemistry, Mathematics and English'
  },
  {
    id: "class_10",
    degree: "Class X",
    institution: "Jawahar Navodaya Vidyalaya, Meja Khas",
    location: "Meja Khas, Prayagraj, Uttar Pradesh, India",
    period: "Jul 2011 – Jun 2012",
    grade: "9.4 CGPA",
    description: ""
  }
];

export const HONORS_AWARDS: Award[] = [
  {
    title: "Zinspire Award",
    organization: "Sankey Business Solutions",
    date: "Jul 2024",
    description: "Awarded for delivering critical change requests with engineering excellence ahead of schedule.",
  },
  {
    title: "Client Appreciation Award",
    organization: "Enterprise Client Stakeholders",
    date: "Apr 2024",
    description: "Recognized for high-priority delivery and exceptional commitment to platform stability and zero-regression deployment.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
  },
  {
    title: "Back End Development & APIs",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
  },
];
