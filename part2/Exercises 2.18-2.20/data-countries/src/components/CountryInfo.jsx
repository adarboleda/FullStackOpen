import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const capital = country.capital?.[0];

    if (!capital) {
      setLoading(false);
      setError("No capital information available");
      return;
    }

    // Obtenemos la API key
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;

    if (!api_key) {
      setLoading(false);
      setError("Weather API key not configured");
      return;
    }

    // Construimos la URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`;

    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError(`Failed to fetch weather data: ${error.message}`);
        setLoading(false);
      });
  }, [country.capital]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Area: {country.area.toLocaleString()} km²</p>

      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages || {}).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />

      <h2>Weather in {country.capital?.[0]}</h2>
      {loading && <p>Loading weather data...</p>}
      {error && <p>Error: {error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default CountryInfo;
