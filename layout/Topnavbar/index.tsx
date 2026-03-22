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
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal";
import KingsChatButton from "@/components/kingschat-button";
import GoogleButton from "@/components/google-button";

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

  const { closeModal, isModalClosed, openModal } = useModal();

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
            <button
              className="border p-2 rounded-full flex gap-1 text-[#03324E]"
              onClick={() => openModal()}
            >
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
        className={`fixed inset-0 z-20 bg-dark/50 text-textcolor bg-white transition-all duration-500 ease-in-out md:hidden ${navOpen ? "visible clip-path-slide-top-down" : "invisible delay-200 clip-path-close"}`}
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

      {/* sign in modal */}
      <Modal
        className={`w-fu overflow-hidden bg-white rounded-2xl md:block hidden}`}
        closeModal={closeModal}
        isModalClosed={isModalClosed}
      >
        <div className="relative my-auto rounded-lg bg-light px-2 py-4 md:px-4 space-y-6">
          <button
            onClick={closeModal}
            className="absolute right-4 top-2 block rounded-lg text-[#0D7FC1] border-light/5 p-1.5 text-light cursor-pointer"
          >
            <Icon icon="iconoir:cancel" className="size-6 md:size-8" />
          </button>
          <div className="flex justify-center">
            <Logo className="w-28" variant="alt" />
          </div>
          <h1 className="font text-black text-2xl font-semibold text-center">
            Join The Mission <br /> or Sign in
          </h1>
          <p className="font text-[#64748B] text-center text-sm">
            Start tracking your donation and <br /> follow the impact.
          </p>
          <div className="space-y-3">
            <KingsChatButton />
            <GoogleButton />
          </div>
          <p className="text-[#64748B] font text-center text-sm">
            or continue with email
          </p>

          <div className="flex justify-center">
            <div className="flex justify-center border-2 border-gray-300 w-fit py-2 px-5 rounded-lg gap-2 ">
              <Icon
                icon="tabler:mail-fast"
                width="30"
                height="30"
                className="text-[#94A3B8]"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="text-sm"
              />
            </div>
          </div>

          <div className="flex justify-center px-38">
            <button className="flex justify-center border border-transparent py-3 w-full rounded-3xl bg-[#0D7FC1] text-white font">
              Continue
            </button>
          </div>

          <p className="text-xs px-35 font text-center">
            By signing up, you’re agreeing to our{" "}
            <Link
              href={"/"}
              className="underline text-[#0D7FC1] cursor-pointer"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href={"/"}
              className="underline text-[#0D7FC1] cursor-pointer"
            >
              Terms Of Use
            </Link>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default TopNavBar;
