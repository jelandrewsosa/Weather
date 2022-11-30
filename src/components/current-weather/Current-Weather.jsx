import "./Current-Weather.css";
import City from "./Current-Weather-Components/City";
import WeatherDescription from "./Current-Weather-Components/WeatherDescription";
import WeatherIcon from "./Current-Weather-Components/WeatherIcon";
import Temperature from "./Current-Weather-Components/Temperature";
import FeelsLike from "./Current-Weather-Components/FeelsLike";
import Wind from "./Current-Weather-Components/Wind";
import Humidity from "./Current-Weather-Components/Humidity";
import Pressure from "./Current-Weather-Components/Pressure";
import CloudAreaFraction from "./Current-Weather-Components/CloudAreaFraction";
import WindFromDirection from "./Current-Weather-Components/WindFromDirection";

const CurrentWeather = ({data}) => {
  return (
    
    <div className="weather">
      <div className="top">
        <div>
          <City city={data.city}/>
          <WeatherDescription weatherDescription={data.weather[0].description}/>
        </div>
        <WeatherIcon weatherIcon={data.weather[0].icon}/>
      </div>
      <div className="bottom">
        <Temperature temp={Math.round(data.main.temp)}/>
        <div className="details">
          <div className="parameter-row">
            <FeelsLike feel={Math.round(data.main.feels_like)} />
          </div>
          <div className="parameter-row">
            <Wind wind={data.wind.speed}/>
          </div>
          <div className="parameter-row">
            <WindFromDirection windFromDirection={data.wind.deg}/>
          </div>
          <div className="parameter-row">
            <Humidity humidity={data.main.humidity}/>
          </div>
          <div className="parameter-row">
            <Pressure pressure={data.main.pressure}/>
          </div>
          <div className="parameter-row">
            <CloudAreaFraction cloudAreaFraction={data.clouds.all}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
