"use client";
import { Icon } from "@iconify/react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DonateCard({ card, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        key={index}
        // Added max-w-[340px] to stop it from growing too big and flex-col for alignment
        className="relative border w-[330px] max-w-[340px] rounded-t-2xl border-gray-300 mb-5 flex flex-col overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative h-[250px]">
          {" "}
          {/* Controlled height for image */}
          <Image
            src={card.image}
            alt=""
            fill
            // Using object-cover ensures the image fills the area without stretching
            className="object-cover  rounded-t-2xl brightness-50"
          />
          <div className="border bg-[#0D7FC1] text-white flex w-fit font items-center py-2 px-4 rounded-tl-2xl gap-2 absolute bottom-0 right-0 border-transparent">
            <p>Read More</p>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="min-h-[160px]">
            {" "}
            {/* Keeps text area consistent even if text is short */}
            <h1 className="font mt-2 text-base text-left text-xl font-semibold text-[#03324E]">
              Help reach hungry <br /> families in the north
            </h1>
            <p className="font mt-2 text-[#00304CCC] text-sm leading-relaxed">
              Shared meals will provide hot meals, <br /> monthly food basket
              and nutriton <br /> supplements to families in the <br /> Northern
              Nigeria...
            </p>
          </div>

          {/* Stats Section - mt-auto pushes this to the bottom so all cards align */}
          <div className="mt-auto">
            <div className="flex justify-between mt-5 border-b border-gray-400 pb-2">
              <div className="flex font text-[#03324E] font-semibold items-center">
                <Icon
                  icon="mingcute:target-line"
                  width="24"
                  height="20"
                  className="mr-1"
                />
                <p>Target:</p>
              </div>
              <p className="font text-[#03324E] font-medium">{card.target}</p>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex font text-[#03324E] font-semibold">
                <p>{card.current}</p>
              </div>
              <p className="font text-[#03324E] font-medium">
                {card.percentage}
              </p>
            </div>

            <button className="btn btn-secondary w-full mt-5">Donate</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
