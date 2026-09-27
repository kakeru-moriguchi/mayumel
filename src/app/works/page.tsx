import PageHeader from '@/components/PageHeader';
import TextLink from '@/components/TextLink';
import ContactCta from '@/components/sections/ContactCta';
import { site } from '@/config/site';
import { getWorks } from '@/lib/works';
import { pageMetadata } from '@/lib/metadata';
import WorksFilter from './WorksFilter';
import styles from './works.module.css';

export const metadata = pageMetadata({
  title: '制作実績 — パフェ・コースデザート・商品開発',
  description: 'MayuMel（パティシエ 長谷藍一郎）が制作したパフェ、コースデザート、メニュー開発、商品開発の作品。',
  path: '/works',
});

export default function WorksPage() {
  const items = getWorks();
  return (
    <>
      <PageHeader path="/works" en="Works" title="制作実績" lead={'パフェ、コースデザート、\nメニュー開発、商品開発。'} />

      <section className={`${styles.gallery} container`} aria-label="作品一覧">
        <WorksFilter items={items} />
        <div className={styles.instagram}>
          <p>最新の作品は、Instagram で更新しています。</p>
          <TextLink href={site.instagram.official.url} external>
            @{site.instagram.official.handle} を見る
          </TextLink>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
