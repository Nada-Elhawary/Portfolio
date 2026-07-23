import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const testimonialMeta = [
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
  { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150' },
  { image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150' }
];

const Testimonials = () => {
  const { t, isRtl } = useApp();
  const items = t('testimonials.items');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('testimonials.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('testimonials.subtitle')}
        </motion.p>

        {/* Elegant Slider-based UI */}
        <div className="slider-wrapper">
          <div className="testimonial-slider-container">
            <AnimatePresence mode="wait">
              {Array.isArray(items) && items.length > 0 && (
                <motion.div 
                  key={activeIndex}
                  className="testimonial-card glass-card active-card"
                  initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? 50 : -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote className="quote-icon" size={60} />
                  
                  <p className="testimonial-content">
                    "{items[activeIndex].content}"
                  </p>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonialMeta[activeIndex]?.image} 
                      alt={items[activeIndex].name} 
                      className="author-image" 
                    />
                    <div className="author-info">
                      <h5 className="author-name">{items[activeIndex].name}</h5>
                      <span className="author-role text-gradient-blue">{items[activeIndex].role}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="slider-controls">
            <button className="slider-btn" onClick={handlePrev} aria-label="Previous testimonial">
              <ChevronLeft size={22} />
            </button>
            <div className="slider-dots">
              {Array.isArray(items) && items.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .testimonials-section {
          padding-top: 100px;
          position: relative;
        }
        .slider-wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .testimonial-slider-container {
          width: 100%;
          min-height: 280px;
          position: relative;
        }
        .testimonial-card {
          padding: 3.5rem 3rem 3rem 3rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          text-align: start;
        }
        .quote-icon {
          color: rgba(59, 130, 246, 0.12);
          position: absolute;
          top: 1.5rem;
          inset-inline-end: 1.5rem;
        }
        .testimonial-content {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          font-style: italic;
          position: relative;
          z-index: 1;
        }
        html[lang="ar"] .testimonial-content {
          font-size: 1.2rem;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          border-top: 1px solid var(--glass-border);
          padding-top: 1.5rem;
        }
        .author-image {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-primary);
        }
        .author-name {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          font-weight: 700;
        }
        .author-role {
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .slider-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .slider-btn {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }
        .slider-btn:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .slider-dots {
          display: flex;
          gap: 0.5rem;
        }
        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-secondary);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: var(--transition-smooth);
          opacity: 0.5;
        }
        .slider-dot.active {
          background: var(--accent-primary);
          width: 24px;
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
