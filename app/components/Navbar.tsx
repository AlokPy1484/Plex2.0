'use client';

import Link from 'next/link';
import { CalendarDays, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../public/nav_logo.png'

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[95vw] -translate-x-1/2 ">
      <div className="flex items-center justify-between rounded-full border  border-white/40 bg-white/10 px-2 py-1 backdrop-blur-xl shadow-lg">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-full font-black bg-white/10">
            <Image src={Logo} alt="logo" width={200} className='bg-none rounded-full ' />
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="#services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#testimonials" className="hover:text-white transition">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Pricing
          </Link>


          {/* CTA */}
        </div>
        <button className="flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm text-red-800  bg-black  transition">
          <span className='hidden md:block '>Start Now</span>
        </button>
      </div>
    </nav>
  );
}
