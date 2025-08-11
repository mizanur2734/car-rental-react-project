import React from "react";
import { FaAngleRight, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
// Reusable Link Section Component
const LinkSection = ({ title = "Important Links", links = [] }) => (
  <div className="md:pl-10 md:text-lg space-y-2 md:space-y-3">
    <h3 className="text-[20px] md:text-[24px] font-bold mt-5 md:mt-0">{title}</h3>
    {links.map((link, idx) => (
      <div key={idx} className="flex items-center gap-2 cursor-pointer hover:text-[#FF6347]">
        <FaAngleRight />
        <p>{link}</p>
      </div>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="roboto-serif-font md:pl-10 px-4 mx-auto py-20 mt-8 md:mt-20  bg-[#b0c4de2d] rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto md:gap-6">
        {/* Company Info */}
        <div className="space-y-3 mb-5 md:mb-0">
          <h3 className="md:text-3xl text-2xl font-bold">Car Rental</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.
          </p>
          <h4 className="text-lg">Noida, Uttar Pradesh</h4>
          <h5 className="text-lg">+91 123456789</h5>
          <div className="flex gap-4 text-2xl md:text-4xl  mt-2">
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/" target="_blank"><IoLogoFacebook /></a>
            <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a>
          </div>
        </div>

        {/* Link Sections */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          <LinkSection
            links={["Home", "About", "Contact name", "Blog"]}
          />
          <LinkSection
            links={["Home", "About", "Contact", "Blog visit"]}
          />
          <LinkSection
            links={["Home game", "About last", "Contact asd", "Blog"]}
          />

        </div>
      </div>
    </div>
  );
};

export default Footer;