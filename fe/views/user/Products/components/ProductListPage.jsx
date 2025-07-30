import React from "react";
import SidebarFilter from "./SidebarFilter";
import PrimaryButton from "@/components/PrimaryButton";
import ProductCard from "@/components/ProductCard";
import FilterMenu from "./FilterMenu";
import { products } from "@/data/products";

const ProductListPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex gap-6 px-4 py-8">
      <SidebarFilter />

      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">BEDROOM</h2>
        </div>

        <p className="text-[#323334] mb-6">
          Its easy to transform your bedroom interior with our great selection of accessories.
        </p>
        
        <div className="mb-8">
            <FilterMenu />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              colors={p.colors}
              defaultImage={p.colors[0]?.image}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <PrimaryButton text="Load More Products" />
        </div>  
      </div>
    </div>
  );
};

export default ProductListPage;
