'use client';

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Smile } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="testimonials" className="relative bg-black px-6 py-12 text-white w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#290A0A]/30" />

      <div className="relative mx-auto max-w-5xl text-center">


        {/* Heading */}
        <h2 className="mt-10 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-red-600">What Clients</span>{' '}
          <span className="text-white/90">have to say</span>
        </h2>

      </div>


      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className=" py-10"
      />




    </section>
  );
}


const testimonials = [
  {
    quote:
      "Plex transformed our brand visuals completely. Engagement increased almost instantly after launch, and the motion work feels premium and intentional.",
    name: "Aarav Mehta",
    title: "Founder, Grow Rev",
  },
  {
    quote:
      "The attention to detail and motion design quality was exceptional. Our product now feels polished, modern, and far more trustworthy.",
    name: "Daniel Parker",
    title: "CEO, Parker Cards",
  },
  {
    quote:
      "Working with Plex was seamless. The visuals perfectly matched our energy and helped us connect better with our fitness community.",
    name: "Valeria Gomez",
    title: "Founder, Valeria Fitness",
  },
  {
    quote:
      "Plex understood our vision instantly. The final designs elevated our platform and made complex ideas feel simple and elegant.",
    name: "Rohit Sharma",
    title: "Product Lead, The Grids",
  },
  {
    quote:
      "From concept to execution, everything felt strategic and refined. The motion design added real value to our brand experience.",
    name: "Emily Chen",
    title: "Marketing Director, Grow Rev",
  },
];


