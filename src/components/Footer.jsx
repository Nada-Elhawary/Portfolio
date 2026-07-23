import React from 'react';
import { useApp } from '../context/AppContext';

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="NE Logo" className="footer-logo-img" />
            </a>
          </div>
          
          <p className="copyright">
            &copy; {new Date().getFullYear()} {t('hero.name')}. {t('footer.copyright')}
          </p>
          
          <div className="footer-links">
            <a href="#home">{t('footer.links.home')}</a>
            <a href="#projects">{t('footer.links.projects')}</a>
            <a href="#contact">{t('footer.links.contact')}</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          border-top: 1px solid var(--glass-border);
          background: rgba(3, 7, 18, 0.4);
          backdrop-filter: blur(10px);
        }
        [data-theme="light"] .footer-section {
          background: rgba(255, 255, 255, 0.4);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
        }
        .footer-logo {
          display: flex;
          align-items: center;
        }
        .footer-logo-img {
          width: 72px;
          height: auto;
          display: block;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .footer-logo-img:hover {
          filter: drop-shadow(0 0 6px #38bdf8) drop-shadow(0 0 14px #3b82f6);
          opacity: 0.9;
        }
        .copyright {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
          font-weight: 500;
        }
        .footer-links a:hover {
          color: var(--accent-light);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1.2rem;
            text-align: center;
            padding: 30px 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
