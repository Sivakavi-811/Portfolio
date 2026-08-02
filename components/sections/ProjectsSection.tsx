'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { LiveProjectButton } from '@/components/Buttons';

const projects = [
  {
    number: '01',
    name: 'AI-Powered PDF Question Answering using RAG',
    category: 'Personal',
    link: 'https://github.com/Sivakavi-811/AI-Powered-PDF-Question-Answering-using-RAG/tree/main',
    images: {
      col1: [
        '/images/projects/pdf-rag-1.jpg',
        '/images/projects/pdf-rag-2.jpg',
      ],
      col2: '/images/projects/pdf-rag-3.jpg',
    },
  },
  {
    number: '02',
    name: 'Automated Radiology Report Generation',
    category: 'Personal',
    link: 'https://github.com/Sivakavi-811/Radiology-Report-Generation-',
    images: {
      col1: [
        '/images/projects/radiology-1.jpg',
        '/images/projects/radiology-2.jpg',
      ],
      col2: '/images/projects/radiology-3.png',
    },
  },
  {
    number: '03',
    name: 'Your Handyman',
    category: 'Personal',
    link: 'https://github.com/Sivakavi-811/Your-HandyMan',
    images: {
      col1: [
        '/images/projects/handyman-1.png',
        '/images/projects/handyman-2.jpg',
      ],
      col2: '/images/projects/handyman-3.jpg',
    },
  },
  {
    number: '04',
    name: 'Hostel Hub',
    category: 'Personal',
    link: 'https://github.com/Sivakavi-811/Hostel-Hub',
    images: {
      col1: [
        '/images/projects/hostel-1.jpg',
        '/images/projects/hostel-2.jpg',
      ],
      col2: '/images/projects/hostel-3.jpg',
    },
  },
  {
    number: '05',
    name: 'Hospital Management System',
    category: 'Personal',
    link: '',
    images: {
      col1: [
        '/images/projects/hospital-1.jpg',
        '/images/projects/hospital-2.jpg',
      ],
      col2: '/images/projects/hospital-3.jpg',
    },
  },
  {
    number: '06',
    name: 'Password Strength Analyzer',
    category: 'Personal',
    link: 'https://github.com/Sivakavi-811/Password-Strength-Analyzer',
    images: {
      col1: [
        '/images/projects/password-1.jpg',
        '/images/projects/password-2.jpg',
      ],
      col2: '/images/projects/password-3.jpg',
    },
  },
  {
    number: '07',
    name: 'Ludo Game',
    category: 'Personal',
    link: 'https://github.com/Sivakavi-811/Ludo',
    images: {
      col1: [
        '/images/projects/ludo-1.jpg',
        '/images/projects/ludo-2.png',
      ],
      col2: '/images/projects/ludo-3.png',
    },
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (projects.length - 1 - index) * 0.025]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        top: `${index * 20}px`,
      }}
      className="sticky top-16 sm:top-24 md:top-28 lg:top-32 h-[85vh] sm:h-[88vh] md:h-[85vh] max-h-[900px] flex items-center justify-center px-3 sm:px-6 md:px-8 z-20"
    >
      <div className="w-full h-full max-w-[1500px] bg-[#0C0C0C] rounded-[30px] sm:rounded-[45px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2 sm:mb-4 md:mb-6">
          <div className="flex-1 min-w-0">
            <p className="font-black text-[clamp(1.75rem,6vw,90px)] leading-none text-[#D7E2EA] mb-1 sm:mb-2">
              {project.number}
            </p>
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <p className="text-[10px] sm:text-xs md:text-sm text-[#D7E2EA]/60 uppercase tracking-widest">
                {project.category}
              </p>
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium uppercase text-[#D7E2EA] truncate">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex-shrink-0">
            <LiveProjectButton link={project.link} />
          </div>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 min-h-0 overflow-hidden">
          {/* Left Column - 2 images on tablet/desktop, 1 image preview on mobile */}
          <div className="hidden sm:flex w-full sm:w-2/5 h-full min-h-0 flex-col gap-3 sm:gap-4">
            <div className="relative flex-[2] min-h-0 overflow-hidden rounded-[20px] sm:rounded-[35px] md:rounded-[45px]">
              <Image
                src={project.images.col1[0]}
                alt={`${project.name} image 1`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
            <div className="relative flex-[3] min-h-0 overflow-hidden rounded-[20px] sm:rounded-[35px] md:rounded-[45px]">
              <Image
                src={project.images.col1[1]}
                alt={`${project.name} image 2`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column - 1 tall/featured image on all screens */}
          <div className="relative w-full sm:w-3/5 h-full min-h-0 overflow-hidden rounded-[24px] sm:rounded-[35px] md:rounded-[45px]">
            <Image
              src={project.images.col2}
              alt={`${project.name} main preview`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-20 relative z-10 max-w-[1800px] mx-auto">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.75rem,10vw,150px)] text-[#D7E2EA]">
          Projects
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="max-w-7xl mx-auto h-[650vh] sm:h-[700vh] relative">
        {projects.map((project, idx) => (
          <ProjectCard key={project.number} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
