"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaLaptopCode, FaChalkboardTeacher, FaTrophy, FaLightbulb } from "react-icons/fa";

export default function ClubInfo() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-indigo-100 to-purple-200 py-12 md:py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title Section */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
          Data Science Club
        </h1>

        {/* Intro Section */}
        <p className="text-base md:text-lg font-semibold text-gray-700 leading-relaxed mb-8 text-center mx-auto max-w-2xl">
          The Data Science Club provides a platform for students to enhance skills, collaborate, and stay updated in the evolving field of data science. Through events and activities, members grow intellectually and professionally.
        </p>

        {/* Why Join Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 transition hover:shadow-xl mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Join the Club?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Being part of the Data Science Club will help you:
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 font-medium space-y-2">
            <li>Master key data science tools and techniques</li>
            <li>Collaborate with like-minded peers</li>
            <li>Gain hands-on experience through real-world projects</li>
            <li>Network with industry professionals</li>
            <li>Enhance your resume with hackathons and competitions</li>
          </ul>
        </div>

        {/* Planned Events */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 transition hover:shadow-xl mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Planned Events Include:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event 1 */}
            <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg shadow-md">
              <FaLaptopCode className="text-4xl text-indigo-500" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Workshops and Seminars
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Learn cutting-edge techniques from data science experts.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md">
              <FaTrophy className="text-4xl text-yellow-500" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Hackathons and Competitions
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Test your skills in exciting and challenging competitions.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg shadow-md">
              <FaChalkboardTeacher className="text-4xl text-green-500" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Guest Lectures
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Interact with industry leaders and gain valuable insights.
                </p>
              </div>
            </div>

            {/* Event 4 */}
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-purple-500" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Project Showcases
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Present your data science projects and learn from others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 transition hover:shadow-xl mb-12">
          <p className="italic text-gray-600 mb-4 text-sm md:text-base">
            &quot;Joining the club wil be a transformative experience! You&apos;ll learn a lot and meet incredible people!&quot;
          </p>
          <p className="italic text-gray-600 text-sm md:text-base">
            &quot;Through hackathons, you will gain exposure to real-world data science challenges and innovative solutions!&quot;
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Link
            href="https://chat.whatsapp.com/JPlO3NzxSBf9LkG9uYspoA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 text-base md:text-lg">
              <FaWhatsapp className="mr-2 text-xl" aria-label="WhatsApp icon" /> Join the Club
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
