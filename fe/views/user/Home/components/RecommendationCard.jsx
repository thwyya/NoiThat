import React from "react";
import { FaRegStar } from "react-icons/fa";
import SecondaryButton from "@/components/SecondaryButton";

const RecommendationCard = ({ image, name, description, price, rating }) => {
  return (
    <div className="flex flex-col overflow-hidden w-[300px] h-[500px]">
      <div className="relative w-full h-100 group">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-[#000]/40 flex flex-col items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  p-4">
          <div className="text-white">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-sm font-bold mt-2 ">{description}</p> {/*line-clamp-2*/}
          </div>
          <div className="py-4 mt-2 ">
            <SecondaryButton text="View All" color="#fff" />
          </div>
        </div>
      </div>

      <div className="py-4">
        <h3 className="text-sm font-bold text-[#323334] line-clamp-2">
          {name}
        </h3>
        <p className="text-[#323334] text-sm font-bold mt-1">${price}</p>

        <div className="flex mt-2">
          {[...Array(5)].map((_, i) => (
            <FaRegStar
              key={i}
                className={i < rating ? "text-[#F2C94C]" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
