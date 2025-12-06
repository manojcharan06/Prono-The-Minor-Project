import React from "react";
import { NavLink } from "react-router-dom";
import { FiMusic, FiUpload, FiAward } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#111114] border-r-2 border-gray-800 p-6 text-white flex flex-col gap-6">
      <div className="border-b-2 border-gray-800 -mx-6 pb-6">
        <div className="flex items-center gap-3 px-6">
          <img
            src="/logo1.svg"
            alt="logo"
            className="w-15 h-15 object-contain"
          />
          <h1 className="text-3xl font-bold tracking-wide pb-1.5 text-[#4CDDE6]">
            Prono
          </h1>
        </div>
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        
        {/* Feed */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition 
             ${isActive ? "bg-[#1A1A1D] text-[#4CDDE6]" : "text-gray-300 hover:bg-[#1A1A1D]"}`
          }
        >
          <FiMusic className="text-xl" />
          <span className="text-lg font-medium">Feed</span>
        </NavLink>

        {/* Upload */}
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition 
             ${isActive ? "bg-[#1A1A1D] text-[#4CDDE6]" : "text-gray-300 hover:bg-[#1A1A1D]"}`
          }
        >
          <FiUpload className="text-xl" />
          <span className="text-lg font-medium">Upload</span>
        </NavLink>

        {/* Leaderboard */}
        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition 
             ${isActive ? "bg-[#1A1A1D] text-[#4CDDE6]" : "text-gray-300 hover:bg-[#1A1A1D]"}`
          }
        >
          <FiAward className="text-xl" />
          <span className="text-lg font-medium">Leaderboard</span>
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
