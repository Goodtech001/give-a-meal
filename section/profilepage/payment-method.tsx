"use client";
import { Icon } from "@iconify/react";
import Modal from "@/components/modal";
import { useState } from "react";

export default function PaymentMethod() {
  type Card = {
    id: number;
    name: string;
    last4: string;
    expiry: string;
  };

  type FormData = {
    cardNumber: string;
    cvv: string;
    name: string;
    expiry: string;
  };

  const [cards, setCards] = useState<Card[]>([]);

  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cvv: "",
    name: "",
    expiry: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ❗ stops refresh
    if (
      !formData.cardNumber ||
      !formData.cvv ||
      !formData.name ||
      !formData.expiry
    ) {
      return; // stop if empty
    }

    const newCard = {
      id: Date.now(),
      name: formData.name,
      last4: formData.cardNumber.slice(-4),
      expiry: formData.expiry,
    };

    setCards((prev) => [...prev, newCard]);

    // clear form
    setFormData({
      cardNumber: "",
      cvv: "",
      name: "",
      expiry: "",
    });
  };

  const [modalClosed, setModalClosed] = useState(true);

  return (
    <div className="w-full max-w-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0">
      {cards.length === 0 ? (
        <h1 className="font text-base text-text pb-10">
          You don’t have any payment method saved. Add payment method to donate
          faster.
        </h1>
      ) : (
        <h1 className="font text-xl text-text pb-10">
          Select your preferred payment method.
        </h1>
      )}

      {cards.map((card) => (
        <div key={card.id} className="flex items-center gap-4 pb-5">
          <div className="flex justify-between items-center gap-24 px-5 pb-11 pt-5 w-fit border border-gray-300 rounded-2xl">
            <div className="flex gap-3 items-center">
              <Icon icon="logos:mastercard" className="text-3xl shrink-0" />

              <div className="flex flex-col">
                <h1 className="text-[#00304C] font-semibold">{card.name}</h1>

                <p className="text-gray-500 text-sm">
                  •••• •••• •••• {card.last4}
                </p>

                <p className="text-gray-400 text-sm">Exp {card.expiry}</p>
              </div>
            </div>

            <div className="w-4 h-4 bg-[#FF8F07] rounded-full shrink-0" />
          </div>

          <button
            onClick={() =>
              setCards((prev) => prev.filter((c) => c.id !== card.id))
            }
            className="cursor-pointer"
          >
            <Icon
              icon="mingcute:delete-2-fill"
              className="text-2xl text-text"
            />
          </button>
        </div>
      ))}

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
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
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
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
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
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="00/23"
                      className="w-full px-3 py-2.5 text-sm font rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                    />
                  </div>
                </div>
                {/* Button */}
                <div className="flex gap-3 md:justify-start justify-center my-8">
                  <button
                    type="submit"
                    className="btn-primary py-2.5 flex justify-center items-center gap-2 text-white rounded-2xl cursor-pointer hover:btn px-6 transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    {" "}
                    <span className="font"> Add Card</span>
                    <Icon icon="material-symbols:add-rounded" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalClosed(!modalClosed)}
                    className="btn-secondary font py-3 w-auto text-white rounded-2xl cursor-pointer hover:btn  transition-transform px-8 duration-300 ease-in-out hover:scale-105"
                  >
                    {" "}
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
