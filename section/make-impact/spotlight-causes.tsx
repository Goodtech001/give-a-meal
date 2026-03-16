import DonateCard from "@/components/DonateCard";
import DonateImg1 from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";
import DonateImg2 from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";
import DonateImg3 from "@/public/assets/images/7039bff9e79267b190fbc0db2afd3294c28b1ba4.jpg";

const cardData = [
  {
    image: DonateImg1,
    title: "Help reach hungry families in the north",
    description:
      "Shared meals will provide hot meals, monthly food baskets, and nutrition supplements to families in Northern Nigeria...",
    target: "230,000 meals",
    current: "92,000 meals",
    percentage: "40%",
  },
  // Add more card objects here as needed
  {
    image: DonateImg2,
    title: "Support education for children",
    description:
      "Providing school supplies and resources for underprivileged children...",
    target: "150,000 students",
    current: "75,000 students",
    percentage: "50%",
  },
  {
    image: DonateImg3,
    title: "Clean water initiatives",
    description: "Ensuring access to clean and safe drinking water...",
    target: "100,000 liters",
    current: "50,000 liters",
    percentage: "50%",
  },
];

export default function SpotLightCauses() {
  return (
    <div>
      <div>
        {" "}
        <div>
          <h1>SpotLight courses</h1>
        </div>
        <p>critsfdhfkkj</p>
      </div>
      {/* card */}
      <div className="md:flex fl gap-5 items-center justify-center mt-25 relative card-container">
        {cardData.map((card, index) => (
          <DonateCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
