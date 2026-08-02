'use client';

export function ContactButton() {
  return (
    <button
      className="
        rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        font-medium uppercase tracking-widest
        text-white
        bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#BE4C00]
        relative
        transition-transform duration-200 hover:scale-105
        focus:outline-none
      "
      style={{
        boxShadow: `
          0px 4px 4px rgba(181, 1, 167, 0.25),
          inset 4px 4px 12px #7721B1,
          0 0 0 2px white
        `,
      }}
    >
      Contact Me
    </button>
  );
}

export function LiveProjectButton({ link }: { link?: string }) {
  return (
    <a
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      className="
        rounded-full px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        font-medium uppercase tracking-widest
        text-[#D7E2EA]
        border-2 border-[#D7E2EA]
        transition-colors duration-200 hover:bg-[#D7E2EA]/10
        focus:outline-none inline-block text-center
      "
    >
      Project Link
    </a>
  );
}
