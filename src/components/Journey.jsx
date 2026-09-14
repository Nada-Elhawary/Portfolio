import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

/* ─── bold one highlighted word ─── */
const WithHighlight = ({ text, word }) => {
  if (!word || !text.includes(word)) return <>{text}</>;
  const parts = text.split(word);
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <strong className="jrn-hl">{word}</strong>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

/* ─── connector SVG between two rows ─── */
/*
  Each connector sits between milestone i and i+1.
  It draws a smooth S-curve from the bottom of one centre dot
  to the top of the next, swinging alternately left/right.
  Because it's inline SVG with a fixed viewBox, it scales
  with the container without any JS measurement.
*/
const Connector = ({ fromSide }) => {
  /*
    fromSide = 'left'  → current card is on the left, next will be on the right
               'right' → current card is on the right, next will be on the left
    The curve bows toward the empty side.
  */
  const w = 60;   // matches .jrn-center width
  const h = 56;   // connector height — tweak for spacing feel
  const cx = w / 2;
  // bow direction: opposite of fromSide so the curve fills the gap
  const bow = fromSide === 'left' ? cx + 22 : cx - 22;

  const d = `M ${cx} 0 C ${bow} ${h * 0.4}, ${bow} ${h * 0.6}, ${cx} ${h}`;

  return (
    <div className="jrn-connector" aria-hidden="true">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        width="100%"
        height={h}
        style={{ display: 'block' }}
      >
        <path d={d} className="jrn-conn-glow" />
        <path d={d} className="jrn-conn-line" />
      </svg>
    </div>
  );
};

/* ─── milestone card ─── */
const MilestoneCard = ({ milestone, index, side }) => {
  const fromLeft = side === 'left';
  return (
    <motion.article
      className={`jrn-card ${milestone.isCurrent ? 'jrn-card--current' : ''}`}
      aria-label={`${milestone.year} — ${milestone.title}`}
      initial={{ opacity: 0, y: 28, x: fromLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-56px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="jrn-year">{milestone.year}</span>
      <h3 className="jrn-title">{milestone.title}</h3>
      {milestone.description.split('\n\n').map((para, pi) => (
        <p key={pi} className="jrn-desc">
          <WithHighlight text={para} word={milestone.highlight} />
        </p>
      ))}
      {milestone.closing && (
        <p className="jrn-closing">
          {milestone.closing.split('\n').map((line, li) => (
            <React.Fragment key={li}>
              {li > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      )}
    </motion.article>
  );
};

/* ─── dot in the centre column ─── */
const CentreDot = ({ index, isCurrent }) => (
  <motion.div
    className={`jrn-dot${isCurrent ? ' jrn-dot--current' : ''}`}
    aria-hidden="true"
    initial={{ opacity: 0, scale: 0.3 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-56px' }}
    transition={{ duration: 0.38, delay: index * 0.08 + 0.18, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="jrn-dot-ring" />
    <div className="jrn-dot-core" />
  </motion.div>
);

/* ─── main section ─── */
const Journey = () => {
  const { t, isRtl } = useApp();

  const journey    = t('about.journey');
  const milestones = Array.isArray(journey.milestones) ? journey.milestones : [];

  return (
    <section className="jrn-section" id="journey">
      <div className="section-container">

        {/* section header */}
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {journey.title}
        </motion.h2>

        <motion.p
          className="section-subtitle jrn-tagline"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {journey.tagline}
        </motion.p>

        {/* timeline track */}
        <div className="jrn-track" role="list">
          {milestones.map((m, i) => {
            /*
              LTR: even i → card on left, odd → card on right
              RTL: mirror (even → right, odd → left)
            */
            const isEven  = i % 2 === 0;
            const cardSide = isRtl
              ? (isEven ? 'right' : 'left')
              : (isEven ? 'left'  : 'right');
            const isLast = i === milestones.length - 1;

            return (
              <React.Fragment key={i}>
                {/* ── milestone row ── */}
                <div
                  className={`jrn-row jrn-row--${cardSide}`}
                  role="listitem"
                >
                  {/* LEFT slot */}
                  <div className="jrn-slot jrn-slot--left">
                    {cardSide === 'left' && (
                      <MilestoneCard milestone={m} index={i} side="left" />
                    )}
                  </div>

                  {/* CENTRE: dot */}
                  <div className="jrn-centre-col">
                    <CentreDot index={i} isCurrent={m.isCurrent} />
                  </div>

                  {/* RIGHT slot */}
                  <div className="jrn-slot jrn-slot--right">
                    {cardSide === 'right' && (
                      <MilestoneCard milestone={m} index={i} side="right" />
                    )}
                  </div>
                </div>

                {/* ── S-curve connector between rows ── */}
                {!isLast && (
                  <div className="jrn-conn-row" aria-hidden="true">
                    {/* spacer left */}
                    <div className="jrn-slot" />
                    {/* curve */}
                    <Connector fromSide={cardSide} />
                    {/* spacer right */}
                    <div className="jrn-slot" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>

      <style>{`

        /* ─── section wrapper ─────────────────────────────────────── */
        .jrn-section {
          padding-top: 60px;
          position: relative;
        }

        .jrn-tagline {
          margin-bottom: 3rem;
          font-family: 'Cairo', sans-serif;
        }
        html[lang="en"] .jrn-tagline {
          font-family: 'Inter', sans-serif;
        }

        /* ─── track ───────────────────────────────────────────────── */
        .jrn-track {
          max-width: 880px;
          margin: 0 auto;
        }

        /* ─── milestone row ───────────────────────────────────────── */
        .jrn-row {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
          gap: 0;
        }

        /* ─── connector row ───────────────────────────────────────── */
        .jrn-conn-row {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: stretch;
        }

        /* ─── slot (card holder) ──────────────────────────────────── */
        .jrn-slot {
          padding: 0 1.25rem;
          display: flex;
          align-items: center;
        }
        .jrn-slot--left  { justify-content: flex-end;  }
        .jrn-slot--right { justify-content: flex-start; }

        /* RTL: mirror justify */
        [dir="rtl"] .jrn-slot--left  { justify-content: flex-start; }
        [dir="rtl"] .jrn-slot--right { justify-content: flex-end;   }

        /* ─── centre column ───────────────────────────────────────── */
        .jrn-centre-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ─── connector ───────────────────────────────────────────── */
        .jrn-connector {
          width: 100%;
        }
        .jrn-conn-line {
          fill: none;
          stroke: var(--accent-primary);
          stroke-width: 1.5;
          opacity: 0.3;
          stroke-linecap: round;
        }
        .jrn-conn-glow {
          fill: none;
          stroke: var(--accent-electric);
          stroke-width: 7;
          opacity: 0.05;
          stroke-linecap: round;
          filter: blur(3px);
        }

        /* ─── dot ─────────────────────────────────────────────────── */
        .jrn-dot {
          position: relative;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .jrn-dot-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid var(--accent-primary);
          opacity: 0.45;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .jrn-dot-core {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-primary);
          box-shadow: 0 0 0 2.5px var(--bg-primary), 0 0 8px var(--accent-glow);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          z-index: 1;
        }
        .jrn-row:hover .jrn-dot-ring {
          opacity: 1;
          transform: scale(1.3);
        }
        .jrn-row:hover .jrn-dot-core {
          transform: scale(1.35);
          box-shadow: 0 0 0 2.5px var(--bg-primary), 0 0 14px var(--accent-glow);
        }

        /* "Today" pulsing dot */
        .jrn-dot--current .jrn-dot-ring {
          border-color: var(--accent-electric);
          animation: jrn-ring 2.6s ease-in-out infinite;
        }
        .jrn-dot--current .jrn-dot-core {
          background: var(--accent-electric);
          box-shadow: 0 0 0 2.5px var(--bg-primary), 0 0 10px rgba(0,240,255,.55);
          animation: jrn-core 2.6s ease-in-out infinite;
        }
        @keyframes jrn-ring {
          0%,100% { opacity: 0.45; transform: scale(1);    }
          50%      { opacity: 1;    transform: scale(1.5);  }
        }
        @keyframes jrn-core {
          0%,100% { box-shadow: 0 0 0 2.5px var(--bg-primary), 0 0  10px rgba(0,240,255,.55); }
          50%      { box-shadow: 0 0 0 2.5px var(--bg-primary), 0 0  24px rgba(0,240,255,.85); }
        }
        @media (prefers-reduced-motion: reduce) {
          .jrn-dot--current .jrn-dot-ring,
          .jrn-dot--current .jrn-dot-core { animation: none; }
        }

        /* ─── card ────────────────────────────────────────────────── */
        .jrn-card {
          width: 100%;
          background: var(--card-bg-gradient);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: var(--card-border);
          border-radius: 14px;
          padding: 1.35rem 1.5rem;
          box-shadow: var(--glass-shadow);
          transition: var(--transition-smooth);
          text-align: left;
        }
        html[lang="ar"] .jrn-card {
          text-align: right;
        }
        .jrn-card:hover {
          border-color: rgba(59,130,246,.35);
          box-shadow: 0 10px 28px rgba(59,130,246,.14);
          transform: translateY(-3px);
        }
        .jrn-card--current {
          border-color: rgba(0,240,255,.18);
        }
        .jrn-card--current:hover {
          border-color: rgba(0,240,255,.42);
          box-shadow: 0 10px 28px rgba(0,240,255,.1);
        }
        [data-theme="light"] .jrn-card:hover {
          border-color: rgba(29,78,216,.25);
          box-shadow: 0 10px 28px rgba(29,78,216,.09);
        }

        /* ─── card typography ─────────────────────────────────────── */
        .jrn-year {
          display: inline-block;
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--accent-primary);
          font-family: 'Outfit', sans-serif;
          margin-bottom: 0.28rem;
        }
        html[lang="ar"] .jrn-year {
          letter-spacing: 0;
          font-size: 0.77rem;
          font-family: 'Cairo', sans-serif;
        }
        .jrn-card--current .jrn-year {
          color: var(--accent-electric);
        }

        .jrn-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.45rem;
          line-height: 1.35;
          font-family: 'Outfit', sans-serif;
        }
        html[lang="ar"] .jrn-title {
          font-family: 'Cairo', sans-serif;
          font-size: 1.04rem;
        }

        .jrn-desc {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.75;
          margin-bottom: 0.35rem;
          font-family: 'Inter', sans-serif;
        }
        html[lang="ar"] .jrn-desc {
          font-family: 'Cairo', sans-serif;
          font-size: 0.9rem;
          line-height: 1.8;
        }
        .jrn-desc:last-of-type { margin-bottom: 0; }

        .jrn-hl {
          color: var(--accent-light);
          font-weight: 700;
        }

        .jrn-closing {
          margin-top: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent-light);
          line-height: 1.65;
          opacity: 0.9;
          font-family: 'Inter', sans-serif;
        }
        html[lang="ar"] .jrn-closing {
          font-family: 'Cairo', sans-serif;
          font-size: 0.9rem;
        }
        html[lang="en"] .jrn-closing {
          font-style: italic;
        }

        /* ─── Tablet ──────────────────────────────────────────────── */
        @media (max-width: 860px) {
          .jrn-track { max-width: 700px; }
          .jrn-slot  { padding: 0 0.9rem; }
          .jrn-card  { padding: 1.15rem 1.25rem; }
        }

        /* ─── Mobile ──────────────────────────────────────────────── */
        @media (max-width: 640px) {

          /* ── row: dot rail on LTR-left / RTL-right, card fills rest ── */
          .jrn-row,
          .jrn-conn-row {
            grid-template-columns: 32px 1fr;
          }

          /* hide the right spacer slot entirely */
          .jrn-row > .jrn-slot--right,
          .jrn-conn-row > .jrn-slot:last-child {
            display: none;
          }

          /* dot column */
          .jrn-centre-col {
            grid-column: 1;
            align-items: flex-start;
            padding-top: 5px;
          }

          /* both card slots occupy col 2 */
          .jrn-slot--left,
          .jrn-slot--right {
            grid-column: 2;
            padding: 0 0 0 0.5rem;
            justify-content: flex-start;
          }

          /* connector becomes a simple vertical line in col 1 */
          .jrn-conn-row > .jrn-connector {
            grid-column: 1;
          }
          .jrn-conn-row > .jrn-slot:first-child {
            display: none;
          }
          .jrn-connector svg {
            /* override the S-curve: draw a straight vertical line */
          }

          /* card */
          .jrn-card {
            padding: 1rem 1.1rem;
            margin-bottom: 0;
          }

          /* RTL mobile: rail on right */
          html[lang="ar"] .jrn-row,
          html[lang="ar"] .jrn-conn-row {
            grid-template-columns: 1fr 32px;
          }
          html[lang="ar"] .jrn-centre-col {
            grid-column: 2;
          }
          html[lang="ar"] .jrn-row > .jrn-slot--left,
          html[lang="ar"] .jrn-row > .jrn-slot--right {
            grid-column: 1;
            padding: 0 0.5rem 0 0;
            justify-content: flex-end;
          }
          html[lang="ar"] .jrn-row > .jrn-slot--left {
            display: flex;
          }
          html[lang="ar"] .jrn-row > .jrn-slot--right {
            display: flex;
          }
          /* hide right spacer for RTL */
          html[lang="ar"] .jrn-conn-row > .jrn-slot:first-child {
            display: none;
          }
          html[lang="ar"] .jrn-conn-row > .jrn-slot:last-child {
            display: none;
          }
          html[lang="ar"] .jrn-conn-row > .jrn-connector {
            grid-column: 2;
          }

          .jrn-title { font-size: 0.95rem; }
          .jrn-desc  { font-size: 0.855rem; }
        }
      `}</style>
    </section>
  );
};

export default Journey;
