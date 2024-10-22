import React from "react";
import { motion } from "framer-motion";
import img from "../../public/images/math.jpg";
import img2 from "../../public/images/math.jpg";
import img3 from "../../public/images/math.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import imag from "../../public/images/studenntssssssssssss.webp";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import Courses from "../components/Courses";


function LandingPage() {
  
  return (
    <>
      <NavBar />
      <div className="hero-container relative flex flex-col md:flex-row justify-between items-center p-5">
        <motion.div
          className="hero-left w-[350px] md:w-[50%] m-5 pb-5 md:relative absolute top-0 space-y-5 left-0 z-10 bg-black bg-opacity-50 h-[330px] p-5 md:bg-transparent"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                    <h4 className="text-3xl md:text-5xl font-bold font-poppins pt-8 text-white md:text-black">
            <span className="text-[#366cff]">Studying</span> Online is now much
            easier
          </h4>
          <p className="text-base md:text-lg font-poppins pb-2 text-white md:text-black">
            Arcade Academy is an interesting platform that will teach you in a
            more interactive way.
          </p>
          <button className="hero-button bg-[#366cff] text-white rounded-full w-[120px] md:w-[140px] h-[40px] md:h-[45px] font-poppins hover:scale-105 hover:bg-black">
            Join For Free
          </button>
        </motion.div>
        <div
          className="hero-right w-full md:w-[40%]"
         
        >
          <img
            src={img}
            className="w-[400px]  h-[330px] md:w-[500px]  md:h-[380px] rounded-lg"
          />
        </div>
        </div>
      <motion.div
        className="sec-container flex mt-[50px] md:mt-[150px] justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex font-poppins justify-center items-center flex-col text-center w-[90%] md:w-[80%]">
          <h2 className="font-bold text-2xl md:text-3xl">
            What is <span className="text-[#366cff]">Arcade Academy</span>?
          </h2>
          <p className="text-base md:text-lg font-poppins p-2">
            Arcade Academy is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates, grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        </motion.div>
        


      <motion.div
        className="Card-container flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 mt-10 mb-[50px] md:mb-[150px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
     
        <div className="card-1 relative w-[90%] md:w-[350px] h-[230px]">
          
          <img src={img2} className="w-full h-full rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30 p-1 rounded">
            <h4 className="text-xl md:text-2xl">For Students</h4>
            <button className="mt-2 text-black bg-white hover:bg-blue-600  p-1 rounded-full w-[110px] md:w-[130px] h-[35px] md:h-[40px]">
              Start Class
            </button>
          </div>
        </div>
        <div className="card-2 relative w-[90%] md:w-[350px] h-[230px]">
          <img src={img3} className="w-full h-full rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30 p-1 rounded">
            <h4 className="text-xl md:text-2xl">For Teachers</h4>
            <button className="mt-2 text-white bg-blue-600 hover:bg-black p-1 rounded-full w-[110px] md:w-[130px] h-[35px] md:h-[40px]">
              Start Class
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full h-auto md:h-[400px] font-poppins flex flex-col md:flex-row justify-center items-center bg-[#fcfcfcec] mb-5 py-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-[90%] md:w-[500px]">
          <h1 className="text-2xl md:text-[30px] mb-4">
            Everything you can do in a physical classroom{" "}
            <span className="text-[#366cff]">you can do with Arcade Academy</span>
          </h1>
          <p className="text-gray-600 w-full md:w-[400px]">
            From quizzes and assignments to lectures and feedback, everything is
            in one place and accessible to both students and teachers. A platform
            that is designed to make learning easier and more interactive for
            both students and teachers.
          </p>
        </div>
        <div className="flex flex-col items-center mt-5 md:mt-0">
          <div className="relative flex-shrink-0">
            <img
              src={img}
              className="w-[250px] md:w-[300px] h-auto md:h-[250px] rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto bg-[#fcfcfcec] font-poppins pt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
       {/*courses*/}
       <Courses />
       
      </motion.div>
      <AboutUs id="AboutUs" />
      <Pricing id="Pricing" />
{/* Contact Us section */}
<div id="contactUs" className="relative flex flex-col justify-center items-center w-full h-full p-10">
  <div className="absolute inset-0">
    <img src={img} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
    <h1 className="text-4xl font-bold text-white mb-5">Contact Us</h1>
    <p className="w-[60%] text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, deleniti totam consectetur corporis dolorem animi dolores commodi unde qui .</p>
    <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start w-full mt-5 space-y-5 sm:space-y-0 sm:space-x-10">
      <div className="space-y-5 w-full sm:w-auto">
        <div className="flex flex-row items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <FaPhoneVolume className="text-xl text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-600">Phone</h1>
            <p className="text-white">+1234567890</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <FaHouseChimney className="text-xl text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-600">Address</h1>
            <p className="text-white">1234 Main Street, City, Country</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <MdEmail className="text-xl text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-600">Email</h1>
            <p className="text-white">support@gmail.com</p>
          </div>
        </div>
      </div>
      <form className="flex flex-col space-y-3 w-full sm:w-[35%] bg-white p-5 rounded-lg">
        <h1 className="font-poppins font-bold text-2xl pl-2">Send Message</h1>
        <div className="flex flex-col items-center space-y-3">
          <input type="text" placeholder="Name" className="p-2 w-[90%] border-b border-black" />
          <input type="text" placeholder="Email" className="p-2 w-[90%] border-b border-black" />
          <textarea placeholder="Message" className="p-2 w-[90%] rounded-md border-b border-black"></textarea>
          <button className="bg-blue-600 text-white p-2 w-[90%] rounded-md">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>




      <Footer />
    </>
  );
}

export default LandingPage;
