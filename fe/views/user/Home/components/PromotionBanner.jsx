import React from "react";
import SecondaryButton from "@/components/SecondaryButton";
import promoBanner from "@/assets/img/Rectangle13.png";

const PromotionBanner = () => {
  return (
    <section className="relative w-full h-[450px] mx-auto my-12">
      <div className="relative">
        <img
          src={promoBanner}
          alt="Bedsheet Sets"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />

        <div className="absolute top-1/2 left-50 -translate-y-1/2 bg-white/90 shadow-lg py-10 px-16 w-82 md:w-106" >
          <h2 className="text-xl md:text-2xl font-bold text-[#323334]">
            BEDSHEET SETS
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl md:text-2xl font-bold text-[#7B5136]">
              $50.00
            </span>
            <span className="text-sm text-[#7B5136] font-bold line-through">$220.00</span>
          </div>

          <p className="text-[#323334] text-sm font-light mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>

          <div className="mt-6">
            <SecondaryButton text="VIEW DETAILS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
