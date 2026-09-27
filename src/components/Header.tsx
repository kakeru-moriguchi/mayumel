'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation, site, fullAddress } from '@/config/site';
import InstagramButton from './InstagramButton';
import styles from './Header.module.css';

export default function Header({ logo }: { logo: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ページ遷移したらメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const first = panel.current?.querySelector<HTMLElement>('a, button');
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
      // フォーカスをメニュー内に留める
      if (e.key === 'Tab' && panel.current) {
        const items = panel.current.querySelectorAll<HTMLElement>('a, button');
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isCurrent = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const items = navigation.filter((n) => n.href !== '/');

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${site.name} ホーム`}>
          {logo}
        </Link>

        <nav className={styles.nav} aria-label="グローバルナビゲーション">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined} title={item.ja}>
                  {item.en}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.instagram.official.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ig}
          >
            Instagram<span className="sr-only">（MayuMel公式・新しいタブで開きます）</span>
          </a>
        </nav>

        <button
          ref={menuButton}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuText}>{open ? 'Close' : 'Menu'}</span>
          <span className={`${styles.menuLines} ${open ? styles.menuLinesOpen : ''}`} aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panel}
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
        hidden={!open}
      >
        <nav aria-label="メニュー">
          <ol className={styles.panelList}>
            {navigation.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                  <span className={styles.panelNo}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.panelEn}>{item.en}</span>
                  <span className={styles.panelJa}>{item.ja}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className={styles.panelFoot}>
          <InstagramButton />
          <p className={styles.panelAddress}>{fullAddress}</p>
        </div>
      </div>
    </header>
  );
}
