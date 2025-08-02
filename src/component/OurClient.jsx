import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import mobileImg1 from "../assets/img1.jpg"
import mobileImg2 from "../assets/img2.jpg"
import mobileImg3 from "../assets/img3.jpg"

const OurClient = () => {
  return (
    <div className="roboto-serif-font md:px-8 px-4 mx-auto py-4">
      <h2 className="text-3xl md:text-4xl text-center font-semibold">
        Why Choose Us
      </h2>
      <p className="text-center mt-2">“I had a great experience with this car rental service. Highly recommended!”</p>
      {/*  */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* step-1 */}
        <div className="shadow bg-[#b0c4de2d] p-10 text-center rounded-md">
             <img src={mobileImg1} className="rounded-full w-20 h-20 bg-cover mx-auto" alt="" />
          <div className="flex gap-2 my-5 justify-center text-[#FFD700] md:text-2xl">
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStarHalfAlt />
             <FaStarHalfAlt />
          </div>
          <p className="my-3">The service was outstanding! Booking was easy, the support team was responsive, and the overall experience.</p>
          <h5 className="text-lg md:text-xl font-semibold">Sarah Ahmed, Dhaka</h5>
        </div>
        {/* step-2 */}
        <div className="shadow bg-[#b0c4de2d] p-10 text-center rounded-md">
             <img src={mobileImg2} className="rounded-full w-20 h-20 bg-cover mx-auto" alt="" />
          <div className="flex gap-2 my-5 justify-center text-[#FFD700] md:text-2xl">
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStarHalfAlt />
             <FaStarHalfAlt />
          </div>
          <p className="my-3">TI’ve worked with many companies before, but their attention to detail and customer care really set them apart.</p>
          <h5 className="text-lg md:text-xl font-semibold">Jahidul Islam, Chittagong</h5>
        </div>
        {/* step-3 */}
        <div className="shadow bg-[#b0c4de2d] p-10 text-center rounded-md">
             <img src={mobileImg3} className="rounded-full w-20 h-20 bg-cover mx-auto" alt="" />
          <div className="flex gap-2 my-5 justify-center text-[#FFD700] md:text-2xl">
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStarHalfAlt />
             <FaStarHalfAlt />
          </div>
          <p className="my-3">Professional, punctual, and reliable. The whole process was smooth and hassle-free. I will definitely be using their services again!.</p>
          <h5 className="text-lg md:text-xl font-semibold">Tanvir Hossain, Sylhet</h5>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
