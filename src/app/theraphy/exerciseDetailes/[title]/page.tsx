"use client";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { motion } from "framer-motion";
import { therapyData } from "../../../../constants/therapyData";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

interface ExerciseDetailProps {
  params: Promise<{ category: string; title: string }>;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ params }) => {
  const resolvedParams = use(params);
  const decodedTitle = decodeURIComponent(resolvedParams.title);

  // Find the exercise across all categories
  const exercise = Object.values(therapyData)
    .find((cat) =>
      cat.items.some(
        (item) => item.title.toLowerCase().replace(/\s+/g, "-") === decodedTitle
      )
    )
    ?.items.find(
      (item) => item.title.toLowerCase().replace(/\s+/g, "-") === decodedTitle
    );

  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-green-50">
        <div className="text-center p-6">
          <p className="text-xl text-gray-600 font-sans">
            Therapy not found. Let’s find another way to bring you peace.
          </p>
          <Link href="/therapy">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-sans"
            >
              Explore More
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const { title, desc, banner, steps, src } = exercise;

  // Truncate and adjust step descriptions to 15 words max
  const truncatedSteps =
    steps?.map((step) => {
      const words = step.split(" ");
      return words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
    }) || [];

  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full opacity-20 transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link href="/theraphy">
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-sans text-lg transition-colors">
              <FaArrowLeft />
              Back to Calm
            </button>
          </Link>
        </motion.div>

        {/* Banner */}
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-64 rounded-2xl mb-8 overflow-hidden shadow-lg"
        >
          <Image
            src={banner || "/images/default-therapy.jpg"}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-teal-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            {desc}
          </p>
        </motion.div>

        {/* Video (if available) */}
        {src && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <iframe
              className="w-full h-64 md:h-96 rounded"
              src={src}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        )}

        {/* Steps */}
        {truncatedSteps.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-between items-center gap-6 px-4 py-16"
          >
            {truncatedSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative w-[200px]"
              >
                {/* Step Number in Circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-700 text-white text-2xl font-bold rounded-bl-none rounded-2xl flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                {/* Step Title */}
                <h4 className="mt-4 font-semibold text-teal-700 text-lg">
                  Step {index + 1}
                </h4>

                {/* Step Description */}
                <p className="text-gray-600 mt-2">
                  {step.length > 100 ? step.slice(0, 100) + "..." : step}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Completion Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-teal-50 px-4 md:p-6 rounded-2xl text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaHeart className="text-teal-500 text-2xl" />
            <h3 className="text-2xl font-sans font-semibold text-teal-700">
              You Did It!
            </h3>
          </div>
          <p className="text-gray-600 font-sans">
            Amazing job completing this therapy! You’re taking such great care
            of yourself. How about trying another calming activity?
          </p>
          <Link href="/therapy">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-sans"
            >
              Explore More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExerciseDetail;
