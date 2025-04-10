import React from "react";

const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <p>
        <strong>Temperature:</strong> {weather.main.temp} °C
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>
        <strong>Wind:</strong> {weather.wind.speed} m/s
      </p>
    </div>
  );
};

export default WeatherInfo;
