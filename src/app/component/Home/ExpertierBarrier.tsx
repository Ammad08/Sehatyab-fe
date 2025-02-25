'use client';

import React from 'react';
import Image from 'next/image';  // Importing Image component from Next.js

import "@fontsource/commissioner/400.css"; // Regular
import "@fontsource/commissioner/600.css"; // Semibold
import "@fontsource/commissioner/700.css"; // Bold
import "@fontsource/commissioner/800.css"; // Extrabold

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

const cards = [
    {
        id: 1,
        title: 'Quality Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/Home/QualityServices.svg',
        bgColor: 'bg-white',
        textColor: 'text-[#06685F]',
    },
    {
        id: 2,
        title: 'Professional Team',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/Home/ProfessionalTeam.svg',
        bgColor: 'bg-[#1DA678]',
        textColor: 'text-white',
    },
    {
        id: 3,
        title: 'Dedicated Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/Home/DedicatedSupport.svg',
        bgColor: 'bg-white',
        textColor: 'text-[#06685F]',
    },
];

const ExpertiseBanner: React.FC = () => {
    return (
        <main className="px-4  lg:px-8 text-center py-14">
            {/* Top Section */}
            <section className="mb-8 md:mb-12 max-w-6xl mx-auto text-left lg:text-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-poppins font-bold text-[#06685F] ">
                        We Have More Than 12 Years Professional Experience in Psychology and Mental Health Counseling
                    </h1>
                    <p className="mt-4 text-base md:text-[18.54px] text-[#7A7A7A] font-inter lg:w-[90%] xl:w-[80%]">
                        We specialize in psychology and mental health counseling, offering expert guidance and support.
                        Our services provide a safe space for individuals to manage their mental well-being and overcome challenges
                        with professional, compassionate care.
                    </p>
                </div>
            </section>

            {/* Bottom Section - Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto  ">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`p-6 sm:p-8 md:p-10 shadow-md shadow-gray-500  ${card.bgColor} flex gap-4 items-center text-left`}
                    >
                        <div className="flex self-start">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={120}
                                height={120}
                                className="text-white text-4xl"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className={`text-lg  font-poppins font-bold ${card.textColor}`}>{card.title}</h2>
                            <p className={`mt-2 text-sm sm:text-base ${card.textColor}`}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ExpertiseBanner;