import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Server, PieChart, ShoppingCart, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Experience = () => {
  const { t } = useApp();

  const experiences = t('experience.items');
  const services    = t('experience.services');

  const serviceIcons = [
    <Layout size={26} />,
    <Smartphone size={26} />,
    <Server size={26} />,
    <PieChart size={26} />,
    <ShoppingCart size={26} />,
    <Briefcase size={26} />,
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">

        <div className="exp-services-grid">

          {/* ── Education & Training timeline (unchanged) ── */}
          <div className="experience-timeline">
            <motion.h2
              className="section-title text-gradient heading-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('experience.title')}
            </motion.h2>

            <div className="timeline-container">
              {Array.isArray(experiences) && experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content glass-card">
                    <span className="timeline-period text-gradient-blue">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    {exp.description ? (
                      <p className="timeline-desc">{exp.description}</p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Services ── */}
          <div className="services-container">
            <motion.h2
              className="section-title text-gradient heading-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('experience.servicesTitle')}
            </motion.h2>

            <div className="services-grid">
              {Array.isArray(services) && services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="service-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className="service-icon">
                    {serviceIcons[idx] || <Layout size={26} />}
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-desc">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .experience-section {
          padding-top: 100px;
          position: relative;
        }

        /* ── two-column grid ── */
        .exp-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .heading-start {
          text-align: start;
        }

        /* ── Education & Training timeline ── */
        .timeline-container {
          position: relative;
          padding-inline-start: 2rem;
          margin-top: 2rem;
        }
        .timeline-container::before {
          content: '';
          position: absolute;
          inset-inline-start: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), transparent);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          inset-inline-start: -2.4rem;
          top: 4px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-glow);
          z-index: 2;
        }
        .timeline-content {
          padding: 1.5rem;
          text-align: start;
        }
        .timeline-period {
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 0.5rem;
        }
        html[lang="ar"] .timeline-period {
          letter-spacing: 0;
        }
        .timeline-role {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-weight: 700;
          line-height: 1.4;
        }
        .timeline-company {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.85rem;
        }
        .timeline-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.93rem;
          margin-top: 0;
        }

        /* ── Services ── */
        .services-container {
          margin-top: 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .service-card {
          padding: 1.5rem;
          transition: var(--transition-smooth);
          text-align: start;
        }
        .service-icon {
          color: var(--accent-light);
          margin-bottom: 1rem;
          background: rgba(59, 130, 246, 0.1);
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          transition: var(--transition-smooth);
        }
        .service-card:hover .service-icon {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 5px 15px var(--accent-glow);
        }
        .service-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 700;
        }
        .service-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .exp-services-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .timeline-container {
            padding-inline-start: 1.5rem;
          }
          .timeline-dot {
            inset-inline-start: -1.9rem;
          }
          .timeline-role {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
