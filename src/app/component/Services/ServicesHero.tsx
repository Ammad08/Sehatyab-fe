import Image from "next/image";
import React from "react";
import { MdArrowRight } from "react-icons/md";

const ServicesHero = () => {
  return (
    <main className="relative h-[60vh] lg:h-[50vh] 2xl:h-[30vh] bg-[url('/Services/serviceHero.png')] bg-cover bg-center flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#1DA678]/30 to-black/50"></div>
      <div className="absolute inset-0 bg-[rgba(29,166,120,0.1)]/25"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <section className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-3">
            <p className="hover:text-gray-200 transition font-semibold cursor-pointer">
              Homepage
            </p>
            <MdArrowRight className="mx-2 size-6 lg:size-10 text-[#1DA678]" />
            <p className="font-semibold font-poppins">Services</p>
          </div>

          {/* Heading & Description */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-left">
            Our Services
          </h1>

          {/* Flex container for text & rating */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <p className="text-white font-poppins font-medium max-w-xl text-left leading-relaxed">
              We are committed to sustainability and innovation, providing Best
              services to our customers.
            </p>

            {/* Google Rating */}
            <div className="flex  items-center gap-4 ">
              <Image
                src="/Home/Google.svg"
                alt="Google"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-white font-poppins text-lg">
                  4.8 Google Rating
                </p>
                <p className="text-gray-100 font-poppins text-sm">
                  Trusted by thousands
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesHero;
