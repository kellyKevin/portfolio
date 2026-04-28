import React from 'react';
import { User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <User className="w-8 h-8 text-blue-600" />
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://kellykevin.github.io/riches-kelly-portfolio/images/image1%20(1).jpg"
              alt="Profile"
              className="relative rounded-xl shadow-lg w-full object-cover aspect-square"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm an aspiring web developer fueled by an insatiable curiosity for building modern web experiences.
              I'm diving headfirst into the world of React, TypeScript, and Node.js, where every line of code feels like
              unlocking a new level of creativity.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              For me, it's not just about learning—it's about transforming ideas into
              interactive, user-friendly applications. I'm here to create, explore, and grow, one project at a time.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I'm usually exploring new technologies, tinkering with side projects, or diving into
              open-source communities. I also enjoy sharing what I learn through technical writing—because the best way to grow
              is by learning out loud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
