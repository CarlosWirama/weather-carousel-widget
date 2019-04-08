import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import { fetchWeatherApi } from "./api";
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

  function getMMM (month) {
    switch (month) {
      case '01': return 'Jan';
      case '02': return 'Feb';
      case '03': return 'Mar';
      case '04': return 'Apr';
      case '05': return 'Mei';
      case '06': return 'Jun';
      case '07': return 'Jul';
      case '08': return 'Aug';
      case '09': return 'Sep';
      case '10': return 'Oct';
      case '11': return 'Nov';
      case '12': return 'Dec';
      default: return 'undef';
    }
  }

  async function fetchData () {
    const fetchedData = await Promise.all([
      fetchWeatherApi(Q_PARAM_1).then(r => r.json()),
      fetchWeatherApi(Q_PARAM_2).then(r => r.json()),
      fetchWeatherApi(Q_PARAM_3).then(r => r.json()),
    ]);
    const results = fetchedData.map(r => ({
      date: r.current.last_updated.slice(8,2),
      MMM: getMMM(r.current.last_updated.slice(6,2)),
      weather: r.current.condition.text,
      weatherIcon: r.current.condition.icon,
      temprature: r.current.temp_c,
      location: r.location.name,
      windSpeed: r.current.wind_mph,
      humidity: r.current.humidity,
      intensity: r.current.cloud,
    }));
    setData(results);
  }

  useEffect(() => {
    fetchData();
  })

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
