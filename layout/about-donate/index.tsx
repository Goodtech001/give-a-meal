/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import bar from "@/public/assets/images/Group 154.png";
import { useSearchParams } from "next/navigation";

function AboutDonate() {
  const [activeStep, setActiveStep] = useState(1);
  const searchParams = useSearchParams();
  const [urlQueryTab, setUrlQueryTab] = useState<string | null>(null);
  const [tabs] = useState([
    {
      id: 1,
      title: "Give One Time",
      slug: "profile",
    },
    {
      id: 2,
      title: "Give Monthly",
      slug: "campaigns",
    },
  ]);

  const stepsTab = [
    {
      step: 1,
      name: "Give One Time",
      component: () => <div></div>,
    },
    {
      step: 2,
      name: "Give Monthly",
      component: () => <div></div>,
    },
  ];

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setUrlQueryTab(tab);
  }, [searchParams]);

  useEffect(() => {
    if (!urlQueryTab || tabs.length === 0) return;
    const tabIndex = tabs.findIndex(
      (tab) => tab.slug.toLowerCase() === urlQueryTab.toLowerCase(),
    );
    if (tabIndex !== -1) setActiveStep(tabs[tabIndex].id);
    //   // remove tab from the query param
    //   // const newUrl = new URL(window.location.href)
    //   // newUrl.searchParams.delete('tab')
    //   // window.history.replaceState({}, '', newUrl.toString())
  }, [urlQueryTab, tabs]);

  const CurrentComponent = stepsTab.find(
    (step) => step.step === activeStep,
  )?.component;
  return (
    <div className="grid grid-cols-10 py-10 px-20 gap-10">
      {/* First */}
      <div className="space-y-6 col-span-6">
        <h1 className="font text-[#00304C] text-4xl font-semibold ">
          About This Cause
        </h1>
        <p className="font text-[#00304CCC] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="font text-[#00304CCC] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      {/* Second */}
      <div className="col-span-4 space-y-6 ">
        {/* top */}
        <div className="border-3 border-gray-300 p-8 rounded-xl">
          <div className="flex justify-between border-gray-400 space-y-2">
            <div className="flex font text-[#03324E] font-semibold">
              <Icon icon="mingcute:target-line" width="24" height="24" />
              <p>Target:</p>
            </div>
            <p className="font text-[#03324E] font-medium">230,000 meals</p>
          </div>

          <Image src={bar} alt="" className="w-full" />
          <div className="flex justify-between justify-aroun mt-4">
            <div className="flex font text-[#03324E] font-semibold">
              <p>Achieved:</p>
            </div>
            <p className="font text-[#03324E] font-medium"> 40%</p>
          </div>
        </div>

        {/* bottom */}
        <div className="border-2 border-[#0D7FC1]">
          {/* <h3 className="text-balance text-3xl font-bold text-dark md:text-4xl">
            {tabs[activeStep - 1].title}
          </h3> */}

          <div className=" grid-cols-4 w-full rounded-bl-xl border-[#0D7FC1] md:col-span-5 border-b-2 rounded-br-2xl  flex">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveStep(tab.id)}
                className="w-full "
              >
                <h4
                  className={`flex border-[#0D7FC1] p-6 w-full text-center rounded-br-2xl ${activeStep === tab.id ? "bg-[#0D7FC1] text-white" : "bg-white text-[#0D7FC1]"}`}
                >
                  <span className="w-full font font-medium cursor-pointer">{tab.title}</span>
                </h4>
              </div>
            ))}
          </div>

          <div className="rounded-xl borde h-60 md:col-span-7 md:p-2 lg:col-span-8">
            {CurrentComponent && <CurrentComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDonate;
