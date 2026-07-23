import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  // Read theme from localStorage so the loading screen matches
  // whatever theme the user had last (same source AppContext uses)
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : systemDark;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => finishLoading(), 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      className={`loading-screen ${isDark ? 'loading-dark' : 'loading-light'}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="loading-content">
        {/* Logo */}
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="NE Logo" className="loading-logo-img" />
        </motion.div>

        {/* Progress bar */}
        <div className="progress-bar-container">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Percentage */}
        <motion.span
          className="progress-percentage"
          key={progress}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {progress}%
        </motion.span>
      </div>

      <style>{`
        /* ── Base layout ── */
        .loading-screen {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          transition: background 0.3s ease;
        }

        /* ── Dark theme ── */
        .loading-dark {
          background: #030712;
        }
        .loading-dark .loading-logo-img {
          filter: drop-shadow(0 0 12px #38bdf8) drop-shadow(0 0 28px #3b82f6);
        }
        .loading-dark .progress-bar-container {
          background: rgba(255, 255, 255, 0.06);
        }
        .loading-dark .progress-percentage {
          color: #38bdf8;
        }

        /* ── Light theme ── */
        .loading-light {
          background: #f0f6ff;
        }
        .loading-light .loading-logo-img {
          /* Remove the dark glow, add a soft blue shadow instead */
          filter: drop-shadow(0 4px 16px rgba(59, 130, 246, 0.35));
        }
        .loading-light .progress-bar-container {
          background: rgba(59, 130, 246, 0.12);
        }
        .loading-light .progress-percentage {
          color: #2563eb;
        }

        /* ── Shared ── */
        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .loading-logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loading-logo-img {
          width: 160px;
          height: auto;
          display: block;
        }
        .progress-bar-container {
          width: 200px;
          height: 4px;
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #38bdf8, #3b82f6);
          border-radius: 2px;
        }
        .progress-percentage {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingScreen;
