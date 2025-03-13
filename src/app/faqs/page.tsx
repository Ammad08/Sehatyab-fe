'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQS() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does online consultation work?",
      answer: "Our online consultation service connects you with certified psychiatrists through secure, encrypted video calls. You'll receive a unique link prior to your session, which you can access from any device with a camera and internet connection."
    },
    {
      question: "Are the sessions confidential?",
      answer: "Yes, all sessions are completely confidential. We use end-to-end encryption and comply with HIPAA regulations to ensure your privacy is protected at all times."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and select insurance plans. Contact our support team for insurance verification."
    },
    {
      question: "Can I choose my psychiatrist?",
      answer: "Yes, you can browse our professionals' profiles and select based on expertise, availability, and patient reviews."
    },
    {
      question: "What if I need to cancel a session?",
      answer: "You can cancel up to 24 hours before your appointment for a full refund. Late cancellations may incur a partial fee."
    },
    {
      question: "Do you prescribe medication?",
      answer: "Our psychiatrists can prescribe medication when appropriate, following a thorough evaluation during your session."
    },
    {
      question: "How long are the sessions?",
      answer: "Standard sessions are 50 minutes, with options for 30-minute follow-ups or extended 90-minute initial consultations."
    },
    {
      question: "What technical requirements do I need?",
      answer: "You'll need a device with a camera, microphone, and stable internet connection (at least 5 Mbps recommended)."
    },
    {
      question: "Can I get therapy for my child?",
      answer: "We offer services for minors with parental consent, conducted by specialists in child and adolescent psychiatry."
    },
    {
      question: "What happens if I miss a session?",
      answer: "Missed sessions without prior cancellation are non-refundable, but you can reschedule once per month at no extra cost."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.2)] to-[rgba(29,166,120,0.1)] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-[rgba(29,166,120,0.1)] transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="text-teal-700 text-2xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}