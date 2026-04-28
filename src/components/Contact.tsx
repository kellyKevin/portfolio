import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Mail className="w-8 h-8 text-blue-600" />
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Interested in working together? Whether you have a project in mind or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:kellymomanyi80@gmail.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow group"
                aria-label="Email Kelly"
              >
                <div className="p-3 bg-blue-50 dark:bg-gray-600 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-500 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                  <p className="font-medium">kellymomanyi80@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/kellyKevin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow group flex-1 text-center flex flex-col items-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kelly-kevin-769977287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow group flex-1 text-center flex flex-col items-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <form className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
