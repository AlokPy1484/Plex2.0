'use client';

import Link from 'next/link';
import { CalendarDays, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[80vw] -translate-x-1/2 ">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl shadow-lg">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <span className="flex h-8 w-8 items-center justify-center rounded-full font-black bg-white/10">
            ▲
          </span>
          Plex
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="#" className="hover:text-white transition">
            Services
          </Link>
          <Link href="#" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#" className="hover:text-white transition">
            Testimonials
          </Link>
          <Link href="#" className="hover:text-white transition">
            Contact
          </Link>
        

        {/* CTA */}
      </div>
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition">
          <CalendarDays size={16} />
          <span className='hidden md:block'>Book Meeting</span>
        </button>
      </div>
    </nav>
  );
}
