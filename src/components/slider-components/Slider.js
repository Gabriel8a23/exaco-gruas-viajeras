import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./sliderData";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length

  const autoScroll = true
  let slideInterval
  let intervalTime = 5500

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide])

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <Button className="slide-button me-2" variant="secondary btn-sm" as={Link} to="/contacto">Cotiza ahora</Button>
                  <Button className="slide-button" variant="info btn-sm" as={Link} to={index === 2 ? "/polipastos" : "/gruas-viajeras"}>Leer más</Button>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  );
};
