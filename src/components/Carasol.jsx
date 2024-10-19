import React from 'react';
import Slider from 'react-slick';

const CourseCarousel = ({ courses }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {courses.map(course => (
        <div key={course.id} className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="mt-2 text-gray-600">{course.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CourseCarousel;
