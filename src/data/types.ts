// 国・地域情報の型定義
// ISO 3166-1 alpha-2 準拠（249の国・地域）

export interface CountryInfo {
  code: string;        // ISO 3166-1 alpha-2 コード
  name: string;        // 英語名
  nameJa: string;      // 日本語名
  plugTypes: PlugType[];
  voltage: number;
  frequency: number;
  culturalNotes: string[];
  commonItems: string[];
  climate: ClimateType;
  region: Region;
  subregion: string;
}

export type PlugType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O';

export type ClimateType =
  | 'tropical'      // 熱帯
  | 'subtropical'   // 亜熱帯
  | 'temperate'     // 温帯
  | 'continental'   // 大陸性
  | 'polar'         // 極地
  | 'arid'          // 乾燥
  | 'mediterranean' // 地中海性
  | 'oceanic';      // 海洋性

export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctica';

// プラグタイプの説明
export const plugTypeDescriptions: Record<PlugType, string> = {
  A: 'Aタイプ（2ピン平行・日本/北米）',
  B: 'Bタイプ（3ピン平行・北米）',
  C: 'Cタイプ（2ピン丸・ヨーロッパ）',
  D: 'Dタイプ（3ピン丸・インド旧式）',
  E: 'Eタイプ（2ピン丸+アース穴・フランス）',
  F: 'Fタイプ（2ピン丸+アースクリップ・ドイツ）',
  G: 'Gタイプ（3ピン角・イギリス）',
  H: 'Hタイプ（3ピン・イスラエル）',
  I: 'Iタイプ（ハの字・オーストラリア）',
  J: 'Jタイプ（3ピン・スイス）',
  K: 'Kタイプ（3ピン・デンマーク）',
  L: 'Lタイプ（3ピン一列・イタリア）',
  M: 'Mタイプ（3ピン大型・南アフリカ）',
  N: 'Nタイプ（3ピン・ブラジル）',
  O: 'Oタイプ（3ピン・タイ）',
};

// 気候タイプの説明
export const climateDescriptions: Record<ClimateType, string> = {
  tropical: '熱帯（年間高温多湿）',
  subtropical: '亜熱帯（温暖で湿度が高い）',
  temperate: '温帯（四季がある）',
  continental: '大陸性（寒暖差が大きい）',
  polar: '極地（極めて寒冷）',
  arid: '乾燥（砂漠・ステップ）',
  mediterranean: '地中海性（夏乾燥・冬温暖）',
  oceanic: '海洋性（年間を通じて穏やか）',
};

// 軽量な国インデックス（検索・オートコンプリート用）
export interface CountryIndex {
  code: string;
  name: string;
  nameJa: string;
  region: Region;
}

// 日本の都道府県情報
export interface PrefectureInfo {
  code: string;           // 都道府県コード（01-47）
  name: string;           // 英語名
  nameJa: string;         // 日本語名（県名）
  capital: string;        // 県庁所在地（英語）
  capitalJa: string;      // 県庁所在地（日本語）
  climate: PrefectureClimate;
  region: JapanRegion;
  tips: string[];         // 旅行のヒント
  specialItems: string[]; // 特に必要な持ち物
  bestSeason: string;     // ベストシーズン
  warnings?: string[];    // 注意事項（オプション）
}

export type PrefectureClimate =
  | 'subarctic'     // 亜寒帯（北海道）
  | 'humid-continental' // 湿潤大陸性（東北・北陸）
  | 'humid-subtropical' // 温暖湿潤（関東〜九州）
  | 'subtropical';      // 亜熱帯（沖縄）

export type JapanRegion =
  | 'Hokkaido'    // 北海道
  | 'Tohoku'      // 東北
  | 'Kanto'       // 関東
  | 'Chubu'       // 中部
  | 'Kinki'       // 近畿
  | 'Chugoku'     // 中国
  | 'Shikoku'     // 四国
  | 'Kyushu';     // 九州・沖縄
