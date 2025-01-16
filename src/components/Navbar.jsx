import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
    
  ];

  return (
    <>
      <div className="flex items-center justify-evenly py-6 px-8 mb-16 bg-[#000] transition-shadow duration-300 shadow-md hover:shadow-lg fixed w-full h-20 text-white z-50">
        <div className="logo-container flex items-center flex-wrap">
          <ScrollLink to="Home" smooth duration={200}>
            <span className="text-4xl font-bold font-signature  cursor-pointer">
              Piyush
            </span>
          </ScrollLink>
        </div>
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li key={id} className="list-none">
              <ScrollLink
                to={link}
                smooth
                duration={200}
                className="text-xl font-bold text-[#fff] hover:text-[#7c9da6] transition duration-200 cursor-pointer"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-[#46A665] md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-start w-full h-screen fixed top-0 left-0 bg-[#362733] text-[#46A665] md:hidden">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="w-full px-8 py-6 text-4xl"
              >
                <ScrollLink
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={200}
                  className="block w-full text-left text-xl font-bold hover:text-[#0A2022] transition duration-200"
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;