import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SectionLabel from '@/components/SectionLabel';
import TextLink from '@/components/TextLink';
import { site } from '@/config/site';
import { getNewsList, getNewsPost } from '@/lib/news';
import styles from '../news.module.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  if (!site.features.news) return [];
  return (await getNewsList()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getNewsPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.body[0]?.slice(0, 110),
    alternates: { canonical: `/news/${post.slug}` },
  };
}

export default async function NewsPostPage({ params }: Props) {
  if (!site.features.news) notFound();
  const post = await getNewsPost((await params).slug);
  if (!post) notFound();
  return (
    <article className={`${styles.article} container`}>
      <SectionLabel>News</SectionLabel>
      <time dateTime={post.date} className={styles.date}>
        {post.date.replace(/-/g, '.')}
      </time>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.body}>
        {post.body.map((p) => (
          <p key={p} className="body-text">
            {p}
          </p>
        ))}
      </div>
      <TextLink href="/news">お知らせ一覧へ</TextLink>
    </article>
  );
}
