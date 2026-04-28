import React from 'react';
import { User, Brain, Target, Compass, Mail } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <User className="w-8 h-8 text-blue-600" />
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="relative group max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://kellykevin.github.io/riches-kelly-portfolio/images/image1%20(1).jpg"
                alt="Kelly Kevin Momanyi"
                className="relative rounded-xl shadow-lg w-full object-cover aspect-[4/5]"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                Currently Working On
              </h3>
              <div className="space-y-4">
                <p className="font-semibold text-blue-600 dark:text-blue-400">
                  Human State Intelligence System (HSIS v2)
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  A system that models human internal states using behavioral data.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Tracks energy & stress
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Predicts burnout
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Performance trends
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Machine Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Self-driven IT professional with strong experience in backend development, system operations, and IoT systems.
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building data-driven & IoT systems, with a deep interest in real-world tech solutions
              spanning agriculture, infrastructure, and off-grid systems. My expertise lies in API development,
              system design, and troubleshooting complex technical environments.
            </p>

            <div className="grid gap-4">
              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">The Vision</h4>
                  <p className="text-gray-600 dark:text-gray-300">Transforming ideas into interactive, user-friendly applications that solve real-world problems.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Compass className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-300">Exploring Data Science, Intelligent Systems, and sustainable technology solutions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Reach Me At</h4>
                  <a href="mailto:kellymomanyi80@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    kellymomanyi80@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
