import React from 'react'
import DoctorList from '../component/Home/DoctorList'
import DoctorsPage from '../component/Home/Doctor'
import ConsultantSearchBar from '../component/Home/ConsultantSearchBar'

const page = () => {
  return (
    <div>
        <DoctorsPage/>
        <ConsultantSearchBar/>
        <DoctorList/>
    </div>
  )
}

export default page
