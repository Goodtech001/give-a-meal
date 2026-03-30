import Frame from "@/public/assets/images/Frame 211.png";
import Image from "next/image";

export default function AboutGiveAMeal() {
  return (
    <div className="container mx-auto md:pt-20 pt-10">
      {/* first role */}
      <div className="grid grid-cols-12">
        <div className="flex justify-center w-full col-span-12 pb-6  md:hidden">
          <p className="font text-4xl text-text/60">About GiveAMeal</p>
        </div>

        <div className="flex items-center md:col-span-7 col-span-12 md:gap-5 gap-3 md:px-0 px-2">
          {/* text */}
          {/* image */}
          <div className="md:hidden block ">
            {" "}
            <Image
              src={Frame}
              alt="partner logo"
              className="w-74 h-60 object-cover" // object-cover fills the space
            />
          </div>

          <div>
            <p className="font text-text text-base text-justify">
              GiveAMeal is the digital gateway to the InnerCity Mission’s global
              feeding initiatives. We believe that a hungry child cannot learn,
              and a hungry family cannot thrive. Through our platform, we turn
              your compassion into a logistical reality, fueling a diverse
              network of food security programs designed to end hunger one
              community at a time.
            </p>
          </div>
          {/* image */}
          <div className="md:block hidden">
            <Image
              src={Frame}
              alt="partner logo"
              className="object-contain w-74 h-28"
            />
          </div>
        </div>
        <div className="md:flex justify-center items-center w-full col-span-5 hidden">
          <p className="font text-5xl text-text/60">About GiveAMeal</p>
        </div>
      </div>
      {/* second role */}

      <div className="grid grid-cols-12 md:pt-28 pt-14">
        <div className="flex justify-center w-full col-span-12 pb-6  md:hidden">
          <p className="font text-4xl text-text/60">Why It Matters</p>
        </div>
        <div className="md:flex justify-center items-center w-full col-span-5 hidden">
          <p className="font text-5xl text-text/60">Why It Matters</p>
        </div>
        <div className="flex items-center md:col-span-7 col-span-12 md:gap-5 gap-3 md:px-0 px-2">
          {/* text */}
          {/* image */}
          <div className="md:block hidden">
            <Image
              src={Frame}
              alt="partner logo"
              className="object-contain w-74 h-28"
            />
          </div>
          <div>
            <p className="font text-text text-base text-end">
              When you give, you are supporting a proven model of care. Whether
              it is a hot meal today or a food parcel that sustains a household
              for a month, your contribution is the essential ingredient for
              change.
            </p>
          </div>
          {/* image */}
          <div className="md:hidden block ">
            {" "}
            <Image
              src={Frame}
              alt="partner logo"
              className="w-40 h-40 object-cover" // object-cover fills the space
            />
          </div>
        </div>
      </div>
    </div>
  );
}
