"use client";
import { useState } from "react";
import MonthlyGivingCard from "@/components/montly-giving-card";
import Modal from "@/components/modal";
import { Icon } from "@iconify/react";

const campaigns = [
  {
    id: 1,
    title: "Help reach hungry families in the north",
    description:
      "Shared meals will provide hot meals, monthly food basket and nutrition supplements to families in Northern Nigeria...",
  },
  {
    id: 2,
    title: "Support children education in rural areas",
    description:
      "Your donation helps provide school supplies, uniforms and access to quality education for children in underserved communities...",
  },
  {
    id: 3,
    title: "Provide clean water for communities",
    description:
      "We are building boreholes and clean water systems to give families access to safe drinking water across villages...",
  },
];

export default function MonthlyGiving() {
  const [isOn, setIsOn] = useState(false);
  const [modalClosed1, setModalClosed1] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState<string>("30,000");
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState("NGN");

  const options = ["NGN", "USD", "ESPEES"];

  const handleToggleAndClose = () => {
    setIsOn(!isOn);
    setModalClosed1(!modalClosed1);
  };
  return (
    <div className="w-full max-w-full   h-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0">
      <div className="flex justify-center items-center flex-col text-center mx-auto">
        <h1 className="font text-lg text-text ">
          Manage your givings to the causes you’re supporting.
        </h1>
      </div>
      {/* switch and text */}
      <div className="flex flex-col pt-10 gap-2">
        {/* text and switch */}
        <div className="flex flex-row items-center gap-3">
          <span className="text-text text-lg font font-bold">
            Give Monthly to Support the Give A Meal
          </span>
          <div className="flex items-center ">
            {/* THE SWITCH TRACK */}
            <div
              onClick={handleToggleAndClose}
              className={`relative w-13 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
                isOn ? "bg-[#FF8F07]" : "bg-gray-300"
              }`}
            >
              {/* THE SWITCH KNOB */}
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md p-1  transform transition-transform duration-300 ease-in-out ${
                  isOn ? "translate-x-7" : "translate-x-0"
                }`}
              />
              <Modal
                closeModal={() => setModalClosed1(!modalClosed1)}
                isModalClosed={modalClosed1}
                parentClassName="!py-6 md:!py-10  !items-start flex items-center justify-center"
                className="!w-11/12 md:!w-fit"
              >
                <div className="w-full rounded-xl bg-white shadow-2xl md:min-w-[25rem]  border-2 border-[#0D7FC1]">
                  {/* Header */}
                  <div className="font bg-[#0D7FC1] p-6  text-center rounded-b-2xl text-white text-lg">
                    <h1>Give Monthly</h1>
                  </div>
                  {/* border */}
                  {/* <div className="py-4">
                    <hr className="text-gray-300" />
                  </div> */}

                  {/* Content */}
                  <div className="flex flex-col items-center text-center w-full p-5">
                    {/* currency */}
                    <div className="flex items-center w-full gap-3 md:gap-5">
                      <div className="relative inline-block text-left">
                        {/* THE MAIN BUTTON */}
                        <div
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex items-center justify-center gap-1 bg-[#0D7FC1] px-3 py-2 rounded-md cursor-pointer hover:bg-[#0b6ca5] transition-all"
                        >
                          <p className="text-white text-sm md:text-base font font-medium">
                            {currency}
                          </p>
                          <Icon
                            icon="bi:chevron-down"
                            className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </div>

                        {/* THE DROPDOWN MENU */}
                        {isOpen && (
                          <>
                            {/* Invisible backdrop to close the menu when clicking outside */}
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setIsOpen(false)}
                            />

                            <div className="absolute left-0 mt-2 w-24 bg-[#0D7FC1] border border-[#0D7FC1] rounded-md shadow-lg z-20 overflow-hidden">
                              {options.map((opt) => (
                                <div
                                  key={opt}
                                  onClick={() => {
                                    setCurrency(opt);
                                    setIsOpen(false);
                                  }}
                                  className="px-4 py-2 text-white text-sm md:text-base font-medium hover:bg-[#0b6ca5] font  cursor-pointer transition-colors"
                                >
                                  {opt}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <p className="text-sm md:text-base font text-left">
                        30,000 will feed 300 people
                      </p>
                    </div>

                    {/* amount */}
                    <div className="flex flex-col gap-4 w-full mt-4">
                      {/* ROW 1 */}
                      <div className="grid grid-cols-3 gap-2">
                        {["30,000", "15,000", "9,000"].map((amt) => (
                          <div
                            key={amt}
                            onClick={() => setSelectedAmount(amt)}
                            className={`w-full text-center border cursor-pointer py-2 rounded-md transition-all ${
                              selectedAmount === amt
                                ? "border-[#0D7FC1] ring-1 ring-[#0D7FC1]"
                                : "border-gray-300"
                            }`}
                          >
                            <p
                              className={`text-sm md:text-base font ${
                                selectedAmount === amt
                                  ? "text-[#00304c] font-semibold font"
                                  : ""
                              }`}
                            >
                              {amt} {currency}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* ROW 2 */}
                      <div className="grid grid-cols-2 gap-2 w-full">
                        {/* 5k button */}
                        <div
                          onClick={() => setSelectedAmount("5,000")}
                          className={`w-full text-center border cursor-pointer py-2 rounded-md transition-all ${
                            selectedAmount === "5,000"
                              ? "border-[#0D7FC1] ring-1 ring-[#0D7FC1]"
                              : "border-gray-300"
                          }`}
                        >
                          <p
                            className={`text-sm md:text-base font ${
                              selectedAmount === "5,000"
                                ? "text-[#00304c] font-semibold font"
                                : ""
                            }`}
                          >
                            5,000 {currency}
                          </p>
                        </div>

                        {/* INPUT */}
                        <input
                          type="number"
                          placeholder="Custom Amount"
                          onChange={(e) => setSelectedAmount(e.target.value)}
                          className={`w-full px-3 py-2 font text-sm rounded-md border transition-all focus:outline-none ${
                            !["30,000", "15,000", "9,000", "5,000"].includes(
                              selectedAmount,
                            ) && selectedAmount !== ""
                              ? "border-[#0D7FC1] ring-1 ring-[#0D7FC1]"
                              : "border-gray-400"
                          }`}
                        />
                      </div>

                      {/* BUTTON */}
                      <button
                        onClick={() => setModalClosed1(!modalClosed1)}
                        type="button"
                        className="btn-secondary w-full py-3 md:py-4 rounded-xl text-base md:text-lg text-white transition hover:scale-105"
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <p className="text-text font text-lg ">
          You can join us to feed the ones in need by giving monthly.
        </p>
      </div>
      {/* support card and other details will be here */}
      <div className="w-full flex items-start">
        <div className="w-full flex flex-col gap-16 justify-start items-start pt-10">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex  md:items-center md:gap-10 gap-5 w-full max-w-3xl"
            >
              {/* DOT */}
              <div className="w-5 h-5 md:w-4 md:h-4 bg-[#FF8F07] rounded-full shrink-0 shadow-sm mt-2" />

              {/* CARD */}
              <MonthlyGivingCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
