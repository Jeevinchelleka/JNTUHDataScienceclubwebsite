"use client";
import { useRef } from "react";
import bg from "@/public/HomeBG.jpg"; // Your background image
import Image from "next/image";
import Footer from "./_components/Footer";
import logo from "@/public/logo1.png"; // Import the logo image
import "@/app/_styles/globals.css";
import SlidingComponent from "./_components/Slidingcomponent";
import InformationDataScience from "./_components/InformationDataScience";
import UpcomingEvents from "./_components/UpcomingEvents";
import ClubInfo from "./_components/ClubInfo";
import LayoutComponent from "./_components/LayoutComponent";
import ParallaxBackground from "./_components/ParallelxBackground";

function Home() {
  const upcomingEventsRef = useRef(null);
  const clubInfoRef = useRef(null);

  const scrollToUpcomingEvents = () => {
    upcomingEventsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToClubInfo = () => {
    clubInfoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <ParallaxBackground />
      <div className="parallax-container">
        <div className="parallax-background">
          <Image
            src={bg}
            alt="Data science cover picture"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            quality={100}
          />
        </div>
        <div className="content">
          {/* Flexbox to align the logo and text side by side */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-4">
            <div className="md:mr-4">
              <Image src={logo} alt="logo" width={160} height={160} />{" "}
              {/* Adjust size as needed */}
            </div>
            <h1 className="text-5xl font-bold text-white text-center md:text-left">
              JNTUH Data Science Club 
            </h1>
          </div>
          <p className="text-lg text-white mb-8 text-center">
            Your Time Will be valuable Here!
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
              onClick={scrollToUpcomingEvents}
            >
              Register Now!
            </button>
            <button
              className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
              onClick={scrollToClubInfo}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div ref={clubInfoRef}>
        <ClubInfo />
      </div>
      <SlidingComponent />
      <div ref={upcomingEventsRef}>
        <UpcomingEvents />
      </div>
      <LayoutComponent />
      <InformationDataScience />
      <Footer />
    </>
  );
}

export default Home;
