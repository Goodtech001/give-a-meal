"use client";
import Image from "next/image";
import GivingPic from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";
import { useState } from "react";
import Modal from "@/components/modal";

interface Campaign {
  title: string;
  description: string;
}

export default function MonthlyGivingCard({
  campaign,
}: {
  campaign: Campaign;
}) {
  const [modalClosed1, setModalClosed1] = useState(true);

  return (
    <div>
      <div className="md:grid md:grid-cols-12 flex flex-col items-stretch border border-gray-500 rounded-2xl md:h-[300px] md:pr-5 overflow-hidden gap-5 md:gap-5 w-full">
        {/* IMAGE */}
        <div className="md:col-span-4 h-full">
          <div className="relative w-full h-full md:min-h-[120px] min-h-[220px]">
            <Image
              src={GivingPic}
              alt="giving pic"
              fill
              className="object-cover md:rounded-l-2xl rounded-l-none md:rounded-t-none rounded-t-2xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="md:col-span-5 flex justify-center flex-col md:gap-4 md:px-0 px-5 ">
          <h1 className="text-text font font-bold text-xl">{campaign.title}</h1>
          <p className="text-text text-base font pt-3">
            {campaign.description}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="md:col-span-3 flex md:flex-col  w-full flex-row justify-center gap-3 md:pb-0 pb-5">
          <button className="btn-primary py-3 rounded-xl md:px-0 px-4 text-white font hover:scale-105 cursor-pointer transition">
            Read more
          </button>

          <button
            onClick={() => setModalClosed1(!modalClosed1)}
            className="btn-secondary py-3.5 font md:px-0 px-4 text-white rounded-xl hover:scale-105 cursor-pointer transition"
          >
            Opt - out
          </button>
          {/* DELETE CONFIRMATION MODAL */}
          <div>
            <Modal
              closeModal={() => setModalClosed1(!modalClosed1)}
              isModalClosed={modalClosed1}
              parentClassName="!py-6 md:!py-10  !items-start flex items-center justify-center"
              className="!w-11/12 md:!w-fit"
            >
              <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-2xl md:p-8">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-[#00304C] text-2xl font-bold px-4">
                    Are you sure you want to opt out from giving monthly to this
                    cause
                  </h1>

                  {/* The visible border */}
                  <div className="w-full py-6">
                    <div className="h-[1px] w-full bg-gray-200" />
                  </div>

                  {/* Buttons - Made responsive so they don't overlap */}
                  <div className="flex flex-row gap-3 w-full justify-center">
                    <button
                      type="button"
                      className="btn-primary flex-1 py-3 text-white rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                      Yes, Delete
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalClosed1(!modalClosed1)}
                      className="btn-secondary flex-1 py-3 text-white rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                      No, Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
