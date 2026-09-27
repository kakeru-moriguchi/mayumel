'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * `.reveal` クラスを持つ要素を、画面に入ったときに一度だけフェード表示します。
 * 各セクションはクラスを付けるだけでよく、個別のクライアントコンポーネントは不要です。
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
