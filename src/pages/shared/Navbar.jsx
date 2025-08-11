import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "night"
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "night" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "home", to: "/home", type: "route" },
    { name: "about", to: "#about", type: "anchor" },
    { name: "service", to: "/service", type: "route" },
    { name: "pricing", to: "/pricing", type: "route" },
  ];

  return (
    <div className="roboto-serif-font bg-base-100 shadow-md text-base-content">
      <header className="w-full fixed z-20 top-0 left-0 bg-base-100 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 md:px-8">
          {/* Logo */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Car Rental</h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) =>
              link.type === "anchor" ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="hover:text-[#ffa600] hover:underline underline-offset-4 font-bold text-xl transition-all duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-[#ffa600] hover:underline underline-offset-4 font-bold text-xl transition-all duration-200 ${
                      isActive ? "text-[#ffa600]" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <label className="flex items-center cursor-pointer gap-2">
              <input
                type="checkbox"
                className="toggle theme-controller"
                onChange={handleThemeChange}
                checked={theme === "night"}
              />
            </label>

            {/* Sign In */}
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden md:block text-base font-semibold">
              Sign In
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {menuOpen ? (
                <RxCross2
                  onClick={toggleMenu}
                  size={28}
                  className="cursor-pointer"
                />
              ) : (
                <CiMenuFries
                  onClick={toggleMenu}
                  size={28}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col gap-4 px-4 py-4 transition-all bg-base-100 text-base-content ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ffa600] hover:underline underline-offset-4 font-semibold text-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-[#ffa600] hover:underline underline-offset-4 font-semibold text-lg transition-all duration-200 ${
                    isActive ? "text-[#ffa600]" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
