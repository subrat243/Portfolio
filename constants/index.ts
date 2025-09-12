import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import APP_CONFIG from "@/config/app-config";

// Projects data with centralized configuration
export const PROJECTS = APP_CONFIG.projects.map((project) => ({
  title: project.title,
  description: project.description,
  image: project.image,
  link: project.link,
  technologies: project.technologies,
}));

// Footer data with validated social links
export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "X",
        icon: RxTwitterLogo,
        link: APP_CONFIG.social.x,
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: APP_CONFIG.social.linkedin,
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: APP_CONFIG.social.github,
      },
    ],
  },
  {
    title: "Contact Me",
    data: [
      {
        name: "Telegram",
        icon: FaTelegram,
        link: APP_CONFIG.social.telegram,
      },
      {
        name: "Email",
        icon: MdEmail,
        link: APP_CONFIG.social.email,
      },
    ],
  },
] as const;

// Navigation links with centralized configuration
export const NAV_LINKS = APP_CONFIG.navigation.links.map((link) => ({
  title: link.title,
  link: link.href,
}));

// CV Download Link with centralized configuration
export const CV_DOWNLOAD_URL = APP_CONFIG.cv.downloadUrl;

// Skills data from centralized configuration
export const SKILLS_CATEGORIES = APP_CONFIG.skills.categories;

// Animation variants from centralized configuration
export const ANIMATION_VARIANTS = APP_CONFIG.animations.variants;

// Theme configuration
export const THEME_CONFIG = APP_CONFIG.theme;

// Site configuration
export const SITE_CONFIG = APP_CONFIG.site;

// Feature flags
export const FEATURES = APP_CONFIG.features;

// Error handling configuration
export const ERROR_CONFIG = APP_CONFIG.errorHandling;

// Helper function to validate and get safe URLs
export const getSafeUrl = (url: string, fallback: string = "/"): string => {
  try {
    if (!url || url.trim() === "") return fallback;

    // For hash links, return as-is
    if (url.startsWith("#")) return url;

    // For external links, validate
    if (url.startsWith("http")) {
      new URL(url); // This will throw if invalid
      return url;
    }

    // For relative paths
    if (url.startsWith("/")) return url;

    return fallback;
  } catch (error) {
    console.warn(`Invalid URL provided: ${url}, using fallback: ${fallback}`);
    return fallback;
  }
};

// Export default configuration
export { APP_CONFIG };

const constantsExport = {
  PROJECTS,
  FOOTER_DATA,
  NAV_LINKS,
  CV_DOWNLOAD_URL,
  SKILLS_CATEGORIES,
  ANIMATION_VARIANTS,
  THEME_CONFIG,
  SITE_CONFIG,
  FEATURES,
  ERROR_CONFIG,
  getSafeUrl,
};

export default constantsExport;
