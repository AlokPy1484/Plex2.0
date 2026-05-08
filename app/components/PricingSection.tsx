'use client';

import { CheckCircle2, MinusCircle, Zap, Shield } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-black px-6 pt-32 pb-24 w-full flex flex-col items-center overflow-hidden z-20">

      {/* Heading */}
      <div className="relative mx-auto max-w-5xl text-center mb-16">
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl text-white">
          <span className="text-white/90">Simple, transparent</span>{' '}
          <span className="text-[#f20d0d]">pricing</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          Choose the plan that fits your vision. Scale as you grow.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f20d0d]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#290A0A]/40 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Starter Plan Card */}
          <div className="relative w-full bg-[#0a0a0a] p-8 md:p-10 rounded-[1.5rem] shadow-[0_0_50px_rgba(242,13,13,0.15)] border border-[#290A0A] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-[40px] pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1 font-sans tracking-wider">STARTER PLAN</h2>
                <p className="text-sm text-white/50">For small projects.</p>
              </div>
            </div>
            <div className="mb-8 flex items-baseline gap-1 relative">
              <span className="text-5xl font-extrabold tracking-tighter text-white">$19</span>
              <span className="text-white/50 font-medium">/month</span>
            </div>
            <div className="space-y-5 mb-10 relative">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Basic identity nodes</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Standard dashboard</p>
              </div>
              <div className="flex items-start gap-3 opacity-50">
                <MinusCircle className="text-white/30 w-5 h-5 shrink-0" />
                <p className="text-sm text-white/40">Custom API logic layer</p>
              </div>
              <div className="flex items-start gap-3 opacity-50">
                <MinusCircle className="text-white/30 w-5 h-5 shrink-0" />
                <p className="text-sm text-white/40">SOC2 & HIPAA Compliance</p>
              </div>
              <div className="flex items-start gap-3 opacity-50">
                <MinusCircle className="text-white/30 w-5 h-5 shrink-0" />
                <p className="text-sm text-white/40">Priority engineering support</p>
              </div>
            </div>
            <button className="w-full relative py-4 rounded-xl bg-[#f20d0d] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(242,13,13,0.5)] transition-all active:scale-95 overflow-hidden group border border-[#f20d0d]">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
            </button>
            <p className="text-center mt-6 text-xs text-white/40 tracking-wide font-medium">
              14-day trial included • No credit card required
            </p>
          </div>

          {/* The Architect Plan Card (Center) */}
          <div className="relative w-full bg-[#0a0a0a] p-8 md:p-10 rounded-[1.5rem] shadow-[0_0_50px_rgba(242,13,13,0.15)] border border-[#290A0A] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-[40px] pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1 font-sans tracking-wider">THE ARCHITECT</h2>
                <p className="text-sm text-white/50">The engine for production.</p>
              </div>
              <div className="bg-[#f20d0d]/20 text-[#f20d0d] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest border border-[#f20d0d]/30 self-start">Popular</div>
            </div>
            <div className="mb-8 flex items-baseline gap-1 relative">
              <span className="text-5xl font-extrabold tracking-tighter text-white">$49</span>
              <span className="text-white/50 font-medium">/month</span>
            </div>
            <div className="space-y-5 mb-10 relative">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Unlimited identity nodes</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Real-time observability dashboard</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Custom API logic layer</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">SOC2 & HIPAA Compliance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Priority engineering support</p>
              </div>
            </div>
            <button className="w-full relative py-4 rounded-xl bg-[#f20d0d] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(242,13,13,0.5)] transition-all active:scale-95 overflow-hidden group border border-[#f20d0d]">
              <span className="relative z-10">Start Building</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
            </button>
            <p className="text-center mt-6 text-xs text-white/40 tracking-wide font-medium">
              14-day trial included • No credit card required
            </p>
          </div>

          {/* Enterprise Plan Card */}
          <div className="relative w-full bg-[#0a0a0a] p-8 md:p-10 rounded-[1.5rem] shadow-[0_0_50px_rgba(242,13,13,0.15)] border border-[#290A0A] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f20d0d]/10 rounded-full blur-[40px] pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1 font-sans tracking-wider">ENTERPRISE</h2>
                <p className="text-sm text-white/50">Custom multi-region scale.</p>
              </div>
            </div>
            <div className="mb-8 flex items-baseline gap-1 relative">
              <span className="text-5xl font-extrabold tracking-tighter text-white">Custom</span>
            </div>
            <div className="space-y-5 mb-10 relative">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Dedicated tenancy</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Advanced RBAC</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">SLA 99.99% guarantees</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">White-glove migration</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#f20d0d] w-5 h-5 shrink-0" />
                <p className="text-sm text-white/90">Dedicated TAM</p>
              </div>
            </div>
            <button className="w-full relative py-4 rounded-xl bg-[#f20d0d] text-white font-bold text-lg hover:shadow-[0_0_25px_rgba(242,13,13,0.5)] transition-all active:scale-95 overflow-hidden group border border-[#f20d0d]">
              <span className="relative z-10">Contact Sales</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
            </button>
            <p className="text-center mt-6 text-xs text-white/40 tracking-wide font-medium">
              Custom SLA • Dedicated support team
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof / Contextual Section (Not in use)  */}
      {/* <div className="mt-32 max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[1.5rem] bg-neutral-900/30 border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f20d0d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Precision Engineering</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-md">
                  Our infrastructure is architected to handle sub-100ms latency globally, ensuring your users never wait for identity resolution.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center">
                  <Zap className="text-[#f20d0d] w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center">
                  <Shield className="text-[#f20d0d] w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-10 rounded-[1.5rem] bg-neutral-900/30 border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#f20d0d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Unmatched Observability</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-md">
                  Every auth event, token exchange, and API call is logged and visualized in real-time, giving you total structural clarity.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex -space-x-2">
                  <img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJm9yGKRHkNOo3MLODC3-xa9-yYWcrWzzsElfklf6KxGvOu1wxhdQncupK0aDZHVk5wvjgo8Q2BOU3L8mrvfypBowimBW3AxIoqpRrBGQIZZQ9vkYVB8X1RDosdW31bhlbw02J1evUJxcfUBExY7eD5OceidB7tezFDz-f2PjHpxPJ7i6nUIbdYe14lHI9NRhBLrotVEpqFvGpeBuQ_xMyuAVsdZrbnKG891RDgvYFk7DeUt6LPw0YrUfLjNo9PwiFl2R6DTLHlM" />
                  <img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBogNjDBq_jCMqyGWyFYoLkLkvlpDC5xkKTuLGTJrf4o4WZtOeL8IYaLjAAMaV-87gVPBXHD7BHacUIp5W_CuMkfquBzRV3i8au8D--roL7PaBvg6cYakLIUsQryTU6agk-p2WTqwMvMxDPsV1rZRpT60xHowwSjIvFXgpXMHsb_196l_5_VflSQuezZz3qwYgjTCmzM5sn5vc1RZ1_oYU16lUzk93H6KzN-GbxMZhMpPzl8FyyFHryqYziqH4ZSp661v7ZcVMzxS0" />
                  <img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcHQ2LGoDhuidcxYD28PkpoDVePcJoL2zylI3106HjFsqTiVRQcAvgdIhEUTHItYXYbVin8HyVjZKxj8s5GipcAjJkNuxdd3onoC0cGObGsvpFEra-5Vy-O4oJbJG2amhW0f0-NIZQdKssmi0p5Fqdnh6-bDIrQDzwCw867gdElB4utKUguSpRTgu0dco1gTPAI6JJLxjCApXufKaggATHRO0wLD2S36HqNGoUqkR_S8dzvJBsdDXTcaWj7IndD0lJAzqbcQFQlNY" />
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-white/70">+500</div>
                </div>
                <p className="mt-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Trusted by the world's best architects</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
