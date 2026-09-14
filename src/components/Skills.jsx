import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const skillCategories = [
  {
    titleKey: 'skills.categories.frontend',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML5', 'CSS3']
  },
  {
    titleKey: 'skills.categories.backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST API']
  },
  {
    titleKey: 'skills.categories.database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Mongoose']
  },
  {
    titleKey: 'skills.categories.tools',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Figma', 'Vercel', 'Cloudinary']
  }
];

const Skills = () => {
  const { t } = useApp();

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('skills.subtitle')}
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
              <h3 className="category-title">{t(category.titleKey)}</h3>
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-electric), var(--accent-primary));
          opacity: 0;
          transition: var(--transition-smooth);
        }
        .skill-category:hover::before {
          opacity: 1;
        }
        .category-title {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;
          font-weight: 700;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .skill-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
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
        [data-theme="light"] .skill-item {
          background: rgba(15, 23, 42, 0.02);
        }
        .skill-item:hover {
          color: white;
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-light);
          transition: var(--transition-smooth);
        }
        .skill-item:hover .skill-dot {
          background: white;
          box-shadow: 0 0 8px white;
        }
      `}</style>
    </section>
  );
};

export default Skills;
