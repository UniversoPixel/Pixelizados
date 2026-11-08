/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          bg: '#f8fafc',         // Fundo branco acinzentado suave (Slate 50)
          card: '#ffffff',       // Cards em branco puro
          yellow: '#facc15',     // Amarelo vibrante (Yellow 400)
          'yellow-dark': '#eab308',
          blue: '#2563eb',       // Azul moderno (Blue 600)
          'blue-dark': '#1d4ed8',
          dark: '#0f172a',       // Texto e bordas escuro contrastante
        },
      },
    },
  },
  plugins: [],
};
