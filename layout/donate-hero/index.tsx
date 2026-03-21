import React from 'react'
import hero from "@/public/assets/images/e4f46e6f81ee553f253998632457d5b4aec41580.jpg" 
import TopNavBar from '../Topnavbar'
import Image from 'next/image'
import rectangle from "@/public/assets/images/Rectangle 4.jpeg";

function DonateHero() {
  return (
    <div >
    <div className='relative bg-hero bg-center bg-cover h-screen' >
        <div className="absolute inset-0 bg-black/5 bg-opacity-50 rounded-l-2xl rounded-tr-2xl"></div>
    </div>
    <div className='absolute top-0 w-full'>
        <TopNavBar/>
        <h1 className='font md:text-5xl text-4xl text-center text-white font-medium mt-50 '>Help reach hungry families in <br /> the north </h1>
    </div>

     <Image src={rectangle} alt="alt" />
    </div>
    
  )
}

export default DonateHero