import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import ProductChangeMenu from "./ProductChangeMenu";

const CartItem = ({
  id,
  name,
  price,
  artNo,
  color,
  size,
  sizes,
  colors,
  quantity,
  image,
  checked,
  onCheckChange,
  onRemove,
  onQuantityChange,
  onUpdateVariant
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (field, value) => {
    onUpdateVariant(id, field, value);
  };

  const totalPrice = (price * quantity).toFixed(2);
  return (
    <div className="flex gap-4 py-4 relative">
      <input  
        type="checkbox"
        className="mt-4"
        checked={checked}
        onChange={(e) => onCheckChange(id, e.target.checked)}
      />

      <img src={image} alt={name} className="w-[130px] h-[180px] object-cover" />

      <div className="flex-1">
        <h2 className="text-lg font-medium text-[#323334]">{name}</h2>
        <p className="text-[#323334] font-medium">{price.toFixed(2)} $</p>
        <div className="relative">
          <div
            className="grid grid-cols-2 text-sm text-[#323334] font-light mt-1 cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <div>
              <p>Art. No.: {artNo}</p>
              <p>Color: {color}</p>
            </div>
            <div>
              <p>Size: {size}</p>
              <p>Total: {totalPrice} $</p>
            </div>
          </div>

          {showMenu && (
            <ProductChangeMenu
              product={{ size, sizes, color, colors }}
              onClose={() => setShowMenu(false)}
              onChange={handleChange}
            />
          )}
        </div>


        <div className="flex items-center gap-2 mt-2">
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => onQuantityChange(id, Number(e.target.value))}
            className="w-12 border text-center"
          />
        </div>
      </div>

      <button
        onClick={() => onRemove(id)}
        className="absolute right-1 text-[#323334]"
      >
        <FiX size={20} />
      </button>
    </div>
  );
};

export default CartItem;