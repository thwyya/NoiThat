import React from "react";
import { FaRegStar } from "react-icons/fa";

const TopRatingCard = ({ image, name, price, rating }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-28 md:w-36">
        <img src={image} alt={name} className="w-full h-auto object-cover" />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-[#323334] text-sm md:text-base font-bold leading-tight">
          {name}
        </h3>

        <div className="flex text-sm my-2">
          {[...Array(5)].map((_, i) => (
            <FaRegStar
              key={i}
              className={i < rating ? "text-[#F2C94C]" : "text-gray-300"}
            />
          ))}
        </div>

        <p className="font-bold text-[#323334]">{price}$</p>
      </div>
    </div>
  );
};

export default TopRatingCard;
