import { Tribe, Squad, Ceremony, RaciItem, ScalingChallenge } from '../types';

export const ORG_STATS = {
  activeUsers: '52.4M',
  tribesCount: 6,
  squadsCount: 24,
  totalEngineers: 196,
  sprintCadence: '2 Weeks',
  piCycle: '10 Weeks',
  avgGoalCompletion: '94.6%',
  globalSLA: '99.99%',
  releasesPerSprint: '140+'
};

export const TRIBES: Tribe[] = [
  {
    id: 'tribe-feed',
    name: 'Core Feed & Discovery',
    color: '#6366F1', // Indigo
    glowColor: 'rgba(99, 102, 241, 0.35)',
    accentBg: 'rgba(99, 102, 241, 0.12)',
    badgeBorder: 'border-indigo-500/40',
    icon: 'Compass',
    tagline: 'Personalized Ranking, Semantic Search & Real-Time Graph',
    mission: 'Deliver sub-100ms algorithmic feeds and discovery recommendations across 50M+ users with multi-task deep ranking models.',
    leads: {
      engineeringLead: 'Dr. Aris Thorne (Principal Eng)',
      productLead: 'Maya Lin (Tribe PO)',
      architectLead: 'Henrik Vanger (Staff Architect)'
    },
    metrics: {
      qps: '145K QPS',
      squadCount: 4,
      headcount: 34
    },
    squadIds: ['squad-home-ranking', 'squad-explore-search', 'squad-social-graph', 'squad-relevance-streaming']
  },
  {
    id: 'tribe-messaging',
    name: 'Messaging & Real-Time',
    color: '#06B6D4', // Cyan
    glowColor: 'rgba(6, 182, 212, 0.35)',
    accentBg: 'rgba(6, 182, 212, 0.12)',
    badgeBorder: 'border-cyan-500/40',
    icon: 'MessageSquare',
    tagline: 'Instant Chat, Push Notifications & Live Presence',
    mission: 'Power 480M+ daily chat messages, live room notifications, and typing presence with 99.99% delivery reliability and <45ms RTT.',
    leads: {
      engineeringLead: 'Julian Rossi (Staff Eng)',
      productLead: 'Samantha Wu (Tribe PO)',
      architectLead: 'Nadia Sadiq (Principal Systems Eng)'
    },
    metrics: {
      qps: '320K Events/s',
      squadCount: 4,
      headcount: 32
    },
    squadIds: ['squad-direct-chat', 'squad-push-dispatch', 'squad-presence-ephemeral', 'squad-audio-video-rtc']
  },
  {
    id: 'tribe-identity',
    name: 'Profile & Identity',
    color: '#8B5CF6', // Violet
    glowColor: 'rgba(139, 92, 246, 0.35)',
    accentBg: 'rgba(139, 92, 246, 0.12)',
    badgeBorder: 'border-purple-500/40',
    icon: 'ShieldCheck',
    tagline: 'Authentication, Privacy Controls & Social Proof',
    mission: 'Safeguard identity security, Passkey/WebAuthn onboarding, creator badging, and GDPR/CCPA boundary compliance.',
    leads: {
      engineeringLead: 'Natalie Vance (Engineering Dir)',
      productLead: 'Tariq Al-Mansoor (Tribe PO)',
      architectLead: 'Chloe Dupont (Security Architect)'
    },
    metrics: {
      qps: '85K Auth/min',
      squadCount: 4,
      headcount: 31
    },
    squadIds: ['squad-auth-passkeys', 'squad-profile-showcase', 'squad-privacy-governance', 'squad-trust-antiabuse']
  },
  {
    id: 'tribe-media',
    name: 'Media & Content',
    color: '#EC4899', // Pink
    glowColor: 'rgba(236, 72, 153, 0.35)',
    accentBg: 'rgba(236, 72, 153, 0.12)',
    badgeBorder: 'border-pink-500/40',
    icon: 'Film',
    tagline: 'Short-Form Video, Creative Camera & Global CDN',
    mission: 'Process 12TB+ daily video/photo uploads with AV1 transcoding, zero-lag playback loops, and edge caching at 180+ POPs.',
    leads: {
      engineeringLead: 'Kenji Takahashi (Staff Video Eng)',
      productLead: 'Claire Beaumont (Tribe PO)',
      architectLead: 'Sergei Morozov (Media Systems Lead)'
    },
    metrics: {
      qps: '2.4 PB/day',
      squadCount: 4,
      headcount: 33
    },
    squadIds: ['squad-reels-player', 'squad-camera-creative', 'squad-transcode-pipeline', 'squad-edge-cdn']
  },
  {
    id: 'tribe-growth',
    name: 'Growth & Monetization',
    color: '#F59E0B', // Amber
    glowColor: 'rgba(245, 158, 11, 0.35)',
    accentBg: 'rgba(245, 158, 11, 0.12)',
    badgeBorder: 'border-amber-500/40',
    icon: 'TrendingUp',
    tagline: 'Ad Auction Engine, Creator Economy & Experimentation',
    mission: 'Drive real-time ad bidding, creator subscriptions, automated payout ledgers, and Bayesian A/B experimentation frameworks.',
    leads: {
      engineeringLead: 'Viktor Blomqvist (Principal Eng)',
      productLead: 'Hannah Chen (Tribe PO)',
      architectLead: 'Amara Okafor (FinTech Lead)'
    },
    metrics: {
      qps: '90K Bid req/s',
      squadCount: 4,
      headcount: 32
    },
    squadIds: ['squad-ad-auction', 'squad-creator-economy', 'squad-bayesian-ab', 'squad-viral-activation']
  },
  {
    id: 'tribe-platform',
    name: 'Platform & Infrastructure',
    color: '#10B981', // Emerald
    glowColor: 'rgba(16, 185, 129, 0.35)',
    accentBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'border-emerald-500/40',
    icon: 'Cpu',
    tagline: 'Multi-Region Kubernetes, Kafka Lakehouse & CI/CD',
    mission: 'Guarantee 99.99% multi-region cloud uptime, unified Apache Kafka event fabric, distributed tracing, and 6-minute CI builds.',
    leads: {
      engineeringLead: 'Devraj Nair (Staff Infrastructure Eng)',
      productLead: 'Sofia Lindqvist (Platform PO)',
      architectLead: 'Lucas Silva (Cloud Architect)'
    },
    metrics: {
      qps: '1.2M RPC/s',
      squadCount: 4,
      headcount: 34
    },
    squadIds: ['squad-cloud-kubernetes', 'squad-kafka-lakehouse', 'squad-observability-sre', 'squad-developer-velocity']
  }
];

