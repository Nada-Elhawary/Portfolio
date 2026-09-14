import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code, Briefcase, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { t, isRtl } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://formsubmit.co/ajax/nada.elhawary.dev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Portfolio Contact Message!'
        })
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>{t('contact.getInTouch')}</h3>
            <p className="contact-desc">
              {t('contact.description')}
            </p>
            
            <div className="social-links">
              <a href="mailto:nada.elhawary.dev@gmail.com" className="social-link">
                <div className="social-icon"><Mail size={18} /></div>
                <span>nada.elhawary.dev@gmail.com</span>
              </a>
              <a href="https://github.com/Nada-Elhawary" target="_blank" rel="noreferrer" className="social-link">
                <div className="social-icon"><Code size={18} /></div>
                <span>github.com/Nada-Elhawary</span>
              </a>
              <a href="https://linkedin.com/in/nada-elhawary" target="_blank" rel="noreferrer" className="social-link">
                <div className="social-icon"><Briefcase size={18} /></div>
                <span>linkedin.com/in/nada-elhawary</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {status.success ? (
                <motion.div 
                  className="success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle size={64} className="success-icon" />
                  <h3>{isRtl ? 'تم الإرسال بنجاح!' : 'Message Sent Successfully!'}</h3>
                  <p>
                    {isRtl 
                      ? 'شكراً لك على تواصلك. سأقوم بالرد عليك في أقرب وقت ممكن.' 
                      : 'Thank you for reaching out. I will get back to you as soon as possible.'}
                  </p>
                  <button 
                    onClick={() => setStatus({ ...status, success: false })} 
                    className="btn-primary"
                  >
                    {isRtl ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  className="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="input-group">
                    <label htmlFor="name">{t('contact.labels.name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder={t('contact.placeholders.name')} 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">{t('contact.labels.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder={t('contact.placeholders.email')} 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="message">{t('contact.labels.message')}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      placeholder={t('contact.placeholders.message')} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {status.error && (
                    <div className="error-message">
                      <AlertCircle size={18} />
                      <span>{status.error}</span>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="btn-primary submit-btn"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <span className="spinner"></span>
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.submit')} <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding-top: 100px;
          padding-bottom: 80px;
          position: relative;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
        }
        .contact-info {
          padding: 3rem 2.5rem;
          text-align: start;
        }
        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1.2rem;
          color: var(--text-primary);
          font-weight: 700;
        }
        .contact-desc {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2.5rem;
          font-size: 1.05rem;
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
        html[lang="ar"] .social-link:hover {
          transform: translateX(-5px);
        }
        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
          transition: var(--transition-smooth);
          color: var(--text-primary);
        }
        [data-theme="light"] .social-icon {
          background: rgba(15, 23, 42, 0.02);
        }
        .social-link:hover .social-icon {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
          color: white;
        }

        .contact-form-container {
          padding: 3rem;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: start;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .input-group label {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .input-group input,
        .input-group textarea {
          width: 100%;
          background: rgba(3, 7, 18, 0.3);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 14px 16px;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }
        [data-theme="light"] .input-group input,
        [data-theme="light"] .input-group textarea {
          background: rgba(255, 255, 255, 0.9);
        }
        html[lang="ar"] .input-group input,
        html[lang="ar"] .input-group textarea {
          font-family: 'Cairo', sans-serif;
        }
        .input-group textarea {
          resize: vertical;
        }
        .input-group input:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px var(--accent-glow);
          background: rgba(3, 7, 18, 0.5);
        }
        [data-theme="light"] .input-group input:focus,
        [data-theme="light"] .input-group textarea:focus {
          background: white;
        }
        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 16px;
          font-size: 1.1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s ease-in-out infinite;
        }
        .error-message {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ef4444;
          font-size: 0.95rem;
        }
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1.5rem;
          padding: 1rem;
        }
        .success-icon {
          color: #22c55e;
        }
        .success-state h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .success-state p {
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 400px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info, .contact-form-container {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
