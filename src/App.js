import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import CarouselItem from "./CarouselItem";
import { fetchWeatherApi } from "./api";
import { Q_PARAM_1, Q_PARAM_2, Q_PARAM_3 } from "./config.js";
import { AppContainer, Dots } from "./App.styled";

function getMMM(month) {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "Mei";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "undef";
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
    this.updateData = this.updateData.bind(this);
    this.onClickRefresh = this.onClickRefresh.bind(this);
  }

  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <Dots>{dots}</Dots>
  };

  async fetchDataFromApi() {
    const fetchedData = await Promise.all([
      fetchWeatherApi(Q_PARAM_1),
      fetchWeatherApi(Q_PARAM_2),
      fetchWeatherApi(Q_PARAM_3)
    ]).catch(e => console.error(e));
    return fetchedData.map(r => ({
      date: parseInt(r.current.last_updated.substr(8, 2)),
      MMM: getMMM(r.current.last_updated.substr(5, 2)),
      weather: r.current.condition.text,
      weatherIcon: r.current.condition.icon,
      weatherCode: r.current.condition.code,
      temprature: r.current.temp_c,
      location: r.location.name,
      windSpeed: r.current.wind_mph,
      humidity: r.current.humidity,
      intensity: r.current.uv
    }));
  }

  updateData() {
    this.setState({ isLoading: true });
    this.fetchDataFromApi().then(data => {
      this.setState({ data, isLoading: false });
    });
  }

  componentDidMount() {
    this.updateData();
  }

  onClickRefresh() {
    this.updateData();
  }

  onClickProfile() {
    // to something when clicking profile
  }
  render() {
    const { data, isLoading } = this.state;
    return isLoading ? (
      <AppContainer>
        <CircularProgress />
      </AppContainer>
    ) : (
      <AppContainer>
        <Slider {...this.settings}>
          {data &&
            data.map((item, index) => (
              <CarouselItem
                {...item}
                key={index}
                currentPage={index}
                totalPage={data.length}
                onClickProfile={this.onClickProfile}
                onClickRefresh={this.onClickRefresh}
              />
            ))}
        </Slider>
      </AppContainer>
    );
  }
}
