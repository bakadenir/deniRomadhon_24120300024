import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Workout Landing Page',
      description: 'A responsive fitness landing page featuring modern design principles and engaging user interface. Built with clean HTML structure and beautiful CSS styling for optimal user experience.',
      image: '/Workout.jpeg',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/bakadenir',
      live: 'https://google.com',
      featured: true,
    },
    {
      title: 'Pokemon Directory',
      description: 'An interactive Pokemon directory application with search functionality, detailed Pokemon information, and responsive design. Features dynamic content loading and modern UI components.',
      image: '/Pokedex.png',
      tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      github: 'https://github.com/bakadenir',
      live: 'https://google.com',
      featured: true,
    },
    {
      title: 'Landing Page Company',
      description: 'A professional corporate landing page featuring modern design principles, responsive layout, and engaging user interface. Built with React and modern web technologies for optimal performance.',
      image: '/Landing Page Company.png',
      tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React'],
      github: 'https://github.com/bakadenir',
      live: 'https://google.com',
      featured: false,
    },
    {
      title: 'Database System Design',
      description: 'A comprehensive database management system built with XAMPP and MySQL. Features include data modeling, relationship management, and efficient query optimization for business applications.',
      image: '/Rancangan Database System.png',
      tech: ['XAMPP', 'MySQL'],
      github: 'https://github.com/bakadenir',
      live: 'https://google.com',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've mastered
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                  View Project
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;