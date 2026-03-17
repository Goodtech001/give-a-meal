import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/f490be9fdb7d811de46a13ff3437adb776920557.png";
import Link from "next/link";
import kingschat from "@/public/assets/icons/Frame 1.png"
import { Icon } from "@iconify/react";
import fade from "@/public/assets/icons/2922c0605f3ece2f6b093b1f8225600fa9586b11.png"

function Footer() {
  return (
    <div className="md:flex justify-center items-center space-x-20 mt-20 border mx-30 rounded-xl py-15 bg-[#00304C] relative overflow-hidden">
      {/* first */}
      <div className="space-y-8">
        <p className="font text-white">Powered By Innercity Mission</p>
        <div className="relative">
          <Image src={logo} alt="" className="w-50 object-cover brightness-75  mask-[linear-gradient(to_top,transparent_30%,black_70%)]" />
          {/* <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0, 48, 76, 1)_50%,transparent_50%)]"></div> */}
        </div>
      </div>

      {/* second */}
      <div className="flex flex-col text-white">
        <Link href={"/"} className="font">ABOUT</Link>
        <Link href={"/"} className="font">PRIVACY</Link>
      </div>

      {/* third */}
      <div className="flex flex-col text-white">
        <Link href={"/"} className="font">CONTACT</Link>
        <Link href={"/"} className="font">TERMS OF USE</Link>
      </div>

      {/* fourth */}
      <div className="space-y-4 mt-15">
        <ul className="flex gap-4">
            <Link href={"/"}><li><Image src={kingschat} alt="" className="w-6 btnn"/></li></Link>
            <Link href={"/"}><li><Icon icon="mdi:instagram" width="24" height="24"  className="text-white btnn"/></li></Link>
            <Link href={"/"}><li><Icon icon="ic:baseline-tiktok" width="24" height="24" className="text-white btnn" /></li></Link>
        </ul>
        <p className="font text-white">&#169; 2026 Give A Meal. All rights reserved</p>
      </div>

      <Image src={fade} alt=""  className="w-90 absolute -right-30 overflow-hidden -top-20 opacity-10"/>
    </div>
  );
}

export default Footer;
