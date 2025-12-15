import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Youtube, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-primary">Selected Projects</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          A showcase of my technical journey, focusing on system architecture, cloud integration, and full-stack development.
        </p>
      </div>

      {/* Mandatory Phase 2 Links Section */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-16">
        <h3 className="text-lg font-bold text-primary mb-4">Phase 2 Capstone Deliverables</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all text-red-600 font-medium w-full sm:w-auto">
            <Youtube className="w-5 h-5 mr-2" />
            Watch Project Video
          </a>
          <a href="#" className="flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all text-primary font-medium w-full sm:w-auto">
            <FileText className="w-5 h-5 mr-2" />
            View Slide Deck (PDF)
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-all duration-300">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-accent bg-blue-50 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">Challenge & Learning</h4>
                <p className="text-sm text-gray-500 mb-2"><span className="font-semibold text-gray-700">Challenge:</span> {project.challenge}</p>
                <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Learning:</span> {project.learning}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 pt-0 mt-auto border-t border-gray-50">
              <div className="flex gap-4 pt-4">
                <a href={project.github || "#"} className="flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
                <a href={project.link || "#"} className="flex items-center text-sm font-medium text-accent hover:text-sky-600 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;