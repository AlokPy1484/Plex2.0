'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Brand Showcase',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&fit=crop',
    aspect: '9/16'
  },
  {
    id: 2,
    title: 'Creative Process',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&fit=crop',
    aspect: '16/9'
  },
  {
    id: 3,
    title: 'Innovation',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&fit=crop',
    aspect: '16/9'
  },
  {
    id: 4,
    title: 'Digital Solutions',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&fit=crop',
    aspect: '16/9'
  }
];

export default function ShowcaseGrid() {
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set([1, 2, 3, 4]));

  const toggleMute = (e: React.MouseEvent, videoId: number) => {
    e.stopPropagation();
    setMutedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const handleMouseEnter = (videoId: number) => {
    setPlayingVideos(prev => new Set(prev).add(videoId));
  };

  const handleMouseLeave = (videoId: number) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  };

  const handleVideoEnd = (videoId: number) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  };
  return (
    <section className="bg-black px-4 pb-8 md:pb-16">
      <div className="mx-auto max-w-7xl grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        <div
          className='
              group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#290A0A] bg-neutral-900 aspect-9/16 md:row-span-2 cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[0].id)}
          onMouseLeave={() => handleMouseLeave(videos[0].id)}>
          {/* Video */}
          <video
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            poster={videos[0].poster}
            muted={mutedVideos.has(videos[0].id)}
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[0].id)}
            ref={(el) => {
              if (el) {
                if (playingVideos.has(videos[0].id)) {
                  el.play();
                } else {
                  el.pause();
                }
              }
            }}
          >
            <source src={videos[0].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
          </div>

          {/* Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button 
              onClick={(e) => toggleMute(e, videos[0].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-600"
            >
              {mutedVideos.has(videos[0].id) ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>


        <div
          className='
              md:col-span-2 group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#290A0A] bg-neutral-900 aspect-[16/9] md:max-h-[80vh] cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[1].id)}
          onMouseLeave={() => handleMouseLeave(videos[1].id)}>
          {/* Video */}
          <video
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            poster={videos[1].poster}
            muted={mutedVideos.has(videos[1].id)}
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[1].id)}
            ref={(el) => {
              if (el) {
                if (playingVideos.has(videos[1].id)) {
                  el.play();
                } else {
                  el.pause();
                }
              }
            }}
          >
            <source src={videos[1].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
          </div>

          {/* Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button 
              onClick={(e) => toggleMute(e, videos[1].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-600"
            >
              {mutedVideos.has(videos[1].id) ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>



        <div
          className='
              group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#290A0A] bg-neutral-900 aspect-video md:max-h-[80vh] cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[2].id)}
          onMouseLeave={() => handleMouseLeave(videos[2].id)}>
          {/* Video */}
          <video
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            poster={videos[2].poster}
            muted={mutedVideos.has(videos[2].id)}
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[2].id)}
            ref={(el) => {
              if (el) {
                if (playingVideos.has(videos[2].id)) {
                  el.play();
                } else {
                  el.pause();
                }
              }
            }}
          >
            <source src={videos[2].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
          </div>

          {/* Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button 
              onClick={(e) => toggleMute(e, videos[2].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-600"
            >
              {mutedVideos.has(videos[2].id) ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
        <div
          className='
              group relative overflow-hidden rounded-2xl border-[8px] md:border-[12px] border-[#290A0A] bg-neutral-900 aspect-video md:max-h-[80vh] cursor-pointer'
          onMouseEnter={() => handleMouseEnter(videos[3].id)}
          onMouseLeave={() => handleMouseLeave(videos[3].id)}>
          {/* Video */}
          <video
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            poster={videos[3].poster}
            muted={mutedVideos.has(videos[3].id)}
            loop
            playsInline
            onEnded={() => handleVideoEnd(videos[3].id)}
            ref={(el) => {
              if (el) {
                if (playingVideos.has(videos[3].id)) {
                  el.play();
                } else {
                  el.pause();
                }
              }
            }}
          >
            <source src={videos[3].src} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-500"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
          </div>

          {/* Action */}
          <div className="absolute bottom-4 right-4 z-10">
            <button 
              onClick={(e) => toggleMute(e, videos[3].id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white transition hover:bg-red-600"
            >
              {mutedVideos.has(videos[3].id) ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
