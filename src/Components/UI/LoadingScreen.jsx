// In src/Components/UI/LoadingScreen.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#0a0a0a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const loaderStyle = {
    width: '60px',
    height: '60px',
    border: '3px solid rgba(59, 130, 246, 0.3)',
    borderTop: '3px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const progressBarStyle = {
    width: '200px',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '2px',
    marginTop: '20px',
    overflow: 'hidden',
  };

  const progressStyle = {
    height: '100%',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    borderRadius: '2px',
    width: `${progress}%`,
    transition: 'width 0.3s ease',
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={containerStyle}
    >
      <div style={loaderStyle} />
      <p style={{ 
        marginTop: '20px', 
        fontSize: '18px', 
        color: '#ffffff', 
        fontWeight: 500 
      }}>
        Loading Portfolio...
      </p>
      <div style={progressBarStyle}>
        <div style={progressStyle} />
      </div>
      <p style={{ 
        marginTop: '8px', 
        color: 'rgba(255, 255, 255, 0.5)', 
        fontSize: '14px' 
      }}>
        {Math.min(100, Math.round(progress))}%
      </p>
      
      {/* Add CSS animation for spin */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingScreen;