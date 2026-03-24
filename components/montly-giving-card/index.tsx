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
      <div className="grid grid-cols-12 items-stretch border border-gray-500 rounded-2xl h-[300px] pr-5 overflow-hidden gap-5 md:gap-5 w-full">
        {/* IMAGE */}
        <div className="col-span-4 h-full">
          <div className="relative w-full h-full min-h-[120px]">
            <Image
              src={GivingPic}
              alt="giving pic"
              fill
              className="object-cover rounded-l-2xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="col-span-5 flex justify-center flex-col gap-4">
          <h1 className="text-text font font-bold text-xl">{campaign.title}</h1>
          <p className="text-text text-base font">{campaign.description}</p>
        </div>

        {/* BUTTONS */}
        <div className="col-span-3 flex flex-col justify-center gap-3">
          <button className="btn-primary py-3 rounded-xl text-white font hover:scale-105 cursor-pointer transition">
            Read more
          </button>

          <button className="btn-secondary py-3 font text-white rounded-xl hover:scale-105 cursor-pointer transition">
            Opt - out
          </button>
        </div>
      </div>
    </div>
  );
}
