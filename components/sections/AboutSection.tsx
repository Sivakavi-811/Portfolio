'use client';

import { FadeIn } from '@/components/FadeIn';
import { AnimatedText } from '@/components/AnimatedText';
import { ContactButton } from '@/components/Buttons';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28 overflow-hidden max-w-[1800px] mx-auto">
      {/* Decorative Images - Subtle on mobile/tablet, full display on desktop */}
      {/* Top Left - Moon Icon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-20 sm:opacity-40 lg:opacity-100">
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon"
          width={210}
          height={210}
          className="w-[80px] sm:w-[140px] md:w-[180px] lg:w-[210px] h-auto"
        />
      </FadeIn>

      {/* Bottom Left - Design Element */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[6%] left-[2%] sm:left-[4%] md:left-[8%] z-0 pointer-events-none opacity-20 sm:opacity-40 lg:opacity-100">
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Design element"
          width={180}
          height={180}
          className="w-[70px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto"
        />
      </FadeIn>

      {/* Top Right - Lego Icon */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-20 sm:opacity-40 lg:opacity-100">
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego"
          width={210}
          height={210}
          className="w-[80px] sm:w-[140px] md:w-[180px] lg:w-[210px] h-auto"
        />
      </FadeIn>

      {/* Bottom Right - Design Elements */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[6%] right-[2%] sm:right-[4%] md:right-[8%] z-0 pointer-events-none opacity-20 sm:opacity-40 lg:opacity-100">
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Design elements"
          width={220}
          height={220}
          className="w-[90px] sm:w-[140px] md:w-[180px] lg:w-[220px] h-auto"
        />
      </FadeIn>

      {/* Content */}
      <div className="max-w-3xl flex flex-col items-center gap-8 sm:gap-12 md:gap-16 relative z-10 px-2">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.75rem,10vw,150px)] text-center">
            About me
          </h2>
        </FadeIn>

        {/* Animated Paragraph */}
        <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-20">
          <AnimatedText
            text="I'm a final-year Computer Science Engineering student with Honours in Data Science, passionate about Software Development, AI, and Full-Stack Development. I enjoy building innovative, user-focused applications while continuously learning and exploring new technologies."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(0.95rem,2vw,1.35rem)] max-w-[580px] mx-auto"
          />

          {/* Contact Button */}
          <FadeIn delay={0.2} y={20} className="flex justify-center">
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
