import { React, useState } from "react";
import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/Current-Weather";
import { WEATHER_API_URL} from "./components/Api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const getWeatherData = (currentWeather) => {
      const METER_PER_SECOND_TO_KM_PER_HR = 3.6;
      currentWeather.wind.speed = Math.round(currentWeather.wind.speed * METER_PER_SECOND_TO_KM_PER_HR);

      return currentWeather;
    };

    const getWeatherResponse = async () => {
      const response = await fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_SECRET_KEY}&units=metric`
      );

      return await response.json();
    }

    const setWeatherResponse = async () => {
      const weatherResponse = await getWeatherResponse();
      const weatherData = getWeatherData(weatherResponse);
      setCurrentWeather({ city: searchData.label, ...weatherData });
    };

    setWeatherResponse();

  };

  console.log(currentWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
