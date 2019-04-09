import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import ToysIcon from "@material-ui/icons/Toys";
import WavesIcon from "@material-ui/icons/Waves";
import WbSunny from "@material-ui/icons/WbSunny";
import {
  Container,
  ThumbnailSection,
  ButtonContainer,
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
  Circle,
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
  intensity,
  currentPage,
  totalPage
}) {
  const circles = new Array(totalPage).fill(null);
  return (
    <Container>
      <ThumbnailSection>
        <ButtonContainer>
          <PersonIcon />
        </ButtonContainer>
        <WeatherIcon>
          <img src={weatherIcon} width="150px" height="150px" alt="" />
        </WeatherIcon>
        <ButtonContainer>
          <RefreshIcon />
        </ButtonContainer>
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
        <PageIndicator>
          {circles.map((item, index) => (
            <Circle key={index} active={index === currentPage} />
          ))}
        </PageIndicator>
      </FooterSection>
    </Container>
  );
}
