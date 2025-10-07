import React from 'react';
import useReveal from '../hooks/useReveal';

const projects = [
  {
    id: 1,
    title: '🎯 Disha – AI Career Guidance System',
    category: 'AI System',
    description: 'Career recommendation system using Google Gemini AI. Helped 250+ users with personalized paths aligned with NEP 2020.',
    image: '/projects/project2.jpg',
    technologies: ['Google Gemini AI', 'Python', 'Web Development'],
    link: 'https://disha1.vercel.app/',
    gradient: 'from-emerald-400 to-cyan-500'
  },
  {
    id: 2,
    title: '🤖 Drushti – Conversational Image Recognition Chatbot',
    category: 'AI Application',
    description: 'AI chatbot with computer vision + NLP, deployed on Vercel. Improved accuracy by 60–70% with custom algorithms.',
    image: '/projects/project1.jpg',
    technologies: ['Python', 'AI/ML', 'Computer Vision', 'NLP'],
    link: 'https://drushti.vercel.app',
    gradient: 'from-purple-400 to-indigo-500'
  },
  {
    id: 3,
    title: '🌐 Weather App',
    category: 'Web Development',
    description: 'Interactive weather application built with Vanilla JavaScript. Features real-time weather data and responsive design.',
    image: '/projects/project3.jpg',
    technologies: ['JavaScript', 'HTML/CSS', 'Weather API', 'Responsive Design'],
    link: 'https://ak-weather-satya.netlify.app/',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    id: 4,
    title: '🎨 Paint App',
    category: 'Web Application',
    description: 'Digital painting application with canvas API. Features multiple brush tools and color palettes.',
    image: '/projects/project4.jpg',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Canvas API'],
    link: 'https://paint-satya.netlify.app/',
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    id: 5,
    title: '📸 Image Editing Tool',
    category: 'Web Application',
    description: 'Browser-based image editor with filters, cropping, and enhancement features.',
    image: '/projects/project5.jpg',
    technologies: ['JavaScript', 'Canvas API', 'File API', 'CSS3'],
    link: 'https://imgedit-satya.netlify.app/',
    gradient: 'from-green-400 to-emerald-500'
  }
];

export const ProjectsSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id="projects" className="py-16 md:py-24 lg:py-32 text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-cyan-400 font-small fw-medium tracking-wide uppercase mb-4">
            🚀 My projects
          </p>
          <h2 className="font-h1 fw-bold leading-tight mb-4">
            A selection of my best work <br />(including this website):
          </h2>
          <p className="text-gray-400 font-lead">
            (including this website)
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-1 hover:scale-[1.02] transition-all duration-300 ${
                index === 0 ? 'lg:col-span-1' : ''
              } ${
                index === 1 ? 'xl:col-span-2' : ''
              }`}
            >
              {/* Inner container */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full">
                
                {/* Project Preview */}
                <div className="relative mb-6 aspect-video bg-slate-700 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    style={{ display: 'none' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                        <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-sm opacity-80"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white fw-medium font-small hover:bg-white/30 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-cyan-400 font-small fw-medium mb-2">{project.category}</p>
                    <h3 className="font-h3 fw-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 font-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full font-small fw-medium text-gray-300 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 fw-medium font-small group/link transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white fw-semibold font-body hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-20 md:mt-24 pt-16 md:pt-20 border-t border-white/10">
          <p className="text-gray-400 font-lead mb-6">
            💡 Curious about my work?
          </p>
          <a
            href="https://github.com/Satya-AK45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-h2 fw-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>👉 Visit my GitHub</span>
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {/* Decorative line */}
          <div className="mt-12 md:mt-16 w-24 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};