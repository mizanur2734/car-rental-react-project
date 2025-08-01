import React from "react";
// import car from "../assets/car.jpg"
import car from "../assets/banner-car-OqntjgSL.png"
const Banner = () => {
  return (
    <div className="roboto-serif-font md:px-8 px-4 mx-auto py-4">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-10">
        <div className="md:mt-20">
        <h3 className="text-2xl md:text-3xl font-medium text-[#FFA500]">Effortless</h3>
        <h1 className="text-4xl md:text-7xl font-semibold my-3 md:my-5">
         Car Rental
        </h1>
        <p className="text-base md:text-xl font-medium"> Drive your dream with confidence. We offer clean, reliable cars for
          every occasion.</p>
        <button className="mt-4 px-[26px] py-[10px] bg-[#ffa600c6] hover:bg-[#ffa6009d] rounded-md cursor-pointer">Get Started</button>
      </div>
      <div className="w-full h-auto md:w-3/4">
        <img src={car} alt="" className="w-full h-auto" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
