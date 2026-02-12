"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-sm z-50 font-helvetica">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logos/iaverse.png"
            alt="iAverse Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
          <li><a href="/" className="hover:text-purple-600 font-semibold">Home</a></li>
          <li><a href="/about" className="hover:text-purple-600">About Us</a></li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-purple-600">
            <a href="/solutions">Solutions</a>
            <span className="text-sm">▼</span>
          </li>

          <li><a href="/our-works" className="hover:text-purple-600">Our Works</a></li>
          <li><a href="/blogs" className="hover:text-purple-600">Blogs</a></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-[#5A30D7] text-white px-5 py-2 rounded-sm font-medium hover:bg-purple-700 transition">
            Book a Demo
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800 font-medium">
          <a href="/" className="block hover:text-purple-600">Home</a>
          <a href="/about" className="block hover:text-purple-600">About Us</a>

          <div className="flex items-center gap-1 hover:text-purple-600">
            <a href="/solutions">Solutions</a>
            <span className="text-sm">▼</span>
          </div>

          <a href="/our-works" className="block hover:text-purple-600">Our Works</a>
          <a href="/blogs" className="block hover:text-purple-600">Blogs</a>

          <button className="w-full bg-[#5A30D7] text-white py-2 rounded-lg mt-2 hover:bg-purple-700 transition">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
}

