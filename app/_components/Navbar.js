"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import JNTUH_logo from "@/public/JNTU_Hyderabad_logo_removed_bg.png";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bgColor, setBgColor] = useState("bg-transparent"); // Initial background color
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show/hide navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
      if (currentScrollY > 50) {
        setBgColor("bg-black/50 backdrop-blur-xl"); // Semi-transparent background
      } else {
        setBgColor("bg-transparent"); // Fully transparent
      }
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`fixed w-full z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`flex justify-between items-center transition-all duration-300 ease-in-out ${bgColor} rounded-full py-2 px-6 md:px-10 mt-4 mx-4`}
      >
        {/* Wrapper for logos to display side by side */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="logo">
            <Image
              src={JNTUH_logo}
              height="80"
              quality={100}
              width="80"
              alt="JNTUH logo"
              className="transition-all duration-300 ease-in-out"
            />
          </Link>

          <Link href="/" className="logo">
            <Image
              src="/logo1.png"
              height="100"
              quality={100}
              width="100"
              alt="Data Science club logo"
              className="transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex space-x-8">
            <li className="nav-item">
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/events"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/Resources"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/Projects"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/Members"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Members
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden bg-black/30 backdrop-blur-xl rounded-lg p-4`}
        >
          <ul className="flex flex-col space-y-2">
            <li className="nav-item">
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="about"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="events"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="Resources"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="Projects"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="Members"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Members
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
