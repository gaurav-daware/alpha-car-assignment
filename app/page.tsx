import ImageCarousel from "./components/ImageCarousel";
import PriceCalculator from "./components/PriceCalculator";
import CarOverview, { Car } from "./components/CarOverview";

const car: Car = {
  model: "Mahindra Thar LX 4-Str Hard Top Diesel MT 4WD",
  year: 2021,
  mileage: "13K km",
  price: "₹13.26 Lakh",
};

export default function HomePage() {
  return (
    <div className="page">
      {/* Left: Picture Scroll + 360 Button */}
      <section className="left-panel card">
        <ImageCarousel />
      </section>

      {/* Right: Price calculator + Car overview */}
      <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="right-panel">
        <div className="card">
          <PriceCalculator />
        </div>
        <div className="card">
          <CarOverview car={car} />
        </div>
      </section>
    </div>
  );
}
