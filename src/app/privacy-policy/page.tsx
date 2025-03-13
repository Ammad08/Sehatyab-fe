'use client';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.2)] to-[rgba(29,166,120,0.1)] min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl ">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-12"
        >
          Privacy Policy
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-gray-700"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">1. Information Collection</h3>
            <p>We collect personal data including name, email, phone number, and health information necessary for providing psychiatric services.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">2. Data Security</h3>
            <p>All data is encrypted using AES-256 standards and stored on secure servers compliant with HIPAA and GDPR.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">3. Purpose of Data</h3>
            <p>Your information is used exclusively for consultation scheduling, treatment planning, and platform improvement.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">4. Third-Party Sharing</h3>
            <p>We only share data with authorized healthcare providers and never with marketing entities.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">5. Data Retention</h3>
            <p>We retain your data for 7 years as required by medical record-keeping laws, after which it is securely deleted.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">6. User Rights</h3>
            <p>You have the right to access, correct, or request deletion of your personal data at any time.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">7. Cookies</h3>
            <p>We use cookies to enhance user experience and track site analytics, with an opt-out option available.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">8. Breach Notification</h3>
            <p>In case of a data breach, affected users will be notified within 72 hours as per legal requirements.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">9. Childrens Privacy</h3>
            <p>For minors, we require parental consent and implement additional safeguards for their data.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">10. Policy Updates</h3>
            <p>We may update this policy periodically, with changes communicated via email to all registered users.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}