import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="text-gradient-blue">&lt;</span>
            Dev
            <span className="text-gradient-blue">/&gt;</span>
          </div>
          
          <p className="copyright">
            &copy; {new Date().getFullYear()} Senior Dev. All rights reserved. Built with React & Framer Motion.
          </p>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(3, 7, 18, 0.8);
          backdrop-filter: blur(10px);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 1px;
        }
        .copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }
        .footer-links a:hover {
          color: var(--accent-light);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
