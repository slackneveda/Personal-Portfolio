import React from 'react';
import { Code, GitBranch, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer with expertise in web and mobile
            development. I love creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Code className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Clean Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I write clean, maintainable, and scalable code following best practices
              and design patterns.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              User-Focused
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I prioritize user experience in every project, creating intuitive and
              responsive interfaces.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GitBranch className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Version Control
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I use Git for version control, ensuring smooth collaboration and code
              management.
            </p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>My Journey</h2>
          <p>
            With several years of experience in full-stack development, I've worked
            on various projects ranging from web applications to mobile apps. My
            expertise includes:
          </p>
          <ul>
            <li>Building responsive and dynamic web applications using React</li>
            <li>Developing robust backend systems with Django and MySQL</li>
            <li>Creating cross-platform mobile applications using Flutter</li>
            <li>Implementing RESTful APIs and managing databases</li>
            <li>Working with version control systems and deployment tools</li>
          </ul>
          <p>
            I'm constantly learning and staying up-to-date with the latest
            technologies and best practices in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;