import type { Metadata } from 'next';
import { site } from '@/config/site';

/** 各ページの metadata を統一した形で生成します */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: 'ja_JP',
      type: 'website',
    },
  };
}
