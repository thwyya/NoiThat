import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/data/products"; 
import ProductSuggestions from "@/components/ProductSuggestions";

const ShoppingBagPage = () => {
  return (
    <div>
      <Breadcrumb />
        <h2 className="text-2xl font-bold text-center my-8">SHOPPING BAG</h2>
      
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl text-[#323334] font-medium mb-6">Also You May Buy</h2>
              <ProductSuggestions products={products} />
        </div>
    </div>
  );
};

export default ShoppingBagPage;
