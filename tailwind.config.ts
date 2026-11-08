import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          bg: '#0c0714',         // Fundo principal ultra escuro
          card: '#160d29',       // Fundo dos cards (roxo profundo)
          purple: '#8b5cf6',     // Roxo vibrante (principal)
          'purple-dark': '#6d28d9',
          blue: '#3b82f6',       // Azul vibrante (secundário)
          'blue-dark': '#1d4ed8',
          cyan: '#06b6d4',       // Azul ciano para destaques
        },
      },
    },
  },
  plugins: [],
};

export default config;
