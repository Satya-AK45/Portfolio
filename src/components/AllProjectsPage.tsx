import React from 'react';

export const AllProjectsPage: React.FC = () => {
  // Example projects, replace with your real data
  const projects = [
    { title: 'Drushti – AI Chatbot', description: 'Conversational image recognition chatbot with computer vision and NLP.', image: '/projects/project1.jpg' },
    { title: 'Disha – Career Guidance', description: 'AI-powered career recommendation system using Google Gemini AI.', image: '/projects/project2.jpg' },
    { title: 'Portfolio Website', description: 'Personal portfolio built with Vite.js, React, and Tailwind CSS.', image: '/projects/project3.jpg' },
    { title: 'Paint App', description: 'Simple paint application for creative drawing.', image: '/projects/project4.jpg' },
    // Add more projects as needed
  ];

  return (
    <section className="py-16 md:py-24 text-white max-w-6xl mx-auto px-6">
      <h1 className="font-h1 fw-bold mb-8 text-center">All Projects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white/10 rounded-xl p-6 text-center shadow-lg">
            <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="font-h3 fw-semibold mb-2">{proj.title}</h2>
            <p className="font-body text-white/80">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
