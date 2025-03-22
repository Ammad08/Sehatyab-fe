// "use client"
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// // Define clinic images
// const clinicImages = {
//   rowPattern1: "/Appointment/YellowCam.png",
//   rowPattern2: "/Appointment/Hosp.png",
//   rowPattern3: "/Appointment/YellowCam.png",
//   rowPattern4: "/Appointment/RedCam.png",
// };

// // Define border colors for each doctor ID
// const doctorBorderColors: Record<number, string[]> = {
//   1: ["border-yellow-500", "border-gray-300"],
//   2: ["border-gray-300", "border-yellow-500"],
//   3: ["border-yellow-500", "border-gray-300"],
//   4: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
// };

// // Define doctor data
// const doctors = [
//   {
//     id: 1,
//     name: "Dr. Raman Kumar",
//     image: "/Appointment/BestDoc1.png",
//     reviews: 1424,
//     rating: 5,
//     specialty: "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
//     experience: "N/A",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Dr. Arit Parkash",
//     image: "/Appointment/BestDoc2.png",
//     reviews: 1,
//     rating: 5,
//     specialty: "Pediatric Gastroenterologist",
//     experience: "17 Year(s)",
//     clinics: [
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 3,
//     name: "Assist. Professor Dr. Faisal Zafar",
//     image: "/Appointment/BestDoc3.png",
//     reviews: 14,
//     rating: 5,
//     specialty: "Pediatric Neurologist",
//     experience: "10 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 4,
//     name: "Dr. Naveen Manzoor",
//     image: "/Appointment/BestDoc4.png",
//     reviews: 25,
//     rating: 5,
//     specialty: "General Physician, Internal Medicine",
//     experience: "10 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
//     ],
//   },
// ];

// const DoctorList: React.FC = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [filteredDoctors, setFilteredDoctors] = useState(doctors);

//   useEffect(() => {
//     const filtered = doctors.filter(
//       (doctor) =>
//         doctor.name.toLowerCase().includes(query.toLowerCase()) ||
//         doctor.specialty.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredDoctors(filtered);
//   }, [query]);

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h2 className="text-xl font-bold text-[rgba(24,78,81,1)] mb-4">
//         {filteredDoctors.length > 0
//           ? `Showing results for "${query}"`
//           : `No doctors found for "${query}"`}
//       </h2>
//       {filteredDoctors.map((doctor) => {
//         const clinicBorders = doctorBorderColors[doctor.id] || ["border-gray-300"];
//         return (
//           <div
//             key={doctor.id}
//             className="bg-white shadow-lg rounded-lg p-6 mb-4 border-gray-300"
//           >
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//               <Image
//                 src={doctor.image}
//                 alt={doctor.name}
//                 width={64}
//                 height={64}
//                 className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border"
//               />

//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-[rgba(24,78,81,1)]">
//                   {doctor.name}
//                 </h3>

//                 <div className="flex flex-wrap items-center text-yellow-500 text-sm gap-2">
//                   <div className="flex">
//                     {[...Array(doctor.rating)].map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                   <span className="font-bold text-black">{doctor.reviews} reviews</span>
//                   <div className="inline-flex items-center text-xs bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
//                     <Image src="/Appointment/pmc.png" alt="PMC Verified" width={16} height={16} />
//                     <span className="ml-1">PMC Verified</span>
//                   </div>
//                 </div>

//                 <p className="text-sm text-gray-700">{doctor.specialty}</p>
//                 <p className="text-sm text-black font-semibold">
//                   Experience: {doctor.experience}
//                 </p>
//               </div>

//               <div className="flex flex-col justify-center items-center gap-3 sm:ml-auto mt-2 sm:mt-0">
//                 <Link
//                   href={{
//                     pathname: '/bookAppointment',
//                     query: {
//                       specialization: doctor.specialty,
//                       consultant: doctor.name
//                     }
//                   }}
//                 >
//                   <button className="flex flex-col text-sm font-semibold border text-pink-500 px-5 py-1 border-yellow-400 rounded-full hover:bg-pink-100">
//                     Book Appointment
//                     <span className="text-xs">No Booking Fee</span>
//                   </button>
//                 </Link>
//                 <Link
//                   href={{
//                     pathname: '/viewprofile',
//                     query: {
//                       id: doctor.id,
//                       name: doctor.name,
//                       image: doctor.image,
//                       reviews: doctor.reviews,
//                       rating: doctor.rating,
//                       specialty: doctor.specialty,
//                       experience: doctor.experience
//                     }
//                   }}
//                 >
//                   <button className="text-sm font-semibold border border-[rgba(24,78,81,1)] text-[rgba(24,78,81,1)] px-6 py-2 rounded-full hover:bg-gray-100">
//                     View Profile
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
//               {doctor.clinics.map((clinic, index) => (
//                 <div
//                   key={index}
//                   className={`border p-3 rounded-lg flex flex-col ${clinicBorders[index % clinicBorders.length]}`}
//                 >
//                   <div className="flex gap-1 items-center">
//                     <Image src={clinic.image} alt={`Clinic ${index}`} width={24} height={24} />
//                     <p className="text-xs font-medium text-gray-800 truncate">
//                       {clinic.name}
//                     </p>
//                   </div>
//                   <div className="flex justify-between items-center m-1">
//                     <div className="flex items-center pt-2 gap-1">
//                       <Image src="/Appointment/Globe.png" alt="Globe Icon" width={16} height={16} />
//                       <p className="text-xs text-[rgba(10,199,10,1)]">Available</p>
//                     </div>
//                     <p className="text-xs font-medium text-gray-800">{clinic.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       })}

