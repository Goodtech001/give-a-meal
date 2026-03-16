"use client";
import TestimonialCard from "@/components/testimonial";
import Cards from "@/layout/cards";
import GivingCard from "@/layout/giving-card";
import HeroSection from "@/layout/Hero-section";
import Impact from "@/layout/impact";
import Mission from "@/layout/Join-mission";
import TopNavBar from "@/layout/Topnavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <TopNavBar />
      <HeroSection />
      <Mission />
      <Cards />
      <Impact />
      {/* <GivingCard/> */}
      <TestimonialCard />
    </div>
  );
}
