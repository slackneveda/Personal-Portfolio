// import React from 'react';
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillCard from '../components/SkillCard';
import pic1 from '../assets/pic1.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <img
              src={pic1}
              alt="Noor Ahmed"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white"
            />
            <h1 className="text-4xl font-bold text-white mb-4">
              Hi, I'm Noor Ahmed
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Full-Stack Web Developer & Android App Specialist
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              title="Frontend Development"
              icon={Layout}
              skills={['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS']}
            />
            <SkillCard
              title="Backend Development"
              icon={Code}
              skills={['Django', 'MySQL', 'REST APIs', 'Firebase']}
            />
            <SkillCard
              title="Mobile Development"
              icon={Smartphone}
              skills={['Flutter', 'Android Development', 'iOS Development']}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;