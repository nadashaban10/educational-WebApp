import React from "react";
import Navbar from "../components/NavBar";
import { LiaStarSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import img4 from "../../public/images/math.jpg";
import img5 from "../../public/images/1000_F_280126582_Ig4OLIbbSryXwe2S63aBu2TKY0Bj9WjH.jpg";
import img6 from "../../public/images/science-word-theme_23-2148540555.avif";
import img7 from "../../public/images/DALL·E-2024-03-28-13.07.17-Create-an-image-that-visualizes-the-concept-of-augmented-reality-in-education-showcasing-diverse-students-engaging-with-interactive-digital-elements-1024x675.webp";
import img8 from "../../public/images/math.jpg";
import Footer from "../components/Footer";
import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";



const courses = [
  {
    img: img4,
    title: "Math course",
    description:
      "This course covers fundamental concepts in mathematics, including algebra, geometry, and calculus. Perfect for students looking to strengthen their math skills.",
    price: "$55",
  },
  {
    img: img5,
    title: "Science course",
    description:
      "This course covers fundamental concepts in science, including physics, chemistry, and biology. Perfect for students looking to strengthen their science skills.",
    price: "$60",
  },
  {
    img: img6,
    title: "History course",
    description:
      "This course covers fundamental concepts in history, including ancient, medieval, and modern history. Perfect for students looking to strengthen their history knowledge.",
    price: "$50",
  },
  {
    img: img7,
    title: "English course",
    description:
      "This course covers fundamental concepts in English, including grammar, literature, and writing. Perfect for students looking to strengthen their English skills.",
    price: "$45",
  },
  {
    img: img8,
    title: "Computer Science course",
    description:
      "This course covers fundamental concepts in computer science, including programming, data structures, and algorithms. Perfect for students looking to strengthen their computer science skills.",
    price: "$70",
  },
];
const subjects = [
  { img: img4, title: "Mathematics", description: "Learn the fundamentals of Mathematics." },
  { img: img5, title: "Science", description: "Explore the world of Science." },
  { img: img7, title: "History", description: "Dive into the past with History." },
  { img: img4, title: "Art", description: "Unleash your creativity with Art." },
  { img: img6, title: "Art", description: "Unleash your creativity with Art." },
  { img: img8, title: "Art", description: "Unleash your creativity with Art." },
  { img: img6, title: "Art", description: "Unleash your creativity with Art." },
  { img: img8, title: "Art", description: "Unleash your creativity with Art." }
];


function Courses() {

  const navigate = useNavigate();
  const handleCourseClick = () => {
    navigate('/CourseDetails');
  }
  return (
    <>
      <div className="courses-container w-full h-full  ">
        <Navbar />
        <div className="courses-content h-[230px] w-full bg-[#366cff] flex flex-col justify-center items-center opacity-[90%] relative shadow-md">
          <h1 className="text-white text-5xl font-bold text-center">Courses</h1>
          <p className="text-white text-center text-sm py-4 font-bold cursor-pointer px-5">
            COURSES &gt;&gt; HOME
          </p>
          <div className="flex h-[40px] w-full max-w-[500px] mt-4 mx-auto">
  <button className="bg-white h-[40px] w-[150px] flex items-center justify-between pl-5">
    Subject <FaChevronDown className="" />
  </button>
  <input
    className="bg-white w-[70%] h-full pl-5 text-sm text-gray-400"
    placeholder=""
  />
  <button className="w-[30%] h-full bg-red-500 text-white font-bold font-poppins">
    Search
  </button>
</div>
        </div>
      </div>
      <div className=  "flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-8 mb-[40px]"
        onClick={handleCourseClick}>
          {courses.map((course, index) => (
            <div
              key={index}
              className="card bg-gray-50 h-full w-[350px] relative m-2 rounded-b-lg"
            >
              <div className="w-full h-[200px]">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-row h-full mt-2 w-full items-center justify-start space-x-2  mb-2 relative">
                  <h1 className="text-lg font-bold ">{course.title}</h1>
                  <BsFillPatchCheckFill className="text-blue-600" />
                </div>
                <div>
                  <h1 className="text-sm text-gray-600">{course.description}</h1>
                  <div className="bg-gray-300 w-[310px] mt-3 h-[1px]"> </div>
                  <div className="flex flex-row items-center justify-between mt-2">
                    <div className="flex flex-row text-yellow-400">
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                    </div>
                    <div className="ml-4 text-black font-bold text-xl">
                      {course.price}
                    </div>
                    
                  </div>
                  
                </div>
                
                <FaHeart className="text-3xl text-red-500 absolute top-4 right-4" />
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 text-white w-[150px] h-[40px]  flex justify-center items-center">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg- h-full flex justify-center items-center flex-col mt-[100px] mb-[50px] w-full sm:w-full">
  <h1 className="text-4xl w-full text-center tracking-wider font-poppins text-blue-600">Explore Our Top Subjects</h1>
  <div className="bg-gray-300 h-[2px] m-5 w-[330px]"></div>
  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 card-container w-[90%] mx-auto justify-center items-center">
    {subjects.map((subject, index) => (
      <div key={index} className="relative card-content w-[250px] hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden">
        <img src={subject.img} alt={subject.title} className="w-full h-[200px] object-cover" />
        <div className="bg-black opacity-[60%] h-full w-full absolute top-0 left-0"></div>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white p-4 z-10">
          <h1 className="w-full text-center text-2xl font-semibold">{subject.title}</h1>
          <p className="text-xl w-full text-center">{subject.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      <Footer   />
    </>
  );
}

export default Courses;