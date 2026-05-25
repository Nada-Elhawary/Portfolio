import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Have a project in mind or looking to hire? Let's discuss how I can help bring your vision to life.
        </motion.p>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Get in Touch</h3>
            <p className="contact-desc">
              I am currently available for freelance opportunities and full-time positions. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="social-links">
              <a href="mailto:nada.elhawaryy3@gmail.com" className="social-link">
                <div className="social-icon"><Mail size={20} /></div>
                <span>nada.elhawaryy3@gmail.com</span>
              </a>
              <a href="https://github.com/Nada-Elhawary" target="_blank" rel="noreferrer" className="social-link">
                <div className="social-icon"><Code size={20} /></div>
                <span>github.com/Nada-Elhawary</span>
              </a>
              <a href="https://linkedin.com/in/nada-elhawary" target="_blank" rel="noreferrer" className="social-link">
                <div className="social-icon"><Briefcase size={20} /></div>
                <span>linkedin.com/in/nada-elhawary</span>
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            action="https://formsubmit.co/nada.elhawaryy3@gmail.com"
            method="POST"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact from Portfolio Website!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            
            <button type="submit" className="btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding-top: 100px;
          padding-bottom: 50px;
          position: relative;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }
        .contact-info {
          padding: 3rem 2rem;
        }
        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .contact-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .social-link:hover {
          color: var(--accent-light);
          transform: translateX(5px);
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: var(--transition-smooth);
        }
        .social-link:hover .social-icon {
          background: rgba(59, 130, 246, 0.2);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
          color: var(--accent-electric);
        }

        .contact-form {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .input-group label {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .input-group input,
        .input-group textarea {
          width: 100%;
          background: rgba(3, 7, 18, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 14px 16px;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }
        .input-group textarea {
          resize: vertical;
        }
        .input-group input:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
          background: rgba(3, 7, 18, 0.8);
        }
        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 16px;
          font-size: 1.1rem;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info {
            padding: 2rem;
          }
          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
