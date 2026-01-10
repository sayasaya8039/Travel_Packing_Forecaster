export interface TravelInfo {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: 'business' | 'leisure' | 'adventure' | 'date' | 'camping';
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
  category: 'clothing' | 'accessories' | 'toiletries' | 'electronics' | 'documents' | 'other' | 'cultural' | 'safety';
  checked: boolean;
  essential: boolean;
  reason?: string;
  warning?: 'forgot-often' | 'cultural' | 'safety' | 'weather';
}

export interface GeoLocation {
  lat: number;
  lon: number;
  name: string;
  country: string;
}

export interface CountryAlert {
  type: 'plug' | 'voltage' | 'cultural' | 'visa' | 'safety';
  title: string;
  description: string;
  severity: 'info' | 'warning' | 'critical';
}
