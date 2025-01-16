import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    id: 1,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Piyush0924",
    style: "rounded-br-md",
  },
  {
    id: 2,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: " https://www.linkedin.com/in/piyush-pakmode-12b252ab/",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: " mailto:pakmodepiyush0924@gmail.com ",
  }
];

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col items-start fixed to right-8 bottom-16">
      <div className="mb-4 ml-4"> {/* Adjusted margin */}
       
      </div>
      <ul className="space-y-4">
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`w-35 h-14 px-4 bg-gray-800 hover:bg-gray-700 rounded-md ${style}`}
          >
            <a
              href={href}
              className="flex items-center justify-between w-full h-full text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
