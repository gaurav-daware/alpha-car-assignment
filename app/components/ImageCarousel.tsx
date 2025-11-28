"use client";

import React, { useState } from "react";
import View360Modal from "./View360Modal";

const images: string[] = [
  "/cars/car-1.jpg",
  "/cars/car-2.jpg",
  "/cars/car-3.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show360, setShow360] = useState(false);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-main">
        <button className="carousel-arrow left" onClick={goPrev}>
          ‹
        </button>

        <img
          src={images[currentIndex]}
          alt={`Car ${currentIndex + 1}`}
          className="carousel-image"
        />

        <button className="carousel-arrow right" onClick={goNext}>
          ›
        </button>

        <button className="view360-btn" onClick={() => setShow360(true)}>
          View 360°
        </button>
      </div>

      <div className="carousel-thumbs">
        {images.map((img, index) => (
          <button
            key={index}
            className={`thumb-wrapper ${
              currentIndex === index ? "thumb-active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={img}
              alt={`Thumb ${index + 1}`}
              className="thumb-image"
            />
          </button>
        ))}
      </div>

      {show360 && <View360Modal onClose={() => setShow360(false)} />}
    </div>
  );
};

export default ImageCarousel;
