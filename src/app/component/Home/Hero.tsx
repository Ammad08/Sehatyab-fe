"use client";

import { useState } from "react";
import "@fontsource/commissioner";
import "@fontsource/poppins";
import Image from "next/image";

const Hero: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("Human");

    return (
        <main className=" font-poppins justify-center items-center flex flex-col">

            <section className="relative w-full px-4 md:px-16 xl:px-36 flex items-center justify-center py-10 lg:py-2 bg-custom-gradient">
                <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center">
                    {/* Left Content */}
                    <div className=" lg:w-[70%] text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start">
                        <h1 className="text-[#1DA678] font-semibold text-sm uppercase -mb-2 tracking-wider font-commissioner">
                            Professionals Psychiatrist
                        </h1>
                        <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold md:font-bold leading-tight text-gray-900">
                            Keep With Your <span className="text-[#1DA678]">Healthy</span>
                            <br />
                            Mentals & Psychology
                        </h2>
                        <p className="text-gray-600 max-w-lg  font-commissioner text-base md:text-[17px]">
                            Your mental health matters. Get the best psychiatric services to ensure
                            a healthier mind and well-being.
                        </p>

                        {/* Button and Rating */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex flex-col justify-center items-center lg:items-start md:flex-row lg:flex-col gap-4">
                                <button className=" font-commissioner font-bold bg-[#FFBC0A] hover:bg-[#E5A509] text-white w-fit  transform  py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition ease-in-out duration-500">
                                    Our Services
                                </button>
                                <div className="flex items-center gap-3">
                                    <Image src="/Home/Google.svg" alt="Google" width={40} height={40} />
                                    <div>
                                        <p className="font-bold font-commissioner text-[#181818]">4.8 Google Rating</p>
                                        <p className="text-gray-500 font-commissioner text-sm">Trusted by thousands</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
                        <Image
                            src="/Home/HeroGirl.svg"
                            alt="HeroGirl"
                            width={470}
                            height={470}
                            priority
                        />
                        {/* Decorative image  */}
                        <div className="absolute top-10 left-0 md:top-16  xl:left-14 z-10 animate-bounce">
                            <Image
                                src="/Home/HeroGbox.svg"
                                alt="Decorative Image"
                                width={75}
                                height={75}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <div className="w-full bg-[#1DA678] justify-center items-center flex flex-col py-4 ">
                <div className="max-w-6xl ">
                    <div className="flex flex-wrap gap-4 xl:gap-7 items-center justify-center">
                        <h2 className="text-white font-commissioner text-3xl font-bold text-center">
                            What Do You Need?
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {/* Input Fields */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
                            />
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white px-3 py-3 border outline-none border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-36 sm:w-44 focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Dropdown */}
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="bg-white px-3 py-3 border border-[#FFBC0A] rounded-lg shadow-md text-gray-700 w-44 sm:w-36 cursor-pointer focus:ring-2 focus:ring-yellow-500"
                            >
                                <option value="Human">Human</option>
                                <option value="Company">Company</option>
                            </select>

                            {/* Button */}
                            <button className="bg-gradient-to-r from-[#FFBC0A] to-[#FFA500] text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-yellow-600 hover:scale-105 duration-500 ease-in-out transition">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Top Box Shape */}
            <div className="z-50 hidden sm:block">
                <div className="absolute  md:right-20 md:bottom-0 lg:top-32 lg:right-20 xl:right-44 2xl:right-[250px] xl:top-40">
                    <div className="w-10 h-10 bg-[#FFBC0A] rounded-md"></div>
                </div>
                <div className="absolute md:right-16 md:bottom-4 lg:top-28 lg:right-24 xl:right-40 2xl:right-[230px] xl:top-36">
                    <Image
                        src="/Home/HeroGbox.svg"
                        alt="Greenbox"
                        width={40}
                        height={40}

                    />
                </div>
            </div>

            {/* left top triangle  */}
            <div className="absolute left-0 top-0 w-56 h-56 z-10">
                <Image
                    src="/Home/HeroTopTriangle.svg"
                    alt="Triangle"
                    layout="fill"
                    objectFit="contain"
                    className=""
                />
            </div>

            {/* Right center triangle  */}
            <div className="absolute right-0 top-24  z-10">
                <Image
                    src="/Home/HeroTri.svg"
                    alt="Triangle"
                    width={200}
                    height={200}
                    objectFit="contain"
                    className=""
                />
            </div>
        </main>
    );
};

export default Hero;
