import WhoAreWeImage from "@/public/assets/images/whoareweImage.png";
import Image from "next/image";

const imageslide = [
  {
    img: WhoAreWeImage,
  },
  {
    img: WhoAreWeImage,
  },
  {
    img: WhoAreWeImage,
  },
  {
    img: WhoAreWeImage,
  },
  {
    img: WhoAreWeImage,
  },
  {
    img: WhoAreWeImage,
  },
];

export default function ImageSlider() {
  return (
    <div>
      <div className="container mx-auto md:pt-14 pt-10">
        <div className="md:gap-7 gap-3.5 flex overflow-x-scroll no-scrollbar whitespace-nowrap">
          {imageslide.map((image, index) => (
            <div key={index} className="flex-shrink-0 flex justify-center">
              <Image
                src={image.img}
                alt="partner logo"
                className="object-contain md:w-full w-74 md:h-64 h-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
