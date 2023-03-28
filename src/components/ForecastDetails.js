import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        Max Temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity:{humidity}%</div>
      <div className="forecast-details__wind-speed">
        Wind speed: {wind.speed}mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
