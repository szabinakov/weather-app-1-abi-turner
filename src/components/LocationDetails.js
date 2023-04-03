import React from "react";
import "../styles/ForecastSummaries.css";

function LocationDetails(location) {
  const { city, country, errorMessage } = location;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
}

export default LocationDetails;

LocationDetails.defaultProps = {
  errorMessage: "",
};
