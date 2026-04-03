"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";

import rectangle from "@/public/assets/images/Rectangle 4.jpeg";
import {
  AnimatePresence,
  circInOut,
  motion,
  spring,
  useInView,
} from "framer-motion";
import HeroImg from "@/public/assets/images/heroimg.png";
import HeroImg2 from "@/public/assets/images/heroimg2.png";
import HeroImg3 from "@/public/assets/images/heroimg3.png";
import { Icon } from "@iconify/react";

const images = [HeroImg, HeroImg2, HeroImg3, HeroImg3];

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const transitionSpring = {
    duration: 0.4,
    ease: circInOut,
    type: spring,
    stiffness: 150,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={transitionSpring}
        >
          <div className="container mx-auto pt-14">
            <div className="grid grid-cols-12  item-center">
              {/* img mobile */}
              <div className="relative w-full flex items-center justify-center md:hidden col-span-12  md:col-span-6 mb-20 mt-30 pr-19 ">
                {images.map((img, index) => {
                  // Determine the "State" of this specific image
                  const isActive = index === activeIndex; // The Big One
                  const isNext = index === (activeIndex + 1) % images.length; // Slot 2
                  // const isThird = index === (activeIndex + 2) % images.length; // Slot 3 (The missing 4th image!)
                  const isPrev =
                    index === (activeIndex - 1 + images.length) % images.length; // Slot 4 (The one that just left)

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-1000 ease-in-out overflow-visible 
              ${isActive ? "z-50 w-[280px] h-[280px] opacity-100 translate-x-0 scale-100" : ""}
              ${isNext ? "z-40 w-[255px] h-[255px] opacity-80 translate-x-[180px] -translate-y-10 scale-90 -top-20 -left-19 " : ""}
        
              ${!isActive && !isNext && !isPrev ? "opacity-0 scale-0" : ""} 
            `}
                    >
                      <Image
                        src={img}
                        alt="Charity"
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
              {/* hero text */}
              <div className="md:col-span-6 md:pl-8 col-span-12 md:pt-0 pt-20">
                <div className="md:max-w-lg">
                  <p className="text-[#00304C] md:text-6xl font-medium text-5xl md:text-left text-center md:px-0 px-5 font ">
                    Make Impact With the Give A Meal App
                  </p>
                </div>
                <div className="max-w-xl">
                  <p className="text-[#00304CCC] font mt-5 leading-7 md:text-justify text-base md:px-0 px-10 text-center ">
                    Feeding someone in need is now as simple as a tap on your
                    screen. Help us build a world without hunger by downloading
                    Give A Meal and sharing a meal today. Every tap makes a
                    difference, bringing hope, nourishment, and support to
                    people and families who need it most.
                  </p>
                </div>
                {/* button */}
                <div className="md:my-15 my-8 flex flex-row gap-5  w-full md:justify-start justify-center items-center">
                  {/* play store */}
                  <div>
                    <button className="flex cursor-pointer items-center gap-2 py-2 px-3 bg-black rounded-xl hover:scale-105 transition-transform duration-300">
                      <Icon
                        icon="logos:google-play-icon"
                        className="w-8 h-8 shrink-0"
                      />

                      {/* Added items-start here */}
                      <span className="flex flex-col leading-tight items-start justify-start">
                        {/* Added text-left here */}
                        <p className="text-[10px]  font text-gray-300 font-semibold text-left uppercase">
                          Get it on
                        </p>
                        <p className="text-[18px]  font font-semibold text-white text-left">
                          Google Play
                        </p>
                      </span>
                    </button>
                  </div>
                  {/* ios */}
                  <div>
                    <button className="flex cursor-pointer items-center gap-2 py-2 px-3 bg-black rounded-xl hover:scale-105 transition-transform duration-300">
                      <Icon
                        icon="icomoon-free:appleinc"
                        className="w-8 h-8 shrink-0 text-white"
                      />

                      {/* Added items-start here */}
                      <span className="flex flex-col leading-tight items-start justify-start">
                        {/* Added text-left here */}
                        <p className="text-[8px] font text-gray-300 font-semibold text-left uppercase">
                          Download on the
                        </p>
                        <p className="text-[20px] font font-semibold text-white text-left">
                          App Store
                        </p>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* image */}
              <div className="relative w-full md:flex items-center hidden md:col-span-6 mb-20 pl-15  ">
                {images.map((img, index) => {
                  // Determine the "State" of this specific image
                  const isActive = index === activeIndex; // The Big One
                  const isNext = index === (activeIndex + 1) % images.length; // Slot 2
                  const isThird = index === (activeIndex + 2) % images.length; // Slot 3 (The missing 4th image!)
                  const isPrev =
                    index === (activeIndex - 1 + images.length) % images.length; // Slot 4 (The one that just left)

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-1000 ease-in-out overflow-visible 
              ${isActive ? "z-50 w-[400px] h-[400px] opacity-100 translate-x-0 scale-100" : ""}
              ${isNext ? "z-40 w-[200px] h-[200px] opacity-80 translate-x-[180px] -translate-y-10 scale-90 top-15 left-45" : ""}
                ${isThird ? "z-30 w-[155px] h-[155px] opacity-60 translate-x-[180px] -translate-y-10 scale-90 bottom-10 right-65" : ""}
              ${isPrev ? "z-10 w-[145px] h-[145px] opacity-40 translate-x-[220px] translate-y-20 scale-70 bottom-18 left-30" : ""}
              ${!isActive && !isNext && !isPrev ? "opacity-0 scale-0" : ""} 
            `}
                    >
                      <Image
                        src={img}
                        alt="Charity"
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
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

// <div className="md:grid grid-cols-12 md:flex-row flex-col-reverse items-cente md:space-x-70 md:px-40 mt-20 relative md:mt-35 md:space-y-0 space-y-10">
//           <div className="flex md:hidden justify-center ">
//             <Image
//               src={phone}
//               alt=""
//               className="w-50 md:h-full h-60 object-top object-cover md:hidden"
//             />
//           </div>
//           <div className="md:col-span-7">
//             <p className="text-[#00304C] md:text-6xl font-medium text-5xl md:text-left text-center md:px-0 px-5 font ">
//               Make Impact With the Give A Meal App
//             </p>
//             <p className="text-[#00304CCC] font mt-10 leading-7 md:px-0 px-10 md:text-left text-center ">
//               Feeding someone in need is now as simple as a tap on your
//               screen. Help us build a world without hunger by downloading Give
//               A Meal and sharing a meal today. Every tap makes a difference.
//             </p>
//             <div className="flex mt-15 justify-center">
//               <button className="cursor-pointer btn">
//                 <Image src={play} alt="" className="w-30" />
//               </button>
//               <button className=" cursor-pointer btn">
//                 <Image src={ios} alt="" className="w-28" />
//               </button>
//             </div>
//           </div>
//           <div className="md:block hidden md:col-span-5 relative">
//             {/* MAIN IMAGE (NOW ON TOP) */}
//             <Image
//               src={HeroImg}
//               alt=""
//               className="w-[520px] h-[300px] object-cover rounded-xl relative z-50"
//             />

//             {/* IMAGE 2 */}
//             <Image
//               src={HeroImg2}
//               alt=""
//               className="w-40 absolute top-1/2 -right-10 -translate-y-1/2  z-10"
//             />
//             {/* IMAGE 2 */}
//             <Image
//               src={HeroImg2}
//               alt=""
//               className="w-40 absolute top-30 -right-10 -translate-y-1/2  z-10"
//             />

//             {/* IMAGE 3 */}
//             <Image
//               src={HeroImg3}
//               alt=""
//               className="w-36 absolute -top-6 right-5  z-10"
//             />
//           </div>
//         </div>

// <div className="md:col-span-6 relative flex items-center ml-10 w-full text-center">
{
  /* MAIN IMAGE (NOW ON TOP) */
}
{
  /* <Image
      src={HeroImg}
      alt=""
      className="w-[420px]  object-cover rounded-xl mb-10 relative z-50"
    /> */
}

{
  /* IMAGE 2 */
}
{
  /* <Image
      src={HeroImg2}
      alt=""
      className="w-40 absolute -bottom-5 right-30 -translate-y-1/2  z-20"
    /> */
}
{
  /* IMAGE 2 */
}
{
  /* <Image
      src={HeroImg2}
      alt=""
      className="w-35 absolute top-55 right-25 -translate-y-1/2  z-15"
    /> */
}

{
  /* IMAGE 3 */
}
{
  /* <Image
      src={HeroImg3}
      alt=""
      className="w-30 absolute top-12 right-32  z-10"
    />
  </div>; */
}
