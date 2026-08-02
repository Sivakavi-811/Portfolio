'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CertificatesSection } from '@/components/sections/CertificatesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <SkillsSection />
      <StatsSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
