// src/components/GoldenWaveSection.jsx

import React from "react";

const GoldenWaveSection = () => {
  return (
    <div className="roboto-serif-font md:px-8 px-4 mx-auto py-4 my-12 md:my-16">
        <section className="relative w-full h-120 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 overflow-hidden flex flex-col items-center justify-center text-center rounded-md">
      {/* Animated Waves */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Content */}
      <h1 className="text-4xl md:text-6xl font-semibold text-black z-10">
        Get Started with our App
      </h1>
      <p className="text-lg text-black mt-4 z-10">
        Download now and experience seamless service!
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 z-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12 cursor-pointer"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-12 cursor-pointer"
        />
      </div>
    </section>
    </div>
  );
};

export default GoldenWaveSection;
