export const API_DOMAIN = "http://api.apixu.com/v1/current.json";
export const API_KEY = "key=db63467b9e6f456894f154815190804";
export const Q_PARAM_1 = "q=London";
export const Q_PARAM_2 = "q=Singapore";
export const Q_PARAM_3 = "q=Jakarta";

export function getWeatherColor(weatherCode) {
  if (weatherCode <= 1003) return "orange";
  else if (weatherCode < 1150) return "turquoise";
  else return "gray";
}
