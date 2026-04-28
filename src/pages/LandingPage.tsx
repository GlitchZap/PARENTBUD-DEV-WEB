import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import Grainient from '@/components/Grainient/Grainient';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { FloatingDock } from '@/components/ui/floating-dock';
import { LinkPreview } from '@/components/ui/link-preview';
import TiltedCard from '@/components/TiltedCard';

import heroImg from '@/assets/ParentBud-Hero.png';
import logoImg from '@/assets/LogoFinal.png';
import frame1 from '@/assets/Frame 3379.png';
import frame2 from '@/assets/Frame 3379-1.png';
import frame3 from '@/assets/Frame 3379-2.png';
import frame4 from '@/assets/Frame 3379-3.png';
import frame5 from '@/assets/Frame 3379-4.png';
import frame6 from '@/assets/Frame 3379-5.png';

import lovanshImg from '@/assets/Lovansh.jpeg';
import aayushImg from '@/assets/Aayush.png';
import krishImg from '@/assets/Krish.jpeg';
import shashiImg from '@/assets/ShashiSir.png';
import muruganImg from '@/assets/MuruganSir.jpeg';

const APP_STORE_URL = 'https://apps.apple.com/us/app/parentbud/id6761531437';
const INSTAGRAM_URL = 'https://www.instagram.com/parentbud.official/';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  })
};

function Section({ children, id, className = '' }: { children: React.ReactNode; id?: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        {children}
      </motion.div>
    </section>
  );
}

