import { Icon } from "@iconify/react";
import Modal from "@/components/modal";
import { useState } from "react";
import Logo from "@/components/logo";

export default function PaymentMethod() {
  const [modalClosed, setModalClosed] = useState(true);
  return (
    <div className="w-full max-w-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0">
      <h1 className="font text-base text-text pb-10">
        You don’t have any payment method saved. Add payment method to donate
        faster.
      </h1>
      <div className="flex justify-start">
        <button
          onClick={() => setModalClosed(!modalClosed)}
          type="submit"
          className="btn-secondary w-full flex justify-center items-center font gap-2 md:w-auto md:px-15 py-4 rounded-xl text-lg text-white cursor-pointer 
  transition-transform transition-colors duration-300 font ease-in-out 
  hover:scale-105"
        >
          <span>Add Credit or Debit Card</span>
          <Icon icon="material-symbols:add-rounded" />
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
              <form className="space-y-6 w-full">
                {/* ROW 1 */}
                <div className="flex md:flex-row flex-col gap-6 w-full">
                  {/* Card Number */}
                  <div className="flex flex-col w-full">
                    <label className="text-[#00304C] text-base font text-start font-semibold mb-1.5">
                      Card Number
                    </label>

                    <div className="flex items-center px-3 py-2.5 text-sm rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-[#00304c] gap-3">
                      <Icon
                        icon="logos:mastercard"
                        className="text-xl shrink-0"
                      />

                      <div className="w-[1px] h-4 bg-gray-400" />

                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full bg-transparent font outline-none text-sm placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* CVV */}
                  <div className="flex flex-col w-full">
                    <label className="text-[#00304C] text-base font text-start font-semibold mb-1.5">
                      CVV
                    </label>

                    <input
                      type="text"
                      placeholder="000"
                      className="w-full px-3 py-2.5 text-sm rounded-md border font border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                    />
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="flex md:flex-row flex-col gap-6 w-full">
                  {/* name on card*/}
                  <div className="flex flex-col w-full">
                    <label className="text-[#00304C] text-base font text-start font-semibold mb-1.5">
                      Name on Card
                    </label>

                    <input
                      type="text"
                      placeholder="joe"
                      className="w-full px-3 py-2.5 text-sm rounded-md border font border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                    />
                  </div>

                  {/* expiry */}
                  <div className="flex flex-col w-full">
                    <label className="text-[#00304C] text-base text-start font font-semibold mb-1.5">
                      Expiry
                    </label>

                    <input
                      type="text"
                      placeholder="00/23"
                      className="w-full px-3 py-2.5 text-sm font rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Button */}
            <div className="flex gap-3 my-8">
              <button className="btn-primary py-2.5 flex justify-center items-center gap-2 text-white rounded-2xl cursor-pointer hover:btn px-6 transition-transform duration-300 ease-in-out hover:scale-105">
                {" "}
                <span className="font"> Add Card</span>
                <Icon icon="material-symbols:add-rounded" />
              </button>
              <button
                onClick={() => setModalClosed(!modalClosed)}
                className="btn-secondary font py-3 w-auto text-white rounded-2xl cursor-pointer hover:btn  transition-transform px-8 duration-300 ease-in-out hover:scale-105"
              >
                {" "}
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
