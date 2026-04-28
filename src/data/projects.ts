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
