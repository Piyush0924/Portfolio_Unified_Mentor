import React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { TypeWriter } from "./TypeWriter";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom"; // For internal navigation

const Home = () => {
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1JcwNzqYTiMr5diWXGK22q7dpEGqmBm2X/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-[#7c9da6] text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <img
            src="/photo.jpg"
            alt="Profile"
            className="w-40 h-40 border-2 border-white"
          />
          <h2 className="text-4xl sm:text-7xl font-semibold text-white my-4">
            I'm a Full Stack Web Developer (MERN)
          </h2>
          <p className="text-3xl font-medium text-white my-4">
            <TypeWriter text="Your meeting with Piyush's Portfolio" delay={90} />
          </p>
          <div className="flex flex-col items-center">
            {/* Resume download button */}
            <button
              onClick={handleResumeDownload}
              className="group text-white w-fit my-2 px-4 py-3 mx-auto flex items-center rounded-md bg-gradient-to-r from-gray-900 to-black hover:scale-125 duration-200"
            >
              Resume
              <span className="ml-2">
                <MdDownloadForOffline size={20} />
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-6">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 duration-200"
                >
                
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-gray-300 duration-200"
                >
                  
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300 duration-200"
                >
                  
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
