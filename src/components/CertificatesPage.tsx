import React from 'react';

export const CertificatesPage: React.FC = () => {
  // Example certificates, replace with your real data
  const certificates = [
    { title: 'AI & Machine Learning', issuer: 'Coursera', year: '2024', image: '/certificates/ai-ml.jpg' },
    { title: 'Full Stack Web Development', issuer: 'Udemy', year: '2023', image: '/certificates/fullstack.jpg' },
    { title: 'NLP Specialization', issuer: 'edX', year: '2025', image: '/certificates/nlp.jpg' },
  ];

  return (
    <section className="py-16 md:py-24 text-white max-w-5xl mx-auto px-6">
      <h1 className="font-h1 fw-bold mb-8 text-center">My Certificates</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div key={idx} className="bg-white/10 rounded-xl p-6 text-center shadow-lg">
            <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="font-h3 fw-semibold mb-2">{cert.title}</h2>
            <p className="font-body text-white/80 mb-1">{cert.issuer}</p>
            <p className="font-small text-white/60">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
