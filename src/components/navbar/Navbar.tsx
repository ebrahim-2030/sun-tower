import React, { useState } from "react";
import logo from "../../assets/images/exclusive1.png";
import { Link, NavLink } from "react-router-dom";
import navlinks from "../../data/nav-links";
import { MdArrowDropDown } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="mt-3 md:mt-4 lg:mt-6 z-50 fixed w-full">
      {/* TABLET MENU */}
      <div className="bg-white shadow mx-3 lg:mx-12 px-2 py-2 md:px-4 md:py-2 rounded md:rounded-full">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} className="h-9 w-9 rounded-full" alt="Logo" />
          </div>
          <div className="flex items-center">
            <ul className="hidden md:flex md:gap-4 text-[14px] lg:text-base lg:gap-8 md:ml-10 xl:ml-20 text-[#222]">
              {navlinks.map((link) => (
                <NavLink
                  to={link.href}
                  key={link.id}
                  onMouseEnter={() => link.id === 3 && setDropDown(true)}
                  onMouseLeave={() => link.id === 3 && setDropDown(false)}
                  className={({ isActive }) =>
                    ` ${
                      isActive && link.id !== 3
                        ? " text-[#D98A46]  "
                        : "text-[#333] "
                    } ${
                      link.id !== 3 ? "hover:text-[#D98A46]" : ""
                    } relative group cursor-pointer text-[14px] font-medium rounded-full flex items-center gap-1 `
                  }
                >
                  {link.id !== 3 && link.text}
                  {link.id === 3 && (
                    <div className="flex items-center">
                      <span className="flex items-center">
                        Properties
                        <MdArrowDropDown
                          className={`text-2xl text-[#444] ${
                            dropDown && "rotate-180 "
                          } transition-all duration-300 `}
                        />
                      </span>
                      {dropDown && (
                        <ul className="absolute top-6 left-0 px-5 rounded-b-md w-72 bg-white flex flex-col gap-3">
                          {link.sublinks?.map((sub) => (
                            <Link
                              to={sub.href}
                              key={sub.id}
                              className="px-2 py-1 cursor-pointer border-b flex items-center justify-between hover:text-[#D98A46]"
                            >
                              <span>{sub.text}</span>
                              <img className="h-6 w-6" src={sub.icon} alt="" />
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="text-xs flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-[#D98A46] text-white text-[12px] font-medium px-4 py-3 rounded-full cursor-pointer">
              Feedback
              <VscFeedback className="text-lg" />
            </button>
            <div
              className="md:hidden cursor-pointer flex flex-col gap-[5px] items-end"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span
                className={`w-7 bg-[#D98A46] h-[3px] rounded-full transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 translate-y-[8px]" : "rotate-0"
                }`}
              ></span>
              <span
                className={`bg-[#D98A46] h-[3px] rounded-full transition-all duration-300 ${
                  menuOpen ? "w-0 -translate-x-1" : "w-5"
                }`}
              ></span>
              <span
                className={`w-7 bg-[#D98A46] h-[3px] rounded-full transition-transform duration-300 ${
                  menuOpen ? "rotate-45 -translate-y-[8px]" : "rotate-0"
                }`}
              ></span>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-500 flex flex-col justify-start gap-4 
            ${menuOpen ? "max-h-[300px] mt-4" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-1">
            {navlinks.map((link) => (
              <NavLink
                to={link.href}
                key={link.id}
                onClick={() => {
                  link.id === 3 && setDropDown((prev) => !prev);
                  link.id !== 3 && setMenuOpen(false);
                }}
                className={`px-2 py-1 font-medium text-[14px text-[#222] border-b border-[#eee] cursor-pointer flex flex-col items-start gap-1 ${
                  link.id !== 3 ? "hover:text-[#D98A46]" : ""
                } ${link.id === 5 ? "border-none" : ""} ${
                  !dropDown && link.id === 3 ? "hover:text-[#D98A46]" : ""
                } group`}
              >
                <div className="flex w-full justify-between">
                  {link.text}
                  {link.id === 3 && (
                    <MdArrowDropDown
                      className={`text-2xl text-[#444] transition-all group-hover:text-[#D98A46] duration-300 ${
                        dropDown ? "rotate-180" : ""
                      } `}
                    />
                  )}
                </div>
                {link.id === 3 && dropDown && (
                  <ul
                    className={`w-full flex flex-col gap-2 transition-all duration-300 overflow-hidden max-h-[200px] py-1`}
                  >
                    {link.sublinks?.map((sub) => (
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to={sub.href}
                        key={sub.id}
                        className={`px-2 py-1 ${
                          sub.id === 4 ? "border-0" : "border-b"
                        } border-[#eee] cursor-pointer flex items-center justify-between hover:text-[#D98A46]`}
                      >
                        <span>{sub.text}</span>
                        <img className="h-6 w-6" src={sub.icon} alt="" />
                      </Link>
                    ))}
                  </ul>
                )}
              </NavLink>
            ))}
          </ul>
          <button className="bg-[#D98A46] text-white text-[12px] font-medium px-4 py-2 rounded-lg cursor-pointer">
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
