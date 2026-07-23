import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, language, toggleTheme, toggleLanguage, t, isRtl } = useApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('nav.about'),      href: '#about'      },
    { name: t('nav.skills'),     href: '#skills'     },
    { name: t('nav.projects'),   href: '#projects'   },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'),    href: '#contact'    },
  ];

  // Fullscreen overlay rendered via portal so it's always
  // relative to the viewport — never affected by scroll position.
  const mobileOverlay = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu-overlay glass"
          initial={{ opacity: 0, y: '-100vh' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100vh' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
        >
          {/* Close button */}
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Nav links */}
          <div className="mobile-links">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.07 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mobile-cta-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + navLinks.length * 0.07 }}
            >
              {t('nav.hireMe')}
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="nav-container">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
          >
            <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="NE Logo" className="logo-img" />
            </a>
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="nav-link"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Controls */}
          <div className="nav-controls">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="control-btn theme-toggle"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="icon-wrapper"
                >
                  {theme === 'dark' ? <Sun size={20} className="text-yellow" /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="control-btn lang-toggle"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="lang-text">{language === 'en' ? 'العربية' : 'EN'}</span>
            </motion.button>

            {/* Hire Me — desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hide-mobile"
            >
              <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                {t('nav.hireMe')}
              </a>
            </motion.div>

            {/* Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Portal — always mounted at document.body, never inside the fixed header */}
      {createPortal(mobileOverlay, document.body)}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: var(--transition-smooth);
          pointer-events: none;
        }
        .navbar.scrolled {
          padding: 12px 0;
          border-radius: 0 0 20px 20px;
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto;
        }
        .logo { display: flex; align-items: center; }
        .logo a { display: flex; align-items: center; }
        .logo-img {
          width: 100px;
          height: auto;
          display: block;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .logo-img:hover {
          filter: drop-shadow(0 0 6px #38bdf8) drop-shadow(0 0 14px #3b82f6);
          opacity: 0.9;
        }
        .navbar.scrolled .logo-img { width: 92px; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          position: relative;
        }
        .nav-link:hover { color: var(--text-primary); }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          inset-inline-start: 0;
          background: var(--accent-primary);
          transition: var(--transition-smooth);
        }
        .nav-link:hover::after { width: 100%; }
        .nav-controls { display: flex; align-items: center; gap: 1rem; }
        .control-btn {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: var(--transition-smooth);
          overflow: hidden;
          position: relative;
        }
        .control-btn:hover {
          border-color: var(--accent-light);
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-light);
        }
        .icon-wrapper { display: flex; align-items: center; justify-content: center; }
        .lang-toggle { width: auto; padding: 0 14px; gap: 6px; }
        .lang-text {
          font-size: 0.85rem;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
        }
        html[lang="ar"] .lang-text { font-family: 'Cairo', sans-serif; }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        /* ── Mobile overlay (styles here so glass var works) ── */
        .mobile-menu-overlay {
          background: var(--bg-primary);
          opacity: 0.97;
        }
        .mobile-close-btn {
          position: absolute;
          top: 20px;
          inset-inline-end: 24px;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          transition: var(--transition-smooth);
        }
        .mobile-close-btn:hover {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-light);
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          width: 100%;
        }
        .mobile-nav-link {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          text-align: center;
          padding: 6px 0;
          position: relative;
        }
        .mobile-nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-primary);
          transition: var(--transition-smooth);
        }
        .mobile-nav-link:hover { color: var(--text-primary); }
        .mobile-nav-link:hover::after { width: 60%; }
        .mobile-cta-btn {
          margin-top: 0.5rem;
          padding: 12px 40px !important;
          font-size: 1rem !important;
          text-align: center;
        }
        .text-yellow { color: #fbbf24; }

        @media (max-width: 768px) {
          .nav-links, .hide-mobile { display: none; }
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
