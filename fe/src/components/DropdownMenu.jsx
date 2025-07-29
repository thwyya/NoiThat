import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({
  trigger,        
  children,        
  position = "bottom-left", 
  className = "",
  menuWidth = "150px"
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const positionClasses = {
    "bottom-left": "top-full left-0 mt-2",
    "bottom-right": "top-full right-0 mt-2",
    "top-left": "bottom-full left-0 mb-2",
    "top-right": "bottom-full right-0 mb-2",
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>

      {open && (
        <div
          className={`absolute z-50 bg-white border border-[#323334] p-2 ${positionClasses[position]} ${className} before:content-[''] before:absolute before:top-[-6px] before:left-4 before:w-3 before:h-3 before:bg-white before:border-l before:border-t before:border-[#323334] before:rotate-45`}
          style={{ minWidth: menuWidth }} 
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
