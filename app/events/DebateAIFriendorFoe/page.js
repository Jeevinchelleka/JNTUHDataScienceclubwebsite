import fs from "fs";
import path from "path";
import DynamicMediaCard from "@/app/_components/DynamicImageCard";

// This is a Server Component
export default function ABCOfML() {
  // Path to the folder containing images and videos
  const mediaDirectory = path.join(process.cwd(), "public/debate");

  let mediaData = [];

  try {
    // Read all files from the folder
    const fileNames = fs.readdirSync(mediaDirectory);

    // Filter for image and video files
    const mediaFiles = fileNames.filter((file) =>
      /\.(jpg|jpeg|png|gif|mp4|avi|mov)$/i.test(file)
    );

    // Create an array of media paths
    mediaData = mediaFiles.map((file) => ({
      src: `/debate/${file}`,  // Adjust the path for the public folder structure
      alt: file.replace(/\.[^/.]+$/, "").replace(/_/g, " "), // Improve alt text readability
      type: /\.(mp4|avi|mov)$/i.test(file) ? "video" : "image", // Determine if it's a video or image
    }));
  } catch (error) {
    console.error("Error reading the media directory:", error);
  }

  return (
    <>
      {/* Background with a linear gradient */}
      <div className="min-h-screen p-10 bg-gradient-to-tr from-violet-300 via-slate-50 to-blue-300">
        {/* Spacer */}
        <div className="my-32"></div>

        <h1 className="font-open-sans text-5xl font-bold py-8 text-center underline decoration-slice underline-offset-4 hover:underline-offset-8">
          Debate AI Friend or Foe
        </h1>

        {/* Dynamic Media Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaData.length > 0 ? (
            mediaData.map((media, index) => (
              <DynamicMediaCard key={index} src={media.src} alt={media.alt} type={media.type} />
            ))
          ) : (
            <p className="col-span-3 text-center text-lg">No media found.</p>
          )}
        </div>
      </div>
    </>
  );
}
