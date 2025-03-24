import { create } from 'zustand';
import axios from 'axios';

const API_KEY = '13f1165fcdfc48cf809163145240809';
const BASE_URL = 'https://api.weatherapi.com/v1';

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
  };
}

interface WeatherState {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: false,
  error: null,

  fetchWeather: async (city: string) => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
          key: API_KEY,
          q: city,
          aqi: 'no',
        },
      });

      set({ weather: response.data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch weather data', loading: false });
    }
  },
}));
