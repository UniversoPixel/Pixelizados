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

          {/* SEÇÃO TOP LISTA DE SERVIDORES */}
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
                  key={server
