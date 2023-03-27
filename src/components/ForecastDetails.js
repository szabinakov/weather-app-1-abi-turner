import React from "react";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__humidity">{humidity}%</div>
      <div className="forecast-details__wind-speed">{wind.speed}mph</div>
      <div className="forecast-details__wind-direction">{wind.direction}</div>
    </div>
  );
}

export default ForecastDetails;
