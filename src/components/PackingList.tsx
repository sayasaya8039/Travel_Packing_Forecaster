import { useState } from 'react';
import type { PackingItem } from '../types';

interface Props {
  items: PackingItem[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onAdd: (name: string, category: PackingItem['category']) => void;
}

const categoryLabels: Record<PackingItem['category'], { label: string; icon: string }> = {
  clothing: { label: '衣類', icon: '👕' },
  accessories: { label: 'アクセサリー', icon: '🎒' },
  toiletries: { label: '洗面用具', icon: '🧴' },
  electronics: { label: '電子機器', icon: '📱' },
  documents: { label: '書類', icon: '📄' },
  cultural: { label: '文化対応', icon: '🎌' },
  safety: { label: '安全・救急', icon: '🛡️' },
  other: { label: 'その他', icon: '📦' },
};

const warningBadges: Record<string, { label: string; className: string }> = {
  'forgot-often': { label: '忘れがち', className: 'bg-orange-100 text-orange-600' },
  cultural: { label: '文化', className: 'bg-purple-100 text-purple-600' },
  safety: { label: '安全', className: 'bg-red-100 text-red-600' },
  weather: { label: '天気', className: 'bg-sky-100 text-sky-600' },
};

export function PackingList({ items, onToggle, onRemove, onAdd }: Props) {
  const [newItem, setNewItem] = useState('');
  const [newCategory, setNewCategory] = useState<PackingItem['category']>('other');
  const [showAddForm, setShowAddForm] = useState(false);

  const categories = Object.keys(categoryLabels) as PackingItem['category'][];
  const checkedCount = items.filter((i) => i.checked).length;
  const progress = items.length > 0 ? (checkedCount / items.length) * 100 : 0;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      onAdd(newItem.trim(), newCategory);
      setNewItem('');
      setShowAddForm(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
          <span>🧳</span> パッキングリスト
        </h2>
        <div className="text-sm text-gray-500">
          {checkedCount} / {items.length} 完了
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4 sm:mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Items by category */}
      <div className="space-y-6">
        {categories.map((cat) => {
          const catItems = items.filter((i) => i.category === cat);
          if (catItems.length === 0) return null;

          return (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                <span>{categoryLabels[cat].icon}</span>
                {categoryLabels[cat].label}
              </h3>
              <div className="space-y-2">
                {catItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      item.checked
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => onToggle(item.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        item.checked
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-400'
                      }`}
                    >
                      {item.checked && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <div className="flex-1">
                      <span
                        className={`block ${
                          item.checked ? 'text-gray-400 line-through' : 'text-gray-800'
                        }`}
                      >
                        {item.name}
                        {item.essential && !item.checked && (
                          <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                            必須
                          </span>
                        )}
                        {item.warning && !item.checked && warningBadges[item.warning] && (
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${warningBadges[item.warning].className}`}>
                            {warningBadges[item.warning].label}
                          </span>
                        )}
                      </span>
                      {item.reason && !item.checked && (
                        <span className="text-xs text-gray-500">{item.reason}</span>
                      )}
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add new item */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        {showAddForm ? (
          <form onSubmit={handleAdd} className="space-y-3">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="アイテム名を入力..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setNewCategory(cat)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    newCategory === cat
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {categoryLabels[cat].icon} {categoryLabels[cat].label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              >
                追加
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setNewItem('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-all"
          >
            + アイテムを追加
          </button>
        )}
      </div>
    </div>
  );
}
