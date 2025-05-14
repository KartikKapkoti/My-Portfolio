import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaProjectDiagram, FaTools, FaExchangeAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiRedis } from 'react-icons/si';

const skillIcons = {
  'React': <FaReact className="text-primary" />,
  'JavaScript': <FaJs className="text-yellow-400" />,
  'TypeScript': <SiTypescript className="text-blue-500" />,
  'HTML5': <FaHtml5 className="text-orange-500" />,
  'CSS3': <FaCss3Alt className="text-blue-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-sky-400" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Express': <SiExpress className="text-gray-700" />,
  'Python': <FaPython className="text-blue-600" />,
  'Django': <SiDjango className="text-green-800" />,
  'RESTful APIs': <FaExchangeAlt className="text-primary" />,
  'MongoDB': <SiMongodb className="text-green-700" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700" />,
  'MySQL': <SiMysql className="text-blue-500" />,
  'Redis': <SiRedis className="text-red-500" />,
  'Git': <FaGitAlt className="text-orange-600" />,
  'Docker': <FaDocker className="text-blue-400" />,
  'AWS': <FaAws className="text-yellow-500" />,
  'CI/CD': <FaTools className="text-primary" />,
  'Agile': <FaProjectDiagram className="text-accent" />,
};

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg py-10 px-4 mt-[-40px]" id="skills">
      {/* Decorative shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary rounded-full opacity-20 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent rounded-full opacity-10 z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-light-card dark:bg-dark-card rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-2 px-3 py-1 
                      bg-white dark:bg-black 
                      text-black dark:text-white 
                      rounded-full text-sm font-medium shadow-sm border border-primary/10"
                  >
                    {skillIcons[skill]}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 