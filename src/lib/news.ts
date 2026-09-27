import { news, type NewsPost } from '@/content/news';

/** お知らせ一覧（新しい順）。CMS 導入時はこの関数の中身だけを差し替えます */
export async function getNewsList(): Promise<NewsPost[]> {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getNewsPost(slug: string): Promise<NewsPost | undefined> {
  return news.find((n) => n.slug === slug);
}
