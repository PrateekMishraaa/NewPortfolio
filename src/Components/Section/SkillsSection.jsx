import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaShieldAlt,
  FaBolt,
  FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiJest,
  SiGit
} from 'react-icons/si';

const SkillsSection = ({ onSectionChange }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "React.js", level: 95, icon: <FaReact style={{ color: '#06b6d4' }} /> },
        { name: "JavaScript", level: 90, icon: <SiJavascript style={{ color: '#eab308' }} /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript style={{ color: '#3b82f6' }} /> },
        { name: "Redux", level: 85, icon: <SiRedux style={{ color: '#a855f7' }} /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss style={{ color: '#14b8a6' }} /> },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        { name: "Node.js", level: 90, icon: <FaNodeJs style={{ color: '#22c55e' }} /> },
        { name: "Express.js", level: 88, icon: <SiExpress style={{ color: '#6b7280' }} /> },
        { name: "MongoDB", level: 85, icon: <SiMongodb style={{ color: '#16a34a' }} /> },
        { name: "REST APIs", level: 92, icon: <FaCode style={{ color: '#60a5fa' }} /> },
        { name: "JWT Authentication", level: 88, icon: <FaShieldAlt style={{ color: '#fbbf24' }} /> },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaBolt />,
      skills: [
        { name: "Git & GitHub", level: 90, icon: <SiGit style={{ color: '#f97316' }} /> },
        { name: "Docker", level: 75, icon: <SiDocker style={{ color: '#60a5fa' }} /> },
        { name: "Jest", level: 80, icon: <SiJest style={{ color: '#ef4444' }} /> },
        { name: "Performance", level: 85, icon: <FaBolt style={{ color: '#eab308' }} /> },
        { name: "Clean Code", level: 90, icon: <FaCode style={{ color: '#22c55e' }} /> },
      ]
    }
  ];

  // Inline styles
  const styles = {
    section: {
      position: 'relative',
      height: '100vh',
      marginTop:"750px",
      display: 'flex',
      alignItems: 'center',
      padding: '5rem 0'
    },
    container: {
      maxWidth: '80rem',
      margin: '0 auto',
      width: '100%'
    },
    title: {
      fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      marginBottom: '3rem',
      textAlign: 'center'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    glassEffect: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem'
    },
    skillCard: {
      padding: '2rem',
      borderRadius: '1rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    categoryIcon: {
      fontSize: '1.875rem',
      color: '#667eea'
    },
    categoryTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    skillItem: {
      marginBottom: '1.5rem'
    },
    skillHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    skillNameContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    skillIcon: {
      fontSize: '1.25rem'
    },
    skillName: {
      fontWeight: '500'
    },
    skillLevel: {
      color: '#667eea',
      fontWeight: '600'
    },
    progressBar: {
      height: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '9999px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      borderRadius: '9999px'
    },
    expertiseTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    expertiseGrid: {
      display: 'grid',
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    },
    expertiseCard: {
      padding: '1.5rem',
      borderRadius: '1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    expertiseNumber: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      color: '#667eea',
      marginBottom: '1rem',
      transition: 'transform 0.3s ease'
    },
    expertiseCardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    expertiseCardDesc: {
      color: '#9ca3af'
    }
  };

  return (
    <section style={styles.section} id="skills">
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.title}
        >
          Technical <span style={styles.gradientText}>Skills</span>
        </motion.h2>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              style={styles.skillCard}
            >
              <div style={styles.categoryHeader}>
                <div style={styles.categoryIcon}>
                  {category.icon}
                </div>
                <h3 style={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={styles.skillItem}>
                    <div style={styles.skillHeader}>
                      <div style={styles.skillNameContainer}>
                        <span style={styles.skillIcon}>{skill.icon}</span>
                        <span style={styles.skillName}>{skill.name}</span>
                      </div>
                      <span style={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    
                    <div style={styles.progressBar}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={styles.progressFill}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '17rem' }}
        >
          <h3 style={styles.expertiseTitle}>Key Expertise</h3>
          
          <div style={styles.expertiseGrid}>
            {[
              { title: "MERN Stack", desc: "Complete full-stack development" },
              { title: "JWT Auth", desc: "Secure authentication systems" },
              { title: "Scalable APIs", desc: "High-performance backend APIs" },
              { title: "Optimization", desc: "Performance & speed optimization" },
            ].map((expertise, index) => (
              <div
                key={index}
                style={styles.expertiseCard}
              >
                <div style={styles.expertiseNumber}>
                  {index + 1}
                </div>
                <h4 style={styles.expertiseCardTitle}>{expertise.title}</h4>
                <p style={styles.expertiseCardDesc}>{expertise.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;