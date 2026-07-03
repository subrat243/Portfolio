// Centralized Application Configuration
// This file prevents recurring issues by centralizing all app settings

export const APP_CONFIG = {
  // Site Information
  site: {
    name: "Subrat Samantaray Portfolio",
    title: "Subrat Samantaray | Cybersecurity Portfolio",
    description: "A Cybersecurity student.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    author: "Subrat Samantaray",
    email: "[EMAIL_ADDRESS]",
    keywords: [
      "cybersecurity",
      "penetration testing",
      "network security",
      "ethical hacking",
      "portfolio",
      "nextjs",
      "react",
      "typescript",
    ],
  },

  // Navigation Configuration
  navigation: {
    links: [
      { title: "About me", href: "#about", isExternal: false },
      { title: "Skills", href: "#skills", isExternal: false },
      { title: "Projects", href: "#projects", isExternal: false },
      { title: "Achievements", href: "#achievements", isExternal: false },
      { title: "Security", href: "#security", isExternal: false },
      { title: "Contact", href: "#contact", isExternal: false },
    ],
  },

  // Social Media Links (Validated URLs)
  social: {
    x: "https://x.com/0xSubrat",
    linkedin: "https://linkedin.com/in/subrat243",
    github: "https://github.com/subrat243",
    telegram: "https://t.me/subrat243",
    email: "mailto:subratsamantaray43@gmail.com",
    discord: "https://discord.com/users/954625259582132255",
  },

  // Assets Configuration
  assets: {
    images: {
      logo: "/favicon.png",
      profile: "/favicon.png",
      hero: "/favicon.png",
      fallback: "/favicon.png",
    },
  },

  // CV Download Configuration
  cv: {
    downloadUrl:
      "https://drive.google.com/file/d/1hYF_Q7p93-XXkqfjez1tjtIbIFHiIdh6/view?usp=sharing",
    directDownloadUrl:
      "https://drive.google.com/file/d/1hYF_Q7p93-XXkqfjez1tjtIbIFHiIdh6/view?usp=sharing",
    filename: "Subrat_Samantaray_Resume.pdf",
  },

  // Projects Configuration
  projects: [
    {
      id: "netvuln",
      title: "NetVuln - Network Vulnerability Scanner",
      description:
        "NetVuln is a Python-based network vulnerability scanner that automates vulnerability scanning using Nmap. It scans targets (IP or domain) for open ports, detects services, and checks for known vulnerabilities.",
      image: "/projects/netvuln.jpg",
      link: "https://github.com/subrat243/Vuln-Scanner",
      technologies: ["Python", "NMAP", "Security"],
      featured: true,
    },
    {
      id: "deauth",
      title: "DeAuth - The Network Stress Testing Tool",
      description:
        "A lightweight yet powerful network stress testing tool built with Scapy, designed to simulate diverse traffic patterns and protocols for both quick assessments and detailed network analysis.",
      image: "/projects/deauth.jpg",
      link: "https://github.com/subrat243/DeAuth",
      technologies: ["Python", "Scapy", "Network Security"],
      featured: true,
    },
    {
      id: "wifi-deauth-tool",
      title: "Wifi Deauthentication Toolkit",
      description:
        "A Bash script for performing Wi-Fi deauthentication attacks using the Aircrack-ng suite. This tool is designed for educational purposes and authorized penetration testing.",
      image: "/projects/wifi-deauth.jpg",
      link: "https://github.com/subrat243/Wifi-Deauthentication-Tool",
      technologies: ["Network Analysis", "Security", "Bash"],
      featured: true,
    },
    {
      id: "hashify",
      title: "Hashify - Hash Type Identifier Tool",
      description:
        "Script to identifies hash types using a comprehensive library of regular expressions, combining the modern structure of hashify with the extensive algorithm list.",
      image: "/projects/hashify.jpg",
      link: "https://github.com/subrat243/Hashify",
      technologies: ["Python", "Hash", "Cryptography", "Security"],
      featured: true,
    },
    {
      id: "shadow-flow",
      title: "Shadow Flow - Automated Pentest Toolkit",
      description:
        "An automated penetration testing toolkit for streamlined web application security assessments and vulnerability discovery.",
      image: "/projects/shadow-flow.jpg",
      link: "https://github.com/subrat243/Shadow-Flow",
      technologies: ["Python", "Networking", "Socket", "Security"],
      featured: true,
    },
    {
      id: "dark-walker",
      title: "Dark Walker - DarkWeb Monitoring Tool",
      description:
        "This project is a cybersecurity initiative that monitors the dark web for sensitive information such as compromised credentials, leaked data, and other illicit activities.",
      image: "/projects/dark-walker.jpg",
      link: "https://github.com/subrat243/Dark-Walker",
      technologies: ["Python", "Web Scraping", "Security"],
      featured: true,
    },
    {
      id: "intelify",
      title: "Intelify - Threat Intelligence Platform",
      description:
        "This project is a cybersecurity initiative that collects and analyzes threat intelligence from various sources, providing real-time threat detection and mitigation capabilities.",
      image: "/projects/intelify.jpg",
      link: "https://github.com/subrat243/Intelify",
      technologies: ["Python", "Web Scraping", "Security"],
      featured: true,
    },
    {
      id: "phisherman",
      title: "Phisherman - Phishing Detection System",
      description:
        "Phisherman is an AI-powered anti-phishing tool that utilizes machine learning to detect and prevent phishing attacks, protecting users from fraudulent websites and malicious links.",
      image: "/projects/phisherman.jpg",
      link: "https://github.com/subrat243/Phisherman",
      technologies: ["Python", "Machine Learning", "Security"],
      featured: true,
    },
  ],

  // Skills Configuration
  skills: {
    categories: [
      {
        title: "Security Tools",
        items: [
          "Nmap",
          "Metasploit",
          "Wireshark",
          "Burp Suite",
          "Hashcat",
          "Nessus",
          "John the Ripper",
          "SQLMap",
          "Netcat",
          "Splunk",
          "Wazuh",
          "Suricata",
        ],
      },
      {
        title: "Security Technologies",
        items: [
          "SIEM",
          "IDS/IPS",
          "EDR",
          "VPN",
          "Antivirus",
          "Firewalls",
          "WAF",
          "Endpoint Security",
          "Threat Intelligence",
          "Zero Trust",
        ],
      },
      {
        title: "Security Practices",
        items: [
          "Penetration Testing",
          "Threat Hunting",
          "Vulnerability Assessment",
          "Log Analysis",
          "Network Security",
          "Risk Assessment",
          "Incident Response",
          "SOC Analysis",
        ],
      },
      {
        title: "Frameworks & Standards",
        items: [
          "OWASP Top 10",
          "MITRE ATT&CK",
          "NIST CSF",
          "ISO 27001/27002",
          "PCI DSS",
          "HIPAA",
          "GDPR",
        ],
      },
      {
        title: "Platforms & Virtualization",
        items: [
          "Linux",
          "Windows",
          "WSL",
          "VirtualBox",
          "VMWare",
          "Docker",
          "Git",
          "GitHub",
        ],
      },
      {
        title: "Networking",
        items: [
          "OSI Model",
          "TCP/IP",
          "DNS",
          "DHCP",
          "ARP",
          "HTTP/HTTPS",
          "Subnetting",
          "Routing",
          "VLANs",
        ],
      },
    ],
  },

  // Security Best Practices Configuration
  security: {
    bestPractices: [
      {
        title: "Zero Trust",
        practices: [
          "Never trust, always verify",
          "Least privilege access",
          "Multi-factor authentication",
          "Identity-first security",
          "Continuous verification",
        ],
      },
      {
        title: "Think Like an Attacker",
        practices: [
          "Understand the attack surface",
          "Question assumptions",
          "Think like an adversary",
          "Validate every finding",
          "Learn from every vulnerability",
        ],
      },
      {
        title: "Defense in Depth",
        practices: [
          "Layered security controls",
          "Network segmentation",
          "Endpoint protection",
          "Continuous monitoring",
          "Security logging",
        ],
      },
    ],
  },

  // Animation Configuration
  animations: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5,
    },
    easing: "easeInOut",
    variants: {
      slideInFromLeft: (delay: number = 0) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { delay, duration: 0.5 },
        },
      }),
      slideInFromRight: (delay: number = 0) => ({
        hidden: { x: 100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { delay, duration: 0.5 },
        },
      }),
      slideInFromTop: {
        hidden: { y: -100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5 },
        },
      },
      fadeIn: (delay: number = 0) => ({
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay, duration: 0.3 },
        },
      }),
    },
  },

  // Theme Configuration
  theme: {
    colors: {
      primary: {
        purple: "#7042f8",
        cyan: "#00d2ff",
      },
      background: {
        main: "#030014",
        secondary: "#0b0b0b",
        tertiary: "#03001427",
      },
      text: {
        primary: "#ffffff",
        secondary: "#e5e7eb",
        muted: "#9ca3af",
        accent: "#b49bff",
      },
      border: {
        primary: "#2A0E61",
        secondary: "#7042f88b",
      },
    },
    gradients: {
      primary: "from-purple-500 to-cyan-500",
      secondary: "from-purple-600 to-cyan-600",
      background: "from-purple-500/20 to-cyan-500/20",
    },
  },

  // API Configuration
  api: {
    contact: {
      endpoint: "/api/contact",
      resendApiKey: process.env.RESEND_API_KEY,
      fromEmail: "Portfolio <onboarding@resend.dev>",
      toEmail: "subratsamantaray43@gmail.com",
    },
  },

  // Performance Configuration
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    prefetch: true,
    cacheHeaders: {
      images: "public, max-age=31536000, immutable",
      static: "public, max-age=3600",
    },
  },

  // SEO Configuration
  seo: {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Subrat Samantaray Portfolio",
    },
    twitter: {
      handle: "@0xSubrat",
      site: "@0xSubrat",
      cardType: "summary_large_image",
    },
  },

  // Feature Flags
  features: {
    darkMode: false,
    animations: true,
    contactForm: true,
    socialLinks: true,
    cvDownload: true,

    starBackground: true,
  },

  // Error Handling Configuration
  errorHandling: {
    logErrors: true,
    fallbackImages: {
      profile: "/favicon.png",
      project: "/favicon.png",
      default: "/favicon.png",
    },
    retryAttempts: 3,
    timeoutDuration: 10000,
  },

  // Development Configuration
  development: {
    showPerformanceMarks: process.env.NODE_ENV === "development",
    enableHotReload: process.env.NODE_ENV === "development",
    debugMode: process.env.NODE_ENV === "development",
  },
} as const;

