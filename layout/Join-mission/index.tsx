import Image from 'next/image';
import React, { useRef } from 'react';
import mission from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";
import { Icon } from '@iconify/react';
import { useInView, motion } from 'framer-motion';

function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mt-10"
    >
      <h1 className='font text-4xl flex items-center justify-center font-semibold text-[#00304C]'>
        Join the Mission
      </h1>
      <p className='flex items-center justify-center text-center font mt-6'>
        Find a story that moves you and contribute to our ongoing goals. With Give A Meal, <br />
        your generosity goes exactly where it’s needed most.
      </p>

      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className='border-none md:border md:gap- flex md:flex-row flex-col items-center justify-center mt-15'
      >
        <div className='relative'>
          <Image 
            src={mission} 
            alt='' 
            className='md:w-100 w-120 rounded-l-2xl brightness-50' 
          />
          <div className='border bg-[#FF8F07] text-white flex w-fit font items-center p-4 rounded-tl-2xl rounded-br-2xl gap-2 absolute top-0 border-transparent'>
            <Icon icon="boxicons:siren" width="24" height="24" />
            <p>SPOTLIGHT CAUSE</p>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className='md:border border-gray-300 py-8 md:px-15 px-16 bg-white md:rounded-r-2xl shadow-lg w-fit'
        >
          <h1 className='text-[#00304C] font text-3xl font-semibold'>
            Help reach hungry families <br /> in the north
          </h1>
          <p className='font mt-6 text-[#00304CCC]'>
            Shared meals will provide hot meals, monthly <br /> food baskets and nutrition supplements to <br /> families in Northern Nigeria...
          </p>

          <div className='space-x-4 mt-6'>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className='border py-2 px-4 rounded-xl border-transparent text-white font bg-[#0D7FC1] transition duration-300'
            >
              Read More
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className='border py-2 px-4 rounded-xl border-transparent text-white font bg-[#FF8F07] transition duration-300'
            >
              Donate
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute top-10 left-20 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-20 right-20 w-40 h-40 bg-blue-600 rounded-full blur-2xl opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
      ></motion.div>
    </motion.div>
  );
}

export default Mission;