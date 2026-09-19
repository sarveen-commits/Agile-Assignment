import React, { useState } from 'react';
import { NavTab, ThemeMode } from '../types';
import { 
  Compass, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Layers, 
  Users, 
  GitMerge, 
  Calendar, 
  Table, 
  Share2, 
  AlertTriangle 
} from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" /> },
    { id: 'tribes', label: 'Tribes (6)', icon: <Layers className="w-4 h-4" /> },
    { id: 'squads', label: 'Squads (24)', icon: <Users className="w-4 h-4" /> },
    { id: 'scaling', label: 'Scaling Layer', icon: <GitMerge className="w-4 h-4" /> },
    { id: 'ceremonies', label: 'Ceremonies', icon: <Calendar className="w-4 h-4" /> },
    { id: 'raci', label: 'RACI Matrix', icon: <Table className="w-4 h-4" /> },
    { id: 'flow', label: 'Dependency Map', icon: <Share2 className="w-4 h-4" /> },
    { id: 'challenges', label: 'Challenges', icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-200 border-white/10 dark:border-white/10 bg-[#0A0A0F]/85 text-slate-100 dark:bg-[#0A0A0F]/90 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0D0F1A] rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  ScrumScale
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  50M+ Scale
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Team Structure Studio
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/5" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative hidden md:block w-48 lg:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                id="global-search-input"
                placeholder="Search squad, role, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-white/[0.06] border border-white/10 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs"
                >
                  ×
                </button>
              )}
            </div>

            {/* Theme Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              className="p-2 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-3 border-t border-white/10 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200" id="mobile-nav-panel">
            <div className="px-1 pb-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search squad, role, tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg text-xs bg-white/[0.06] border border-white/10 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
