import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import { Code, Mail, User, Briefcase, ChevronDown, Github, Linkedin } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const projects = [
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Kelly Kevin Momanyi</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Web - Developer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Crafting beautiful and functional web experiences
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              View Projects
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <User className="w-8 h-8" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://kellykevin.github.io/riches-kelly-portfolio/images/image1%20(1).jpg"
                alt="Profile"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm an aspiring web developer fueled by an insatiable curiosity for building modern web experiences.
              I'm diving headfirst into the world of React, TypeScript, and Node.js, where every line of code feels like
              unlocking a new level of creativity. For me, it's not just about learning—it's about transforming ideas into
              interactive, user-friendly applications. I'm here to create, explore, and grow, one project at a time.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, I'm usually exploring new technologies, tinkering with side projects, or diving into
              open-source communities. I also enjoy sharing what I learn through technical writing—because the best way to grow
              is by learning out loud. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code className="w-8 h-8" />
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "JavaScript", "TypeScript", "React", "Node.js",
              "Python", "SQL", "Git"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Mail className="w-8 h-8" />
            Contact
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
              Interested in working together? Let's connect!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/kellyKevin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kelly-kevin-769977287/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="kellymomanyi80@gmail.com"
                className="p-4 bg-white dark:bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Kelly Kevin Momanyi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;