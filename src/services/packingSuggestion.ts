import type { WeatherData, PackingItem, TravelInfo } from '../types';

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function generatePackingList(
  weather: WeatherData[],
  travelInfo: TravelInfo
): PackingItem[] {
  const items: PackingItem[] = [];
  const days = weather.length;

  const avgTempMax = weather.reduce((s, w) => s + w.tempMax, 0) / days;
  const avgTempMin = weather.reduce((s, w) => s + w.tempMin, 0) / days;
  const hasRain = weather.some((w) => w.precipitation > 0);
  const hasHeavyRain = weather.some((w) => w.precipitation > 10);
  const hasSnow = weather.some((w) => w.condition.includes('雪'));
  const isHot = avgTempMax > 25;
  const isCold = avgTempMin < 10;
  const isVeryCold = avgTempMin < 5;

  // 必須アイテム
  items.push({
    id: generateId(),
    name: 'パスポート・身分証明書',
    category: 'documents',
    checked: false,
    essential: true,
    reason: '旅行の必須書類',
  });
  items.push({
    id: generateId(),
    name: '財布・クレジットカード',
    category: 'documents',
    checked: false,
    essential: true,
    reason: '支払いに必要',
  });
  items.push({
    id: generateId(),
    name: 'スマートフォン・充電器',
    category: 'electronics',
    checked: false,
    essential: true,
    reason: '連絡・地図確認に必須',
  });

  // 衣類（気温に応じて）
  const topsCount = Math.min(days, 5);
  const bottomsCount = Math.ceil(days / 2);

  if (isHot) {
    items.push({
      id: generateId(),
      name: `Tシャツ・半袖 x${topsCount}`,
      category: 'clothing',
      checked: false,
      essential: true,
      reason: `最高気温${Math.round(avgTempMax)}°C - 暑い日が予想されます`,
    });
    items.push({
      id: generateId(),
      name: '短パン・涼しいボトムス',
      category: 'clothing',
      checked: false,
      essential: false,
      reason: '暑さ対策に',
    });
    items.push({
      id: generateId(),
      name: 'サンダル',
      category: 'clothing',
      checked: false,
      essential: false,
      reason: '暑い日用',
    });
    items.push({
      id: generateId(),
      name: '日焼け止め',
      category: 'toiletries',
      checked: false,
      essential: true,
      reason: '紫外線対策',
    });
    items.push({
      id: generateId(),
      name: 'サングラス',
      category: 'accessories',
      checked: false,
      essential: false,
      reason: '日差し対策',
    });
    items.push({
      id: generateId(),
      name: '帽子',
      category: 'accessories',
      checked: false,
      essential: true,
      reason: '熱中症予防',
    });
  } else if (isCold) {
    items.push({
      id: generateId(),
      name: `長袖シャツ x${topsCount}`,
      category: 'clothing',
      checked: false,
      essential: true,
      reason: `最低気温${Math.round(avgTempMin)}°C - 寒い日があります`,
    });
    items.push({
      id: generateId(),
      name: 'セーター・フリース',
      category: 'clothing',
      checked: false,
      essential: true,
      reason: '防寒用',
    });
    items.push({
      id: generateId(),
      name: '厚手のジャケット・コート',
      category: 'clothing',
      checked: false,
      essential: true,
      reason: '寒さ対策に必須',
    });
    if (isVeryCold) {
      items.push({
        id: generateId(),
        name: 'ヒートテック・保温下着',
        category: 'clothing',
        checked: false,
        essential: true,
        reason: '厳しい寒さ対策',
      });
      items.push({
        id: generateId(),
        name: 'マフラー・手袋・ニット帽',
        category: 'accessories',
        checked: false,
        essential: true,
        reason: '防寒小物',
      });
    }
  } else {
    items.push({
      id: generateId(),
      name: `カジュアルシャツ x${topsCount}`,
      category: 'clothing',
      checked: false,
      essential: true,
      reason: '過ごしやすい気温です',
    });
    items.push({
      id: generateId(),
      name: '薄手のジャケット・カーディガン',
      category: 'clothing',
      checked: false,
      essential: false,
      reason: '気温変化に対応',
    });
  }

  items.push({
    id: generateId(),
    name: `ボトムス x${bottomsCount}`,
    category: 'clothing',
    checked: false,
    essential: true,
    reason: '日数分必要',
  });
  items.push({
    id: generateId(),
    name: `下着・靴下 x${days}`,
    category: 'clothing',
    checked: false,
    essential: true,
    reason: '毎日交換',
  });

  // 雨対策
  if (hasRain) {
    items.push({
      id: generateId(),
      name: '折りたたみ傘',
      category: 'accessories',
      checked: false,
      essential: true,
      reason: '雨の日があります',
    });
    if (hasHeavyRain) {
      items.push({
        id: generateId(),
        name: 'レインコート・防水ジャケット',
        category: 'clothing',
        checked: false,
        essential: true,
        reason: '大雨が予想されます',
      });
      items.push({
        id: generateId(),
        name: '防水バッグカバー',
        category: 'accessories',
        checked: false,
        essential: false,
        reason: '荷物を雨から守る',
      });
    }
  }

  // 雪対策
  if (hasSnow) {
    items.push({
      id: generateId(),
      name: '防水ブーツ',
      category: 'clothing',
      checked: false,
      essential: true,
      reason: '雪の日があります',
    });
    items.push({
      id: generateId(),
      name: 'ホッカイロ',
      category: 'other',
      checked: false,
      essential: false,
      reason: '暖かさを保つ',
    });
  }

  // 目的別アイテム
  if (travelInfo.purpose === 'business') {
    items.push({
      id: generateId(),
      name: 'ビジネススーツ・フォーマル服',
      category: 'clothing',
      checked: false,
      essential: true,
      reason: '出張用',
    });
    items.push({
      id: generateId(),
      name: 'ノートPC・タブレット',
      category: 'electronics',
      checked: false,
      essential: true,
      reason: '仕事用',
    });
    items.push({
      id: generateId(),
      name: '名刺',
      category: 'documents',
      checked: false,
      essential: true,
      reason: 'ビジネス必須',
    });
  } else if (travelInfo.purpose === 'adventure') {
    items.push({
      id: generateId(),
      name: '動きやすい服装',
      category: 'clothing',
      checked: false,
      essential: true,
      reason: 'アクティビティ用',
    });
    items.push({
      id: generateId(),
      name: 'スニーカー・トレッキングシューズ',
      category: 'clothing',
      checked: false,
      essential: true,
      reason: '歩きやすさ重視',
    });
    items.push({
      id: generateId(),
      name: 'モバイルバッテリー',
      category: 'electronics',
      checked: false,
      essential: true,
      reason: '長時間の外出用',
    });
    items.push({
      id: generateId(),
      name: '水筒',
      category: 'other',
      checked: false,
      essential: false,
      reason: '水分補給に',
    });
  }

  // 基本アメニティ
  items.push({
    id: generateId(),
    name: '歯ブラシ・歯磨き粉',
    category: 'toiletries',
    checked: false,
    essential: true,
    reason: '毎日のケア',
  });
  items.push({
    id: generateId(),
    name: 'シャンプー・コンディショナー（ミニ）',
    category: 'toiletries',
    checked: false,
    essential: false,
    reason: 'ホテルにない場合',
  });
  items.push({
    id: generateId(),
    name: '常備薬・絆創膏',
    category: 'toiletries',
    checked: false,
    essential: true,
    reason: '緊急用',
  });

  return items;
}
