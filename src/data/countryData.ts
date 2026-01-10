// 国別情報データベース
// プラグタイプ、電圧、文化的注意点

export interface CountryInfo {
  code: string;
  name: string;
  nameJa: string;
  plugTypes: string[];
  voltage: number;
  frequency: number;
  culturalNotes: string[];
  commonItems: string[];
  climate: 'tropical' | 'subtropical' | 'temperate' | 'continental' | 'polar' | 'arid';
}

// プラグタイプの説明
export const plugTypeDescriptions: Record<string, string> = {
  A: 'Aタイプ（日本・アメリカ型 2ピン平行）',
  B: 'Bタイプ（アメリカ型 3ピン）',
  C: 'Cタイプ（ヨーロッパ型 2ピン丸）',
  BF: 'BFタイプ（イギリス型 3ピン角）',
  SE: 'SEタイプ（ヨーロッパ型 2ピン丸+アース）',
  O: 'Oタイプ（オーストラリア型 ハの字）',
  B3: 'B3タイプ（インド型）',
};

export const countries: CountryInfo[] = [
  // アジア
  {
    code: 'JP',
    name: 'Japan',
    nameJa: '日本',
    plugTypes: ['A'],
    voltage: 100,
    frequency: 50,
    culturalNotes: [
      '靴を脱ぐ場所が多い（きれいな靴下を用意）',
      '現金社会（クレジットカード不可の店も多い）',
      'チップ不要',
    ],
    commonItems: ['現金', 'ポケットティッシュ', '折りたたみ傘'],
    climate: 'temperate',
  },
  {
    code: 'KR',
    name: 'South Korea',
    nameJa: '韓国',
    plugTypes: ['C', 'SE'],
    voltage: 220,
    frequency: 60,
    culturalNotes: [
      '年長者を敬う文化',
      'T-moneyカードが便利',
      '焼肉店ではエプロンが出る',
    ],
    commonItems: ['変換プラグ（Cタイプ）', 'モバイルバッテリー'],
    climate: 'continental',
  },
  {
    code: 'CN',
    name: 'China',
    nameJa: '中国',
    plugTypes: ['A', 'C'],
    voltage: 220,
    frequency: 50,
    culturalNotes: [
      'VPNが必要（Google/LINE/Instagram使用不可）',
      'WeChat Payが主流',
      '英語が通じにくい',
    ],
    commonItems: ['VPNアプリ', '変換プラグ', '現金（少額）'],
    climate: 'continental',
  },
  {
    code: 'TW',
    name: 'Taiwan',
    nameJa: '台湾',
    plugTypes: ['A', 'B'],
    voltage: 110,
    frequency: 60,
    culturalNotes: [
      '日本と電圧が近いため変換プラグ不要な場合も',
      '夜市文化が盛ん',
      '親日的',
    ],
    commonItems: ['悠遊カード', 'ウェットティッシュ'],
    climate: 'subtropical',
  },
  {
    code: 'TH',
    name: 'Thailand',
    nameJa: 'タイ',
    plugTypes: ['A', 'B', 'C'],
    voltage: 220,
    frequency: 50,
    culturalNotes: [
      '王室への敬意を忘れずに',
      '寺院では肌の露出を避ける',
      'タクシーはGrabが安全',
    ],
    commonItems: ['変換プラグ', '長袖/長ズボン（寺院用）', '虫除け'],
    climate: 'tropical',
  },
  {
    code: 'SG',
    name: 'Singapore',
    nameJa: 'シンガポール',
    plugTypes: ['BF'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      'ガムの持ち込み禁止',
      '罰金が厳しい（ポイ捨て等）',
      '公共交通機関での飲食禁止',
    ],
    commonItems: ['変換プラグ（BFタイプ）', 'EZリンクカード'],
    climate: 'tropical',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    nameJa: 'ベトナム',
    plugTypes: ['A', 'C'],
    voltage: 220,
    frequency: 50,
    culturalNotes: [
      'バイクが非常に多い（道路横断注意）',
      '値段交渉文化',
      'コーヒー文化が発達',
    ],
    commonItems: ['変換プラグ', 'マスク（排気ガス対策）'],
    climate: 'tropical',
  },
  // ヨーロッパ
  {
    code: 'FR',
    name: 'France',
    nameJa: 'フランス',
    plugTypes: ['C', 'SE'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '挨拶を大切にする文化',
      'レストランでの会計は自分から',
      '日曜は多くの店が閉まる',
    ],
    commonItems: ['変換プラグ（Cタイプ）', 'フランス語基本フレーズ'],
    climate: 'temperate',
  },
  {
    code: 'DE',
    name: 'Germany',
    nameJa: 'ドイツ',
    plugTypes: ['C', 'SE'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '時間厳守の文化',
      '日曜は店が閉まる（Ruhetag）',
      '現金主義の店も多い',
    ],
    commonItems: ['変換プラグ（Cタイプ）', '現金', 'エコバッグ'],
    climate: 'temperate',
  },
  {
    code: 'IT',
    name: 'Italy',
    nameJa: 'イタリア',
    plugTypes: ['C', 'SE'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '教会では肌の露出を避ける',
      'シエスタ（昼休憩）文化',
      'カプチーノは朝のみ',
    ],
    commonItems: ['変換プラグ（Cタイプ）', 'スカーフ/羽織り物'],
    climate: 'temperate',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    nameJa: 'イギリス',
    plugTypes: ['BF'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '列に並ぶ文化を大切に',
      'パブ文化',
      'チップは10-15%程度',
    ],
    commonItems: ['変換プラグ（BFタイプ）', '折りたたみ傘', '防水ジャケット'],
    climate: 'temperate',
  },
  {
    code: 'ES',
    name: 'Spain',
    nameJa: 'スペイン',
    plugTypes: ['C', 'SE'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '夕食は21時以降が普通',
      'シエスタ文化',
      '日曜は店が閉まることが多い',
    ],
    commonItems: ['変換プラグ（Cタイプ）', '日焼け止め', 'サングラス'],
    climate: 'temperate',
  },
  // 北米
  {
    code: 'US',
    name: 'United States',
    nameJa: 'アメリカ',
    plugTypes: ['A', 'B'],
    voltage: 120,
    frequency: 60,
    culturalNotes: [
      'チップ文化（15-20%）',
      '州によって法律が異なる',
      'ESTA（電子渡航認証）が必要',
    ],
    commonItems: ['ESTA確認', 'チップ用の現金', '国際免許証'],
    climate: 'continental',
  },
  {
    code: 'CA',
    name: 'Canada',
    nameJa: 'カナダ',
    plugTypes: ['A', 'B'],
    voltage: 120,
    frequency: 60,
    culturalNotes: [
      'チップ文化（15-20%）',
      '英語とフランス語が公用語',
      'eTA（電子渡航認証）が必要',
    ],
    commonItems: ['eTA確認', '防寒具（冬季）'],
    climate: 'continental',
  },
  // オセアニア
  {
    code: 'AU',
    name: 'Australia',
    nameJa: 'オーストラリア',
    plugTypes: ['O'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '食品持ち込み規制が厳しい',
      '日差しが強い（UV対策必須）',
      'ETA（電子渡航認証）が必要',
    ],
    commonItems: ['変換プラグ（Oタイプ）', '日焼け止め（SPF50+）', 'サングラス'],
    climate: 'arid',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    nameJa: 'ニュージーランド',
    plugTypes: ['O'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '食品持ち込み規制が厳しい',
      'マオリ文化への敬意',
      'NZeTA（電子渡航認証）が必要',
    ],
    commonItems: ['変換プラグ（Oタイプ）', '防水ジャケット', 'ハイキングシューズ'],
    climate: 'temperate',
  },
  // 東南アジア追加
  {
    code: 'ID',
    name: 'Indonesia',
    nameJa: 'インドネシア',
    plugTypes: ['C', 'SE'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      'バリ島は観光地化されているが寺院マナー注意',
      'イスラム教が主流（バリ以外）',
      '左手は不浄とされる',
    ],
    commonItems: ['変換プラグ（Cタイプ）', '虫除け', '腹薬'],
    climate: 'tropical',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    nameJa: 'マレーシア',
    plugTypes: ['BF'],
    voltage: 240,
    frequency: 50,
    culturalNotes: [
      'イスラム教国（モスクでは肌露出禁止）',
      '多民族国家',
      'Grabが便利',
    ],
    commonItems: ['変換プラグ（BFタイプ）', '長袖/長ズボン'],
    climate: 'tropical',
  },
  {
    code: 'PH',
    name: 'Philippines',
    nameJa: 'フィリピン',
    plugTypes: ['A', 'B', 'C'],
    voltage: 220,
    frequency: 60,
    culturalNotes: [
      '英語が通じやすい',
      'ジプニー文化',
      'フレンドリーな国民性',
    ],
    commonItems: ['変換プラグ', '虫除け', '日焼け止め'],
    climate: 'tropical',
  },
  // その他主要国
  {
    code: 'IN',
    name: 'India',
    nameJa: 'インド',
    plugTypes: ['C', 'B3'],
    voltage: 230,
    frequency: 50,
    culturalNotes: [
      '左手は不浄とされる',
      '牛は神聖な動物',
      '値段交渉が必要な場面も',
    ],
    commonItems: ['変換プラグ（C/B3タイプ）', '胃腸薬', 'ウェットティッシュ'],
    climate: 'tropical',
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    nameJa: 'アラブ首長国連邦',
    plugTypes: ['BF'],
    voltage: 220,
    frequency: 50,
    culturalNotes: [
      'イスラム教国（公共での飲酒注意）',
      'ラマダン期間中は日中の飲食に注意',
      'モスクでは肌露出禁止',
    ],
    commonItems: ['変換プラグ（BFタイプ）', '長袖', 'サングラス'],
    climate: 'arid',
  },
  {
    code: 'EG',
    name: 'Egypt',
    nameJa: 'エジプト',
    plugTypes: ['C'],
    voltage: 220,
    frequency: 50,
    culturalNotes: [
      'イスラム教国',
      '値段交渉文化',
      '女性は肌の露出を控えめに',
    ],
    commonItems: ['変換プラグ（Cタイプ）', '日焼け止め', '帽子', '現金'],
    climate: 'arid',
  },
  {
    code: 'BR',
    name: 'Brazil',
    nameJa: 'ブラジル',
    plugTypes: ['C'],
    voltage: 127,
    frequency: 60,
    culturalNotes: [
      'ポルトガル語が公用語',
      '治安に注意が必要な地域も',
      'フレンドリーな国民性',
    ],
    commonItems: ['変換プラグ（Cタイプ）', '虫除け', '貴重品管理'],
    climate: 'tropical',
  },
  {
    code: 'MX',
    name: 'Mexico',
    nameJa: 'メキシコ',
    plugTypes: ['A', 'B'],
    voltage: 127,
    frequency: 60,
    culturalNotes: [
      'スペイン語が公用語',
      'チップ文化',
      '水道水は飲まない',
    ],
    commonItems: ['ペットボトルの水', '胃腸薬', 'スペイン語基本フレーズ'],
    climate: 'tropical',
  },
];

