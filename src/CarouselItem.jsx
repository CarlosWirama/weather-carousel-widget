import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  FooterInfo,
  PageIndicator,
  Circle
} from "./CarouselItem.styled.js";

export default function CarouselItem({
  date,
  MMM,
  weather,
  temprature,
  location,
  windSpeed,
  humidity,
  intensity,
  currentPage,
  totalPage
}) {
  const circles = new Array(totalPage).fill(null);
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
        <FooterInfo>
          <div>
            <FontAwesomeIcon icon="wind" />
            {windSpeed} MPH
          </div>
          <div>
            <FontAwesomeIcon icon="humidity" />
            {humidity} %
          </div>
          <div>
            <FontAwesomeIcon icon="sun" />
            {intensity} %
          </div>
        </FooterInfo>
        <PageIndicator>
          {circles.map((item, index) => (
            <Circle key={index} active={index === currentPage} />
          ))}
        </PageIndicator>
      </FooterSection>
    </Container>
  );
}
