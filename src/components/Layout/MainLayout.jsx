import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 overflow-auto p-6 bg-black text-white">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout