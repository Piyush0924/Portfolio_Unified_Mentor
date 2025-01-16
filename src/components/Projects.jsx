import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    src: "/cryptofrontdashboard.png",
    l: "https://github.com/Piyush0924/cryptofrontdashboard",
    href: "https://cryptofrontdashboard.vercel.app/",
    details:
      "This is a Crypto currency dashboard project that shows price charts, calculates exchange rates, and displays a list of top cryptocurrencies according to their market cap. It is created with React and Redux JavaScript libraries, styled components, and utilizes CoinGecko's API for information.",
  },
  {
    id: 2,
    src: "/bookmyshow.jpg",
    l: "https://github.com/sumit-nagrikar/cinebuzz",
    href: "https://cinebuzzz.netlify.app/",
    details:
      "Our project, CineBuzz, addresses these issues by providing a modern, user-friendly platform where users can easily browse movies, check showtimes, and book tickets online.",
  },
  {
    id: 3,
    src: "/TheEntertainmentApp.png",
    l: "https://github.com/Piyush0924/The-Entertainment-App",
    href: "https://mirajshow.netlify.app/home",
    details:
      "The Entertainment App is designed for movie and TV lovers to easily find and save their favorite content. It helps users quickly discover new shows and movies, streamlining their search for great entertainment.",
  },
  {
    id: 4,
    src: "/ecommerce.png",
    l: "https://github.com/Piyush0924/E-commerce",
    href: "https://e-commerce-git-main-piyushs-projects-c005e3cc.vercel.app",
    details:
      "The E-commerce Dashboard is a user-friendly platform created to make online shopping easier and more efficient. It provides a central place for customers to browse, search, and purchase products effortlessly.",
  },
];

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  const handleProjectClick = (details) => {
    setProjectDetails(details);
  };

  return (
    <div
      name="Projects"
      className="w-full bg-gradient-to-b from-black via-black to-gray-900 text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Projects
          </p>
          <p className="mt-4 text-gray-400">Here are some of my major projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {projectData.map(({ id, src, href, details, l }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {projectDetails === details ? (
                <div className="p-6">
                  <p className="text-sm">{details}</p>
                  <a href={l} className="text-blue-400 underline block mt-4">
                    Read more...
                  </a>
                  <button
                    onClick={() => setProjectDetails(null)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img src={src} alt="" className="w-full h-48 object-cover" />
                  <div className="p-4 flex justify-between w-full">
                    <a
                      href={href}
                      className="px-6 py-2 bg-gradient-to-r from-gray-500 to-black text-white rounded-md transform hover:scale-125 transition duration-200 hover:bg-gray-900"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleProjectClick(details)}
                      className="px-6 py-2 bg-gradient-to-r from-gray-500 to-black text-white rounded-md transform hover:scale-125 transition duration-200 hover:bg-gray-900"
                    >
                      Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
