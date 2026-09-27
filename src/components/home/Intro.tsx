import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import { intro } from '@/content/copy';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={`${styles.intro} container`} aria-labelledby="intro-title">
      <div className={styles.inner}>
        <h2 id="intro-title" className={`${styles.vertical} reveal`}>
          {intro.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className={styles.text}>
          <SectionLabel no="01">Introduction</SectionLabel>
          <p className={`${styles.lead} pre reveal`}>{intro.lead}</p>
          <p className="body-text reveal">{intro.body}</p>
          <TextLink href="/about" className={styles.link}>
            MayuMelについて
          </TextLink>
        </div>
      </div>
    </section>
  );
}
