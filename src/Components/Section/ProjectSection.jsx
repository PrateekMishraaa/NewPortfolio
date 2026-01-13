import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaLock,
  FaChartLine,
  FaCodeBranch
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiRedux, 
  SiTailwindcss,
  SiSocketdotio,
  SiDocker,
  SiNextdotjs,
  SiTypescript
} from 'react-icons/si';

const ProjectSection = ({ onSectionChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef();

  // Project data based on your experience
  const projects = [
    {
      id: 1,
      title: "Safein-School",
      category: "full-stack",
      description: "Complete hotel management solution with booking, billing, and inventory modules for live production use in hospitality sector.",
      longDescription: "A comprehensive hotel management system built with MERN stack featuring real-time booking, automated billing, inventory management, and staff management modules. Implemented secure payment gateway and reporting dashboard.",
      technologies: [
        { name: "React", icon: <FaReact style={{ color: '#06b6d4' }} />, color: "rgba(6, 182, 212, 0.1)" },
        { name: "Node.js", icon: <FaNodeJs style={{ color: '#22c55e' }} />, color: "rgba(34, 197, 94, 0.1)" },
        { name: "MongoDB", icon: <SiMongodb style={{ color: '#16a34a' }} />, color: "rgba(22, 163, 74, 0.1)" },
        { name: "Express", icon: <SiExpress style={{ color: '#6b7280' }} />, color: "rgba(107, 114, 128, 0.1)" }
      ],
      features: [
        "Real-time booking system",
        "Role-based access control",
        "Payment gateway integration",
        "Automated reporting",
        "Inventory management"
      ],
      githubLink: "https://github.com/PrateekMishraaa",
      liveLink: "https://www.safeinschool.in/",
      status: "live",
      domain: "School",
      role: "Full Stack Developer",
      year: "2023"
    },
    {
      id: 2,
      title: "Yuvamanthan",
      category: "backend",
      description: "Secure government portal with role-based access, document management, and audit logging for sensitive data handling.",
      longDescription: "High-security government portal featuring multi-level authentication, document workflow management, audit logging, and reporting system. Built with focus on security and compliance.",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs style={{ color: '#22c55e' }} />, color: "rgba(34, 197, 94, 0.1)" },
        { name: "Express", icon: <SiExpress style={{ color: '#6b7280' }} />, color: "rgba(107, 114, 128, 0.1)" },
        { name: "MongoDB", icon: <SiMongodb style={{ color: '#16a34a' }} />, color: "rgba(22, 163, 74, 0.1)" },
        { name: "Socket.io", icon: <SiSocketdotio style={{ color: '#000000' }} />, color: "rgba(0, 0, 0, 0.1)" }
      ],
      features: [
        "Multi-factor authentication",
        "Document workflow system",
        "Audit logging",
        "Role-based permissions",
        "Real-time notifications"
      ],
      githubLink: null,
      liveLink: "https://www.yuvamanthan.org/",
      status: "live",
      domain: "Government",
      role: "Backend Developer",
      year: "2023"
    },
    {
      id: 3,
      title: "Epicircle Admin Dashboard",
      category: "frontend",
      description: "React-based admin dashboard with real-time analytics, product management, and order processing capabilities.",
      longDescription: "Feature-rich admin dashboard for e-commerce platforms with real-time analytics, product CRUD operations, order management, and customer relationship management.",
      technologies: [
        { name: "React", icon: <FaReact style={{ color: '#06b6d4' }} />, color: "rgba(6, 182, 212, 0.1)" },
        { name: "Redux", icon: <SiRedux style={{ color: '#a855f7' }} />, color: "rgba(168, 85, 247, 0.1)" },
        { name: "Tailwind", icon: <SiTailwindcss style={{ color: '#14b8a6' }} />, color: "rgba(20, 184, 166, 0.1)" },
        { name: "Chart.js", icon: <FaChartLine style={{ color: '#ec4899' }} />, color: "rgba(236, 72, 153, 0.1)" },
        { name: "TypeScript", icon: <SiTypescript style={{ color: '#3b82f6' }} />, color: "rgba(59, 130, 246, 0.1)" }
      ],
      features: [
        "Real-time analytics",
        "Product management",
        "Order processing",
        "Customer management",
        "Responsive design"
      ],
      githubLink: "https://github.com",
      liveLink: "https://epicircle.earth/",
      status: "Live",
      domain: "E-commerce",
      role: "Frontend Developer",
      year: "2024"
    },
    {
      id: 4,
      title: "JWT Authentication System",
      category: "backend",
      description: "Secure authentication system with JWT, refresh tokens, and role-based authorization for scalable applications.",
      longDescription: "Robust authentication system implementing JWT with refresh tokens, role-based authorization, rate limiting, and security best practices. Designed for high-traffic applications.",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs style={{ color: '#22c55e' }} />, color: "rgba(34, 197, 94, 0.1)" },
        { name: "Express", icon: <SiExpress style={{ color: '#6b7280' }} />, color: "rgba(107, 114, 128, 0.1)" },
        { name: "MongoDB", icon: <SiMongodb style={{ color: '#16a34a' }} />, color: "rgba(22, 163, 74, 0.1)" },
        { name: "Redis", icon: <FaServer style={{ color: '#f97316' }} />, color: "rgba(249, 115, 22, 0.1)" }
      ],
      features: [
        "JWT authentication",
        "Refresh tokens",
        "Role-based access",
        "Rate limiting",
        "Security headers"
      ],
      githubLink: "https://github.com",
      liveLink: null,
      status: "completed",
      domain: "Security",
      role: "Backend Developer",
      year: "2023"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      category: "full-stack",
      description: "Real-time chat application with Socket.io, private rooms, file sharing, and message persistence.",
      longDescription: "Modern chat application featuring real-time messaging, private chat rooms, file sharing, message history, and user presence indicators. Built with scalability in mind.",
      technologies: [
        { name: "React", icon: <FaReact style={{ color: '#06b6d4' }} />, color: "rgba(6, 182, 212, 0.1)" },
        { name: "Node.js", icon: <FaNodeJs style={{ color: '#22c55e' }} />, color: "rgba(34, 197, 94, 0.1)" },
        { name: "Socket.io", icon: <SiSocketdotio style={{ color: '#000000' }} />, color: "rgba(0, 0, 0, 0.1)" },
        { name: "MongoDB", icon: <SiMongodb style={{ color: '#16a34a' }} />, color: "rgba(22, 163, 74, 0.1)" },
        { name: "Tailwind", icon: <SiTailwindcss style={{ color: '#14b8a6' }} />, color: "rgba(20, 184, 166, 0.1)" }
      ],
      features: [
        "Real-time messaging",
        "Private chat rooms",
        "File sharing",
        "Message history",
        "User presence"
      ],
      githubLink: "https://github.com",
      liveLink: "https://chat-demo.com",
      status: "completed",
      domain: "Communication",
      role: "Full Stack Developer",
      year: "2023"
    },
    {
      id: 6,
      title: "Performance Monitoring Tool",
      category: "frontend",
      description: "React performance monitoring dashboard with real-time metrics, bundle analysis, and optimization suggestions.",
      longDescription: "Advanced performance monitoring tool for React applications featuring real-time performance metrics, bundle analysis, lighthouse integration, and actionable optimization recommendations.",
      technologies: [
        { name: "React", icon: <FaReact style={{ color: '#06b6d4' }} />, color: "rgba(6, 182, 212, 0.1)" },
        { name: "TypeScript", icon: <SiTypescript style={{ color: '#3b82f6' }} />, color: "rgba(59, 130, 246, 0.1)" },
        { name: "Chart.js", icon: <FaChartLine style={{ color: '#ec4899' }} />, color: "rgba(236, 72, 153, 0.1)" },
        { name: "Webpack", icon: <FaCodeBranch style={{ color: '#60a5fa' }} />, color: "rgba(96, 165, 250, 0.1)" },
        { name: "Next.js", icon: <SiNextdotjs style={{ color: '#000000' }} />, color: "rgba(0, 0, 0, 0.1)" }
      ],
      features: [
        "Real-time metrics",
        "Bundle analysis",
        "Lighthouse integration",
        "Performance insights",
        "Optimization suggestions"
      ],
      githubLink: "https://github.com",
      liveLink: "https://perf-demo.com",
      status: "development",
      domain: "Performance",
      role: "Frontend Developer",
      year: "2024"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'live', label: 'Live Projects' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'live') return project.status === 'live';
    return project.category === activeFilter;
  });

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  // Inline styles
  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '5rem 0'
    },
    container: {
      maxWidth: '80rem',
      margin: '0 auto',
      width: '100%'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      color: '#9ca3af',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    filterButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: '500',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    glassEffect: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    gradientBg: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    projectCard: {
      height: '100%',
      padding: '1.5rem',
      borderRadius: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    },
    statusBadge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    techPill: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    modalOverlay: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(4px)'
    },
    modalContent: {
      position: 'relative',
      maxWidth: '56rem',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    modalClose: {
      position: 'absolute',
      top: '1.5rem',
      right: '1.5rem',
      zIndex: 10,
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      transition: 'color 0.3s',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent'
    },
    highlightCard: {
      padding: '1rem',
      borderRadius: '0.75rem'
    }
  };

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.sectionHeader}
        >
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '1rem' }}>
            Featured <span style={styles.title}>Projects</span>
          </h2>
          <p style={styles.subtitle}>
            A collection of production-grade applications built with MERN stack, 
            focusing on scalability, security, and performance optimization.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem' }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                ...styles.filterButton,
                ...(activeFilter === filter.id ? styles.gradientBg : styles.glassEffect),
                color: activeFilter === filter.id ? 'white' : '#d1d5db',
                boxShadow: activeFilter === filter.id ? '0 10px 15px -3px rgba(102, 126, 234, 0.25)' : 'none'
              }}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ transition: 'transform 0.3s' }}
            >
              <div 
                onClick={() => setSelectedProject(project)}
                style={{
                  ...styles.projectCard,
                  ...styles.glassEffect,
                  borderColor: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Project Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>{project.title}</h3>
                      <span style={{
                        ...styles.statusBadge,
                        backgroundColor: project.status === 'live' 
                          ? 'rgba(34, 197, 94, 0.1)' 
                          : project.status === 'development'
                          ? 'rgba(234, 179, 8, 0.1)'
                          : 'rgba(59, 130, 246, 0.1)',
                        color: project.status === 'live' 
                          ? '#22c55e' 
                          : project.status === 'development'
                          ? '#eab308'
                          : '#3b82f6'
                      }}>
                        {project.status === 'live' ? 'Live' : project.status === 'development' ? 'In Dev' : 'Completed'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#9ca3af' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <FaCodeBranch style={{ fontSize: '0.75rem' }} />
                        {project.domain}
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: '1.6', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.techPill,
                        backgroundColor: tech.color
                      }}
                    >
                      <span style={{ fontSize: '1.125rem' }}>{tech.icon}</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{tech.name}</span>
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div style={{ ...styles.techPill, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                      <span style={{ fontSize: '0.875rem' }}>+{project.technologies.length - 4}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {project.features.slice(0, 2).map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: '#667eea' }}></div>
                      <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    style={{
                      color: '#667eea',
                      backgroundColor: 'transparent',
                      border: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'color 0.3s'
                    }}
                  >
                    View Details →
                  </button>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.5rem',
                          ...styles.glassEffect,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s',
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.5rem',
                          ...styles.glassEffect,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s',
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          <div style={{ padding: '1.5rem', borderRadius: '1rem', ...styles.glassEffect }}>
            <div style={{ fontSize: '1.875rem', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '0.5rem', ...styles.title }}>
              {projects.filter(p => p.status === 'live').length}+
            </div>
            <div style={{ color: '#9ca3af' }}>Live Production Projects</div>
          </div>
          
          <div style={{ padding: '1.5rem', borderRadius: '1rem', ...styles.glassEffect }}>
            <div style={{ fontSize: '1.875rem', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '0.5rem', ...styles.title }}>
              {projects.filter(p => p.category === 'full-stack').length}+
            </div>
            <div style={{ color: '#9ca3af' }}>Full Stack Projects</div>
          </div>
          
          <div style={{ padding: '1.5rem', borderRadius: '1rem', ...styles.glassEffect }}>
            <div style={{ fontSize: '1.875rem', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '0.5rem', ...styles.title }}>
              {projects.length}+
            </div>
            <div style={{ color: '#9ca3af' }}>Total Projects</div>
          </div>
          
          <div style={{ padding: '1.5rem', borderRadius: '1rem', ...styles.glassEffect }}>
            <div style={{ fontSize: '1.875rem', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '0.5rem', ...styles.title }}>
              100%
            </div>
            <div style={{ color: '#9ca3af' }}>Client Satisfaction</div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div style={styles.modalOverlay}>
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={styles.modalContent}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={styles.modalClose}
              >
                ✕
              </button>

              <div style={{ padding: '2rem' }}>
                {/* Modal Header */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>{selectedProject.title}</h3>
                      <span style={{
                        ...styles.statusBadge,
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.875rem',
                        backgroundColor: selectedProject.status === 'live' 
                          ? 'rgba(34, 197, 94, 0.1)' 
                          : selectedProject.status === 'development'
                          ? 'rgba(234, 179, 8, 0.1)'
                          : 'rgba(59, 130, 246, 0.1)',
                        color: selectedProject.status === 'live' 
                          ? '#22c55e' 
                          : selectedProject.status === 'development'
                          ? '#eab308'
                          : '#3b82f6'
                      }}>
                        {selectedProject.status === 'live' ? 'Live Production' : 
                         selectedProject.status === 'development' ? 'In Development' : 'Completed'}
                      </span>
                    </div>
                    
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginBottom: '1.5rem' }}>
                      <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                        <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Domain</div>
                        <div style={{ fontWeight: '500' }}>{selectedProject.domain}</div>
                      </div>
                      <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                        <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Role</div>
                        <div style={{ fontWeight: '500' }}>{selectedProject.role}</div>
                      </div>
                      <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                        <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Year</div>
                        <div style={{ fontWeight: '500' }}>{selectedProject.year}</div>
                      </div>
                      <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                        <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Category</div>
                        <div style={{ fontWeight: '500', textTransform: 'capitalize' }}>{selectedProject.category.replace('-', ' ')}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.75rem 1.5rem',
                          borderRadius: '0.75rem',
                          ...styles.glassEffect,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'all 0.3s'
                        }}
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.75rem 1.5rem',
                          borderRadius: '0.75rem',
                          ...styles.gradientBg,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          boxShadow: '0 10px 15px -3px rgba(102, 126, 234, 0.25)'
                        }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Long Description */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Project Overview</h4>
                  <p style={{ color: '#d1d5db', lineHeight: '1.75' }}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }}>
                  {/* Features List */}
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Key Features</h4>
                    <div>
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', marginBottom: '0.75rem' }}>
                          <div style={{ width: '0.5rem', height: '0.5rem', marginTop: '0.5rem', borderRadius: '50%', backgroundColor: '#667eea' }}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Technologies Used</h4>
                    <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                      {selectedProject.technologies.map((tech, index) => (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem',
                            borderRadius: '0.75rem',
                            backgroundColor: tech.color
                          }}
                        >
                          <span style={{ fontSize: '1.25rem' }}>{tech.icon}</span>
                          <span style={{ fontWeight: '500' }}>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Highlights */}
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Project Highlights</h4>
                  <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div style={{ ...styles.highlightCard, backgroundColor: 'rgba(102, 126, 234, 0.1)' }}>
                      <FaLock style={{ fontSize: '1.5rem', color: '#667eea', marginBottom: '0.75rem' }} />
                      <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Security Focus</h5>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>JWT authentication, role-based access, secure APIs</p>
                    </div>
                    <div style={{ ...styles.highlightCard, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}>
                      <FaChartLine style={{ fontSize: '1.5rem', color: '#a855f7', marginBottom: '0.75rem' }} />
                      <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Performance</h5>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Optimized for speed and scalability</p>
                    </div>
                    <div style={{ ...styles.highlightCard, backgroundColor: 'rgba(236, 72, 153, 0.1)' }}>
                      <FaMobileAlt style={{ fontSize: '1.5rem', color: '#ec4899', marginBottom: '0.75rem' }} />
                      <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Responsive Design</h5>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Fully responsive across all devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;