import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a passionate junior developer with over 2 years of experience
                creating digital solutions that make a difference. My journey started
                with a curiosity about how things work, and it's evolved into a love
                for crafting beautiful, functional applications.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Golang, and Node.js, 
                with a keen eye for design using tools like Adobe Creative Suite and Figma.
                Whether it's building responsive websites, developing complex web applications,
                or optimizing user experiences, I bring creativity and technical expertise
                to every project.
              </p>

              <div className="flex items-center gap-2 text-indigo-600">
                <MapPin className="h-5 w-5" />
                <span>Based in Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <img 
                  src="/Photo.webp" 
                  alt="Deni Romadhon" 
                  className="w-60 h-60 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;