import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const upcomingEvents = [
  {
    title: "QuizHeist 2025",
    time: "04:00 PM - 06:00 AM",
    location: "CSE department, Seminar Hall",
    imageSrc: "/QUIZ.jpg", // Replace with the actual image path
    link: "../Register",
    description:
      "Register now for an immersive day of learning with Fun, and win minimum of 1000rs and wining cash will be more based on registrations.",
  },
];

export default function UpcomingEvents() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const eventStartIST = new Date("February 17, 2025 19:00:00 GMT+05:30");
    const eventEndIST = new Date("February 17, 2025 18:00:00 GMT+05:30");

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const eventStartTime = eventStartIST.getTime();
      const eventEndTime = eventEndIST.getTime();

      if (now >= eventEndTime) {
        setTimeLeft("Event has passed.");
        clearInterval(countdown);
      } else if (now >= eventStartTime && now < eventEndTime) {
        setTimeLeft("Event has started.");
      } else {
        const distance = eventStartTime - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-6 px-2 md:py-10 md:px-4">
      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
        Upcoming Event
      </h1>

      <div className="w-full max-w-6xl relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out transform hover:scale-105"
            style={{
              backgroundImage: `url(${upcomingEvents[0].imageSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            aria-label="Event background image"
          ></div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 md:p-6">
          <h3 className="text-xl md:text-3xl font-extrabold text-white mb-2 md:mb-4 tracking-wide">
            {upcomingEvents[0].title}
          </h3>

          <p className="text-white text-sm md:text-base mb-2 leading-relaxed">
            {upcomingEvents[0].description}
          </p>

          <p className="text-white text-sm mb-1 flex items-center">
            <FaCalendarAlt
              className="mr-2 md:mr-3 text-lg md:text-xl"
              aria-label="Calendar icon"
            />
            <span className="font-semibold">Date: </span> February 17, 2025
          </p>
          <p className="text-white text-sm mb-1 flex items-center">
            <FaClock
              className="mr-2 md:mr-3 text-lg md:text-xl"
              aria-label="Clock icon"
            />
            <span className="font-semibold">Time: </span>{" "}
            {upcomingEvents[0].time}
          </p>
          <p className="text-white text-sm mb-2 flex items-center">
            <FaMapMarkerAlt
              className="mr-2 md:mr-3 text-lg md:text-xl"
              aria-label="Location icon"
            />
            <span className="font-semibold">Location: </span>{" "}
            {upcomingEvents[0].location}
          </p>

          <div className="text-white text-sm mb-4">
            <span className="font-bold">Time Left: </span>
            {timeLeft}
          </div>

          {timeLeft === "Event has passed." ? (
            <button
              className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white text-sm md:text-lg font-semibold rounded-lg cursor-not-allowed"
              disabled
            >
              Registration Closed
            </button>
          ) : (
            <Link
              href={upcomingEvents[0].link}
              className="inline-block  px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white text-sm md:text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Register Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}