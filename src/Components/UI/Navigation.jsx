// In src/Components/UI/Navigation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaProjectDiagram, 
  FaCode, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navigation = ({ currentSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { id: 'skills', icon: <FaCode />, label: 'Skills' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  // Nav button styles
  const navButtonStyle = (isActive) => ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
    border: isActive ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
    color: isActive ? '#3b82f6' : '#ffffff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    // Reset to active/inactive state
    const buttonId = e.currentTarget.dataset.section;
    if (buttonId === currentSection) {
      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    } else {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div style={{
        position: 'fixed',
        top: '50%',
        right: '30px',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}>
        {sections.map((section) => (
          <button
            key={section.id}
            data-section={section.id}
            onClick={() => handleNavClick(section.id)}
            style={navButtonStyle(currentSection === section.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {section.icon}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          position: 'fixed',
          top: '24px',
          right: '24px',
          zIndex: 50,
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '250px',
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 40,
          paddingTop: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: currentSection === section.id ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                color: currentSection === section.id ? '#3b82f6' : 'rgba(255, 255, 255, 0.7)',
                border: 'none',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (currentSection !== section.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (currentSection !== section.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;