import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import DropdownMenu from "@/components/DropdownMenu";
import FilterMainMenu from "./FilterMainMenu";
import FilterSubMenu from "./FilterSubMenu";

const filterOptions = {
  Quality: ["Premium Quality", "Standard Quality", "Eco Quality", "Handmade"],
  Collection: ["Summer 2025", "Winter 2025", "Classic", "Modern"],
  Concept: ["Minimalist", "Luxury", "Vintage", "Scandinavian"],
  Color: [
    "#ffffff", "#323334", "#C4C4C4", "#F2C94C", "#F2994A",
    "#EB5757", "#BB6BD9", "#56CCF2", "#6FCF97", "#219653",
    "#2F80ED", "#DF1313", "#770505", "#0A5D8B", "#AD5B12",
    "#4F0E8B", "#0A7090", "#156008"
  ],
  Size: ["Small", "Medium", "Large", "Extra Large"],
  "Product Type": ["Bedding", "Lighting", "Furniture", "Decor"],
};

const FilterMenu = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(
    Object.keys(filterOptions).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {})
  );

  const toggleSubmenu = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const handleMainCheckboxChange = (filterName) => {
    setSelectedFilters((prev) => {
      const allOptions = filterOptions[filterName];
      if (prev[filterName].length === allOptions.length) {
        return { ...prev, [filterName]: [] };
      } else {
        return { ...prev, [filterName]: [...allOptions] };
      }
    });
    setActiveFilter(filterName);
  };

  const handleOptionChange = (filterName, option) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName];
      const isSelected = current.includes(option);
      let newSelected = isSelected
        ? current.filter((item) => item !== option)
        : [...current, option];

      return { ...prev, [filterName]: newSelected };
    });
  };

  const clearAll = () => {
    const cleared = Object.keys(filterOptions).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
    setSelectedFilters(cleared);
  };

  const done = () => {
    setActiveFilter(null);
  };

  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-1 text-[#323334]">
          <FiFilter size={18} />
          <span className="text-sm">FILTER & SORT</span>
        </div>
      }
      position="bottom-left"
      menuWidth="180px"
    >
      <div className="relative flex">
        <FilterMainMenu
          filterOptions={filterOptions}
          selectedFilters={selectedFilters}
          onMainCheckboxChange={handleMainCheckboxChange}
          onToggleSubmenu={toggleSubmenu}
          onClearAll={clearAll}
          onDone={done}
        />
        <FilterSubMenu
          activeFilter={activeFilter}
          filterOptions={filterOptions}
          selectedFilters={selectedFilters}
          onOptionChange={handleOptionChange}
        />
      </div>
    </DropdownMenu>
  );
};

export default FilterMenu;
