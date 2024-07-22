import React, { useState } from "react";
import testimonials from "./testimonialSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getTestimonialIndex = (offset) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonials">
        {[0, 1, 2].map((offset) => {
          const index = getTestimonialIndex(offset);
          return (
            <div className="testimonial" key={index}>
              <img src={testimonials[index].image} alt="testimonial" />
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className="testimonial-text">"{testimonials[index].text}"</p>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button style={{ marginRight: 10 }} onClick={prevTestimonial}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={nextTestimonial}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
