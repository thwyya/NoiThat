import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const SizeDropdown = ({ options, value, onChange, placeholder = "Select Size" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center border border-[#323334] px-3 py-2 cursor-pointer select-none"
      >
        <span className="text-[#323334]">
          {value || placeholder}
        </span>
        <IoIosArrowForward
          className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white border border-[#323334] mt-1 max-h-40 overflow-auto z-50 shadow">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                value === option ? "bg-gray-200" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeDropdown;
