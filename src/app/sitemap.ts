import type { MetadataRoute } from 'next';
import { navigation, site } from '@/config/site';
import { getNewsList } from '@/lib/news';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = navigation.map((n) => ({
    url: `${site.url}${n.href === '/' ? '' : n.href}`,
    changeFrequency: n.href === '/works' ? 'weekly' : 'monthly',
    priority: n.href === '/' ? 1 : 0.7,
  }));
  if (site.features.news) {
    const posts = await getNewsList();
    pages.push(...posts.map((p) => ({ url: `${site.url}/news/${p.slug}`, lastModified: p.date, priority: 0.5 })));
  }
  return pages;
}
