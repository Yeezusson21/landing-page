import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Virufy Website',
      category: 'Web Development',
      image: 'https://drive.hhs.gov/map/images/ProductLogos/virufy_logo.png',
      description: 'Contributed to Virufy’s nonprofit website, supporting AI-based virus detection efforts. Built responsive UI components with React, Next.js, and Tailwind based on Figma designs. Ensured high code quality and reliability with unit and end-to-end tests using Jest and Cypress. Collaborated in agile sprints using Jira, Confluence, and Git.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Jest', 'Cypress', 'Figma', 'Git', 'Jira', 'Confluence'],
      github: '', // Optional — leave blank if it's not public
    },
    {
      id: 2,
      title: 'SnakeAI',
      category: 'AI/ML',
      image: 'https://www.coolmathgames.com/sites/default/files/snake.png',
      description: 'An AI agent trained using reinforcement learning to play Snake. Implemented custom neural network architecture and genetic algorithms for optimization.',
      technologies: ['Python', 'PyTorch', 'NumPy', 'Pygame'],
      github: 'https://github.com/SCE-Development/snake_ai',
    },
    {
      id: 3,
      title: 'ChatSCE',
      category: 'AI/ML',
      image: 'https://sce.sjsu.edu/favicon.ico',
      description: 'Integrated an AI-powered chatbot into the SJSU Software and Computer Engineering Society website using OpenAI\'s GPT-3.5. The bot provides tailored academic and club-related information through a Retrieval-Augmented Generation (RAG) system and web scraping.',
      technologies: ['Python', 'FastAPI', 'OpenAPI', 'BeautifulSoup', 'OpenAI GPT-3.5'],
      github: 'https://github.com/SCE-Development/ChatSCE',
    },
    {
      id: 4,
      title: 'EVGoHome',
      category: 'Web Development',
      image: 'https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1365155435.jpg',
      description: 'A real-time EV charging station finder with smart routing and availability predictions. Features include live station status, optimal route planning, and predictive availability using historical data. Built for the 2025 SpartUp Hackathon',
      technologies: ['React', 'TypeScript', 'Google Maps API', 'FastAPI'],
      github: 'https://github.com/Yeezusson21/EVGoHome',
    },
    {
      id: 5,
      title: 'Spotirase',
      category: 'Web Development',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/250px-Spotify_App_Logo.svg.png',
      description: 'A Chrome extension that integrates with the Spotify Web API to detect and remove duplicate songs from user playlists. Supports both public and private playlists and streamlines playlist management with a clean UI.',
      technologies: ['JavaScript', 'HTML', 'Oauth2.0', 'Chrome Extension API', 'Spotify Web API'],
      github: 'https://github.com/Yeezusson21/Spotirase',
    },
  ];
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Featured Projects</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          A collection of projects that demonstrate my technical skills and problem-solving abilities.
          Each project represents unique challenges and learning opportunities.
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs font-medium text-blue-400 px-2 py-1 bg-gray-700 rounded-lg">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-700 rounded-lg text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};