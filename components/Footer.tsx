import Link from 'next/link';
import { Flame, MessageSquare, Heart, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pixel-card border-t-4 border-black mt-16 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo e Descrição */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pixel-purple to-pixel-blue p-2 rounded border-2 border-black retro-shadow-sm">
                <Flame className="w-5 h-5 text-white fill-pixel-cyan" />
              </div>
              <span className="text-xl font-black tracking-wider uppercase text-white">
                PIXELIZADOS
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              O portal definitivo para a comunidade de Habbos Piratas. Top lista de servidores, ranking de membros, notícias exclusivas e muito mais.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-pixel-cyan font-mono">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li>
                <Link href="/" className="hover:text-pixel-purple transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/servidores" className="hover:text-pixel-purple transition-colors">Top Habbos Piratas</Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-pixel-purple transition-colors">Aba de Notícias</Link>
              </li>
              <li>
                <Link href="/membros" className="hover:text-pixel-purple transition-colors">Ranking de Membros</Link>
              </li>
            </ul>
          </div>

          {/* Comunidade & Suporte */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-pixel-cyan font-mono">
              Comunidade
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li>
                <a 
                  href="https://discord.gg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-pixel-cyan transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-pixel-cyan" /> Servidor do Discord
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-zinc-500">
                <ShieldAlert className="w-3.5 h-3.5" /> Termos de Uso
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória e Copyright */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} Pixelizados. Todos os direitos reservados.</p>
          
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para a comunidade retro.
          </p>
        </div>

      </div>
    </footer>
  );
}
