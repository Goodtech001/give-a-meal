import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: `Through Give A Meal, we have seen lives touched in remarkable ways. What started as a simple act of giving has become a powerful movement of compassion, ensuring that no one is forgotten and many families receive the support they need.`,
    author: "T.T Temisan",
    image: "", // optional image URL
  },
  {
    text: `Through Give A Meal, we have seen lives touched in remarkable ways. What started as a simple act of giving has become a powerful movement of compassion, ensuring that no one is forgotten and many families receive the support they need.`,
    author: "Ray Okocha",
    image: "", // optional image URL
  },
  {
    text: `Through Give A Meal, we have seen lives touched in remarkable ways. What started as a simple act of giving has become a powerful movement of compassion, ensuring that no one is forgotten and many families receive the support they need.`,
    author: "Eddy Owase",
    image: "", // optional image URL
  },
  // Add more testimonials here for carousel
];

export default function TestimonialCard() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const { text, author, image } = testimonials[current];

  return (
    <div className="mt-15">
      {/* Title */}
      <div className="text-center space-y-4">
        <h1 className="font text-[#00304C] text-3xl font-semibold">The Power Of Giving</h1>
      <p className="font text-[#00304CCC]">
        Discover why thousands of donors choose Give A Meal <br /> to make a difference
        every day.
      </p>
      </div>


      <div className="relative p-8">
        <div className="flex flex-col items-center justify-center py-10 px-4 mt-10 z-99 bg-white">
        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-sm p-8 md:p-10 text-cente fle md:flex-col  md:items-center md:justify-between">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-11 md:-left-20  top-1/2 -translate-y-1/2 bg-white shadow rounded-lg  p-2 hover:bg-gray-100 transition"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
          </button>

          {/* Content */}
          {/* <div className="text-4xl text-gray-300 mb-4">“</div> */}
          <Icon
            icon="entypo:quote"
            width="30"
            height="30"
            className="text-[#03324E66]"
          />
          <div className="md:flex mt-5">
            <div className="md:pr-8">
              <p className="text-gray-700 leading-relaxed mb-6 font">{text}</p>
            </div>

            {/* Image Placeholder */}
            <div className="mt-6 md:mt-0 shrink-0">
              <div className="w-24 h-24 bg-gray-300 rounded-xl mx-auto md:mx-0"></div>
            </div>
          </div>

          <p className="font-semibold text-[#1e4356] font flex md:justify-end-safe">
            {author}
          </p>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-11 md:-right-20 top-1/2 -translate-y-1/2 bg-white shadow rounded-lg p-2 hover:bg-gray-100 transition"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-[#1e4356]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-40 w-60 h-60 bg-orange-300 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 right-40 w-60 h-60 bg-orange-300 rounded-full blur-2xl opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
      </div>
    </div>
  );
}
