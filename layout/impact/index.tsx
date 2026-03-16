import React from "react";
import { motion } from "framer-motion";

function Impact() {
  return (
    <div className="md:flex grid-cols-2 mt-10 justify-center items-center relative">
      <div className="md:border md:w-260  flex md:flex-row flex-col-reverse items-center rounded-l-2xl border-gray-200 md:space-x-20 md:justify-normal justify-center">
        <div className="md:border-none border rounded-2xl border-gray-300">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-110 h-110 rounded-t-2xl rounded-bl-2xl bg-[#FF8F07] font text-white "
            >
              <div className="p-5 space-y-4">
                <p className="border font py-2 rounded-lg px-4 w-fit text-xs">
                  MEALS SHARED
                </p>
                <p className="text-xl font-semibold">300,000,000 meals</p>
                <p className="text-xs">+10,000 meals daily</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute w-95 h-72 bg-[#03324E] rounded-t-2xl rounded-bl-2xl bottom-0"
              >
                <div className="p-5 space-y-4">
                  <p className="border font py-2 rounded-lg px-4 w-fit text-xs">
                    OUR SUPPORTERS
                  </p>
                  <p>30,000 supporters</p>
                  <p className="text-xs">+10,000 supports today</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute w-80 h-35 bg-[#0D7FC1] rounded-t-2xl rounded-bl-2xl bottom-0"
              >
                <div className="p-5 space-y-4">
                  <p className="border font py-2 rounded-lg px-4 w-fit text-xs">
                    GOALS
                  </p>
                  <p>300 goals</p>
                  <p className="text-xs">+4 added today</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex justify-center md:py-0 py-6">
            <button className="flex justify-center btnn py-2 px-4 text-white font rounded-xl bg-[#0D7FC1] md:hidden mt-">
            Read More
          </button>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="font text-[#03324E] text-4xl font-semibold text-center">
            Our ImpACT
          </h1>
          <p className="text-[#00304CCC] font md:text-left text-center">
            Shared meals will provide hot meals, <br /> monthly food basket and
            nutriton <br /> supplements to families in the <br /> Northern
            Nigeria...
          </p>
          <button className="btnn py-2 px-4 text-white font rounded-xl bg-[#0D7FC1] hidden md:block">
            Read More
          </button>
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-20 w-40 h-40 bg-blue-700 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 right-20 w-40 h-40 bg-blue-700 rounded-full blur-2xl opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
    </div>
  );
}

export default Impact;
