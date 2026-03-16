/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import line from "@/public/assets/images/Line 3.png";
import carrd from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg"
import { useInView, motion } from "framer-motion";

const cardData = [
  {
    image: "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg",
    title: "Help reach hungry families in the north",
    description: "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
  // Add more card objects here as needed
  {
    image: "@/public/assets/images/another_image.jpg",
    title: "Support education for children",
    description: "Providing school supplies and resources for underprivileged children...",
    target: "150,000 students",
    current: "75,000 students",
    percentage: "50%",
  },
  {
    image: "@/public/assets/images/yet_another_image.jpg",
    title: "Clean water initiatives",
    description: "Ensuring access to clean and safe drinking water...",
    target: "100,000 liters",
    current: "50,000 liters",
    percentage: "50%",
  },
];

function Cards() {

    const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
     <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
       <div className="md:flex fl gap-5 items-center justify-center mt-25 relative card-container">
      {cardData.map((card, index) => (
        <motion.div key={index} className="relative border w-fit rounded-t-2xl border-gray-300 mb-5"  whileHover={{ scale: 1.05 }}>
          <div className="relative">
            <Image
              src={carrd}
              alt=""
              className="w-80 rounded-l-2xl rounded-tr-2xl brightness-50"
            />
            <div className="border bg-[#0D7FC1] text-white flex w-fit font items-center py-2 px-4 rounded-tl-2xl gap-2 absolute bottom-0 right-0 border-transparent">
              <p>Read More</p>
            </div>
          </div>

          <div className="p-6">
            <div>
               <h1 className="font mt-2 text-left text-2xl font-semibold text-[#03324E]">
                Help reach hungry <br /> families in the north{" "}
              </h1>
              <p className="font mt-2 text-[#00304CCC]">
                Shared meals will provide hot meals, <br /> monthly food basket
                and nutriton <br /> supplements to families in the <br />{" "}
                Northern Nigeria...
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
              <p className="font text-[#03324E] font-medium">{card.percentage}</p>
            </div>
            <button className="btn btn-secondary w-full mt-5">Donate</button>
          </div>
        </motion.div>
      ))}
      
    </div>
    <div className="flex justify-center mt-10">
      <button className="border py-3 px-4 bg-[#0D7FC1] flex justify-center text-white rounded-lg font">See more</button>
    </div>
    </motion.div>
   
  );
}

export default Cards;