"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1DA678] px-6 xl:px-20 flex items-center z-50 justify-between shadow-lg relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/Home/Logo.png" alt="Logo" width={100} height={100} priority />
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex items-center space-x-8 text-white font-semibold lg:text-xs xl:text-sm">
        <li>
          <Link href="/" className="hover:text-gray-200 transition duration-300">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-200 transition duration-300">
            ABOUT US
          </Link>
        </li>
        <li className="relative group">
          <button className="hover:text-gray-200 transition duration-300">
            OUR SERVICES +
          </button>
        </li>
        <li>
          <Link href="/appointment" className="hover:text-gray-200 transition duration-300">
            BOOK APPOINTMENT
          </Link>
        </li>
        <li className="relative group">
          <button className="hover:text-gray-200 transition duration-300">
            RESOURCES +
          </button>
        </li>
        <li>
          <Link href="/institutional" className="hover:text-gray-200 transition duration-300">
            INSTITUTIONAL
          </Link>
        </li>
        <li className="relative group">
          <Link href="/contact" className="hover:text-gray-200 transition duration-300">
            CONTACT US +
          </Link>
        </li>
      </ul>

      {/* Search & Login (Hidden on medium and small screens) */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="/login" className="hover:text-gray-200 transition text-white font-semibold text-sm">
          LOGIN
        </Link>
        <FaSearch className="text-white cursor-pointer hover:opacity-80 transition text-lg" />
      </div>

      {/* Mobile Menu Button (Visible on md and smaller screens) */}
      <button
        className="lg:hidden text-white text-3xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Mobile Dropdown (Visible on md and smaller screens) */}
      <div
        className={`absolute top-16 left-0 h-screen w-full bg-[#1DA678] border-t border-gray-400 transition-all duration-300 transform ease-in-out
        ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95 pointer-events-none"}
        lg:hidden flex flex-col items-center text-white py-6 space-y-4 shadow-xl rounded-b-lg`}
      >
        <Link href="/" className="hover:text-gray-200 transition font-semibold text-sm" onClick={() => setIsOpen(false)}>
          HOME
        </Link>
        <li>
          <Link href="/about" className="hover:text-gray-200 transition duration-300">
            ABOUT US
          </Link>
        </li>
        <button className="hover:text-gray-200 transition font-semibold text-sm">
          OUR SERVICES +
        </button>
        <Link href="/appointment" className="hover:text-gray-200 transition font-semibold text-sm" onClick={() => setIsOpen(false)}>
          BOOK APPOINTMENT
        </Link>
        <button className="hover:text-gray-200 transition font-semibold text-sm">
          RESOURCES +
        </button>
        <Link href="/institutional" className="hover:text-gray-200 transition font-semibold text-sm" onClick={() => setIsOpen(false)}>
          INSTITUTIONAL
        </Link>
        <Link href="/contact" className="hover:text-gray-200 transition font-semibold text-sm">
          CONTACT US +
        </Link>
        <Link href="/login" className="hover:text-gray-200 transition font-semibold text-sm" onClick={() => setIsOpen(false)}>
          LOGIN
        </Link>
        <FaSearch className="cursor-pointer hover:opacity-80 transition text-xl" />
      </div>
    </nav>
  );
};

export default NavBar;
