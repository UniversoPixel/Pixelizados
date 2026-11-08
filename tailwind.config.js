/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        px: {
          base: '#07050d',
          surface: '#110c1f',
          border: 'rgba(255, 255, 255, 0.08)',
          neon: '#38bdf8',
          purple: '#a855f7',
          amber: '#f59e0b',
        }
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'glow-neon': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.25)',
      }
    },
  },
  plugins: [],
};
