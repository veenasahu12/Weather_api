import React from "react";
import "./CitySearch.css";

const CurrentWeather = ({ data }) => {
  const location = data?.location;
  
  return (
    <div>
      <div className="maindiv">
        <h1 className="heading">Current Weather</h1>
        <h1>Name : {location?.name}</h1>
        <h1>Region : {location?.region}</h1>
        <h1>Country : {location?.country}</h1>
        <h1>Lat : {location?.lat}</h1>
        <h1>Lon : {location?.lon}</h1>
        <h1>Tz_id : {location?.tz_id}</h1>
        <h1>Localtime : {location?.localtime}</h1>
      </div>
    </div>
  );
};

export default CurrentWeather;
