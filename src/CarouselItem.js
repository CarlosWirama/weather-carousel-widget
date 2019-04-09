import React from "react";
import ToysIcon from "@material-ui/icons/Toys";
import WavesIcon from "@material-ui/icons/Waves";
import WbSunny from "@material-ui/icons/WbSunny";
import {
  ThumbnailSection,
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
  FooterInfoItem
} from "./CarouselItem.styled.js";

export default function CarouselItem({
  date,
  MMM,
  weather,
  weatherIcon,
  weatherCode,
  temprature,
  location,
  windSpeed,
  humidity,
  intensity
}) {
  return (
    <React.Fragment>
      <ThumbnailSection>
        <img src={weatherIcon} width="150px" height="150px" alt="" />
      </ThumbnailSection>
      <InfoSection weatherCode={weatherCode}>
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
          <FooterInfoItem>
            <ToysIcon />
            {windSpeed} MPH
          </FooterInfoItem>
          <FooterInfoItem>
            <WavesIcon />
            {humidity} %
          </FooterInfoItem>
          <FooterInfoItem>
            <WbSunny />
            {intensity} %
          </FooterInfoItem>
        </FooterInfo>
      </FooterSection>
    </React.Fragment>
  );
}
