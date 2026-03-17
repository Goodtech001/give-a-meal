import Image from "next/image";
import React from "react";
import play from "@/public/assets/images/store-android-en 1.png";
import ios from "@/public/assets/images/store-ios-en 1.png";
import hand from "@/public/assets/images/2af300746a183a127eec00c78bab8b96121f967e.png";
import { div } from "framer-motion/client";
import { Icon } from "@iconify/react";

function Subscribe() {
  return (
    <div className="justify-center flex md:flex-row flex-col gap-30 mt-15">

      <div className="relative">
        <div className="h-57 w-120 rounded-xl bg-[#0D7FC1]"></div>

        <div className="flex border border-gray-200 bg-white shadow-md w-fit rounded-lg absolute top-3 -left-4 ">
          <div className="space-y-6 px-6 py-9">
            <h1 className="font text-[#00304C] text-3xl font-semibold">
              Make Impact <br /> with the Give A <br /> Meal App
            </h1>

            <div className="flex justify-cente gap-2">
              <button className="cursor-pointer btnn ">
                <Image src={play} alt="" className="w-25" />
              </button>
              <button className=" cursor-pointer btnn">
                <Image src={ios} alt="" className="w-23" />
              </button>
            </div>
          </div>

          <Image src={hand} alt="" className="w-55 h-55 flex mt-auto" />
        </div>
      </div>

      <div className="relative ">
        <div className="h-57 w-120 rounded-xl bg-[#FF8F07]"></div>

        <div className="border p-4 border-gray-200 bg-white shadow-md w-fit rounded-lg absolute top-3 -left-4 ">
          <div className=" space-x-39  flex items-center ">
            <h1 className="font text-[#00304C] text-3xl font-semibold">
              Stay Connected.
            </h1>
           <Icon icon="mdi:email-fast" width="54" height="54" className="text-gray-300"/>
          </div>
          <p className="font text-[#00304CCC]"> Be at the front-row seat to the lives you&apos;ve <br /> touched. get the latest from Give A Meal <br /> delivered straight to your inbox.</p>

          <div className="py-4 flex gap-2 items-center">
            <input type="email" placeholder="Enter Your Email" className="w-full h-10 p-4 rounded-md border border-gray-300"/>
            <Icon icon="hugeicons:arrow-right-01" width="44" height="44"  className="border p-2 rounded-lg bg-[#03324E] text-white btnn"/>
          </div>

          {/* <Image src={hand} alt="" className="w-55 h-55" /> */}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
