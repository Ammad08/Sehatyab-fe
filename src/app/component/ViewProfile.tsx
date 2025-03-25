// import Image from "next/image";
// import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";

// const ViewProfile = () => {
//   return (
//     <div className="py-10 mx- flex flex-col items-center gap-4  2xl:mx-96  lg:flex-row lg:items-start 2xl:gap-0 ">
//       <div className="w-2/3 mx-2 ">
//         {/* 1st Section */}
//         <div className="flex flex-col sm:flex-row items-start p-4 sm:p-6 shadow-xl rounded-lg gap-2 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           {/* Doctor Image */}
//           <Image
//             src="/ViewProfile/Doc.png"
//             alt="Doctor Image"
//             width={130} // Replace with the actual width of your image
//             height={150} // Replace with the actual height of your image
//             className="object-cover border"
//           />

//           {/* Doctor Info */}
//           <div className="flex-1 flex flex-col">
//             {/* Doctor Name & PMC Verified */}
//             <div className="flex flex-wrap items-center gap-2">
//               <h3 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
//                 DR Iram Javed
//               </h3>
//               {/* PMC Verified Tag */}
//               <div className="inline-flex items-center text-xs sm:text-sm bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
//                 <Image
//                   src="/Appointment/pmc.png"
//                   alt="PMC Verified"
//                   width={16} // Replace with the actual width of your image
//                   height={16}
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <span className="ml-1">PMC Verified</span>
//               </div>
//             </div>

//             {/* Rating & Reviews */}
//             <div className="flex flex-wrap items-center text-yellow-500 text-sm sm:text-base gap-2 mt-1">
//               <div className="flex">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//               </div>
//               <span className="font-bold text-black">10 reviews</span>
//             </div>

//             {/* Specialty & Experience */}
//             <p className="text-sm sm:text-base text-gray-700 mt-1">
//               Pediatric Neurologist
//             </p>
//             <p className="text-sm sm:text-base text-black font-semibold">
//               Experience: 10 Year(s)
//             </p>
//           </div>
//         </div>

//         {/* 2nd Section */}

//         <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <h1 className="text-[rgba(24,78,81,1)] font-semibold font-inter text-lg sm:text-xl py-2 sm:py-4">
//             About Dr Iram Javed
//           </h1>
//           <p className="text-xs  text-[rgba(100,100,100,1)]  font-inter  py-4 sm:py-6">
//             Assistant Professor Dr Iram Javed is a highly qualified Paediatric
//             Neurologist; she has completed her MBBS from Fatima Jinnah Medical
//             College Lahore and has also received her FCPS Paediatric Neurology
//             and FCPS Paediatric Medicine. She is also a member of the Pakistan
//             Medical and Dental Council. She is a member of the Pakistan Society
//             of Child Neurology (CNS Pakistan), a member of the International
//             Child Neurology Association (ICNA), a member of the Asian Oceanian
//             Child Neurology Association (AOCNA), and an executive member of the
//             Pakistan Paediatric Association Punjab (PPA). She is currently
//             working as an Assistant Professor and Head of the Department of
//             Paediatric Neurology at the Children’s Hospital and Institute of
//             Child Health, Faisalabad. She is also a supervisor of the FCPS
//             training program of the College of Physicians and Surgeons Pakistan.
//             According to the Pakistan Journal of Neurological Sciences, Pakistan
//             has a crippling shortage of pediatric neurologists—about one per one
//             million population—therefore, the work that Dr. Iram Javed does is
//             of the utmost importance and a necessity for the country. Her
//             special areas of interest, apart from General Paediatric Neurology,
//             are childhood epilepsy, neurometabolic disorders, and neurogenetic
//             disorders.
//           </p>
//         </div>

//         {/* 3rd Section */}

//         <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-2">
//           <h1 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4">
//             Services
//           </h1>

//           {/* First line with 7 tags */}
//           <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               Epilepsy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               Headache
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               CNS Infection
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               Development Delay
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               Cerebral Palsy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               Stroke
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs">
//               Behaviour Problem
//             </p>
//           </div>

//           {/* Second line with 5 tags */}
//           <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               Neuromuscular Disorders
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               Neuropathy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               Myopathy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               Movement Disorder
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               Neuro Rehab
//             </p>
//           </div>

//           {/* Last line with 2 tags */}
//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               Metabolic Disorders Management
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)]  font-inter rounded-lg px-3 py-2  text-xs font-medium">
//               EEG
//             </p>
//           </div>
//         </div>

//         {/* 4th Section */}

//         <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <h2 className="text-[rgba(6,104,95,1)] font-semibold text-base sm:text-xl py-2 sm:py-4 mb-4">
//             Education & Other Info
//           </h2>

//           {/* Education */}
//           <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] font-semibold text-xs">
//             <ul className="list-disc pl-5 ">
//               <li className="">
//                 FCPS - COLLEGE OF PHYSICIANS & SURGEONS PAKISTAN
//               </li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>MBBS - .....</li>
//             </ul>
//           </div>

//           {/* Specializations */}
//           <h3 className="text-md sm:text-lg font-semibold mt-6">
//             Specializations
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <ul className="list-disc pl-5">
//               <li>Paediatric Neurologist</li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>Paediatrician and Child Specialist</li>
//             </ul>
//           </div>

//           {/* Languages */}
//           <h3 className="text-md sm:text-xl font-semibold mt-6">Languages</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <ul className="list-disc pl-5 ">
//               <li>English</li>
//               <li className="mt-2">Punjabi</li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>Urdu</li>
//             </ul>
//           </div>

//           {/* Experience */}
//           <h3 className="text-md sm:text-xl font-semibold mt-6">Experience</h3>
//           <ul className="list-disc pl-5 pr-32 text-[rgba(100,100,100,1)] text-xs font-semibold ">
//             <li>
//               2014 - Present, Paediatric Neurologist (Child Neurophysician) &
//               <p className="mt-2">
//                 Paediatrician (Child Specialist), Children Hospital & Institute
//                 Of Child{" "}
//               </p>
//               <p>
//                 Health, Faisalabad,Children Hospital & Institute Of Child Health
//                 Lahore
//               </p>
//             </li>
//           </ul>
//         </div>

