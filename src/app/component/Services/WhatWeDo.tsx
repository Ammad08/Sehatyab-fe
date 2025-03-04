
// "use client";

// import React from "react";
// import Image from "next/image";
// import { TiTick } from "react-icons/ti";
// import Link from "next/link";

// const WhatWeDo2 = () => {
//     return (
//         <main className="flex justify-center items-center py-16 bg-gradient-to-r from-[#E4FAF3] to-transparent px-6">
//             <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

               

//                 {/* Right Section - Content */}
//                 <section className="flex flex-col mt-40 md:mt-0">
//                     <h5 className="text-[#FFBC0A] font-commissioner font-semibold text-xs uppercase tracking-widest">
//                         What We Do
//                     </h5>
//                     <h2 className="text-2xl md:text-3xl font-poppins xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug ">
//                     Our Great Psychiatrist Services
//                     Provided For You
//                     </h2>
//                     <p className="text-[#6E6E6E] mt-4 font-poppins text-base leading-relaxed">
//                     Psychologists & Psychiatrists at SehatYab treat mental health illnesses with talk therapy, teach coping skills, and prescribe medicines (if needed)
//                     </p>
//                     <div className="flex flex-wrap justify-between gap-2 mt-4">
//                         <div>
//                             <h1 className="text-[#06685F] font-bold font-poppins text-lg my-4">Depression</h1>
//                             <p className="font-semibold">Symptoms</p>

//                             <ol className="text-[#6E6E6E] space-y-2 text-xs font- mt-2">
//                                 <li>✔ Loss of interest or pleasure in daily living</li>
//                                 <li>✔ Anger, frustration, or irritability</li>
//                                 <li>✔ Sleep problems</li>
//                                 <li>✔ Fatigue and lack of energy</li>
//                                 <li>✔ Restlessness</li>
//                                 <li>✔ Trouble concentrating or making decisions</li>
//                                 <li>✔ Feelings of guilt or worthlessness</li>
//                                 <li>✔ Losing or gaining a lot of weight</li>


//                             </ol>
//                         </div>
//                         <div>
//                            <h1 className="text-[#06685F] font-bold font-poppins text-lg my-4">Anxiety</h1>
//                            <p className="font-semibold">Symptoms</p>
//                            <ul className=" text-[#6E6E6E] space-y-2 text-xs mt-2">
//                            <li>✔ Shortness of breath</li>
//                             <li>✔ Feeling restless</li>
//                             <li>✔ Being easily fatigued</li>
//                             <li>✔ Difficulty concentrating</li>
//                             <li>✔ Being irritable</li>
//                             <li>✔ Having muscle tension</li>
//                             <li>✔ Difficulty controlling feelings of worry.</li>
//                             <li>✔ Sleep problems</li>



//                             </ul>
//                         </div>
//                         <div>
//                             <h1 className="text-[#06685F] font-bold font-poppins text-lg my-4">Other illnesses</h1>
//                             <ul className="text-[#6E6E6E] space-y-2 text-xs mt-2">
//                                 <li>⦿ Obsessive-compulsive disorder</li>
//                             <li>⦿ Panic Attacks</li>
//                             <li>⦿ Bipolar Disorder</li>
//                             <li>⦿ Post-traumatic stress disorder (PTSD)</li>
//                             <li>⦿ Social anxiety disorder</li>
//                             <li>⦿ Schizophrenia</li>
//                             <li>⦿ Eating Disorders</li>
//                             <li>⦿ Borderline Personality Disorder</li>


//                             </ul>
//                             </div>

//                     </div>

                    


                   
// <Link href="/appointment">
//                     <button className="mt-10 bg-[#1DA678] font-poppins text-white w-fit font-bold py-3 px-7 shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105">
//                         Book Appointment
//                     </button>
//                     </Link>
//                 </section>


//  {/* Left Section - Image & Overlay */}
//  <section className="relative justify-center lg:justify-start flex">
//                     <Image
//                         src="/Services/WhatWeDo.png"
//                         alt="Psychiatrist with patient"
//                         width={450}
//                         height={350}
//                         className="w-full lg:w-[380px] xl:w-[full] max-w-[450px] object-cover "
//                     />
//                     <div className="absolute flex flex-col  h-fit lg:top-40  xl:right-0  md:top-60 -bottom-40 right-4 bg-white py-6 px-5 shadow-xl rounded-lg border-l-8 border-[#06685F] md:w-56 w-[90%] flex-wrap transition-transform duration-500 ease-in-out hover:scale-105">
//                         <h3 className="text-lg font-bold font-commissioner text-gray-900 mt-2">#1 Psychiatrist</h3>
//                         <p className="text-sm text-gray-600 font-commissioner mb-4">Certified mental health care with excellence.</p>
//                         <hr className="border-[#DADADA]" />
//                         <h4 className="text-md font-bold text-gray-900 font-commissioner mt-4">Have Certification </h4>
//                         <p className="text-sm text-gray-600 font-commissioner mb-4">Top industry professionals with extensive experience.</p>
//                         <hr className="border-[#DADADA]" />
//                         <h4 className="text-md font-bold text-gray-900 font-commissioner mt-4">Good People Work</h4>
//                         <p className="text-sm text-gray-600 font-commissioner mb-4">Ensuring quality care and best guidance.</p>
//                     </div>
//                 </section>

