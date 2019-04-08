import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import fetchWeatherApi from "./api";
import { Q_PARAM_1, Q_PARAM_2, Q_PARAM_3 } from "./config.js";

export default function App() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWeatherApi(Q_PARAM_1).then(r => console.log(r));
  });
  // const data = [
  //   {
  //     date: 8,
  //     MMM: 'APR',
  //     weather: 'Cloudy Skies',
  //     temprature: 26,
  //     location: 'Singapore',
  //     windSpeed: '22',
  //     humidity: '33',
  //     intensity: '83',
  //   },
  //   {
  //     date: 8,
  //     MMM: 'APR',
  //     weather: 'Heavy Rain',
  //     temprature: 26,
  //     location: 'Singapore',
  //     windSpeed: '22',
  //     humidity: '33',
  //     intensity: '83',
  //   },
  // ];
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <CarouselItem
          {...item}
          key={index}
          currentPage={index}
          totalPage={data.length}
        />
      ))}
    </Slider>
  );
}
