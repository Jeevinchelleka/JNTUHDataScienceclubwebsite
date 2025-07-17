import Image from "next/image";
import resourcebg from "@/public/bg2.jpeg"; // Background image
import ParallaxBackground from "../_components/ParallelxBackground";
import Link from "next/link";
const resourcesData = [
  {
    title: "Learning Platforms",
    items: [
      {
        name: "Coursera",
        link: "https://www.coursera.org",
        description: "Data Science courses on Coursera",
      },
      {
        name: "edX",
        link: "https://www.edx.org",
        description: "Learn from top universities on edX",
      },
      {
        name: "DataCamp",
        link: "https://www.datacamp.com",
        description: "Interactive learning for data science",
      },
    ],
  },
  {
    title: "Datasets",
    items: [
      {
        name: "Kaggle Datasets",
        link: "https://www.kaggle.com/datasets",
        description: "Find popular datasets on Kaggle",
      },
      {
        name: "UCI ML Repository",
        link: "https://archive.ics.uci.edu/ml/index.php",
        description: "A collection of machine learning datasets",
      },
      {
        name: "Google Dataset Search",
        link: "https://datasetsearch.research.google.com",
        description: "Search engine for datasets",
      },
    ],
  },
  {
    title: "Tools & Software",
    items: [
      {
        name: "Jupyter Notebooks",
        link: "https://jupyter.org",
        description: "Interactive computing environment",
      },
      {
        name: "VSCode",
        link: "https://code.visualstudio.com",
        description: "Free IDE with Python support",
      },
      {
        name: "Anaconda",
        link: "https://www.anaconda.com",
        description: "Data science platform and package manager",
      },
    ],
  },
  {
    title: "Competitions & Hackathons",
    items: [
      {
        name: "Kaggle Competitions",
        link: "https://www.kaggle.com/competitions",
        description: "Join real-world data science competitions",
      },
      {
        name: "Major League Hacking",
        link: "https://mlh.io",
        description: "Global hackathons for students",
      },
      {
        name: "Devpost",
        link: "https://devpost.com",
        description: "Hackathons and projects",
      },
    ],
  },
  {
    title: "Career Resources",
    items: [
      {
        name: "LinkedIn Jobs",
        link: "https://www.linkedin.com/jobs",
        description: "Find data science jobs",
      },
      {
        name: "LeetCode",
        link: "https://leetcode.com",
        description: "Practice data structures and algorithms",
      },
      {
        name: "InterviewBit",
        link: "https://www.interviewbit.com",
        description: "Interview practice for data science roles",
      },
    ],
  },
  {
    title: "PDF's of Our Events",
    items: [
      {
        name: "MEET & GREET - DSSC",
        link: "/MEETGREET-DSSC.pdf",
        description: "Introuduction to data science",
      },
      {
        name: "ABC's of machine learning",
        link: "/ABCsofML-DSSC.pdf",
        description: "Instrouduction to Machine learning",
      },
    ],
  },
];

export default function Resources() {
  return (
    <>
      {/* Parallax Background Section */}
      <ParallaxBackground />

      <div className="parallax-container">
        <div className="parallax-background">
          <Image
            src={resourcebg}
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
          <div className="relative z-10 text-white p-4  bg-opacity-50 rounded-md">
            <h1 className="text-4xl font-bold mb-5">
              Resources for Data Science Students
            </h1>
            <p className="text-lg">
              Your guide to learning platforms, datasets, tools, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="min-h-screen bg-gray-100 py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resourcesData.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-200 hover:scale-105"
            >
              <h2 className="text-xl font-semibold  mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="text-blue-500 font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
