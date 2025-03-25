import React from 'react'
import ContactHero from '../component/Contact/ContactHero'
// import DiscoverPages from '../component/About/DiscoverPages'
import OurProfessional from '../component/Contact/OurProfessional'
import Message from '../component/Contact/Message'

const page = () => {
  return (
    <div>
      <ContactHero />
      <Message />
      <OurProfessional />

      {/* <DiscoverPages /> */}
    </div>
  )
}

export default page
