import React from "react";
import logoImg1 from "../assets/logo1.png";
import logoImg2 from "../assets/logo2.png";
import logoImg3 from "../assets/logo3.png";
import { FaArrowRight } from "react-icons/fa";
const ChoseUs = () => {
  return (
    <div className="roboto-serif-font md:px-8 px-4 mx-auto py-4 mb-10">
      <h2 className="text-3xl md:text-4xl text-center my-12 font-semibold">
        Why Choose Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center gap-5 basis-1/3">
      {/* card 1 */}
        <div className="bg-[#000000d6] text-[#dcdcdcce] p-10 rounded-md">
          <img src={logoImg1} className="w-28 mx-auto" alt="" />
          <div className="my-6 md:my-6">
            <h3 className="text-2xl md:text-3xl">Flexible rentals</h3>
            <h4 className="text-lg md:text-xl my-2 md:my-3">
              Cancel or change most bookings
            </h4>
            <div className="flex items-center justify-center gap-1.5 md:gap-2">
              <p className="text-sm md:text-lg">Learn More</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-[#000000d6] hover:bg-[#ffd900] hover:text-black text-[#dcdcdcce] p-10 rounded-md">
          <img src={logoImg2} className="w-25 mx-auto" alt="" />
          <div className="my-6 md:my-6">
            <h3 className="text-2xl md:text-3xl">No hidden fees</h3>
            <h4 className="text-lg md:text-lg my-2 md:my-3">Know exactly what you’re paying</h4>
            <div className="flex items-center justify-center gap-1.5 md:gap-2">
              <p className="text-sm md:text-lg">Learn More</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-[#000000d6] text-[#dcdcdcce] p-10 rounded-md">
          <img src={logoImg3} className="w-25 mx-auto" alt="" />
          <div className="my-6 md:my-6">
            <h3 className="text-2xl md:text-3xl">5 million+ reviews</h3>
            <h4 className="text-lg md:text-lg my-2 md:my-3">By real, verified customers</h4>
            <div className="flex items-center justify-center gap-1.5 md:gap-2">
              <p className="text-sm md:text-lg">Learn More</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
