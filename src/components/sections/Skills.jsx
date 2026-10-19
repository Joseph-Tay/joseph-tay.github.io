import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ChevronButton } from '../common/ChevronButton';
import { TechTag } from '../common/TechTag';

const SkillGroup = ({ skillGroup }) => (
  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 px-6 py-5">
    <h3 className="md:w-56 flex-shrink-0 text-lg font-medium text-gray-900">
      {skillGroup.category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skillGroup.items.map((skill, i) => (
        <TechTag key={i} tech={skill} variant="skills" />
      ))}
    </div>
  </div>
);

export const Skills = ({ skills, certifications = [] }) => (
  <SectionWrapper
    id="skills"
    bgColor="bg-blue-100"
    gradientTop="white"
    gradientBottom="white"
  >
    <h2 className="text-4xl md:text-5xl font-thin mb-10 tracking-tight text-center text-blue-800">Skills & Certifications</h2>
    {certifications.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {certifications.map((cert, i) => {
          const content = (
            <>
              {cert.image ? (
                <img src={cert.image} alt={`${cert.name} badge`} className="w-16 h-16 object-contain flex-shrink-0" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
              )}
              <div className="text-left">
                <p className="text-sm font-medium text-gray-800">{cert.name}</p>
                {cert.issuer && <p className="text-xs text-gray-500">{cert.issuer}</p>}
                {cert.link && (
                  <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
                    Verify <ExternalLink className="w-3 h-3" />
                  </p>
                )}
              </div>
            </>
          );
          const badgeStyles = "flex items-center gap-3 bg-white border border-blue-200 rounded-xl pl-3 pr-5 py-3 shadow-sm";
          return cert.link ? (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${cert.name} credential`}
              className={`${badgeStyles} hover:border-blue-400 hover:shadow-md transition-all duration-200`}
            >
              {content}
            </a>
          ) : (
            <div key={i} className={badgeStyles}>{content}</div>
          );
        })}
      </div>
    )}
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-blue-200 divide-y divide-blue-100">
      {skills.map((skillGroup, index) => (
        <SkillGroup key={index} skillGroup={skillGroup} />
      ))}
    </div>
    
    <ChevronButton targetSection="education" />
  </SectionWrapper>
);