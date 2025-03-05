import React from "react";
import DoctorList from "../component/Appointment/DoctorList";
import DoctorsPage from "../component/Appointment/Doctor";
import ConsultantSearchBar from "../component/Appointment/ConsultantSearchBar";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DoctorsPage />
      <ConsultantSearchBar />
      <DoctorList />
    </Suspense>
  );
};

export default page;
