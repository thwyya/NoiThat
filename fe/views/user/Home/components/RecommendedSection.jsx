import React from "react";
import RecommendationCard from "./RecommendationCard";
import product_1 from "@/assets/img/product_1.jpg";
import product_2 from "@/assets/img/product_2.png";
import product_3 from "@/assets/img/product_3.jpg";
import product_4 from "@/assets/img/product_4.png";
import product_5 from "@/assets/img/product_5.png";
import product_6 from "@/assets/img/product_6.png"; 
import product_7 from "@/assets/img/product_7.png";
import product_8 from "@/assets/img/product_8.jpg";

const RecommendedSection = () => {
  const recommendedProducts = [
    { name: "glass bottle", image: product_1, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "LINEN BEACH TOWEL", image: product_2, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "Square Clear Glass Box", image: product_3, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "4-pack Small Ceramic Plates", image: product_4, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "Large Clear Glass Box", image: product_5, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "Round Jute Placemat", image: product_6, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "Metal Wire Basket", image: product_7, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
    { name: "Seagrass bag", image: product_8, price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4 },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {recommendedProducts.map((product, index) => (
          <RecommendationCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
