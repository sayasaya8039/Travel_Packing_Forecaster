import { useState } from 'react';
import { TravelForm } from './components/TravelForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import { PackingList } from './components/PackingList';
import { AlertDisplay } from './components/AlertDisplay';
import { geocodeCity, getWeatherForecast } from './services/weatherApi';
import { generatePackingSuggestions } from './services/packingSuggestion';
import type { TravelInfo, WeatherData, PackingItem, GeoLocation, CountryAlert } from './types';

const VERSION = '2.0.0';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [packingItems, setPackingItems] = useState<PackingItem[]>([]);
  const [alerts, setAlerts] = useState<CountryAlert[]>([]);
  const [travelInfo, setTravelInfo] = useState<TravelInfo | null>(null);

  const handleSubmit = async (info: TravelInfo) => {
    setLoading(true);
    setError(null);

    try {
      const geo = await geocodeCity(info.destination);
      if (!geo) {
        setError(`"${info.destination}" が見つかりませんでした。都市名を確認してください。`);
        setLoading(false);
        return;
      }

      setLocation(geo);
      const weatherData = await getWeatherForecast(geo.lat, geo.lon, info.startDate, info.endDate);

      if (weatherData.length === 0) {
        setError('天気予報の取得に失敗しました。日程を確認してください。');
        setLoading(false);
        return;
      }

      setWeather(weatherData);
      setTravelInfo(info);

      const { items, alerts: countryAlerts } = generatePackingSuggestions(weatherData, info);
      setPackingItems(items);
      setAlerts(countryAlerts);
    } catch (e) {
      setError('エラーが発生しました。もう一度お試しください。');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleItem = (id: string) => {
    setPackingItems((items) =>
      items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const removeItem = (id: string) => {
    setPackingItems((items) => items.filter((item) => item.id !== id));
  };

  const addItem = (name: string, category: PackingItem['category']) => {
    const newItem: PackingItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      category,
      checked: false,
      essential: false,
    };
    setPackingItems((items) => [...items, newItem]);
  };

  const reset = () => {
    setWeather([]);
    setLocation(null);
    setPackingItems([]);
    setAlerts([]);
    setTravelInfo(null);
    setError(null);
  };

  const purposeLabels: Record<TravelInfo['purpose'], string> = {
    leisure: '観光',
    business: '出張',
    adventure: 'アクティブ',
    date: 'デート',
    camping: 'キャンプ',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <span className="text-4xl">🧳</span>
            旅行パッキング予報士
          </h1>
          <p className="text-gray-600">
            天気予報×文化情報で「忘れがちな物」まで完全カバー
          </p>
          <p className="text-xs text-gray-400 mt-2">v{VERSION}</p>
        </header>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-2">
            <span>⚠️</span>
            {error}
          </div>
        )}

        {/* Main content */}
        {packingItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <TravelForm onSubmit={handleSubmit} loading={loading} />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Trip summary */}
            {travelInfo && (
              <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✈️</span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {location?.name} への旅行
                      <span className="ml-2 text-sm font-normal text-gray-500">
                        ({purposeLabels[travelInfo.purpose]})
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(travelInfo.startDate).toLocaleDateString('ja-JP')} 〜{' '}
                      {new Date(travelInfo.endDate).toLocaleDateString('ja-JP')}
                    </div>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  やり直す
                </button>
              </div>
            )}

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <AlertDisplay alerts={alerts} />
              </div>
            )}

            {/* Weather */}
            {location && <WeatherDisplay weather={weather} location={location} />}

            {/* Packing list */}
            <PackingList
              items={packingItems}
              onToggle={toggleItem}
              onRemove={removeItem}
              onAdd={addItem}
            />
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>天気データ: Open-Meteo API</p>
          <p className="mt-1">v{VERSION} - 文化情報・忘れがち警告搭載</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
