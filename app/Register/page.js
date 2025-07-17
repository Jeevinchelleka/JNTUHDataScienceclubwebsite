"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [gradient, setGradient] = useState(
    "bg-gradient-to-r from-gray-900 to-gray-700"
  );

  useEffect(() => {
    const gradients = [
      "bg-gradient-to-r from-gray-900 to-gray-700",
      "bg-gradient-to-r from-blue-900 to-indigo-800",
      "bg-gradient-to-r from-purple-900 to-black",
      "bg-gradient-to-r from-red-900 to-gray-800",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % gradients.length;
      setGradient(gradients[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-screen px-4 sm:px-6 text-center transition-all duration-1000 ${gradient}`}
    >
      <h1 className="text-6xl sm:text-7xl font-bold text-white drop-shadow-lg">404</h1>
      <p className="text-xl sm:text-2xl text-gray-300 mt-4">Oops! Page Not Found</p>
      <p className="text-base sm:text-lg text-gray-400 mt-2 max-w-xs sm:max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <button className="mt-6 px-5 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-200 transition-all">
          Go Home
        </button>
      </Link>
    </div>
  );
}
