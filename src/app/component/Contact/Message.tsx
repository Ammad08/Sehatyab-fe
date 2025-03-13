// import React from "react";

// const Message: React.FC = () => {
//     return (
//         <section className="container mx-auto px-4 py-14">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//                 {/* Google Map Section */}
//                 <div className="w-full h-[300px] md:h-[400px] lg:h-full">
//                     <iframe
//                         className="w-full h-full rounded-lg shadow-lg"
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48333.13928136058!2d-0.1180920851570206!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzM1LjUiTiAwwrAwNycxMS4xIlc!5e0!3m2!1sen!2suk!4v1644240034605!5m2!1sen!2suk"
//                         allowFullScreen
//                         loading="lazy"
//                     ></iframe>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="bg-gradient-to-r from-white via-[rgba(29,166,120,0.3)] to-white p-8 rounded-lg ">
//                     <h5 className="text-[#FFBC0A] font-commissioner font-semibold text-sm uppercase tracking-widest">
//                         Leave A Message
//                     </h5>
//                     <h2 className="text-2xl md:text-3xl font-commissioner font-bold text-[#06685F] mt-2">
//                         Let’s Hear From You!
//                     </h2>
//                     <p className="text-gray-600 text-sm font-commissioner mt-4">
//                         Reach out to our expert team. We’re here to help with any inquiries, support, or consultation.
//                     </p>

//                     {/* Form Fields */}
//                     <form className="mt-6 space-y-5">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
//                             />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
//                             />
//                             <select className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all">
//                                 <option value="">Select Service</option>
//                                 <option value="consulting">Consulting</option>
//                                 <option value="installation">Installation</option>
//                                 <option value="support">Support</option>
//                             </select>
//                         </div>


                       



//                         <textarea
//                             placeholder="Your message..."
//                             rows={4}
//                             className="w-full p-3 border font-commissioner border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
//                         ></textarea>

//                         <button
//                             type="submit"
//                             className="w-full md:w-auto font-commissioner px-6 bg-[#FFBC0A] text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Message;


"use client";
import React, { useState } from "react";

const Message: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5501/happy/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Message sent:", result);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Psychiatric Consultation",
    "Therapy Session",
    "Family Counseling",
    "Child Psychology",
    "Mental Health Assessment",
  ];

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Google Map Section */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48333.13928136058!2d-0.1180920851570206!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzM1LjUiTiAwwrAwNycxMS4xIlc!5e0!3m2!1sen!2suk!4v1644240034605!5m2!1sen!2suk"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-r from-white via-[rgba(29,166,120,0.3)] to-white p-8 rounded-lg">
          <h5 className="text-[#FFBC0A] font-commissioner font-semibold text-sm uppercase tracking-widest">
            Leave A Message
          </h5>
          <h2 className="text-2xl md:text-3xl font-commissioner font-bold text-[#06685F] mt-2">
            Let’s Hear From You!
          </h2>
          <p className="text-gray-600 text-sm font-commissioner mt-4">
            Reach out to our expert team. We’re here to help with any inquiries, support, or consultation.
          </p>

          {success && (
            <div className="bg-green-400 text-white text-center py-2 rounded-md mt-4">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="bg-red-400 text-white text-center py-2 rounded-md mt-4">
              {error}
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 font-commissioner border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
                required
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              className="w-full p-3 border font-commissioner border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FFBC0A] focus:outline-none transition-all"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto font-commissioner px-6 bg-[#FFBC0A] text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;