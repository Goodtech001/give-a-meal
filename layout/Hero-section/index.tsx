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
import HeroImg from "@/public/assets/images/heroimg.png";
import HeroImg2 from "@/public/assets/images/heroimg2.png";
import HeroImg3 from "@/public/assets/images/heroimg3.png";
import { Icon } from "@iconify/react";

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
          <div className="container mx-auto pt-14">
            <div className="grid grid-cols-12 item-center">
              {/* hero text */}
              <div className="md:col-span-6">
                <div className="max-w-lg">
                  <p className="text-[#00304C] md:text-6xl font-medium text-5xl md:text-left text-center md:px-0 px-5 font ">
                    Make Impact With the Give A Meal App
                  </p>
                </div>
                <div className="max-w-lg">
                  <p className="text-[#00304CCC] font mt-5 leading-7 md:text-justify text-base md:px-0 px-10 text-center ">
                    Feeding someone in need is now as simple as a tap on your
                    screen. Help us build a world without hunger by downloading
                    Give A Meal and sharing a meal today. Every tap makes a
                    difference, bringing hope, nourishment, and support to
                    people and families who need it most.
                  </p>
                </div>
                {/* button */}
                <div className="my-10 flex flex-row gap-5 ">
                  {/* play store */}
                  <div>
                    <button className="flex cursor-pointer items-center gap-2 py-2 px-3 bg-black rounded-md hover:scale-105 transition-transform duration-300">
                      <Icon
                        icon="logos:google-play-icon"
                        className="w-9 h-9 shrink-0"
                      />

                      {/* Added items-start here */}
                      <span className="flex flex-col leading-tight items-start justify-start">
                        {/* Added text-left here */}
                        <p className="text-[12px]  font text-gray-300 font-semibold text-left uppercase">
                          Get it on
                        </p>
                        <p className="text-[20px]  font font-semibold text-white text-left">
                          Google Play
                        </p>
                      </span>
                    </button>
                  </div>
                  {/* ios */}
                  <div>
                    <button className="flex cursor-pointer items-center gap-2 py-2 px-3 bg-black rounded-md hover:scale-105 transition-transform duration-300">
                      <Icon
                        icon="icomoon-free:appleinc"
                        className="w-9 h-9 shrink-0 text-white"
                      />

                      {/* Added items-start here */}
                      <span className="flex flex-col leading-tight items-start justify-start">
                        {/* Added text-left here */}
                        <p className="text-[9.5px] font text-gray-300 font-semibold text-left uppercase">
                          Download on the
                        </p>
                        <p className="text-[23px] font font-semibold text-white text-left">
                          App Store
                        </p>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* image */}
              <div className="md:col-span-6 relative ">
                {/* MAIN IMAGE (NOW ON TOP) */}
                <Image
                  src={HeroImg}
                  alt=""
                  className="w-lg  object-cover rounded-xl relative z-50"
                />

                {/* IMAGE 2 */}
                <Image
                  src={HeroImg2}
                  alt=""
                  className="w-50 absolute bottom-0 right-10 -translate-y-1/2  z-20"
                />
                {/* IMAGE 2 */}
                <Image
                  src={HeroImg2}
                  alt=""
                  className="w-50 absolute top-55 right-10 -translate-y-1/2  z-15"
                />

                {/* IMAGE 3 */}
                <Image
                  src={HeroImg3}
                  alt=""
                  className="w-36 absolute top-6 right-27  z-10"
                />
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
