import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const APP_STORE_URL = 'https://apps.apple.com/us/app/parentbud/id6761531437';
const INSTAGRAM_URL = 'https://www.instagram.com/parentbud.official/';

function FooterLink({ href, children, type = 'route' }: { href: string; children: React.ReactNode; type?: 'route' | 'external' | 'hash' }) {
  if (type === 'route') {
    return <Link to={href} className="block text-sm text-slate-400 hover:text-white transition-colors duration-200">{children}</Link>;
  }
  if (type === 'hash') {
    const handleClick = (e: React.MouseEvent) => {
      const hash = href.split('#')[1];
      if (hash && window.location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return <Link to={href} onClick={handleClick} className="block text-sm text-slate-400 hover:text-white transition-colors duration-200">{children}</Link>;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-400 hover:text-white transition-colors duration-200">{children}</a>;
}

const Footer = () => {
  const bigTextRef = useRef(null);
  const isInView = useInView(bigTextRef, { once: false, margin: '-50px' });

  return (
    <footer className="relative bg-black border-t border-white/[0.04] overflow-hidden">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — CTA + support */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-outfit font-semibold text-white leading-tight">
              Download ParentBud now
            </h2>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-slate-500">Get Support :</p>
              <a href="mailto:parentbudhelp@gmail.com" className="text-sm text-slate-300 hover:text-white transition-colors">
                parentbudhelp@gmail.com
              </a>
            </div>
          </div>

          {/* Right — Nav + Social links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div className="flex flex-col space-y-3">
              <FooterLink href="/" type="route">Home</FooterLink>
              <FooterLink href="/#features" type="hash">Features</FooterLink>
              <FooterLink href="/#inside-app" type="hash">Inside the App</FooterLink>
              <FooterLink href="/#team" type="hash">Our Team</FooterLink>
              <FooterLink href="/support" type="route">Support</FooterLink>
            </div>

            {/* Social + External */}
            <div className="space-y-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                Instagram <span className="text-xs">↗</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                LinkedIn <span className="text-xs">↗</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                Twitter <span className="text-xs">↗</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                Facebook <span className="text-xs">↗</span>
              </a>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mt-2 text-rose-400 hover:text-rose-300">
                App Store <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Download badge */}
          <div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download on App Store
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all"
              aria-label="Instagram">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-[#0077b5] hover:border-transparent transition-all" aria-label="LinkedIn">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-[#1DA1F2] hover:border-transparent transition-all" aria-label="Twitter">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-[#1877F2] hover:border-transparent transition-all" aria-label="Facebook">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-6 md:justify-end">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Giant ParentBud text — animates in from below */}
      <div ref={bigTextRef} className="relative overflow-hidden">
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <h2 className="text-[clamp(4rem,15vw,14rem)] font-outfit font-extrabold text-white leading-[0.85] tracking-tighter select-none pb-4">
            <span style={{ color: '#E77076' }}>Parent</span>
            <span style={{ color: '#416E9A' }}>Bud</span>
            <span style={{ color: '#FAF9F6' }}>.</span>
          </h2>
        </motion.div>
      </div>

      {/* Copyright bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 border-t border-white/[0.04]">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} ParentBud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
