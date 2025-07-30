import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="roboto-serif-font bg-white shadow-md">
      <header className="bg-white relative z-20">
        <nav className="flex justify-between items-center md:px-8 px-4 mx-auto py-4">
          <div>
            <h3 className="text-3xl font-bold">Car Rental</h3>
          </div>

          {/* Mobile & Desktop Menu (hidden on desktop) */}
          <div
            className={`md:static absolute md:min-h-fit bg-white left-0 top-full w-full md:w-auto flex items-center px-5 z-10 overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-h-60 " : "max-h-0 "
            }`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-6 py-4 w-full justify-center font-bold text-xl">
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Sign In & Toggle Icon */}
          <div className="flex items-center gap-2">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden md:block">
              Sign In
            </button>
            <div className="md:hidden">
              {menuOpen ? (
                <RxCross2
                  onClick={onToggleMenu}
                  size={30}
                  className="cursor-pointer"
                />
              ) : (
                <CiMenuFries
                  onClick={onToggleMenu}
                  size={30}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
