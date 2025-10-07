import React from 'react';

interface AvatarGlowProps {
  src?: string;
  alt?: string;
  /** base size in tailwind units (defaults now larger: mobile 48, sm 64, md 80, lg 96) */
  size?: {
    base?: number; // corresponds to w-[base]*4px if using Tailwind spacing scale
    sm?: number;
    md?: number;
    lg?: number;
  };
  /** Direct pixel diameter override (skips size map if provided) */
  diameter?: number;
  className?: string;
  /** reduce glow strength on very small screens */
  subtleOnMobile?: boolean;
}

export const AvatarGlow: React.FC<AvatarGlowProps> = ({
  src = '/avatar-placeholder.png',
  alt = 'Profile photo',
  size = { base: 48, sm: 64, md: 80, lg: 96 },
  diameter,
  className = '',
  subtleOnMobile = true,
}) => {
  // Convert numeric size tokens to Tailwind classes (assumes spacing scale matches)
  // Map numeric (approx) to Tailwind width classes (using arbitrary values as fallback)
  const toClass = (n?: number) => {
    if (!n) return '';
    const map: Record<number,string> = {
      48: 'w-48 h-48',
      64: 'w-64 h-64',
      80: 'w-80 h-80',
      96: 'w-96 h-96',
    };
    return map[n] || `w-[${n * 4}px] h-[${n * 4}px]`;
  };
  // If diameter override provided, use arbitrary width
  const sizeClasses = diameter
    ? `w-[${diameter}px]`
    : `${toClass(size.base).replace(/ h-\S+/g,'')} sm:${toClass(size.sm).replace(/ h-\S+/g,'')} md:${toClass(size.md).replace(/ h-\S+/g,'')} lg:${toClass(size.lg).replace(/ h-\S+/g,'')}`;

  return (
  <div className={`relative mx-auto ${sizeClasses} aspect-square ${className}`} style={diameter ? { maxWidth: diameter } : undefined}>
      {/* Outer animated conic ring */}
      <div
        className="absolute -inset-2 rounded-full p-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle,rgba(255,255,255,0.35),rgba(255,255,255,0)_70%)]"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,rgba(255,210,120,.8),rgba(255,140,200,.7),rgba(120,220,255,.75),rgba(255,210,120,.8))] animate-spin-slow blur-[1px] opacity-70" />
      </div>
      {/* Soft ambient glow */}
      <div
        className={`absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),rgba(255,255,255,0)_72%)] blur-2xl ${subtleOnMobile ? 'opacity-50 sm:opacity-70' : 'opacity-70'}`}
        aria-hidden="true"
      />
      {/* Frosted inner layer */}
      <div className="absolute inset-0 rounded-full bg-white/12 backdrop-blur-sm" aria-hidden="true" />
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-cover rounded-full shadow-avatar-glow ring-2 ring-white/40"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
