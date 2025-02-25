import React from "react";
import Image from "next/image";

const OurProfessional: React.FC = () => {
    return (
        <main className="container max-w-6xl mx-auto px-4 pt-12 pb-2 text-center flex flex-col items-center">
            {/* Title Section */}
            <div className="w-[85%] md:w-1/2 xl:w-[40%] ">
                <h5 className="text-[#FFBC0A] font-semibold font-poppins text-xs uppercase tracking-widest">
                    Meet With Professionals
                </h5>
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-bold text-[#06685F] mt-4 leading-snug">
                    Let’s Get In Touch With Our Great Team
                </h2>
            </div>

            {/* Contact Info Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 w-full px-4">
                {/* Office Address */}
                <div className="p-8 flex flex-col items-center bg-white  hover:shadow-xl transition-all duration-300">
                    <Image
                        src="/Contact/Office.svg"
                        alt="Office Location"
                        width={50}
                        height={50}
                        priority
                        className="animate-bounce"
                    />
                    <h3 className="text-lg font-bold font-commissioner mt-6 text-[#06685F]">Our Office</h3>
                    <p className="text-[#6E6E6E] text-sm font-commissioner mt-2 text-center">
                        123 Main Street, Suite 101, Cityville
                    </p>
                </div>

                {/* Email Box */}
                <div className="p-8 flex flex-col items-center bg-gradient-to-r from-white via-[rgba(29,166,120,0.3)] to-white  hover:shadow-xl transition-all duration-300">
                    <Image
                        src="/Contact/Email.svg"
                        alt="Email Official"
                        width={50}
                        height={50}
                        priority
                        className="animate-bounce"
                    />
                    <h3 className="text-lg font-bold mt-6 font-commissioner text-[#06685F]">Email Official</h3>
                    <p className="text-[#6E6E6E] font-commissioner text-sm mt-2 text-center">
                        info@domain.com
                    </p>
                </div>

                {/* Telephone */}
                <div className="p-8 flex flex-col items-center bg-white   hover:shadow-xl transition-all duration-300">
                    <Image
                        src="/Contact/Telephone.svg"
                        alt="Telephone"
                        width={50}
                        height={50}
                        priority
                        className="animate-bounce"
                    />
                    <h3 className="text-lg font-bold mt-6 font-commissioner text-[#06685F]">Telephone</h3>
                    <p className="text-[#6E6E6E] font-commissioner text-sm mt-2 text-center">
                        (877)-555-6666
                    </p>
                </div>
            </div>
        </main>
    );
};

export default OurProfessional;
