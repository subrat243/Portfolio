"use client";

import { ReactNode } from "react";

// Type definitions for better error handling
export interface ErrorInfo {
  componentStack: string;
  errorBoundary?: string;
}

export interface ErrorHandlerProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

// Navigation error prevention
export const validateNavLink = (link: string): string => {
  // Ensure hash links are properly formatted
  if (link.startsWith("#")) {
    return link;
  }

  // Ensure external links have proper protocol
  if (link.includes("://")) {
    return link;
  }

  // Default to root for invalid links
  if (!link || link === "") {
    return "/";
  }

  return link;
};

// Image error prevention
export const validateImageSrc = (
  src: string,
  fallback: string = "/spiderman.png",
): string => {
  if (!src || src.trim() === "") {
    console.warn("Empty image src provided, using fallback:", fallback);
    return fallback;
  }

  // Check for common image extensions
  const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
  const hasValidExtension = validExtensions.some((ext) =>
    src.toLowerCase().includes(ext),
  );

  if (!hasValidExtension) {
    console.warn("Invalid image extension, using fallback:", fallback);
    return fallback;
  }

  return src;
};

// CSS class validation and cleanup
export const sanitizeClassName = (className: string): string => {
  if (!className) return "";

  // Remove duplicate spaces and trim
  return (
    className
      .replace(/\s+/g, " ")
      .trim()
      // Fix common Tailwind CSS mistakes
      .replace(/opacity-\[([0-9.]+)\]\]/g, "opacity-[$1]")
      .replace(/\]\]/g, "]")
      // Remove empty classes
      .split(" ")
      .filter((cls) => cls.length > 0)
      .join(" ")
  );
};

// Animation safety wrapper
export const safeAnimation = (animationConfig: any) => {
  try {
    return {
      ...animationConfig,
      // Add fallback for missing properties
      initial: animationConfig.initial || { opacity: 0 },
      animate: animationConfig.animate || { opacity: 1 },
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        ...animationConfig.transition,
      },
    };
  } catch (error) {
    console.warn("Animation config error:", error);
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
    };
  }
};

// Social media link validation
export const validateSocialLink = (link: string, platform: string): string => {
  if (!link || link.trim() === "") {
    console.warn(`Empty ${platform} link provided`);
    return "#";
  }

  // Ensure proper protocol
  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    if (link.startsWith("www.")) {
      return `https://${link}`;
    }
    if (platform.toLowerCase() === "email" && link.includes("@")) {
      return `mailto:${link}`;
    }
    if (platform.toLowerCase() === "telegram" && link.startsWith("@")) {
      return `https://t.me/${link.slice(1)}`;
    }
    return `https://${link}`;
  }

  return link;
};

// Component error boundary utility
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
) => {
  const WrappedComponent = (props: P) => {
    try {
      return <Component {...props} />;
    } catch (error) {
      console.error("Component error:", error);
      return (
        fallback || <div className="text-red-500">Something went wrong</div>
      );
    }
  };

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Video element error handling
export const createSafeVideoProps = (src: string) => {
  return {
    src,
    onError: (e: any) => {
      console.warn("Video failed to load:", src);
      e.target.style.display = "none";
    },
    onLoadStart: () => {
      console.log("Video loading started:", src);
    },
    // Fallback attributes
    preload: "metadata" as const,
    playsInline: true,
    muted: true,
    loop: true,
  };
};

// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFormData = (
  formData: Record<string, any>,
): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors: Record<string, string> = {};

  // Check required fields
  if (!formData.name || formData.name.trim().length === 0) {
    errors.name = "Name is required";
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = "Valid email is required";
  }

  if (!formData.subject || formData.subject.trim().length === 0) {
    errors.subject = "Subject is required";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Local storage utilities with error handling
export const safeLocalStorage = {
  getItem: (key: string, defaultValue: any = null) => {
    try {
      if (typeof window === "undefined") return defaultValue;
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn("LocalStorage getItem error:", error);
      return defaultValue;
    }
  },

  setItem: (key: string, value: any) => {
    try {
      if (typeof window === "undefined") return false;
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn("LocalStorage setItem error:", error);
      return false;
    }
  },

  removeItem: (key: string) => {
    try {
      if (typeof window === "undefined") return false;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn("LocalStorage removeItem error:", error);
      return false;
    }
  },
};

// API request wrapper with error handling
export const safeApiRequest = async (
  url: string,
  options: RequestInit = {},
): Promise<{
  success: boolean;
  data?: any;
  error?: string;
}> => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("API request error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

// Device detection utilities
export const getDeviceInfo = () => {
  if (typeof window === "undefined") {
    return { isMobile: false, isTablet: false, isDesktop: true };
  }

  const width = window.innerWidth;
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};

// Performance monitoring
export const performanceMonitor = {
  mark: (name: string) => {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark(name);
    }
  },

  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== "undefined" && window.performance) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        console.log(`Performance: ${name} took ${measure.duration}ms`);
      } catch (error) {
        console.warn("Performance measurement error:", error);
      }
    }
  },
};

// Global error handler setup
export const setupGlobalErrorHandler = () => {
  if (typeof window === "undefined") return;

  // Handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
    event.preventDefault();
  });

  // Handle general errors
  window.addEventListener("error", (event) => {
    console.error("Global error:", event.error);
  });
};

// Initialize error handling
if (typeof window !== "undefined") {
  setupGlobalErrorHandler();
}

const errorHandlerUtils = {
  validateNavLink,
  validateImageSrc,
  sanitizeClassName,
  safeAnimation,
  validateSocialLink,
  withErrorBoundary,
  createSafeVideoProps,
  validateEmail,
  validateFormData,
  safeLocalStorage,
  safeApiRequest,
  getDeviceInfo,
  performanceMonitor,
  setupGlobalErrorHandler,
};

export default errorHandlerUtils;
