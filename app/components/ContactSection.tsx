"use client";

import ContactCard from "./ContactCard";

export default function ContactSection() {
    return (
        <section className="flex justify-center items-center w-full min-h-screen px-4 py-16 text-white">
            <div className="w-full max-w-7xl">
                <ContactCard />
            </div>
        </section>
    );
}
