import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        StayFinder
      </Link>

      {/* Search */}
      <input
        type="text"
        placeholder="Search properties..."
        className="border rounded-lg px-4 py-2 w-1/3"
      />

      {/* Auth Buttons */}
      <div className="space-x-3">
        <button className="px-4 py-2 border rounded-lg">Sign In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 top-16 flex space-x-4 text-sm">
        {["Rooms", "Mansion", "Countryside", "Villa", "Apartments"].map(
          (type) => (
            <button
              key={type}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              {type}
            </button>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;

