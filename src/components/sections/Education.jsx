// src/components/sections/Education.jsx
import React from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ChevronButton } from '../common/ChevronButton';
import { TechTag } from '../common/TechTag';
import { PlaceholderImage } from '../common/PlaceholderImage';


const ProjectCard = ({ project, index, isExpanded, onToggle }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
    <div className="cursor-pointer" onClick={onToggle}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
          <p className="text-blue-600 font-medium">{project.company}</p>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-4 border-t border-gray-100">
          <h5 className="font-medium text-gray-900 mb-3">Project Details:</h5>
          <ul className="space-y-2">
            {project.details.map((detail, i) => (
              <li key={i} className="text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mb-4 mt-4">
        <h4 className="font-medium text-gray-900 mb-2 text-sm">Core Competencies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <TechTag key={i} tech={skill} />
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex justify-center">
        <div className="w-8 h-0.5 bg-blue-300 rounded-full"></div>
      </div>
    </div>
  </div>
);

const CourseList = ({ courses, category, expandedCourse, setExpandedCourse }) => (
  <div className="space-y-2">
    {courses.map((course, i) => (
      <div key={i} className="cursor-pointer">
        <div 
          className={`text-xs text-gray-600 p-2 transition-colors duration-200 flex items-start cursor-pointer ${
            expandedCourse === `${category}-${i}` 
              ? 'bg-blue-100 text-blue-700 rounded-t' 
              : 'hover:bg-blue-100 hover:text-blue-700 rounded'
          }`}
          onClick={() => setExpandedCourse(expandedCourse === `${category}-${i}` ? null : `${category}-${i}`)}
        >
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          {course.name}
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expandedCourse === `${category}-${i}` ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`text-xs text-gray-500 pl-8 pr-2 pb-2 pt-1 ${
            expandedCourse === `${category}-${i}` ? 'bg-blue-100 rounded-b' : ''
          }`}>
            {course.description}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Education = ({ education, expandedProject, setExpandedProject, expandedCourse, setExpandedCourse }) => (
  <SectionWrapper 
    id="education" 
    bgColor="bg-blue-100" 
    gradientTop="blue-100" 
    gradientBottom="white"
  >
    <h2 className="text-4xl md:text-5xl font-thin mb-16 tracking-tight text-center text-blue-800">Education</h2>
    
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 mb-8">
          <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <a 
              href={education.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-32 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              {education.logo ? (
                <img 
                  src={education.logo} 
                  alt={`${education.institution} logo`}
                  className="w-full h-32 object-contain p-5"
                />
              ) : (
                <PlaceholderImage text="Purdue University Logo" className="w-full h-32 object-contain p-5" />
              )}
            </a>
          </div>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-medium text-gray-900 mb-2">{education.degree}</h3>
          <p className="text-lg text-gray-600">Minors: {education.minors.join(" | ")}</p>
          <p className="text-lg text-blue-600 font-medium mt-2">{education.institution}</p>
          <p className="text-gray-600">{education.period}</p>
        </div>

        <div className="grid md:grid-cols-2 mb-6">
          <div>
          <h4 className="font-medium text-gray-900 mb-2">Awards:</h4>
          <div className=" gap-2">
            {education.awards.map((award, i) => (
              <div key={i} className="text-sm text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {award}
              </div>
            ))}
          </div>
          </div>
          <div>
              <h4 className="mt-4 md:mt-0 font-medium text-gray-900 mb-2">Affiliations:</h4>
              <div className="gap-2">
                {education.affiliations.map((affiliation, i) => (
                  <div key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <a 
                      href={affiliation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 hover:underline transition-colors duration-200"
                    >
                      {affiliation.name}

                    </a>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <h3 className="text-2xl font-light text-blue-800 text-center mb-6">Capstone Projects</h3>
        {education.projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isExpanded={expandedProject === index}
            onToggle={() => setExpandedProject(expandedProject === index ? null : index)}
          />
        ))}
      </div>

      <div className="space-y-6 mb-8">
        <h3 className="text-2xl font-light text-blue-800 text-center mb-6">Coursework</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h4 className="text-lg font-medium text-blue-700 mb-4 text-center">Industrial Engineering</h4>
            <CourseList 
              courses={education.coursework.major} 
              category="major"
              expandedCourse={expandedCourse}
              setExpandedCourse={setExpandedCourse}
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h4 className="text-lg font-medium text-blue-700 mb-4 text-center">Economics Minor</h4>
            <CourseList 
              courses={education.coursework.economics} 
              category="econ"
              expandedCourse={expandedCourse}
              setExpandedCourse={setExpandedCourse}
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h4 className="text-lg font-medium text-blue-700 mb-4 text-center">Statistics Minor</h4>
            <CourseList 
              courses={education.coursework.statistics} 
              category="stat"
              expandedCourse={expandedCourse}
              setExpandedCourse={setExpandedCourse}
            />
          </div>
        </div>
      </div>
    </div>
    
    <ChevronButton targetSection="work" />
  </SectionWrapper>
);