//       <div className="flex justify-end items-center text-sm font-semibold space-x-4 mt-6">
//         <button className="text-black hover:text-gray-900">PREVIOUS</button>
//         <button className="bg-[rgba(6,104,95,1)] text-white px-3.5 py-1 rounded-full">
//           1
//         </button>
//         <button className="text-black hover:text-gray-900">2</button>
//         <button className="text-black hover:text-gray-900">3</button>
//         <button className="text-black hover:text-gray-900">4</button>
//         <button className="text-[rgba(6,104,95,1)] hover:text-gray-900">NEXT</button>
//       </div>
//     </div>
//   );
// };

// export default DoctorList;

// "use client"
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// // Define interfaces for our data structures
// interface Clinic {
//   name: string;
//   price: string;
//   available: boolean;
//   image: string;
// }

// interface Doctor {
//   id: number;
//   name: string;
//   image: string;
//   reviews: number;
//   rating: number;
//   specialty: string;
//   experience: string;
//   clinics: Clinic[];
// }

// // Define clinic images
// const clinicImages = {
//   rowPattern1: "/Appointment/YellowCam.svg",
//   rowPattern2: "/Appointment/Hosp.svg",
//   rowPattern3: "/Appointment/YellowCam.svg",
//   rowPattern4: "/Appointment/RedCam.svg",
// };

// // Define border colors for each doctor ID
// const doctorBorderColors: Record<number, string[]> = {
//   1: ["border-yellow-500", "border-gray-300"],
//   2: ["border-gray-300", "border-yellow-500"],
//   3: ["border-yellow-500", "border-gray-300"],
//   4: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
//   5: ["border-yellow-500", "border-gray-300"],
//   6: ["border-gray-300", "border-yellow-500"],
//   7: ["border-yellow-500", "border-gray-300"],
//   8: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
//   9: ["border-yellow-500", "border-gray-300"],
//   10: ["border-gray-300", "border-yellow-500"],
//   11: ["border-yellow-500", "border-gray-300"],
//   12: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
// };

// // Define doctor data with explicit type
// const doctors: Doctor[] = [
//   {
//     id: 1,
//     name: "Ms. Sukoon Fatima",
//     image: "/Appointment/BestDoc13.svg",
//     reviews: 1424,
//     rating: 5,
//     specialty: "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
//     experience: "N/A",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Dr. Ali Ajmal",
//     image: "/Appointment/BestDoc14.svg",
//     reviews: 1,
//     rating: 5,
//     specialty: "Pediatric Gastroenterologist",
//     experience: "17 Year(s)",
//     clinics: [
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 3,
//     name: "Assist. Professor Dr. Faisal Zafar",
//     image: "/Appointment/BestDoc3.svg",
//     reviews: 14,
//     rating: 5,
//     specialty: "Pediatric Neurologist",
//     experience: "10 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 4,
//     name: "Dr. Naveen Manzoor",
//     image: "/Appointment/BestDoc4.svg",
//     reviews: 25,
//     rating: 5,
//     specialty: "General Physician, Internal Medicine",
//     experience: "10 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
//     ],
//   },
//   {
//     id: 5,
//     name: "Ms. Maryam Khan",
//     image: "/Appointment/BestDoc5.svg",
//     reviews: 1424,
//     rating: 5,
//     specialty: "Clinical Psychologist",
//     experience: "N/A",
//     clinics: [
//       { name: "Online Clinical Psychologist in Pakistan", price: "Rs. 3000", available: true, image: clinicImages.rowPattern1 },
//       // { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
//     ],
//   },
//   {
//     id: 6,
//     name: "Prof. Dr. Ghulam Rasool",
//     image: "/Appointment/BestDoc6.svg",
//     reviews: 1,
//     rating: 5,
//     specialty: "Psychiatrist",
//     experience: "17 Year(s)",
//     clinics: [
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 7,
//     name: "Ms. Sana Khan",
//     image: "/Appointment/BestDoc7.svg",
//     reviews: 14,
//     rating: 5,
//     specialty: "Clinical Psychologist",
//     experience: "10 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 8,
//     name: "Ms. Kalsoom Yasin",
//     image: "/Appointment/BestDoc8.svg",
//     reviews: 25,
//     rating: 5,
//     specialty: "Clinical Psychologist",
//     experience: "10 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
//     ],
//   },
//   {
//     id: 9,
//     name: "Ms. Sadia Irfan",
//     image: "/Appointment/BestDoc9.svg",
//     reviews: 1424,
//     rating: 5,
//     specialty: "Clinical Psychologist",
//     experience: "N/A",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
//     ],
//   },
//   {
//     id: 10,
//     name: "Mr. Zahid Sohail",
//     image: "/Appointment/BestDoc10.svg",
//     reviews: 1,
//     rating: 5,
//     specialty: "Family Counselor, Relationship Counselor",
//     experience: "17 Year(s)",
//     clinics: [
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 11,
//     name: "Dr. Muhammad Ather",
//     image: "/Appointment/BestDoc11.svg",
//     reviews: 14,
//     rating: 5,
//     specialty: "Psychiatrist",
//     experience: "14 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
//       { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
//     ],
//   },
//   {
//     id: 12,
//     name: "Dr. Qurrat Ulain",
//     image: "/Appointment/BestDoc12.svg",
//     reviews: 25,
//     rating: 5,
//     specialty: "Chief Medical Officer, Psychiatrist",
//     experience: "15 Year(s)",
//     clinics: [
//       { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
//       { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
//     ],
//   },
// ];

