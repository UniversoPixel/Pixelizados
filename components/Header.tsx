import Link from 'next/link';
import { Sparkles, Trophy, Newspaper, Users, Radio, Disc } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-pixel-dark">
      {/* Top Banner de Alerta */}
      <div className="bg-pixel-yellow text-pixel-dark font-extrabold text-xs py-2 px-4 border-b-2 border-pixel-dark flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 fill-pixel-dark" />
        <span>VOTE NO SEU HABBO PIRATA FAVORITO E GANHE DESTAQUE NO RANKING!</span>
        <Sparkles className="w-4 h-4 fill-pixel-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-pixel-blue text-white rounded-2xl border-2 border-pixel-dark flex items-center justify-center font-black text-2xl shadow-[3px_3px_0px_#0f172a] group-hover:rotate-6 transition-transform">
              P
            </div>
            <div>
              <span className="text-2xl font-black text-pixel-dark tracking-tight uppercase block leading-none">
                Pixelizados
              </span>
              <span className="text-[10px] font-mono text-pixel-blue font-bold tracking-widest uppercase">
                Comunidade & Ranking
              </span>
            </div>
          </Link>

          {/* Navegação Principal */}
          <nav className="hidden md:flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border-2 border-pixel-dark">
            <Link
              href="/"
              className="px-4 py-2 rounded-full text-xs font-bold text-white bg-pixel-blue border border-pixel-dark shadow-[2px_2px_0px_#0f172a]"
            >
              Início
            </Link>
            <Link
              href="/servidores"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-pixel-dark hover:bg-white transition-all"
            >
              <Trophy className="w-4 h-4 text-pixel-blue" />
              Top Habbos
            </Link>
            <Link
              href="/noticias"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-pixel-dark hover:bg-white transition-all"
            >
              <Newspaper className="w-4 h-4 text-pixel-blue" />
              Notícias
            </Link>
            <Link
              href="/membros"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-pixel-dark hover:bg-white transition-all"
            >
              <Users className="w-4 h-4 text-pixel-blue" />
              Membros
            </Link>
          </nav>

          {/* Botões de Ação */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-pixel-yellow text-pixel-dark text-xs font-black px-3 py-1.5 rounded-full border-2 border-pixel-dark shadow-[2px_2px_0px_#0f172a]">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Rádio ON</span>
            </div>

            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn-yellow px-5 py-2.5 text-xs flex items-center gap-2"
            >
              <Disc className="w-4 h-4" />
              Entrar no Discord
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
