// Antarctica and other territories
// ISO 3166-1 alpha-2 codes

import type { CountryInfo } from '../types';

export const otherCountries: CountryInfo[] = [
  // Antarctica
  {
    code: 'AQ',
    name: 'Antarctica',
    nameJa: '南極',
    plugTypes: ['A', 'B', 'C', 'I'], // 基地により異なる
    voltage: 230,
    frequency: 50,
    climate: 'polar',
    region: 'Antarctica',
    subregion: 'Antarctica',
    culturalNotes: ['南極条約', '研究基地のみ', '厳しい環境規制'],
    commonItems: ['極地用防寒着', '防水装備', 'サングラス']
  },
  {
    code: 'BV',
    name: 'Bouvet Island',
    nameJa: 'ブーベ島',
    plugTypes: ['C', 'F'],
    voltage: 230,
    frequency: 50,
    climate: 'polar',
    region: 'Antarctica',
    subregion: 'Antarctica',
    culturalNotes: ['ノルウェー領', '無人島', '世界最も孤立した島'],
    commonItems: ['極地用防寒着', '防水装備', 'サングラス']
  },
  {
    code: 'HM',
    name: 'Heard Island and McDonald Islands',
    nameJa: 'ハード島・マクドナルド諸島',
    plugTypes: ['I'],
    voltage: 230,
    frequency: 50,
    climate: 'polar',
    region: 'Antarctica',
    subregion: 'Antarctica',
    culturalNotes: ['オーストラリア領', '無人島', '活火山'],
    commonItems: ['極地用防寒着', '防水装備', 'サングラス']
  },
  {
    code: 'TF',
    name: 'French Southern Territories',
    nameJa: 'フランス領南方・南極地域',
    plugTypes: ['C', 'E'],
    voltage: 220,
    frequency: 50,
    climate: 'polar',
    region: 'Antarctica',
    subregion: 'Antarctica',
    culturalNotes: ['フランス領', '研究基地', '野生動物の宝庫'],
    commonItems: ['極地用防寒着', '防水装備', 'サングラス']
  }
];
