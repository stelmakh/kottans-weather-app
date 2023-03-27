import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
  const {
    name,
    description,
    temp,
    temp_min,
    temp_max,
    iconUrl,
  } = weatherData;

  return (
    <div className="weather-card">
    <div className="weather-card-header">
      <h2>{name}</h2>
    </div>
    <div className="weather-card-body">
      <div className="weather-card-left">
        <img src={iconUrl}/>
        <p>{description}</p>
      </div>
      <div className="weather-card-right">
        <p>Current: {temp}°</p>
        <p>Min: {temp_min}°</p>
        <p>Max: {temp_max}°</p>
      </div>
    </div>
    </div>
  );
};


export default WeatherCard;
