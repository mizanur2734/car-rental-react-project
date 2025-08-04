import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <div className="roboto-serif-font md:pl-10 px-4 mx-auto py-4 my-12 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {/* step-1 */}
        <div className="">
          <h3 className="md:text-3xl text-2xl font-bold">Car Rental</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, voluptate.
          </p>
          <h4 className="text-lg">Noida, Uttar Pradesh</h4>
          <h5 className="text-lg">+91 123456789</h5>
          <div className="flex">
            <FaInstagram />
            <IoLogoFacebook />
            <FaLinkedin />
          </div>
        </div>
        {/* step-2 */}
        <div className="md:pl-20">
          <h3>Important Links</h3>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        {/* step-3 */}
        <div className="md:pl-20">
          <h3>Important Links</h3>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        {/* step-4 */}
        <div className="md:pl-20">
          <h3>Important Links</h3>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