// const DoctorList: React.FC = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const doctorsPerPage = 4;

//   useEffect(() => {
//     const filtered = doctors.filter(
//       (doctor: Doctor) =>
//         doctor.name.toLowerCase().includes(query.toLowerCase()) ||
//         doctor.specialty.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredDoctors(filtered);
//     setCurrentPage(1);
//   }, [query]);

//   const indexOfLastDoctor = currentPage * doctorsPerPage;
//   const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
//   const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePageClick = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h2 className="text-xl font-bold text-[rgba(24,78,81,1)] mb-4">
//         {filteredDoctors.length > 0
//           ? `Showing results for "${query}"`
//           : `No doctors found for "${query}"`}
//       </h2>
//       {currentDoctors.map((doctor: Doctor) => {
//         const clinicBorders = doctorBorderColors[doctor.id] || ["border-gray-300"];
//         return (
//           <div
//             key={doctor.id}
//             className="bg-white shadow-lg rounded-lg p-6 mb-4 border-gray-300"
//           >
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//               <Image
//                 src={doctor.image}
//                 alt={doctor.name}
//                 width={64}
//                 height={64}
//                 className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border"
//               />

//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-[rgba(24,78,81,1)]">
//                   {doctor.name}
//                 </h3>

//                 <div className="flex flex-wrap items-center text-yellow-500 text-sm gap-2">
//                   <div className="flex">
//                     {[...Array(doctor.rating)].map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                   <span className="font-bold text-black">{doctor.reviews} reviews</span>
//                   <div className="inline-flex items-center text-xs bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
//                     <Image src="/Appointment/pmc.svg" alt="PMC Verified" width={16} height={16} />
//                     <span className="ml-1">PMC Verified</span>
//                   </div>
//                 </div>

//                 <p className="text-sm text-gray-700">{doctor.specialty}</p>
//                 <p className="text-sm text-black font-semibold">
//                   Experience: {doctor.experience}
//                 </p>
//               </div>

//               <div className="flex flex-col justify-center items-center gap-3 sm:ml-auto mt-2 sm:mt-0">
//                 <Link
//                   href={{
//                     pathname: '/bookAppointment',
//                     query: {
//                       specialization: doctor.specialty,
//                       consultant: doctor.name
//                     }
//                   }}
//                 >
//                   <button className="flex flex-col text-sm font-semibold border text-pink-500 px-5 py-1 border-yellow-400 rounded-full hover:bg-pink-100">
//                     Book Appointment
//                     <span className="text-xs">No Booking Fee</span>
//                   </button>
//                 </Link>
//                 <Link
//                   href={{
//                     pathname: '/viewprofile',
//                     query: {
//                       id: doctor.id,
//                       name: doctor.name,
//                       image: doctor.image,
//                       reviews: doctor.reviews,
//                       rating: doctor.rating,
//                       specialty: doctor.specialty,
//                       experience: doctor.experience
//                     }
//                   }}
//                 >
//                   <button className="text-sm font-semibold border border-[rgba(24,78,81,1)] text-[rgba(24,78,81,1)] px-6 py-2 rounded-full hover:bg-gray-100">
//                     View Profile
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
//               {doctor.clinics.map((clinic: Clinic, index: number) => (
//                 <div
//                   key={index}
//                   className={`border p-3 rounded-lg flex flex-col ${clinicBorders[index % clinicBorders.length]}`}
//                 >
//                   <div className="flex gap-1 items-center">
//                     <Image src={clinic.image} alt={`Clinic ${index}`} width={24} height={24} />
//                     <p className="text-xs font-medium text-gray-800 truncate">
//                       {clinic.name}
//                     </p>
//                   </div>
//                   <div className="flex justify-between items-center m-1">
//                     <div className="flex items-center pt-2 gap-1">
//                       <Image src="/Appointment/Globe.svg" alt="Globe Icon" width={16} height={16} />
//                       <p className="text-xs text-[rgba(10,199,10,1)]">Available</p>
//                     </div>
//                     <p className="text-xs font-medium text-gray-800">{clinic.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div> */}
//           </div>
//         );
//       })}

