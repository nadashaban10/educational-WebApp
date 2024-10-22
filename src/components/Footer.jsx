import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import logo from "../../public/images/studenttttt.png";

const Footer = () => {
  return (
    <Element name="footer">
      <footer className="bg-[#fcfcfcec]">
        <div className="w-[90%] mx-auto py-16 flex flex-col sm:flex-row items-center">
          <div className="flex-1 mb-6 flex flex-col sm:flex-row items-start sm:items-center">
            <img className="w-[300px] h-[100px] mb-4 sm:mb-0" src={logo} alt="logo" />
            <ul className="flex flex-col gap-2 text-slate-600">
              <li>Address: 2504 Ivins Avenue, <br/> Egg Harbor Township, NJ 08234</li>
              <li>Phone: 4343434344</li>
              <li>Email: support@easylearingbd.com</li>
            </ul>
          </div>

          <div className="flex-1 mb-6">
            <h2 className="font-bold text-lg mb-2">Join Our Shop</h2>
            <span className="block mb-3">Get Email updates about our latest and shop special offers</span>
            <div className="h-[50px] w-full bg-white border relative">
              <input
                className="h-full bg-transparent w-full px-3 outline-0"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="h-full absolute right-0 bg-[#1F212A] text-white uppercase px-4 font-bold text-sm">
                Subscribe
              </button>
            </div>
            <ul className="flex justify-start items-center gap-3 mt-4">
              <li>
                <a className="w-[38px] h-[38px] hover:bg-blue-600 hover:text-white flex justify-center items-center bg-white rounded-full" href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className="w-[38px] h-[38px] hover:bg-blue-600 hover:text-white flex justify-center items-center bg-white rounded-full" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="w-[38px] h-[38px] hover:bg-blue-600 hover:text-white flex justify-center items-center bg-white rounded-full" href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a className="w-[38px] h-[38px] hover:bg-blue-600 hover:text-white flex justify-center items-center bg-white rounded-full" href="#">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[90%] flex justify-center items-center text-slate-600 mx-auto py-5 text-center">
          <span>Copyright @ 2024 All Rights Reserved</span>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
