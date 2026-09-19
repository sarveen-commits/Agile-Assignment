import React, { useState } from 'react';
import { RACI_ITEMS } from '../data/organizationData';
import { RaciItem } from '../types';
import { Table, Info, CheckCircle2, HelpCircle } from 'lucide-react';

export const RaciSection: React.FC = () => {
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<RaciItem | null>(RACI_ITEMS[0]);

  const roles = [
    { key: 'po', label: 'Product Owner (PO)', sub: 'Squad Level' },
    { key: 'sm', label: 'Scrum Master (SM)', sub: 'Squad & SoS' },
    { key: 'dev', label: 'Dev Team (Dev)', sub: 'Cross-Functional' },
    { key: 'cpo', label: 'Chief PO (CPO)', sub: 'Enterprise Vision' },
    { key: 'eat', label: 'Exec Action Team (EAT)', sub: 'VP Eng & Prod' },
  ];

  const renderBadge = (val: 'R' | 'A' | 'C' | 'I') => {
    switch (val) {
      case 'R':
        return (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg font-black text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm" title="Responsible: The doer of the activity">
            R
          </span>
        );
      case 'A':
        return (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg font-black text-xs bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm" title="Accountable: The sole decision maker / buck stops here">
            A
          </span>
        );
      case 'C':
        return (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg font-black text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm" title="Consulted: In the loop for subject matter expertise">
            C
          </span>
        );
      case 'I':
        return (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg font-black text-xs bg-white/5 text-slate-400 border border-white/10" title="Informed: Kept updated on outcomes">
            I
          </span>
        );
    }
  };

  return (
    <div className="space-y-6" id="raci-section">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-400 text-xs font-semibold mb-1">
          <Table className="w-3.5 h-3.5" />
          <span>Decision Governance & Accountability</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          RACI Responsibility Matrix
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Eliminating ambiguity across 190+ engineers by mapping clear decision rights across roles
        </p>
      </div>

      {/* Legend Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg font-black text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center">
            R
          </span>
          <div>
            <div className="text-xs font-bold text-white">Responsible</div>
            <div className="text-[10px] text-slate-400">Executes the task</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg font-black text-xs bg-pink-500/20 text-pink-300 border border-pink-500/40 flex items-center justify-center">
            A
          </span>
          <div>
            <div className="text-xs font-bold text-white">Accountable</div>
            <div className="text-[10px] text-slate-400">Final decision authority</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg font-black text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center">
            C
          </span>
          <div>
            <div className="text-xs font-bold text-white">Consulted</div>
            <div className="text-[10px] text-slate-400">Two-way expert feedback</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg font-black text-xs bg-white/5 text-slate-400 border border-white/10 flex items-center justify-center">
            I
          </span>
          <div>
            <div className="text-xs font-bold text-white">Informed</div>
            <div className="text-[10px] text-slate-400">One-way status updates</div>
          </div>
        </div>
      </div>

      {/* RACI Interactive Table */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.05] text-slate-300 font-semibold">
                <th className="py-3.5 px-4 min-w-[240px]">Strategic & Technical Activity</th>
                <th className="py-3.5 px-3 min-w-[130px] hidden md:table-cell">Category</th>
                {roles.map((role) => (
                  <th
                    key={role.key}
                    onMouseEnter={() => setHoveredColumn(role.key)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    className={`py-3.5 px-3 text-center transition-colors min-w-[95px] ${
                      hoveredColumn === role.key ? 'bg-indigo-500/15 text-white' : ''
                    }`}
                  >
                    <div className="font-bold text-white">{role.label.split(' ')[0]}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{role.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {RACI_ITEMS.map((item, idx) => {
                const isSelected = selectedItem?.activity === item.activity;
                return (
                  <tr
                    key={idx}
                    onClick={() => setSelectedItem(item)}
                    className={`cursor-pointer transition-colors group ${
                      isSelected
                        ? 'bg-indigo-950/40 text-white'
                        : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-200 group-hover:text-white flex items-center gap-2">
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                        <span>{item.activity}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-slate-400 hidden md:table-cell">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-medium border border-white/5">
                        {item.category}
                      </span>
                    </td>
                    <td className={`py-3.5 px-3 text-center transition-colors ${hoveredColumn === 'po' ? 'bg-indigo-500/10' : ''}`}>
                      {renderBadge(item.po)}
                    </td>
                    <td className={`py-3.5 px-3 text-center transition-colors ${hoveredColumn === 'sm' ? 'bg-indigo-500/10' : ''}`}>
                      {renderBadge(item.sm)}
                    </td>
                    <td className={`py-3.5 px-3 text-center transition-colors ${hoveredColumn === 'dev' ? 'bg-indigo-500/10' : ''}`}>
                      {renderBadge(item.dev)}
                    </td>
                    <td className={`py-3.5 px-3 text-center transition-colors ${hoveredColumn === 'cpo' ? 'bg-indigo-500/10' : ''}`}>
                      {renderBadge(item.cpo)}
                    </td>
                    <td className={`py-3.5 px-3 text-center transition-colors ${hoveredColumn === 'eat' ? 'bg-indigo-500/10' : ''}`}>
                      {renderBadge(item.eat)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Activity Rationale Details */}
      {selectedItem && (
        <div className="p-4 sm:p-5 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
            <Info className="w-4 h-4 text-indigo-400" />
            <span>Governance Rationale: {selectedItem.activity}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {selectedItem.rationale}
          </p>
        </div>
      )}
    </div>
  );
};
