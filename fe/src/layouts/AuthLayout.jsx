import React from 'react';
import { FiX } from "react-icons/fi";

const AuthLayout = ({ children, onClose }) => {
  return (
    <div className="flex w-[900px] h-[600px] bg-white rounded-none overflow-hidden shadow-lg">
      <div className="flex basis-[55%] flex-col justify-center items-center p-12 bg-white">
        {children}
      </div>

      <div className="hidden md:flex basis-[45%] relative">
        <img
          src="https://i.pinimg.com/1200x/90/72/8e/90728ecf6a761e0b203c2599c122c6f8.jpg"
          alt="Decor"
          className="w-full h-full object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-{#323334}"
        >
          <FiX size={24} />
        </button>
      </div>
    </div>
  )
}

export default AuthLayout