import React, { useState } from "react";

const DiscountCodeInput = ({ onApply }) => {
  const [discountCode, setDiscountCode] = useState("");

  const handleApply = () => {
    if (onApply) {
      onApply(discountCode);
    }
  };

  return (
    <div>
      <h3 className="text-sm text-[#323334] font-light mb-2">
        ADD A DISCOUNT CODE
      </h3>
      <div className="flex mb-6">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 border bg-white p-2 text-sm"
        />
        <button
          onClick={handleApply}
          className="bg-black text-white px-4 text-sm"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default DiscountCodeInput;
