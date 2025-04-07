"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "OUR SERVICES" },
    { href: "/appointment", label: "BOOK APPOINTMENT" },
    { href: "/blog", label: "BLOG" },
    { href: "/theraphy", label: "THERAPY" },
    { href: "/contact", label: "CONTACT US" },
  ];

  const NavLink = ({
    href,
    label,
    isButton = false,
    onClick,
  }: {
    href: string;
    label: string;
    isButton?: boolean;
    onClick?: () => void;
  }) => {
    const isActive = pathname === href;
    const className = `hover:text-[#FFBC0A] transition duration-300 ${
      isActive ? "text-[#FFBC0A]  font-bold" : ""
    }`;

    return isButton ? (
      <button className={className}>{label}</button>
    ) : (
      <Link href={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="bg-[#1DA678]  px-6 xl:px-20 flex items-center z-50 shadow-lg relative">
      <main className="max-w-7xl md:px-16 w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center p-2 ">
          <Link href="/">
            <Image
              src="/Home/Logo.svg"
              alt="Logo"
              width={180}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center space-x-8 text-white font-semibold lg:text-xs xl:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Search & Login */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/appointment">
            <FaSearch className="text-white cursor-pointer hover:opacity-80 transition text-lg" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </main>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#1DA678] border-t border-gray-400 transition-all duration-300 ease-in-out 
      ${
        isOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
      }
      lg:hidden flex flex-col items-center text-white py-6 space-y-4 shadow-xl rounded-b-lg`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            onClick={() => setIsOpen(false)}
          />
        ))}
        {/* <Link
          href="/login"
          className="hover:text-[#FFBC0A] transition font-semibold text-sm"
          onClick={() => setIsOpen(false)}
        >
          LOGIN
        </Link>
        <FaSearch className="cursor-pointer hover:opacity-80 transition text-xl" /> */}
      </div>
    </nav>
  );
};

export default NavBar;
