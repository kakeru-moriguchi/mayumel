import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import { approach } from '@/content/copy';
import styles from './Approach.module.css';

/** 考え方（素材 → 組み立て → 盛り付け → 提供シーン）。HOME と ABOUT で共用 */
export default function Approach({ no, headingId = 'approach-title' }: { no?: string; headingId?: string }) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <SectionLabel no={no} tone="paper">
            Approach
          </SectionLabel>
          <h2 id={headingId} className={`heading pre ${styles.heading}`}>
            {approach.heading}
          </h2>
        </div>
        <p className={`${styles.lead} reveal`}>{approach.lead}</p>

        <ol className={styles.steps}>
          {approach.steps.map((step, i) => (
            <li
              key={step.no}
              className={`${styles.step} reveal`}
              style={{ '--i': i, '--delay': `${i * 0.12}s` } as React.CSSProperties}
            >
              <span className={styles.no}>{step.no}</span>
              <h3 className={styles.ja}>{step.ja}</h3>
              <p className={styles.en}>{step.en}</p>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={`${styles.photo} reveal`}>
          <Photo name="ingredient" sizes="(min-width: 900px) 40vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
