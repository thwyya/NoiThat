import { FiFilter } from "react-icons/fi";
import DropdownMenu from "@/components/DropdownMenu";

const FilterMenu = () => {
  return (
    <DropdownMenu
      trigger={<FiFilter size={24} />}
      position="bottom-left"
    >
      <div className="p-3 space-y-2">
        <button className="w-full px-3 py-1 text-sm bg-gray-200 rounded">
          Price
        </button>
        <button className="w-full px-3 py-1 text-sm bg-gray-200 rounded">
          Rating
        </button>
        <button className="w-full px-3 py-1 text-sm bg-gray-200 rounded">
          Category
        </button>
      </div>
    </DropdownMenu>
  );
};
export default FilterMenu;