import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowDown, 
  ArrowUp, 
  Layers, 
  Users, 
  ShieldAlert, 
  Award, 
  Sparkles, 
  Zap, 
  Info 
} from 'lucide-react';

type FlowFilter = 'all' | 'escalation' | 'vision' | 'dependencies';

export const FlowDiagramSection: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<FlowFilter>('all');
  const [selectedNode, setSelectedNode] = useState<string | null>('sos');

  const nodesInfo: Record<string, { title: string; subtitle: string; desc: string; latency: string }> = {
    eat: {
      title: 'Executive Action Team (EAT)',
      subtitle: 'VP Eng • VP Product • Head of Design',
      desc: 'Resolves systemic organizational hurdles, cross-tribe political impasses, and budget allocations that cannot be resolved in SoS.',
      latency: 'SLA: Within 24 hours of escalation'
    },
    cpo: {
      title: 'Chief Product Owner (Chief PO)',
      subtitle: 'Dr. Sarah Chen • Global Product Strategy',
      desc: 'Orchestrates the 6 Tribe POs, maintains global product vision, and synthesizes 50M+ user metrics into clear PI objectives.',
      latency: 'Cadence: Weekly Tribe PO Sync & 10-wk PI'
    },
    sos: {
      title: 'Scrum of Scrums (SoS) Coordination Hub',
      subtitle: '24 Squad Reps + David Kalu (RTE)',
      desc: 'Meets 3x/week to untangle cross-squad dependencies, coordinate API contract drops, and manage release dependencies.',
      latency: 'Cadence: Mon / Wed / Fri 11:00 AM (30 min)'
    },
    tribes: {
      title: '6 Feature Tribes',
      subtitle: 'Feed • Messaging • Identity • Media • Growth • Platform',
      desc: 'Domain-focused business departments providing shared architecture, customer research, and localized roadmaps.',
      latency: 'Cadence: Bi-weekly Tribe Demo Showcase'
    },
    squads: {
      title: '24 Autonomous Squads',
      subtitle: '190+ Full-Time Engineers, POs & SMs',
      desc: 'Cross-functional units executing daily standups, backlog refinements, and delivering bi-weekly tested software increments.',
      latency: 'Cadence: 2-week Sprint cycle'
    }
  };

  return (
    <div className="space-y-6" id="flow-diagram-section">
      {/* Header & Flow Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-1">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Information Architecture & Data Flow</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Dependency & Communication Flow Diagram
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Interactive visual network illustrating how autonomous execution links with executive governance
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'All Channels' },
            { id: 'escalation', label: '⚡ Escalation Flow (Upward)' },
            { id: 'vision', label: '🎯 Vision Cascade (Downward)' },
            { id: 'dependencies', label: '⇄ Peer Dependencies (Horizontal)' },
          ].map((flow) => (
            <button
              key={flow.id}
              onClick={() => setActiveFlow(flow.id as FlowFilter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFlow === flow.id
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              {flow.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Canvas Area */}
      <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0F1122] via-[#0C0E1B] to-[#0A0A0F] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Flow Diagram Interactive Layout */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          {/* LEVEL 1: Top Governance Tier (EAT & Chief PO) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* EAT Node */}
            <div
              onClick={() => setSelectedNode('eat')}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedNode === 'eat'
                  ? 'border-pink-500 bg-pink-950/30 shadow-lg shadow-pink-500/20'
                  : 'border-pink-500/30 bg-pink-950/10 hover:border-pink-500/60'
              } ${activeFlow === 'vision' ? 'opacity-40' : 'opacity-100'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  Supreme Authority
                </span>
                <ShieldAlert className="w-4 h-4 text-pink-400" />
              </div>
              <h4 className="text-base font-bold text-white">Executive Action Team (EAT)</h4>
              <p className="text-xs text-slate-300 mt-1">VP Eng • VP Product • Head of Design</p>
              <div className="text-[11px] text-pink-300 font-mono mt-2 flex items-center gap-1">
                <span>Resolves &lt;24h blockers from SoS</span>
              </div>
            </div>

            {/* Chief PO Node */}
            <div
              onClick={() => setSelectedNode('cpo')}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                selectedNode === 'cpo'
                  ? 'border-indigo-500 bg-indigo-950/30 shadow-lg shadow-indigo-500/20'
                  : 'border-indigo-500/30 bg-indigo-950/10 hover:border-indigo-500/60'
              } ${activeFlow === 'escalation' ? 'opacity-40' : 'opacity-100'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Global Backlog
                </span>
                <Award className="w-4 h-4 text-indigo-400" />
              </div>
              <h4 className="text-base font-bold text-white">Chief Product Owner (CPO)</h4>
              <p className="text-xs text-slate-300 mt-1">Dr. Sarah Chen • Head of Product Strategy</p>
              <div className="text-[11px] text-indigo-300 font-mono mt-2 flex items-center gap-1">
                <span>Aligns 6 Tribe POs with 50M+ OKRs</span>
              </div>
            </div>
          </div>

          {/* Connectors to Level 2 */}
          <div className="flex justify-around items-center text-xs font-mono py-1">
            <div className={`flex items-center gap-1.5 transition-colors ${
              activeFlow === 'escalation' || activeFlow === 'all' ? 'text-pink-400 font-bold' : 'text-slate-400'
            }`}>
              <ArrowUp className="w-4 h-4 animate-bounce" />
              <span>Unresolved Blockers (&gt;24h)</span>
            </div>
            <div className={`flex items-center gap-1.5 transition-colors ${
              activeFlow === 'vision' || activeFlow === 'all' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}>
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span>Strategic PI Goals & OKRs</span>
            </div>
          </div>

          {/* LEVEL 2: Scrum of Scrums (SoS) Hub */}
          <div
            onClick={() => setSelectedNode('sos')}
            className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 max-w-2xl mx-auto ${
              selectedNode === 'sos'
                ? 'border-cyan-400 bg-cyan-950/40 shadow-xl shadow-cyan-500/25 ring-1 ring-cyan-400/50'
                : 'border-cyan-500/30 bg-cyan-950/15 hover:border-cyan-500/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Central Synchronization Engine
              </span>
              <span className="text-xs text-cyan-400 font-mono">Mon / Wed / Fri 11:00 AM</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-cyan-400" />
              <span>Scrum of Scrums (SoS) Coordination</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              24 Squad Representatives + Release Train Engineer (David Kalu). 
              Tackles dependency deadlocks, API contract changes, and cross-team integration risks.
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs font-mono text-cyan-200/80">
              <span>Resolves 85%+ blockers internally</span>
              <span>•</span>
              <span>2-Pizza Rep Rule</span>
            </div>
          </div>

          {/* Connectors to Level 3 */}
          <div className="flex justify-center items-center text-xs font-mono py-1 text-slate-400">
            <div className="flex items-center gap-2">
              <ArrowDown className="w-4 h-4 text-cyan-400" />
              <span>Coordinated Dependencies & Release Trains</span>
              <ArrowUp className="w-4 h-4 text-amber-400" />
            </div>
          </div>

          {/* LEVEL 3: 6 Feature Tribes */}
          <div
            onClick={() => setSelectedNode('tribes')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
              selectedNode === 'tribes'
                ? 'border-indigo-500 bg-indigo-950/30 shadow-lg shadow-indigo-500/20'
                : 'border-white/10 bg-white/[0.03] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>6 Specialized Feature Tribes (4 Squads Each)</span>
              </span>
              <span className="text-xs text-slate-400">Domain Incubators</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { name: 'Core Feed', color: '#6366F1' },
                { name: 'Messaging', color: '#06B6D4' },
                { name: 'Identity', color: '#8B5CF6' },
                { name: 'Media', color: '#EC4899' },
                { name: 'Growth', color: '#F59E0B' },
                { name: 'Platform', color: '#10B981' },
              ].map((t, idx) => (
                <div 
                  key={idx} 
                  className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                  <span className="truncate">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LEVEL 4: 24 Autonomous Squads */}
          <div
            onClick={() => setSelectedNode('squads')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
              selectedNode === 'squads'
                ? 'border-emerald-500 bg-emerald-950/30 shadow-lg shadow-emerald-500/20'
                : 'border-white/10 bg-white/[0.03] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>24 Autonomous Squads (190+ Full-Time Engineers & Leads)</span>
              </span>
              <span className="text-xs text-emerald-400 font-semibold">Self-Contained Execution</span>
            </div>
            <p className="text-xs text-slate-300">
              Each squad contains 1 PO, 1 SM, and 6–9 engineers deploying against automated contract tests and feature flags.
            </p>
          </div>
        </div>

        {/* Selected Node Details Card */}
        {selectedNode && nodesInfo[selectedNode] && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl border border-white/15 bg-black/50 backdrop-blur-md max-w-3xl mx-auto space-y-2 text-slate-200">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-indigo-400" />
                <span>{nodesInfo[selectedNode].title}</span>
              </h4>
              <span className="text-xs text-indigo-300 font-mono bg-indigo-500/10 px-2 py-0.5 rounded">
                {nodesInfo[selectedNode].latency}
              </span>
            </div>
            <div className="text-xs text-slate-400 font-medium">{nodesInfo[selectedNode].subtitle}</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {nodesInfo[selectedNode].desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
