'use client';

import { FadeIn } from '@/components/FadeIn';

const stats = [
  {
    number: '7+',
    label: 'Projects Completed',
  },
  {
    number: '10+',
    label: 'Certifications',
  },
  {
    number: '5+',
    label: 'Technologies',
  },
  {
    number: '3+',
    label: 'Years of Coding',
  },
];

export function StatsSection() {
  return (
    <section className="bg-white text-[#0C0C0C] px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 max-w-[1800px] mx-auto border-t border-[#0C0C0C]/10">
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-16 md:mb-20">
        <h2 className="font-black uppercase text-[clamp(2.5rem,10vw,120px)] text-center leading-none mb-4">
          Stats
        </h2>
        <p className="text-center text-[#0C0C0C]/60 uppercase tracking-widest text-xs sm:text-sm">
          My journey in numbers
        </p>
      </FadeIn>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, idx) => (
          <FadeIn
            key={stat.label}
            delay={idx * 0.1}
            y={20}
            className="text-center"
          >
            <p className="font-black text-[clamp(2.5rem,7vw,80px)] leading-none text-[#0C0C0C] mb-2">
              {stat.number}
            </p>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#0C0C0C]/60">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
