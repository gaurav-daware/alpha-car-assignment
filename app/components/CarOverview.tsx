import React from "react";

export type Car = {
  model: string;
  year: number;
  mileage: string;
  price: string;
};

type CarOverviewProps = {
  car: Car;
};

const CarOverview: React.FC<CarOverviewProps> = ({ car }) => {
  const details = [
    { label: "Model", value: car.model },
    { label: "Year", value: car.year.toString() },
    { label: "Mileage", value: car.mileage },
  
    { label: "Price", value: car.price, highlight: true },
  ];

  return (
    <div className="car-overview">
      <h2 className="section-title">Car Overview</h2>
      <div className="car-details">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`detail-row ${detail.highlight ? "highlight" : ""}`}
          >
            <dt>{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;