import PageHeader from '@/components/PageHeader';
import Photo from '@/components/Photo';
import AccessInfo from '@/components/sections/AccessInfo';
import MapEmbed from '@/components/sections/MapEmbed';
import ContactCta from '@/components/sections/ContactCta';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';
import styles from './access.module.css';

export const metadata = pageMetadata({
  title: 'アクセス — 代々木八幡・代々木公園',
  description: `MayuMelの所在地。東京都渋谷区上原1丁目1-20 JPビル2階。${site.access.stations.join('・')}より${site.access.walk}。`,
  path: '/access',
});

export default function AccessPage() {
  return (
    <>
      <PageHeader
        path="/access"
        en="Access"
        title="代々木八幡・代々木公園"
        lead={`${site.access.stations.join('・')}より${site.access.walk}。`}
      />

      <section className={`${styles.section} container`} aria-label="所在地">
        <div className={`${styles.photo} reveal`}>
          <Photo name="place" sizes="(min-width: 900px) 55vw, 100vw" ratioSp="4/5" />
        </div>
        <div className={styles.info}>
          <AccessInfo />
          <p className={styles.note}>
            ご相談・お問い合わせは、Instagram DM でお受けしています。
          </p>
        </div>
        <MapEmbed className={styles.map} />
      </section>

      <ContactCta />
    </>
  );
}
