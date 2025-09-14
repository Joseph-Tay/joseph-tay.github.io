import React from 'react';

export const Footer = ({ personalInfo }) => (
  <footer className="py-8 border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
      © 2025 {personalInfo.name}.
    </div>
  </footer>
);