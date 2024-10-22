import React, { useState } from 'react';
import logo from "../../public/images/students.avif";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/Login');
  };
  const handleClickRegister = () => {
    navigate('/Register');
  };

  return (
    <>
      <div className="flex-row justify-between items-center bg-gray-100 p-2 hidden sm:flex cursor-pointer">
        <div className="flex flex-row items-center text-center pl-3 text-md font-poppins font-semibold">
          <MdMarkEmailRead className="mr-2" />
          <p>support@gmail.com</p>
          <div className='bg-black h-[20px] w-[1px] ml-5' ></div>
          <FaPhoneVolume className="mr-2 ml-4" />
          <p>+234 123 456 7890</p>
        </div>
        <div className="flex flex-row items-center">
          <ul className="flex justify-center items-center gap-2 text-xl">
            <li>
              <a className="w-[38px] h-[38px] hover:text-blue-600 flex justify-center items-center" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a className="w-[38px] h-[38px] hover:text-blue-600 flex justify-center items-center" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="w-[38px] h-[38px] hover:text-blue-600 flex justify-center items-center" href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <button className={`nav-button rounded-lg ml-5 bg-[#366cff] w-[110px] h-[45px] ${isNavVisible ? "text-black hidden bg-white" : "text-white block"}`} onClick={handleClickLogin}>
            Log In
          </button>
        </div>
      </div>
      <div className="nav-container flex justify-between m-3 items-center">
        <div className="flex items-center">
          <CiMenuBurger className={`text-3xl cursor-pointer md:hidden ${isNavVisible ? "X" : <CiMenuBurger />}`} onClick={toggleNav} />
          <img src={logo} className="w-[150px] h-[80px] ml-2" />
        </div>
        <div className={`nav-right  space-x-4 text-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 font-poppins ${isNavVisible ? 'fixed top-0 left-0 w-full md:w-[1000px] bg-[#366cff] h-screen md:h-[300px] justify-start items-start text-white space-x-8 space-y-6 z-50 p-5' : 'hidden'} md:flex`}>
          <button className="nav-button bg-white text-gray-600 rounded-full font-bold w-[50px] h-[45px] absolute top-5 right-5 md:hidden" onClick={toggleNav}> X </button>
          <a href="/"  className="nav-item cursor-pointer relative">
            Home
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </a>
          <a href="/courses" className="nav-item cursor-pointer relative">
            Courses
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </a>
          <ScrollLink to="Pricing" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            Pricing
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink to="AboutUs" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            About us
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink to="contactUs" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            Contact us
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
         <div className={`flex flex-row md:flex-row space-x-5 md:space-y-0 md:space-x-2 font-poppins ${isNavVisible ? 'block' : 'hidden'} md:flex`}>
  <div className='relative flex flex-row items-center space-x-3 justify-around text-blu-500 text-3xl font-bold cursor-pointer'>
    <div className="relative">
      <FiShoppingCart />
      <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</div>
    </div>
    <div className="relative">
      <FaRegHeart />
      <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">5</div>
    </div>
  </div>
</div>
          <button className="nav-button bg-white text-gray-600 rounded-lg font-bold w-[110px] h-[45px] md:hidden" onClick={handleClickLogin}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;