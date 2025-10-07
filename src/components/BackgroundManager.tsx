import React, { useEffect, useRef } from 'react';

/**
 * BackgroundManager
 * Creates a single uniform animated background for all sections
 */
const UNIFORM_GRADIENT = 'linear-gradient(135deg, #0f0c29 0%, #302b63 35%, #24243e 70%, #0f172a 100%)';

export const BackgroundManager: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    // Create single background layer
    const layer = document.createElement('div');
    layer.className = 'bgm-layer';
    layer.style.background = UNIFORM_GRADIENT;
    layer.style.opacity = '1';
    el.appendChild(layer);
  }, []);

  return <div ref={containerRef} className="background-manager" aria-hidden="true" />;
};

export default BackgroundManager;
