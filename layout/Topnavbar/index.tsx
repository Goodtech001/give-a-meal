/* eslint-disable react/jsx-no-undef */
"use client";
import React from "react";
import useTopnavbar, { leftMenu } from "./useTopnavbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "@/components/logo";
import { motion } from "framer-motion";
import Image from "next/image";
import kingschat from "@/public/assets/icons/Frame 1.png";

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
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixe z-20 w-full border border-[#0D7FC1B2] rounded-4xl py-2  bg-light/25  text-dark/75 bg-white"
      >
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
                  onMouseEnter={() => setSubMenuClicked(menu.subPath || "/")}
                  onMouseLeave={() => setSubMenuClicked("")}
                  className="relative"
                >
                  <Link
                    href={menu.path || "/"}
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

          <div className="md:flex space-x-4 font hidden">
            <button className="border p-2 rounded-full flex gap-1 text-[#03324E]">
              <p>sign-in</p>
              <Icon icon="stash:signin" width="24" height="24" />
            </button>

            <button className="btnn border border-transparent py-2 px-4 text-white bg-[#FF8F07] rounded-full">
              Donate
            </button>
          </div>

          {/* MOBILE MENU BTN */}
          <button onClick={() => setNavOpen((p) => !p)} className="md:hidden">
            <Icon
              icon="eva:menu-fill"
              className="text-7xl px-4 text-[#0D7FC1]"
            />
          </button>
        </div>
      </motion.nav>

      {/* ===================== MOBILE SLIDE ===================== */}
      <div
        className={`fixed inset-0 z-20 bg-dark/50 text-textcolor backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${navOpen ? "visible clip-path-slide-top-down" : "invisible delay-200 clip-path-close"}`}
      >
        <div
          className={`${navOpen ? "delay-200 clip-path-slide-top-down" : "clip-path-close"} h-full w-full bg-light px-2 py-3 duration-500`}
        >
          <button
            onClick={() => setNavOpen(false)}
            className="ml-auto justify-end flex"
          >
            <Icon icon="eva:close-fill" className="text-3xl" />
          </button>
          <div className="flex items-center justify-center">
            <Logo variant="alt" className="w-24" />
          </div>

          <ul ref={navListRef} className="mt-8 space-y-10">
            {[...leftMenu].map((menu, index) => (
              <li
                key={index}
                onMouseEnter={() => setSubMenuClicked(menu.subPath || "")}
                onMouseLeave={() => setSubMenuClicked("")}
                className="relative flex justify-center font font-semibold text-[#00304C] text-xl "
              >
                <Link
                  href={menu.path || ""}
                  className="flex items-center gap-2 font-medium hover:underline space-y-4"
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
                    className={`absolute left-0 h-0 min-w-60 overflow-hidden rounded-md bg-light text-sm shadow ${subMenuClicked == menu.subPath && "!h-fit"}`}
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
                          className="flex w-full items-center justify-between border-4 border-transparent px-3 py-2 text-textcolor hover:border-l-primary hover:bg-blue-100 hover:font-semibold hover:text-primary"
                        >
                          {subMenu.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}

            <ul className="flex justify-center gap-4">
              <Link href={"/"} className="border bg-[#00304C] p-2 rounded-full">
                <li>
                  <Image src={kingschat} alt="" className="md:w-7 w-6 btnn" />
                </li>
              </Link>
              <Link href={"/"} className="border bg-[#00304C] p-2 rounded-full">
                <li>
                  <Icon
                    icon="mdi:instagram"
                    width="28"
                    height="28"
                    className=" text-white btnn"
                  />
                </li>
              </Link>
              <Link href={"/"} className="border bg-[#00304C] p-2 rounded-full">
                <li>
                  <Icon
                    icon="ic:baseline-tiktok"
                    width="28"
                    height="28"
                    className="text-white btnn"
                  />
                </li>
              </Link>
            </ul>
            <div className="flex space-x-4 font justify-center">
              <button className="border p-2 rounded-full flex gap-1 text-[#03324E]">
                <p>sign-in</p>
                <Icon icon="stash:signin" width="24" height="24" />
              </button>

              <button className="btnn border border-transparent py-2 px-4 text-white bg-[#FF8F07] rounded-full">
                Donate
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
