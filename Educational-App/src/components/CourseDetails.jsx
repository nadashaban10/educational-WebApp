import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import imag2 from "../../public/images/science-word-theme_23-2148540555.avif";
import { LiaStarSolid } from "react-icons/lia";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineVideoLabel } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import Courses from "./Courses";

const course = {
  img: imag2,
  title: "React Js 2024 Build Multi-Vendor Ecommerce Start to Finish",
  description:
    "Build Full Stack Multivendor Ecommerce Applications Project with React.js, Redux, Hooks, Node.js, Express.js and MongoDB",
  originalPrice: "$170",
  discountedPrice: "$70",
  rating: 4.1,
  creator: "Nada Shaban",
  academy: "Arcade Academy",
};

function CourseDetails() {
  return (
    <>
      <NavBar />
      <div className="CourseDetails h-full w-full mb-[100px]">
        <div className="CourseContent">
          <div className="Firt-Section relative w-full h-[400px] bg-gray-800 hidden lg:block ">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-5 w-[100%]">
              <h1 className="text-3xl font-bold w-[60%]">{course.title}</h1>
              <p className="mt-4">{course.description}</p>

              <div className="flex justify-start items-center text-yellow-400 mt-4">
                <div className="text-white font-bold text-sm">
                  <h1 className="mr-5">
                    Created By {course.creator}{" "}
                    <span className="underline text-sm">{course.academy}</span>
                  </h1>
                </div>
                <p className="pr-3 font-semibold">{course.rating}</p>
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
              </div>
            </div>
          </div>
          <div className="Second-Section flex flex-col lg:flex-row justify-between">
            <div className="rightCard-Section w-full lg:w-[400px] lg:absolute lg:right-5 lg:transform lg:-translate-y-1/2 bg-gray-50 pb-[50px]">
              <div className="rigthCardContent">
                <video className="w-full h-auto" controls>
                  <source src="path_to_your_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <div className="flex flex-row h-full mt-2 w-full items-center justify-start space-x-2 mb-2 relative">
                    <h1 className="text-lg font-bold w-[80%]">{course.title}</h1>
                    <BsFillPatchCheckFill className="text-blue-600 text-xl w-[20%]" />
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-600">
                      {course.description}
                    </h1>
                    <div className="flex justify-center mt-2">
                      <button className="bg-blue-500 w-[80%] h-[50px] font-bold text-white flex justify-center items-center">
                        Try For Free
                      </button>
                    </div>
                    <div className="w-[310px] flex flex-row space-x-3 justify-center items-center mx-auto">
                      <div className="bg-gray-300 w-[40%] mt-3 h-[1px]"></div>
                      <p className="text-center pt-2">or</p>
                      <div className="bg-gray-300 w-[40%] mt-3 h-[1px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-2 font-poppins">
                      <div className="flex items-center space-x-3 ml-9">
                        <span className="text-black text-xl">
                          {course.discountedPrice}
                        </span>
                        <span className="line-through text-gray-400 text-md">
                          {course.originalPrice}
                        </span>
                        <span className="text-gray-600 font-">60% off</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt- mb-5 w-full space-x-5 ">
                  <button className=" border hover:bg-blue-500 hover:text-white hover:border-none border-black text-black w-[50%] h-[40px] flex justify-center items-center font-semibold">
                    Add to cart
                  </button>
                  <button className=" text-black  text-md fnt-bold w-[13%] h-[40px] flex justify-center items-center border border-black">
                    <FaRegHeart />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center text-gray-500 w-full space-y-1 text-sm">
                  <p className="">30-Day Money-Back Guarantee</p>
                  <p className="">Full Lifetime Access</p>
                </div>
                <div className="flex justify-center items-center w-full space-x-5 mt-5">
                  <input
                    placeholder="Apply the copoun here"
                    className="border h-full border-black p-3 border-dashed"
                  ></input>
                  <button className="text-black w-[20%] h-[40px] flex justify-center items-center border border-black  font-semibold hover:bg-red-600 hover:border-none hover:text-white">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="Whole-Left-section w-[95%] lg:w-auto">
              <div className="CourseDetailsContent-left-Section border border-gray-500 pl-4 pt-5 w-full lg:w-full h-[300px] mt-5 ml-3 ">
                <div className="CourseDetailsContentLeft w-full">
                  <div className="CourseDetailsContentLeftTop">
                    <h1 className="text-xl font-bold mb-4">What you'll learn</h1>
                    <ul className="list-none space-y-2">
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Build Full Stack Multivendor Ecommerce Applications
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Learn React.js, Redux, Hooks, Node.js, Express.js
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Build Full Stack Multivendor Ecommerce Applications
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Learn React.js, Redux, Hooks, Node.js, Express.js
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="CourseDetailsContent-Left-Bottom mt-5 pt-5 w-full lg:w-[700px] h-full ml-5 pb-5">
                <h1 className="text-3xl font-bold mb-4">This course includes:</h1>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <MdOutlineVideoLabel className="text-blue-500 mr-2 text-2xl" />
                    8 hours of video content
                  </li>
                  <li className="flex items-center">
                    <GrCertificate className="text-blue-500 mr-2 text-2xl" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <IoMdDownload className="text-blue-500 mr-2 text-2xl" />
                    Downloadable articles
                  </li>
                </ul>
                <div className="mt-5 w-[70%] font-poppins">
                  <h1 className="font-bold text-2xl">Description</h1>
                  <p className="text-md font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores, necessitatibus cumque, dolorum magnam voluptates error fugit quidem itaque vitae nemo debitis reprehenderit rerum labore quod neque laudantium, numquam ex.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Courses />
      <Footer />
    </>
  );
}

export default CourseDetails;