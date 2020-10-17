import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';


const WeatherInfoBlock = () => {

  const cityName = useSelector(state => state.weather.cityName);
  const weatherDetails = useSelector(state => state.weather.weatherDetails);
  const Error = useSelector(state => state.weather.error);
  const Loading = useSelector(state => state.weather.loading);
  const convertTemp = (temp) => {
    return Math.floor(temp - 273.5)
  }
  return <div className="weather-block">
    {!Loading ? <div className="weather-city">
      {!Error && cityName && <div className="city-name">The weather in <span>{cityName}</span>:</div>}
      <div className="temp-middle">
        <div className="temp-block">
          {weatherDetails.weather && <img alt=""
            src={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} />}
          {weatherDetails.main && <p>{convertTemp(weatherDetails.main.temp)} <sup>o</sup></p>}
        </div>
        <h2>{weatherDetails.weather && weatherDetails.weather[0].description}</h2>
      </div>
    </div> : <div className="loader-block">
        <img alt="" src={require('../asset/loader.gif')} />
      </div>}
  </div>

}

export default WeatherInfoBlock;