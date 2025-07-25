import React from "react";
import SecondaryButton from '@/components/SecondaryButton';

const FeaturedProducts = () => {
  const products = [
    {
      name: "INY VINTAGE CHAIR",
      image:
        "https://furniture-7qms.vercel.app/assets/image%203.png", 
    },
    {
      name: "LARGE TERRACOTA VASE",
      image:
        "https://furniture-7qms.vercel.app/assets/image%204.png", 
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-16 px-8">
      {products.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center ${
            index === 1 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div className="w-full md:w-1/2">
            <div className="w-full h-[350px]  overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-[#323334] mb-6">{item.name}</h3>
                <SecondaryButton text="VIEW DETAILS" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
