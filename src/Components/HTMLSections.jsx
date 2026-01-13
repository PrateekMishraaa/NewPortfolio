// src/components/HTMLSections.jsx
import React from 'react';
import HeroSection from './Section/HeroSection.jsx';
import AboutSection from './Section/AboutSection.jsx';
import ExperienceSection from './Section/ExperienceSection.jsx';
import ProjectsSection from './Section/ProjectSection.jsx';
import SkillsSection from './Section/SkillsSection.jsx';
import ContactSection from './Section/ContactSection.jsx';

const HTMLSections = ({ currentSection, onSectionChange }) => {
  return (
    <div className="relative">
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <HeroSection onSectionChange={onSectionChange} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <AboutSection onSectionChange={onSectionChange} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <ExperienceSection onSectionChange={onSectionChange} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <ProjectsSection onSectionChange={onSectionChange} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <SkillsSection onSectionChange={onSectionChange} />
      </div>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <ContactSection onSectionChange={onSectionChange} />
      </div>
    </div>
  );
};

export default HTMLSections;