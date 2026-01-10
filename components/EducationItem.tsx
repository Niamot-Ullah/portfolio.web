
import React from 'react';
import { Education } from '../types';

interface EducationItemProps {
  edu: Education;
}

export const EducationItem: React.FC<EducationItemProps> = ({ edu }) => {
  return (
    <div className="relative pl-8 pb-12 border-l border-gray-800 last:pb-0">
      <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
      <div className="glass-card p-6 rounded-2xl">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">
          {edu.duration}
        </span>
        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
        <p className="text-indigo-300 font-medium mb-4">{edu.institution}</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          {edu.description}
        </p>
      </div>
    </div>
  );
};
