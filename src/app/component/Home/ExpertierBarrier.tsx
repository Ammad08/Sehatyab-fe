
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/600.css";
import "@fontsource/commissioner/700.css";
import "@fontsource/commissioner/800.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

const cards = [
  {
    id: 1,
    title: "Quality Services",
    description:
      "We provide top-tier healthcare solutions, ensuring patient well-being.",
    image: "/Home/QualityServices.svg",
    bgColor: "bg-white",
    textColor: "text-[#06685F]",
  },
  {
    id: 2,
    title: "Professional Team",
    description: "Our skilled doctors and staff deliver expert medical care.",
    image: "/Home/ProfessionalTeam.svg",
    bgColor: "bg-[#1DA678]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "24/7 assistance to help you with all health-related concerns.",
    image: "/Home/DedicatedSupport.svg",
    bgColor: "bg-white",
    textColor: "text-[#06685F]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExpertiseBanner: React.FC = () => {
  return (
    <main className="px-4 lg:px-8 text-center py-14">
      {/* Top Section */}
      <section className="mb-8 md:mb-12 max-w-6xl mx-auto text-left lg:text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl font-poppins font-bold text-[#06685F]">
            We Have More Than 12 Years Professional Experience in Psychology and
            Mental Health Counseling
          </h1>
          <p className="mt-4 text-base md:text-[18.54px] text-[#7A7A7A] font-inter lg:w-[90%] xl:w-[80%]">
            We specialize in psychology and mental health counseling, offering
            expert guidance and support. Our services provide a safe space for
            individuals to manage their mental well-being and overcome
            challenges with professional, compassionate care.
          </p>
        </motion.div>
      </section>

      {/* Bottom Section - Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`p-6 sm:p-8 md:p-10 shadow-md shadow-gray-500 rounded-sm ${card.bgColor} flex gap-4 items-center text-left hover:scale-105 transition-transform duration-500 hover:shadow-lg hover:shadow-gray-700`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="flex self-start">
              <Image
                src={card.image}
                alt={card.title}
                width={120}
                height={120}
                className="text-white text-4xl"
              />
            </div>
            <div className="flex flex-col">
              <h2
                className={`text-lg font-poppins font-bold ${card.textColor}`}
              >
                {card.title}
              </h2>
              <p className={`mt-2 text-sm sm:text-base ${card.textColor}`}>
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default ExpertiseBanner;
