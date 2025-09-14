import React from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

export const ChevronButton = ({ targetSection }) => (
  <div className="flex justify-center mt-16 ">
    <button
      onClick={() => scrollToSection(targetSection)}
      className="animate-bounce"
    >
      <ChevronDown className="w-6 h-6 text-blue-400 hidden md:block" />
    </button>
  </div>
);