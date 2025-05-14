import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaBars, FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about', icon: <FaUser /> },
  { name: 'Skills', href: '#skills', icon: <FaTools /> },
  { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
];

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    setMousePosition({ x: moveX * 0.01, y: moveY * 0.01 });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      onMouseMove={handleMouseMove}
      className="min-h-screen px-2 py-2 md:px-10 md:py-6 relative overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
      {/* Decorative Blobs/Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-accent opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] bg-primary opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Top Bar */}
      <div className="flex items-center justify-between z-20 relative">
        {/* Hamburger Menu (Mobile Only, Left) */}
        <button
          className="md:hidden p-2 rounded-full bg-white/90 dark:bg-dark-card shadow-md"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className="w-6 h-6 text-primary dark:text-accent" />
        </button>

        {/* Desktop Nav + Toggle (Right) */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <nav className="flex gap-8 bg-white/90 dark:bg-dark-card rounded-full px-8 py-2 shadow-md">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-primary dark:text-white font-semibold hover:text-accent dark:hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-white/90 dark:bg-dark-card shadow-md hover:bg-accent/20 dark:hover:bg-primary/20 transition-colors duration-200 ml-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-primary dark:text-accent" />
            ) : (
              <FaMoon className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>

        {/* Dark Mode Toggle (Mobile, Right) */}
        <button
          onClick={toggleDarkMode}
          className="md:hidden p-2 rounded-full bg-white/90 dark:bg-dark-card shadow-md hover:bg-accent/20 dark:hover:bg-primary/20 transition-colors duration-200 ml-2"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <FaSun className="w-5 h-5 text-primary dark:text-accent" />
          ) : (
            <FaMoon className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>
      {/* Mobile Nav Drawer */}
      <nav
        className={`fixed top-0 left-0 z-40 h-full w-3/4 max-w-xs bg-white dark:bg-dark-card shadow-lg transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex flex-col pt-20 gap-6`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-dark-card shadow-md"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes className="w-5 h-5 text-primary dark:text-accent" />
        </button>
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              handleNavClick(e, link.href);
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 px-6 py-3 text-primary dark:text-white font-semibold hover:text-accent dark:hover:text-accent transition-colors duration-200"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
        {/* Illustration at the bottom */}
        <div className="flex-1 flex items-end justify-center pb-8">
          {/* Simple SVG illustration */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#A259FF" opacity="0.1" />
            <rect x="25" y="35" width="30" height="10" rx="5" fill="#A259FF" opacity="0.3" />
          </svg>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center pt-16 md:pt-0"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 text-light-text dark:text-dark-text"
          >
            Hello,<br />
            I'm Kartik.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-light-text dark:text-dark-text mb-8 max-w-lg"
          >
            I'm a Full Stack Developer passionate about creating beautiful and functional web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-block bg-primary dark:bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent dark:hover:bg-primary transition duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="relative flex justify-center items-center"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            rotateX: mousePosition.y,
            rotateY: -mousePosition.x,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1
          }}
        >
          <svg
            width="500"
            height="500"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Hand-drawn style illustration */}
            <g>
              {/* Body */}
              <path
                d="M400 500c55.228 0 100-44.772 100-100S455.228 300 400 300s-100 44.772-100 100 44.772 100 100 100z"
                className="fill-primary dark:fill-accent"
              />
              {/* Head */}
              <circle cx="400" cy="350" r="50" className="fill-accent dark:fill-primary" />
              {/* Laptop */}
              <rect x="300" y="450" width="200" height="120" rx="10" className="fill-dark-text dark:fill-light-bg" />
              <rect x="320" y="470" width="160" height="80" rx="5" className="fill-light-bg dark:fill-dark-text" />
              {/* Arms */}
              <path
                d="M300 400c-20-20-40-20-60 0M500 400c20-20 40-20 60 0"
                className="stroke-dark-text dark:stroke-light-bg"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 