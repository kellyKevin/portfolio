import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="pt-32 pb-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto">
            <img
              src="/assets/profile.jpg"
              alt="Kelly Kevin Momanyi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
        </div>
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
  );
}
