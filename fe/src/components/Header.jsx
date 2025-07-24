import React from "react";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
      <header className="bg-[#fff]">
          <div className="px-8">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-2xl font-bold text-[#323334]">MOODY STUDIO</h1>

        <div className="flex items-center gap-10 text-2xl text-[#323334]">
          <button aria-label="Search" className="hover:text-black">
            <FiSearch />
          </button>
          <button aria-label="User" className="hover:text-black">
            <FiUser />
          </button>

          <div className="relative">
            <button aria-label="Cart" className="hover:text-black">
              <HiOutlineShoppingBag />
            </button>
            <span className="absolute -top-1 -right-2 bg-[#F2994A] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              5
            </span>
          </div>

          <button aria-label="Wishlist" className="hover:text-black">
            <FiHeart />
          </button>
        </div>
      </div>

          <hr className="flex-1 border-[#323334]" />

      <nav>
        <ul className="flex justify-center gap-20 py-6 text-sm font-semibold text-[#323334] uppercase">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Store</li>
          <li className="hover:text-black cursor-pointer">Accessories</li>
          <li className="hover:text-black cursor-pointer">Brand</li>
          <li className="hover:text-black cursor-pointer">Pages</li>
          <li className="hover:text-black cursor-pointer">About Us</li>
          <li className="hover:text-black cursor-pointer">News</li>
          <li className="hover:text-black cursor-pointer">Contact Us</li>
        </ul>
          </nav>
          <hr className="flex-1 border-[#323334]" />
          </div>
    </header>
  );
};

export default Header;
