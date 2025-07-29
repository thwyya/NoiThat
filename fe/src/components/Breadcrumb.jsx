import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); 
  return (
    <div className="w-full">
      <div className="py-2">

        <nav className="py-4 text-center text-sm text-[#323334]">
          <Link to="/" className="hover:underline">
                homepage
          </Link>
                  
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <span key={index}>
              {" / "}
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={routeTo} className="hover:underline">
                  {name}
                </Link>
              )}
            </span>
          );
        })}
              </nav>
              </div>
    </div>
  );
};

export default Breadcrumb;
