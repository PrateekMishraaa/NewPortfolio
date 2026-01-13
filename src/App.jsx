// src/App.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Scene from './Components/Scene/Scene.jsx';
import LoadingScreen from './Components/UI/LoadingScreen.jsx';
import Navigation from './Components/UI/Navigation.jsx';
import HeroSection from './Components/Section/HeroSection.jsx';
import AboutSection from './Components/Section/AboutSection.jsx';
import ExperienceSection from './Components/Section/ExperienceSection.jsx';
import ProjectsSection from './Components/Section/ProjectSection.jsx';
import SkillsSection from './Components/Section/SkillsSection.jsx';
import ContactSection from './Components/Section/ContactSection.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      <div style={styles.appContainer}>
        {/* 3D Canvas - Fixed Background */}
        <div style={styles.canvasContainer}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            shadows
          >
            <color attach="background" args={['#0a0a0a']} />
            <Scene currentSection={currentSection} />
          </Canvas>
        </div>

        {/* Navigation */}
        <div style={styles.navContainer}>
          <Navigation 
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
          />
        </div>

        {/* Content Sections */}
        <div style={styles.contentContainer}>
          <section id="home" style={styles.section}>
            <HeroSection onSectionChange={handleSectionChange} />
          </section>
          <section id="about" style={styles.section}>
            <AboutSection onSectionChange={handleSectionChange} />
          </section>
          <section id="experience" style={styles.section}>
            <ExperienceSection onSectionChange={handleSectionChange} />
          </section>
          <section id="projects" style={styles.section}>
            <ProjectsSection onSectionChange={handleSectionChange} />
          </section>
          <section id="skills" style={styles.section}>
            <SkillsSection onSectionChange={handleSectionChange} />
          </section>
          <section id="contact" style={styles.section}>
            <ContactSection onSectionChange={handleSectionChange} />
          </section>
        </div>
      </div>
    </>
  );
}

const styles = {
  appContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  canvasContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  navContainer: {
    position: 'fixed',
    zIndex: 50,
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 10,
  },
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
  },
};

export default App;