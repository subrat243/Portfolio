// Centralized Application Configuration
// This file prevents recurring issues by centralizing all app settings

export const APP_CONFIG = {
  // Site Information
  site: {
    name: "Subrat Samantaray Portfolio",
    title: "Subrat Samantaray | Cybersecurity Portfolio",
    description:
      "Cybersecurity student specializing in network security, threat detection, and offensive security.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    author: "Subrat Samantaray",
    email: "subratsamantaray43@gmail.com",
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
      { title: "Home", href: "/", isExternal: false },
      { title: "About me", href: "#about", isExternal: false },
      { title: "Skills", href: "#skills", isExternal: false },
      { title: "Projects", href: "#projects", isExternal: false },
    ],
  },

  // Social Media Links (Validated URLs)
  social: {
    x: "https://x.com/0xSubrat",
    linkedin: "https://linkedin.com/in/subrat243",
    github: "https://github.com/subrat243",
    telegram: "https://t.me/subrat243",
    email: "mailto:subratsamantaray43@gmail.com",
  },

  // Assets Configuration
  assets: {
    images: {
      logo: "/Cyber-Security.png",
      profile: "/Cyber-Security.png",
      hero: "/Cyber-Security.png",
      lockTop: "/lock-top.png",
      lockMain: "/lock-main.png",
      fallback: "/Cyber-Security.png",
    },
    videos: {
      hero: "/videos/blackhole.webm",
      skills: "/videos/skills-bg.webm",
      encryption: "/videos/encryption-bg.webm",
    },
  },

  // CV Download Configuration
  cv: {
    downloadUrl:
      "https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing",
    directDownloadUrl:
      "https://drive.google.com/file/d/your-cv-file-id/export?format=pdf&download=1",
    filename: "Subrat_Samantaray_CV.pdf",
  },

  // Projects Configuration
  projects: [
    {
      id: "deauth-dos-tool",
      title: "DeAuth - The Network Stree Teseting Tool",
      description:
        "Regex-based threat detection using Ahmia.fi and Tor exit node rotation; improved search coverage by 40% and anonymity via automated IP rotation.",
      image: "/public/projects/DeAuth.png",
      link: "https://github.com/subrat243",
      technologies: ["Python", "Tor", "Regex", "Security"],
      featured: true,
    },
    {
      id: "network-stress-testing",
      title: "Network Stress Testing with IP Spoofing",
      description:
        "Traffic and packet generation using Scapy for performance and resilience testing; enhanced monitoring and 30% anomaly detection improvement.",
      image: "/Cyber-Security.png",
      link: "https://github.com/subrat243",
      technologies: ["Python", "Scapy", "Network Security"],
      featured: true,
    },
    {
      id: "packet-analysis",
      title: "Dynamic Packet Generation & Analysis",
      description:
        "Custom packet crafting, deep packet inspection, and vulnerability analysis pipelines to identify network misconfigurations and weak points.",
      image: "/Cyber-Security.png",
      link: "https://github.com/subrat243",
      technologies: ["Network Analysis", "Security", "Python"],
      featured: true,
    },
  ],

  // Skills Configuration
  skills: {
    categories: [
      {
        title: "Security Tools",
        items: ["Nmap", "Wireshark", "Metasploit", "Nessus", "Burp Suite"],
      },
      {
        title: "Security Practices",
        items: [
          "VAPT",
          "Firewall Management",
          "Cryptography",
          "VPNs",
          "IDS/IPS",
          "SIEM",
          "Antivirus",
        ],
      },
      {
        title: "Frameworks & Standards",
        items: ["NIST", "ISO 27001/27002", "PCI DSS", "HIPAA", "GDPR"],
      },
      {
        title: "Operating Systems & Virtualization",
        items: ["Linux", "Windows", "VMWare", "VirtualBox"],
      },
      {
        title: "Network Concepts",
        items: [
          "OSI Model",
          "TCP/IP",
          "DHCP",
          "ARP",
          "HTTP/HTTPS",
          "DNS",
          "Subnetting",
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
      videos: "public, max-age=31536000, immutable",
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
    floatingSocial: true,
    starBackground: true,
  },

  // Error Handling Configuration
  errorHandling: {
    logErrors: true,
    fallbackImages: {
      profile: "/Cyber-Security.png",
      project: "/Cyber-Security.png",
      default: "/Cyber-Security.png",
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
    APP_CONFIG.assets.videos.hero,
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
