"use client";
import { Icon } from "@iconify/react";
import Modal from "@/components/modal";
import { useState } from "react";

type Card = {
  id: number;
  name: string;
  last4: string;
  expiry: string;
  active: boolean;
};

type FormData = {
  cardNumber: string;
  cvv: string;
  name: string;
  expiry: string;
};

export default function PaymentMethod() {
  // ✅ UI STATE
  const [modalClosed1, setModalClosed1] = useState(true);
  const [modalClosed2, setModalClosed2] = useState(true);

  // ✅ CARDS STATE (load from localStorage)
  const [cards, setCards] = useState<Card[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cards");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // ✅ FORM STATE
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cvv: "",
    name: "",
    expiry: "",
  });

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    // 1. Handle Card Number Formatting
    if (name === "cardNumber") {
      const digits = value.replace(/\D/g, "");
      finalValue = digits.match(/.{1,4}/g)?.join(" ") || "";

      // Safety check: Don't let it exceed 19 characters (16 digits + 3 spaces)
      if (finalValue.length > 19) return;
    }

    // 2. Handle Expiry Formatting (MM / YY)
    if (name === "expiry") {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 2) {
        finalValue = digits;
      } else {
        finalValue = `${digits.slice(0, 2)} / ${digits.slice(2, 4)}`;
      }

      if (finalValue.length > 7) return;
    }

    // 3. Single State Update (Much cleaner!)
    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate
    if (
      !formData.cardNumber ||
      !formData.cvv ||
      !formData.name ||
      !formData.expiry
    ) {
      return;
    }

    const newCard: Card = {
      id: Date.now(),
      name: formData.name,
      last4: formData.cardNumber.slice(-4),
      expiry: formData.expiry,
      active: true,
    };

    setCards((prev) => {
      const updatedCards = prev.map((card) => ({
        ...card,
        active: false, // remove active from others
      }));

      const newList = [...updatedCards, newCard];

      localStorage.setItem("cards", JSON.stringify(newList));

      return newList;
    });

    // ✅ reset form
    setFormData({
      cardNumber: "",
      cvv: "",
      name: "",
      expiry: "",
    });

    // ✅ close modal (optional UX)
    setModalClosed1(true);
  };

  const handleSelectCard = (id: number) => {
    setCards((prev) => {
      const updated = prev.map((card) => ({
        ...card,
        active: card.id === id,
      }));

      localStorage.setItem("cards", JSON.stringify(updated));

      return updated;
    });
  };

  const handleDeleteCard = (id: number) => {
    setCards((prev) => {
      const updated = prev.filter((card) => card.id !== id);

      localStorage.setItem("cards", JSON.stringify(updated));

      return updated;
    });

    // ✅ close modal (optional UX)
    setModalClosed2(true);
  };

  return (
    <div className="">
      <div className="w-full max-w-full  h-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0">
        {cards.length === 0 ? (
          <h1 className="font text-lg text-text pb-10">
            You don’t have any payment method saved. Add payment method to
            donate faster.
          </h1>
        ) : (
          <h1 className="font text-xl text-text pb-10">
            Select your preferred payment method.
          </h1>
        )}

        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between md:justify-start gap-2 md:gap-4 pb-6 md:w-fit w-full"
          >
            {/* MAIN CARD BOX */}
            <div
              onClick={() => handleSelectCard(card.id)}
              className="flex justify-between items-start gap-4 md:gap-24 px-4 md:px-8 pb-8 md:pb-11 pt-6 md:pt-8 flex-1 md:w-fit border border-gray-300 rounded-2xl cursor-pointer"
            >
              <div className="flex gap-3 items-start">
                <div className="flex justify-start pt-1">
                  <Icon
                    icon="logos:mastercard"
                    className="text-2xl md:text-3xl shrink-0"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-[#00304C] font-semibold text-sm md:text-base leading-tight">
                    {card.name}
                  </h1>

                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    •••• •••• •••• {card.last4}
                  </p>

                  <p className="text-gray-400 text-xs md:text-sm">
                    Expiry {card.expiry}
                  </p>
                </div>
              </div>

              {/* ACTIVE DOT */}
              <div className="pt-1">
                {card.active ? (
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF8F07] rounded-full shrink-0 shadow-sm" />
                ) : (
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full shrink-0" />
                )}
              </div>
            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={() => setModalClosed2(!modalClosed2)}
              className="cursor-pointer p-2 hover:bg-red-50 rounded-full transition-colors shrink-0"
            >
              <Icon
                icon="mingcute:delete-2-fill"
                className="text-xl md:text-2xl text-text hover:text-red-500"
              />
            </button>

            {/* DELETE CONFIRMATION MODAL */}
            <div>
              <Modal
                closeModal={() => setModalClosed2(!modalClosed2)}
                isModalClosed={modalClosed2}
                parentClassName="!py-6 md:!py-10  !items-start flex items-center justify-center"
                className="!w-11/12 md:!w-fit"
              >
                <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-2xl md:p-8">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-[#00304C] text-2xl font-bold px-4">
                      Are you sure you want to delete this card?
                    </h1>

                    {/* The visible border */}
                    <div className="w-full py-6">
                      <div className="h-[1px] w-full bg-gray-200" />
                    </div>

                    {/* Buttons - Made responsive so they don't overlap */}
                    <div className="flex flex-row gap-3 w-full justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCard(card.id);
                        }}
                        type="button"
                        className="btn-primary flex-1 py-3 text-white rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                      >
                        Yes, Delete
                      </button>

                      <button
                        type="button"
                        onClick={() => setModalClosed2(!modalClosed2)}
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
        ))}

        <div className="flex justify-start mt-10">
          <button
            onClick={() => setModalClosed1(!modalClosed1)}
            type="submit"
            className="btn-secondary  flex justify-center items-center font gap-2 md:w-auto md:px-15 px-5 px-0 py-4 rounded-xl text-lg text-white cursor-pointer 
  transition-transform transition-colors duration-300 font ease-in-out 
  hover:scale-105"
          >
            <span>Add Credit or Debit Card</span>
            <Icon icon="material-symbols:add-rounded" />
          </button>
          {/* Modal */}
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
                          maxLength={19} // CRITICAL: 16 digits + 3 spaces
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
                      onClick={() => setModalClosed1(!modalClosed1)}
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
        <div className="absolute  md:block hidden  top-40 -right-20 w-10 h-24 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute  md:block hidden  bottom-30 -right-300 w-10 h-24 bg-blue-400 rounded-full blur-2xl opacity-10"></div>
      </div>
    </div>
  );
}
