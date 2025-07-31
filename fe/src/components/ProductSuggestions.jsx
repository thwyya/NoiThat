import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

const ProductSuggestions = ({ products, excludeIds = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const filteredProducts = products
    .filter((p) => !excludeIds.includes(p.id))
    .slice(0, 10);
  
  const maxIndex = Math.max(filteredProducts.length - visibleCount, 0);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) =>
        prev + 1 > maxIndex ? maxIndex : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mt-10">
      <div className="relative flex items-center">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 disabled:opacity-50"
                >
                    <FiChevronLeft size={24} />
                </button>

                <div className="flex gap-8 overflow-hidden w-full justify-center">
                    {filteredProducts
                    .slice(currentIndex, currentIndex + visibleCount)
                    .map((p) => (
                        <ProductCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        colors={p.colors}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 disabled:opacity-50"
                >
                    <FiChevronRight size={24} />
                </button>
                </div>

    </div>
  );
};

export default ProductSuggestions;
