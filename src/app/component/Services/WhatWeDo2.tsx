"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhatWeDo2 = () => {
  return (
    <main className="flex justify-center  items-center py-4 md:py-16 bg-gradient-to-r from-[#E4FAF3] to-transparent px-6">
      <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center relative">
        {/* Left Section - Image & Overlay */}
        <section className="relative justify-center lg:justify-start flex">
          <Image
            src="/Services/WhatWeDo2.png"
            alt="Psychiatrist with patient"
            width={450}
            height={350}
            className="w-full md:w-[80%] lg:w-[380px] xl:w-[full] max-w-[450px]  "
          />
          <div className="absolute flex flex-col  h-fit lg:top-40  xl:right-0  md:top-60 -bottom-40 right-4 bg-white py-6 px-5 shadow-xl rounded-lg border-l-8 border-[#06685F] md:w-56 w-[90%] flex-wrap transition-transform duration-500 ease-in-out hover:scale-105">
            <h3 className="text-lg font-bold font-commissioner text-gray-900 mt-2">
              #1 Psychiatrist
            </h3>
            <p className="text-sm text-gray-600 font-commissioner mb-4">
              Certified mental health care with excellence.
            </p>
            <hr className="border-[#DADADA]" />
            <h4 className="text-md font-bold text-gray-900 font-commissioner mt-4">
              Have Certification{" "}
            </h4>
            <p className="text-sm text-gray-600 font-commissioner mb-4">
              Top industry professionals with extensive experience.
            </p>
            <hr className="border-[#DADADA]" />
            <h4 className="text-md font-bold text-gray-900 font-commissioner mt-4">
              Good People Work
            </h4>
            <p className="text-sm text-gray-600 font-commissioner mb-4">
              Ensuring quality care and best guidance.
            </p>
          </div>
        </section>

        {/* Right Section - Content */}
        <section className="flex flex-col mt-40 md:mt-0">
          <h5 className="text-[#FFBC0A] font-commissioner font-semibold text-xs uppercase tracking-widest">
            What We Do
          </h5>
          <h2 className="text-2xl md:text-3xl font-poppins xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug ">
            Children Are Precious
          </h2>
          <p className="text-[#6E6E6E] mt-4 font-poppins text-base leading-relaxed">
            Therapists at SehatYab work with children and adolescents  to help
            them resolve their issues and achieve their potential through
            managing  issues relating to mental, emotional, and social
            development
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 mt-4">
            <div>
              <h1 className="text-[#06685F] font-bold font-poppins whitespace-nowrap text-lg mb-4">
                Behavioral Issues
              </h1>
              <ol className="text-[#6E6E6E] space-y-2 text-sm">
                <li>⦿ Agression</li>
                <li>⦿ Sleep Problem</li>
                <li>⦿ Temper tentrums</li>
                <li>⦿ Eating Problems</li>
                <li>⦿ Silbling rivalry</li>
                <li>⦿ Bed Wetting</li>
              </ol>
            </div>
            <div>
              <h1 className="text-[#06685F]   font-bold font-poppins text-lg whitespace-nowrap mb-4">
                {" "}
                School Related Issues
              </h1>
              <ul className=" text-[#6E6E6E] space-y-2 text-sm">
                <li>⦿ Learning difficulties</li>
                <li>⦿ Learning Disabilities</li>
                <li>⦿ Pure pressure</li>
                <li>⦿ Exam anxiety</li>
                <li>⦿ Parenting styles</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#06685F] font-bold font-poppins text-lg mb-4">
                Special children
              </h1>
              <ul className="text-[#6E6E6E] space-y-2 text-sm">
                <li>⦿ Mental retardation</li>
                <li>⦿ Gifted / talented children</li>
                <li>⦿ Autism / Aspreger`s</li>
                <li>⦿ ADHD</li>
              </ul>
            </div>
          </div>

          <Link href="/appointment">
            <button className="mt-10 bg-[#1DA678] font-poppins text-white w-fit font-bold py-3 px-7 shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105">
              Book Appointment
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default WhatWeDo2;
