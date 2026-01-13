import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = ({ onSectionChange }) => {
  const experiences = [
    {
      company: "Goverdhan Learning Cloud Pvt Ltd.",
      position: "Full Stack Developer",
      period: "2026 - Present",
      location: "Remote",
      description: "Building scalable React frontends, secure Node.js APIs, and role-based admin dashboards using JWT authentication and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    },
    {
      company: "Royal Collection Hotels and Resorts",
      position: "MERN Stack Developer",
      period: "2024 - 2025",
      location: "Remote",
      description: "Developed full-stack applications for various clients including hospitality and government sectors.",
      technologies: ["React", "Express", "MongoDB", "Redux", "Socket.io"],
    },
    {
      company: "SKS Tech Solutions",
      position: "Full Stack Developer",
      period: "2023 - 2024",
      location: "GitHub",
      description: "Contributed to various open-source projects and built personal projects to enhance skills.",
      technologies: ["JavaScript", "React", "Node.js", "Git", "Docker"],
    },
     {
      company: "Triangle Syscoms Pvt Ltd",
      position: "Internship- As a full Stack Developer",
      period: "2022- 2023",
      location: "GitHub",
      description: "Contributed to various open-source projects and built personal projects to enhance skills.",
      technologies: ["JavaScript", "React", "Node.js", "Git", "Docker"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Card hover handlers
  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  // Tech badge hover handlers
  const handleTechMouseEnter = (e) => {
    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleTechMouseLeave = (e) => {
    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <div style={styles.container} id="experience">
      <div style={styles.content}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.title}
        >
          Work <span style={styles.gradientText}>Experience</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={styles.timelineContainer}
        >
          {/* Timeline line */}
          <div style={styles.timelineLine}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                ...styles.timelineItem,
                ...(index % 2 === 0 ? styles.timelineItemEven : styles.timelineItemOdd)
              }}
            >
              {/* Timeline dot */}
              <div style={{
                ...styles.timelineDot,
                ...(index === 0 ? styles.firstDot : {})
              }}></div>

              <div 
                style={styles.card}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div style={styles.cardHeader}>
                  <div>
                    <h3 style={styles.position}>{exp.position}</h3>
                    <div style={styles.company}>
                      <FaBriefcase style={{ fontSize: '14px' }} />
                      <span style={styles.companyName}>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div style={styles.metaInfo}>
                    <div style={styles.metaItem}>
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p style={styles.description}>{exp.description}</p>

                <div style={styles.techContainer}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={styles.techBadge}
                      onMouseEnter={handleTechMouseEnter}
                      onMouseLeave={handleTechMouseLeave}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    background: 'linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 100%)',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '60px',
    textAlign: 'center',
    fontFamily: "'Space Grotesk', monospace",
    color: '#ffffff',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  timelineContainer: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
  },
  timelineLine: {
    position: 'absolute',
    left: '32px',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '48px',
  },
  timelineItemEven: {
    paddingLeft: '80px',
  },
  timelineItemOdd: {
    paddingLeft: '80px',
  },
  timelineDot: {
    position: 'absolute',
    left: '24px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    border: '4px solid #0a0a0a',
    zIndex: 1,
  },
  firstDot: {
    top: 0,
  },
  card: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
  position: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '4px',
    color: '#ffffff',
  },
  company: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#3b82f6',
    marginBottom: '16px',
  },
  companyName: {
    fontSize: '1.125rem',
    fontWeight: 600,
  },
  metaInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '8px',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#a1a1aa',
    fontSize: '0.875rem',
  },
  description: {
    color: '#d1d5db',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techBadge: {
    padding: '6px 12px',
    borderRadius: '20px',
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  },
};

// Add responsive styles
const responsiveStyles = `
  @media (min-width: 768px) {
    .experience-timeline-line {
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
    
    .experience-timeline-dot {
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
    
    .experience-timeline-item-even {
      padding-left: 0 !important;
      padding-right: calc(50% + 32px) !important;
      text-align: right !important;
    }
    
    .experience-timeline-item-odd {
      padding-left: calc(50% + 32px) !important;
      padding-right: 0 !important;
    }
    
    .experience-card-header {
      flex-direction: row !important;
      justify-content: space-between !important;
      align-items: flex-start !important;
    }
    
    .experience-meta-info {
      text-align: right !important;
      align-items: flex-end !important;
    }
  }
  
  @media (max-width: 768px) {
    .experience-title {
      font-size: 2.5rem !important;
    }
    
    .experience-timeline-line {
      left: 32px !important;
    }
    
    .experience-timeline-dot {
      left: 24px !important;
    }
  }
  
  @media (max-width: 480px) {
    .experience-title {
      font-size: 2rem !important;
    }
    
    .experience-card-header {
      flex-direction: column !important;
    }
    
    .experience-meta-info {
      margin-top: 16px !important;
      flex-direction: row !important;
      justify-content: space-between !important;
    }
  }
`;

// Wrapper component with responsive styles
const ExperienceSectionWithStyles = (props) => {
  return (
    <>
      <style>{responsiveStyles}</style>
      <div 
        className="experience-section"
        style={{
          ...styles.container,
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <ExperienceSection {...props} />
      </div>
    </>
  );
};

export default ExperienceSectionWithStyles;