//         {/* 5th Section */}

//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-4">
//           <h2 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4 mb-4">
//             Reviews About Dr Iram Javed{" "}
//             <span className="text-[rgba(100,100,100,1)]">(10)</span>
//           </h2>

//           <div className="mt-4 space-y-6">
//             {/* Review List */}
//             {[
//               {
//                 name: "Shifaam Healthcare",
//                 stars: 2,
//                 clinic: "Shifaam Virtual Clinic",
//                 time: "3 year(s) ago",
//               },
//               {
//                 name: "Habib Ullah",
//                 stars: 5,
//                 clinic: "Shifaam Virtual Clinic",
//                 time: "3 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "2 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "1 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "1 year(s) ago",
//               },
//             ].map((review, index) => (
//               <div key={index} className="border-b pb-4">
//                 {/* First Line: Name & Stars */}
//                 <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
//                   <div className="flex items-center gap-2">
//                     <h3 className="font-medium text-gray-800 break-words">
//                       {review.name}
//                     </h3>
//                     <div className="flex items-center space-x-1 text-yellow-500">
//                       {[...Array(review.stars)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                       {[...Array(5 - review.stars)].map((_, i) => (
//                         <FaRegStar key={i} className="text-gray-300" />
//                       ))}
//                     </div>
//                   </div>
//                   {/* Time on the right */}
//                   <p className="text-xs font-semibold  text-[rgba(100,100,100,1)]">
//                     {review.time}
//                   </p>
//                 </div>

//                 {/* Second Line: Clinic Name */}
//                 <p className="text-sm mt-2 sm:mt-4 text-[rgba(24,185,213,1)]">
//                   Review For: {review.clinic}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* View all reviews */}
//           <div className="text-center mt-4">
//             <a
//               href="#"
//               className="text-[rgba(29,166,120,1)] font-medium hover:underline"
//             >
//               View all 10 Reviews
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="w-2/3 md:w-1/3 ">
//         <div className=" w-full md:w-[350px] flex flex-col justify-start space-y-4">
//           {/* 1st Form */}
//           <div className="bg-white p-4 2xl:w-[400px]  sm:p-6 rounded-lg shadow-lg border">
//             {/* Header */}
//             <div className="flex items-center  space-x-2">
//               <Image
//                 src="/ViewProfile/GreenCall.png"
//                 alt=""
//                 width={33}
//                 height={33}
//                 className="w-6 h-6"
//               />
//               <h2 className="text-lg sm:text-xl  font-semibold text-[rgba(6,104,95,1)]">
//                 Online Video Consultation
//               </h2>
//             </div>

//             {/* Fees */}
//             <div className="mt-4 flex justify-between">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Fees:
//               </p>
//               <p className="text-black font-semibold text-sm">Rs.1500</p>
//             </div>

//             {/* Separator */}
//             <div className="border-t my-4"></div>

//             {/* Days */}
//             <div className="flex flex-wrap justify-between mt-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Days:
//               </p>
//               <p className="text-black font-semibold text-sm text-right">
//                 Tue, Wed, Thu, Fri, Sat
//               </p>
//             </div>

//             {/* Separator */}
//             <div className="border-t my-4"></div>

//             {/* Available Today */}
//             <div className="flex flex-wrap justify-between items-center mb-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-medium">
//                 Available Today:
//               </p>
//               <p className="text-gray-800  text-sm font-medium">
//                 09:00 AM - 05:00 PM
//               </p>
//             </div>

//             {/* Schedule */}
//             <div className="mt-2 space-y-4">
//               {[
//                 { day: "Tuesday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Wednesday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Thursday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Friday", time: "09:00 AM - 05:00 PM" },
//                 { day: "Saturday", time: "12:30 PM - 02:00 PM" },
//               ].map((slot, index) => (
//                 <div key={index} className="flex flex-wrap justify-between">
//                   <p className="text-gray-800 font-semibold text-sm">
//                     {slot.day}
//                   </p>
//                   <p className="text-gray-800 font-semibold text-sm">
//                     {slot.time}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <div className="mt-6 text-center">
//               <button className="w-full flex items-center justify-center space-x-2 font-inter border border-[rgba(38,118,117,1)] text-[rgba(38,118,117,1)] font-bold py-2 rounded-full hover:bg-green-50 transition">
//                 <Image
//                   src="/ViewProfile/Symbol.png"
//                   alt=""
//                   width={33}
//                   height={33}
//                   className="w-4 h-4 hidden md:block"
//                 />
//                 <span>Book Video Consultation</span>
//               </button>
//             </div>
//           </div>

//           {/* 2nd Form */}
//           <div className="bg-white p-6 space-y-4  2xl:w-[400px] rounded-lg shadow-lg border">
//             {/* Header */}
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/ViewProfile/Background.png"
//                 alt="View Profile "
//                 width={33}
//                 height={33}
//               />
//               <h2 className="text-lg font-semibold text-[rgba(6,104,95,1)]">
//                 Ibrahim Specialist Clinic
//               </h2>
//             </div>
//             <div className="flex flex-col mx-6 justify-center">
//               <p className="text-[rgba(100,100,100,1)] text-xs font-medium text- mb-4">
//                 West Canal Road ,Amin Town ,Near Ideal Bakers and <br /> Kashmir
//                 Pul, Faisalabad
//               </p>
//               {/* <p className="text-[rgba(100,100,100,1)] text-xs space-y-0 font-medium pl-2 mt-1">  Kashmir Pul, Faisalabad</p> */}
//             </div>
//             {/* Fees */}
//             <div className="mt-4 flex justify-between">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Fees:
//               </p>
//               <p className="text-black text-sm font-semibold">Rs.2000</p>
//             </div>
//             {/* Separator */}
//             <div className="border-t my-4"></div>
//             {/* Days */}
//             <div className=" flex flex-wrap justify-between mt-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Days:
//               </p>
//               <p className="text-black text-sm font-semibold">
//                 Tue, Wed, Thu, Fri, Sat
//               </p>
//             </div>

