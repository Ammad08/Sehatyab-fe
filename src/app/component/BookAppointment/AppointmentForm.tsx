
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const prefilledSpecialization = searchParams.get("specialization") || "";
  const prefilledConsultant = searchParams.get("consultant") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    specialization: prefilledSpecialization,
    consultant: prefilledConsultant,
    date: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [success, setSuccess] = useState(false);

  // Update form data when query parameters change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      specialization: prefilledSpecialization,
      consultant: prefilledConsultant,
    }));
  }, [prefilledSpecialization, prefilledConsultant]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("appointmentData", JSON.stringify(formData));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({
      fullName: "",
      specialization: prefilledSpecialization,
      consultant: prefilledConsultant,
      date: "",
      email: "",
      phone: "",
      comments: "",
    });
  };

  // List of all specializations and consultants for dropdown
  const specializations = [
    "Cardiology",
    "Neurology",
    "Dermatology",
    "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
    "Pediatric Gastroenterologist",
    "Pediatric Neurologist",
    "General Physician, Internal Medicine"
  ];

  const consultants = [
    "Dr. Raman Kumar",
    "Dr. Arit Parkash",
    "Assist. Professor Dr. Faisal Zafar",
    "Dr. Naveen Manzoor"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:py-10">
      <div className="shadow- p-8 rounded-lg md:px-12 max-w-6xl lg:max-w-7xl">
        <p className="text-[rgba(85,85,85,1)] mb-4 text-left text-sm">
          To request an appointment, please fill out the following form. Please provide your preferred date and time for the appointment. Our team will review your
          request and contact you to confirm the appointment based on the availability of our doctors.
        </p>
        
        {success && (
          <div className="bg-green-400 text-white text-center py-2 rounded-md mb-4">
            Appointment submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">FULL NAME*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 bg-[rgba(247,247,247,1)] border border-gray-300 rounded-md mt-1"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">SPECIALIZATION</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full bg-[rgba(247,247,247,1)] p-2 border border-gray-300 rounded-md mt-1"
                required
              >
                <option value="">Select Specialization</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">CONSULTANT</label>
              <select
                name="consultant"
                value={formData.consultant}
                onChange={handleChange}
                className="w-full bg-[rgba(247,247,247,1)] p-2 border border-gray-300 rounded-md mt-1"
                required
              >
                <option value="">Select Consultant</option>
                {consultants.map((cons) => (
                  <option key={cons} value={cons}>
                    {cons}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">DATE OF APPOINTMENT</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-[rgba(247,247,247,1)] p-2 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">EMAIL*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[rgba(247,247,247,1)] p-2 border border-gray-300 rounded-md mt-1"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">PHONE*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[rgba(247,247,247,1)] p-2 border border-gray-300 rounded-md mt-1"
                placeholder="Phone"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[rgba(6,104,95,1)] text-sm font-poppins font-bold">ADDITIONAL COMMENTS (IF ANY)</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full bg-[rgba(247,247,247,1)] p-2 border border-gray-300 rounded-md mt-1"
              placeholder="Enter your comments"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between gap-8 bg-[rgba(247,247,247,1)] text-sm w-fit border px-3 py-1.5 rounded-md space-x-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" required className="w-4 h-4 border" />
              <span className="text-gray-900">I am not a robot</span>
            </div>
            <div className="flex flex-col items-center justify-center text-[rgba(85,85,85,1)] pt-2">
              {/* <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-4 w-10" /> */}
              <Image alt="Captcha" src="/Appointment/Image.png" width={30} height={10}></Image>
              <p className="text-xs">reCAPTCHA</p>
              <p className="text-xs">privacy - terms</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-fit font-bold p-10 bg-[rgba(29,166,120,1)] text-white py-2 hover:bg-green-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}