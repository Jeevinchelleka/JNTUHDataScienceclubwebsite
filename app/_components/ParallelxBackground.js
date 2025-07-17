"use client";
import { useEffect } from "react";

function ParallaxBackground() {
  useEffect(() => {
    const handleResize = () => {
      const parallax = document.querySelector(".parallax-background");

      if (parallax) {
        const isMobile = window.innerWidth <= 768; // Dynamically adjust for mobile
        parallax.style.backgroundSize = isMobile ? "contain" : "cover";
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const parallax = document.querySelector(".parallax-background");

      if (parallax) {
        const isMobile = window.innerWidth <= 768;
        const multiplier = isMobile ? 0.3 : 0.5; // Adjust scroll speed for mobile

        parallax.style.transform = `translateY(${
          scrollPosition * multiplier
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial call to handle image size
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}

export default ParallaxBackground;
