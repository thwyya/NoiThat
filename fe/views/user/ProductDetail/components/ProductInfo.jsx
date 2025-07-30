import React, { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SizeDropdown from "./SizeDropdown";
import { FiMapPin } from "react-icons/fi";

const ProductInfo = ({
  name,
  price,
  sizes,
  colors,
  selectedColorIndex,
  onColorSelect,
}) => {
    const [selectedSize, setSelectedSize] = useState("");
  return (
    <div className="flex-1 px-4">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-lg mb-4">{price} $</p>
      <p className="text-sm text-gray-600 mb-4">
        Color: {colors[selectedColorIndex]?.name}
      </p>
          <div className="flex gap-2 mb-4">
        {colors.map((c, index) => {
          const isActive = index === selectedColorIndex;

          return (
            <div
              key={index}
              onClick={() => onColorSelect(index)}
              className={`w-10 h-10 cursor-pointer transition overflow-hidden ${
                selectedColorIndex == null
                    ? ""
                    : isActive
                    ? "border border-black" 
                    : "" 
                }`}
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      
    <p className="text-[#000000]/50 text-sm py-2 mt-2 flex items-center gap-1">
        <FiMapPin className="text-[#000000]/50" />
        Not available in stores
    </p>
      <div className="mb-4">
        <SizeDropdown
          options={sizes}
          value={selectedSize}
          onChange={(size) => setSelectedSize(size)}
        />
      </div>

          <PrimaryButton text="ADD TO SHOPPING BAG" fullWidth/>
    </div>
  );
};

export default ProductInfo;
