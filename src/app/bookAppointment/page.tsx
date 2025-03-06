import React from 'react'
import AppointmentForm from '../component/BookAppointment/AppointmentForm'
import ServicesHero from '../component/Services/ServicesHero'
import BookAppointmentHero from '../component/BookAppointment/BookAppointmentHero'

const page = () => {
  return (
    <div>
        {/* <ServicesHero/> */}
        <BookAppointmentHero/>
      <AppointmentForm/>
    </div>
  )
}

export default page
