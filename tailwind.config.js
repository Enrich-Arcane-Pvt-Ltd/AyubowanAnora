/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0f",
          card: "#13131f",
          purple: "#8b5cf6",
          pink: "#ec4899",
          blue: "#3b82f6",
        },
      },
      backgroundImage: {
        'brand-gradient': "linear-gradient(to right, #8b5cf6, #ec4899)",
      },
      animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
};
