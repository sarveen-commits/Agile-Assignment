import React from 'react';
import { Squad } from '../types';
import { TRIBES } from '../data/organizationData';
import { 
  X, 
  Users, 
  Zap, 
  Target, 
  Smile, 
  ShieldAlert, 
  Code, 
  Link2, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';

interface SquadModalProps {
  squad: Squad | null;
  onClose: () => void;
}

export const SquadModal: React.FC<SquadModalProps> = ({ squad, onClose }) => {
  if (!squad) return null;

  const tribe = TRIBES.find(t => t.id === squad.tribeId);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      id="squad-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#0D0F1D] p-5 sm:p-8 shadow-2xl shadow-indigo-950/50 space-y-6 text-slate-100"
        id="squad-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-squad-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span 
              className="px-2.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wider"
              style={{
                backgroundColor: tribe?.accentBg,
                borderColor: tribe?.color,
                color: tribe?.color
              }}
            >
              {tribe?.name}
            </span>
            {squad.isSmShared ? (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                Shared Scrum Master ({squad.sharedSmWith})
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                Dedicated Scrum Master
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {squad.name}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
            {squad.mission}
          </p>
        </div>

        {/* Live Squad Health Telemetry */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Sprint Velocity</span>
            </div>
            <div className="text-2xl font-black text-white">{squad.health.velocity} <span className="text-xs font-normal text-slate-400">Story Pts</span></div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Consistent across last 6 sprints</div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sprint Goal Completion</span>
            </div>
            <div className="text-2xl font-black text-emerald-400">{squad.health.goalCompletion}%</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Target &gt; 90% benchmark</div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
              <Smile className="w-3.5 h-3.5 text-pink-400" />
              <span>Team Happiness</span>
            </div>
            <div className="text-2xl font-black text-white">{squad.health.happiness} <span className="text-xs font-normal text-slate-400">/ 5.0</span></div>
            <div className="text-[10px] text-pink-400 mt-0.5">Bi-weekly anonymous retro pulse</div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>Active Impediments</span>
            </div>
            <div className="text-2xl font-black text-white">{squad.health.activeBlockers}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Escalated to Scrum of Scrums</div>
          </div>
        </div>

        {/* Complete Role Roster Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Squad Composition & Member Allocation ({squad.members.length} Members)</span>
            </h3>
            <span className="text-xs text-slate-400">Full-Stack Cross-Functional Unit</span>
          </div>

          <div className="rounded-xl border border-white/10 overflow-hidden bg-black/20">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04] text-slate-400 font-semibold">
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Member Name</th>
                  <th className="py-2.5 px-3">Level / Title</th>
                  <th className="py-2.5 px-3 hidden sm:table-cell">Specialization & Focus</th>
                  <th className="py-2.5 px-3 text-right">Allocation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {squad.members.map((member, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-white flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{member.role}</span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-200 font-medium">{member.name}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] text-slate-300">
                        {member.level}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 hidden sm:table-cell">{member.focus}</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        member.allocation.includes('100')
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}>
                        {member.allocation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tech Stack & Cross-Team Dependencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Tech Stack */}
          <div className="p-4 rounded-xl border border-white/10 bg-black/20 space-y-2">
            <div className="text-xs font-bold uppercase text-slate-300 tracking-wider flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              <span>Core Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {squad.keyTech.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-indigo-950/40 text-indigo-200 border border-indigo-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Cross Dependencies */}
          <div className="p-4 rounded-xl border border-white/10 bg-black/20 space-y-2">
            <div className="text-xs font-bold uppercase text-slate-300 tracking-wider flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Active Cross-Team Dependencies</span>
            </div>
            <div className="space-y-1 pt-1">
              {squad.crossDependencies.map((dep, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>{dep}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
