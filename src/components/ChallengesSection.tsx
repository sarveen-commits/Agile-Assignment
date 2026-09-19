import React, { useState } from 'react';
import { SCALING_CHALLENGES } from '../data/organizationData';
import { ScalingChallenge } from '../types';
import { 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ChallengesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(SCALING_CHALLENGES[0].id);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getImpactBadge = (score: ScalingChallenge['impactScore']) => {
    switch (score) {
      case 'Critical':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">Critical Impact</span>;
      case 'High':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">High Impact</span>;
      case 'Medium':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">Medium Impact</span>;
    }
  };

  return (
    <div className="space-y-6" id="challenges-section">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-semibold mb-1">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Friction Mitigation & Production Policies</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Scaling Challenges & Mitigation Playbook
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Field-tested answers to the inevitable organizational dysfunctions that arise at 190+ engineer scale
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {SCALING_CHALLENGES.map((challenge) => {
          const isExpanded = expandedId === challenge.id;

          return (
            <div
              key={challenge.id}
              id={`challenge-accordion-${challenge.id}`}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded 
                  ? 'border-indigo-500/50 bg-gradient-to-r from-indigo-950/20 via-[#101326] to-[#0A0A0F] shadow-xl' 
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              {/* Accordion Trigger Header */}
              <div
                onClick={() => toggleAccordion(challenge.id)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getImpactBadge(challenge.impactScore)}
                    <span className="text-xs text-slate-400 font-medium">
                      Category: <span className="text-slate-200 font-semibold">{challenge.category}</span>
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{challenge.title}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-indigo-300 font-medium flex items-center gap-1.5 pt-0.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Mitigation: {challenge.oneLineMitigation}</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 text-slate-400 flex-shrink-0">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Accordion Expandable Content */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 space-y-4 text-xs sm:text-sm animate-in fade-in duration-200">
                  {/* Root Cause */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider block">
                      Root Cause Analysis
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {challenge.rootCause}
                    </p>
                  </div>

                  {/* Concrete Policy in Action */}
                  <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Policy in Action at 50M+ User Scale</span>
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {challenge.detailedPolicy}
                    </p>
                  </div>

                  {/* Measured Verification Metric */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span>Enforcement Metric:</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {challenge.measuredMetric}
                    </span>
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
