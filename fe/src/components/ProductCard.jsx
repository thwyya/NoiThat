import React, { useState } from "react";

const ProductCard = ({ name, price, colors }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const activeImage = colors[activeColorIndex].image;

  return (
    <div className="flex flex-col w-[230px]">
      <img
        src={activeImage}
        alt={name}
        className="w-full h-[300px] object-cover mb-3 transition duration-300"
      />
      <h4 className="text-sm font-medium text-[#323334] mb-1">{name}</h4>

      <div className="flex gap-2 mb-2">
        {colors.map((c, index) => {
          const isActive = index === activeColorIndex;
          const isWhite = c.hex.toLowerCase() === "#ffffff";

          return (
            <div
              key={index}
              onClick={() => setActiveColorIndex(index)}
              className="w-2 h-2 rounded-full border cursor-pointer transition"
              style={{
                backgroundColor: c.hex,
                borderColor: isActive
                  ? "#00000080" 
                  : isWhite
                  ? "#AAAAAC99" 
                  : c.hex, 
              }}
            />
          );
        })}
      </div>

      <span className="text-lg font-semibold">{price}$</span>
    </div>
  );
};

export default ProductCard;