export const SQUADS: Squad[] = [
  // Core Feed & Discovery Tribe
  {
    id: 'squad-home-ranking',
    name: 'Squad Alpha: Home Feed Ranking',
    tribeId: 'tribe-feed',
    mission: 'Train and serve 2-stage multi-task neural networks for personalizing the infinite home feed within 45ms P99.',
    productOwner: 'Elena Rostova',
    scrumMaster: 'Marcus Vance',
    isSmShared: false,
    health: { velocity: 54, goalCompletion: 96, happiness: 4.8, activeBlockers: 1 },
    keyTech: ['PyTorch', 'C++ Inference', 'Go', 'gRPC', 'Redis Feature Store'],
    crossDependencies: ['Kafka Streaming (Platform Tribe)', 'Content Ingestion (Squad Gamma)'],
    members: [
      { role: 'Product Owner', name: 'Elena Rostova', level: 'Staff PO', focus: 'Ranking Strategy & Metric Guardrails', allocation: '100%' },
      { role: 'Scrum Master', name: 'Marcus Vance', level: 'Senior SM', focus: 'Agile Flow & Blocker Removal', allocation: '100%' },
      { role: 'Lead ML Engineer', name: 'Dr. Kevin Zhao', level: 'Staff ML', focus: 'Multi-Task Ranking & Embedding Models', allocation: '100%' },
      { role: 'ML Platform Engineer', name: 'Anya Ivanova', level: 'Senior ML', focus: 'Feature Pipeline & Model Quantization', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Mateo Rossi', level: 'Senior Backend', focus: 'Low-latency Go Candidate Retriever', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Dmitri Volkov', level: 'Mid Backend', focus: 'gRPC Scoring Cluster', allocation: '100%' },
      { role: 'iOS Engineer', name: 'Sophie Laurent', level: 'Senior iOS', focus: 'Client-side Cache & Prefetching', allocation: '100%' },
      { role: 'Android Engineer', name: 'Joon-ho Park', level: 'Senior Android', focus: 'Jetpack Compose Smooth Scrolling', allocation: '100%' },
      { role: 'QA / SDET', name: 'Amina Diallo', level: 'Staff SDET', focus: 'Shadow Traffic & Accuracy Regression', allocation: '100%' },
      { role: 'UX/UI Designer', name: 'Chloe Kim', level: 'Senior Designer', focus: 'Feed Micro-interactions', allocation: '50% embedded' }
    ]
  },
  {
    id: 'squad-explore-search',
    name: 'Squad Beta: Explore & Search',
    tribeId: 'tribe-feed',
    mission: 'Deliver dense vector semantic search, multimodal retrieval, and real-time trending topic hashtags.',
    productOwner: 'Priya Patel',
    scrumMaster: 'Marcus Vance',
    isSmShared: true,
    sharedSmWith: 'Squad Alpha',
    health: { velocity: 48, goalCompletion: 93, happiness: 4.6, activeBlockers: 0 },
    keyTech: ['Milvus Vector DB', 'Elasticsearch', 'Python', 'React Web', 'SwiftUI'],
    crossDependencies: ['Media Metadata (Tribe Media)', 'Content Ingestion (Squad Gamma)'],
    members: [
      { role: 'Product Owner', name: 'Priya Patel', level: 'Principal PO', focus: 'Search Intent & Discovery Funnels', allocation: '100%' },
      { role: 'Scrum Master', name: 'Marcus Vance', level: 'Senior SM', focus: 'Dual-Squad Coaching', allocation: '50% shared' },
      { role: 'Search Architect', name: 'Lars Nygard', level: 'Staff Eng', focus: 'Approximate Nearest Neighbor (ANN)', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Fatima Zahra', level: 'Senior Backend', focus: 'Elasticsearch Query Optimization', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Wei Zhang', level: 'Mid Backend', focus: 'Trend Indexing Daemons', allocation: '100%' },
      { role: 'Frontend Engineer', name: 'Tom Higgins', level: 'Senior Web', focus: 'Instant Search Autocomplete UI', allocation: '100%' },
      { role: 'Mobile Engineer', name: 'Luisa Fernandez', level: 'Senior Mobile', focus: 'Cross-platform Mobile Search UI', allocation: '100%' },
      { role: 'QA Automation', name: 'Kenji Sato', level: 'Mid QA', focus: 'Relevance Benchmark Test Suite', allocation: '100%' },
      { role: 'UX Designer', name: 'Chloe Kim', level: 'Senior Designer', focus: 'Explore Grid Discovery UI', allocation: '50% embedded' }
    ]
  },
  {
    id: 'squad-social-graph',
    name: 'Squad Gamma: Social Graph & Ingestion',
    tribeId: 'tribe-feed',
    mission: 'Maintain the bi-directional 12B-edge social follow graph and high-throughput fanout distribution.',
    productOwner: 'Liam O\'Connor',
    scrumMaster: 'Carlos Mendez',
    isSmShared: false,
    health: { velocity: 51, goalCompletion: 95, happiness: 4.7, activeBlockers: 1 },
    keyTech: ['Cassandra', 'Neo4j Custom', 'Go', 'Kafka', 'RocksDB'],
    crossDependencies: ['Cloud Storage (Tribe Platform)', 'Identity Engine (Tribe Identity)'],
    members: [
      { role: 'Product Owner', name: 'Liam O\'Connor', level: 'Senior PO', focus: 'Graph Traversal & Creator Networks', allocation: '100%' },
      { role: 'Scrum Master', name: 'Carlos Mendez', level: 'Lead SM', focus: 'Capacity Planning & Ceremony Quality', allocation: '100%' },
      { role: 'Distributed Systems Eng', name: 'Naveen Kumar', level: 'Principal Eng', focus: 'Graph Partitioning & Sharding', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Rachel Goldberg', level: 'Senior Backend', focus: 'High-fanout Message Dispatcher', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Hassan Idris', level: 'Senior Backend', focus: 'Cassandra Read Repair Protocols', allocation: '100%' },
      { role: 'DevOps / SRE', name: 'Oleg Smirnov', level: 'Staff SRE', focus: 'Distributed Graph Failover Drills', allocation: '100%' },
      { role: 'QA / SDET', name: 'Jessica Taylor', level: 'Mid QA', focus: 'Edge Integrity Contract Tests', allocation: '100%' },
      { role: 'Data Engineer', name: 'Arjun Das', level: 'Senior Data Eng', focus: 'Graph Analytics & Closeness Scoring', allocation: '100%' }
    ]
  },
  {
    id: 'squad-relevance-streaming',
    name: 'Squad Delta: Real-Time Relevance',
    tribeId: 'tribe-feed',
    mission: 'Process clickstream and engagement signals within 200ms to immediately adapt user session relevance.',
    productOwner: 'Zoe Washington',
    scrumMaster: 'Carlos Mendez',
    isSmShared: true,
    sharedSmWith: 'Squad Gamma',
    health: { velocity: 47, goalCompletion: 92, happiness: 4.5, activeBlockers: 0 },
    keyTech: ['Apache Flink', 'Kafka', 'Feast Feature Store', 'Python', 'Redis'],
    crossDependencies: ['Event Bus (Squad Kafka)', 'Home Feed (Squad Alpha)'],
    members: [
      { role: 'Product Owner', name: 'Zoe Washington', level: 'Staff PO', focus: 'Session Contextualization & Retargeting', allocation: '100%' },
      { role: 'Scrum Master', name: 'Carlos Mendez', level: 'Lead SM', focus: 'Impediment Tracking & SoS Liaison', allocation: '50% shared' },
      { role: 'Streaming Lead', name: 'Stefan Bauer', level: 'Staff Eng', focus: 'Flink Stateful Stream Processing', allocation: '100%' },
      { role: 'Data Engineer', name: 'Pooja Reddy', level: 'Senior Data', focus: 'Feast Feature Transformation Jobs', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Marco Silva', level: 'Senior Backend', focus: 'Session Signal Aggregation Service', allocation: '100%' },
      { role: 'SDET Engineer', name: 'Tanya Petrova', level: 'Senior QA', focus: 'Stream Replay Verification', allocation: '100%' },
      { role: 'ML Engineer', name: 'Chen Wei', level: 'Mid ML', focus: 'Contextual Multi-Armed Bandits', allocation: '100%' }
    ]
  },

  // Messaging & Real-Time Tribe
  {
    id: 'squad-direct-chat',
    name: 'Squad Epsilon: 1:1 & Group Chat',
    tribeId: 'tribe-messaging',
    mission: 'Build reliable end-to-end encrypted direct messaging and large community channels with instant local persistence.',
    productOwner: 'Amir Benali',
    scrumMaster: 'Leila Farhan',
    isSmShared: false,
    health: { velocity: 52, goalCompletion: 97, happiness: 4.8, activeBlockers: 0 },
    keyTech: ['Signal Protocol E2EE', 'Go WebSocket Gateway', 'SQLite Client', 'SwiftUI', 'Kotlin'],
    crossDependencies: ['Presence Engine (Squad Eta)', 'Push Notifications (Squad Zeta)'],
    members: [
      { role: 'Product Owner', name: 'Amir Benali', level: 'Senior PO', focus: 'Chat UX & Privacy Encryption Specs', allocation: '100%' },
      { role: 'Scrum Master', name: 'Leila Farhan', level: 'Senior SM', focus: 'Cross-Squad Dependency Mediation', allocation: '100%' },
      { role: 'Lead Cryptographer', name: 'Gavin Ross', level: 'Staff Eng', focus: 'Double Ratchet Protocol Implementation', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Anika Jansen', level: 'Senior Backend', focus: 'WebSocket Scalable Gateway (1M Conn)', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Hugo Becker', level: 'Mid Backend', focus: 'Message Queue & Sync Server', allocation: '100%' },
      { role: 'iOS Engineer', name: 'Camilla Valente', level: 'Senior iOS', focus: 'CoreData / SQLite Sync Engine', allocation: '100%' },
      { role: 'Android Engineer', name: 'Dante Moretti', level: 'Senior Android', focus: 'Room Database & Offline Queue', allocation: '100%' },
      { role: 'SDET', name: 'Olga Kravitz', level: 'Senior SDET', focus: 'Message Delivery Race Condition Tests', allocation: '100%' },
      { role: 'Product Designer', name: 'Julian Vance', level: 'Senior UX', focus: 'Rich Message Composer UI', allocation: '50% embedded' }
    ]
  },
  {
    id: 'squad-push-dispatch',
    name: 'Squad Zeta: Notifications & Dispatch',
    tribeId: 'tribe-messaging',
    mission: 'Dispatch multi-channel push notifications, badging, and intelligent digest aggregation without spamming users.',
    productOwner: 'Clara Oswald',
    scrumMaster: 'Leila Farhan',
    isSmShared: true,
    sharedSmWith: 'Squad Epsilon',
    health: { velocity: 45, goalCompletion: 94, happiness: 4.6, activeBlockers: 1 },
    keyTech: ['Apple APNS', 'Google FCM', 'Rust Microservices', 'Kafka', 'PostgreSQL'],
    crossDependencies: ['User Privacy Rules (Tribe Identity)', 'Observability (Tribe Platform)'],
    members: [
      { role: 'Product Owner', name: 'Clara Oswald', level: 'Staff PO', focus: 'Notification Relevance & Frequency Capping', allocation: '100%' },
      { role: 'Scrum Master', name: 'Leila Farhan', level: 'Senior SM', focus: 'Sprint Predictability & Retrospectives', allocation: '50% shared' },
      { role: 'Backend Engineer', name: 'Jonas Lind', level: 'Staff Backend', focus: 'Rust High-Throughput APNS/FCM Client', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Mira Nair', level: 'Senior Backend', focus: 'Digest Batching & Frequency Filters', allocation: '100%' },
      { role: 'Mobile Engineer', name: 'Koji Tanaka', level: 'Senior Mobile', focus: 'Notification Badging & Interactive Actions', allocation: '100%' },
      { role: 'SRE / DevOps', name: 'Emre Demir', level: 'Senior SRE', focus: 'Provider Rate Limiting & Queue Health', allocation: '100%' },
      { role: 'QA Automation', name: 'Sarah Al-Sabah', level: 'Mid QA', focus: 'Multi-device Push Simulation Suite', allocation: '100%' }
    ]
  },
  {
    id: 'squad-presence-ephemeral',
    name: 'Squad Eta: Presence & Real-Time State',
    tribeId: 'tribe-messaging',
    mission: 'Manage online presence, live typing indicators, and ephemeral read receipts with sub-50ms latency.',
    productOwner: 'Tobias Meyer',
    scrumMaster: 'Aaron Bradley',
    isSmShared: false,
    health: { velocity: 49, goalCompletion: 95, happiness: 4.7, activeBlockers: 0 },
    keyTech: ['Redis Enterprise Cluster', 'Go', 'WebSockets', 'Protobuf'],
    crossDependencies: ['Direct Chat (Squad Epsilon)', 'Cloud Mesh (Squad Phi)'],
    members: [
      { role: 'Product Owner', name: 'Tobias Meyer', level: 'Senior PO', focus: 'Presence Privacy & Activity Status Rules', allocation: '100%' },
      { role: 'Scrum Master', name: 'Aaron Bradley', level: 'Senior SM', focus: 'SoS Escalation & Kanban Metrics', allocation: '100%' },
      { role: 'Principal Architect', name: 'Rami Haddad', level: 'Principal Eng', focus: 'Redis Ephemeral State Partitioning', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Chloe Martin', level: 'Senior Backend', focus: 'Heartbeat Protocol & Dead Man Switches', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Felix Weber', level: 'Mid Backend', focus: 'Typing State Rate Limiting', allocation: '100%' },
      { role: 'Mobile Specialist', name: 'Ines Cruz', level: 'Senior Mobile', focus: 'Low-power Background Sockets', allocation: '100%' },
      { role: 'SDET', name: 'Viktor Nemec', level: 'Senior QA', focus: 'High-concurrency Load Testing (Locust)', allocation: '100%' }
    ]
  },
  {
    id: 'squad-audio-video-rtc',
    name: 'Squad Theta: Voice & Video Calling',
    tribeId: 'tribe-messaging',
    mission: 'Provide crystal-clear 1:1 and group audio/video calling using adaptive WebRTC Selective Forwarding Units (SFUs).',
    productOwner: 'Siddharth Rao',
    scrumMaster: 'Aaron Bradley',
    isSmShared: true,
    sharedSmWith: 'Squad Eta',
    health: { velocity: 46, goalCompletion: 91, happiness: 4.4, activeBlockers: 1 },
    keyTech: ['WebRTC', 'LiveKit / Mediasoup SFU', 'C++ / Metal', 'Swift', 'Kotlin Audio HAL'],
    crossDependencies: ['Edge CDN (Squad Pi)', 'Microservices Mesh (Squad Phi)'],
    members: [
      { role: 'Product Owner', name: 'Siddharth Rao', level: 'Staff PO', focus: 'Call Quality SLAs & Creator Audio Rooms', allocation: '100%' },
      { role: 'Scrum Master', name: 'Aaron Bradley', level: 'Senior SM', focus: 'PI Planning Alignment & Cross-Tribe Sync', allocation: '50% shared' },
      { role: 'WebRTC Specialist', name: 'Alexandre Roy', level: 'Staff Media', focus: 'SFU Media Relay & Bandwidth Probing', allocation: '100%' },
      { role: 'Mobile Media Eng', name: 'Ekaterina Romanova', level: 'Senior Mobile', focus: 'Hardware Echo Cancellation & Codecs', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Daniel Brooks', level: 'Senior Backend', focus: 'Call Signaling & ICE/STUN/TURN Fleet', allocation: '100%' },
      { role: 'SRE Specialist', name: 'Yusuf Kaplan', level: 'Senior SRE', focus: 'Global UDP Packet Loss Monitoring', allocation: '100%' },
      { role: 'QA Engineer', name: 'Toni Kroos-Nielsen', level: 'Mid QA', focus: 'Jitter & Packet Drop Matrix Testing', allocation: '100%' }
    ]
  },

  // Profile & Identity Tribe
  {
    id: 'squad-auth-passkeys',
    name: 'Squad Iota: Authentication & Passkeys',
    tribeId: 'tribe-identity',
    mission: 'Deliver passwordless biometric WebAuthn / Passkeys, multi-factor authentication, and zero-trust session management.',
    productOwner: 'Miriam Stern',
    scrumMaster: 'Hannah Morris',
    isSmShared: false,
    health: { velocity: 50, goalCompletion: 98, happiness: 4.9, activeBlockers: 0 },
    keyTech: ['WebAuthn FIDO2', 'OAuth 2.1 / OIDC', 'Go', 'Keychain / Keystore API', 'Redis'],
    crossDependencies: ['Trust & Safety (Squad Mu)', 'Platform API Gateway (Squad Phi)'],
    members: [
      { role: 'Product Owner', name: 'Miriam Stern', level: 'Principal PO', focus: 'Frictionless Login & Security Standards', allocation: '100%' },
      { role: 'Scrum Master', name: 'Hannah Morris', level: 'Lead SM', focus: 'Continuous Improvement & Team Morale', allocation: '100%' },
      { role: 'Auth Architect', name: 'Patrick O\'Brian', level: 'Staff Security', focus: 'FIDO2 Passkey Synchronized Creds', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Fatima Al-Hassan', level: 'Senior Backend', focus: 'Cryptographic Token Revocation', allocation: '100%' },
      { role: 'Frontend Engineer', name: 'Lucas Meyer', level: 'Senior Web', focus: 'Passkey Autofill & Browser Handshake', allocation: '100%' },
      { role: 'iOS Engineer', name: 'Beatrice Rossi', level: 'Senior iOS', focus: 'ASAuthorizationController Integration', allocation: '100%' },
      { role: 'Android Engineer', name: 'Devon Miller', level: 'Senior Android', focus: 'Credential Manager Jetpack API', allocation: '100%' },
      { role: 'SDET', name: 'Anil Gupta', level: 'Staff SDET', focus: 'Security Fuzzing & Token Expiry Suites', allocation: '100%' }
    ]
  },
  {
    id: 'squad-profile-showcase',
    name: 'Squad Kappa: Profile & Creator Badging',
    tribeId: 'tribe-identity',
    mission: 'Power interactive creator portfolio profiles, verified organizational badges, and customizable link-in-bio hubs.',
    productOwner: 'Zachary Cole',
    scrumMaster: 'Hannah Morris',
    isSmShared: true,
    sharedSmWith: 'Squad Iota',
    health: { velocity: 47, goalCompletion: 94, happiness: 4.6, activeBlockers: 0 },
    keyTech: ['React 19', 'GraphQL Federation', 'Go', 'SwiftUI', 'Jetpack Compose'],
    crossDependencies: ['Creator Monetization (Squad Sigma)', 'Media Storage (Tribe Media)'],
    members: [
      { role: 'Product Owner', name: 'Zachary Cole', level: 'Senior PO', focus: 'Creator Showcases & Identity Customization', allocation: '100%' },
      { role: 'Scrum Master', name: 'Hannah Morris', level: 'Lead SM', focus: 'Scrum of Scrums Sync & Mentorship', allocation: '50% shared' },
      { role: 'Frontend Lead', name: 'Evelyn Wright', level: 'Staff Web', focus: 'Micro-Frontend Profile Container', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Rajesh Patel', level: 'Senior Backend', focus: 'GraphQL Profile Aggregation Service', allocation: '100%' },
      { role: 'iOS Engineer', name: 'Matteo Bellini', level: 'Senior iOS', focus: 'Smooth Profile Grid & Sticky Headers', allocation: '100%' },
      { role: 'Android Engineer', name: 'Lin Chen', level: 'Mid Android', focus: 'Motion Layout Profile Animations', allocation: '100%' },
      { role: 'Lead UX Designer', name: 'Katarina Novak', level: 'Staff UX', focus: 'Profile Theming & Typography Scales', allocation: '50% embedded' },
      { role: 'QA Engineer', name: 'Tomasz Kowalski', level: 'Mid QA', focus: 'Visual Regression Snapshot Testing', allocation: '100%' }
    ]
  },
  {
    id: 'squad-privacy-governance',
    name: 'Squad Lambda: Privacy & Data Governance',
    tribeId: 'tribe-identity',
    mission: 'Enforce granular audience permissions, GDPR Right-to-be-Forgotten pipelines, and audit compliance logging.',
    productOwner: 'Helena Lind',
    scrumMaster: 'Brendan Kelly',
    isSmShared: false,
    health: { velocity: 44, goalCompletion: 96, happiness: 4.7, activeBlockers: 0 },
    keyTech: ['Apache Iceberg', 'OPA (Open Policy Agent)', 'PostgreSQL', 'Go', 'Protobuf'],
    crossDependencies: ['Lakehouse Data (Squad Chi)', 'Search Indexing (Squad Beta)'],
    members: [
      { role: 'Product Owner', name: 'Helena Lind', level: 'Staff PO', focus: 'Global Compliance (GDPR, CCPA, CPRA)', allocation: '100%' },
      { role: 'Scrum Master', name: 'Brendan Kelly', level: 'Senior SM', focus: 'Compliance Deadlines & Team Focus', allocation: '100%' },
      { role: 'Policy Engineer', name: 'Arthur Pendelton', level: 'Staff Eng', focus: 'OPA Microservice Policy Enforcement', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Mei-Ling Zhou', level: 'Senior Backend', focus: 'Distributed Data Deletion Orchestrator', allocation: '100%' },
      { role: 'Data Platform Eng', name: 'Jan Van Dijk', level: 'Senior Data', focus: 'User PII Anonymization Workflows', allocation: '100%' },
      { role: 'Compliance SDET', name: 'Aisha Al-Nuaimi', level: 'Senior QA', focus: 'Data Leakage Automated Scans', allocation: '100%' },
      { role: 'Security Specialist', name: 'Sven Lindgren', level: 'Staff Security', focus: 'Cryptographic Audit Trail Hashing', allocation: '100%' }
    ]
  },
  {
    id: 'squad-trust-antiabuse',
    name: 'Squad Mu: Trust, Safety & Anti-Abuse',
    tribeId: 'tribe-identity',
    mission: 'Protect 50M+ community members against coordinated bot raids, account takeover attacks, and illicit spam campaigns.',
    productOwner: 'Darius Vance',
    scrumMaster: 'Brendan Kelly',
    isSmShared: true,
    sharedSmWith: 'Squad Lambda',
    health: { velocity: 49, goalCompletion: 93, happiness: 4.5, activeBlockers: 1 },
    keyTech: ['Graph Neural Networks', 'PyTorch', 'Rust Rate Limiter', 'Kafka', 'Redis'],
    crossDependencies: ['Streaming Analytics (Squad Delta)', 'Auth Engine (Squad Iota)'],
    members: [
      { role: 'Product Owner', name: 'Darius Vance', level: 'Principal PO', focus: 'Anti-Abuse Heuristics & Trust Policies', allocation: '100%' },
      { role: 'Scrum Master', name: 'Brendan Kelly', level: 'Senior SM', focus: 'Incident Post-Mortems & Agile Health', allocation: '50% shared' },
      { role: 'ML Security Lead', name: 'Dr. Ilona Szabo', level: 'Staff ML', focus: 'Bot Cluster Detection GNNs', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Tarek Mansour', level: 'Senior Backend', focus: 'Sub-millisecond Edge Rate Limiter', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Olga Fedorova', level: 'Mid Backend', focus: 'Account Velocity Scorer', allocation: '100%' },
      { role: 'Data Scientist', name: 'Marcus Sterling', level: 'Senior Data', focus: 'Adversarial Attack Vector Modeling', allocation: '100%' },
      { role: 'SDET', name: 'Gabriel Santos', level: 'Senior QA', focus: 'Bot Simulation & Bypass Stress Testing', allocation: '100%' }
    ]
  },

  // Media & Content Tribe
  {
    id: 'squad-reels-player',
    name: 'Squad Nu: Short-Form Video & Reels',
    tribeId: 'tribe-media',
    mission: 'Deliver sub-second start times, frame-accurate looping, and ultra-smooth adaptive HLS video playback.',
    productOwner: 'Rochelle Blanc',
    scrumMaster: 'Derrick Hall',
    isSmShared: false,
    health: { velocity: 53, goalCompletion: 97, happiness: 4.8, activeBlockers: 0 },
    keyTech: ['AVPlayer / ExoPlayer', 'WebCodecs', 'Metal / Vulkan', 'HLS / DASH', 'C++'],
    crossDependencies: ['Home Feed (Squad Alpha)', 'Edge CDN (Squad Pi)'],
    members: [
      { role: 'Product Owner', name: 'Rochelle Blanc', level: 'Staff PO', focus: 'Video Retention & Player Performance', allocation: '100%' },
      { role: 'Scrum Master', name: 'Derrick Hall', level: 'Senior SM', focus: 'Sprint Pacing & Hardware Lab Access', allocation: '100%' },
      { role: 'Video Engine Lead', name: 'Christian Dupont', level: 'Principal Eng', focus: 'Zero-Copy GPU Frame Rendering', allocation: '100%' },
      { role: 'iOS Video Engineer', name: 'Valentina Romano', level: 'Senior iOS', focus: 'AVSampleBufferDisplayLayer Tuning', allocation: '100%' },
      { role: 'Android Video Eng', name: 'Haruki Murakami-Lee', level: 'Senior Android', focus: 'Media3 / ExoPlayer Chunk Prefetching', allocation: '100%' },
      { role: 'Web Player Engineer', name: 'Luka Jovic', level: 'Senior Web', focus: 'MSE / WebCodecs Fallback Engine', allocation: '100%' },
      { role: 'QA Video Lab', name: 'Nadezhda Popova', level: 'Staff SDET', focus: 'Frame Drop & Jitter Automated Rigs', allocation: '100%' },
      { role: 'UI Motion Designer', name: 'Maya Sterling', level: 'Senior Designer', focus: 'Gestural Video Scrubbing Micro-UX', allocation: '50% embedded' }
    ]
  },
  {
    id: 'squad-camera-creative',
    name: 'Squad Xi: Camera & Creative Tools',
    tribeId: 'tribe-media',
    mission: 'Empower creators with real-time AR face filters, audio track synchronizers, and high-performance stickers.',
    productOwner: 'Tobias Falke',
    scrumMaster: 'Derrick Hall',
    isSmShared: true,
    sharedSmWith: 'Squad Nu',
    health: { velocity: 46, goalCompletion: 92, happiness: 4.5, activeBlockers: 1 },
    keyTech: ['Metal Shaders', 'OpenGL ES', 'ARKit / ARCore', 'WebAssembly', 'C++'],
    crossDependencies: ['Upload Pipeline (Squad Omicron)', 'Audio RTC (Squad Theta)'],
    members: [
      { role: 'Product Owner', name: 'Tobias Falke', level: 'Senior PO', focus: 'Creator Tools & Interactive AR Features', allocation: '100%' },
      { role: 'Scrum Master', name: 'Derrick Hall', level: 'Senior SM', focus: 'Cross-Squad Hardware Sync', allocation: '50% shared' },
      { role: 'Computer Vision Lead', name: 'Dr. Celine Dionne', level: 'Staff CV', focus: 'Real-time Facial Mesh Landmark Tracker', allocation: '100%' },
      { role: 'iOS Graphics Eng', name: 'Matteo Bernardi', level: 'Senior iOS', focus: 'Metal Shader Pipeline & Camera Capture', allocation: '100%' },
      { role: 'Android Graphics Eng', name: 'Jin-Woo Sung', level: 'Senior Android', focus: 'CameraX Dual-Stream Pipeline', allocation: '100%' },
      { role: 'Audio DSP Engineer', name: 'Liam Gallagher', level: 'Senior Audio Eng', focus: 'Beat Detection & Audio Waveform Editor', allocation: '100%' },
      { role: 'Creative QA', name: 'Farah Qasim', level: 'Mid QA', focus: 'Filter Compatibility Across 400+ Devices', allocation: '100%' }
    ]
  },
  {
    id: 'squad-transcode-pipeline',
    name: 'Squad Omicron: Media Upload & Processing',
    tribeId: 'tribe-media',
    mission: 'Ingest and transcode 15M daily video clips into AV1, VP9, and HEVC bitrates with intelligent visual quality (VMAF).',
    productOwner: 'Andrei Volkov',
    scrumMaster: 'Seraphina Cruz',
    isSmShared: false,
    health: { velocity: 51, goalCompletion: 96, happiness: 4.7, activeBlockers: 0 },
    keyTech: ['FFmpeg Custom Fork', 'Go Workers', 'AWS S3 Chunk Ingest', 'SVT-AV1', 'Kubernetes GPU'],
    crossDependencies: ['Kubernetes Cluster (Squad Phi)', 'Edge CDN (Squad Pi)'],
    members: [
      { role: 'Product Owner', name: 'Andrei Volkov', level: 'Staff PO', focus: 'Processing Latency & Cloud Egress Costs', allocation: '100%' },
      { role: 'Scrum Master', name: 'Seraphina Cruz', level: 'Senior SM', focus: 'Kanban WIP Limits & Blocker Escalation', allocation: '100%' },
      { role: 'Transcoding Architect', name: 'Magnus Carlsen-Borg', level: 'Principal Eng', focus: 'Per-Title VMAF Optimization Engine', allocation: '100%' },
      { role: 'Backend Ingest Eng', name: 'Priya Sharma', level: 'Senior Backend', focus: 'Resumable Multi-part Chunk Gateway', allocation: '100%' },
      { role: 'Distributed Systems Eng', name: 'Leo Castillo', level: 'Senior Backend', focus: 'GPU Worker Autoscaling Fleet', allocation: '100%' },
      { role: 'SRE Specialist', name: 'Irina Morozova', level: 'Senior SRE', focus: 'Spot GPU Instance Interruption Resilience', allocation: '100%' },
      { role: 'SDET', name: 'Chao Wang', level: 'Mid QA', focus: 'Corrupt File Fuzzing & Quality Scorer', allocation: '100%' }
    ]
  },
  {
    id: 'squad-edge-cdn',
    name: 'Squad Pi: Edge CDN & Storage Optimization',
    tribeId: 'tribe-media',
    mission: 'Route media requests across multi-CDN architectures with dynamic Origin Shielding and sub-30ms first-byte latency.',
    productOwner: 'Nia Roberts',
    scrumMaster: 'Seraphina Cruz',
    isSmShared: true,
    sharedSmWith: 'Squad Omicron',
    health: { velocity: 47, goalCompletion: 94, happiness: 4.6, activeBlockers: 0 },
    keyTech: ['Cloudflare Workers', 'Fastly VCL', 'Rust Edge Functions', 'Origin Shield Cache', 'WebP/AVIF'],
    crossDependencies: ['DNS Architecture (Squad Phi)', 'Ad Delivery (Squad Rho)'],
    members: [
      { role: 'Product Owner', name: 'Nia Roberts', level: 'Senior PO', focus: 'Global Cache Hit Ratio (98.5%) & Egress ROI', allocation: '100%' },
      { role: 'Scrum Master', name: 'Seraphina Cruz', level: 'Senior SM', focus: 'Agile Metrics & Retros', allocation: '50% shared' },
      { role: 'Edge Network Lead', name: 'Benoit Blanc', level: 'Staff Systems', focus: 'Multi-CDN Real-Time Traffic Steering', allocation: '100%' },
      { role: 'Edge Compute Eng', name: 'Ananya Roy', level: 'Senior Edge Eng', focus: 'Dynamic On-The-Fly Image Resizer', allocation: '100%' },
      { role: 'SRE / Traffic', name: 'Einar Gunnarsson', level: 'Senior SRE', focus: 'Anycast Routing & DDoS Mitigation', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Tariq Ziad', level: 'Mid Backend', focus: 'Origin Shield Tiered Caching Layer', allocation: '100%' },
      { role: 'QA Performance', name: 'Elena Costa', level: 'Senior SDET', focus: 'Worldwide RUM (Real User Metrics) Probes', allocation: '100%' }
    ]
  },

  // Growth & Monetization Tribe
  {
    id: 'squad-ad-auction',
    name: 'Squad Rho: Ad Auction & Placement Engine',
    tribeId: 'tribe-growth',
    mission: 'Conduct real-time generalized second-price auctions within 25ms to maximize advertiser ROI and viewer satisfaction.',
    productOwner: 'Julian Sterling',
    scrumMaster: 'Kareem Washington',
    isSmShared: false,
    health: { velocity: 55, goalCompletion: 97, happiness: 4.8, activeBlockers: 0 },
    keyTech: ['C++ RTB Engine', 'Go', 'Redis Memory Grid', 'Kafka', 'Bayesian Bid Pacing'],
    crossDependencies: ['Feed Ranking (Squad Alpha)', 'Privacy Permissions (Squad Lambda)'],
    members: [
      { role: 'Product Owner', name: 'Julian Sterling', level: 'Principal PO', focus: 'eCPM Yield & Ad Load Balance', allocation: '100%' },
      { role: 'Scrum Master', name: 'Kareem Washington', level: 'Lead SM', focus: 'High-Stakes Sprint Alignment', allocation: '100%' },
      { role: 'Auction Architect', name: 'Dr. Felix Baum', level: 'Staff ML / Econ', focus: 'Second-Price Real-Time Bidding Protocol', allocation: '100%' },
      { role: 'Low-Latency C++ Eng', name: 'Sergei Lebedev', level: 'Staff C++', focus: '15ms P99 Memory Grid Auction Server', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Maya Lin-Torres', level: 'Senior Backend', focus: 'Advertiser Budget Pacing & Frequency Cap', allocation: '100%' },
      { role: 'Data Engineer', name: 'Oluwaseun Adeleke', level: 'Senior Data', focus: 'Impression & Click Attribution Ledger', allocation: '100%' },
      { role: 'Full-Stack Eng', name: 'Claire Martin', level: 'Senior Web', focus: 'Advertiser Campaign Portal UI', allocation: '100%' },
      { role: 'SDET', name: 'Artem Sokolov', level: 'Senior QA', focus: 'Financial Auditing Reconciler Tests', allocation: '100%' }
    ]
  },
  {
    id: 'squad-creator-economy',
    name: 'Squad Sigma: Creator Economy & Payouts',
    tribeId: 'tribe-growth',
    mission: 'Power creator subscriptions, micro-tipping, virtual gifts, and PCI-compliant global payout ledgering.',
    productOwner: 'Monique Larsson',
    scrumMaster: 'Kareem Washington',
    isSmShared: true,
    sharedSmWith: 'Squad Rho',
    health: { velocity: 47, goalCompletion: 95, happiness: 4.6, activeBlockers: 0 },
    keyTech: ['Stripe Treasury API', 'Double-Entry SQL Ledger', 'Go', 'React Admin', 'Vault'],
    crossDependencies: ['Identity Verification (Squad Iota)', 'Chat Gifts (Squad Epsilon)'],
    members: [
      { role: 'Product Owner', name: 'Monique Larsson', level: 'Staff PO', focus: 'Creator Monetization & Global Remittance', allocation: '100%' },
      { role: 'Scrum Master', name: 'Kareem Washington', level: 'Lead SM', focus: 'PI Cadence & Impediment Removal', allocation: '50% shared' },
      { role: 'FinTech Lead', name: 'Gabriel Dubois', level: 'Staff Backend', focus: 'Immutable Double-Entry Ledger Engine', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Hana Takahashi', level: 'Senior Backend', focus: 'Multi-Currency Conversion & Payouts', allocation: '100%' },
      { role: 'Mobile Engineer', name: 'Diego Alvarez', level: 'Senior Mobile', focus: 'In-App Purchase (IAP) Store Handshake', allocation: '100%' },
      { role: 'Frontend Engineer', name: 'Kylie Brooks', level: 'Mid Web', focus: 'Creator Earnings & Analytics Dashboard', allocation: '100%' },
      { role: 'Security / SDET', name: 'Rohan Verma', level: 'Senior QA', focus: 'PCI-DSS & Financial Integrity Invariants', allocation: '100%' }
    ]
  },
  {
    id: 'squad-bayesian-ab',
    name: 'Squad Tau: Experimentation & Feature Flags',
    tribeId: 'tribe-growth',
    mission: 'Provide an enterprise Bayesian experimentation SDK and dynamic feature flagging infrastructure across all 24 squads.',
    productOwner: 'Oliver Vance',
    scrumMaster: 'Valerie Dupuis',
    isSmShared: false,
    health: { velocity: 49, goalCompletion: 96, happiness: 4.7, activeBlockers: 0 },
    keyTech: ['Rust Core SDK', 'Bayesian Stats Engine', 'Go Flag Evaluator', 'React', 'Statsmodels'],
    crossDependencies: ['All Squads (Consumer base)', 'Kafka Lakehouse (Squad Chi)'],
    members: [
      { role: 'Product Owner', name: 'Oliver Vance', level: 'Principal PO', focus: 'Scientific Experimentation Culture & Guardrails', allocation: '100%' },
      { role: 'Scrum Master', name: 'Valerie Dupuis', level: 'Senior SM', focus: 'Cross-Tribe Training & Release Alignment', allocation: '100%' },
      { role: 'Statistician Lead', name: 'Dr. Miriam O\'Shea', level: 'Staff Data Scientist', focus: 'Sequential Analysis & False Positive Guards', allocation: '100%' },
      { role: 'Backend / Rust Eng', name: 'Rasmus Lind', level: 'Senior Eng', focus: 'Zero-Latency Local Flag Evaluation Engine', allocation: '100%' },
      { role: 'Frontend Engineer', name: 'Chen Lu', level: 'Senior Web', focus: 'Experiment Creation & Sample Sizing UI', allocation: '100%' },
      { role: 'Mobile SDK Eng', name: 'Beatriz Silva', level: 'Senior Mobile', focus: 'Ultra-lightweight iOS/Android Flag Client', allocation: '100%' },
      { role: 'SDET', name: 'Marcus Brody', level: 'Senior QA', focus: 'Experiment Collision Automated Detection', allocation: '100%' }
    ]
  },
  {
    id: 'squad-viral-activation',
    name: 'Squad Upsilon: Viral Loops & Activation',
    tribeId: 'tribe-growth',
    mission: 'Optimize guest onboarding, contact graph discovery, dynamic deep links, and day-7 activation rates.',
    productOwner: 'Chloe Zhao',
    scrumMaster: 'Valerie Dupuis',
    isSmShared: true,
    sharedSmWith: 'Squad Tau',
    health: { velocity: 48, goalCompletion: 93, happiness: 4.6, activeBlockers: 1 },
    keyTech: ['Branch / Adjust Integration', 'Go', 'React', 'Jetpack Compose', 'SwiftUI'],
    crossDependencies: ['Social Graph (Squad Gamma)', 'Profile Showcase (Squad Kappa)'],
    members: [
      { role: 'Product Owner', name: 'Chloe Zhao', level: 'Senior PO', focus: 'D1/D7 Retention & Referral Incentives', allocation: '100%' },
      { role: 'Scrum Master', name: 'Valerie Dupuis', level: 'Senior SM', focus: 'Sprint Flow & Velocity Optimization', allocation: '50% shared' },
      { role: 'Full-Stack Lead', name: 'Arthur MacIntyre', level: 'Senior Full-Stack', focus: 'Dynamic Deep Link Routing Engine', allocation: '100%' },
      { role: 'Backend Engineer', name: 'Nadia Petrovic', level: 'Mid Backend', focus: 'Contact Book Hashing & Friend Recommender', allocation: '100%' },
      { role: 'iOS Engineer', name: 'Felipe Santos', level: 'Senior iOS', focus: 'First-Launch Onboarding Carousel Flow', allocation: '100%' },
      { role: 'Android Engineer', name: 'Zainab Qureshi', level: 'Senior Android', focus: 'Instant App & SMS Verification Autofill', allocation: '100%' },
      { role: 'UX Designer', name: 'Maya Sterling', level: 'Senior Designer', focus: 'Onboarding Micro-Copy & Social Proof', allocation: '50% embedded' },
      { role: 'QA Tester', name: 'Igor Volodin', level: 'Mid QA', focus: 'Deep Link Edge Cases Across iOS/Android', allocation: '100%' }
    ]
  },

  // Platform & Infrastructure Tribe
  {
    id: 'squad-cloud-kubernetes',
    name: 'Squad Phi: Cloud Platform & Service Mesh',
    tribeId: 'tribe-platform',
    mission: 'Operate multi-region AWS/GCP Kubernetes clusters, Istio zero-trust mTLS service mesh, and auto-scaling fleets.',
    productOwner: 'Goran Ivanisevic',
    scrumMaster: 'Deborah Chen',
    isSmShared: false,
    health: { velocity: 52, goalCompletion: 98, happiness: 4.9, activeBlockers: 0 },
    keyTech: ['Kubernetes (EKS)', 'Istio Service Mesh', 'Terraform', 'Go Operator', 'AWS/GCP'],
    crossDependencies: ['All Microservices', 'Observability (Squad Psi)'],
    members: [
      { role: 'Product Owner', name: 'Goran Ivanisevic', level: 'Principal PO', focus: 'Cloud Unit Economics & Multi-Region Resilience', allocation: '100%' },
      { role: 'Scrum Master', name: 'Deborah Chen', level: 'Lead SM', focus: 'Infrastructure Scrum & PI Architecture Tracks', allocation: '100%' },
      { role: 'Principal Cloud Architect', name: 'Svenja Mueller', level: 'Principal SRE', focus: 'Multi-Region Active-Active Topology', allocation: '100%' },
      { role: 'Kubernetes Specialist', name: 'Karthik Raman', level: 'Staff DevOps', focus: 'Custom K8s Controllers & Karpenter Pacing', allocation: '100%' },
      { role: 'Service Mesh Engineer', name: 'Taras Shevchenko', level: 'Senior Cloud', focus: 'Istio mTLS Security & Traffic Shaping', allocation: '100%' },
      { role: 'IaC Engineer', name: 'Liam Davies', level: 'Senior DevOps', focus: 'Modular Terraform Fleet & Terragrunt', allocation: '100%' },
      { role: 'SDET / Chaos', name: 'Amira Ben-Youssef', level: 'Senior SDET', focus: 'Network Partition & Node Eviction Drills', allocation: '100%' }
    ]
  },
  {
    id: 'squad-kafka-lakehouse',
    name: 'Squad Chi: Data Lakehouse & Streaming',
    tribeId: 'tribe-platform',
    mission: 'Manage high-throughput Apache Kafka event backbones and unified Apache Iceberg / Snowflake analytics lakehouse.',
    productOwner: 'Ravi Teja',
    scrumMaster: 'Deborah Chen',
    isSmShared: true,
    sharedSmWith: 'Squad Phi',
    health: { velocity: 50, goalCompletion: 95, happiness: 4.7, activeBlockers: 0 },
    keyTech: ['Apache Kafka', 'Apache Iceberg', 'dbt', 'Schema Registry', 'Trino / Snowflake'],
    crossDependencies: ['Feed Streaming (Squad Delta)', 'Ad Attribution (Squad Rho)'],
    members: [
      { role: 'Product Owner', name: 'Ravi Teja', level: 'Staff PO', focus: 'Enterprise Event Bus SLAs & Lakehouse Schema', allocation: '100%' },
      { role: 'Scrum Master', name: 'Deborah Chen', level: 'Lead SM', focus: 'Data Governance Agility & SoS Liaison', allocation: '50% shared' },
      { role: 'Kafka Specialist', name: 'Marek Wisniewski', level: 'Staff Data Eng', focus: 'Kafka Tiered Storage & Zero Data Loss', allocation: '100%' },
      { role: 'Lakehouse Architect', name: 'Elena Petrova', level: 'Senior Data Eng', focus: 'Apache Iceberg Partition Compaction', allocation: '100%' },
      { role: 'Analytics Engineer', name: 'Devon King', level: 'Senior Analytics', focus: 'Modular dbt Models for 50M+ User Metrics', allocation: '100%' },
      { role: 'Data SRE', name: 'Aaliyah Washington', level: 'Senior SRE', focus: 'Kafka Broker Failover & Lag Alerting', allocation: '100%' },
      { role: 'QA Contract Lead', name: 'Nikolai Voronov', level: 'Mid QA', focus: 'Protobuf Schema Backward Compatibility Tests', allocation: '100%' }
    ]
  },
  {
    id: 'squad-observability-sre',
    name: 'Squad Psi: Observability & Reliability',
    tribeId: 'tribe-platform',
    mission: 'Ensure end-to-end distributed tracing, metrics aggregation, incident response tooling, and chaos engineering.',
    productOwner: 'Kirsten Dahl',
    scrumMaster: 'Marcus Vance-Senior',
    isSmShared: false,
    health: { velocity: 48, goalCompletion: 97, happiness: 4.8, activeBlockers: 0 },
    keyTech: ['OpenTelemetry', 'Prometheus / VictoriaMetrics', 'Grafana Enterprise', 'PagerDuty', 'LitmusChaos'],
    crossDependencies: ['All 24 Squads', 'Cloud Mesh (Squad Phi)'],
    members: [
      { role: 'Product Owner', name: 'Kirsten Dahl', level: 'Staff PO', focus: 'Mean-Time-To-Detect (MTTD) & P99 SRE SLAs', allocation: '100%' },
      { role: 'Scrum Master', name: 'Marcus Vance-Senior', level: 'Senior SM', focus: 'Blameless Retrospective Culture', allocation: '100%' },
      { role: 'Observability Architect', name: 'Dr. Simon Wu', level: 'Principal SRE', focus: 'OTel Distributed Trace Sampling at 100K/s', allocation: '100%' },
      { role: 'Monitoring Engineer', name: 'Beata Kovacs', level: 'Senior DevOps', focus: 'High-Cardinality Prometheus Storage', allocation: '100%' },
      { role: 'Incident Automation Eng', name: 'Jamal Harris', level: 'Senior SRE', focus: 'Automated Service Runbooks & PagerDuty Ops', allocation: '100%' },
      { role: 'Chaos Engineer', name: 'Fabian Richter', level: 'Senior SRE', focus: 'Weekly Production Chaos Injection Drills', allocation: '100%' },
      { role: 'SDET', name: 'Marta Rodriguez', level: 'Mid QA', focus: 'Alert Fatigue Validation & Synthetic Checks', allocation: '100%' }
    ]
  },
  {
    id: 'squad-developer-velocity',
    name: 'Squad Omega: Developer Velocity & CI/CD',
    tribeId: 'tribe-platform',
    mission: 'Accelerate the work of 190+ engineers with remote Bazel build caches, ephemeral test environments, and 5-min PR checks.',
    productOwner: 'Alistair MacKay',
    scrumMaster: 'Marcus Vance-Senior',
    isSmShared: true,
    sharedSmWith: 'Squad Psi',
    health: { velocity: 53, goalCompletion: 96, happiness: 4.9, activeBlockers: 0 },
    keyTech: ['Bazel Remote Cache', 'GitHub Actions Enterprise', 'ArgoCD GitOps', 'Docker BuildKit', 'TypeScript'],
    crossDependencies: ['All Squads (Engineering Velocity)'],
    members: [
      { role: 'Product Owner', name: 'Alistair MacKay', level: 'Principal PO', focus: 'DORA Metrics (Deployment Freq & Lead Time)', allocation: '100%' },
      { role: 'Scrum Master', name: 'Marcus Vance-Senior', level: 'Senior SM', focus: 'Process Streamlining & Dev Joy', allocation: '50% shared' },
      { role: 'Build Systems Lead', name: 'Lars Westermark', level: 'Staff Eng', focus: 'Remote Bazel Build Cache Cluster', allocation: '100%' },
      { role: 'GitOps Engineer', name: 'Sunita Patel', level: 'Senior DevOps', focus: 'ArgoCD Progressive Canary Deployments', allocation: '100%' },
      { role: 'Tooling Engineer', name: 'Carlos Mendoza Jr.', level: 'Senior Web', focus: 'CLI Developer Dashboard & Staging Spin-up', allocation: '100%' },
      { role: 'Infrastructure Eng', name: 'Emil Lindholm', level: 'Mid DevOps', focus: 'Ephemeral Kubernetes PR Environments', allocation: '100%' },
      { role: 'QA Systems Eng', name: 'Zhi-Ming Zhao', level: 'Senior QA', focus: 'Automated Smoke Tests & Fast-Fail Gates', allocation: '100%' }
    ]
  }
];

export const SCALING_ROLES = {
  chiefPO: {
    title: 'Chief Product Owner (Chief PO)',
    name: 'Dr. Sarah Chen',
    roleDesc: 'Head of Global Product Strategy',
    responsibilities: [
      'Unifies the 50M+ user platform vision into a single prioritised Global Product Backlog.',
      'Aligns the 6 Tribe Product Owners weekly, preventing conflicting initiatives and cannibalized metrics.',
      'Translates board and business OKRs into strategic Program Increment (PI) objectives every 10 weeks.',
      'Arbitrates cross-tribe scope disputes and makes final executive call on feature prioritization.'
    ]
  },
  scrumOfScrums: {
    title: 'Scrum of Scrums (SoS)',
    frequency: 'Mon / Wed / Fri at 11:00 AM (30 min)',
    participants: '24 Squad Representatives (Rotating SM or Staff Tech Lead) + Release Train Engineer',
    agenda: [
      '1. What cross-squad dependencies did my team complete since the last sync?',
      '2. What will my squad release next that another team relies on?',
      '3. What blockers or API impedance currently impede our sprint goal that we cannot solve internally?',
      '4. Are any architectural or contract drifts putting the Program Increment at risk?'
    ],
    mandate: 'Horizontal coordination layer resolving 85%+ of inter-squad blockers within 24 hours without leadership intervention.'
  },
  releaseTrainEngineer: {
    title: 'Release Train Engineer (RTE) / Agile Coach',
    name: 'David Kalu',
    roleDesc: 'Head of Agile Operations & Scaling Architecture',
    responsibilities: [
      'Serves as the master facilitator for the 24-squad Scrum of Scrums synchronization.',
      'Mentors and coaches the 12 Scrum Masters across the organization on lean-agile flow.',
      'Orchestrates the 2-day quarterly Program Increment (PI) planning sessions across all 6 tribes.',
      'Maintains the Live Cross-Team Dependency Board and escalates chronic impediments directly to the EAT.'
    ]
  },
  executiveActionTeam: {
    title: 'Executive Action Team (EAT)',
    leaders: [
      { name: 'Rachel Torres', role: 'VP of Engineering' },
      { name: 'Michael Sterling', role: 'VP of Product' },
      { name: 'Aria Lin', role: 'Head of Design & Research' }
    ],
    responsibilities: [
      'Serves as the organizational supreme court: resolves cross-tribe blockers that the SoS cannot fix within 24h.',
      'Approves major architecture shifts, significant vendor contracts, and cloud infrastructure budget adjustments.',
      'Protects engineering autonomy by eliminating administrative friction, organizational silos, and political red tape.',
      'Maintains the Enterprise Agile Policy, ensuring consistent Definition of Done and Quality standards across web and mobile.'
    ]
  }
};

export const CEREMONIES: Ceremony[] = [
  {
    id: 'ceremony-standup',
    name: 'Daily Standup',
    cadence: 'Daily (Morning, 9:30 AM)',
    duration: '15 minutes',
    participants: 'Each autonomous Squad (PO, SM, Devs, QA, embedded UX)',
    purpose: 'Inspect yesterday\'s progress toward the Sprint Goal, commit to today\'s work, and immediately identify blockers.',
    inputs: 'Sprint Backlog, Jira/Linear active board, CI test run logs',
    outputs: 'Updated burndown status, flagged blockers escalated to Scrum Master',
    level: 'squad'
  },
  {
    id: 'ceremony-sos',
    name: 'Scrum of Scrums (SoS) Sync',
    cadence: '3x / Week (Mon, Wed, Fri 11:00 AM)',
    duration: '30 minutes',
    participants: '24 Squad Representatives (SM / Tech Lead) + RTE (David Kalu)',
    purpose: 'Identify cross-squad integration hurdles, verify API contract deliverables, and unblock cross-tribe dependencies.',
    inputs: 'Cross-team dependency board, blocked PRs list, deployment schedule',
    outputs: 'Resolved dependencies, unblocked paths, escalations to EAT if stalled >24h',
    level: 'tribe'
  },
  {
    id: 'ceremony-refinement',
    name: 'Backlog Refinement',
    cadence: 'Weekly (Mid-sprint)',
    duration: '60 minutes',
    participants: 'Squad PO, Tech Lead, Engineers, SDET, UX Designer',
    purpose: 'Elaborate user stories, flesh out acceptance criteria, conduct Planning Poker story point estimations, ensure stories meet Definition of Ready (DoR).',
    inputs: 'Draft product stories, UX Figma specs, API contract schemas',
    outputs: 'Sprint-ready backlog items sized with consensus story points',
    level: 'squad'
  },
  {
    id: 'ceremony-planning',
    name: 'Sprint Planning (Part 1 & 2)',
    cadence: 'Alternate Mondays (Start of 2-week Sprint)',
    duration: '3 - 4 hours total',
    participants: 'Full Squad team + Tribe PO observers',
    purpose: 'Part 1: PO presents the Sprint Goal and prioritized backlog items. Part 2: Engineering team crafts technical architecture tasks and commits to capacity.',
    inputs: 'Refined product backlog, calculated squad velocity history, known defect list',
    outputs: 'Official Sprint Goal commitment and task-broken Sprint Backlog in Linear',
    level: 'squad'
  },
  {
    id: 'ceremony-review',
    name: 'Sprint Review & Cross-Squad Demo Showcase',
    cadence: 'Alternate Fridays (End of Sprint, 3:00 PM)',
    duration: '90 minutes',
    participants: 'All 4 squads within Tribe + Stakeholders, Chief PO, Customers',
    purpose: 'Inspect the working software increments shipped in production or staging; gather qualitative feedback directly from business leaders and creators.',
    inputs: 'Working software builds, release telemetry, user engagement metrics',
    outputs: 'Stakeholder feedback registered directly into the Global Product Backlog',
    level: 'tribe'
  },
  {
    id: 'ceremony-retro',
    name: 'Sprint Retrospective',
    cadence: 'Alternate Fridays (Post-Demo, 4:45 PM)',
    duration: '60 minutes',
    participants: 'Squad internal team (PO, SM, Devs) facilitated by Scrum Master',
    purpose: 'Psychologically safe inspection of process, team health, tooling friction, and interpersonal dynamics to generate 1-2 measurable improvements.',
    inputs: 'Sprint metrics, team happiness pulse, anonymous retro cards',
    outputs: '1-2 prioritized continuous improvement action items committed for next sprint',
    level: 'squad'
  },
  {
    id: 'ceremony-pi-planning',
    name: 'Program Increment (PI) Planning',
    cadence: 'Every 8–10 Weeks (Quarterly Cadence)',
    duration: '2 Full Days',
    participants: 'All 24 Squads (190+ attendees), 6 Tribe Leads, CPO, EAT',
    purpose: 'High-alignment event synchronizing all 24 squads on the upcoming 10-week roadmap, mapping the cross-tribe dependency matrix, and resolving ROAM risks.',
    inputs: 'Strategic Vision, Top 10 Features, Architecture Runway, Team Capacities',
    outputs: 'Committed PI Objectives, Cross-Tribe Dependency Board, ROAMed Risk Register',
    level: 'all-hands'
  },
  {
    id: 'ceremony-qbr',
    name: 'Quarterly Business Review (QBR)',
    cadence: 'Quarterly (Post-PI execution)',
    duration: '1 Full Day',
    participants: 'Executive Action Team, Chief PO, Tribe Engineering & Product Leads',
    purpose: 'Review OKR achievements, revenue/user growth performance, system uptime audits, and allocate headcount/budget for the subsequent quarter.',
    inputs: 'Quarterly OKR scorecard, financial ledger, uptime telemetry, churn reports',
    outputs: 'Refreshed corporate OKRs and budget allocations for the 6 Tribes',
    level: 'leadership'
  }
];

export const RACI_ITEMS: RaciItem[] = [
  {
    activity: 'Global Product Vision & Strategic Multi-Year Roadmap',
    category: 'Product & Strategy',
    po: 'C',
    sm: 'I',
    dev: 'I',
    cpo: 'A',
    eat: 'C',
    rationale: 'Chief PO holds ultimate accountability for market direction; consults EAT for budget and Tribe POs for ground truth.'
  },
  {
    activity: 'Cross-Tribe Backlog Prioritization & OKR Alignment',
    category: 'Product & Strategy',
    po: 'R',
    sm: 'I',
    dev: 'C',
    cpo: 'A',
    eat: 'I',
    rationale: 'Chief PO arbitrates priority between competing tribes; Tribe POs are responsible for their local backlogs.'
  },
  {
    activity: 'Squad Sprint Backlog Commitment & Sprint Goal Definition',
    category: 'Squad Operations',
    po: 'A',
    sm: 'C',
    dev: 'R',
    cpo: 'I',
    eat: 'I',
    rationale: 'Squad PO is accountable for the Sprint Goal; the Developers are responsible for estimating and committing to tasks.'
  },
  {
    activity: 'Daily Squad Blocker Removal & Team Flow Optimization',
    category: 'Squad Operations',
    po: 'C',
    sm: 'A',
    dev: 'R',
    cpo: 'I',
    eat: 'I',
    rationale: 'Scrum Master is accountable for shielding the team from distractions and clearing immediate blockers.'
  },
  {
    activity: 'Cross-Squad Technical Dependency Resolution',
    category: 'Scaling & Governance',
    po: 'C',
    sm: 'R',
    dev: 'R',
    cpo: 'C',
    eat: 'A',
    rationale: 'SMs coordinate via Scrum of Scrums; EAT is ultimately accountable if inter-team deadlocks threaten release.'
  },
  {
    activity: 'Production Release Go/No-Go Decision (Bi-Weekly App Store Train)',
    category: 'Delivery & Engineering',
    po: 'C',
    sm: 'I',
    dev: 'R',
    cpo: 'I',
    eat: 'A',
    rationale: 'Dev Leads & QA are responsible for green test suites; EAT holds accountability for broad platform stability risk.'
  },
  {
    activity: 'System Architecture Standards & Core Tech Stack Selection',
    category: 'Delivery & Engineering',
    po: 'I',
    sm: 'I',
    dev: 'R',
    cpo: 'C',
    eat: 'A',
    rationale: 'Principal Eng Guild designs architecture; VP of Eng (EAT) signs off on enterprise tools and cloud provider contracts.'
  },
  {
    activity: 'Organization-Level Blocker Escalation & Budget Reallocation',
    category: 'Scaling & Governance',
    po: 'I',
    sm: 'I',
    dev: 'I',
    cpo: 'C',
    eat: 'A',
    rationale: 'Only the Executive Action Team has the authority to redistribute budget, shift headcount, or override policies.'
  },
  {
    activity: 'Agile Process Coaching & Squad Velocity Maturity',
    category: 'Culture & Process',
    po: 'C',
    sm: 'R',
    dev: 'C',
    cpo: 'I',
    eat: 'A',
    rationale: 'Scrum Masters are responsible for day-to-day coaching; RTE and EAT are accountable for enterprise agility.'
  }
];

export const SCALING_CHALLENGES: ScalingChallenge[] = [
  {
    id: 'challenge-dependencies',
    title: 'Cross-Team Dependencies & Blocked PRs',
    category: 'Architecture & Delivery',
    impactScore: 'Critical',
    rootCause: 'When Squad Alpha\'s feed ranking feature requires a schema change from Squad Gamma\'s graph database, work stalls if priorities are misaligned.',
    oneLineMitigation: 'Contract-first API design with Pact consumer-driven tests and mandatory 2-day pre-sprint dependency handshake.',
    detailedPolicy: 'Every inter-squad interface must publish an OpenAPI/Protobuf schema contract 1 sprint prior to implementation. Downstream squads build against generated mock stubs, completely decoupling deployment velocity.',
    measuredMetric: 'Dependency Wait Time (< 4 hours in SoS board)'
  },
  {
    id: 'challenge-tech-debt',
    title: 'Technical Debt & Divergent Codebases Across 24 Squads',
    category: 'Code Quality',
    impactScore: 'High',
    rootCause: 'Autonomy without shared standards leads mobile and backend squads to build duplicate HTTP clients, state managers, and divergent logging patterns.',
    oneLineMitigation: 'Architecture Guilds with weekly RFC forums and a mandatory 15% sprint capacity allocation reserved for technical debt.',
    detailedPolicy: 'Engineers join cross-squad Guilds (e.g. Mobile Guild, SRE Guild, ML Guild). The Guild defines shared libraries. Every sprint backlog must contain at least 15% story points dedicated to refactoring and platform upgrades.',
    measuredMetric: 'Monorepo Shared Library Adoption Rate (> 92%)'
  },
  {
    id: 'challenge-dod',
    title: 'Inconsistent Definition of Done (DoD) Between Web & Mobile',
    category: 'Quality Assurance',
    impactScore: 'High',
    rootCause: 'Web squads deploy multiple times daily via continuous delivery, whereas iOS/Android squads must adhere to App Store review cycles and rigorous battery/memory regression testing.',
    oneLineMitigation: 'Multi-tier Definition of Done separating code merge from feature exposure using trunk-based development and server-side feature flags.',
    detailedPolicy: 'All 24 squads adhere to the Tier-1 DoD: 85% unit test coverage, zero high-severity SonarQube alerts, and automated Playwright contract tests. Features are deployed dark behind LaunchDarkly/custom flags, isolating release risk.',
    measuredMetric: 'Zero Hotfixes per Release Train (> 99.2% clean builds)'
  },
  {
    id: 'challenge-overhead',
    title: 'Communication Overhead & Meeting Fatigue at Scale',
    category: 'Culture & Velocity',
    impactScore: 'Medium',
    rootCause: 'With 190+ engineers, engineers get dragged into endless alignment meetings, killing deep work focus hours.',
    oneLineMitigation: 'Strict "Two-Pizza Representative" rule at Scrum of Scrums and a default-asynchronous RFC documentation culture in Notion/GitHub.',
    detailedPolicy: 'Individual developers NEVER attend SoS unless specifically invited as subject matter experts. Discussions start as written RFCs with a 48-hour comment window. Wednesdays are enterprise-wide "Focus Days" with zero recurring meetings.',
    measuredMetric: 'Maker Time Ratio (> 68% uninterrupted coding time)'
  },
  {
    id: 'challenge-metric-cannibalization',
    title: 'Feature Silos vs. Cohesive User Experience',
    category: 'Product Strategy',
    impactScore: 'Critical',
    rootCause: 'The Monetization Tribe optimizes for short-term ad clicks, which degrades the Core Feed Tribe\'s long-term user retention metrics.',
    oneLineMitigation: 'Global User Journey OKRs co-owned by Chief PO and Design System Guild to penalize metric cannibalization.',
    detailedPolicy: 'No squad can launch an A/B test without monitoring Global Guardrail Metrics (e.g., Session Duration, Day-30 Retention, App Uninstalls). If an experiment generates +5% ad revenue but drops retention by >0.2%, it is automatically blocked.',
    measuredMetric: 'Global Session Health Index (> 98.4 balance)'
  },
  {
    id: 'challenge-ml-bottlenecks',
    title: 'Data Pipeline Bottlenecks & ML Training Delays',
    category: 'Infrastructure',
    impactScore: 'High',
    rootCause: 'ML squads rely on the Platform Tribe\'s Kafka topics and Iceberg lakehouse, causing multi-week delays when requesting new behavioral features.',
    oneLineMitigation: 'Self-service Feast feature store and data mesh architecture treating event streams as versioned internal products with formal SLAs.',
    detailedPolicy: 'Data producers (e.g. Chat or Profile) publish data products with automated schema validation. ML engineers provision streaming features self-service via declarative YAML without filing infrastructure tickets.',
    measuredMetric: 'Feature-to-Model Production Cycle (< 48 hours)'
  }
];
