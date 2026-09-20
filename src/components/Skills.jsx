import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

/*
  Category order deliberately puts Front-End first and Back-End last.
  The `supporting` flag adds a subtle label so recruiters immediately
  understand back-end is additional knowledge, not the primary focus.
*/
const skillCategories = [
  {
    titleKey: 'skills.categories.frontend',
    skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'RxJS', 'Next.js'],
    primary: true
  },
  {
    titleKey: 'skills.categories.styling',
    skills: ['Tailwind CSS', 'SCSS / SASS', 'Bootstrap', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Framer Motion'],
    primary: true
  },
  {
    titleKey: 'skills.categories.integration',
    skills: ['REST APIs', 'Authentication', 'Git', 'GitHub', 'Postman', 'Figma', 'Vercel'],
    primary: false
  },
  {
    titleKey: 'skills.categories.backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'Mongoose'],
    primary: false,
    supporting: true
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
              className={`skill-category glass-card${category.supporting ? ' skill-category--supporting' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="category-header">
                <h3 className="category-title">{t(category.titleKey)}</h3>
                {category.supporting && (
                  <span className="supporting-badge">
                    {t('skills.supportingLabel') || 'Additional'}
                  </span>
                )}
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className={`skill-item${category.primary ? ' skill-item--primary' : ''}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="skill-dot" />
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
          padding-top: 50px;
          position: relative;
        }

        /* 2-column on desktop for primary categories, full-width for last two */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .skill-category {
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        /* accent top bar — brighter for primary categories */
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
        /* supporting (back-end) card is slightly muted */
        .skill-category--supporting {
          opacity: 0.82;
        }
        .skill-category--supporting::before {
          background: linear-gradient(90deg, var(--accent-primary), var(--text-secondary));
        }

        .category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;
        }
        .category-title {
          font-size: 1.4rem;
          color: var(--text-primary);
          font-weight: 700;
          margin: 0;
        }

        /* "Additional" badge on the back-end card */
        .supporting-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 3px 10px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        html[lang="ar"] .supporting-badge {
          letter-spacing: 0;
          font-size: 0.72rem;
        }
        [data-theme="light"] .supporting-badge {
          background: rgba(15, 23, 42, 0.04);
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

        /* primary skill items have a slightly brighter resting border */
        .skill-item--primary {
          border-color: rgba(59, 130, 246, 0.18);
        }
        [data-theme="light"] .skill-item--primary {
          border-color: rgba(29, 78, 216, 0.15);
        }

        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-light);
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }
        .skill-item:hover .skill-dot {
          background: white;
          box-shadow: 0 0 8px white;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
