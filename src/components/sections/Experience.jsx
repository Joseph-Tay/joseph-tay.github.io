import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ChevronButton } from '../common/ChevronButton';
import { TechTag } from '../common/TechTag';
import { PlaceholderImage } from '../common/PlaceholderImage';

// Timeline Item Component
const TimelineItem = ({ job, isExpanded, onToggle }) => {
  const cardRef = useRef(null);

  const handleClick = () => {
    onToggle();
    if (!isExpanded) {
      // Wait for any previously expanded card to collapse before scrolling
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    }
  };

  return (
    <div className="relative pl-12 md:pl-16">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 md:left-2 top-5 w-8 h-8 rounded-full bg-white border-2 overflow-hidden cursor-pointer transition-all duration-300 z-10 ${
          isExpanded ? 'border-blue-600 shadow-lg scale-110' : 'border-blue-300'
        }`}
        onClick={handleClick}
      >
        {job.icon ? (
          <img
            src={job.icon}
            alt={`${job.company} icon`}
            className="w-full h-full object-contain p-1"
          />
        ) : (
          <div className="w-full h-full bg-blue-100"></div>
        )}
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        data-job-id={job.id}
        className={`scroll-mt-20 rounded-xl bg-white cursor-pointer transition-all duration-300 ${
          isExpanded
            ? 'shadow-2xl border-2 border-blue-300'
            : 'shadow-lg border border-gray-100 hover:shadow-xl'
        }`}
        onClick={handleClick}
      >
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex flex-shrink-0 w-28 h-16 bg-gray-100 rounded-lg items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {job.logo ? (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <PlaceholderImage text="Logo" className="w-full h-full" />
              )}
            </a>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                </div>
                <p className="text-sm text-gray-600 md:text-right md:whitespace-nowrap mt-1 md:mt-0">{job.period}</p>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{job.location}</p>
            </div>

            <ChevronDown
              className={`flex-shrink-0 w-5 h-5 text-blue-400 mt-1 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">{job.description}</p>

          {/* Collapsed competencies preview */}
          {!isExpanded && (
            <div className="flex flex-wrap gap-1 mt-4">
              {job.technologies.slice(0, 5).map((tech, i) => (
                <TechTag key={i} tech={tech} />
              ))}
              {job.technologies.length > 5 && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  +{job.technologies.length - 5} more
                </span>
              )}
            </div>
          )}

          {/* Expanded content (grid-rows animates to full height without a max-height cap) */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-6 pt-6 mt-4 border-t border-gray-100">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Core Responsibilities</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 text-sm md:text-base flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span dangerouslySetInnerHTML={{ __html: achievement }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {job.projects && job.projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">{project.title}</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-gray-600 text-sm md:text-base flex items-start ml-2 md:ml-4">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span dangerouslySetInnerHTML={{ __html: detail }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <TechTag key={i} tech={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Experience Component
export const Experience = ({ experiences, expandedJob, setExpandedJob }) => {
  // Newest first
  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);

  const handleCardClick = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <SectionWrapper id="experience" bgColor="bg-white">
      <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-tight text-center text-blue-800">Professional Experience</h2>
      <p className="text-center text-gray-500 text-sm mb-8">Click a role for details</p>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>

        <div className="space-y-6">
          {sortedExperiences.map((job) => (
            <TimelineItem
              key={job.id}
              job={job}
              isExpanded={expandedJob === job.id}
              onToggle={() => handleCardClick(job.id)}
            />
          ))}
        </div>
      </div>

      <ChevronButton targetSection="skills" />
    </SectionWrapper>
  );
};
