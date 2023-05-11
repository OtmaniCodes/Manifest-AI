import React, { useEffect, useState } from "react";
import "./CommendmentsSlider.css";
import { commendments } from "./Ten-Commendments";


function CommendmentsSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    let current = 1;
    const cycleReviews = () => {
      if (current === 10) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    const intervalId = setInterval(() => {
      cycleReviews();
    },2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ul className="slider-container">
        {commendments.map((review, index) => {
          const {title, description } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{title}</span>
                </cite>
                <p>"{description}"</p>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 6 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 7 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 8 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 9 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 10 ? " active" : ""}`}
          />
        </li>
      </ul>
      {/* <p>Active Slide = {activeSlide}</p> */}
    </div>
  );
}
export default CommendmentsSlider;
