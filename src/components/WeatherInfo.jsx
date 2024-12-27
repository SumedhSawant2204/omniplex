import React, { useState } from "react";
import axios from "axios";

const WeatherInfo = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
                    "X-RapidAPI-Key": apiKey,
                },
            });
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    return (
        <div className="weather-container">
            <h2>Check the Weather</h2>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div className="weather-info">
                    <h3>{weather.location.name}</h3>
                    <p>{weather.current.condition.text}</p>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                </div>
            )}
        </div>
    );
};

export default WeatherInfo;
