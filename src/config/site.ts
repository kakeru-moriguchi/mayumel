/**
 * MayuMel の基本情報。
 * 住所・電話・Instagram などはこのファイルだけで管理しています。
 * ページ内に直接書かず、必ずここから参照してください。
 *
 * 値が `null` の項目は「未定」です。サイト上には表示されません。
 * 決まったら値を入れるだけで、ACCESS / CONTACT / フッター / 構造化データに反映されます。
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const site = {
  name: 'MayuMel',
  url: siteUrl.replace(/\/$/, ''),
  tagline: ['Parfait', 'Dessert', 'Menu Development'],
  description:
    'MayuMel（マユメル）は、パティシエ・長谷藍一郎によるデザート制作の屋号です。パフェ、コースデザート、メニュー開発、商品開発を中心に、店舗やブランドに合わせたデザートを制作しています。代々木八幡・代々木公園エリア。',

  /** ロゴ画像。null の間は文字組みのワードマークを表示します。例: '/images/logo/logo.svg' */
  logo: {
    src: null as string | null,
    width: 160,
    height: 48,
  },

  owner: {
    name: '長谷 藍一郎',
    /** ローマ字表記（未確認のため未設定） */
    nameEn: null as string | null,
    title: 'デザートクリエイター／パティシエ',
  },

  contact: {
    tel: '080-1482-1489',
    /** 未定 */
    email: null as string | null,
  },

  address: {
    postalCode: '151-0064',
    region: '東京都',
    locality: '渋谷区',
    street: '上原1丁目1-20',
    building: 'JPビル 2階',
  },

  access: {
    stations: ['代々木八幡駅', '代々木公園駅'],
    walk: '徒歩約3分',
    parking: 'なし',
  },

  /** 未定。決まったら文字列で入力してください（例: '11:00–18:00'） */
  hours: null as string | null,
  /** 未定 */
  holiday: null as string | null,

  map: {
    /**
     * Google マップの埋め込みURL（「共有」→「地図を埋め込む」の src）。
     * null の間は「Google マップで開く」リンクのみ表示します。
     */
    embedUrl: null as string | null,
  },

  instagram: {
    /** メインの問い合わせ導線 */
    official: {
      handle: 'mayumel0927',
      label: 'MayuMel',
      url: 'https://www.instagram.com/mayumel0927/',
      dm: 'https://ig.me/m/mayumel0927',
    },
    personal: {
      handle: 'aiichirou0206',
      label: '長谷 藍一郎',
      url: 'https://www.instagram.com/aiichirou0206/',
    },
  },

  /** 将来の機能。true にするとナビ・sitemap・ページが有効になります */
  features: {
    news: false,
    shop: false,
  },

  keywords: [
    'MayuMel',
    'パティシエ',
    'パフェ',
    'デザート',
    'コースデザート',
    'メニュー開発',
    '商品開発',
    '代々木八幡',
    '代々木公園',
  ],
} as const;

export const fullAddress = `〒${site.address.postalCode} ${site.address.region}${site.address.locality}${site.address.street} ${site.address.building}`;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.region}${site.address.locality}${site.address.street} ${site.address.building}`,
)}`;

export type NavItem = { href: string; en: string; ja: string };

export const navigation: NavItem[] = [
  { href: '/', en: 'Home', ja: 'ホーム' },
  { href: '/about', en: 'About', ja: 'MayuMelについて' },
  { href: '/profile', en: 'Profile', ja: 'プロフィール' },
  { href: '/service', en: 'Service', ja: 'できること' },
  { href: '/works', en: 'Works', ja: '制作実績' },
  ...(site.features.news ? [{ href: '/news', en: 'News', ja: 'お知らせ' }] : []),
  { href: '/access', en: 'Access', ja: 'アクセス' },
  { href: '/contact', en: 'Contact', ja: 'お問い合わせ' },
];