//             {/* Separator */}
//             <div className="border-t my-4"></div>

//             {/* Available Today */}
//             <div className="flex flex-wrap justify-between items-center">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Available Today:
//               </p>
//               <p className="text-gray-800 text-sm font-semibold">
//                 05:00 PM - 08:00 PM ⌃
//               </p>
//             </div>

//             {/* Schedule */}
//             <div className="mt-2 mb- space-y-4">
//               {[
//                 { day: "Tuesday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Wednesday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Thursday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Friday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Saturday", time: "05:00 PM - 08:00 PM" },
//               ].map((slot, index) => (
//                 <div key={index} className="flex flex-wrap justify-between">
//                   <p className="text-gray-800 text-sm font-semibold">
//                     {slot.day}
//                   </p>
//                   <p className="text-gray-800 text-sm font-semibold">
//                     {slot.time}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <div className="mt- text-center">
//               <button className="w-full flex items-center justify-center space-x-2 border border-[rgba(255,188,10,1)] text-[rgba(255,188,10,1)] font-bold font-inter py-2 rounded-full hover:bg-green-50 transition">
//                 <span>Book Appointment</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;








// "use client"
// import Image from "next/image";
// import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { useSearchParams } from "next/navigation";

// const ViewProfile: React.FC = () => {
//   const searchParams = useSearchParams();
  
//   // Get doctor data from query parameters
//   const doctorData = {
//     name: searchParams.get("name") || "DR Iram Javed",
//     image: searchParams.get("image") || "/ViewProfile/Doc.png",
//     reviews: Number(searchParams.get("reviews")) || 10,
//     rating: Number(searchParams.get("rating")) || 5,
//     specialty: searchParams.get("specialty") || "Pediatric Neurologist",
//     experience: searchParams.get("experience") || "10 Year(s)"
//   };

//   return (
//     <div className="py-10 mx- flex flex-col items-center gap-4 2xl:mx-96 lg:flex-row lg:items-start 2xl:gap-0">
//       <div className="w-2/3 mx-2">
//         {/* 1st Section */}
//         <div className="flex flex-col sm:flex-row items-start p-4 sm:p-6 shadow-xl rounded-lg gap-2 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <Image
//             src={doctorData.image}
//             alt="Doctor Image"
//             width={130}
//             height={150}
//             className="object-cover border"
//           />

//           <div className="flex-1 flex flex-col">
//             <div className="flex flex-wrap items-center gap-2">
//               <h3 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
//                 {doctorData.name}
//               </h3>
//               <div className="inline-flex items-center text-xs sm:text-sm bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
//                 <Image
//                   src="/Appointment/pmc.png"
//                   alt="PMC Verified"
//                   width={16}
//                   height={16}
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <span className="ml-1">PMC Verified</span>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center text-yellow-500 text-sm sm:text-base gap-2 mt-1">
//               <div className="flex">
//                 {[...Array(doctorData.rating)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>
//               <span className="font-bold text-black">{doctorData.reviews} reviews</span>
//             </div>

//             <p className="text-sm sm:text-base text-gray-700 mt-1">
//               {doctorData.specialty}
//             </p>
//             <p className="text-sm sm:text-base text-black font-semibold">
//               Experience: {doctorData.experience}
//             </p>
//           </div>
//         </div>

//         {/* 2nd Section */}
//         <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <h1 className="text-[rgba(24,78,81,1)] font-semibold font-inter text-lg sm:text-xl py-2 sm:py-4">
//             About {doctorData.name}
//           </h1>
//           <p className="text-xs text-[rgba(100,100,100,1)] font-inter py-4 sm:py-6">
//             Assistant Professor {doctorData.name} is a highly qualified Paediatric
//             Neurologist, who has completed  MBBS from Fatima Jinnah Medical
//             College Lahore and has also received her FCPS Paediatric Neurology
//             and FCPS Paediatric Medicine. She is also a member of the Pakistan
//             Medical and Dental Council. She is a member of the Pakistan Society
//             of Child Neurology (CNS Pakistan), a member of the International
//             Child Neurology Association (ICNA), a member of the Asian Oceanian
//             Child Neurology Association (AOCNA), and an executive member of the
//             Pakistan Paediatric Association Punjab (PPA). She is currently
//             working as an Assistant Professor and Head of the Department of
//             Paediatric Neurology at the Children’s Hospital and Institute of
//             Child Health, Faisalabad. She is also a supervisor of the FCPS
//             training program of the College of Physicians and Surgeons Pakistan.
//             According to the Pakistan Journal of Neurological Sciences, Pakistan
//             has a crippling shortage of pediatric neurologists—about one per one
//             million population—therefore, the work that Dr. Iram Javed does is
//             of the utmost importance and a necessity for the country. Her
//             special areas of interest, apart from General Paediatric Neurology,
//             are childhood epilepsy, neurometabolic disorders, and neurogenetic
//             disorders.
//           </p>
//         </div>

//         {/* 3rd Section */}
//         <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-2">
//           <h1 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4">
//             Services
//           </h1>

//           <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Epilepsy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Headache
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               CNS Infection
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Development Delay
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Cerebral Palsy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Stroke
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Behaviour Problem
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Neuromuscular Disorders
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Neuropathy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Myopathy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Movement Disorder
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Neuro Rehab
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Metabolic Disorders Management
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               EEG
//             </p>
//           </div>
//         </div>

//         {/* 4th Section */}
//         <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <h2 className="text-[rgba(6,104,95,1)] font-semibold text-base sm:text-xl py-2 sm:py-4 mb-4">
//             Education & Other Info
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] font-semibold text-xs">
//             <ul className="list-disc pl-5">
//               <li className="">
//                 FCPS - COLLEGE OF PHYSICIANS & SURGEONS PAKISTAN
//               </li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>MBBS - .....</li>
//             </ul>
//           </div>

//           <h3 className="text-md sm:text-lg font-semibold mt-6">
//             Specializations
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <ul className="list-disc pl-5">
//               <li>Paediatric Neurologist</li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>Paediatrician and Child Specialist</li>
//             </ul>
//           </div>

