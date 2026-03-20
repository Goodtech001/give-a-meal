export default function ProfileInfo() {
  return (
    <div>
      <form className="w-full max-w-full md:max-w-full mx-auto md:mx-0 space-y-16">
        <div className="w-full">
          <div className="mt-2 flex gap-6 items-center">
            {/* LEFT LABEL */}

            <div className="h-full flex justify-center items-center pt-5">
              <span className="text-[#00304C] text-base font w-24 md:w-32 shrink-0">
                Nick Name
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col w-full">
              <label className="text-[#00304C] text-base font-semibold mb-1">
                Full name:
              </label>

              <input
                type="text"
                placeholder="john doe"
                className="w-full px-3 py-3 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
              />
            </div>
          </div>
        </div>

        {/* name="fullName" and last name */}

        <div className="w-full">
          <div className="mt-2 flex gap-6 md:items-end">
            {/* LEFT LABEL */}
            <span className="text-[#00304C] text-base font w-24 md:w-32 shrink-0">
              Name:
            </span>

            <div className="flex md:flex-row flex-col gap-6 w-full">
              {/* FIRST */}
              <div className="flex flex-col w-full ">
                <label className="text-[#00304C] text-base font-semibold mb-2">
                  First:
                </label>

                <input
                  type="text"
                  placeholder="john doe"
                  className="w-full px-3 py-3 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>

              {/* LAST */}
              <div className="flex flex-col w-full">
                <label className="text-[#00304C] text-base font-semibold mb-2">
                  Last:
                </label>

                <input
                  type="text"
                  placeholder="john doe"
                  className="w-full px-3 py-3 text-sm rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
                />
              </div>
            </div>
          </div>
        </div>

        <label className="text-[#00304C] text-base font">Full name:</label>
        <div className="pt-2.5 w-full">
          <input
            type="text"
            placeholder="john doe"
            className="w-full px-3 py-2.5 text-sm rounded-xl border font border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
          />
        </div>

        <label className="text-[#00304C] text-base font">Email Address:</label>
        <div className="pt-2.5 w-full">
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full px-3 py-2.5 text-sm rounded-xl border font border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
          />
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
