"use client";
import { motion } from "framer-motion";

export default function GDPRPolicy() {
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
          GDPR Policy
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-gray-700"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">1. Commitment to GDPR</h3>
            <p>
              **Healthy Mind** is dedicated to protecting your privacy and ensuring compliance 
              with the **General Data Protection Regulation (GDPR)**. This policy explains 
              how we collect, process, and secure your personal data.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">2. Data Collection</h3>
            <p>
              We collect personal details such as your name, email, consultation history, 
              and any relevant health information when you use our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">3. How We Use Your Data</h3>
            <p>
              - To provide mental health consultation services  
              - To improve user experience and website functionality  
              - To comply with legal and regulatory requirements  
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">4. Your Rights Under GDPR</h3>
            <p>
              As a user, you have the following rights regarding your personal data:  
              - Access and review your data  
              - Request corrections or deletion  
              - Restrict or object to data processing  
              - Withdraw consent at any time  
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">5. Data Security</h3>
            <p>
              We implement strong security measures, including AES-256 encryption and 
              GDPR-compliant storage solutions, to protect your personal data from unauthorized access.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">6. Data Retention</h3>
            <p>
              Your data is retained only as long as necessary for the purpose it was collected. 
              After the required period, it is securely deleted or anonymized.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">7. Contact Us</h3>
            <p>
              If you have any concerns regarding your data privacy, please contact us at  
              **support@healthymind.com**.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
