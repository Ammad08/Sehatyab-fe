"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Footer data structured for optimization
const footerData = {
  about: {
    description:
      "Providing trusted healthcare solutions with excellence. Dedicated to your well-being, we ensure compassionate care and innovative medical services.",
    socialIcons: [FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn],
  },
  quickLinks: [
    { name: "Homepage", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Specialist", path: "/appointment" },
    { name: "Our Services", path: "/services" },
    { name: "Our Pricing", path: "/pricing" },
  ],
  serviceLinks: [
    { name: "Mental Health", path: "/mental-health" },
    { name: "Childhood", path: "/childhood" },
    { name: "Adult Mentals", path: "/adult-mentals" },
    { name: "Wife Mental", path: "/wife-mental" },
    { name: "Old Consultant", path: "/old-consultant" },
  ],
  contact: {
    hours: "Open All Day 08:00 AM – 08:00 PM or custom time",
    address: "123 Main Street, Suite 101",
    email: "info@health.com",
    phone: "(877)-444-6666",
  },
  bottomLinks: [
    { name: "Disclaimer", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "GDPR Policy", path: "#" },
  ],
};

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="bg-[#1DA678] text-white  px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto py-6 md:py-10 flex flex-col lg:flex-row gap-6 lg:gap-20 px-4 ">
        {/* About Section */}
        <motion.div
          variants={footerVariants}
          className="space-y-4 mt-4 col-span-1 sm:col-span-2 w-full lg:w-[35%]"
        >
          <p className="text-md font-bold text-white/80 text-justify lg:text-start">
            {footerData.about.description}
          </p>
          <div className="flex space-x-3">
            {footerData.about.socialIcons.map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={footerVariants.hover}
                className="bg-white/10 p-2 rounded-full shadow-md hover:bg-white/20 transition-colors duration-200"
              >
                <Icon className="text-white/80 text-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 justify-between gap-8 md:gap-14 lg:gap-10 w-full lg:w-[65%]">
          {/* Quick Links */}
          <motion.div variants={footerVariants} className="space-y-3 text-left">
            <h3 className="font-bold text-xl text-white">Quick Links</h3>
            <div className="h-1 w-10 bg-yellow-400 mb-2 rounded-full" />
            <ul className="space-y-4 mt-4">
              {footerData.quickLinks.map(({ name, path }) => (
                <motion.li
                  key={path}
                  variants={footerVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <Link href={path}>
                    <span className="hover:underline text-sm font-bold text-white/80 cursor-pointer">
                      {name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div variants={footerVariants} className="space-y-3 text-left">
            <h3 className="font-bold text-xl text-white">Service Links</h3>
            <div className="h-1 w-10 bg-yellow-400 mb-2 rounded-full" />
            <ul className="space-y-4 mt-4">
              {footerData.serviceLinks.map(({ name, path }) => (
                <motion.li
                  key={path}
                  variants={footerVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <Link href={path}>
                    <span className="hover:underline text-sm font-bold text-white/80 cursor-pointer">
                      {name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={footerVariants} className="space-y-3 text-left">
            <h3 className="font-bold text-xl text-nowrap text-white">Let’s Get In Touch</h3>
            <div className="h-1 w-10 bg-yellow-400 mb-2 rounded-full" />
            <p className="text-sm font-bold text-white/80">
              {footerData.contact.hours}
            </p>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span className="text-sm font-bold text-white/80">
                {footerData.contact.address}
              </span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span className="text-sm font-bold text-white/80">
                {footerData.contact.email}
              </span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span className="text-sm font-bold text-white/80">
                {footerData.contact.phone}
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        variants={footerVariants}
        className="border-t border-white/20 mt-6 py-4 flex flex-col md:flex-row justify-between items-center px-0 md:px-14 text-sm"
      >
        <p className="text-xs lg:text-sm font-bold text-white/80">
          © 2025 - All Rights Reserved by Health
        </p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-3 md:mt-0">
          {footerData.bottomLinks.map(({ name, path }, index) => (
            <Link key={name} href={path}>
              <span
                className={`hover:underline text-xs lg:text-sm font-bold text-white/80 ${
                  index < footerData.bottomLinks.length - 1
                    ? "border-r pr-4"
                    : ""
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
