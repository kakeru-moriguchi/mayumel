import { site } from '@/config/site';
import styles from './MapEmbed.module.css';

/**
 * Google マップ埋め込み。site.map.embedUrl が設定されたときだけ表示されます。
 */
export default function MapEmbed({ className }: { className?: string }) {
  if (!site.map.embedUrl) return null;
  return (
    <div className={`${styles.map} ${className ?? ''}`}>
      <iframe
        src={site.map.embedUrl}
        title={`${site.name} の地図`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
