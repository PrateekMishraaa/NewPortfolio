import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = ({ onSectionChange }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "prateek.apphivey@gmail.com",
      link: "mailto:prateek.apphivey@gmail.com",
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9540802061",
      link: "tel:+9540802061",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Delhi/Badarpur",
      link: null,
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)"
    }
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/prateekmishra",
      color: "#ffffff",
      hoverColor: "#3b82f6"
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/prateekmishra",
      color: "#ffffff",
      hoverColor: "#0a66c2"
    },
    {
      platform: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/prateekmishra",
      color: "#ffffff",
      hoverColor: "#1da1f2"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        'service_your_service_id',
        'template_your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Prateek'
        },
        'your_public_key'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hover handlers
  const handleContactCardHover = (e, hasLink) => {
    if (hasLink) {
      e.currentTarget.style.transform = 'translateX(10px)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
    }
  };

  const handleContactCardLeave = (e, hasLink) => {
    if (hasLink) {
      e.currentTarget.style.transform = 'translateX(0)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    }
  };

  const handleSocialHover = (e, hoverColor) => {
    e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
    e.currentTarget.style.color = hoverColor;
    e.currentTarget.style.borderColor = hoverColor;
  };

  const handleSocialLeave = (e, originalColor) => {
    e.currentTarget.style.transform = 'scale(1) translateY(0)';
    e.currentTarget.style.color = originalColor;
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  };

  const handleInputFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleInputBlur = () => {
    setActiveField(null);
  };

  const handleCTAButtonClick = () => {
    onSectionChange('experience');
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-title {
            font-size: 2.5rem !important;
          }
          
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
          
          .contact-faq-item {
            padding: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem !important;
          }
          
          .contact-cta-buttons {
            flex-direction: column !important;
          }
          
          .contact-social-links {
            justify-content: center !important;
          }
        }
      `}</style>

      <div style={styles.container} id="contact">
        <div style={styles.content}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.header}
          >
            <h2 style={styles.title} className="contact-title">
              Get In <span style={styles.gradientText}>Touch</span>
            </h2>
            <p style={styles.subtitle}>
              Have a project in mind? Let's discuss how we can work together to build something amazing.
              I'm currently available for full-time opportunities and freelance projects.
            </p>
          </motion.div>

          <div style={styles.grid} className="contact-grid">
            {/* Left Column - Contact Info */}
            <div style={styles.leftColumn}>
              {/* Contact Info Cards */}
              <div style={styles.contactCards}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link || '#'}
                    target={info.link ? "_blank" : "_self"}
                    rel={info.link ? "noopener noreferrer" : ""}
                    style={{
                      ...styles.contactCard,
                      cursor: info.link ? 'pointer' : 'default',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => handleContactCardHover(e, info.link)}
                    onMouseLeave={(e) => handleContactCardLeave(e, info.link)}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div style={{ 
                      ...styles.contactIconContainer,
                      background: info.bgColor 
                    }}>
                      <div style={{ color: info.color, fontSize: '24px' }}>
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 style={styles.contactCardTitle}>{info.title}</h3>
                      <p style={styles.contactCardValue}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={styles.socialSection}
              >
                <h3 style={styles.socialTitle}>Connect With Me</h3>
                <div style={styles.socialLinks} className="contact-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialLink}
                      onMouseEnter={(e) => handleSocialHover(e, social.hoverColor)}
                      onMouseLeave={(e) => handleSocialLeave(e, social.color)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={styles.availabilityCard}
              >
                <div style={styles.availabilityHeader}>
                  <div style={{
                    ...styles.statusIndicator,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}></div>
                  <h3 style={styles.availabilityTitle}>Current Status</h3>
                </div>
                <p style={styles.availabilityText}>
                  I'm currently <span style={{ color: '#10b981', fontWeight: 600 }}>available</span> for:
                </p>
                <div style={styles.availabilityList}>
                  <div style={styles.availabilityItem}>
                    <div style={{ ...styles.availabilityDot, background: '#3b82f6' }}></div>
                    <span>Full-time opportunities</span>
                  </div>
                  <div style={styles.availabilityItem}>
                    <div style={{ ...styles.availabilityDot, background: '#8b5cf6' }}></div>
                    <span>Freelance projects</span>
                  </div>
                  <div style={styles.availabilityItem}>
                    <div style={{ ...styles.availabilityDot, background: '#ec4899' }}></div>
                    <span>Technical consultations</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={styles.rightColumn}
            >
              <div style={styles.formCard}>
                <h3 style={styles.formTitle}>Send Me a Message</h3>
                <p style={styles.formSubtitle}>
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
                  {/* Name & Email Row */}
                  <div style={styles.formRow} className="contact-form-grid">
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Your Name</label>
                      <div style={{
                        ...styles.inputContainer,
                        borderColor: activeField === 'name' ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: activeField === 'name' ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none'
                      }}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleInputFocus('name')}
                          onBlur={handleInputBlur}
                          required
                          style={styles.input}
                          placeholder="John Doe"
                        />
                        {formData.name && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={styles.inputIndicator}
                          >
                            <div style={styles.inputIndicatorDot}></div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email Address</label>
                      <div style={{
                        ...styles.inputContainer,
                        borderColor: activeField === 'email' ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: activeField === 'email' ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none'
                      }}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleInputFocus('email')}
                          onBlur={handleInputBlur}
                          required
                          style={styles.input}
                          placeholder="john@example.com"
                        />
                        {formData.email && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={styles.inputIndicator}
                          >
                            <div style={styles.inputIndicatorDot}></div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject</label>
                    <div style={{
                      ...styles.inputContainer,
                      borderColor: activeField === 'subject' ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: activeField === 'subject' ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none'
                    }}>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleInputFocus('subject')}
                        onBlur={handleInputBlur}
                        required
                        style={styles.input}
                        placeholder="Project Inquiry"
                      />
                      {formData.subject && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          style={styles.inputIndicator}
                        >
                          <div style={styles.inputIndicatorDot}></div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Message</label>
                    <div style={{
                      ...styles.textareaContainer,
                      borderColor: activeField === 'message' ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: activeField === 'message' ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none'
                    }}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleInputFocus('message')}
                        onBlur={handleInputBlur}
                        required
                        rows="6"
                        style={styles.textarea}
                        placeholder="Tell me about your project..."
                      />
                      {formData.message && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          style={styles.textareaIndicator}
                        >
                          <div style={styles.inputIndicatorDot}></div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div style={styles.submitContainer}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        ...styles.submitButton,
                        background: isSubmitting ? '#374151' : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <div style={styles.spinner}></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    {/* Status Messages */}
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          style={styles.successMessage}
                        >
                          <FaCheckCircle style={{ fontSize: '20px', color: '#10b981' }} />
                          <div>
                            <h4 style={styles.successTitle}>Message Sent Successfully!</h4>
                            <p style={styles.successText}>
                              Thank you for your message. I'll get back to you within 24 hours.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          style={styles.errorMessage}
                        >
                          <FaExclamationCircle style={{ fontSize: '20px', color: '#ef4444' }} />
                          <div>
                            <h4 style={styles.errorTitle}>Failed to Send Message</h4>
                            <p style={styles.errorText}>
                              Please try again or contact me directly via email.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>

                {/* Response Time Info */}
                <div style={styles.responseInfo}>
                  <div style={styles.responseIcon}>
                    <span style={{ color: '#3b82f6' }}>!</span>
                  </div>
                  <p style={styles.responseText}>
                    <span style={{ fontWeight: 600 }}>Typical Response Time:</span> Within 24 hours
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={styles.faqSection}
              >
                <h3 style={styles.faqTitle}>Frequently Asked Questions</h3>
                <div style={styles.faqList}>
                  {[
                    {
                      q: "What's your typical project timeline?",
                      a: "Depending on complexity, projects usually take 2-8 weeks. I provide detailed timelines during our initial discussion."
                    },
                    {
                      q: "Do you work with international clients?",
                      a: "Yes, I work with clients worldwide. I'm comfortable with remote collaboration across time zones."
                    },
                    {
                      q: "What's your development stack preference?",
                      a: "I specialize in MERN stack but I'm flexible based on project requirements."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index} 
                      style={styles.faqItem}
                      className="contact-faq-item"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <h4 style={styles.faqQuestion}>
                        <span style={{ color: '#3b82f6' }}>Q{index + 1}.</span>
                        {faq.q}
                      </h4>
                      <p style={styles.faqAnswer}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.footerCTA}
          >
            <div style={styles.ctaCard}>
              <h3 style={styles.ctaTitle}>Ready to Start Your Project?</h3>
              <p style={styles.ctaText}>
                Let's discuss how I can help bring your ideas to life with clean code and modern solutions.
              </p>
              <div style={styles.ctaButtons} className="contact-cta-buttons">
                <a
                  href="mailto:prateek.mishra@example.com"
                  style={styles.ctaPrimaryButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Email Me Directly
                </a>
                <button
                  onClick={handleCTAButtonClick}
                  style={styles.ctaSecondaryButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  View My Experience
                  <FaArrowRight style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>
     <div>

       <GitHubCalendar username='PrateekMishraaa'/>
     </div>

            {/* Copyright */}
            <div style={styles.copyright}>
              <p style={styles.copyrightText}>
                © {new Date().getFullYear()} Prateek Mishra. All rights reserved.
              </p>
              <p style={styles.techStack}>
                Built with React, Three.js & Inline CSS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '20px',
    marginTop:"178px",
    background: 'linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 100%)',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '24px',
    fontFamily: "'Space Grotesk', monospace",
    color: '#ffffff',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#a1a1aa',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '48px',
  },
  leftColumn: {},
  rightColumn: {},
  contactCards: {
    display: 'flex',
    marginTop:"450px",
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '48px',
  },
  contactCard: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    transition: 'all 0.3s ease',
  },
  contactIconContainer: {
    padding: '12px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactCardTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#ffffff',
  },
  contactCardValue: {
    fontSize: '0.875rem',
    color: '#a1a1aa',
  },
  socialSection: {
    marginBottom: '48px',
  },
  socialTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '24px',
    color: '#ffffff',
  },
  socialLinks: {
    display: 'flex',
    gap: '16px',
  },
  socialLink: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '20px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  availabilityCard: {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  availabilityHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  statusIndicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#10b981',
  },
  availabilityTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#ffffff',
  },
  availabilityText: {
    color: '#d1d5db',
    marginBottom: '16px',
    fontSize: '0.875rem',
  },
  availabilityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  availabilityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#a1a1aa',
    fontSize: '0.875rem',
  },
  availabilityDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  formCard: {
    padding: '32px',
    marginTop:"450px",
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '48px',
  },
  formTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#ffffff',
  },
  formSubtitle: {
    fontSize: '1rem',
    color: '#a1a1aa',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#a1a1aa',
    marginBottom: '8px',
  },
  inputContainer: {
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  input: {
    width: '100%',
    padding: '16px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: "'Inter', sans-serif",
  },
  textareaContainer: {
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '16px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
    minHeight: '150px',
    fontFamily: "'Inter', sans-serif",
  },
  inputIndicator: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  textareaIndicator: {
    position: 'absolute',
    right: '12px',
    top: '12px',
  },
  inputIndicatorDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#10b981',
  },
  submitContainer: {
    paddingTop: '16px',
  },
  submitButton: {
    width: '100%',
    padding: '16px 32px',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    transition: 'all 0.3s ease',
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid #ffffff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  successMessage: {
    marginTop: '16px',
    padding: '16px',
    borderRadius: '12px',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  successTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#10b981',
    marginBottom: '4px',
  },
  successText: {
    fontSize: '0.75rem',
    color: 'rgba(16, 185, 129, 0.8)',
  },
  errorMessage: {
    marginTop: '16px',
    padding: '16px',
    borderRadius: '12px',
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  errorTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#ef4444',
    marginBottom: '4px',
  },
  errorText: {
    fontSize: '0.75rem',
    color: 'rgba(239, 68, 68, 0.8)',
  },
  responseInfo: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  responseIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(59, 130, 246, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 600,
  },
  responseText: {
    fontSize: '0.875rem',
    color: '#a1a1aa',
  },
  faqSection: {
    marginBottom: '48px',
  },
  faqTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '24px',
    color: '#ffffff',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  faqItem: {
    padding: '20px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
  },
  faqQuestion: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  faqAnswer: {
    fontSize: '0.875rem',
    color: '#a1a1aa',
    lineHeight: 1.6,
    paddingLeft: '24px',
  },
  footerCTA: {
    textAlign: 'center',
    marginTop: '80px',
  },
  ctaCard: {
    padding: '32px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '800px',
    margin: '0 auto 48px',
  },
  ctaTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '16px',
    color: '#ffffff',
  },
  ctaText: {
    fontSize: '1rem',
    color: '#a1a1aa',
    marginBottom: '24px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaPrimaryButton: {
    padding: '12px 32px',
    borderRadius: '12px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
  },
  ctaSecondaryButton: {
    padding: '12px 32px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  copyrightText: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '8px',
  },
  techStack: {
    fontSize: '0.75rem',
    color: '#4b5563',
  },
};

export default ContactSection;