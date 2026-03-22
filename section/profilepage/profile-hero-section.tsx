"use client";
import TopNavBar from "@/layout/Topnavbar";
import ProfilePic from "@/public/assets/images/profilepic.png";
import Image from "next/image";
import ProfileBg from "@/public/assets/images/profilebg.png";
import ProfileBgMobile from "@/public/assets/images/profilebgmobile.png";
import {
  AnimatePresence,
  circInOut,
  motion,
  spring,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export default function ProfilePageHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const transitionSpring = {
    duration: 0.4,
    ease: circInOut,
    type: spring,
    stiffness: 150,
  };
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={transitionSpring}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
