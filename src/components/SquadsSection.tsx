import React, { useState } from 'react';
import { SQUADS, TRIBES } from '../data/organizationData';
import { Squad } from '../types';
import { 
  Users, 
  Smile, 
  Target, 
  Zap, 
  AlertCircle, 
  ExternalLink, 
  Filter,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface SquadsSectionProps {
  onSelectSquad: (squad: Squad) => void;
  searchQuery?: string;
}

export const SquadsSection: React.FC<SquadsSectionProps> = ({ onSelectSquad, searchQuery = '' }) => {
  const [selectedTribeFilter, setSelectedTribeFilter] = useState<string>('all');

  const filteredSquads = SQUADS.filter((squad) => {
    const matchesTribe = selectedTribeFilter === 'all' || squad.tribeId === selectedTribeFilter;
    
    if (!searchQuery.trim()) return matchesTribe;
    
    const query = searchQuery.toLowerCase();
    const matchesName = squad.name.toLowerCase().includes(query);
    const matchesMission = squad.mission.toLowerCase().includes(query);
    const matchesPO = squad.productOwner.toLowerCase().includes(query);
    const matchesSM = squad.scrumMaster.toLowerCase().includes(query);
    const matchesTech = squad.keyTech.some(t => t.toLowerCase().includes(query));
    const matchesMember = squad.members.some(m => 
      m.name.toLowerCase().includes(query) || 
      m.role.toLowerCase().includes(query) || 
      m.focus.toLowerCase().includes(query)
    );

    return matchesTribe && (matchesName || matchesMission || matchesPO || matchesSM || matchesTech || matchesMember);
  });

  const getTribe = (tribeId: string) => TRIBES.find(t => t.id === tribeId);

  return (
    <div className="space-y-6" id="squads-section">
      {/* Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Autonomous Execution Units</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            24 Cross-Functional Squads
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Self-contained teams containing 1 PO, 1 SM, and 6–9 cross-functional engineers with dedicated health metrics
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setSelectedTribeFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedTribeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
            }`}
          >
            All Squads ({SQUADS.length})
          </button>
          {TRIBES.map((tribe) => (
            <button
              key={tribe.id}
              onClick={() => setSelectedTribeFilter(tribe.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedTribeFilter === tribe.id
                  ? 'text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
              style={{
                backgroundColor: selectedTribeFilter === tribe.id ? tribe.color : 'rgba(255,255,255,0.05)',
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tribe.color }} />
              {tribe.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Squads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredSquads.map((squad) => {
          const tribe = getTribe(squad.tribeId);
          return (
            <div
              key={squad.id}
              id={`squad-card-${squad.id}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 p-5 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Subtle top indicator bar matching tribe color */}
              <div 
                className="absolute top-0 left-0 right-0 h-1" 
                style={{ backgroundColor: tribe?.color || '#6366F1' }} 
              />

              <div>
                {/* Header: Tribe & SM Badging */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span 
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                    style={{ 
                      backgroundColor: tribe?.accentBg, 
                      borderColor: tribe?.color, 
                      color: tribe?.color 
                    }}
                  >
                    {tribe?.name}
                  </span>

                  {squad.isSmShared ? (
                    <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded" title={`Shared Scrum Master with ${squad.sharedSmWith}`}>
                      SM Shared
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Dedicated SM
                    </span>
                  )}
                </div>

                {/* Squad Title & Mission */}
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {squad.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                  {squad.mission}
                </p>

                {/* Leadership Info */}
                <div className="mt-3.5 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="text-[10px] uppercase text-slate-400 font-bold block">Product Owner</span>
                    <span className="text-slate-200 font-semibold truncate block mt-0.5">
                      {squad.productOwner}
                    </span>
                  </div>
                  <div className="bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="text-[10px] uppercase text-slate-400 font-bold block">Scrum Master</span>
                    <span className="text-slate-200 font-semibold truncate block mt-0.5">
                      {squad.scrumMaster}
                    </span>
                  </div>
                </div>

                {/* Role Preview Chips */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Team Size: <strong className="text-white">{squad.members.length} members</strong></span>
                  <span className="text-slate-400 truncate max-w-[170px] text-right">
                    {squad.members.filter(m => m.role.includes('Eng') || m.role.includes('Backend') || m.role.includes('iOS') || m.role.includes('Android')).length} Devs + SDET + UX
                  </span>
                </div>

                {/* Health Metrics Bar */}
                <div className="mt-3 p-2.5 rounded-xl bg-black/30 border border-white/5 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-semibold">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Velocity</span>
                    </div>
                    <div className="text-sm font-black text-white mt-0.5">{squad.health.velocity} <span className="text-[10px] font-normal text-slate-400">pts</span></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-semibold">
                      <Target className="w-3 h-3 text-cyan-400" />
                      <span>Sprint Goal</span>
                    </div>
                    <div className="text-sm font-black text-emerald-400 mt-0.5">{squad.health.goalCompletion}%</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-semibold">
                      <Smile className="w-3 h-3 text-pink-400" />
                      <span>Happiness</span>
                    </div>
                    <div className="text-sm font-black text-white mt-0.5">{squad.health.happiness} <span className="text-[10px] font-normal text-slate-400">/5</span></div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {squad.keyTech.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {squad.keyTech.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                      +{squad.keyTech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  {squad.health.activeBlockers > 0 ? (
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {squad.health.activeBlockers} Blocker Escalated
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Zero Active Blockers
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectSquad(squad)}
                  id={`inspect-squad-btn-${squad.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Full Roster</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSquads.length === 0 && (
        <div className="p-12 text-center rounded-2xl border border-white/10 bg-white/[0.02]">
          <Users className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No squads match your query</h3>
          <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting another tribe filter.</p>
        </div>
      )}
    </div>
  );
};
