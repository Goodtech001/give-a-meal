"use client";
import { useState } from "react";
import MonthlyGivingCard from "@/components/montly-giving-card";
import Modal from "@/components/modal";

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

  const handleToggleAndClose = () => {
    setIsOn(!isOn);
    setModalClosed1(!modalClosed1); // Usually you want to explicitly close the modal
    console.log("Switch toggled and Modal closed!");
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
                <div className="w-full rounded-2xl bg-white p-6 shadow-2xl md:min-w-[40rem] md:p-8">
                  {/* Header */}
                  <div className="font text-[#0F172A] font-bold text-xl">
                    <h1>Add New Card</h1>
                  </div>
                  {/* border */}
                  <div className="py-4">
                    <hr className="text-gray-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center text-center ">
                    {/* Input */}
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
