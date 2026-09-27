/**
 * サイト内で使う写真の一覧。
 *
 * `src` のパスに画像ファイルを置くだけで、写真枠が実写真に切り替わります。
 * （ファイルが無い間は `label` を表示した写真枠になります）
 *
 * ratio … 表示する比率（横:縦）。撮影・書き出しの目安にしてください。
 * 推奨サイズは README.md の「写真」を参照。
 */

export type Ratio = '4/5' | '3/4' | '2/3' | '1/1' | '3/2' | '16/9' | '5/4';

export type ImageEntry = {
  src: string;
  alt: string;
  /** 写真が無い間に表示する仮ラベル */
  label: string;
  ratio: Ratio;
  /** 被写体の位置（object-position）。人物は 'center 30%' など */
  position?: string;
};

export const images = {
  hero: {
    src: '/images/hero/hero.jpg',
    alt: 'MayuMel のパフェ',
    label: 'Main Visual — Parfait',
    ratio: '4/5',
  },
  portrait: {
    src: '/images/profile/portrait.jpg',
    alt: 'パティシエ 長谷藍一郎',
    label: 'Profile Image',
    ratio: '3/4',
    position: 'center 30%',
  },
  studio: {
    src: '/images/profile/studio.jpg',
    alt: 'デザートを仕上げる制作風景',
    label: 'Making Image',
    ratio: '4/5',
  },
  hands: {
    src: '/images/profile/hands.jpg',
    alt: '盛り付けの手元',
    label: 'Plating Image',
    ratio: '3/2',
  },
  serviceVisual: {
    src: '/images/service/service.jpg',
    alt: 'デザート制作の様子',
    label: 'Dessert Image',
    ratio: '2/3',
  },
  ingredient: {
    src: '/images/approach/ingredient.jpg',
    alt: '季節の素材',
    label: 'Ingredient Image',
    ratio: '3/2',
  },
  season: {
    src: '/images/approach/season.jpg',
    alt: '季節の果物',
    label: 'Seasonal Image',
    ratio: '4/5',
  },
  place: {
    src: '/images/access/place.jpg',
    alt: 'MayuMel の制作拠点',
    label: 'Place Image',
    ratio: '3/2',
  },
  // SERVICE ページ
  serviceParfait: {
    src: '/images/service/parfait.jpg',
    alt: 'パフェ',
    label: 'Parfait Image',
    ratio: '4/5',
  },
  serviceCourse: {
    src: '/images/service/course.jpg',
    alt: 'コースデザート',
    label: 'Course Dessert Image',
    ratio: '3/2',
  },
  serviceMenu: {
    src: '/images/service/menu.jpg',
    alt: 'メニュー開発の試作',
    label: 'Menu Development Image',
    ratio: '1/1',
  },
  serviceProduct: {
    src: '/images/service/product.jpg',
    alt: '商品開発',
    label: 'Product Image',
    ratio: '4/5',
  },
  serviceProposal: {
    src: '/images/service/proposal.jpg',
    alt: '店舗・ブランドに合わせたデザート',
    label: 'Dessert Image',
    ratio: '3/2',
  },
} satisfies Record<string, ImageEntry>;
