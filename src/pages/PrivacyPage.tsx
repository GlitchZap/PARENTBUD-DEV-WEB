import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-[#0a0a12] min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-outfit tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Last Updated: April 28, 2026</p>
        </motion.div>

        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 prose-custom">

          <p>ParentBud ("we", "our", "us") respects your privacy and is committed to complying with Apple App Store Review Guidelines, including App Tracking Transparency (ATT), and applicable data protection laws. This Privacy Policy explains what data we collect, how we use it, and your rights.</p>

          <h2>1. Data We Collect</h2>
          <p>We follow strict data minimization.</p>

          <h3>a. Information You Provide</h3>
          <ul>
            <li>Optional name</li>
            <li>Child age range</li>
            <li>Preferences from onboarding</li>
            <li>Feedback, messages, or support requests</li>
          </ul>

          <h3>b. Automatically Collected Data</h3>
          <ul>
            <li>Device type, OS version</li>
            <li>App usage (features used, session duration)</li>
            <li>Diagnostics and crash logs</li>
          </ul>

          <h3>c. Data We Do NOT Collect</h3>
          <ul>
            <li>Precise location (GPS)</li>
            <li>Financial/payment information</li>
            <li>Government IDs</li>
            <li>Contacts, photos, or files (unless explicitly requested with permission)</li>
          </ul>

          <h2>2. How We Use Data</h2>
          <p>We use your data only to:</p>
          <ul>
            <li>Deliver and personalize app content</li>
            <li>Improve performance and user experience</li>
            <li>Provide customer support</li>
            <li>Ensure security and prevent misuse</li>
          </ul>
          <p>We do <strong>not</strong>:</p>
          <ul>
            <li>Sell your data</li>
            <li>Use it for behavioral advertising</li>
            <li>Use it for cross-app tracking</li>
          </ul>

          <h2>3. Tracking &amp; App Store Compliance</h2>
          <p>ParentBud:</p>
          <ul>
            <li>Does <strong>not track users across apps or websites</strong> owned by other companies</li>
            <li>Does <strong>not use advertising SDKs</strong> that perform tracking</li>
          </ul>
          <p>If tracking is introduced in future updates:</p>
          <ul>
            <li>We will request permission through Apple's App Tracking Transparency (ATT) framework</li>
            <li>We will update this Privacy Policy accordingly</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>We may use trusted third-party providers for:</p>
          <ul>
            <li>Analytics (app performance, usage insights)</li>
            <li>Cloud hosting and storage</li>
          </ul>
          <p>These providers:</p>
          <ul>
            <li>Process data only on our behalf</li>
            <li>Are contractually restricted from using your data independently</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do <strong>not sell or rent</strong> your data.</p>
          <p>We may share data only when necessary:</p>
          <ul>
            <li>With service providers (strictly for functionality)</li>
            <li>To comply with legal obligations</li>
            <li>To protect users and prevent fraud or abuse</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>We retain data only as long as necessary to:</p>
          <ul>
            <li>Provide services</li>
            <li>Comply with legal obligations</li>
            <li>Improve app functionality</li>
          </ul>
          <p>We periodically delete or anonymize unused data.</p>

          <h2>7. Your Rights</h2>
          <p>You can:</p>
          <ul>
            <li>Access your data</li>
            <li>Request corrections</li>
            <li>Request deletion</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <h3>Data Deletion Request</h3>
          <p>You can request deletion anytime by contacting: <a href="mailto:parentbudhelp@gmail.com">parentbudhelp@gmail.com</a></p>
          <p>Requests are processed within a reasonable timeframe.</p>

          <h2>8. Children's Privacy</h2>
          <p>ParentBud is designed for parents and caregivers.</p>
          <p>We do <strong>not knowingly collect personal data directly from children under 13</strong>.</p>
          <p>Child-related inputs:</p>
          <ul>
            <li>Are provided by parents</li>
            <li>Are limited (e.g., age range)</li>
            <li>Are used only for personalization</li>
          </ul>

          <h2>9. Security</h2>
          <p>We use industry-standard safeguards:</p>
          <ul>
            <li>HTTPS encryption</li>
            <li>Secure data storage</li>
            <li>Access control mechanisms</li>
          </ul>
          <p>While no system is completely secure, we continuously improve our protections.</p>

          <h2>10. International Users</h2>
          <p>By using ParentBud, you consent to processing of your data in accordance with this policy, regardless of your location.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy to reflect:</p>
          <ul>
            <li>App updates</li>
            <li>Legal requirements</li>
            <li>App Store compliance changes</li>
          </ul>
          <p>Updates will be posted here with a revised "Last Updated" date.</p>

          <h2>12. Contact Us</h2>
          <p>For any privacy-related concerns:</p>
          <p><strong>Email:</strong> <a href="mailto:parentbudhelp@gmail.com">parentbudhelp@gmail.com</a><br/>
          <strong>App Name:</strong> ParentBud</p>

          <h2>13. In-App Privacy Summary</h2>
          <p>Inside the app, users are informed that:</p>
          <ul>
            <li>No personal data is sold</li>
            <li>No cross-app tracking is performed</li>
            <li>Only minimal data is collected for functionality</li>
            <li>Data deletion can be requested anytime</li>
          </ul>

          <h2>14. Data Disclosure Alignment (App Store Form)</h2>
          <p>For App Store "App Privacy" section, ParentBud declares:</p>
          <ul>
            <li>Data Collected: Limited (Usage Data, Diagnostics)</li>
            <li>Data Linked to User: No</li>
            <li>Tracking: No</li>
          </ul>
          <p>This policy reflects the same disclosures.</p>

          <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <p className="text-slate-300 text-sm italic">ParentBud is built to support parents — not to exploit data. Every data decision is made to keep your experience safe, minimal, and respectful.</p>
          </div>
        </motion.article>
      </div>
    </main>
  );
};

export default PrivacyPage;
