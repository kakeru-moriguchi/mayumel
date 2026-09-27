import PageHeader from '@/components/PageHeader';
import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import InstagramButton from '@/components/InstagramButton';
import { services, audiences, flow } from '@/content/copy';
import { pageMetadata } from '@/lib/metadata';
import styles from './service.module.css';

export const metadata = pageMetadata({
  title: 'できること — パフェ制作・コースデザート・メニュー開発・商品開発',
  description:
    'MayuMelがお受けしている制作内容。パフェ制作、コースデザート制作、メニュー開発、商品開発、店舗・ブランドに合わせたデザート提案。ご相談はInstagram DMから。',
  path: '/service',
});

export default function ServicePage() {
  return (
    <>
      <PageHeader
        path="/service"
        en="Service"
        title="できること"
        lead={'パフェ、コースデザート、メニュー開発、商品開発。\n店舗やブランド、提供される場面に合わせて、デザートを組み立てます。'}
      />

      {/* 目次 */}
      <nav className={`${styles.toc} container`} aria-label="サービス一覧">
        <ol>
          {services.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span>{s.no}</span>
                {s.ja}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className={styles.list}>
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`${styles.item} ${styles[`v${i}`]} container`}
            aria-labelledby={`${s.id}-title`}
          >
            <div className={`${styles.photo} reveal`}>
              <Photo name={s.image} sizes="(min-width: 900px) 45vw, 100vw" />
            </div>
            <div className={styles.text}>
              <p className={styles.no}>
                {s.no}
                <span>{s.en}</span>
              </p>
              <h2 id={`${s.id}-title`} className={styles.title}>
                {s.ja}
              </h2>
              <p className={styles.summary}>{s.summary}</p>
              <p className="body-text">{s.body}</p>
              <ul className={styles.items}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.audience} aria-labelledby="audience-title">
        <div className="container">
          <SectionLabel>For</SectionLabel>
          <h2 id="audience-title" className={`heading ${styles.audienceTitle}`}>
            たとえば、
            <br />
            こんなご相談に。
          </h2>
          <ul className={styles.audienceList}>
            {audiences.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.flow} container`} aria-labelledby="flow-title">
        <SectionLabel>Flow</SectionLabel>
        <h2 id="flow-title" className={`heading ${styles.flowTitle}`}>
          ご相談の流れ
        </h2>
        <ol className={styles.flowList}>
          {flow.map((f) => (
            <li key={f.no}>
              <span className={styles.flowNo}>{f.no}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ol>
        <div className={styles.flowCta}>
          <InstagramButton>制作について相談する</InstagramButton>
        </div>
      </section>
    </>
  );
}
