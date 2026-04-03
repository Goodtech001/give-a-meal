"use client";
import { Icon } from "@iconify/react";
// import Select from "react-select";
import { countryOptions } from "@/types/country-selct";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Option } from "lucide-react";
import Modal from "@/components/modal";
import Logo from "@/components/logo";

const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function ProfileInfo() {
  const [modalClosed, setModalClosed] = useState(true);
  return (
    <div className="">
      <form className="w-full max-w-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0 space-y-16 overflow-scroll relative">
        {/* nick name */}
        <div className="w-full">
          <div className="mt-2 flex gap-6 md:gap-20 items-center">
            {/* LEFT LABEL */}

            <div className="h-full flex justify-center items-center ">
              <span className="text-[#00304C] text-base font-bold font w-24 md:w-32 shrink-0">
                Nick Name:
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Jehovah son"
                className="w-full px-3 py-4 text-sm font rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
              />
            </div>
          </div>
        </div>

        {/* name="fullName" and last name */}

        <div className="w-full">
          <div className="mt-2 flex gap-6 md:gap-20  items-center">
            {/* LEFT LABEL */}
            <div className="h-full flex justify-center items-center md:pt-5 pt-0 md:pb-0 pb-20">
              <span className="text-[#00304C] font-bold text-base font w-24 md:w-32 shrink-0">
                Name:
              </span>
            </div>

            <div className="flex md:flex-row flex-col gap-6 w-full">
              {/* FIRST */}
              <div className="flex flex-col w-full ">
                <label className="text-[#00304C] text-base font font-bold font-semibold mb-2">
                  First:
                </label>

                <input
                  type="text"
                  placeholder="john"
                  className="w-full px-3 py-4 text-sm rounded-md font border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>

              {/* LAST */}
              <div className="flex flex-col w-full">
                <label className="text-[#00304C] text-base font font-bold font-semibold mb-2">
                  Last:
                </label>

                <input
                  type="text"
                  placeholder=" doe"
                  className="w-full px-3 py-4 text-sm rounded-md border font border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* email */}
        <div className="w-full">
          <div className="mt-2 flex gap-6 md:gap-20 items-center">
            {/* LEFT LABEL */}
            <span className="text-[#00304C] text-base md:block hidden font font-bold w-24 md:w-32 shrink-0">
              Email Address:
            </span>
            <span className="text-[#00304C] md:hidden block text-base font font-bold w-24 md:w-32 shrink-0">
              Email:
            </span>

            {/* RIGHT SIDE */}
            <div className="flex items-center flex-col w-full relative">
              {/* INPUT (aligned with others) */}
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-3 py-4 text-sm font rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
              />

              {/* ICON (floating beside, not affecting layout) */}
              <div className="absolute -left-9 top-4">
                <Icon
                  icon="tabler:lock-filled"
                  width="20"
                  height="20"
                  className="text-[#00304C]"
                />
              </div>
              {/* chnage email icon */}
              <button
                type="button"
                onClick={() => setModalClosed(!modalClosed)}
                className="absolute cursor-pointer flex gap-2 -bottom-8.5 items-center  -left-0"
              >
                <p className="text-text font font-bold">Change Email</p>
                <span>
                  {" "}
                  <Icon
                    icon="line-md:arrow-right"
                    width="18"
                    height="20"
                    className="text-[#00304C]"
                  />
                </span>
              </button>

              {/* Modal */}
              <Modal
                closeModal={() => setModalClosed(!modalClosed)}
                isModalClosed={modalClosed}
                parentClassName="!py-6 md:!py-10  !items-start flex items-center justify-center"
                className="!w-11/12 md:!w-fit"
              >
                <div className="w-full rounded-2xl bg-white p-6 shadow-2xl md:min-w-[40rem] md:p-8">
                  {/* Header */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setModalClosed(!modalClosed)}
                      aria-label="Close modal"
                      className="flex h-9 w-9 items-center justify-center rounded-lg cursor-pointer text-[#0D7FC1]"
                    >
                      <Icon icon="mingcute:close-line" className="text-3xl" />
                    </button>
                  </div>

                  {/* Logo */}
                  <div className="flex justify-center ">
                    <Logo className="w-32 md:w-40" variant="alt" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center text-center mt-4">
                    <h1 className="text-[#0F172A] text-2xl md:text-3xl font-semibold leading-tight">
                      Change Your Email Address
                    </h1>

                    <p className="text-[#64748B] mt-3">
                      Enter your new email address
                    </p>

                    {/* Input */}
                    <div className="flex items-center w-full md:w-sm gap-3 mt-8 px-3 py-3 text-sm rounded-xl border border-gray-400">
                      <Icon
                        icon="tabler:mail-fast"
                        className="text-2xl text-[#64748B] shrink-0"
                      />

                      <div className="flex items-center gap-2 w-full">
                        <div className="w-[1px] h-4 bg-gray-400" />

                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center my-8">
                    <button
                      type="submit"
                      className="w-auto px-16 md:px-20 py-3.5 bg-[#64748B] rounded-4xl text-lg text-white cursor-pointer 
      transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                      <span>Continue</span>
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        {/* country */}
        <div className="w-full pt-5 ">
          <div className="mt-2 flex gap-6 md:gap-20 items-center">
            {/* LEFT LABEL - Stays exactly the same */}
            <div className="h-full flex justify-center items-center">
              <span className="text-[#00304C] text-base  font-bold font w-24 md:w-32 shrink-0">
                Country:
              </span>
            </div>

            {/* RIGHT SIDE - Select Dropdown */}
            <div className="flex flex-col w-full">
              <CountrySelect />
            </div>
          </div>
        </div>

        {/* button */}

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="btn-secondary w-full md:w-auto md:px-20 py-4   rounded-xl text-lg text-white cursor-pointer 
             transition-transform transition-colors duration-300 font ease-in-out 
             hover:scale-105"
          >
            <span>Edit Profile</span>
          </button>
        </div>
      </form>
      <div className="absolute md:block hidden top-0 -left-20 w-10 h-28 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute  md:block hidden  bottom-30 -right-5 w-10 h-28 bg-blue-400 rounded-full blur-2xl opacity-10"></div>
    </div>
  );
}

type Option = {
  value: string;
  label: string;
  flag: string;
};
const formatOptionLabel = (option: Option) => (
  <div className="flex items-center gap-2">
    <Image
      src={option.flag}
      alt={option.label}
      width={25}
      height={25}
      className="rounded-full object-cover"
    />
    <span>{option.label}</span>
  </div>
);

export function CountrySelect() {
  return (
    <ReactSelect
      options={countryOptions}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatOptionLabel={formatOptionLabel as any}
      placeholder="Select country"
      unstyled
      classNames={{
        control: () =>
          "w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-[#00304c]",
        menu: () => "mt-2 border rounded-md shadow-lg bg-white",
        option: ({ isFocused }) =>
          `px-3 py-2 cursor-pointer ${isFocused ? "bg-gray-100" : ""}`,
      }}
    />
  );
}
