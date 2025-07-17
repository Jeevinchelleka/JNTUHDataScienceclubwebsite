import Image from "next/image";
import Link from "next/link";
import resourcebg from "@/public/DSP5.jpeg";
import Footer from "../_components/Footer";
import ParallaxBackground from "../_components/ParallelxBackground";
// Sample project data
const projects = [
  {
    title: "Customer Engagement",
    tool: "Analysis in Excel",
    imageSrc: "/comingSoon.webp", // Update with your image path
    link: "/projects/customer-engagement",
  },
  {
    title: "Career Track Analysis",
    tool: "SQL & Tableau",
    imageSrc: "/comingSoon.webp", // Update with your image path
    link: "/projects/career-track-analysis",
  },
];

export default function ProjectsPage() {
  return (
    <>
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
      </div>
      <div class="container-curve">
        <div class="background-curve effect_curve"></div>
      </div>
      <div className="py-10 px-5 bg-gray-900 py-16 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Background Image */}
              <div className="relative h-64">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="opacity-80 "
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-lg">{project.tool}</p>
              </div>

              {/* Link */}
              <Link className="absolute inset-0" href={project.link}></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
