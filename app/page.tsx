import ImageCarousel from "./components/ImageCarousel";
import PriceCalculator from "./components/PriceCalculator";
import CarOverview, { Car } from "./components/CarOverview";

const carData: Car = {
  model: "Mahindra Thar LX 4-Str Hard Top Diesel MT 4WD",
  year: 2021,
  mileage: "13K km",
  price: "₹13.26 Lakh",
};

export default function HomePage() {
  return (
    <div className="page">
      {/* Left Panel: Picture Scroll + 360 Button */}
      <section className="card">
        <ImageCarousel />
      </section>

      {/* Right Panel: Price Calculator + Car Overview */}
      <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div className="card">
          <PriceCalculator />
        </div>
        <div className="card">
          <CarOverview car={carData} />
        </div>
      </section>
    </div>
  );
}