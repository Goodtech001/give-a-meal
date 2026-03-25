import Image from "next/image";
import GivingPic from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";

interface Campaign {
  title: string;
  description: string;
}

export default function MonthlyGivingCard({
  campaign,
}: {
  campaign: Campaign;
}) {
  return (
    <div>
      <div className="md:grid md:grid-cols-12 flex flex-col items-stretch border border-gray-500 rounded-2xl md:h-[300px] md:pr-5 overflow-hidden gap-5 md:gap-5 w-full">
        {/* IMAGE */}
        <div className="md:col-span-4 h-full">
          <div className="relative w-full h-full md:min-h-[120px] min-h-[220px]">
            <Image
              src={GivingPic}
              alt="giving pic"
              fill
              className="object-cover rounded-t-2xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="md:col-span-5 flex justify-center flex-col md:gap-4 md:px-0 px-5 ">
          <h1 className="text-text font font-bold text-xl">{campaign.title}</h1>
          <p className="text-text text-base font pt-3">
            {campaign.description}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="md:col-span-3 flex md:flex-col  w-full flex-row justify-center gap-3 md:pb-0 pb-5">
          <button className="btn-primary py-3 rounded-xl md:px-0 px-4 text-white font hover:scale-105 cursor-pointer transition">
            Read more
          </button>

          <button className="btn-secondary py-3.5 font md:px-0 px-4 text-white rounded-xl hover:scale-105 cursor-pointer transition">
            Opt - out
          </button>
        </div>
      </div>
    </div>
  );
}
