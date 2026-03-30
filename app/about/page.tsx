import AboutDonate from "@/layout/about-donate";
import AboutHero from "@/layout/about-hero";
import Subscribe from "@/layout/subscribe";
import TopNavBar from "@/layout/Topnavbar";
import ImageSlider from "@/section/who-are-we/image-slider";
import AboutGiveAMeal from "@/section/who-are-we/about-give-a-meal";

function About() {
  return (
    <div>
      <TopNavBar />
      <AboutHero />
      <ImageSlider />
      <AboutGiveAMeal />
      <Subscribe />
    </div>
  );
}

export default About;
