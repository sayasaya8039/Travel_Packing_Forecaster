import { useState, useEffect } from 'react';
import { TravelForm } from './components/TravelForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import { PackingList } from './components/PackingList';
import { AlertDisplay } from './components/AlertDisplay';
import { geocodeCity, getWeatherForecast } from './services/weatherApi';
import { generatePackingSuggestions, getCountryInfo } from './services/packingSuggestion';
import { getAISuggestions, checkApiHealth } from './services/geminiApi';
import type { TravelInfo, WeatherData, PackingItem, GeoLocation, CountryAlert } from './types';

const VERSION = '2.1.0';

function App() {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [packingItems, setPackingItems] = useState<PackingItem[]>([]);
  const [alerts, setAlerts] = useState<CountryAlert[]>([]);
  const [travelInfo, setTravelInfo] = useState<TravelInfo | null>(null);
  const [aiTips, setAiTips] = useState<string[]>([]);
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null);

  // APIの健全性チェック
  useEffect(() => {
    checkApiHealth().then(setApiAvailable);
  }, []);

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

      const countryInfo = getCountryInfo(info.destination);
      const { items, alerts: countryAlerts } = generatePackingSuggestions(weatherData, info);
      setPackingItems(items);
      setAlerts(countryAlerts);
      setLoading(false);

      // AI提案を非同期で取得（バックグラウンド）
      if (apiAvailable) {
        setAiLoading(true);
        try {
          const aiResponse = await getAISuggestions(info, weatherData, countryInfo);
          if (aiResponse?.success && aiResponse.data) {
            // AIからの追加アイテムをマージ
            const existingNames = new Set(items.map((i) => i.name.toLowerCase()));
            const aiItems: PackingItem[] = aiResponse.data.items
              .filter((ai) => !existingNames.has(ai.name.toLowerCase()))
              .map((ai, idx) => ({
                id: `ai-${idx}-${Date.now()}`,
                name: ai.name,
                category: mapAiCategory(ai.category),
                checked: false,
                essential: ai.priority === 'high',
                reason: ai.reason,
                warning: 'cultural' as const,
              }));

            if (aiItems.length > 0) {
              setPackingItems((prev) => [...prev, ...aiItems]);
            }

            // AIのTipsを設定
            if (aiResponse.data.tips?.length > 0) {
              setAiTips(aiResponse.data.tips);
            }
          }
        } catch (e) {
          console.error('AI suggestions failed:', e);
        } finally {
          setAiLoading(false);
        }
      }
    } catch (e) {
      setError('エラーが発生しました。もう一度お試しください。');
      console.error(e);
      setLoading(false);
    }
  };

  // AIカテゴリをアプリのカテゴリにマッピング
  const mapAiCategory = (category: string): PackingItem['category'] => {
    const mapping: Record<string, PackingItem['category']> = {
      clothing: 'clothing',
      electronics: 'electronics',
      toiletries: 'toiletries',
      documents: 'documents',
      accessories: 'accessories',
      cultural: 'cultural',
      safety: 'safety',
      other: 'other',
    };
    return mapping[category.toLowerCase()] || 'other';
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
    setAiTips([]);
    setAiLoading(false);
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

            {/* AI Tips */}
            {aiLoading && (
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="animate-spin h-5 w-5 border-2 border-purple-500 border-t-transparent rounded-full"></div>
                  <span className="text-purple-700">AIがパーソナライズされた提案を生成中...</span>
                </div>
              </div>
            )}
            {aiTips.length > 0 && !aiLoading && (
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  AIからのアドバイス
                </h3>
                <ul className="space-y-2">
                  {aiTips.map((tip, idx) => (
                    <li key={idx} className="text-sm text-purple-700 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
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
          <p>天気データ: Open-Meteo API | AI: Gemini</p>
          <p className="mt-1">v{VERSION} - AI提案・文化情報・忘れがち警告搭載</p>
          {apiAvailable === false && (
            <p className="mt-2 text-orange-500">AI機能は現在利用できません</p>
          )}
        </footer>
      </div>
    </div>
  );
}

export default App;
