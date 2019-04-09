import styled from "styled-components";
import { getWeatherColor } from "./config";

export const ThumbnailSection = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 150px;
    height: 150px;
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
  color: #ddd;
  padding-top: 24px;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 8pt;
`;
