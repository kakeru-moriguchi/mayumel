import { site, fullAddress, mapsSearchUrl } from '@/config/site';
import TextLink from '@/components/TextLink';
import styles from './AccessInfo.module.css';

/**
 * 所在地などの情報リスト。値が null の項目（未定）は表示しません。
 */
export default function AccessInfo({ showTel = true }: { showTel?: boolean }) {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: '所在地', value: fullAddress.replace(' ', '\n') },
    {
      label: '最寄駅',
      value: `${site.access.stations.join('\n')}\n${site.access.walk}`,
    },
    { label: '駐車場', value: site.access.parking },
  ];
  if (site.hours) rows.push({ label: '営業時間', value: site.hours });
  if (site.holiday) rows.push({ label: '定休日', value: site.holiday });
  if (showTel) {
    rows.push({
      label: '電話',
      value: <a href={`tel:${site.contact.tel.replace(/-/g, '')}`}>{site.contact.tel}</a>,
    });
  }
  if (site.contact.email) {
    rows.push({ label: 'メール', value: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> });
  }

  return (
    <div>
      <dl className={styles.list}>
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd className="pre">{row.value}</dd>
          </div>
        ))}
      </dl>
      <TextLink href={mapsSearchUrl} external className={styles.map}>
        Google マップで開く
      </TextLink>
    </div>
  );
}
