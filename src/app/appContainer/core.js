// TODO: business logic must be tested before coding
export function entityAdapter({ entityName, entityIdentifier, data }) {
  const { longitude, latitude } = extractCoordinate(data);
  const creationDate = Date.now();

  return {
    name: entityName,
    identifier: entityIdentifier,
    L: longitude,
    l: latitude,
    creationDate,
  };
}

export function extractCoordinate(data) {
  // Use the first response because response contains multiple possiblities
  const firstCityChoice = data[0];
  const { lon, lat } = firstCityChoice;

  return {
    longitude: formatCoordinateToFloatRepresentation(lon),
    latitude: formatCoordinateToFloatRepresentation(lat),
  };
}

function formatCoordinateToFloatRepresentation(string) {
  return parseFloat(string);
}
