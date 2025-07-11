import React from 'react';
import { Code, Database, Palette, Smartphone, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 73 },
        { name: 'JavaScript', level: 81 },
        { name: 'Tailwind CSS', level: 77 },
      ],
    },
    {
      title: 'Backend Developer',
      icon: Server,
      skills: [
        { name: 'Golang', level: 74 },
        { name: 'Node.js', level: 82 },
        { name: 'REST APIs', level: 78 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'Docker', level: 74 },
        { name: 'MySQL', level: 80 },
        { name: 'NoSQL', level: 76 },
      ],
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Adobe Family', level: 91 },
        { name: 'Figma', level: 74 },
        { name: 'Canva', level: 87 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'JavaScript', icon: '🟨' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Golang', icon: '🐹' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'REST APIs', icon: '🔗' },
              { name: 'Docker', icon: '🐳' },
              { name: 'MySQL', icon: '🗄️' },
              { name: 'NoSQL', icon: '🍃' },
              { name: 'Adobe', icon: '🎨' },
              { name: 'Figma', icon: '🎯' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;