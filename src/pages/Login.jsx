import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Later add API logic here
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-[#111114] border border-gray-800 rounded-2xl p-8 shadow-xl">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <FiLogIn className="text-purple-400" />
          Login
        </h1>

        <p className="text-gray-400 text-center text-sm mb-6">
          Login to continue your communication journey
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiMail /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiLock /> Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-purple-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-600/30"
          >
            Login
          </button>
        </form>

        {/* Create Account */}
        <p className="text-center text-gray-400 mt-6 text-sm flex justify-center gap-1">
          Don’t have an account?
          <Link to="/register" className="text-purple-400 hover:underline flex items-center gap-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
