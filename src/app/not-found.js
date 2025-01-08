"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "react-feather";
import { CircleSvg } from "@/UI/customSVG/circle";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));

    const starsContainer = document.getElementById("stars-container");
    stars.forEach((star) => {
      const el = document.createElement("div");
      el.className = "absolute rounded-full bg-white";
      el.style.left = `${star.x}%`;
      el.style.top = `${star.y}%`;
      el.style.width = `${star.size}px`;
      el.style.height = `${star.size}px`;
      el.style.animation = `twinkle ${Math.random() * 5 + 5}s linear infinite`;
      starsContainer.appendChild(el);
    });
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-green-900 to-green-900">
      <div id="stars-container" className="absolute inset-0" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-float">
          4<span className="text-yellow-400">0</span>4
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8 animate-pulse">
          Oops! You've ventured into the unknown
        </p>
        <div className="relative mb-8 animate-spin-slow">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-dashed border-white opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <CircleSvg />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/"
            className="group inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
