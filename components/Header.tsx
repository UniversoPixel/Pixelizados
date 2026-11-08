import Link from 'next/link';
import { Radio, Compass, Newspaper, Users, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#07050d]/80 backdrop-blur-xl border-b border-white/[0.06]">
      {/* Alerta Editorial Superior */}
      <div className="bg-gradient-to-r from-purple-950/60 via-sky-950/60 to-purple-950/60 border-b border-white/[0.06] text-slate-300 font-mono text-[11px] tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Temporada 04 • Rankings auditados e votação aberta para o ecossistema Habbo</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logotipo Assinado */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-purple-600 p-[1px] shadow-glow-neon group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#07050d] rounded-[11px] flex items-center justify-center font-black text-white text-lg tracking-tighter">
              P
            </div>
          </div>
          <div>
            <span className="text-white font-black tracking-wider text-base uppercase block leading-none">
              Pixelizados
            </span>
            <span className="text-[10px] font-mono text-sky-400 tracking-widest uppercase opacity-80">
              Network Intelligence
            </span>
          </div>
        </Link>

        {/* Navegação Principal Autoral */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] p-1.5 rounded-full backdrop-blur-md">
          <Link
            href="/"
            className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.08] border border-white/10 shadow-sm transition-all"
          >
            Terminal
          </Link>
          <Link
            href="/servidores"
            className="px-5 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            Rankings
          </Link>
          <Link
            href="/noticias"
            className="px-5 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all flex items-center gap-1.5"
          >
            <Newspaper className="w-3.5 h-3.5 text-purple-400" />
            Editorial
          </Link>
          <Link
            href="/membros"
            className="px-5 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5 text-amber-400" />
            Comunidade
          </Link>
        </nav>

        {/* Ações e Status da Rádio */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-slate-300">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Rádio: <strong className="text-white font-bold">OFFLINE</strong></span>
          </div>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full shadow-glow-neon transition-all hover:scale-[1.02]"
          >
            <span>Discord Core</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </header>
  );
}
