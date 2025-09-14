import React from 'react';

export const TechTag = ({ tech, variant = "blue" }) => {
  const variants = {
    blue: "px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:border-blue-300 transition-colors duration-200",
    gray: "px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full",
    skills: "px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:border-blue-300 transition-colors duration-200"
  };

  return (
    <span className={variants[variant]}>
      {tech}
    </span>
  );
};