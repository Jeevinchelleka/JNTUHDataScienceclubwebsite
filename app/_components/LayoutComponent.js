"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link for navigation
import DSP1 from "@/public/MeetAndGreet2024/IMG-20240927-WA0021.jpg";
import DSP2 from "@/public/ABCOfML/layout2.jpg";
import DSP3 from "@/public/TechInsight/HomeBG.jpg";
import DSP4 from "@/public/seminarhall.jpg";
import DSP5 from "@/public/TechInsight/IMG-20240203-WA0088.jpg";
import DSP6 from "@/public/award.jpg";

const LayoutComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Your Time Will be valuable Here!
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-lg">
        Discover the incredible WorKshop, Seminars, Hackathons, projects and
        many more our members have created. From machine learning models to data
        visualizations, witness the power of data science in action.
      </p>

      <div className="layout-grid grid grid-cols-4 gap-1 max-w-fit py-11">
        {/* Left large image */}
        <div className="layout-left-large col-span-1 row-span-2 relative h-[300px] mt-44 group overflow-hidden shadow-lg">
          <Link href="events">
            <Image
              src={DSP1}
              alt="Large left image"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </Link>
        </div>

        {/* Top two images */}
        <div className="layout-top-two col-span-2 row-span-1 grid grid-cols-2 gap-1 items-end">
          {/* Make the top-left image bigger */}
          <div className="layout-top-left relative h-80 w-[300px] group overflow-hidden shadow-lg">
            <Link href="events">
              <Image
                src={DSP2}
                alt="Top left image"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </Link>
          </div>

          <div className="layout-top-right relative h-56 group overflow-hidden shadow-lg">
            <Link href="events">
              <Image
                src={DSP3}
                alt="Top right image"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </Link>
          </div>
        </div>

        {/* Right large image */}
        <div className="layout-right-large col-span-1 row-span-2 relative h-[300px] mt-44 items-start group overflow-hidden shadow-lg">
          <Link href="events">
            <Image
              src={DSP6}
              alt="Large right image"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </Link>
        </div>

        {/* Bottom two images */}
        <div className="layout-bottom-two col-span-2 row-span-1 grid grid-cols-2 gap-1">
          <div className="layout-bottom-left relative h-56 group overflow-hidden shadow-lg">
            <Link href="events">
              <Image
                src={DSP4}
                alt="Bottom left image"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </Link>
          </div>
          {/* Make the bottom-right image bigger */}
          <div className="layout-bottom-right relative h-80 group overflow-hidden shadow-lg">
            <Link href="events">
              <Image
                src={DSP5}
                alt="Bottom right image"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
