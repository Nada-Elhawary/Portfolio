import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useApp } from '../context/AppContext';

/*
  beTech: tags that are back-end/supporting technologies.
  These render with a muted style so front-end tags (Angular, React,
  TypeScript, etc.) are visually dominant.
  hasDemo: false hides the Live Demo button when no real URL exists.
*/
const projectMeta = [
  {
    image: '/EduGenie.png',
    liveLink: 'https://edugenie-student-web.vercel.app',
    githubLink: 'https://github.com/Nada-Elhawary/edugenie-student-web',
    beTech: new Set(['NestJS', 'MongoDB']),
    hasDemo: true
  },
  {
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop',
    liveLink: 'https://book-store-dashboard-gamma.vercel.app',
    githubLink: 'https://github.com/Nada-Elhawary/Book_Store',
    beTech: new Set(['Node.js', 'MongoDB']),
    hasDemo: true
  },
  {
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
    liveLink: 'https://movies-app-ten-eta-70.vercel.app',
    githubLink: 'https://github.com/Nada-Elhawary/Movies-App',
    beTech: new Set(),
    hasDemo: true
  },
  {
    image: '/AdaStore.png',
    liveLink: 'https://ada-store-five.vercel.app',
    githubLink: 'https://github.com/Nada-Elhawary/Ada-Store',
    beTech: new Set(),
    hasDemo: true
  },
  {
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    liveLink: 'https://garden-battle.vercel.app',
    githubLink: 'https://github.com/Nada-Elhawary/Garden-Battle-Game',
    beTech: new Set(),
    hasDemo: true
  }
];

const Projects = () => {
  const { t } = useApp();
  const projectItems = t('projects.items');

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('projects.subtitle')}
        </motion.p>

        <div className="projects-grid">
          {Array.isArray(projectItems) && projectItems.map((project, idx) => {
            const meta = projectMeta[idx] || { beTech: new Set() };
            return (
              <motion.div
                key={idx}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Image & hover overlay (desktop) */}
                <div className="project-image-wrapper">
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url(${meta.image})` }}
                  />
                  <div className="project-overlay">
                    {meta.hasDemo && (
                      <a href={meta.liveLink} className="overlay-btn" target="_blank" rel="noreferrer">
                        <ExternalLink size={18} />
                        {t('projects.liveDemo')}
                      </a>
                    )}
                    <a href={meta.githubLink} className="overlay-btn" target="_blank" rel="noreferrer">
                      <Code size={18} />
                      {t('projects.sourceCode')}
                    </a>
                  </div>
                </div>

                {/* Text content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {/* Tech tags — FE tags bright, BE tags muted */}
                  <div className="project-tech">
                    {Array.isArray(project.tech) && project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`tech-tag${meta.beTech.has(tech) ? ' tech-tag--be' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Always-visible buttons for touch screens */}
                  <div className="card-actions">
                    {meta.hasDemo && (
                      <a href={meta.liveLink} className="card-action-btn" target="_blank" rel="noreferrer">
                        <ExternalLink size={16} />
                        {t('projects.liveDemo')}
                      </a>
                    )}
                    <a href={meta.githubLink} className="card-action-btn" target="_blank" rel="noreferrer">
                      <Code size={16} />
                      {t('projects.sourceCode')}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding-top: 50px;
          position: relative;
        }
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* ── Card layout ── */
        .project-card {
          display: flex;
          flex-direction: row;
          overflow: hidden;
          padding: 0;
          transition: var(--transition-smooth);
        }
        .project-card:nth-child(even) {
          flex-direction: row-reverse;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow);
          border-color: var(--accent-primary);
        }

        /* ── Image ── */
        .project-image-wrapper {
          position: relative;
          flex: 1.2;
          min-height: 400px;
          overflow: hidden;
        }
        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.06);
        }

        /* ── Hover overlay (desktop) ── */
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: var(--transition-smooth);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .overlay-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 24px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          transition: var(--transition-smooth);
          transform: translateY(20px);
          font-size: 0.95rem;
        }
        html[lang="ar"] .overlay-btn {
          font-family: 'Cairo', sans-serif;
          font-size: 0.9rem;
        }
        .project-card:hover .overlay-btn {
          transform: translateY(0);
        }
        .overlay-btn:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        /* ── Text content ── */
        .project-content {
          flex: 1;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: start;
        }
        .project-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 700;
        }
        .project-desc {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 2rem;
        }

        /* ── Tech tags ── */
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          align-items: center;
        }

        /* Front-end tag — full accent colour, prominent */
        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-light);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        [data-theme="light"] .tech-tag {
          background: rgba(29, 78, 216, 0.06);
          color: var(--accent-primary);
          border-color: rgba(29, 78, 216, 0.15);
        }

        /* Back-end / supporting tag — muted, smaller */
        .tech-tag--be {
          background: transparent;
          color: var(--text-secondary);
          border-color: var(--glass-border);
          font-size: 0.78rem;
          font-weight: 500;
          padding: 5px 11px;
          opacity: 0.75;
        }
        [data-theme="light"] .tech-tag--be {
          background: transparent;
          color: var(--text-secondary);
          border-color: rgba(15, 23, 42, 0.12);
        }

        /* ── Touch action buttons (hidden on desktop) ── */
        .card-actions {
          display: none;
        }

        @media (max-width: 968px) {
          .project-card,
          .project-card:nth-child(even) {
            flex-direction: column;
          }
          .project-image-wrapper {
            min-height: 280px;
            width: 100%;
          }
          .project-content {
            padding: 2rem;
          }

          .card-actions {
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            flex-wrap: nowrap;
          }
          .card-action-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            flex: 1;
            min-width: 0;
            padding: 9px 10px;
            border-radius: 24px;
            font-size: 0.875rem;
            font-weight: 600;
            border: 1px solid var(--accent-primary);
            color: white;
            background: var(--accent-primary);
            transition: var(--transition-smooth);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          html[lang="ar"] .card-action-btn {
            font-family: 'Cairo', sans-serif;
            font-size: 0.85rem;
          }
          .card-action-btn:hover,
          .card-action-btn:active {
            background: rgba(59, 130, 246, 0.08);
            border-color: rgba(59, 130, 246, 0.35);
            color: var(--accent-light);
            box-shadow: 0 0 12px var(--accent-glow);
          }
          [data-theme="light"] .card-action-btn {
            border-color: rgba(29, 78, 216, 0.25);
            color: var(--accent-primary);
            background: rgba(29, 78, 216, 0.05);
          }

          .project-overlay {
            display: none;
          }
        }

        @media (max-width: 430px) {
          .project-content {
            padding: 1.25rem;
          }
          .card-action-btn {
            font-size: 0.8rem;
            padding: 8px 8px;
            gap: 4px;
          }
          .card-action-btn svg {
            flex-shrink: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
