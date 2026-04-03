/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useRef, useState } from "react";
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
  const [step, setStep] = useState("email"); // "email" | "otp"
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { closeModal, isModalClosed, openModal } = useModal();
  const handleContinue = async () => {
    // if (!email) return;

    // // call your API to send OTP
    // await fetch("/api/send-code", {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    // });

    setStep("otp");
  };

  const handleVerify = async () => {
    const code = otp.join("");

    if (code.length < 4) {
      alert("Enter complete code");
      return;
    }

    const res = await fetch("/api/verify-code", {
      method: "POST",
      body: JSON.stringify({ email, code }),
    });

    if (res.ok) {
      closeModal();
    } else {
      alert("Invalid code");
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move forward
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const [showMobileAuth, setShowMobileAuth] = useState(false);

  return (
    <div className="p-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }} // Start off-screen and transparent
        animate={{ y: 0, opacity: 1 }} // Animate to position and full opacity
        exit={{ y: -100, opacity: 0 }} // Exit animation
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixe z-20 w-full border border-[#0D7FC1B2] rounded-4xl py-2  bg-light/25  text-dark/75 bg-white"
      >
        <div className="wrapper flex items-center justify-between md:gap-3 lg:container">
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

          <div className="flex items-center">
            <div className="md:space-x-4 font flex">
              <button
                className="border p-2 rounded-full flex gap-1 text-[#03324E]"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setShowMobileAuth(true);
                  } else {
                    openModal();
                  }
                }}
              >
                <p>sign-in</p>
                <Icon icon="stash:signin" width="24" height="24" />
              </button>

              <Link
                href={"/donate"}
                className="btnn border border-transparent py-2 px-4 text-white bg-[#FF8F07] rounded-full hidden md:flex"
              >
                Donate
              </Link>
            </div>

            {/* MOBILE MENU BTN */}
            <button onClick={() => setNavOpen((p) => !p)} className="md:hidden">
              <Icon
                icon="mynaui:menu"
                className="text-7xl px-3 text-[#0D7FC1]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ===================== MOBILE SLIDE ===================== */}
      <div
        className={`fixed inset-0 z-80 bg-dark/50 text-textcolor bg-white transition-all duration-500 ease-in-out md:hidden ${navOpen ? "visible clip-path-slide-top-down" : "invisible delay-200 clip-path-close"}`}
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
        <div className="relative my-auto   rounded-lg bg-light px-2 py-4 md:px-4 space-y-6">
          <button
            onClick={closeModal}
            className="absolute right-4 top-2 block rounded-lg text-[#0D7FC1] border-light/5 p-1.5 text-light cursor-pointer"
          >
            <Icon icon="iconoir:cancel" className="size-6 md:size-8" />
          </button>
          <div className="flex justify-center">
            <Logo className="w-28" variant="alt" />
          </div>
          {step === "email" && (
            <>
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
                <button
                  className="flex justify-center border border-transparent py-3 w-full rounded-3xl bg-[#0D7FC1] text-white font"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === "otp" && (
            <div className="hidden md:block space-y-6">
              <h1 className="text-center font text-3xl font-semibold">
                Confirmation Code
              </h1>
              <p className="text-center text-sm font text-[#64748B]">
                Provide the 4-digit confirmation code sent <br />
                <span className=" font">sent wedr-----343@gmail.com </span>
              </p>

              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#0D7FC1] outline-none"
                  />
                ))}
              </div>

              <div className="text-center space-y-2 space-x-1">
                <button
                  onClick={() => setStep("email")}
                  className="text-sm font"
                >
                  Didn&apos;t recieve mail?
                </button>

                <button className="text-sm font text-[#0D7FC1]">
                  Resend code ?
                </button>
              </div>

              <div className="flex justify-center px-38">
                <button
                  onClick={handleVerify}
                  className="flex justify-center font py-3 w-full rounded-3xl bg-[#0D7FC1] text-white"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

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

      {/* ===================== MOBILE SIGN-IN ===================== */}
      <div
        className={`fixed inset-0 z-80  bg-white transition-all duration-500 md:hidden ${
          showMobileAuth
            ? "visible clip-path-slide-top-down"
            : "invisible clip-path-close"
        }`}
      >
        <div className="h-full w-full bg-light px-4 py-4 overflow-y-auto">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowMobileAuth(false)}
            className="ml-auto flex"
          >
            <Icon icon="eva:close-fill" className="text-3xl" />
          </button>

          {/* 👇 REUSE YOUR MODAL CONTENT EXACTLY */}
          <div className="relative my-auto rounded-lg bg-light px-2 py-4 md:px-4 space-y-6">
            <div className="flex justify-center">
              <Logo className="w-28" variant="alt" />
            </div>

            {step === "email" && (
              <>
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
                  <div className="flex justify-center border-2 border-gray-300 w-fit py-2 md:px-5 px-3 rounded-lg gap-2 ">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-center md:px-38 px-8">
                  <button
                    className="flex justify-center border border-transparent py-3 w-full rounded-3xl bg-[#0D7FC1] text-white font"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {step === "otp" && (
              <div className="md:hidden block space-y-6">
                <h1 className="text-center font text-3xl font-semibold">
                  Confirmation Code
                </h1>
                <p className="text-center text-sm font text-[#64748B]">
                  Provide the 4-digit confirmation code sent <br />
                  <span className=" font">sent wedr-----343@gmail.com </span>
                </p>

                <div className="flex justify-center gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputsRef.current[index] = el;
                      }}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#0D7FC1] outline-none"
                    />
                  ))}
                </div>

                <div className="text-center space-y-2 space-x-1">
                  <button
                    onClick={() => setStep("email")}
                    className="text-sm font"
                  >
                    Didn&apos;t recieve mail?
                  </button>

                  <button className="text-sm font text-[#0D7FC1]">
                    Resend code ?
                  </button>
                </div>

                <div className="flex justify-center md:px-38 px-8">
                  <button
                    onClick={handleVerify}
                    className="flex justify-center font py-3 w-full rounded-3xl bg-[#0D7FC1] text-white"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}

            <p className="text-xs md:px-35 px-10 font text-center">
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
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
