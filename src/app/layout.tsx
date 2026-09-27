import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Wordmark from '@/components/Wordmark';
import RevealObserver from '@/components/RevealObserver';
import { SiteJsonLd } from '@/components/JsonLd';
import { site } from '@/config/site';
import '@/styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const shippori = Shippori_Mincho({
  weight: ['500'],
  variable: '--font-shippori',
  display: 'swap',
  preload: false,
});

const zenkaku = Zen_Kaku_Gothic_New({
  weight: ['400', '500'],
  variable: '--font-zenkaku',
  display: 'swap',
  preload: false,
});

const defaultTitle = `${site.name} | パフェ・コースデザート・商品開発 — パティシエ 長谷藍一郎`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [...site.keywords],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f3eee5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${shippori.variable} ${zenkaku.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JS有効時のみフェード表示を使う（無効時は最初から表示） */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        <Header logo={<Wordmark />} />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <SiteJsonLd />
      </body>
    </html>
  );
}
