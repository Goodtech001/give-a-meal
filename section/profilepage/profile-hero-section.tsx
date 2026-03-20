import TopNavBar from "@/layout/Topnavbar";
import ProfilePic from "@/public/assets/images/profilepic.png";
import Image from "next/image";
import ProfileBg from "@/public/assets/images/profilebg.png";
import ProfileBgMobile from "@/public/assets/images/profilebgmobile.png";

export default function ProfilePageHeroSection() {
  return (
    <div className="relative">
      {/* NAVBAR */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-full z-10">
        <TopNavBar />
      </div>

      {/* CURVE */}
      {/* <div className="bg-[#DCEAF3] h-[260px] md:h-[320px] w-full rounded-b-[100%]"></div> */}
      <div className="md:block hidden relative  md:h-[420px] w-full object-cover">
        <Image src={ProfileBg} alt="" fill className="" />
      </div>
      <div className="md:hidden block relative h-[340px] w-full object-cover">
        <Image src={ProfileBgMobile} alt="" fill className="" />
      </div>

      {/* PROFILE IMAGE */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
        <div className="md:w-50 md:h-52 w-48 h-44 relative rounded-4xl overflow-hidden ">
          <Image src={ProfilePic} alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
