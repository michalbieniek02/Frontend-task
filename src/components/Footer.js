import React from "react";
import logo from "../assets/companyLogo.png";
import fb from "../assets/fbLogo.png";
import x from "../assets/xLogo.png";
import ig from "../assets/igLogo.png";
import lnkd from "../assets/linkdInLogo.png";
const Footer = () => {
  return (
    <div className="pt-6 mt-16  mx-auto bg-navdark-200 hidden items-center gap-20 justify-between lg:flex">
      <div className="ml-40 mt-20">
        <img className="h-7" src={logo}></img>
        <p className="text-white mt-6">
          We are always open to discuss your project and improve your online
          presence
        </p>
        <div className="flex bg-light-100 text-black mt-24">
          <div className="m-6">
            <h6 className="font-medium">Email me at</h6>
            <p>contact@website.com</p>
          </div>
          <div className="m-6">
            <h6 className="font-medium">Call us</h6>
            <p>0927 6277 28525</p>
          </div>
        </div>
      </div>
      <div className="text-white">
        <h1 className="font-semibold text-5xl mb-6">Let’s Talk!</h1>
        <p className="max-w-[400px] break-words mr-72">
          We are always open to discuss your project, improve your online
          presence and help with your UX/UI design challenges.
        </p>
        <div className="flex gap-6 h-4 mt-6 ">
          <img src={fb} />
          <img src={x} />
          <img src={ig} />
          <img src={lnkd} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
