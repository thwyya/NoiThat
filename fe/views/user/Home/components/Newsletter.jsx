import React from "react";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-xl font-bold text-[#323334] uppercase">
            Sign up for the newsletter
          </h2>
          <p className="text-sm text-[#323334] mt-1">
            Subscribe for the latest stories and promotions
          </p>
        </div>

        <form className="flex w-full max-w-[500px] border border-[#323334]">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="flex-1 px-3 py-2 text-sm focus:outline-none"
          />
          <button
            type="button"
            className="bg-[#323334] text-white px-4 flex items-center justify-center"
          >
            <FiMail size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
