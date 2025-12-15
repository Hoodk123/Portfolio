import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Database, Cloud, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-4">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl sm:text-2xl text-secondary mb-8 font-light">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-sky-600 transition-all shadow-md hover:shadow-lg"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-50 transition-all"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Skills / Toolbox */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary">Technical Toolbox</h2>
            <p className="mt-2 text-gray-500">Core technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-primary">Frontend</h3>
              <p className="text-sm text-gray-500 mt-1">React, TypeScript, Tailwind</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-green-100 rounded-full mb-4">
                <Server className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-primary">Backend</h3>
              <p className="text-sm text-gray-500 mt-1">Node.js, Python/Flask</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-purple-100 rounded-full mb-4">
                <Cloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-primary">Cloud & DevOps</h3>
              <p className="text-sm text-gray-500 mt-1">AWS, Docker, K8s</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-orange-100 rounded-full mb-4">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-primary">Data</h3>
              <p className="text-sm text-gray-500 mt-1">MongoDB, SQL</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;