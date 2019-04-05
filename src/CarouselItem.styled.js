import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  background-color: black;
  width: 250px;
  overflow: hidden;
`;

export const ThumbnailSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const LeftIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: green;
`;
export const RightIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: green;
`;
export const WeatherIcon = styled.div`
  width: 150px;
  height: 150px;
  background-color: blue;
`;

export const InfoSection = styled.div`
  background-color: turquoise;
  display: flex;
  color: white;
  padding: 12px;
`;

export const Temprature = styled.div`
  font-size: 24pt;
  align-self: center;
`;

export const CenterInfo = styled.div`
  flex: 1;
  padding: 0 12px;
  margin: auto;
`;

export const WeatherText = styled.div`
  font-size: 12pt;
`;

export const LocationText = styled.div`
  font-size: 8pt;
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
`;

export const FooterSection = styled.div`
  background-color: #222;
  color: #ddd;
  display: flex;
  justify-content: space-evenly;
  padding: 24px 0;
  font-size: 8pt;
`;
