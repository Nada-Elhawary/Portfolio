import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST API', 'WebSockets', 'Python']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Firebase', 'Prisma', 'Mongoose']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Figma', 'Linux']
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A comprehensive suite of modern technologies and tools I utilize to craft premium digital experiences and scalable infrastructure.
        </motion.p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="skill-category glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="skill-dot"></div>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding-top: 100px;
          position: relative;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-electric), var(--accent-primary));
          opacity: 0;
          transition: var(--transition-smooth);
        }
        .skill-category:hover::before {
          opacity: 1;
        }
        .category-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-smooth);
          cursor: default;
        }
        .skill-item:hover {
          color: white;
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }
        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-light);
        }
        .skill-item:hover .skill-dot {
          background: var(--accent-electric);
          box-shadow: 0 0 8px var(--accent-electric);
        }
      `}</style>
    </section>
  );
};

export default Skills;
