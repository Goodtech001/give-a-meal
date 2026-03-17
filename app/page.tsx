"use client";
import TestimonialCard from "@/components/testimonial";
import Cards from "@/layout/cards";
import Footer from "@/layout/footer";
import GivingCard from "@/layout/giving-card";
import HeroSection from "@/layout/Hero-section";
import Impact from "@/layout/impact";
import Mission from "@/layout/Join-mission";
import Subscribe from "@/layout/subscribe";
import TopNavBar from "@/layout/Topnavbar";
import Image from "next/image";

export default function Home() {
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
  ]
  return (
    <div className="bg-white">
     <TopNavBar/>
     <HeroSection/>
     <Mission/>
      <Cards data={cardData} numCards={3} />
     <Impact/>
     {/* <GivingCard/> */}
     <TestimonialCard />
     <Subscribe/>
     <Footer />
    </div>
  );
}
