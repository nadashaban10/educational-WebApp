import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoMdNotificationsOutline, IoMdMail } from "react-icons/io";
import logo from "../../public/images/WhatsApp_Image_2024-10-15_at_22.02.25_e2ae8a9e.png";
import img from "./../../public/images/istockphoto-1300845620-612x612.jpg";
import { CiMenuBurger } from "react-icons/ci";

function Portfolio() {
  const [userData, setUserData] = useState({
    fullName: "",
    nickName: "",
    phone: "",
    email: "",
    // country: "",
    // timeZone: ""
  });
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    // Retrieve user data from localStorage
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      console.log("here is the data ", parsedUser);
      setUserData({
        fullName: parsedUser.data.user.name || "",
        nickName: parsedUser.data.user.nickName || "",
        phone: parsedUser.data.user.phone || "",
        email: parsedUser.data.user.email || "",
      });
    }
  }, []);

  return (
    <>
      <div className="main-container h-screen flex flex-col sm:flex-row w-full">
        <div
          className={`left-container w-full sm:w-[200px] h-full flex flex-col items-center space-y-5   ${
            showBar ? "block" : "hidden"
          } sm:block`}
        >
          <div className="w-full ">
            <img
              src={logo}
              alt="logo"
              className="w-[300px] h-[] mt-5 object-contain"
            />
          </div>
          <div className="">
            <ul>
              <li>
                <div className="flex items-center text-black bg-blue-200 w-full h-full pl-2 opacity-[60%] font-bold">
                  <FaRegUser className="text-lg" />
                  <a href="url" className="p-5">
                    Profile
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center text-black opacity-[60%] pl-2 font-bold">
                  <GrSchedule className="text-lg" />
                  <a href="url" className="p-5">
                    Schedule
                  </a>
                </div>
                <div className="flex items-center text-black opacity-[60%] pl-2 font-bold">
                  <FaUserDoctor className="text-lg" />
                  <a href="url" className="p-5">
                    My Classes
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center text-black opacity-[60%] pl-2 font-bold">
                  <RiMedicineBottleLine className="text-lg" />
                  <a href="url" className="p-3">
                    Quizes
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-container flex-1 p-[20px] bg-[rgba(226,234,241,0.45)]">
          <div className="flex justify-between items-center">
            <button className="sm:hidden" onClick={() => setShowBar(!showBar)}>
              <CiMenuBurger className="text-2xl" />
            </button>
            <h1 className="text-[24px] font-medium">
              Welcome {userData.fullName}
            </h1>
            <div className="flex flex-row items-center">
              <div className="flex bg-white rounded-lg w-[52px] h-[52px] text-2xl justify-center items-center">
                <IoMdNotificationsOutline />
              </div>
              <div className="flex rounded-lg justify-center items-center ml-3">
                <img
                  src={img}
                  alt="img"
                  className="w-[52px] h-[52px] rounded-lg"
                />
              </div>
            </div>
          </div>
          <p className="text-[14px] pl-1  opacity-[50%]">Date</p>
          <div className="bg-container h-[83px] w-[100%] rounded-l">
            {/* <img src={img} alt="img2" className="w-[100%] h-[100%] rounded-lg" /> */}
          </div>
          <div className="bg-white flex items-center justify-start">
            <img
              src={img}
              alt="img2"
              className="w-[52px] h-[52px] rounded-full m-3"
            />
            <div>
              <h3 className="font-bold">{userData.fullName}</h3>
              <p className="text-black opacity-[60%]">{userData.nickName}</p>
            </div>
            <div className="ml-auto mr-[20px]">
              <button className="text-blue-800 underline text-sm flex justify-center items-center">
                Edit
              </button>
            </div>
          </div>
          <div className="p-5 bg-white">
            <form className="grid grid-cols-1 sm:grid-cols-2 w-[100%] md:w-[80%]">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={userData.fullName}
                  readOnly
                  className="mt-1 font-bold p-2 block w-full md:w-[90%] sm:w-[550px] h-[35px] border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="nickName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nick Name
                </label>
                <input
                  type="text"
                  id="nickName"
                  name="nickName"
                  value={userData.nickName}
                  readOnly
                  className="mt-1 p-2 font-bold block md:w-[90%] w-full sm:w-[550px] h-[35px] border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  readOnly
                  className="mt-1 p-2 block font-bold w-full md:w-[90%] sm:w-[550px] h-[35px] border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-gray-700"
                >
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={userData.language}
                  readOnly
                  className="mt-1 block w-full md:w-[90%] sm:w-[550px] h-[35px] border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={userData.country}
                  readOnly
                  className="mt-1 block w-full md:w-[90%] sm:w-[550px] h-[35px] border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="timeZone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time Zone
                </label>
                <input
                  type="text"
                  id="timeZone"
                  name="timeZone"
                  value={userData.timeZone}
                  readOnly
                  className="mt-1 block w-full md:w-[90%] sm:w-[550px] h-[35px] border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </form>

            <h3 className="mt-5 pl-3">My Email Address</h3>
            <div className="flex items-center mt-2">
              <div className="bg-[#4182F9] bg-opacity-50 text-white flex justify-center text-xl items-center w-[40px] h-[40px] rounded-full">
                <IoMdMail />
              </div>
              <p className="ml-2 font-bold">{userData.email}</p>
            </div>
            <p className="text-black opacity-[70%] text-[15px] pl-[50px]">
              Time Ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
