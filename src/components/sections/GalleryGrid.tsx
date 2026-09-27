import PhotoFrame from '@/components/PhotoFrame';
import { categoryLabel, galleryPattern, type Work } from '@/content/works';
import styles from './GalleryGrid.module.css';

export type GalleryItem = Work & { available: boolean };

/**
 * 誌面風の作品ギャラリー。
 * 表示順に応じて大小・縦横の枠を割り当てます（パターンは works.ts の galleryPattern）。
 * サーバー／クライアントどちらからも使える純粋なコンポーネントです。
 */
export default function GalleryGrid({ items, headingLevel = 3 }: { items: GalleryItem[]; headingLevel?: 3 | 4 }) {
  const Title = `h${headingLevel}` as 'h3' | 'h4';
  return (
    <ul className={styles.grid}>
      {items.map((item, i) => {
        const p = galleryPattern[i % galleryPattern.length];
        return (
          <li key={item.id} className={`${styles.item} ${styles[p.slot]} reveal`}>
            <figure>
              <PhotoFrame
                src={item.src}
                alt={item.title ?? `${categoryLabel(item.category)} の作品`}
                label={item.label}
                ratio={p.ratio}
                available={item.available}
                sizes={p.slot === 'a' || p.slot === 'e' ? '(min-width: 900px) 60vw, 100vw' : '(min-width: 900px) 34vw, 50vw'}
              />
              <figcaption className={styles.caption}>
                <span className={styles.no}>No.{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cat}>{categoryLabel(item.category)}</span>
                {item.title && <Title className={styles.title}>{item.title}</Title>}
                {item.note && <span className={styles.note}>{item.note}</span>}
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
