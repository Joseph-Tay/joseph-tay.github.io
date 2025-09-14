import React from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ChevronButton } from '../common/ChevronButton';
import { TechTag } from '../common/TechTag';

const SkillGroup = ({ skillGroup }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 hover:border-blue-300 group">
    <h3 className="text-2xl font-light mb-6 tracking-wide text-gray-900 text-center group-hover:text-blue-700 transition-colors duration-300">
      {skillGroup.category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skillGroup.items.map((skill, i) => (
        <TechTag key={i} tech={skill} variant="skills" />
      ))}
    </div>
  </div>
);

export const Skills = ({ skills }) => (
  <SectionWrapper 
    id="skills" 
    bgColor="bg-blue-100" 
    gradientTop="blue-100" 
    gradientBottom="white"
  >
    <h2 className="text-4xl md:text-5xl font-thin mb-16 tracking-tight text-center text-blue-800">Skills & Technologies</h2>
    <div className="grid md:grid-cols-4 gap-8">
      {skills.map((skillGroup, index) => (
        <SkillGroup key={index} skillGroup={skillGroup} />
      ))}
    </div>
    
    <ChevronButton targetSection="contact" />
  </SectionWrapper>
);