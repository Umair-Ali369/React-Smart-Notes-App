import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import AllNotes from "./Pages/AllNotes";
import Favorites from "./Pages/Favorites";
import Trash from "./Pages/Trash";
import { motion } from "framer-motion";
import { Routes, Route, NavLink, Link } from "react-router-dom";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeToggle, setThemeToggle] = useState(
    () => localStorage.getItem("themeToggle") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (themeToggle === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("themeToggle", themeToggle);
  }, [themeToggle]);

  const toggleSideBar = () => setSidebarOpen((prev) => !prev);
  const themToggle = () =>
    setThemeToggle((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
     
        <SideBar
          isOpen={sidebarOpen}
          closeSideBar={() => setSidebarOpen(false)}
        />

      <div className="flex flex-col flex-1">
        <Header
          onMenuClick={toggleSideBar}
          onThemeToggle={themToggle}
          theme={themeToggle}
        />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
