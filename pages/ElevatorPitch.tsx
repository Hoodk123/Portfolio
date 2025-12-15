import React from 'react';
import { Mic } from 'lucide-react';

const ElevatorPitch: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mx-auto h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Mic className="h-10 w-10 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">Elevator Pitch</h1>
        <p className="text-gray-500 text-lg">
          This section is currently under development. A video introduction and professional summary will be available here soon.
        </p>
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Milestone Note:</strong> This is a placeholder page as required by the assignment guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElevatorPitch;