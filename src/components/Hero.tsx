import React from 'react';
import { FloatingBadge } from './FloatingBadge';
import { AvatarGlow } from './AvatarGlow';

export const Hero: React.FC = () => {
  return (
    <section id="home" data-bg="hero" className="hero-bg pt-40 pb-24 md:pb-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative mx-auto mb-16 md:mb-12 max-w-3xl">
          <AvatarGlow diameter={420} className="mx-auto" />
          <div className="mt-8 md:mt-0 flex justify-center md:block">
            <FloatingBadge position="left" className="md:animate-float max-w-xs">
              <div className="font-h3 fw-semibold flex items-center gap-2 font-body">
                <span className="text-xl leading-none">👋</span>
                <span>Hi! I am <span className="fw-bold">Satyakam</span></span>
              </div>
            </FloatingBadge>
          </div>
          <FloatingBadge position="right" className="hidden md:flex max-w-sm md:translate-y-4">
            <div className="font-body fw-medium flex items-center gap-2">💻 Software Developer </div>
          </FloatingBadge>
          <FloatingBadge position="bottom" className="hidden md:flex max-w-sm md:-translate-y-2">
            <div className="font-body fw-semibold flex items-center gap-2">👨🏻‍💻 Web Developer </div>
          </FloatingBadge>
        </div>
        <h1 className="font-display fw-bold mb-8 md:mb-6 text-white drop-shadow-sm">Satyakam Gajanan Mangate</h1>
        <p className="font-lead fw-medium text-white/90 mb-10 md:mb-8">📍 Based in Chhatrapati Sambhajinagar, India</p>
        <a href="/Satyakam_Mangate_Dev.pdf" className="inline-block font-small fw-semibold px-8 py-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 text-slate-800 mb-20 md:mb-16">View Resume ›</a>
      </div>
    </section>
  );
};
