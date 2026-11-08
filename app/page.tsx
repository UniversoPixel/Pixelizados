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
  MessageSquare,
  Star
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
    <div className="min-h-screen bg-pixel-bg text-pixel-dark flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* HERO BANNER - AMARALO & AZUL */}
          <section className="relative rounded-3xl border-3 border-pixel-dark bg-gradient-to-r from-pixel-yellow via-amber-300 to-pixel-yellow p-8 sm:p-12 shadow-[6px_6px_0px_#0f172a] overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-pixel-dark font-black text-xs uppercase tracking-wider border-2 border-pixel-dark shadow-[2px_2px_0px_#0f172a]">
                <Sparkles className="w-4 h-4 text-pixel-blue" /> Portal da Comunidade
              </span>

              <h1 className="text-4xl sm:text-6xl font-black uppercase text-pixel-dark tracking-tight leading-none">
                Encontre o melhor <span className="text-pixel-blue underline decoration-wavy decoration-pixel-dark">Habbo Pirata</span>
              </h1>

              <p className="text-pixel-dark font-semibold text-base sm:text-lg leading-relaxed">
                Acompanhe o ranking oficial de servidores, novidades da comunidade, bate-papo no Discord e em breve nossa rádio 24 horas ao vivo.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/servidores" className="retro-btn-blue px-6 py-3.5 text-sm flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-pixel-yellow" />
                  Explorar Top Lista
                </Link>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-pixel-dark font-black text-sm px-6 py-3.5 rounded-full border-2 border-pixel-dark shadow-[3px_3px_0px_#0f172a] hover:shadow-[5px_5px_0px_#0f172a] transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-pixel-blue" />
                  Comunidade Discord
                </a>
              </div>
            </div>
          </section>

          {/* SEÇÃO TOP LISTA DE SERVIDORES */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pixel-yellow border-2 border-pixel-dark rounded-2xl shadow-[3px_3px_0px_#0f172a]">
                  <Trophy className="w-6 h-6 text-pixel-dark" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-wider text-pixel-dark">
                    TOP 3 Habbos Piratas
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold">
                    Servidores com maior pontuação e votos da comunidade neste mês.
                  </p>
                </div>
              </div>

              <Link
                href="/servidores"
                className="retro-btn-yellow px-4 py-2 text-xs flex items-center gap-1.5"
              >
                Ver ranking <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TOP_SERVIDORES.map((server) => (
                <article
                  key={server.id}
                  className="retro-card overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-transform"
                >
                  <div>
                    <div className="relative h-40 bg-slate-100 border-b-2 border-pixel-dark">
                      <img
                        src={server.bannerUrl}
                        alt={server.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-pixel-yellow text-pixel-dark font-black text-xs px-3 py-1 rounded-full border-2 border-pixel-dark shadow-[2px_2px_0px_#0f172a] flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-pixel-dark" /> #{server.rank} TOP
                      </span>
                      <div className="absolute -bottom-5 right-5 bg-white border-2 border-pixel-dark rounded-2xl p-1 shadow-[2px_2px_0px_#0f172a]">
                        <HabboAvatar username={server.owner} headOnly size="m" className="w-10 h-10" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-black text-pixel-dark">{server.name}</h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                        {server.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {server.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold bg-slate-100 text-pixel-blue px-2.5 py-1 rounded-full border border-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t-2 border-pixel-dark flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-600 flex items-center gap-1.5">
                      <Users className="w-4 h-4" /> {server.onlineCount} Online
                    </span>
                    <span className="text-pixel-blue flex items-center gap-1.5">
                      <ThumbsUp className="w-4 h-4" /> {server.votes} Votos
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SEÇÃO DUPLA: NOTÍCIAS & WIDGET RÁDIO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <section className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pixel-blue text-white border-2 border-pixel-dark rounded-2xl shadow-[3px_3px_0px_#0f172a]">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-wider text-pixel-dark">
                    Últimas Notícias
                  </h2>
                </div>
                <Link href="/noticias" className="text-xs font-bold text-pixel-blue hover:underline">
                  Ver todas
                </Link>
              </div>

              <div className="space-y-4">
                {ULTIMAS_NOTICIAS.map((news) => (
                  <article
                    key={news.id}
                    className="retro-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <span className="text-pixel-blue font-black uppercase">{news.category}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-lg font-black text-pixel-dark hover:text-pixel-blue transition-colors">
                        <Link href={`/noticias/${news.id}`}>{news.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 font-medium line-clamp-1">{news.summary}</p>
                    </div>

                    <Link
                      href={`/noticias/${news.id}`}
                      className="shrink-0 retro-btn-yellow px-4 py-2 text-xs"
                    >
                      Ler matéria
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <aside className="lg:col-span-4 space-y-6">
              <div className="retro-card p-6 space-y-5 bg-gradient-to-b from-white to-slate-50">
                <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
                  <div className="p-3 bg-pixel-yellow border-2 border-pixel-dark rounded-2xl shadow-[2px_2px_0px_#0f172a]">
                    <Radio className="w-6 h-6 text-pixel-dark animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-pixel-dark uppercase leading-none">Rádio Pixelizados</h3>
                    <span className="text-[10px] font-bold text-pixel-blue uppercase tracking-wider">Em breve 24h</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Acompanhe a melhor programação ao vivo com os locutores mais tops da comunidade habbiana.
                </p>

                <div className="p-3.5 bg-white rounded-2xl border-2 border-pixel-dark shadow-[2px_2px_0px_#0f172a] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HabboAvatar username="DJ_Bobba" headOnly size="s" className="w-8 h-8" />
                    <span className="text-xs font-bold text-pixel-dark">Locutor: AutoDJ</span>
                  </div>
                  <span className="text-[10px] font-black bg-slate-200 text-slate-600 px-2.5 py-1 rounded-full border border-slate-300">
                    OFFLINE
                  </span>
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
