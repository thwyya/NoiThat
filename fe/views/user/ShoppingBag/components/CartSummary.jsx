import React, { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import DiscountCodeInput from "./DiscountCodeInput";

const CartSummary = ({ subtotal }) => {
  const [discountCode, setDiscountCode] = useState("");

  const applyDiscount = () => {
    console.log("Applying discount:", discountCode);
  };

  return (
    <div className="w-[370px] h-[310px] bg-[#ECEBE9]/70 p-10 ">
      <DiscountCodeInput onApply={applyDiscount} />

      <div className="text-sm text-[#323334] font-medium mb-6">
        <div className="flex justify-between">
          <span>Order value:</span>
          <span>{subtotal.toFixed(2)} $</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>0.0 $</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Total</span>
          <span>{subtotal.toFixed(2)} $</span>
        </div>
      </div>

      <PrimaryButton text="CONTINUE TO CHECKOUT" fullWidth />
    </div>
  );
};

export default CartSummary;
