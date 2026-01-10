import type { WeatherData, PackingItem, TravelInfo, CountryAlert } from '../types';
import { guessCountryFromCity, plugTypeDescriptions } from '../data/countryData';
import type { CountryInfo } from '../data/countryData';

// 忘れがちなアイテムリスト
const forgottenItems: Record<string, { name: string; category: PackingItem['category']; reason: string }> = {
  charger: { name: '充電器', category: 'electronics', reason: 'スマホの充電切れは旅行の大敵' },
  adapter: { name: '変換プラグ', category: 'electronics', reason: '国によってコンセント形状が異なる' },
  medicines: { name: '常備薬', category: 'toiletries', reason: '海外で同じ薬を入手するのは難しい' },
  toothbrush: { name: '歯ブラシ・歯磨き粉', category: 'toiletries', reason: 'ホテルにないことも多い' },
  underwear: { name: '予備の下着', category: 'clothing', reason: '日数+1枚が安心' },
  passport_copy: { name: 'パスポートのコピー', category: 'documents', reason: '紛失時の再発行に必要' },
  insurance: { name: '海外旅行保険証', category: 'documents', reason: '医療費が高額な国も多い' },
  cards: { name: 'クレジットカード2枚以上', category: 'documents', reason: '1枚が使えなくなった時の予備' },
  cash: { name: '現地通貨（少額）', category: 'documents', reason: '到着直後のタクシーや軽食用' },
  powerbank: { name: 'モバイルバッテリー', category: 'electronics', reason: '外出中の充電切れ防止' },
  earphones: { name: 'イヤホン', category: 'electronics', reason: '飛行機や移動中の必需品' },
};

// 目的別アイテム
const purposeItems: Record<TravelInfo['purpose'], { name: string; category: PackingItem['category']; reason: string }[]> = {
  business: [
    { name: 'スーツ/フォーマルウェア', category: 'clothing', reason: 'ビジネスシーンに必須' },
    { name: '革靴', category: 'clothing', reason: 'ビジネスシーンに必須' },
    { name: '名刺', category: 'documents', reason: '海外でも名刺交換は重要' },
    { name: 'ノートPC', category: 'electronics', reason: '仕事用' },
    { name: 'USBメモリ/ケーブル', category: 'electronics', reason: 'プレゼン用' },
    { name: 'ネクタイ', category: 'clothing', reason: '複数持っていくと安心' },
  ],
  leisure: [
    { name: 'カメラ', category: 'electronics', reason: '思い出を残す' },
    { name: 'ガイドブック', category: 'other', reason: 'オフラインでも使える' },
    { name: '歩きやすい靴', category: 'clothing', reason: '観光は歩き回る' },
    { name: 'エコバッグ', category: 'accessories', reason: 'お土産を入れるのに便利' },
    { name: 'Wi-Fiルーター/SIMカード', category: 'electronics', reason: '現地でのネット接続' },
  ],
  adventure: [
    { name: 'トレッキングシューズ', category: 'clothing', reason: 'アウトドア活動に必須' },
    { name: '速乾性ウェア', category: 'clothing', reason: '汗をかいても快適' },
    { name: 'レインウェア', category: 'clothing', reason: '急な天候変化に対応' },
    { name: 'ヘッドライト', category: 'accessories', reason: '両手が空いて便利' },
    { name: '救急キット', category: 'safety', reason: '怪我の応急処置に' },
    { name: '虫除けスプレー', category: 'toiletries', reason: '自然の中では必須' },
    { name: '日焼け止め', category: 'toiletries', reason: '野外活動には必須' },
  ],
  date: [
    { name: 'おしゃれな服', category: 'clothing', reason: '特別な日にふさわしく' },
    { name: 'アクセサリー', category: 'accessories', reason: 'コーディネートのアクセントに' },
    { name: '香水/デオドラント', category: 'toiletries', reason: '清潔感は大切' },
    { name: 'ミニ鏡', category: 'accessories', reason: '身だしなみチェック用' },
    { name: 'リップクリーム/口紅', category: 'toiletries', reason: '乾燥対策・メイク直し' },
    { name: 'カメラ', category: 'electronics', reason: '二人の思い出を残す' },
  ],
  camping: [
    { name: 'テント', category: 'other', reason: 'キャンプの必需品' },
    { name: '寝袋', category: 'other', reason: '快適な睡眠のために' },
    { name: 'マット', category: 'other', reason: '地面の冷たさや凹凸から守る' },
    { name: 'ランタン/懐中電灯', category: 'electronics', reason: '夜間の照明' },
    { name: '調理器具', category: 'other', reason: 'キャンプ飯に必須' },
    { name: 'クーラーボックス', category: 'other', reason: '食材の保管' },
    { name: '虫除け', category: 'toiletries', reason: '自然の中では必須' },
    { name: '救急キット', category: 'safety', reason: '怪我の応急処置に' },
    { name: 'タープ', category: 'other', reason: '日差しや雨から守る' },
    { name: '着火道具', category: 'other', reason: '火を起こすために' },
  ],
};

