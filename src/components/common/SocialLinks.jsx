import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const SocialLinks = ({ email, github, linkedin, size = "default", variant = "outline" }) => {
  const iconSize = size === "large" ? "w-6 h-6" : "w-5 h-5";
  const buttonStyles = variant === "outline" 
    ? "p-3 border-2 border-blue-200 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
    : "text-blue-600 hover:text-blue-700 transition-colors duration-200 transform hover:scale-110";

  return (
    <div className={`flex ${variant === "outline" ? "justify-center space-x-6" : "justify-center space-x-8"}`}>
      <a href={`mailto:${email}`} className={buttonStyles}>
        <Mail className={`${iconSize} ${variant === "outline" ? "text-blue-600 group-hover:text-blue-700" : ""}`} />
      </a>
      <a href={github} className={buttonStyles}>
        <Github className={`${iconSize} ${variant === "outline" ? "text-blue-700 group-hover:text-blue-800" : ""}`} />
      </a>
      <a href={linkedin} className={buttonStyles}>
        <Linkedin className={`${iconSize} ${variant === "outline" ? "text-blue-800 group-hover:text-blue-900" : ""}`} />
      </a>
    </div>
  );
};
