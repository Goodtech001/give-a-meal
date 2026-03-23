"use client";
import React, { useRef } from "react";
import {
  AnimatePresence,
  circInOut,
  motion,
  spring,
  useInView,
} from "framer-motion";
import Image from "next/image";
import rectangle from "@/public/assets/images/Rectangle 4.jpeg";

function AboutHero() {
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
        className="mt-30"
      >
        <div className="bg-about bg-center bg- w-full mt-10 relative">
          <div className="absolut top-0 text-center mt-30 space-y-4 mb-25">
            <h1 className="font text-6xl font-semibold text-[#00304C]">
              Who We Are
            </h1>
            <p className="font text-[#00304CCC] text-lg">
              When we join forces, our reach has no limits.
            </p>
          </div>

          <div className="absolute top-4 left-40 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-blue-600 rounded-full blur-2xl opacity-10"></div>
        </div>

        <Image src={rectangle} alt="alt" />
      </motion.div>
    </AnimatePresence>
  );
}

export default AboutHero;