// 気候別アイテム
function getWeatherBasedItems(weatherData: WeatherData[]): PackingItem[] {
  const items: PackingItem[] = [];
  const avgTempMax = weatherData.reduce((sum, w) => sum + w.tempMax, 0) / weatherData.length;
  const hasRain = weatherData.some((w) => w.precipitation > 5);
  const heavyRain = weatherData.some((w) => w.precipitation > 20);
  const highHumidity = weatherData.some((w) => w.humidity > 80);

  // 気温に基づく衣類
  if (avgTempMax > 28) {
    items.push(
      { id: 'tshirt', name: 'Tシャツ/半袖', category: 'clothing', checked: false, essential: true, reason: '暑い日が予想されます', warning: 'weather' },
      { id: 'shorts', name: 'ショートパンツ/スカート', category: 'clothing', checked: false, essential: false, reason: '暑さ対策' },
      { id: 'sunscreen', name: '日焼け止め', category: 'toiletries', checked: false, essential: true, reason: '紫外線対策必須', warning: 'weather' },
      { id: 'sunglasses', name: 'サングラス', category: 'accessories', checked: false, essential: true, reason: '日差しが強い' },
      { id: 'hat', name: '帽子', category: 'accessories', checked: false, essential: true, reason: '日射病予防' }
    );
  } else if (avgTempMax > 20) {
    items.push(
      { id: 'light-jacket', name: '薄手のジャケット', category: 'clothing', checked: false, essential: true, reason: '朝晩は涼しくなる可能性' },
      { id: 'longsleeve', name: '長袖シャツ', category: 'clothing', checked: false, essential: true, reason: '過ごしやすい気温' },
      { id: 'pants', name: '長ズボン', category: 'clothing', checked: false, essential: true, reason: '汎用的に使える' }
    );
  } else if (avgTempMax > 10) {
    items.push(
      { id: 'jacket', name: 'ジャケット/アウター', category: 'clothing', checked: false, essential: true, reason: '肌寒い日があります', warning: 'weather' },
      { id: 'sweater', name: 'セーター/パーカー', category: 'clothing', checked: false, essential: true, reason: '重ね着で調節' },
      { id: 'longsleeve', name: '長袖シャツ', category: 'clothing', checked: false, essential: true, reason: '気温が低め' }
    );
  } else {
    items.push(
      { id: 'winter-coat', name: '冬用コート', category: 'clothing', checked: false, essential: true, reason: '寒さ対策必須', warning: 'weather' },
      { id: 'sweater', name: 'セーター/フリース', category: 'clothing', checked: false, essential: true, reason: '防寒用' },
      { id: 'thermal', name: 'ヒートテック/インナー', category: 'clothing', checked: false, essential: true, reason: '寒い日が予想されます' },
      { id: 'gloves', name: '手袋', category: 'accessories', checked: false, essential: true, reason: '防寒用' },
      { id: 'scarf', name: 'マフラー', category: 'accessories', checked: false, essential: false, reason: '首元の防寒' },
      { id: 'warmhat', name: 'ニット帽', category: 'accessories', checked: false, essential: false, reason: '頭部の防寒' }
    );
  }

  // 雨対策
  if (hasRain) {
    items.push(
      { id: 'umbrella', name: '折りたたみ傘', category: 'accessories', checked: false, essential: true, reason: '雨予報あり', warning: 'weather' }
    );
  }
  if (heavyRain) {
    items.push(
      { id: 'raincoat', name: 'レインコート', category: 'clothing', checked: false, essential: true, reason: '大雨予報あり', warning: 'weather' },
      { id: 'waterproof-bag', name: '防水バッグ', category: 'accessories', checked: false, essential: false, reason: '貴重品を守る' }
    );
  }

  // 湿度対策
  if (highHumidity) {
    items.push(
      { id: 'antiperspirant', name: '制汗剤', category: 'toiletries', checked: false, essential: false, reason: '湿度が高い予報' },
      { id: 'quick-dry', name: '速乾性の服', category: 'clothing', checked: false, essential: false, reason: '汗対策' }
    );
  }

  return items;
}

