import React from 'react';
import Image from 'next/image';

const MentalHealthDirectory: React.FC = () => {
    return (
        <main className="bg-white p-4 md:p-8  flex flex-col justify-center items-center">
            <section className="container max-w-5xl flex flex-col-reverse lg:flex-row items-center gap-8">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 justify-center items-center flex">
                    <Image
                        src="/Home/MentalHealthDirectory.svg"
                        alt="Mental Health Directory"
                        width={500}
                        height={500}
                        className="lg:w-full h-screen lg:h-auto"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 text-left">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-[#06685F] mb-4 lg:mb-6">
                        A Comprehensive Directory For Your Mental Health
                    </h1>
                    <p className="text-[#7A7A7A] text-sm md:text-base mb-4 font-inter  text-justify">
                        Finding mental health support should be simple. Our directory connects you with licensed professionals,
                        ensuring the right help at the right time.
                    </p>
                    <div className='pb-4 lg:pb-6'>
                        <div className='border-l-4 border-[#FFBC0A] px-4 md:px-6 lg:px-10 h-fit'>
                            <p className="text-[#06685F] font-inter italic  text-sm md:text-base mb-2 text-justify">
                                We offer a diverse range of mental health services, from general consultations to specialized care. Our platform allows you to explore treatment options, find expert advice, and connect with professionals who truly understand your needs.
                            </p>
                        </div>
                    </div>
                    <ul className="space-y-2 md:space-y-3 mb-6 lg:mb-8 text-[#7A7A7A]">
                        {[
                            "24/7 Phone counseling services for clients",
                            "Really know the true needs and expectations of clients",
                            "To assist the individual in recovering from the crisis & problems"
                        ].map((text, index) => (
                            <li key={index} className="flex items-center">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FFBC0A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-sm md:text-base">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-left">
                        <button className=" font-commissioner font-bold bg-[#FFBC0A] hover:bg-[#E5A509] text-white w-fit  transform  py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition ease-in-out duration-500">
                            MORE ABOUT US
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MentalHealthDirectory;
