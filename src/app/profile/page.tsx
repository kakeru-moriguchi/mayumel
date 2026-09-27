import PageHeader from '@/components/PageHeader';
import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import ContactCta from '@/components/sections/ContactCta';
import { site } from '@/config/site';
import { profile } from '@/content/copy';
import { pageMetadata } from '@/lib/metadata';
import styles from './profile.module.css';

export const metadata = pageMetadata({
  title: 'プロフィール — 長谷藍一郎',
  description:
    'パティシエ・長谷藍一郎のプロフィール。大阪調理製菓専門学校卒業後、パティスリー、菓子製造、パフェ専門店、レストランで経験を重ね、シェフパティシエとしてコースデザート、パフェの構成、メニュー開発、商品開発に携わる。',
  path: '/profile',
});

export default function ProfilePage() {
  const personal = site.instagram.personal;
  return (
    <>
      <PageHeader path="/profile" en="Profile" title={profile.lead} />

      <section className={`${styles.intro} container`} aria-labelledby="profile-name">
        <div className={styles.portrait}>
          <Photo name="portrait" priority sizes="(min-width: 900px) 42vw, 100vw" />
        </div>

        <div className={styles.text}>
          <h2 id="profile-name" className={styles.name}>
            {site.owner.name}
            {site.owner.nameEn && <span className={styles.nameEn}>{site.owner.nameEn}</span>}
          </h2>
          <p className={styles.role}>{site.owner.title}</p>

          <div className={styles.body}>
            {profile.body.map((p) => (
              <p key={p} className="body-text">
                {p}
              </p>
            ))}
          </div>

          <h3 className={styles.subhead}>これまでの経験</h3>
          <dl className={styles.exp}>
            {profile.experience.map((e) => (
              <div key={e.place}>
                <dt>{e.place}</dt>
                <dd>{e.role}</dd>
              </div>
            ))}
          </dl>

          <p className={styles.ig}>
            <span>Personal Instagram</span>
            <TextLink href={personal.url} external>
              @{personal.handle}
            </TextLink>
          </p>
        </div>
      </section>

      <section className={styles.fields} aria-labelledby="fields-title">
        <div className="container">
          <SectionLabel>Fields</SectionLabel>
          <h2 id="fields-title" className={`heading ${styles.fieldsTitle}`}>
            携わってきた領域
          </h2>
          <ol className={styles.fieldList}>
            {profile.fields.map((f, i) => (
              <li key={f.en} className="reveal">
                <span className={styles.fieldNo}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.fieldJa}>
                  {f.ja}
                  <span>{f.en}</span>
                </h3>
                <p className={styles.fieldText}>{f.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.thought} container`} aria-labelledby="thought-title">
        <div className={`${styles.thoughtPhoto} reveal`}>
          <Photo name="hands" sizes="(min-width: 900px) 55vw, 100vw" />
        </div>
        <div className={styles.thoughtText}>
          <SectionLabel>Thought</SectionLabel>
          <h2 id="thought-title" className={`heading pre ${styles.thoughtTitle}`}>
            {profile.thought.heading}
          </h2>
          {profile.thought.body.map((p) => (
            <p key={p} className="body-text">
              {p}
            </p>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
