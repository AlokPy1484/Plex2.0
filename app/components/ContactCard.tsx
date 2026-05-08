"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Check, Video, Box, PlayCircle as PlayCircleIcon, MessageSquare, Smartphone, Activity, Timer, Film, Calendar, Wallet, Leaf, Rocket, Gem, ClipboardList, User, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function CardShell({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="relative w-full h-[580px] lg:h-[600px] flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{
                border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
        >
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ pointerEvents: "none" }}
            >
                <source src="/Hero_BG.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay on top of video for readability */}
            <div
                className="absolute inset-0"
                style={{
                    background: "rgba(5, 5, 5, 0.75)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                }}
            />

            {/* Red glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}
                />
            </div>

            {/* Card content */}
            {children}
        </div>
    );
}

export default function ContactCard() {
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState("2d_animation");
    const [duration, setDuration] = useState(60);
    const [complexity, setComplexity] = useState("standard");
    const [timeline, setTimeline] = useState("oneweek");
    const [budget, setBudget] = useState("standard");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setShowToast(true);
            
            setTimeout(() => setShowToast(false), 4000);
        }, 5000);
    };

    const getProjectTypeLabel = (type: string) => {
        switch (type) {
            case "2d_animation": return "2D Animation";
            case "3d_motion": return "3D Motion";
            case "explainer": return "Explainer Video";
            default: return "Selected Service";
        }
    };

    const getTimelineLabel = (time: string) => {
        switch (time) {
            case "oneday": return "One Day";
            case "oneweek": return "One Week";
            case "twoweeks": return "Two Weeks";
            case "onemonth": return "One Month";
            default: return "Target Timeline";
        }
    };

    if (isSuccess) {
        return (
            <>
                <CardShell>
                    <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-8 text-center">
                        <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                <CheckCircle className="h-10 w-10 text-green-500" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Email sent successfully</h2>
                                <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[320px] mx-auto mt-2">
                                    We have emailed you the quotation for the project.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardShell>

                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex items-center gap-3 rounded-lg border border-green-500/30 bg-[#0d1117]/95 px-5 py-4 shadow-[0_10px_40px_rgba(34,197,94,0.3)] backdrop-blur-md"
                        >
                            <CheckCircle className="h-6 w-6 text-green-500" />
                            <p className="text-sm font-semibold tracking-wide text-white">Email Sent Successfully!</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    }

    if (step === 1) {
        return (
            <CardShell>

            {/* Mobile Header Section */}
            <div className="lg:hidden relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 1 of 5</span>
                        <span className="text-[10px] font-bold text-white/40">20% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "20%" }}></div>
                    </div>
                </div>
            </div>

            {/* Desktop Left Sidebar */}
            <div className="hidden lg:flex relative z-10 w-[40%] flex-col border-r border-white/5 bg-black/40 p-10 justify-between">
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Step 1 of 5</span>
                        <span className="text-xs font-bold text-white">20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "20%" }}></div>
                    </div>
                </div>
                <div className="my-auto">
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Ready to start?</h1>
                    <p className="text-white/50 text-sm leading-relaxed">Get an instant, professional estimate for your motion design project in just a few clicks.</p>
                </div>
                <div className="opacity-0 pointer-events-none text-xs">spacer</div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-6 lg:p-12">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="lg:hidden mb-6">
                        <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-2">
                            Find out how much your next ads will cost
                        </h1>
                        <p className="text-white/50 text-xs md:text-sm font-normal leading-relaxed max-w-[90%] md:max-w-[85%] mx-auto">
                            Get an instant, professional estimate for your motion design project in just a few clicks.
                        </p>
                    </div>

                    <div className="uppercase tracking-widest text-xs text-white/40 font-bold mb-8 hidden lg:block">Instant Estimator</div>
                    <div className="text-white mb-12 hidden lg:block text-2xl max-w-sm font-semibold">
                        Find out how much your next ads will cost in under 2 minutes.
                    </div>
                </div>

                <div className="w-full mt-auto lg:mt-0 flex flex-col items-center gap-2">
                    <button 
                        onClick={() => setStep(2)}
                        className="w-full lg:w-auto min-w-[240px] group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg h-12 lg:h-14 px-8 bg-[#f20d0d] text-white text-base lg:text-lg font-bold shadow-[0_0_20px_rgba(242,13,13,0.3)] transition-all hover:shadow-[0_0_30px_rgba(242,13,13,0.5)]">
                        <span className="relative z-10 truncate">Start Now</span>
                        <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest opacity-60 lg:hidden">Takes less than 2 minutes</p>
                </div>
            </div>
            </CardShell>
        );
    }

    if (step === 2) {
        return (
        <CardShell>

            {/* Mobile Header Section */}
            <div className="lg:hidden relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 2 of 5</span>
                        <span className="text-[10px] font-bold text-white/40">40% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "40%" }}></div>
                    </div>
                </div>
            </div>

            {/* Desktop Left Sidebar */}
            <div className="hidden lg:flex relative z-10 w-[40%] flex-col border-r border-white/5 bg-black/40 p-10 justify-between">
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Step 2 of 5</span>
                        <span className="text-xs font-bold text-white">40%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "40%" }}></div>
                    </div>
                </div>
                <div className="my-auto">
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Select Project Type</h1>
                    <p className="text-white/50 text-sm leading-relaxed">Choose the style that best fits your vision to get started.</p>
                </div>
                <div className="opacity-0 pointer-events-none text-xs">spacer</div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex flex-col h-full bg-black/10">
                <div className="flex-1 overflow-y-auto px-6 py-4 lg:p-10 custom-scrollbar">
                    {/* Mobile Title */}
                    <div className="lg:hidden mb-6">
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Select Project Type</h1>
                        <p className="text-white/50 text-xs leading-relaxed">
                            Choose the style that best fits your vision to get started.
                        </p>
                    </div>

                {/* Options List */}
                <div className="flex flex-col gap-3 pb-4">
                    {/* Option 1 */}
                    <label className={`group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${projectType === "2d_animation" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                        <input checked={projectType === "2d_animation"} onChange={() => setProjectType("2d_animation")} className="peer sr-only" name="project_type" type="radio" value="2d_animation" />
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                            <Video className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col text-left flex-1">
                            <span className="text-sm font-bold text-white tracking-wide">2D Animation</span>
                            <span className="text-[11px] text-white/60 mt-0.5 leading-tight">Flat vector graphics and kinetic typography.</span>
                        </div>
                        <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${projectType === "2d_animation" ? "border-white bg-white" : "border-white/30"}`}></div>
                    </label>

                    {/* Option 2 */}
                    <label className={`group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${projectType === "3d_motion" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                        <input checked={projectType === "3d_motion"} onChange={() => setProjectType("3d_motion")} className="peer sr-only" name="project_type" type="radio" value="3d_motion" />
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                            <Box className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col text-left flex-1">
                            <span className="text-sm font-bold text-white tracking-wide">3D Motion</span>
                            <span className="text-[11px] text-white/60 mt-0.5 leading-tight">High-fidelity 3D rendering and product showcases.</span>
                        </div>
                        <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${projectType === "3d_motion" ? "border-white bg-white" : "border-white/30"}`}></div>
                    </label>

                    {/* Option 3 */}
                    <label className={`group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${projectType === "explainer" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                        <input checked={projectType === "explainer"} onChange={() => setProjectType("explainer")} className="peer sr-only" name="project_type" type="radio" value="explainer" />
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col text-left flex-1">
                            <span className="text-sm font-bold text-white tracking-wide">Explainer Video</span>
                            <span className="text-[11px] text-white/60 mt-0.5 leading-tight">Narrative videos explaining complex products.</span>
                        </div>
                        <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${projectType === "explainer" ? "border-white bg-white" : "border-white/30"}`}></div>
                    </label>
                </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 py-4 lg:px-10 lg:py-6 border-t border-white/5 bg-black/20 lg:bg-black/40 flex-none rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setStep(1)} className="flex items-center justify-center h-10 px-4 rounded-lg text-white/30 hover:text-white font-medium transition-all duration-500 cursor-pointer border border-[rgba(255,255,255,0.08)] hover:bg-white/[0.08]">
                            Back
                        </button>
                        <button onClick={() => setStep(3)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)]">
                            Next Step
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </CardShell>
    );
    }

    if (step === 3) {
        return (
            <CardShell>

            {/* Mobile Header Section */}
            <div className="lg:hidden relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 3 of 5</span>
                        <span className="text-[10px] font-bold text-white/40">60% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "60%" }}></div>
                    </div>
                </div>
            </div>

            {/* Desktop Left Sidebar */}
            <div className="hidden lg:flex relative z-10 w-[40%] flex-col border-r border-white/5 bg-black/40 p-10 justify-between">
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Step 3 of 5</span>
                        <span className="text-xs font-bold text-white">60%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className="my-auto">
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Project Scope</h1>
                    <p className="text-white/50 text-sm leading-relaxed">Define the estimated duration and visual complexity of your animation.</p>
                </div>
                <div className="opacity-0 pointer-events-none text-xs">spacer</div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex flex-col h-full bg-black/10">
                <div className="flex-1 overflow-y-auto px-6 py-4 lg:p-10 custom-scrollbar">
                    {/* Mobile Title */}
                    <div className="lg:hidden mb-6">
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Project Scope</h1>
                        <p className="text-white/50 text-xs leading-relaxed">
                            Define the estimated duration and visual complexity of your animation.
                        </p>
                    </div>

                {/* Duration Slider Section */}
                <div className="mb-6 p-4 rounded-xl">
                    <div className="flex justify-between items-end mb-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-white flex items-center gap-2">
                                <Timer className="text-white/70 w-4 h-4" />
                                Estimated Duration
                            </label>
                            <span className="text-[10px] text-white/50">How long is the final video?</span>
                        </div>
                        <span className="text-white font-bold text-lg tabular-nums">{duration}s</span>
                    </div>
                    
                    <div className="relative h-8 flex items-center px-1">
                        <input 
                            type="range" 
                            min="15" max="120" step="15"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-white relative z-10"
                            style={{ accentColor: '#ffffff' }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] font-medium uppercase text-white/40 tracking-wider px-1">
                        <span>15s</span>
                        <span>30s</span>
                        <span className="text-white font-bold">60s</span>
                        <span>90s</span>
                        <span>2m+</span>
                    </div>
                </div>

                {/* Complexity Section */}
                <div className="mb-2">
                    <div className="flex items-center gap-2 mb-3">
                        <Film className="text-white/70 w-4 h-4" />
                        <h2 className="text-sm font-semibold text-white">Visual Style & Complexity</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* Simple */}
                        <label className={`group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${complexity === "simple" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={complexity === "simple"} onChange={() => setComplexity("simple")} className="peer sr-only" name="complexity" type="radio" value="simple" />
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-semibold text-sm text-white">Simple</span>
                                    <span className="text-[9px] font-bold text-white/40 px-2 py-0.5">LOW COST</span>
                                </div>
                                <p className="text-[11px] text-white/60 leading-relaxed">
                                    2D vector graphics, icon animations, and minimal motion.
                                </p>
                            </div>
                            <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${complexity === "simple" ? "border-white bg-white" : "border-white/30"}`}></div>
                        </label>

                        {/* Standard */}
                        <label className={`group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${complexity === "standard" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={complexity === "standard"} onChange={() => setComplexity("standard")} className="peer sr-only" name="complexity" type="radio" value="standard" />
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-semibold text-sm text-white">Standard</span>
                                    <span className="text-[9px] font-bold text-white/60 px-2 py-0.5">POPULAR</span>
                                </div>
                                <p className="text-[11px] text-white/60 leading-relaxed">
                                    Character animation, textured illustrations, and fluid transitions.
                                </p>
                            </div>
                            <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${complexity === "standard" ? "border-white bg-white" : "border-white/30"}`}></div>
                        </label>

                        {/* High-end */}
                        <label className={`group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-500 ${complexity === "high-end" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={complexity === "high-end"} onChange={() => setComplexity("high-end")} className="peer sr-only" name="complexity" type="radio" value="high-end" />
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-semibold text-sm text-white">High-end</span>
                                    <span className="text-[9px] font-bold text-white/40 px-2 py-0.5">PREMIUM</span>
                                </div>
                                <p className="text-[11px] text-white/60 leading-relaxed">
                                    3D elements, frame-by-frame cel animation, and complex VFX.
                                </p>
                            </div>
                            <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${complexity === "high-end" ? "border-white bg-white" : "border-white/30"}`}></div>
                        </label>
                    </div>
                    </div>
                </div>
                
                {/* Footer Section */}
                <div className="px-6 py-4 lg:px-10 lg:py-6 border-t border-white/5 bg-black/20 lg:bg-black/40 flex-none rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setStep(2)} className="flex items-center justify-center h-10 px-4 rounded-lg text-white/30 hover:text-white font-medium transition-all duration-500 cursor-pointer border border-[rgba(255,255,255,0.08)] hover:bg-white/[0.08]">
                            Back
                        </button>
                        <button onClick={() => setStep(4)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)]">
                            Next Step
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </CardShell>
    );
    }

    if (step === 4) {
        return (
            <CardShell>


            {/* Mobile Header Section */}
            <div className="lg:hidden relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 4 of 5</span>
                        <span className="text-[10px] font-bold text-white/40">80% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "80%" }}></div>
                    </div>
                </div>
            </div>

            {/* Desktop Left Sidebar */}
            <div className="hidden lg:flex relative z-10 w-[40%] flex-col border-r border-white/5 bg-black/40 p-10 justify-between">
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Step 4 of 5</span>
                        <span className="text-xs font-bold text-white">80%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="my-auto">
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Timeline & Budget</h1>
                    <p className="text-white/50 text-sm leading-relaxed">Help us understand your constraints so we can build the perfect plan for your project.</p>
                </div>
                <div className="opacity-0 pointer-events-none text-xs">spacer</div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex flex-col h-full bg-black/10">
                <div className="flex-1 overflow-y-auto px-6 py-4 lg:p-10 custom-scrollbar space-y-6">
                    {/* Mobile Title */}
                    <div className="lg:hidden mb-2">
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Timeline & Budget</h1>
                        <p className="text-white/50 text-xs leading-relaxed">
                            Help us understand your constraints so we can build the perfect plan for your project.
                        </p>
                    </div>

                {/* Timeline Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Calendar className="text-white/70 w-4 h-4" />
                        Target Timeline
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-xl">
                        {/* One Day */}
                        <label className={`relative cursor-pointer rounded-lg transition-all duration-500 ${timeline === "oneday" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={timeline === "oneday"} onChange={() => setTimeline("oneday")} className="peer sr-only" name="timeline" type="radio" value="oneday" />
                            <div className="h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium text-white">
                                One Day
                            </div>
                        </label>
                        {/* One Week */}
                        <label className={`relative cursor-pointer rounded-lg transition-all duration-500 ${timeline === "oneweek" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={timeline === "oneweek"} onChange={() => setTimeline("oneweek")} className="peer sr-only" name="timeline" type="radio" value="oneweek" />
                            <div className="h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium text-white">
                                One Week
                            </div>
                        </label>
                        {/* Two Weeks */}
                        <label className={`relative cursor-pointer rounded-lg transition-all duration-500 ${timeline === "twoweeks" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={timeline === "twoweeks"} onChange={() => setTimeline("twoweeks")} className="peer sr-only" name="timeline" type="radio" value="twoweeks" />
                            <div className="h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium text-white">
                                2 Weeks
                            </div>
                        </label>
                        {/* One Month */}
                        <label className={`relative cursor-pointer rounded-lg transition-all duration-500 ${timeline === "onemonth" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={timeline === "onemonth"} onChange={() => setTimeline("onemonth")} className="peer sr-only" name="timeline" type="radio" value="onemonth" />
                            <div className="h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium text-white">
                                1 Month
                            </div>
                        </label>
                    </div>
                </div>

                {/* Budget Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Wallet className="text-white/70 w-4 h-4" />
                        Estimated Budget
                    </h3>
                    <div className="flex flex-col gap-2">
                        {/* Starter */}
                        <label className={`group relative flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all duration-500 ${budget === "starter" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={budget === "starter"} onChange={() => setBudget("starter")} className="peer sr-only" name="budget" type="radio" value="starter" />
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                                <Leaf className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-white">Starter</p>
                                <p className="text-[11px] text-white/60 leading-tight">&lt; $5k</p>
                            </div>
                            <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${budget === "starter" ? "border-white bg-white" : "border-white/30"}`}></div>
                        </label>

                        {/* Standard */}
                        <label className={`group relative flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all duration-500 ${budget === "standard" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={budget === "standard"} onChange={() => setBudget("standard")} className="peer sr-only" name="budget" type="radio" value="standard" />
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                                <Rocket className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-white">Standard</p>
                                <p className="text-[11px] text-white/60 leading-tight">$5k - $15k</p>
                            </div>
                            <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${budget === "standard" ? "border-white bg-white" : "border-white/30"}`}></div>
                        </label>

                        {/* Premium */}
                        <label className={`group relative flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all duration-500 ${budget === "premium" ? "border border-white/40 opacity-100" : "border border-transparent opacity-70 hover:opacity-90"}`}>
                            <input checked={budget === "premium"} onChange={() => setBudget("premium")} className="peer sr-only" name="budget" type="radio" value="premium" />
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
                                <Gem className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-white">Premium</p>
                                <p className="text-[11px] text-white/60 leading-tight">$15k+</p>
                            </div>
                            <div className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-300 ${budget === "premium" ? "border-white bg-white" : "border-white/30"}`}></div>
                        </label>
                    </div>
                </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 py-4 lg:px-10 lg:py-6 border-t border-white/5 bg-black/20 lg:bg-black/40 flex-none rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setStep(3)} className="flex items-center justify-center h-10 px-4 rounded-lg text-white/30 hover:text-white font-medium transition-all duration-500 cursor-pointer border border-[rgba(255,255,255,0.08)] hover:bg-white/[0.08]">
                            Back
                        </button>
                        <button onClick={() => setStep(5)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)]">
                            Next Step
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </CardShell>
    );
    }

    return (
        <CardShell>

            {/* Mobile Header Section */}
            <div className="lg:hidden relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 5 of 5</span>
                        <span className="text-[10px] font-bold text-white">100% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "100%" }}></div>
                    </div>
                </div>
            </div>

            {/* Desktop Left Sidebar */}
            <div className="hidden lg:flex relative z-10 w-[40%] flex-col border-r border-white/5 bg-black/40 p-10 justify-between">
                <div>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Step 5 of 5</span>
                        <span className="text-xs font-bold text-white">100%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-500 ease-out" style={{ width: "100%" }}></div>
                    </div>
                </div>
                <div className="my-auto">
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Final Step: Your Details</h1>
                    <p className="text-white/50 text-sm leading-relaxed">Where should we send your custom estimate?</p>
                </div>
                <div className="opacity-0 pointer-events-none text-xs">spacer</div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex flex-col h-full bg-black/10">
                <div className="flex-1 overflow-y-auto px-6 py-4 lg:p-10 custom-scrollbar">
                    <div className="flex flex-col gap-6">
                        {/* Mobile Title */}
                        <div className="lg:hidden mb-1">
                            <h1 className="text-xl font-bold text-white tracking-tight mb-2">Final Step: Your Details</h1>
                            <p className="text-white/50 text-xs leading-relaxed">
                                Where should we send your custom estimate?
                            </p>
                        </div>

                    {/* Summary Card */}
                    <div className="rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-3">
                            <ClipboardList className="text-white/70 w-5 h-5" />
                            <h3 className="text-xs font-bold text-white uppercase tracking-wide">Estimate Summary</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                            <div className="flex flex-col gap-1.5">
                                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Service</span>
                                <span className="font-bold text-white">{getProjectTypeLabel(projectType)}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 pt-2 sm:pt-0">
                                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Duration</span>
                                <span className="font-bold text-white">{duration} Seconds</span>
                            </div>
                            <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4 pt-2 sm:pt-0">
                                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Timeline</span>
                                <span className="font-bold text-white">{getTimelineLabel(timeline)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Inputs */}
                    <div className="flex flex-col gap-4">
                        {/* Full Name */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-semibold">Full Name</span>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                <input 
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 h-11 pl-11 pr-4 placeholder:text-white/20 text-sm transition-all duration-500" 
                                    placeholder="Jane Doe" 
                                    type="text"
                                />
                            </div>
                        </label>
                        {/* Email */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-semibold">Business Email</span>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                <input 
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 h-11 pl-11 pr-4 placeholder:text-white/20 text-sm transition-all duration-500" 
                                    placeholder="jane@company.com" 
                                    type="email"
                                />
                            </div>
                        </label>
                        {/* Additional Notes */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-semibold">Anything else we should know?</span>
                            <textarea 
                                value={notes} onChange={(e) => setNotes(e.target.value)}
                                className="w-full rounded-lg bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 min-h-[100px] p-3 text-sm placeholder:text-white/20 resize-none transition-all duration-500 custom-scrollbar" 
                                placeholder="Tell us a bit more about your project goals or specific style references..."
                            ></textarea>
                        </label>
                    </div>
                </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 py-4 lg:px-10 lg:py-6 border-t border-white/5 bg-black/20 lg:bg-black/40 flex-none rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setStep(4)} className="flex items-center justify-center h-10 px-4 rounded-lg text-white/30 hover:text-white font-medium transition-all duration-500 cursor-pointer border border-[rgba(255,255,255,0.08)] hover:bg-white/[0.08]">
                            Back
                        </button>
                        <button 
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="flex min-w-[160px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    Sending...
                                    <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    Get Estimate
                                    <Send className="ml-2 w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </CardShell>
    );
}
