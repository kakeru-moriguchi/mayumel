import Photo from '@/components/Photo';
import { site } from '@/config/site';
import styles from './Hero.module.css';

/** ファーストビュー：写真・ロゴ・3語のみ */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.photo}>
        <Photo name="hero" priority sizes="(min-width: 900px) 60vw, 100vw" ratio="4/5" ratioSp="4/5" labelTop />
      </div>

      <div className={styles.text}>
        <p className={styles.meta}>
          <span>Dessert Creator</span>
          <span>/ Pâtissier</span>
        </p>

        <h1 id="hero-title" className={styles.title}>
          <span className="sr-only">
            {site.name}（マユメル） — パティシエ {site.owner.name} のパフェ・コースデザート・商品開発
          </span>
          <span aria-hidden="true" className={`${styles.word} reveal`}>
            Mayu<i>Mel</i>
          </span>
        </h1>

        <ul className={`${styles.tagline} reveal`} style={{ '--delay': '0.25s' } as React.CSSProperties}>
          {site.tagline.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <p className={styles.place} aria-hidden="true">
        Shibuya, Tokyo
      </p>
    </section>
  );
}
