import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  q: string;
  a: string;
}

const faqCategories: { title: string; icon: string; items: FaqItem[] }[] = [
  {
    title: 'Getting Started',
    icon: '🚀',
    items: [
      { q: 'What is ParentBud?', a: 'ParentBud is a parenting support app that provides personalized guidance, emotional support through Care Cards, and a community space called ParentPods — all adapted to your child\'s age and your real-life moments.' },
      { q: 'Is ParentBud free to use?', a: 'ParentBud is free to download from the Apple App Store. Some features may include optional premium content in the future.' },
      { q: 'How do I get started?', a: 'Download ParentBud from the App Store, create an account, and complete a short onboarding where you share your child\'s age range and preferences. The app will personalize your experience from there.' },
      { q: 'What ages does ParentBud support?', a: 'ParentBud adapts its content based on child age ranges — from newborns through early childhood. Content is contextually matched to your child\'s developmental stage.' },
    ]
  },
  {
    title: 'Account & Data',
    icon: '🔐',
    items: [
      { q: 'How do I delete my account?', a: 'You can request account and data deletion at any time by emailing parentbudhelp@gmail.com. We process deletion requests within a reasonable timeframe.' },
      { q: 'What data does ParentBud collect?', a: 'We collect minimal data: optional name, child age range, onboarding preferences, and basic usage analytics. We do not collect GPS location, financial info, or contacts. See our Privacy Policy for full details.' },
      { q: 'Does ParentBud sell my data?', a: 'Absolutely not. We do not sell, rent, or share your data for advertising purposes. We do not perform cross-app tracking.' },
      { q: 'Can I update my child\'s age or preferences?', a: 'Yes! You can update your child\'s profile and preferences at any time from the app settings. Your content will adapt accordingly.' },
    ]
  },
  {
    title: 'Features',
    icon: '✨',
    items: [
      { q: 'What is "Find Your Flow"?', a: 'Find Your Flow is our personalization engine. It collects basic inputs about your child and your preferences, then adapts content to match your natural daily rhythm — no rigid schedules or fixed routines.' },
      { q: 'What are Care Cards?', a: 'Care Cards are short, situational emotional support cards. They help you navigate tough parenting moments — from managing stress and frustration to deepening bonding and connection with your child.' },
      { q: 'What are ParentPods?', a: 'ParentPods are community spaces where parents can share experiences, ask questions, and find support from other parents going through similar situations. They\'re organized around age groups and real-life challenges.' },
      { q: 'Is the content created by experts?', a: 'ParentBud content is designed for informational and emotional support purposes. It is not medical advice. For professional health or developmental concerns, always consult a qualified professional.' },
    ]
  },
  {
    title: 'Technical Support',
    icon: '🛠',
    items: [
      { q: 'The app is crashing. What should I do?', a: 'Try force-quitting the app and reopening it. Make sure you\'re running the latest version from the App Store. If the issue persists, contact us at parentbudhelp@gmail.com with your device model and iOS version.' },
      { q: 'I\'m not receiving email confirmations.', a: 'Check your spam/junk folder first. If you still don\'t see it, try re-requesting the email from the app. Reach out to parentbudhelp@gmail.com if problems continue.' },
      { q: 'Which devices are supported?', a: 'ParentBud is available for iPhone running iOS 16 or later. iPad support may be available in future updates.' },
      { q: 'How do I report a bug?', a: 'Email us at parentbudhelp@gmail.com with a description of the issue, your device model, iOS version, and any relevant screenshots. We appreciate your help in improving ParentBud.' },
    ]
  },
];

const communityGuidelines = [
  { icon: '💬', title: 'Be Respectful', desc: 'Treat every parent with kindness. We all have different approaches — judgment-free zone.' },
  { icon: '🚫', title: 'No Harmful Content', desc: 'Do not post abusive, misleading, or harmful information. Medical advice should come from professionals.' },
  { icon: '🔒', title: 'Protect Privacy', desc: 'Never share personal or sensitive data about yourself, your children, or other families in community spaces.' },
  { icon: '🛡️', title: 'Report Concerns', desc: 'If you see content that violates guidelines, report it. We actively moderate to keep ParentPods safe.' },
  { icon: '❤️', title: 'Support, Don\'t Prescribe', desc: 'Share your experiences, but avoid telling others what they must do. Every family is unique.' },
  { icon: '⚖️', title: 'Content Moderation', desc: 'ParentBud reserves the right to remove content and suspend accounts that violate community standards.' },
];

function AccordionItem({ item, isOpen, toggle }: { item: FaqItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium text-slate-200 group-hover:text-white transition-colors pr-4">{item.q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-400 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SupportPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="bg-[#0a0a12] min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Help Center</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit tracking-tight">How can we help?</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">Find answers to common questions, learn about community safety, or reach out to our team.</p>
        </motion.div>

        {/* Contact Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl flex-shrink-0">
            ✉️
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base font-semibold text-white">Can't find what you're looking for?</h3>
            <p className="text-sm text-slate-400 mt-1">Reach out to our support team — we're here to help.</p>
          </div>
          <a href="mailto:parentbudhelp@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/[0.08] px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors flex-shrink-0">
            parentbudhelp@gmail.com
          </a>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-12 mb-20">
          {faqCategories.map((cat, ci) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + ci * 0.05, duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <h2 className="text-xl font-semibold text-white font-outfit">{cat.title}</h2>
              </div>
              <div className="glass-card rounded-2xl px-6 divide-y divide-white/[0.06]">
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  return <AccordionItem key={key} item={item} isOpen={!!openItems[key]} toggle={() => toggleItem(key)} />;
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Safety */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-400 mb-3">Community Safety</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-outfit tracking-tight">Keeping ParentPods safe</h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">Our community guidelines ensure ParentPods remains a supportive, judgment-free space for every parent.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communityGuidelines.map((g, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300">
                <span className="text-2xl mb-3 block">{g.icon}</span>
                <h3 className="text-sm font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-white font-outfit">Still need help?</h3>
            <p className="mt-2 text-sm text-slate-400">We'd love to hear from you. Drop us an email and we'll get back to you as soon as possible.</p>
            <a href="mailto:parentbudhelp@gmail.com"
              className="inline-flex items-center gap-2 mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#0a0a12] hover:scale-[1.03] active:scale-[0.98] transition-all">
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SupportPage;
