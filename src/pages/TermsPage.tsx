import { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-[#0a0a12] min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-outfit tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-500">Last Updated: April 28, 2026</p>
        </motion.div>

        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 prose-custom">

          <p>Welcome to <strong>ParentBud</strong>. By accessing or using our app, you agree to these Terms of Service ("Terms"). Please read them carefully.</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using ParentBud, you confirm that:</p>
          <ul>
            <li>You are at least 13 years old</li>
            <li>You are a parent, guardian, or authorized caregiver</li>
            <li>You agree to comply with these Terms</li>
          </ul>
          <p>If you do not agree, please do not use the app.</p>

          <h2>2. Description of Service</h2>
          <p>ParentBud is a parenting support application that provides:</p>
          <ul>
            <li>Personalized guidance ("Find Your Flow")</li>
            <li>Informational content ("Care Cards")</li>
            <li>Community interaction ("ParentPods")</li>
          </ul>
          <p>The app is designed for informational and support purposes only.</p>

          <h2>3. General App Usage Rules</h2>
          <p>You agree NOT to:</p>
          <ul>
            <li>Use the app for unlawful or harmful activities</li>
            <li>Attempt to hack, disrupt, or misuse the platform</li>
            <li>Share false, misleading, or harmful information</li>
            <li>Violate the rights of others</li>
          </ul>
          <p>We reserve the right to suspend or terminate access if these rules are violated.</p>

          <h2>4. No Medical or Professional Advice</h2>
          <p>ParentBud does <strong>not</strong> provide:</p>
          <ul>
            <li>Medical advice</li>
            <li>Psychological diagnosis</li>
            <li>Professional healthcare services</li>
          </ul>
          <p>All content is for informational purposes only.</p>
          <p><strong>You should always consult a qualified professional for medical or developmental concerns.</strong></p>

          <h2>5. "Find Your Flow" Terms</h2>
          <p>"Find Your Flow" provides personalized suggestions based on limited inputs.</p>
          <p>You acknowledge that:</p>
          <ul>
            <li>Suggestions are not guaranteed outcomes</li>
            <li>They are general guidance, not expert recommendations</li>
            <li>Parenting decisions remain your responsibility</li>
          </ul>
          <p>We are not liable for outcomes based on these suggestions.</p>

          <h2>6. "Care Cards" Terms</h2>
          <p>Care Cards are short-form informational content.</p>
          <p>You agree that:</p>
          <ul>
            <li>Content is educational, not professional advice</li>
            <li>It may not apply to every child or situation</li>
            <li>You use it at your own discretion</li>
          </ul>

          <h2>7. "ParentPods" Community Terms</h2>
          <p>ParentPods allows user interaction and content sharing.</p>
          <p>When using ParentPods, you agree to:</p>
          <ul>
            <li>Be respectful and supportive</li>
            <li>Not post abusive, harmful, or misleading content</li>
            <li>Not share personal or sensitive data of others</li>
          </ul>
          <p>We reserve the right to:</p>
          <ul>
            <li>Remove content</li>
            <li>Suspend users</li>
            <li>Moderate discussions</li>
          </ul>
          <p>We are not responsible for user-generated content.</p>

          <h2>8. User Content</h2>
          <p>If you submit content (messages, posts, feedback):</p>
          <ul>
            <li>You retain ownership</li>
            <li>You grant us a limited license to use it for app functionality</li>
          </ul>
          <p>You are responsible for what you share.</p>

          <h2>9. Privacy</h2>
          <p>Your use of ParentBud is also governed by our <a href="/privacy">Privacy Policy</a>.</p>

          <h2>10. Data &amp; Account Deletion</h2>
          <p>You may request deletion of your data at any time by contacting: <a href="mailto:parentbudhelp@gmail.com">parentbudhelp@gmail.com</a></p>
          <p>We process requests within a reasonable timeframe.</p>

          <h2>11. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>ParentBud is provided "as is"</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>We do not guarantee uninterrupted or error-free service</li>
          </ul>

          <h2>12. Termination</h2>
          <p>We may suspend or terminate access if:</p>
          <ul>
            <li>You violate these Terms</li>
            <li>Misuse the platform</li>
          </ul>
          <p>You may stop using the app at any time.</p>

          <h2>13. Changes to Terms</h2>
          <p>We may update these Terms periodically. Continued use of the app means you accept the updated Terms.</p>

          <h2>14. Governing Law</h2>
          <p>These Terms are governed by applicable laws in your jurisdiction.</p>

          <h2>15. Contact Us</h2>
          <p>For any questions:</p>
          <p><strong>Email:</strong> <a href="mailto:parentbudhelp@gmail.com">parentbudhelp@gmail.com</a><br/>
          <strong>App Name:</strong> ParentBud</p>

          <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-slate-300 text-sm italic">ParentBud is built to support parents, not replace judgment. Your decisions, care, and awareness remain the most important part of your child's growth.</p>
          </div>
        </motion.article>
      </div>
    </main>
  );
};

export default TermsPage;
