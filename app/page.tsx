import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabboAvatar from '@/components/HabboAvatar';
import { 
  Trophy, 
  Sparkles, 
  Users, 
  Newspaper, 
  ArrowRight, 
  ThumbsUp,
  Radio,
  MessageSquare
} from 'lucide-react';

const TOP_SERVIDORES = [
  {
    id: '1',
    rank: 1,
    name: 'Habbo Hotel Beta',
    description: 'Servidor clássico v63 com economia equilibrada, rádio 24h e eventos diários.',
    onlineCount: 420,
    votes: 1250,
    owner: 'AdminBeta',
    tags: ['v63', 'Sem Raros Op', 'Rádio Live'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/app_banner_2024.png',
  },
  {
    id: '2',
    rank: 2,
    name: 'Habbo Retrô 2006',
    description: 'Nostalgia pura! Versão Oldschool sem mobis modernos e com mobílias originais.',
    onlineCount: 280,
    votes: 980,
    owner: 'OldSchooler',
    tags: ['Oldschool', 'Rares 2006', 'Eventos'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/campaign_banner.png',
  },
  {
    id: '3',
    rank: 3,
    name: 'Habbo Origins Custom',
    description: 'Novas roupas exclusivas, visuais customizados e sistema de conquistas único.',
    onlineCount: 195,
    votes: 810,
    owner: 'CustomDev',
    tags: ['Custom Mobis', 'Economia Rápida'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/news_room_builder.png',
  },
];

const ULTIMAS_NOTICIAS = [
  {
    id: '1',
    title: 'Top Lista Atualizada: Veja os servidores em destaque desta semana',
    summary: 'O ranking mensal de Habbos Piratas teve reviravoltas no TOP 3. Confira as métricas de votos.',
    author: 'Diel',
    date: 'Hoje, 19:20',
    category: 'Ranking',
  },
  {
    id: '2',
    title: 'Comunidade Discord atinge 1.000 membros conectados',
    summary: 'Venha participar dos sorteios diários de vip e trocas de emblemas em nosso servidor oficial.',
    author: 'PixelDev',
    date: 'Ontem, 21:00',
    category: 'Comunidade',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pixel-bg flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          {/* HERO BANNER */}
          <section className="relative rounded-xl border-4 border-black bg-gradient-to-r from-pixel-purple-dark via-pixel-card to-pixel-blue-dark p-6 sm:p-10 retro-shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-pixel-cyan/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-pixel-cyan text-black font-extrabold text-xs uppercase tracking-wider border border-black retro-shadow-sm">
                <Sparkles className="w-4 h-4 fill-black" /> Portal da Comunidade
              </span>

              <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                Encontre o melhor <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixel-cyan to-pixel-purple">Habbo Pirata</span> para jogar
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base font-medium">
                Acompanhe o ranking oficial de servidores, novidades da comunidade, bate-papo no Discord e em breve nossa rádio 24 horas ao vivo.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/servidores"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pixel-purple to-pixel-blue hover:from-pixel-purple-dark hover:to-pixel-blue-dark text-white font-black text-sm px-5 py-3 rounded border-2 border-black retro-shadow hover:retro-shadow-lg transition-all"
                >
                  <Trophy className="w-5 h-5 text-amber-400" />
                  Explorar Top Lista
                </Link>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold text-sm px-5 py-3 rounded border-2 border-black retro-shadow transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-pixel-cyan" />
                  Comunidade Discord
                </a>
              </div>
            </div>
          </section>

          {/* SEÇÃO TOP LISTA DE SERVIDORES */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 border-2 border-black rounded retro-shadow text-black">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase tracking-wider text-white">
                    TOP 3 Habbos Piratas
                  </h2>
                  <p className="text-xs text-zinc-400 font-mono">
                    Servidores com maior pontuação e votos da comunidade neste mês.
                  </p>
                </div>
              </div>

              <Link
                href="/servidores"
                className="text-xs font-bold text-pixel-cyan hover:underline flex items-center gap-1"
              >
                Ver ranking completo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TOP_SERVIDORES.map((server) => (
                <article
                  key={server.id}
                  className="bg-pixel-card border-2 border-black rounded-lg overflow-hidden retro-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="relative h-36 bg-zinc-950 border-b-2 border-black">
                      <img
                        src={server.bannerUrl}
                        alt={server.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-amber-400 text-black font-black text-xs px-2.5 py-1 rounded border border-black retro-shadow-sm flex items-center gap-1">
                        #{server.rank} TOP
                      </span>
                      <div className="absolute -bottom-4 right-4 bg-pixel-bg border-2 border-black rounded-full p-1 retro-shadow-sm">
                        <HabboAvatar username={server.owner} headOnly size="m" className="w-9 h-9" />
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-extrabold text-white">{server.name}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                        {server.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {server.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono bg-zinc-900 text-pixel-cyan px-2 py-0.5 rounded border border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-zinc-950/60 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {server.onlineCount} Online
                    </span>
                    <span className="text-pixel-purple font-bold flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" /> {server.votes} Votos
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SEÇÃO DUPLA: NOTÍCIAS & WIDGET RÁDIO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pixel-purple border-2 border-black rounded retro-shadow text-white">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-wider text-white">
                    Últimas Notícias
                  </h2>
                </div>
                <Link href="/noticias" className="text-xs font-bold text-pixel-cyan hover:underline">
                  Ver todas
                </Link>
              </div>

              <div className="space-y-4">
                {ULTIMAS_NOTICIAS.map((news) => (
                  <article
                    key={news.id}
                    className="bg-pixel-card border-2 border-black rounded-lg p-5 retro-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <span className="text-pixel-cyan font-bold">{news.category}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-white hover:text-pixel-cyan transition-colors">
                        <Link href={`/noticias/${news.id}`}>{news.title}</Link>
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-1">{news.summary}</p>
                    </div>

                    <Link
                      href={`/noticias/${news.id}`}
                      className="shrink-0 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold px-3 py-2 rounded border border-black retro-shadow-sm"
                    >
                      Ler mais
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-pixel-card border-2 border-black rounded-lg p-5 retro-shadow space-y-4">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                  <div className="p-2 bg-pixel-blue border border-black rounded text-white">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white uppercase">Rádio Pixelizados</h3>
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Em breve em 24h</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Estamos preparando a melhor programação musical com os melhores DJs da comunidade. Fique atento!
                </p>

                <div className="p-3 bg-zinc-950 rounded border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HabboAvatar username="DJ_Bobba" headOnly size="s" className="w-7 h-7" />
                    <span className="text-xs font-bold text-zinc-300">Locutor: AutoDJ</span>
                  </div>
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">OFFLINE</span>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
