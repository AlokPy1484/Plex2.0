'use client';

import { Check, X } from 'lucide-react';

export default function PickMe() {
  return (
    <section className="relative bg-black px-6 py-24 text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#290A0A]/20" />

      <div className="relative mx-auto max-w-6xl">

        <div className='sticky top-[50px]'>
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#290A0A] px-4 py-1 text-sm text-white">
            ⦿ Why choose me
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-red-600">Why Plex</span>{' '}
          <span className="text-white/90">for Motion Designing</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-center text-white/60">
          Why Partner with Me for the Design Excellence
        </p>
        </div>

        {/* Comparison Card */}
        <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-white/5  p-8 backdrop-blur-3xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Skilled */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Skilled Professional
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Gain access to top-tier talent with years of experience,
                ensuring flawless execution
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Amateur Designer
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Lack of experience may result in design inconsistencies and
                overlooked details
              </p>
            </div>
          </div>
        </div>
                <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Skilled */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Skilled Professional
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Gain access to top-tier talent with years of experience,
                ensuring flawless execution
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Amateur Designer
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Lack of experience may result in design inconsistencies and
                overlooked details
              </p>
            </div>
          </div>
        </div>
                <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-[#0E0E0E] p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Skilled */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Skilled Professional
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Gain access to top-tier talent with years of experience,
                ensuring flawless execution
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Amateur Designer
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Lack of experience may result in design inconsistencies and
                overlooked details
              </p>
            </div>
          </div>
        </div>
                <div className="sticky top-[250px] mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Skilled */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Skilled Professional
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Gain access to top-tier talent with years of experience,
                ensuring flawless execution
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 h-40 w-px -translate-y-1/2 bg-white/10" />

            {/* Right - Amateur */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold">
                Amateur Designer
              </h3>

              <p className="mt-3 max-w-md text-white/60">
                Lack of experience may result in design inconsistencies and
                overlooked details
              </p>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
