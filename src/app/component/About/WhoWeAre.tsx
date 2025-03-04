"use client";

import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import Link from "next/link";

const WhoWeAre = () => {
    return (
        <main className="flex justify-center items-center py-16 bg-gray-50 px-6">
            <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

                {/* Left Section - Image & Overlay */}
                <section className="relative justify-center lg:justify-start flex">
                    <Image
                        src="/About/WhoWeAre.svg"
                        alt="Psychiatrist with patient"
                        width={450}
                        height={350}
                        className="w-full lg:w-[380px] xl:w-[full] max-w-[450px] object-cover "
                    />
                    <div className="absolute flex flex-col gap-4 h-fit lg:top-52  xl:right-0  md:top-60 -bottom-40 right-4 bg-white py-6 px-5 shadow-xl rounded-lg border-l-8 border-[#06685F] md:w-56 w-[90%] flex-wrap transition-transform duration-500 ease-in-out hover:scale-105">
                        <h3 className="text-lg font-bold font-commissioner text-gray-900">#1 Psychiatrist</h3>
                        <p className="text-sm text-gray-600 font-commissioner">Certified mental health care with excellence.</p>
                        <hr className="border-[#DADADA]" />
                        <h4 className="text-md font-bold text-gray-900 font-commissioner">Certified Experts</h4>
                        <p className="text-sm text-gray-600 font-commissioner">Top industry professionals with extensive experience.</p>
                        <hr className="border-[#DADADA]" />
                        <h4 className="text-md font-bold text-gray-900 font-commissioner">Trusted Team</h4>
                        <p className="text-sm text-gray-600 font-commissioner">Compassionate professionals ensuring quality care.</p>
                    </div>
                </section>

                {/* Right Section - Content */}
                <section className="flex flex-col mt-40 md:mt-0">
                    <h5 className="text-[#FFBC0A] font-commissioner font-semibold text-xs uppercase tracking-widest">
                        Who We Are
                    </h5>
                    <h2 className="text-2xl md:text-3xl font-poppins xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug ">
                        We Are Professional Psychiatrists for Your Well-being
                    </h2>
                    <p className="text-[#6E6E6E] mt-4 font-poppins text-base leading-relaxed">
                        Our expert team offers personalized treatment and guidance to help individuals overcome mental health challenges with compassion and care.
                    </p>

                    <blockquote className="border-l-4 font-commissioner border-[#1DA678] pl-5 text-gray-700 mt-6 text-lg italic">
                        Your mental health is our priority. Healing through understanding and expert guidance.
                        <p className="text-[#06685F] font-commissioner font-bold mt-3 not-italic"> Dr. John Doe</p>
                    </blockquote>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base xl:text-nowrap text-gray-700 mt-6">
                        {[
                            "Certified Professionals",
                            "Personalized Treatment Plans",
                            "Perfect Choicing Psychiatrist",
                            "Trusted by Thousands Worldwide",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center font-commissioner gap-2">
                                <TiTick className="text-[#FFBC0A] text-lg" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Statistics Section */}
                    <div className="mt-8 flex flex-col gap-3">
                        {[
                            { label: "MENTAL SUCCESS", value: "99%" },
                            { label: "HAPPY CLIENTS", value: "100%" },
                        ].map((stat, index) => (
                            <div key={index} className="flex items-center justify-between w-full bg-[#1DA678] text-white px-5 py-3 rounded-lg shadow-lg">
                                <p className="text-sm font-medium font-commissioner">{stat.label}</p>
                                <p className="text-lg font-semibold font-commissioner">{stat.value}</p>
                            </div>
                        ))}
                    </div>
<Link href="/appointment">
                    <button className="mt-10 bg-[#FFBC0A] font-poppins text-white w-fit font-bold py-3 px-7 shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105">
                        Book Appointment
                    </button>
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default WhoWeAre;
