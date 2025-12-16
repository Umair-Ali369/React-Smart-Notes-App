import React from "react";
import { HiX } from "react-icons/hi";
import { GrNotes } from "react-icons/gr";
import { IoMdStarOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { sideBar } from "../Style/NoteStryles";

const SideBar = ({ isOpen, closeSideBar }) => {
  const navButtons = [
    {
      page: "All Notes",
      to: "/",
      icon : <GrNotes size={25} className=" dark:text-yellow-50"/>
    },
    {
      page: "Favorites",
      to: "/favorites",
      icon : <IoMdStarOutline size={25} className="text-yellow-400 dark:text-yellow-300"/>
    },
    {
      page: "Trash",
      to: "/trash",
      icon : <FaTrashAlt size={25} className="text-red-500 dark:text-red-300"/>
    }
    ];
  return (
    <>
      <aside className={sideBar.aside} >
        <nav className={sideBar.nav} >
          <h1 className={sideBar.heading} >Menu</h1>
          {navButtons.map((link, index) => (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${sideBar.navLinks} ${
                    isActive
                      ? "bg-indigo-500 text-[14px] text-white font-semibold dark:bg-indigo-800 "
                      : "text-left hover:bg-blue-100 dark:hover:bg-blue-400 p-2 rounded"
                  }`
                }
                key={index}
                
              >
                {link.icon} {link.page}
              </NavLink>
          ))}
        </nav>
      </aside>

      {/* mobile overlay */}

      <div
        className={` fixed inset-0 z-40 md:hidden transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* bg overlay */}
        <div
          className="inset-0 absolute bg-black/30 backdrop-blur-sm"
          onClick={closeSideBar}
        />
        {/* panel sidebar */}
        <aside className="relative w-64 bg-transparent bg-blue-50 dark:bg-transparent h-screen p-4 shadow-lg">
          <button className="absolute top-4 right-4 rounded p-2  text-gray-700 dark:text-gray-200">
            <HiX
              onClick={closeSideBar}
              className="text-3xl text-gray-700 dark:text-gray-200"
            />
          </button>
          <nav className="mt-10 flex flex-col gap-2">
            <h1 className="text-gray-800 px-4 py-2 mb-5 tex-2xl md:text-4xl dark:text-white font-bold">Menu</h1>
            {navButtons.map((link, index) => (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors dark:text-gray-200 ${
                    isActive
                      ? "bg-indigo-500 text-white font-semibold dark:bg-indigo-300 "
                      : "text-left hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
                  }`
                }
                key={index}
                onClick={closeSideBar}
              >
                  {link.icon}{link.page}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
