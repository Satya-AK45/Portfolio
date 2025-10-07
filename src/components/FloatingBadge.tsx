import React from 'react';

interface FloatingBadgeProps {
  position: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
  className?: string;
}

// Desktop absolute positions; on mobile badges will stack using normal flow
const positionStyles: Record<FloatingBadgeProps['position'], string> = {
  left: 'md:absolute md:left-0 md:top-1/3 md:-translate-y-1/2',
  right: 'md:absolute md:right-0 md:top-1/4 md:-translate-y-1/2',
  bottom: 'md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[72%]',
};

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({ position, children, className = '' }) => {
  return (
    <div
      className={`${positionStyles[position]} relative z-20 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 flex items-center gap-4 animate-float whitespace-nowrap font-small sm:font-body bg-white/30 hover:bg-white/40 transition-colors ring-1 ring-white/40 ${className}`}
    >
      {children}
    </div>
  );
};
