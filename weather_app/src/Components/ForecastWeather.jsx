import React from "react";
import "./CitySearch.css";

const ForecastWeather = ({ data }) => {
  console.log(data);
  const forecast = data?.forecastday?.[0]?.astro;
  return (
    <div>
      <div className="maindiv">
        <h1 className="heading">Forecast Weather</h1>
        <h1>Sunrise : {forecast?.sunrise}</h1>
        <h1>Sunset : {forecast?.sunset}</h1>
        <h1>Moonrise : {forecast?.moonrise}</h1>
        <h1>Moonset : {forecast?.moonset}</h1>
        <h1>Moon_phase : {forecast?.moon_phase}</h1>
        <h1>Moon_illumination : {forecast?.moon_illumination}</h1>
      </div>
    </div>
  );
};

export default ForecastWeather;
