// src/styles/globalStyles.js
export const globalStyles = {
  // Colors
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    darkBg: '#0a0a0a',
    darkCard: '#1a1a1a',
    darkBorder: '#262626',
    textPrimary: '#ffffff',
    textSecondary: '#a1a1aa',
    textMuted: '#6b7280',
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'Space Grotesk', monospace",
    },
    h1: {
      fontSize: '4.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      fontFamily: "'Space Grotesk', monospace",
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      fontFamily: "'Space Grotesk', monospace",
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '48px',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  
  // Effects
  effects: {
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    gradientText: {
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    gradientBg: {
      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
    },
  },
  
  // Animations
  animations: {
    float: {
      animation: 'float 3s ease-in-out infinite',
      '@keyframes float': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
  },
};

// Utility functions
export const createResponsiveStyle = (property, values) => {
  return {
    [property]: values.mobile,
    [`@media (min-width: ${globalStyles.breakpoints.sm})`]: {
      [property]: values.tablet || values.mobile,
    },
    [`@media (min-width: ${globalStyles.breakpoints.md})`]: {
      [property]: values.desktop || values.tablet || values.mobile,
    },
  };
};

export const createHoverStyle = (baseStyle, hoverStyle) => {
  return {
    ...baseStyle,
    transition: 'all 0.3s ease',
    ':hover': hoverStyle,
  };
};