import React from 'react'
import Hero from './component/Home/Hero'
import ExpertiseBanner from './component/Home/ExpertierBarrier'
import MentalHealthDirectory from './component/Home/MentalHealthDirectory'
import ServicesForKids from './component/Home/ServicesForKids'
import GetQuote from './component/Home/GetQuote'
import OurConsultants from './component/Home/Consultant'
import BlogContent from './component/Home/BlogContent'
import HowItWorks from './component/Home/HowItWorks'
import Appointment from './component/Home/Appointment'

// fonts
import "@fontsource/commissioner/400.css"; // Regular
import "@fontsource/commissioner/600.css"; // Semibold
import "@fontsource/commissioner/700.css"; // Bold
import "@fontsource/commissioner/800.css"; // Extrabold

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

const page = () => {
  return (
    <div>
      <Hero />
      <ExpertiseBanner />
      <MentalHealthDirectory />
      <ServicesForKids />
      <Appointment />
      <HowItWorks />
      <BlogContent />
      <OurConsultants />
      <GetQuote />
    </div>
  )
}

export default page
