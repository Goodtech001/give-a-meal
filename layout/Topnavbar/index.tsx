/* eslint-disable react/jsx-no-undef */
"use client";
import React from "react";
import useTopnavbar, { leftMenu } from "./useTopnavbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "@/components/logo";
import { motion } from "framer-motion";

function TopNavBar() {
  const {
    setNavOpen,
    getActiveUrl,
    setSubMenuClicked,
    subMenuClicked,
    navOpen,
    pathName,
    navListRef,
  } = useTopnavbar();

  return (
    <div className="p-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }} // Start off-screen and transparent
        animate={{ y: 0, opacity: 1 }} // Animate to position and full opacity
        exit={{ y: -100, opacity: 0 }} // Exit animation
        transition={{ duration: 0.5, ease: "easeOut" }} className="fixe z-20 w-full border border-[#0D7FC1B2] rounded-4xl py-2  bg-light/25  text-dark/75 bg-white">
        <div className="wrapper flex items-center justify-between gap-3 lg:container">
          <div className="flex gap-10 px-">
            {/* LOGO */}
            <Link href="/">
              <Logo className="w-24" variant="alt" />
            </Link>
            <ul className="hidden items-center gap-12 text-sm md:flex font">
              {leftMenu.map((menu, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setSubMenuClicked(menu.subPath || "")}
                  onMouseLeave={() => setSubMenuClicked("")}
                  className="relative"
                >
                  <Link
                    href={menu.path || ""}
                    className="flex items-center gap-2 font-medium hover:underline"
                  >
                    {menu.title}
                    {menu.subMenus && (
                      <Icon
                        icon="mynaui:chevron-down-solid"
                        className="h-4 w-4"
                      />
                    )}
                  </Link>

                  {menu.subMenus && (
                    <ol
                      className={`absolute left-0 h-0 min-w-60 overflow-hidden rounded-md bg-light shadow ${
                        subMenuClicked === menu.subPath && "h-fit!"
                      }`}
                    >
                      {menu.subMenus.map((subMenu, i) => (
                        <li key={i}>
                          <Link
                            href={
                              subMenu.external
                                ? subMenu.path
                                : menu.subPath + subMenu.path
                            }
                            target={subMenu.external ? "_blank" : "_self"}
                            className="block px-3 py-2 hover:bg-secondary/50 hover:text-primary"
                          >
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4 font">
            <button className="border p-2 rounded-full flex gap-1 text-[#03324E]">
              <p>sign-in</p>
              <Icon icon="stash:signin" width="24" height="24" />
            </button>

            <button className="btnn border border-transparent py-2 px-4 text-white bg-[#FF8F07] rounded-full">
              Donate
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default TopNavBar;
