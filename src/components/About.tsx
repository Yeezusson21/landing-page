import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Hey, I'm Kaarthi, a Computer Science student at San Jose State University with a strong academic foundation and real-world experience. I've had the opportunity to contribute to impactful projects in web and mobile development, AI-driven platforms, and cross-functional startup teams.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm passionate about building scalable, user-friendly applications and love solving technical challenges through clean, efficient code. My approach combines strong fundamentals in data structures, systems, and security with hands-on experience in modern frameworks like React, React Native, and FastAPI.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Outside of school/work, I try to stay active through lifting and recently picked up snowboarding, which has become something I look forward to every winter now. I've also been really into cars since I was a kid and recently got into watching Formula 1. The engineering, strategy, and competition has really draw me in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};