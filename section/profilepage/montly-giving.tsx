"use client";
import { useState } from "react";
import Image from "next/image";
import GivingPic from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";

export default function MonthlyGiving() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="w-full max-w-full  h-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0">
      <div className="flex justify-center items-center flex-col text-center mx-auto">
        <h1 className="font text-lg text-text ">
          Manage your givings to the causes you’re supporting.
        </h1>
      </div>
      {/* switch and text */}
      <div className="flex flex-col pt-10 gap-2">
        {/* text and switch */}
        <div className="flex flex-row items-center gap-3">
          <span className="text-text text-lg font font-bold">
            Give Monthly to Support the Give A Meal
          </span>
          <div className="flex items-center ">
            {/* THE SWITCH TRACK */}
            <div
              onClick={() => setIsOn(!isOn)}
              className={`relative w-13 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
                isOn ? "bg-[#FF8F07]" : "bg-gray-300"
              }`}
            >
              {/* THE SWITCH KNOB */}
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md p-1  transform transition-transform duration-300 ease-in-out ${
                  isOn ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>
        <p className="text-text font text-lg ">
          You can join us to feed the ones in need by giving monthly.
        </p>
      </div>
      {/* support card and other details will be here */}
      <div className="w-full flex items-start">
        <div className="w-full flex justify-start items-start pt-10">
          <div className="flex items-center gap-10 w-full max-w-3xl">
            {/* DOT */}
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF8F07] rounded-full shrink-0 shadow-sm mt-2" />

            {/* CARD */}
            <div className="grid grid-cols-12 items-stretch border border-gray-500 rounded-2xl h-[280px] pr-5 overflow-hidden gap-5 md:gap-5 w-full">
              {/* IMAGE */}
              <div className="col-span-4 h-full">
                <div className="relative w-full h-full min-h-[120px]">
                  <Image
                    src={GivingPic}
                    alt="giving pic"
                    fill
                    className="object-cover rounded-l-2xl"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="col-span-5 flex justify-center flex-col gap-4">
                <h1 className="text-text font-bold text-xl">
                  Help reach hungry families in the north
                </h1>
                <p className="text-text text-base">
                  Shared meals will provide hot meals, monthly food basket and
                  nutrition supplements to families in Northern Nigeria...
                </p>
              </div>

              {/* BUTTONS */}
              <div className="col-span-3 flex flex-col justify-center gap-3">
                <button className="btn-primary py-3 rounded-xl hover:scale-105 transition">
                  Read more
                </button>

                <button className="btn-secondary py-3 rounded-xl hover:scale-105 transition">
                  Opt - out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
