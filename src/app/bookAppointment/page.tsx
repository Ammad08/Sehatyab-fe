import React, { Suspense } from 'react'
import AppointmentForm from '../component/BookAppointment/AppointmentForm'
import BookAppointmentHero from '../component/BookAppointment/BookAppointmentHero'

const page = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <BookAppointmentHero/>
      <AppointmentForm/>
      </Suspense>
  )
}

export default page
