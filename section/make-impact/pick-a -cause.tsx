"use client";
import groupHand from "@/public/assets/images/group.png";
import Image from "next/image";
import rectangle from "@/public/assets/images/Rectangle 4.jpeg";
import {
  AnimatePresence,
  circInOut,
  motion,
  spring,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export default function PickaCause() {
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
        <div>
          <div className="relative w-full h-[350px] mt-20 overflow-hidden rounded-xl">
            {/* 1. The Image Background */}
            <Image
              src={groupHand}
              alt="grouphand"
              fill
              className="object-contain"
              priority // Good for Hero images
            />

            {/* 3. The Text Content Centered on top */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center mb-13 p-4">
              <h1 className="text-[#00304C] text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Pick A Cause. Feed A Life
              </h1>

              <p className="max-w-lg pt-5  text-lg md:text-xl text-[#00304CCC]">
                Choose a cause that moves you, and we will ensure every meal
                reaches those in need.
              </p>
            </div>
          </div>
          <div className="absolute top-60 left-30 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-0 w-40 h-40 bg-blue-400 rounded-full blur-2xl opacity-10"></div>
          <Image src={rectangle} alt="alt" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
