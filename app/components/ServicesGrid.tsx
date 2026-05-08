'use client';

import { FileEdit, Mic, Film, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    icon: <FileEdit className="w-6 h-6 text-red-500" />,
    title: 'Scriptwriting',
    description:
      'We craft compelling, high-converting scripts designed to capture attention and communicate your message with clarity.',
  },
  {
    icon: <Mic className="w-6 h-6 text-red-500" />,
    title: 'Voiceover Generation',
    description:
      'We deliver natural, studio-quality voiceovers that elevate your content with professional and engaging tone.',
  },
  {
    icon: <Film className="w-6 h-6 text-red-500" />,
    title: 'Video Production',
    description:
      'We transform ideas into premium, smooth motion visuals that are visually striking and built to leave a lasting impression.',
  },
];

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0B0B0B] p-8 transition-all duration-300 hover:border-red-600/50">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-sans text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-neutral-400">
        {description}
      </p>

      {/* Explore link — appears on hover */}
      <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium uppercase tracking-widest text-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Explore
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative w-full bg-black px-6 py-24 text-white"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl text-center">
        <span className="mb-4 block text-sm font-medium uppercase tracking-[0.3em] text-red-500">
          Services Ecosystem
        </span>
        <h2 className="font-sans text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-white">We handle all </span>
          <span className="text-red-600">marketing needs</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
