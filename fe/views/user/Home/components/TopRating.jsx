import React from "react";
import TopRatingCard from "./TopRatingCard";
import PrimaryButton from "@/components/PrimaryButton";
import toprating_1 from "@/assets/img/toprating_1.png";
import toprating_2 from "@/assets/img/toprating_2.png";
import toprating_3 from "@/assets/img/toprating_3.png";
import toprating_4 from "@/assets/img/toprating_4.png";
import toprating_5 from "@/assets/img/toprating_5.png";
import toprating_6 from "@/assets/img/toprating_6.png";
import toprating_7 from "@/assets/img/toprating_7.png";
import toprating_8 from "@/assets/img/toprating_8.png";
import toprating_9 from "@/assets/img/toprating_9.png";

const TopRating = () => {
  const products = [
    { name: "Tray with Foot", image: toprating_1, price: 30, rating: 4 },
    { name: "Twill Seat Cushion", image: toprating_2, price: 30, rating: 4 },
    { name: "Fluted Beverage Glass", image: toprating_3, price: 30, rating: 4 },
    { name: "Ceramic Egg Cup", image: toprating_4, price: 30, rating: 4 },
    { name: "Small Bamboo Box", image: toprating_5, price: 30, rating: 4 },
    { name: "Metal Cutlery Basket", image: toprating_6, price: 30, rating: 4 },
    { name: "4-pack Ceramic Cups", image: toprating_7, price: 30, rating: 4 },
    { name: "2-pack Linen Napkins", image: toprating_8, price: 30, rating: 4 },
    { name: "Glazed Stoneware Plate", image: toprating_9, price: 30, rating: 4 },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      <h2 className="text-2xl text-[#323334] font-bold mb-8 uppercase">
        Top Rating
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <TopRatingCard
            key={i}
            image={p.image}
            name={p.name}
            price={p.price}
            rating={p.rating}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <PrimaryButton text="Load More Products" />
      </div>
    </section>
  );
};

export default TopRating;
