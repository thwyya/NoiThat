import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/data/products"; 
import ProductSuggestions from "@/components/ProductSuggestions";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

const ShoppingBagPage = () => {
  const cartIds = [1, 3, 4, 12];
  const defaultCart = products
    .filter((p) => cartIds.includes(p.id))
    .map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      artNo: p.artno,
      color: p.colors[0].name,
      size: p.sizes[0],
      colors: p.colors,
      sizes: p.sizes,
      quantity: 1,
      image: p.colors[0].image,
      checked: false
    }));

  const [cartItems, setCartItems] = useState(defaultCart);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, value) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const handleCheckChange = (id, isChecked) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, checked: isChecked } : item
      )
    );
  };

  const subtotal = cartItems
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdateVariant = (id, field, value) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (field === "color") {
          const colorObj = item.colors.find((c) => c.name === value);
          return { ...item, color: value, image: colorObj?.image || item.image };
        }

        if (field === "size") {
          return { ...item, size: value };
        }

        return item;
      })
    );
  };


  return (
    <div>
      <Breadcrumb />
        <h2 className="text-2xl font-bold text-center my-8">SHOPPING BAG</h2>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 p-6">
        <div className="flex-1">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
              onCheckChange={handleCheckChange}
              onUpdateVariant={handleUpdateVariant}
            />
          ))}

          <div className="mt-4 text-right text-[#323334]">
            <p className="text-lg font-medium">Total</p>
            <hr className="my-1 border-[#323334]" /> 
            <p className="text-lg font-medium">{subtotal.toFixed(2)} $</p>
          </div>

        </div>

        <CartSummary subtotal={subtotal} />
        </div>
      
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl text-[#323334] font-medium mb-6">Also You May Buy</h2>
              <ProductSuggestions products={products} excludeIds={cartItems.map(item => item.id)}/>
        </div>
        </div>
    </div>
  );
};

export default ShoppingBagPage;
