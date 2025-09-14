// src/components/layout/Portfolio.jsx
import React, { useState } from 'react';
import { useScroll } from '../../hooks/useScroll';

// Import all sections
import { Hero } from '../sections/Hero';

import { Experience } from '../sections/Experience';
import { Education } from '../sections/Education';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

// Import data
import { personalInfo } from '../../data/personalInfo';
import { experiences } from '../../data/experiences';
import { education } from '../../data/education';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';

const Portfolio = () => {
  const { scrollY } = useScroll();
  const [expandedJob, setExpandedJob] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 font-light">
      <Hero personalInfo={personalInfo} scrollY={scrollY} />
      
  
      
      <Experience 
        experiences={experiences}
        expandedJob={expandedJob}
        setExpandedJob={setExpandedJob}
      />
      
      <Education 
        education={education}
        expandedProject={expandedProject}
        setExpandedProject={setExpandedProject}
        expandedCourse={expandedCourse}
        setExpandedCourse={setExpandedCourse}
      />
      
      <Projects projects={projects} />
      
      <Skills skills={skills} />
      
      <Contact personalInfo={personalInfo} />
      
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default Portfolio;