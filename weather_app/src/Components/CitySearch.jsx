import React, { useState } from "react";
import "./CitySearch.css";
import image from "../Image/image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { weatherdata } from "../Redux/action";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const CitySearch = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((store) => store.getweather);
  // console.log(data)

  const handleSubmit = () => {
    // console.log(weather,city);
    dispatch(weatherdata({ city, weather }));
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 640,
      }}
    >
      <div className="search-loaction">
        <input
          type="text"
          name="city"
          className="searchbar"
          placeholder="What city?"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="icon" onClick={handleSubmit}>
          🔍
        </button>
      </div>

      <select className="dropdown" onChange={(e) => setWeather(e.target.value)}>
        <option>Select</option>
        <option value="current">weatherapi current</option>
        <option value="forecast">weatherapi forecast</option>
      </select>

      {weather === "current" && <CurrentWeather data={data?.data} />}
      {weather === "forecast" && <ForecastWeather data={data?.data?.forecast} />}
    </div>
  );
};

export default CitySearch;
