import React from 'react';

// Re-usable icon props
interface IconProps { className?: string; strokeWidth?: number; }

const base = (extra: string = '') => `w-5 h-5 md:w-6 md:h-6 ${extra}`;

export const IconWave: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4 2.5 4 5 4" />
  </svg>
);

export const IconLaptop: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 18h20" />
  </svg>
);

export const IconPencil: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4h2" />
    <path d="M5 20h14" />
    <path d="M12 4v4" />
    <path d="M8 8h8l-1 8H9l-1-8Z" />
  </svg>
);

export const IconCode: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 9l-4 3 4 3" />
    <path d="M16 9l4 3-4 3" />
    <path d="M10 19l4-14" />
  </svg>
);

export const IconPalette: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a9 9 0 0 0 0 18c1.657 0 3-1.343 3-3 0-.828-.4-1.5-1-2h3a4 4 0 0 0 0-8h-1" />
    <circle cx="7.5" cy="10.5" r="1" />
    <circle cx="10" cy="7" r="1" />
    <circle cx="13.5" cy="10.5" r="1" />
    <circle cx="12" cy="14" r="1" />
  </svg>
);

export const IconFilm: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M7 4v16M17 4v16M2 12h20" />
  </svg>
);

export const IconMusic: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const IconGamepad: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="20" height="8" rx="3" />
    <path d="M6 13h4M8 11v4" />
    <circle cx="16.5" cy="12.5" r="1" />
    <circle cx="19" cy="11" r="1" />
  </svg>
);

export const IconStar: React.FC<IconProps> = ({ className = '', strokeWidth = 2 }) => (
  <svg className={base(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 17l-5.878 3.09 1.123-6.545L2.49 8.91l6.561-.955L12 2l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
  </svg>
);
