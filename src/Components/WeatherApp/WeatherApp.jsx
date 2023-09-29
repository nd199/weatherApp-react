import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloudy.png";
import drizzle from "../Assets/drizzle.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";

const WeatherApp = () => {

  const [weatherIcon, setWeatherIcon] = useState(cloud);

  let api_key = "d1ddf31d33babe2bbf5575436a1e8ad5";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidityElement = document.getElementsByClassName('humidity-percent');
    const windElement = document.getElementsByClassName('wind-speed')
    const temperatureElement = document.getElementsByClassName('weather-temp');
    const locationElement = document.getElementsByClassName('weather-location');

    humidityElement[0].innerHTML = data.main.humidity + '%';
    windElement[0].innerHTML = Math.floor(data.wind.speed) + 'KM/H';
    temperatureElement[0].innerHTML = Math.floor(data.main.temp) + "°C";
    locationElement[0].innerHTML = data.name;

    switch (data.weather[0].icon) {
      case '01d' || '01n': setWeatherIcon(clear);
        break;
      case '02d' || '02n': setWeatherIcon(cloud);
        break;
      case '02d' || '02n': setWeatherIcon(cloud);
        break;
      case '03d' || '03n': setWeatherIcon(drizzle);
        break;
      case '04d' || '04n': setWeatherIcon(drizzle);
        break;
      case '09d' || '09n': setWeatherIcon(rain);
        break;
      case '10d' || '10n': setWeatherIcon(rain);
        break;
      case '13d' || '13n': setWeatherIcon(snow);
        break;
      default: setWeatherIcon(clear);
        break;
    }

  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="New York" />
        <div className="search-icon">
          <img src={search_icon} alt="search-icon"
            onClick={search} />
        </div>
      </div>
      <div className="weather-image">
        <img src={rain} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
