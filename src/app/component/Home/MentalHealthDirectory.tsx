"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MentalHealthDirectory: React.FC = () => {
  return (
    <main className="bg-white p-4 md:p-8 flex flex-col justify-center items-center">
      <section className="container max-w-5xl flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures animation only happens once
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <Image
            src="/Home/MentalHealthDirectory.svg"
            alt="Mental Health Directory"
            width={500}
            height={500}
            className="lg:w-full h-auto max-h-[500px]"
            priority
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-left"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-[#06685F] mb-4 lg:mb-6">
            A Comprehensive Directory For Your Mental Health
          </h1>
          <p className="text-[#7A7A7A] text-sm md:text-base mb-4 font-inter text-justify">
            Finding mental health support should be simple. Our directory
            connects you with licensed professionals, ensuring the right help at
            the right time.
          </p>

          <div className="pb-4 lg:pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#FFBC0A] px-4 md:px-6 lg:px-10 h-fit"
            >
              <p className="text-[#06685F] font-inter italic text-sm md:text-base mb-2 text-justify">
                We offer a diverse range of mental health services, from general
                consultations to specialized care. Our platform allows you to
                explore treatment options, find expert advice, and connect with
                professionals who truly understand your needs.
              </p>
            </motion.div>
          </div>

          <ul className="space-y-2 md:space-y-3 mb-6 lg:mb-8 text-[#7A7A7A]">
            {[
              "24/7 Phone counseling services for clients",
              "Really know the true needs and expectations of clients",
              "To assist the individual in recovering from the crisis & problems",
            ].map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.3 + index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#FFBC0A] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">{text}</span>
              </motion.li>
            ))}
          </ul>

          <div className="text-left">
            <Link href="/about">
              <motion.button
                className="font-commissioner font-bold bg-[#FFBC0A] hover:shadow-lg shadow-gray-400 hover:shadow-gray-500 shadow-md text-white py-3 px-6 rounded-lg transition duration-500"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Learn more about us"
              >
                MORE ABOUT US
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default MentalHealthDirectory;