//       {filteredDoctors.length > 0 && (
//         <div className="flex justify-end items-center text-sm font-semibold space-x-4 mt-6">
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//             className={`${
//               currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black hover:text-gray-900"
//             }`}
//           >
//             PREVIOUS
//           </button>

//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => handlePageClick(index + 1)}
//               className={`${
//                 currentPage === index + 1
//                   ? "bg-[rgba(6,104,95,1)] text-white"
//                   : "text-black hover:text-gray-900"
//               } px-3.5 py-1 rounded-full`}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             onClick={handleNext}
//             disabled={currentPage === totalPages}
//             className={`${
//               currentPage === totalPages
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "text-[rgba(6,104,95,1)] hover:text-gray-900"
//             }`}
//           >
//             NEXT
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorList;

// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// // import { FaStar } from "react-icons/fa";
// // import Image from "next/image";
// // import Link from "next/link";

// // Define interfaces for our data structures
// interface Clinic {
//   name: string;
//   price: string;
//   available: boolean;
//   image: string;
// }

// interface Doctor {
//   id: number;
//   name: string;
//   image: string;
//   reviews: number;
//   rating: number;
//   specialty: string;
//   experience: string;
//   clinics: Clinic[];
// }

// // Define clinic images
// const clinicImages = {
//   rowPattern1: "/Appointment/YellowCam.svg",
//   rowPattern2: "/Appointment/Hosp.svg",
//   rowPattern3: "/Appointment/YellowCam.svg",
//   rowPattern4: "/Appointment/RedCam.svg",
// };

// // Define border colors for each doctor ID
// // const doctorBorderColors: Record<number, string[]> = {
// //   1: ["border-yellow-500", "border-gray-300"],
// //   2: ["border-gray-300", "border-yellow-500"],
// //   3: ["border-yellow-500", "border-gray-300"],
// //   4: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
// //   5: ["border-yellow-500", "border-gray-300"],
// //   6: ["border-gray-300", "border-yellow-500"],
// //   7: ["border-yellow-500", "border-gray-300"],
// //   8: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
// //   9: ["border-yellow-500", "border-gray-300"],
// //   10: ["border-gray-300", "border-yellow-500"],
// //   11: ["border-yellow-500", "border-gray-300"],
// //   12: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
// // };

// // Define doctor data with explicit type (keeping your original doctor data)
// const doctors: Doctor[] = [
//   {
//     id: 1,
//     name: "Ms. Sukoon Fatima",
//     image: "/Appointment/BestDoc13.svg",
//     reviews: 1424,
//     rating: 5,
//     specialty:
//       "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
//     experience: "N/A",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern1,
//       },
//       {
//         name: "Shifam International Clinic (Virtual)",
//         price: "Rs. 5000",
//         available: true,
//         image: clinicImages.rowPattern2,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Dr. Ali Ajmal",
//     image: "/Appointment/BestDoc14.svg",
//     reviews: 1,
//     rating: 5,
//     specialty: "Pediatric Gastroenterologist",
//     experience: "17 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Peads Neurology And Wellness",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern2,
//       },
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern3,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Assist. Professor Dr. Faisal Zafar",
//     image: "/Appointment/BestDoc3.svg",
//     reviews: 14,
//     rating: 5,
//     specialty: "General Neurologist",
//     experience: "10 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern1,
//       },
//       {
//         name: "Azeem Hospital",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern3,
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Ms. Naveen Manzoor",
//     image: "/Appointment/BestDoc4.svg",
//     reviews: 25,
//     rating: 5,
//     specialty: "General Physician, Internal Medicine",
//     experience: "10 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam Virtual Clinic (Import Checking)",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam Peads Neurology And Wellness",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam International Clinic (Virtual)",
//         price: "Rs. 5000",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Ms. Maryam Khan",
//     image: "/Appointment/BestDoc5.svg",
//     reviews: 1424,
//     rating: 5,
//     specialty: "Clinical Psychologist",
//     experience: "N/A",
//     clinics: [
//       {
//         name: "Online Clinical Psychologist in Pakistan",
//         price: "Rs. 3000",
//         available: true,
//         image: clinicImages.rowPattern1,
//       },
//       // { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
//     ],
//   },
//   {
//     id: 6,
//     name: "Prof. Dr. Ghulam Rasool",
//     image: "/Appointment/BestDoc6.svg",
//     reviews: 1,
//     rating: 5,
//     specialty: "Psychiatrist",
//     experience: "17 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Peads Neurology And Wellness",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern2,
//       },
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern3,
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Ms. Sana Khan",
//     image: "/Appointment/BestDoc7.svg",
//     reviews: 14,
//     rating: 5,
//     specialty: "General Psychologist",
//     experience: "10 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern1,
//       },
//       {
//         name: "Azeem Hospital",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern3,
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Ms. Kalsoom Yasin",
//     image: "/Appointment/BestDoc8.svg",
//     reviews: 25,
//     rating: 5,
//     specialty: "Clinical Psychologist",
//     experience: "10 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam Virtual Clinic (Import Checking)",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam Peads Neurology And Wellness",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam International Clinic (Virtual)",
//         price: "Rs. 5000",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Ms. Sadia Irfan",
//     image: "/Appointment/BestDoc9.svg",
//     reviews: 1424,
//     rating: 5,
//     specialty: "general Psychologist",
//     experience: "N/A",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern1,
//       },
//       {
//         name: "Shifam International Clinic (Virtual)",
//         price: "Rs. 5000",
//         available: true,
//         image: clinicImages.rowPattern2,
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: "Mr. Zahid Sohail",
//     image: "/Appointment/BestDoc10.svg",
//     reviews: 1,
//     rating: 5,
//     specialty: "Family Counselor, Relationship Counselor",
//     experience: "17 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Peads Neurology And Wellness",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern2,
//       },
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern3,
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: "Dr. Muhammad Ather",
//     image: "/Appointment/BestDoc11.svg",
//     reviews: 14,
//     rating: 5,
//     specialty: "General  Psychiatrist",
//     experience: "14 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern1,
//       },
//       {
//         name: "Azeem Hospital",
//         price: "Rs. 2000",
//         available: true,
//         image: clinicImages.rowPattern3,
//       },
//     ],
//   },
//   {
//     id: 12,
//     name: "Ms. Qurrat Ulain",
//     image: "/Appointment/BestDoc12.svg",
//     reviews: 25,
//     rating: 5,
//     specialty: "Chief Medical Officer, Psychiatrist",
//     experience: "15 Year(s)",
//     clinics: [
//       {
//         name: "Shifam Virtual Clinic",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam Virtual Clinic (Import Checking)",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam Peads Neurology And Wellness",
//         price: "Rs. 2500",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//       {
//         name: "Shifam International Clinic (Virtual)",
//         price: "Rs. 5000",
//         available: true,
//         image: clinicImages.rowPattern4,
//       },
//     ],
//   },
// ];

