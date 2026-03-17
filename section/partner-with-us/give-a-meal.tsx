import TransparencyImg from "@/public/assets/images/tranperancy.png";
import RealLifeImpactImg from "@/public/assets/images/reallikeimpact.png";
import GlobalReachImg from "@/public/assets/images/globalreach.png";
import Image from "next/image";

export default function GiveAMealAdvantage() {
  return (
    <div className="pt-10">
      <h1 className="text-[#00304C] text-4xl flex justify-center font">
        The Give A Meal Advantage
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-20 py-10 px-4">
        {/* Transparency */}
        <div className="flex justify-center items-center flex-col text-center max-w-xs">
          <div className="relative w-40 h-40">
            <Image
              src={TransparencyImg}
              alt="transparency"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-[#00304C] text-xl font-semibold mt-4">
            Maximum Transparency
          </h1>
          <p className="text-[#00304C] mt-2 text-lg leading-relaxed">
            We provide clear, verifiable data on every dollar spent, ensuring
            your organization’s contribution is fully accounted for.
          </p>
        </div>

        {/* Global Reach */}
        <div className="flex justify-center items-center flex-col text-center max-w-xs">
          <div className="relative w-40 h-40">
            <Image
              src={GlobalReachImg}
              alt="global reach"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <h1 className="text-[#00304C] text-xl font-semibold mt-4">
            Global Reach
          </h1>
          <p className="text-[#00304C] mt-2 text-lg leading-relaxed">
            Leveraging the network of the UN World Food Programme, we deliver
            aid to the world’s most vulnerable and hard-to-reach regions.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-5">
        <div className="flex justify-center items-center flex-col text-center max-w-xs">
          <div className="">
            <Image
              src={RealLifeImpactImg}
              alt="real-time impact"
              width={150}
              height={150}
              className="object-contain "
            />
          </div>
          <h1 className="text-[#00304C] text-xl font-semibold mt-4">
            Real-Time Impact
          </h1>
          <p className="text-[#00304C] mt-2 text-lg leading-relaxed">
            See the results of our collaboration as they happen, with live
            updates and data-driven storytelling.
          </p>
        </div>
      </div>
    </div>
  );
}
