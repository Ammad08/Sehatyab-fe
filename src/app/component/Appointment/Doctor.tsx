"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/appointment?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <div className="py-10 bg-white font-inter">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-2 text-gray-500 text-sm font-semibold flex space-x-2">
        <Link href="/" className="hover:text-[rgba(24,77,81,1)]">
          HOME
        </Link>
        <span className="font-bold">{">"}</span>
        <Link href="/doctors" className="hover:text-[rgba(24,77,81,1)]">
          DOCTORS
        </Link>
        <span className="font-bold">{">"}</span>
        <span className="text-[rgba(24,77,81,1)] font-semibold">PAKISTAN</span>
      </div>

      {/* Header Section */}
      <div className="text-center mt-4 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[rgba(6,104,95,1)]">
          Book an Appointment for the Best Doctors in Pakistan
        </h1>
        <p className=" mt-2 max-w-6xl mx-auto text-[rgba(33,37,41,1)] text-sm px-4">
          Effortlessly book your doctor’s appointment from our list of doctors
          in Pakistan using Shifaam’s online appointment booking feature. This
          allows you to book an appointment with your doctor to either see them
          physically at one of the best hospitals in Pakistan or consult online
          at Shifaam Virtual Clinic without the hassle of leaving your home.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mt-6 p-2 sm:p-4 rounded-full w-full">
        <div className="bg-white shadow-md rounded-full flex flex-col sm:flex-row items-center border border-gray-300 w-full">
          {/* Location Icon + Dropdown */}
          <div className="flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-300 w-full sm:w-auto justify-center sm:justify-start">
            <FaMapMarkerAlt className="text-[rgba(29,166,120,1)] text-lg" />
            <div className="text-gray-700 pl-1">Pakistan</div>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Speciality, Doctor’s name, Clinic, Hospital"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:flex-1 px-4 py-2 outline-none text-gray-700 bg-transparent text-center sm:text-left"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-[rgba(29,166,120,1)] font-semibold text-white px-6 py-2 rounded-b-full sm:rounded-r-full sm:rounded-bl-none flex items-center justify-center w-full sm:w-auto hover:bg-green-600"
          >
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
