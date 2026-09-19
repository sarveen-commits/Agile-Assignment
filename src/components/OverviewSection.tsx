import React from 'react';
import { ORG_STATS, SCALING_ROLES } from '../data/organizationData';
import { NavTab } from '../types';
import { 
  Users, 
  Layers, 
  Zap, 
  Activity, 
  ShieldAlert, 
  ArrowRight, 
  Award, 
  Globe, 
  Clock, 
  Sparkles,
  GitBranch
} from 'lucide-react';

interface OverviewSectionProps {
  onNavigate: (tab: NavTab) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10" id="overview-section">
      {/* Hero Section with Vibrant Ambient Blobs */}
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 border border-white/10 bg-gradient-to-b from-[#121424] via-[#0D0F1C] to-[#0A0A0F] shadow-2xl">
        {/* Ambient Gradient Blobs */}
        <div className="absolute -top-24 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-pink-600/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Scaled Agile Architecture for High-Scale Social Platforms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
            Scaling Autonomous Squads at{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              50M+ User Velocity
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Modeled on the proven <span className="text-white font-medium">Tribe-Squad & Scrum of Scrums</span> paradigm: 
            One unified product vision steered by a <span className="text-indigo-300 font-semibold">Chief Product Owner</span>, 
            executed by <span className="text-white font-semibold">24 cross-functional autonomous Squads</span> clustered across 
            6 feature Tribes, horizontally synchronized via a high-cadence <span className="text-cyan-300 font-semibold">Scrum of Scrums (SoS)</span>, 
            and governed by an <span className="text-pink-300 font-semibold">Executive Action Team (EAT)</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('tribes')}
              id="cta-explore-tribes"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Layers className="w-4 h-4" />
              Explore the 6 Tribes
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('flow')}
              id="cta-view-flow"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all"
            >
              <GitBranch className="w-4 h-4 text-cyan-400" />
              View Communication Flow
            </button>
            <button
              onClick={() => onNavigate('scaling')}
              id="cta-view-scaling"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all"
            >
              <ShieldAlert className="w-4 h-4 text-pink-400" />
              SoS & EAT Governance
            </button>
          </div>
        </div>
      </div>

      {/* Primary Stat Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4" id="stats-bar">
        {[
          { label: 'Active Platform Users', value: ORG_STATS.activeUsers, icon: <Globe className="w-4 h-4 text-cyan-400" />, sub: 'Web + iOS + Android' },
          { label: 'Specialized Tribes', value: ORG_STATS.tribesCount.toString(), icon: <Layers className="w-4 h-4 text-indigo-400" />, sub: 'Distinct domains' },
          { label: 'Autonomous Squads', value: ORG_STATS.squadsCount.toString(), icon: <Users className="w-4 h-4 text-purple-400" />, sub: 'Role-complete units' },
          { label: 'Engineers & Leads', value: ORG_STATS.totalEngineers.toString(), icon: <Zap className="w-4 h-4 text-pink-400" />, sub: 'Full-time roster' },
          { label: 'Sprint Cadence', value: ORG_STATS.sprintCadence, icon: <Clock className="w-4 h-4 text-amber-400" />, sub: '10-wk PI cycle' },
          { label: 'Global Availability', value: ORG_STATS.globalSLA, icon: <Activity className="w-4 h-4 text-emerald-400" />, sub: `${ORG_STATS.avgGoalCompletion} sprint goal` },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Live Metric</span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
            <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
            <div className="text-[11px] text-slate-400 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* The 4 Architectural Pillars of Scaled Scrum */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Scaled Scrum Topology
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How strategy cascades into autonomous execution without bureaucratic drag
            </p>
          </div>
          <button
            onClick={() => onNavigate('scaling')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            Deep dive into Scaling Layer <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pillar 1: Chief PO */}
          <div className="p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 to-[#0D0F1A] hover:border-indigo-500/60 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Pillar 1: Strategy</span>
                <h3 className="text-base font-bold text-white">Chief Product Owner</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Steered by <span className="text-white font-medium">{SCALING_ROLES.chiefPO.name}</span>. 
                  Unifies the multi-year platform roadmap and aligns the 6 Tribe Product Owners to prevent metric cannibalization.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
              Artifact: <span className="text-indigo-300 font-mono">Global Product Backlog</span>
            </div>
          </div>

          {/* Pillar 2: Tribes */}
          <div className="p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 to-[#0D0F1A] hover:border-cyan-500/60 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Pillar 2: Feature Areas</span>
                <h3 className="text-base font-bold text-white">6 Feature Tribes</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Collocated clusters of 4 squads each (Core Feed, Messaging, Identity, Media, Growth, Platform). 
                  Each tribe operates as a semi-autonomous product incubator.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
              Capacity: <span className="text-cyan-300 font-mono">31–34 members / tribe</span>
            </div>
          </div>

          {/* Pillar 3: Scrum of Scrums */}
          <div className="p-5 rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-950/30 to-[#0D0F1A] hover:border-purple-500/60 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
                <GitBranch className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">Pillar 3: Synchronization</span>
                <h3 className="text-base font-bold text-white">Scrum of Scrums (SoS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Meets 3x/week (Mon/Wed/Fri 11:00 AM). 24 squad representatives sync API contracts, 
                  unblock PR dependencies, and flag cross-squad architecture hurdles.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
              Facilitator: <span className="text-purple-300 font-mono">David Kalu (RTE)</span>
            </div>
          </div>

          {/* Pillar 4: Executive Action Team */}
          <div className="p-5 rounded-2xl border border-pink-500/30 bg-gradient-to-b from-pink-950/30 to-[#0D0F1A] hover:border-pink-500/60 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">Pillar 4: Escalation</span>
                <h3 className="text-base font-bold text-white">Executive Action Team (EAT)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  VP Eng, VP Product, and Head of Design. Acts as the organizational supreme court to resolve 
                  cross-tribe blockers and budget constraints within 24 hours.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
              SLA: <span className="text-pink-300 font-mono">&lt; 24h Blocker Resolution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
