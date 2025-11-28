"use client";

import React, { useRef, useState } from "react";

const FRAMES: string[] = [
  "/three-sixty/frame-1.jpg",
  "/three-sixty/frame-2.jpg",
  "/three-sixty/frame-3.jpg",
  "/three-sixty/frame-4.jpg",
  "/three-sixty/frame-5.jpg",
  "/three-sixty/frame-6.jpg",
  "/three-sixty/frame-7.jpg",
  "/three-sixty/frame-8.jpg",
  "/three-sixty/frame-9.jpg",
  "/three-sixty/frame-10.jpg",
  "/three-sixty/frame-11.jpg",
];

const ThreeSixtyViewer: React.FC = () => {
  const [index, setIndex] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const changeFrame = (direction: 1 | -1) => {
    setIndex((prev) => {
      const next = (prev + direction + FRAMES.length) % FRAMES.length;
      return next;
    });
  };

  const handleDragStart = (clientX: number) => {
    isDragging.current = true;
    lastX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const deltaX = clientX - lastX.current;

    if (Math.abs(deltaX) > 10) {
      changeFrame(deltaX > 0 ? 1 : -1);
      lastX.current = clientX;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="viewer-360"
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      <img
        src={FRAMES[index]}
        alt={`360° view ${index + 1}`}
        className="viewer-360-image"
      />
      <p className="viewer-360-hint">Drag left or right to rotate</p>
    </div>
  );
};

export default ThreeSixtyViewer;
