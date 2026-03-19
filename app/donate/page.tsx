import AboutDonate from '@/layout/about-donate'
import DonateHero from '@/layout/donate-hero'
import Footer from '@/layout/footer'
import Subscribe from '@/layout/subscribe'
import TopNavBar from '@/layout/Topnavbar'
import React from 'react'

function Donate() {
  return (
    <div>
      <DonateHero/>
      <AboutDonate/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Donate
