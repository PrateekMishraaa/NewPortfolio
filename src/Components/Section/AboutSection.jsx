import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const AboutSection = ({ onSectionChange }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Hover handlers
  const handleInfoCardHover = (e) => {
    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleInfoCardLeave = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleStatCardHover = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleStatCardLeave = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleRoleCardHover = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleRoleCardLeave = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .about-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          .about-title {
            font-size: 2.5rem !important;
          }
          
          .about-text {
            font-size: 1.1rem !important;
          }
          
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-title {
            font-size: 2rem !important;
          }
          
          .about-text {
            font-size: 1rem !important;
          }
          
          .about-role-card {
            padding: 24px !important;
          }
        }
      `}</style>

      <div style={styles.container} id="about">
        <div style={styles.content}>
          <div style={styles.grid} className="about-grid">
            {/* Left Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={styles.leftColumn}
            >
              <motion.h2
                variants={itemVariants}
                style={styles.title}
                className="about-title"
              >
                About <span style={styles.gradientText}>Me</span>
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                style={styles.text}
                className="about-text"
              >
                I'm a passionate Full Stack Developer with 2.5+ years of experience 
                specializing in MERN stack applications. Currently working at Goverdhan Learning Cloud Pvt Ltd, where I build scalable and secure web applications 
                for various domains including hospitality and government sectors.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                style={styles.text}
                className="about-text"
              >
                My expertise includes building React frontends, Node.js APIs with JWT 
                authentication, and MongoDB databases. I'm committed to writing clean, 
                efficient code and optimizing application performance.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                style={styles.infoGrid}
                className="about-info-grid"
              >
                <div 
                  style={styles.infoCard}
                  onMouseEnter={handleInfoCardHover}
                  onMouseLeave={handleInfoCardLeave}
                >
                  <div style={styles.infoIcon}>
                    <FaGraduationCap />
                  </div>
                  <h3 style={styles.infoTitle}>Education</h3>
                  <p style={styles.infoText}>
                    BCA from IGNOU<br />
                    Full Stack Development<br />
                    MERN Stack Specialization
                  </p>
                </div>
                
                <div 
                  style={styles.infoCard}
                  onMouseEnter={handleInfoCardHover}
                  onMouseLeave={handleInfoCardLeave}
                >
                  <div style={styles.infoIcon}>
                    <FaCode />
                  </div>
                  <h3 style={styles.infoTitle}>Focus Areas</h3>
                  <p style={styles.infoText}>
                    Clean Code Architecture<br />
                    Performance Optimization<br />
                    Secure Backend Development
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={styles.rightColumn}
            >
              <div style={styles.statsGrid} className="about-stats-grid">
                <div 
                  style={styles.statCard}
                  onMouseEnter={handleStatCardHover}
                  onMouseLeave={handleStatCardLeave}
                >
                  <div style={styles.statNumber}>2.5+</div>
                  <div style={styles.statLabel}>Years Experience</div>
                </div>
                
                <div 
                  style={styles.statCard}
                  onMouseEnter={handleStatCardHover}
                  onMouseLeave={handleStatCardLeave}
                >
                  <div style={styles.statNumber}>20+</div>
                  <div style={styles.statLabel}>Projects Completed</div>
                </div>
                
                <div 
                  style={styles.statCard}
                  onMouseEnter={handleStatCardHover}
                  onMouseLeave={handleStatCardLeave}
                >
                  <div style={styles.statNumber}>5+</div>
                  <div style={styles.statLabel}>Live Projects</div>
                </div>
              </div>
              
              <motion.div
                variants={itemVariants}
                style={styles.roleCard}
                className="about-role-card"
                onMouseEnter={handleRoleCardHover}
                onMouseLeave={handleRoleCardLeave}
              >
                <div style={styles.roleHeader}>
                  <div style={styles.roleIcon}>
                    <FaRocket />
                  </div>
                  <h3 style={styles.roleTitle}>Current Role</h3>
                </div>
                <div style={styles.roleContent}>
                  <p style={styles.roleText}>
                    Full Stack Developer at Yuvamanthan.<br />
                    Building React frontends & Node.js APIs<br />
                    Implementing role-based dashboards with JWT
                  </p>
                </div>
                
                {/* Domain tags */}
                <div style={styles.domainContainer}>
                  <span style={styles.domainTag}>Hospitality</span>
                  <span style={styles.domainTag}>Government</span>
                  <span style={styles.domainTag}>E-commerce</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 100%)',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  leftColumn: {},
  rightColumn: {},
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '40px',
    fontFamily: "'Space Grotesk', monospace",
    color: '#ffffff',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: 1.8,
    color: '#d4d4d8',
    marginBottom: '40px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginBottom: '40px',
  },
  infoCard: {
    padding: '25px',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  infoIcon: {
    fontSize: '28px',
    color: '#3b82f6',
    marginBottom: '15px',
  },
  infoTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#ffffff',
  },
  infoText: {
    fontSize: '0.95rem',
    color: '#a1a1aa',
    lineHeight: 1.6,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '40px',
  },
  statCard: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.02)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#3b82f6',
    marginBottom: '5px',
    fontFamily: "'Space Grotesk', monospace",
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#a1a1aa',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  roleCard: {
    padding: '32px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  roleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },
  roleIcon: {
    fontSize: '32px',
    color: '#3b82f6',
  },
  roleTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#ffffff',
  },
  roleContent: {
    marginBottom: '24px',
  },
  roleText: {
    color: '#a1a1aa',
    lineHeight: 1.6,
  },
  domainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  domainTag: {
    padding: '6px 12px',
    borderRadius: '20px',
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  },
};

// Add additional domain tag hover effect
const domainTagStyle = styles.domainTag;
Object.assign(domainTagStyle, {
  ':hover': {
    background: 'rgba(59, 130, 246, 0.2)',
    transform: 'translateY(-2px)',
  },
});

export default AboutSection;