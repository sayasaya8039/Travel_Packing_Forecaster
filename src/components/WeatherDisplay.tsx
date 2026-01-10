import type { WeatherData, GeoLocation } from '../types';

interface Props {
  weather: WeatherData[];
  location: GeoLocation;
}

export function WeatherDisplay({ weather, location }: Props) {
  if (weather.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🌍</span>
        {location.name}
        {location.country && <span className="text-gray-500 text-sm font-normal">({location.country})</span>}
        <span className="text-sm font-normal text-gray-600">の天気予報</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {weather.map((day) => (
          <div
            key={day.date}
            className="bg-white/80 backdrop-blur rounded-xl p-4 text-center hover:bg-white transition-colors"
          >
            <div className="text-xs text-gray-500 mb-1">
              {new Date(day.date).toLocaleDateString('ja-JP', {
                month: 'short',
                day: 'numeric',
                weekday: 'short',
              })}
            </div>
            <div className="text-3xl my-2">{day.icon}</div>
            <div className="text-sm text-gray-600 mb-2">{day.condition}</div>
            <div className="flex justify-center gap-2 text-sm">
              <span className="text-red-500 font-semibold">{day.tempMax}°</span>
              <span className="text-blue-500 font-semibold">{day.tempMin}°</span>
            </div>
            {day.precipitation > 0 && (
              <div className="text-xs text-blue-600 mt-1">
                💧 {day.precipitation.toFixed(1)}mm
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
