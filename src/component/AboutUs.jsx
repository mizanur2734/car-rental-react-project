import React from "react";
import car1 from "../assets/car1-hZQ2D7_f.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="pt-24 mt-6 md:mt-2 py-10 md:py-20 bg-[#b0c4de2d] md:px-8 px-4 roboto-serif-font"
    >
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center mx-auto">
          <img
            src={car1}
            alt="Car"
            className="w-full max-w-sm md:max-w-md mx-auto"
          />
        </div>
        <div className="w-full md:w-2/5 md:mx-10">
          <h2 className="text-3xl md:text-[40px] font-semibold">About us</h2>
          <p className="mt-3 text-base md:text-xl">
            We are dedicated to making your journey smooth and stress-free. Our
            rental service offers safe, affordable, and well-maintained
            vehicles.
          </p>
          <p className="mt-3 text-base md:text-xl">
            Driven by customer satisfaction and reliability. We ensure every
            ride is comfortable, convenient, and on time.
          </p>
          <button className="px-[26px] py-[10px] border-2 border-[#ffa600c6] cursor-pointer mt-6 rounded-md hover:bg-[#ffa60091]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
