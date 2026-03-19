import Image from "next/image";
import PartnerImg1 from "@/public/assets/images/ourpartner1.png";
import PartnerImg2 from "@/public/assets/images/ourpartner2.png";
import PartnerImg3 from "@/public/assets/images/ourpartner3.png";

const partnerslide = [
  {
    img: PartnerImg1,
  },
  {
    img: PartnerImg2,
  },
  {
    img: PartnerImg3,
  },
  {
    img: PartnerImg1,
  },
  {
    img: PartnerImg2,
  },
  {
    img: PartnerImg3,
  },
  {
    img: PartnerImg1,
  },
  {
    img: PartnerImg2,
  },
];

export default function OurPartners() {
  return (
    <div className="pt-16 relative">
      <h1 className="text-[#00304C] text-4xl text-center flex justify-center font-bold">
        Our Partners
      </h1>

      <div>
        <div className="container mx-auto pt-14">
          <div className="grid grid-cols-2 gap-7 md:flex md:overflow-x-scroll no-scrollbar whitespace-nowrap">
            {partnerslide.map((image, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center">
                <Image
                  src={image.img}
                  alt="partner logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-2xl opacity-10"></div>
    </div>
  );
}
