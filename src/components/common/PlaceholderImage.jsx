import React from 'react';

export const PlaceholderImage = ({ text, className = "w-full h-32" }) => (
  <div className={`${className} bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm overflow-hidden`}>
    <span className="text-center px-2">{text}</span>
  </div>
);