//           <h3 className="text-md sm:text-xl font-semibold mt-6">Languages</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <ul className="list-disc pl-5">
//               <li>English</li>
//               <li className="mt-2">Punjabi</li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>Urdu</li>
//             </ul>
//           </div>

//           <h3 className="text-md sm:text-xl font-semibold mt-6">Experience</h3>
//           <ul className="list-disc pl-5 pr-32 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <li>
//               2014 - Present, Paediatric Neurologist (Child Neurophysician) &
//               <p className="mt-2">
//                 Paediatrician (Child Specialist), Children Hospital & Institute
//                 Of Child
//               </p>
//               <p>
//                 Health, Faisalabad,Children Hospital & Institute Of Child Health
//                 Lahore
//               </p>
//             </li>
//           </ul>
//         </div>

//         {/* 5th Section */}
//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-4">
//           <h2 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4 mb-4">
//             Reviews About {doctorData.name}{" "}
//             <span className="text-[rgba(100,100,100,1)]">({doctorData.reviews})</span>
//           </h2>

//           <div className="mt-4 space-y-6">
//             {[
//               {
//                 name: "Shifaam Healthcare",
//                 stars: 2,
//                 clinic: "Shifaam Virtual Clinic",
//                 time: "3 year(s) ago",
//               },
//               {
//                 name: "Habib Ullah",
//                 stars: 5,
//                 clinic: "Shifaam Virtual Clinic",
//                 time: "3 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "2 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "1 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "1 year(s) ago",
//               },
//             ].map((review, index) => (
//               <div key={index} className="border-b pb-4">
//                 <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
//                   <div className="flex items-center gap-2">
//                     <h3 className="font-medium text-gray-800 break-words">
//                       {review.name}
//                     </h3>
//                     <div className="flex items-center space-x-1 text-yellow-500">
//                       {[...Array(review.stars)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                       {[...Array(5 - review.stars)].map((_, i) => (
//                         <FaRegStar key={i} className="text-gray-300" />
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-xs font-semibold text-[rgba(100,100,100,1)]">
//                     {review.time}
//                   </p>
//                 </div>

//                 <p className="text-sm mt-2 sm:mt-4 text-[rgba(24,185,213,1)]">
//                   Review For: {review.clinic}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-4">
//             <a
//               href="#"
//               className="text-[rgba(29,166,120,1)] font-medium hover:underline"
//             >
//               View all {doctorData.reviews} Reviews
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="w-2/3 md:w-1/3">
//         <div className="w-full md:w-[350px] flex flex-col justify-start space-y-4">
//           {/* 1st Form */}
//           <div className="bg-white p-4 2xl:w-[400px] sm:p-6 rounded-lg shadow-lg border">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/ViewProfile/GreenCall.png"
//                 alt=""
//                 width={33}
//                 height={33}
//                 className="w-6 h-6"
//               />
//               <h2 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
//                 Online Video Consultation
//               </h2>
//             </div>

//             <div className="mt-4 flex justify-between">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Fees:
//               </p>
//               <p className="text-black font-semibold text-sm">Rs.1500</p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between mt-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Days:
//               </p>
//               <p className="text-black font-semibold text-sm text-right">
//                 Tue, Wed, Thu, Fri, Sat
//               </p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between items-center mb-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-medium">
//                 Available Today:
//               </p>
//               <p className="text-gray-800 text-sm font-medium">
//                 09:00 AM - 05:00 PM
//               </p>
//             </div>

//             <div className="mt-2 space-y-4">
//               {[
//                 { day: "Tuesday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Wednesday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Thursday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Friday", time: "09:00 AM - 05:00 PM" },
//                 { day: "Saturday", time: "12:30 PM - 02:00 PM" },
//               ].map((slot, index) => (
//                 <div key={index} className="flex flex-wrap justify-between">
//                   <p className="text-gray-800 font-semibold text-sm">
//                     {slot.day}
//                   </p>
//                   <p className="text-gray-800 font-semibold text-sm">
//                     {slot.time}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 text-center">
//               <button className="w-full flex items-center justify-center space-x-2 font-inter border border-[rgba(38,118,117,1)] text-[rgba(38,118,117,1)] font-bold py-2 rounded-full hover:bg-green-50 transition">
//                 <Image
//                   src="/ViewProfile/Symbol.png"
//                   alt=""
//                   width={33}
//                   height={33}
//                   className="w-4 h-4 hidden md:block"
//                 />
//                 <span>Book Video Consultation</span>
//               </button>
//             </div>
//           </div>

//           {/* 2nd Form */}
//           <div className="bg-white p-6 space-y-4 2xl:w-[400px] rounded-lg shadow-lg border">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/ViewProfile/Background.png"
//                 alt="View Profile"
//                 width={33}
//                 height={33}
//               />
//               <h2 className="text-lg font-semibold text-[rgba(6,104,95,1)]">
//                 Ibrahim Specialist Clinic
//               </h2>
//             </div>
//             <div className="flex flex-col mx-6 justify-center">
//               <p className="text-[rgba(100,100,100,1)] text-xs font-medium text- mb-4">
//                 West Canal Road ,Amin Town ,Near Ideal Bakers and <br /> Kashmir
//                 Pul, Faisalabad
//               </p>
//             </div>

//             <div className="mt-4 flex justify-between">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Fees:
//               </p>
//               <p className="text-black text-sm font-semibold">Rs.2000</p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between mt-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Days:
//               </p>
//               <p className="text-black text-sm font-semibold">
//                 Tue, Wed, Thu, Fri, Sat
//               </p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between items-center">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Available Today:
//               </p>
//               <p className="text-gray-800 text-sm font-semibold">
//                 05:00 PM - 08:00 PM ⌃
//               </p>
//             </div>

