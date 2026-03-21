"use client";
import { Icon } from "@iconify/react";
// import Select from "react-select";
import { countryOptions } from "@/types/country-selct";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Option } from "lucide-react";
import Modal from "@/components/modal";

const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function ProfileInfo() {
  const [modalClosed, setModalClosed] = useState(true);
  return (
    <div>
      <form className="w-full max-w-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0 space-y-16">
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
                className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
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
                <label className="text-[#00304C] text-base font-bold font-semibold mb-2">
                  First:
                </label>

                <input
                  type="text"
                  placeholder="john"
                  className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>

              {/* LAST */}
              <div className="flex flex-col w-full">
                <label className="text-[#00304C] text-base font-bold font-semibold mb-2">
                  Last:
                </label>

                <input
                  type="text"
                  placeholder=" doe"
                  className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
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
                className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
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
                <div className="w-full rounded-2xl bg-bg p-5 shadow-2xl md:min-w-[40rem] md:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-lg text-text font-semibold md:text-xl">
                      Change Profile Picture
                    </h1>

                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setModalClosed(!modalClosed)}
                      aria-label="Close modal"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-card text-red-500 transition hover:bg-red-50 hover:text-red-600 cursor-pointer"
                    >
                      <Icon icon="mingcute:close-line" className="text-xl" />
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="mt-5">
                    <hr className="border-gray-200" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Avatar */}
                    <div className="flex h-24 w-24 items-center justify-center mt-7 rounded-full bg-orange-500 text-3xl font-bold text-white shadow-md transition md:h-36 md:w-36 md:text-5xl">
                      PM
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4 md:mt-12 mb-7 mt-7 flex-wrap sm:flex-nowrap">
                      <button className="btn-primary w-fit">
                        <Icon
                          icon="iconamoon:profile-circle-fill"
                          className="text-lg"
                        />
                        Upload Profile
                      </button>

                      <button className="btn-secondary w-fit">
                        <Icon
                          icon="mingcute:user-remove-fill"
                          className="text-lg"
                        />
                        Remove Profile
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        {/* country */}
        <div className="w-full pt-5">
          <div className="mt-2 flex gap-6 md:gap-20 items-center">
            {/* LEFT LABEL - Stays exactly the same */}
            <div className="h-full flex justify-center items-center">
              <span className="text-[#00304C] text-base font-bold font w-24 md:w-32 shrink-0">
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
            className="btn-secondary w-full md:w-auto md:px-20 py-4  rounded-xl text-lg text-white cursor-pointer 
             transition-transform transition-colors duration-300 font ease-in-out 
             hover:scale-105"
          >
            <span>Edit Profile</span>
          </button>
        </div>
      </form>
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
