import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Kelly Kevin Momanyi. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
