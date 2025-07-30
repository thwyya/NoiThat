import React from "react";

const ProductDescription = ({ description, composition, artno }) => {
  return (
    <div className="mt-8 pt-6">
      <div className="w-[532px] bg-[#F0EFED] p-16 ">
        <h2 className="text-[#DA0909] font-light mb-2">Conscious</h2>
        <p className="text-[#323334] mb-4">{description}</p>

        <p className="font-light">
          <span className="text-[#323334]">Composition — </span>
          <span className="text-black/50">{composition}</span>
        </p>
        <p className="font-light">
          <span className="text-[#323334]">Art. No. — </span>
          <span className="text-black/50">{artno}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
