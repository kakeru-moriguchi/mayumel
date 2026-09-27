import Link from 'next/link';
import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import { services } from '@/content/copy';
import styles from './ServiceSection.module.css';

export default function ServiceSection() {
  return (
    <section className={`${styles.section} container`} aria-labelledby="service-title">
      <div className={styles.aside}>
        <div className={styles.sticky}>
          <SectionLabel no="03">Service</SectionLabel>
          <h2 id="service-title" className={`heading ${styles.heading}`}>
            できること
          </h2>
          <div className={`${styles.photo} reveal`}>
            <Photo name="serviceVisual" ratioSp="3/2" sizes="(min-width: 900px) 30vw, 100vw" />
          </div>
        </div>
      </div>

      <ol className={styles.list}>
        {services.map((s) => (
          <li key={s.no} className="reveal">
            <Link href={`/service#${s.id}`} className={styles.row}>
              <span className={styles.no}>{s.no}</span>
              <span className={styles.titles}>
                <span className={styles.ja}>{s.ja}</span>
                <span className={styles.en}>{s.en}</span>
              </span>
              <span className={styles.summary}>{s.summary}</span>
            </Link>
          </li>
        ))}
      </ol>

      <div className={styles.more}>
        <TextLink href="/service">できることを詳しく見る</TextLink>
      </div>
    </section>
  );
}
