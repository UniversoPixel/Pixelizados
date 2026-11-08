'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Plus, Trash2, Edit3, ArrowLeft, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import HabboAvatar from '@/components/HabboAvatar';

// Exemplo inicial de servidores gerenciados
const INITIAL_SERVERS = [
  {
    id: '1',
    rank: 1,
    name: 'Habbo Hotel Beta',
    description: 'Arquitetura clássica v63 otimizada para alta concorrência.',
    onlineCount: 420,
    votes: 1250,
    owner: 'AdminBeta',
    tags: ['v63', 'Estável', 'Live Audio'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/app_banner_2024.png',
    avatarMode: 'head', // 'head' ou 'full'
  },
  {
    id: '2',
    rank: 2,
    name: 'Habbo Retrô 2006',
    description: 'Resgate histórico da era dourada.',
    onlineCount: 280,
    votes: 980,
    owner: 'OldSchooler',
    tags: ['Purista', '2006 Era'],
    bannerUrl: 'https://images.habbo.com/habbo-web-news/en/images/article_images/campaign_banner.png',
    avatarMode: 'head',
  },
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [servers, setServers] = useState(INITIAL_SERVERS);
  const [successMessage, setSuccessMessage] = useState('');

  // Estados do formulário de novo servidor / edição
  const [form, setForm] = useState({
    name: '',
    description: '',
    owner: '',
    onlineCount: 100,
    votes: 50,
    tagsInput: 'v63, Custom, Eventos',
    bannerUrl: '',
    avatarMode: 'head' as 'head' | 'full',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha simples de acesso admin (pode ajustar para a sua preferência)
    if (passcode === 'pixeladmin2026') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleAddServer = (e: React.FormEvent) => {
    e.preventDefault();
    const newServer = {
      id: String(Date.now()),
      rank: servers.length + 1,
      name: form.name,
      description: form.description,
      owner: form.owner || 'Admin',
      onlineCount: Number(form.onlineCount),
      votes: Number(form.votes),
      tags: form.tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      bannerUrl: form.bannerUrl || 'https://images.habbo.com/habbo-web-news/en/images/article_images/app_banner_2024.png',
      avatarMode: form.avatarMode,
    };

    setServers([newServer, ...servers]);
    setSuccessMessage('Servidor integrado com sucesso!');
    setTimeout(() => setSuccessMessage(''), 4000);

    // Limpar formulário
    setForm({
      name: '',
      description: '',
      owner: '',
      onlineCount: 100,
      votes: 50,
      tagsInput: 'v63, Custom',
      bannerUrl: '',
      avatarMode: 'head',
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja remover este servidor?')) {
      setServers(servers.filter(s => s.id !== id));
    }
  };

  // Se não estiver autenticado, exibe a tela de login Admin
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07050d] text-slate-100 flex items-center justify-center px-4">
        <div className="editorial-card p-8 max-w-md w-full space-y-6 border border-white/10 rounded-3xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center mx-auto text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-black uppercase text-white tracking-tight">Painel Restrito Admin</h1>
            <p className="text-xs text-slate-400 font-mono">Insira a credencial de acesso ao terminal Pixelizados.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">Senha de Acesso</label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 font-mono"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs py-3.5 rounded-xl shadow-glow-neon transition-all"
            >
              Autenticar Terminal
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs font-mono text-slate-500 hover:text-slate-300 flex items-center justify-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao site público
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07050d] text-slate-100 p-6 md:p-12 space-y-12">
      {/* Header do Admin */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Terminal Administrativo Autorizado</span>
          </div>
          <h1 className="text-3xl font-black uppercase text-white tracking-tight">Gerenciamento de Habbos Piratas</h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Ver Site Público
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-xs font-mono text-red-400 transition-all"
          >
            Encerrar Sessão
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* FORMULÁRIO DE INTEGRAÇÃO DE NOVO HP */}
        <div className="lg:col-span-5 editorial-card p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <h2 className="text-lg font-black uppercase text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-sky-400" /> Integrar Novo Servidor
            </h2>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          {successMessage && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" /> {successMessage}
            </div>
          )}

          <form onSubmit={handleAddServer} className="space-y-4 font-mono text-xs">
            <div>
              <label className="block text-slate-400 mb-1.5 uppercase">Nome do Habbo Pirata</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                placeholder="Ex: Habbo Fantasy v63"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 uppercase">Nome do Dono / Fundador (Avatar Habbo)</label>
              <input
                type="text"
                value={form.owner}
                onChange={e => setForm({...form, owner: e.target.value})}
                placeholder="Ex: AdminBeta"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 mb-1.5 uppercase">Modo de Exibição do Avatar</label>
                <select
                  value={form.avatarMode}
                  onChange={e => setForm({...form, avatarMode: e.target.value as 'head' | 'full'})}
                  className="w-full bg-[#110c1f] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400"
                >
                  <option value="head">Apenas Rosto (Head)</option>
                  <option value="full">Perfil Completo (Full Body)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1.5 uppercase">Online Inicial</label>
                <input
                  type="number"
                  value={form.onlineCount}
                  onChange={e => setForm({...form, onlineCount: Number(e.target.value)})}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 uppercase">Tags do Servidor (separadas por vírgula)</label>
              <input
                type="text"
                value={form.tagsInput}
                onChange={e => setForm({...form, tagsInput: e.target.value})}
                placeholder="v63, Custom, Sem Raros"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 uppercase">URL do Banner Oficial</label>
              <input
                type="url"
                value={form.bannerUrl}
                onChange={e => setForm({...form, bannerUrl: e.target.value})}
                placeholder="https://images.habbo.com/..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1.5 uppercase">Descrição Editorial</label>
              <textarea
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})}
                placeholder="Breve resumo técnico e atrativos do servidor..."
                rows={3}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-sky-400 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-3.5 rounded-xl shadow-glow-neon transition-all"
            >
              Publicar e Integrar Servidor
            </button>
          </form>
        </div>

        {/* LISTAGEM E GERENCIAMENTO DOS SERVIDORES ATIVOS */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <h2 className="text-lg font-black uppercase text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" /> Servidores Integrados ({servers.length})
            </h2>
            <span className="text-xs font-mono text-slate-400">Atualização em tempo real</span>
          </div>

          <div className="space-y-4">
            {servers.map((server) => (
              <div key={server.id} className="editorial-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {/* Avatar dinâmico (Head ou Full) */}
                  <div className="bg-[#07050d] border border-white/10 rounded-xl p-2 shrink-0 flex items-center justify-center">
                    <HabboAvatar 
                      username={server.owner} 
                      headOnly={server.avatarMode === 'head'} 
                      size="m" 
                      className="w-12 h-12" 
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded">#{server.rank}</span>
                      <span className="text-slate-400">Fundador: {server.owner}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{server.name}</h3>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {server.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono bg-white/[0.04] text-sky-400 px-2 py-0.5 rounded border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-white/[0.06]">
                  <div className="text-right font-mono text-xs hidden md:block">
                    <span className="text-emerald-400 font-bold block">{server.onlineCount} online</span>
                    <span className="text-slate-400">{server.votes} votos</span>
                  </div>
                  <button
                    onClick={() => handleDelete(server.id)}
                    className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 transition-all"
                    title="Remover Servidor"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
