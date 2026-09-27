import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import AccessInfo from '@/components/sections/AccessInfo';
import MapEmbed from '@/components/sections/MapEmbed';
import styles from './AccessSection.module.css';

export default function AccessSection() {
  return (
    <section className={`${styles.section} container`} aria-labelledby="access-title">
      <div className={styles.info}>
        <SectionLabel no="07">Access</SectionLabel>
        <h2 id="access-title" className={`heading ${styles.heading}`}>
          代々木八幡・代々木公園
        </h2>
        <AccessInfo showTel={false} />
      </div>
      <div className={`${styles.visual} reveal`}>
        <Photo name="place" sizes="(min-width: 900px) 48vw, 100vw" />
        <MapEmbed className={styles.map} />
      </div>
    </section>
  );
}