// 国名から国情報を検索
export function findCountryByName(name: string): CountryInfo | undefined {
  const normalizedName = name.toLowerCase().trim();
  return countries.find(
    (c) =>
      c.name.toLowerCase().includes(normalizedName) ||
      c.nameJa.includes(name) ||
      c.code.toLowerCase() === normalizedName
  );
}

// 都市名から国を推測
export function guessCountryFromCity(cityName: string): CountryInfo | undefined {
  const cityToCountry: Record<string, string> = {
    // 日本
    '東京': 'JP', 'tokyo': 'JP', '大阪': 'JP', 'osaka': 'JP', '京都': 'JP', 'kyoto': 'JP',
    '名古屋': 'JP', 'nagoya': 'JP', '福岡': 'JP', 'fukuoka': 'JP', '札幌': 'JP', 'sapporo': 'JP',
    // 韓国
    'ソウル': 'KR', 'seoul': 'KR', '釜山': 'KR', 'busan': 'KR',
    // 中国
    '北京': 'CN', 'beijing': 'CN', '上海': 'CN', 'shanghai': 'CN', '香港': 'CN', 'hong kong': 'CN',
    '深圳': 'CN', 'shenzhen': 'CN', '広州': 'CN', 'guangzhou': 'CN',
    // 台湾
    '台北': 'TW', 'taipei': 'TW', '高雄': 'TW', 'kaohsiung': 'TW',
    // タイ
    'バンコク': 'TH', 'bangkok': 'TH', 'プーケット': 'TH', 'phuket': 'TH', 'チェンマイ': 'TH', 'chiang mai': 'TH',
    // シンガポール
    'シンガポール': 'SG', 'singapore': 'SG',
    // ベトナム
    'ハノイ': 'VN', 'hanoi': 'VN', 'ホーチミン': 'VN', 'ho chi minh': 'VN',
    // フランス
    'パリ': 'FR', 'paris': 'FR', 'ニース': 'FR', 'nice': 'FR',
    // ドイツ
    'ベルリン': 'DE', 'berlin': 'DE', 'ミュンヘン': 'DE', 'munich': 'DE', 'フランクフルト': 'DE', 'frankfurt': 'DE',
    // イタリア
    'ローマ': 'IT', 'rome': 'IT', 'ミラノ': 'IT', 'milan': 'IT', 'ヴェネツィア': 'IT', 'venice': 'IT',
    'フィレンツェ': 'IT', 'florence': 'IT',
    // イギリス
    'ロンドン': 'GB', 'london': 'GB', 'マンチェスター': 'GB', 'manchester': 'GB',
    // スペイン
    'マドリード': 'ES', 'madrid': 'ES', 'バルセロナ': 'ES', 'barcelona': 'ES',
    // アメリカ
    'ニューヨーク': 'US', 'new york': 'US', 'ロサンゼルス': 'US', 'los angeles': 'US',
    'サンフランシスコ': 'US', 'san francisco': 'US', 'ラスベガス': 'US', 'las vegas': 'US',
    'シカゴ': 'US', 'chicago': 'US', 'マイアミ': 'US', 'miami': 'US', 'ハワイ': 'US', 'hawaii': 'US',
    'ホノルル': 'US', 'honolulu': 'US',
    // カナダ
    'バンクーバー': 'CA', 'vancouver': 'CA', 'トロント': 'CA', 'toronto': 'CA',
    // オーストラリア
    'シドニー': 'AU', 'sydney': 'AU', 'メルボルン': 'AU', 'melbourne': 'AU',
    'ケアンズ': 'AU', 'cairns': 'AU', 'ゴールドコースト': 'AU', 'gold coast': 'AU',
    // ニュージーランド
    'オークランド': 'NZ', 'auckland': 'NZ', 'クイーンズタウン': 'NZ', 'queenstown': 'NZ',
    // インドネシア
    'バリ': 'ID', 'bali': 'ID', 'ジャカルタ': 'ID', 'jakarta': 'ID',
    // マレーシア
    'クアラルンプール': 'MY', 'kuala lumpur': 'MY',
    // フィリピン
    'マニラ': 'PH', 'manila': 'PH', 'セブ': 'PH', 'cebu': 'PH',
    // インド
    'デリー': 'IN', 'delhi': 'IN', 'ムンバイ': 'IN', 'mumbai': 'IN',
    // UAE
    'ドバイ': 'AE', 'dubai': 'AE', 'アブダビ': 'AE', 'abu dhabi': 'AE',
    // エジプト
    'カイロ': 'EG', 'cairo': 'EG',
    // ブラジル
    'リオデジャネイロ': 'BR', 'rio de janeiro': 'BR', 'サンパウロ': 'BR', 'sao paulo': 'BR',
    // メキシコ
    'カンクン': 'MX', 'cancun': 'MX', 'メキシコシティ': 'MX', 'mexico city': 'MX',
  };

  const normalizedCity = cityName.toLowerCase().trim();
  const countryCode = cityToCountry[normalizedCity] || cityToCountry[cityName];

  if (countryCode) {
    return countries.find((c) => c.code === countryCode);
  }
  return undefined;
}
