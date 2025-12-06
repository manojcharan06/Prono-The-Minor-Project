import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiImage,
  FiStar,
  FiLogIn,
} from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      username: form.username,
      name: form.name,
      email: form.email,
      password: form.password,
      avatar,
    };

    console.log("Form Submitted:", payload);

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-[#111114] border border-gray-800 rounded-2xl p-8 shadow-xl">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <FiStar className="text-purple-400" />
          Create Account
        </h1>

        <p className="text-gray-400 text-center text-sm mb-6">
          Join the platform and start improving your communication
        </p>

        <form className="space-y-5" onSubmit={handleRegister}>

          {/* Avatar */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center overflow-hidden relative">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  className="w-full h-full object-cover"
                  alt="avatar preview"
                />
              ) : (
                <FiImage className="text-gray-500 text-3xl" />
              )}
            </div>

            <label className="cursor-pointer text-purple-400 hover:underline text-sm">
              Upload Avatar
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatar}
                className="hidden"
              />
            </label>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiUser /> Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Choose a username"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiUser /> Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiMail /> Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiLock /> Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm flex items-center gap-2">
              <FiLock /> Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              className="w-full p-3 rounded-lg bg-[#1A1A1D] border border-gray-700 text-white focus:ring-2 focus:ring-purple-600"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-600/30"
          >
            Create Account
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-400 mt-6 text-sm flex justify-center gap-2">
          Already have an account?
          <Link to="/login" className="text-purple-400 hover:underline flex items-center gap-1">
            Login <FiLogIn />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
