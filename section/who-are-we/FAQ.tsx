"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Where does my money actually go?",
    answer:
      "100% of your donation is used by the InnerCity Mission to buy, pack, and deliver nutritious food directly to children and families in need.",
  },
  {
    id: 2,
    question: "How do I know my donation is making an impact?",
    answer:
      "We provide updates and reports showing how donations are used, including the number of meals distributed and communities reached.",
  },
  {
    id: 3,
    question: "Can I donate monthly?",
    answer:
      "Yes, you can set up recurring donations to continuously support families and help sustain feeding programs.",
  },
  {
    id: 4,
    question: "Who receives the meals?",
    answer:
      "Meals are distributed to vulnerable children, families, and communities in need across different regions.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="container mx-auto justify-center flex  pt-20 md:px-0 px-2">
      <div className="border border-gray-400 rounded-2xl w-full max-w-3xl overflow-hidden">
        {/* HEADER */}
        <div className="border-b border-gray-400 p-4 flex justify-center">
          <p className="font-semibold text-text font  text-lg">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ LIST */}
        {faqs.map((faq) => {
          const isOpen = activeId === faq.id;

          return (
            <div
              key={faq.id}
              className="border-b border-gray-400 last:border-none"
            >
              {/* QUESTION */}
              <div
                className="flex justify-between items-center py-4 px-6 md:gap-0 gap-3 cursor-pointer"
                onClick={() => setActiveId(isOpen ? null : faq.id)}
              >
                <p className="text-text font font-medium">{faq.question}</p>

                <Icon
                  icon={isOpen ? "line-md:minus" : "ic:round-add"}
                  width="26"
                  height="26"
                  className={`transition-all duration-300 ${
                    isOpen ? "text-text" : "text-gray-600"
                  }`}
                />
              </div>

              {/* ANSWER */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-text font leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
