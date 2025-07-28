import React from "react";
import SecondaryButton from '@/components/SecondaryButton';

const Banner = () => {
  return (
    <section className="w-full h-[450px] bg-[#DBD0CC]/80 border border-[#323334]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-8 md:py-16">
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="https://furniture-7qms.vercel.app/assets/image%202.png"
            alt="Banner"
            className="max-w-xs md:max-w-md"
          />
        </div>

        <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
            <p className="text-sm font-bold text-[#323334] uppercase tracking-wide">
                Hot Deals This Week
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#A86A3D] leading-snug mt-2">
                SALE UP 50% <br /> MODERN FURNITURE
            </h2>
                <SecondaryButton text="VIEW NOW" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
