import InstagramButton from '@/components/InstagramButton';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import { site } from '@/config/site';
import InstagramFeed from './InstagramFeed';
import styles from './Instagram.module.css';

export default function Instagram({ no }: { no?: string }) {
  const { official, personal } = site.instagram;
  return (
    <section className={`${styles.section} container`} aria-labelledby="instagram-title">
      <div className={styles.main}>
        <SectionLabel no={no}>Instagram</SectionLabel>
        <h2 id="instagram-title" className={`heading ${styles.heading}`}>
          日々のデザートは、Instagramで。
        </h2>
        <a href={official.url} target="_blank" rel="noopener noreferrer" className={`${styles.handle} reveal`}>
          <span className={styles.handleSub}>{official.label} Official</span>
          <span className={styles.handleMain}>@{official.handle}</span>
          <span className="sr-only">（Instagram・新しいタブで開きます）</span>
        </a>
        <p className={styles.text}>作品や制作の様子は、MayuMel公式アカウントでご覧いただけます。</p>
        <div className={styles.actions}>
          <InstagramButton to="profile">Instagramを見る</InstagramButton>
          <TextLink href={official.dm} external>
            DMでお問い合わせ
          </TextLink>
        </div>
      </div>

      <aside className={styles.personal} aria-label="個人アカウント">
        <p className={styles.personalLabel}>Personal</p>
        <p className={styles.personalName}>{personal.label}</p>
        <a href={personal.url} target="_blank" rel="noopener noreferrer" className={styles.personalHandle}>
          @{personal.handle}
          <span className="sr-only">（{personal.label}のInstagram・新しいタブで開きます）</span>
        </a>
      </aside>

      <InstagramFeed className={styles.feed} />
    </section>
  );
}
