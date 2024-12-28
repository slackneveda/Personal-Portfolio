import React from 'react';
import { Icon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: Icon;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: IconComponent, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-300 flex items-center"
          >
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;