import Title from "@/components/card-title";
import OngoingCard from "@/components/ongoing";
import Cards from "@/layout/cards";

import ImpactHero from "@/layout/impact-hero";
import Subscribe from "@/layout/subscribe";
import TopNavBar from "@/layout/Topnavbar";
import React from "react";

function page() {
  const cardData = [
    {
      image:
        "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
      title: "Clean water initiatives",
      description: "Ensuring access to clean and safe drinking water...",
      target: "230,000 meals",
      current: "92,000 meals",
      percentage: "40%",
    },
    // Add more card objects here as needed
    {
      image: "@/public/assets/images/another_image.jpg",
      title: "Clean water initiatives",
      description: "Ensuring access to clean and safe drinking water...",
      target: "150,000 students",
      current: "75,000 students",
      percentage: "50%",
    },
    {
      image: "@/public/assets/images/yet_another_image.jpg",
      title: "Clean water initiatives",
      description: "Ensuring access to clean and safe drinking water...",
      target: "100,000 liters",
      current: "50,000 liters",
      percentage: "50%",
    },
  ];
  return (
    <div>
      <TopNavBar />
      <ImpactHero />
      <Title />
      <Cards data={cardData} numCards={3} />
      <OngoingCard />
      <Subscribe />
    </div>
  );
}

export default page;
