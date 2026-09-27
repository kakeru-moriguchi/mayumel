'use client';

import { useMemo, useState } from 'react';
import GalleryGrid, { type GalleryItem } from '@/components/sections/GalleryGrid';
import { workCategories, type WorkCategory } from '@/content/works';
import styles from './works.module.css';

/** カテゴリ絞り込み付きギャラリー */
export default function WorksFilter({ items }: { items: GalleryItem[] }) {
  const [current, setCurrent] = useState<WorkCategory | 'all'>('all');

  // 作品が存在するカテゴリだけをボタンに出す
  const categories = workCategories.filter((c) => items.some((i) => i.category === c.id));
  const visible = useMemo(
    () => (current === 'all' ? items : items.filter((i) => i.category === current)),
    [current, items],
  );

  return (
    <>
      <div className={styles.filter} role="group" aria-label="カテゴリで絞り込む">
        <button type="button" aria-pressed={current === 'all'} onClick={() => setCurrent('all')}>
          All
          <span className={styles.count}>{items.length}</span>
        </button>
        {categories.map((c) => (
          <button key={c.id} type="button" aria-pressed={current === c.id} onClick={() => setCurrent(c.id)}>
            {c.en}
            <span className="sr-only">（{c.ja}）</span>
            <span className={styles.count}>{items.filter((i) => i.category === c.id).length}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length}件を表示しています
      </p>
      {/* key で再マウントし、レイアウトパターンを先頭から当て直す */}
      <GalleryGrid key={current} items={visible} headingLevel={3} />
    </>
  );
}