// const DoctorList: React.FC = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const doctorsPerPage = 4;

//   // Search bar filters state
//   const [filters, setFilters] = useState({
//     consultantType: "",
//     speciality: "",
//     gender: "",
//     price: "",
//   });

//   // Handle filter changes
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//     setCurrentPage(1); // Reset to first page when filters change
//   };

//   // Filter doctors based on search query and filters
//   useEffect(() => {
//     let filtered = [...doctors];

//     // Apply search query filter
//     if (query) {
//       filtered = filtered.filter(
//         (doctor: Doctor) =>
//           doctor.name.toLowerCase().includes(query.toLowerCase()) ||
//           doctor.specialty.toLowerCase().includes(query.toLowerCase())
//       );
//     }

//     // Apply consultant type filter
//     if (filters.consultantType) {
//       filtered = filtered.filter((doctor) => {
//         if (filters.consultantType === "general") {
//           return doctor.specialty.includes("General");
//         }
//         if (filters.consultantType === "specialist") {
//           return !doctor.specialty.includes("General");
//         }
//         return true;
//       });
//     }

//     // Apply specialty filter
//     if (filters.speciality) {
//       filtered = filtered.filter((doctor) =>
//         doctor.specialty
//           .toLowerCase()
//           .includes(filters.speciality.toLowerCase())
//       );
//     }

//     // Apply gender filter
//     if (filters.gender) {
//       filtered = filtered.filter((doctor) => {
//         const prefix = doctor.name.split(" ")[0].toLowerCase();
//         if (filters.gender === "male") {
//           return prefix === "mr." || prefix === "dr.";
//         }
//         if (filters.gender === "female") {
//           return prefix === "ms." || prefix === "mrs.";
//         }
//         return true;
//       });
//     }

//     // Apply price filter
//     if (filters.price) {
//       filtered = filtered.filter((doctor) => {
//         const minPrice = Math.min(
//           ...doctor.clinics.map((clinic) =>
//             parseInt(clinic.price.replace("Rs. ", ""))
//           )
//         );
//         if (filters.price === "low") return minPrice <= 2000;
//         if (filters.price === "medium")
//           return minPrice > 2000 && minPrice <= 3000;
//         if (filters.price === "high") return minPrice > 3000;
//         return true;
//       });
//     }

//     setFilteredDoctors(filtered);
//   }, [query, filters]);

//   // const indexOfLastDoctor = currentPage * doctorsPerPage;
//   // const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   // const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
//   const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePageClick = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Integrated ConsultantSearchBar */}
//       <section className="bg-gradient-to-r from-[rgba(255,255,255,0.5)] via-[rgba(29,166,120,0.15)] to-[rgba(255,255,255,0.5)] w-full py-6 px-4 mb-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-semibold gap-2 sm:gap-4 px-4 sm:px-6">
//           <select
//             name="consultantType"
//             value={filters.consultantType}
//             onChange={handleChange}
//             className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
//           >
//             <option value="">Consultant Type</option>
//             <option value="general">General</option>
//             <option value="specialist">Specialist</option>
//           </select>

