'use client';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.2)] to-[rgba(29,166,120,0.1)] min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-12"
        >
          Terms & Conditions
        </motion.h2>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-gray-700"
        >
            <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">1. Payment Terms</h3>
            <p>Full payment is due at booking. Refunds are processed within 5 business days for cancellations made 24+ hours prior.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">2. Account Responsibility</h3>
            <p>You are responsible for securing your account credentials and notifying us of unauthorized access.</p>
          </motion.div>
          

          

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">3. Session Conduct</h3>
            <p>Users must maintain respectful behavior; abusive conduct may result in service termination.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">4. Service Limitations</h3>
            <p>We provide psychiatric consultations but cannot guarantee specific outcomes or diagnoses.</p>
          </motion.div>

         

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">5. Intellectual Property</h3>
            <p>All platform content is owned by Healthy Mind and may not be reproduced without permission.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">6. Termination</h3>
            <p>We reserve the right to terminate accounts for policy violations with prior notice.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">7. Dispute Resolution</h3>
            <p>Disputes will be resolved through mediation before legal action, governed by [Your State] law.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">8. Modifications</h3>
            <p>We may modify these terms, with updates effective upon posting and email notification.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">9. Eligibility</h3>
            <p>Services are available to individuals 18+ or minors with verified parental consent.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">10. Booking Policy</h3>
            <p>All sessions must be booked at least 12 hours in advance through our secure portal.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}