import type { CountryAlert } from '../types';

interface Props {
  alerts: CountryAlert[];
}

const severityStyles = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'ℹ️',
    text: 'text-blue-800',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: '⚠️',
    text: 'text-amber-800',
  },
  critical: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: '🚨',
    text: 'text-red-800',
  },
};

const typeLabels = {
  plug: '🔌 電源',
  voltage: '⚡ 電圧',
  cultural: '🎌 文化',
  visa: '🛂 ビザ',
  safety: '🛡️ 安全',
};

export function AlertDisplay({ alerts }: Props) {
  if (alerts.length === 0) return null;

  // アラートをseverityでグループ化
  const criticalAlerts = alerts.filter((a) => a.severity === 'critical');
  const warningAlerts = alerts.filter((a) => a.severity === 'warning');
  const infoAlerts = alerts.filter((a) => a.severity === 'info');

  const sortedAlerts = [...criticalAlerts, ...warningAlerts, ...infoAlerts];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <span>📋</span>
        旅行先の注意事項
      </h3>
      <div className="space-y-2">
        {sortedAlerts.map((alert, index) => {
          const style = severityStyles[alert.severity];
          const typeLabel = typeLabels[alert.type];

          return (
            <div
              key={index}
              className={`p-3 rounded-lg border ${style.bg} ${style.border}`}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">{style.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${style.bg} ${style.text} font-medium border ${style.border}`}>
                      {typeLabel}
                    </span>
                    <span className={`font-medium ${style.text}`}>
                      {alert.title}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${style.text} opacity-90`}>
                    {alert.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
