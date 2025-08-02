import React from "react";

const Collaborate = () => {
  return (
    <div className="roboto-serif-font md:px-8 px-4 mx-auto py-4 my-12 md:my-16">
      <div className="bg-[#000000d6] md:p-20 pr-10 pl-5 py-10 md:flex justify-between rounded-md text-left md:items-center">
        <div className="md:w-3/4 w-5/6">
        <h1 className="text-3xl md:text-5xl font-semibold text-white z-10">
        Let's collaborate on your upcoming car rental venture
      </h1>
      <p className="text-white mt-4">Discover a smarter way to manage your tasks and stay organized. Download our app today and unlock the full potential of convenience at your fingertips.</p>
      </div>
      <div>
        <button className="mt-4 px-[26px] py-[6px] text-white text-lg md:text-[25px] bg-[#ffd900] hover:bg-[#ffd900a4] rounded-md cursor-pointer">Contact</button>
      </div>
      </div>
    </div>
  );
};

export default Collaborate;
