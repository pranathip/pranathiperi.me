export const Orb = () => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient
        id="orb-gradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" style={{ stopColor: `#FF00FF` }} />
        <stop offset="100%" style={{ stopColor: `#FFBD2E` }} />
      </radialGradient>
    </defs>
    <circle cx="75" cy="75" r="75" fill="url(#orb-gradient)" />
  </svg>
);

export const Underline = () => (
  <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient
        id="orb-gradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" style={{ stopColor: `#FF00FF` }} />
        <stop offset="100%" style={{ stopColor: `#FFBD2E` }} />
      </radialGradient>
    </defs>
    <rect width="100%" height="2" fill="url(#orb-gradient)" />
  </svg>
);
