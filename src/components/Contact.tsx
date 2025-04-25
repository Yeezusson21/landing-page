import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the following channels.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Email</h3>
            <div className="flex items-center justify-center">
              <a href="mailto:kaarthiveeravel@gmail.com" className="text-blue-400 hover:underline">
                kaarthiveeravel@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Phone</h3>
            <a href="tel:+14088597335" className="text-blue-400 hover:underline">
              +1 (408) 859-7335
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Location</h3>
            <p className="text-gray-300">Cupertino, CA, United States</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://www.linkedin.com/in/kaarthi-veeravel-685b7425b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};