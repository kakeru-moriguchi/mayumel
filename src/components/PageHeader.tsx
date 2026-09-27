import SectionLabel from './SectionLabel';
import { BreadcrumbJsonLd } from './JsonLd';
import styles from './PageHeader.module.css';

type Props = {
  path: string;
  en: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
};

/** 下層ページの見出し。英字は小さなラベルに留め、和文を h1 にする */
export default function PageHeader({ path, en, title, lead }: Props) {
  return (
    <header className={`${styles.header} container`}>
      <SectionLabel>{en}</SectionLabel>
      <h1 className={`${styles.title} pre`}>{title}</h1>
      {lead && <p className={`${styles.lead} pre`}>{lead}</p>}
      <BreadcrumbJsonLd path={path} />
    </header>
  );
}
