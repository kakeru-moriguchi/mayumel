import InstagramButton from '@/components/InstagramButton';
import SectionLabel from '@/components/SectionLabel';
import { contact } from '@/content/copy';
import styles from './ContactCta.module.css';

/** 締めの問い合わせ導線。HOME と各ページ末尾で共用 */
export default function ContactCta({ no, id = 'contact-title' }: { no?: string; id?: string }) {
  return (
    <section className={`${styles.section} container`} aria-labelledby={id}>
      <div className={styles.inner}>
        <SectionLabel no={no}>Contact</SectionLabel>
        <h2 id={id} className={`${styles.heading} pre reveal`}>
          {contact.heading}
        </h2>
        <p className={styles.sub}>{contact.sub}</p>
        <div className={styles.action}>
          <InstagramButton />
        </div>
      </div>
    </section>
  );
}
