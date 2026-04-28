import React from 'react';
import { Code2, Terminal, Cpu, Database, Server, Globe, GitBranch, Layers } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <Layers className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Globe className="w-5 h-5" /> },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Python", icon: <Terminal className="w-5 h-5" /> },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "SQL", icon: <Database className="w-5 h-5" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "System Design", icon: <Cpu className="w-5 h-5" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-blue-600" />
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors group"
                  >
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
