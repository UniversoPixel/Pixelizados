/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          bg: '#0c0714',
          card: '#160d29',
          purple: '#8b5cf6',
          'purple-dark': '#6d28d9',
          blue: '#3b82f6',
          'blue-dark': '#1d4ed8',
          cyan: '#06b6d4',
        },
      },
    },
  },
  plugins: [],
};
