import { Icon } from "@iconify/react";

export default function PaymentMethod() {
  return (
    <div className="w-full max-w-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0">
      <h1 className="font text-base text-text pb-10">
        You don’t have any payment method saved. Add payment method to donate
        faster.
      </h1>
      <div className="flex justify-start">
        <button
          type="submit"
          className="btn-secondary w-full flex justify-center items-center gap-2 md:w-auto md:px-15 py-4 rounded-xl text-lg text-white cursor-pointer 
  transition-transform transition-colors duration-300 font ease-in-out 
  hover:scale-105"
        >
          <span>Add Credit or Debit Card</span>
          <Icon icon="material-symbols:add-rounded" />
        </button>
      </div>
    </div>
  );
}
