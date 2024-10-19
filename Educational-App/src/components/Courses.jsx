import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imag1 from "../../public/images/1000_F_280126582_Ig4OLIbbSryXwe2S63aBu2TKY0Bj9WjH.jpg";
import imag2 from "../../public/images/science-word-theme_23-2148540555.avif";
import imag3 from "../../public/images/1.jpg";
import imag4 from "../../public/images/math.jpg";

const Courses = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mdtablet: {
      breakpoint: { max: 768, min: 600 },
      items: 3,
    },
    smtablet: {
      breakpoint: { max: 600, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const subjects = [
    { id: 1, name: "Mathematics", image: imag4 },
    { id: 2, name: "Science", image: imag2 },
    { id: 3, name: "History", image: imag3 },
    { id: 4, name: "Geography", image: imag1 },
    { id: 5, name: "English", image: imag4 },
  ];

  return (
    <div id="courses" className="w-full flex justify-center items-center min-h-[400px]">
      <div className="w-[85%] m-auto relative">
        <div className="w-full">
          <div className="text-center flex justify-center items-center flex-col text-3xl text-black font-semibold relative pb-[45px]">
            <h2 className="font-bold text-4xl text-blue-600">Our Courses</h2>
            <div className="w-[100px] h-[2px]"></div>
          </div>
          <Carousel
            className="z-0"
            autoPlay={true}
            infinite={true}
            arrows={true}
            transitionDuration={500}
            responsive={responsive}
          >
            {subjects.map((subject) => (
              <div className="h-fit block bg-gray-50 w-[300px]" key={subject.id}>
                <div className="w-full h-full relative custom-hover-effect transform transition-all duration-500 p-3">
                  <img
                    className="w-[300px] h-[250px] object-cover"
                    src={subject.image}
                    alt={subject.name}
                  />
                  <div className="absolute bottom-10 w-full flex justify-center left-0 mx-auto items-center">
                    <span className="cursor-pointer py-[2px] px-6 bg-blue-600 text-white hover:bg-blue-600 transition-all  hover:scale-110 duration-300">
                      {subject.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        
      </div>
     
    </div>
    
  );
};

export default Courses;