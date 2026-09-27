import { site, navigation } from '@/config/site';

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

/** 屋号と人物の構造化データ（未定の項目は出力しない） */
export function SiteJsonLd() {
  const person = {
    '@type': 'Person',
    '@id': `${site.url}/profile#person`,
    name: site.owner.name.replace(/\s/g, ''),
    ...(site.owner.nameEn ? { alternateName: site.owner.nameEn } : {}),
    jobTitle: 'パティシエ',
    url: `${site.url}/profile`,
    sameAs: [site.instagram.personal.url],
    worksFor: { '@id': `${site.url}/#organization` },
  };
  const org = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    telephone: site.contact.tel,
    ...(site.contact.email ? { email: site.contact.email } : {}),
    address: {
      '@type': 'PostalAddress',
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressLocality: site.address.locality,
      streetAddress: `${site.address.street} ${site.address.building}`,
      addressCountry: 'JP',
    },
    founder: { '@id': `${site.url}/profile#person` },
    sameAs: [site.instagram.official.url],
    knowsAbout: ['パフェ', 'コースデザート', 'メニュー開発', '商品開発'],
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'ja',
    publisher: { '@id': `${site.url}/#organization` },
  };
  return <Script data={{ '@context': 'https://schema.org', '@graph': [website, org, person] }} />;
}

/** パンくずの構造化データ */
export function BreadcrumbJsonLd({ path }: { path: string }) {
  const item = navigation.find((n) => n.href === path);
  if (!item) return null;
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: item.ja, item: `${site.url}${item.href}` },
        ],
      }}
    />
  );
}
