"use client";

import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdPower } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function handleNavigation(page) {
    router.push(`/${page}`);
  }

  return (
    <div
      className={`h-screen w-20 md:w-64 bg-mainColor transition-width duration-300 text-white ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h2
          className={`text-xl font-bold  md:block ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Welcome #NAME
        </h2>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          <li
            onClick={() => handleNavigation("profile")}
            className="flex items-center p-4 hover:bg-gray-600 cursor-pointer"
          >
            <CgProfile size={24} />
            <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
              Profile
            </span>
          </li>
          <li
            onClick={() => handleNavigation("favorites")}
            className="flex items-center p-4 hover:bg-gray-600 cursor-pointer"
          >
            <GrFavorite size={24} />
            <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
              Favorites
            </span>
          </li>
          <li
            onClick={() => handleNavigation("history")}
            className="flex items-center p-4 hover:bg-gray-600 cursor-pointer"
          >
            <AiOutlineHistory size={24} />
            <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
              History
            </span>
          </li>
          <li
            onClick={() => handleNavigation("login")}
            className="flex items-center p-4 hover:bg-gray-600 cursor-pointer"
          >
            <IoMdPower size={24} />
            <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
              Log Out
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
