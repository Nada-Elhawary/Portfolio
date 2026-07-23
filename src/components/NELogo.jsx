import React from 'react';

/**
 * NE monogram — thick outlined letters, cyan-to-blue gradient,
 * 3D shadow offset, black background. Matches the brand image exactly.
 *
 * Props:
 *   size      — height in px (width = size * 1.78), default 40
 *   showBg    — whether to render the black background rect, default false
 *               (set true for standalone / favicon use)
 *   className — extra class names
 */
const NELogo = ({ size = 40, showBg = false, className = '' }) => {
  const h = size;
  const w = Math.round(size * 1.78);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 178 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ne-logo ${className}`}
      aria-label="NE Logo"
    >
      <defs>
        {/* Main cyan → blue gradient (top-left to bottom-right) */}
        <linearGradient id="neMain" x1="30" y1="10" x2="148" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#00cfff" />
          <stop offset="40%"  stopColor="#38bdf8" />
          <stop offset="75%"  stopColor="#4f8ef7" />
          <stop offset="100%" stopColor="#3355cc" />
        </linearGradient>

        {/* Slightly darker/shifted gradient for the 3-D shadow layer */}
        <linearGradient id="neShadow" x1="30" y1="10" x2="148" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#005a8a" />
          <stop offset="100%" stopColor="#1a2d7a" />
        </linearGradient>

        {/* Soft outer glow */}
        <filter id="neGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Optional black background */}
      {showBg && <rect width="178" height="100" fill="#000" />}

      {/*
        ── N letter ──
        Built from three filled rectangles: left bar, right bar, diagonal.
        Stroke thickness ~10 units. Shadow offset: +3,+3
      */}

      {/* Shadow layer (offset) */}
      <g fill="url(#neShadow)" transform="translate(3,3)">
        {/* N left bar */}
        <rect x="30" y="15" width="10" height="70" />
        {/* N right bar */}
        <rect x="60" y="15" width="10" height="70" />
        {/* N diagonal — rotated rectangle */}
        <polygon points="30,15 40,15 70,85 60,85" />
      </g>

      {/* Shadow layer E */}
      <g fill="url(#neShadow)" transform="translate(3,3)">
        {/* E left bar */}
        <rect x="82" y="15" width="10" height="70" />
        {/* E top bar */}
        <rect x="82" y="15" width="56" height="10" />
        {/* E middle bar (shorter) */}
        <rect x="82" y="45" width="44" height="10" />
        {/* E bottom bar */}
        <rect x="82" y="75" width="56" height="10" />
      </g>

      {/* Main lit layer */}
      <g fill="url(#neMain)" filter="url(#neGlow)">
        {/* N left bar */}
        <rect x="30" y="15" width="10" height="70" />
        {/* N right bar */}
        <rect x="60" y="15" width="10" height="70" />
        {/* N diagonal */}
        <polygon points="30,15 40,15 70,85 60,85" />

        {/* E left bar */}
        <rect x="82" y="15" width="10" height="70" />
        {/* E top bar */}
        <rect x="82" y="15" width="56" height="10" />
        {/* E middle bar */}
        <rect x="82" y="45" width="44" height="10" />
        {/* E bottom bar */}
        <rect x="82" y="75" width="56" height="10" />
      </g>
    </svg>
  );
};

export default NELogo;
