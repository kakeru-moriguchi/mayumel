import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import GalleryGrid from '@/components/sections/GalleryGrid';
import { site } from '@/config/site';
import { getWorks } from '@/lib/works';
import styles from './WorksSection.module.css';

export default function WorksSection() {
  const items = getWorks((w) => !!w.featured);
  return (
    <section className={styles.section} aria-labelledby="works-title">
      <div className="container">
        <header className={styles.head}>
          <div>
            <SectionLabel no="04">Works</SectionLabel>
            <h2 id="works-title" className={`heading ${styles.heading}`}>
              制作実績
            </h2>
          </div>
          <p className={styles.lead}>
            パフェ、コースデザート、
            <br />
            メニュー開発、商品開発。
          </p>
        </header>

        <GalleryGrid items={items} />

        <div className={styles.links}>
          <TextLink href="/works">作品をすべて見る</TextLink>
          <TextLink href={site.instagram.official.url} external>
            最新の作品を Instagram で見る
          </TextLink>
        </div>
      </div>
    </section>
  );
}
