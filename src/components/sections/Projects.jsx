import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SectionWrapper } from '../common/SectionWrapper';
import { ChevronButton } from '../common/ChevronButton';
import { TechTag } from '../common/TechTag';
import { PlaceholderImage } from '../common/PlaceholderImage';

const ProjectCard = ({ project, index }) => (
  <div className="group">
    <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-light tracking-tight">{project.title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <TechTag key={i} tech={tech} variant="gray" />
          ))}
        </div>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md inline-flex items-center space-x-2 text-gray-900 hover:bg-blue-200 transition-colors duration-200 "
            > 
          <span className="pl-1 ">View Project </span>
          <ExternalLink className="w-4 h-4 pr-1" />
        </a>
      </div>
      <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <div className="relative overflow-hidden rounded-lg">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} demo`}
              className="w-full h-auto max-h-80 object-contain"
              loading="lazy"
            />
          ) : (
            <div className="w-full aspect-video">
              <PlaceholderImage text="Project Demo" className="w-full h-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export const Projects = ({ projects }) => (
  <SectionWrapper 
    id="work" 
    bgColor="bg-white" 
    gradientTop="white" 
    gradientBottom="blue-100"
  >
    <h2 className="text-4xl md:text-5xl font-thin mb-16 tracking-tight text-center text-blue-800">Personal Projects</h2>
    <div className="grid gap-20">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
    
    <ChevronButton targetSection="skills" />
  </SectionWrapper>
);