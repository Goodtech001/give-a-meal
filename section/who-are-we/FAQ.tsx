import { Icon } from "@iconify/react";
import React from "react";

export default function FAQ() {
  return (
    <div className="container mx-auto justify-center flex  pt-20">
      <div className="border border-gray-400 rounded-2xl flex flex-col  w-full max-w-3xl">
        {/* header */}
        <div className="border-b border-gray-400 p-4 justify-center flex w-full">
          <p>Frequently Asked Question</p>
        </div>
        {/* question */}
        <div className="flex font justify-between items-center p-4 border-b border-gray-400">
          <p>Where does my money actually go?</p>
          <Icon
            icon="line-md:minus"
            width="38"
            height="38"
            className="font-bold"
          />
        </div>
        {/* answer */}
        <div className="font border-b border-gray-400 p-4">
          <p>
            100% of your donation is used by the InnerCity Mission to buy, pack,
            and deliver nutritious food directly to children and families in
            need.
          </p>
        </div>
        {/* question */}
        <div className="flex font justify-between items-center p-4 border-b border-gray-400">
          <p>Where does my money actually go?</p>
          <Icon
            icon="line-md:minus"
            width="38"
            height="38"
            className="font-bold"
          />
        </div>
        {/* answer */}
        <div className="font  border-gray-400 p-4">
          <p>
            100% of your donation is used by the InnerCity Mission to buy, pack,
            and deliver nutritious food directly to children and families in
            need.
          </p>
        </div>
      </div>
    </div>
  );
}
