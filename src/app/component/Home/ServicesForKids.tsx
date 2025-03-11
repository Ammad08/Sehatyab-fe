"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const ServicesForKids: React.FC = () => {
  return (
    <main className="bg-[#F7F7F7] p-4 md:p-12 flex flex-col justify-center items-center">
      <motion.section
        className="container max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <h1 className="text-[#FFBC0A] font-semibold text-sm uppercase tracking-wider font-commissioner">
          Services for Kids
        </h1>

        <div className="text-left mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#06685F] font-poppins my-3">
            Cherish Our Little Ones
          </h2>
          <p className="text-[#363636] font-openSans">
            Children hold immense value to us. At Umeed, our therapists
            collaborate with children and adolescents, guiding them to overcome
            challenges and reach their fullest potential. We focus on addressing
            mental, emotional, and social developmental concerns to foster their
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Component */}
          {[
            {
              title: "School Related Issues",
              items: [
                "Learning disabilities",
                "Parenting styles",
                "Learning difficulties",
                "Peer pressure",
                "Exam anxiety",
              ],
            },
            {
              title: "Special Children",
              items: [
                "Gifted / talented children",
                "ADHD",
                "Mental retardation",
                "Autism / Asperger’s",
              ],
            },
            {
              title: "Behavioral Issues",
              items: [
                "Temper tantrums",
                "Eating problems",
                "Bed wetting",
                "Aggression",
                "Sibling rivalry",
                "Sleep problems",
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="font-poppins p-6 transform hover:scale-[1.03] transition duration-300 ease-in-out"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#06685F]">
                  {category.title}
                </h3>
                <h4 className="font-poppins text-[#06685F] font-semibold text-xs">
                  Symptoms
                </h4>
              </div>
              <ul className="space-y-2 text-sm md:text-base">
                {category.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-gray-700"
                    variants={listItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-[#FFBC0A] mr-2">✔</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
        </div>

        <div className="text-center ">
          <Link href="/services">
            <motion.button
              className="font-commissioner font-bold bg-[#FFBC0A] hover:shadow-lg shadow-gray-400 hover:shadow-gray-500 shadow-md text-white py-3 px-8 rounded-sm transition duration-500"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book an appointment"
            >
              Our Services
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default ServicesForKids;
