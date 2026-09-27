import PageHeader from '@/components/PageHeader';
import InstagramButton from '@/components/InstagramButton';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import { site } from '@/config/site';
import { contact, dmChecklist, flow } from '@/content/copy';
import { pageMetadata } from '@/lib/metadata';
import styles from './contact.module.css';

export const metadata = pageMetadata({
  title: 'お問い合わせ',
  description:
    'パフェ制作、コースデザート、メニュー開発、商品開発のご相談は、MayuMel公式InstagramのDMよりお問い合わせください。',
  path: '/contact',
});

export default function ContactPage() {
  const { official, personal } = site.instagram;
  return (
    <>
      <PageHeader
        path="/contact"
        en="Contact"
        title="お問い合わせ"
        lead={`${contact.heading.replace('\n', '')}\n${contact.sub}`}
      />

      <section className={`${styles.main} container`} aria-labelledby="dm-title">
        <div className={styles.dm}>
          <h2 id="dm-title" className={styles.dmTitle}>
            <span>Instagram DM</span>
            {official.label} 公式アカウント
          </h2>
          <p className={styles.handle}>@{official.handle}</p>
          <InstagramButton className={styles.button} />
          <p className={styles.small}>
            ボタンを押すと Instagram の DM 画面が開きます。
            <br />
            開かない場合は{' '}
            <a href={official.url} target="_blank" rel="noopener noreferrer">
              プロフィール
              <span className="sr-only">（新しいタブで開きます）</span>
            </a>{' '}
            の「メッセージ」からお送りください。
          </p>
        </div>

        <div className={styles.check}>
          <SectionLabel>Message</SectionLabel>
          <h2 className={`heading ${styles.checkTitle}`}>DM でお伝えいただきたいこと</h2>
          <ul className={styles.checkList}>
            {dmChecklist.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className={styles.small}>分かる範囲で構いません。</p>
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
              <span>{f.no}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${styles.other} container`} aria-labelledby="other-title">
        <h2 id="other-title" className={styles.otherTitle}>
          その他の連絡先
        </h2>
        <dl className={styles.otherList}>
          <div>
            <dt>{personal.label}（個人）</dt>
            <dd>
              <TextLink href={personal.url} external>
                Instagram @{personal.handle}
              </TextLink>
            </dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>
              <a href={`tel:${site.contact.tel.replace(/-/g, '')}`}>{site.contact.tel}</a>
            </dd>
          </div>
          {site.contact.email && (
            <div>
              <dt>メール</dt>
              <dd>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </dd>
            </div>
          )}
        </dl>
      </section>
    </>
  );
}
