import React from 'react'
import AppointmentForm from '../component/BookAppointment/AppointmentForm'
// import ServicesHero from '../component/Services/ServicesHero'
import BookAppointmentHero from '../component/BookAppointment/BookAppointmentHero'
import { Suspense } from "react";

const page = () => {
  return (
        <Suspense fallback={<div>Loading...</div>}>
    
        {/* <ServicesHero/> */}
        <BookAppointmentHero/>
      <AppointmentForm/>
          </Suspense>
      
  )
}

export default page
