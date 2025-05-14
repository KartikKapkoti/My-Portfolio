import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
// import SectionWrapper from './SectionWrapper';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/KartikKapkoti',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kartik-kapkoti',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:kartikkapkoti545@gmail.com',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    )
  }
];

const mailVariants = {
  initial: { left: '8%', top: '18%', opacity: 0 },
  animate: {
    left: ['8%', '50%', '92%'],
    top: ['18%', '-80%', '18%'],
    opacity: [0, 1, 0],
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
    },
  },
};

const Contact = () => {
  const [mailAnim, setMailAnim] = useState(false);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] md:min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg py-6 md:py-16 px-4 mt-0"
      id="contact"
    >
      <div className="w-full max-w-5xl mx-auto relative">
        {/* Flying Mail Animation Over Grid */}
        <motion.svg
          width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute z-30 hidden md:block"
          style={{ pointerEvents: 'none' }}
          variants={mailVariants}
          initial="initial"
          animate={mailAnim ? 'animate' : 'initial'}
          onViewportEnter={() => setMailAnim(true)}
        >
          <rect x="2" y="8" width="36" height="16" rx="4" fill="#fff" stroke="#6C4EE6" strokeWidth="2" />
          <path d="M2 8l18 12L38 8" stroke="#6C4EE6" strokeWidth="2" fill="none" />
        </motion.svg>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Sender Illustration (Left) */}
          <div className="hidden md:flex justify-center">
            <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
              {/* Person */}
              <ellipse cx="60" cy="90" rx="22" ry="28" fill="#A3AED6" />
              <circle cx="60" cy="70" r="14" fill="#A3AED6" />
              {/* Envelope in hand (sending) */}
              <rect x="50" y="120" width="20" height="14" rx="2" fill="#fff" stroke="#6C4EE6" strokeWidth="2" />
              <path d="M50 120l10 7 10-7" stroke="#6C4EE6" strokeWidth="2" fill="none" />
              {/* Arm */}
              <path d="M82 110 Q90 120 80 125" stroke="#6C4EE6" strokeWidth="4" fill="none" />
            </svg>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center relative">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white"
            >
              Connect With Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Feel free to reach out for collaborations or just a friendly hello
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          
          </div>

          {/* Receiver Illustration (Right) */}
          <div className="hidden md:flex justify-center">
            <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
              {/* Person */}
              <ellipse cx="60" cy="90" rx="22" ry="28" fill="#A3AED6" />
              <circle cx="60" cy="70" r="14" fill="#A3AED6" />
              {/* Envelope in hand (receiving) */}
              <rect x="50" y="120" width="20" height="14" rx="2" fill="#fff" stroke="#6C4EE6" strokeWidth="2" />
              <path d="M50 120l10 7 10-7" stroke="#6C4EE6" strokeWidth="2" fill="none" />
              {/* Arm */}
              <path d="M38 110 Q30 120 40 125" stroke="#6C4EE6" strokeWidth="4" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 