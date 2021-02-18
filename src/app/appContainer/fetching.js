// Import fetchService from '@fetchService';

export function searchCity(cityName) {
  const url = `https://nominatim.openstreetmap.org/?city=${cityName.toLowerCase()}&format=json&limit=1`;

  return fetch(url).then((response) => response.json());
}
