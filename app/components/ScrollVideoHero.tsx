'use client';

import { useRef, useEffect, useMemo } from 'react';

interface ScrollVideoHeroProps {
  /** Global scroll fraction from the parent container (0 → 1) */
  scrollFraction: number;
}

/**
 * Scene 1 — Video Hero layer.
 *
 * The parent ScrollStoryContainer owns the scroll runway and sticky wrapper.
 * This component is an absolute-positioned layer that:
 *   • Scrubs the background video based on the scroll fraction
 *   • Phases the "PLEX VISUALS" title and tagline text in/out
 *   • Fades the entire scene to black before handing off to Scene 2
 *
 * The incoming `scrollFraction` covers 0–1 of the global timeline.
 * This scene is active during roughly global 0–0.60 (mapped internally to 0–1).
 */

// ── Scene boundaries within the global timeline ──
const SCENE_START = 0;
const SCENE_END = 0.60;

/** Remap a global fraction to a local 0-1 within this scene's range */
function localFraction(global: number): number {
  if (global <= SCENE_START) return 0;
  if (global >= SCENE_END) return 1;
  return (global - SCENE_START) / (SCENE_END - SCENE_START);
}

const words = ['SaaS', 'Fintech', 'AI', 'Web3'];

export default function ScrollVideoHero({ scrollFraction }: ScrollVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Map global scroll to local (0-1 within this scene)
  const local = localFraction(scrollFraction);

  // ── Scrub video ──
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration && isFinite(video.duration)) {
      video.currentTime = local * video.duration;
    }
  }, [local]);

  // ── Compute all visual states from local fraction (memoized) ──
  const visuals = useMemo(() => {
    // Phase 1: "PLEX VISUALS" — visible 0–15%, fades out 15–30%
    const heroFadeStart = 0.15;
    const heroFadeEnd = 0.30;
    let heroOpacity = 1;
    if (local > heroFadeStart && local < heroFadeEnd) {
      heroOpacity = 1 - (local - heroFadeStart) / (heroFadeEnd - heroFadeStart);
    } else if (local >= heroFadeEnd) {
      heroOpacity = 0;
    }

    // Phase 2: Tagline — fades in 25–35%, visible 35–65%, fades out 65–80%
    const tagFadeInStart = 0.25;
    const tagFadeInEnd = 0.35;
    const tagFadeOutStart = 0.65;
    const tagFadeOutEnd = 0.80;
    let taglineOpacity = 0;
    if (local < tagFadeInStart) {
      taglineOpacity = 0;
    } else if (local < tagFadeInEnd) {
      taglineOpacity = (local - tagFadeInStart) / (tagFadeInEnd - tagFadeInStart);
    } else if (local < tagFadeOutStart) {
      taglineOpacity = 1;
    } else if (local < tagFadeOutEnd) {
      taglineOpacity = 1 - (local - tagFadeOutStart) / (tagFadeOutEnd - tagFadeOutStart);
    }

    // Rotating keyword within tagline
    const wordStart = 0.25;
    const wordEnd = 0.80;
    const wordRange = wordEnd - wordStart;
    const segmentSize = wordRange / words.length;
    const transitionZone = 0.03;
    let activeWord = 0;
    let wordOpacity = 1;

    if (local >= wordStart && local < wordEnd) {
      const wordProgress = local - wordStart;
      const rawIndex = Math.floor(wordProgress / segmentSize);
      activeWord = Math.min(rawIndex, words.length - 1);

      const segStart = wordStart + activeWord * segmentSize;
      const segLen = segmentSize;
      const posInSeg = local - segStart;

      let wOp = 1;
      if (posInSeg < transitionZone) {
        wOp = posInSeg / transitionZone;
      } else if (posInSeg > segLen - transitionZone) {
        wOp = (segLen - posInSeg) / transitionZone;
      }
      wordOpacity = Math.max(0, Math.min(1, wOp));
    } else {
      activeWord = 0;
      wordOpacity = local < wordStart ? 1 : 0;
    }

    // Section fade to black: 80–95% of local
    const sectionFadeStart = 0.80;
    const sectionFadeEnd = 0.95;
    let sectionOpacity = 1;
    if (local > sectionFadeStart && local < sectionFadeEnd) {
      sectionOpacity = 1 - (local - sectionFadeStart) / (sectionFadeEnd - sectionFadeStart);
    } else if (local >= sectionFadeEnd) {
      sectionOpacity = 0;
    }

    return {
      heroOpacity: isNaN(heroOpacity) ? 1 : heroOpacity,
      taglineOpacity: isNaN(taglineOpacity) ? 0 : taglineOpacity,
      activeWord,
      wordOpacity: isNaN(wordOpacity) ? 1 : wordOpacity,
      sectionOpacity: isNaN(sectionOpacity) ? 1 : sectionOpacity,
    };
  }, [local]);

  const { heroOpacity, taglineOpacity, activeWord, wordOpacity, sectionOpacity } = visuals;

  // Scene is fully invisible past the end — skip rendering internals
  const sceneVisible = scrollFraction < SCENE_END + 0.05;

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: sceneVisible ? 1 : 0,
        pointerEvents: sceneVisible ? 'auto' : 'none',
      }}
    >
      {/* Video background */}
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
        }}
      />

      {/* Dark gradient overlay for legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"
        style={{
          opacity: Math.max(Math.max(heroOpacity, taglineOpacity), 0.1) * sectionOpacity,
        }}
      />

      {/* Phase 1: Hero content — "PLEX VISUALS" */}
      <div
        className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white select-none"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${(1 - heroOpacity) * -40}px)`,
          pointerEvents: 'none',
        }}
      >
        <h1 className="flex flex-col items-center justify-center leading-none">
          <span className="font-bold text-[150px] tracking-[0.15em] text-white font-myfont"
          style={{ fontFamily: 'var(--font-myfont)' }}>
            PLEX
          </span>
          <span
            className="font-light text-[60px]  tracking-[0.60em] text-white/70 -mt-1"
            style={{ fontFamily: 'var(--font-myfont)' }}
          >
            VISUALS
          </span>
        </h1>
      </div>

      {/* Phase 2: Tagline — "A motion design studio..." */}
      <div
        className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white select-none"
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${(1 - taglineOpacity) * 30}px)`,
          pointerEvents: 'none',
        }}
      >
        <p
          className="max-w-3xl leading-relaxed"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
            fontWeight: 300,
            letterSpacing: '0.02em',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          A{' '}
          <span style={{ fontWeight: 600, color: '#ffffff' }}>
            motion design studio
          </span>{' '}
          creating premium visuals for{' '}
          <span
            style={{
              fontWeight: 600,
              display: 'inline-block',
              position: 'relative',
              minWidth: '4ch',
            }}
          >
            <span
              style={{
                opacity: wordOpacity,
                background: 'linear-gradient(90deg, #a78bfa, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                transform: `translateY(${(1 - wordOpacity) * 8}px)`,
              }}
            >
              {words[activeWord]}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}
