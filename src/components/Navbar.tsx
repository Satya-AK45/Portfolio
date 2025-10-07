import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Mixed navigation: internal page anchors (home sections) + routed pages
const sectionLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About me', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const routeLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Certificates', to: '/certificates' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) return; // let default if not on home (will navigate to /#id if server supports)
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/10 supports-[backdrop-filter]:bg-white/10">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3">
  <a href="/" className="fw-semibold font-body sm:font-lead tracking-tight text-white hover:text-white/80 transition-colors">Satyakam Gajanan Mangate</a>
        <button aria-label="Toggle menu" onClick={()=>setOpen(o=>!o)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 text-white hover:bg-white/25 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
        <ul className="hidden md:flex gap-8 font-small fw-medium text-white/90">
          {sectionLinks.map(l => (
            <li key={l.href}>
              <a
                className="hover:text-white transition"
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
              >{l.label}</a>
            </li>
          ))}
          {routeLinks.map(r => (
            <li key={r.to}>
              <a className="hover:text-white transition" href={r.to}>{r.label}</a>
            </li>
          ))}
        </ul>
  <a href="#contact" onClick={(e)=>handleAnchor(e,'#contact')} className="ml-6 font-small fw-semibold xl:inline-flex items-center gap-1 group text-white hidden md:inline-flex">
          <span>Work request</span>
          <span className="group-hover:translate-x-0.5 transition">›</span>
        </a>
      </nav>
      {/* Mobile dropdown */}
      <div className={`md:hidden px-4 transition-[max-height,opacity] duration-300 overflow-hidden ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col gap-4 font-small fw-medium text-white/90">
          {sectionLinks.map(l => (
            <li key={l.href}>
              <a
                onClick={(e)=>{handleAnchor(e,l.href); setOpen(false);}}
                className="block hover:text-white transition"
                href={l.href}
              >{l.label}</a>
            </li>
          ))}
          {routeLinks.map(r => (
            <li key={r.to}>
              <a onClick={()=>setOpen(false)} className="block hover:text-white transition" href={r.to}>{r.label}</a>
            </li>
          ))}
          <li>
            <a onClick={(e)=>{handleAnchor(e,'#contact'); setOpen(false);}} href="#contact" className="inline-flex items-center gap-1 fw-semibold font-small hover:text-white transition">Work request ›</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
