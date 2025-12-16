import React from "react";
import { HiMenu, HiMoon, HiSun } from "react-icons/hi";
import { header } from "../Style/NoteStryles";

const Header = ({ onMenuClick, onThemeToggle, theme }) => {
  return (
    <header className={header.main}>
      <div className={header.div}>
        <button className={header.menuBtn}>
          <HiMenu
            onClick={onMenuClick}
            className={header.menuIcon}
          />
        </button>

        <h1 className={header.logo}>
          AT Smart Notes
        </h1>
      </div>
      <div>
        <button 
        className={header.themeToggleBtn}
        onClick={onThemeToggle}
        >
         {theme === 'light' ? (
          <HiMoon className={header.moonIcon}/>
         ) : (
          <HiSun className={header.sunIcon}/>
         )}
        </button>
      </div>
    </header>
  );
};

export default Header;
