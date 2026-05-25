import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaReact, FaNodeJs, FaAngular } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="bg-glow"></div>
      <div className="section-container flex items-center justify-between">

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="greeting text-gradient-blue">Hello, I'm <br /> Nada Elhawary</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full Stack
            <span className="text-gradient"> MEARN Developer</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting elegant, high-performance web applications with a focus on modern UI/UX and scalable backend architectures. I turn complex problems into beautiful digital solutions.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Hire Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="image-wrapper glass">
            {/* Using a placeholder for profile, but styled elegantly */}
            <div className="profile-placeholder">
              {/* <div className="abstract-shape shape-1"></div>
              <div className="abstract-shape shape-2"></div>
              <div className="abstract-shape shape-3"></div> */}
              <img src="/me.JPG" className="profile-photo" alt="Personal Photo" />
            </div>

            {/* Floating Badges */}
            <motion.div
              className="floating-badge badge-react glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <FaReact size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-node glass"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <FaNodeJs size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-mongo glass"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <SiMongodb size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-express glass"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.2 }}
            >
              <SiExpress size={24} />
            </motion.div>
            <motion.div
              className="floating-badge badge-angular glass"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.7 }}
            >
              <FaAngular size={24} />
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
          padding-top: 80px;
        }
        .hero-section .section-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 2rem;
        }
        .hero-content {
          flex: 1;
          max-width: 600px;
        }
        .greeting {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
        }
        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .image-wrapper {
          width: 450px;
          height: 450px;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          /* background: linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.5) 100%); */
          /* box-shadow: 0 0 50px rgba(59, 130, 246, 0.2); */
        }
        .profile-placeholder {
          width: 90%;
          height: 90%;
          border-radius: 50%;
          /* background: var(--bg-primary); */
          /* position: relative; */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }
        .abstract-shape {
          position: absolute;
          filter: blur(40px);
          opacity: 0.6;
        }
        .shape-1 {
          width: 200px;
          height: 200px;
          background: var(--accent-primary);
          top: -50px;
          left: -50px;
        }
        .shape-2 {
          width: 250px;
          height: 250px;
          background: var(--accent-electric);
          bottom: -50px;
          right: -50px;
        }
        .shape-3 {
          width: 150px;
          height: 150px;
          background: #4f46e5;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .floating-badge {
          position: absolute;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 1px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }
        .badge-react { top: 10%; left: -5%; color: #61dafb; border-color: rgba(97, 218, 251, 0.3); }
        .badge-node { bottom: 15%; right: -5%; color: #339933; border-color: rgba(51, 153, 51, 0.3); }
        .badge-mongo { bottom: 5%; left: 5%; color: #47a248; border-color: rgba(71, 162, 72, 0.3); }
        .badge-express { top: 25%; right: -8%; color: #ffffff; border-color: rgba(255, 255, 255, 0.3); }
        .badge-angular { top: -5%; right: 25%; color: #dd0031; border-color: rgba(221, 0, 49, 0.3); }

        @media (max-width: 968px) {
          .section-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-content {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .image-wrapper {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
