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

// Asset URLs from centralized configuration
export const ASSET_URLS = {
  HERO_IMAGE: APP_CONFIG.assets.images.hero,
  PROFILE_IMAGE: APP_CONFIG.assets.images.profile,
  LOGO_IMAGE: APP_CONFIG.assets.images.logo,
  LOCK_TOP: APP_CONFIG.assets.images.lockTop,
  LOCK_MAIN: APP_CONFIG.assets.images.lockMain,
  HERO_VIDEO: APP_CONFIG.assets.videos.hero,
  SKILLS_VIDEO: APP_CONFIG.assets.videos.skills,
  ENCRYPTION_VIDEO: APP_CONFIG.assets.videos.encryption,
} as const;

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

// Helper function to get safe asset URLs
export const getSafeAssetUrl = (assetPath: string): string => {
  const fallback = APP_CONFIG.assets.images.fallback;

  if (!assetPath || assetPath.trim() === "") {
    console.warn("Empty asset path provided, using fallback");
    return fallback;
  }

  // Check if it's a valid asset path
  if (
    assetPath.startsWith("/") &&
    (assetPath.includes(".png") ||
      assetPath.includes(".jpg") ||
      assetPath.includes(".jpeg") ||
      assetPath.includes(".webp") ||
      assetPath.includes(".svg") ||
      assetPath.includes(".webm") ||
      assetPath.includes(".mp4"))
  ) {
    return assetPath;
  }

  console.warn(`Invalid asset path: ${assetPath}, using fallback`);
  return fallback;
};

// Export default configuration
export { APP_CONFIG };
export default {
  PROJECTS,
  FOOTER_DATA,
  NAV_LINKS,
  CV_DOWNLOAD_URL,
  SKILLS_CATEGORIES,
  ASSET_URLS,
  ANIMATION_VARIANTS,
  THEME_CONFIG,
  SITE_CONFIG,
  FEATURES,
  ERROR_CONFIG,
  getSafeUrl,
  getSafeAssetUrl,
};
