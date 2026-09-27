import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';

export default function NotFound() {
  return (
    <section className="container" style={{ paddingTop: 120, paddingBottom: 200 }}>
      <SectionLabel>404</SectionLabel>
      <h1 className="heading" style={{ marginTop: 24 }}>
        ページが見つかりませんでした。
      </h1>
      <p className="body-text" style={{ margin: '16px 0 32px', color: 'var(--c-ink-soft)' }}>
        お探しのページは移動または削除された可能性があります。
      </p>
      <TextLink href="/">ホームへ戻る</TextLink>
    </section>
  );
}
