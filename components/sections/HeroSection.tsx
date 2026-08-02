'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { ContactButton } from '@/components/Buttons';
import { Magnet } from '@/components/Magnet';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = ['About', 'Certificates', 'Projects', 'Contact'];

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="min-h-[100dvh] h-screen flex flex-col justify-between bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip relative max-w-[1800px] mx-auto">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 md:pt-8">
          <div className="text-base sm:text-lg md:text-xl lg:text-[1.4rem] font-medium uppercase tracking-wider">
            SIVAKAVI
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm md:text-base lg:text-[1.3rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#D7E2EA] hover:opacity-80 transition-opacity"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </FadeIn>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0C0C0C]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="absolute top-6 right-6 p-2 text-[#D7E2EA]"
          >
            <X size={30} />
          </button>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-widest text-[#D7E2EA] hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full px-4">
        {/* Hero Heading */}
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden text-center z-5 absolute top-[8%] sm:top-[10%]">
          <h1
            className="
              hero-heading
              font-black uppercase tracking-tight leading-none whitespace-nowrap
              text-[13vw] sm:text-[15vw] md:text-[16vw] lg:text-[16.5vw] xl:text-[15vw]
              mt-4 sm:mt-4 md:-mt-5 px-2
            "
          >
            Hi, i&apos;m SIVA
          </h1>
        </FadeIn>

        {/* Portrait with Magnet Effect - Centered */}
        <Magnet padding={150} strength={3}>
          <div className="relative w-full h-full flex items-center justify-center z-10 mt-14 sm:mt-20 md:mt-24">
            <Image
              src="/images/siva-main.png"
              alt="siva Portrait"
              width={520}
              height={520}
              className="w-[230px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[520px] h-auto rounded-2xl object-cover shadow-2xl"
              priority
            />
          </div>
        </Magnet>

        {/* Bottom Section */}
        <div className="absolute bottom-0 w-full left-0 right-0">
          <FadeIn delay={0.35} y={20} className="w-full" as="div">
            <div className="flex justify-between items-end px-5 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10">
              <p
                className="
                  font-light uppercase tracking-wide leading-snug
                  text-[clamp(0.7rem,1.3vw,1.35rem)]
                  max-w-[140px] sm:max-w-[220px] md:max-w-[280px]
                "
              >
                A passionate Software Developer dedicated to building innovative, scalable, and impactful digital solutions.
              </p>
              <FadeIn delay={0.5} y={20} as="div">
                <ContactButton />
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

