import Link from 'next/link';
import React from 'react';

const ServicesForKids: React.FC = () => {
    return (
        <main className="bg-[#F7F7F7] p-4 md:p-12 flex flex-col justify-center items-center">
            <section className='container max-w-6xl'>
                <h1 className="text-[#FFBC0A] font-semibold text-sm uppercase -mb-2 tracking-wider font-commissioner">
                    Services for Kids
                </h1>
                <div className="text-left mb-12">
                    <h2 className=" text-2xl md:text-3xl font-semibold text-[#06685F] font-poppins my-3 ">
                        Cherish Our Little Ones
                    </h2>
                    <p className="text-[#363636] font-openSans">
                        Children hold immense value to us. At Umeed, our therapists collaborate with children and adolescents, guiding them to overcome challenges and reach their fullest potential. We focus on addressing mental, emotional, and social developmental concerns to foster their growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* School Related Issues */}
                    <div className="font-poppins">
                        <div className='mb-4'>
                            <h3 className="text-xl font-semibold text-[#06685F]">School Related Issues</h3>
                            <h4 className='font-poppins text-[#06685F] font-semibold text-xs'>Symptoms</h4>
                        </div>
                        <ul className="space-y-2 text-sm md:text-base">
                            {['Learning disabilities', 'Parenting styles', 'Learning difficulties', 'Peer pressure', 'Exam anxiety'].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="text-[#FFBC0A] mr-2">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Special Children */}
                    <div className="font-poppins">
                        <div className='mb-4'>
                            <h3 className="text-xl font-semibold text-[#06685F]">Special Children</h3>
                            <h4 className='font-poppins text-[#06685F] font-semibold text-xs'>Symptoms</h4>
                        </div>
                        <ul className="space-y-2 text-sm md:text-base">
                            {['Gifted / talented children', 'ADHD', 'Mental retardation', 'Autism / Asperger’s'].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="text-[#FFBC0A] mr-2">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Behavioral Issues */}
                    <div className="font-poppins">
                        <div className='mb-4'>
                            <h3 className="text-xl font-semibold text-[#06685F]">Behavioral Issues</h3>
                            <h4 className='font-poppins text-[#06685F] font-semibold text-xs'>Symptoms</h4>
                        </div>
                        <ul className="space-y-2 font-poppins text-sm md:text-base">
                            {['Temper tantrums', 'Eating problems', 'Bed wetting', 'Aggression', 'Sibling rivalry', 'Sleep problems'].map((item, index) => (
                                <li key={index} className="flex items-center  text-gray-700">
                                    <span className="text-[#FFBC0A] mr-2">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/appointment">
                    <button className=" font-poppins font-semibold bg-[#FFBC0A] hover:bg-[#E5A509] text-white w-fit  transform  py-3 px-6 rounded-sm shadow-md shadow-gray-700 hover:scale-105 transition ease-in-out duration-500">
                        Book Appointment
                    </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ServicesForKids;