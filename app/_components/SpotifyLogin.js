"use client";

import React from "react";
import { FaSpotify } from "react-icons/fa";

export default function SpotifyLogin() {
  const handleLogin = () => {
    const url = "https://accounts.spotify.com/en/login";
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2; // Center horizontally
    const top = (window.innerHeight - height) / 2; // Center vertically

    const loginWindow = window.open(
      url,
      "SpotifyLogin",
      `width=${width},height=${height},top=${top},left=${left},resizable=no`
    );
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center rounded-md py-2 px-3 gap-2 border-2 border-black bg-mainColor"
    >
      <span className="font-semibold">Log in with</span>
      <FaSpotify />
    </button>
  );
}
