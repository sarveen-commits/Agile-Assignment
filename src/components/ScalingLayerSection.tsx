import React from 'react';
import { SCALING_ROLES } from '../data/organizationData';
import { 
  GitMerge, 
  Award, 
  ShieldAlert, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ScalingLayerSection: React.FC = () => {
  return (
    <div className="space-y-8" id="scaling-layer-section">
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-1">
          <GitMerge className="w-3.5 h-3.5" />
          <span>Horizontal & Vertical Governance</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          The Scaling Layer: Scrum of Scrums & Governance
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          How 24 autonomous squads stay aligned without turning into a chaotic free-for-all or a bureaucratic bottleneck
        </p>
      </div>

      {/* Grid of the 4 Key Scaling Org Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Scrum of Scrums (SoS) */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 via-[#0E1322] to-[#0A0A0F] p-6 space-y-4 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <GitMerge className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Tactical Synchronization</span>
                <h3 className="text-lg font-bold text-white">{SCALING_ROLES.scrumOfScrums.title}</h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              3x / Week
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-slate-400 font-semibold block mb-0.5">Frequency & Cadence:</span>
              <p className="text-slate-200 font-medium">{SCALING_ROLES.scrumOfScrums.frequency}</p>
            </div>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-slate-400 font-semibold block mb-0.5">Participants (Two-Pizza Rule):</span>
              <p className="text-slate-200 font-medium">{SCALING_ROLES.scrumOfScrums.participants}</p>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">The 4 Standard SoS Sync Questions:</div>
            <div className="space-y-1.5">
              {SCALING_ROLES.scrumOfScrums.agenda.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-cyan-300/90 italic bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20">
            Mandate: {SCALING_ROLES.scrumOfScrums.mandate}
          </p>
        </div>

        {/* 2. Chief Product Owner (Chief PO) */}
        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 via-[#0F1126] to-[#0A0A0F] p-6 space-y-4 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Strategic Alignment</span>
                <h3 className="text-lg font-bold text-white">{SCALING_ROLES.chiefPO.title}</h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              Vision Lead
            </span>
          </div>

          <div className="p-3 bg-black/30 rounded-xl border border-white/5 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Current Executive Lead</span>
              <span className="text-white font-bold text-sm">{SCALING_ROLES.chiefPO.name}</span>
            </div>
            <span className="text-xs text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-lg font-medium">
              {SCALING_ROLES.chiefPO.roleDesc}
            </span>
          </div>

          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Core Responsibilities:</div>
            <div className="space-y-1.5">
              {SCALING_ROLES.chiefPO.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Release Train Engineer (RTE) */}
        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-950/20 via-[#120F26] to-[#0A0A0F] p-6 space-y-4 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">Agile Operations & Flow</span>
                <h3 className="text-lg font-bold text-white">{SCALING_ROLES.releaseTrainEngineer.title}</h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
              PI Orchestrator
            </span>
          </div>

          <div className="p-3 bg-black/30 rounded-xl border border-white/5 flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Current Lead RTE</span>
              <span className="text-white font-bold text-sm">{SCALING_ROLES.releaseTrainEngineer.name}</span>
            </div>
            <span className="text-xs text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-lg font-medium">
              {SCALING_ROLES.releaseTrainEngineer.roleDesc}
            </span>
          </div>

          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Functions:</div>
            <div className="space-y-1.5">
              {SCALING_ROLES.releaseTrainEngineer.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Executive Action Team (EAT) */}
        <div className="rounded-2xl border border-pink-500/30 bg-gradient-to-b from-pink-950/20 via-[#1A0E1C] to-[#0A0A0F] p-6 space-y-4 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">Supreme Escalation Body</span>
                <h3 className="text-lg font-bold text-white">{SCALING_ROLES.executiveActionTeam.title}</h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/30">
              &lt; 24h SLA
            </span>
          </div>

          {/* Leaders Trio */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            {SCALING_ROLES.executiveActionTeam.leaders.map((lead, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-white/5 text-center">
                <span className="text-[10px] text-pink-400 uppercase font-bold block">{lead.role}</span>
                <span className="text-white font-bold text-xs mt-0.5 block">{lead.name}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Supreme Authority Mandates:</div>
            <div className="space-y-1.5">
              {SCALING_ROLES.executiveActionTeam.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                  <ShieldAlert className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
