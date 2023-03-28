import { WeatherData, WeatherService } from "./weather-service";

export class OpenWeatherMapService implements WeatherService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getWeatherForLocation(location: string): Promise<WeatherData | undefined> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      return this.getWeatherDataObject(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  private getWeatherDataObject(weatherResponse: any): WeatherData {
    const { name, weather, main } = weatherResponse;
    const { temp, temp_min, temp_max } = main;
    const [weatherInfo] = weather;
    const { main: condition, description, icon } = weatherInfo;

    return {
      name,
      condition,
      description,
      temp: Math.ceil(temp),
      temp_min: Math.ceil(temp_min),
      temp_max: Math.ceil(temp_max),
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`
    }
  }
}
