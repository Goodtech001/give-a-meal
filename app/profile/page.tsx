"use client";
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
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap gap-4 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}
