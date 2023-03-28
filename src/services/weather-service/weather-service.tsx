export interface WeatherData {
  name: string;
  condition: string;
  description: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  iconUrl: string;
}

export interface WeatherService {
  getWeatherForLocation(location: string): Promise<WeatherData | undefined>
}