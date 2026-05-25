import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <span className="text-gradient-blue">&lt;</span>
          Dev
          <span className="text-gradient-blue">/&gt;</span>
        </motion.div>

        <nav className="nav-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="nav-link"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a href="#contact" className="btn-primary" style={{ padding: '8px 20px' }}>
            Hire Me
          </a>
        </motion.div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: var(--transition-smooth);
        }
        .navbar.scrolled {
          padding: 15px 0;
          border-radius: 0 0 20px 20px;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 1px;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--accent-primary);
          transition: var(--transition-smooth);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
