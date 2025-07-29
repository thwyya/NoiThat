import React from "react";

const FilterSubMenu = ({ activeFilter, filterOptions, selectedFilters, onOptionChange }) => {
  if (!activeFilter) return null; 

  return (
    <div className="absolute left-full top-0 w-56 bg-white border border-[#323334] p-3 ml-2 shadow-md">
      {activeFilter === "Color" ? (
        <div className="grid grid-cols-5 gap-2">
          {filterOptions.Color.map((color) => {
            const isSelected = selectedFilters.Color.includes(color);

            let borderStyle = "none";
            if (color.toLowerCase() === "#ffffff") {
              borderStyle = isSelected
                ? "2px solid #323334"
                : "1px solid rgba(170,170,172,0.6)";
            } else if (isSelected) {
              borderStyle = "2px solid #323334";
            }

            return (
              <div
                key={color}
                className="w-5 h-5 rounded-full cursor-pointer"
                style={{
                  backgroundColor: color,
                  border: borderStyle,
                }}
                onClick={() => onOptionChange("Color", color)}
              />
            );
          })}
        </div>
      ) : (
        filterOptions[activeFilter].map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer text-sm"
          >
            <input
              type="checkbox"
              checked={selectedFilters[activeFilter].includes(option)}
              onChange={() => onOptionChange(activeFilter, option)}
            />
            {option}
          </label>
        ))
      )}
    </div>
  );
};

export default FilterSubMenu;
