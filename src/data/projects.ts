export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "IoT Soil Moisture Monitoring System",
    description: "Built using ESP32 + sensor + LCD + web server. Real-time irrigation insights and pump automation simulation. Works offline (critical for rural deployment).",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
    technologies: ["C++", "ESP32", "IoT", "Embedded Systems", "Web Server"],
    githubUrl: "https://github.com/kellyKevin/ESP32-Soil-Moisture-Monitoring-system",
  },
  {
    title: "Conflict Pattern Analysis",
    description: "Spatiotemporal analysis on UCDP GED conflict data. Applied DBSCAN for event clustering, Prophet for forecasting, and Q-learning for mitigation policy simulation.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "DBSCAN", "Prophet", "Reinforcement Learning", "Pandas"],
    githubUrl: "https://github.com/kellyKevin/conflict-pattern-analysis",
  },
  {
    title: "World War Chain Reaction Model",
    description: "Strategic network graph of WW2 alliances using NetworkX. Applied Graph ML to simulate 'domino effects' of formal treaties and identify critical vulnerabilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010ca68093?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "NetworkX", "Graph ML", "Data Visualization"],
    githubUrl: "https://github.com/kellyKevin/ww2-chain-reaction-model",
  },
  {
    title: "Sentiment & Propaganda Analysis",
    description: "NLP system analyzing 5,000+ political text entries. Integrated spaCy for NER, LDA for topic modeling, and sentiment scoring for propaganda detection.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "NLP", "spaCy", "Topic Modeling", "Scikit-learn"],
    githubUrl: "https://github.com/kellyKevin/sentiment-propaganda-nlp",
  },
  {
    title: "Galaxy Wellbeing Prediction System",
    description: "Data-driven prediction system focusing on analysis & modeling. Foundation for future AI/ML work in wellbeing metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Data Science", "Prediction Models", "AI/ML"],
    githubUrl: "https://github.com/kellyKevin/galaxy-wellbeing-index-prediction",
  },
  {
    title: "Seedlings E-commerce Platform",
    description: "Marketplace + educational platform built with React, Firebase, and Contentful. Features authentication and CMS integration.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Contentful", "Tailwind CSS"],
    githubUrl: "https://github.com/kellyKevin/Webstack_Portfolio_Project",
  },
  {
    title: "Developer Portfolio Website",
    description: "Personal + collaborative portfolio featuring a blog and project showcase with secure authentication.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Node.js", "Authentication"],
    githubUrl: "https://github.com/kellyKevin/riches-kelly-portfolio",
  }
];
