import React, { useState } from 'react';
import { TRIBES, SQUADS } from '../data/organizationData';
import { Tribe, Squad } from '../types';
import { 
  Compass, 
  MessageSquare, 
  ShieldCheck, 
  Film, 
  TrendingUp, 
  Cpu, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Zap, 
  ArrowUpRight, 
  Activity,
  Layers
} from 'lucide-react';

interface TribesSectionProps {
  onSelectSquad: (squad: Squad) => void;
  filterTribeId?: string | null;
}

export const TribesSection: React.FC<TribesSectionProps> = ({ onSelectSquad, filterTribeId }) => {
  const [expandedTribeId, setExpandedTribeId] = useState<string | null>(null);

  const getTribeIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Film': return <Film className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Layers className={className} />;
    }
  };

  const displayedTribes = filterTribeId 
    ? TRIBES.filter(t => t.id === filterTribeId) 
    : TRIBES;

  const toggleExpand = (tribeId: string) => {
    setExpandedTribeId(expandedTribeId === tribeId ? null : tribeId);
  };

  return (
    <div className="space-y-6" id="tribes-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Functional Domain Groupings</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            6 Specialized Feature Tribes
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Semi-autonomous business departments grouping 4 related squads each to maximize domain cohesion
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>All 6 Tribes Operating at High Cadence</span>
        </div>
      </div>

      {/* Grid of 6 Tribe Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {displayedTribes.map((tribe) => {
          const isExpanded = expandedTribeId === tribe.id;
          const tribeSquads = SQUADS.filter(s => s.tribeId === tribe.id);

          return (
            <div
              key={tribe.id}
              id={`tribe-card-${tribe.id}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden relative group shadow-xl"
              style={{
                boxShadow: isExpanded ? `0 12px 30px -10px ${tribe.glowColor}` : undefined
              }}
            >
              {/* Vibrant Top Border Accent */}
              <div 
                className="h-1.5 w-full transition-all duration-300"
                style={{ backgroundColor: tribe.color }}
              />

              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-105"
                        style={{ 
                          backgroundColor: tribe.accentBg, 
                          borderColor: tribe.color,
                          color: tribe.color 
                        }}
                      >
                        {getTribeIcon(tribe.icon, 'w-6 h-6')}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                          {tribe.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">
                          {tribe.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Scale Badge */}
                    <div className="text-right flex-shrink-0">
                      <span 
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold border"
                        style={{ 
                          backgroundColor: tribe.accentBg, 
                          borderColor: tribe.color, 
                          color: tribe.color 
                        }}
                      >
                        {tribe.metrics.qps}
                      </span>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed bg-black/20 p-3 rounded-xl border border-white/5">
                    {tribe.mission}
                  </p>

                  {/* Tribe Leadership Trio */}
                  <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <div className="text-slate-400 font-semibold uppercase text-[9px]">Engineering Lead</div>
                      <div className="text-slate-200 font-medium truncate mt-0.5" title={tribe.leads.engineeringLead}>
                        {tribe.leads.engineeringLead}
                      </div>
                    </div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <div className="text-slate-400 font-semibold uppercase text-[9px]">Tribe Product Owner</div>
                      <div className="text-slate-200 font-medium truncate mt-0.5" title={tribe.leads.productLead}>
                        {tribe.leads.productLead}
                      </div>
                    </div>
                    <div className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <div className="text-slate-400 font-semibold uppercase text-[9px]">Domain Architect</div>
                      <div className="text-slate-200 font-medium truncate mt-0.5" title={tribe.leads.architectLead}>
                        {tribe.leads.architectLead}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Controls & Squad Counter */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <strong className="text-white">{tribe.metrics.squadCount}</strong> Squads
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <strong className="text-white">{tribe.metrics.headcount}</strong> Engineers
                    </span>
                  </div>

                  <button
                    onClick={() => toggleExpand(tribe.id)}
                    id={`btn-toggle-tribe-${tribe.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Squads' : 'Explore 4 Squads'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Expandable Squads List inside Tribe */}
              {isExpanded && (
                <div className="p-4 sm:p-5 bg-black/40 border-t border-white/10 space-y-3 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Autonomous Squads in {tribe.name}</span>
                    <span className="text-[10px] text-slate-400">Click to inspect roster</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {tribeSquads.map((squad) => (
                      <div
                        key={squad.id}
                        onClick={() => onSelectSquad(squad)}
                        className="p-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 cursor-pointer transition-all flex flex-col justify-between group/squad"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <span className="text-xs font-bold text-white group-hover/squad:text-indigo-300 transition-colors">
                              {squad.name}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/squad:text-white transition-transform group-hover/squad:translate-x-0.5 group-hover/squad:-translate-y-0.5" />
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                            {squad.mission}
                          </p>
                        </div>
                        <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                          <span>PO: {squad.productOwner}</span>
                          <span className="text-emerald-400 font-semibold">{squad.health.velocity} pts / spr</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
