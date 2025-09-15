import React, { useRef } from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ChevronButton } from '../common/ChevronButton';
import { TechTag } from '../common/TechTag';
import { PlaceholderImage } from '../common/PlaceholderImage';

// Timeline Card Component
const TimelineCard = ({ job, isExpanded, onToggle, isHidden }) => {
  const cardRef = useRef(null);
  return (
    <div 
      ref={cardRef}
      data-job-id={job.id}
      className={`transition-all duration-700 ease-in-out cursor-pointer rounded-xl flex flex-col transform-gpu ${
        isHidden 
          ? 'opacity-0 scale-95 pointer-events-none w-0 mx-0 overflow-hidden' 
          : isExpanded 
            ? 'w-full bg-white shadow-2xl border-2 border-blue-300 opacity-100 scale-100' 
            : 'flex-1 mx-2 bg-white shadow-lg border border-gray-100 hover:shadow-xl opacity-100 scale-100'
      }`}
      style={{
        transformOrigin: 'center center'
      }}
      onClick={onToggle}
    >
      {/* Expanded Header */}
      <div className={`bg-white border-b border-gray-200 rounded-t-xl transition-all duration-700 ease-in-out overflow-hidden ${
        isExpanded ? 'max-h-20 p-4 opacity-100' : 'max-h-0 p-0 opacity-0'
      }`}>
        <div className="transition-all duration-500 delay-200">
          <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
          <p className="text-blue-600 font-medium">{job.company}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-700 ease-in-out ${
        isExpanded ? "p-6" : "p-4"
      }`}>
        {/* Logo Section */}
        <div className={`bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-500 ${
          isExpanded ? "mb-6 h-32" : "mb-4 h-16"
        }`}>
          <a 
            href={job.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {job.logo ? (
              <img 
                src={job.logo} 
                alt={`${job.company} logo`}
                className={`w-full object-contain transition-all duration-500 ${
                  isExpanded ? "h-32 p-5" : "h-16 p-2"
                }`}
              />
            ) : (
              <PlaceholderImage 
                text="Logo" 
                className="w-full h-full" 
              />
            )}
          </a>
        </div>

        {/* Content that's always visible but transforms */}
        <div className={`transition-all duration-700 ease-in-out ${
          isExpanded ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100'
        }`}>
          {/* Collapsed view */}
          <h3 className="text-sm font-medium text-gray-900 mb-1">{job.title}</h3>
          <p className="text-blue-600 font-medium text-sm">{job.company}</p>
          <p className="text-xs text-gray-500 mb-2">{job.location}</p>
          <p className="text-xs text-gray-600 mb-2">{job.period}</p>
          <p className="text-gray-700 text-xs line-clamp-2 mb-4">{job.description}</p>
          
          {/* Core Competencies in collapsed view */}
          <div className="border-t border-gray-100 pt-3">
            <h4 className="text-xs font-semibold text-gray-900 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-1">
              {job.technologies.slice(0, 4).map((tech, i) => (
                <TechTag key={i} tech={tech} />
              ))}
              {job.technologies.length > 4 && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  +{job.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <div className={`transition-all duration-700 ease-in-out ${
          isExpanded ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">{job.location}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-lg">{job.period}</p>
              </div>
            </div>

            <div className="transform transition-transform duration-500 delay-400">
              <p className="text-gray-700 text-lg leading-relaxed">{job.description}</p>
            </div>

            <div className="transform transition-transform duration-500 delay-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Responsibilities</h3>
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600 flex items-start transform transition-transform duration-300" style={{ transitionDelay: `${600 + i * 100}ms` }}>
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span dangerouslySetInnerHTML={{ __html: achievement }} />
                  </li>
                ))}
              </ul>
            </div>
            
            {job.projects && job.projects.map((project, index) => (
              <div key={index} className="transform transition-transform duration-500" style={{ transitionDelay: `${800 + index * 200}ms` }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{project.title}</h3>
                <ul className="space-y-3">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start ml-4 transform transition-transform duration-300" style={{ transitionDelay: `${900 + index * 200 + i * 100}ms` }}>
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: detail }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="transform transition-transform duration-500 delay-700">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, i) => (
                  <div 
                    key={i} 
                    className="transform transition-all duration-300" 
                    style={{ transitionDelay: `${800 + i * 50}ms` }}
                  >
                    <TechTag tech={tech} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom indicator - only show when collapsed */}
      <div className={`flex justify-center transition-all duration-500 ${
        isExpanded ? 'pb-0 opacity-0 max-h-0' : 'pb-3 opacity-100 max-h-6'
      }`}>
        <div className="w-6 h-0.5 bg-blue-300 rounded-full"></div>
      </div>
    </div>
  );
};

