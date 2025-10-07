import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import BackgroundManager from './components/BackgroundManager';
import { CertificatesPage } from './components/CertificatesPage';
import { AllProjectsPage } from './components/AllProjectsPage';
import { Hero } from './components/Hero';
import { QuoteSection } from './components/QuoteSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { FinalCTAAndFooter } from './components/FinalCTAAndFooter';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <QuoteSection />
    <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
    <ServicesSection />
    <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
    <ProjectsSection />
    <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
    <AboutSection />
    <FinalCTAAndFooter />
  </>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen relative">
    <BackgroundManager />
    <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
