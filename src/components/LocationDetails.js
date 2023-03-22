import React from "react";

function LocationDetails(location) {
  const { city, country } = location;
  return <h1>{`${city}, ${country}`}</h1>;
}

export default LocationDetails;