//             </div>
//         </main>
//     );
// };

// export default WhatWeDo2;
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhatWeDo = () => {
  return (
    <main className="flex justify-center items-center py-16 bg-gradient-to-r from-[#E4FAF3] to-transparent px-6">
      <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative">
        
        {/* Left Section - Content */}
        <section className="flex flex-col mt-10 md:mt-0">
          <h5 className="text-[#FFBC0A] font-commissioner font-semibold text-xs uppercase tracking-widest">
            What We Do
          </h5>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug">
            Our Great Psychiatrist Services Provided For You
          </h2>
          <p className="text-[#6E6E6E] mt-4 text-base leading-relaxed">
            Psychologists & Psychiatrists at SehatYab treat mental health illnesses with talk therapy, teach coping skills, and prescribe medicines (if needed)
          </p>

          {/* Three Columns Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-10 mt-6 w-full">
            <div className="min-w-0">
              <h1 className="text-[#06685F] font-bold text-lg my-4">Depression</h1>
              <p className="font-semibold text-[rgba(110,110,110,1)]">Symptoms</p>
              <ul className="text-[#6E6E6E] space-y-1 text-xs mt-2">
                <li className="whitespace-nowrap">✔ Loss of interest in daily life</li>
                <li className="whitespace-nowrap">✔ Anger, frustration, irritability</li>
                <li className="whitespace-nowrap">✔ Sleep problems</li>
                <li className="whitespace-nowrap">✔ Fatigue & lack of energy</li>
                <li className="whitespace-nowrap">✔ Restlessness</li>
                <li className="whitespace-nowrap">✔ Trouble concentrating</li>
                <li className="whitespace-nowrap">✔ Feelings of guilt</li>
                <li className="whitespace-nowrap">✔ Weight changes</li>
              </ul>
            </div>
            <div className="min-w-0">
              <h1 className="text-[#06685F] font-bold text-lg my-4">Anxiety</h1>
              <p className="font-semibold text-[rgba(110,110,110,1)]">Symptoms</p>
              <ul className="text-[#6E6E6E] space-y-1 text-xs mt-2">
                <li className="whitespace-nowrap">✔ Shortness of breath</li>
                <li className="whitespace-nowrap">✔ Feeling restless</li>
                <li className="whitespace-nowrap">✔ Easily fatigued</li>
                <li className="whitespace-nowrap">✔ Difficulty concentrating</li>
                <li className="whitespace-nowrap">✔ Irritability</li>
                <li className="whitespace-nowrap">✔ Muscle tension</li>
                <li className="whitespace-nowrap">✔ Trouble controlling worry</li>
                <li className="whitespace-nowrap">✔ Sleep problems</li>
              </ul>
            </div>
            <div className="min-w-0">
              <h1 className="text-[#06685F] font-bold text-lg my-4">Other illnesses</h1>
              <ul className="text-[#6E6E6E] space-y-1 text-xs mt-2">
                <li>⦿ Obsessive-compulsive disorder</li>
                <li>⦿ Panic Attacks</li>
                <li>⦿ Bipolar Disorder</li>
                <li>⦿ PTSD</li>
                <li>⦿ Social anxiety disorder</li>
                <li>⦿ Schizophrenia</li>
                <li>⦿ Eating Disorders</li>
                <li>⦿ Borderline Personality Disorder</li>
              </ul>
            </div>
          </div>

          <Link href="/appointment">
            <button className="mt-10 bg-[#1DA678] text-white w-fit font-bold py-3 px-7 shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105">
              Book Appointment
            </button>
          </Link>
        </section>

        {/* Right Section - Image & Overlay */}
        <section className="relative flex justify-center lg:justify-start gap-6">
          <Image
            src="/Services/WhatWeDo.png"
            alt="Psychiatrist with patient"
            width={450}
            height={350}
            className="w-full lg:w-[380px] xl:w-[full] max-w-[450px] object-cover"
          />
          <div className="absolute flex flex-col h-fit sm:top-auto md:top-60 lg:top-40 xl:right-0 right-4 bg-white py-6 px-5 shadow-xl rounded-lg border-l-8 border-[#06685F] md:w-56 w-[90%] transition-transform duration-500 ease-in-out hover:scale-105">
            <h3 className="text-lg font-bold text-gray-900 mt-2">#1 Psychiatrist</h3>
            <p className="text-sm text-gray-600 mb-4">Certified mental health care with excellence.</p>
            <hr className="border-[#DADADA]" />
            <h4 className="text-md font-bold text-gray-900 mt-4">Have Certification</h4>
            <p className="text-sm text-gray-600 mb-4">Top industry professionals with extensive experience.</p>
            <hr className="border-[#DADADA]" />
            <h4 className="text-md font-bold text-gray-900 mt-4">Good People Work</h4>
            <p className="text-sm text-gray-600 mb-4">Ensuring quality care and best guidance.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WhatWeDo;
