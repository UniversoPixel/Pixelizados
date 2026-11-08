import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HabboAvatar from '@/components/HabboAvatar';
import { 
  Trophy, 
  Compass, 
  Users, 
  Newspaper, 
  ArrowUpRight, 
  Radio,
  Activity,
  Flame,
  ShieldCheck,
  Zap
} from 'lucide-react';

const TOP_SERVIDORES = [
  {
    id: '1',
    rank: 1,
    name: 'Habbo Hotel Beta',
    description: 'Arquitetura clássica v63 otimizada para alta concorrência, economia controlada e eventos automatizados.',
    onlineCount: 420,
    votes: 1250,
    owner: 'AdminBeta',
    tags: ['v63', 'Estável', 'Live Audio'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/app_banner_2024.png',
  },
  {
    id: '2',
    rank: 2,
    name: 'Habbo Retrô 2006',
    description: 'Resgate histórico da era dourada. Mobiliário purista sem customizações excessivas e ritmo oldschool.',
    onlineCount: 280,
    votes: 980,
    owner: 'OldSchooler',
    tags: ['Purista', '2006 Era', 'Comunidade Ativa'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/campaign_banner.png',
  },
  {
    id: '3',
    rank: 3,
    name: 'Habbo Origins Custom',
    description: 'Ecossistema experimental focado em itens exclusivos, engine gráfica customizada e progressão rápida.',
    onlineCount: 195,
    votes: 810,
    owner: 'CustomDev',
    tags: ['Custom', 'Inovação', 'Eventos Diários'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/news_room_builder.png',
  },
];

const ULTIMAS_NOTICIAS = [
  {
    id: '1',
    title: 'Auditoria de Rankings: As métricas de crescimento do ecossistema neste trimestre',
    summary: 'Análise aprofundada sobre a retenção de usuários nos principais servidores listados na plataforma.',
    author: 'Diel',
    date: 'Hoje, 19:20',
    category: 'Inteligência',
  },
  {
    id: '2',
    title: 'Infraestrutura e Baixa Latência: O desafio técnico dos servidores em 2026',
    summary: 'Como os administradores estão lidando com picos de tráfego e estabilidade em novas versões.',
    author: 'PixelDev',
    date: 'Ontem, 21:00',
    category: 'Engenharia',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07050d] text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-slate-950">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          
          {/* HERO EDITORIAL DE ALTO IMPACTO */}
          <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#110c1f] to-[#0a0714] p-10 md:p-16 editorial-card">
            {/* Elemento Gráfico de Fundo Atmosférico */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mb-20" />

            <div className="relative z-10 max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-sky-400 font-mono text-xs tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>Ecossistema Verificado de Habbos Piratas</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
                O diretório definitivo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">universos virtuais</span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                Curadoria de servidores, métricas em tempo real, análises técnicas da comunidade e infraestrutura de alta performance para jogadores e desenvolvedores.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/servidores"
                  className="inline-flex items-center gap-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm px-8 py-4 rounded-full shadow-glow-neon transition-all hover:scale-[1.02]"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explorar Diretório</span>
                </Link>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all hover:border-white/20"
                >
                  <span>Comunidade Discord</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Métrica Flutuante de Destaque */}
            <div className="mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <span className="text-slate-500 block mb-1">SERVIDORES ATIVOS</span>
                <strong className="text-white text-lg font-bold">+24 Indexados</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">JOGADORES ONLINE</span>
                <strong className="text-sky-400 text-lg font-bold">3.480 Conectados</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">VOTOS COMPUTADOS</span>
                <strong className="text-purple-400 text-lg font-bold">18.920 Mensais</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-1">STATUS DA REDE</span>
                <strong className="text-emerald-400 text-lg font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> 100% Operacional
                </strong>
              </div>
            </div>
          </section>

          {/* SEÇÃO TOP LISTA DE SERVIDORES (EDITORIAL GRID) */}
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider">
                  <Flame className="w-4 h-4" />
                  <span>Destaques da Temporada</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  TOP 3 Servidores Verificados
                </h2>
              </div>

              <Link
                href="/servidores"
                className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 group self-start md:self-auto"
              >
                <span>Ver ranking completo e métricas</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TOP_SERVIDORES.map((server) => (
                <article
                  key={server.id}
                  className="editorial-card overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Banner do Servidor */}
                    <div className="relative h-44 bg-slate-950 border-b border-white/[0.06] overflow-hidden">
                      <img
                        src={server.bannerUrl}
                        alt={server.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#110c1f] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-400 text-slate-950 font-black font-mono text-xs px-3 py-1 rounded-md shadow-lg flex items-center gap-1">
                          #{server.rank} RANK
                        </span>
                      </div>

                      <div className="absolute -bottom-5 right-6 bg-[#07050d] border border-white/10 rounded-xl p-1.5 shadow-2xl">
                        <HabboAvatar username={server.owner} headOnly size="m" className="w-10 h-10" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white tracking-tight">{server.name}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2">
                        {server.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {server.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[10px] font-mono bg-white/[0.04] text-slate-300 px-2.5 py-1 rounded border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" /> {server.onlineCount} online
                    </span>
                    <span className="text-purple-400 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> {server.votes} votos
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SEÇÃO DUPLA: EDITORIAL / NOTÍCIAS & WIDGET RÁDIO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <section className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider">
                  <Newspaper className="w-4 h-4" />
                  <span>Publicações & Análises</span>
                </div>
                <Link href="/noticias" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                  Arquivo completo
                </Link>
              </div>

              <div className="space-y-4">
                {ULTIMAS_NOTICIAS.map((news) => (
                  <article
                    key={news.id}
                    className="editorial-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                        <span className="text-sky-400 uppercase tracking-widest font-bold">{news.category}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                        <span>•</span>
                        <span>Por {news.author}</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                        <Link href={`/noticias/${news.id}`}>{news.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">{news.summary}</p>
                    </div>

                    <Link
                      href={`/noticias/${news.id}`}
                      className="shrink-0 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 text-xs font-mono px-4 py-2.5 rounded-lg border border-white/10 transition-all"
                    >
                      Ler artigo
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <aside className="lg:col-span-4 space-y-6">
              <div className="editorial-card p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-amber-400/10 border border-amber-400/20 rounded-lg text-amber-400">
                      <Radio className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white uppercase tracking-wider">Rádio Pixelizados</h3>
                      <span className="text-[10px] font-mono text-amber-400 block">TRANSMISSÃO 24/7 (EM BREVE)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Nossa curadoria musical e sets ao vivo com DJs convidados da comunidade habbiana estão em fase final de testes de alta fidelidade.
                </p>

                <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.06] flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <HabboAvatar username="DJ_Bobba" headOnly size="s" className="w-8 h-8" />
                    <div>
                      <span className="text-white font-bold block">AutoDJ Stream</span>
                      <span className="text-[10px] text-slate-500">Nenhum locutor no ar</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-500 text-[10px] font-bold border border-white/10">
                    STANDBY
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
