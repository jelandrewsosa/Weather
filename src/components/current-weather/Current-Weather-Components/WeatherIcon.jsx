const WeatherIcon = ({weatherIcon}) => {
  return (
    <img
          alt="weather"
          className="weather-icon"
          src={`icons/${weatherIcon}.png`}
        />
  );
}

export default WeatherIcon;