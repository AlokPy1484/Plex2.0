'use client';

import { useRef, useEffect, useState } from 'react';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { Button } from '@/components/ui/button';

const avatars = [
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/16860528',
    profileUrl: 'https://github.com/dillionverma',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/20110627',
    profileUrl: 'https://github.com/tomonarifeehan',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/106103625',
    profileUrl: 'https://github.com/BankkRoll',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/59228569',
    profileUrl: 'https://github.com/safethecode',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/59442788',
    profileUrl: 'https://github.com/sanjay-mali',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/89768406',
    profileUrl: 'https://github.com/itsarghyadas',
  },
];

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [contentOpacity, setContentOpacity] = useState(1);
  const [sectionOpacity, setSectionOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionTop = -rect.top;
        const scrollableHeight = section.offsetHeight - window.innerHeight;

        if (scrollableHeight <= 0) {
          ticking = false;
          return;
        }

        // Clamp scroll fraction between 0 and 1
        const scrollFraction = Math.min(
          Math.max(sectionTop / scrollableHeight, 0),
          1
        );

        // Scrub the video to the corresponding time
        if (video.duration && isFinite(video.duration)) {
          video.currentTime = scrollFraction * video.duration;
        }

        // Text fades out between 50% and 75% scroll
        const textFadeStart = 0.50;
        const textFadeEnd = 0.75;
        if (scrollFraction <= textFadeStart) {
          setContentOpacity(1);
        } else if (scrollFraction >= textFadeEnd) {
          setContentOpacity(0);
        } else {
          setContentOpacity(
            1 - (scrollFraction - textFadeStart) / (textFadeEnd - textFadeStart)
          );
        }

        // Entire section (video + everything) fades to total black
        // Full opacity until 50% scroll, then fades to 0 by video end
        const sectionFadeStart = 0.50;
        const sectionFadeEnd = 0.75;
        if (scrollFraction <= sectionFadeStart) {
          setSectionOpacity(1);
        } else if (scrollFraction >= sectionFadeEnd) {
          setSectionOpacity(0);
        } else {
          setSectionOpacity(
            1 - (scrollFraction - sectionFadeStart) / (sectionFadeEnd - sectionFadeStart)
          );
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: '300vh' }}
    >
      {/* Sticky video container — stays on screen while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video background — fades to black near end */}
        <video
          ref={videoRef}
          src="/Hero_BG.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            pointerEvents: 'none',
            opacity: sectionOpacity,
            transition: 'opacity 0.1s ease-out',
          }}
        />

        {/* Dark gradient overlay for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
          style={{ opacity: Math.max(contentOpacity, 0.3) * sectionOpacity }}
        />

        {/* Hero content */}
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${(1 - contentOpacity) * -40}px)`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
            pointerEvents: contentOpacity < 0.1 ? 'none' : 'auto',
          }}
        >
          {/* Badge */}
          <span className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#290A0A]/90 px-4 py-1 text-sm backdrop-blur">
            ⦿ Marketing Agency
          </span>

          {/* Heading */}
          <h1 className="font-medium tracking-tight text-5xl md:text-3xl lg:text-7xl">
            Turning Ideas into Influence
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-white/70 text-sm md:text-2xl">
            Digital Marketing Experts in Custom SaaS Advertising Videos
          </p>

          {/* Buttons */}
          <div className="flex flex-row justify-center items-center gap-4 w-full mt-8">
            <Button>Our Services</Button>
            <Button className="bg-[#290A0A]/90">Contact Us</Button>
          </div>

          {/* Avatars */}
          <div className="flex flex-col justify-center items-center gap-4 mt-20">
            <a className="text-[20px] text-zinc-400">
              Trusted by founders developers and creators
            </a>
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
          </div>
        </div>

        {/* Scroll indicator at bottom */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{
            opacity: contentOpacity,
            transition: 'opacity 0.15s ease-out',
          }}
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
