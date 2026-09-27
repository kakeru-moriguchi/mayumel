import Link from 'next/link';
import { navigation, site, fullAddress } from '@/config/site';
import Wordmark from './Wordmark';
import styles from './Footer.module.css';

export default function Footer() {
  const { official, personal } = site.instagram;
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" aria-label={`${site.name} ホーム`}>
            <Wordmark />
          </Link>
          <p className={styles.tag}>{site.tagline.join(' / ')}</p>
        </div>

        <nav className={styles.nav} aria-label="フッターナビゲーション">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.en}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.info}>
          <p>{fullAddress}</p>
          <p>
            {site.access.stations.join('・')} {site.access.walk}
          </p>
          <ul className={styles.sns}>
            <li>
              <a href={official.url} target="_blank" rel="noopener noreferrer">
                Instagram <i>@{official.handle}</i>
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </li>
            <li>
              <a href={personal.url} target="_blank" rel="noopener noreferrer">
                {personal.label} <i>@{personal.handle}</i>
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copy}>
        <small>© {site.name}</small>
      </p>
    </footer>
  );
}
