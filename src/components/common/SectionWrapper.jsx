// src/components/common/SectionWrapper.jsx
import React from 'react';

export const SectionWrapper = ({ 
  id, 
  children, 
  bgColor = "bg-white", 
  gradientTop = "white", 
  gradientBottom = "white",
  className = ""
}) => (
  <section id={id} className={`py-32 ${bgColor} relative ${className}`}>
    <div className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-${gradientTop} to-${bgColor.replace('bg-', '')}`}></div>
    <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-${bgColor.replace('bg-', '')} to-${gradientBottom}`}></div>
    <div className="max-w-[500] mx-auto px-12 relative z-10">
      {children}
    </div>
  </section>
);
