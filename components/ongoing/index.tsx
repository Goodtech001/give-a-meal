import React from 'react'
import { Card } from '../ui/card'
import Cards from '@/layout/cards'

function OngoingCard() {
     const cardData = [
  {
    image: "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
    title: "Help reach hungry families in the north",
    description: "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
   {
    image: "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
    title: "Help reach hungry families in the north",
    description: "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
   {
    image: "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
    title: "Help reach hungry families in the north",
    description: "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
   {
    image: "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
    title: "Help reach hungry families in the north",
    description: "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
   {
    image: "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
    title: "Help reach hungry families in the north",
    description: "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
  ]
  return (
    <div>
        <div className='text-center space-y-4 mt-10'>
            <h1 className='font text-[#00304C] text-4xl font-semibold'>Ongoing Missions</h1>
            <p className='text-lg font text-[#00304CCC]'>Support the ongoing projects that provide steady hope to those in need.</p>
        </div>
        <Cards data={cardData} numCards={5} />
    </div>
  )
}

export default OngoingCard