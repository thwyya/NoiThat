import React from "react";
import { FaTruck, FaUndoAlt, FaHeadset } from "react-icons/fa";

const FeatureBar = () => {
  const features = [
    {
      icon: <FaTruck className="text-[#F2C94C] text-2xl" />,
      title: "FREE SHIPPING",
    },
    {
      icon: <FaUndoAlt className="text-[#F2C94C] text-2xl" />,
      title: "100% MONEY BACK",
    },
    {
      icon: <FaHeadset className="text-[#F2C94C] text-2xl" />,
      title: "SUPPORT 24/7",
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <span className="text-[#000]/50  text-xs md:text-sm font-bold">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
