"use client";
import { motion } from "framer-motion";

export default function Disclaimer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.2)] to-[rgba(29,166,120,0.1)] min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-12"
        >
          Disclaimer
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-gray-700"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">1. General Information</h3>
            <p>
              The content on **Healthy Mind** is provided for informational purposes only. It is 
              not intended to replace professional psychiatric consultation, diagnosis, or treatment.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">2. Not Medical Advice</h3>
            <p>
              The information on this website does not constitute medical advice. Always consult 
              a licensed mental health professional for concerns regarding your psychological well-being.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">3. Accuracy of Information</h3>
            <p>
              While we strive to keep our content accurate and up-to-date, **Healthy Mind** makes 
              no guarantees regarding the completeness, reliability, or accuracy of the information presented.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">4. Liability Disclaimer</h3>
            <p>
              We are not liable for any consequences resulting from reliance on information found 
              on this website. Always verify critical details with a qualified mental health provider.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">5. Emergency Support</h3>
            <p>
              If you are experiencing a mental health crisis, suicidal thoughts, or distress, 
              please call **emergency services** or seek immediate help from a professional.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">6. Third-Party Links</h3>
            <p>
              Our website may contain links to external sites. We are not responsible for the content, 
              privacy policies, or practices of these third-party platforms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">7. Changes to Disclaimer</h3>
            <p>
              We reserve the right to update this disclaimer at any time. Any changes will be posted 
              on this page, and continued use of our website constitutes acceptance of these terms.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
