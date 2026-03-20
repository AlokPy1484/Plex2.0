"use client";

import ContactCard from "./ContactCard";
import { Map } from "./Map";
import { Radar, IconContainer } from "./ui/Radar";
import { Globe, Server, Cpu, Wifi } from "lucide-react";

export default function ContactSection() {

    return (
        <section className="flex justify-center w-full mt-30 mb-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 w-full max-w-7xl">
                <div className="flex flex-col justify-between gap-4 items-start w-full md:w-2/3 p-4">
                    <div className="flex flex-col justify-center items-start w-full gap-4">
                        <h1 className="flex justify-start w-full text-[42px] md:text-5xl font-bold">Let's grow together</h1>
                        <span className="flex justify-start w-full text-sm md:text-md text-zinc-400">
                            Contact me if you have web development work where I can apply my skills to help build, improve, or scale your project effectively.
                        </span>
                    </div>
                    <div className="relative mt-10 w-full h-[320px] md:h-[400px] p-4 sm:p-8">
                        <Radar
                            className="bg-transparent border border-white/20 mx-auto h-full w-full"
                            icons={[
                                { icon: Globe, radius: 0.75, angle: 145, delay: 0.2, label: "SEO Audit" },
                                { icon: Server, radius: 1.0, angle: 105, delay: 0.6, label: "Lead Gen" },
                                { icon: Cpu, radius: 0.5, angle: 75, delay: 1.0, label: "Performance" },
                                { icon: Wifi, radius: 0.75, angle: 35, delay: 1.4, label: "Social Media" },
                            ]}
                        >
                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none scale-90 md:scale-100 mb-4">

                            </div>
                            <div className="hidden dark:block absolute inset-0 rounded-2xl bg-[#0a0505]/60 pointer-events-none z-30"></div>
                        </Radar>
                    </div>
                </div>
                <div className="p-4 w-full md:w-1/3 flex justify-center md:justify-end">
                    <ContactCard />
                </div>
            </div>
        </section>
    )
}
