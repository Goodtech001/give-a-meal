import TopNavBar from "@/layout/Topnavbar";
import ContactDetails from "@/section/reach-us/contact-details";
import ReachUsHeroSection from "@/section/reach-us/reach-us-hero";
import Subscribe from "@/layout/subscribe";

export default function ContactUs() {
  return (
    <div>
      <TopNavBar />
      <ReachUsHeroSection />
      <ContactDetails />
      <Subscribe />
    </div>
  );
}
