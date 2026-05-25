import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    title: 'Aura AI Dashboard',
    description: 'An advanced AI analytics dashboard that processes millions of data points in real-time. Features dark-mode immersive UI, complex data visualization, and predictive modeling interfaces.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Recharts', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Nexus E-Commerce',
    description: 'A headless e-commerce platform built for maximum performance and conversion. Includes a seamless checkout experience, global state management, and an integrated admin CMS.',
    tech: ['MERN Stack', 'Redux Toolkit', 'Stripe', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Orbit Finance',
    description: 'A decentralized finance tracking app featuring real-time crypto markets, secure authentication, and a stunning glassmorphism interface with subtle neon aesthetics.',
    tech: ['React', 'Web3.js', 'Express', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1000',
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Works
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A showcase of premium applications I've built, demonstrating high-end UI/UX design fused with robust backend architectures.
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="project-image-wrapper">
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-overlay">
                  <a href={project.liveLink} className="overlay-btn"><ExternalLink size={20} /> Live Demo</a>
                  <a href={project.githubLink} className="overlay-btn"><Code size={20} /> Source Code</a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding-top: 100px;
          position: relative;
        }
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .project-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          overflow: hidden;
          padding: 0;
          transition: all 0.5s ease;
        }
        .project-card:nth-child(even) {
          grid-template-columns: 1fr 1.2fr;
        }
        .project-card:nth-child(even) .project-image-wrapper {
          order: 2;
        }
        .project-card:nth-child(even) .project-content {
          order: 1;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
        }
        .project-image-wrapper {
          position: relative;
          height: 100%;
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
          transform: scale(1.08);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(3, 7, 18, 0.8);
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
          font-weight: 500;
          transition: var(--transition-smooth);
          transform: translateY(20px);
        }
        .project-card:hover .overlay-btn {
          transform: translateY(0);
        }
        .overlay-btn:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .project-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .project-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .project-desc {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 2rem;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-light);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        @media (max-width: 968px) {
          .project-card, .project-card:nth-child(even) {
            grid-template-columns: 1fr;
          }
          .project-card:nth-child(even) .project-image-wrapper {
            order: 1;
          }
          .project-card:nth-child(even) .project-content {
            order: 2;
          }
          .project-image-wrapper {
            min-height: 300px;
          }
          .project-content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
