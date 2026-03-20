"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Check, Video, Box, PlayCircle as PlayCircleIcon, MessageSquare, Smartphone, Activity, Timer, Film, Calendar, Wallet, Leaf, Rocket, Gem, ClipboardList, User, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
                <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl items-center justify-center p-8 text-center"
                     style={{
                         background: "rgba(39, 27, 27, 0.4)",
                         backdropFilter: "blur(12px)",
                         border: "1px solid rgba(242, 13, 13, 0.1)"
                     }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-50"
                             style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                            <CheckCircle className="h-10 w-10 text-green-500" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Email sent successfully</h2>
                            <p className="text-[#ba9c9c] text-sm sm:text-base leading-relaxed max-w-[320px] mx-auto mt-2">
                                We have emailed you the quotation for the project.
                            </p>
                        </div>
                    </div>
                </div>

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
            <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
                 style={{
                     background: "rgba(39, 27, 27, 0.4)",
                     backdropFilter: "blur(12px)",
                     border: "1px solid rgba(242, 13, 13, 0.1)"
                 }}>
                {/* Background Glow Effects */
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                         style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                         style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                </div>}

                {/* Header Section */}
                <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 1 of 5</span>
                            <span className="text-[10px] font-bold text-[#ba9c9c]">20% Completed</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#f20d0d] rounded-full transition-all duration-500 ease-out" style={{ width: "20%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative z-10 flex-1 px-6 flex flex-col justify-center items-center text-center">
                    <div className="w-full aspect-video rounded-lg mb-4 overflow-hidden bg-[#1a0f0f] border border-white/5 relative group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2EKvEjzKHliqUP8SBYLjpbnD2m7WCFQ2v3tcvT7OsiMDXSg2gwWHSG0_7gCNqLvSxZoi-UcCspAJThd_997jAgrDvMf6DE6_zYNdSqqFbAsFj-Jgn5lYFX1aRwVcFdLHgQp-uGjmdBWYKP5O_alUDdO6Wkco-tuHyKTQymJOvsb91CvjxSueQ_We6FPPmVY_igCO_lWWW3XaHcWwhTeCJHv-vTpyxqCY8tryscR3n4Z9o3ULO9eweY9j36PQ_i00lJLfE84zyTNjm")' }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505]/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <Play className="text-[#f20d0d] w-4 h-4 fill-current" />
                            <span className="text-[10px] font-bold tracking-tighter uppercase opacity-80 text-white">Premium Quality Motion</span>
                        </div>
                    </div>
                    <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-2">
                        Find out how much your next ads will cost
                    </h1>
                    <p className="text-[#ba9c9c] text-xs md:text-sm font-normal leading-relaxed max-w-[90%] md:max-w-[85%]">
                        Get an instant, professional estimate for your motion design project in just a few clicks.
                    </p>
                </div>

                {/* Action Section */}
                <div className="relative z-10 p-6 mt-auto flex flex-col items-center gap-2">
                    <button 
                        onClick={() => setStep(2)}
                        className="w-full group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-[#f20d0d] text-white text-base font-bold shadow-[0_0_20px_rgba(242,13,13,0.3)] transition-all hover:shadow-[0_0_30px_rgba(242,13,13,0.5)]">
                        <span className="relative z-10 truncate">Start Now</span>
                        <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-[#ba9c9c] text-[10px] font-medium uppercase tracking-widest opacity-60">Takes less than 2 minutes</p>
                </div>
            </div>
        );
    }

    if (step === 2) {
        return (
        <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
             style={{
                 background: "rgba(39, 27, 27, 0.4)",
                 backdropFilter: "blur(12px)",
                 border: "1px solid rgba(242, 13, 13, 0.1)"
             }}>
             {/* Background Glow Effects */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                 <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                      style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                      style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
             </div>

            {/* Header Section */}
            <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 2 of 5</span>
                        <span className="text-[10px] font-bold text-[#ba9c9c]">40% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#f20d0d] rounded-full transition-all duration-500 ease-out" style={{ width: "40%" }}></div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-white tracking-tight mb-2">Select Project Type</h1>
                    <p className="text-[#ba9c9c] text-xs leading-relaxed">
                        Choose the style that best fits your vision to get started.
                    </p>
                </div>

                {/* Options List */}
                <div className="flex flex-col gap-3 pb-4">
                    {/* Option 1 */}
                    <label className={`group relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${projectType === "2d_animation" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                        <input checked={projectType === "2d_animation"} onChange={() => setProjectType("2d_animation")} className="peer sr-only" name="project_type" type="radio" value="2d_animation" />
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${projectType === "2d_animation" ? "bg-[#f20d0d] text-white" : "bg-white/10 text-[#ba9c9c] group-hover:bg-[#f20d0d]/80 group-hover:text-white"}`}>
                            <Video className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col text-left flex-1">
                            <span className="text-sm font-bold text-white">2D Animation</span>
                            <span className="text-[11px] text-[#ba9c9c] mt-0.5 leading-tight">Flat vector graphics and kinetic typography.</span>
                        </div>
                        {projectType === "2d_animation" ? (
                            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-[#f20d0d] bg-[#f20d0d] flex items-center justify-center">
                                <Check className="text-white w-3 h-3" strokeWidth={3} />
                            </div>
                        ) : (
                            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white/20"></div>
                        )}
                    </label>

                    {/* Option 2 */}
                    <label className={`group relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${projectType === "3d_motion" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                        <input checked={projectType === "3d_motion"} onChange={() => setProjectType("3d_motion")} className="peer sr-only" name="project_type" type="radio" value="3d_motion" />
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${projectType === "3d_motion" ? "bg-[#f20d0d] text-white" : "bg-white/10 text-[#ba9c9c] group-hover:bg-[#f20d0d]/80 group-hover:text-white"}`}>
                            <Box className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col text-left flex-1">
                            <span className="text-sm font-bold text-white">3D Motion</span>
                            <span className="text-[11px] text-[#ba9c9c] mt-0.5 leading-tight">High-fidelity 3D rendering and product showcases.</span>
                        </div>
                        {projectType === "3d_motion" ? (
                            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-[#f20d0d] bg-[#f20d0d] flex items-center justify-center">
                                <Check className="text-white w-3 h-3" strokeWidth={3} />
                            </div>
                        ) : (
                            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white/20"></div>
                        )}
                    </label>

                    {/* Option 3 */}
                    <label className={`group relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${projectType === "explainer" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                        <input checked={projectType === "explainer"} onChange={() => setProjectType("explainer")} className="peer sr-only" name="project_type" type="radio" value="explainer" />
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${projectType === "explainer" ? "bg-[#f20d0d] text-white" : "bg-white/10 text-[#ba9c9c] group-hover:bg-[#f20d0d]/80 group-hover:text-white"}`}>
                            <MessageSquare className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col text-left flex-1">
                            <span className="text-sm font-bold text-white">Explainer Video</span>
                            <span className="text-[11px] text-[#ba9c9c] mt-0.5 leading-tight">Narrative videos explaining complex products.</span>
                        </div>
                        {projectType === "explainer" ? (
                            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-[#f20d0d] bg-[#f20d0d] flex items-center justify-center">
                                <Check className="text-white w-3 h-3" strokeWidth={3} />
                            </div>
                        ) : (
                            <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white/20"></div>
                        )}
                    </label>
                </div>
            </div>

            {/* Footer Section */}
            <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setStep(1)} className="flex items-center justify-center h-10 px-4 rounded-lg text-[#ba9c9c] hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
                        Back
                    </button>
                    <button onClick={() => setStep(3)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)]">
                        Next Step
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
    }

    if (step === 3) {
        return (
            <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
             style={{
                 background: "rgba(39, 27, 27, 0.4)",
                 backdropFilter: "blur(12px)",
                 border: "1px solid rgba(242, 13, 13, 0.1)"
             }}>
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 3 of 5</span>
                        <span className="text-[10px] font-bold text-[#ba9c9c]">60% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#f20d0d] rounded-full transition-all duration-500 ease-out" style={{ width: "60%" }}></div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-white tracking-tight mb-2">Project Scope</h1>
                    <p className="text-[#ba9c9c] text-xs leading-relaxed">
                        Define the estimated duration and visual complexity of your animation.
                    </p>
                </div>

                {/* Duration Slider Section */}
                <div className="mb-6 p-4 rounded-xl bg-black/20 border border-white/5">
                    <div className="flex justify-between items-end mb-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-white flex items-center gap-2">
                                <Timer className="text-[#f20d0d] w-4 h-4" />
                                Estimated Duration
                            </label>
                            <span className="text-[10px] text-[#ba9c9c]">How long is the final video?</span>
                        </div>
                        <span className="text-[#f20d0d] font-bold text-lg tabular-nums">{duration}s</span>
                    </div>
                    
                    <div className="relative h-8 flex items-center px-1">
                        <input 
                            type="range" 
                            min="15" max="120" step="15"
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#f20d0d] relative z-10"
                            style={{ accentColor: '#f20d0d' }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] font-medium uppercase text-white/40 tracking-wider px-1">
                        <span>15s</span>
                        <span>30s</span>
                        <span className="text-[#f20d0d] font-bold">60s</span>
                        <span>90s</span>
                        <span>2m+</span>
                    </div>
                </div>

                {/* Complexity Section */}
                <div className="mb-2">
                    <div className="flex items-center gap-2 mb-3">
                        <Film className="text-[#f20d0d] w-4 h-4" />
                        <h2 className="text-sm font-semibold text-white">Visual Style & Complexity</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* Simple */}
                        <label className={`group relative flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${complexity === "simple" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20"}`}>
                            <input checked={complexity === "simple"} onChange={() => setComplexity("simple")} className="peer sr-only" name="complexity" type="radio" value="simple" />
                            <div className={`mt-0.5 w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-all ${complexity === "simple" ? "border-[#f20d0d] bg-[#f20d0d]" : "border-white/20"}`}>
                                {complexity === "simple" && <Check className="text-white w-3 h-3" strokeWidth={3} />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-semibold text-sm text-white group-hover:text-[#f20d0d] transition-colors">Simple</span>
                                    <span className="text-[9px] font-bold text-[#ba9c9c] bg-white/5 px-2 py-0.5 rounded-full border border-white/10">LOW COST</span>
                                </div>
                                <p className="text-[11px] text-[#ba9c9c] leading-relaxed">
                                    2D vector graphics, icon animations, and minimal motion.
                                </p>
                            </div>
                        </label>

                        {/* Standard */}
                        <label className={`group relative flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${complexity === "standard" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20"}`}>
                            <input checked={complexity === "standard"} onChange={() => setComplexity("standard")} className="peer sr-only" name="complexity" type="radio" value="standard" />
                            <div className={`mt-0.5 w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-all ${complexity === "standard" ? "border-[#f20d0d] bg-[#f20d0d]" : "border-white/20"}`}>
                                {complexity === "standard" && <Check className="text-white w-3 h-3" strokeWidth={3} />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-semibold text-sm text-white group-hover:text-[#f20d0d] transition-colors">Standard</span>
                                    <span className="text-[9px] font-bold text-[#f20d0d] bg-[#f20d0d]/10 px-2 py-0.5 rounded-full border border-[#f20d0d]/20">POPULAR</span>
                                </div>
                                <p className="text-[11px] text-[#ba9c9c] leading-relaxed">
                                    Character animation, textured illustrations, and fluid transitions.
                                </p>
                            </div>
                        </label>

                        {/* High-end */}
                        <label className={`group relative flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${complexity === "high-end" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20"}`}>
                            <input checked={complexity === "high-end"} onChange={() => setComplexity("high-end")} className="peer sr-only" name="complexity" type="radio" value="high-end" />
                            <div className={`mt-0.5 w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-all ${complexity === "high-end" ? "border-[#f20d0d] bg-[#f20d0d]" : "border-white/20"}`}>
                                {complexity === "high-end" && <Check className="text-white w-3 h-3" strokeWidth={3} />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-0.5">
                                    <span className="font-semibold text-sm text-white group-hover:text-[#f20d0d] transition-colors">High-end</span>
                                    <span className="text-[9px] font-bold text-[#ba9c9c] bg-white/5 px-2 py-0.5 rounded-full border border-white/10">PREMIUM</span>
                                </div>
                                <p className="text-[11px] text-[#ba9c9c] leading-relaxed">
                                    3D elements, frame-by-frame cel animation, and complex VFX.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setStep(2)} className="flex items-center justify-center h-10 px-4 rounded-lg text-[#ba9c9c] hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
                        Back
                    </button>
                    <button onClick={() => setStep(4)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)]">
                        Next Step
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
    }

    if (step === 4) {
        return (
            <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
             style={{
                 background: "rgba(39, 27, 27, 0.4)",
                 backdropFilter: "blur(12px)",
                 border: "1px solid rgba(242, 13, 13, 0.1)"
             }}>
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 4 of 5</span>
                        <span className="text-[10px] font-bold text-[#ba9c9c]">80% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#f20d0d] rounded-full transition-all duration-500 ease-out" style={{ width: "80%" }}></div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar space-y-6">
                {/* Page Heading */}
                <div>
                    <h1 className="text-xl font-bold text-white tracking-tight mb-2">Timeline & Budget</h1>
                    <p className="text-[#ba9c9c] text-xs leading-relaxed">
                        Help us understand your constraints so we can build the perfect plan for your project.
                    </p>
                </div>

                {/* Timeline Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Calendar className="text-[#f20d0d] w-4 h-4" />
                        Target Timeline
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-xl border border-white/10 bg-black/20">
                        {/* One Day */}
                        <label className="relative cursor-pointer group">
                            <input checked={timeline === "oneday"} onChange={() => setTimeline("oneday")} className="peer sr-only" name="timeline" type="radio" value="oneday" />
                            <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "oneday" ? "text-white" : "text-[#ba9c9c] hover:text-white"}`}>
                                One Day
                            </div>
                            <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-[#f20d0d]/40"></div>
                        </label>
                        {/* One Week */}
                        <label className="relative cursor-pointer group">
                            <input checked={timeline === "oneweek"} onChange={() => setTimeline("oneweek")} className="peer sr-only" name="timeline" type="radio" value="oneweek" />
                            <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "oneweek" ? "text-white" : "text-[#ba9c9c] hover:text-white"}`}>
                                One Week
                            </div>
                            <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-[#f20d0d]/40"></div>
                        </label>
                        {/* Two Weeks */}
                        <label className="relative cursor-pointer group">
                            <input checked={timeline === "twoweeks"} onChange={() => setTimeline("twoweeks")} className="peer sr-only" name="timeline" type="radio" value="twoweeks" />
                            <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "twoweeks" ? "text-white" : "text-[#ba9c9c] hover:text-white"}`}>
                                2 Weeks
                            </div>
                            <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-[#f20d0d]/40"></div>
                        </label>
                        {/* One Month */}
                        <label className="relative cursor-pointer group">
                            <input checked={timeline === "onemonth"} onChange={() => setTimeline("onemonth")} className="peer sr-only" name="timeline" type="radio" value="onemonth" />
                            <div className={`h-10 w-full flex items-center justify-center rounded-lg text-[10px] sm:text-xs font-medium transition-colors z-10 relative ${timeline === "onemonth" ? "text-white" : "text-[#ba9c9c] hover:text-white"}`}>
                                1 Month
                            </div>
                            <div className="absolute inset-0 bg-white/10 rounded-lg shadow-sm transform scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-200 ease-out border border-transparent peer-checked:border-[#f20d0d]/40"></div>
                        </label>
                    </div>
                </div>

                {/* Budget Section */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Wallet className="text-[#f20d0d] w-4 h-4" />
                        Estimated Budget
                    </h3>
                    <div className="flex flex-col gap-2">
                        {/* Starter */}
                        <label className={`group relative flex cursor-pointer rounded-xl border p-3 shadow-sm transition-all ${budget === "starter" ? "border-emerald-500 bg-emerald-500/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                            <input checked={budget === "starter"} onChange={() => setBudget("starter")} className="peer sr-only" name="budget" type="radio" value="starter" />
                            <div className="flex items-center gap-4 w-full">
                                <div className={`rounded-lg p-2 transition-colors ${budget === "starter" ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#ba9c9c]"}`}>
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-bold transition-colors ${budget === "starter" ? "text-emerald-400" : "text-white group-hover:text-emerald-400"}`}>Starter</p>
                                    <p className="text-[11px] text-[#ba9c9c] leading-tight">&lt; $5k</p>
                                </div>
                                <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${budget === "starter" ? "border-emerald-500 bg-emerald-500" : "border-white/20"}`}>
                                    {budget === "starter" && <div className="size-2 rounded-full bg-white"></div>}
                                </div>
                            </div>
                        </label>

                        {/* Standard */}
                        <label className={`group relative flex cursor-pointer rounded-xl border p-3 shadow-sm transition-all ${budget === "standard" ? "border-[#f20d0d] bg-[#f20d0d]/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                            <input checked={budget === "standard"} onChange={() => setBudget("standard")} className="peer sr-only" name="budget" type="radio" value="standard" />
                            <div className="flex items-center gap-4 w-full">
                                <div className={`rounded-lg p-2 transition-colors ${budget === "standard" ? "bg-[#f20d0d]/20 text-[#f20d0d]" : "bg-white/5 text-[#ba9c9c]"}`}>
                                    <Rocket className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-bold transition-colors ${budget === "standard" ? "text-[#f20d0d]" : "text-white group-hover:text-[#f20d0d]"}`}>Standard</p>
                                    <p className="text-[11px] text-[#ba9c9c] leading-tight">$5k - $15k</p>
                                </div>
                                <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${budget === "standard" ? "border-[#f20d0d] bg-[#f20d0d]" : "border-white/20"}`}>
                                    {budget === "standard" && <div className="size-2 rounded-full bg-white"></div>}
                                </div>
                            </div>
                        </label>

                        {/* Premium */}
                        <label className={`group relative flex cursor-pointer rounded-xl border p-3 shadow-sm transition-all ${budget === "premium" ? "border-purple-500 bg-purple-500/10" : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5"}`}>
                            <input checked={budget === "premium"} onChange={() => setBudget("premium")} className="peer sr-only" name="budget" type="radio" value="premium" />
                            <div className="flex items-center gap-4 w-full">
                                <div className={`rounded-lg p-2 transition-colors ${budget === "premium" ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-[#ba9c9c]"}`}>
                                    <Gem className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-bold transition-colors ${budget === "premium" ? "text-purple-400" : "text-white group-hover:text-purple-400"}`}>Premium</p>
                                    <p className="text-[11px] text-[#ba9c9c] leading-tight">$15k+</p>
                                </div>
                                <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${budget === "premium" ? "border-purple-500 bg-purple-500" : "border-white/20"}`}>
                                    {budget === "premium" && <div className="size-2 rounded-full bg-white"></div>}
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setStep(3)} className="flex items-center justify-center h-10 px-4 rounded-lg text-[#ba9c9c] hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
                        Back
                    </button>
                    <button onClick={() => setStep(5)} className="flex min-w-[120px] items-center justify-center h-10 px-4 rounded-lg bg-[#f20d0d] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(242,13,13,0.3)] hover:shadow-[0_0_25px_rgba(242,13,13,0.5)]">
                        Next Step
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
    }

    return (
        <div className="relative w-full max-w-full h-[580px] flex flex-col rounded-xl overflow-hidden shadow-2xl"
             style={{
                 background: "rgba(39, 27, 27, 0.4)",
                 backdropFilter: "blur(12px)",
                 border: "1px solid rgba(242, 13, 13, 0.1)"
             }}>
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] opacity-50"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-50"
                     style={{ background: "radial-gradient(circle at 50% 50%, rgba(242, 13, 13, 0.15) 0%, rgba(10, 5, 5, 0) 70%)" }}></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 px-6 pt-6 pb-4 flex-none border-b border-white/5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Step 5 of 5</span>
                        <span className="text-[10px] font-bold text-[#f20d0d]">100% Completed</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#f20d0d] rounded-full transition-all duration-500 ease-out" style={{ width: "100%" }}></div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                <div className="flex flex-col gap-6">
                    {/* Page Heading */}
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight mb-2">Final Step: Your Details</h1>
                        <p className="text-[#ba9c9c] text-xs leading-relaxed">
                            Where should we send your custom estimate?
                        </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-black/20 border border-white/10 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <ClipboardList className="text-[#f20d0d] w-5 h-5" />
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
                                    className="w-full rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#f20d0d] focus:border-[#f20d0d] h-11 pl-11 pr-4 placeholder:text-white/20 text-sm transition-all" 
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
                                    className="w-full rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#f20d0d] focus:border-[#f20d0d] h-11 pl-11 pr-4 placeholder:text-white/20 text-sm transition-all" 
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
                                className="w-full rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#f20d0d] focus:border-[#f20d0d] min-h-[100px] p-3 text-sm placeholder:text-white/20 resize-none transition-all custom-scrollbar" 
                                placeholder="Tell us a bit more about your project goals or specific style references..."
                            ></textarea>
                        </label>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="relative z-10 px-6 py-4 border-t border-white/5 bg-black/20 flex-none rounded-b-xl">
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => setStep(4)} className="flex items-center justify-center h-10 px-4 rounded-lg text-[#ba9c9c] hover:text-white font-medium transition-colors cursor-pointer border border-white/10 hover:bg-white/5">
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
    );
}
