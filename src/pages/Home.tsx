import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Hey, I’m Bright Jordan Bishio. I design and build stunning web experiences that don’t just look good — they work beautifully.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Discover My Creations
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
          >
            Let’s Build Something Great
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Crafting high-performance websites with clean code and modern frameworks.
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Creating responsive and performant web applications using modern technologies.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
           Smart UI/UX design — where visual appeal meets flawless usability.
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
           I build responsive, performant web applications using the latest technologies.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Turning challenges into opportunities with sharp problem-solving skills.
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Finding elegant solutions to complex technical challenges.
          </p>
        </div>
      </div>
    </motion.div>
  );
}