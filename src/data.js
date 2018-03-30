const BLUE_CITIES = [
  "San Francisco",
  "Chicago",
  "Montreal",
  "New York",
  "Atlanta",
  "Washington",
  "London",
  "Essen",
  "Paris",
  "Milan",
  "St. Petersburg",
  "Madrid"
];

const YELLOW_CITIES = [
  "Los Angeles",
  "Mexico City",
  "Miami",
  "Bogota",
  "Lima",
  "Santiago",
  "Sao Paulo",
  "Buenos Aries",
  "Lagos",
  "Kinshasa",
  "Johannesburg",
  "Khartoum"
];

const BLACK_CITIES = [
  "Algiers",
  "Istanbul",
  "Cairo",
  "Moscow",
  "Baghdad",
  "Riyadh",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Delhi",
  "Tehran",
  "Karachi"
];

const RED_CITIES = [
  "Bangkok",
  "Beijing",
  "Ho Chi Minh City",
  "Hong Kong",
  "Jakarta",
  "Manila",
  "Osaka",
  "Seoul",
  "Shanghai",
  "Sydney",
  "Taipei",
  "Tokyo"
];

export const CITIES = [
  ...BLUE_CITIES,
  ...YELLOW_CITIES,
  ...BLACK_CITIES,
  ...RED_CITIES
];

export const CITY_TO_COLOR = (() => {
  const colors = {};
  for (const city of BLUE_CITIES) {
    colors[city] = "blue";
  }
  for (const city of YELLOW_CITIES) {
    colors[city] = "yellow";
  }
  for (const city of BLACK_CITIES) {
    colors[city] = "black";
  }
  for (const city of RED_CITIES) {
    colors[city] = "red";
  }

  return colors;
})();
