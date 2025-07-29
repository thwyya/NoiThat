import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

const FilterMainMenu = ({
  filterOptions,
  selectedFilters,
  onMainCheckboxChange,
  onToggleSubmenu,
  onClearAll,
  onDone,
}) => {
  return (
    <div className="w-44 flex flex-col justify-between relative">
      <div>
        {Object.keys(filterOptions).map((filter) => {
          const isAllSelected =
            selectedFilters[filter].length === filterOptions[filter].length;

          return (
            <div
              key={filter}
              className="flex items-center justify-between py-1"
            >
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={() => onMainCheckboxChange(filter)}
              />
              <span
                className="text-sm flex-1 ml-2 cursor-pointer"
                onClick={() => onToggleSubmenu(filter)}
              >
                {filter}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between gap-2 mt-3">
        <SecondaryButton
          text="CLEAR ALL"
          onClick={onClearAll}
          className="text-xs flex-1"
        />
        <PrimaryButton
          text="DONE"
          onClick={onDone}
          className="text-xs flex-1"
        />
      </div>
    </div>
  );
};

export default FilterMainMenu;
