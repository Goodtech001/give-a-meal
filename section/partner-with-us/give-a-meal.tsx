import TransparencyImg from "@/public/assets/images/tranperancy.png";
import RealLifeImpactImg from "@/public/assets/images/reallikeimpact.png";
import GlobalReachImg from "@/public/assets/images/globalreach.png";
import Image from "next/image";

export default function GiveAMealAdvantage() {
  return (
    <div className="pt-10 relative md:px-0 px-1">
      <h1 className="text-[#00304C] md:text-4xl text-3xl text-center  flex justify-center font-bold">
        The Give A Meal Advantage
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-20 pt-14 pb-10 px-4">
        {/* Transparency */}
        <div className="flex justify-center items-center flex-col text-center max-w-sm">
          <div className="">
            <Image
              src={TransparencyImg}
              alt="transparency"
              width={150}
              height={150}
              className="object-cover "
            />
          </div>
          <h1 className="text-[#00304C] text-xl font-semibold mt-5">
            Maximum Transparency
          </h1>
          <p className="text-[#00304C] mt-5 text-lg leading-relaxed">
            We provide clear, verifiable data on every dollar spent, ensuring
            your organization’s contribution is fully accounted for.
          </p>
        </div>

        {/* Global Reach */}
        <div className="flex justify-center items-center flex-col text-center max-w-sm">
          <div className="">
            <Image
              src={GlobalReachImg}
              alt="global reach"
              width={150}
              height={150}
              className="object-contain "
            />
          </div>
          <h1 className="text-[#00304C] text-xl font-semibold mt-5">
            Global Reach
          </h1>
          <p className="text-[#00304C] mt-5 text-lg leading-relaxed">
            Leveraging the network of the UN World Food Programme, we deliver
            aid to the world’s most vulnerable and hard-to-reach regions.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-5">
        <div className="flex justify-center items-center flex-col text-center max-w-sm">
          <div className="">
            <Image
              src={RealLifeImpactImg}
              alt="real-time impact"
              width={150}
              height={150}
              className="object-contain "
            />
          </div>
          <h1 className="text-[#00304C] text-xl font-semibold mt-5">
            Real-Time Impact
          </h1>
          <p className="text-[#00304C] mt-5 text-lg leading-relaxed">
            See the results of our collaboration as they happen, with live
            updates and data-driven storytelling.
          </p>
        </div>
      </div>
      <div className="absolute bottom-25 -left-0 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
}
