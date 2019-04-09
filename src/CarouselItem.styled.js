import styled from "styled-components";
import { getWeatherColor } from "./config";

export const Container = styled.div`
  font-family: "Helvetica Neue", Helvetica, "Trebuchet MS", sans-serif;
  border-radius: 16px;
  background-color: black;
  width: 250px;
  overflow: hidden;
  margin: auto;
`;

export const ThumbnailSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  & svg {
    margin: auto;
  }
`;

export const FooterInfoItem = styled.div`
  display: flex;
  align-items: center;
  & svg {
    font-size: 12pt;
    padding: 0 5px;
  }
`;

export const WeatherIcon = styled.div`
  & svg {
    width: 150px;
    height: 150px;
    margin: auf;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  color: white;
  padding: 12px;
  background-color: ${({ weatherCode }) => getWeatherColor(weatherCode)};
`;

export const Temprature = styled.div`
  font-size: 24pt;
  align-self: center;
`;

export const CenterInfo = styled.div`
  flex: 1;
  padding: 0 12px;
  margin: auto;
  font-weight: 100;
`;

export const WeatherText = styled.div`
  font-size: 13pt;
`;

export const LocationText = styled.div`
  font-size: 7pt;
`;

export const DateInfo = styled.div`
  padding: 0 12px;
  text-align: center;
  border-left: 1px solid #999;
`;

export const MonthText = styled.div`
  font-size: 8pt;
`;

export const DateText = styled.div`
  font-size: 16pt;
  font-weight: bold;
`;

export const FooterSection = styled.div`
  background-color: #222;
  color: #ddd;
  padding: 24px 0 8px;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 8pt;
`;

export const PageIndicator = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16px;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  border: 1px solid white;
  margin: 4px;
`;
