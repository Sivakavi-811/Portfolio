'use client';

import { FadeIn } from '@/components/FadeIn';
import { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';

const certificates = [
  {
    name: ' Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    year: '2026',
    description: 'Microsoft-certified in creating interactive Power BI dashboards and transforming data into actionable insights.',
    image: '/images/certificates/powerbi.png',
  },
  {
    name: 'Introduction to MERN Stack',
    issuer: 'Simplilearn',
    year: '2026',
    description: 'Learned the fundamentals of building full-stack web applications using MongoDB, Express.js, React, and Node.js.',
    image: '/images/certificates/mernstack.png',
  },
  {
    name: 'Introduction To Industry 4.0 And Industrial IOT',
    issuer: 'NPTEL IIT Kharagpur',
    year: '2026',
    description: 'Learned the fundamentals of Industry 4.0, Industrial IoT, smart manufacturing, and connected systems.',
    image: '/images/certificates/iot.png',
  },
  {
    name: 'Certificate Program in Cloud Computing Engineering (Azure/AWS)',
    issuer: 'Wipro Futureskills and nasscom',
    year: '2026',
    description: 'Completed a certificate program in Cloud Computing Engineering, covering Microsoft Azure, AWS, and cloud infrastructure fundamentals.',
    image: '/images/certificates/cloud.png',
  },
  {
    name: 'Practical Cyber Security for Cyber Security Practitioners',
    issuer: 'NPTEL IIT Kanpur',
    year: '2026',
    description: 'Gained practical knowledge of cloud computing concepts and services using Microsoft Azure and Amazon Web Services.',
    image: '/images/certificates/cyber.jpg',
  },
  {
    name: 'Tata Forage GenAI Powered Data Analytics Simulation',
    issuer: 'Tata Forage',
    year: '2025',
    description: 'Completed Tata Forage GenAI Powered Data Analytics Simulation applying AI-driven data analysis and predictive modeling for business insights and strategy',
    image: '/images/certificates/tata.jpg',
  },
  {
    name: 'AI for Beginners',
    issuer: 'HP Foundation',
    year: '2025',
    description: 'Learned the fundamentals of Artificial Intelligence, including core concepts, applications, and real-world use cases.',
    image: '/images/certificates/hp.png',
  },
  {
    name: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM',
    year: '2025',
    description: 'Learned the fundamentals of Artificial Intelligence, including core concepts, applications, and real-world use cases.',
    image: '/images/certificates/ibm.jpg',
  },
  {
    name: 'Introduction to Data Analysis using MicrosoftExcel',
    issuer: 'Coursera',
    year: '2025',
    description: 'Learned data analysis techniques using Microsoft Excel, including data cleaning, visualization, and statistical analysis.',
    image: '/images/certificates/excel.png',
  },
  {
    name: 'English and Tamil Typewriting',
    issuer: 'DOTE',
    year: '2023',
    description: 'Learned English and Tamil typewriting skills for efficient document creation and editing.',
    image: '/images/certificates/typewriting.png',
  },
];

export function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);

  return (
    <section id="certificates" className="bg-white text-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 max-w-[1800px] mx-auto">
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-16 md:mb-20">
        <h2 className="font-black uppercase text-[clamp(2.75rem,11vw,160px)] text-center leading-none">
          Certificates
        </h2>
      </FadeIn>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {certificates.map((cert, idx) => (
          <FadeIn
            key={idx}
            delay={idx * 0.04}
            y={20}
          >
            <div
              id={`certificate-${idx}`}
              className={`bg-[#0C0C0C] text-[#D7E2EA] rounded-[20px] sm:rounded-[25px] p-4 sm:p-5 border-2 border-[#0C0C0C] hover:border-[#D7E2EA]/30 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between group ${
                highlightedCard === idx ? 'border-[#D7E2EA] scale-105 shadow-lg' : ''
              }`}
              onClick={() => setSelectedImage(cert.image)}
              onMouseEnter={() => setHighlightedCard(idx)}
              onMouseLeave={() => setHighlightedCard(null)}
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                {/* Year Badge & View Button Header */}
                <div className="flex justify-between items-center">
                  <span className="text-[11px] sm:text-[13px] font-light uppercase tracking-widest text-[#D7E2EA]/60">
                    {cert.year}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(cert.image);
                    }}
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0C0C0C] bg-[#D7E2EA] group-hover:bg-white px-3 py-1 rounded-full transition-all duration-200 shadow-sm"
                  >
                    View <Eye size={13} />
                  </button>
                </div>

                {/* Certificate Name */}
                <h3 className="font-medium uppercase text-[clamp(0.95rem,1.5vw,1.15rem)] leading-tight">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-[11px] sm:text-[13px] font-light uppercase tracking-wider text-[#D7E2EA]/70">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="font-light leading-relaxed text-[11px] sm:text-[13px] text-[#D7E2EA]/50 line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <button
              className="absolute -top-10 right-0 sm:right-2 text-white text-sm sm:text-base font-medium uppercase tracking-widest hover:opacity-70 transition-opacity bg-black/50 px-3 py-1 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              Close ✕
            </button>
            <Image
              src={selectedImage}
              alt="Certificate"
              width={1200}
              height={800}
              className="w-full max-h-[80vh] h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
