// pages/our-consultants.tsx
import Image from "next/image";
import Link from "next/link";

const consultants = [
  {
    name: "Dr. Ali Ajmal",
    specialty: "Neurologist",
    image: "/Appointment/BestDoc14.svg",
  },
  {
    name: "Prof Dr. Ghulam Rasool",
    specialty: "Dermatologist",
    image: "/Appointment/BestDoc6.svg",
  },
  {
    name: "Dr. Naveen Manzoor",
    specialty: "Dental Specialist",
    image: "/Appointment/BestDoc7.svg",
  },
  {
    name: "Assist. Professor Dr. Faisal Zafar",
    specialty: "Pediatric Neurologist",
    image: "/Appointment/BestDoc11.svg",
  },
];

export default function OurConsultants() {
  return (
    <div className="h-full py-10 bg-gray-100 flex flex-col justify-center items-center ">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className=" flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="lg:w-2/3 md:w-1/2 ">
            <h5 className="text-[#FFBC0A] font-semibold text-xs font-commissioner uppercase tracking-widest">
              Our Consultants
            </h5>
            <h2 className="text-2xl font-commissioner md:text-3xl xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug">
            Your Health in the Hands of Trusted Experts
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 text-left">
            <p className="text-black text-justify mb-4 sm:mb-6 text-sm sm:text-base">
              Experienced healthcare professionals providing expert guidance.
              Our team ensures personalized care, innovative solutions, and
              holistic wellness support.
            </p>
            <Link href="/appointment">
              <button className="bg-[rgba(255,188,10,1)] text-md font-semibold text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
                View More Doctors
              </button>
            </Link>
          </div>
        </div>

        {/* Consultants Grid */}
        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-6">
          {consultants.map((consultant, index) => (
            <div
              key={index}
              className="relative bg-[rgba(217,207,223,1)] rounded-xl shadow-lg overflow-hidden h-72 sm:h-80"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={consultant.image}
                  alt={consultant.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Social Links */}
              {/* <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                <a
                  href="#"
                  className="bg-[rgba(29,166,120,1)] text-white p-2 rounded-full hover:bg-[#047857] transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-[rgba(29,166,120,1)] text-white p-2 rounded-full hover:bg-[#047857] transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="bg-[rgba(29,166,120,1)] text-white p-2 rounded-full hover:bg-[#047857] transition"
                >
                  <FaLinkedinIn />
                </a>
              </div> */}

              {/* Content Positioned at Bottom */}
              <div className="absolute m-3 bottom-0 left-0 right-0 p-3 sm:p-4 bg-[rgba(29,166,120,0.9)] text-white rounded-xl">
                <h3 className="text-sm sm:text-lg font-bold">
                  {consultant.name}
                </h3>
                <p className="text-xs sm:text-sm">{consultant.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
