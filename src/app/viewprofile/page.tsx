import React from 'react'
import ViewProfile from '../component/ViewProfile'
import { Suspense } from "react";

const page = () => {
  return (
          <Suspense fallback={<div>Loading...</div>}>
    
      <ViewProfile/>
          </Suspense>
    
  )
}

export default page
