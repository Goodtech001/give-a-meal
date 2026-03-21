"use client"
import { Suspense } from 'react';
import AboutDonate from '@/layout/about-donate';
import DonateHero from '@/layout/donate-hero';
// import Footer from '@/layout/footer';
import Subscribe from '@/layout/subscribe';

function Donate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonateHero/>
      <AboutDonate/>
      <Subscribe/>
    </Suspense>
  );
}

export default Donate;