// Main Experience Component
export const Experience = ({ experiences, expandedJob, setExpandedJob }) => {
  const sortedExperiences = [...experiences].sort((a, b) => a.id - b.id);

  const handleCardClick = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
      // Only scroll on desktop - check if desktop cards are visible
      const desktopView = document.querySelector('.hidden.md\\:block');
      const isDesktopVisible = desktopView && window.getComputedStyle(desktopView).display !== 'none';
      
      if (isDesktopVisible) {
        setTimeout(() => {
          const expandedCard = document.querySelector(`[data-job-id="${jobId}"]`);
          if (expandedCard) {
            const cardRect = expandedCard.getBoundingClientRect();
            const scrollTop = window.pageYOffset + cardRect.top - 80; // 80px padding from top
            
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };

  return (
    <SectionWrapper id="experience" bgColor="bg-white">
      <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-center text-blue-800">Professional Experience</h2>
      
      {/* Timeline line and dots - animate out when card is expanded */}
      <div className={`hidden md:block relative mb-8 transition-all duration-700 ease-in-out ${
        expandedJob ? 'opacity-0 -translate-y-4 max-h-0 overflow-hidden' : 'opacity-100 translate-y-0 max-h-20'
      }`}>
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-blue-200"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-12">
          <div className="flex justify-between">
            {sortedExperiences.map((job) => (
              <div key={job.id} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full bg-white border-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                    expandedJob === job.id ? 'border-blue-600 shadow-lg' : 'border-blue-300'
                  }`}
                  onClick={() => handleCardClick(job.id)}
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
                <div className="text-xs text-gray-600 mt-2 text-center">
                  {job.period.split(' - ')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop cards */}
      <div className="hidden md:block">
        <div className={`flex gap-4 max-w-7xl mx-auto transition-all duration-700 ease-in-out ${
          expandedJob ? 'justify-center' : ''
        }`}>
          {sortedExperiences.map((job) => (
            <TimelineCard
              key={job.id}
              job={job}
              isExpanded={expandedJob === job.id}
              isHidden={expandedJob && expandedJob !== job.id}
              onToggle={() => handleCardClick(job.id)}
            />
          ))}
        </div>
        <p className={`text-center text-gray-500 text-sm mt-4 transition-all duration-500 ${
          expandedJob ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
        }`}>
          Click cards or timeline dots for details →
        </p>
      </div>

      {/* Mobile stacked view */}
      <div className="md:hidden space-y-4">
        {[...sortedExperiences].reverse().map((job) => (
          <div
            key={job.id}
            data-job-id={job.id}
            className={`transition-all duration-500 p-4 rounded-xl border cursor-pointer transform ${
              expandedJob === job.id 
                ? 'bg-white shadow-2xl border-2 border-blue-300 scale-102' 
                : 'bg-white shadow-lg border-gray-100 hover:shadow-xl scale-100'
            }`}
            onClick={() => handleCardClick(job.id)}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-1">{job.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              {job.icon && (
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={job.icon} 
                    alt={`${job.company} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <p className="text-blue-600 font-medium">{job.company}</p>
            </div>
            <p className="text-xs text-gray-500 mb-2">{job.location}</p>
            <p className="text-sm text-gray-600">{job.period}</p>
            
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedJob === job.id 
                ? 'max-h-[1000px] opacity-100 pt-4 border-t border-gray-100 mt-4' 
                : 'max-h-0 opacity-0'
            }`}>
              <p className="text-gray-700 mb-4 text-sm">{job.description}</p>
              <h4 className="font-medium text-gray-900 mb-2 text-sm">Core Responsibilities:</h4>
              <ul className="space-y-1 mb-4">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600 text-xs" dangerouslySetInnerHTML={{ __html: `• ${achievement}` }} />
                ))}
              </ul>
              <div className="flex flex-wrap gap-1">
                {job.technologies.map((tech, i) => (
                  <TechTag key={i} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <ChevronButton targetSection="education" />
    </SectionWrapper>
  );
};