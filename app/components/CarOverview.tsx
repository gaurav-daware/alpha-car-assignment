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
  return (
    <div className="car-overview">
      <h2 className="section-title">Car Overview</h2>
      <dl className="car-details">
        <div className="detail-row">
          <dt>Model</dt>
          <dd>{car.model}</dd>
        </div>
        <div className="detail-row">
          <dt>Year</dt>
          <dd>{car.year}</dd>
        </div>
        <div className="detail-row">
          <dt>Mileage</dt>
          <dd>{car.mileage}</dd>
        </div>
        <div className="detail-row">
          <dt>Price</dt>
          <dd>{car.price}</dd>
        </div>
      </dl>
    </div>
  );
};

export default CarOverview;
