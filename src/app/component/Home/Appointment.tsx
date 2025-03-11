import Image from "next/image";
import Link from "next/link";


const Appointment = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[rgba(29,166,120,1)] px-4 ">
      <div className="w-full max-w-6xl rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-20 relative">
        {/* Left Side - Appointment Form */}
        <div className="w-full lg:w-[60%] py-6 lg:py-10">
          <h2 className="text-[#ffff] font-semibold text-sm uppercase tracking-wider font-commissioner">
            Appointment
          </h2>
          <h1 className="xl:text-4xl lg:text-3xl text-2xl font-poppins font-bold text-gray-50 mt-2">
            Schedule Your Care with Our Certified Experts
          </h1>
          <form className="mt-6 space-y-6 bg-white p-6 lg:p-10 rounded-xl w-full lg:w-[83%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                {/* <FaUser className="text-gray-500" /> */}
                <img src="/Home/name.png" alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                {/* <FaEnvelope className="text-[rgba(29,166,120,1)]" /> */}
                <img src="/Home/email.png" alt="" />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                {/* <FaPhone className="text-gray-500" />
                 */}
                <img src="/Home/phone.png" alt="" />

                <input
                  type="tel"
                  placeholder="Telephone"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                {/* <FaCalendarAlt className="text-gray-500" /> */}
                <img src="/Home/number.png" alt="" />

                <input
                  type="number"
                  placeholder="Age"
                  className="w-full outline-none placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                {/* <FaCalendarAlt className="text-gray-500" /> */}
                <img src="/Home/date.png" alt="" />

                <input
                  type="date"
                  className="w-full outline-none text-gray-400"
                  required
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
                {/* <FaVenusMars className="text-gray-500" /> */}
                <img src="/Home/gender.png" alt="" />

                <select
                  className="w-full outline-none bg-transparent text-gray-400"
                  required
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
              {/* <FaClipboardList className="text-gray-500" /> */}
              <img src="/Home/services.png" alt="" />

              <select
                className="w-full outline-none bg-transparent text-gray-400"
                required
              >
                <option value="">Services</option>
                <option value="General Consultation">Cardiology</option>
                <option value="Dental Checkup">Neurology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Skin Care">Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist"</option>
                <option value="Pediatric Gastroenterologist">Pediatric Gastroenterologist</option>
                <option value="Pediatric Gastroenterologist">Pediatric Gastroenterologist</option>
                <option value="General Physician, Internal Medicine">General Physician, Internal Medicine</option>

              </select>
            </div>
            <div className="flex items-center border border-gray-300 rounded-3xl p-3 px-6 gap-3 bg-white focus-within:border-[#2BA56A] transition-all">
              {/* <FaClipboardList className="text-gray-500" /> */}
              <img src="/Home/message.png" alt="" className="mb-6" />

              <textarea
                placeholder="Message"
                className="w-full outline-none placeholder-gray-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1DA678] text-white p-3 rounded-full font-semibold hover:bg-[#238A56] transition-all"
            >
              Make Appointment
            </button>
          </form>
        </div>

        {/* Center - Doctor Image */}
        <div className="hidden lg:flex justify-start  items-end w-[35%] xl:w-1/2 absolute bottom-0 right-48 xl:right-12">
          <Image
            src="/Home/Doctor.png"
            alt="Doctor"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Side - Work Hours */}
        <div className="xl:absolute font-poppins lg:right-0 lg:top-14 lg:mt-4 my-4 lg:my-0  h-fit bg-gray-100 p-6 rounded-lg shadow-md text-gray-800 w-full lg:max-w-xs">
          <h3 className="text-lg font-semibold">Work Hours</h3>
          <p className="text-sm py-2 text-gray-600">
            We are open during these hours
          </p>
          <ul className="space-y-2 mt-2 text-sm">
            {[
              { day: "Monday", hours: "9AM - 5PM" },
              { day: "Tuesday", hours: "9AM - 5PM" },
              { day: "Wednesday", hours: "9AM - 5PM" },
              { day: "Thursday", hours: "9AM - 5PM" },
              { day: "Friday", hours: "9AM - 5PM" },
              { day: "Saturday", hours: "1PM - 8PM" },
              { day: "Sunday", hours: "10AM - 4PM" },
            ].map(({ day, hours }, index) => (
              <li key={index} className="flex justify-between">
                <span>{day}</span>
                <span>{hours}</span>
              </li>
            ))}
            <li className="flex justify-start font-normal text-gray-900 mt-2">
              24*7 Emergency Care Open
            </li>
          </ul>
          <Link href="/contact">
          <button className="w-full bg-[#1DA678] text-white p-3 rounded-full font-semibold hover:bg-[#238A56] mt-4 transition-all">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;