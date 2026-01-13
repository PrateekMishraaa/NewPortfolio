// src/Components/UI/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  style = {}, 
  ...props 
}) => {
  const baseStyle = {
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ...style,
  };

  const variants = {
    primary: {
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      color: 'white',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white',
    },
    ghost: {
      background: 'transparent',
      color: '#3b82f6',
    },
  };

  const buttonStyle = {
    ...baseStyle,
    ...variants[variant],
  };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    if (variant === 'secondary') {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'transparent';
    }
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;