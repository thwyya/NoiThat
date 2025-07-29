import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const SidebarFilter = () => {
  const [openSubmenus, setOpenSubmenus] = useState({
    bedroom: false,
    livingRoom: false,
    childRoom: false,
    bathroom: false,
    outdoor: false,
  });

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuData = {
    bedroom: [
      "Duvet Cover Sets",
      "Sheets",
      "Bedspreads & Blankets",
      "Blankets",
      "Curtains",
      "Pillowcases",
      "Rugs",
    ],
    livingRoom: [
      "Sofa",
      "Coffee Tables",
      "TV Stands",
      "Bookshelves",
      "Rugs",
      "Curtains",
      "Lighting",
    ],
    childRoom: [
      "Kids Beds",
      "Study Desks",
      "Toy Storage",
      "Bookshelves",
      "Play Rugs",
      "Wall Art",
    ],
    bathroom: [
      "Towels",
      "Bath Mats",
      "Shower Curtains",
      "Bathroom Storage",
      "Mirrors",
    ],
    outdoor: [
      "Outdoor Chairs",
      "Patio Tables",
      "Garden Benches",
      "Outdoor Rugs",
      "Umbrellas",
      "Planters",
    ],
  };

  return (
    <aside className="w-full md:w-1/4 p-4 text-sm">
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">New Arrivals</h3>
        <ul>
          <li className="cursor-pointer hover:text-[#F81111]">New Arrivals</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Shop By Room</h3>
        <ul className="space-y-1">
          {Object.keys(menuData).map((key) => (
            <li key={key} className="text-[#323334]">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-[#F81111]"
                onClick={() => toggleSubmenu(key)}
              >
                <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                <IoIosArrowForward
                  className={`transition-transform duration-300 ${
                    openSubmenus[key] ? "rotate-90" : ""
                  }`}
                />
              </div>

              {openSubmenus[key] && (
                <ul className="pl-4 space-y-1 text-[#323334] text-sm mt-1">
                  {menuData[key].map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-[#F81111]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Shop By Concept</h3>
        <ul>
          <li>Conscious</li>
          <li>Premium Quality</li>
          <li>Classic Collection</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Gender</h3>
        <div className="space-y-2">
          <label>
            <input type="checkbox" /> Man
          </label>
          <br />
          <label>
            <input type="checkbox" /> Woman
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Color</h3>
        <div className="grid grid-cols-6 gap-2 w-[120px]">
          {[
            "#ffffff", "#323334", "#C4C4C4", "#F2C94C", "#F2994A",
            "#EB5757", "#BB6BD9", "#56CCF2", "#6FCF97", "#219653",
            "#2F80ED", "#DF1313", "#770505", "#0A5D8B", "#AD5B12",
            "#4F0E8B", "#0A7090", "#156008"
          ].map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-sm border"
              style={{
                backgroundColor: color,
                borderColor: color === "#ffffff" ? "#AAAAAC99" : color,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Price</h3>
        <div className="space-y-2">
          <label>
            <input type="checkbox" /> 0$ – 40$
          </label>
          <br />
          <label>
            <input type="checkbox" /> 40$ – 100$
          </label>
          <br />
          <label>
            <input type="checkbox" /> 100$ – 150$
          </label>
          <br />
          <label>
            <input type="checkbox" /> 150$ – 175$
          </label>
          <br />
          <label>
            <input type="checkbox" /> 175$ – 250$
          </label>
          <br />
          <label>
            <input type="checkbox" /> 250$ – 350$
          </label>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilter;
