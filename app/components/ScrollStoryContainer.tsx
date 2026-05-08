'use client';

import { useRef, useState, useEffect } from 'react';
import ScrollVideoHero from './ScrollVideoHero';
import ShowcaseGrid from './ShowcaseGrid';

/**
 * ScrollStoryContainer — Master orchestrator for scroll storytelling.
 *
 * Architecture:
 *   <div height="800vh">        ← Tall scroll runway
 *     <div sticky top-0 100vh>  ← Single sticky viewport
 *       <ScrollVideoHero />     ← Scene 1 (absolute, opacity-controlled)
 *       <ShowcaseGrid />        ← Scene 2 (absolute, opacity-controlled)
 *     </div>
 *   </div>
 *
 * One scroll event listener computes a single `scrollFraction` (0→1)
 * and passes it to both scene layers as a prop.
 */
export default function ScrollStoryContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollFraction, setScrollFraction] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const scrolled = -rect.top;
        const scrollableHeight = container.offsetHeight - window.innerHeight;

        if (scrollableHeight <= 0) {
          ticking = false;
          return;
        }

        const fraction = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
        setScrollFraction(fraction);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: '800vh' }}
    >
      {/* Single sticky viewport — both scenes live here */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scene 1: Video Hero — active during 0–60% of scroll */}
        <ScrollVideoHero scrollFraction={scrollFraction} />

        {/* Scene 2: Showcase Grid — fades in at 55%, fully visible by 70% */}
        <ShowcaseGrid scrollFraction={scrollFraction} />
      </div>
    </div>
  );
}
