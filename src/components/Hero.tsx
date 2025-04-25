import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-0 -mb-40 -mr-40 w-96 h-96 bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute left-0 top-0 -mt-20 -ml-20 w-80 h-80 bg-indigo-900/20 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="md:max-w-3xl">
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-4 animate-fadeIn">
            Hi, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp text-white">
            Kaarthi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp animation-delay-200">
            A passionate Software Engineer with expertise in Fullstack Development and AI.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fadeInUp animation-delay-400">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-800 text-blue-400 rounded-lg font-medium border border-blue-600 hover:bg-gray-700 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};