import Photo from '@/components/Photo';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import { site } from '@/config/site';
import { profile } from '@/content/copy';
import styles from './ProfileSection.module.css';

export default function ProfileSection() {
  return (
    <section className={`${styles.section} container`} aria-labelledby="profile-title">
      <div className={styles.photos}>
        <div className={`${styles.portrait} reveal`}>
          <Photo name="portrait" sizes="(min-width: 900px) 36vw, 82vw" />
        </div>
        <div className={`${styles.sub} reveal`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <Photo name="studio" sizes="(min-width: 900px) 18vw, 44vw" />
        </div>
      </div>

      <div className={styles.text}>
        <SectionLabel no="02">Profile</SectionLabel>
        <h2 id="profile-title" className={styles.name}>
          {site.owner.name}
          <span className={styles.title}>{site.owner.title}</span>
        </h2>
        <p className={`${styles.lead} pre reveal`}>{profile.lead}</p>

        <dl className={`${styles.exp} reveal`}>
          {profile.experience.map((e) => (
            <div key={e.place}>
              <dt>{e.place}</dt>
              <dd>{e.role}</dd>
            </div>
          ))}
        </dl>

        <p className="body-text reveal">{profile.body[2]}</p>

        <TextLink href="/profile" className={styles.link}>
          プロフィールを読む
        </TextLink>
      </div>
    </section>
  );
}
