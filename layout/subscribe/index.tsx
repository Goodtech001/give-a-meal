import Image from "next/image";
import React from "react";
import play from "@/public/assets/images/store-android-en 1.png";
import ios from "@/public/assets/images/store-ios-en 1.png";
import hand from "@/public/assets/images/2af300746a183a127eec00c78bab8b96121f967e.png";
import { div } from "framer-motion/client";
import { Icon } from "@iconify/react";

function Subscribe() {
  return (
    <div className="justify-center items-center flex lg:flex-row flex-col  lg:gap-24 mt-15 px-6 w-full">
      {/* Card 1: App Download */}
      <div className="relative w-full max-w-[500px]">
        {/* Fixed height background */}
        <div className="h-[250px] w-full rounded-xl bg-[#0D7FC1]"></div>

        {/* Fixed height content box matching the other side */}
        <div className="flex border border-gray-200 bg-white shadow-md w-[100%] h-[240px] rounded-lg absolute top-3 -left-2 md:-left-5">
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h1 className="font text-[#00304C] text-2xl md:text-3xl font-semibold leading-tight">
              Make Impact <br /> with the Give A <br /> Meal App
            </h1>

            <div className="flex gap-2">
              <button className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image src={play} alt="Play Store" className="w-24 md:w-24" />
              </button>
              <button className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image src={ios} alt="App Store" className="w-21 md:w-22" />
              </button>
            </div>
          </div>
          {/* Hand image pinned to bottom right */}
          <div className="relative w-34 h-34 md:w-44 md:h-44 mt-auto">
            <Image
              src={hand}
              alt=""
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Card 2: Newsletter */}
      <div className="relative w-full max-w-[500px] mt-12 lg:mt-0">
        {/* Fixed height background - identical to Card 1 */}
        <div className="h-[250px] w-full rounded-xl bg-[#FF8F07]"></div>

        {/* Fixed height content box - identical to Card 1 */}
        <div className="border p-6 border-gray-200 bg-white shadow-md w-[100%] h-[240px] rounded-lg absolute top-3 -left-2 md:-left-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font text-[#00304C] text-2xl md:text-3xl font-semibold">
                Stay Connected.
              </h1>
              <Icon
                icon="mdi:email-fast"
                className="text-gray-300 w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <p className="font text-[#00304CCC] text-sm mt-2 leading-snug">
              Be at the front-row seat to the lives you&apos;ve touched. Get the
              latest from Give A Meal delivered straight to your inbox.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#03324E] outline-none"
            />
            <Icon
              icon="hugeicons:arrow-right-01"
              width="44"
              height="44"
              className="border p-2 rounded-lg bg-[#03324E] text-white cursor-pointer hover:bg-[#05456b] transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
