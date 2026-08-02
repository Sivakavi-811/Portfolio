'use client';

import { FadeIn } from '@/components/FadeIn';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'SQL', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Next.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    category: 'AI & ML',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'FAISS'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'MongoDB', 'MySQL', 'Power BI'],
  },
];

export function SkillsSection() {
  return (
    <section className="bg-white text-[#0C0C0C] px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 max-w-[1800px] mx-auto">
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-16 md:mb-20">
        <h2 className="font-black uppercase text-[clamp(2.5rem,10vw,120px)] text-center leading-none mb-4">
          Skills
        </h2>
        <p className="text-center text-[#0C0C0C]/60 uppercase tracking-widest text-xs sm:text-sm">
          Technologies I work with
        </p>
      </FadeIn>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((skillGroup, idx) => (
          <FadeIn
            key={skillGroup.category}
            delay={idx * 0.1}
            y={20}
            className="bg-[#0C0C0C]/5 rounded-[20px] sm:rounded-[25px] p-5 sm:p-6 border border-[#0C0C0C]/10 h-full flex flex-col"
          >
            <h3 className="font-medium uppercase text-sm sm:text-base text-[#0C0C0C] mb-4 tracking-wider">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-[#0C0C0C]/10 rounded-full text-xs sm:text-sm text-[#0C0C0C]/80 uppercase tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
