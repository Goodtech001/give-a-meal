/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { useInView, motion } from "framer-motion";
import carrd from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";

interface CardData {
  title: string;
  description: string;
  target: string;
  current: string;
  percentage: string;
}

interface CardsProps {
  data: CardData[];
  numCards: number;
}

function Cards({ data, numCards }: CardsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="justify-center flex mt-10 px-4"
    >
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 md:grid md:grid-cols-3 md:overflow-x-visible">
        {data.slice(0, numCards).map((card, index) => (
          <motion.div
            key={index}
            className="relative border w-80 rounded-t-2xl border-gray-300 mb-5 shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Image src={carrd} alt="" className="w-full rounded-l-2xl rounded-tr-2xl brightness-50" />
              <div className="border bg-[#0D7FC1] text-white flex w-fit font items-center py-2 px-4 rounded-tl-2xl gap-2 absolute bottom-0 right-0 border-transparent">
                <p>Read More</p>
              </div>
            </div>
            <div className="p-6">
              <div>
                <h1 className="font mt-2 text-left text-2xl font-semibold text-[#03324E] line-clamp-2">
                  {truncateText(card.title, 20)}
                </h1>
                <p className="font mt-2 text-[#00304CCC] line-clamp-2">
                  {truncateText(card.description, 20)}
                </p>
              </div>
              <div className="flex justify-between mt-8 border-b border-gray-400 space-y-2">
                <div className="flex font text-[#03324E] font-semibold">
                  <Icon icon="mingcute:target-line" width="24" height="24" />
                  <p>Target:</p>
                </div>
                <p className="font text-[#03324E] font-medium">{card.target}</p>
              </div>
              <div className="flex justify-between justify-aroun mt-4">
                <div className="flex font text-[#03324E] font-semibold">
                  <p>{card.current}</p>
                </div>
                <p className="font text-[#03324E] font-medium">
                  {card.percentage}
                </p>
              </div>
              <button className="btn btn-secondary w-full mt-5">Donate</button>
            </div>
          </motion.div>
        ))}
      </div>
      {numCards < data.length && (
        <div className="flex justify-center mt-10">
          <button className="border py-3 px-4 bg-[#0D7FC1] flex justify-center text-white rounded-lg font">
            See more
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Cards;