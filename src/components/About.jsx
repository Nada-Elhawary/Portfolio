import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database } from 'lucide-react';
import { useApp } from '../context/AppContext';

const About = () => {
  const { t } = useApp();

  const highlightIcons = [
    <Code size={24} />,
    <Server size={24} />,
    <Database size={24} />
  ];

  // Fetch translatable arrays
  const stats = t('about.stats');
  const highlights = t('about.highlights');

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('about.subtitle')}
        </motion.p>

        <div className="about-grid">
          {/* Journey Card */}
          <motion.div 
            className="about-text glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{t('about.journeyTitle')}</h3>
            <p>
              {t('about.journeyText1')}
            </p>
            <p>
              {t('about.journeyText2')}
            </p>
          </motion.div>

          {/* Stats & Highlights Container */}
          <div className="about-stats-container">
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

            {/* Highlights */}
            <div className="highlights-row">
              {Array.isArray(highlights) && highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="highlight-box glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
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
        </div>
      </div>

      <style>{`
        .about-section {
          padding-top: 100px;
          position: relative;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .about-text {
          padding: 2.5rem;
        }
        .about-text h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .about-text p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.2rem;
          font-size: 1.05rem;
        }
        .about-stats-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
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
        .highlights-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
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
        }
        .highlight-info h5 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }
        .highlight-info span {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .stats-row {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
