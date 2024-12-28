import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Django', 'MySQL', 'Stripe'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A mobile-first task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Material Design'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing social media accounts and analyzing engagement metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Chart.js'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Fitness Tracking App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;