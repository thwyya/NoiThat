import React, { useRef, useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

const ProductChangeMenu = ({ product, onClose, onChange }) => {
    const menuRef = useRef(null);
    
    const [tempSize, setTempSize] = useState(product.size);
    const [tempColor, setTempColor] = useState(product.color);
    
    useEffect(() => {
        setTempSize(product.size);
        setTempColor(product.color);
    }, [product]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
    
    const handleDone = () => {
        onChange("size", tempSize);
        onChange("color", tempColor);
        onClose();
    };

    const handleBack = () => {
        onClose();
    };

  return (
    <div ref={menuRef} className="absolute top-full left-0 mt-2 z-50" >
      <div
            className={`relative bg-white border border-[#323334] p-6 shadow 
                    before:content-[''] before:absolute before:top-[-6px] before:left-4 
                    before:w-3 before:h-3 before:bg-white 
                    before:border-l before:border-t before:border-[#323334] 
                    before:rotate-45`}
      >
      <div className="mb-4">
        <p className="font-medium mb-2">Size:</p>
        <select
          className="border px-3 py-2 w-full"
          value={tempSize}
            onChange={(e) => setTempSize(e.target.value)}
        >
          {product.sizes.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
          <p className="font-medium mb-2">Color:</p>
          <div className="grid grid-cols-6 gap-2">
            {product.colors.map((c, idx) => (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full border cursor-pointer overflow-hidden ${
                  tempColor === c.name ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setTempColor(c.name)}
              >
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                </div>
            ))}
            </div>
      </div>
          <div className="flex gap-2 justify-end mt-4">
              <SecondaryButton text="BACK" fullWidth onClick={handleBack} />
          <PrimaryButton text="DONE" fullWidth onClick={handleDone} />
      </div>
          </div>
          </div>
  );
};

export default ProductChangeMenu;
