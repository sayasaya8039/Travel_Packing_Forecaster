export interface TravelInfo {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: 'business' | 'leisure' | 'adventure';
}

export interface WeatherData {
  date: string;
  tempMax: number;
  tempMin: number;
  condition: string;
  humidity: number;
  precipitation: number;
  icon: string;
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'clothing' | 'accessories' | 'toiletries' | 'electronics' | 'documents' | 'other';
  checked: boolean;
  essential: boolean;
  reason?: string;
}

export interface GeoLocation {
  lat: number;
  lon: number;
  name: string;
  country: string;
}
