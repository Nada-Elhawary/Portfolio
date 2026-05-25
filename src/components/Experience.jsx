import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Server, PieChart, ShoppingCart, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    period: '2022 - Present',
    description: 'Lead a team of 5 developers in architecting a high-traffic scalable SaaS platform using Next.js, Node.js, and MongoDB.'
  },
  {
    role: 'Frontend Engineer',
    company: 'PixelPerfect Agency',
    period: '2019 - 2022',
    description: 'Developed premium Awwwards-winning interactive websites. Spearheaded the adoption of React and Framer Motion across all client projects.'
  },
  {
    role: 'Junior Web Developer',
    company: 'Startup Incubator',
    period: '2017 - 2019',
    description: 'Built responsive single-page applications and RESTful APIs for emerging startups, focusing on performance and SEO.'
  }
];

const services = [
  { icon: <Layout size={28} />, title: 'Full Stack Web Dev', desc: 'End-to-end development using the MERN stack with scalable architectures.' },
  { icon: <Smartphone size={28} />, title: 'Responsive UI Dev', desc: 'Pixel-perfect, modern, and fluid interfaces that look stunning on any device.' },
  { icon: <Server size={28} />, title: 'REST & GraphQL APIs', desc: 'Robust and secure backend services tailored for complex data requirements.' },
  { icon: <PieChart size={28} />, title: 'Dashboard Systems', desc: 'Complex data visualization and analytics dashboards for enterprise.' },
  { icon: <ShoppingCart size={28} />, title: 'E-commerce Dev', desc: 'High-conversion online stores with secure payment gateways integration.' },
  { icon: <Briefcase size={28} />, title: 'Portfolio Websites', desc: 'Premium, interactive personal brands to showcase your work globally.' },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        
        <div className="exp-services-grid">
          
          <div className="experience-timeline">
            <motion.h2 
              className="section-title text-gradient" style={{ textAlign: 'left' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            
            <div className="timeline-container">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-period text-gradient-blue">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="services-container">
            <motion.h2 
              className="section-title text-gradient" style={{ textAlign: 'left' }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>

            <div className="services-grid">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  className="service-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="service-icon">{service.icon}</div>
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
        .exp-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .timeline-container {
          position: relative;
          padding-left: 2rem;
          margin-top: 2rem;
        }
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), transparent);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-dot {
          position: absolute;
          left: -2.4rem;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .timeline-content {
          padding: 1.5rem;
        }
        .timeline-period {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 0.5rem;
        }
        .timeline-role {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }
        .timeline-company {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 1rem;
        }
        .timeline-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

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
        }
        .service-icon {
          color: var(--accent-light);
          margin-bottom: 1rem;
          background: rgba(59, 130, 246, 0.1);
          width: 50px;
          height: 50px;
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
        }
        .service-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

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
        }
      `}</style>
    </section>
  );
};

export default Experience;
