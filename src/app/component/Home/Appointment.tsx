// import Image from "next/image";
// import Link from "next/link";


// const Appointment = () => {
//   return (
//     <div className="h-full flex items-center justify-center bg-[rgba(29,166,120,1)] px-4 ">
//       <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-20 relative">
//         {/* Left Side - Appointment Form */}
//         <div className="w-full lg:w-[60%] py-6 lg:py-10">
//           <h2 className="text-[#ffff] font-semibold text-sm uppercase tracking-wider font-commissioner">
//             Appointment
//           </h2>
//           <h1 className="xl:text-4xl lg:text-3xl text-2xl font-poppins font-bold text-gray-50 mt-2">
//             Schedule Your Care with Our Certified Experts
//           </h1>
//           <form className="mt-6 space-y-6 bg-white p-6 lg:p-10 rounded-xl w-full lg:w-[83%]">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//                 {/* <FaUser className="text-gray-500" /> */}
//                 <img src="/Home/name.png" alt="" width={20} height={20} />
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full outline-none placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//                 {/* <FaEnvelope className="text-[rgba(29,166,120,1)]" /> */}
//                 {/* <img src="/Home/email.png" alt="" /> */}
//                 <img src="/Home/email.png" alt="" width={20} height={20} />

//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full outline-none placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//                 {/* <FaPhone className="text-gray-500" />
//                  */}
//                 {/* <img src="/Home/phone.png" alt="" /> */}
//                 <img src="/Home/phone.png" alt="" width={20} height={20} />

//                 <input
//                   type="tel"
//                   placeholder="Telephone"
//                   className="w-full outline-none placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//                 {/* <FaCalendarAlt className="text-gray-500" /> */}
//                 {/* <img src="/Home/number.png" alt="" /> */}
//                 <img src="/Home/number.png" alt="" width={20} height={20} />

//                 <input
//                   type="number"
//                   placeholder="Age"
//                   className="w-full outline-none placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//                 {/* <FaCalendarAlt className="text-gray-500" /> */}
//                 {/* <img src="/Home/date.png" alt="" /> */}
//                 <img src="/Home/date.png" alt="" width={20} height={20} />

//                 <input
//                   type="date"
//                   className="w-full outline-none text-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//                 {/* <FaVenusMars className="text-gray-500" /> */}
//                 {/* <img src="/Home/gender.png" alt="" /> */}
//                 <img src="/Home/gender.png" alt="" width={20} height={20} />

//                 <select
//                   className="w-full outline-none bg-transparent text-gray-400"
//                   required
//                 >
//                   <option value="">Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//               {/* <FaClipboardList className="text-gray-500" /> */}
//               {/* <img src="/Home/services.png" alt="" /> */}
//               <img src="/Home/services.png" alt="" width={20} height={20} />

//               <select
//                 className="w-full outline-none bg-transparent text-gray-400"
//                 required
//               >
//                 <option value="">Services</option>
//                 <option value="General Consultation">Cardiology</option>
//                 <option value="Dental Checkup">Neurology</option>
//                 <option value="Dermatology">Dermatology</option>
//                 <option value="Skin Care">Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist</option>
//                 <option value="Pediatric Gastroenterologist">Pediatric Gastroenterologist</option>
//                 <option value="Pediatric Gastroenterologist">Pediatric Gastroenterologist</option>
//                 <option value="General Physician, Internal Medicine">General Physician, Internal Medicine</option>

//               </select>
//             </div>
//             <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
//               {/* <FaClipboardList className="text-gray-500" /> */}
//               {/* <img src="/Home/message.png" alt="" className="mb-6" /> */}
//               <img src="/Home/message.png" alt="" width={20} height={20} className="mb-6" />

//               <textarea
//                 placeholder="Message"
//                 className="w-full outline-none placeholder-gray-400"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#1DA678] text-white p-3 rounded-full font-semibold hover:bg-[#238A56] transition-all"
//             >
//               Make Appointment
//             </button>
//           </form>
//         </div>

//         {/* Center - Doctor Image */}
//         <div className="hidden lg:flex justify-start  items-end w-[35%] xl:w-1/2 absolute bottom-0 right-48 xl:right-12">
//           <Image
//             src="/Home/Doctor.png"
//             alt="Doctor"
//             width={400}
//             height={400}
//             className="object-contain"
//           />
//         </div>

