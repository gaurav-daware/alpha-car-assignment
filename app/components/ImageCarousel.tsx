"use client";

import React, { useState } from "react";
import View360Modal from "./View360Modal";

const carImages: string[] = [
  "/cars/car-1.jpg",
  "/cars/car-2.jpg",
  "/cars/car-3.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show360Modal, setShow360Modal] = useState(false);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel-main">
          <button className="carousel-arrow left" onClick={goPrev} aria-label="Previous image">
            ‹
          </button>

          <img
            src={carImages[currentIndex]}
            alt={`Car view ${currentIndex + 1}`}
            className="carousel-image"
          />

          <button className="carousel-arrow right" onClick={goNext} aria-label="Next image">
            ›
          </button>

          <button className="view360-btn" onClick={() => setShow360Modal(true)}>
            🔄 View 360°
          </button>

          <div className="carousel-counter">
            {currentIndex + 1} / {carImages.length}
          </div>
        </div>

        <div className="carousel-thumbs">
          {carImages.map((img, index) => (
            <button
              key={index}
              className={`thumb-wrapper ${
                currentIndex === index ? "thumb-active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="thumb-image"
              />
            </button>
          ))}
        </div>
      </div>

      {show360Modal && <View360Modal onClose={() => setShow360Modal(false)} />}
    </>
  );
};

export default ImageCarousel;