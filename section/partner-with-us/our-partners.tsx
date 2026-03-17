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
  {
    img: PartnerImg3,
  },
];

export default function OurPartners() {
  return (
    <div className="pt-16">
      <h1 className="text-[#00304C] text-4xl text-center flex justify-center font">
        Our Partners
      </h1>
      <div>
        <div className="flex overflow-scroll no-scrollbar gap-7 pt-14 whitespace-nowrap container mx-auto">
          {partnerslide.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={image.img}
                alt="transparency"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
