import type { WeatherData, GeoLocation } from '../types';

const OPEN_METEO_BASE = 'https://api.open-meteo.com/v1';
const GEOCODING_BASE = 'https://geocoding-api.open-meteo.com/v1';

export async function geocodeCity(city: string): Promise<GeoLocation | null> {
  try {
    const res = await fetch(
      `${GEOCODING_BASE}/search?name=${encodeURIComponent(city)}&count=1&language=ja&format=json`
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const r = data.results[0];
      return {
        lat: r.latitude,
        lon: r.longitude,
        name: r.name,
        country: r.country || '',
      };
    }
    return null;
  } catch (e) {
    console.error('Geocoding error:', e);
    return null;
  }
}

export async function getWeatherForecast(
  lat: number,
  lon: number,
  startDate: string,
  endDate: string
): Promise<WeatherData[]> {
  try {
    const url = `${OPEN_METEO_BASE}/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,relative_humidity_2m_mean,weather_code&start_date=${startDate}&end_date=${endDate}&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.daily) return [];

    const weatherCodes: Record<number, { condition: string; icon: string }> = {
      0: { condition: '快晴', icon: '☀️' },
      1: { condition: '晴れ', icon: '🌤️' },
      2: { condition: '曇り', icon: '⛅' },
      3: { condition: '曇天', icon: '☁️' },
      45: { condition: '霧', icon: '🌫️' },
      48: { condition: '霧氷', icon: '🌫️' },
      51: { condition: '小雨', icon: '🌧️' },
      53: { condition: '雨', icon: '🌧️' },
      55: { condition: '大雨', icon: '🌧️' },
      61: { condition: '小雨', icon: '🌧️' },
      63: { condition: '雨', icon: '🌧️' },
      65: { condition: '大雨', icon: '🌧️' },
      71: { condition: '小雪', icon: '🌨️' },
      73: { condition: '雪', icon: '🌨️' },
      75: { condition: '大雪', icon: '🌨️' },
      77: { condition: '霧雪', icon: '🌨️' },
      80: { condition: 'にわか雨', icon: '🌦️' },
      81: { condition: 'にわか雨', icon: '🌦️' },
      82: { condition: '激しい雨', icon: '⛈️' },
      85: { condition: 'にわか雪', icon: '🌨️' },
      86: { condition: 'にわか雪', icon: '🌨️' },
      95: { condition: '雷雨', icon: '⛈️' },
      96: { condition: '雷雨(雹)', icon: '⛈️' },
      99: { condition: '雷雨(雹)', icon: '⛈️' },
    };

    return data.daily.time.map((date: string, i: number) => {
      const code = data.daily.weather_code[i];
      const weather = weatherCodes[code] || { condition: '不明', icon: '❓' };
      return {
        date,
        tempMax: Math.round(data.daily.temperature_2m_max[i]),
        tempMin: Math.round(data.daily.temperature_2m_min[i]),
        condition: weather.condition,
        humidity: Math.round(data.daily.relative_humidity_2m_mean?.[i] || 0),
        precipitation: data.daily.precipitation_sum[i] || 0,
        icon: weather.icon,
      };
    });
  } catch (e) {
    console.error('Weather API error:', e);
    return [];
  }
}