//           <select
//             name="speciality"
//             value={filters.speciality}
//             onChange={handleChange}
//             className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
//           >
//             <option value="">Speciality</option>
//             {/* <option value="cardiology">Cardiology</option>
//             <option value="neurology">Neurology</option> */}
//             <option value="psychiatrist">Psychiatrist</option>
//             <option value="psychologist">Psychologist</option>
//             <option value="pediatric">Pediatric</option>
//           </select>

//           <select
//             name="gender"
//             value={filters.gender}
//             onChange={handleChange}
//             className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
//           >
//             <option value="">Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>

//           <select
//             name="price"
//             value={filters.price}
//             onChange={handleChange}
//             className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
//           >
//             <option value="">Price</option>
//             <option value="low">Low (≤ Rs. 2000)</option>
//             <option value="medium">Medium (Rs. 2000-3000)</option>
//             {/* <option value="high">High ( Rs. 3000+)</option> */}
//           </select>
//         </div>
//       </section>

//       <h2 className="text-xl font-bold text-[rgba(24,78,81,1)] mb-4">
//         {filteredDoctors.length > 0
//           ? `Showing ${filteredDoctors.length} doctors${
//               query ? ` for "${query}"` : ""
//             }`
//           : `No doctors found${query ? ` for "${query}"` : ""}`}
//       </h2>

//       {/* 


//       {currentDoctors.map((doctor: Doctor) => {
//         const clinicBorders = doctorBorderColors[doctor.id] || ["border-gray-300"];
//         return (
//           <div
//             key={doctor.id}
//             className="bg-white shadow-lg rounded-lg p-6 mb-4 border-gray-300"
//           >
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//               <Image
//                 src={doctor.image}
//                 alt={doctor.name}
//                 width={64}
//                 height={64}
//                 className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border"
//               />

//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-[rgba(24,78,81,1)]">
//                   {doctor.name}
//                 </h3>

//                 <div className="flex flex-wrap items-center text-yellow-500 text-sm gap-2">
//                   <div className="flex">
//                     {[...Array(doctor.rating)].map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                   <span className="font-bold text-black">{doctor.reviews} reviews</span>
//                   <div className="inline-flex items-center text-xs bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
//                     <Image src="/Appointment/pmc.svg" alt="PMC Verified" width={16} height={16} />
//                     <span className="ml-1">PMC Verified</span>
//                   </div>
//                 </div>

//                 <p className="text-sm text-gray-700">{doctor.specialty}</p>
//                 <p className="text-sm text-black font-semibold">
//                   Experience: {doctor.experience}
//                 </p>
//               </div>

//               <div className="flex flex-col justify-center items-center gap-3 sm:ml-auto mt-2 sm:mt-0">
//                 <Link 
//                   href={{
//                     pathname: '/bookAppointment',
//                     query: {
//                       specialization: doctor.specialty,
//                       consultant: doctor.name
//                     }
//                   }}
//                 >
//                   <button className="flex flex-col text-sm font-semibold border text-pink-500 px-5 py-1 border-yellow-400 rounded-full hover:bg-pink-100">
//                     Book Appointment
//                     <span className="text-xs">No Booking Fee</span>
//                   </button>
//                 </Link>
//                 <Link 
//                   href={{
//                     pathname: '/viewprofile',
//                     query: {
//                       id: doctor.id,
//                       name: doctor.name,
//                       image: doctor.image,
//                       reviews: doctor.reviews,
//                       rating: doctor.rating,
//                       specialty: doctor.specialty,
//                       experience: doctor.experience
//                     }
//                   }}
//                 >
//                   <button className="text-sm font-semibold border border-[rgba(24,78,81,1)] text-[rgba(24,78,81,1)] px-6 py-2 rounded-full hover:bg-gray-100">
//                     View Profile
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         );
//       })} */}

//       {filteredDoctors.length > 0 && (
//         <div className="flex justify-end items-center text-sm font-semibold space-x-4 mt-6">
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//             className={`${
//               currentPage === 1
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "text-black hover:text-gray-900"
//             }`}
//           >
//             PREVIOUS
//           </button>

//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => handlePageClick(index + 1)}
//               className={`${
//                 currentPage === index + 1
//                   ? "bg-[rgba(6,104,95,1)] text-white"
//                   : "text-black hover:text-gray-900"
//               } px-3.5 py-1 rounded-full`}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             onClick={handleNext}
//             disabled={currentPage === totalPages}
//             className={`${
//               currentPage === totalPages
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "text-[rgba(6,104,95,1)] hover:text-gray-900"
//             }`}
//           >
//             NEXT
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorList;



"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define interfaces for our data structures
interface Clinic {
  name: string;
  price: string;
  available: boolean;
  image: string;
}

interface Doctor {
  id: number;
  name: string;
  image: string;
  reviews: number;
  rating: number;
  specialty: string;
  experience: string;
  clinics: Clinic[];
}

