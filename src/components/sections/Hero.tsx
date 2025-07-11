import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gray-900">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Deni Romadhon
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Junior Developer crafting beautiful, functional web experiences
              that bring ideas to life with modern technologies and creative design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300 flex items-center gap-2">
                Download CV
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <div className="flex justify-center">
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="animate-bounce">
                <ArrowDown className="h-8 w-8 text-gray-400 hover:text-indigo-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;