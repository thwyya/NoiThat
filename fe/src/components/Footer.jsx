import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#323334] text-[#fff]">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-white font-bold text-2xl mb-4">URBAN OUTFITTERS</h1>
          <p className="text-sm mb-4 text-white opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <p className="font-semibold text-white">121 King Street, Melbourne 3000</p>
          <p className="font-semibold text-white">+61 3 8376 6284</p>
          <p className="font-semibold 0text-white mb-4">contact@urbanoutfitters.com</p>

          <div className="flex gap-20">
            <a href="#" ><FaFacebookF /></a>
            <a href="#" ><FaTwitter /></a>
            <a href="#" ><FaInstagram /></a>
            <a href="#" ><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">SHOPPING</h3>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#" >Your cart</a></li>
            <li><a href="#" >Your orders</a></li>
            <li><a href="#" >Compared items</a></li>
            <li><a href="#" >Wishlist items</a></li>
            <li><a href="#" >Shipping detail</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">MORE LINK</h3>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#" >Blog</a></li>
            <li><a href="#" >Gift Center</a></li>
            <li><a href="#" >Buying Guides</a></li>
            <li><a href="#" >New Arrivals</a></li>
            <li><a href="#" >Clearance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">FROM THE BLOG</h3>

          <div className="mb-6">
            <p className="text-sm text-gray-400">
              <span className="text-xl text-white">26</span> May
            </p>
            <p className="text-sm mt-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-xs text-gray-400 mt-1">3 comments</p>
            <hr className="border-gray-600 mt-4" />
          </div>

          <div>
            <p className="text-sm text-gray-400">
              <span className="text-xl text-white">27</span> May
            </p>
            <p className="text-sm mt-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-xs text-gray-400 mt-1">3 comments</p>
          </div>
        </div>
      </div>

      <div className="bg-[#222222] text-center py-4 text-sm text-[#fff] font-light">
        Urban Outfitters © – All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
