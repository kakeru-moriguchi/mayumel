import { ImageResponse } from 'next/og';
import { site } from '@/config/site';

export const alt = `${site.name} — Parfait / Dessert / Menu Development`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

/**
 * 既定の OGP 画像（文字組み）。
 * 写真を使いたい場合は、このファイルを削除して
 * src/app/opengraph-image.jpg（1200×630）を置いてください。
 */
async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400&text=${encodeURIComponent(text)}`,
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const text = `${site.name}${site.tagline.join(' / ')}`;
  const font = await loadFont(text);
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f3eee5',
          color: '#2e2a26',
          padding: 72,
          fontFamily: font ? 'Cormorant' : 'serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
          <div style={{ fontSize: 150, fontStyle: 'italic', lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 28, fontSize: 36, fontStyle: 'italic', color: '#5f564d' }}>
            {site.tagline.join(' / ')}
          </div>
        </div>
        <div style={{ width: 330, height: '100%', background: '#dcd0bd', display: 'flex' }} />
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: 'Cormorant', data: font, style: 'italic', weight: 400 }] : undefined,
    },
  );
}
