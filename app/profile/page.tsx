"use client";
import Subscribe from "@/layout/subscribe";
import MonthlyGiving from "@/section/profilepage/montly-giving";
import PaymentMethod from "@/section/profilepage/payment-method";
import ProfilePageHeroSection from "@/section/profilepage/profile-hero-section";
import ProfileInfo from "@/section/profilepage/profile-info";
import { useState } from "react";

export default function ProfilePage() {
  const tabs = [
    { label: "Profile Information", content: <ProfileInfo /> },
    { label: "Payment Method", content: <PaymentMethod /> },
    { label: "Monthly Giving", content: <MonthlyGiving /> },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <ProfilePageHeroSection />
      <div className="pt-20">
        <h1 className="text-[#00304C] md:text-4xl text-3xl text-center  flex justify-center font">
          Hello, Food Hero Alex
        </h1>
      </div>
      <div className="container mx-auto pt-8">
        {/* ===================== DESKTOP TABS NAVIGATION ===================== */}
        {/* Category tabs (scrollable horizontally) */}
        <div className="flex md:justify-between items-center  overflow-x-auto whitespace-nowrap no-scrollbar md:gap-10 gap-5">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 md:text-base text-sm font cursor-pointer hover:text-[#00304C] text-[#00304C]
          ${
            activeTab === index
              ? "font text-[#00304C] border border-[#00304C] py-2.5 md:px-10 px-5 rounded-lg"
              : ""
          }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-400 w-full h-0.5 my-10" />

        {/* ===================== TAB CONTENT SLIDER ===================== */}
        {/* Sliding content controlled by activeTab */}
        <div className="pb-10 w-full ">
          {/* Viewport */}
          <div className="container mx-auto overflow-hidden w-full h-screen">
            {/* Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTab * 100}%)` }}
            >
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 px-4 box-border overflow-y-auto scrollbar-thin"
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
}
