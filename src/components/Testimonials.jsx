import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO @ TechStart',
    content: 'An absolute wizard! The dashboard they built for us not only looks stunning but handles our massive datasets with zero lag. Highly recommended for any complex MERN project.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Marcus Chen',
    role: 'Product Manager @ Innovate.io',
    content: 'The attention to detail in the UI and the smooth animations completely transformed our user experience. True professional who delivers top-tier code on time.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder @ DesignSpace',
    content: 'Bridging the gap between design and development is rare, but they nailed it. The website is pixel-perfect to our Figma files and runs incredibly fast.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Feedback
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Don't just take my word for it. Here is what industry leaders and clients have to say about my work.
        </motion.p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h5 className="author-name">{testimonial.name}</h5>
                  <span className="author-role text-gradient-blue">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding-top: 100px;
          position: relative;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
          padding: 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .quote-icon {
          color: rgba(59, 130, 246, 0.2);
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
        }
        .testimonial-content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-style: italic;
          position: relative;
          z-index: 1;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }
        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-primary);
        }
        .author-name {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }
        .author-role {
          font-size: 0.85rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
