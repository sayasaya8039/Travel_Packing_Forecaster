// Regional data index - aggregates all country data
// Total: 249 ISO 3166-1 alpha-2 codes

import { asia } from './asia';
import { europeCountries } from './europe';
import { americasCountries } from './americas';
import { africaCountries } from './africa';
import { oceaniaCountries } from './oceania';
import { otherCountries } from './other';
import type { CountryInfo, Region } from '../types';
import { japanesePrefectures, getPrefectureByCode, getPrefectureByName, getPrefecturesByRegion } from './japan-prefectures';

// リージョン別のエクスポート（名前を統一）
export const asiaCountries = asia;
export {
  europeCountries,
  americasCountries,
  africaCountries,
  oceaniaCountries,
  otherCountries,
};

// 全国データの統合
export const allCountries: CountryInfo[] = [
  ...asia,
  ...europeCountries,
  ...americasCountries,
  ...africaCountries,
  ...oceaniaCountries,
  ...otherCountries,
];

// 国コードから国情報を取得
export function getCountryByCode(code: string): CountryInfo | undefined {
  return allCountries.find(
    (country) => country.code.toLowerCase() === code.toLowerCase()
  );
}

// 国名（英語）から国情報を取得
export function getCountryByName(name: string): CountryInfo | undefined {
  const lowerName = name.toLowerCase();
  return allCountries.find(
    (country) =>
      country.name.toLowerCase() === lowerName ||
      country.name.toLowerCase().includes(lowerName)
  );
}

// 国名（日本語）から国情報を取得
export function getCountryByNameJa(nameJa: string): CountryInfo | undefined {
  return allCountries.find(
    (country) =>
      country.nameJa === nameJa || country.nameJa.includes(nameJa)
  );
}

// リージョン別の国リストを取得
export function getCountriesByRegion(region: Region): CountryInfo[] {
  return allCountries.filter((country) => country.region === region);
}

// サブリージョン別の国リストを取得
export function getCountriesBySubregion(subregion: string): CountryInfo[] {
  return allCountries.filter((country) => country.subregion === subregion);
}

// 統計情報
export const countryStats = {
  total: allCountries.length,
  byRegion: {
    Asia: asia.length,
    Europe: europeCountries.length,
    Americas: americasCountries.length,
    Africa: africaCountries.length,
    Oceania: oceaniaCountries.length,
    Antarctica: otherCountries.length,
  },
};

// 日本の都道府県情報
export {
  japanesePrefectures,
  getPrefectureByCode,
  getPrefectureByName,
  getPrefecturesByRegion,
};
