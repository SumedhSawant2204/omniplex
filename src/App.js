import React, { useState } from "react";
import Login from "./components/Login";
import WeatherInfo from "./components/WeatherInfo";

function App() {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <div>
            <Login setWeatherData={setWeatherData} />
            {weatherData && <WeatherInfo />}
        </div>
    );
}

export default App;
