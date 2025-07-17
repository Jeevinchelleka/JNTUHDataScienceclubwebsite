"use client";
import Image from "next/image";
import aboutbg from "@/public/nnbg.jpg";
import jntuhlogo from "@/public/JNTU_Hyderabad_logo_removed_bg.png";
import dsclublogo from "@/public/logo1.png";
import Footer from "../_components/Footer";
import ParallaxBackground from "../_components/ParallelxBackground";
import { useState } from "react"; // Import useState for state management

export default function About() {
  const testimonials = [
    {
      text: "Being part of the Data Science Club has transformed my understanding of data and its applications. The workshops and networking events have been invaluable!",
      author: "Arun yalam",
      position: "Data Science Student",
    },
    {
      text: "The speakers we have hosted are top-notch! I’ve gained insights that are directly applicable to my career.",
      author: "Aditi",
      position: "Club Member",
    },
    {
      text: "This club is a great platform to learn and grow alongside peers who are just as passionate about data science!",
      author: "Bhoomi",
      position: "student",
    },
    {
      text: "The hands-on projects have helped me build practical skills that I can apply in my future career.",
      author: "Akhil.U",
      position: "Data Science Enthusiast",
    },
  ];

  // State to track the current testimonial index
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <ParallaxBackground />
      <div className="parallax-container">
        <div className="parallax-background">
          <Image
            src={aboutbg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            quality={100}
            alt="about"
          />
        </div>
      </div>

      <div className="grid grid-rows-2">
        <Image
          src={jntuhlogo}
          alt="JNTU Hyderabad Logo"
          className="my-11 justify-self-center h-80 w-80"
        />
        <div className="flex flex-col md:flex-row items-center justify-center py-8">
          <Image
            src={dsclublogo}
            alt="Data Science Club Logo"
            className="mb-4 md:mb-0 h-96 w-96"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900">
              DATA SCIENCE CLUB
            </h1>
            <p className="text-md md:text-lg text-gray-700 italic mt-2">
              Where Information Ignites Innovation
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-blue-900 mb-6">
            Welcome to the Data Science Club!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            At our club, we ignite the curiosity and passion for data science
            through exciting seminars and interactive sessions. We are proud to
            have hosted industry leaders, such as the Head of{" "}
            <span className="text-blue-600 font-semibold">IBM</span>, who shared
            invaluable insights on the future of data and its impact on the
            world.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our mission is to create a vibrant community where learning meets
            innovation, fostering the next generation of data science
            enthusiasts. Whether you&apos;re a beginner or an advanced learner,
            our events offer something for everyone, providing opportunities to
            network, gain new perspectives, and build essential skills.
          </p>
        </div>
      </div>

      <div className="relative py-16 px-6 mt-7 bg-gradient-to-br from-gray-50 to-indigo-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold font-mono text-indigo-900 mb-8">
            The Visionary Analysts
          </h1>
          <div className="text-lg md:text-xl text-gray-800 leading-relaxed font-sans space-y-6">
            <p>
              <span className="font-semibold text-indigo-700">
                Inspiration:
              </span>{" "}
              It all started when a few curious students stumbled upon the
              immense potential hidden within data. Inspired by how data science
              was reshaping the world, from healthcare innovations to business
              transformations, they knew they had to be part of this revolution.
            </p>
            <p>
              <span className="font-semibold text-indigo-700">Formation:</span>{" "}
              Fueled by a collective passion for numbers, algorithms, and
              technology, they formed the{" "}
              <span className="italic">Data Science Club</span>—a hub
              for students to collaborate, experiment, and learn. sparking new
              ideas and igniting a love for data science across the campus. They
              united to create a platform where students could learn from
              experts, network with professionals, and develop the skills needed
              to become leaders in the field.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Testimonials
          </h2>

          {/* Testimonial Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform duration-300">
            <p className="text-lg text-gray-700 mb-4">
              &quot;{testimonials[currentTestimonialIndex].text}&quot;
            </p>
            <p className="font-semibold text-gray-800">
              - {testimonials[currentTestimonialIndex].author},{" "}
              {testimonials[currentTestimonialIndex].position}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={prevTestimonial}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={nextTestimonial}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