// Type definitions for better TypeScript support
export type AppConfig = typeof APP_CONFIG;
export type NavigationLink = (typeof APP_CONFIG.navigation.links)[0];
export type Project = (typeof APP_CONFIG.projects)[0];
export type SkillCategory = (typeof APP_CONFIG.skills.categories)[0];
export type SecurityBestPractice =
  (typeof APP_CONFIG.security.bestPractices)[0];

// Validation functions
export const validateConfig = () => {
  const errors: string[] = [];

  // Validate required URLs
  if (!APP_CONFIG.social.github.startsWith("https://")) {
    errors.push("GitHub URL must start with https://");
  }

  if (
    !APP_CONFIG.cv.downloadUrl.includes("drive.google.com") &&
    APP_CONFIG.cv.downloadUrl.includes("your-cv-file-id")
  ) {
    errors.push(
      "CV download URL needs to be updated with actual Google Drive link",
    );
  }

  // Validate assets exist (in production, you'd check file system)
  const requiredAssets = [
    APP_CONFIG.assets.images.logo,
    APP_CONFIG.assets.images.profile,
  ];

  if (errors.length > 0) {
    console.warn("Configuration validation errors:", errors);
  }

  return errors.length === 0;
};

// Helper functions
export const getAssetUrl = (assetPath: string): string => {
  if (assetPath.startsWith("http")) return assetPath;
  return `${APP_CONFIG.site.url}${assetPath}`;
};

export const getSocialUrl = (
  platform: keyof typeof APP_CONFIG.social,
): string => {
  return APP_CONFIG.social[platform];
};

export const getAnimationVariant = (
  variantName: keyof typeof APP_CONFIG.animations.variants,
) => {
  return APP_CONFIG.animations.variants[variantName];
};

// Initialize configuration validation in development
if (typeof window !== "undefined" && APP_CONFIG.development.debugMode) {
  validateConfig();
}

export default APP_CONFIG;
