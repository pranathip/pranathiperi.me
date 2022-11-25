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

export const ArrowRight = ({ color }) => (
  <svg
    className="inline ml-2"
    width="11"
    height="8"
    viewBox="0 0 11 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3.99994H9.5M9.5 3.99994L6.5 0.999939M9.5 3.99994L6.5 7.00006"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={color}
    />
  </svg>
);

export const ArrowLeft = ({ color }) => (
  <svg
    className="inline mr-1 mb-1 transform -rotate-180"
    width="11"
    height="8"
    viewBox="0 0 11 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3.99994H9.5M9.5 3.99994L6.5 0.999939M9.5 3.99994L6.5 7.00006"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={color}
    />
  </svg>
);
