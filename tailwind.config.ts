import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        secondary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        background: {
          primary: "#030014",
          secondary: "#0b0b0b",
          tertiary: "#1a1a2e",
          quaternary: "#03001427",
        },
        border: {
          primary: "#2A0E61",
          secondary: "#7042f88b",
          accent: "#bf97ff3d",
        },
        text: {
          primary: "#ffffff",
          secondary: "#e5e7eb",
          muted: "#9ca3af",
          accent: "#b49bff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-space":
          "linear-gradient(135deg, #030014 0%, #0b0b2e 25%, #1a0b3d 50%, #0b0b2e 75%, #030014 100%)",
        "gradient-card": "linear-gradient(135deg, #0b0b0b 0%, #1a1a2e 100%)",
        "gradient-button": "linear-gradient(135deg, #7042f8 0%, #00d2ff 100%)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-out": "fadeOut 0.5s ease-in-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-top": "slideInTop 0.5s ease-out",
        "slide-in-bottom": "slideInBottom 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(112, 66, 248, 0.5), 0 0 10px rgba(112, 66, 248, 0.5), 0 0 15px rgba(112, 66, 248, 0.5)",
          },
          "100%": {
            boxShadow:
              "0 0 10px rgba(112, 66, 248, 0.8), 0 0 20px rgba(112, 66, 248, 0.8), 0 0 30px rgba(112, 66, 248, 0.8)",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        cursive: ["Cedarville Cursive", "cursive"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "15": "15",
        "25": "25",
        "35": "35",
        "45": "45",
        "55": "55",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      blur: {
        "4xl": "72px",
        "5xl": "96px",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
        "98": "0.98",
        "97": "0.97",
      },
      backdropBlur: {
        "4xl": "72px",
        "5xl": "96px",
      },
      screens: {
        "3xl": "1920px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "9/16": "9 / 16",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
      },
      boxShadow: {
        glow: "0 0 20px rgba(112, 66, 248, 0.5)",
        "glow-lg": "0 0 30px rgba(112, 66, 248, 0.5)",
        "cyan-glow": "0 0 20px rgba(0, 210, 255, 0.5)",
        "purple-glow": "0 0 20px rgba(112, 66, 248, 0.5)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 10px 20px -5px rgba(112, 66, 248, 0.1)",
        "card-hover":
          "0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 20px 30px -10px rgba(112, 66, 248, 0.2)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(112, 66, 248, 0.5)",
        "glow-lg": "0 0 20px rgba(112, 66, 248, 0.5)",
        cyan: "0 0 10px rgba(0, 210, 255, 0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
  safelist: [
    "animate-spin",
    "animate-pulse",
    "animate-bounce",
    "z-1",
    "z-5",
    "z-10",
    "z-15",
    "z-20",
    "z-30",
    "z-40",
    "z-50",
    "z-60",
  ],
};

export default config;
