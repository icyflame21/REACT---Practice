import React, { useState, useEffect } from "react";
import dataslider from "./data";
import "./Slider.css";
import { SliderBtn } from "./SliderBtn";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [imageArr, setImageArr] = useState([]);
  let API_KEY = "api_key=21f03053e26ab7eff71356d94e8eaca7";
  let BASE_URL = "https://api.themoviedb.org/3";
  let API_URL =
    BASE_URL +
    "/trending/movie/day?" +
    API_KEY +
    "&language=en-US" +
    "&include_adult=false";
  const prevSlide = () => {
    setSlideIndex((slideIndex) =>
      slideIndex != 0 ? slideIndex - 1 : imageArr.length - 1
    );
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex) =>
      slideIndex === imageArr.length - 1 ? 0 : slideIndex + 1
    );
  };
  useEffect(() => {
    let id = setInterval(() => {
      setSlideIndex((slideIndex) =>
        slideIndex < imageArr.length - 1 ? slideIndex + 1 : 0
      );
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    getImages(API_URL);
  }, []);

  async function getImages(url) {
    let res = await fetch(url);
    let data = await res.json();
    setImageArr(data.results.map((el) => el.backdrop_path));
  }
  return (
    <>
      <div className="container-slider">
        <div className="slide active">
          <img src={`https://image.tmdb.org/t/p/w500/${imageArr[slideIndex]}`}/>
        </div>

        <SliderBtn moveSlide={nextSlide} direction={"next"} />
        <SliderBtn moveSlide={prevSlide} direction={"prev"} />
      </div>
    </>
  );
};
