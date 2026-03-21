import Image from "next/image";
import React, { useRef } from "react";
import play from "@/public/assets/images/store-android-en 1.png";
import ios from "@/public/assets/images/store-ios-en 1.png";
import phone from "@/public/assets/images/Home.png";
import rectangle from "@/public/assets/images/Rectangle 4.jpeg";
import {
  AnimatePresence,
  circInOut,
  motion,
  spring,
  useInView,
} from "framer-motion";

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const transitionSpring = {
    duration: 0.4,
    ease: circInOut,
    type: spring,
    stiffness: 150,
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={transitionSpring}
        >
          <div className="md:grid grid-cols-10 md:flex-row flex-col-reverse items-cente md:space-x-70 md:px-40 mt-20 relative md:mt-35 md:space-y-0 space-y-10">
            <div className="flex md:hidden justify-center m">
              <Image
                src={phone}
                alt=""
                className="w-50 md:h-full h-60 object-top object-cover md:hidden"
              />
            </div>
            <div className="md:col-span-7">
              <p className="text-[#00304C] md:text-6xl font-medium text-5xl md:text-left text-center md:px-0 px-5 font ">
                Make Impact With the Give A Meal App
              </p>
              <p className="text-[#00304CCC] font mt-10 leading-7 md:px-0 px-10 md:text-left text-center ">
                Feeding someone in need is now as simple as a tap on your
                screen. Help us build a world without hunger by downloading Give
                A Meal and sharing a meal today. Every tap makes a difference.
              </p>
              <div className="flex mt-15 justify-center">
                <button className="cursor-pointer btn">
                  <Image src={play} alt="" className="w-30" />
                </button>
                <button className=" cursor-pointer btn">
                  <Image src={ios} alt="" className="w-28" />
                </button>
              </div>
            </div>

            <div className="md:block hidden md:col-span-3">
              <Image src={phone} alt="" className="w-70 mt-" />
            </div>
          </div>
          <div className="absolute top-50 left-40 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-2xl opacity-10"></div>

          <Image src={rectangle} alt="alt" />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroSection;
