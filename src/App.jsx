import React from 'react'
import { Routes, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import Leaderboard from "./pages/Leaderboard";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./components/Layout/MainLayout";


const App = () => {
  return (
    <Routes>

      {/* Pages WITH sidebar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Route>

      {/* Pages WITHOUT sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  )
}

export default App