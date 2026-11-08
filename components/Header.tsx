import Link from 'next/link';
import { 
  Trophy, 
  Newspaper, 
  Users, 
  Radio, 
  MessageSquare, 
  Sparkles,
  Flame
} from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-pixel-card/95 backdrop-blur border-b-4 border-black retro-shadow">
      {/* Barra superior de destaque / aviso */}
      <div className="bg-gradient-to-r from-pixel-purple-dark via-pixel-purple to-pixel-blue text-xs font-bold py-1 px-4 border-b border-black text-center text-white flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-pixel-cyan animate-pulse" />
        <span>VOTE NO SEU HABBO PIRATA FAVORITO E GANHE DESTAQUE NO RANKING!</span>
        <Sparkles className="w-3.5 h-3.5 text-pixel-cyan animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo do Pixelizados */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-pixel-purple to-pixel-blue p-2.5 rounded border-2 border-black retro-shadow group-hover:scale-105 transition-transform">
              <Flame className="w-7 h-7 text-white fill-pixel-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-pixel-purple via-pixel-cyan to-pixel-blue bg-clip-text text-transparent drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                PIXELIZADOS
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                Top Lista • Comunidade • Rádio
              </span>
            </div>
          </Link>

          {/* Menu de Navegação Principal */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-3.5 py-2 rounded text-sm font-bold text-zinc-200 hover:text-white hover:bg-pixel-purple/30 border border-transparent hover:border-pixel-purple transition-all"
            >
              <Sparkles className="w-4 h-4 text-pixel-cyan" />
              Início
            </Link>

            <Link
              href="/servidores"
              className="flex items-center gap-2 px-3.5 py-2 rounded text-sm font-bold text-zinc-200 hover:text-white hover:bg-pixel-blue/30 border border-transparent hover:border-pixel-blue transition-all"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              Top Habbos
            </Link>

            <Link
              href="/noticias"
              className="flex items-center gap-2 px-3.5 py-2 rounded text-sm font-bold text-zinc-200 hover:text-white hover:bg-pixel-purple/30 border border-transparent hover:border-pixel-purple transition-all"
            >
              <Newspaper className="w-4 h-4 text-pixel-purple" />
              Notícias
            </Link>

            <Link
              href="/membros"
              className="flex items-center gap-2 px-3.5 py-2 rounded text-sm font-bold text-zinc-200 hover:text-white hover:bg-pixel-blue/30 border border-transparent hover:border-pixel-blue transition-all"
            >
              <Users className="w-4 h-4 text-pixel-cyan" />
              Membros
            </Link>

            {/* Rádio com badge Brevemente */}
            <div className="relative group">
              <button
                disabled
                className="flex items-center gap-2 px-3.5 py-2 rounded text-sm font-bold text-zinc-500 cursor-not-allowed border border-transparent opacity-75"
              >
                <Radio className="w-4 h-4 text-zinc-500" />
                Rádio
              </button>
              <span className="absolute -top-2 -right-1 bg-pixel-purple text-[9px] font-black uppercase text-white px-1.5 py-0.5 rounded border border-black retro-shadow-sm">
                Em breve
              </span>
            </div>
          </nav>

          {/* Botão Discord / Comunidade */}
          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pixel-purple to-pixel-blue hover:from-pixel-purple-dark hover:to-pixel-blue-dark text-white font-extrabold text-sm px-4 py-2.5 rounded border-2 border-black retro-shadow hover:retro-shadow-lg active:translate-y-0.5 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Entrar no Discord</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