//             <div className="mt-2 mb- space-y-4">
//               {[
//                 { day: "Tuesday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Wednesday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Thursday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Friday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Saturday", time: "05:00 PM - 08:00 PM" },
//               ].map((slot, index) => (
//                 <div key={index} className="flex flex-wrap justify-between">
//                   <p className="text-gray-800 text-sm font-semibold">
//                     {slot.day}
//                   </p>
//                   <p className="text-gray-800 text-sm font-semibold">
//                     {slot.time}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt- text-center">
//               <button className="w-full flex items-center justify-center space-x-2 border border-[rgba(255,188,10,1)] text-[rgba(255,188,10,1)] font-bold font-inter py-2 rounded-full hover:bg-green-50 transition">
//                 <span>Book Appointment</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;




// "use client"
// import Image from "next/image";
// import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// const ViewProfile: React.FC = () => {
//   const searchParams = useSearchParams();
  
//   // Get doctor data from query parameters
//   const doctorData = {
//     name: searchParams.get("name") || "DR Iram Javed",
//     image: searchParams.get("image") || "/ViewProfile/Doc.png",
//     reviews: Number(searchParams.get("reviews")) || 10,
//     rating: Number(searchParams.get("rating")) || 5,
//     specialty: searchParams.get("specialty") || "Pediatric Neurologist",
//     experience: searchParams.get("experience") || "10 Year(s)"
//   };

//   return (
//     <div className="py-10 mx- flex flex-col items-center gap-4 2xl:mx-96 lg:flex-row lg:items-start 2xl:gap-0">
//       <div className="w-full px-4 md:w-2/3 mx-2">
//         {/* 1st Section */}
//         <div className="flex flex-col sm:flex-row items-start p-4 sm:p-6 shadow-xl rounded-lg gap-2 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <Image
//             src={doctorData.image}
//             alt="Doctor Image"
//             width={130}
//             height={150}
//             className="object-cover border"
//           />

//           <div className="flex-1 flex flex-col">
//             <div className="flex flex-wrap items-center gap-2">
//               <h3 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
//                 {doctorData.name}
//               </h3>
//               <div className="inline-flex items-center text-xs sm:text-sm bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
//                 <Image
//                   src="/Appointment/pmc.png"
//                   alt="PMC Verified"
//                   width={16}
//                   height={16}
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <span className="ml-1">PMC Verified</span>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center text-yellow-500 text-sm sm:text-base gap-2 mt-1">
//               <div className="flex">
//                 {[...Array(doctorData.rating)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>
//               <span className="font-bold text-black">{doctorData.reviews} reviews</span>
//             </div>

//             <p className="text-sm sm:text-base text-gray-700 mt-1">
//               {doctorData.specialty}
//             </p>
//             <p className="text-sm sm:text-base text-black font-semibold">
//               Experience: {doctorData.experience}
//             </p>
//           </div>
//         </div>

//         {/* 2nd Section - Dynamic About Section */}
//         <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <h1 className="text-[rgba(24,78,81,1)] font-semibold font-inter text-lg sm:text-xl py-2 sm:py-4">
//             About {doctorData.name}
//           </h1>
//           <p className="text-xs text-[rgba(100,100,100,1)] font-inter py-4 sm:py-6">
//             {doctorData.name} is a distinguished medical professional specializing in {doctorData.specialty.toLowerCase()}. 
//             With {doctorData.experience} of dedicated service, {doctorData.name} has established a reputation for excellence 
//             in patient care and medical expertise. Having completed advanced medical training from prestigious institutions, 
//             {doctorData.name} is certified by the Pakistan Medical Commission and holds memberships in various professional 
//             medical associations. Currently, {doctorData.name} serves as a leading practitioner in their field, 
//             contributing significantly to healthcare advancements in Pakistan. The expertise of {doctorData.name} 
//             is particularly focused on managing complex cases within {doctorData.specialty.toLowerCase()}, 
//             making them a vital asset to the medical community. With a patient-centered approach, {doctorData.name} 
//             continues to impact lives positively through innovative treatments and compassionate care.
//           </p>
//         </div>

//         {/* 3rd Section */}
//         <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-2">
//           <h1 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4">
//             Services
//           </h1>

//           <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Epilepsy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Headache
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               CNS Infection
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Development Delay
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Cerebral Palsy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Stroke
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
//               Behaviour Problem
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Neuromuscular Disorders
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Neuropathy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Myopathy
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Movement Disorder
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Neuro Rehab
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               Metabolic Disorders Management
//             </p>
//             <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
//               EEG
//             </p>
//           </div>
//         </div>

//         {/* 4th Section */}
//         <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
//           <h2 className="text-[rgba(6,104,95,1)] font-semibold text-base sm:text-xl py-2 sm:py-4 mb-4">
//             Education & Other Info
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] font-semibold text-xs">
//             <ul className="list-disc pl-5">
//               <li className="">
//                 FCPS - COLLEGE OF PHYSICIANS & SURGEONS PAKISTAN
//               </li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>MBBS - .....</li>
//             </ul>
//           </div>

//           <h3 className="text-md sm:text-lg font-semibold mt-6">
//             Specializations
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <ul className="list-disc pl-5">
//               <li>Paediatric Neurologist</li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>Paediatrician and Child Specialist</li>
//             </ul>
//           </div>

//           <h3 className="text-md sm:text-xl font-semibold mt-6">Languages</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <ul className="list-disc pl-5">
//               <li>English</li>
//               <li className="mt-2">Punjabi</li>
//             </ul>
//             <ul className="list-disc pl-5">
//               <li>Urdu</li>
//             </ul>
//           </div>

//           <h3 className="text-md sm:text-xl font-semibold mt-6">Experience</h3>
//           <ul className="list-disc pl-5 pr-32 text-[rgba(100,100,100,1)] text-xs font-semibold">
//             <li>
//               2014 - Present, Paediatric Neurologist (Child Neurophysician) &
//               <p className="mt-2">
//                 Paediatrician (Child Specialist), Children Hospital & Institute
//                 Of Child
//               </p>
//               <p>
//                 Health, Faisalabad,Children Hospital & Institute Of Child Health
//                 Lahore
//               </p>
//             </li>
//           </ul>
//         </div>

//         {/* 5th Section */}
//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-4">
//           <h2 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4 mb-4">
//             Reviews About {doctorData.name}{" "}
//             <span className="text-[rgba(100,100,100,1)]">({doctorData.reviews})</span>
//           </h2>

