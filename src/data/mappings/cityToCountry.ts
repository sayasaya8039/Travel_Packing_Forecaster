// City to Country Code Mapping
// Maps city names to ISO 3166-1 alpha-2 country codes
// Supports both English and Japanese city names

export interface CityMapping {
  city: string;
  cityJa?: string;
  countryCode: string;
  aliases?: string[];
}

// 主要都市マッピング（500+都市）
export const cityMappings: CityMapping[] = [
  // ===== ASIA =====
  // Japan
  { city: 'Tokyo', cityJa: '東京', countryCode: 'JP', aliases: ['Tokio', 'とうきょう', 'トウキョウ', '東京都', 'とうきょうと', 'トウキョウト'] },
  { city: 'Osaka', cityJa: '大阪', countryCode: 'JP', aliases: ['おおさか', 'オオサカ', '大阪府', 'おおさかふ', 'オオサカフ'] },
  { city: 'Kyoto', cityJa: '京都', countryCode: 'JP', aliases: ['きょうと', 'キョウト', '京都府', 'きょうとふ', 'キョウトフ'] },
  { city: 'Yokohama', cityJa: '横浜', countryCode: 'JP', aliases: ['よこはま', 'ヨコハマ', '神奈川', 'かながわ', 'カナガワ', 'Kanagawa'] },
  { city: 'Nagoya', cityJa: '名古屋', countryCode: 'JP', aliases: ['なごや', 'ナゴヤ', '愛知', 'あいち', 'アイチ', 'Aichi'] },
  { city: 'Sapporo', cityJa: '札幌', countryCode: 'JP', aliases: ['さっぽろ', 'サッポロ', '北海道', 'ほっかいどう', 'ホッカイドウ', 'Hokkaido'] },
  { city: 'Fukuoka', cityJa: '福岡', countryCode: 'JP', aliases: ['ふくおか', 'フクオカ', '福岡県', 'ふくおかけん', 'フクオカケン'] },
  { city: 'Kobe', cityJa: '神戸', countryCode: 'JP', aliases: ['こうべ', 'コウベ', '兵庫', 'ひょうご', 'ヒョウゴ', 'Hyogo'] },
  { city: 'Hiroshima', cityJa: '広島', countryCode: 'JP', aliases: ['ひろしま', 'ヒロシマ', '広島県', 'ひろしまけん', 'ヒロシマケン'] },
  { city: 'Sendai', cityJa: '仙台', countryCode: 'JP', aliases: ['せんだい', 'センダイ', '宮城', 'みやぎ', 'ミヤギ', 'Miyagi'] },
  { city: 'Nara', cityJa: '奈良', countryCode: 'JP', aliases: ['なら', 'ナラ', '奈良県', 'ならけん', 'ナラケン'] },
  { city: 'Okinawa', cityJa: '沖縄', countryCode: 'JP', aliases: ['おきなわ', 'オキナワ', 'Naha', '那覇', 'ナハ', 'なは', '沖縄県', 'おきなわけん', 'オキナワケン'] },
  { city: 'Kanazawa', cityJa: '金沢', countryCode: 'JP', aliases: ['かなざわ', 'カナザワ', '石川', 'いしかわ', 'イシカワ', 'Ishikawa'] },
  { city: 'Nagasaki', cityJa: '長崎', countryCode: 'JP', aliases: ['ながさき', 'ナガサキ', '長崎県', 'ながさきけん', 'ナガサキケン'] },
  { city: 'Niigata', cityJa: '新潟', countryCode: 'JP', aliases: ['にいがた', 'ニイガタ', '新潟県', 'にいがたけん', 'ニイガタケン'] },
  // Additional Japanese Prefectures (All 47 prefectures)
  { city: 'Aomori', cityJa: '青森', countryCode: 'JP', aliases: ['あおもり', 'アオモリ', '青森県', 'あおもりけん', 'アオモリケン'] },
  { city: 'Morioka', cityJa: '盛岡', countryCode: 'JP', aliases: ['もりおか', 'モリオカ', '岩手', 'いわて', 'イワテ', 'Iwate', '岩手県'] },
  { city: 'Akita', cityJa: '秋田', countryCode: 'JP', aliases: ['あきた', 'アキタ', '秋田県', 'あきたけん', 'アキタケン'] },
  { city: 'Yamagata', cityJa: '山形', countryCode: 'JP', aliases: ['やまがた', 'ヤマガタ', '山形県', 'やまがたけん', 'ヤマガタケン'] },
  { city: 'Fukushima', cityJa: '福島', countryCode: 'JP', aliases: ['ふくしま', 'フクシマ', '福島県', 'ふくしまけん', 'フクシマケン'] },
  { city: 'Mito', cityJa: '水戸', countryCode: 'JP', aliases: ['みと', 'ミト', '茨城', 'いばらき', 'イバラキ', 'Ibaraki', '茨城県'] },
  { city: 'Utsunomiya', cityJa: '宇都宮', countryCode: 'JP', aliases: ['うつのみや', 'ウツノミヤ', '栃木', 'とちぎ', 'トチギ', 'Tochigi', '栃木県'] },
  { city: 'Maebashi', cityJa: '前橋', countryCode: 'JP', aliases: ['まえばし', 'マエバシ', '群馬', 'ぐんま', 'グンマ', 'Gunma', '群馬県'] },
  { city: 'Saitama', cityJa: 'さいたま', countryCode: 'JP', aliases: ['サイタマ', '埼玉', '埼玉県', 'さいたまけん', 'サイタマケン'] },
  { city: 'Chiba', cityJa: '千葉', countryCode: 'JP', aliases: ['ちば', 'チバ', '千葉県', 'ちばけん', 'チバケン'] },
  { city: 'Toyama', cityJa: '富山', countryCode: 'JP', aliases: ['とやま', 'トヤマ', '富山県', 'とやまけん', 'トヤマケン'] },
  { city: 'Fukui', cityJa: '福井', countryCode: 'JP', aliases: ['ふくい', 'フクイ', '福井県', 'ふくいけん', 'フクイケン'] },
  { city: 'Kofu', cityJa: '甲府', countryCode: 'JP', aliases: ['こうふ', 'コウフ', '山梨', 'やまなし', 'ヤマナシ', 'Yamanashi', '山梨県'] },
  { city: 'Nagano', cityJa: '長野', countryCode: 'JP', aliases: ['ながの', 'ナガノ', '長野県', 'ながのけん', 'ナガノケン'] },
  { city: 'Gifu', cityJa: '岐阜', countryCode: 'JP', aliases: ['ぎふ', 'ギフ', '岐阜県', 'ぎふけん', 'ギフケン'] },
  { city: 'Shizuoka', cityJa: '静岡', countryCode: 'JP', aliases: ['しずおか', 'シズオカ', '静岡県', 'しずおかけん', 'シズオカケン'] },
  { city: 'Tsu', cityJa: '津', countryCode: 'JP', aliases: ['つ', 'ツ', '三重', 'みえ', 'ミエ', 'Mie', '三重県'] },
  { city: 'Otsu', cityJa: '大津', countryCode: 'JP', aliases: ['おおつ', 'オオツ', '滋賀', 'しが', 'シガ', 'Shiga', '滋賀県'] },
  { city: 'Wakayama', cityJa: '和歌山', countryCode: 'JP', aliases: ['わかやま', 'ワカヤマ', '和歌山県', 'わかやまけん', 'ワカヤマケン'] },
  { city: 'Tottori', cityJa: '鳥取', countryCode: 'JP', aliases: ['とっとり', 'トットリ', '鳥取県', 'とっとりけん', 'トットリケン'] },
  { city: 'Matsue', cityJa: '松江', countryCode: 'JP', aliases: ['まつえ', 'マツエ', '島根', 'しまね', 'シマネ', 'Shimane', '島根県'] },
  { city: 'Okayama', cityJa: '岡山', countryCode: 'JP', aliases: ['おかやま', 'オカヤマ', '岡山県', 'おかやまけん', 'オカヤマケン'] },
  { city: 'Yamaguchi', cityJa: '山口', countryCode: 'JP', aliases: ['やまぐち', 'ヤマグチ', '山口県', 'やまぐちけん', 'ヤマグチケン'] },
  { city: 'Tokushima', cityJa: '徳島', countryCode: 'JP', aliases: ['とくしま', 'トクシマ', '徳島県', 'とくしまけん', 'トクシマケン'] },
  { city: 'Takamatsu', cityJa: '高松', countryCode: 'JP', aliases: ['たかまつ', 'タカマツ', '香川', 'かがわ', 'カガワ', 'Kagawa', '香川県'] },
  { city: 'Matsuyama', cityJa: '松山', countryCode: 'JP', aliases: ['まつやま', 'マツヤマ', '愛媛', 'えひめ', 'エヒメ', 'Ehime', '愛媛県'] },
  { city: 'Kochi', cityJa: '高知', countryCode: 'JP', aliases: ['こうち', 'コウチ', '高知県', 'こうちけん', 'コウチケン'] },
  { city: 'Saga', cityJa: '佐賀', countryCode: 'JP', aliases: ['さが', 'サガ', '佐賀県', 'さがけん', 'サガケン'] },
  { city: 'Kumamoto', cityJa: '熊本', countryCode: 'JP', aliases: ['くまもと', 'クマモト', '熊本県', 'くまもとけん', 'クマモトケン'] },
  { city: 'Oita', cityJa: '大分', countryCode: 'JP', aliases: ['おおいた', 'オオイタ', '大分県', 'おおいたけん', 'オオイタケン'] },
  { city: 'Miyazaki', cityJa: '宮崎', countryCode: 'JP', aliases: ['みやざき', 'ミヤザキ', '宮崎県', 'みやざきけん', 'ミヤザキケン'] },
  { city: 'Kagoshima', cityJa: '鹿児島', countryCode: 'JP', aliases: ['かごしま', 'カゴシマ', '鹿児島県', 'かごしまけん', 'カゴシマケン'] },


  // China
  { city: 'Beijing', cityJa: '北京', countryCode: 'CN', aliases: ['Peking', 'ペキン'] },
  { city: 'Shanghai', cityJa: '上海', countryCode: 'CN', aliases: ['シャンハイ'] },
  { city: 'Guangzhou', cityJa: '広州', countryCode: 'CN', aliases: ['Canton', 'コウシュウ'] },
  { city: 'Shenzhen', cityJa: '深圳', countryCode: 'CN', aliases: ['シンセン'] },
  { city: 'Chengdu', cityJa: '成都', countryCode: 'CN', aliases: ['セイト'] },
  { city: 'Hangzhou', cityJa: '杭州', countryCode: 'CN', aliases: ['コウシュウ'] },
  { city: 'Xian', cityJa: '西安', countryCode: 'CN', aliases: ["Xi'an", 'セイアン'] },
  { city: 'Chongqing', cityJa: '重慶', countryCode: 'CN', aliases: ['ジュウケイ'] },
  { city: 'Nanjing', cityJa: '南京', countryCode: 'CN', aliases: ['Nanking', 'ナンキン'] },
  { city: 'Tianjin', cityJa: '天津', countryCode: 'CN', aliases: ['テンシン'] },
  { city: 'Wuhan', cityJa: '武漢', countryCode: 'CN', aliases: ['ブカン'] },
  { city: 'Suzhou', cityJa: '蘇州', countryCode: 'CN', aliases: ['ソシュウ'] },
  { city: 'Guilin', cityJa: '桂林', countryCode: 'CN', aliases: ['ケイリン'] },
  { city: 'Xiamen', cityJa: '厦門', countryCode: 'CN', aliases: ['アモイ'] },
  { city: 'Qingdao', cityJa: '青島', countryCode: 'CN', aliases: ['チンタオ'] },

  // South Korea
  { city: 'Seoul', cityJa: 'ソウル', countryCode: 'KR', aliases: ['서울'] },
  { city: 'Busan', cityJa: '釜山', countryCode: 'KR', aliases: ['부산', 'プサン'] },
  { city: 'Incheon', cityJa: '仁川', countryCode: 'KR', aliases: ['인천', 'インチョン'] },
  { city: 'Daegu', cityJa: '大邱', countryCode: 'KR', aliases: ['대구', 'テグ'] },
  { city: 'Jeju', cityJa: '済州', countryCode: 'KR', aliases: ['제주', 'チェジュ'] },
  { city: 'Gyeongju', cityJa: '慶州', countryCode: 'KR', aliases: ['경주', 'キョンジュ'] },

  // Taiwan
  { city: 'Taipei', cityJa: '台北', countryCode: 'TW', aliases: ['タイペイ'] },
  { city: 'Kaohsiung', cityJa: '高雄', countryCode: 'TW', aliases: ['タカオ'] },
  { city: 'Taichung', cityJa: '台中', countryCode: 'TW', aliases: ['タイチュウ'] },
  { city: 'Tainan', cityJa: '台南', countryCode: 'TW', aliases: ['タイナン'] },
  { city: 'Hualien', cityJa: '花蓮', countryCode: 'TW', aliases: ['カレン'] },

  // Hong Kong & Macau
  { city: 'Hong Kong', cityJa: '香港', countryCode: 'HK', aliases: ['ホンコン'] },
  { city: 'Macau', cityJa: 'マカオ', countryCode: 'MO', aliases: ['Macao', '澳門'] },

  // Thailand
  { city: 'Bangkok', cityJa: 'バンコク', countryCode: 'TH', aliases: ['Krung Thep'] },
  { city: 'Chiang Mai', cityJa: 'チェンマイ', countryCode: 'TH', aliases: ['Chiangmai'] },
  { city: 'Phuket', cityJa: 'プーケット', countryCode: 'TH', aliases: [] },
  { city: 'Pattaya', cityJa: 'パタヤ', countryCode: 'TH', aliases: [] },
  { city: 'Krabi', cityJa: 'クラビ', countryCode: 'TH', aliases: [] },
  { city: 'Koh Samui', cityJa: 'サムイ島', countryCode: 'TH', aliases: ['Samui'] },
  { city: 'Ayutthaya', cityJa: 'アユタヤ', countryCode: 'TH', aliases: [] },

  // Vietnam
  { city: 'Hanoi', cityJa: 'ハノイ', countryCode: 'VN', aliases: ['Ha Noi'] },
  { city: 'Ho Chi Minh City', cityJa: 'ホーチミン', countryCode: 'VN', aliases: ['Saigon', 'HCMC', 'サイゴン'] },
  { city: 'Da Nang', cityJa: 'ダナン', countryCode: 'VN', aliases: ['Danang'] },
  { city: 'Hoi An', cityJa: 'ホイアン', countryCode: 'VN', aliases: [] },
  { city: 'Nha Trang', cityJa: 'ニャチャン', countryCode: 'VN', aliases: [] },
  { city: 'Hue', cityJa: 'フエ', countryCode: 'VN', aliases: [] },
  { city: 'Halong', cityJa: 'ハロン', countryCode: 'VN', aliases: ['Ha Long'] },

  // Singapore
  { city: 'Singapore', cityJa: 'シンガポール', countryCode: 'SG', aliases: [] },

  // Malaysia
  { city: 'Kuala Lumpur', cityJa: 'クアラルンプール', countryCode: 'MY', aliases: ['KL'] },
  { city: 'Penang', cityJa: 'ペナン', countryCode: 'MY', aliases: ['George Town'] },
  { city: 'Langkawi', cityJa: 'ランカウイ', countryCode: 'MY', aliases: [] },
  { city: 'Kota Kinabalu', cityJa: 'コタキナバル', countryCode: 'MY', aliases: [] },
  { city: 'Malacca', cityJa: 'マラッカ', countryCode: 'MY', aliases: ['Melaka'] },
  { city: 'Johor Bahru', cityJa: 'ジョホールバル', countryCode: 'MY', aliases: [] },

  // Indonesia
  { city: 'Jakarta', cityJa: 'ジャカルタ', countryCode: 'ID', aliases: [] },
  { city: 'Bali', cityJa: 'バリ', countryCode: 'ID', aliases: ['Denpasar'] },
  { city: 'Yogyakarta', cityJa: 'ジョグジャカルタ', countryCode: 'ID', aliases: ['Jogja'] },
  { city: 'Surabaya', cityJa: 'スラバヤ', countryCode: 'ID', aliases: [] },
  { city: 'Bandung', cityJa: 'バンドン', countryCode: 'ID', aliases: [] },
  { city: 'Lombok', cityJa: 'ロンボク', countryCode: 'ID', aliases: [] },

  // Philippines
  { city: 'Manila', cityJa: 'マニラ', countryCode: 'PH', aliases: ['Metro Manila'] },
  { city: 'Cebu', cityJa: 'セブ', countryCode: 'PH', aliases: [] },
  { city: 'Boracay', cityJa: 'ボラカイ', countryCode: 'PH', aliases: [] },
  { city: 'Palawan', cityJa: 'パラワン', countryCode: 'PH', aliases: ['Puerto Princesa'] },
  { city: 'Davao', cityJa: 'ダバオ', countryCode: 'PH', aliases: [] },

  // India
  { city: 'Delhi', cityJa: 'デリー', countryCode: 'IN', aliases: ['New Delhi', 'ニューデリー'] },
  { city: 'Mumbai', cityJa: 'ムンバイ', countryCode: 'IN', aliases: ['Bombay'] },
  { city: 'Bangalore', cityJa: 'バンガロール', countryCode: 'IN', aliases: ['Bengaluru'] },
  { city: 'Chennai', cityJa: 'チェンナイ', countryCode: 'IN', aliases: ['Madras'] },
  { city: 'Kolkata', cityJa: 'コルカタ', countryCode: 'IN', aliases: ['Calcutta'] },
  { city: 'Jaipur', cityJa: 'ジャイプール', countryCode: 'IN', aliases: [] },
  { city: 'Agra', cityJa: 'アグラ', countryCode: 'IN', aliases: [] },
  { city: 'Goa', cityJa: 'ゴア', countryCode: 'IN', aliases: [] },
  { city: 'Varanasi', cityJa: 'バラナシ', countryCode: 'IN', aliases: ['Benares'] },
  { city: 'Udaipur', cityJa: 'ウダイプール', countryCode: 'IN', aliases: [] },
  { city: 'Hyderabad', cityJa: 'ハイデラバード', countryCode: 'IN', aliases: [] },

  // Nepal
  { city: 'Kathmandu', cityJa: 'カトマンズ', countryCode: 'NP', aliases: [] },
  { city: 'Pokhara', cityJa: 'ポカラ', countryCode: 'NP', aliases: [] },

  // Sri Lanka
  { city: 'Colombo', cityJa: 'コロンボ', countryCode: 'LK', aliases: [] },
  { city: 'Kandy', cityJa: 'キャンディ', countryCode: 'LK', aliases: [] },
  { city: 'Galle', cityJa: 'ゴール', countryCode: 'LK', aliases: [] },

  // Bangladesh
  { city: 'Dhaka', cityJa: 'ダッカ', countryCode: 'BD', aliases: ['Dacca'] },

  // Pakistan
  { city: 'Karachi', cityJa: 'カラチ', countryCode: 'PK', aliases: [] },
  { city: 'Lahore', cityJa: 'ラホール', countryCode: 'PK', aliases: [] },
  { city: 'Islamabad', cityJa: 'イスラマバード', countryCode: 'PK', aliases: [] },

  // Myanmar
  { city: 'Yangon', cityJa: 'ヤンゴン', countryCode: 'MM', aliases: ['Rangoon'] },
  { city: 'Bagan', cityJa: 'バガン', countryCode: 'MM', aliases: [] },
  { city: 'Mandalay', cityJa: 'マンダレー', countryCode: 'MM', aliases: [] },

  // Cambodia
  { city: 'Phnom Penh', cityJa: 'プノンペン', countryCode: 'KH', aliases: [] },
  { city: 'Siem Reap', cityJa: 'シェムリアップ', countryCode: 'KH', aliases: ['Angkor Wat'] },

  // Laos
  { city: 'Vientiane', cityJa: 'ビエンチャン', countryCode: 'LA', aliases: [] },
  { city: 'Luang Prabang', cityJa: 'ルアンパバーン', countryCode: 'LA', aliases: [] },

  // Brunei
  { city: 'Bandar Seri Begawan', cityJa: 'バンダルスリブガワン', countryCode: 'BN', aliases: [] },

  // Mongolia
  { city: 'Ulaanbaatar', cityJa: 'ウランバートル', countryCode: 'MN', aliases: ['Ulan Bator'] },

  // Central Asia
  { city: 'Almaty', cityJa: 'アルマトイ', countryCode: 'KZ', aliases: [] },
  { city: 'Astana', cityJa: 'アスタナ', countryCode: 'KZ', aliases: ['Nur-Sultan'] },
  { city: 'Tashkent', cityJa: 'タシケント', countryCode: 'UZ', aliases: [] },
  { city: 'Samarkand', cityJa: 'サマルカンド', countryCode: 'UZ', aliases: [] },
  { city: 'Bukhara', cityJa: 'ブハラ', countryCode: 'UZ', aliases: [] },
  { city: 'Bishkek', cityJa: 'ビシュケク', countryCode: 'KG', aliases: [] },
  { city: 'Dushanbe', cityJa: 'ドゥシャンベ', countryCode: 'TJ', aliases: [] },
  { city: 'Ashgabat', cityJa: 'アシガバート', countryCode: 'TM', aliases: [] },

  // Middle East
  { city: 'Dubai', cityJa: 'ドバイ', countryCode: 'AE', aliases: [] },
  { city: 'Abu Dhabi', cityJa: 'アブダビ', countryCode: 'AE', aliases: [] },
  { city: 'Doha', cityJa: 'ドーハ', countryCode: 'QA', aliases: [] },
  { city: 'Riyadh', cityJa: 'リヤド', countryCode: 'SA', aliases: [] },
  { city: 'Jeddah', cityJa: 'ジッダ', countryCode: 'SA', aliases: [] },
  { city: 'Mecca', cityJa: 'メッカ', countryCode: 'SA', aliases: ['Makkah'] },
  { city: 'Kuwait City', cityJa: 'クウェート', countryCode: 'KW', aliases: [] },
  { city: 'Manama', cityJa: 'マナーマ', countryCode: 'BH', aliases: [] },
  { city: 'Muscat', cityJa: 'マスカット', countryCode: 'OM', aliases: [] },
  { city: 'Tehran', cityJa: 'テヘラン', countryCode: 'IR', aliases: [] },
  { city: 'Isfahan', cityJa: 'イスファハン', countryCode: 'IR', aliases: ['Esfahan'] },
  { city: 'Shiraz', cityJa: 'シラーズ', countryCode: 'IR', aliases: [] },
  { city: 'Baghdad', cityJa: 'バグダッド', countryCode: 'IQ', aliases: [] },
  { city: 'Amman', cityJa: 'アンマン', countryCode: 'JO', aliases: [] },
  { city: 'Petra', cityJa: 'ペトラ', countryCode: 'JO', aliases: [] },
  { city: 'Beirut', cityJa: 'ベイルート', countryCode: 'LB', aliases: [] },
  { city: 'Damascus', cityJa: 'ダマスカス', countryCode: 'SY', aliases: [] },
  { city: 'Jerusalem', cityJa: 'エルサレム', countryCode: 'IL', aliases: [] },
  { city: 'Tel Aviv', cityJa: 'テルアビブ', countryCode: 'IL', aliases: [] },
  { city: 'Baku', cityJa: 'バクー', countryCode: 'AZ', aliases: [] },
  { city: 'Tbilisi', cityJa: 'トビリシ', countryCode: 'GE', aliases: [] },
  { city: 'Yerevan', cityJa: 'エレバン', countryCode: 'AM', aliases: [] },

  // Turkey
  { city: 'Istanbul', cityJa: 'イスタンブール', countryCode: 'TR', aliases: ['Constantinople'] },
  { city: 'Ankara', cityJa: 'アンカラ', countryCode: 'TR', aliases: [] },
  { city: 'Cappadocia', cityJa: 'カッパドキア', countryCode: 'TR', aliases: ['Goreme'] },
  { city: 'Antalya', cityJa: 'アンタルヤ', countryCode: 'TR', aliases: [] },
  { city: 'Izmir', cityJa: 'イズミル', countryCode: 'TR', aliases: [] },
  { city: 'Bodrum', cityJa: 'ボドルム', countryCode: 'TR', aliases: [] },

  // ===== EUROPE =====
  // UK
  { city: 'London', cityJa: 'ロンドン', countryCode: 'GB', aliases: [] },
  { city: 'Edinburgh', cityJa: 'エディンバラ', countryCode: 'GB', aliases: [] },
  { city: 'Manchester', cityJa: 'マンチェスター', countryCode: 'GB', aliases: [] },
  { city: 'Liverpool', cityJa: 'リバプール', countryCode: 'GB', aliases: [] },
  { city: 'Birmingham', cityJa: 'バーミンガム', countryCode: 'GB', aliases: [] },
  { city: 'Glasgow', cityJa: 'グラスゴー', countryCode: 'GB', aliases: [] },
  { city: 'Oxford', cityJa: 'オックスフォード', countryCode: 'GB', aliases: [] },
  { city: 'Cambridge', cityJa: 'ケンブリッジ', countryCode: 'GB', aliases: [] },
  { city: 'Bath', cityJa: 'バース', countryCode: 'GB', aliases: [] },
  { city: 'York', cityJa: 'ヨーク', countryCode: 'GB', aliases: [] },
  { city: 'Bristol', cityJa: 'ブリストル', countryCode: 'GB', aliases: [] },
  { city: 'Cardiff', cityJa: 'カーディフ', countryCode: 'GB', aliases: [] },
  { city: 'Belfast', cityJa: 'ベルファスト', countryCode: 'GB', aliases: [] },

  // France
  { city: 'Paris', cityJa: 'パリ', countryCode: 'FR', aliases: [] },
  { city: 'Nice', cityJa: 'ニース', countryCode: 'FR', aliases: [] },
  { city: 'Lyon', cityJa: 'リヨン', countryCode: 'FR', aliases: [] },
  { city: 'Marseille', cityJa: 'マルセイユ', countryCode: 'FR', aliases: [] },
  { city: 'Bordeaux', cityJa: 'ボルドー', countryCode: 'FR', aliases: [] },
  { city: 'Toulouse', cityJa: 'トゥールーズ', countryCode: 'FR', aliases: [] },
  { city: 'Strasbourg', cityJa: 'ストラスブール', countryCode: 'FR', aliases: [] },
  { city: 'Cannes', cityJa: 'カンヌ', countryCode: 'FR', aliases: [] },
  { city: 'Monaco', cityJa: 'モナコ', countryCode: 'MC', aliases: ['Monte Carlo'] },

  // Germany
  { city: 'Berlin', cityJa: 'ベルリン', countryCode: 'DE', aliases: [] },
  { city: 'Munich', cityJa: 'ミュンヘン', countryCode: 'DE', aliases: ['München'] },
  { city: 'Frankfurt', cityJa: 'フランクフルト', countryCode: 'DE', aliases: [] },
  { city: 'Hamburg', cityJa: 'ハンブルク', countryCode: 'DE', aliases: [] },
  { city: 'Cologne', cityJa: 'ケルン', countryCode: 'DE', aliases: ['Köln'] },
  { city: 'Düsseldorf', cityJa: 'デュッセルドルフ', countryCode: 'DE', aliases: [] },
  { city: 'Stuttgart', cityJa: 'シュトゥットガルト', countryCode: 'DE', aliases: [] },
  { city: 'Dresden', cityJa: 'ドレスデン', countryCode: 'DE', aliases: [] },
  { city: 'Heidelberg', cityJa: 'ハイデルベルク', countryCode: 'DE', aliases: [] },
  { city: 'Nuremberg', cityJa: 'ニュルンベルク', countryCode: 'DE', aliases: ['Nürnberg'] },

  // Italy
  { city: 'Rome', cityJa: 'ローマ', countryCode: 'IT', aliases: ['Roma'] },
  { city: 'Milan', cityJa: 'ミラノ', countryCode: 'IT', aliases: ['Milano'] },
  { city: 'Venice', cityJa: 'ヴェネツィア', countryCode: 'IT', aliases: ['Venezia'] },
  { city: 'Florence', cityJa: 'フィレンツェ', countryCode: 'IT', aliases: ['Firenze'] },
  { city: 'Naples', cityJa: 'ナポリ', countryCode: 'IT', aliases: ['Napoli'] },
  { city: 'Turin', cityJa: 'トリノ', countryCode: 'IT', aliases: ['Torino'] },
  { city: 'Bologna', cityJa: 'ボローニャ', countryCode: 'IT', aliases: [] },
  { city: 'Genoa', cityJa: 'ジェノバ', countryCode: 'IT', aliases: ['Genova'] },
  { city: 'Verona', cityJa: 'ヴェローナ', countryCode: 'IT', aliases: [] },
  { city: 'Pisa', cityJa: 'ピサ', countryCode: 'IT', aliases: [] },
  { city: 'Amalfi', cityJa: 'アマルフィ', countryCode: 'IT', aliases: [] },
  { city: 'Cinque Terre', cityJa: 'チンクエテッレ', countryCode: 'IT', aliases: [] },
  { city: 'Vatican City', cityJa: 'バチカン', countryCode: 'VA', aliases: [] },

  // Spain
  { city: 'Madrid', cityJa: 'マドリード', countryCode: 'ES', aliases: [] },
  { city: 'Barcelona', cityJa: 'バルセロナ', countryCode: 'ES', aliases: [] },
  { city: 'Seville', cityJa: 'セビリア', countryCode: 'ES', aliases: ['Sevilla'] },
  { city: 'Valencia', cityJa: 'バレンシア', countryCode: 'ES', aliases: [] },
  { city: 'Granada', cityJa: 'グラナダ', countryCode: 'ES', aliases: [] },
  { city: 'Bilbao', cityJa: 'ビルバオ', countryCode: 'ES', aliases: [] },
  { city: 'Malaga', cityJa: 'マラガ', countryCode: 'ES', aliases: ['Málaga'] },
  { city: 'San Sebastian', cityJa: 'サンセバスティアン', countryCode: 'ES', aliases: ['Donostia'] },
  { city: 'Ibiza', cityJa: 'イビサ', countryCode: 'ES', aliases: [] },
  { city: 'Mallorca', cityJa: 'マヨルカ', countryCode: 'ES', aliases: ['Palma'] },

  // Portugal
  { city: 'Lisbon', cityJa: 'リスボン', countryCode: 'PT', aliases: ['Lisboa'] },
  { city: 'Porto', cityJa: 'ポルト', countryCode: 'PT', aliases: [] },
  { city: 'Faro', cityJa: 'ファロ', countryCode: 'PT', aliases: [] },
  { city: 'Madeira', cityJa: 'マデイラ', countryCode: 'PT', aliases: ['Funchal'] },

  // Netherlands
  { city: 'Amsterdam', cityJa: 'アムステルダム', countryCode: 'NL', aliases: [] },
  { city: 'Rotterdam', cityJa: 'ロッテルダム', countryCode: 'NL', aliases: [] },
  { city: 'The Hague', cityJa: 'ハーグ', countryCode: 'NL', aliases: ['Den Haag'] },
  { city: 'Utrecht', cityJa: 'ユトレヒト', countryCode: 'NL', aliases: [] },

  // Belgium
  { city: 'Brussels', cityJa: 'ブリュッセル', countryCode: 'BE', aliases: ['Bruxelles'] },
  { city: 'Bruges', cityJa: 'ブルージュ', countryCode: 'BE', aliases: ['Brugge'] },
  { city: 'Antwerp', cityJa: 'アントワープ', countryCode: 'BE', aliases: ['Antwerpen'] },
  { city: 'Ghent', cityJa: 'ゲント', countryCode: 'BE', aliases: ['Gent'] },

  // Switzerland
  { city: 'Zurich', cityJa: 'チューリッヒ', countryCode: 'CH', aliases: ['Zürich'] },
  { city: 'Geneva', cityJa: 'ジュネーブ', countryCode: 'CH', aliases: ['Genève'] },
  { city: 'Bern', cityJa: 'ベルン', countryCode: 'CH', aliases: [] },
  { city: 'Lucerne', cityJa: 'ルツェルン', countryCode: 'CH', aliases: ['Luzern'] },
  { city: 'Interlaken', cityJa: 'インターラーケン', countryCode: 'CH', aliases: [] },
  { city: 'Zermatt', cityJa: 'ツェルマット', countryCode: 'CH', aliases: [] },

  // Austria
  { city: 'Vienna', cityJa: 'ウィーン', countryCode: 'AT', aliases: ['Wien'] },
  { city: 'Salzburg', cityJa: 'ザルツブルク', countryCode: 'AT', aliases: [] },
  { city: 'Innsbruck', cityJa: 'インスブルック', countryCode: 'AT', aliases: [] },
  { city: 'Graz', cityJa: 'グラーツ', countryCode: 'AT', aliases: [] },

  // Czech Republic
  { city: 'Prague', cityJa: 'プラハ', countryCode: 'CZ', aliases: ['Praha'] },
  { city: 'Cesky Krumlov', cityJa: 'チェスキークルムロフ', countryCode: 'CZ', aliases: [] },
  { city: 'Brno', cityJa: 'ブルノ', countryCode: 'CZ', aliases: [] },

  // Poland
  { city: 'Warsaw', cityJa: 'ワルシャワ', countryCode: 'PL', aliases: ['Warszawa'] },
  { city: 'Krakow', cityJa: 'クラクフ', countryCode: 'PL', aliases: ['Kraków'] },
  { city: 'Gdansk', cityJa: 'グダンスク', countryCode: 'PL', aliases: ['Gdańsk'] },
  { city: 'Wroclaw', cityJa: 'ヴロツワフ', countryCode: 'PL', aliases: ['Wrocław'] },

  // Hungary
  { city: 'Budapest', cityJa: 'ブダペスト', countryCode: 'HU', aliases: [] },

  // Greece
  { city: 'Athens', cityJa: 'アテネ', countryCode: 'GR', aliases: ['Athina'] },
  { city: 'Santorini', cityJa: 'サントリーニ', countryCode: 'GR', aliases: ['Thira'] },
  { city: 'Mykonos', cityJa: 'ミコノス', countryCode: 'GR', aliases: [] },
  { city: 'Thessaloniki', cityJa: 'テッサロニキ', countryCode: 'GR', aliases: [] },
  { city: 'Crete', cityJa: 'クレタ', countryCode: 'GR', aliases: ['Heraklion'] },
  { city: 'Rhodes', cityJa: 'ロードス', countryCode: 'GR', aliases: [] },
  { city: 'Corfu', cityJa: 'コルフ', countryCode: 'GR', aliases: [] },

  // Croatia
  { city: 'Dubrovnik', cityJa: 'ドブロブニク', countryCode: 'HR', aliases: [] },
  { city: 'Zagreb', cityJa: 'ザグレブ', countryCode: 'HR', aliases: [] },
  { city: 'Split', cityJa: 'スプリット', countryCode: 'HR', aliases: [] },
  { city: 'Plitvice', cityJa: 'プリトヴィツェ', countryCode: 'HR', aliases: [] },

  // Scandinavia
  { city: 'Copenhagen', cityJa: 'コペンハーゲン', countryCode: 'DK', aliases: ['København'] },
  { city: 'Stockholm', cityJa: 'ストックホルム', countryCode: 'SE', aliases: [] },
  { city: 'Oslo', cityJa: 'オスロ', countryCode: 'NO', aliases: [] },
  { city: 'Bergen', cityJa: 'ベルゲン', countryCode: 'NO', aliases: [] },
  { city: 'Helsinki', cityJa: 'ヘルシンキ', countryCode: 'FI', aliases: [] },
  { city: 'Reykjavik', cityJa: 'レイキャビク', countryCode: 'IS', aliases: [] },

  // Baltics
  { city: 'Tallinn', cityJa: 'タリン', countryCode: 'EE', aliases: [] },
  { city: 'Riga', cityJa: 'リガ', countryCode: 'LV', aliases: [] },
  { city: 'Vilnius', cityJa: 'ヴィリニュス', countryCode: 'LT', aliases: [] },

  // Balkans
  { city: 'Ljubljana', cityJa: 'リュブリャナ', countryCode: 'SI', aliases: [] },
  { city: 'Belgrade', cityJa: 'ベオグラード', countryCode: 'RS', aliases: ['Beograd'] },
  { city: 'Sarajevo', cityJa: 'サラエボ', countryCode: 'BA', aliases: [] },
  { city: 'Skopje', cityJa: 'スコピエ', countryCode: 'MK', aliases: [] },
  { city: 'Tirana', cityJa: 'ティラナ', countryCode: 'AL', aliases: [] },
  { city: 'Podgorica', cityJa: 'ポドゴリツァ', countryCode: 'ME', aliases: [] },
  { city: 'Kotor', cityJa: 'コトル', countryCode: 'ME', aliases: [] },

  // Eastern Europe
  { city: 'Moscow', cityJa: 'モスクワ', countryCode: 'RU', aliases: ['Moskva'] },
  { city: 'Saint Petersburg', cityJa: 'サンクトペテルブルク', countryCode: 'RU', aliases: ['St. Petersburg'] },
  { city: 'Kyiv', cityJa: 'キーウ', countryCode: 'UA', aliases: ['Kiev'] },
  { city: 'Bucharest', cityJa: 'ブカレスト', countryCode: 'RO', aliases: ['București'] },
  { city: 'Sofia', cityJa: 'ソフィア', countryCode: 'BG', aliases: [] },
  { city: 'Minsk', cityJa: 'ミンスク', countryCode: 'BY', aliases: [] },
  { city: 'Chisinau', cityJa: 'キシナウ', countryCode: 'MD', aliases: [] },

  // Ireland
  { city: 'Dublin', cityJa: 'ダブリン', countryCode: 'IE', aliases: [] },
  { city: 'Galway', cityJa: 'ゴールウェイ', countryCode: 'IE', aliases: [] },
  { city: 'Cork', cityJa: 'コーク', countryCode: 'IE', aliases: [] },

  // Luxembourg & others
  { city: 'Luxembourg City', cityJa: 'ルクセンブルク', countryCode: 'LU', aliases: [] },
  { city: 'Vaduz', cityJa: 'ファドゥーツ', countryCode: 'LI', aliases: [] },
  { city: 'Andorra la Vella', cityJa: 'アンドラ・ラ・ベリャ', countryCode: 'AD', aliases: [] },
  { city: 'San Marino', cityJa: 'サンマリノ', countryCode: 'SM', aliases: [] },
  { city: 'Gibraltar', cityJa: 'ジブラルタル', countryCode: 'GI', aliases: [] },
  { city: 'Malta', cityJa: 'マルタ', countryCode: 'MT', aliases: ['Valletta'] },

  // Cyprus
  { city: 'Nicosia', cityJa: 'ニコシア', countryCode: 'CY', aliases: ['Lefkosia'] },
  { city: 'Limassol', cityJa: 'リマソール', countryCode: 'CY', aliases: [] },
  { city: 'Paphos', cityJa: 'パフォス', countryCode: 'CY', aliases: [] },

  // ===== AMERICAS =====
  // USA
  { city: 'New York', cityJa: 'ニューヨーク', countryCode: 'US', aliases: ['NYC', 'New York City'] },
  { city: 'Los Angeles', cityJa: 'ロサンゼルス', countryCode: 'US', aliases: ['LA'] },
  { city: 'San Francisco', cityJa: 'サンフランシスコ', countryCode: 'US', aliases: ['SF'] },
  { city: 'Las Vegas', cityJa: 'ラスベガス', countryCode: 'US', aliases: [] },
  { city: 'Chicago', cityJa: 'シカゴ', countryCode: 'US', aliases: [] },
  { city: 'Miami', cityJa: 'マイアミ', countryCode: 'US', aliases: [] },
  { city: 'Seattle', cityJa: 'シアトル', countryCode: 'US', aliases: [] },
  { city: 'Boston', cityJa: 'ボストン', countryCode: 'US', aliases: [] },
  { city: 'Washington DC', cityJa: 'ワシントンDC', countryCode: 'US', aliases: ['Washington D.C.'] },
  { city: 'Hawaii', cityJa: 'ハワイ', countryCode: 'US', aliases: ['Honolulu'] },
  { city: 'San Diego', cityJa: 'サンディエゴ', countryCode: 'US', aliases: [] },
  { city: 'Denver', cityJa: 'デンバー', countryCode: 'US', aliases: [] },
  { city: 'Phoenix', cityJa: 'フェニックス', countryCode: 'US', aliases: [] },
  { city: 'Dallas', cityJa: 'ダラス', countryCode: 'US', aliases: [] },
  { city: 'Houston', cityJa: 'ヒューストン', countryCode: 'US', aliases: [] },
  { city: 'Atlanta', cityJa: 'アトランタ', countryCode: 'US', aliases: [] },
  { city: 'New Orleans', cityJa: 'ニューオーリンズ', countryCode: 'US', aliases: [] },
  { city: 'Orlando', cityJa: 'オーランド', countryCode: 'US', aliases: [] },
  { city: 'Nashville', cityJa: 'ナッシュビル', countryCode: 'US', aliases: [] },
  { city: 'Philadelphia', cityJa: 'フィラデルフィア', countryCode: 'US', aliases: [] },
  { city: 'Portland', cityJa: 'ポートランド', countryCode: 'US', aliases: [] },
  { city: 'Austin', cityJa: 'オースティン', countryCode: 'US', aliases: [] },
  { city: 'Anchorage', cityJa: 'アンカレッジ', countryCode: 'US', aliases: [] },

  // Canada
  { city: 'Toronto', cityJa: 'トロント', countryCode: 'CA', aliases: [] },
  { city: 'Vancouver', cityJa: 'バンクーバー', countryCode: 'CA', aliases: [] },
  { city: 'Montreal', cityJa: 'モントリオール', countryCode: 'CA', aliases: ['Montréal'] },
  { city: 'Calgary', cityJa: 'カルガリー', countryCode: 'CA', aliases: [] },
  { city: 'Ottawa', cityJa: 'オタワ', countryCode: 'CA', aliases: [] },
  { city: 'Quebec City', cityJa: 'ケベックシティ', countryCode: 'CA', aliases: ['Québec'] },
  { city: 'Winnipeg', cityJa: 'ウィニペグ', countryCode: 'CA', aliases: [] },
  { city: 'Edmonton', cityJa: 'エドモントン', countryCode: 'CA', aliases: [] },
  { city: 'Halifax', cityJa: 'ハリファックス', countryCode: 'CA', aliases: [] },
  { city: 'Victoria', cityJa: 'ビクトリア', countryCode: 'CA', aliases: [] },
  { city: 'Banff', cityJa: 'バンフ', countryCode: 'CA', aliases: [] },

  // Mexico
  { city: 'Mexico City', cityJa: 'メキシコシティ', countryCode: 'MX', aliases: ['CDMX'] },
  { city: 'Cancun', cityJa: 'カンクン', countryCode: 'MX', aliases: ['Cancún'] },
  { city: 'Guadalajara', cityJa: 'グアダラハラ', countryCode: 'MX', aliases: [] },
  { city: 'Monterrey', cityJa: 'モンテレイ', countryCode: 'MX', aliases: [] },
  { city: 'Playa del Carmen', cityJa: 'プラヤデルカルメン', countryCode: 'MX', aliases: [] },
  { city: 'Puerto Vallarta', cityJa: 'プエルトバジャルタ', countryCode: 'MX', aliases: [] },
  { city: 'Oaxaca', cityJa: 'オアハカ', countryCode: 'MX', aliases: [] },
  { city: 'Tulum', cityJa: 'トゥルム', countryCode: 'MX', aliases: [] },

  // Caribbean
  { city: 'Havana', cityJa: 'ハバナ', countryCode: 'CU', aliases: ['La Habana'] },
  { city: 'San Juan', cityJa: 'サンフアン', countryCode: 'PR', aliases: [] },
  { city: 'Nassau', cityJa: 'ナッソー', countryCode: 'BS', aliases: [] },
  { city: 'Kingston', cityJa: 'キングストン', countryCode: 'JM', aliases: [] },
  { city: 'Montego Bay', cityJa: 'モンテゴベイ', countryCode: 'JM', aliases: [] },
  { city: 'Punta Cana', cityJa: 'プンタカナ', countryCode: 'DO', aliases: [] },
  { city: 'Santo Domingo', cityJa: 'サントドミンゴ', countryCode: 'DO', aliases: [] },
  { city: 'Aruba', cityJa: 'アルバ', countryCode: 'AW', aliases: ['Oranjestad'] },
  { city: 'Curacao', cityJa: 'キュラソー', countryCode: 'CW', aliases: ['Willemstad'] },

  // Central America
  { city: 'San Jose', cityJa: 'サンホセ', countryCode: 'CR', aliases: [] },
  { city: 'Panama City', cityJa: 'パナマシティ', countryCode: 'PA', aliases: [] },
  { city: 'Guatemala City', cityJa: 'グアテマラシティ', countryCode: 'GT', aliases: [] },
  { city: 'Belize City', cityJa: 'ベリーズシティ', countryCode: 'BZ', aliases: [] },
  { city: 'Managua', cityJa: 'マナグア', countryCode: 'NI', aliases: [] },
  { city: 'Tegucigalpa', cityJa: 'テグシガルパ', countryCode: 'HN', aliases: [] },
  { city: 'San Salvador', cityJa: 'サンサルバドル', countryCode: 'SV', aliases: [] },

  // South America
  { city: 'Rio de Janeiro', cityJa: 'リオデジャネイロ', countryCode: 'BR', aliases: ['Rio'] },
  { city: 'Sao Paulo', cityJa: 'サンパウロ', countryCode: 'BR', aliases: ['São Paulo'] },
  { city: 'Buenos Aires', cityJa: 'ブエノスアイレス', countryCode: 'AR', aliases: [] },
  { city: 'Lima', cityJa: 'リマ', countryCode: 'PE', aliases: [] },
  { city: 'Cusco', cityJa: 'クスコ', countryCode: 'PE', aliases: ['Machu Picchu'] },
  { city: 'Bogota', cityJa: 'ボゴタ', countryCode: 'CO', aliases: ['Bogotá'] },
  { city: 'Cartagena', cityJa: 'カルタヘナ', countryCode: 'CO', aliases: [] },
  { city: 'Medellin', cityJa: 'メデジン', countryCode: 'CO', aliases: ['Medellín'] },
  { city: 'Santiago', cityJa: 'サンティアゴ', countryCode: 'CL', aliases: [] },
  { city: 'Quito', cityJa: 'キト', countryCode: 'EC', aliases: [] },
  { city: 'Galapagos', cityJa: 'ガラパゴス', countryCode: 'EC', aliases: [] },
  { city: 'Caracas', cityJa: 'カラカス', countryCode: 'VE', aliases: [] },
  { city: 'La Paz', cityJa: 'ラパス', countryCode: 'BO', aliases: [] },
  { city: 'Uyuni', cityJa: 'ウユニ', countryCode: 'BO', aliases: [] },
  { city: 'Montevideo', cityJa: 'モンテビデオ', countryCode: 'UY', aliases: [] },
  { city: 'Asuncion', cityJa: 'アスンシオン', countryCode: 'PY', aliases: ['Asunción'] },
  { city: 'Georgetown', cityJa: 'ジョージタウン', countryCode: 'GY', aliases: [] },
  { city: 'Paramaribo', cityJa: 'パラマリボ', countryCode: 'SR', aliases: [] },
  { city: 'Cayenne', cityJa: 'カイエンヌ', countryCode: 'GF', aliases: [] },

  // ===== AFRICA =====
  { city: 'Cairo', cityJa: 'カイロ', countryCode: 'EG', aliases: [] },
  { city: 'Luxor', cityJa: 'ルクソール', countryCode: 'EG', aliases: [] },
  { city: 'Marrakech', cityJa: 'マラケシュ', countryCode: 'MA', aliases: ['Marrakesh'] },
  { city: 'Casablanca', cityJa: 'カサブランカ', countryCode: 'MA', aliases: [] },
  { city: 'Fes', cityJa: 'フェズ', countryCode: 'MA', aliases: ['Fez'] },
  { city: 'Cape Town', cityJa: 'ケープタウン', countryCode: 'ZA', aliases: [] },
  { city: 'Johannesburg', cityJa: 'ヨハネスブルグ', countryCode: 'ZA', aliases: [] },
  { city: 'Durban', cityJa: 'ダーバン', countryCode: 'ZA', aliases: [] },
  { city: 'Nairobi', cityJa: 'ナイロビ', countryCode: 'KE', aliases: [] },
  { city: 'Mombasa', cityJa: 'モンバサ', countryCode: 'KE', aliases: [] },
  { city: 'Dar es Salaam', cityJa: 'ダルエスサラーム', countryCode: 'TZ', aliases: [] },
  { city: 'Zanzibar', cityJa: 'ザンジバル', countryCode: 'TZ', aliases: [] },
  { city: 'Lagos', cityJa: 'ラゴス', countryCode: 'NG', aliases: [] },
  { city: 'Accra', cityJa: 'アクラ', countryCode: 'GH', aliases: [] },
  { city: 'Addis Ababa', cityJa: 'アディスアベバ', countryCode: 'ET', aliases: [] },
  { city: 'Tunis', cityJa: 'チュニス', countryCode: 'TN', aliases: [] },
  { city: 'Algiers', cityJa: 'アルジェ', countryCode: 'DZ', aliases: [] },
  { city: 'Mauritius', cityJa: 'モーリシャス', countryCode: 'MU', aliases: ['Port Louis'] },
  { city: 'Seychelles', cityJa: 'セーシェル', countryCode: 'SC', aliases: ['Victoria'] },
  { city: 'Victoria Falls', cityJa: 'ビクトリアフォールズ', countryCode: 'ZW', aliases: [] },
  { city: 'Kigali', cityJa: 'キガリ', countryCode: 'RW', aliases: [] },
  { city: 'Kampala', cityJa: 'カンパラ', countryCode: 'UG', aliases: [] },
  { city: 'Windhoek', cityJa: 'ウィントフック', countryCode: 'NA', aliases: [] },
  { city: 'Gaborone', cityJa: 'ハボローネ', countryCode: 'BW', aliases: [] },
  { city: 'Dakar', cityJa: 'ダカール', countryCode: 'SN', aliases: [] },
  { city: 'Abidjan', cityJa: 'アビジャン', countryCode: 'CI', aliases: [] },

  // ===== OCEANIA =====
  { city: 'Sydney', cityJa: 'シドニー', countryCode: 'AU', aliases: [] },
  { city: 'Melbourne', cityJa: 'メルボルン', countryCode: 'AU', aliases: [] },
  { city: 'Brisbane', cityJa: 'ブリスベン', countryCode: 'AU', aliases: [] },
  { city: 'Perth', cityJa: 'パース', countryCode: 'AU', aliases: [] },
  { city: 'Adelaide', cityJa: 'アデレード', countryCode: 'AU', aliases: [] },
  { city: 'Gold Coast', cityJa: 'ゴールドコースト', countryCode: 'AU', aliases: [] },
  { city: 'Cairns', cityJa: 'ケアンズ', countryCode: 'AU', aliases: [] },
  { city: 'Darwin', cityJa: 'ダーウィン', countryCode: 'AU', aliases: [] },
  { city: 'Hobart', cityJa: 'ホバート', countryCode: 'AU', aliases: [] },
  { city: 'Auckland', cityJa: 'オークランド', countryCode: 'NZ', aliases: [] },
  { city: 'Wellington', cityJa: 'ウェリントン', countryCode: 'NZ', aliases: [] },
  { city: 'Queenstown', cityJa: 'クイーンズタウン', countryCode: 'NZ', aliases: [] },
  { city: 'Christchurch', cityJa: 'クライストチャーチ', countryCode: 'NZ', aliases: [] },
  { city: 'Rotorua', cityJa: 'ロトルア', countryCode: 'NZ', aliases: [] },
  { city: 'Fiji', cityJa: 'フィジー', countryCode: 'FJ', aliases: ['Suva', 'Nadi'] },
  { city: 'Tahiti', cityJa: 'タヒチ', countryCode: 'PF', aliases: ['Papeete'] },
  { city: 'Bora Bora', cityJa: 'ボラボラ', countryCode: 'PF', aliases: [] },
  { city: 'New Caledonia', cityJa: 'ニューカレドニア', countryCode: 'NC', aliases: ['Noumea'] },
  { city: 'Guam', cityJa: 'グアム', countryCode: 'GU', aliases: [] },
  { city: 'Saipan', cityJa: 'サイパン', countryCode: 'MP', aliases: [] },
  { city: 'Palau', cityJa: 'パラオ', countryCode: 'PW', aliases: ['Koror'] },
  { city: 'Vanuatu', cityJa: 'バヌアツ', countryCode: 'VU', aliases: ['Port Vila'] },
  { city: 'Samoa', cityJa: 'サモア', countryCode: 'WS', aliases: ['Apia'] },
  { city: 'Tonga', cityJa: 'トンガ', countryCode: 'TO', aliases: ["Nuku'alofa"] },
  { city: 'Cook Islands', cityJa: 'クック諸島', countryCode: 'CK', aliases: ['Rarotonga'] },
];

