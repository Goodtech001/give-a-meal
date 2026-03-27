"use client";
import { useState } from "react";
import MonthlyGivingCard from "@/components/montly-giving-card";
import Modal from "@/components/modal";
import { Icon } from "@iconify/react";
import Link from "next/link";

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
                    {/* curency */}
                    <div className="flex items-center w-full gap-5">
                      <div className="flex items-center justify-center gap-1 bg-[#0D7FC1] p-3 rounded-md">
                        <p className="font text-white text-base">NGN</p>
                        <Icon
                          icon="bi:chevron-down"
                          width="18"
                          height="18"
                          className="text-white"
                        />
                      </div>
                      <p className="font text-base">
                        30,000 will feed 300 people
                      </p>
                    </div>
                    {/* amount */}
                    <div className="flex items-center flex-col gap-4">
                      {/* ROW 1: Your first three buttons */}
                      <div className="flex items-center gap-2 pt-5">
                        {["30,000", "15,000", "9,000"].map((amt) => (
                          <div
                            key={amt}
                            onClick={() => setSelectedAmount(amt)}
                            className={`border cursor-pointer py-2 px-3.5 rounded-md font transition-all duration-200 ${
                              selectedAmount === amt
                                ? "border-[#0D7FC1] ring-1 ring-[#0D7FC1] "
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            <p
                              className={`text-base ${selectedAmount === amt ? "text-[#00304c] font-semibold" : ""}`}
                            >
                              {amt} NGN
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* ROW 2: Your bottom button and the Input */}
                      <div className="flex items-center w-full gap-2">
                        <div
                          onClick={() => setSelectedAmount("5,000")}
                          className={`border cursor-pointer py-2 px-3.5 font rounded-md transition-all duration-200 ${
                            selectedAmount === "5,000"
                              ? "border-[#0D7FC1] ring-1 ring-[#0D7FC1]"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <p
                            className={`text-base ${selectedAmount === "5,000" ? "text-[#00304c] font-semibold" : ""}`}
                          >
                            5,000 NGN
                          </p>
                        </div>

                        {/* Custom Input for "Other" Amount */}
                        <input
                          type="number"
                          placeholder="Custom Amount"
                          onChange={(e) => setSelectedAmount(e.target.value)}
                          className={`w-61 px-3 py-2.5 text-sm rounded-md border font transition-all focus:outline-none ${
                            // If the user types in here, give it a blue border too!
                            !["30,000", "15,000", "9,000", "5,000"].includes(
                              selectedAmount,
                            ) && selectedAmount !== ""
                              ? "border-[#0D7FC1] ring-1 ring-[#0D7FC1]"
                              : "border-gray-400"
                          }`}
                        />
                      </div>
                      <div className="w-full">
                        <button
                          onClick={() => setModalClosed1(!modalClosed1)}
                          type="submit"
                          className="btn-secondary w-full md:px-15 px-5 px-0 py-4 rounded-xl text-lg text-white cursor-pointer 
  transition-transform transition-colors duration-300 font ease-in-out 
  hover:scale-105"
                        >
                          Donate
                        </button>
                      </div>
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
