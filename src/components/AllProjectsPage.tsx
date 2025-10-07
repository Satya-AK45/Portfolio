import React from 'react';

export const AllProjectsPage: React.FC = () => {
  // Projects with real deployed links
  const projects = [
    { 
      title: '🎯 Disha – AI Career Guidance', 
      description: 'Career recommendation system using Google Gemini AI. Helped 250+ users with personalized paths aligned with NEP 2020.', 
      image: '/projects/project2.jpg',
      link: 'https://disha1.vercel.app/',
      technologies: ['Google Gemini AI', 'Python', 'Web Development']
    },
    { 
      title: '🤖 Drushti – Conversational Image Recognition Chatbot', 
      description: 'AI chatbot with computer vision + NLP, deployed on Vercel. Improved accuracy by 60–70% with custom algorithms.', 
      image: '/projects/project1.jpg',
      link: 'https://drushti.vercel.app',
      technologies: ['Python', 'AI/ML', 'Computer Vision', 'NLP']
    },
    { 
      title: '🌐 Weather App', 
      description: 'Interactive weather application built with Vanilla JavaScript. Features real-time weather data and responsive design.', 
      image: '/projects/project3.jpg',
      link: 'https://ak-weather-satya.netlify.app/',
      technologies: ['JavaScript', 'HTML/CSS', 'Weather API']
    },
    { 
      title: '🎨 Paint App', 
      description: 'Digital painting application with canvas API. Features multiple brush tools and color palettes.', 
      image: '/projects/project4.jpg',
      link: 'https://paint-satya.netlify.app/',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3']
    },
    { 
      title: '📸 Image Editing Tool', 
      description: 'Browser-based image editor with filters, cropping, and enhancement features.', 
      image: '/projects/project5.jpg',
      link: 'https://imgedit-satya.netlify.app/',
      technologies: ['JavaScript', 'Canvas API', 'File API']
    },
  ];

  return (
    <section className="py-16 md:py-24 text-white max-w-6xl mx-auto px-6">
      <h1 className="font-h1 fw-bold mb-8 text-center">All Projects</h1>
      <p className="text-gray-400 font-lead text-center mb-12">Click on any project to visit the live application</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <a 
            key={idx} 
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer block"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-small fw-medium">
                  View Live Project →
                </span>
              </div>
            </div>
            
            <h2 className="font-h3 fw-semibold mb-3 group-hover:text-cyan-300 transition-colors">{proj.title}</h2>
            <p className="font-body text-white/80 mb-4 line-clamp-3">{proj.description}</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {proj.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 rounded-full font-small text-gray-300 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      
      {/* Back to Home */}
      <div className="text-center mt-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white fw-medium font-body hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
        >
          ← Back to Home
        </a>
      </div>
    </section>
  );
}
