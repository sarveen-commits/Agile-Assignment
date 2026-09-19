import React, { useState } from 'react';
import { CEREMONIES } from '../data/organizationData';
import { Ceremony } from '../types';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ChevronRight,
  Filter
} from 'lucide-react';

export const CeremoniesSection: React.FC = () => {
  const [levelFilter, setLevelFilter] = useState<'all' | 'squad' | 'tribe' | 'all-hands' | 'leadership'>('all');
  const [activeCeremonyId, setActiveCeremonyId] = useState<string>(CEREMONIES[0].id);

  const filteredCeremonies = levelFilter === 'all' 
    ? CEREMONIES 
    : CEREMONIES.filter(c => c.level === levelFilter);

  const activeCeremony = CEREMONIES.find(c => c.id === activeCeremonyId) || CEREMONIES[0];

  const getLevelBadge = (level: Ceremony['level']) => {
    switch (level) {
      case 'squad':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Squad Level</span>;
      case 'tribe':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Cross-Squad / Tribe</span>;
      case 'all-hands':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/10 text-pink-300 border border-pink-500/20">All-Hands (24 Squads)</span>;
      case 'leadership':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">Executive Leadership</span>;
    }
  };

  return (
    <div className="space-y-6" id="ceremonies-section">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Rhythmic Agile Cadences</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Ceremonies & Events Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From 15-minute daily syncs to 10-week Program Increment (PI) planning sessions
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {(['all', 'squad', 'tribe', 'all-hands', 'leadership'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                levelFilter === lvl
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              {lvl === 'all' ? 'All Cadences' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Timeline Layout: Left Navigation + Right Detailed Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Timeline list (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          {filteredCeremonies.map((ceremony, idx) => {
            const isSelected = ceremony.id === activeCeremonyId;
            return (
              <div
                key={ceremony.id}
                onClick={() => setActiveCeremonyId(ceremony.id)}
                id={`ceremony-item-${ceremony.id}`}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'border-indigo-500/50 bg-gradient-to-r from-indigo-950/40 via-[#13172E] to-[#0A0A0F] shadow-lg shadow-indigo-500/10'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    {getLevelBadge(ceremony.level)}
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {ceremony.duration}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold transition-colors ${
                    isSelected ? 'text-indigo-300' : 'text-white group-hover:text-slate-200'
                  }`}>
                    {ceremony.name}
                  </h4>
                  <div className="text-[11px] text-slate-400">{ceremony.cadence}</div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${
                  isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-400 group-hover:text-slate-200'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Selected Ceremony Detail Panel (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-2xl flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getLevelBadge(activeCeremony.level)}
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 rounded">
                    {activeCeremony.cadence}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {activeCeremony.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-semibold">Duration</span>
                <span className="text-lg font-black text-white">{activeCeremony.duration}</span>
              </div>
            </div>

            {/* Purpose */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Ceremony Objective:</span>
              <p className="text-sm text-slate-200 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5">
                {activeCeremony.purpose}
              </p>
            </div>

            {/* Attendees */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mandatory Participants:</span>
              </span>
              <p className="text-xs text-slate-300 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                {activeCeremony.participants}
              </p>
            </div>

            {/* Inputs & Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Required Inputs</span>
                <p className="text-xs text-slate-300">{activeCeremony.inputs}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Committed Deliverables</span>
                <p className="text-xs text-slate-300">{activeCeremony.outputs}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Sprint Flow Governance</span>
            <span className="text-indigo-400 font-semibold">Strict Timebox Enforced</span>
          </div>
        </div>
      </div>
    </div>
  );
};
