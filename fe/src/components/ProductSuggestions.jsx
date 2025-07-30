import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

const ProductSuggestions = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    if (currentIndex < products.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
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
                    {products
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
                    disabled={currentIndex >= products.length - visibleCount}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 disabled:opacity-50"
                >
                    <FiChevronRight size={24} />
                </button>
                </div>

    </div>
  );
};

export default ProductSuggestions;
