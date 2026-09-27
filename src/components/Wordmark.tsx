import Image from 'next/image';
import { site } from '@/config/site';
import styles from './Wordmark.module.css';

/**
 * ロゴ。site.logo.src が設定されていればロゴ画像、未設定なら文字組みのワードマーク。
 */
export default function Wordmark({ className, size = 'm' }: { className?: string; size?: 's' | 'm' }) {
  if (site.logo.src) {
    return (
      <Image
        src={site.logo.src}
        alt={site.name}
        width={site.logo.width}
        height={site.logo.height}
        className={`${styles.logo} ${className ?? ''}`}
        priority
      />
    );
  }
  return (
    <span className={`${styles.word} ${styles[size]} ${className ?? ''}`}>
      Mayu<i>Mel</i>
    </span>
  );
}