// Define clinic images
const clinicImages = {
  rowPattern1: "/Appointment/YellowCam.svg",
  rowPattern2: "/Appointment/Hosp.svg",
  rowPattern3: "/Appointment/YellowCam.svg",
  rowPattern4: "/Appointment/RedCam.svg",
};

// Define border colors for each doctor ID
// const doctorBorderColors: Record<number, string[]> = {
//   1: ["border-yellow-500", "border-gray-300"],
//   2: ["border-gray-300", "border-yellow-500"],
//   3: ["border-yellow-500", "border-gray-300"],
//   4: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
//   5: ["border-yellow-500", "border-gray-300"],
//   6: ["border-gray-300", "border-yellow-500"],
//   7: ["border-yellow-500", "border-gray-300"],
//   8: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
//   9: ["border-yellow-500", "border-gray-300"],
//   10: ["border-gray-300", "border-yellow-500"],
//   11: ["border-yellow-500", "border-gray-300"],
//   12: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
// };

// Define doctor data with explicit type
const doctors: Doctor[] = [
  {
    id: 1,
    name: "Ms. Sukoon Fatima",
    image: "/Appointment/BestDoc13.svg",
    reviews: 1424,
    rating: 5,
    specialty: "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
    experience: "N/A",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
    ],
  },
  {
    id: 2,
    name: "Dr. Ali Ajmal",
    image: "/Appointment/BestDoc14.svg",
    reviews: 1,
    rating: 5,
    specialty: "Pediatric Gastroenterologist",
    experience: "17 Year(s)",
    clinics: [
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 3,
    name: "Assist. Professor Dr. Faisal Zafar",
    image: "/Appointment/BestDoc3.svg",
    reviews: 14,
    rating: 5,
    specialty: "General Neurologist",
    experience: "10 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 4,
    name: "Ms. Naveen Manzoor",
    image: "/Appointment/BestDoc4.svg",
    reviews: 25,
    rating: 5,
    specialty: "General Physician, Internal Medicine",
    experience: "10 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
    ],
  },
  {
    id: 5,
    name: "Ms. Maryam Khan",
    image: "/Appointment/BestDoc5.svg",
    reviews: 1424,
    rating: 5,
    specialty: "Clinical Psychologist",
    experience: "N/A",
    clinics: [
      { name: "Online Clinical Psychologist in Pakistan", price: "Rs. 3000", available: true, image: clinicImages.rowPattern1 },
    ],
  },
  {
    id: 6,
    name: "Prof. Dr. Ghulam Rasool",
    image: "/Appointment/BestDoc6.svg",
    reviews: 1,
    rating: 5,
    specialty: "Psychiatrist",
    experience: "17 Year(s)",
    clinics: [
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 7,
    name: "Ms. Sana Khan",
    image: "/Appointment/BestDoc7.svg",
    reviews: 14,
    rating: 5,
    specialty: "General Psychologist",
    experience: "10 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 8,
    name: "Ms. Kalsoom Yasin",
    image: "/Appointment/BestDoc8.svg",
    reviews: 25,
    rating: 5,
    specialty: "Clinical Psychologist",
    experience: "10 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
    ],
  },
  {
    id: 9,
    name: "Ms. Sadia Irfan",
    image: "/Appointment/BestDoc9.svg",
    reviews: 1424,
    rating: 5,
    specialty: "general Psychologist",
    experience: "N/A",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
    ],
  },
  {
    id: 10,
    name: "Mr. Zahid Sohail",
    image: "/Appointment/BestDoc10.svg",
    reviews: 1,
    rating: 5,
    specialty: "Family Counselor, Relationship Counselor",
    experience: "17 Year(s)",
    clinics: [
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 11,
    name: "Dr. Muhammad Ather",
    image: "/Appointment/BestDoc11.svg",
    reviews: 14,
    rating: 5,
    specialty: "General Psychiatrist",
    experience: "14 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 12,
    name: "Ms. Qurrat Ulain",
    image: "/Appointment/BestDoc12.svg",
    reviews: 25,
    rating: 5,
    specialty: "Chief Medical Officer, Psychiatrist",
    experience: "15 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
    ],
  },
];

