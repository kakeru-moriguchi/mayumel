'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * `.reveal` クラスを持つ要素を、画面に入ったときに一度だけフェード表示します。
 * 各セクションはクラスを付けるだけでよく、個別のクライアントコンポーネントは不要です。
 * （絞り込みなどで後から追加された要素も対象になります）
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const show = (el: Element) => el.classList.add('is-in');

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    const scan = (root: ParentNode) =>
      root.querySelectorAll('.reveal:not(.is-in)').forEach((el) => io.observe(el));
    scan(document);

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches('.reveal:not(.is-in)')) io.observe(node);
          scan(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
