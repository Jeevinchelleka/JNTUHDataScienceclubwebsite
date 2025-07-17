"use client";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function SlidingComponent() {
  const slides = [
    { url: "/DSP1.JPG" },
    { url: "/guide.jpg" },
    { url: "/seminarhall.jpg" },
    { url: "/SC2.jpg" },
    { url: "/SC3.JPG" },
    { url: "/CampusChatBot/memberspic.jpg" },
    { url: "/CampusChatBot/JHubHall.jpg" },
    { url: "/CampusChatBot/vyb.jpg" },
    { url: "/CampusChatBot/groupPic.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  // Handle dot navigation
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="grid grid-cols-3 space-x-0 justify-center space-y-0 w-full bg-gradient-to-r from-neutral-50 via-orange-100 to-red-50">
        <div className="max-w-[1400px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[780px] w-full m-auto py-8 sm:py-10 md:py-12 px-4 relative group col-span-4">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-cover bg-center shadow-xl transition-all transform duration-700 ease-in-out"
          ></div>

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

          {/* Dots for manual slide navigation */}
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`${
                  currentIndex === slideIndex
                    ? "text-indigo-600 scale-110"
                    : "text-gray-400"
                } text-xl sm:text-2xl md:text-3xl cursor-pointer transition-transform duration-300 ease-out`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SlidingComponent;
