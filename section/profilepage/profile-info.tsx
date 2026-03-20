import { Icon } from "@iconify/react";

export default function ProfileInfo() {
  return (
    <div>
      <form className="w-full max-w-full md:max-w-full mx-auto md:mx-0 md:px-20 px-0 space-y-16">
        {/* nick name */}
        <div className="w-full">
          <div className="mt-2 flex gap-6 md:gap-20 items-center">
            {/* LEFT LABEL */}

            <div className="h-full flex justify-center items-center ">
              <span className="text-[#00304C] text-base font-bold font w-24 md:w-32 shrink-0">
                Nick Name
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="john doe"
                className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
              />
            </div>
          </div>
        </div>

        {/* name="fullName" and last name */}

        <div className="w-full">
          <div className="mt-2 flex gap-6 md:gap-20  items-center">
            {/* LEFT LABEL */}
            <div className="h-full flex justify-center items-center md:pt-5 pt-0 md:pb-0 pb-20">
              <span className="text-[#00304C] font-bold text-base font w-24 md:w-32 shrink-0">
                Name
              </span>
            </div>

            <div className="flex md:flex-row flex-col gap-6 w-full">
              {/* FIRST */}
              <div className="flex flex-col w-full ">
                <label className="text-[#00304C] text-base font-bold font-semibold mb-2">
                  First:
                </label>

                <input
                  type="text"
                  placeholder="john doe"
                  className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>

              {/* LAST */}
              <div className="flex flex-col w-full">
                <label className="text-[#00304C] text-base font-bold font-semibold mb-2">
                  Last:
                </label>

                <input
                  type="text"
                  placeholder="john doe"
                  className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* email */}
        <div className="w-full">
          <div className="mt-2 flex gap-6 md:gap-20 items-center">
            {/* LEFT LABEL */}
            <span className="text-[#00304C] text-base md:block hidden font font-bold w-24 md:w-32 shrink-0">
              Email Address:
            </span>
            <span className="text-[#00304C] md:hidden block text-base font font-bold w-24 md:w-32 shrink-0">
              Email
            </span>

            {/* RIGHT SIDE */}
            <div className="flex items-center flex-col w-full relative">
              {/* INPUT (aligned with others) */}
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-3 py-4 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
              />

              {/* ICON (floating beside, not affecting layout) */}
              <div className="absolute -left-9 top-4">
                <Icon
                  icon="tabler:lock-filled"
                  width="20"
                  height="20"
                  className="text-[#00304C]"
                />
              </div>
              {/* chnage email icon */}
              <button className="absolute cursor-pointer flex gap-2 -bottom-8.5 items-center  -left-0">
                <p className="text-text font font-bold">Change Email</p>
                <span>
                  {" "}
                  <Icon
                    icon="line-md:arrow-right"
                    width="18"
                    height="20"
                    className="text-[#00304C]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <label className="text-[#00304C] text-base font">Message:</label>
        <div className="pt-2.5 w-full">
          <textarea
            placeholder="Write your message..."
            rows={5}
            className="w-full px-3 font py-2.5 text-sm rounded-xl border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
          />
        </div>

        <button
          type="submit"
          className="btn-secondary btn w-full mt-6 font cursor-pointer"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
