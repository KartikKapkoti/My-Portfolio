import { motion } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center bg-light-bg dark:bg-dark-bg py-4 px-4 mt-0"
      id="about"
    >
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-700 dark:text-muted leading-relaxed">
              I am a passionate Full Stack Developer with expertise in modern web technologies.
              My journey in software development started with a curiosity for creating
              interactive web experiences, and has evolved into a deep love for building
              scalable, user-friendly applications.
            </p>
            <p className="text-gray-700 dark:text-muted leading-relaxed">
              When I'm not coding, you can find me diving deep into cloud technologies, 
              experimenting with new database solutions, or optimizing application 
              performance through efficient algorithms and data structures.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.a
              href="/resume.pdf"
              download="Kartik_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 