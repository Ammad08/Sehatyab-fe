import Link from "next/link";
import React from "react";

const DiscoverPages: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-[rgba(29,166,120,0.2)] via-[rgba(29,166,120,0.3)] to-[rgba(29,166,120,0.1)] h-auto w-full py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col  justify-center gap-4 items-center space-y-6 sm:space-y-0 px-4 sm:px-6">

                {/* Left Text Section */}
                <h1 className="text-xl sm:text-2xl flex md:text-3xl gap-2 font-bold font-openSans text-[#1DA678] text-center justify-center items-center leading-tight">
                    <span className="text-black">Discover Our Services</span>
                    <span className="hidden sm:block" > & What We Offer </span>
                </h1>

                {/* Right Section (Button and Phone) */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
<Link href="/appointment">
                   
                    <button className="bg-[rgba(29,166,120,1)] text-white px-5 py-2 font-poppins  font-semibold hover:bg-green-700 transition">
                        Book Appointment
                    </button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default DiscoverPages;
