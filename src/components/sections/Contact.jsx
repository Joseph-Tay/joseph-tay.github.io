import React from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { SocialLinks } from '../common/SocialLinks';

export const Contact = ({ personalInfo }) => (
  <SectionWrapper 
    id="contact" 
    bgColor="bg-white" 
    gradientTop="white" 
    gradientBottom="white"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-blue-800">Let's Work Together</h2>
      <p className="text-xl text-gray-600 mb-5 leading-relaxed">
        I'm always interested in new opportunities, feel free to reach out!
      </p>

      <div className="mt-8">
        <SocialLinks 
          email={personalInfo.email}
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
          size="large"
          variant="simple"
        />
      </div>
    </div>
  </SectionWrapper>
);