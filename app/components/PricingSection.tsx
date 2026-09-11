'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  featured?: boolean;
  badge?: string;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    name: 'Freelancer',
    description: 'The essentials to provide your best work for clients.',
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    name: 'Startup',
    description: 'A plan that scales with your rapidly growing business.',
    monthlyPrice: 29,
    annualPrice: 23,
    badge: 'Most popular',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    monthlyPrice: 59,
    annualPrice: 47,
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
  },
];

function PricingCard({
  plan,
  isAnnual,
}: {
  plan: PricingPlan;
  isAnnual: boolean;
}) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 backdrop-blur-xl transition-all duration-300
        ${plan.featured
          ? 'border-2 border-red-600 bg-white/[0.04] shadow-[0_0_60px_-12px_rgba(220,38,38,0.15)]'
          : 'border border-white/[0.06] bg-[#0B0B0B] hover:border-white/10'
        }`}
    >
      <div>
        {/* Plan Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`text-xl font-bold tracking-tight ${plan.featured ? 'text-red-500' : 'text-white'
                }`}
            >
              {plan.name}
            </h3>
            {plan.badge && (
              <span className="inline-flex items-center rounded-full bg-[#290A0A] px-3 py-1 text-xs font-semibold text-red-400">
                {plan.badge}
              </span>
            )}
          </div>
          <p className="mt-3 min-h-[40px] text-sm leading-relaxed text-white/60">
            {plan.description}
          </p>
        </div>

        {/* Plan Price */}
        <div className="mb-8 mt-6 flex items-baseline gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={price}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              ${price}
            </motion.span>
          </AnimatePresence>
          <span className="text-sm font-medium text-white/40">/month</span>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className={`w-full rounded-xl py-3 px-4 text-sm font-semibold transition-all duration-200 text-center
            ${plan.featured
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-700/30'
              : 'bg-white/[0.06] text-white hover:bg-white/10 border border-white/[0.06]'
            }`}
        >
          Buy plan
        </button>

        {/* Features List */}
        <ul className="mt-8 space-y-4 text-sm text-white/70" role="list">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check
                className={`h-4 w-4 flex-none stroke-[2.5] ${plan.featured ? 'text-red-500' : 'text-red-600/80'
                  }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative w-full bg-black px-6 py-24 text-white"
    >
      {/* Background gradient — matches the site pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#290A0A]/20" />

      <div className="relative mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#290A0A] px-5 py-1.5 text-sm text-white">
            ⦿ Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-10 text-center text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-red-600">Simple </span>
          <span className="text-white/90">pricing for everyone</span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base text-white/60 sm:text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Billing Toggle */}
        <div className="mt-12 flex items-center justify-center">
          <div
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl"
            role="group"
            aria-label="Billing frequency selection"
          >
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`relative rounded-full px-5 py-1.5 text-sm font-semibold transition-all duration-200 focus:outline-none
                ${!isAnnual
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
                }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`relative rounded-full px-5 py-1.5 text-sm font-semibold transition-all duration-200 focus:outline-none
                ${isAnnual
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
                }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
}
