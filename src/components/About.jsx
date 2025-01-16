import React from "react";

const About = () => {
  return (
    <>
      <div
        name="About"
        className="w-full h-screen bg-gradient-to-b from-black via-black bg-[#7c9da6] text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full gap-0">
          <div className="pb-8">
            <p className="text-4xl  font-bold inline border-b-4 border-gray-500 mx-auto">
              About
            </p>
          </div>
          <p className="text-xl mt-10 justify-center sm:text-center   ">
          I graduated with first-class distinction in Electronics and Communication Engineering from Savitribai Phule Pune University, Sinhgad College in 2018. After four years of preparing for the Civil Services Examination, I transitioned to the IT sector for financial stability. Leveraging my engineering background, I embraced a career in full Stack Web Wevelopment, combining my technical skills with new technologies to create dynamic web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;