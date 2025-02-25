import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(29,166,120,1)] text-white py-6 px-4 ">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8  sm:text-left px-4 py-2 md:px-14  lg:px-14 xl:px-14 2xl:px-14">

        {/* About Section */}
        <div className="space-y-4 col-span-1 sm:col-span-2">
          <p className="text-sm sm:text-justify font-poppins font-semibold text-[rgba(255,255,255,0.82)] pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia suscipit ab quibusdam, quidem dolore nam cupiditate.
          </p>
          <div className="flex justify-start sm:justify-start space-x-3">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, index) => (
              <div key={index} className="bg-[rgba(219,223,253,1)] rounded-lg p-2 text-[rgba(255,188,10,1)]">
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 text-left">
          <h3 className="font-bold font-commissioner text-xl">Quick Links</h3>
          <div className="h-1 w-10 bg-yellow-400 mb-2"></div>
          <ul className="space-y-2">
            {['Homepage', 'About Us', 'Our Specialist', 'Our Services', 'Our Pricing'].map((link) => (
              <li key={link} className="flex items-center font-poppins space-x-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <a href="#" className="hover:underline text-sm font-bold text-[rgba(255,255,255,0.82)]">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Links */}
        <div className="space-y-2 text-left">
          <h3 className="font-bold font-commissioner text-xl">Service Links</h3>
          <div className="h-1 w-10 bg-yellow-400 mb-2"></div>
          <ul className="space-y-2">
            {['Mental Health', 'Childhood', 'Adult Mentals', 'Wife Mental', 'Old Consultant'].map((service) => (
              <li key={service} className="flex font-poppins items-center space-x-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <a href="#" className="hover:underline text-sm font-bold text-[rgba(255,255,255,0.82)]">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-2 text-left">
          <h3 className="font-bold font-commissioner text-xl">Let’s Get In Touch</h3>
          <div className="h-1 w-10 bg-yellow-400 mb-2"></div>
          <p className='text-sm font-bold text-[rgba(255,255,255,0.82)]'>Open at All Day 08:00 AM – 08:00 PM or custom time</p>
          <p className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span className='text-sm font-bold text-[rgba(255,255,255,0.82)]'>123 Main Street, Suite 101</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-400" />
            <span className='text-sm font-bold text-[rgba(255,255,255,0.82)]'>info@health.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span className='text-sm font-bold font-poppins text-[rgba(255,255,255,0.82)]'>(877)-444-6666</span>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 font-poppins mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm px-4 text-center md:text-left">
        <p className='text-sm font-bold text-[rgba(255,255,255,0.82)]'>© 2025 - All Rights Reserved by Health</p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline text-sm font-bold text-[rgba(255,255,255,0.82)]">Disclaimer</a>
          <a href="#" className="hover:underline text-sm font-bold text-[rgba(255,255,255,0.82)]">Privacy Policy</a>
          <a href="#" className="hover:underline text-sm font-bold text-[rgba(255,255,255,0.82)]">GDPR Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
