import React, { useState, useEffect } from 'react';
import { NavTab, ThemeMode, Squad } from './types';
import { Navbar } from './components/Navbar';
import { OverviewSection } from './components/OverviewSection';
import { TribesSection } from './components/TribesSection';
import { SquadsSection } from './components/SquadsSection';
import { ScalingLayerSection } from './components/ScalingLayerSection';
import { CeremoniesSection } from './components/CeremoniesSection';
import { RaciSection } from './components/RaciSection';
import { FlowDiagramSection } from './components/FlowDiagramSection';
import { ChallengesSection } from './components/ChallengesSection';
import { SquadModal } from './components/SquadModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);

  // Apply dark class to document root
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && activeTab !== 'squads' && activeTab !== 'tribes') {
      setActiveTab('squads');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
      theme === 'dark' 
        ? 'bg-[#0A0A0F] text-slate-100' 
        : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Render Tab View */}
        {activeTab === 'overview' && (
          <OverviewSection onNavigate={(tab) => setActiveTab(tab)} />
        )}

        {activeTab === 'tribes' && (
          <TribesSection 
            onSelectSquad={(squad) => setSelectedSquad(squad)} 
          />
        )}

        {activeTab === 'squads' && (
          <SquadsSection 
            onSelectSquad={(squad) => setSelectedSquad(squad)} 
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'scaling' && (
          <ScalingLayerSection />
        )}

        {activeTab === 'ceremonies' && (
          <CeremoniesSection />
        )}

        {activeTab === 'raci' && (
          <RaciSection />
        )}

        {activeTab === 'flow' && (
          <FlowDiagramSection />
        )}

        {activeTab === 'challenges' && (
          <ChallengesSection />
        )}
      </main>

      {/* Squad Detailed Role Roster Modal */}
      <SquadModal
        squad={selectedSquad}
        onClose={() => setSelectedSquad(null)}
      />

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 py-10 bg-black/40 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <div>
              <span className="font-bold text-slate-200">ScrumScale</span> — Team Structure Studio
              <div className="text-[11px] text-slate-400">Modeled for 50M+ User Scaled Social Platforms</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>6 Tribes</span>
            <span>•</span>
            <span>24 Squads</span>
            <span>•</span>
            <span>190+ Engineers</span>
            <span>•</span>
            <span>2-Week Sprints</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
