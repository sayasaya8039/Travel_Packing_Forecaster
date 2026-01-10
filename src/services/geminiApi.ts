import type { TravelInfo, WeatherData } from '../types';
import type { CountryInfo } from '../data/countryData';

const API_BASE_URL = 'https://travel-packing-api.sayasaya.workers.dev';

interface GeminiSuggestion {
  name: string;
  reason: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

interface GeminiResponse {
  success: boolean;
  data: {
    items: GeminiSuggestion[];
    tips: string[];
  };
  destination: string;
  purpose: string;
}

export async function getAISuggestions(
  travelInfo: TravelInfo,
  weather: WeatherData[],
  apiKey: string,
  countryInfo?: CountryInfo
): Promise<GeminiResponse | null> {
  if (!apiKey) {
    return null;
  }

  try {
    // 天気データを集計
    const avgTempMax = weather.reduce((sum, w) => sum + w.tempMax, 0) / weather.length;
    const avgTempMin = weather.reduce((sum, w) => sum + w.tempMin, 0) / weather.length;
    const avgHumidity = weather.reduce((sum, w) => sum + w.humidity, 0) / weather.length;
    const hasRain = weather.some((w) => w.precipitation > 5);

    const requestBody = {
      destination: travelInfo.destination,
      startDate: travelInfo.startDate,
      endDate: travelInfo.endDate,
      purpose: travelInfo.purpose,
      weather: {
        avgTempMax: Math.round(avgTempMax),
        avgTempMin: Math.round(avgTempMin),
        hasRain,
        humidity: Math.round(avgHumidity),
      },
      country: countryInfo
        ? {
            name: countryInfo.nameJa,
            plugTypes: countryInfo.plugTypes,
            voltage: countryInfo.voltage,
            culturalNotes: countryInfo.culturalNotes,
          }
        : undefined,
    };

    const response = await fetch(`${API_BASE_URL}/api/suggest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error('API error:', response.status);
      return null;
    }

    const data = await response.json();

    if (data.error) {
      console.error('API returned error:', data.error);
      return null;
    }

    return data as GeminiResponse;
  } catch (error) {
    console.error('Failed to get AI suggestions:', error);
    return null;
  }
}

// ヘルスチェック
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const data = await response.json();
    return data.status === 'ok';
  } catch {
    return false;
  }
}
