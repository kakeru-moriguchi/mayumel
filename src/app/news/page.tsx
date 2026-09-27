import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { site } from '@/config/site';
import { getNewsList } from '@/lib/news';
import { pageMetadata } from '@/lib/metadata';
import styles from './news.module.css';

export const metadata = pageMetadata({
  title: 'お知らせ',
  description: 'MayuMelからのお知らせ。',
  path: '/news',
});

/** お知らせ一覧（site.features.news が true のときだけ公開） */
export default async function NewsPage() {
  if (!site.features.news) notFound();
  const posts = await getNewsList();
  return (
    <>
      <PageHeader path="/news" en="News" title="お知らせ" />
      <section className={`${styles.list} container`} aria-label="お知らせ一覧">
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/news/${p.slug}`}>
                <time dateTime={p.date}>{p.date.replace(/-/g, '.')}</time>
                <span>{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
