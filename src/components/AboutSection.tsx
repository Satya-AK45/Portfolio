import React from 'react';
import useReveal from '../hooks/useReveal';

interface AboutCard {
  id: number;
  title: string;
  body: string;
  gradient: string; // tailwind text gradient start/end colors
}

const aboutCards: AboutCard[] = [
  {
    id: 1,
    title: '🎓 Academic Excellence',
    body: '💡 Achieved 8.39/10 CGPA in MCA (GHRCEM, Pune). Previously graduated with 71.13% in B.Sc Computer Science (YCC Sillod)',
    gradient: 'from-orange-300 to-pink-400'
  },
  {
    id: 2,
    title: '🚀 Project Experience',
    body: '🚀 Delivered 3+ client projects and multiple academic projects. Built AI chatbots and career guidance systems deployed online.',
    gradient: 'from-cyan-300 to-sky-400'
  },
  {
    id: 3,
    title: '🤖 AI & Development',
    body: '🌍 Passionate about scalable applications, AI solutions, and creative design. Full-stack developer with AI expertise.',
    gradient: 'from-fuchsia-400 to-pink-500'
  },
  {
    id: 4,
    title: '✨ Personality',
    body: '✨ Multitalented. Intuitive. Dedicated. 👉 Wanna know more? Visit my Instagram @Satya_AK45',
    gradient: 'from-emerald-300 to-green-400'
  },
];

// Simple character image path (user can replace with their asset in public/)
const characterImg = '/mimoji3.png';

export const AboutSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
  <p className="text-center font-small tracking-widest fw-medium text-amber-300/80 mb-6 uppercase">📝 About me</p>
  <h2 className="text-center fw-bold font-h1 leading-tight mb-8">Welcome to <span className="text-white">Satya's World</span></h2>
  <p className="text-center font-lead fw-medium text-white/90 mb-14 max-w-4xl mx-auto">I'm an MCA student and full-stack developer with hands-on experience in AI, NLP, and web development.</p>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
            {aboutCards.map(card => (
              <div
                key={card.id}
                className="relative group rounded-2xl bg-[#242533]/70 border border-white/10 p-8 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_-5px_rgba(255,0,180,0.25)] transition-all duration-400 min-h-[250px] flex flex-col"
              >
                <h3 className={`font-h3 fw-semibold mb-4 bg-gradient-to-r ${card.gradient} text-transparent bg-clip-text`}>{card.title}</h3>
                <p className="text-gray-300 leading-relaxed font-body whitespace-pre-line flex-1">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Character image */}
          <div className="relative mx-auto lg:mx-0">
            <div className="relative w-72 md:w-80 lg:w-96 select-none">
              <img
                src={characterImg}
                alt="Character"
                className="w-full h-auto object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-24 text-center space-y-4">
          <h3 className="font-h2 fw-semibold tracking-tight">Multitalented. Intuitive. Dedicated.</h3>
          <p className="text-gray-400 font-lead">Wanna know more? Visit my Instagram</p>
        </div>
      </div>
    </section>
  );
};
