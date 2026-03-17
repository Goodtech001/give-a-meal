import TopNavBar from "@/layout/Topnavbar";
import PartnerWithUsHeroSection from "@/section/partner-with-us/partner-with-us-hero";
import GiveAMealAdvantage from "@/section/partner-with-us/give-a-meal";
import OurPartners from "@/section/partner-with-us/our-partners";

export default function PartnerWithUs() {
  return (
    <div>
      <TopNavBar />
      <PartnerWithUsHeroSection />
      <GiveAMealAdvantage />
      <OurPartners />
    </div>
  );
}
