import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { 
    category: 'Frontend', 
    items: ['JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Responsive Design'] 
  },
  { 
    category: 'Backend & Security', 
    items: ['Node.js', 'Cybersecurity', 'Ethical Hacking', 'API Development'] 
  },
  { 
    category: 'Other Skills', 
    items: ['Problem Solving', 'Clean Code', 'Quick Learning', 'Analytical Thinking'] 
  },
];

export default function About() {
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <p className="text-xl text-gray-600 dark:text-gray-300">
            I am a passionate web developer with three years of experience specializing in JavaScript, React, TypeScript, HTML, and CSS. 
            I thrive on building modern, responsive, and high-performance web applications that enhance user experience and functionality.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Strengths</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Proficient in front-end development with React and TypeScript</li>
            <li>• Strong problem-solving skills and analytical thinking</li>
            <li>• Quick learner, always eager to explore new technologies</li>
            <li>• Detail-oriented with a focus on clean, maintainable code</li>
            <li>• Passionate about cybersecurity and ethical hacking</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Growth Areas</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Working on balancing perfectionism with efficient delivery</li>
            <li>• Continuously improving backend development skills</li>
            <li>• Enhancing task management and deep work balance</li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Interests & Hobbies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
          <div>
            <ul className="space-y-3">
              <li>• Ethical hacking and cybersecurity</li>
              <li>• Exploring new programming languages and frameworks</li>
              <li>• Gaming and competitive coding challenges</li>
              <li>• Researching the latest tech trends in AI and blockchain</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}