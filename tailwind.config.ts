import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#9f75ff",
          500: "#843dff",
          600: "#7c3aed", // Main purple
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        secondary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee", // Main cyan
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        dark: {
          50: "#f8fafc",
          100: "#030014",
          200: "#0b0b0b",
          300: "#1a1a2e",
          400: "#2A0E61",
          500: "#1e293b",
          600: "#334155",
          700: "#475569",
          800: "#64748b",
          900: "#94a3b8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(90deg, #7c3aed 0%, #22d3ee 100%)",
        "gradient-secondary":
          "linear-gradient(90deg, #9f75ff 0%, #67e8f9 100%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(11, 11, 11, 0.9) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(11, 11, 11, 0.9) 100%)",
        "dark-pattern":
          "radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-up": "slideInUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        cursive: ["Cedarville Cursive", "cursive"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.5)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.5)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "inner-glow": "inset 0 0 12px rgba(191, 151, 255, 0.24)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
