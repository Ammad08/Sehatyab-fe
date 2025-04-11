"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { use } from "react"; // Import React.use
import { motion } from "framer-motion";
import { therapyData } from "../../../../constants/therapyData";

interface ExerciseDetailProps {
  params: Promise<{ title: string }>; // Update type to reflect Promise
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ params }) => {
  const resolvedParams = use(params); // Unwrap the Promise
  const decodedTitle = decodeURIComponent(resolvedParams.title);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);
  const exercise = therapyData.other.find(
    (item) => item.title === decodedTitle
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-500 font-poppins">
          Exercise not found. Let’s find something else to help you feel better.
        </p>
      </div>
    );
  }

  const { title, desc, steps, images } = exercise;

  const handleImageError = (index: number) => {
    setImageErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-teal-800 text-center mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 font-poppins">
            {desc} – Take it one step at a time, you’ve got this.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-[#1DA678] h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(100 / steps.length) * steps.length}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center font-poppins">
            {steps.length} gentle steps to guide you
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mb-12"
        >
          {/* Vertical Connector Line (Background) */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-teal-600 to-teal-300 opacity-50 z-0">
            <motion.div
              className="w-full h-full bg-teal-600"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-center gap-6 mb-10 last:mb-0"
            >
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">
                {index + 1}
              </div>

              {/* Step Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(29, 166, 120, 0.15)",
                }}
                className="flex-1 bg-gradient-to-r from-white to-teal-50 p-6 rounded-xl shadow-md border border-teal-100 flex items-center gap-6"
              >
                {/* Step Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-sans font-semibold text-teal-700 mb-2">
                    Step {index + 1}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    {step}
                  </p>
                </div>

                {/* Step Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  {images[index] && !imageErrors[index] ? (
                    <Image
                      src={images[index]}
                      alt={`Step ${index + 1}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-teal-50 rounded-lg">
                      <p className="text-gray-400 font-sans text-xs text-center">
                        A calming view awaits
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Encouragement Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-teal-50 p-6 rounded-xl border border-teal-200"
        >
          <p className="text-lg text-teal-800 font-poppins">
            &quot;You&apos;re doing great—just being here is a step toward
            peace.&quot;
          </p>
        </motion.div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link href="/therapy">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1DA678] text-white rounded-full hover:bg-teal-600 transition-colors text-lg font-poppins font-medium shadow-md"
            >
              Back to Calm
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetail;
