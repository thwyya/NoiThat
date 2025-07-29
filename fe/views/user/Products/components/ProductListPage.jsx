import React from "react";
import SidebarFilter from "./SidebarFilter";
import PrimaryButton from "@/components/PrimaryButton";
import ProductCard from "@/components/ProductCard";
import Rectangle62 from "@/assets/img/Rectangle62.png";
import Rectangle47 from "@/assets/img/Rectangle47.png";
import Rectangle48 from "@/assets/img/Rectangle48.png";
import Rectangle65 from "@/assets/img/Rectangle65.png";
import Rectangle66 from "@/assets/img/Rectangle66.png";
import Rectangle67 from "@/assets/img/Rectangle67.png";
import Rectangle70 from "@/assets/img/Rectangle70.png";
import Rectangle71 from "@/assets/img/Rectangle71.png";
import Rectangle72 from "@/assets/img/Rectangle72.png";
import Rectangle75 from "@/assets/img/Rectangle75.png";
import Rectangle76 from "@/assets/img/Rectangle76.png";
import Rectangle77 from "@/assets/img/Rectangle77.png";
import FilterMenu from "./FilterMenu";

const ProductListPage = () => {
    const products = [
    {
        id: 1,
        name: "Velvet Covered",
        price: 39,
        colors: [
        { hex: "#E0C097", image: Rectangle62 },
        { hex: "#C4C4C4", image: Rectangle47 },
        { hex: "#FFFFFF", image: Rectangle48 },
        ],
    },
    {
        id: 2,
        name: "Candle in Glass Holder",
        price: 14,
        colors: [
        { hex: "#F2C94C", image: Rectangle47 },
        { hex: "#EB5757", image: Rectangle71 },
        ],
    },
    {
        id: 3,
        name: "Metal Photo Frame",
        price: 25,
        colors: [
        { hex: "#C4C4C4", image: Rectangle48 },
        { hex: "#323334", image: Rectangle65 },
        ],
    },
    {
        id: 4,
        name: "Round Floor Mat",
        price: 34,
        colors: [
        { hex: "#E0C097", image: Rectangle65 },
        { hex: "#6FCF97", image: Rectangle70 },
        ],
    },
    {
        id: 5,
        name: "Class Light Holder",
        price: 22,
        colors: [
        { hex: "#C4C4C4", image: Rectangle66 },
        { hex: "#F2994A", image: Rectangle72 },
        ],
    },
    {
        id: 6,
        name: "Flannel Duvet Cover Set",
        price: 44,
        colors: [
        { hex: "#FFFFFF", image: Rectangle67 },
        { hex: "#EB5757", image: Rectangle75 },
        { hex: "#2F80ED", image: Rectangle76 },
        ],
    },
    {
        id: 7,
        name: "Fitted Cotton Sheet",
        price: 24,
        colors: [
        { hex: "#C4C4C4", image: Rectangle70 },
        { hex: "#F2C94C", image: Rectangle62 },
        ],
    },
    {
        id: 8,
        name: "Small Candle in a Small Jar",
        price: 14,
        colors: [
        { hex: "#E0C097", image: Rectangle71 },
        { hex: "#56CCF2", image: Rectangle47 },
        ],
    },
    {
        id: 9,
        name: "Checked Duvet Cover Set",
        price: 24,
        colors: [
        { hex: "#FFFFFF", image: Rectangle72 },
        { hex: "#BB6BD9", image: Rectangle65 },
        ],
    },
    {
        id: 10,
        name: "Washed Linen Pillowcase",
        price: 18,
        colors: [
        { hex: "#C4C4C4", image: Rectangle75 },
        { hex: "#EB5757", image: Rectangle77 },
        ],
    },
    {
        id: 11,
        name: "Ribbed Wool-blend Throw",
        price: 24,
        colors: [
        { hex: "#E0C097", image: Rectangle76 },
        { hex: "#2F80ED", image: Rectangle66 },
        { hex: "#6FCF97", image: Rectangle48 },
        ],
    },
    {
        id: 12,
        name: "Mini Porcelain Dish",
        price: 8,
        colors: [
        { hex: "#FFFFFF", image: Rectangle77 },
        { hex: "#F2994A", image: Rectangle62 },
        ],
    },
    ];

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
                name={p.name}
                price={p.price}
                colors={p.colors}
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
