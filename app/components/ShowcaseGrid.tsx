'use client';

import { useState, useMemo } from 'react';
import { Play, Pause } from 'lucide-react';

interface ShowcaseGridProps {
  /** Global scroll fraction from the parent container (0 → 1) */
  scrollFraction: number;
}

const videos = [
  {
    id: 1,
    title: 'Brand Showcase',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&fit=crop',
  },
  {
    id: 2,
    title: 'Creative Process',
    src: 'https://www.w3schools.com/html/movie.mp4',
    poster: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&fit=crop',
  },
  {
    id: 3,
    title: 'Innovation',
    src: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    poster: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&fit=crop',
  },
  {
    id: 4,
    title: 'Digital Solutions',
    src: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&fit=crop',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    src: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&fit=crop',
  },
  {
    id: 6,
    title: 'Visual Identity',
    src: 'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
    poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&fit=crop',
  },
  {
    id: 7,
    title: 'Product Launch',
    src: 'https://samplelib.com/lib/preview/mp4/sample-30s.mp4',
    poster: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&fit=crop',
  },
  {
    id: 8,
    title: 'Campaign Film',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&fit=crop',
  },
];

/*  Bento grid placement map (CSS grid-area: row-start / col-start / row-end / col-end)
 *  Using a 4-col × 6-row grid with varied card sizes.
 *
 *  ┌──────┬───────────┬──────┐
 *  │  1   │     2     │  3   │
 *  │(tall)│  (wide)   │      │
 *  │      ├─────┬─────┼──────┤
 *  │      │  4  │  5  │  6   │
 *  │      │     │     │(tall)│
 *  ├──────┼─────┴─────┤      │
 *  │  7   │     8     │      │
 *  └──────┴───────────┴──────┘
 */
const gridAreas: Record<number, React.CSSProperties> = {
  1: { gridArea: '1 / 1 / 4 / 2' },   // tall left: rows 1-3, col 1
  2: { gridArea: '1 / 2 / 3 / 4' },   // wide top-center: rows 1-2, cols 2-3
  3: { gridArea: '1 / 4 / 3 / 5' },   // top-right: rows 1-2, col 4
  4: { gridArea: '3 / 2 / 5 / 3' },   // mid-left: rows 3-4, col 2
  5: { gridArea: '3 / 3 / 5 / 4' },   // mid-right: rows 3-4, col 3
  6: { gridArea: '3 / 4 / 6 / 5' },   // tall right: rows 3-5, col 4
  7: { gridArea: '4 / 1 / 6 / 2' },   // bottom-left: rows 4-5, col 1
  8: { gridArea: '5 / 2 / 7 / 4' },   // wide bottom: rows 5-6, cols 2-3
};

// ── Per-card stagger configuration ──
// Delay values determine when each card starts appearing (center-out, top-down)
const STAGGER_RANGE_START = 0.55;  // global scroll fraction when first card begins
const CARD_FADE_DURATION = 0.06;   // each card takes this much scroll range to fully appear

const cardStaggerDelays: Record<number, number> = {
  2: 0.00,   // wide top-center — appears first
  1: 0.02,   // tall left
  3: 0.04,   // top right
  5: 0.06,   // mid center-right
  4: 0.08,   // mid center-left
  6: 0.10,   // tall right
  7: 0.14,   // bottom left
  8: 0.18,   // wide bottom — appears last
};

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

/** Compute per-card opacity and scale from the global scrollFraction */
function getCardStyle(cardId: number, scrollFraction: number) {
  const delay = cardStaggerDelays[cardId] ?? 0;
  const cardStart = STAGGER_RANGE_START + delay;
  const cardEnd = cardStart + CARD_FADE_DURATION;
  const progress = clamp((scrollFraction - cardStart) / (cardEnd - cardStart), 0, 1);

  return {
    opacity: progress,
    transform: `scale(${0.7 + 0.3 * progress})`,
  };
}

export default function ShowcaseGrid({ scrollFraction }: ShowcaseGridProps) {
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());

  const togglePlay = (e: React.MouseEvent, videoId: number) => {
    e.stopPropagation();
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  // Compute per-card styles (memoized)
  const cardStyles = useMemo(() => {
    const styles: Record<number, { opacity: number; transform: string }> = {};
    for (const video of videos) {
      styles[video.id] = getCardStyle(video.id, scrollFraction);
    }
    return styles;
  }, [scrollFraction]);

  // Scene is visible if we're near or past the first card's start
  const sceneVisible = scrollFraction > STAGGER_RANGE_START - 0.02;

  return (
    <div
      id="projects"
      className="absolute inset-20 scale-95 top-40 flex items-center justify-center px-4"
      style={{
        pointerEvents: sceneVisible ? 'auto' : 'none',
      }}
    >
      {/* Mobile: stacked cards */}
      <div className="md:hidden w-full mx-auto max-w-7xl grid grid-cols-1 gap-3 max-h-[100vh] overflow-y-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-2xl border-[6px] border-[#290A0A] bg-neutral-900 cursor-pointer"
            style={{ aspectRatio: '16/9', ...cardStyles[video.id] }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster={video.poster}
              muted
              loop
              playsInline
              ref={(el) => {
                if (el) {
                  if (playingVideos.has(video.id)) el.play();
                  else el.pause();
                }
              }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="absolute bottom-3 right-3 z-10">
              <button
                onClick={(e) => togglePlay(e, video.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-600"
              >
                {playingVideos.has(video.id) ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Bento grid with 4 cols × 6 rows */}
      <div
        className="hidden md:grid w-full mx-auto max-w-7xl"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridTemplateRows: 'repeat(6, calc((90vh - 60px) / 6))',
          gap: '10px',
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-2xl border-[8px] border-[#290A0A] bg-neutral-900 cursor-pointer"
            style={{ ...gridAreas[video.id], ...cardStyles[video.id] }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster={video.poster}
              muted
              loop
              playsInline
              ref={(el) => {
                if (el) {
                  if (playingVideos.has(video.id)) el.play();
                  else el.pause();
                }
              }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="absolute bottom-3 right-3 z-10">
              <button
                onClick={(e) => togglePlay(e, video.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-600"
              >
                {playingVideos.has(video.id) ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
