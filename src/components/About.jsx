import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database } from 'lucide-react';
import { useApp } from '../context/AppContext';

/* ─── parse "15+" → { number: 15, suffix: "+" } ─── */
const parseStat = (value) => {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { number: 0, suffix: String(value) };
  return { number: parseFloat(match[1]), suffix: match[2] };
};

/* ─── easing: ease-out cubic ─── */
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/* ─── hook: count from 0 → target when element enters viewport ─── */
const useCountUp = (target, duration = 1600) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
};

/* ─── animated stat box ─── */
const StatBox = ({ stat, delay }) => {
  const { number, suffix } = parseStat(stat.value);
  const { ref, count } = useCountUp(number);

  return (
    <motion.div
      ref={ref}
      className="stat-box glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <h4 className="text-gradient-blue">
        {count}{suffix}
      </h4>
      <span>{stat.label}</span>
    </motion.div>
  );
};

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
            <StatBox key={idx} stat={stat} delay={idx * 0.1} />
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
          width: 100%;
          box-sizing: border-box;
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
          overflow-wrap: break-word;
          word-break: break-word;
        }
        @media (max-width: 600px) {
          .stats-row {
            gap: 0.5rem;
            width: 100%;
          }
          .stat-box {
            padding: 1.1rem 0.4rem;
            min-width: 0;
          }
          .stat-box h4 {
            font-size: 1.45rem;
          }
          .stat-box span {
            font-size: 0.72rem;
            letter-spacing: 0;
            overflow-wrap: break-word;
            word-break: break-word;
          }
          .highlight-box {
            padding: 1rem;
            gap: 0.85rem;
          }
          .highlight-icon {
            padding: 10px;
            flex-shrink: 0;
          }
          .highlight-info h5 {
            font-size: 1rem;
          }
          .highlight-info span {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 380px) {
          .stats-row {
            gap: 0.35rem;
          }
          .stat-box {
            padding: 0.9rem 0.25rem;
          }
          .stat-box h4 {
            font-size: 1.3rem;
          }
          .stat-box span {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
