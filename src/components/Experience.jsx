import { motion } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';

const experienceData = [
  {
    title: 'Software Developer Engineer-I',
    company: 'Sanskrit Ayurveda Private Limited.',
    duration: 'July 2024 - Present',
    description: (
      <>
        Enhanced a React-based e-commerce platform by building new features and improving UI with <strong>React.js</strong> and <strong>TypeScript</strong>. Managed state using <strong>Redux</strong> and <strong>Redux-Saga</strong>, and developed backend APIs with <strong>Node.js</strong> and <strong>Express.js</strong>. Designed responsive layouts using <strong>HTML</strong> and <strong>SCSS</strong>.
      </>
    )
  },
  {
    title: 'Software Developer Engineer- Intern',
    company: 'IriaResearch.',
    duration: 'July 2023 - August 2023',
    description: (
      <>
        Built and improved features for an organic products portal using <strong>React.js</strong> and <strong>JavaScript</strong>. Crafted responsive designs with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Tailwind CSS</strong>, collaborating with senior developers to ensure best practices.
      </>
    )
  }
];

const Experience = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg py-10 px-4 mt-[-40px]" id="experience">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent"></div>

          {/* Experience items */}
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center md:justify-around mb-8`}
            >
              {/* Timeline dot */}
              {/* <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-accent"></div> */}

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-8 md:ml-0 p-6 bg-light-card dark:bg-dark-card rounded-lg shadow-md w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                }`}
              >
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                  {experience.title}
                </h3>
                <div className="flex items-center text-primary mb-2">
                  <span className="font-medium">{experience.company}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-muted">{experience.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 