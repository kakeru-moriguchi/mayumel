/**
 * 制作実績（WORKS）。
 *
 * 現在は写真が無いため、写真枠のみの状態です。
 * 作品名・クライアント名などは、実際の情報が決まってから `title` / `note` に入れてください。
 * （未入力の項目は表示されません）
 *
 * 写真を追加する手順:
 *   1. public/images/works/ に画像を置く（例: parfait-01.jpg）
 *   2. 下の配列の該当行の src と一致していれば自動で表示されます
 *   3. 新しい作品は配列に1行追加します（並び順＝表示順）
 */

import type { Ratio } from './images';

export const workCategories = [
  { id: 'parfait', en: 'Parfait', ja: 'パフェ' },
  { id: 'course', en: 'Course Dessert', ja: 'コースデザート' },
  { id: 'menu', en: 'Menu Development', ja: 'メニュー開発' },
  { id: 'product', en: 'Product Development', ja: '商品開発' },
  { id: 'seasonal', en: 'Seasonal', ja: '季節のデザート' },
] as const;

export type WorkCategory = (typeof workCategories)[number]['id'];

export type Work = {
  id: string;
  category: WorkCategory;
  src: string;
  /** 写真が無い間の仮ラベル */
  label: string;
  /** 作品名（未定なら空のまま） */
  title?: string;
  /** 補足（素材・提供先など。実在の情報のみ） */
  note?: string;
  /** HOME に掲載するか */
  featured?: boolean;
};

export const works: Work[] = [
  { id: 'parfait-01', category: 'parfait', src: '/images/works/parfait-01.jpg', label: 'Parfait Image', featured: true },
  { id: 'course-01', category: 'course', src: '/images/works/course-01.jpg', label: 'Dessert Image', featured: true },
  { id: 'parfait-02', category: 'parfait', src: '/images/works/parfait-02.jpg', label: 'Parfait Image', featured: true },
  { id: 'product-01', category: 'product', src: '/images/works/product-01.jpg', label: 'Product Image', featured: true },
  { id: 'seasonal-01', category: 'seasonal', src: '/images/works/seasonal-01.jpg', label: 'Seasonal Image', featured: true },
  { id: 'menu-01', category: 'menu', src: '/images/works/menu-01.jpg', label: 'Menu Image' },
  { id: 'course-02', category: 'course', src: '/images/works/course-02.jpg', label: 'Dessert Image' },
  { id: 'parfait-03', category: 'parfait', src: '/images/works/parfait-03.jpg', label: 'Parfait Image' },
  { id: 'product-02', category: 'product', src: '/images/works/product-02.jpg', label: 'Product Image' },
  { id: 'parfait-04', category: 'parfait', src: '/images/works/parfait-04.jpg', label: 'Parfait Image' },
  { id: 'menu-02', category: 'menu', src: '/images/works/menu-02.jpg', label: 'Menu Image' },
  { id: 'seasonal-02', category: 'seasonal', src: '/images/works/seasonal-02.jpg', label: 'Seasonal Image' },
];

/**
 * ギャラリーのレイアウト。表示順に応じて下のパターンを繰り返します。
 * 写真の比率もここで決まるため、撮影時の目安にしてください。
 */
export const galleryPattern: { ratio: Ratio; slot: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' }[] = [
  { ratio: '4/5', slot: 'a' }, // 大・縦
  { ratio: '2/3', slot: 'b' }, // 小・縦長（下にずらす）
  { ratio: '1/1', slot: 'c' }, // 小・正方形
  { ratio: '3/2', slot: 'd' }, // 中・横
  { ratio: '3/2', slot: 'e' }, // 大・横
  { ratio: '4/5', slot: 'f' }, // 小・縦
];

export const categoryLabel = (id: WorkCategory) =>
  workCategories.find((c) => c.id === id)?.en ?? id;
