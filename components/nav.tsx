import Link from "next/link";
import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" bg-[#FBEBB5] px-4 py-4 shadow-md w-full ">
      <div className=" max-w-6xl mx-auto  flex justify-between items-center">
        {/* Left Section - Logo */}
        <div></div>

        {/* Center Section - Links */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Section - Icons */}
        <div className="flex space-x-6 text-black">
          <FaUser className="text-lg cursor-pointer hover:text-gray-600" />
          <FaSearch className="text-lg cursor-pointer hover:text-gray-600" />
          <FaHeart className="text-lg cursor-pointer hover:text-gray-600" />
          <Link href="/cart">
            <FaShoppingCart className="text-lg cursor-pointer hover:text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Only Visible on Small Screens */}
      <div className="block md:hidden mt-4">
        <ul className="flex flex-col items-center space-y-4 text-black font-medium">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">Shop</li>
          <li className="hover:text-gray-600 cursor-pointer">About</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
