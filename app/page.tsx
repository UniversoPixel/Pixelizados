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

                      {/* Avatar do Dono / Head perfeitamente posicionado */}
                      <div className="absolute -bottom-6 right-6 bg-[#07050d] border-2 border-white/10 rounded-2xl p-1 shadow-2xl flex items-center justify-center overflow-hidden">
                        <HabboAvatar username={server.owner} headOnly size="m" className="w-12 h-12" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4 pt-8">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Fundador: {server.owner}</span>
                        <h3 className="text-xl font-bold text-white tracking-tight">{server.name}</h3>
                      </div>
                      
                      <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2">
                        {server.description}
                      </p>

                      {/* Tags editáveis / visualização */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
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

                  <div className="p-5 bg-white/[0.02] border-t border-white/[0.06] space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" /> {server.onlineCount} online
                      </span>
                      <span className="text-purple-400 font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> {server.votes} votos
                      </span>
                    </div>

                    {/* Botão Jogue Agora de Alto Padrão */}
                    <a
                      href={`/servidores/${server.id}`}
                      className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs py-3 rounded-xl shadow-glow-neon transition-all hover:scale-[1.01]"
                    >
                      <span>Jogue Agora</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
