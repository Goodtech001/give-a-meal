import Image from "next/image";
import Frame from "@/public/assets/images/Frame.png";

export default function ContactDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 py-10 container mx-auto px-4">
      {/* LEFT */}
      <div className="col-span-12 md:col-span-7 relative">
        <div className="md:w-2/3 w-full">
          <h1 className="text-[#00304C] md:text-4xl text-2xl md:text-start text-center font">
            Have a question or want to make inquires?
          </h1>
        </div>

        <div>
          <form className="w-full max-w-96 md:max-w-full mx-auto md:mx-0 space-y-5 pt-8">
            <label className="text-[#00304C] text-base font">Full name:</label>
            <div className="pt-2.5 w-full">
              <input
                type="text"
                placeholder="john doe"
                className="w-full px-3 py-2.5 text-sm rounded-xl border font border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00304c]"
              />
            </div>

            <label className="text-[#00304C] text-base font">
              Email Address:
            </label>
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

        <div className="absolute top-40 -left-55 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* RIGHT */}
      <div className="col-span-12 md:col-span-5 relative">
        <div className="flex border w-full max-w-96 md:max-w-xl mx-auto md:mx-0 pl-6 pr-16 md:pl-10 md:pr-20 rounded-xl py-5 flex-col space-y-4">
          <div>
            <h1 className="text-[#00304C] text-xl font">Email</h1>
            <p className="text-[#00304C] text-lg font pt-1.5 break-words">
              giveamealorg@gmail.com
            </p>
          </div>

          <div>
            <h1 className="text-[#00304C] text-xl font">Phone</h1>
            <p className="text-[#00304C] text-lg font pt-1.5">000-000-000</p>
          </div>

          <div>
            <h1 className="text-[#00304C] text-xl font">Socails</h1>
            <div className="flex gap-5 pt-1.5 flex-wrap">
              <p className="text-[#00304C] text-lg font">Kingschat</p>
              <p className="text-[#00304C] text-lg font">Instagram</p>
              <p className="text-[#00304C] text-lg font">TikTok</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-96 md:max-w-none mx-auto md:mx-0 mt-7 overflow-hidden rounded-2xl h-[220px] md:h-[280px] relative">
          <Image src={Frame} alt="hero" fill className="object-cover" />
        </div>
        <div className="absolute bottom-65 -right-30 w-40 h-40 bg-blue-500 rounded-full blur-2xl opacity-10"></div>
      </div>
    </div>
  );
}
