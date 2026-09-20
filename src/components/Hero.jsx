import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaReact, FaAngular, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useApp } from '../context/AppContext';

const Hero = () => {
  const { t, language, isRtl } = useApp();
  const [roleText, setRoleText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter roles — all front-end focused
  const roles = language === 'en'
    ? ['Junior Front-End Developer', 'Angular & React Specialist', 'Responsive UI Builder']
    : ['مطورة واجهات أمامية', 'متخصصة في Angular وReact', 'مطورة واجهات متجاوبة'];

  useEffect(() => {
    setRoleIdx(0);
    setCharIdx(0);
    setRoleText('');
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentRole = roles[roleIdx];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIdx - 1));
        setCharIdx(prev => prev - 1);
      }, 40); // backspacing speed
    } else {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIdx + 1));
        setCharIdx(prev => prev + 1);
      }, 80); // typing speed
    }

    if (!isDeleting && charIdx === currentRole.length) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, roleIdx, language]);

  return (
    <section className="hero-section" id="home">
      <div className="bg-glow"></div>
      <div className="section-container">

        {/* Text content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="greeting text-gradient-blue">
              {t('hero.greeting')}
            </span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('hero.name')}
          </motion.h1>

          <motion.div
            className="typewriter-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="hero-role">
              <span className="text-gradient">{roleText}</span>
              <span className="typewriter-cursor">|</span>
            </h2>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('hero.intro')}
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn-primary">
              {t('hero.ctaProjects')} 
              <motion.span
                animate={{ x: isRtl ? [0, -5, 0] : [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <ArrowRight size={18} style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />
              </motion.span>
            </a>
            <a
              href="/Nada_Elhawary_Front-End-CV.pdf"
              download="Nada-Elhawary-CV.pdf"
              className="btn-secondary hero-cv-btn"
            >
              <Download size={17} />
              {t('hero.ctaDownloadCV')}
            </a>
            {/* <a href="#contact" className="btn-secondary">
              {t('hero.ctaContact')}
            </a> */}
          </motion.div>
        </div>

        {/* Profile Image & Badges */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="image-wrapper glass">
            <div className="profile-placeholder">
              <img src="/me.JPG" className="profile-photo" alt={t('hero.name')} />
            </div>

            {/* Floating tech badges — all front-end */}
            <motion.div
              className="floating-badge badge-react glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <FaReact size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-angular glass"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.7 }}
            >
              <FaAngular size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-ts glass"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <SiTypescript size={22} />
            </motion.div>
            <motion.div
              className="floating-badge badge-html glass"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.2 }}
            >
              <FaHtml5 size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-tailwind glass"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <SiTailwindcss size={22} />
            </motion.div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 100px;
          padding-bottom: 50px;
        }
        .hero-section .section-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 4rem;
        }
        .hero-content {
          flex: 1.2;
          max-width: 650px;
          text-align: start;
        }
        .greeting {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: inline-block;
        }
        html[lang="ar"] .greeting {
          font-family: 'Cairo', sans-serif;
          letter-spacing: 0;
        }
        .hero-name {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: 'Outfit', sans-serif;
        }
        html[lang="ar"] .hero-name {
          font-family: 'Cairo', sans-serif;
          font-size: 3.8rem;
        }
        .typewriter-container {
          min-height: 50px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
        }
        .hero-role {
          font-size: 2.2rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
        }
        html[lang="ar"] .hero-role {
          font-family: 'Cairo', sans-serif;
          font-size: 2rem;
        }
        .typewriter-cursor {
          animation: blink 0.75s step-end infinite;
          color: var(--accent-light);
          margin-inline-start: 4px;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .hero-ctas {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .hero-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        /* ── Mobile / Tablet: keep both buttons side-by-side ── */
        @media (max-width: 968px) {
          .hero-ctas {
            flex-wrap: nowrap;
            gap: 0.85rem;
            justify-content: center;
          }
          .hero-ctas .btn-primary,
          .hero-ctas .btn-secondary {
            padding: 10px 18px;
            font-size: 0.88rem;
            gap: 6px;
          }
        }
        @media (max-width: 420px) {
          .hero-ctas .btn-primary,
          .hero-ctas .btn-secondary {
            padding: 9px 14px;
            font-size: 0.83rem;
          }
        }
        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .image-wrapper {
          width: 420px;
          height: 420px;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-placeholder {
          width: 92%;
          height: 92%;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--glass-border);
        }
        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        .profile-photo:hover {
          transform: scale(1.03);
        }
        .floating-badge {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--glass-shadow);
        }
        .badge-react   { top: 10%;  inset-inline-start: -5%;  color: #61dafb; border-color: rgba(97, 218, 251, 0.3); }
        .badge-angular { top: -5%;  inset-inline-end: 25%;   color: #dd0031; border-color: rgba(221, 0, 49, 0.3); }
        .badge-ts      { bottom: 5%; inset-inline-start: 5%;  color: #3178c6; border-color: rgba(49, 120, 198, 0.3); }
        .badge-html    { top: 25%;  inset-inline-end: -8%;   color: #e44d26; border-color: rgba(228, 77, 38, 0.3); }
        .badge-tailwind{ bottom: 15%; inset-inline-end: -5%; color: #38bdf8; border-color: rgba(56, 189, 248, 0.3); }

        @keyframes blink {
          from, to { color: transparent }
          50% { color: var(--accent-light); }
        }

        @media (max-width: 968px) {
          .hero-section {
            padding-top: 120px;
          }
          .hero-section .section-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 3rem;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-name {
            font-size: 3rem;
          }
          html[lang="ar"] .hero-name {
            font-size: 2.8rem;
          }
          .hero-role {
            font-size: 1.8rem;
          }
          .image-wrapper {
            width: 300px;
            height: 300px;
          }
          .floating-badge {
            width: 42px;
            height: 42px;
          }
          .floating-badge svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