// 国情報に基づくアイテムとアラート
function getCountryBasedItems(countryInfo: CountryInfo | undefined): { items: PackingItem[]; alerts: CountryAlert[] } {
  const items: PackingItem[] = [];
  const alerts: CountryAlert[] = [];

  if (!countryInfo) {
    return { items, alerts };
  }

  // 電圧・プラグ関連
  if (countryInfo.code !== 'JP') {
    const plugNames = countryInfo.plugTypes.map(p => plugTypeDescriptions[p] || p).join('、');

    if (!countryInfo.plugTypes.includes('A')) {
      items.push({
        id: 'adapter',
        name: `変換プラグ（${countryInfo.plugTypes.join('/')}タイプ）`,
        category: 'electronics',
        checked: false,
        essential: true,
        reason: `${countryInfo.nameJa}では${plugNames}が必要`,
        warning: 'forgot-often'
      });

      alerts.push({
        type: 'plug',
        title: '変換プラグが必要',
        description: `${countryInfo.nameJa}のコンセントは${plugNames}です。日本の機器を使うには変換プラグが必要です。`,
        severity: 'warning'
      });
    }

    if (countryInfo.voltage >= 200) {
      alerts.push({
        type: 'voltage',
        title: '電圧注意',
        description: `${countryInfo.nameJa}の電圧は${countryInfo.voltage}Vです。日本の100V機器を使う場合は、対応機器か確認するか変圧器が必要です。`,
        severity: 'warning'
      });
    }
  }

  // 国別推奨アイテム
  countryInfo.commonItems.forEach((item, index) => {
    if (!item.includes('変換プラグ')) { // 変換プラグは上で追加済み
      items.push({
        id: `country-item-${index}`,
        name: item,
        category: 'other',
        checked: false,
        essential: false,
        reason: `${countryInfo.nameJa}で役立つ`,
        warning: 'cultural'
      });
    }
  });

  // 文化的注意点をアラートに
  countryInfo.culturalNotes.forEach((note) => {
    alerts.push({
      type: 'cultural',
      title: '文化的な注意点',
      description: note,
      severity: 'info'
    });
  });

  return { items, alerts };
}

// 忘れがちアイテムを追加
function getForgottenItems(): PackingItem[] {
  return Object.entries(forgottenItems).map(([id, item]) => ({
    id: `forgotten-${id}`,
    name: item.name,
    category: item.category,
    checked: false,
    essential: true,
    reason: item.reason,
    warning: 'forgot-often' as const
  }));
}

// メイン関数
export function generatePackingSuggestions(
  weatherData: WeatherData[],
  travelInfo: TravelInfo
): { items: PackingItem[]; alerts: CountryAlert[] } {
  const items: PackingItem[] = [];
  const alerts: CountryAlert[] = [];

  // 1. 天気に基づくアイテム
  items.push(...getWeatherBasedItems(weatherData));

  // 2. 国情報に基づくアイテム
  const countryInfo = guessCountryFromCity(travelInfo.destination);
  const { items: countryItems, alerts: countryAlerts } = getCountryBasedItems(countryInfo);
  items.push(...countryItems);
  alerts.push(...countryAlerts);

  // 3. 目的別アイテム
  const purposeItemsList = purposeItems[travelInfo.purpose] || [];
  purposeItemsList.forEach((item, index) => {
    items.push({
      id: `purpose-${travelInfo.purpose}-${index}`,
      name: item.name,
      category: item.category,
      checked: false,
      essential: false,
      reason: item.reason
    });
  });

  // 4. 忘れがちアイテム（重複排除）
  const existingNames = new Set(items.map(i => i.name));
  getForgottenItems().forEach(item => {
    if (!existingNames.has(item.name)) {
      items.push(item);
    }
  });

  // 重複排除（IDベース）
  const uniqueItems = items.reduce((acc, item) => {
    if (!acc.find(i => i.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, [] as PackingItem[]);

  return { items: uniqueItems, alerts };
}

// 国情報を取得するヘルパー
export function getCountryInfo(destination: string) {
  return guessCountryFromCity(destination);
}
