/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* -------------------------------
         *  BRAND COLORS (Your 4 Colors)
         * ------------------------------- */
        brand: {
          purple: "#7546FF",   // Primary brand color
          dark: "#111111",     // Black / Dark Grey
          gray: "#D4D4D4",     // Soft Light Gray
          navy: "#16213d",     // Deep Navy
        },

        /* -------------------------------
         *  TEMPLATE COLORS (from daevnt.vercel.app)
         *  Matching premium UI palette
         * ------------------------------- */

        purple: {
          50:  "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },

        indigo: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },

        blue: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },

        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },

        cyan: {
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
        },

        violet: {
          100: "#E0D7FF",
          200: "#C0AFFF",
          300: "#A088FF",
          400: "#8060FF",
          500: "#6A4DFF",   // similar to the theme in your link
          600: "#4B2EFF",
          700: "#3A1EE6",
          800: "#2A0FCC",
          900: "#1D0799",
        },

        /* -------------------------------
         * ACCENT / NEUTRAL PALETTE
         * ------------------------------- */
        accent: {
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },

        light: {
          100: "#FFFFFF",
          200: "#FAFAFA",
          300: "#F4F4F4",
          400: "#EEEEEE",
          500: "#E5E5E5",
          600: "#CCCCCC",
          700: "#B3B3B3",
          800: "#999999",
          900: "#808080",
        },
      },
    },
  },

  plugins: [],
};
