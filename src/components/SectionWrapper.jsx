import React from 'react';

const WavyBg = ({ className = '' }) => (
  <svg
    className={`absolute top-0 left-0 w-full h-24 ${className}`}
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      fill="currentColor"
      className="text-accent/10 dark:text-dark-accent/10"
    />
  </svg>
);

const SectionWrapper = ({ children, className = '' }) => (
  <section className={`py-20 bg-light-bg dark:bg-dark-bg ${className}`}>
    {children}
  </section>
);

export default SectionWrapper; 