// 都市名から国コードを取得する関数
export function getCountryCodeFromCity(cityName: string): string | undefined {
  const lowerCity = cityName.toLowerCase().trim();
  
  for (const mapping of cityMappings) {
    // メイン都市名でマッチ
    if (mapping.city.toLowerCase() === lowerCity) {
      return mapping.countryCode;
    }
    // 日本語都市名でマッチ
    if (mapping.cityJa && mapping.cityJa === cityName) {
      return mapping.countryCode;
    }
    // エイリアスでマッチ
    if (mapping.aliases) {
      for (const alias of mapping.aliases) {
        if (alias.toLowerCase() === lowerCity) {
          return mapping.countryCode;
        }
      }
    }
  }
  
  return undefined;
}

// 部分一致で都市を検索
export function searchCities(query: string): CityMapping[] {
  const lowerQuery = query.toLowerCase().trim();
  
  return cityMappings.filter(mapping => {
    if (mapping.city.toLowerCase().includes(lowerQuery)) return true;
    if (mapping.cityJa && mapping.cityJa.includes(query)) return true;
    if (mapping.aliases) {
      return mapping.aliases.some(alias => alias.toLowerCase().includes(lowerQuery));
    }
    return false;
  });
}

// 国コードから都市リストを取得
export function getCitiesByCountryCode(countryCode: string): CityMapping[] {
  return cityMappings.filter(
    mapping => mapping.countryCode.toLowerCase() === countryCode.toLowerCase()
  );
}


// 日本語・カタカナ・ひらがな都市名から英語都市名に変換
export function convertToEnglishCityName(cityName: string): string {
  const trimmedCity = cityName.trim();
  
  for (const mapping of cityMappings) {
    // 英語名（大文字小文字無視）
    if (mapping.city.toLowerCase() === trimmedCity.toLowerCase()) {
      return mapping.city;
    }
    // 日本語名（漢字・カタカナ）
    if (mapping.cityJa && mapping.cityJa === trimmedCity) {
      return mapping.city;
    }
    // エイリアスでマッチ（ひらがな・別名など）
    if (mapping.aliases) {
      for (const alias of mapping.aliases) {
        if (alias.toLowerCase() === trimmedCity.toLowerCase() || alias === trimmedCity) {
          return mapping.city;
        }
      }
    }
  }
  
  // マッピングが見つからない場合は元の入力をそのまま返す
  return trimmedCity;
}