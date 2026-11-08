import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pixelizados - Top Lista de Habbos, Comunidade & Rádio',
  description: 'O ponto de encontro da comunidade de Habbos Piratas, rankings, novidades, rádio e notícias pixeladas.',
  keywords: ['Habbo', 'Habbo Pirata', 'Habbos', 'Top Lista', 'Comunidade', 'Pixelizados'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-pixel-bg text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-pixel-purple selection:text-white">
        {children}
      </body>
    </html>
  );
}
