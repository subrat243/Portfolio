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
  safelist: [
    "bg-gradient-to-r",
    "from-purple-400",
    "to-pink-500",
    "bg-gradient-radial",
    "bg-gradient-conic",
    "text-gradient",
    "from-indigo-500",
    "via-purple-500",
    "to-pink-500",
    "from-pink-500",
    "to-purple-500",
    "from-violet-500",
    "to-fuchsia-500",
    "from-blue-500",
    "to-cyan-500",
    "from-sky-500",
    "to-indigo-500",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
