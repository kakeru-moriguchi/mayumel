import { site } from '@/config/site';
import styles from './InstagramButton.module.css';

type Props = {
  children?: React.ReactNode;
  /** dm: DM を直接開く / profile: プロフィールを開く */
  to?: 'dm' | 'profile';
  tone?: 'ink' | 'paper';
  className?: string;
};

/** Instagram への主導線（MayuMel 公式アカウント） */
export default function InstagramButton({ children = 'Instagramで相談する', to = 'dm', tone = 'ink', className }: Props) {
  const ig = site.instagram.official;
  return (
    <a
      href={to === 'dm' ? ig.dm : ig.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[tone]} ${className ?? ''}`}
    >
      <span className={styles.meta} aria-hidden="true">
        @{ig.handle}
      </span>
      <span className={styles.label}>{children}</span>
      <span className="sr-only">（Instagram・新しいタブで開きます）</span>
      <span className={styles.arrow} aria-hidden="true" />
    </a>
  );
}
