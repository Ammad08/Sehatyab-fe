import React from "react";
import DoctorList from "../component/Home/DoctorList";
import DoctorsPage from "../component/Home/Doctor";
import ConsultantSearchBar from "../component/Home/ConsultantSearchBar";
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
