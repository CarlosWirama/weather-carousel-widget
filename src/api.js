import { API_DOMAIN, API_KEY } from "./config.js";

export async function fetchWeatherApi(cityParams) {
  const queryString = [API_KEY, ...cityParams].join("&");
  const url = `${API_DOMAIN}?${queryString}`;
  const heroku_url = `https://cors-anywhere.herokuapp.com/${url}&format=json`;
  return await fetch(heroku_url);
}