const DoctorList: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const doctorsPerPage = 4;
  const [isMounted, setIsMounted] = useState(false); // Track client-side mounting

  // Search bar filters state
  const [filters, setFilters] = useState({
    consultantType: "",
    speciality: "",
    gender: "",
    price: "",
  });

  // Ensure component is mounted before setting initial state
  useEffect(() => {
    setIsMounted(true);
    setFilteredDoctors(doctors); // Initialize with all doctors on client-side mount
  }, []);

  // Handle filter changes
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Filter doctors based on search query and filters
  useEffect(() => {
    if (!isMounted) return; // Skip until mounted

    let filtered = [...doctors];

    // Apply search query filter
    if (query) {
      filtered = filtered.filter(
        (doctor: Doctor) =>
          doctor.name.toLowerCase().includes(query.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply consultant type filter
    if (filters.consultantType) {
      filtered = filtered.filter((doctor) => {
        if (filters.consultantType === "general") {
          return doctor.specialty.toLowerCase().includes("general");
        }
        if (filters.consultantType === "specialist") {
          return !doctor.specialty.toLowerCase().includes("general");
        }
        return true;
      });
    }

    // Apply specialty filter
    if (filters.speciality) {
      filtered = filtered.filter((doctor) =>
        doctor.specialty.toLowerCase().includes(filters.speciality.toLowerCase())
      );
    }

    // Apply gender filter
    if (filters.gender) {
      filtered = filtered.filter((doctor) => {
        const prefix = doctor.name.split(" ")[0].toLowerCase();
        if (filters.gender === "male") {
          return prefix === "mr." || prefix === "dr.";
        }
        if (filters.gender === "female") {
          return prefix === "ms." || prefix === "mrs.";
        }
        return true;
      });
    }

    // Apply price filter
    if (filters.price) {
      filtered = filtered.filter((doctor) => {
        const minPrice = Math.min(
          ...doctor.clinics.map((clinic) => parseInt(clinic.price.replace("Rs. ", "")))
        );
        if (filters.price === "low") return minPrice <= 2000;
        if (filters.price === "medium") return minPrice > 2000 && minPrice <= 3000;
        return true; // No "high" filter as per your latest code
      });
    }

    setFilteredDoctors(filtered);
  }, [query, filters, isMounted]);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Only render after mounting to avoid hydration mismatch
  if (!isMounted) {
    return null; // Or a loading placeholder if preferred
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Integrated ConsultantSearchBar */}
      <section className="bg-gradient-to-r from-[rgba(255,255,255,0.5)] via-[rgba(29,166,120,0.15)] to-[rgba(255,255,255,0.5)] w-full py-6 px-4 mb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-semibold gap-2 sm:gap-4 px-4 sm:px-6">
          <select
            name="consultantType"
            value={filters.consultantType}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Consultant Type</option>
            <option value="general">General</option>
            <option value="specialist">Specialist</option>
          </select>

          <select
            name="speciality"
            value={filters.speciality}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Speciality</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="psychologist">Psychologist</option>
            <option value="pediatric">Pediatric</option>
          </select>

          <select
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            name="price"
            value={filters.price}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Price</option>
            <option value="low">Low (≤ Rs. 2000)</option>
            <option value="medium">Medium (Rs. 2000-3000)</option>
          </select>
        </div>
      </section>

      <h2 className="text-xl font-bold text-[rgba(24,78,81,1)] mb-4">
        {filteredDoctors.length > 0
          ? `Showing ${filteredDoctors.length} doctors${query ? ` for "${query}"` : ""}`
          : `No doctors found${query ? ` for "${query}"` : ""}`}
      </h2>

      {currentDoctors.map((doctor: Doctor) => {
        // const clinicBorders = doctorBorderColors[doctor.id] || ["border-gray-300"];
        return (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 border-gray-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[rgba(24,78,81,1)]">
                  {doctor.name}
                </h3>

                <div className="flex flex-wrap items-center text-yellow-500 text-sm gap-2">
                  <div className="flex">
                    {[...Array(doctor.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="font-bold text-black">{doctor.reviews} reviews</span>
                  <div className="inline-flex items-center text-xs bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
                    <Image src="/Appointment/pmc.svg" alt="PMC Verified" width={16} height={16} />
                    <span className="ml-1">PMC Verified</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700">{doctor.specialty}</p>
                <p className="text-sm text-black font-semibold">
                  Experience: {doctor.experience}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3 sm:ml-auto mt-2 sm:mt-0">
                <Link
                  href={{
                    pathname: "/bookAppointment",
                    query: {
                      specialization: doctor.specialty,
                      consultant: doctor.name,
                    },
                  }}
                >
                  <button className="flex flex-col text-sm font-semibold border text-pink-500 px-5 py-1 border-yellow-400 rounded-full hover:bg-pink-100">
                    Book Appointment
                    <span className="text-xs">No Booking Fee</span>
                  </button>
                </Link>
                <Link
                  href={{
                    pathname: "/viewprofile",
                    query: {
                      id: doctor.id,
                      name: doctor.name,
                      image: doctor.image,
                      reviews: doctor.reviews,
                      rating: doctor.rating,
                      specialty: doctor.specialty,
                      experience: doctor.experience,
                    },
                  }}
                >
                  <button className="text-sm font-semibold border border-[rgba(24,78,81,1)] text-[rgba(24,78,81,1)] px-6 py-2 rounded-full hover:bg-gray-100">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {filteredDoctors.length > 0 && (
        <div className="flex justify-end items-center text-sm font-semibold space-x-4 mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black hover:text-gray-900"
            }`}
          >
            PREVIOUS
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-[rgba(6,104,95,1)] text-white"
                  : "text-black hover:text-gray-900"
              } px-3.5 py-1 rounded-full`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-[rgba(6,104,95,1)] hover:text-gray-900"
            }`}
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorList;