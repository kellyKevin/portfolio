export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with detailed forecasts",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "OpenWeather API"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  }
];
