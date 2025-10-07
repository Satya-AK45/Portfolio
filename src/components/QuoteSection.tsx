import React from 'react';
import useReveal from '../hooks/useReveal';

export const QuoteSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
  <section ref={ref} className="py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <blockquote className="relative">
          <div className="space-y-3 sm:space-y-5 mb-10 md:mb-14">
            <p className="font-h2 fw-semibold leading-tight tracking-wide text-white/90">
              "Design is not just what it looks like and
            </p>
            <p className="font-h2 fw-semibold leading-tight tracking-wide text-white/90">
              feels like —
            </p>
            <p className="font-h2 fw-bold leading-tight tracking-wide">
              <span className="hero-text-gradient drop-shadow-[0_0_12px_rgba(120,200,255,0.25)]">It's how it works."</span>
            </p>
          </div>
          <footer>
            <cite className="font-lead text-gray-300 fw-semibold not-italic tracking-wide">
              — Steve Jobs
            </cite>
          </footer>
        </blockquote>
        
        {/* Decorative corner lines */}
  <div className="absolute top-4 md:top-8 left-4 md:left-8 w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
  <div className="absolute top-4 md:top-8 right-4 md:right-8 w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-fuchsia-400/40 to-transparent"></div>
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
      </div>
    </section>
  );
};