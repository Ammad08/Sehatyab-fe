// "use client";

// import { useState } from "react";
// import "@fontsource/commissioner";
// import "@fontsource/poppins";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Hero: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState("Human");

//   return (
//     <main className="font-poppins flex flex-col items-center justify-center">
//       {/* Hero Section */}
//       <section className="relative w-full px-6 md:px-16 xl:px-36 flex items-center justify-center py-4 pt-10 bg-custom-gradient">
//         <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:w-[70%] text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start"
//           >
//             <h1 className="text-[#1DA678] font-semibold text-sm uppercase tracking-wider font-commissioner">
//               Professionals Psychiatrist
//             </h1>
//             <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold md:font-bold leading-tight text-gray-900">
//               Keep With Your <span className="text-[#1DA678]">Healthy</span>
//               <br />
//               Mentals & Psychology
//             </h2>
//             <p className="text-gray-600 max-w-lg font-commissioner text-base md:text-lg">
//               Your mental health matters. Get the best psychiatric services to
//               ensure a healthier mind and well-being.
//             </p>

//             {/* Button and Rating */}
//             <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
//               <div className="flex flex-col justify-center items-center lg:items-start md:flex-row lg:flex-col gap-4">
//                 <Link href="/services">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="font-commissioner font-bold bg-[#FFBC0A] hover:shadow-lg shadow-gray-400 hover:shadow-gray-500 shadow-md text-white py-3 px-6 rounded-lg transition duration-500"
//                   >
//                     Our Services
//                   </motion.button>
//                 </Link>
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/Home/Google.svg"
//                     alt="Google"
//                     width={40}
//                     height={40}
//                   />
//                   <div>
//                     <p className="font-bold font-commissioner text-[#181818]">
//                       4.8 Google Rating
//                     </p>
//                     <p className="text-gray-500 font-commissioner text-sm">
//                       Trusted by thousands
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
//           >
//             <Image
//               src="/Home/HeroGirl.svg"
//               alt="HeroGirl"
//               width={470}
//               height={470}
//               priority
//             />
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="absolute top-10 left-0 md:top-16 xl:left-14 z-10"
//             >
//               <Image
//                 src="/Home/HeroGbox.svg"
//                 alt="Decorative Image"
//                 width={75}
//                 height={75}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Quote Form */}
//       <div className="w-full bg-[#1DA678] justify-center items-center flex flex-col py-4 ">
//         <div className="max-w-6xl ">
//           <div className="flex flex-wrap gap-4 xl:gap-7 items-center justify-center">
//             <h2 className="text-white font-commissioner text-3xl font-bold text-center">
//               What Do You Need?
//             </h2>



//              {/* get a quote Section for api integration */}
//             <div className="flex flex-wrap gap-2 justify-center">
//               {/* Input Fields */}
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Your Address"
//                 className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
//               />

//               {/* Dropdown */}
//               <select
//                 value={selectedOption}
//                 onChange={(e) => setSelectedOption(e.target.value)}
//                 className="bg-white px-3 py-3 border border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-44 sm:w-36 cursor-pointer focus:ring-2 focus:ring-yellow-500"
//               >
//                 <option value="Human">Human</option>
//                 <option value="Company">Company</option>
//               </select>

//               {/* Button */}
//               <button className="bg-gradient-to-r from-[#FFBC0A] to-[#FFA500] text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-yellow-600 hover:scale-105 duration-500 ease-in-out transition">
//                 Get a Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Shapes */}
//       <div className="hidden lg:block">
//         <motion.div
//           animate={{ rotate: [0, 180, 0] }}
//           transition={{ duration: 5, repeat: Infinity }}
//           className="absolute md:right-20 lg:top-32 xl:right-44"
//         >
//           <div className="w-10 h-10 bg-[#FFBC0A] rounded-md"></div>
//         </motion.div>
//         <motion.div
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute md:right-16 lg:top-28 xl:right-40"
//         >
//           <Image
//             src="/Home/HeroGbox.svg"
//             alt="Greenbox"
//             width={40}
//             height={40}
//           />
//         </motion.div>
//       </div>
//     </main>
//   );
// };

// export default Hero;


"use client";

import { useState } from "react";
import "@fontsource/commissioner";
import "@fontsource/poppins";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    serviceType: "Human",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5501/happy/qoute/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      const result = await response.json();
      console.log("Quote submitted:", result);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        name: "",
        address: "",
        email: "",
        serviceType: "Human",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="font-poppins flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-16 xl:px-36 flex items-center justify-center py-4 pt-10 bg-custom-gradient">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[70%] text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start"
          >
            <h1 className="text-[#1DA678] font-semibold text-sm uppercase tracking-wider font-commissioner">
              Professionals Psychiatrist
            </h1>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold md:font-bold leading-tight text-gray-900">
              Keep With Your <span className="text-[#1DA678]">Healthy</span>
              <br />
              Mentals & Psychology
            </h2>
            <p className="text-gray-600 max-w-lg font-commissioner text-base md:text-lg">
              Your mental health matters. Get the best psychiatric services to
              ensure a healthier mind and well-being.
            </p>

            {/* Button and Rating */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex flex-col justify-center items-center lg:items-start md:flex-row lg:flex-col gap-4">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-commissioner font-bold bg-[#FFBC0A] hover:shadow-lg shadow-gray-400 hover:shadow-gray-500 shadow-md text-white py-3 px-6 rounded-lg transition duration-500"
                  >
                    Our Services
                  </motion.button>
                </Link>
                <div className="flex items-center gap-3">
                  <Image
                    src="/Home/Google.svg"
                    alt="Google"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-bold font-commissioner text-[#181818]">
                      4.8 Google Rating
                    </p>
                    <p className="text-gray-500 font-commissioner text-sm">
                      Trusted by thousands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
          >
            <Image
              src="/Home/HeroGirl.svg"
              alt="HeroGirl"
              width={470}
              height={470}
              priority
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 left-0 md:top-16 xl:left-14 z-10"
            >
              <Image
                src="/Home/HeroGbox.svg"
                alt="Decorative Image"
                width={75}
                height={75}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="w-full bg-[#1DA678] justify-center items-center flex flex-col py-4">
        <div className="max-w-6xl">
          <div className="flex flex-wrap gap-4 xl:gap-7 items-center justify-center">
            <h2 className="text-white font-commissioner text-3xl font-bold text-center">
              What Do You Need?
            </h2>

            {/* Get a Quote Section with API Integration */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap gap-2 justify-center"
            >
              {/* Input Fields */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
                required
              />

              {/* Dropdown */}
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="bg-white px-3 py-3 border border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-44 sm:w-36 cursor-pointer focus:ring-2 focus:ring-yellow-500"
                required
              >
                <option value="Human">Human</option>
                <option value="Company">Company</option>
              </select>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-[#FFBC0A] to-[#FFA500] text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-yellow-600 hover:scale-105 duration-500 ease-in-out transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Get a Quote"}
              </button>
            </form>

            {/* Success/Error Messages */}
            {success && (
              <div className="text-white text-center mt-2">
                Quote request submitted successfully!
              </div>
            )}
            {error && (
              <div className="text-red-200 text-center mt-2">{error}</div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="hidden lg:block">
        <motion.div
          animate={{ rotate: [0, 180, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute md:right-20 lg:top-32 xl:right-44"
        >
          <div className="w-10 h-10 bg-[#FFBC0A] rounded-md"></div>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute md:right-16 lg:top-28 xl:right-40"
        >
          <Image
            src="/Home/HeroGbox.svg"
            alt="Greenbox"
            width={40}
            height={40}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;