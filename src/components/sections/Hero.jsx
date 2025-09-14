import React from 'react';
import { SocialLinks } from '../common/SocialLinks';
import { ChevronButton } from '../common/ChevronButton';

export const Hero = ({ personalInfo, scrollY }) => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div 
      className="absolute inset-0 bg-blue-50"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    />
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
      <div className="mb-8">
        <div className="flex items-center justify-center md:justify-center mb-6">
                  <img 
                    src="/images/profile.jpg"
                    alt="Joseph Tay"
                    className="w-16 h-20 object-cover rounded-xl mr-4 md:hidden shadow-lg"
                  />
          <h1 className="text-4xl md:text-8xl font-thin tracking-normal leading-none">
            <span className="text-gray-900">{personalInfo.name}</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-blue-600 font-medium max-w-2xl mx-auto leading-relaxed">
          {personalInfo.title}
        </p>
      </div>
      
      <div className="mb-8">
        <SocialLinks 
          email={personalInfo.email}
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
          variant="outline"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-center mt-12">
        <div className="md:col-span-1 hidden md:block">
            <img 
              src="/images/profile.jpg"
              alt="Joseph Tay professional portrait"
              className="w-64 h-80 object-cover rounded-3xl shadow-lg"
            />
        </div>
        <div className="md:col-span-2 text-left">
          <div className="space-y-4 text-m text-gray-700">
            {personalInfo.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
<ChevronButton targetSection="experience" />
    </div>
  </section>
);


