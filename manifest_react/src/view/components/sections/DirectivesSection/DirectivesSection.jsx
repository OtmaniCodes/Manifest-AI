import React, { useEffect, useState } from "react";
import "./DirectivesSection.css";
import bgVideo from '../../../../assets/videos/bg-video-1.mp4';
import bgGif from '../../../../assets/gifs/lights-bg.gif';

import { directivesData } from "../../../../constants/data";
import GradientTitle from "../../GradientTitle/GradientTitle";
import ResponsiveCompo from '../../../components/responsive-compo'
import { Fade } from "react-reveal";


export default function DirectivesSection() {

  const totalDirectives = directivesData.length;
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((currentSlide) =>
      currentSlide === totalDirectives ? 1 : currentSlide + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const moveForwards = () => {
      setActiveSlide((currentSlide) =>
        (currentSlide >= totalDirectives) ? 1 : currentSlide + 1
      );
  }

  const moveBackwards = () => {
      setActiveSlide((currentSlide) =>
        (currentSlide <= 1) ? totalDirectives : currentSlide - 1
      );
  }

  const renderLines = (reverted) => {
    return (
      <div className="top-lines" style={{transform: reverted ? 'rotate(180deg)' : null}}>
        <div className="top-line1"></div>
        <div className="top-line2"></div>
        <div className="top-line3"></div>
      </div>
    )
  }

  return (
    <section id="directives-section">
      <img src={bgGif}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          // left: '50%',
          // top: '50%',
          objectFit: 'cover',
          // transform: 'translate(-50%, -50%)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      />
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          // left: '50%',
          // top: '50%',
          objectFit: 'cover',
          // transform: 'translate(-50%, -50%)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <div className="trans-layer"></div>
      <div className="directives-content d-flex flex-column justify-content-center h-100">
        <GradientTitle title={"The 10 Directives"} subTitle={"The True And Only Directives That We Believe In"}/>
        <div className="my-4"></div>
        <Fade>

        <h5 className="carousal__number">
          <span>{`Directive #${activeSlide}`}</span>
        </h5>
        {renderLines()}
        <div className="d-flex align-items-center mx-md-5">
          <ResponsiveCompo
            desktopChild={
              <button className="slider-nav-btn" onClick={moveBackwards}>
                <i className="fa-solid fa-angle-left"></i>
              </button>
            }
          />
          <DirectivesSlider activeSlide={activeSlide}/>
          <ResponsiveCompo
            desktopChild={
              <button className="slider-nav-btn" onClick={moveForwards}>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            }
          />
        </div>
        {renderLines(true)}
        <ResponsiveCompo mobileChild={
          <div className="d-flex justify-content-center mt-3">
            <button className="slider-nav-btn" onClick={moveBackwards}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className="mx-3"></div>
            <button className="slider-nav-btn" onClick={moveForwards}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        }/>
        </Fade>
      </div>
    </section>
  )
}


function DirectivesSlider({activeSlide}) {
  return (
    <>
        <ul className="slider-container">
          {directivesData.map((directive, index) => {
            const { title, description } = directive;
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
            {Array.from({ length: directivesData.length }, (_, i) => (
              <span
                className={`carousel__dot${i + 1 === activeSlide ? " active" : ""}`}
                key={i + 1}
              />
            ))}
          </li>
        </ul>
    </>
  );
}
