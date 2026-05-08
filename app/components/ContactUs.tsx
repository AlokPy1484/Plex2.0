'use client';

import ContactCard from './ContactCard';

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative w-full bg-black px-6 py-24 text-white"
    >
      {/* Heading */}
      <div className="mx-auto max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-red-600">Get in </span>
          <span className="text-white/90">touch</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          Ready to bring your vision to life? Get a custom estimate in minutes.
        </p>
      </div>

      {/* ContactCard centered */}
      <div className="mx-auto w-full max-w-md lg:max-w-[80vw]">
        <ContactCard />
      </div>
    </section>
  );
}
