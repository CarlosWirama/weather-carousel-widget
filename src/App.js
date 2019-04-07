import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItem from './CarouselItem';

export default function App() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      date: 8,
      MMM: 'APR',
      weather: 'Cloudy Skies',
      temprature: 26,
      location: 'Singapore',
      windSpeed: '22',
      humidity: '33',
      intensity: '83',
    },
    {
      date: 8,
      MMM: 'APR',
      weather: 'Heavy Rain',
      temprature: 26,
      location: 'Singapore',
      windSpeed: '22',
      humidity: '33',
      intensity: '83',
    },
  ];
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
