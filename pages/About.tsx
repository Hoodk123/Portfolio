import React from 'react';
import { BIO_TEXT, PERSONAL_INFO } from '../constants';
import { User, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-primary px-8 py-10 text-white text-center">
          <div className="mx-auto h-24 w-24 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
             <User className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold">{PERSONAL_INFO.name}</h2>
          <p className="text-blue-200 mt-2">{PERSONAL_INFO.role}</p>
        </div>
        
        <div className="px-8 py-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-accent" />
            Biography
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            {BIO_TEXT}
          </p>

          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-accent" />
              Focus Areas & Certifications
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-3 bg-accent rounded-full"></span>
                <div>
                  <span className="font-medium text-gray-900">AWS Cloud Practitioner</span>
                  <p className="text-sm text-gray-500">Currently pursuing certification path.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-3 bg-accent rounded-full"></span>
                <div>
                  <span className="font-medium text-gray-900">Cybersecurity & SOAR</span>
                  <p className="text-sm text-gray-500">Security orchestration and automated response systems.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 mt-2 mr-3 bg-accent rounded-full"></span>
                <div>
                  <span className="font-medium text-gray-900">Full-Stack Architecture</span>
                  <p className="text-sm text-gray-500">End-to-end system design from React to Docker.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;