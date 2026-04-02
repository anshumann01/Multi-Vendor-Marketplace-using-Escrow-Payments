import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ Check login before going to products
  const handleProductsClick = () => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/products"); // ✅ logged in
    } else {
      navigate("/login"); // ❌ not logged in
    }
  };

  return (
    <div className="fixed bg-[#19202e] w-full h-18 flex justify-between items-center px-8 border-b border-gray-500">
      
      {/* Logo */}
      <div className="text-white">
        <h1 className="font-bold text-xl">TrustCart</h1>
      </div>

      {/* Links */}
      <div className="flex gap-8 text-gray-500 cursor-pointer">
        <p className="hover:text-white">How it Works</p>

        {/* ✅ Updated Products */}
        <p onClick={handleProductsClick} className="hover:text-white">
          Products
        </p>

        <p className="hover:text-white">Trust & Safety</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="text-gray-500 hover:bg-yellow-400 px-3 hover:text-white py-2 rounded-lg cursor-pointer"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="bg-[#29A37A] text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#33C090] transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;