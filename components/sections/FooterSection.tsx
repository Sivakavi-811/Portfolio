'use client';

import { FadeIn } from '@/components/FadeIn';
import { ContactButton } from '@/components/Buttons';

const navLinks = ['About', 'Certificates', 'Projects', 'Contact'];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sivakavi-balakrishnan/' },
  { label: 'Gmail', href: 'mailto:sivakavibalakrishnan@gmail.com' },
  { label: 'LeetCode', href:'https://leetcode.com/u/whiteyy_xx_/'},
  { label: 'Github', href: 'https://github.com/Sivakavi-811' },
];

const certificateLinks = [
  { name: 'Power BI', id: 'certificate-0' },
  { name: 'MERN Stack', id: 'certificate-1' },
  { name: 'Cloud Computing', id: 'certificate-3' },
  { name: 'AI & GenAI', id: 'certificate-5' },
];

function FooterLink({
  href,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="text-sm sm:text-base font-light uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 relative z-10 max-w-[1800px] mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* CTA Card */}
        <FadeIn delay={0} y={30}>
          <div className="border-2 border-[#D7E2EA] rounded-[30px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(1.75rem,6vw,72px)]">
                Let &apos;s Build
                <br />
                Something Amazing !
              </h2>
              <p className="font-light uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm max-w-md leading-relaxed">
                Available for internships, software engineering roles, and exciting collaborations.
              </p>
            </div>
            <div className="flex-shrink-0 self-start md:self-center">
              <ContactButton />
            </div>
          </div>
        </FadeIn>

        {/* Links Grid */}
        <FadeIn delay={0.1} y={20}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-12 sm:mt-16 md:mt-20 py-10 sm:py-14 border-t border-[#D7E2EA]/15">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1 flex flex-col gap-3 sm:gap-4">
              <p className="text-base sm:text-lg md:text-xl font-medium uppercase tracking-wider">
                Sivakavi Balakrishnan
              </p>
              <p className="font-light text-xs sm:text-sm leading-relaxed text-[#D7E2EA]/50 max-w-[240px]">
                Software Developer building intelligent, scalable applications with AI and modern web technologies.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/40">
                Navigation
              </p>
              <nav className="flex flex-col gap-2.5 sm:gap-3">
                {navLinks.map((link) => (
                  <FooterLink key={link} href={`#${link.toLowerCase()}`}>
                    {link}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Certificates */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/40">
                Certificates
              </p>
              <nav className="flex flex-col gap-2.5 sm:gap-3">
                {certificateLinks.map((link) => (
                  <FooterLink 
                    key={link.id} 
                    href={`#certificates`} 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        element.classList.add('border-[#D7E2EA]', 'scale-105', 'shadow-lg');
                        setTimeout(() => {
                          element.classList.remove('border-[#D7E2EA]', 'scale-105', 'shadow-lg');
                        }, 2000);
                      }
                    }}
                    onMouseEnter={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.classList.add('border-[#D7E2EA]', 'scale-105', 'shadow-lg');
                      }
                    }}
                    onMouseLeave={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.classList.remove('border-[#D7E2EA]', 'scale-105', 'shadow-lg');
                      }
                    }}
                  >
                    {link.name}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Social & Contact */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/40">
                Connect
              </p>
              <nav className="flex flex-col gap-2.5 sm:gap-3">
                {socialLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
              <a
                href="mailto:sivakavi0811@gmail.com"
                className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200 mt-1 sm:mt-2 truncate"
              >
                sivakavi0811@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <FadeIn delay={0.15} y={10}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#D7E2EA]/15">
            <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Siva. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/40">
              Software Developer
            </p>
            <button
              onClick={scrollToTop}
              className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200 border-2 border-[#D7E2EA]/30 hover:border-[#D7E2EA]/60 rounded-full px-5 py-2"
            >
              Back to Top
            </button>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