//           <div className="mt-4 space-y-6">
//             {[
//               {
//                 name: "Shifaam Healthcare",
//                 stars: 2,
//                 clinic: "Shifaam Virtual Clinic",
//                 time: "3 year(s) ago",
//               },
//               {
//                 name: "Habib Ullah",
//                 stars: 5,
//                 clinic: "Shifaam Virtual Clinic",
//                 time: "3 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "2 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "1 year(s) ago",
//               },
//               {
//                 name: "Anonymous",
//                 stars: 5,
//                 clinic: "Ibrahim Specialist Clinic",
//                 time: "1 year(s) ago",
//               },
//             ].map((review, index) => (
//               <div key={index} className="border-b pb-4">
//                 <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
//                   <div className="flex items-center gap-2">
//                     <h3 className="font-medium text-gray-800 break-words">
//                       {review.name}
//                     </h3>
//                     <div className="flex items-center space-x-1 text-yellow-500">
//                       {[...Array(review.stars)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                       {[...Array(5 - review.stars)].map((_, i) => (
//                         <FaRegStar key={i} className="text-gray-300" />
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-xs font-semibold text-[rgba(100,100,100,1)]">
//                     {review.time}
//                   </p>
//                 </div>

//                 <p className="text-sm mt-2 sm:mt-4 text-[rgba(24,185,213,1)]">
//                   Review For: {review.clinic}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-4">
//             <a
//               href="#"
//               className="text-[rgba(29,166,120,1)] font-medium hover:underline"
//             >
//               View all {doctorData.reviews} Reviews
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="w-full px-4 md:w-2/3 lg:w-1/3">
//         <div className="w-full lg:w-[350px] flex flex-col justify-start space-y-4">
//           {/* 1st Form */}
//           <div className="bg-white p-4 2xl:w-[400px] sm:p-6 rounded-lg shadow-lg border">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/ViewProfile/GreenCall.png"
//                 alt=""
//                 width={33}
//                 height={33}
//                 className="w-6 h-6"
//               />
//               <h2 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
//                 Online Video Consultation
//               </h2>
//             </div>

//             <div className="mt-4 flex justify-between">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Fees:
//               </p>
//               <p className="text-black font-semibold text-sm">Rs.1500</p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between mt-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Days:
//               </p>
//               <p className="text-black font-semibold text-sm text-right">
//                 Tue, Wed, Thu, Fri, Sat
//               </p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between items-center mb-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-medium">
//                 Available Today:
//               </p>
//               <p className="text-gray-800 text-sm font-medium">
//                 09:00 AM - 05:00 PM
//               </p>
//             </div>

//             <div className="mt-2 space-y-4">
//               {[
//                 { day: "Tuesday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Wednesday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Thursday", time: "12:30 PM - 02:00 PM" },
//                 { day: "Friday", time: "09:00 AM - 05:00 PM" },
//                 { day: "Saturday", time: "12:30 PM - 02:00 PM" },
//               ].map((slot, index) => (
//                 <div key={index} className="flex flex-wrap justify-between">
//                   <p className="text-gray-800 font-semibold text-sm">
//                     {slot.day}
//                   </p>
//                   <p className="text-gray-800 font-semibold text-sm">
//                     {slot.time}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 text-center">
//               <button className="w-full flex items-center justify-center space-x-2 font-inter border border-[rgba(38,118,117,1)] text-[rgba(38,118,117,1)] font-bold py-2 rounded-full hover:bg-green-50 transition">
//                 <Image
//                   src="/ViewProfile/Symbol.png"
//                   alt=""
//                   width={33}
//                   height={33}
//                   className="w-4 h-4 hidden md:block"
//                 />
//                 <span>Book Video Consultation</span>
//               </button>
//             </div>
//           </div>

//           {/* 2nd Form */}
//           <div className="bg-white p-6 space-y-4 2xl:w-[400px] rounded-lg shadow-lg border">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/ViewProfile/Background.png"
//                 alt="View Profile"
//                 width={33}
//                 height={33}
//               />
//               <h2 className="text-lg font-semibold text-[rgba(6,104,95,1)]">
//                 Ibrahim Specialist Clinic
//               </h2>
//             </div>
//             <div className="flex flex-col mx-6 justify-center">
//               <p className="text-[rgba(100,100,100,1)] text-xs font-medium text- mb-4">
//                 West Canal Road ,Amin Town ,Near Ideal Bakers and <br /> Kashmir
//                 Pul, Faisalabad
//               </p>
//             </div>

//             <div className="mt-4 flex justify-between">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Fees:
//               </p>
//               <p className="text-black text-sm font-semibold">Rs.2000</p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between mt-4">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Days:
//               </p>
//               <p className="text-black text-sm font-semibold">
//                 Tue, Wed, Thu, Fri, Sat
//               </p>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex flex-wrap justify-between items-center">
//               <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
//                 Available Today:
//               </p>
//               <p className="text-gray-800 text-sm font-semibold">
//                 05:00 PM - 08:00 PM
//               </p>
//             </div>

//             <div className="mt-2 mb- space-y-4">
//               {[
//                 { day: "Tuesday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Wednesday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Thursday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Friday", time: "05:00 PM - 08:00 PM" },
//                 { day: "Saturday", time: "05:00 PM - 08:00 PM" },
//               ].map((slot, index) => (
//                 <div key={index} className="flex flex-wrap justify-between">
//                   <p className="text-gray-800 text-sm font-semibold">
//                     {slot.day}
//                   </p>
//                   <p className="text-gray-800 text-sm font-semibold">
//                     {slot.time}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt- text-center">
//               <Link href="/appointment">
//               <button className="w-full flex items-center justify-center space-x-2 border border-[rgba(255,188,10,1)] text-[rgba(255,188,10,1)] font-bold font-inter py-2 rounded-full hover:bg-green-50 transition">
//                 <span>Book Appointment</span>
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;




