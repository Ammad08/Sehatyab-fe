


"use client";

import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section className="w-full bg-[rgba(247,247,247,1)] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl  lg:text-3xl font-poppins font-bold text-[rgba(6,104,95,1)] mb-4">
          How it works
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Start talking to a doctor in three simple steps. If assistance is required, 
          our customer services will help you connect online with the doctor and 
          stay in touch throughout the process.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center flex-grow h-full">
            <Image 
              src="/Home/Vector1.svg" 
              alt="Step 1" 
              width={60} 
              height={60} 
              className="mb-3"
            />
            <h3 className="text-lg font-semibold text-[rgba(29,166,120,1)]">1. Select doctor</h3>
            <p className="text-gray-500 mt-2 max-w-xs">
              Select your preferred doctor (all doctors are qualified and PMC licensed) 
              & choose a time slot.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center flex-grow h-full">
            <Image 
              src="/Home/Vector2.svg" 
              alt="Step 2" 
              width={60} 
              height={60} 
              className="mb-3"
            />
            <h3 className="text-lg font-semibold text-[rgba(29,166,120,1)]">2. Pay fee</h3>
            <p className="text-gray-500 mt-7 max-w-xs">
              Enter patient info and pay via Bank Transfer, Credit card, 
              Easypaisa, or JazzCash.
            </p>
            <Image 
              src="/Home/payment.svg" 
              alt="Payment Methods" 
              width={250} 
              height={230} 
              className="object-contain mt-3" 
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center flex-grow h-full">
            <Image 
              src="/Home/Vector3.svg" 
              alt="Step 3" 
              width={60} 
              height={60} 
              className="mb-3"
            />
            <h3 className="text-lg font-semibold text-[rgba(29,166,120,1)]">3. Join session</h3>
            <p className="text-gray-500 mt-2 max-w-xs">
              Join the audio/video call, discuss your issue & get a 
              prescription via SMS/Email.
            </p>
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="text-center mt-8">
          <Link href="/appointment">
          <button className="px-6 py-2 text-[rgba(29,166,120,1)] border-2 border-[rgba(29,166,120,1)] rounded-full text-lg font-semibold transition-all duration-300 hover:bg-green-500 hover:text-white">
            Book Appointment
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
