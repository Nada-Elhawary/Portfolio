import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database } from 'lucide-react';
import { useApp } from '../context/AppContext';

const About = () => {
  const { t } = useApp();

  const stats      = t('about.stats');
  const highlights = t('about.highlights');

  const highlightIcons = [
    <Code size={24} />,
    <Server size={24} />,
    <Database size={24} />,
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('about.subtitle')}
        </motion.p>

        {/* Stats */}
        <div className="stats-row">
          {Array.isArray(stats) && stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-box glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-gradient-blue">{stat.value}</h4>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech highlights */}
        <div className="highlights-col">
          {Array.isArray(highlights) && highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="highlight-box glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <div className="highlight-icon text-gradient-blue">
                {highlightIcons[idx] || <Code size={24} />}
              </div>
              <div className="highlight-info">
                <h5>{item.title}</h5>
                <span>{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          padding-top: 50px;
          position: relative;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 680px;
          margin: 0 auto 1.5rem;
        }
        .stat-box {
          padding: 2rem 1rem;
          text-align: center;
        }
        .stat-box h4 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .stat-box span {
          color: var(--text-secondary);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        html[lang="ar"] .stat-box span {
          letter-spacing: 0;
          font-size: 0.8rem;
        }
        .highlights-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 680px;
          margin: 0 auto;
        }
        .highlight-box {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          gap: 1.5rem;
        }
        .highlight-icon {
          background: rgba(59, 130, 246, 0.1);
          padding: 15px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .highlight-info h5 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }
        .highlight-info span {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        @media (max-width: 600px) {
          .stats-row {
            gap: 0.75rem;
          }
          .stat-box {
            padding: 1.25rem 0.5rem;
          }
          .stat-box h4 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
