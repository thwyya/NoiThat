import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductImages = ({ images, mainImage, setMainImage, currentIndex, setCurrentIndex }) => {
  const handleThumbnailClick = (idx) => {
    setCurrentIndex(idx);
    setMainImage(images[idx]);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);
  };

  return (
    <div className="flex-1">
      <div className="relative overflow-hidden">
        <img
          src={mainImage}
          alt="Main product"
          className="w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center mt-3 gap-2">
        <button onClick={prevSlide} className="p-2">
          <FiChevronLeft size={20} />
        </button>

        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`w-16 h-16 object-cover cursor-pointer border-2 ${
                currentIndex === idx ? "border-black" : "border-transparent"
              }`}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="p-2">
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};


export default ProductImages;
