/**
 * お知らせ（将来用）。
 *
 * 現在は未使用です（site.features.news = false）。
 * 公開する場合は、ここに記事を追加して features.news を true にしてください。
 * 記事が増えてきたら、lib/news.ts の取得先を microCMS 等の CMS に差し替えるだけで移行できます。
 */
export type NewsPost = {
  slug: string;
  title: string;
  /** YYYY-MM-DD */
  date: string;
  /** 段落ごとの本文 */
  body: string[];
  category?: string;
};

export const news: NewsPost[] = [];
