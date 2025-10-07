import React from 'react';
import useReveal from '../hooks/useReveal';
import { IconCode, IconPalette, IconFilm } from './icons';

const services = [
  {
    id: 1,
    icon: <IconCode className="text-white" />,
    title: 'Full-Stack Development',
    description: 'Skilled in Python, PHP, JavaScript, React, Bootstrap, Tailwind CSS. Build responsive and interactive web apps deployed on Vercel.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    icon: <IconPalette className="text-white" />,
    title: 'UI/UX Design',
    description: 'Proficiency in wireframing, color theory, and visual communication. Focus on creating intuitive, user-friendly interfaces.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 3,
    icon: <IconCode className="text-white" />,
    title: 'AI & Chatbot Development',
    description: 'Experience with AI, NLP, and computer vision. Built AI-powered systems like chatbots & recommendation engines.',
    color: 'from-emerald-500 to-green-600'
  },
  {
    id: 4,
    icon: <IconFilm className="text-white" />,
    title: 'Image & Video Editing',
    description: 'Tools: PixelLab, Photoshop, Kinemaster. Digital design, social content & branding.',
    color: 'from-pink-500 to-rose-600'
  }
];

export const ServicesSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="services" className="py-16 md:py-24 lg:py-32 text-white relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Left side content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 font-small fw-medium tracking-wide uppercase mb-4">
                🛠️ My services
              </p>
              <h2 className="font-h1 fw-bold leading-tight">
                The most creative & intuitive{' '}
                <span className="text-white">workmate.</span>
              </h2>
            </div>
            
            {/* Character illustration placeholder */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                {/* Character placeholder - you can replace this with actual image */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <IconCode className="w-24 h-24 md:w-28 md:h-28 text-white" />
                </div>
                
                {/* Floating icons */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  &lt;/&gt;
                </div>
                <div className="absolute top-8 -right-8 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  B
                </div>
                <div className="absolute -bottom-4 left-8 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                  JS
                </div>
                <div className="absolute bottom-8 -right-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Services cards */}
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-h3 fw-semibold mb-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};