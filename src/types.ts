export type ThemeMode = 'dark' | 'light';

export type NavTab = 
  | 'overview' 
  | 'tribes' 
  | 'squads' 
  | 'scaling' 
  | 'ceremonies' 
  | 'raci' 
  | 'flow' 
  | 'challenges';

export interface SquadMember {
  role: string;
  name: string;
  level: string;
  focus: string;
  allocation: string; // e.g. "100%", "50% embedded"
}

export interface SquadHealth {
  velocity: number; // Story points
  goalCompletion: number; // Percentage
  happiness: number; // Out of 5.0
  activeBlockers: number;
}

export interface Squad {
  id: string;
  name: string;
  tribeId: string;
  mission: string;
  productOwner: string;
  scrumMaster: string;
  isSmShared: boolean;
  sharedSmWith?: string;
  members: SquadMember[];
  health: SquadHealth;
  keyTech: string[];
  crossDependencies: string[];
}

export interface Tribe {
  id: string;
  name: string;
  color: string; // CSS color string / hex
  glowColor: string;
  accentBg: string;
  badgeBorder: string;
  icon: string;
  tagline: string;
  mission: string;
  leads: {
    engineeringLead: string;
    productLead: string;
    architectLead: string;
  };
  metrics: {
    qps: string;
    squadCount: number;
    headcount: number;
  };
  squadIds: string[];
}

export interface Ceremony {
  id: string;
  name: string;
  cadence: string;
  duration: string;
  participants: string;
  purpose: string;
  inputs: string;
  outputs: string;
  level: 'squad' | 'tribe' | 'all-hands' | 'leadership';
}

export interface RaciItem {
  activity: string;
  category: string;
  po: 'R' | 'A' | 'C' | 'I';
  sm: 'R' | 'A' | 'C' | 'I';
  dev: 'R' | 'A' | 'C' | 'I';
  cpo: 'R' | 'A' | 'C' | 'I';
  eat: 'R' | 'A' | 'C' | 'I';
  rationale: string;
}

export interface ScalingChallenge {
  id: string;
  title: string;
  category: string;
  impactScore: 'High' | 'Critical' | 'Medium';
  rootCause: string;
  oneLineMitigation: string;
  detailedPolicy: string;
  measuredMetric: string;
}