const InstagramIcon = () => {
  const gradId = useRef(`ig-grad-${Math.random().toString(36).slice(2, 9)}`);
  return (
    <svg className="h-full w-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId.current} x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f9ce34" />
          <stop offset="50%" stopColor="#ee2a7b" />
          <stop offset="100%" stopColor="#6228d7" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradId.current})`} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
};

const AppStoreIcon = () => (
  <svg className="h-full w-full text-[#0a84ff]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
  </svg>
);

const dockItems = [
  {
    title: 'Instagram',
    icon: <InstagramIcon />,
    href: INSTAGRAM_URL,
  },
  {
    title: 'App Store',
    icon: <AppStoreIcon />,
    href: APP_STORE_URL,
  },
];

/** Auto-scrolling carousel that also supports user drag/touch scrolling */
function ScreenshotCarousel({ screenshots }: { screenshots: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animRef = useRef<number>(0);
  const speedRef = useRef(0.8); // px per frame

  // Auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (!isUserInteracting && el) {
        el.scrollLeft += speedRef.current;
        // Loop: when we've scrolled past half (the duplicated content), reset
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animRef.current);
  }, [isUserInteracting]);

  const pauseAutoScroll = useCallback(() => {
    setIsUserInteracting(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsUserInteracting(false), 3000);
  }, []);

  // Mouse drag support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScroll.current = scrollRef.current?.scrollLeft ?? 0;
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = startScroll.current - dx;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    scheduleResume();
  }, [scheduleResume]);

  // Touch support
  const onTouchStart = useCallback(() => pauseAutoScroll(), [pauseAutoScroll]);
  const onTouchEnd = useCallback(() => scheduleResume(), [scheduleResume]);

  // Triple the screenshots array for seamless looping
  const tripled = [...screenshots, ...screenshots, ...screenshots];

  return (
    <div
      ref={scrollRef}
      className="relative w-full h-full overflow-x-auto overflow-y-hidden p-2 rounded-2xl scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex gap-4 h-full w-max">
        {tripled.map((src, i) => (
          <div key={i} className="flex-shrink-0 h-full w-[280px] sm:w-[320px]">
            <img
              src={src}
              alt={`App screenshot ${(i % screenshots.length) + 1}`}
              className="h-full w-full rounded-xl object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const LandingPage = () => {
  const screenshots = [frame1, frame2, frame3, frame4, frame5, frame6];
  const features = [
    {
      icon: '🌊',
      title: 'Find Your Flow',
      desc: 'Personalized guidance that adapts to your rhythm — no rigid schedules, no pressure. Just support that fits your day.',
    },
    {
      icon: '🫂',
      title: 'ParentPods',
      desc: 'Connect with parents who get it. Share, learn, and find comfort in a peer community built around real moments.',
    },
    {
      icon: '💛',
      title: 'Care Cards',
      desc: 'Bite-sized emotional guidance for tough parenting moments — stress, bonding, frustration — delivered when you need it.',
    },
  ];

  const developers = [
    { name: 'Lovansh Tewatia', role: 'Developer', img: lovanshImg },
    { name: 'Aayush Kumar', role: 'Developer', img: aayushImg },
    { name: 'Krish Kumar', role: 'Developer', img: krishImg },
  ];
  const mentors = [
    { name: 'Shashidhar HS', role: 'Mentor', img: shashiImg },
    { name: 'Murugan A', role: 'Mentor', img: muruganImg },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#E8637A"
            color2="#7C5CBF"
            color3="#1a0a2e"
            timeSpeed={0.15}
            warpStrength={0.8}
            warpFrequency={4.0}
            warpSpeed={1.2}
            warpAmplitude={60}
            grainAmount={0.08}
            contrast={1.3}
            saturation={1.1}
            zoom={0.85}
            blendSoftness={0.15}
            rotationAmount={400}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#0a0a12]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now live on the App Store
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-outfit leading-[1.1]">
              Because every{' '}
              <span className="text-[#624073]">little</span>
              <br />
              thing <span className="text-[#624073]">matters</span>.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Personalized, pressure-free parenting support — right when you need it. Built around your child's age and your real-life moments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <LinkPreview url={APP_STORE_URL} className="no-underline">
                <span className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0a0a12] shadow-xl shadow-white/10 transition-all hover:shadow-white/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                  Download on App Store
                </span>
              </LinkPreview>
              <a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-3.5 text-[15px] font-medium text-slate-200 backdrop-blur-sm hover:bg-white/10 transition-all">
                Learn More ↓
              </a>
            </div>
          </motion.div>
          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-12 rounded-full bg-gradient-to-tr from-rose-500/20 to-purple-500/20 blur-3xl" />
              <img src={heroImg} alt="ParentBud family" className="relative w-80 sm:w-96 lg:w-[28rem] drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <Section id="problem" className="py-24 sm:py-32 bg-[#0a0a12]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-rose-400 mb-4">The Problem</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">
              Parenting apps feel like another <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">chore.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Rigid schedules. Information overload. Anxiety-inducing milestones. Most parenting apps add pressure instead of easing it. They focus on perfection — not real life.
            </motion.p>
          </div>
          <div className="flex flex-col gap-8 relative max-w-3xl mx-auto">
            {[
              { icon: '📋', title: 'Rigid Routines', desc: 'Fixed schedules that ignore your family\'s natural rhythm.' },
              { icon: '📊', title: 'Data Overload', desc: 'Endless trackers and stats that create more anxiety.' },
              { icon: '😰', title: 'Performance Pressure', desc: 'Milestone comparisons that fuel guilt and worry.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={3 + i}
                className="glass-card group rounded-2xl p-10 transition-all duration-300 sticky shadow-2xl border border-white/10 bg-[#0a0a12]/90 backdrop-blur-xl"
                style={{ top: `calc(120px + ${i * 30}px)` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:bg-white/[0.08] transition-colors">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white font-outfit">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SOLUTION ─── */}
      <Section id="solution" className="py-24 sm:py-32 bg-[#0a0a12]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div variants={fadeUp} custom={0} className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-rose-500/10 blur-2xl" />
                <img src={logoImg} alt="ParentBud logo" className="relative w-40 sm:w-48 rounded-3xl shadow-2xl" />
              </div>
            </motion.div>
            <div className="flex-1 text-center lg:text-left">
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">The Solution</motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">
                Meet{' '}
                <span>
                  <span style={{ color: '#E77076' }}>Parent</span>
                  <span style={{ color: '#416E9A' }}>Bud</span>
                </span>.
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-slate-400 leading-relaxed">
                A parenting companion that adapts to <em>you</em> — not the other way around. Contextual guidance, emotional support, and a warm community. No rigid plans. No judgment. Just help when you need it.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                {['Personalized', 'Low-pressure', 'Emotionally Intelligent', 'Community-driven'].map(tag => (
                  <span key={tag} className="rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 text-sm text-purple-300">{tag}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FEATURES ─── */}
      <Section id="features" className="py-24 sm:py-32 bg-[#0a0a12]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">Features</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">Three pillars of support.</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Everything you need — personalization, community, and guidance — working together.</motion.p>
          </div>
          <div className="flex flex-col gap-8 relative max-w-3xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={3 + i}
                className="glass-card group rounded-2xl p-10 transition-all duration-300 sticky shadow-2xl border border-white/10 bg-[#0a0a12]/90 backdrop-blur-xl"
                style={{ top: `calc(120px + ${i * 30}px)` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:bg-white/[0.08] transition-colors">
                    <span className="text-3xl">{f.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white font-outfit">{f.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-400">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── INSIDE THE APP — Container Scroll ─── */}
      <section id="inside-app" className="bg-[#0a0a12] overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400 mb-4">Inside the App</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">
                See it in action.
              </h2>
            </div>
          }
        >
          {/* Scrollable screenshots inside the container card — auto-scrolls but user can also drag/scroll */}
          <ScreenshotCarousel screenshots={screenshots} />
        </ContainerScroll>
      </section>

      {/* ─── TEAM ─── */}
      <Section id="team" className="py-24 sm:py-32 bg-[#0a0a12]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">Our Team</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">Built with care.</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">The people behind ParentBud — passionate about making parenting a little easier.</motion.p>
          </div>

          {/* Developers */}
          <motion.h3 variants={fadeUp} custom={3} className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6 text-center mt-8">Developers</motion.h3>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {developers.map((m, i) => (
              <motion.div key={m.name} variants={fadeUp} custom={4 + i} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={m.img}
                  altText={m.name}
                  captionText={m.role}
                  imageHeight="180px"
                  imageWidth="180px"
                  containerHeight="200px"
                  containerWidth="200px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
                <h4 className="text-base font-semibold text-white mt-4">{m.name}</h4>
              </motion.div>
            ))}
          </div>

          {/* Mentors */}
          <motion.h3 variants={fadeUp} custom={7} className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6 text-center">Mentors</motion.h3>
          <div className="flex flex-wrap justify-center gap-6">
            {mentors.map((m, i) => (
              <motion.div key={m.name} variants={fadeUp} custom={8 + i} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={m.img}
                  altText={m.name}
                  captionText={m.role}
                  imageHeight="180px"
                  imageWidth="180px"
                  containerHeight="200px"
                  containerWidth="200px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
                <h4 className="text-base font-semibold text-white mt-4">{m.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#E8637A"
            color2="#7C5CBF"
            color3="#1a0a2e"
            timeSpeed={0.1}
            warpStrength={0.6}
            warpFrequency={3.0}
            contrast={1.2}
            grainAmount={0.06}
            zoom={1.0}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-[#0a0a12]/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">
            Your parenting journey,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-300">supported.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Download ParentBud today and find your flow — because you're already doing an amazing job.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-10 inline-block">
            <LinkPreview url={APP_STORE_URL} className="no-underline">
              <div className="relative group cursor-pointer">
                {/* Animated gradient border — always visible, glows on hover */}
                <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-r from-[#E77076] via-purple-500 to-[#416E9A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-[#E77076] via-purple-500 to-[#416E9A] opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md" />
                <span className="relative inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#0a0a12] shadow-xl transition-transform hover:scale-[1.03] active:scale-[0.98]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                  Download on App Store
                </span>
              </div>
            </LinkPreview>
          </motion.div>
        </div>
      </section>

      {/* ─── FLOATING DOCK ─── */}
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </>
  );
};

export default LandingPage;
