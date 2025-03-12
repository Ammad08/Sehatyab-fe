"use client";

import React from "react";
import Image from "next/image";

const OurBusiness = () => {
    return (
        <section className="flex justify-center bg-gray-50 px-6 py-2 pb-12">
            <div className="container max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
                {/* Left Content Section */}
                <div className="relative">
                    <h5 className="text-[#FFBC0A] font-semibold text-xs font-commissioner uppercase tracking-widest">
                        Our Business
                    </h5>
                    <h2 className="text-2xl font-commissioner md:text-3xl xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug">
                        We Have Goals To Be #1 And <br className="hidden md:block" /> Great Psychiatrist Services & Solution
                    </h2>
                    <p className="text-[#6E6E6E] mt-4 font-commissioner text-sm md:text-base leading-relaxed">
                    We provide exceptional healthcare services, integrating advanced medical solutions with compassionate care to enhance overall well-being.
                    </p>

                    {/* Image & Extra Text */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-5 items-start">
                        <Image
                            src="/About/OurBusiness2.jpg"
                            alt="Psychiatrist with patient"
                            width={180}
                            height={120}
                            className="rounded-lg "
                        />
                        <p className="text-[#6E6E6E] font-commissioner text-sm md:text-base leading-relaxed">
                        Dedicated to excellence, we ensure innovative treatments, patient-centered care, and holistic wellness approaches for a healthier and better future.
                        </p>
                    </div>

                    {/* Decorative Green Box */}
                    <div className="absolute -top-16 right-16 hidden sm:block">
                        <Image
                            src="/Home/HeroGbox.svg"
                            alt="Greenbox"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>

                {/* Right Timeline Section */}
                <div className="space-y-6">
                    {[
                        { year: "2010", title: "Freelance Psychiatrist", Description:"Providing personalized mental health care, therapy, and expert consultations to support emotional well-being and psychological resilience." },
                        { year: "2016", title: "Social Psychiatrist Corp", Description:"Dedicated to addressing societal mental health challenges through community-based therapy, counseling, and advocacy programs." },
                        { year: "2022", title: "Best Public Psychiatrist Solution", Description:"Offering accessible and effective psychiatric services, ensuring quality mental health support for individuals from all backgrounds." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap sm:flex-nowrap items-center p-6 rounded-lg w-full"
                            style={{
                                background: "linear-gradient(90deg, rgba(29, 166, 120, 0.2) 85%, #F9FAFB 100%)"
                            }}
                        >
                            <div className="bg-white flex px-6 py-4 items-center justify-center rounded-md shadow-md">
                                <span className="text-[#06685F]  font-commissioner font-bold text-2xl">{item.year}</span>
                            </div>
                            <div className="ml-4 mt-3 sm:mt-0">
                                <h4 className="text-[#06685F] font-commissioner font-bold text-lg">{item.title}</h4>
                                <p className="text-[#6E6E6E] font-commissioner text-sm md:text-base">
                                {item.Description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBusiness;
