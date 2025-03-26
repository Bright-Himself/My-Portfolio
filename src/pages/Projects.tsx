import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Yelp Clone',
    description: 'Manage To Create A clone of Yelp.',
    image: 'https://source.unsplash.com/600x400/?restaurant,food,review',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'https://euphonious-zuccutto-0da4fc.netlify.app/',
  },
  {
    title: 'Hoops Technology',
    description: 'Modern Basketball Company Site.',
    image: 'https://source.unsplash.com/600x400/?basketball,sports,technology',
    technologies: ['Reactjs', 'Express', 'PostgreSQL'],
    link: 'https://deluxe-gumption-e4e2c7.netlify.app/',
  },
  {
    title: 'Alpha Rich Waitlist',
    description: 'Created a membership site Waitlist.',
    image: 'https://source.unsplash.com/600x400/?luxury,success,business',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    link: 'https://alpha-rich.onrender.com/',
  },
  {
    title: 'Pokedex App',
    description: 'A software where you can search for pokemons and see their abilities.',
    image: 'https://source.unsplash.com/600x400/?pokemon,anime,game',
    technologies: ['Reactjs', 'Express', 'PostgreSQL'],
    link: 'https://pokem-f1kl.onrender.com/',
  },
];

export default function Projects() {
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
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
