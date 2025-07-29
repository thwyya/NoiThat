import React from "react";
import { FiSearch, FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import UserMenu from "../../views/user/Home/components/UserMenu";

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
            
            <UserMenu />

          <div className="relative flex items-center justify-center">
            <button aria-label="Cart" className="hover:text-black relative">
              <HiOutlineShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-[#F2994A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                5
              </span>
            </button>
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
