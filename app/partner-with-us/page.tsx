import TopNavBar from "@/layout/Topnavbar";
import PartnerWithUsHeroSection from "@/section/partner-with-us/partner-with-us-hero";
import GiveAMealAdvantage from "@/section/partner-with-us/give-a-meal";
import OurPartners from "@/section/partner-with-us/our-partners";
import ReadyToScale from "@/section/partner-with-us/ready-to-scale";
import Subscribe from "@/layout/subscribe";

export default function PartnerWithUs() {
  return (
    <div>
      <TopNavBar />
      <PartnerWithUsHeroSection />
      <GiveAMealAdvantage />
      <OurPartners />
      <ReadyToScale />
      <div className="border border-gray-400 mx-5 " />
      <Subscribe />
    </div>
  );
}
