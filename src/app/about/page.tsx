import PageHeader from '@/components/PageHeader';
import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import Approach from '@/components/sections/Approach';
import ContactCta from '@/components/sections/ContactCta';
import { intro } from '@/content/copy';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';
import styles from './about.module.css';

export const metadata = pageMetadata({
  title: 'MayuMelについて',
  description:
    'MayuMelは、パティシエ・長谷藍一郎によるデザート制作の屋号です。パフェ、コースデザート、メニュー開発、商品開発を軸に、素材と季節、その場所に合ったデザートを組み立てます。',
  path: '/about',
});

const pillars = [
  {
    en: 'Parfait',
    ja: 'パフェ',
    text: 'グラスの中に、素材と季節を重ねる。ひと口ごとに移り変わる味わいを組み立てます。',
  },
  {
    en: 'Dessert',
    ja: 'コースデザート',
    text: 'コースの流れの中で供されるひと皿。料理とのつながりや提供シーンを踏まえて考えます。',
  },
  {
    en: 'Menu Development',
    ja: 'メニュー開発・商品開発',
    text: '店舗のデザートメニューや、ブランドの商品として届けるデザートを開発します。',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader path="/about" en="About" title={intro.lead} />

      <section className={`${styles.statement} container`} aria-labelledby="about-name">
        <div className={`${styles.photo} reveal`}>
          <Photo name="season" sizes="(min-width: 900px) 40vw, 90vw" />
        </div>
        <div className={styles.text}>
          <h2 id="about-name" className={styles.name}>
            {site.name}
            <span>マユメル</span>
          </h2>
          <p className="body-text">{intro.body}</p>
          <p className="body-text">
            現在はフリーランスとして、パフェ・コースデザート・商品開発を中心に、店舗やブランドに合わせたデザート制作を行っています。
          </p>
          <TextLink href="/profile" className={styles.link}>
            長谷 藍一郎のプロフィール
          </TextLink>
        </div>
      </section>

      <section className={`${styles.pillars} container`} aria-labelledby="pillars-title">
        <SectionLabel>What we make</SectionLabel>
        <h2 id="pillars-title" className="sr-only">
          MayuMelの活動
        </h2>
        <ol className={styles.pillarList}>
          {pillars.map((p, i) => (
            <li key={p.en} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <p className={styles.pillarEn} aria-hidden="true">
                {p.en}
              </p>
              <h3 className={styles.pillarJa}>{p.ja}</h3>
              <p className={styles.pillarText}>{p.text}</p>
            </li>
          ))}
        </ol>
        <TextLink href="/service" className={styles.more}>
          できることを見る
        </TextLink>
      </section>

      <Approach />
      <ContactCta />
    </>
  );
}
