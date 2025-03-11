import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const GetQuote: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.4)] to-[rgba(29,166,120,0.1)] font-commissioner h-auto w-full py-6 px-4">
      <div className="max-w-6xl container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 px-4 sm:px-6">
        {/* Left Text Section */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700 text-center sm:text-left leading-tight">
          We Always Feel Free To Hear <br className="hidden sm:block" /> Your
          Talk
        </h2>

        {/* Right Section (Button and Phone) */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
         <Link href="/contact">
          <button className="bg-[rgba(29,166,120,1)] text-white text-lg px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
            Contact us
          </button>
          </Link>

          {/* <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-black text-lg" />
            <span className=" font-semibold  tracking-wider font-commissioner text-lg">
              (877)-555-6666
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
