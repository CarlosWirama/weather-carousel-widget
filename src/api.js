import { API_DOMAIN, API_KEY } from "./config.js";

export async function fetchWeatherApi(cityParams) {
  const queryString = [API_KEY, cityParams].join("&");
  const url = `${API_DOMAIN}?${queryString}`;
  return await fetch(`https://cors-anywhere.herokuapp.com/${url}`).then(r =>
    r.json()
  );
}
