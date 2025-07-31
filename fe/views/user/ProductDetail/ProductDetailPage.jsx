import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import ProductImages from "./components/ProductImages";
import ProductDescription from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";
import { products } from "@/data/products"; 
import ProductSuggestions from "@/components/ProductSuggestions";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6 text-center">Not available</div>;
  }

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const selectedColor = product.colors[selectedColorIndex];

  const [mainImage, setMainImage] = useState(selectedColor.image);
  const [currentIndex, setCurrentIndex] = useState(
    product.images.indexOf(selectedColor.image) !== -1
      ? product.images.indexOf(selectedColor.image)
      : 0
  );

  const handleColorSelect = (index) => {
    setSelectedColorIndex(index);

    const colorImage = product.colors[index].image;
    setMainImage(colorImage);

    const imgIndex = product.images.indexOf(colorImage);
    setCurrentIndex(imgIndex !== -1 ? imgIndex : 0);
  };

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <ProductImages
            images={product.images}
            mainImage={mainImage}
            setMainImage={setMainImage}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />

          <ProductInfo
            name={product.name}
            price={product.price}
            color={selectedColor.name}
            sizes={product.sizes}
            colors={product.colors}
            selectedColorIndex={selectedColorIndex}
            onColorSelect={handleColorSelect}
          />
        </div>

        <ProductDescription
          description={product.description}
          composition={product.composition}
            artno={product.artno}
        />
      </div>
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl text-[#323334] font-medium mb-6">You May Also Like</h2>
              <ProductSuggestions products={products} excludeIds={[product.id]} />
        </div>
    </div>
  );
};


export default ProductDetailPage;
