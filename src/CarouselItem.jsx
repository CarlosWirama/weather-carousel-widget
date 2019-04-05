import React from 'react';
import {
  Container,
  ThumbnailSection,
  LeftIcon,
  RightIcon,
  WeatherIcon,
  InfoSection,
  Temprature,
  CenterInfo,
  WeatherText,
  LocationText,
  DateInfo,
  MonthText,
  DateText,
  FooterSection,
} from './CarouselItem.styled.js';

export default function CarouselItem({
  date,
  MMM,
  weather,
  temprature,
  location,
  windSpeed,
  humidity,
  intensity,
}) {
  return (
    <Container>
      <ThumbnailSection>
        <LeftIcon />
        <WeatherIcon>{weather}</WeatherIcon>
        <RightIcon />
      </ThumbnailSection>
      <InfoSection>
        <Temprature>{temprature}°</Temprature>
        <CenterInfo>
          <WeatherText>{weather}</WeatherText>
          <LocationText>{location}</LocationText>
        </CenterInfo>
        <DateInfo>
          <MonthText>{MMM}</MonthText>
          <DateText>{date}</DateText>
        </DateInfo>
      </InfoSection>
      <FooterSection>
        <div>{windSpeed} MPH</div>
        <div>{humidity} %</div>
        <div>{intensity} %</div>
      </FooterSection>
    </Container>
  );
}
