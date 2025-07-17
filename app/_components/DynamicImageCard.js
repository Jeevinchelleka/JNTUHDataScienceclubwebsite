"use client";
import { useState } from "react";
import Image from "next/image";

export default function DynamicMediaCard({ src, alt, type }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const isVideo = type === "video"; // Check if the media is a video

  return (
    <>
      <div
        className="relative bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        onClick={toggleModal}
      >
        <div className="w-full h-64 relative">
          {isVideo ? (
            <video
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-lg" // Video behaves normally with cover
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover" // Image behaves normally with cover
              className="rounded-lg"
              loading="lazy"
              placeholder="blur"
              blurDataURL={src}
              priority={false}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-500 ease-in-out"
          onClick={toggleModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-4xl p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-auto overflow-hidden">
              {isVideo ? (
                <video
                  src={src}
                  alt={alt}
                  className="rounded-lg w-full max-h-[900px] object-contain" // Limit height for modal view
                  controls
                  autoPlay
                />
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  
                  layout="intrinsic"  // Using intrinsic layout for the image to maintain its aspect ratio
                  width={2000}
                  height={1200}
                  objectFit="contain"  // Ensures the image is fully visible and maintains its aspect ratio
                  className="rounded-lg transform scale-105 transition-all duration-300 ease-in-out w-full max-h-[900px] object-contain"
                  priority={true}
                  placeholder="blur"
                  blurDataURL={src}
                />
              )}
            </div>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl p-2 bg-black rounded-full opacity-70 hover:opacity-100 transition"
              onClick={toggleModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
