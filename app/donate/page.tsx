"use client"
import AboutDonate from '@/layout/about-donate'
import DonateHero from '@/layout/donate-hero'
import Footer from '@/layout/footer'
import Subscribe from '@/layout/subscribe'

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
