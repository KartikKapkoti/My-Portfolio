import { motion } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';
import foodDeliveryScreenshot from '../assets/food-delivery-screenshot.png';
import fastapiScreenshot from '../assets/api-image.jpg';
import healthcareScreenshot from '../assets/health-care.png';

const projectsData = [
  {
    title: 'Food Delivery Application',
    description: 'A modern food delivery platform with category filtering, cart management, and real-time quantity updates. Built with React and Redux for a seamless ordering experience.',
    image: foodDeliveryScreenshot,
    tags: ['React', 'Redux', 'Redux Toolkit', 'Tailwind CSS', 'React Icons', 'React Toastify'],
    liveLink: 'https://foodie-kartik-kapkoti.netlify.app/',
    githubLink: 'https://github.com/KartikKapkoti/food-delevery'
  },
  {
    title: 'Healthcare Frontend',
    description: 'A modern healthcare frontend application featuring a responsive and user-friendly interface. Built with Vite and Tailwind CSS, it includes patient management features, appointment scheduling, and a clean, professional design optimized for healthcare services.',
    image: healthcareScreenshot,
    tags: ['Vite', 'Tailwind CSS', 'SASS', 'PostCSS', 'Autoprefixer', 'Responsive Design'],
    liveLink: 'https://healthcare-ui-de.netlify.app/',
    githubLink: 'https://github.com/KartikKapkoti/Healthcare-Frontend'
  },
  {
    title: 'FastAPI Swagger API',
    description: 'A robust RESTful API built with FastAPI and PostgreSQL, featuring CRUD operations for blog posts. Includes comprehensive API documentation with Swagger UI, data validation using Pydantic, and efficient database management with SQLAlchemy.',
    image: fastapiScreenshot,
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'Swagger UI', 'REST API'],
    liveLink: 'https://github.com/KartikKapkoti/FastAPI-swagger-API',
    githubLink: 'https://github.com/KartikKapkoti/FastAPI-swagger-API'
  },


];

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg py-10 px-4 mt-[-40px]" id="projects">
      <div className="w-full max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-light-card dark:bg-dark-card rounded-xl overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                  {project.title}
                </h3>
                <p className="text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white dark:bg-black text-black dark:text-white rounded-full text-sm font-medium border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 