"use client"
import Image from "next/image";
import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ViewProfile: React.FC = () => {
  const searchParams = useSearchParams();
  
  // Get doctor data from query parameters
  const doctorData = {
    name: searchParams.get("name") || "DR Iram Javed",
    image: searchParams.get("image") || "/ViewProfile/Doc.svg",
    reviews: Number(searchParams.get("reviews")) || 10,
    rating: Number(searchParams.get("rating")) || 5,
    specialty: searchParams.get("specialty") || "Pediatric Neurologist",
    experience: searchParams.get("experience") || "10 Year(s)"
  };

  // Function to handle back navigation
  // const handleBack = () => {
  //   window.history.back();
  // };

  return (
    <div className="py-10 mx- flex flex-col items-center gap-4 2xl:mx-96 lg:flex-row lg:items-start 2xl:gap-0 relative">
      {/* Back Button */}
      {/* <button
        onClick={handleBack}
        className="absolute top-2 left-2 border border-[rgba(6,104,95,1)] rounded-full py-1 px-2  flex items-center space-x-0.5 text-[rgba(6,104,95,1)] font-semibold hover:text-[rgba(24,185,213,1)] transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Back</span>
      </button> */}

      <div className="w-full px-4 md:w-2/3 mx-2">
        {/* 1st Section */}
        <div className="flex flex-col sm:flex-row items-start p-4 sm:p-6 shadow-xl rounded-lg gap-2 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
          <Image
            src={doctorData.image}
            alt="Doctor Image"
            width={130}
            height={150}
            className="object-cover border"
          />

          <div className="flex-1 flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
                {doctorData.name}
              </h3>
              <div className="inline-flex items-center text-xs sm:text-sm bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
                <Image
                  src="/Appointment/pmc.svg"
                  alt="PMC Verified"
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="ml-1">PMC Verified</span>
              </div>
            </div>

            {/* <div className="flex flex-wrap items-center text-yellow-500 text-sm sm:text-base gap-2 mt-1">
              <div className="flex">
                {[...Array(doctorData.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="font-bold text-black">{doctorData.reviews} reviews</span>
            </div> */}

            <p className="text-sm sm:text-base text-gray-700 mt-1">
              {doctorData.specialty}
            </p>
            <p className="text-sm sm:text-base text-black font-semibold">
              Experience: {doctorData.experience}
            </p>
          </div>
        </div>

        {/* 2nd Section - Dynamic About Section */}
        <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto">
          <h1 className="text-[rgba(24,78,81,1)] font-semibold font-inter text-lg sm:text-xl py-2 sm:py-4">
            About {doctorData.name}
          </h1>
          <p className="text-sm text-[rgba(100,100,100,1)] text-justify font-inter py-4 sm:py-6">
            {doctorData.name} is a distinguished medical professional specializing in {doctorData.specialty.toLowerCase()}. 
            With {doctorData.experience} of dedicated service, {doctorData.name} has established a reputation for excellence 
            in patient care and medical expertise. Having completed advanced medical training from prestigious institutions, 
            {doctorData.name} is certified by the Pakistan Medical Commission and holds memberships in various professional 
            medical associations. Currently, {doctorData.name} serves as a leading practitioner in their field, 
            contributing significantly to healthcare advancements in Pakistan. The expertise of {doctorData.name} 
            is particularly focused on managing complex cases within {doctorData.specialty.toLowerCase()}, 
            making them a vital asset to the medical community. With a patient-centered approach, {doctorData.name} 
            continues to impact lives positively through innovative treatments and compassionate care.
          </p>
        </div>

        {/* 3rd Section */}
        <div className="p-4 sm:p-6 shadow-xl rounded-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-2">
          <h1 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4">
            Services
          </h1>

          <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              Epilepsy
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              Headache
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              CNS Infection
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              Development Delay
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              Cerebral Palsy
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              Stroke
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs">
              Behaviour Problem
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              Neuromuscular Disorders
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              Neuropathy
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              Myopathy
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              Movement Disorder
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              Neuro Rehab
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              Metabolic Disorders Management
            </p>
            <p className="bg-[rgba(246,246,246,1)] text-[rgba(100,100,100,1)] font-inter rounded-lg px-3 py-2 text-xs font-medium">
              EEG
            </p>
          </div>
        </div>

        {/* 4th Section */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-3xl 2xl:max-w-5xl mx-auto">
          <h2 className="text-[rgba(6,104,95,1)] font-semibold text-base sm:text-xl py-2 sm:py-4 mb-4">
            Education & Other Info
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] font-semibold text-sm">
            <ul className="list-disc pl-5">
              <li className="">
                FCPS - COLLEGE OF PHYSICIANS & SURGEONS PAKISTAN
              </li>
            </ul>
            <ul className="list-disc pl-5">
              <li>MBBS - .....</li>
            </ul>
          </div>

          <h3 className="text-md sm:text-lg font-semibold mt-6">
            Specializations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-sm font-semibold">
            <ul className="list-disc pl-5">
              <li>Paediatric Neurologist</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>Paediatrician and Child Specialist</li>
            </ul>
          </div>

          <h3 className="text-md sm:text-xl font-semibold mt-6">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(100,100,100,1)] text-sm font-semibold">
            <ul className="list-disc pl-5">
              <li>English</li>
              <li className="mt-2">Punjabi</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>Urdu</li>
            </ul>
          </div>

          <h3 className="text-md sm:text-xl font-semibold mt-6">Experience</h3>
          <ul className="list-disc pl-5 pr-32 text-[rgba(100,100,100,1)] text-sm font-semibold">
            <li>
              2014 - Present, Paediatric Neurologist (Child Neurophysician) &
              <p className="mt-2">
                Paediatrician (Child Specialist), Children Hospital & Institute
                Of Child
              </p>
              <p>
                Health, Faisalabad,Children Hospital & Institute Of Child Health
                Lahore
              </p>
            </li>
          </ul>
        </div>

        {/* 5th Section */}
        {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl 2xl:max-w-5xl mx-auto my-4">
          <h2 className="text-[rgba(24,78,81,1)] font-semibold text-lg sm:text-xl py-2 sm:py-4 mb-4">
            Reviews About {doctorData.name}{" "}
            <span className="text-[rgba(100,100,100,1)]">({doctorData.reviews})</span>
          </h2>

          <div className="mt-4 space-y-6">
            {[
              {
                name: "Shifaam Healthcare",
                stars: 2,
                clinic: "Shifaam Virtual Clinic",
                time: "3 year(s) ago",
              },
              {
                name: "Habib Ullah",
                stars: 5,
                clinic: "Shifaam Virtual Clinic",
                time: "3 year(s) ago",
              },
              {
                name: "Anonymous",
                stars: 5,
                clinic: "Ibrahim Specialist Clinic",
                time: "2 year(s) ago",
              },
              {
                name: "Anonymous",
                stars: 5,
                clinic: "Ibrahim Specialist Clinic",
                time: "1 year(s) ago",
              },
              {
                name: "Anonymous",
                stars: 5,
                clinic: "Ibrahim Specialist Clinic",
                time: "1 year(s) ago",
              },
            ].map((review, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-800 break-words">
                      {review.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(review.stars)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {[...Array(5 - review.stars)].map((_, i) => (
                        <FaRegStar key={i} className="text-gray-300" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[rgba(100,100,100,1)]">
                    {review.time}
                  </p>
                </div>

                <p className="text-sm mt-2 sm:mt-4 text-[rgba(24,185,213,1)]">
                  Review For: {review.clinic}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="#"
              className="text-[rgba(29,166,120,1)] font-medium hover:underline"
            >
              View all {doctorData.reviews} Reviews
            </a>
          </div>
        </div> */}
      </div>

      <div className="w-full px-4 md:w-2/3 lg:w-1/3">
        <div className="w-full lg:w-[350px] flex flex-col justify-start space-y-4">
          {/* 1st Form */}
          {/* <div className="bg-white p-4 2xl:w-[400px] sm:p-6 rounded-lg shadow-lg border">
            <div className="flex items-center space-x-2">
              <Image
                src="/ViewProfile/GreenCall.svg"
                alt=""
                width={33}
                height={33}
                className="w-6 h-6"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-[rgba(6,104,95,1)]">
                Online Video Consultation
              </h2>
            </div>

            <div className="mt-4 flex justify-between">
              <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
                Fees:
              </p>
              <p className="text-black font-semibold text-sm">Rs.1500</p>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
                Days:
              </p>
              <p className="text-black font-semibold text-sm text-right">
                Tue, Wed, Thu, Fri, Sat
              </p>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex flex-wrap justify-between items-center mb-4">
              <p className="text-[rgba(100,100,100,1)] text-sm font-medium">
                Available Today:
              </p>
              <p className="text-gray-800 text-sm font-medium">
                09:00 AM - 05:00 PM
              </p>
            </div>

            <div className="mt-2 space-y-4">
              {[
                { day: "Tuesday", time: "12:30 PM - 02:00 PM" },
                { day: "Wednesday", time: "12:30 PM - 02:00 PM" },
                { day: "Thursday", time: "12:30 PM - 02:00 PM" },
                { day: "Friday", time: "09:00 AM - 05:00 PM" },
                { day: "Saturday", time: "12:30 PM - 02:00 PM" },
              ].map((slot, index) => (
                <div key={index} className="flex flex-wrap justify-between">
                  <p className="text-gray-800 font-semibold text-sm">
                    {slot.day}
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    {slot.time}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="w-full flex items-center justify-center space-x-2 font-inter border border-[rgba(38,118,117,1)] text-[rgba(38,118,117,1)] font-bold py-2 rounded-full hover:bg-green-50 transition">
                <Image
                  src="/ViewProfile/Symbol.svg"
                  alt=""
                  width={33}
                  height={33}
                  className="w-4 h-4 hidden md:block"
                />
                <span>Book Video Consultation</span>
              </button>
            </div>
          </div> */}

          {/* 2nd Form */}
          <div className="bg-white p-6 space-y-4 2xl:w-[400px] rounded-lg shadow-lg border">
            <div className="flex items-center space-x-2">
              <Image
                src="/ViewProfile/Background.svg"
                alt="View Profile"
                width={33}
                height={33}
              />
              <h2 className="text-lg font-semibold text-[rgba(6,104,95,1)]">
                Book your Appointment
              </h2>
            </div>
            {/* <div className="flex flex-col mx-6 justify-center">
              <p className="text-[rgba(100,100,100,1)] text-xs font-medium text- mb-4">
                West Canal Road ,Amin Town ,Near Ideal Bakers and <br /> Kashmir
                Pul, Faisalabad
              </p>
            </div> */}

            <div className="mt-8 flex justify-between">
              <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
                Fees:
              </p>
              <p className="text-black text-sm font-semibold">Rs.2000</p>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
                Days:
              </p>
              <p className="text-black text-sm font-semibold">
                Tue, Wed, Thu, Fri, Sat
              </p>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex flex-wrap justify-between items-center">
              <p className="text-[rgba(100,100,100,1)] text-sm font-semibold">
                Available Today:
              </p>
              <p className="text-gray-800 text-sm font-semibold">
                05:00 PM - 08:00 PM
              </p>
            </div>

            <div className="mt-2 mb- space-y-4">
              {[
                { day: "Tuesday", time: "05:00 PM - 08:00 PM" },
                { day: "Wednesday", time: "05:00 PM - 08:00 PM" },
                { day: "Thursday", time: "05:00 PM - 08:00 PM" },
                { day: "Friday", time: "05:00 PM - 08:00 PM" },
                { day: "Saturday", time: "05:00 PM - 08:00 PM" },
              ].map((slot, index) => (
                <div key={index} className="flex flex-wrap justify-between">
                  <p className="text-gray-800 text-sm font-semibold">
                    {slot.day}
                  </p>
                  <p className="text-gray-800 text-sm font-semibold">
                    {slot.time}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt- text-center">
              <Link href="/bookAppointment">
              <button className="w-full flex items-center justify-center space-x-2 border border-[rgba(255,188,10,1)] text-[rgba(255,188,10,1)] font-bold font-inter py-2 rounded-full hover:bg-green-50 transition">
                <span>Book Appointment</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;