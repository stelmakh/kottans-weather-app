import {useMemo, useCallback, useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import {WeatherService} from './services'

const apiKey = '01072010da2ad65c37e5d484234a365f';

function App() {
  const weatherService = useMemo(() => new WeatherService(apiKey), []);

  const [weatherData, setWeatherData] = useState()

  const onSearch = useCallback(
    (location) => 
      weatherService
        .getWeatherForLocation(location)
        .then(result => setWeatherData(result))
        .catch(err => console.error(err)),
    [weatherService]
  )

  return (
    <div className="App">
      <SearchBar onSearch={onSearch}/>

      {weatherData ? <WeatherCard weatherData={weatherData}/> : null}
    </div>
  );
}

export default App;