//         {/* Right Side - Work Hours */}
//         <div className="xl:absolute font-poppins lg:right-0 lg:top-14 lg:mt-4 my-4 lg:my-0  h-fit bg-gray-100 p-6 rounded-lg shadow-md text-gray-800 w-full lg:max-w-xs">
//           <h3 className="text-lg font-semibold">Work Hours</h3>
//           <p className="text-sm py-2 text-gray-600">
//             We are open during these hours
//           </p>
//           <ul className="space-y-2 mt-2 text-sm">
//             {[
//               { day: "Monday", hours: "9AM - 5PM" },
//               { day: "Tuesday", hours: "9AM - 5PM" },
//               { day: "Wednesday", hours: "9AM - 5PM" },
//               { day: "Thursday", hours: "9AM - 5PM" },
//               { day: "Friday", hours: "9AM - 5PM" },
//               { day: "Saturday", hours: "1PM - 8PM" },
//               { day: "Sunday", hours: "10AM - 4PM" },
//             ].map(({ day, hours }, index) => (
//               <li key={index} className="flex justify-between">
//                 <span>{day}</span>
//                 <span>{hours}</span>
//               </li>
//             ))}
//             <li className="flex justify-start font-normal text-gray-900 mt-2">
//               24*7 Emergency Care Open
//             </li>
//           </ul>
//           <Link href="/contact">
//           <button className="w-full bg-[#1DA678] text-white p-3 rounded-full font-semibold hover:bg-[#238A56] mt-4 transition-all">
//             Contact Us
//           </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    specialization: "",
    consultant: "",
    dateOfAppointment: "",
    email: "",
    phone: "",
    additionalComments: "",
    service: "Psychiatric Consultation", // Matches previous API integration
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/appointment/create`;
      ;
      if (!apiUrl) {
        throw new Error("Contact API URL is not defined in environment variables");
      }
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }

      const result = await response.json();
      console.log("Appointment booked:", result);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        fullName: "",
        specialization: "",
        consultant: "",
        dateOfAppointment: "",
        email: "",
        phone: "",
        additionalComments: "",
        service: "Psychiatric Consultation",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const specializations = [
    "Cardiology",
    "Neurology",
    "Dermatology",
    "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
    "Pediatric Gastroenterologist",
    "Pediatric Neurologist",
    "General Physician, Internal Medicine",
    "Clinical Psychologist",
    "Psychiatrist",
    "Family Counselor, Relationship Counselor",
    "Chief Medical Officer, Psychiatrist",
  ];

  const consultants = [
    "Dr. Raman Kumar",
    "Dr. Arit Parkash",
    "Assist. Professor Dr. Faisal Zafar",
    "Dr. Naveen Manzoor",
    "Ms. Maryam Khan",
    "Prof. Dr. Ghulam Rasool",
    "Ms. Sana Khan",
    "Ms. Kalsoom Yasin",
    "Ms. Sadia Irfan",
    "Mr. Zahid Sohail",
    "Dr. Muhammad Ather",
    "Dr. Qurrat Ulain",
  ];

  return (
    <div className="h-full flex items-center justify-center bg-[rgba(29,166,120,1)] px-4">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-20 relative">
        {/* Left Side - Appointment Form */}
        <div className="w-full lg:w-[60%] py-6 lg:py-10">
          <h2 className="text-[#ffff] font-semibold text-sm uppercase tracking-wider font-commissioner">
            Appointment
          </h2>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-poppins font-bold text-gray-50 mt-2">
            Schedule Your Care with Our Certified Experts
          </h1>

          {success && (
            <div className="bg-green-400 text-white text-center py-2 rounded-md mt-4">
              Appointment booked successfully!
            </div>
          )}
          {error && (
            <div className="bg-red-400 text-white text-center py-2 rounded-md mt-4">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-6 bg-white p-6 lg:p-10 rounded-xl w-full lg:w-[83%]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                <Image src="/Home/name.svg" alt="Name" width={20} height={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                <Image src="/Home/email.svg" alt="Email" width={20} height={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                <Image src="/Home/phone.svg" alt="Phone" width={20} height={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                <Image src="/Home/date.svg" alt="Date" width={20} height={20} />
                <input
                  type="date"
                  name="dateOfAppointment"
                  value={formData.dateOfAppointment}
                  onChange={handleChange}
                  className="w-full outline-none text-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                <Image src="/Home/services.svg" alt="Specialization" width={20} height={20} />
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-gray-400"
                  required
                >
                  <option value="">Select Specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                <Image src="/Home/services.svg" alt="Consultant" width={20} height={20} />
                <select
                  name="consultant"
                  value={formData.consultant}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-gray-400"
                  required
                >
                  <option value="">Select Consultant</option>
                  {consultants.map((cons) => (
                    <option key={cons} value={cons}>
                      {cons}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
              <Image src="/Home/message.svg" alt="Comments" width={20} height={20} className="mb-12" />
              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                placeholder="Additional Comments"
                className="w-full outline-none placeholder-gray-400"
                rows={3}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#1DA678] text-white p-3 rounded-full font-semibold hover:bg-[#238A56] transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Make Appointment"}
            </button>
          </form>
        </div>

        {/* Center - Doctor Image */}
        <div className="hidden lg:flex justify-start items-end w-[35%] xl:w-1/2 absolute bottom-0 right-48 xl:right-12">
          <Image
            src="/Home/Doctor.svg"
            alt="Doctor"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Side - Work Hours */}
        <div className="xl:absolute font-poppins lg:right-0 lg:top-14 lg:mt-4 my-4 lg:my-0 h-fit bg-gray-100 p-6 rounded-lg shadow-md text-gray-800 w-full lg:max-w-xs">
          <h3 className="text-lg font-semibold">Work Hours</h3>
          <p className="text-sm py-2 text-gray-600">
            We are open during these hours
          </p>
          <ul className="space-y-2 mt-2 text-sm">
            {[
              { day: "Monday", hours: "9AM - 5PM" },
              { day: "Tuesday", hours: "9AM - 5PM" },
              { day: "Wednesday", hours: "9AM - 5PM" },
              { day: "Thursday", hours: "9AM - 5PM" },
              { day: "Friday", hours: "9AM - 5PM" },
              { day: "Saturday", hours: "1PM - 8PM" },
              { day: "Sunday", hours: "10AM - 4PM" },
            ].map(({ day, hours }, index) => (
              <li key={index} className="flex justify-between">
                <span>{day}</span>
                <span>{hours}</span>
              </li>
            ))}
            <li className="flex justify-start font-normal text-gray-900 mt-2">
              24*7 Emergency Care Open
            </li>
          </ul>
          <Link href="/contact">
            <button className="w-full bg-[#1DA678] text-white p-3 rounded-full font-semibold hover:bg-[#238A56] mt-4 transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;